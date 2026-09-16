/**
 * search.js — 指南站内搜索（替换 app.js 里的「整串子串匹配」）
 *
 * 旧实现的问题（tools/bench_search.js 实测 recall@1 29% / recall@3 58%，
 * 31 条真实查询里 10 条 0 结果）：
 *   1. 只做 `haystack.includes(整串查询)` → 「银行 开户」这类多词查询必然 0 结果
 *   2. 结果按目录顺序排 → 搜「手机」时 guide-phone 排第 4，前面是 entry/residence
 *   3. 无字段权重 → 标题命中与表格角落命中同权
 *   4. 无同义词 → 正文写「診療所」，搜「医院」就是 0 条
 *   5. 短英文词无边界的 includes → 搜「SIM」把 similar/assistant 全捞进来
 *
 * 本实现：
 *   · 归一化：NFKC（全角→半角）＋ 大小写 ＋ 片假名→平假名（「ガッコウ」也能搜到）
 *   · 分词：按空白分词；多词走 AND，AND 无结果再退化（同义词 AND → OR）
 *   · 字段权重 ＋ 标题/标签/小标题强信号加成 ＋ 长字段饱和上限
 *   · 短拉丁词强制词边界，抑制噪音
 *   · 返回命中词，供 UI 高亮
 *
 * 设计要点（都来自基准测试暴露的失败）：
 *   - **标题加成必须有**：不然「手机·网络」会被正文里提了 5 次手机的交通篇压掉
 *   - **长字段要饱和**：正文命中次数封顶，否则「正文提到 3 次」就能压过「标题命中」
 *   - **别名只在字面失败时启用**，且打折；单字别名（熱/热）一律不收 —— 太泛
 *
 * 用法：
 *   GuideSearch.build(ARTICLES, { nav, body, langs });
 *   GuideSearch.query('银行 开户', { lang: 'zh', limit: 20 })
 *     → [{ id, score, via, why: { literal: [], alias: [] } }, ...]
 *   译文包到位后调 GuideSearch.reset() 重建索引。
 */
