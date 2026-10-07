'use strict';
// 只修改学业篇证明书段和两个相关旧表述；其他正文、ID、译文和作者信息保持原样。
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const source=require('../content/fragments/certificates-20261007');
const root=path.resolve(__dirname,'..');
/** 寻找唯一现有区块，重复或缺失必须中断，不能覆盖未知文章结构。 */
function one(blocks,id){const hits=blocks.filter(b=>b.id===id);assert.equal(hits.length,1,'区块不唯一:'+id);return hits[0];}
/** 保留账号说明第一句，只替换与证明书申请渠道有关的后文。 */
function account(text,suffix){return text.split(/(?<=[。.!])\s*/)[0]+' '+suffix;}
/** 默认预览；--apply才写本地源稿及已有译文包。所有变更先在内存检查。 */
function main(){
  const file=path.join(root,'content/guide-academic.json'),a=JSON.parse(fs.readFileSync(file,'utf8'));
  const i18nFile=path.join(root,'guide/js/articles-body-i18n.js'),raw=fs.readFileSync(i18nFile,'utf8'),ctx={window:{}};vm.runInNewContext(raw,ctx);
  const i18n=ctx.window.ARTICLES_BODY_I18N,translations=i18n['guide-academic'];
  const start=a.blocks.findIndex(b=>b.id==='1240ad');assert(start>=0);assert.equal(a.blocks[start].type,'heading');
  const tail=a.blocks.slice(start);assert(tail.every(b=>source.blocks().some(n=>n.id===b.id)), '尾部含其他小节，不能整段替换');
  a.blocks.splice(start,tail.length,...source.blocks());
  one(a.blocks,'3b7366').text=account(one(a.blocks,'3b7366').text,source.COPY.zh.accountSuffix);
  one(a.blocks,'5ed19b').items[1]={text:source.COPY.zh.accountLink,url:source.SOURCES[2]};
  one(a.blocks,'0c0390').text=source.COPY.zh.healthSummary;
  a.updatedAt=source.CHECKED_AT;
  for(const lang of ['ja','en','ko','es']){
    const m=translations[lang],c=source.COPY[lang];
    assert(m['3b7366']&&m['5ed19b']&&m['0c0390']);
    m['3b7366']={text:account(m['3b7366'].text,c.accountSuffix)};
    m['5ed19b'].items[1]={text:c.accountLink,url:source.SOURCES[2]};
    m['0c0390']={text:c.healthSummary};
    for(const b of source.blocks(lang)){const copy={...b};delete copy.id;delete copy.type;m[b.id]=copy;}
  }
  if(!process.argv.includes('--apply')){console.log('PREVIEW 学业篇证明書19块、四语及旧渠道表述修正');return;}
  fs.writeFileSync(file,JSON.stringify(a,null,2)+'\n');
  // 保留原文件说明、IIFE和一空格缩进，避免全译文包产生与本任务无关的差异。
  const marker='window.ARTICLES_BODY_I18N = ';
  fs.writeFileSync(i18nFile,raw.slice(0,raw.indexOf(marker))+marker+JSON.stringify(i18n,null,1)+';\n})();\n');
  console.log('APPLIED 本地证明书内容；尚未构建/推送');
}
if(require.main===module)main();
module.exports={account};
