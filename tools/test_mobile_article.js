#!/usr/bin/env node
/** 浏览器回归：窄屏正文不得横向漂移，反馈说明须符合原地发送流程。
 * 不访问真实反馈后端；所有外部请求拦截，POST 仅返回测试响应。
 * 需要 Playwright，可通过 PLAYWRIGHT_MODULE 指定已有安装；
 * H5_BROWSER_CHANNEL 可指定已有浏览器（例如 msedge）；
 * H5_BROWSER_ENGINE=webkit 可检查 Safari 同系引擎，无需项目新增依赖。
 */
const fs = require('fs'), path = require('path'), http = require('http'), assert = require('assert');
const engines = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

/** 仅提供项目目录的只读文件，临时端口在结束时释放。 */
function serve(req, res) {
  let file = path.resolve(ROOT, '.' + decodeURIComponent(req.url.split('?')[0]));
  if (!file.startsWith(ROOT + path.sep)) { res.writeHead(403); res.end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  try { res.setHeader('Content-Type', MIME[path.extname(file)] || 'application/octet-stream'); res.end(fs.readFileSync(file)); }
  catch (_) { res.writeHead(404); res.end(); }
}

/** 真实布局与点击测试；浏览器隔离缓存和外部写操作。 */
async function main() {
  const server = http.createServer(serve);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser, checks = 0;
  try {
    const engine = process.env.H5_BROWSER_ENGINE || 'chromium';
    browser = await engines[engine].launch({ headless: true, ...(engine === 'chromium' && process.env.H5_BROWSER_CHANNEL ? { channel: process.env.H5_BROWSER_CHANNEL } : {}) });
    const origin = 'http://127.0.0.1:' + server.address().port;
    for (const width of [320, 375, 390, 430, 768, 1280]) {
      const context = await browser.newContext({ viewport: { width, height: 850 }, isMobile: width < 768, hasTouch: width < 768, serviceWorkers: 'block' });
      let posts = 0;
      await context.route('**/*', route => {
        if (route.request().method() === 'POST') { posts++; return route.fulfill({ status: 200, body: '{}' }); }
        return new URL(route.request().url()).origin === origin ? route.continue() : route.abort();
      });
      const page = await context.newPage();
      const errors = []; page.on('pageerror', e => errors.push(e.message));
      await page.addInitScript(() => { localStorage.setItem('kyudai-lang', 'en'); localStorage.setItem('kg_tour_v1', '1'); });
      await page.goto(origin + '/guide/#article/guide-scholarship');
      try { await page.waitForFunction(() => document.querySelector('#articleBody table') && document.querySelector('#articleHeader h1')?.textContent.includes('Scholarship'), null, { timeout: 10000 }); }
      catch (e) { console.error(await page.evaluate(() => ({ url: location.href, header: document.querySelector('#articleHeader')?.textContent, body: document.querySelector('#articleBody')?.textContent.slice(0, 200), lang: document.documentElement.lang })), errors); throw e; }
      for (const lang of ['zh', 'ja', 'en', 'ko', 'es']) {
        await page.selectOption('#langSwitch', lang);
        await page.waitForFunction(l => document.documentElement.lang === (l === 'zh' ? 'zh-Hans' : l), lang);
        // 等异步正文译文及重绘完成，再读取真实盒模型。
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const layout = await page.evaluate(() => [...document.querySelectorAll('html,body,.sheet-card,.article-header,.article-body,.table-wrap,.ar-list-text,.step-body,.link-card')].map(e => ({ el: e.className || e.tagName, width: e.clientWidth, scroll: e.scrollWidth })));
        assert(layout.every(e => e.width > 0), '测量对象未显示，不能把零宽容器当通过');
        const overflow = layout.filter(e => e.scroll > e.width + 1);
        console.log(width + ' / ' + lang + ': ' + JSON.stringify(overflow));
        assert.deepStrictEqual(overflow, [], '正文或表格仍需左右滑动：' + width + '/' + lang); checks++;
        if (width < 768) for (const scale of [1.5, 2, 3]) {
          // 标题、摘要及正文同时放大，防止只测正文漏掉标题的长词溢出。
          const enlarged = await page.evaluate(scale => {
            const nodes = [...document.querySelectorAll('#articleHeader, #articleHeader *, #articleBody, #articleBody *')];
            const fonts = nodes.map(e => ({ e, old: e.style.fontSize, size: parseFloat(getComputedStyle(e).fontSize) }));
            fonts.forEach(f => { f.e.style.fontSize = (f.size * scale) + 'px'; });
            const result = [...document.querySelectorAll('.sheet-card,.article-header,.article-body,.table-wrap,.ar-list-text,.step-body,.link-card')].map(e => ({ el: e.className, width: e.clientWidth, scroll: e.scrollWidth })).filter(e => e.scroll > e.width + 1);
            fonts.forEach(f => { f.e.style.fontSize = f.old; });
            return result;
          }, scale);
          console.log(width + ' / ' + lang + ' / ' + scale * 100 + '%: ' + JSON.stringify(enlarged));
          assert.deepStrictEqual(enlarged, [], '放大字号后标题或正文横向溢出：' + width + '/' + lang + '/' + scale); checks++;
        }
      }
      await page.selectOption('#langSwitch', 'en');
      if (width === 375) for (const nextWidth of [812, 375]) {
        // 不重新打开文章，模拟阅读中横竖屏往返，防止旧布局宽度残留。
        await page.setViewportSize({ width: nextWidth, height: nextWidth === 812 ? 375 : 850 });
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const rotated = await page.evaluate(() => [...document.querySelectorAll('.sheet-card,.article-header,.article-body')].map(e => ({ el: e.className, width: e.clientWidth, scroll: e.scrollWidth })).filter(e => e.width <= 0 || e.scroll > e.width + 1));
        assert.deepStrictEqual(rotated, [], '横竖屏切换后标题或正文宽度不正确'); checks++;
      }
      await page.locator('#btnFeedbackFab').click();
      const note = await page.locator('#fbNote').textContent();
      assert(!/confirmation page|return here/i.test(note), '反馈仍承诺不存在的跳转确认页'); checks++;
      await page.locator('#fbMsg').fill('Browser regression only; intercepted locally.');
      const url = page.url();
      await page.locator('#fbSend').click();
      await page.locator('#fbDone').waitFor();
      assert.equal(posts, 1); assert.equal(page.url(), url); checks++;
      await page.locator('#fbDone').click();
      await page.locator('#btnFeedbackFab').click();
      assert.equal(await page.locator('#fbMsg').inputValue(), ''); checks++;
      assert.deepStrictEqual(errors, [], '页面运行错误'); checks++;
      await context.close();
    }
    console.log('PASS ' + checks + ' checks; external POST intercepted, no real submission.');
  } finally { if (browser) await browser.close(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
