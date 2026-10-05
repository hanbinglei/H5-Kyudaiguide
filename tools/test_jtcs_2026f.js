#!/usr/bin/env node
'use strict';
// 对照正式指南的人工日期基准，不以同步器的文案自身作为预期值。
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..');
function load(f,k){const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),c);return c.window[k];}
const calendar=load('guide/js/data-cunli.js','CUNLI_DATA');
const nodes=calendar.items.filter(x=>x.id.startsWith('nc2026-jtcs-'));
assert.deepStrictEqual(JSON.parse(JSON.stringify(nodes.map(x=>[x.date,x.end]))),[
  ['2026-10-16','2026-10-21'],['2026-10-23',''],['2026-10-26','2026-10-27'],['2026-11-09',''],['2027-02-08','']
]);
assert.strictEqual(new Set(calendar.items.map(x=>x.id)).size,calendar.items.length);
const G=load('guide/js/i18n.js','GuideI18N');
for(const n of nodes){assert.strictEqual(n.link,calendar.sources[n.src].url);for(const l of ['ja','en','ko','es'])assert(G.cunliNote(n,l));}
const B=load('guide/js/articles-body-i18n.js','ARTICLES_BODY_I18N');
const dates=['10/16','12:00','10/21','23:59','10/23','10/26','12:30','10/27','2026/11/9','2027/2/8'];
let checks=0;
for(const [article,id]of [['guide-newcomer','jca103'],['guide-academic','77aa1c']]){
  const zh=JSON.parse(fs.readFileSync(path.join(root,'content',article+'.json'),'utf8'));
  for(const l of ['zh','ja','en','ko','es']){
    const block=l==='zh'?zh.blocks.find(x=>x.id===id):B[article][l][id];
    assert.strictEqual(block.items.length,4);
    const text=block.items.map(x=>x.title+' '+x.desc).join('\n');
    for(const d of dates)assert(text.includes(d),article+'/'+l+'/'+d);
    assert(text.includes('JST'));
    assert(!text.includes('9/25'));
    block.items.forEach((it,i)=>{for(const span of block.emphasis['items.'+i+'.title'])assert.strictEqual(it.title.slice(span.start,span.end),span.quote);});
    checks++;
  }
}
const Z=load('guide/js/data-newcomer-zone.js','NEWCOMER_ZONE');
assert.strictEqual(Z.resources[0].sec,'jca101');
for(const l of ['zh','ja','en','ko','es'])assert(Z.resources[0].title[l].includes('JTCs'));
assert(nodes[0].note.includes('12:00')&&nodes[2].note.includes('12:30'));
assert(nodes[1].note.includes('下午'));
console.log('PASS JTCs '+checks+' 正文语言组合、五个官方节点、精确时刻、重点锚点与首位入口');
