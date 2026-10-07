'use strict';
/** 五语新内容/纠正/稳定旧段检查，数字预期来自独立核对的学校页面。 */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),{load,RULES,LANGS,h5Blocks}=require('./merge_campus_services_20261007'),source=load();
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'guide/js/articles-body-i18n.js'),'utf8'),ctx);
const translations=ctx.window.ARTICLES_BODY_I18N,docs={};let count=0;
function check(v,m){assert(v,m);count++;}
function article(id){return docs[id]||(docs[id]=JSON.parse(fs.readFileSync(path.join(root,'content',id+'.json'),'utf8')));}
for(const s of source.sections){for(const lang of LANGS){const a=article(RULES[s.key].article);
  for(const b of h5Blocks(s,lang,a,translations)){const actual=lang==='zh'?a.blocks.find(x=>x.id===b.id):translations[a._id][lang][b.id];
    const expected={...b};if(lang!=='zh'){delete expected.id;delete expected.type;}check(JSON.stringify(actual)===JSON.stringify(expected),'五语内容一致:'+s.key+'/'+lang+'/'+b.id);}
  check(a.blocks.filter(b=>b.id===(s.key==='account-help'?'a747f8':s.headingId)).length===1,'唯一标题');}
}
for(const lang of LANGS){
  const library=source.sections.find(s=>s.key==='library').blocks[lang];
  const loan=library.find(b=>b.id==='m7lib5');
  check(loan.rows[1][2].includes('15')&&loan.rows[1][2].includes('8'),'芸工分馆本科期限15日/8日');
  check(loan.rows[2][2].includes('30')&&loan.rows[2][2].includes('8'),'芸工分馆大学院期限30日/8日');
  if(['en','ko','es'].includes(lang))check(library.find(b=>b.id==='m7lib10').items.some(i=>i.url==='https://catalog.lib.kyushu-u.ac.jp/opac_search/?lang=1'),'英文目录使用实际可用的官方入口');
  for(const [id,bid] of [['guide-academic','3b7366'],['guide-residence','d66ea0'],['guide-firstmonth','36cd13']]){
    const b=lang==='zh'?article(id).blocks.find(b=>b.id===bid):translations[id][lang][bid];check(b.text.includes('@m.kyushu-u.ac.jp')&&b.text.includes('@s.kyushu-u.ac.jp'),'SSO邮箱排除一致');}
  const academic=lang==='zh'?article('guide-academic').blocks.find(b=>b.id==='5ed19b'):translations['guide-academic'][lang]['5ed19b'];
  check(academic.items[4].url==='https://web.sso.kyushu-u.ac.jp/idpw/lost.html','密码入口不误指邮件');
  const n=lang==='zh'?article('guide-newcomer').blocks.find(b=>b.id==='w4d5e6'):translations['guide-newcomer'][lang]['w4d5e6'];
  check(n.items[1].desc.includes('@m.kyushu-u.ac.jp')&&n.items[1].desc.includes('@s.kyushu-u.ac.jp'),'新生准备同步纠正');
}
const allZh=Object.values(docs).flatMap(a=>a.blocks).map(b=>JSON.stringify(b)).join('\n');
check(!allZh.includes('不能使用学校邮箱以外')&&!allZh.includes('不能用学校邮箱以外'),'无旧反向表述');
const cards=JSON.stringify(source.sections.find(s=>s.key==='student-id').blocks.zh).replace(/,/g,'');check(cards.includes('2000')&&cards.includes('申请书'),'当前费用与起算点');
check(!cards.includes('卡片到达'),'不保留错误时长');
for(const a of Object.values(docs))check(new Set(a.blocks.map(b=>b.id)).size===a.blocks.length,'文章ID不重复');
console.log('PASS H5校园小事项 '+count+' 通过 / 0 失败');
