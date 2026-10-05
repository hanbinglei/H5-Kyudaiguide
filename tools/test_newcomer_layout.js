'use strict';
/** 完整新生页窄屏回归，包含初始化后的真实巴士模块。
 * 外网与POST全部阻断；分别检查停运日与历史开行日，不把静态正文夹具当运行期验收。
 */
const fs = require('fs'), path = require('path'), http = require('http'), assert = require('assert');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
/** 临时只读服务，限制在工作副本内，结束释放端口。 */
function serve(req, res) {
  let file = path.resolve(root, '.' + decodeURIComponent(req.url.split('?')[0]));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  try { res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream'); res.end(fs.readFileSync(file)); }
  catch (_) { res.writeHead(404); res.end(); }
}
/** 读取可见正文和运行模块实际盒模型；内部滚动也算失败，不能用裁切掩盖。 */
function overflow() {
  return [...document.querySelectorAll('.sheet-card,.article-header,.article-body,.table-wrap,.bus-live,.bus-live-table')].filter(e => e.clientWidth <= 0 || e.scrollWidth > e.clientWidth + 1).map(e => ({ cls: e.className, width: e.clientWidth, scroll: e.scrollWidth }));
}
async function main() {
  const server = http.createServer(serve); await new Promise(r => server.listen(0, '127.0.0.1', r));
  let browser, checks = 0;
  try {
    browser = await chromium.launch({ headless: true, ...(process.env.H5_BROWSER_CHANNEL ? { channel: process.env.H5_BROWSER_CHANNEL } : {}) });
    const origin = 'http://127.0.0.1:' + server.address().port;
    for (const date of ['2026-10-05T03:30:00Z', '2026-09-30T01:35:00Z']) for (const width of [320, 375, 390]) {
      const context = await browser.newContext({ viewport: { width, height: 850 }, serviceWorkers: 'block' });
      await context.route('**/*', r => r.request().method() === 'GET' && new URL(r.request().url()).origin === origin ? r.continue() : r.abort());
      const page = await context.newPage(), errors = []; page.on('pageerror', e => errors.push(e.message));
      await page.clock.setFixedTime(new Date(date));
      await page.addInitScript(() => { localStorage.setItem('kg_tour_v1', '1'); });
      await page.goto(origin + '/guide/#article/guide-newcomer');
      for (const lang of ['zh', 'ja', 'en', 'ko', 'es']) {
        await page.selectOption('#langSwitch', lang);
        await page.waitForFunction(l => document.documentElement.lang === (l === 'zh' ? 'zh-Hans' : l) && document.querySelector('.bus-live-table') && (l === 'zh' || window.ARTICLES_BODY_I18N?.['guide-newcomer']?.[l]), lang);
        assert.deepStrictEqual(await page.evaluate(overflow), [], date + '/' + width + '/' + lang); checks++;
        const large = await page.evaluate(() => {
          const nodes = [...document.querySelectorAll('#articleHeader, #articleHeader *, #articleBody, #articleBody *')];
          const fonts = nodes.map(e => ({ e, original: e.style.fontSize, size: parseFloat(getComputedStyle(e).fontSize) }));
          fonts.forEach(f => { f.e.style.fontSize = f.size * 2 + 'px'; });
          const bad = [...document.querySelectorAll('.sheet-card,.article-header,.article-body,.table-wrap,.bus-live,.bus-live-table')].filter(e => e.clientWidth <= 0 || e.scrollWidth > e.clientWidth + 1).map(e => ({ cls: e.className, width: e.clientWidth, scroll: e.scrollWidth }));
          fonts.forEach(f => { f.e.style.fontSize = f.original; }); return bad;
        });
        assert.deepStrictEqual(large, [], '200% ' + date + '/' + width + '/' + lang); checks++;
      }
      assert.deepStrictEqual(errors, []); checks++; await context.close();
    }
    console.log('Newcomer runtime layout: ' + checks + ' passed / 0 failed; local only, no real submissions.');
  } finally { if (browser) await browser.close(); await new Promise(r => server.close(r)); }
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
