#!/usr/bin/env node
/**
 * test_sources.js — 文末「参考链接与出处」的测试
 *
 * 覆盖两件事：
 *   ① 数据面：17 篇各自渲染出的正文里，外部链接去重后应等于 audit_sources 的统计，
 *      且 tel: / #sec-N 这类不算外链的锚点绝不漏进出处列表
 *   ② 逻辑面：分组规则（官方/公共 与 其他）、裸 URL 的标签回落、
 *      一条链接都没有的文章不出现空壳、四语文案
 *
 * 没有引入 DOM 库（本项目零依赖），用最小 shim；但锚点是从 renderBlocks 的
 * **真实输出**里抽出来的，所以测的仍是真实渲染管线，不是另写一套。
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

let fail = 0;
const ok = (c, label, extra) => {
  if (c) console.log('  ✓ ' + label);
  else { fail++; console.log('  ✗ ' + label + (extra !== undefined ? '  → ' + extra : '')); }
};

/* ── 最小 DOM shim：只实现 renderSources 用到的那几样 ── */
function makeDom(anchors) {
  return {
    container: {
      querySelectorAll: (sel) => (sel === 'a[href]' ? anchors : []),
      appendChild(el) { this.appended = this.appended || []; this.appended.push(el); return el; },
    },
  };
}
function anchor(href, text, txtInner) {
  // txtInner = 链接卡里 <span class="txt"> 的内容。真实 links 块还有 <span class="go">打开 ›</span>，
  // 所以 textContent（含按钮文案）与 .txt（纯标签）是两个不同的值 —— 假锚点必须都能给。
  return {
    getAttribute: (k) => (k === 'href' ? href : null),
    textContent: text === undefined ? '' : text,
    querySelector: (sel) => (sel === '.txt' && txtInner != null ? { textContent: txtInner } : null),
  };
}

/* 从真实渲染出的 HTML 里抽出 <a ...>：只要 href 与锚文本，够用 */
function anchorsFromHTML(html) {
  const out = [];
  const re = /<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = re.exec(html))) {
    const unesc = (x) => x.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    const whole = unesc(m[2]).replace(/<[^>]*>/g, '').trim();
    const tm = /<span class="txt">([\s\S]*?)<\/span>/.exec(m[2]);
    out.push(anchor(m[1], whole, tm ? unesc(tm[1]).trim() : null));
  }
  return out;
}

/* ── 装载 ── */
const ctx = vm.createContext({ window: {} });
ctx.window = ctx;
for (const f of ['i18n.js', 'render.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8'), ctx, { filename: f });
}
vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', 'data-articles.js'), 'utf8'), ctx);
// 语言必须显式锁住：默认值跟随运行环境，不锁的话断言会漂
ctx.GuideI18N.setLang('zh');
const R = ctx.GuideRender;
const ARTICLES = ctx.ARTICLES;

/* 假 document：renderSources 只用到 createElement */
const made = [];
ctx.document = ctx.window.document = {
  createElement(tag) {
    const el = { tagName: tag, id: '', className: '', _html: '' };
    Object.defineProperty(el, 'innerHTML', { get() { return el._html; }, set(v) { el._html = String(v); } });
    made.push(el);
    return el;
  },
};

const OFFICIAL = /\.(go\.jp|lg\.jp|ac\.jp|or\.jp|ed\.jp|gov\.cn|go\.kr|ac\.kr)$/i;
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
const rowCount = (html) => (html.match(/class="src-row"/g) || []).length;

const expected = JSON.parse(
  require('child_process').execSync('node ' + JSON.stringify(path.join(ROOT, 'tools', 'audit_sources.js')) + ' --json',
    { cwd: ROOT, maxBuffer: 1 << 24 }).toString()
);

