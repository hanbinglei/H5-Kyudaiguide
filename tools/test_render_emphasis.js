#!/usr/bin/env node
/**
 * H5 强调渲染与译文覆盖验证；同一块使用 emphasis[fieldPath] = [{start,end,style}]。
 * 检查真实输出HTML、危险协议、旧客户端兼容与按语言独立的UTF-16区间。
 * 用法：node tools/test_render_emphasis.js；只读源码与固定旧版快照，不请求后端。
 */
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
let checks = 0;
/** 装入真实浏览器渲染器；测试沙箱不提供DOM，避免绑定任何页面事件。 */
function load(source) { const ctx = { window: {} }; vm.runInNewContext(source, ctx); return ctx.window.GuideRender; }
/** 断言成功后累计检查数。 */
function check(condition, label) { assert(condition, label); checks++; }
/** 按确定的字段原文找到语义片段，生成该语言自身的区间。 */
function mark(text, selected, style = 'bold') {
  const start = text.indexOf(selected); assert(start >= 0);
  return { start, end: start + selected.length, style };
}
/** 取HTML可见文字，格式标签必须由渲染器生成且正文字符已经转义。 */
function plain(html) { return html.replace(/<[^>]*>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&'); }
/** 旧客户端对照稿：移除格式字段但保留全部原文字段。 */
function unmarked(value) {
  if (Array.isArray(value)) return value.map(unmarked);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).filter(([k]) => k !== 'emphasis').map(([k, v]) => [k, unmarked(v)]));
}
const renderPath = path.join(root, 'guide/js/render.js');
const source = fs.readFileSync(renderPath, 'utf8');
const R = load(source);
const text = '请先预约，仅工作日办理（Appointment）。';
const emphasis = { text: [mark(text, '先预约'), mark(text, '仅工作日', 'underline'), mark(text, 'Appointment', 'italic')] };
const textBlocks = ['paragraph', 'notice', 'warning', 'quote', 'community'].map(type => ({ id: type, type, text, emphasis }));
for (const block of textBlocks) {
  const before = JSON.stringify(block), normalized = R.normalizeBlocks([block])[0], html = R.renderBlocks([block]);
  check(normalized.id === block.id && normalized.emphasis === block.emphasis, block.type + ' 保留区块身份');
  check(JSON.stringify(block) === before, block.type + ' 不改变正文');
  check(plain(html).includes(text), block.type + ' 原文完整');
  check(html.includes('<strong class="bold">先预约</strong>') && html.includes('<u class="inline-underline">仅工作日</u>') && html.includes('<em class="inline-italic">Appointment</em>'), block.type + ' 三种强调');
}
const steps = { id: 'steps', type: 'steps', items: [{ title: '先预约', desc: text }], emphasis: {
  'items.0.title': [mark('先预约', '预约', 'underline')], 'items.0.desc': emphasis.text
} };
const lists = ['list', 'checklist'].map(type => ({ id: type, type, items: [{ text }, '护照原件'], emphasis: {
  'items.0.text': emphasis.text, 'items.1.text': [mark('护照原件', '原件')]
} }));
const table = { id: 'table', type: 'fee_table', headers: ['办理条件', '费用'], rows: [['仅工作日', 1200]], emphasis: {
  'headers.0': [mark('办理条件', '条件', 'italic')], 'rows.0.0': [mark('仅工作日', '仅工作日', 'underline')]
} };
check(R.renderBlocks([steps]).includes('先<u class="inline-underline">预约</u>') && R.renderBlocks([steps]).includes('<strong class="bold">先预约</strong>'), '步骤标题与说明');
for (const list of lists) {
  const html = R.renderBlocks([list]);
  check(html.includes('护照<strong class="bold">原件</strong>') && html.includes('<u class="inline-underline">仅工作日</u>'), list.type + ' 字符串/对象项兼容');
}
const tableHtml = R.renderBlocks([table]);
check(tableHtml.includes('办理<em class="inline-italic">条件</em>') && tableHtml.includes('<u class="inline-underline">仅工作日</u>') && tableHtml.includes('1200'), '表头与表格数字');
const collapse = { id: 'collapse', type: 'collapse', title: '办理前检查', emphasis: { title: [mark('办理前检查', '办理前', 'underline')] },
  blocks: [...textBlocks, steps, ...lists, table] };
