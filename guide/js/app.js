// app.js — h5-kyudaiguide（地图首页 + 分类→直出文章 + 多语言）
(function(){
const $=id=>document.getElementById(id);
const CATS=window.CATEGORIES||[];
const ARTICLES=window.ARTICLES||[];
const CUNLI=window.CUNLI_DATA||{items:[],range:{from:'2026-01-01',to:'2027-12-31'},version:'',sources:{}};
const U=window.CunliUtils||(typeof CunliUtils!=='undefined'?CunliUtils:null);
const I18N=window.GuideI18N;

// ── 分类→权威文章映射（每分类唯一一篇） ──
const CAT_ART={};
CATS.forEach(c=>{
  const match=ARTICLES.filter(a=>String(a.category)===c.id);
  // 有文章的取第一篇；没有的标记空
  CAT_ART[c.id]=match[0]||null;
});
// cat=2 有2篇，取 guide-2（权威指南），hot-residence 降级
if(!CAT_ART['2']&&ARTICLES.find(a=>a._id==='guide-2')) CAT_ART['2']=ARTICLES.find(a=>a._id==='guide-2');
if(!CAT_ART['2']) CAT_ART['2']=ARTICLES.find(a=>String(a.category)==='2')||null;

// ── history（localStorage） ──
const HKEY='kg_history',HMAX=20;
function hLoad(){try{const v=JSON.parse(localStorage.getItem(HKEY)||'[]');return Array.isArray(v)?v.filter(x=>x&&x.id):[]}catch(e){return[]}}
function hPush(item){
  if(!item||!item.id||!item.title)return;
  try{const prev=hLoad().filter(x=>x.id!==String(item.id));localStorage.setItem(HKEY,JSON.stringify([{id:String(item.id),title:String(item.title),categoryName:item.categoryName||'',ts:Date.now()},...prev].slice(0,HMAX)))}catch(e){}
}
function hClear(){try{localStorage.removeItem(HKEY)}catch(e){}}

// ── routing ──
function currentHash(){return location.hash.replace(/^#/,'')||'map'}
function navigate(h){if(location.hash!=='#'+h)location.hash='#'+h;else onHashChange()}
function onHashChange(){
  const raw=currentHash();
  if(raw.startsWith('article/')){showArticle(decodeURIComponent(raw.slice(8)));setTab('guide');return}
  if(raw.startsWith('category/')){showCategory(decodeURIComponent(raw.slice(9)));setTab('guide');return}
  const tab=raw.split('?')[0].split('/')[0]||'map';
  setTab(tab);
  if(tab==='guide')renderGrid();
  if(tab==='cunli')renderCunli();
  if(tab==='faculty')renderFaculties();
}
function setTab(tab){
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.tab===tab));
  document.querySelectorAll('.pane').forEach(p=>{
    if(p.id==='pane-article')return;
    p.style.display=(p.id==='pane-'+tab)?'':'none';
  });
  if(!currentHash().startsWith('article/')&&!currentHash().startsWith('category/'))
    $('pane-article').style.display='none';
}

// ── 语言 ──
function initLang(){
  const sel=$('langSwitch');
  if(!sel||!I18N)return;
  sel.innerHTML=I18N.LANGS.map(k=>`<option value="${k}"${k===I18N.getLang()?' selected':''}>${(I18N.UI[k]||{}).self||k}</option>`).join('');
  sel.addEventListener('change',()=>{I18N.setLang(sel.value);applyI18N();onHashChange()});
}
function applyI18N(){
  if(!I18N)return;
  const t=I18N.t.bind(I18N);
  $('brandSub').textContent=t('brandSub');
  $('searchInput').placeholder=t('searchPh');
  $('mapTip').textContent=t('mapTip');
  $('guideHead').textContent=t('guideHead');
  $('guideSub').textContent=t('guideSub');
  $('guideEmpty').textContent=t('emptyCat');
  $('historyTitle').textContent=t('historyTitle');
  $('btnClearHistory').textContent=t('clear');
  $('noHistory').textContent=t('noHistory');
  $('noHistorySub').textContent=t('noHistorySub');
  $('upcomingTitle').textContent=t('upcoming');
  $('upcomingSub').textContent=t('recent3');
  $('dataSrc').textContent=t('dataSrc');
  $('tabMap').textContent=t('tabs.map');
  $('tabGuide').textContent=t('tabs.guide');
  $('tabCunli').textContent=t('tabs.cunli');
  $('tabFaculty').textContent=t('tabs.faculty');
  $('tabHistory').textContent=t('tabs.history');
  $('facultyHead').textContent=t('facHead');
  $('facultySub').textContent=t('facSub');
  $('facUgTitle').textContent=t('facUg');
  $('facGradTitle').textContent=t('facGrad');
  $('facSrc').textContent=t('facSrc');
}

// ── 12宫格 ──
function renderGrid(){
  applyI18N();
  const grid=$('catGrid');
  grid.style.display='';
  grid.innerHTML=CATS.map(c=>{
    const art=CAT_ART[c.id];
    const name=I18N?I18N.catName(c.id):c.name;
    const empty=!art;
    return `<div class="cat-cell"><button class="cat-card${empty?' cat-empty':''}" data-cat="${c.id}"><div class="cat-icon">${c.icon}</div><div class="cat-name">${name}</div></button></div>`;
  }).join('');
  grid.querySelectorAll('.cat-card').forEach(btn=>{
    btn.addEventListener('click',()=>showCategory(btn.dataset.cat));
  });
  $('catListWrap').style.display='none';
  $('catGridWrap').style.display='';
}

// ── 分类→直接展示文章 ──
function showCategory(catId){
  const art=CAT_ART[catId];
  if(!art){
    // 空分类：展示提示
    $('catGridWrap').style.display='none';
    $('catListWrap').style.display='';
    $('catListHead').textContent=I18N?I18N.catName(catId):'';
    $('catBack').textContent=I18N?I18N.t('backGrid'):'‹ 全部品类';
    $('catBack').onclick=()=>{renderGrid()};
    $('catListArticles').innerHTML=`<div class="empty">${I18N?I18N.t('emptyCat'):'内容整理中'}</div>`;
    setTab('guide');
    return;
  }
  // 有文章：直接打开文章详情
  navigate('article/'+art._id);
}

// ── 文章详情（含子标题 tab） ──
function showArticle(id){
  const art=ARTICLES.find(a=>String(a._id)===String(id));
  if(!art){$('pane-article').style.display='none';renderGrid();return}
  hPush({id:art._id,title:art.title,categoryName:I18N?I18N.catName(art.category):(art.title||'')});
  document.querySelectorAll('.pane').forEach(p=>{p.style.display=(p.id==='pane-article')?'':'none'});
  $('pane-article').style.display='';
  setTab('guide');

  const lang=I18N?I18N.getLang():'zh';
  const title=I18N?I18N.articleField(art,'title'):art.title;
  const summary=I18N?I18N.articleField(art,'summary'):art.summary;
  const catLabel=I18N?I18N.catName(art.category):art.title;

  $('articleHeader').innerHTML=`<h1>${esc(title)}</h1>
    <div class="meta">${esc(catLabel)} · ${I18N?I18N.t('updated'):''} ${esc(art.updatedAt||'')} · ${I18N?I18N.t('byAdmin'):''}</div>
    ${summary?`<div style="margin-top:8px;font-size:13px;color:#666;background:#f8f8f8;border-radius:8px;padding:8px 10px">${esc(summary)}</div>`:''}`;

  // 渲染正文 blocks（翻译 heading 后传入）
  const translatedHeadings=I18N?I18N.sectionHeadings(art):null;
  const body=$('articleBody');
  body.innerHTML=window.GuideRender.renderBlocks(art.blocks||[],translatedHeadings);

  // 子标题 tab
  const headings=I18N?I18N.sectionHeadings(art):((art.blocks||[]).filter(b=>b.type==='heading').map(b=>b.text));
  const toc=$('toc');
  if(headings.length>1){
    toc.style.display='';
    toc.innerHTML=headings.map((h,i)=>`<a class="toc-tab" data-idx="${i}" href="#sec-${i}">${esc(h)}</a>`).join('');
    toc.querySelectorAll('.toc-tab').forEach(a=>{
      a.addEventListener('click',(e)=>{
        e.preventDefault();
        const target=document.getElementById('sec-'+a.dataset.idx);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
        toc.querySelectorAll('.toc-tab').forEach(x=>x.classList.remove('on'));
        a.classList.add('on');
      });
    });
    // 初始高亮第一个
    toc.querySelector('.toc-tab')?.classList.add('on');
  }else{toc.style.display='none';toc.innerHTML=''}

  // 相关指南
  const related=ARTICLES.filter(a=>String(a.category)===String(art.category)&&String(a._id)!==String(art._id)).slice(0,3);
  const rw=$('relatedWrap');
  if(related.length){
    rw.style.display='';
    const rTitle=I18N?I18N.t('related'):'相关指南';
    rw.innerHTML=`<div class="rtitle">${rTitle} · ${esc(catLabel)}</div>`+related.map(r=>{
      const rTitle=I18N?I18N.articleField(r,'title'):r.title;
      return `<div class="card-lite" data-rid="${esc(r._id)}" style="margin-top:8px"><div class="t" style="font-size:14px">${esc(rTitle)}</div></div>`;
    }).join('');
    rw.querySelectorAll('[data-rid]').forEach(el=>el.addEventListener('click',()=>navigate('article/'+encodeURIComponent(el.dataset.rid))));
  }else{rw.style.display='none';rw.innerHTML=''}

  // 电话/互引
  body.querySelectorAll('.tel').forEach(btn=>{
    btn.addEventListener('click',async()=>{
      const tel=btn.dataset.tel||btn.textContent.replace(/[^0-9-]/g,'');
      try{await navigator.clipboard.writeText(tel);toast('已复制：'+tel)}catch(e){location.href='tel:'+tel.replace(/-/g,'')}
    });
  });
  body.querySelectorAll('.ref').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const guide=btn.dataset.guide||'';
      const hit=ARTICLES.find(a=>a.title.includes(guide)||guide.includes(a.title));
      if(hit)navigate('article/'+encodeURIComponent(hit._id));
    });
  });
  window.scrollTo(0,0);
}

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function toast(msg){
  let t=document.getElementById('_toast');
  if(!t){t=document.createElement('div');t.id='_toast';t.style.cssText='position:fixed;left:50%;bottom:84px;transform:translateX(-50%);background:rgba(0,0,0,.78);color:#fff;font-size:13px;padding:8px 14px;border-radius:999px;z-index:99;max-width:80vw;text-align:center';document.body.appendChild(t)}
  t.textContent=msg;t.style.display='block';clearTimeout(t._tm);t._tm=setTimeout(()=>t.style.display='none',1800);
}

