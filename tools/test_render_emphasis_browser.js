#!/usr/bin/env node
/**
 * 真实浏览器布局验证：三种字形、电话/互引/链接、表格及折叠块在窄屏与大字号下完整可读。
 * 只加载本地源码到隔离页面，所有网络请求被阻止；不是移动真机或已发布网站验收。
 * 用法：PLAYWRIGHT_MODULE 指向已有 Playwright；H5_BROWSER_CHANNEL 可指定 msedge。
 * H5_EMPHASIS_SCREENSHOT_DIR 可指定截图目录，记录320px/200%的样例及实际英文正文。
 */
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const engines = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const screenshotDir = process.env.H5_EMPHASIS_SCREENSHOT_DIR;
if (screenshotDir) fs.mkdirSync(screenshotDir, { recursive: true });
/** 在测试稿确定的原文中生成完整区间。 */
function mark(text, selected, style = 'bold') { const start = text.indexOf(selected); assert(start >= 0); return { start, end: start + selected.length, style, quote: selected }; }
const text = '请先预约，仅工作日办理（Appointment）。拨 092-802-0000，见【交通·预约条件与办理所需材料及特殊情况说明】。';
const marks = [mark(text, '先预约'), mark(text, '仅工作日', 'underline'), mark(text, 'Appointment', 'italic'), mark(text, '092-802', 'underline')];
const longURL = 'https://isc.kyushu-u.ac.jp/w2/appointments-and-special-conditions';
const fixtures = [
  ...['paragraph', 'notice', 'warning', 'quote'].map(type => ({ type, text, emphasis: { text: marks } })),
  { type: 'paragraph', text: longURL, emphasis: { text: [mark(longURL, 'appointments', 'bold')] } },
  { type: 'steps', items: [{ title: '先预约', desc: text }], emphasis: { 'items.0.title': [mark('先预约', '预约', 'underline')], 'items.0.desc': marks } },
  { type: 'list', items: [{ text }], emphasis: { 'items.0.text': marks } },
  { type: 'checklist', items: [{ text }], emphasis: { 'items.0.text': marks } },
  { type: 'fee_table', headers: ['办理条件', '联系方式', '费用'], rows: [['仅工作日（Appointment）', '092-802-0000', '1200円']],
    emphasis: { 'headers.0': [mark('办理条件', '条件', 'italic')], 'rows.0.0': [mark('仅工作日（Appointment）', '仅工作日', 'underline')], 'rows.0.1': [mark('092-802-0000', '092-802')] } },
  { type: 'collapse', title: '办理前检查', blocks: [{ type: 'paragraph', text, emphasis: { text: marks } }], emphasis: { title: [mark('办理前检查', '办理前', 'underline')] } },
  { type: 'paragraph', text: '<img src=x onerror="window.__injected=true"> *普通星号*', emphasis: { text: [{ start: 1, end: 4, style: 'bold' }] } },
  { type: 'links', items: [{ text: '恶意地址保持可见', url: 'javascript:window.__injected=true' }] },
  { type: 'paragraph', text: '请提前先预约，带护照', emphasis: { text: [mark('请先预约，带护照', '先预约')] } }
];
// 复用生产合并函数和当前资料，以只读方式覆盖18篇正文的五种语言。
const actualCtx = { window: {} };
for (const name of ['data-articles.js', 'articles-body-i18n.js']) vm.runInNewContext(fs.readFileSync(path.join(root, 'guide/js', name), 'utf8'), actualCtx);
const mergeSource = fs.readFileSync(path.join(root, 'guide/js/app.js'), 'utf8').match(/function mergeBlocks\(blocks,map\)\{[\s\S]*?\n\}/);
assert(mergeSource, '未找到生产译文覆盖函数');
const merge = vm.runInNewContext(mergeSource[0] + ';mergeBlocks');
const actualBodies = actualCtx.window.ARTICLES.flatMap(article => ['zh', 'ja', 'en', 'ko', 'es'].map(lang => ({
  label: article._id + '/' + lang,
  blocks: lang === 'zh' ? article.blocks : merge(article.blocks, (actualCtx.window.ARTICLES_BODY_I18N[article._id] || {})[lang] || {})
})));
/** 测量实际DOM盒模型和字形；重新建页面避免上一轮缩放残留。 */
async function main() {
  let browser, checks = 0;
  try {
    const engine = process.env.H5_BROWSER_ENGINE || 'chromium';
    browser = await engines[engine].launch({ headless: true, ...(engine === 'chromium' && process.env.H5_BROWSER_CHANNEL ? { channel: process.env.H5_BROWSER_CHANNEL } : {}) });
    for (const width of [320, 375, 390, 768]) for (const scale of [1, 2, 3]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const errors = []; page.on('pageerror', e => errors.push(e.message));
      await page.route('**/*', route => route.abort());
      await page.setContent('<!doctype html><html><head><meta charset="utf-8"></head><body><main id="fixture" class="article-body"></main></body></html>');
      await page.addStyleTag({ content: fs.readFileSync(path.join(root, 'guide/css/style.css'), 'utf8') });
      await page.addScriptTag({ content: fs.readFileSync(path.join(root, 'guide/js/render.js'), 'utf8') });
      await page.evaluate(({ fixtures, scale }) => {
        document.getElementById('fixture').innerHTML = window.GuideRender.renderBlocks(fixtures);
        document.querySelectorAll('details').forEach(e => { e.open = true; });
        const fonts = [...document.querySelectorAll('#fixture, #fixture *')].map(e => ({ e, size: parseFloat(getComputedStyle(e).fontSize) }));
        fonts.forEach(({ e, size }) => { e.style.fontSize = (size * scale) + 'px'; });
      }, { fixtures, scale });
      const state = await page.evaluate(() => {
        const clicks = [];
        for (const selector of ['.tel', '.ref', '.inline-url']) {
          const target = document.querySelector('#fixture ' + selector);
          target.addEventListener('click', event => {
            event.preventDefault();
            clicks.push({ kind: selector, tel: event.currentTarget.dataset.tel, guide: event.currentTarget.dataset.guide, href: event.currentTarget.getAttribute('href') });
          });
          (target.querySelector('strong,em,u') || target).click();
        }
        return {
        clicks,
        injected: !!window.__injected,
        htmlNodes: document.querySelectorAll('#fixture img,#fixture script,#fixture a[href^="javascript:"]').length,
        strong: document.querySelectorAll('#fixture strong').length,
        italic: document.querySelectorAll('#fixture em').length,
        underline: document.querySelectorAll('#fixture u').length,
        boldStyle: getComputedStyle(document.querySelector('#fixture strong')).fontWeight,
        italicStyle: getComputedStyle(document.querySelector('#fixture em')).fontStyle,
        underlineStyle: getComputedStyle(document.querySelector('#fixture u')).textDecorationLine,
        staleEmphasis: [...document.querySelectorAll('#fixture p')].find(e => e.textContent === '请提前先预约，带护照').querySelectorAll('strong,em,u').length,
        tel: document.querySelectorAll('#fixture a[href="tel:0928020000"]').length,
        ref: document.querySelectorAll('#fixture button.ref[data-guide="交通"]').length,
        overflow: [...document.querySelectorAll('html,body,.article-body,.notice,.warning,.quote,.step-body,.ar-list-text,.table-wrap,.ref,.tel')]
          .filter(e => e.scrollWidth > e.clientWidth + 1)
          .map(e => ({ name: e.className || e.tagName, width: e.clientWidth, scroll: e.scrollWidth }))
      }; });
      assert.equal(state.injected, false, '恶意正文执行了脚本'); checks++;
      assert.equal(state.htmlNodes, 0, '正文创建了HTML执行入口'); checks++;
      assert(state.strong > 5 && state.italic > 5 && state.underline > 5, '三种强调没有实际渲染'); checks++;
      assert(Number(state.boldStyle) >= 700 && state.italicStyle === 'italic' && state.underlineStyle.includes('underline'), '强调标签没有实际字体样式'); checks++;
      assert.equal(state.staleEmphasis, 0, '编辑前缀后的过期quote仍在浏览器中强调错误文字'); checks++;
      assert(state.tel >= 8 && state.ref >= 8, '强调后电话或互引点击目标缺失'); checks++;
      assert(state.clicks.length === 3 && state.clicks[0].tel === '092-802-0000' && state.clicks[1].guide === '交通' && state.clicks[2].href === longURL, '点击格式子节点未保留完整按钮目标'); checks++;
      assert.deepEqual(state.overflow, [], '窄屏/大字号横向溢出 ' + width + '/' + scale + ': ' + JSON.stringify(state.overflow)); checks++;
      assert.deepEqual(errors, [], '浏览器运行错误'); checks++;
      if (screenshotDir && width === 320 && scale === 2) await page.screenshot({ path: path.join(screenshotDir, 'emphasis-fixture-320-200.png') });
      console.log('PASS ' + width + 'px / ' + scale * 100 + '%');
      await page.close();
    }
    const page = await browser.newPage({ viewport: { width: 320, height: 900 } });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.route('**/*', route => route.abort());
    await page.setContent('<!doctype html><html><head><meta charset="utf-8"></head><body><main id="fixture" class="article-body"></main></body></html>');
    await page.addStyleTag({ content: fs.readFileSync(path.join(root, 'guide/css/style.css'), 'utf8') });
    await page.addScriptTag({ content: fs.readFileSync(path.join(root, 'guide/js/render.js'), 'utf8') });
    for (const actual of actualBodies) {
      const state = await page.evaluate(blocks => {
        const fixture = document.getElementById('fixture');
        fixture.style.fontSize = '';
        fixture.innerHTML = window.GuideRender.renderBlocks(blocks);
        fixture.querySelectorAll('details').forEach(e => { e.open = true; });
        const fonts = [...document.querySelectorAll('#fixture, #fixture *')].map(e => ({ e, size: parseFloat(getComputedStyle(e).fontSize) }));
        fonts.forEach(({ e, size }) => { e.style.fontSize = (size * 2) + 'px'; });
        return {
          nestedTargets: fixture.querySelectorAll('a a,a button,button a,button button').length,
          unsafeURLs: [...fixture.querySelectorAll('a[href]')].filter(a => !/^(https?:|tel:)/i.test(a.getAttribute('href'))).length,
          overflow: [...document.querySelectorAll('html,body,.article-body,.notice,.warning,.quote,.step-body,.ar-list-text,.table-wrap,.ref,.tel,.link-card')]
            .filter(e => e.scrollWidth > e.clientWidth + 1).map(e => ({ name: e.className || e.tagName, width: e.clientWidth, scroll: e.scrollWidth }))
        };
      }, actual.blocks);
      assert.equal(state.nestedTargets, 0, actual.label + ' 实际稿产生嵌套点击目标'); checks++;
      assert.equal(state.unsafeURLs, 0, actual.label + ' 实际稿产生危险链接'); checks++;
      assert.deepEqual(state.overflow, [], actual.label + ' 实际正文320px/200%横向溢出: ' + JSON.stringify(state.overflow)); checks++;
      if (screenshotDir && actual.label === 'guide-entry/en') await page.screenshot({ path: path.join(screenshotDir, 'guide-entry-en-320-200.png') });
    }
    assert.equal(actualBodies.length, 90, '18篇五语实际正文缺失'); checks++;
    assert.deepEqual(errors, [], '真实正文浏览器运行错误'); checks++;
    await page.close();
    console.log('PASS 90 actual article/language bodies at 320px / 200%');
    console.log('PASS ' + checks + ' checks / 0 failures; local browser only, all network blocked.');
  } finally { if (browser) await browser.close(); }
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
