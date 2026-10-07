'use strict';
/** 真实Edge页面验证五语小事项、旧深链保留及320/375/430px阅读，不提交学校表单。 */
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const engine=require(process.env.PLAYWRIGHT_MODULE||'playwright'),root=path.resolve(__dirname,'..');
function serve(req,res){const f=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!f.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.json')?'application/json':'text/html');res.end(fs.readFileSync(f));}catch(_){res.writeHead(404);res.end();}}
async function main(){const server=http.createServer(serve);await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser,count=0;
  function check(v,m){assert(v,m);count++;}
  try{
    browser=await engine.chromium.launch({headless:true,channel:process.env.H5_BROWSER_CHANNEL||'msedge'});
    const page=await browser.newPage({viewport:{width:375,height:812}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
    const origin='http://127.0.0.1:'+server.address().port;await page.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
    await page.goto(origin+'/guide/index.html#guide');await page.locator('#tour .tour-skip').click();await page.locator('#tour').waitFor({state:'hidden'});
    const cases=[['guide-academic',['m7card0','m7lib0','m7soft0','1240ad']],['guide-phone',['a747f8']],['guide-life',['m7print0','m7sport0','123b43']],['guide-housing',['m7dorm0']],['guide-residence',['m7move0']]];
    for(const width of [320,375,430])for(const lang of ['zh','ja','en','ko','es']){
      await page.setViewportSize({width,height:812});await page.selectOption('#langSwitch',lang);
      for(const [id,headings] of cases){
        await page.evaluate(id=>{location.hash='#article/'+id;},id);await page.locator('#articleBody').waitFor();
        for(const heading of headings){await page.locator('#articleBody [data-blk="'+heading+'"]').waitFor();check(await page.locator('#articleBody [data-blk="'+heading+'"]').count()===1,'唯一实际章节:'+heading);}
        const text=await page.locator('#articleBody').innerText();
        if(id==='guide-academic'){check(text.includes('2,000')||text.includes('2000'),'当前卡片费用');check(text.includes('100'),'离校数据处理边界');}
        if(id==='guide-phone'){check(text.includes('@m.kyushu-u.ac.jp')&&text.includes('@s.kyushu-u.ac.jp'),'恢复邮箱排除');check(text.includes('SSO-KID@edunet'),'edunet格式');}
        if(id==='guide-life')check(text.includes('Cloud On-Demand Print')&&text.includes('USB'),'按馆不同打印方式');
        check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),width+'/'+lang+'/'+id+' 无整页横向溢出');
        if(width===375&&lang==='zh'&&id==='guide-academic'&&process.env.SERVICES_SCREENSHOT){await page.locator('[data-blk="m7card0"]').scrollIntoViewIfNeeded();await page.screenshot({path:process.env.SERVICES_SCREENSHOT});}
      }
      await page.evaluate(()=>location.hash='#guide');const links=page.locator('#nzResources .nz-resource');await links.last().waitFor();
      check((await links.first().innerText()).includes('JTCs'),'近期JTCs仍第一');await links.last().click();await page.locator('#articleBody [data-blk="m7card0"]').waitFor();check(page.url().includes('#article/guide-academic'),'新生学生证入口实际跳转');
      await page.evaluate(()=>location.hash='#guide');await page.locator('#nzResources .nz-resource').last().waitFor();
    }
    check(errors.length===0,'运行错误:'+errors.join('; '));console.log('PASS 校园小事项浏览器 '+count+' 通过 / 0 失败（三宽度、五语、真实点击）');
  }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}}
main().catch(e=>{console.error(e);process.exitCode=1;});