const C = R.renderBlocks([collapse]);
check(C.includes('<u class="inline-underline">办理前</u>检查') && C.includes('<table') && C.includes('step-title'), '折叠标题与工具块');
check((C.match(/<strong class="bold">先预约<\/strong>/g) || []).length === 8, '折叠内部八个文字位置可强调');
const linked = '**见【交通·预约】与 092-802-0000**，https://example.com/book';
const linkedHtml = R.renderBlocks([{ type: 'paragraph', text: linked, emphasis: { text: [mark(linked, '交通', 'italic'), mark(linked, '092-802', 'underline')] } }]);
check(linkedHtml.includes('data-guide="交通"') && linkedHtml.includes('href="tel:0928020000"'), '旧粗体内保留互引与电话目标');
check(linkedHtml.includes('<em class="inline-italic">交通</em>') && linkedHtml.includes('<u class="inline-underline">092-802</u>'), '链接内部可叠加强调');
check(linkedHtml.includes('href="https://example.com/book"'), '外链仍可点');
const boldURL = R.renderBlocks([{ type: 'paragraph', text: '**https://example.com/book**' }]);
check(boldURL.includes('href="https://example.com/book"') && boldURL.includes('<strong class="bold">https://example.com/book</strong>'), '旧粗体包裹URL不把星号放进地址');
const numberedText = '准备：1. 先预约 2. 仅工作日';
const numberedHTML = R.renderBlocks([{ type: 'paragraph', text: numberedText, emphasis: {
  text: [mark(numberedText, '先预约'), mark(numberedText, '仅工作日', 'underline')]
} }]);
check(numberedHTML.includes('ar-list-item') && numberedHTML.includes('<strong class="bold">先预约</strong>') &&
  numberedHTML.includes('<u class="inline-underline">仅工作日</u>'), '自动编号列表拆分保留样式下标');
