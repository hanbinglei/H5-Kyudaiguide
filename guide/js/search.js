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
  function norm(s) {
    return String(s == null ? '' : s)
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60))
      .replace(/[\s\u3000]+/g, ' ')
      .trim();
  }

  /* 同义词组：一组之内互相等价。
     ⚠️ 只收「长度 ≥2 且语义聚焦」的词 —— 单字别名（熱/热）会把半个站都捞进来。 */
  const ALIAS_GROUPS = [
    ['手机', '携帯', 'けいたい', 'スマホ', 'スマートフォン', 'mobile', 'phone', 'sim', '格安sim',
      '手机卡', '电话卡', '接続', '套餐', 'プラン', '料金プラン', 'ギガ', 'データ通信'],
    ['銀行', '银行', '口座', 'bank', 'account', '开户', '開設', 'ゆうちょ', '福岡銀行', '西日本シティ',
      '送金', '汇款', '振込', 'remittance', '国際送金', 'atm', 'キャッシュカード'],
    ['网络', 'ネット', 'wifi', '无线网', '上网', '流量', 'インターネット'],
    ['医院', '医療', '病院', '診療所', 'クリニック', '医療機関', 'hospital', 'clinic', '看病', '就医',
      '就诊', '受診'],
    ['发烧', '発熱', '发热', 'fever', '体温', '生病', '感冒'],
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
      const t = String(txt == null ? '' : txt).replace(/\s+/g, ' ').trim();
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
      for (const l of langs) {
        const t = norm((nv.title || {})[l] || (l === 'zh' ? a.title : ''));
        const s = norm((nv.summary || {})[l] || (l === 'zh' ? a.summary : ''));
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
            const t = String(txt == null ? '' : txt).replace(/\s+/g, ' ').trim();
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

  function reset() { IDX = []; }

  /** 全词满足才算通过；useAlias=false 时只认字面 */
  function passes(entry, terms, useAlias, lang) {
    const literal = [], alias = [];
    for (const t of terms) {
      let ok = false;
      for (const fk in entry.f) { if (weight(fk, lang) > 0 && hits(entry.f[fk], t) > 0) { ok = true; break; } }
      if (ok) { literal.push(t); continue; }
      if (!useAlias) return null;
      const alts = ALIAS_OF.get(t);
      let hit = null, bestScore = -1;
      if (alts) for (const al of alts) {
        let s = 0;
        for (const fk in entry.f) { const wt = weight(fk, lang); if (wt > 0) s += wt * hits(entry.f[fk], al); }
        if (s > bestScore) { bestScore = s; hit = al; }        // 取贡献最大的那个别名，别随便挑一个
      }
      if (!hit || bestScore <= 0) return null;
      alias.push({ q: t, hit });
    }
    return { literal, alias };
  }

  function score(entry, terms, m, lang) {
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
    for (const t of m.literal) addTerm(t, 1);
    for (const a of m.alias) addTerm(a.hit, 0.6);

    // 强信号加成：标题 / 标签 / 小标题。字面命中 > 同义词命中。
    const tOwn = entry.f['t_' + lang] || '';
    const tf = tOwn + ' ' + (entry.f.t_all || '');      // 含别语言标题 → 韩文查询也能吃到标题加成
    if (m.literal.some(t => hits(tf, t) > 0)) sc += 30;
    else if (m.alias.some(a => hits(tf, a.hit) > 0)) sc += 18;
    // 标题**以**查询词开头 = 更强的定位信号（「奖学金（私費・国費）」优于「学业·奖学金」）
    if (m.literal.some(t => tOwn.startsWith(t))) sc += 12;
    if (m.literal.some(t => hits(entry.f.tags, t) > 0)) sc += 12;
    else if (m.alias.some(a => hits(entry.f.tags, a.hit) > 0)) sc += 7;
    if (m.literal.some(t => hits(entry.f.head, t) > 0)) sc += 6;

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

  function run(terms, lang, useAlias) {
    const out = [];
    for (const e of IDX) {
      const m = passes(e, terms, useAlias, lang);
      if (!m) continue;
      out.push({ id: e.id, score: score(e, terms, m, lang), why: m });
    }
    out.sort((a, b) => b.score - a.score);
    return out;
  }

  /** 命中上下文：优先当前语言 → 中文原文；都没有就回退首段（保证每张卡片都有内容） */
  function pickSnip(entry, why, lang) {
    const terms = [...why.literal, ...why.alias.map(a => a.hit)];
    const snips = entry.f._snips || [];
    for (const L of [lang, 'zh']) {
      for (const t of terms) for (const s of snips) if (s.lang === L && s.n.includes(t)) return s.t;
    }
    const zhFirst = snips.find(s => s.lang === 'zh');
    return zhFirst ? zhFirst.t : '';
  }

  function query(q, opt) {
    opt = opt || {};
    const lang = opt.lang || 'zh';
    const limit = opt.limit || 20;
    const terms = norm(q).split(' ').filter(Boolean);
    if (!terms.length) return [];
    let via = 'literal';
    let r = run(terms, lang, false);
    if (!r.length) { r = run(terms, lang, true); via = 'alias'; }
    if (!r.length && terms.length > 1) {                       // OR 兜底（多词里只要有一个命中）
      const acc = new Map();
      for (const t of terms) for (const x of run([t], lang, true)) {
        const p = acc.get(x.id);
        if (p) p.score += x.score * 0.8; else acc.set(x.id, { id: x.id, score: x.score * 0.8, why: x.why });
      }
      r = [...acc.values()].sort((a, b) => b.score - a.score);
      via = 'any';
    }
    // 严格命中太少时用同义词补召回（排位靠后，不挤掉字面命中）
    if (via === 'literal' && r.length < 4) {
      const have = new Set(r.map(x => x.id));
      for (const x of run(terms, lang, true)) if (!have.has(x.id)) { x.score *= 0.55; r.push(x); }
      r.sort((a, b) => b.score - a.score);
    }
    const byId = new Map(IDX.map(e => [e.id, e]));
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
