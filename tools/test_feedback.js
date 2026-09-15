#!/usr/bin/env node
/**
 * test_feedback.js — 反馈表单的离线测试
 *
 * 重点不是「表单长什么样」，而是**投递链路的两个不能改坏的地方**：
 *   ① action 必须是公开的 role address（kyudaiguide@gmail.com），
 *      **绝不能出现个人邮箱** —— 它会在页面源码里明文可见、被爬虫收走
 *   ② _subject 必须以 [KyudaiGuide] 开头 —— 126 的分类规则靠它归档；
 *      转发会保留原始发件人，靠发件人过滤不出来，改了这个标记邮件就进不了专属文件夹
 *
 * 没有 DOM 库（本项目零依赖），用最小 shim：把 innerHTML 里的 id 与
 * name/value 解析成桩元素，这样 build() 之后的赋值与断言都能跑。
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

let fail = 0;
const ok = (c, label, extra) => {
  if (c) console.log('  ✓ ' + label);
  else { fail++; console.log('  ✗ ' + label + (extra !== undefined ? '  → ' + extra : '')); }
};

function makeEl(tag, registry) {
  const e = {
    tagName: String(tag || 'div').toUpperCase(), hidden: false, className: '', value: '',
    _text: '', innerHTML: '', selectedIndex: 0, children: [], _ev: {},
    appendChild(c) { this.children.push(c); return c; },
    addEventListener(t, f) { this._ev[t] = f; },
    classList: { add() {}, remove() {}, contains() { return false; } },
    focus() {}, blur() {}, querySelector() { return null; }, setAttribute() {}, getAttribute() { return null; },
    getBoundingClientRect() { return { width: 100, height: 20, x: 0, y: 0 }; },
    _id: '',
  };
  Object.defineProperty(e, 'textContent', { get() { return e._text; }, set(v) { e._text = String(v); } });
  // feedback.js 的 wrap 是用 .id='fbWrap' 属性赋值的，不走 innerHTML —— 也要注册进去
  Object.defineProperty(e, 'id', {
    get() { return e._id; },
    set(v) { e._id = String(v); if (registry) registry[e._id] = e; },
  });
  return e;
}

/* 用最小解析把 innerHTML 里的 id / name+value 变成可断言的桩 */
function parseInto(html, registry) {
  for (const m of html.matchAll(/<(form|input|textarea|select|label|button|p|h2|div)\b([^>]*)>/g)) {
    const attrs = m[2];
    const id = (/\bid="([^"]*)"/.exec(attrs) || [])[1];
    const name = (/\bname="([^"]*)"/.exec(attrs) || [])[1];
    const val = (/\bvalue="([^"]*)"/.exec(attrs) || [])[1];
    const e = makeEl(m[1], registry);
    if (val) e.value = val;
    e._name = name || '';
    if (id) registry[id] = e;
    if (name) registry['@' + name] = e;
  }
}

function boot(lang, href) {
  const registry = {};
  // index.html 里的两个入口按钮先预置（它们不在 JS 创建的 DOM 里）。
  // 它们真实存在这件事由 tools/check_dom_ids.js 保证，这里只补上 shim。
  for (const id of ['btnReportArticle', 'btnFeedback']) {
    const b = makeEl('button', registry);
    b.id = id;
  }
  const body = makeEl('body');
  const doc = {
    body,
    createElement: (t) => {
      const e = makeEl(t, registry);
      // innerHTML 一旦被赋值，就把里面的 id / name 注册进来
      let _h = '';
      Object.defineProperty(e, 'innerHTML', {
        get() { return _h; },
        set(v) { _h = String(v); parseInto(_h, registry); },
      });
      return e;
    },
    getElementById: (id) => registry[id] || null,
    querySelector: () => null,
    addEventListener() {},
  };
  const sb = {
    window: {}, document: doc, console,
    location: { href: href || 'https://hanbinglei.github.io/H5-Kyudaiguide/guide/#article/guide-housing' },
    __registry: registry,
  };
  sb.window = sb;
  const ctx = vm.createContext(sb);
  ctx.window = ctx;
  for (const f of ['i18n.js', 'feedback.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8'), ctx, { filename: f });
  }
  ctx.GuideI18N.setLang(lang || 'zh');
  return { ctx, reg: registry };
}

const wrapOf = (reg) => reg.fbWrap;

