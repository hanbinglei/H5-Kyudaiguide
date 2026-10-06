/** 375px真实浏览器：五语季后提示与交通指南跳转，不向外部网站提交内容。 */
'use strict';
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const engines=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(__dirname,'..');
/** 本地服务只读当前仓库，防止路径越界。 */
function serve(req,res){const f=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!f.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':'text/html');res.end(fs.readFileSync(f));}catch(_){res.writeHead(404);res.end();}}
/** 按当前实际UI点击，不用另一份模板代替生产页面。 */
async function main(){
  const server=http.createServer(serve);await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser,count=0;
  try{
    browser=await engines.chromium.launch({headless:true,channel:process.env.H5_BROWSER_CHANNEL||'msedge'});
    const page=await browser.newPage({viewport:{width:375,height:812}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    const origin='http://127.0.0.1:'+server.address().port;
    await page.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
    await page.goto(origin+'/guide/index.html#guide');
    await page.locator('#tour .tour-skip').click();
    await page.locator('#tour').waitFor({state:'hidden'});
    for(const lang of ['zh','ja','en','ko','es']){
      await page.selectOption('#langSwitch',lang);
      await page.evaluate(()=>location.hash='#article/guide-newcomer');
      const link=page.locator('#articleBody .bus-ended-link');await link.waitFor();
      assert((await link.innerText()).trim().length>10);count++;
      if(lang!=='zh'){assert(!(await link.innerText()).includes('生活支援巴士已结束'));count++;}
      assert.equal(await page.locator('.bus-live-table').count(),0);count++;
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));count++;
      await link.click();await page.waitForURL(url=>url.hash==='#article/guide-transport');
      await page.locator('#articleBody .bus-ended-link').waitFor({state:'detached'});count++;
      await page.evaluate(()=>location.hash='#guide');
    }
    assert.equal(errors.length,0,errors.join('; '));count++;
    console.log('PASS 巴士季后浏览器 '+count+' 通过 / 0 失败（五语、375px、实际点击）');
  }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