// ── search ──
function initSearch(){
  const inp=$('searchInput'),clear=$('searchClear');if(!inp)return;
  function uc(){clear.classList.toggle('show',!!inp.value)}
  inp.addEventListener('input',()=>{
    const q=inp.value.trim();uc();
    // 搜索结果显示为列表
    if(q){
      const list=ARTICLES.filter(a=>{
        const hay=[a.title||'',a.summary||'',(a.tags||[]).join(' '),(a.blocks||[]).map(b=>b.text||'').join(' ')].join(' ').toLowerCase();
        return hay.includes(q.toLowerCase());
      });
      showSearchResults(list,q);
    }else{
      renderGrid();
    }
  });
  clear.addEventListener('click',()=>{inp.value='';uc();renderGrid();inp.focus()});
}
function showSearchResults(list,q){
  $('catGridWrap').style.display='none';
  $('catListWrap').style.display='';
  $('catListHead').textContent=(I18N?I18N.t('searchPh'):'搜索')+' — '+esc(q);
  $('catBack').textContent=I18N?I18N.t('backGrid'):'‹ 全部品类';
  $('catBack').onclick=()=>{renderGrid()};
  if(!list.length){$('catListArticles').innerHTML=`<div class="empty">${I18N?I18N.t('emptyCat'):'没有匹配结果'}</div>`;return}
  $('catListArticles').innerHTML=list.map(a=>{
    const title=I18N?I18N.articleField(a,'title'):a.title;
    const catLabel=I18N?I18N.catName(a.category):'';
    return `<article class="card-lite" data-id="${esc(a._id)}"><div class="t">${esc(title)}</div><div class="meta"><span class="tag">${catLabel}</span></div></article>`;
  }).join('');
  $('catListArticles').querySelectorAll('.card-lite').forEach(el=>el.addEventListener('click',()=>navigate('article/'+encodeURIComponent(el.dataset.id))));
}

