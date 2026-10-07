'use strict';
/** 320/375/430px五语真实页面：点击新生入口、检查长表不撑宽、正文与官方链接真实渲染。 */
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const engine=require(process.env.PLAYWRIGHT_MODULE||'playwright'),root=path.resolve(__dirname,'..');
function serve(req,res){const f=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!f.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.json')?'application/json':'text/html');res.end(fs.readFileSync(f));}catch(_){res.writeHead(404);res.end();}}
async function main(){
  const server=http.createServer(serve);await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser,count=0;
  function check(v,m){assert(v,m);count++;}
  try{
    browser=await engine.chromium.launch({headless:true,channel:process.env.H5_BROWSER_CHANNEL||'msedge'});
    const page=await browser.newPage({viewport:{width:375,height:812}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
    const origin='http://127.0.0.1:'+server.address().port;await page.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
    await page.goto(origin+'/guide/index.html#guide');await page.locator('#tour .tour-skip').click();await page.locator('#tour').waitFor({state:'hidden'});
    for(const width of [320,375,430])for(const lang of ['zh','ja','en','ko','es']){
      await page.setViewportSize({width,height:812});await page.selectOption('#langSwitch',lang);
      const resource=page.locator('#nzResources .nz-resource').nth(1);await resource.waitFor();
      check((await resource.innerText()).trim().length>15,'新生入口五语:'+lang);await resource.click();
      await page.locator('#articleBody [data-blk="1240ad"]').waitFor();
      check(page.url().includes('#article/guide-academic'),'实际跳转学业篇');
      // 渲染器仅给h2/h3标记区块ID；表格/列表按对应标题的相邻真实节点定位。
      for(const id of ['c7who','c7apply','c7fee','c7health','8d720b','c7special'])check(await page.locator('#articleBody [data-blk="'+id+'"]').count()===1,'真实小节标题:'+id);
      for(const id of ['c7who','c7fee','8d720b'])check(await page.locator('#articleBody [data-blk="'+id+'"] + .table-wrap tbody tr').count()>0,'真实表格:'+id);
      const text=await page.locator('#articleBody').innerText();for(const key of ['400','60','800','2027-03-31','06-6809-4327'])check(text.includes(key),'事实文本:'+key);
      const link=page.locator('#articleBody a[href="https://ku-cert.kyushu-u.ac.jp/cert/z/z_login.html"]');check(await link.count()>0,'官方在籍生入口可见');
      check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),width+'/'+lang+' 不需要左右拖整页');
      if(width===375&&lang==='zh'&&process.env.CERT_SCREENSHOT){await page.locator('#articleBody [data-blk="1240ad"]').scrollIntoViewIfNeeded();await page.screenshot({path:process.env.CERT_SCREENSHOT});}
      await page.evaluate(()=>location.hash='#guide');await page.locator('#nzResources .nz-resource').nth(1).waitFor();
    }
    check(errors.length===0,'运行错误:'+errors.join('; '));console.log('PASS 证明书浏览器 '+count+' 通过 / 0 失败（三宽度、五语、实际点击）');
  }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
