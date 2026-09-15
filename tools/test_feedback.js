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

let CURRENT_DOC = null;
function makeEl(tag, registry) {
  const e = {
    tagName: String(tag || 'div').toUpperCase(), hidden: false, className: '', value: '',
    _text: '', innerHTML: '', selectedIndex: 0, children: [], _ev: {},
    appendChild(c) { this.children.push(c); return c; },
    addEventListener(t, f) { this._ev[t] = f; },
    classList: (function () {
      const set = new Set();
      return { add: (c) => set.add(c), remove: (c) => set.delete(c), contains: (c) => set.has(c) };
    })(),
    _attrs: {},
    focus() { if (CURRENT_DOC) CURRENT_DOC.activeElement = e; },
    blur() {}, querySelector() { return null; },
    setAttribute(k, v) { e._attrs[k] = String(v); },
    getAttribute(k) { return k in e._attrs ? e._attrs[k] : (k === 'href' ? null : null); },
    removeAttribute(k) { delete e._attrs[k]; },
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

function boot(lang, href, endpoint) {
  const registry = {};
  // index.html 里的两个入口按钮先预置（它们不在 JS 创建的 DOM 里）。
  // 它们真实存在这件事由 tools/check_dom_ids.js 保证，这里只补上 shim。
  for (const id of ['btnReportArticle', 'btnFeedback', 'btnFeedbackFab', 'supportCard']) {
    const b = makeEl('button', registry);
    b.id = id;
  }
  const body = makeEl('body');
  const doc = {
    body, activeElement: null,
    createElement: (t) => {
      const e = makeEl(t, registry);
      // innerHTML 一旦被赋值，就把里面的 id / name 注册进来
      let _h = '';
      Object.defineProperty(e, 'innerHTML', {
        get() { return _h; },
        set(v) {
          _h = String(v);
          parseInto(_h, registry);
          // shim 的限制：解析出来的桩元素自身 _h 是空的，而 feedback.js 会
          // 记住 <form> 的骨架用于成功态之后还原。这里把 <form>…</form> 那一段
          // 真正存到 fbForm 桩上，否则「记住的骨架」会是空串。
          const fm = /<form[\s\S]*?<\/form>/.exec(_h);
          // 注意：桩元素的 innerHTML 是普通属性（不是这里的 _h），要写 innerHTML
          if (fm && registry.fbForm) registry.fbForm.innerHTML = fm[0];
        },
      });
      return e;
    },
    getElementById: (id) => registry[id] || null,
    querySelector: () => null,
    addEventListener() {},
  };
  CURRENT_DOC = doc;
  const sb = {
    window: {}, document: doc, console,
    location: { href: href || 'https://hanbinglei.github.io/H5-Kyudaiguide/guide/#article/guide-housing' },
    __registry: registry,
  };
  sb.__fetches = [];
  sb.fetch = (url, opts) => { sb.__fetches.push({ url: url, opts: opts || {} }); return Promise.resolve({}); };
  sb.URLSearchParams = URLSearchParams;
  sb.FormData = function () {};                 // 只用于构造，内容不断言
  sb.window = sb;
  const ctx = vm.createContext(sb);
  ctx.window = ctx;
  for (const f of ['i18n.js', 'feedback.js']) {
    let src = fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8');
    // endpoint 参数用于注入测试用后端；不传则保持源码原样（= 未配置状态）
    if (f === 'feedback.js' && endpoint !== undefined) {
      src = src.replace(/const ENDPOINT = '[^']*';/, "const ENDPOINT = '" + endpoint + "';");
    }
    vm.runInContext(src, ctx, { filename: f });
  }
  ctx.GuideI18N.setLang(lang || 'zh');
  return { ctx, reg: registry };
}

const wrapOf = (reg) => reg.fbWrap;
const ctx_click = (ctx, el) => (el && el._ev && el._ev.click ? el._ev.click() : null);

(async () => {
console.log('=== ① action 与隐私：绝不能出现个人邮箱 ===');
{
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.open('general', '');            // build() 是懒加载，必须先 open
  const w = wrapOf(reg);
  ok(!!w, '面板已创建', w ? '' : 'null');
  // action 在 innerHTML 字符串里，直接从源码常量核对更可靠
  const src = fs.readFileSync(path.join(ROOT, 'guide', 'js', 'feedback.js'), 'utf8');
  const m = /const ENDPOINT\s*=\s*'([^']+)'/.exec(src);
  const endpoint = m ? m[1] : '';
  ok(/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(endpoint),
     '源码 ENDPOINT 是 Apps Script 网页应用地址', endpoint.slice(0, 70) + '…');
  ok(!/126\.com|qq\.com|jingpenghan/i.test(endpoint), 'ENDPOINT 里不含个人邮箱');
  console.log('     源码 ENDPOINT = ' + endpoint.slice(0, 62) + '…');
  ok(/exec$/.test(endpoint), '地址以 /exec 结尾（Apps Script 网页应用的正确形态）');
}

console.log('\n=== ①b 后端未配置时：入口撤下、open() 无效 ===');
{
  const { ctx, reg } = boot('zh', null, '');    // 显式注入空 endpoint → 未启用
  ctx.Feedback.init();
  ok(reg.btnReportArticle.hidden === true, '纠错入口被隐藏', String(reg.btnReportArticle.hidden));
  ok(reg.btnFeedback.hidden === true, '综合入口被隐藏', String(reg.btnFeedback.hidden));
  ctx.Feedback.open('article', '租房');
  ok(reg.fbWrap === undefined || reg.fbWrap.hidden === true, 'open() 不打开面板');
}

console.log('\n=== ② 蜜罐与模板 ===');
{
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.open('general', '');
  ok(!!reg['@_honey'], '蜜罐字段 _honey 存在');
  ok(reg['@_template'] && reg['@_template'].value === 'table', '邮件模板 = table', reg['@_template'] && reg['@_template'].value);
  ok(!!reg['@_subject'] && !!reg['@_next'], '_subject / _next 都在');
  ok(!!reg.fbMsg && !!reg.fbEmail, '说明与联系方式字段都在');
}

console.log('\n=== ③ 提交时 _subject 必须带 [KyudaiGuide] 标记 ===');
{
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.open('article', '租房');
  reg.fbForm._ev.submit({ preventDefault() {} });   // 触发提交前处理器
  const subj = reg['@_subject'].value;
  console.log('     _subject = ' + JSON.stringify(subj));
  ok(subj.indexOf('[KyudaiGuide]') === 0, '以 [KyudaiGuide] 开头', subj);
  ok(subj.indexOf('租房') > 0, '带上了文章名（维护者不用再问是哪一篇）', subj);
  ok(/^https:\/\/hanbinglei\.github\.io\/H5-Kyudaiguide\/guide\//.test(reg['@_next'].value), '_next 指回本站', reg['@_next'].value);
  ok(reg['@page'].value.indexOf('#article/') > 0, 'page 记录了具体页面', reg['@page'].value);
  ok(reg['@article'].value === '租房', 'article 字段 = 文章名', reg['@article'].value);
}

console.log('\n=== ③b open() 之后就必须填好 hidden（不依赖 submit 事件） ===');
{
  // 程序化 form.submit() 不派发 submit 事件 —— 只把赋值挂在 submit 上，
  // 这样提交出去的邮件主题就不带标记，126 的分类规则收不到。实测踩到过。
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.open('article', '在留手续');
  const subj = reg['@_subject'].value;
  ok(!!subj, 'open() 后 _subject 已有值（未触发 submit）', JSON.stringify(subj));
  ok(subj.indexOf('[KyudaiGuide]') === 0, 'open() 后已带标记', subj);
  ok(!!reg['@_next'].value, 'open() 后 _next 已填（否则提交后不回到本站）', JSON.stringify(reg['@_next'].value));
  ok(reg['@article'].value === '在留手续', 'open() 后 article 已填', reg['@article'].value);
}

console.log('\n=== ③c 提交走站内 fetch（不跳转到 Google 的裸 JSON 页） ===');
{
  const { ctx, reg, sb } = (function () { const b = boot('zh', null, 'https://script.google.com/macros/s/TEST/exec'); return { ...b, sb: b.ctx }; })();
  ctx.Feedback.open('article', '租房');
  reg.fbForm._ev.submit({ preventDefault() {}, });
  await new Promise((r) => setTimeout(r, 30));
  const calls = ctx.__fetches || [];
  ok(calls.length === 1, '提交触发了一次 fetch', calls.length + ' 次');
  ok(calls[0] && calls[0].url === 'https://script.google.com/macros/s/TEST/exec', '打到 ENDPOINT', calls[0] && calls[0].url);
  ok(calls[0] && calls[0].opts && calls[0].opts.method === 'POST', '方法是 POST');
  ok(calls[0] && calls[0].opts && calls[0].opts.mode === 'no-cors', 'mode=no-cors（否则会被 CORS 拦）');
  await new Promise((r) => setTimeout(r, 30));
  ok(/已发送/.test(reg.fbForm.innerHTML || ''), '成功后表单换成确认文案', (reg.fbForm.innerHTML || '').slice(0, 60));
}

console.log('\n=== ④ 综合反馈（无文章）也能用 ===');
{
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.open('general', '');
  reg.fbForm._ev.submit({ preventDefault() {} });
  const subj = reg['@_subject'].value;
  console.log('     _subject = ' + JSON.stringify(subj));
  ok(subj.indexOf('[KyudaiGuide]') === 0, '仍以标记开头', subj);
  ok(!/ - /.test(subj), '不带文章名', subj);
  ok(reg['@article'].value === '', 'article 字段为空');
}

console.log('\n=== ④b 提交成功 → 关闭 → 重开：必须回到空表单 ===');
{
  // 实测踩到：成功态把表单 innerHTML 换掉了，重开时看到的是 0 个字段的确认页，
  // 不刷新页面就再也提交不了第二次。
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.open('article', '租房');
  reg.fbForm._ev.submit({ preventDefault() {} });
  await new Promise((r) => setTimeout(r, 30));
  ok(reg.fbForm.getAttribute('data-sent') === '1', '成功后表单打了 sent 标记');
  ok(!reg.fbMsg || reg.fbForm.innerHTML.indexOf('fb-ok') >= 0, '表单已换成成功态');
  ctx.Feedback.close();
  ctx.Feedback.open('article', '租房');
  ok(reg.fbForm.getAttribute('data-sent') === null, '重开后 sent 标记被清掉');
  ok((reg.fbForm.innerHTML || '').indexOf('fb-ok') < 0, '重开后不再是成功态');
  ok((reg.fbForm.innerHTML || '').indexOf('name="detail"') >= 0, '重开后表单字段回来了');
}

console.log('\n=== ④c 关闭时焦点归还给触发按钮 ===');
{
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.init();
  reg.btnReportArticle.focus();
  ok(ctx.document.activeElement === reg.btnReportArticle, '先把焦点放在入口按钮上');
  ctx.Feedback.open('article', '租房');
  ok(ctx.document.activeElement === reg.fbMsg, '打开后焦点进到说明框', (ctx.document.activeElement || {}).id);
  ctx.Feedback.close();
  ok(ctx.document.activeElement === reg.btnReportArticle, '关闭后焦点回到入口按钮', (ctx.document.activeElement || {}).id);
}

console.log('\n=== ④d 打开时锁背景滚动（此前只有类名没有 CSS 规则）===');
{
  const { ctx } = boot('zh', null, 'https://example.test/form');
  const cls = ctx.document.body.classList;
  ctx.Feedback.open('general', '');
  ok(cls.contains('fb-open') === true, '打开时 body 有 fb-open');
  ctx.Feedback.close();
  ok(cls.contains('fb-open') === false, '关闭后移除 fb-open');
  const css = fs.readFileSync(path.join(ROOT, 'guide', 'css', 'style.css'), 'utf8');
  ok(/body\.fb-open\s*\{[^}]*overflow\s*:\s*hidden/.test(css), 'CSS 里确有对应的 overflow:hidden 规则');
}

console.log('\n=== ④e 来源 token：能看出是从哪个入口提交的 ===');
{
  const cases = [
    ['article-footer', (f) => { const a = f.reg.btnReportArticle; ctx_click(f.ctx, a); }],
  ];
  for (const [want, act] of cases) {
    const f = boot('zh', null, 'https://example.test/form');
    f.ctx.Feedback.init();
    act(f);
    ok(f.reg['@source'].value === want, '来源 token = ' + want, f.reg['@source'].value);
    ok(/｜\s*来源: /.test(f.reg['@page'].value), 'page 里带上了来源（当前脚本不用升级就能看到）', f.reg['@page'].value.slice(-40));
  }
  // 悬浮按钮：有文章时是 article 类，来源标 article-fab
  const f2 = boot('zh', null, 'https://example.test/form');
  f2.ctx.__fbArticleTitle = '租房';
  f2.ctx.Feedback.init();
  f2.reg.btnFeedbackFab._ev.click();
  ok(f2.reg['@source'].value === 'article-fab', '悬浮按钮的来源 = article-fab', f2.reg['@source'].value);
  ok(f2.reg['@article'].value === '租房', '悬浮按钮也带上了文章名', f2.reg['@article'].value);
  // 指南页底部入口
  const f3 = boot('zh', null, 'https://example.test/form');
  f3.ctx.Feedback.init();
  f3.reg.btnFeedback._ev.click();
  ok(f3.reg['@source'].value === 'grid-footer', '指南页入口的来源 = grid-footer', f3.reg['@source'].value);
}

console.log('\n=== ④f 悬浮按钮与支持卡片 ===');
{
  const f = boot('zh', null, 'https://example.test/form');
  f.ctx.Feedback.init();
  const fab = f.reg.btnFeedbackFab;
  ok(/反馈/.test(fab.textContent || ''), '悬浮按钮有中文文案', fab.textContent);
  ok(!!fab.title, '有 title 提示', fab.title);
  f.ctx.GuideI18N.setLang('en'); f.ctx.Feedback.relabel();
  ok(/Feedback/.test(fab.textContent || ''), '切英文后悬浮按钮跟着变', fab.textContent);
  f.ctx.GuideI18N.setLang('zh'); f.ctx.Feedback.relabel();

  const card = f.reg.supportCard;
  ok(card.innerHTML.length > 0, '支持卡片已渲染');
  ok(card.hidden === false, '支持卡片可见');
  const html = card.innerHTML || '';
  ok(/github\.com\/hanbinglei\/H5-Kyudaiguide/.test(html), '含项目 GitHub 链接');
  ok(/target="_blank"/.test(html) && /rel="noopener"/.test(html), '外链用新窗口 + noopener');
  ok(/点个 star/.test(html), '含 star 引导文案');
  ok(/supShare/.test(html), '含复制链接分享的按钮');
}

console.log('\n=== ④g 未启用时：悬浮按钮与支持卡片也一起撤下 ===');
{
  const f = boot('zh', null, '');
  f.ctx.Feedback.init();
  ok(f.reg.btnFeedbackFab.hidden === true, '悬浮按钮被隐藏');
  ok(f.reg.supportCard.hidden === true, '支持卡片被隐藏');
}

console.log('\n=== ⑤ 四语文案 ===');
for (const [L, want] of [['ja', /問題を報告/], ['en', /Report a problem/], ['ko', /문제 신고/]]) {
  const { ctx, reg } = boot(L, null, 'https://example.test/form');
  ctx.Feedback.open('article', 'x');
  const title = (reg.fbTitle || {}).textContent || '';
  ok(want.test(title), L + ' 面板标题', title);
  ok((reg.fbSend || {}).textContent && (reg.fbSend.textContent || '').trim().length > 0, L + ' 发送按钮有文字', (reg.fbSend || {}).textContent);
  ok((reg.fbType || {}).selectedIndex === 0, L + ' 类型下拉的选中项有效');
}

console.log('\n=== ⑤c 面板未打开时入口按钮也必须有文字（懒加载的坑） ===');
{
  // 面板是懒加载的：不点开就不 build。若把入口按钮的文案放在 build 守卫之后，
  // 读者第一次看到的就是两个空白按钮 —— 实测线上就是这个症状。
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
  ctx.Feedback.init();                          // 只初始化，不 open
  const a = reg.btnReportArticle, g = reg.btnFeedback;
  ok(a.textContent && a.textContent.trim().length > 0, '未打开面板时纠错入口有文字', JSON.stringify(a.textContent));
  ok(g.textContent && g.textContent.trim().length > 0, '未打开面板时综合入口有文字', JSON.stringify(g.textContent));
  ctx.GuideI18N.setLang('ja'); ctx.Feedback.relabel();
  ok(/誤りを見つけたら/.test(a.textContent), '此时切语言也能跟着变', a.textContent);
}

console.log('\n=== ⑥ 入口按钮的文案随语言重算 ===');
{
  const { ctx, reg } = boot('zh', null, 'https://example.test/form');
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
})();