(function (w) {
  'use strict';

  /** 归一化：NFKC → 小写 → 片假名转平假名 → 空白压缩 */
  // ── 无信息量词（助词 / 疑问词 / 冠词 / 介词）────────────────────────────
  // 加它的原因：严格 AND 下，查询里只要有一个词不在正文里 → 整条归零。
  // 「how to open a bank account」里的 to/open 之外的虚词命中不了任何东西，
  // 却和实词一样参与 AND，是「17 篇 = 全站」的成因之一。
  // 语言相关的只有这张表；逻辑（过滤 + 按词计数覆盖率）是同一份。
  const STOP = new Set([
    '的','了','是','在','有','和','就','不','也','都','很','把','被','给','对','从','到',
    '怎么','怎样','如何','什么','哪些','哪个','哪里','吗','呢','请问','的话','可以','能','要','想','应该','一下',
    'の','は','が','を','に','で','と','も','から','まで','へ','や','か','ね','よ',
    'です','ます','する','した','して','こと','もの','ため','って','ば','たら','なら',
    'どの','どれ','なに','なん','どう','どこ','いつ','なぜ','いくら',
    'a','an','the','of','to','in','on','at','for','and','or','is','are','am','was','were','be','been',
    'do','does','did','how','what','when','where','which','who','whose','why','my','your','his','her',
    'i','you','he','she','it','we','they','this','that','these','those','can','could','should','would',
    'will','may','might','must','not','no','so','if','as','by','with','about','into',
    '은','는','이','가','을','를','에','에서','와','과','의','로','으로','도','만','부터','까지','랑','하고',
    '어떻게','무엇','뭐','어디','언제','왜','얼마','입니다','합니다','있습니다','없습니다','하다','했다','하는',
  ]);

  /** 把 CJK 长词拆成 bigram 子词。
      为什么需要：中文/日文查询**没有词边界**，「打工超时」整个词在正文里不存在，
      严格命中的三层全部落空 → 0 篇。而它其实含「打工」「超时」两个正文里有的词。
      成熟做法（lunr-languages 等）就是 bigram 切分；这里作为**最后一层兜底**，
      只在前三层全空时启用，不动既有行为。
      2 字词不拆 —— 它本身已是最小区分单元（「感冒」「打工」都直接命中）。 */
  const RE_CJK = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;
  // 助词/结构助词单字：出现在 bigram 里就说明它是跨词碎片
  const PARTICLE = new Set([...'のはがをにでとへやかねよものりするで', '了', '吗', '呢', '的', '着', '过']);
  /** 找出**词表里出现在查询中的键**。
      为什么需要：CJK 查询没有词边界，同义表拿到的是整块「風邪をひいたら」，
      表里当然没有这个键 —— 于是 alias 层永远不命中，只能落到 bigram 兜底，
      用「ひい」「いた」这类碎片凑出 10 篇噪声。
      反过来做：看表里的键是否**出现在查询里**。用的是人写的词表，比 bigram 精确得多。
      只取长度 ≥2 的键，避免单字误命中。 */
  function keysInQuery(s) {
    const out = [];
    for (const k of ALIAS_OF.keys()) if (k.length >= 2 && s.includes(k)) out.push(k);
    for (const k of REL_OF.keys()) if (k.length >= 2 && s.includes(k)) out.push(k);
    return [...new Set(out)];
  }

  function bigrams(t) {
    // 只对 CJK 生效。拉丁字母/谚文有词边界（空格），bigram 只会把
    // "sick" 切成 si/ic/ck 这种任何正文里都有的垃圾，把结果集撑爆。
    if (!RE_CJK.test(t)) return [];
    const cs = [...t];
    if (cs.length < 3) return [];
    const out = [];
    for (let i = 0; i + 1 < cs.length; i++) {
      const b = cs[i] + cs[i + 1];
      if (STOP.has(b)) continue;
      // 含助词的 bigram 一律丢：日文的 の/は/が/を… 与中文的 了/吗/呢 极少出现在
      // 实词内部，跨词碎片（「座の」「の作」）留在候选里只会撑大分母、拉低精度。
      if ([...b].some(ch => PARTICLE.has(ch))) continue;
      out.push(b);
    }
    return [...new Set(out)];
  }

  function norm(s) {
    return String(s == null ? '' : s)
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60))
      .replace(/[\s\u3000]+/g, ' ')
      .trim();
  }

  /* 同义词 / 关联词组：一组之内互相等价。
     ⚠️ 只收「长度 ≥2 且语义聚焦」的词 —— 单字别名（熱/热）会把半个站都捞进来。

     表的覆盖度直接决定「关联搜索」的成功率：字面不在语料里的词（吃药、找房子、养老金…）
     没有任何语料统计方法能推出来，只能靠这张表把它们接到语料里实际使用的说法上。
     扩充依据 = tools/probe_related.js 逐条确认「该词字面确实不在正文里」的用例。 */
  const ALIAS_GROUPS = [
    ['手机', '携帯', 'けいたい', 'スマホ', 'スマートフォン', 'mobile', 'phone', 'sim', '格安sim',
      '手机卡', '电话卡', '接続', '套餐', 'プラン', '料金プラン', 'ギガ', 'データ通信'],
    ['銀行', '银行', '口座', 'bank', 'account', '开户', '開設', 'ゆうちょ', '福岡銀行', '西日本シティ',
      '送金', '汇款', '振込', 'remittance', '国際送金', 'atm', 'キャッシュカード'],
    ['网络', 'ネット', 'wifi', '无线网', '上网', '流量', 'インターネット'],
    ['医院', '医療', '病院', '診療所', 'クリニック', '医療機関', 'hospital', 'clinic', '看病', '就医',
      '就诊', '受診',
      // 2026-09 补：读者说症状，正文写「体調不良」—— 两边都进组才能接上。
      // 实测缺这批词时，「風邪をひいたら」返回 10 篇噪声（靠「ひい」「いた」这类
      // bigram 碎片凑出来的），而正确的医疗篇根本不在结果里。
      '風邪', 'かぜ', '体調不良', '具合', '症状', '病気', '医者', '医生', '大夫', '診察',
      'sick', 'ill', 'unwell', 'symptom', 'doctor', 'feeling unwell',
      '아프다', '아픈', '아플', '아픔', '증상', '의사'],
    ['发烧', '発熱', '发热', 'fever', '体温', '生病', '感冒', 'かぜ気味'],
    ['保险', '保険', 'insurance', '健康保険', '国保', '国民健康保険', '医療保険'],
    ['打工', 'アルバイト', 'バイト', 'part-time', 'parttime', '兼职', '資格外活動'],
    ['奖学金', '奨学金', 'scholarship', '장학금', '国费', '国費', '学習奨励費', '财团', '给付',
      '免除', '減免', '授業料'],
    ['租房', '住まい', '部屋', 'アパート', 'housing', '賃貸', '礼金', '敷金', '寮', '宿舍',
      'ドミトリー', '入居', '契約', '大家', '不動産'],
    ['在留', '在留カード', '在留卡', 'residence', 'ビザ', 'visa', '签证', '在留資格', '更新',
      '資格外活動許可', '再入国'],
    ['自行车', '自転車', 'bicycle', 'チャリ', '駐輪', '防犯登録'],
    ['地铁', '地下鉄', '電車', 'train', '西鉄', 'バス', 'bus', '公交', 'nimoca', 'はやかけん',
      '交通系ic', 'suica', '乗り換え'],
    ['垃圾', 'ごみ', 'ゴミ', '分別', '粗大'],
    ['地震', '台風', '災害', 'disaster', 'earthquake', '避難', '避难', '灾害', '防災'],
    ['年金', 'pension', '国民年金', '脱退一時金', '保険料'],
    ['税', '税金', 'tax', '住民税', '確定申告', '納税'],
    ['打工投诉', '労働', '労基', '相談', 'ハラスメント'],
    ['打工时间', '資格外活動', '週28時間'],
  ];

  const ALIAS_OF = new Map();               // 归一化词 → Set(同组其它词)
  for (const g of ALIAS_GROUPS) {
    for (const t of g) {
      const k = norm(t);
      if (!ALIAS_OF.has(k)) ALIAS_OF.set(k, new Set());
      for (const o of g) { const ok = norm(o); if (ok !== k) ALIAS_OF.get(k).add(ok); }
    }
  }

  /* 关联词表：**单向**——左边是读者可能输入的词，右边是「语料里实际用来写这件事的词」。
     为什么不能全塞进上面的同义词组：组是互相等价的，把「吃药」加进医院组等于让
     「吃药」也能召回「診療所/受診/クリニック」全部成员，命中数会从 3 篇涨到 12 篇
     （实测过载条数 8 → 15）。单向表只把查询词接到真正相关的几个说法上，精度高得多。

     收录判据（用 tools/probe_related.js / probe_terms.js 逐条确认）：
       ① 左边的词**字面不存在**于任何文章（否则属普通匹配，不需要扩展）
       ② 右边的词**确实存在于**目标文章（否则扩展等于没接上）
     只满足①不满足②的情况 = 站内缺这类内容，应当报给用户，而不是硬加映射。 */
  const RELATED = [
    ['倒垃圾', ['垃圾', 'ごみ', '分別', '収集日']],
    ['退房', ['退去', '解約']],
    ['水电费', ['水电', '光熱費', '電気代', 'ガス代', '水道代']],
    ['吃药', ['医疗', '就医', '就诊', '診療', '受診']],
    ['找房子', ['找房', '看房', '租房', '賃貸', '不動産', '物件']],
    ['火车', ['地铁', '巴士', '定期券', '西鉄']],
    ['高铁', ['地铁', '巴士', '定期券']],
    ['电话卡', ['办卡', '格安sim', '旅行sim', '校园网']],
    ['没信号', ['電波', '校园网']],
    ['报税', ['申报', '申告', '納税']],
    ['打工时间限制', ['週28時間', '資格外活動']],
    ['养老金', ['养老', '年金', '国民年金', '脱退一時金']],
    ['换钱', ['兑换', '現金', 'キャッシュカード']],
    ['开证明', ['证明', '证明书', '発券機', '在学証明書']],
    ['台风', ['台風', '天気']],
    ['转寄邮件', ['転送', '郵便局']],
    ['搬家', ['転入', '転出', '転送']],
  ];
  const REL_OF = new Map();                 // 归一化词 → [归一化目标词]
  for (const [q, ts] of RELATED) REL_OF.set(norm(q), ts.map(norm));

  const isLatin = t => /^[a-z0-9][a-z0-9 .+#-]*$/.test(t);
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /** 出现次数（上限 2 次计入，避免刷分） */
  function count(hay, needle, cap) {
    if (!hay || !needle) return 0;
    let n = 0, i = 0;
    while ((i = hay.indexOf(needle, i)) !== -1) { n++; i += needle.length; if (n >= (cap || 2)) break; }
    return n;
  }

  /** 单字段命中：短拉丁词要求词边界 */
  function hits(field, term) {
    if (!field || !term) return 0;
    if (typeof field !== 'string') return 0;     // entry.f 里还有 _snips 等非文本字段
    if (isLatin(term) && term.length <= 5) {
      const re = new RegExp('(?:^|[^a-z0-9])' + esc(term) + '(?:[^a-z0-9]|$)', 'g');
      return Math.min((field.match(re) || []).length, 2);
    }
    return count(field, term, 2);
  }

  const LANGS = ['zh', 'ja', 'en', 'ko'];
  const LONG_CAP = 8;          // 单个长字段（正文）对一条查询词的贡献上限

  /** 字段权重。当前语言的标题/摘要/正文加权，其它语言只做补充召回。 */
  function weight(fk, lang) {
    if (fk === 't_' + lang) return 10;
    if (fk === 't_all') return 6;
    if (fk === 'tags') return 6;
    if (fk === 'head') return 5;
    if (fk === 's_' + lang) return 4;
    if (fk === 's_all') return 3;
    if (fk === 'body_' + lang) return 2.5;
    if (/^body_/.test(fk)) return 1.5;      // 其它语言正文：补充召回
    if (/^t_/.test(fk)) return 5;
    if (/^s_/.test(fk)) return 2;
    return 0;                               // 未列出的字段不参与打分
  }
  const isLong = fk => /^body/.test(fk);

  let IDX = [];

  function joinBlocks(blocks, acc, headingsOnly) {
    const walk = b => {
      if (!b) return;
      const isHead = b.type === 'heading' || b.type === 'subheading';
      if (b.text) { if (!headingsOnly || isHead) acc.push(b.text); }
      if (b.title && b.type === 'collapse') acc.push(b.title);
      (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
      (b.headers || []).forEach(h => acc.push(h));
      (b.rows || []).forEach(r => acc.push(r.join(' ')));
      (b.blocks || []).forEach(walk);
    };
    (blocks || []).forEach(walk);
    return acc.join(' ');
  }

  function joinTr(m) {
    const acc = [];
    for (const id in m) {
      const v = m[id]; if (!v) continue;
      if (v.text) acc.push(v.text);
      if (v.title) acc.push(v.title);
      (v.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
      (v.headers || []).forEach(h => acc.push(h));
      (v.rows || []).forEach(r => acc.push(r.join(' ')));
    }
    return acc.join(' ');
  }

  /** 收集「可展示的原文片段」（未归一化），用于结果卡片的命中上下文 */
  function collectSnips(blocks, lang, out) {
    const put = txt => {
      // 去掉 markdown 标记：片段是纯文本展示，留着 ** 会在结果卡里原样出现
      const t = String(txt == null ? '' : txt).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
      if (t.length >= 6) out.push({ lang, t: t.slice(0, 96), n: norm(t) });
    };
    const walk = b => {
      if (!b) return;
      if (b.text) put(b.text);
      if (b.title) put(b.title);
      const its = (b.items || []).map(it => it.text || it.title || it.desc).filter(Boolean);
      if (its.length) put(its.join(' / '));
      if (b.headers && b.rows && b.rows.length) put(b.headers.join(' / ') + ' — ' + b.rows[0].join(' / '));
      (b.blocks || []).forEach(walk);
    };
    (blocks || []).forEach(walk);
    return out;
  }

  function build(articles, opt) {
    opt = opt || {};
    const nav = opt.nav || {}, body = opt.body || {};
    const langs = opt.langs || LANGS;
    IDX = (articles || []).map(a => {
      const f = {};
      const nv = nav[a._id] || {};
      const tAcc = [], sAcc = [];
      // ⚠️ articles-i18n.js 的实际是**扁平式** nav[id].title[lang]。
      // 这里两种都读：结构一旦写成别的样子，标题会静默丢失（搜不到、也不报错）。
      const navField = (field, l) =>
        (nv[field] && nv[field][l]) || (nv[l] && nv[l][field]) || '';
      for (const l of langs) {
        const t = norm(navField('title', l) || (l === 'zh' ? a.title : ''));
        const s = norm(navField('summary', l) || (l === 'zh' ? a.summary : ''));
        if (t) { f['t_' + l] = t; tAcc.push(t); }
        if (s) { f['s_' + l] = s; sAcc.push(s); }
      }
      f.t_all = langs.filter(l => l !== 'zh').map(l => f['t_' + l] || '').filter(Boolean).join(' ');
      f.s_all = langs.filter(l => l !== 'zh').map(l => f['s_' + l] || '').filter(Boolean).join(' ');
      f.tags = norm((a.tags || []).join(' '));
      f.head = norm(joinBlocks(a.blocks, [], true));
      // 正文（中文真源）—— 不额外放一份到通用 body，否则同一段文字被算两次
      f.body_zh = norm(joinBlocks(a.blocks, [], false));
      const bmap = body[a._id] || {};
      for (const l of langs) {
        if (l === 'zh') continue;
        const m = bmap[l]; if (!m) continue;
        const s = norm(joinTr(m)); if (!s) continue;
        f['body_' + l] = s;
      }
      // 命中上下文用：中文原文 + 当前语言译文（都保留未归一化文本）
      f._snips = collectSnips(a.blocks, 'zh', []);
      for (const l of langs) {
        const m = bmap[l]; if (!m || l === 'zh') continue;
        for (const id in m) {
          const v = m[id]; if (!v) continue;
          const put = txt => {
            const t = String(txt == null ? '' : txt).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
            if (t.length >= 6) f._snips.push({ lang: l, t: t.slice(0, 96), n: norm(t) });
          };
          if (v.text) put(v.text);
          if (v.title) put(v.title);
          const its = (v.items || []).map(it => it.text || it.title || it.desc).filter(Boolean);
          if (its.length) put(its.join(' / '));
        }
      }
      return { id: a._id, f, _a: a };
    });
    return IDX.length;
  }

  function reset() { IDX = []; DF.clear(); }

  /* 词频权重（IDF）：一个词出现在越多篇文章里，靠它召回的信息量越小。
     「更新」在 6 篇里出现、「光熱費」只在 1 篇 —— 同样命中，后者才是定位信号。
     此前所有同义词一律 ×0.6，于是宽泛词把结果撑到 12〜15 篇（「等于没搜」）。 */
  const DF = new Map();
  function dfOf(term) {
    if (DF.has(term)) return DF.get(term);
    let n = 0;
    for (const e of IDX) {
      for (const fk in e.f) {
        const v = e.f[fk];
        if (typeof v !== 'string' || !v) continue;      // 跳过 _snips 等非文本字段
        if (hits(v, term) > 0) { n++; break; }
      }
    }
    DF.set(term, n);
    return n;
  }
  /** (0,1]：只出现在 1 篇 → 1.0；出现在全部文章 → 约 0.24 */
  function idf(term) {
    const n = IDX.length || 1, d = dfOf(term) || 1;
    return Math.log(1 + n / d) / Math.log(1 + n);
  }

  /* ── 模糊匹配 ─────────────────────────────────────────────────
     读者会把「在留カード」打成「在留カド」、「口座」打成「口坐」，
     字面匹配一律 0 结果（实测 10 条错字用例全部 0 命中）。
     做法：不求索引、查询时现扫 —— 语料只有十几篇，扫一遍远比维护
     一份 bigram 倒排索引省内存（那份索引在手机上要几十 MB）。 */

  /** 受限编辑距离：超过 max 立刻返回 max+1（提前退出让扫描足够快） */
  function editDist(a, b, max) {
    if (a === b) return 0;
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > max) return max + 1;
    let prev = new Array(lb + 1), cur = new Array(lb + 1);
    for (let j = 0; j <= lb; j++) prev[j] = j;
    for (let i = 1; i <= la; i++) {
      cur[0] = i;
      let rowMin = i;
      const ca = a.charCodeAt(i - 1);
      for (let j = 1; j <= lb; j++) {
        const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
        let v = prev[j] + 1;
        const v2 = cur[j - 1] + 1; if (v2 < v) v = v2;
        const v3 = prev[j - 1] + cost; if (v3 < v) v = v3;
        cur[j] = v;
        if (v < rowMin) rowMin = v;
      }
      if (rowMin > max) return max + 1;
      const t = prev; prev = cur; cur = t;
    }
    return prev[lb];
  }

  /** 词字符判定：CJK 汉字 / 假名 / 拉丁数字。
      窗口跨标点时会产生「口」」这种假命中，必须挡掉。 */
  const WORDCH = /[\u4e00-\u9fff\u3040-\u30ff\u30a0-\u30ffa-z0-9]/i;
  function allWordChars(s) {
    for (let i = 0; i < s.length; i++) if (!WORDCH.test(s[i])) return false;
    return true;
  }

  /** 在字段里找与 term 近似（编辑距离 ≤ maxD）的写法。
      锚点用 term 的字符，但**2 字词只锚首字**（外加整词颠倒）：
      2 字只错 1 个字时，句中任意含这两个字之一的词都成立 ——
      搜「口坐」会把「窗口/入口/出口」全算命中（实测 13 篇）。
      限定首字对齐后，候选只剩「口X」这一列，噪音消失，而
      「病愿→病院」「座口→口座（颠倒）」这类真实错法仍能命中。 */
  function nearestIn(hay, term, maxD) {
    const L = term.length;
    const short = L <= 2;
    let best = null, bestD = maxD + 1;
    for (let k = 0; k < (short ? 1 : L); k++) {
      const ch = term[k];
      let i = hay.indexOf(ch);
      while (i !== -1) {
        for (let wi = 0; wi < 3; wi++) {                    // 窗口长度 L-1 / L / L+1
          const wl = L - 1 + wi;
          if (wl < 2) continue;
          const st = i - k;
          if (st < 0) continue;
          const win = hay.substr(st, wl);
          if (win.length < wl) continue;
          if (win.length <= 4 && !allWordChars(win)) continue;   // 跨标点的窗口不算词
          const d = editDist(win, term, bestD - 1);
          if (d < bestD) { bestD = d; best = win; if (d === 1) return { word: win, d: 1 }; }
        }
        i = hay.indexOf(ch, i + 1);
      }
    }
    // 整词颠倒（座口 ↔ 口座）：只锚首字扫不到，单独判一次
    if (short) {
      const rev = term.split('').reverse().join('');
      if (allWordChars(rev) && hay.includes(rev)) return { word: rev, d: 1 };
    }
    return best ? { word: best, d: bestD } : null;
  }

  /** 拉丁词：按整词比较（「scholership」对「scholarship」按字符窗扫没法用） */
  function nearestLatin(hay, term, maxD) {
    const re = /[a-z0-9][a-z0-9.+#-]*/g;
    let m, best = null, bestD = maxD + 1;
    while ((m = re.exec(hay)) !== null) {
      const w = m[0];
      if (Math.abs(w.length - term.length) > maxD) continue;
      const d = editDist(w, term, bestD - 1);
      if (d < bestD) { bestD = d; best = w; if (d === 1) break; }
    }
    return best ? { word: best, d: bestD } : null;
  }

  /** 允许的编辑距离：短词只准错 1 个字符（再放宽就是把半个站捞进来） */
  function maxDist(t) {
    const isL = isLatin(t);
    if (isL) return t.length <= 4 ? 0 : (t.length <= 6 ? 1 : 2);
    if (t.length < 2) return 0;
    return t.length <= 6 ? 1 : 2;
  }

  /** 扫一篇的字段找近似词。**按字段权重从高到低**，命中即停 ——
      让「小标题里的近似词」赢过「正文角落里的近似词」。
      精度靠 `nearestIn` 的锚点规则保证，不靠限制字段：
      曾经只许在标题/小标题里近似匹配，结果「病愿→病院」失配 ——
      中文正文写「医疗/医院」，那个词只存在于日文译文里，而译文正文权重最低。 */
  function nearestTerm(entry, term, lang) {
    const md = maxDist(term);
    if (!md) return null;
    const fks = Object.keys(entry.f).filter(fk => typeof entry.f[fk] === 'string' && entry.f[fk])
      .sort((a, b) => weight(b, lang) - weight(a, lang));
    for (const fk of fks) {
      if (weight(fk, lang) <= 0) break;
      const hay = entry.f[fk];
      const r = isLatin(term) ? nearestLatin(hay, term, md) : nearestIn(hay, term, md);
      if (r) return { word: r.word, d: r.d, fk };
    }
    return null;
  }

  /** 全词满足才算通过。
      opt.alias = 允许同义词组 / 单向关联表扩展；opt.fuzzy = 允许错字近似匹配。
      三层是**递进**的：字面命中永远不会被扩展或近似挤掉。 */
  function passes(entry, terms, opt, lang) {
    const literal = [], alias = [], near = [], miss = [];
    const useAlias = !!(opt && opt.alias), useFuzzy = !!(opt && opt.fuzzy);
    // partial=true 时，未命中的词记进 miss 而**不丢掉整篇** —— 交由 run() 按覆盖率裁决。
    // 默认 false：字面层/关联层仍是严格 AND，既有行为不变。
    const partial = !!(opt && opt.partial);
    const give = (t) => { if (partial) { miss.push(t); return true; } return false; };
    for (const t of terms) {
      let ok = false;
      for (const fk in entry.f) { if (weight(fk, lang) > 0 && hits(entry.f[fk], t) > 0) { ok = true; break; } }
      if (ok) { literal.push(t); continue; }

      if (useAlias) {
        // ① 单向关联表优先：它指向的是「语料里真正用来写这件事的词」，比整组互等精确得多。
        //    命中**全部**目标词都累加，不是只取最强的那一个 ——
        //    医学篇同时含「診療 / 医療機関 / 受診」，只取一个是把已有证据丢掉，
        //    结果被 newcomer（只有一个「診療所」）压下去。
        const rel = REL_OF.get(t);
        if (rel) {
          let got = null;
          for (const r of rel) {
            let s = 0;
            for (const fk in entry.f) { const wt = weight(fk, lang); if (wt > 0) s += wt * hits(entry.f[fk], r); }
            if (s > 0) (got || (got = [])).push({ q: t, hit: r, rel: true });
          }
          if (got) { for (const g of got) alias.push(g); continue; }
        }
        // ② 同义词组
        const alts = ALIAS_OF.get(t);
        let hit = null, bestScore = -1;
        if (alts) for (const al of alts) {
          let s = 0;
          for (const fk in entry.f) { const wt = weight(fk, lang); if (wt > 0) s += wt * hits(entry.f[fk], al); }
          if (s > bestScore) { bestScore = s; hit = al; }      // 取贡献最大的那个别名，别随便挑一个
        }
        if (hit && bestScore > 0) { alias.push({ q: t, hit }); continue; }
      }

      if (!useFuzzy) { if (give(t)) continue; return null; }
      const nf = nearestTerm(entry, t, lang);
      if (!nf) { if (give(t)) continue; return null; }
      near.push({ q: t, hit: nf.word, d: nf.d, fk: nf.fk });
    }
    return { literal, alias, near, miss };
  }

  function score(entry, terms, m, lang, opt) {
    let sc = 0;
    const addTerm = (t, factor) => {
      for (const fk in entry.f) {
        const wt = weight(fk, lang);
        if (wt <= 0) continue;
        const n = hits(entry.f[fk], t);
        if (!n) continue;
        let v = wt * n * (n > 1 ? 1.25 : 1) * factor;
        if (isLong(fk)) v = Math.min(v, LONG_CAP * factor);    // 长字段饱和
        sc += v;
      }
    };
    // 字面命中按 IDF 加权（仅 sub 层开启）。默认 1 = 维持原行为。
    // 为什么 sub 层必须加：bigram 碎片里混着「いた」「ひい」这类高频片段，
    // 与「風邪」同权时，噪声篇会与正确篇并列甚至压过。
    for (const t of m.literal) addTerm(t, (opt && opt.idfScore) ? idf(t) : 1);
    // 关联命中按 IDF 折价：稀有词（光熱費 只出现在 1 篇）几乎不打折，
    // 宽泛词（更新 出现在 6 篇）贡献大幅缩水 —— 否则宽泛词会把结果撑到十几篇。
    for (const a of m.alias) addTerm(a.hit, (a.rel ? 0.85 : 0.6) * idf(a.hit));
    // 模糊命中：错得越少越接近原词（错 1 字第 2 字 → 0.5×(1−1/2)=0.25）
    for (const f of m.near) addTerm(f.hit, 0.5 * (1 - f.d / Math.max(2, f.q.length)) * idf(f.hit));

    // sub 层关掉全部加成：bigram 碎片命中标题毫无意义（「いた」能命中很多标题），
    // 而 +30 的标题加成会直接压过词本身的证据 —— 实测「風邪をひいたら」前三名
    // 全错（在留手续 / 租房 / 手机），就是这样来的。
    if (opt && opt.noBonus) return sc;

    // 强信号加成：标题 / 标签 / 小标题。字面命中 > 关联/模糊命中。
    const tOwn = entry.f['t_' + lang] || '';
    const tf = tOwn + ' ' + (entry.f.t_all || '');      // 含别语言标题 → 韩文查询也能吃到标题加成
    const extHit = (s) => m.alias.some(a => hits(s, a.hit) > 0) || m.near.some(a => hits(s, a.hit) > 0);
    if (m.literal.some(t => hits(tf, t) > 0)) sc += 30;
    else if (extHit(tf)) sc += 18 * alBestIdf(m);
    // 标题**以**查询词开头 = 更强的定位信号（「奖学金（私費・国費）」优于「学业·奖学金」）。
    // 比的是**所有语言**的标题：中国读者搜「奨学金」时，日文标题同样是权威定位信号。
    const startsAny = t => LANGS.some(l => (entry.f['t_' + l] || '').startsWith(t));
    if (m.literal.some(startsAny)) sc += 18;
    // 模糊命中同样吃「标题以命中词开头」的加成：搜「scholership」（漏了 a）时，
    // 学术篇的标题里也含 "scholarships"，与奖学金篇同分打架；这条把
    // 「标题就是这个词」的那一篇区分出来（奖学金篇 → Scholarships (…)）。
    if (m.near.some(a => startsAny(a.hit))) sc += 18 * alBestIdf(m);
    if (m.literal.some(t => hits(entry.f.tags, t) > 0)) sc += 12;
    // 第 1 个 tag 是这篇的**主话题** —— 命中它比命中靠后的 tag 更有意义
    const firstTag = (entry.f.tags || '').split(' ')[0] || '';
    if (firstTag && m.literal.some(t => firstTag.includes(t))) sc += 12;
    else if (extHit(entry.f.tags)) sc += 7 * alBestIdf(m);
    if (m.literal.some(t => hits(entry.f.head, t) > 0)) sc += 6;
    // 小标题命中同样算主题级信号 —— 「只是正文顺带提过」和「有一节专门讲」差别很大
    else if (extHit(entry.f.head)) sc += 6 * alBestIdf(m);

    // 整句（去空格）命中：搜「银行开户」时压过只命中单字的
    const phrase = terms.join('');
    if (phrase.length > 2) {
      if (tf.includes(phrase)) sc += 25;
      if ((entry.f['s_' + lang] || entry.f.s_all || '').includes(phrase)) sc += 10;
      if ((entry.f.tags || '').includes(phrase)) sc += 12;
      if ((entry.f.head || '').includes(phrase)) sc += 6;
    }
    return sc;
  }

  /** 该文章命中的扩展词（关联/模糊）里最强的那个 IDF —— 加成分也要按稀有度打折 */
  function alBestIdf(m) {
    let best = 0;
    for (const a of m.alias) { const v = idf(a.hit); if (v > best) best = v; }
    for (const a of m.near) { const v = idf(a.hit); if (v > best) best = v; }
    return best || 1;
  }

  /** 覆盖率 = 命中的词数 / 查询词数。
      为什么用覆盖率而不是「分数阈值」：本项目先前删过一次分数阈值 —— 它在医学篇
      「病院」那种低分正确答案上会**静默丢结果**（见 query() 末尾的注释）。
      覆盖率与分数高低无关，只回答「查询里有信息量的词命中了几个」，
      低分但命中的正确结果不会被误杀。 */
  function run(terms, lang, opt) {
    const out = [];
    const minCov = (opt && opt.minCov) || 1;
    for (const e of IDX) {
      const m = passes(e, terms, opt, lang);
      if (!m) continue;
      let cov;
      if (opt && opt.idfCov) {
        // IDF 加权覆盖率。为什么需要：按**词数**算覆盖率时，「時間制限」相邻的
        // 两个 bigram（時間 + 間制）都命中就算 2 个 —— 一个常见词就能满足判据，
        // 结果集炸到 16 篇（实测日文）。加权后，命中「時間」这种常见词贡献极小，
        // 只有命中稀有 bigram 才推得动覆盖率。
        // 未在语料中出现的 bigram 由 idf() 给满分权重 —— 它们正是区分度所在。
        let tot = 0, got = 0;
        for (const t of terms) {
          // 语料里根本没有的 bigram 一律不进分母。它永远不可能被命中，计进去
          // 只会让覆盖率永远达不到阈值 —— 实测这一条把召回从 91.7% 打到 58.3%。
          // 覆盖率要回答的是「查询里**可能存在**的词，命中了多少」。
          if (dfOf(t) === 0) continue;
          const w = idf(t); tot += w;
          if (!m.miss || m.miss.indexOf(t) < 0) got += w;
        }
        cov = tot ? got / tot : 1;
      } else {
        cov = terms.length ? (terms.length - (m.miss ? m.miss.length : 0)) / terms.length : 1;
      }
      if (cov + 1e-9 < minCov) continue;
      // 覆盖率进分数：全命中的排在部分命中之前（0.6 ~ 1.0 的温和偏好，不改变量级）
      out.push({ id: e.id, score: score(e, terms, m, lang, opt) * (0.6 + 0.4 * cov), why: m, cov });
    }
    out.sort((a, b) => b.score - a.score);
    return out;
  }

  /** 命中上下文。**语言优先，词其次**：
      当前语言含命中词 → 当前语言首段 → 任何语言含命中词 → 中文首段。
      「任何语言含命中词」曾经排在当前语言前面，结果中文界面搜「吃药」（关联到
      日文的「診療」）会显示**日文段落** —— 对中文读者是倒退，读不了才是最大的问题。
      词命中只用来在**同一种语言内部**挑更相关的片段。 */
  function pickSnip(entry, why, lang) {
    const terms = [...why.literal, ...why.alias.map(a => a.hit), ...((why.near || []).map(a => a.hit))];
    const snips = entry.f._snips || [];
    for (const t of terms) for (const s of snips) if (s.lang === lang && s.n.includes(t)) return s.t;
    const own = snips.find(s => s.lang === lang);
    if (own) return own.t;
    for (const t of terms) for (const s of snips) if (s.n.includes(t)) return s.t;
    const zhFirst = snips.find(s => s.lang === 'zh');
    return zhFirst ? zhFirst.t : '';
  }

  function query(q, opt) {
    opt = opt || {};
    const lang = opt.lang || 'zh';
    const limit = opt.limit || 20;
    const rawTerms = norm(q).split(' ').filter(Boolean);
    // 虚词不参与匹配：它们几乎不会出现在正文里，却会把严格 AND 掐死
    // （「アルバイトの時間制限は」的 の/は）。只在过滤后**还有实词**时才过滤 ——
    // 否则搜「の」「在」这种本身就是虚词的查询会变成空查询。
    const kept = rawTerms.filter(t => !STOP.has(t));
    const terms = kept.length ? kept : rawTerms;
    if (!terms.length) return [];
    let via = 'literal';
    let r = run(terms, lang, { alias: false, fuzzy: false });
    if (!r.length) { r = run(terms, lang, { alias: true, fuzzy: false }); via = 'alias'; }
    // 模糊层改为「覆盖率」裁决。原先要求每个词都近似命中，而 what/to/do 这类虚词
    // 在模糊层几乎能命中任何正文 → 实测「what to do when sick」返回 17 篇（全站）。
    // 虚词已在上面滤掉，这里再要求信息词的命中比例 —— 不足半数的整篇不算结果。
    if (!r.length) { r = run(terms, lang, { alias: true, fuzzy: true, partial: true, minCov: 0.5 }); via = 'fuzzy'; }
    // 第 3.5 层：用**词表键**补召回。CJK 查询没有词边界，alias 层拿的是整块查询词，
    // 永远查不到；这一层反过来从查询里抽出表内的词，再走 alias 展开。
    // 判据严（minCov=1，所有抽出的键都要命中），所以结果是精确的，不会像 bigram 那样炸开。
    if (!r.length) {
      const keys = keysInQuery(rawTerms.join(' '));
      if (keys.length) {
        const rk = run(keys, lang, { alias: true, fuzzy: false, minCov: 1 });
        if (rk.length) { r = rk; via = 'key'; }
      }
    }
    // 第 4 层（新）：CJK 长词整词查不到时拆成 bigram 再查。
    // 「打工超时」「銀行口座の作り方」没有词边界，前三层必然全空 —— 这一层救回来。
    // 只在前三层都空时启用，不污染既有结果。
    if (!r.length) {
      const sub = [];
      for (const t of terms) { const b = bigrams(t); if (b.length) sub.push(...b); else sub.push(t); }
      if (sub.length > terms.length) {
        // 判据是「至少 2 个 bigram 命中」，不是按比例。
        // 按比例的话，「打工超时了怎么办」切出的 工超/时了/了怎/么办 这些
        // **跨词垃圾**永远不命中，会把分母撑大导致阈值永远达不到 → 仍然 0 篇。
        // bigram 是候选而非要求：命中 2 个 = 已覆盖至少一个 2 字实词。
        // 长查询（≥5 个候选 bigram）要求至少 2 个命中 —— 命中 2 个 = 覆盖了一个
        // 以上 2 字实词，足以定位；短查询放宽到 1 个，否则「生病了怎么办」
        // （有效 bigram 只有「生病」）会被判成不合格。
        // 判据改为 IDF 加权覆盖率 ≥ 0.5：命中「時間」这类常见 bigram 推不动覆盖率，
        // 必须命中足够多**有区分度**的 bigram 才算结果。
        const r4 = run(sub, lang, { alias: false, fuzzy: false, partial: true,
          minCov: 0.5, idfCov: true, idfScore: true, noBonus: true });
        if (r4.length) { r = r4; via = 'sub'; }
      }
    }
    if (!r.length && terms.length > 1) {                       // OR 兜底（多词里只要有一个命中）
      const acc = new Map();
      for (const t of terms) for (const x of run([t], lang, { alias: true, fuzzy: true })) {
        const p = acc.get(x.id);
        if (p) p.score += x.score * 0.8; else acc.set(x.id, { id: x.id, score: x.score * 0.8, why: x.why });
      }
      r = [...acc.values()].sort((a, b) => b.score - a.score);
      via = 'any';
    }
    // 严格命中太少时用同义词补召回（排位靠后，不挤掉字面命中）
    if (via === 'literal' && r.length < 4) {
      const have = new Set(r.map(x => x.id));
      for (const x of run(terms, lang, { alias: true, fuzzy: false })) if (!have.has(x.id)) { x.score *= 0.55; r.push(x); }
      r.sort((a, b) => b.score - a.score);
    }
    const byId = new Map(IDX.map(e => [e.id, e]));
    // 这里原本还有一道「相对阈值」，用来砍宽泛词撑出来的长尾。现在不要了 ——
    // IDF 已经把宽泛词的贡献压下去，过载条数从 15 降到 6（比改动前的基线 8 还低）；
    // 留着它反而会砍掉真实命中：只在日文译文里近似命中「病院」的医学篇
    // 得分仅 0.25，被 15% 阈值无声丢掉了，而它正是正确答案。
    // **宁可列表长一点，也不要静默丢结果。**
    return r.slice(0, limit).map(x => ({
      id: x.id,
      score: Math.round(x.score * 10) / 10,
      via,
      why: x.why,
      snip: (byId.get(x.id) ? pickSnip(byId.get(x.id), x.why, lang) : '')
    }));
  }

  w.GuideSearch = { build, reset, query, norm, weight, _idx: () => IDX };
})(typeof window !== 'undefined' ? window : globalThis);