for (const prefix of ['见', '参照', 'See ', '참조 ', 'Véase ']) {
  const input = prefix + '【交通】';
  check(plain(R.renderBlocks([{ type: 'notice', text: input }])).includes(input), prefix + ' 互引显示保留当前语言');
}
const md = '[预约入口](https://example.com/book)';
const mdHTML = R.renderBlocks([{ id: 'md', type: 'paragraph', text: md, emphasis: { text: [mark(md, '预约')] } }]);
check(mdHTML.includes('href="https://example.com/book"') && mdHTML.includes('<strong class="bold">预约</strong>入口'), 'Markdown链接标签格式与地址');
const cards = { id: 'links', type: 'links', items: [{ text: '预约 092-802-0000 见【交通】', url: 'https://example.com' }], emphasis: {
  'items.0.text': [mark('预约 092-802-0000 见【交通】', '预约')]
} };
const cardsHtml = R.renderBlocks([cards]);
check((cardsHtml.match(/<a\b/g) || []).length === 1 && !cardsHtml.includes('<button'), '链接卡标签不产生嵌套链接或按钮');
check(cardsHtml.includes('<strong class="bold">预约</strong>'), '链接卡文字支持强调');
const evil = '<img src=x onerror=alert(1)> *普通星号* <u>普通标签</u>';
const evilHtml = R.renderBlocks([{ type: 'paragraph', text: evil, emphasis: { text: [mark(evil, 'img')] } }]);
check(!/<img\b|<script\b| onerror="/.test(evilHtml) && plain(evilHtml) === evil, '正文HTML与单星号仅显示文字');
for (const url of ['javascript:alert(1)', 'data:text/html,<script>alert(1)</script>', 'vbscript:msgbox(1)', 'https://example.com\n" onclick="alert(1)']) {
  const html = R.renderBlocks([{ type: 'links', items: [{ text: '危险链接', url }] }]);
  check(!html.includes('<a ') && plain(html).includes('危险链接'), '危险协议和带空白地址不可执行');
}
const overlap = R.renderBlocks([{ type: 'paragraph', text: '预约条件', emphasis: { text: [
  { start: 0, end: 4, style: 'bold' }, { start: 2, end: 4, style: 'underline' }
] } }]);
check(overlap.includes('<strong class="bold"><u class="inline-underline">条件</u></strong>'), '区间重叠同时应用两种样式');
const emoji = R.renderBlocks([{ type: 'paragraph', text: '🚀预约', emphasis: { text: [
  { start: 1, end: 2, style: 'bold' }, { start: 0, end: 99, style: 'italic' }, { start: 0, end: 2, style: 'onclick' }
] } }]);
check(plain(emoji) === '🚀预约' && !/<strong|<em|<u /.test(emoji), '非法样式/越界/emoji中间边界被忽略');

// 使用生产译文覆盖函数本身：缺译保留中文；翻译块清除原下标，显式译文标注独立生效。
const app = fs.readFileSync(path.join(root, 'guide/js/app.js'), 'utf8');
const mergeSource = app.match(/function mergeBlocks\(blocks,map\)\{[\s\S]*?\n\}/);
assert(mergeSource, '找不到生产译文覆盖函数');
const merge = vm.runInNewContext(mergeSource[0] + ';mergeBlocks');
const original = { id: 'p', type: 'paragraph', text: '仅工作日办理', emphasis: { text: [{ start: 0, end: 4, style: 'underline' }] } };
const changed = merge([original], { p: { text: 'Weekdays only' } })[0];
check(!Object.hasOwn(changed, 'emphasis') && !R.renderBlocks([changed]).includes('<u '), '译文未提供自身强调则移除中文下标');
check(merge([original], {})[0] === original, '缺译的中文回退块保留自身强调');
const translatedMarks = { text: [{ start: 0, end: 8, style: 'underline' }] };
const translated = merge([original], { p: { text: 'Weekdays only', emphasis: translatedMarks } })[0];
check(translated.emphasis === translatedMarks && R.renderBlocks([translated]).includes('<u class="inline-underline">Weekdays</u>'), '译文自身区间可以独立覆盖');
const nested = merge([{ id: 'c', type: 'collapse', title: '条件', emphasis: { title: [{ start: 0, end: 2, style: 'bold' }] }, blocks: [original] }],
  { c: { title: 'Conditions' }, p: { text: 'Weekdays only' } })[0];
check(!Object.hasOwn(nested, 'emphasis') && !Object.hasOwn(nested.blocks[0], 'emphasis'), '折叠标题和内部译文分别移除原偏移');
check(original.emphasis.text[0].end === 4 && original.text === '仅工作日办理', '翻译不修改中文原稿');

// HEAD 随发布前进，已支持 emphasis，不能继续充当旧客户端。
// 固定到 c37d6d8 强调功能发布前的实际快照；缺历史时明确失败，不降级跳过兼容断言。
const legacyRef = '30358774b83dfeced297307c5c66ac6bf57d8af7';
const legacySource = execFileSync('git', ['show', legacyRef + ':guide/js/render.js'], { cwd: root, encoding: 'utf8' });
assert(!legacySource.includes('function styledInline'), '旧版基准不得具备新增强调渲染器');
const old = load(legacySource);
for (const block of [...textBlocks, steps, ...lists, table, collapse, cards]) {
  check(old.renderBlocks([block]) === old.renderBlocks([unmarked(block)]), block.type + ' 旧客户端忽略新字段');
}
const shifted = '🚀 **说明** https://isc.kyushu-u.ac.jp/w2/；请先预约。';
const shiftedHtml = R.renderBlocks([{ type: 'paragraph', text: shifted, emphasis: { text: [mark(shifted, '先预约', 'underline')] } }]);
check(shiftedHtml.includes('<u class="inline-underline">先预约</u>') && plain(shiftedHtml) === shifted.replace(/\*\*/g, ''), 'emoji/旧标记/URL不移动后续格式');
const anchoredText = '请先预约，带护照', anchoredMark = { ...mark(anchoredText, '先预约'), quote: '先预约' };
/** 使用真实段落入口核对quote，不改变正文和译文。 */
function quotedHTML(text, markValue) { return R.renderBlocks([{ type: 'paragraph', text, emphasis: { text: [markValue] } }]); }
check(quotedHTML(anchoredText, anchoredMark).includes('<strong class="bold">先预约</strong>'), 'quote符合原文时正常强调');
const editedPrefix = '请提前先预约，带护照', staleHTML = quotedHTML(editedPrefix, anchoredMark);
check(!staleHTML.includes('<strong') && plain(staleHTML) === editedPrefix, '前缀编辑使quote过期时不强调错误文字，正文完整');
check(quotedHTML('要先预约，带在留卡', anchoredMark).includes('<strong class="bold">先预约</strong>'), '区间原文未变时仍可强调');
check(!quotedHTML(anchoredText, { ...anchoredMark, quote: undefined }).includes('<strong'), 'quote存在但不是对应文字时忽略');
check(quotedHTML('**旧粗体**', { start: 2, end: 5, style: 'underline', quote: '过期词' }).includes('<strong class="bold">旧粗体</strong>'), '过期结构化强调不影响legacy粗体');
const quotedNumberedHTML = quotedHTML(numberedText, { ...mark(numberedText, '先预约 2. 仅工作日'), quote: '先预约 2. 仅工作日' });
check(quotedNumberedHTML.includes('<strong class="bold">先预约</strong>') && quotedNumberedHTML.includes('<strong class="bold">仅工作日</strong>'), '编号列表裁切后重算quote');
check(!quotedHTML(numberedText, { ...mark(numberedText, '先预约'), quote: '旧文字' }).includes('<strong'), '编号列表投影前先拒绝过期quote');

// 直接读取当前18篇生成正文及五语译本，以实际数据验证旧客户端兼容与语言隔离。
const actualCtx = { window: {} };
for (const name of ['data-articles.js', 'articles-body-i18n.js']) vm.runInNewContext(fs.readFileSync(path.join(root, 'guide/js', name), 'utf8'), actualCtx);
let actualBodies = 0, actualMarks = 0;
/** 对实际字段下标作检查；译文来源独立，不能把中文强调套到另一种语言。 */
function inspectActual(blocks, map, articleId) {
  for (const block of blocks || []) {
    const translation = map && block.id && map[block.id];
    if (translation && !Object.hasOwn(translation, 'emphasis')) check(!Object.hasOwn(block, 'emphasis'), articleId + ':' + block.id + ' 译文不继承中文偏移');
    for (const [field, marks] of Object.entries(block.emphasis || {})) {
      const rawValue = field.split('.').reduce((value, key) => value == null ? undefined : value[key], block);
      check(typeof rawValue === 'string', articleId + ':' + field + ' 实际强调字段存在');
      for (const m of marks) {
        actualMarks++;
        check(Number.isInteger(m.start) && Number.isInteger(m.end) && m.start >= 0 && m.end > m.start && m.end <= rawValue.length && ['bold', 'italic', 'underline'].includes(m.style) && (!Object.hasOwn(m, 'quote') || m.quote === rawValue.slice(m.start, m.end)), articleId + ':' + field + ' 实际区间及可选quote有效');
      }
    }
    inspectActual(block.blocks, map, articleId);
  }
}
for (const article of actualCtx.window.ARTICLES) {
  const before = JSON.stringify(article.blocks);
  for (const lang of ['zh', 'ja', 'en', 'ko', 'es']) {
    const map = lang === 'zh' ? null : (actualCtx.window.ARTICLES_BODY_I18N[article._id] || {})[lang] || {};
    const blocks = map ? merge(article.blocks, map) : article.blocks;
    const html = R.renderBlocks(blocks);
    actualBodies++;
    check(typeof html === 'string' && html.length > 0, article._id + ':' + lang + ' 真实正文完整渲染');
    check(old.renderBlocks(blocks) === old.renderBlocks(unmarked(blocks)), article._id + ':' + lang + ' 旧客户端忽略强调');
    inspectActual(blocks, map, article._id + ':' + lang);
  }
  check(JSON.stringify(article.blocks) === before, article._id + ' 五语渲染不改中文正文');
}
check(actualBodies === 90 && actualMarks > 0, '18篇五语实际正文与格式均进入验证');
console.log('PASS ' + checks + ' checks / 0 failures; no remote reads or writes.');
