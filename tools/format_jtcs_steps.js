'use strict';
/** 仅将两篇 JTCs 的既有时间段落排为四步；日期与正文逐字保留，四语一起转换。
 * 原始整段仍在 update_jtcs_20261005.js 中供审阅，校历数据不由布局脚本生成。 */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const file=path.join(root,'guide/js/articles-body-i18n.js');
const source=fs.readFileSync(file,'utf8'),ctx={window:{}};vm.runInNewContext(source,ctx);
const body=ctx.window.ARTICLES_BODY_I18N;
function convert(block){
  if(block.items && !block.text)return;
  const lines=block.text.split('\n');assert.strictEqual(lines.length,5);
  const header=lines.shift();
  block.items=lines.map((line,i)=>{
    const match=line.match(/^(.*?)\*\*([^*]+)\*\*([\s\S]*)$/);assert(match,line);
    return {title:match[1]+'**'+match[2]+'**',desc:(i===0?header+' ':'')+match[3].replace(/^[。.,，\s]+/,'')};
  });
  delete block.text;delete block.emphasis;
  block.emphasis={};
  block.items.forEach((it,i)=>{const start=it.title.indexOf('**')+2,end=it.title.lastIndexOf('**');block.emphasis['items.'+i+'.title']=[{start,end,style:'bold',quote:it.title.slice(start,end)}];});
}
// 只替换一个已有对象，保留文件其他区域的格式及内容。
function replaceBlock(s,id,b){const at=s.indexOf('"id": "'+id+'"'),start=s.lastIndexOf('{',at);assert(at>=0);let d=0,q=false,e=false,end;for(let i=start;i<s.length;i++){const c=s[i];if(q){if(e)e=false;else if(c==='\\')e=true;else if(c==='"')q=false;}else if(c==='"')q=true;else if(c==='{')d++;else if(c==='}'&&--d===0){end=i+1;break;}}assert(end);const nl=s.includes('\r\n')?'\r\n':'\n';return s.slice(0,start)+JSON.stringify(b,null,2).replace(/\n/g,nl+'    ')+s.slice(end);}
for(const [article,id]of [['guide-newcomer','jca103'],['guide-academic','77aa1c']]){
  const file=path.join(root,'content',article+'.json'),s=fs.readFileSync(file,'utf8');
  const doc=JSON.parse(s),block=doc.blocks.find(b=>b.id===id);assert(block);
  convert(block);block.type='steps';
  block.items.forEach(it=>{it.desc=it.desc.replace(/^[，,]\s*/,'');});
  for(const l of ['ja','en','ko','es'])convert(body[article][l][id]);
  for(const l of ['ja','en','ko','es'])body[article][l][id].items.forEach(it=>{it.desc=it.desc.replace(/^[，,]\s*/,'');});
  fs.writeFileSync(file,replaceBlock(s,id,block),'utf8');
}
const at=source.indexOf('window.ARTICLES_BODY_I18N = ');assert(at>=0);
fs.writeFileSync(file,source.slice(0,at)+'window.ARTICLES_BODY_I18N = '+JSON.stringify(body,null,1)+';\n})();\n','utf8');
console.log('JTCs：两篇 × 五语，日程分成四步，正文日期保持不变');