console.log('=== ① 逐篇：出处小节的行数 = 正文里去重后的外部链接数 ===');
let totalRows = 0, totalOfficial = 0, mismatch = 0;
for (const a of ARTICLES) {
  const html = R.renderBlocks(a.blocks, null);
  const anchors = anchorsFromHTML(html);
  const ext = [...new Set(anchors.map((x) => x.getAttribute('href')).filter((h) => /^https?:\/\//i.test(h)))];

  const dom = makeDom(anchors);
  const sec = R.renderSources(dom.container);
  const exp = (expected.rows.find((r) => r.id === a._id) || {}).nUrls || 0;

  if (ext.length !== exp) { mismatch++; console.log('    ! ' + a._id + ' 渲染里 ' + ext.length + ' 条 vs 盘点 ' + exp + ' 条'); }

  if (!ext.length) {
    if (sec !== null) { fail++; console.log('  ✗ ' + a._id + '：无外链却生成了出处小节'); }
    continue;
  }
  const rows = rowCount(sec.innerHTML);
  totalRows += rows;
  totalOfficial += OFFICIAL.test(hostOf(ext[0])) ? 0 : 0;
  if (rows !== ext.length) { fail++; console.log('  ✗ ' + a._id + '：行数 ' + rows + ' ≠ 去重外链 ' + ext.length); }
}
ok(mismatch === 0, '17 篇的行数全部等于去重外链数（合计 ' + totalRows + ' 行）', mismatch + ' 篇不符');

console.log('\n=== ② 不混入 tel: / 页内锚点 ===');
{
  const dom = makeDom([
    anchor('tel:0928026000', '📞 092-802-6000'),
    anchor('#sec-3', '跳到第 3 节'),
    anchor('mailto:x@y.z', 'x@y.z'),
    anchor('https://www.isc.kyushu-u.ac.jp/intlweb/student', 'Global Gateway'),
  ]);
  const sec = R.renderSources(dom.container);
  const h = sec.innerHTML;
  ok(!/tel:/.test(h), '没有 tel: 链接');
  ok(!/#sec-/.test(h), '没有页内锚点');
  ok(!/mailto:/.test(h), '没有 mailto:');
  ok(rowCount(h) === 1, '只收下那 1 条外部链接', rowCount(h));
}

console.log('\n=== ③ 分组：官方·公共机构 vs 其他 ===');
{
  const dom = makeDom([
    anchor('https://www.isc.kyushu-u.ac.jp/intlweb/student', '九大留学生中心'),   // .ac.jp → 官方
    anchor('https://www.city.fukuoka.lg.jp/', '福冈市役所'),                      // .lg.jp → 官方
    anchor('https://www.mhlw.go.jp/', '厚生労働省'),                              // .go.jp → 官方
    anchor('https://tally.yuki.sh/x', '第三方计数'),                              // 其他
    anchor('https://maps.app.goo.gl/abc', '地图'),                                // 其他
  ]);
  const sec = R.renderSources(dom.container);
  const h = sec.innerHTML;
  const offPart = h.split('src-sub')[1] || '';
  ok(rowCount(h) === 5, '5 条全部列出', rowCount(h));
  ok((h.match(/class="src-sub"/g) || []).length === 2, '分成 2 组');
  ok(/官方/.test(h) && /其他/.test(h), '两个组标题都在');
  // 官方组应该恰好含 3 条
  const beforeOther = h.slice(0, h.lastIndexOf('src-sub'));
  ok(rowCount(beforeOther) === 3, '官方组 3 条', rowCount(beforeOther));
  void offPart;
}

console.log('\n=== ④ 裸 URL 的标签回落（去掉协议头与结尾斜杠）===');
{
  const dom = makeDom([anchor('https://aimo-kyushu-u.zendesk.com/hc/ja', 'https://aimo-kyushu-u.zendesk.com/hc/ja')]);
  const h = R.renderSources(dom.container).innerHTML;
  ok(/src-t">aimo-kyushu-u\.zendesk\.com\/hc\/ja</.test(h), '标签去掉了 https://', h.slice(0, 200));
  // 只看**可见文本**：href 属性里当然有 https://，那是链接目标，不是显示内容
  const visible = h.replace(/<[^>]*>/g, '');
  ok(!/https:\/\//.test(visible), '可见文本里不出现带协议的 URL', visible.slice(0, 80));
}

console.log('\n=== ④b 标签不得混入链接卡的「打开 ›」按钮文案 ===');
{
  // 真实 links 块的锚点是 <a><span class="txt">标签</span><span class="go">打开 ›</span></a>，
  // 取 a.textContent 会把按钮文案拼进标签。离线测试曾漏过这一条 ——
  // 因为测试自己也是「剥标签取文本」，同样会带上它。这里必须显式挡住。
  const dom = makeDom([anchor('https://www.kyushu-u.ac.jp/x', '九大 certificate打开 ›', '九大 certificate')]);
  const h = R.renderSources(dom.container).innerHTML;
  ok(/src-t">九大 certificate</.test(h), '标签只取 .txt', (h.match(/class="src-t">([^<]*)/) || [])[1]);
  ok(!/打开/.test(h), '整段里没有「打开 ›」');
}
{
  // 四种语言的按钮文案都不能漏进来
  const OPEN = { zh: '打开 ›', ja: '開く ›', en: 'Open ›', ko: '열기 ›' };
  let bad = [];
  for (const [lang, word] of Object.entries(OPEN)) {
    ctx.GuideI18N.setLang(lang);
    const a = anchor('https://www.kyushu-u.ac.jp/x', 'Label' + word, 'Label');
    const h = R.renderSources(makeDom([a]).container).innerHTML;
    if (new RegExp(word.split(' ')[0]).test(h)) bad.push(lang);
  }
  ctx.GuideI18N.setLang('zh');
  ok(bad.length === 0, '四语的按钮文案都不出现', bad.join(','));
}

console.log('\n=== ⑤ 同名 URL 只出现一次（保序去重）===');
{
  const dom = makeDom([
    anchor('https://www.mhlw.go.jp/', '厚生労働省'),
    anchor('https://www.mhlw.go.jp/', '厚生労働省（再次）'),
    anchor('https://tally.yuki.sh/x', 'tally'),
  ]);
  const h = R.renderSources(dom.container).innerHTML;
  ok(rowCount(h) === 2, '去重后 2 条', rowCount(h));
  ok(/厚生労働省</.test(h) && !/再次/.test(h), '保留首次出现的标签');
}

console.log('\n=== ⑥ 四语标题 ===');
// en 的 '&' 在 HTML 里必然转义成 &amp; —— 断言按转义后的形式写，别把正确行为当错
for (const [lang, want] of [['zh', /参考链接与出处/], ['ja', /参考リンク・出典/], ['en', /Sources &amp; links/], ['ko', /출처 및 링크/]]) {
  ctx.GuideI18N.setLang(lang);
  const dom = makeDom([anchor('https://www.mhlw.go.jp/', 'x')]);
  const h = R.renderSources(dom.container).innerHTML;
  ok(want.test(h), lang + ' 标题', (h.match(/class="src-h">([^<]*)/) || [])[1]);
}
ctx.GuideI18N.setLang('zh');

console.log('\n=== ⑦ 与盘点结果交叉核对 ===');
{
  const byArt = {};
  let sum = 0;
  for (const a of ARTICLES) {
    const html = R.renderBlocks(a.blocks, null);
    const ext = [...new Set(anchorsFromHTML(html).map((x) => x.getAttribute('href')).filter((h) => /^https?:\/\//i.test(h)))];
    byArt[a._id] = ext.length;
    sum += ext.length;
  }
  const auditSum = expected.rows.reduce((s, r) => s + r.nUrls, 0);
  ok(sum === auditSum, '逐篇累计一致（' + sum + ' 条）', sum + ' vs ' + auditSum);
  const empty = ARTICLES.filter((a) => !byArt[a._id]).map((a) => a._id);
  console.log('    无外链的文章（不应出现出处小节）：' + (empty.join(', ') || '无'));
}

console.log('\n' + (fail ? '✗ ' + fail + ' 项未通过' : '✓ 全部通过'));
process.exit(fail ? 1 : 0);
