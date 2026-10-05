'use strict';
/** 本地真实浏览器验收：五语新生入口、JTCs 深链、手机宽度及村历详情。
 * 固定 2026/10/5 为测试时钟；阻止外网，不提交报名或反馈。 */
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const engines=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const ROOT=path.resolve(__dirname,'..');
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json'};
function serve(req,res){
  const f=path.resolve(ROOT,'.'+decodeURIComponent(req.url.split('?')[0]));
  if(!f.startsWith(ROOT+path.sep)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',mime[path.extname(f)]||'application/octet-stream');res.end(fs.readFileSync(f));}
  catch(_){res.writeHead(404);res.end();}
}
async function main(){
  const server=http.createServer(serve);await new Promise(r=>server.listen(0,'127.0.0.1',r));
  let browser,count=0;const check=(v,m)=>{assert(v,m);count++;};
  try{
    browser=await engines.chromium.launch({headless:true,channel:process.env.H5_BROWSER_CHANNEL||'msedge'});
    const page=await browser.newPage({viewport:{width:375,height:812},deviceScaleFactor:1});
    await page.addInitScript(()=>{
      const RealDate=Date,fixed=RealDate.parse('2026-10-05T12:00:00+09:00');
      window.Date=class extends RealDate{constructor(...a){super(...(a.length?a:[fixed]));}static now(){return fixed;}};
    });
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const origin='http://127.0.0.1:'+server.address().port;
    await page.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
    // 简易静态服务只读文件，不提供目录索引；必须打开真实入口文件。
    await page.goto(origin+'/guide/index.html#guide');
    // 首访引导会异步弹出，使用真实“跳过”出口，不能强行点击穿透蒙层。
    await page.locator('#tour .tour-skip').waitFor();
    await page.locator('#tour .tour-skip').click();
    await page.locator('#tour').waitFor({state:'hidden'});
    for(const lang of ['zh','ja','en','ko','es']){
      await page.selectOption('#langSwitch',lang);
      await page.locator('#nzResources .nz-resource').first().waitFor();
      check((await page.locator('#nzResources .nz-resource').first().innerText()).includes('JTCs'),lang+' 首位资源');
      await page.locator('#nzResources .nz-resource').first().click();
      await page.locator('#articleBody [data-blk="jca101"]').waitFor();
      const body=await page.locator('#articleBody').innerText();
      for(const phrase of ['10/16','12:00','10/21','23:59','10/23','10/26','12:30','10/27','2026/11/9','2027/2/8'])check(body.includes(phrase),lang+' '+phrase);
      check(await page.locator('#articleBody .step-title strong').count()>=4,lang+' 四阶段日期重点渲染');
      check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),lang+' 页面无横向溢出');
      if(lang==='zh'&&process.env.JTCS_SCREENSHOT){
        await page.locator('#articleBody [data-blk="jca101"]').scrollIntoViewIfNeeded();
        await page.screenshot({path:process.env.JTCS_SCREENSHOT});
      }
      await page.evaluate(()=>location.hash='#cunli');
      await page.locator('#btnExpand').waitFor();
      if(!(await page.locator('#monthCard').isVisible()))await page.locator('#btnExpand').click();
      for(const id of ['nc2026-jtcs-0','nc2026-jtcs-1','nc2026-jtcs-2','nc2026-jtcs-3','nc2026-jtcs-4']){
        // 从十月到十一月，再跨年至二月；验证起止节点真的进入对应月份。
        if(id.endsWith('-3'))await page.locator('#btnNext').click();
        if(id.endsWith('-4'))for(let i=0;i<3;i++)await page.locator('#btnNext').click();
        await page.locator('#monthList [data-id="'+id+'"]').click();
        await page.locator('#detailBody').waitFor();
        const text=await page.locator('#detailBody').innerText();
        check(text.includes('JTCs'),lang+' '+id+' 详情');
        if(id.endsWith('-0'))check(text.includes('12:00')&&text.includes('23:59'),lang+' 登记时刻');
        if(id.endsWith('-2'))check(text.includes('12:30')&&text.includes('23:59'),lang+' 选班时刻');
        check((await page.locator('#detailBody a').last().getAttribute('href')).includes('2026/10/'),lang+' 正式指南来源');
        await page.locator('#btnCloseDetail').click();
        await page.locator('#detailMask').waitFor({state:'hidden'});
      }
      for(let i=0;i<4;i++)await page.locator('#btnPrev').click();
      await page.evaluate(()=>location.hash='#guide');
    }
    check(errors.length===0,'页面运行错误：'+errors.join('; '));
    console.log('PASS H5 JTCs 浏览器 '+count+' 项通过，0 失败（375px，五语，真实点击）');
  }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
