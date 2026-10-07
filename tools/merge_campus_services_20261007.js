'use strict';
/** 官方小事项局部融合：默认预览；--apply只写范围内源稿/译文，不替换整篇旧指南。 */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),LANGS=['zh','ja','en','ko','es'];
const FILES=['accounts','library','living'].map(name=>'campus-services-'+name+'-20261007');
const RULES={
  'student-id':{article:'guide-academic',before:'c8e67d'},
  software:{article:'guide-academic',before:'c8e67d'},
  library:{article:'guide-academic',before:'c8e67d'},
  'account-help':{article:'guide-phone',before:'93c21c'},
  // 活动小标题2b45db仍属于原校园生活大节；新增大节插在其完整结束之后。
  printing:{article:'guide-life',before:'222467'},
  'sports-use':{article:'guide-life',before:'222467'},
  'dorm-help':{article:'guide-housing',before:'0785ee'},
  'moving-campus':{article:'guide-residence',before:'ec20eb'}
};
/** 校验五语ID/类型/容器形状一致，未确认或未知范围不能被隐式补成全学通用。 */
function shape(b){return {id:b.id,type:b.type,items:b.items&&b.items.length,headers:b.headers&&b.headers.length,rows:b.rows&&b.rows.map(r=>r.length)};}
function load(){
  const packs=FILES.map(name=>require(path.join(root,'content/fragments',name)));
  const sections=packs.flatMap(p=>p.sections),keys=sections.map(s=>s.key);
  assert.equal(new Set(keys).size,keys.length,'主题重复');assert(sections.length>0,'没有已确认内容');
  for(const s of sections){
    assert(RULES[s.key],'未知主题:'+s.key);assert(['ito','university'].includes(s.scope),'适用范围不明确');
    assert(Array.isArray(s.sources)&&s.sources.length>0,'缺官方来源');
    for(const lang of LANGS){const bs=s.blocks[lang];assert(Array.isArray(bs)&&bs.length>0);assert.equal(bs[0].id,s.headingId);assert.equal(bs[0].type,'heading');
      assert.deepEqual(bs.map(shape),s.blocks.zh.map(shape),'五语结构不一致:'+s.key+'/'+lang);
      assert.equal(new Set(bs.map(b=>b.id)).size,bs.length,'主题内ID重复');
      assert(bs.some(b=>b.type==='links'&&b.items.some(i=>s.sources.some(x=>x.url===i.url))),'正文缺来源链接');
    }
  }
  assert.equal(new Set(sections.flatMap(s=>s.blocks.zh.map(b=>b.id))).size,sections.flatMap(s=>s.blocks.zh).length,'主题之间ID冲突');
  return {sections,corrections:packs[0].corrections||{}};
}
/** 按稳定旧ID找一块；缺块或重复说明基线变了，拒绝猜位置。 */
function one(a,id){const xs=a.blocks.filter(b=>b.id===id);assert.equal(xs.length,1,'旧区块不唯一:'+a._id+'/'+id);return xs[0];}
/** 中文与其他语言共用文本更新，旧强调区间仅在其文本改写时移除。 */
function text(a,tr,id,copy){const b=one(a,id);b.text=copy.zh;delete b.emphasis;for(const l of LANGS.slice(1))tr[a._id][l][id]={text:copy[l]};}
/** 网络旧节与账号教程合成一节；保留旧章节、正文和手册链接ID，避免两套重复说明。 */
function h5Blocks(s,lang,a,tr){
  const bs=JSON.parse(JSON.stringify(s.blocks[lang]));if(s.key!=='account-help')return bs;
  const aliases={m7acct0:'a747f8',accounthelp1:'7bdf67',accounthelp5:'72a8d0',accounthelp7:'0fb853'};
  for(const b of bs)if(aliases[b.id])b.id=aliases[b.id];
  const corrections=require('../content/fragments/campus-services-accounts-20261007').corrections;
  if(corrections.wifi)bs.find(b=>b.id==='72a8d0').text=corrections.wifi[lang];
  const old=lang==='zh'?one(a,'0fb853'):tr[a._id][lang]['0fb853'],links=bs.find(b=>b.id==='0fb853');
  for(const item of old.items)if(!links.items.some(x=>x.url===item.url))links.items.push(item);
  return bs;
}
/** 在指定已有章节前插入，所有旧区块ID保留；重复运行只刷新本批自己的区块。 */
function insert(a,tr,s){
  const localized=Object.fromEntries(LANGS.map(l=>[l,h5Blocks(s,l,a,tr)]));
  const ownIds=new Set(s.blocks.zh.concat(localized.zh).map(b=>b.id));a.blocks=a.blocks.filter(b=>!ownIds.has(b.id));
  const i=a.blocks.findIndex(b=>b.id===RULES[s.key].before);assert(i>=0,'缺融合锚点:'+s.key);
  a.blocks.splice(i,0,...localized.zh);
  for(const l of LANGS.slice(1))for(const b of localized[l]){const c={...b};delete c.id;delete c.type;tr[a._id][l][b.id]=c;}
}
/** 保存所有候选后再写文件；正文结构与已存在的证明书/JTCs保持独立。 */
function main(){
  const {sections,corrections}=load(),ids=new Set(sections.map(s=>RULES[s.key].article));
  if(corrections.activation){ids.add('guide-academic');ids.add('guide-residence');ids.add('guide-firstmonth');ids.add('guide-newcomer');}
  if(corrections.wifi||corrections.wifiOverview)ids.add('guide-phone');
  const docs=Object.fromEntries([...ids].map(id=>[id,JSON.parse(fs.readFileSync(path.join(root,'content',id+'.json'),'utf8'))]));
  const trPath=path.join(root,'guide/js/articles-body-i18n.js'),raw=fs.readFileSync(trPath,'utf8'),ctx={window:{}};vm.runInNewContext(raw,ctx);const tr=ctx.window.ARTICLES_BODY_I18N;
  for(const s of sections)insert(docs[RULES[s.key].article],tr,s);
  if(corrections.activation){
    const copy=corrections.activation,a=docs['guide-academic'],id='3b7366';
    const cert=require('../content/fragments/certificates-20261007');
    const current={zh:one(a,id).text,...Object.fromEntries(LANGS.slice(1).map(l=>[l,tr[a._id][l][id].text]))};
    for(const l of LANGS)assert(current[l].endsWith(cert.COPY[l].accountSuffix),'账号段有未知新内容，停止覆盖:'+l);
    text(a,tr,id,Object.fromEntries(LANGS.map(l=>[l,copy[l]+' '+cert.COPY[l].accountSuffix])));
    text(docs['guide-residence'],tr,'d66ea0',copy);
    const first=docs['guide-firstmonth'],fid='36cd13';
    text(first,tr,fid,Object.fromEntries(LANGS.map(l=>[l,copy[l]+' '+(corrections.wifi?corrections.wifi[l]:'')])));
  }
  if(corrections.activation){
    const b=one(docs['guide-newcomer'],'w4d5e6');b.items[1].desc=corrections.activation.zh;
    for(const l of LANGS.slice(1))tr['guide-newcomer'][l]['w4d5e6'].items[1].desc=corrections.activation[l];
    // 原通知同时列9/24–10/9和10/9起不可用；保留公示日期，不承诺截止日当天仍可用。
    text(docs['guide-newcomer'],tr,'w3c4d5',corrections.temporaryWifiNotice);
    const a=docs['guide-academic'],labels={zh:'SSO账号与密码恢复（官方说明）',ja:'SSOアカウント・パスワード復旧案内',en:'SSO account and password recovery',ko:'SSO 계정·비밀번호 복구 안내',es:'Recuperar cuenta y contraseña SSO'};
    const groups={zh:one(a,'5ed19b'),...Object.fromEntries(LANGS.slice(1).map(l=>[l,tr[a._id][l]['5ed19b']]))};
    for(const l of LANGS)groups[l].items[4]={text:labels[l],url:'https://web.sso.kyushu-u.ac.jp/idpw/lost.html'};
  }
  if(corrections.wifi)text(docs['guide-phone'],tr,'72a8d0',corrections.wifi);
  if(corrections.wifiOverview&&!sections.some(s=>s.key==='account-help'))text(docs['guide-phone'],tr,'7bdf67',corrections.wifiOverview);
  if(sections.some(s=>s.key==='dorm-help')){
    // 原报修段只做导航与应急提醒；具体规则归回宿舍篇，保留旧锚点不造成悬空链接。
    const copy={zh:'宿舍钥匙丢失、反锁或设施故障，按所住宿舍的管理通知办理；步骤与联络入口见【宿舍·租房】。不要把某一宿舍的处理方式套到其他住处。',
      ja:'鍵の紛失・閉め出し・設備の故障は、入居している寮の管理案内に従ってください。手順・連絡先は参照【宿舍·租房】。他の寮の手順をそのまま使わないでください。',
      en:'For lost keys, lockouts or faulty room facilities, follow your own residence’s management instructions. See【宿舍·租房】 for steps and contact links; do not apply one dormitory’s rules to another.',
      ko:'열쇠 분실·잠금·설비 고장은 거주 중인 기숙사의 관리 안내를 따르세요. 절차와 연락처는 참조【宿舍·租房】. 다른 기숙사의 규칙을 그대로 적용하지 마세요.',
      es:'Si pierdes la llave, te quedas fuera o falla un equipo, sigue las instrucciones de tu residencia. Consulta【宿舍·租房】 para los pasos y contactos; no apliques las reglas de otra residencia.'};
    // 译文使用本语言真实文章名，沿现有互引解析器，不让外国读者看到中文占位标签。
    const navCtx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'guide/js/articles-i18n.js'),'utf8'),navCtx);
    const titles=navCtx.window.ARTICLES_I18N['guide-housing'].title;
    for(const l of LANGS.slice(1))copy[l]=copy[l].replace('【宿舍·租房】','【'+titles[l]+'】');
    text(docs['guide-life'],tr,'d7dc2a',copy);
    // 英文遗失物标题补手机这个常见例子，区分遗失物求助与宿舍钥匙报修；旧深链和办事步骤不变。
    one(docs['guide-life'],'e1e701');
    tr['guide-life'].en.e1e701.text='Lost a phone or other belongings';
  }
  for(const a of Object.values(docs)){a.updatedAt='2026-10-07';assert.equal(new Set(a.blocks.map(b=>b.id)).size,a.blocks.length,'融合后重复ID');}
  const summary={sections:sections.map(s=>({key:s.key,scope:s.scope,article:RULES[s.key].article})),articles:[...ids],mode:process.argv.includes('--apply')?'apply':'preview'};
  if(process.argv.includes('--apply')){
    for(const a of Object.values(docs))fs.writeFileSync(path.join(root,'content',a._id+'.json'),JSON.stringify(a,null,2)+'\n');
    const marker='window.ARTICLES_BODY_I18N = ';assert(raw.includes(marker));
    fs.writeFileSync(trPath,raw.slice(0,raw.indexOf(marker))+marker+JSON.stringify(tr,null,1)+';\n})();\n');
    if(corrections.wifi){const file=path.join(root,'content/claims.json'),claims=JSON.parse(fs.readFileSync(file,'utf8'));
      const rows=Array.isArray(claims)?claims:claims.claims;
      const claim=rows.find(c=>c.id==='phone-kitenet-login-id');assert(claim,'缺旧Wi-Fi台账');claim.claim=corrections.wifi.zh;claim.verified='2026-10-07';claim.note='按当前官方说明统一正文；研究生等学籍不可机械套用IC学生证的格式。';
      fs.writeFileSync(file,JSON.stringify(claims,null,2)+'\n');}
  }
  console.log(JSON.stringify(summary));
}
if(require.main===module)main();
module.exports={load,RULES,LANGS,shape,h5Blocks};
