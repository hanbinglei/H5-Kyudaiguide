/** 本地真实浏览器检查Star邀请：五语、窄屏、位置、文字及合法外链。不会替用户点赞。 */
'use strict';
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const engines=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(__dirname,'..'),repo='https://github.com/hanbinglei/H5-Kyudaiguide';
/** 仅读取当前仓库，外部请求在浏览器测试中拦截。 */
function serve(req,res){const f=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!f.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':'text/html');res.end(fs.readFileSync(f));}catch(_){res.writeHead(404);res.end();}}
/** 以生产页面的计算样式和实际矩形核对，不用截图代替断言。 */
async function main(){
  const server=http.createServer(serve);await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser,count=0;
  const check=(v,label)=>{assert(v,label);count++;};
  try{
    browser=await engines.chromium.launch({headless:true,channel:process.env.H5_BROWSER_CHANNEL||'msedge'});
    const page=await browser.newPage({viewport:{width:375,height:812}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    const origin='http://127.0.0.1:'+server.address().port;
    await page.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
    await page.goto(origin+'/guide/index.html#guide');await page.locator('#tour .tour-skip').click();await page.locator('#tour').waitFor({state:'hidden'});
    for(const width of [320,390,1280]){
      await page.setViewportSize({width,height:812});
      for(const lang of ['zh','ja','en','ko','es']){
        await page.selectOption('#langSwitch',lang);await page.evaluate(()=>location.hash='#guide');
        const card=page.locator('#supportCard');await card.waitFor({state:'visible'});
        check(await card.count()===1,'首页不重复堆叠邀请');
        const placement=await page.evaluate(()=>{const s=document.querySelector('#supportCard'),n=document.querySelector('#nzWrap');return {before:!!(s.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING),position:getComputedStyle(s).position};});
        check(placement.before && !['fixed','absolute'].includes(placement.position),'首页邀请前移且不遮挡内容');
        check((await card.locator('.sup-t').innerText()).includes('GitHub'),'五语标题明确GitHub');
        check(await card.locator('.sup-star').getAttribute('href')===repo,'主按钮只链接到项目仓库');
        check(await card.locator('.sup-star').getAttribute('target')==='_blank','外链在新标签打开');
        check(await page.locator('#supShare').isVisible(),'无账号仍可分享');
        check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'首页不横向溢出');
        await page.evaluate(()=>location.hash='#article/guide-scholarship');await page.locator('#articleBody').waitFor({state:'visible'});
        const star=page.locator('#btnStar');check((await star.innerText()).includes('GitHub'),'文末邀请同步语言');
        check(await star.getAttribute('href')===repo,'文末链接不变');
        const look=await star.evaluate(el=>{const s=getComputedStyle(el);return {bg:s.backgroundColor,color:s.color,top:el.getBoundingClientRect().top,report:document.querySelector('#btnReportArticle').getBoundingClientRect().top};});
        check(look.color==='rgb(255, 255, 255)' && look.bg!=='rgb(255, 255, 255)','Star为高对比主按钮');
        check(look.top<look.report,'文末Star在纠错按钮之前');
        check(await page.locator('#articleBody').innerText().then(s=>s.length>100),'正文无需Star即可阅读');
        check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'文章不横向溢出');
        await page.evaluate(()=>location.hash='#guide');
      }
    }
    check(errors.length===0,'无运行期错误：'+errors.join('; '));
    console.log('PASS Star邀请浏览器 '+count+' 通过 / 0 失败（五语、320/390/1280px，不执行点赞）');
  }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