console.log('=== ① action 与隐私：绝不能出现个人邮箱 ===');
{
  const { ctx, reg } = boot();
  ctx.Feedback.open('general', '');            // build() 是懒加载，必须先 open
  const w = wrapOf(reg);
  ok(!!w, '面板已创建', w ? '' : 'null');
  // action 在 innerHTML 字符串里，直接从源码常量核对更可靠
  const src = fs.readFileSync(path.join(ROOT, 'guide', 'js', 'feedback.js'), 'utf8');
  const m = /const ENDPOINT\s*=\s*'([^']+)'/.exec(src);
  const endpoint = m ? m[1] : '';
  console.log('     ENDPOINT = ' + endpoint);
  ok(/^https:\/\/formsubmit\.co\/[^/]+@[^/]+$/.test(endpoint), '是 formsubmit.co 的地址');
  ok(/kyudaiguide@gmail\.com$/.test(endpoint), '收件人是 kyudaiguide@gmail.com');
  ok(!/126\.com|qq\.com|163\.com|jingpenghan/i.test(endpoint), '不含个人邮箱');
}

console.log('\n=== ② 蜜罐与模板 ===');
{
  const { ctx, reg } = boot();
  ctx.Feedback.open('general', '');
  ok(!!reg['@_honey'], '蜜罐字段 _honey 存在');
  ok(reg['@_template'] && reg['@_template'].value === 'table', '邮件模板 = table', reg['@_template'] && reg['@_template'].value);
  ok(!!reg['@_subject'] && !!reg['@_next'], '_subject / _next 都在');
  ok(!!reg.fbMsg && !!reg.fbEmail, '说明与联系方式字段都在');
}

console.log('\n=== ③ 提交时 _subject 必须带 [KyudaiGuide] 标记 ===');
{
  const { ctx, reg } = boot('zh');
  ctx.Feedback.open('article', '租房');
  reg.fbForm._ev.submit();                     // 触发提交前处理器
  const subj = reg['@_subject'].value;
  console.log('     _subject = ' + JSON.stringify(subj));
  ok(subj.indexOf('[KyudaiGuide]') === 0, '以 [KyudaiGuide] 开头', subj);
  ok(subj.indexOf('租房') > 0, '带上了文章名（维护者不用再问是哪一篇）', subj);
  ok(/^https:\/\/hanbinglei\.github\.io\/H5-Kyudaiguide\/guide\//.test(reg['@_next'].value), '_next 指回本站', reg['@_next'].value);
  ok(reg['@page'].value.indexOf('#article/') > 0, 'page 记录了具体页面', reg['@page'].value);
  ok(reg['@article'].value === '租房', 'article 字段 = 文章名', reg['@article'].value);
}

console.log('\n=== ④ 综合反馈（无文章）也能用 ===');
{
  const { ctx, reg } = boot('zh');
  ctx.Feedback.open('general', '');
  reg.fbForm._ev.submit();
  const subj = reg['@_subject'].value;
  console.log('     _subject = ' + JSON.stringify(subj));
  ok(subj.indexOf('[KyudaiGuide]') === 0, '仍以标记开头', subj);
  ok(!/ - /.test(subj), '不带文章名', subj);
  ok(reg['@article'].value === '', 'article 字段为空');
}

console.log('\n=== ⑤ 四语文案 ===');
for (const [L, want] of [['ja', /問題を報告/], ['en', /Report a problem/], ['ko', /문제 신고/]]) {
  const { ctx, reg } = boot(L);
  ctx.Feedback.open('article', 'x');
  const title = (reg.fbTitle || {}).textContent || '';
  ok(want.test(title), L + ' 面板标题', title);
  ok((reg.fbSend || {}).textContent && (reg.fbSend.textContent || '').trim().length > 0, L + ' 发送按钮有文字', (reg.fbSend || {}).textContent);
  ok((reg.fbType || {}).selectedIndex === 0, L + ' 类型下拉的选中项有效');
}

console.log('\n=== ⑥ 入口按钮的文案随语言重算 ===');
{
  const { ctx, reg } = boot('zh');
  ctx.Feedback.open('general', '');
  const a = reg.btnReportArticle, g = reg.btnFeedback;
  ok(!!a && !!g, '两个入口按钮都在 DOM 里（check_dom_ids 也会兜底）');
  ctx.Feedback.relabel();
  console.log('     中: ' + a.textContent + ' / ' + g.textContent);
  ctx.GuideI18N.setLang('en'); ctx.Feedback.relabel();
  console.log('     英: ' + a.textContent + ' / ' + g.textContent);
  ok(/Found an error/.test(a.textContent), '切英文后入口文案跟着变', a.textContent);
  ok(a.textContent !== 'fbEntryArticle', '没有把 key 当文案显示（缺译的典型症状）', a.textContent);
}

console.log('\n' + (fail ? '✗ ' + fail + ' 项未通过' : '✓ 全部通过'));
process.exit(fail ? 1 : 0);
