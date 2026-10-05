/** 双端共享 H5 的真实窄屏搜索/点击/滚动测试；仅本地文件服务，无线上写入。 */
const fs = require('fs'), path = require('path'), http = require('http'), assert = require('assert');
const engines = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html':'text/html', '.json':'application/json', '.geojson':'application/json', '.js':'text/javascript', '.css':'text/css' };
/** 临时端口只提供工作副本，访问范围必须在 ROOT 内。 */
function serve(req, res) {
  const f = path.resolve(ROOT, '.' + decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(ROOT + path.sep)) { res.writeHead(403); res.end(); return; }
  try { res.setHeader('Content-Type', MIME[path.extname(f)] || 'application/octet-stream'); res.end(fs.readFileSync(f)); }
  catch (_) { res.writeHead(404); res.end(); }
}
async function main() {
  const server = http.createServer(serve);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser, count = 0;
  const check = (v, text) => { assert.ok(v, text); count++; };
  try {
    browser = await engines.chromium.launch({ headless:true, channel:process.env.H5_BROWSER_CHANNEL || 'msedge' });
    const page = await browser.newPage({ viewport:{width:375,height:812}, deviceScaleFactor:2 });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const origin = 'http://127.0.0.1:' + server.address().port;
    // 不依赖在线地图瓦片或提交任何反馈；真实底图和设施由本地文件读取。
    await page.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
    await page.goto(origin + '/h5-mvp/app.html');
    await page.waitForFunction(() => typeof facilities !== 'undefined' && facilities.some(f => f.id === 'indoor-gym-pool'));
    // Leaflet 关闭旧弹窗有淡出动画；等待旧 DOM 退场，不把正常动画误判为重复卡片。
    const settledPopup = () => page.waitForFunction(() => document.querySelectorAll('.leaflet-popup').length === 1);
    const clearToolbar = () => page.waitForFunction(() => {
      const popup = document.querySelector('.leaflet-popup');
      return popup && popup.getBoundingClientRect().top >= document.querySelector('#chips').getBoundingClientRect().bottom + 4;
    });
    for (const q of ['健身房', '游泳池', 'SALC', 'BasE', 'iCube', 'Libca', '打印']) {
      await page.locator('#q').fill(q);
      await page.locator('#results .result-item').first().click();
      await settledPopup();
      await page.locator('.leaflet-popup .indoor-body').waitFor();
      await clearToolbar();
      check(true, q + ' 卡片标题未被顶部工具栏遮住');
      check(await page.locator('.leaflet-popup .indoor-sources a').count() > 0, q + ' 显示真实来源');
      check((await page.locator('.leaflet-popup').innerText()).includes('定位到所属建筑'), q + ' 不冒充室内定位');
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), q + ' 页面不横向溢出');
    }
    await page.locator('#q').fill('综合体育馆');
    await page.locator('#results .result-item').filter({hasText:'综合体育馆'}).first().click();
    await settledPopup();
    await page.locator('.indoor-list summary').click();
    check(await page.locator('.indoor-list button').count() === 2, '建筑目录有两个不同体育设施');
    await page.locator('[data-indoor-id="indoor-gym-pool"]').click();
    await settledPopup();
    check((await page.locator('.leaflet-popup').innerText()).includes('1F'), '目录点击与搜索一致，泳池楼层显示');
    const source = await page.locator('.indoor-sources a').first().getAttribute('href');
    check(source.includes('/institution/gym1/'), '官方链接指向体育设施页');
    for (const [language, query] of [['ja','トレーニング室'], ['en','swimming pool'], ['ko','SALC']]) {
      await page.selectOption('#langswitch', language);
      await page.locator('#q').fill(query);
      await page.locator('#results .result-item').first().click();
      await settledPopup();
      await clearToolbar();
      check(await page.locator('.indoor-body').count() === 1, language + ' 多语言搜索进入设施卡片');
    }
    check(errors.length === 0, '无页面运行期错误: ' + errors.join('; '));
    // 留下实际渲染截图供人工审阅，不把截图当作自动验收替代。
    if (process.env.INDOOR_SCREENSHOT) {
      await page.selectOption('#langswitch', 'zh');
      await page.locator('#q').fill('游泳池');
      await page.locator('#results .result-item').first().click();
      await settledPopup(); await clearToolbar();
      await page.screenshot({path:process.env.INDOOR_SCREENSHOT});
    }
    console.log('H5 楼内设施浏览器：' + count + ' 项通过，0 失败');
  } finally { if (browser) await browser.close(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