// ── 村历 ──
let cuState={year:0,month:0,expanded:false,selDate:''};
const BAR_TYPE={admin:'admin',term:'term',break:'rest',holiday:'rest',event:'misc',exam:'misc',user:'user'};
const LANE_STEP=22,LANE_STEP_X=28,BAR_INSET=3;
const WD_CN=['周日','周一','周二','周三','周四','周五','周六'];
function todayStr(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function nameOf(it){const zh=it.zh||it.title||'';const ja=it.title&&it.title!==zh?it.title:'';return{name:zh,ja}}
function excerpt(it){const t=(it.desc||it.note||'').replace(/\s+/g,' ').trim();return t.length>60?t.slice(0,60)+'…':t}
function initCunli(){
  const t=todayStr(),y=+t.slice(0,4),m=+t.slice(5,7);
  cuState.year=y;cuState.month=m;cuState.today=t;
  const items=CUNLI.items||[];window._cu_items=items;
  const holSet={};items.forEach(it=>{if(it.type==='holiday')holSet[it.date]=true});window._cu_holSet=holSet;
  window._cu_barItems=items.filter(it=>it.type!=='holiday');
  const byId={};items.forEach(it=>byId[it.id]=it);window._cu_byId=byId;
  $('btnPrev').addEventListener('click',()=>slideMonth('l'));
  $('btnNext').addEventListener('click',()=>slideMonth('r'));
  $('mTitleBtn').addEventListener('click',()=>{cuState.year=y;cuState.month=m;cuState.selDate='';renderCunli()});
  $('btnToday').addEventListener('click',()=>{cuState.year=y;cuState.month=m;cuState.selDate='';renderCunli()});
  $('btnExpand').addEventListener('click',()=>{cuState.expanded=!cuState.expanded;renderCunli()});
  $('detailMask').addEventListener('click',e=>{if(e.target.id==='detailMask')closeDetail()});
  $('btnCloseDetail').addEventListener('click',closeDetail);
  renderCunli();
}
function slideMonth(dir){
  let y=cuState.year,m=cuState.month+(dir==='l'?-1:1);
  if(m<1){y--;m=12}if(m>12){y++;m=1}
  const key=y+'-'+String(m).padStart(2,'0');
  if(key<(CUNLI.range.from||'2026-01-01').slice(0,7)||key>(CUNLI.range.to||'2027-12-31').slice(0,7))return;
  cuState.year=y;cuState.month=m;cuState.selDate='';renderCunli();
}
function renderCunli(){
  if(!U)return;
  const year=cuState.year,month=cuState.month,today=cuState.today,expanded=cuState.expanded;
  const barItems=window._cu_barItems||[],byId=window._cu_byId||{},holSet=window._cu_holSet||{},items=window._cu_items||[];
  const step=expanded?LANE_STEP_X:LANE_STEP;
  const res=U.monthSegments(barItems,year,month);
  const min=(CUNLI.range.from||'2026-01-01').slice(0,7),max=(CUNLI.range.to||'2027-12-31').slice(0,7);
  const key=year+'-'+String(month).padStart(2,'0');
  $('mTitleBtn').textContent=year+' 年 '+month+' 月';
  $('btnPrev').classList.toggle('off',key<=min);$('btnNext').classList.toggle('off',key>=max);
  $('btnToday').style.display=key!==today.slice(0,7)?'':'none';
  $('btnExpand').textContent=expanded?'收起 ⌃':'展开 ⌄';
  const wgrid=$('wgrid');
  wgrid.innerHTML=res.grid.weeks.map((days,wi)=>{
    const segs=res.weeks[wi].segs;let wMax=-1;segs.forEach(s=>{if(s.lane>wMax)wMax=s.lane});
    const laneH=wMax<0?6:(wMax+1)*step;
    const daysHtml=days.map(d=>{
      const cls=['wd',d.out?'out':'',d.dow===0?'sun':'',d.dow===6?'sat':'',holSet[d.date]?'hol':'',d.date===today?'today':'',d.date===cuState.selDate?'sel':''].filter(Boolean).join(' ');
      return `<div class="${cls}" data-date="${d.date}"><span class="wd-n">${d.d}</span></div>`;
    }).join('');
    const barsHtml=segs.map(s=>{
      const it=byId[s.id],text=(it&&it.zh)||s.title;
      const l=s.openL?0:BAR_INSET,rr=s.openR?0:BAR_INSET;
      const left=(s.col*100/7).toFixed(4),width=(s.span*100/7).toFixed(4);
      let mode='';if(expanded&&s.showName)mode=s.span>=U.LABEL_MIN_SPAN?'in':'tight';
      const cls2=BAR_TYPE[s.type]||'misc';
      return `<div class="bar b-${cls2}${s.openL?' ol':''}${s.openR?' or':''}${expanded?' bx':''}" style="left:calc(${left}% + ${l}px);width:calc(${width}% - ${l+rr}px);top:${s.lane*step}px" data-id="${esc(s.id)}"><span class="bar-t${mode==='tight'?' bar-t-tight':''}">${mode?esc(text):''}</span></div>`;
    }).join('')+(res.weeks[wi].more?`<span class="more">+${res.weeks[wi].more}</span>`:'');
    return `<div class="wk"><div class="wdays">${daysHtml}</div><div class="wlanes" style="height:${laneH}px">${barsHtml}</div></div>`;
  }).join('');
  wgrid.querySelectorAll('.wd').forEach(el=>el.addEventListener('click',()=>{cuState.selDate=cuState.selDate===el.dataset.date?'':el.dataset.date;setTimeout(renderCunli,0)}));
  wgrid.querySelectorAll('.bar').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();openDetail(el.dataset.id)}));
  const runs=U.restRuns(items,key+'-01',key+'-'+String(U.daysInMonth(year,month)).padStart(2,'0'));
  $('runs').innerHTML=runs.map(r=>`<span class="run">🎌 ${esc(U.fmtRange({date:r.start,end:r.end}))}　${r.len} 连休</span>`).join('');
  renderCunliSel();
  const up=U.upcoming(items,today,{within:90,max:3});
  $('upcomingList').innerHTML=up.length?up.map(u=>{const n=nameOf(u.item);return `<div class="row" data-id="${esc(u.item.id)}"><span class="tg tg-${esc(u.item.type)}">${esc(U.typeLabel(u.item.type))}</span><div class="row-main"><span class="row-t">${esc(n.name)}${u.item.star?'<span class="star">※</span>':''}</span>${n.ja?`<span class="row-ja">${esc(n.ja)}</span>`:''}</div><span class="row-d">${u.ongoing?'进行中':esc(U.fmtRange(u.item))}</span></div>`}).join(''):'<div class="empty" style="padding:12px">近期没有已收录的日程</div>';
  $('upcomingList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
  const mc=$('monthCard');
  if(expanded){mc.style.display='';const mi=U.monthItems(items,year,month);$('monthListTitle').textContent='本月 '+mi.length+' 条';
    $('monthList').innerHTML=mi.map(it=>{const n=nameOf(it);return `<div class="row" data-id="${esc(it.id)}"><span class="tg tg-${esc(it.type)}">${esc(U.typeLabel(it.type))}</span><div class="row-main"><span class="row-t">${esc(n.name)}${it.star?'<span class="star">※</span>':''}</span>${n.ja?`<span class="row-ja">${esc(n.ja)}</span>`:''}</div><span class="row-d">${esc(U.fmtRange(it))}</span></div>`}).join('');
    $('monthList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
    const pend=U.pendingItems(items);
    $('pendingList').innerHTML=pend.map(it=>{const n=nameOf(it);return `<div class="row" data-id="${esc(it.id)}"><span class="tg" style="background:#fafafa;color:#777;border-color:#eee">待核对</span><div class="row-main"><span class="row-t">${esc(n.name)}</span></div><span class="row-d">⬜ 待核对</span></div>`}).join('');
    $('pendingList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
  }else mc.style.display='none';
}
function renderCunliSel(){
  const sc=$('selCard');if(!cuState.selDate){sc.style.display='none';return}
  const list=U.dayItems(window._cu_items||[],cuState.selDate);sc.style.display='';
  $('selLabel').textContent=+cuState.selDate.slice(5,7)+' 月 '+ +cuState.selDate.slice(8,10)+' 日 · '+WD_CN[U.dow(cuState.selDate)];
  $('selCount').textContent=list.length?list.length+' 条':'没有日程';
  $('selList').innerHTML=list.map(it=>{const n=nameOf(it);return `<div class="row" data-id="${esc(it.id)}"><span class="tg tg-${esc(it.type)}">${esc(U.typeLabel(it.type))}</span><div class="row-main"><span class="row-t">${esc(n.name)}${it.star?'<span class="star">※</span>':''}</span></div><span class="row-d">${esc(U.fmtRange(it))}</span></div>`}).join('');
  $('selList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
}
function openDetail(id){
  const it=(window._cu_items||[]).find(x=>String(x.id)===String(id));if(!it)return;
  const n=nameOf(it),srcMap=CUNLI.sources||{},src=srcMap[it.src]||null;
  $('detailBody').innerHTML=`<div style="font-size:16px;font-weight:800">${esc(n.name)}${it.star?'<span class="star">※</span>':''}</div>${n.ja?`<div style="font-size:13px;color:#777;margin-top:2px">${esc(n.ja)}</div>`:''}<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="tg tg-${esc(it.type)}">${esc(U.typeLabel(it.type))}</span><span style="font-size:12px;color:#666">${it.date?esc(U.fmtRange(it))+' · '+WD_CN[U.dow(it.date)]:'待核对'}</span></div>${it.place?`<div style="margin-top:8px;font-size:13px">地点：${esc(it.place.zh)}（${esc(it.place.ja)}）</div>`:''}${it.desc?`<div style="margin-top:12px;font-size:14px;line-height:1.7;white-space:pre-wrap">${esc(it.desc)}</div>`:''}${it.note?`<div style="margin-top:10px;background:#fff7e6;border:1px solid #ffe7ba;border-radius:8px;padding:8px 10px;font-size:13px;color:#7a4d00">${esc(it.note)}</div>`:''}${src?`<div style="margin-top:10px;font-size:12px;color:#888">来源：${src.url?`<a href="${esc(src.url)}" target="_blank">${esc(src.name)}</a>`:esc(src.name)}</div>`:''}`;
  $('detailMask').style.display='';
}
function closeDetail(){$('detailMask').style.display='none'}

// ── 院系官网 ──
const CAMPUS_LABEL={
  zh:{ito:'伊都',hosp:'病院',ohashi:'大桥',chikushi:'筑紫'},
  ja:{ito:'伊都',hosp:'病院',ohashi:'大橋',chikushi:'筑紫'},
  en:{ito:'Ito',hosp:'Hospital',ohashi:'Ohashi',chikushi:'Chikushi'},
  ko:{ito:'이토',hosp:'병원',ohashi:'오하시',chikushi:'지쿠시'},
};
function facName(f){const l=I18N?I18N.getLang():'zh';return f[l]||f.ja||f.zh}
function facRows(list){
  const l=I18N?I18N.getLang():'zh';const cm=CAMPUS_LABEL[l]||CAMPUS_LABEL.zh;
  return list.map(f=>{
    const cl=cm[f.campus]||f.campus||'';
    return `<a class="fac-row" href="${esc(f.url)}" target="_blank" rel="noopener noreferrer"><span class="fac-name">${esc(facName(f))}</span><span class="fac-meta">${cl?`<span class="fac-campus fc-${esc(f.campus)}">${esc(cl)}</span>`:''}<span class="fac-go">↗</span></span></a>`;
  }).join('');
}
function renderFaculties(){
  applyI18N();
  const F=window.FACULTIES;if(!F)return;
  $('facUgList').innerHTML=facRows(F.undergraduate||[]);
  $('facGradList').innerHTML=facRows(F.graduate||[]);
}

// ── history ──
function renderHistory(){
  const list=hLoad(),wrap=$('historyList'),empty=$('historyEmpty');
  if(!list.length){wrap.innerHTML='';empty.style.display='';return}
  empty.style.display='none';
  wrap.innerHTML=list.map(it=>`<article class="card-lite" data-hid="${esc(it.id)}"><div class="t">${esc(it.title)}</div><div class="meta"><span class="tag">${esc(it.categoryName||'')}</span><span style="font-size:12px;color:#999">${new Date(it.ts).toLocaleString('zh-CN',{hour12:false})}</span></div></article>`).join('');
  wrap.querySelectorAll('[data-hid]').forEach(el=>el.addEventListener('click',()=>navigate('article/'+encodeURIComponent(el.dataset.hid))));
}

// ── init ──
function init(){
  initLang();applyI18N();initSearch();renderGrid();initCunli();renderHistory();
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.tab)));
  $('btnBack').addEventListener('click',()=>renderGrid());
  $('btnClearHistory').addEventListener('click',()=>{hClear();renderHistory();toast('已清空')});
  $('btnBackToGrid')?.addEventListener('click',()=>renderGrid());
  window.addEventListener('hashchange',onHashChange);
  onHashChange();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
