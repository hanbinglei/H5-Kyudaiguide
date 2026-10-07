'use strict';
/** 五语与官方数字基准、稳定深链检查；不以译文覆盖率替代事实核对。 */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const source=require('../content/fragments/certificates-20261007');
const root=path.resolve(__dirname,'..');
function load(file,key){const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);return ctx.window[key];}
const a=JSON.parse(fs.readFileSync(path.join(root,'content/guide-academic.json'),'utf8'));
const locale=load('guide/js/articles-body-i18n.js','ARTICLES_BODY_I18N')['guide-academic'];
let count=0;function check(v,m){assert(v,m);count++;}
for(const lang of ['zh','ja','en','ko','es']) {
  const blocks=source.blocks(lang),text=JSON.stringify(blocks);
  check(blocks.length===19,'19块结构');
  const money=blocks.find(b=>b.id==='c7feeTable');
  check(/400/.test(money.rows[1][1])&&/60/.test(money.rows[1][1]),'在籍生400/通+60/页');
  check(/800/.test(money.rows[3][1]),'离籍生800/通');
  check(text.includes('2027-03-31')&&text.includes('06-6809-4327'),'年度与系统电话');
  const machines=blocks.find(b=>b.id==='9dc610').rows;check(machines.length===8,'四校区八处');
  check(machines[5][1].includes('9:00–17:15'),'病院不误写8:30');
  check(machines.filter((_,i)=>i!==5).every(r=>r[1].includes('8:30–17:15')),'其余8:30');
  check(!machines[7][1].includes('Vista'),'筑紫位置不沿用旧手册');
  for(const b of blocks){const actual=lang==='zh'?a.blocks.find(x=>x.id===b.id):locale[lang][b.id];const expected={...b};if(lang!=='zh'){delete expected.id;delete expected.type;}
    check(JSON.stringify(actual)===JSON.stringify(expected),'正文已同步:'+lang+'/'+b.id);}
  const account=lang==='zh'?a.blocks.find(b=>b.id==='5ed19b'):locale[lang]['5ed19b'];
  check(account.items[1].url===source.SOURCES[2],'登录入口不是大学院专用旧深链');
}
const resources=load('guide/js/data-newcomer-zone.js','NEWCOMER_ZONE').resources;
check(resources[0].title.zh.includes('JTCs'),'不抢占近期JTCs首位');
check(resources.filter(x=>x.ref==='guide-academic'&&x.sec==='1240ad').length===1,'新生资源唯一且稳定定位');
console.log('PASS 证明书五语 '+count+' 通过 / 0 失败');
