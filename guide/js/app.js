// app.js — h5-kyudaiguide（地图首页 + 12 分类指南 + 村历 + 官网 + 历史）
// i18n 约定：一切界面文案取自 GuideI18N 词典（见 i18n.js 头注），本文件不写死任何语言的字符串；
//            文章正文为中文原文，非 zh 界面在正文上方显示 bodyNotice。
(function(){
const $=id=>document.getElementById(id);
const CATS=window.CATEGORIES||[];
const ARTICLES=window.ARTICLES||[];
const CUNLI=window.CUNLI_DATA||{items:[],range:{from:'2026-01-01',to:'2027-12-31'},version:'',sources:{}};
const U=window.CunliUtils||(typeof CunliUtils!=='undefined'?CunliUtils:null);
const I18N=window.GuideI18N;
const t=k=>I18N.t(k);

// ── 分类 → 文章（迁移后每分类恰有一篇 guide-<slug>；cat13 反诈走置顶位） ──
const CAT_ART={};
CATS.forEach(c=>{CAT_ART[c.id]=ARTICLES.find(a=>String(a.category)===c.id)||null});
// 必读（置顶）可以有多篇。pinOrder 小的在前 —— 顺序必须是有人做过的决定，
// 按 updatedAt 排的话，去改一个错别字就会把首页第一张卡换掉。
// build_guide_articles.js 会卡住「isPinned 却没写 pinOrder」和「pinOrder 撞车」。
const PINNED=ARTICLES.filter(a=>a.isPinned).sort((a,b)=>(a.pinOrder||0)-(b.pinOrder||0));

// ── history（localStorage） ──
const HKEY='kg_history',HMAX=20;
function hLoad(){try{const v=JSON.parse(localStorage.getItem(HKEY)||'[]');return Array.isArray(v)?v.filter(x=>x&&x.id):[]}catch(e){return[]}}
function hPush(item){
  if(!item||!item.id||!item.title)return;
  try{const prev=hLoad().filter(x=>x.id!==String(item.id));localStorage.setItem(HKEY,JSON.stringify([{id:String(item.id),title:String(item.title),categoryName:item.categoryName||'',ts:Date.now()},...prev].slice(0,HMAX)))}catch(e){}
}
function hClear(){try{localStorage.removeItem(HKEY)}catch(e){}}

// ── routing ──
function currentHash(){return location.hash.replace(/^#/,'')||'guide'}
function navigate(h){if(location.hash!=='#'+h)location.hash='#'+h;else onHashChange()}
function onHashChange(){
  const raw=currentHash();
  if(raw.startsWith('article/')){
    // 支持 article/<id>?h=<小节标题> 深链到具体小节（新生专区的时间线就是靠它指路的）
    const seg=raw.slice(8),qi=seg.indexOf('?');
    const id=qi<0?seg:seg.slice(0,qi);
    let want='',wantSec='';
    try{
      const p=new URLSearchParams(qi<0?'':seg.slice(qi+1));
      want=p.get('h')||'';        // ?h=<小节标题>（语言相关，少用）
      wantSec=p.get('sec')||'';   // ?sec=<区块ID>（语言无关，新生专区用这个）
    }catch(e){}
    document.body.classList.add('modal-open');
    showArticle(decodeURIComponent(id),want,wantSec);setTab('guide');return;
  }
  // 离开文章详情：解除背景滚动锁定（showArticle 里加的 modal-open），
  // 并把进入文章前的宫格滚动位置还原 —— 否则看完一篇回来就被扔回页首。
  const wasArticle=document.body.classList.contains('modal-open');
  document.body.classList.remove('modal-open');
  if(raw.startsWith('category/')){showCategory(decodeURIComponent(raw.slice(9)));setTab('guide');return}
  const tab=raw.split('?')[0].split('/')[0]||'guide';
  setTab(tab);
  if(tab==='guide')renderGrid();
  if(tab==='cunli')renderCunli();
  if(tab==='faculty')renderFaculties();
  if(tab==='history')renderHistory();
  if(wasArticle){
    const btn=$('btnToTop'); if(btn)btn.hidden=true;
    if(tab==='guide')restoreScroll(guideScrollY);
  }
}
/** 地图 iframe 首次真正需要时才注入 src。地图侧数据约 500KB，
    默认进来的人是来看指南的，不该替他先下载。 */
function mountMap(){
  const f=$("mapFrame");
  if(f&&!f.src&&f.dataset.src)f.src=f.dataset.src;
}
function setTab(tab){
  if(tab==='map')mountMap();
  // 底部指示条完全由 CSS 的 .tab.on::after 处理，这里只管切 .on
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
  sel.addEventListener('change',()=>{
      I18N.setLang(sel.value);applyI18N();searchRebuild();
      // 记住滚动位置：正文重建后 restore，切换语言不该把人踢回页首
      const scY=window.scrollY||document.documentElement.scrollTop||0;
      // 先按现有内容渲染（中文兜底），译文包到了再重排一次 —— 切语言不等下载
      onHashChange();
      restoreScroll(scY);
      ensureBodyI18N(()=>{onHashChange();restoreScroll(scY)});
    });
}
/** 恢复滚动位置。requestAnimationFrame 里做：正文重建后布局可能还没完成，
    直接设 scrollTop 会被浏览器的后续布局吞掉；等一帧再设才稳。
    showArticle 结尾会 scrollTo(0,0)，这里用 rAF 在它之后覆盖。
    再补一次 setTimeout：图片/表格撑高后文档高度还会变，只设一次会被截短。 */
function restoreScroll(y){
  if(typeof y!=='number'||y<=0)return;
  const go=()=>{try{ window.scrollTo(0,y); }catch(e){}};
  requestAnimationFrame(go);
  setTimeout(go,60);
}

/* 打开文章前记下宫格/列表的滚动位置，关闭后恢复 ——
   否则用户在长列表里翻到一半，看完一篇回来就被扔回页首，
   在手机上（新生专区 + 15 格）这个体感尤其差。 */
let guideScrollY=0;
/* 文章内的两个联动更新器（回到顶部按钮显隐、目录高亮），
   showArticle 渲染完要主动调一次，否则打开新文章时状态还停在上一次。 */
let refreshToTop=null, refreshTocSpy=null;
/* 搜索结果的键盘选中（↑↓ / Enter）。必须在这里声明 ——
   app.js 的 IIFE 是严格模式，showSearchResults 里裸赋值会抛 ReferenceError。 */
let searchKbd={idx:-1,cards:[],set:function(){}};
function applyI18N(){
  $('brandSub').textContent=t('brandSub');
  $('searchInput').placeholder=t('searchPh');
  $('mapTip').textContent=t('mapTip');
  const bt=$('btnToTop'); if(bt)bt.title=t('toTop');   // 悬浮按钮只有图标，靠 title 说明
  // 状态条里的文案（来访人数/天气/打卡）由 pulse.js 自己管，这里叫它重算一遍
  if(window.Pulse)window.Pulse.render();
  // 安装提示条已经显示时切语言，文案要跟着变（它是由 beforeinstallprompt 触发的，
  // 不在 renderXxx 的重绘路径上，不在这里补就会停在上一个语言）
  const ib=$('installBar');
  if(ib&&!ib.hidden){
    const set=(id,k)=>{const e=$(id); if(e)e.textContent=t(k)};
    set('installTitle','installTitle'); set('installDesc','installDesc');
    set('installGo','installGo'); set('installNo','installNo');
  }
  // %n% 必须替换 —— 这里先前直接赋 t('guideHead')，切换语言时标题会显示成
  // 原始占位符「가이드 · %n% 카테고리」（冷启动走 renderGrid 才会替换，所以只在切换时暴露）
  $('guideHead').textContent=t('guideHead').replace('%n%',CATS.length);
  $('guideSub').textContent=t('guideSub');
  $('guideEmpty').textContent=t('emptyCat');
  $('historyTitle').textContent=t('historyTitle');
  $('btnClearHistory').textContent=t('clear');
  $('noHistory').textContent=t('noHistory');
  $('noHistorySub').textContent=t('noHistorySub');
  $('upcomingTitle').textContent=t('upcoming');
  $('upcomingSub').textContent=t('recent3');
  // 新生专区也要跟着切 —— renderNewcomerZone 原先只在 renderGrid 里调用，
  // 切换语言时若当前不在宫格页，专区就会停留在上一语言（看似「没切过来」）
  if(typeof renderNewcomerZone==='function')renderNewcomerZone();
  $('dataSrc').textContent=t('dataSrc');
  $('articleEnd').textContent=t('endMark');
  $('btnBack').textContent=t('backGrid');
  ['map','guide','cunli','faculty','history'].forEach(k=>{
    const el=$('tab'+k[0].toUpperCase()+k.slice(1));if(el)el.textContent=t('tabs.'+k);
  });
  // 村历静态件：周表头 / 图例 / 今天 / 月列表副标
  const wd=t('wd');
  $('wkhead').innerHTML=wd.map((w,i)=>`<span class="wkh${i===0?' sun':''}">${esc(w)}</span>`).join('');
  const lg=t('legend');
  $('legendWrap').innerHTML=[['rest','c-rest'],['admin','c-admin'],['term','c-term'],['misc','c-misc']]
    .map(([k,c])=>`<span class="lg"><i class="lg-c ${c}"></i>${esc(lg[k])}</span>`).join('');
  $('btnToday').textContent=t('today');
  const bIcs=$('btnExportIcs');
  if(bIcs){bIcs.textContent=t('exportIcs');bIcs.setAttribute('title',t('exportIcsTitle'));}
  $('monthTap').textContent=t('tapDetail');
  // 官网
  $('facultyHead').textContent=t('facHead');
  $('facultySub').textContent=t('facSub');
  $('facUgTitle').textContent=t('facUg');
  $('facGradTitle').textContent=t('facGrad');
  $('facSrc').textContent=t('facSrc');
}

// ── 新生专区（首页顶部时间线） ──
/* 服务"刚到日本"的人：不复制正文，只把散在各篇的关键步骤按时间顺序串起来，
   每条深链到对应小节（?sec=<区块ID>，语言无关）。
   数据在 data-newcomer-zone.js；ID 是否真实存在由 tools/check_newcomer_zone.js 把关 ——
   链接指不到小节，等于给新生的第一屏就是坏的。 */
function renderNewcomerZone(){
  const wrap=$('nzWrap'),box=$('nzStages'),Z=window.NEWCOMER_ZONE;
  if(!wrap||!box||!Z||!Z.stages||!Z.stages.length){if(wrap)wrap.style.display='none';return 0}
  const lang=I18N.getLang();
  const pick=o=>o?(o[lang]||o.zh||''):'';
  let n=0;
  box.innerHTML=Z.stages.map(st=>{
    const items=(st.items||[]).filter(it=>it&&it.ref).map(it=>{
      n++;
      const href='#article/'+encodeURIComponent(it.ref)+(it.sec?'?sec='+encodeURIComponent(it.sec):'');
      return `<a class="nz-item" href="${href}"><span class="nz-dot"></span><span class="nz-text">${esc(pick(it.text))}</span><span class="nz-go">›</span></a>`;
    }).join('');
    return `<div class="nz-stage"><div class="nz-head"><span class="nz-icon">${esc(st.icon||'')}</span><span>${esc(pick(st.label))}</span></div><div class="nz-items">${items}</div></div>`;
  }).join('');
  const ti=$('nzTitle'),su=$('nzSub');
  if(ti)ti.textContent=t('nzTitle');
  if(su)su.textContent=t('nzSub');
  wrap.style.display='';
  return n;
}

// ── 12 宫格（+ 置顶反诈卡） ──
function renderGrid(){
  applyI18N();
  renderNewcomerZone();
  // guideHead 里的 %n% 换成实际格数 —— 写死数字一定会过期（曾经写「12 场景」而实际有 15 个）
  const gh=$('guideHead');
  if(gh) gh.textContent=t('guideHead').replace('%n%',CATS.length);
  const pin=$('pinnedCards');
  if(PINNED.length){
    pin.style.display='grid';
    pin.style.gap='10px';
    pin.innerHTML=PINNED.map(a=>
      `<div class="card-lite" data-id="${esc(a._id)}"><span class="tag hot">${esc(t('pinnedTag'))}</span><div class="t">${esc(I18N.articleField(a,'title'))}</div><div class="sum">${esc(I18N.articleField(a,'summary'))}</div></div>`
    ).join('');
    pin.querySelectorAll('.card-lite').forEach(c=>
      c.addEventListener('click',()=>navigate('article/'+encodeURIComponent(c.dataset.id))));
  }else pin.style.display='none';
  const grid=$('catGrid');
  grid.style.display='';
  grid.innerHTML=CATS.map(c=>{
    const empty=!CAT_ART[c.id];
    return `<div class="cat-cell"><button class="cat-card${empty?' cat-empty':''}" data-cat="${c.id}"><div class="cat-icon">${c.icon}</div><div class="cat-name">${esc(I18N.catName(c.id))}</div></button></div>`;
  }).join('');
  grid.querySelectorAll('.cat-card').forEach(btn=>btn.addEventListener('click',()=>showCategory(btn.dataset.cat)));
  guideView('grid');
}

/* 指南页有两个视图：宫格（含新生专区 + 置顶卡）与列表（搜索结果 / 空分类提示）。
   三个区块必须一起管 —— 曾经漏掉 #nzWrap，于是搜索时新生专区仍占满整屏，
   把搜索结果顶到屏幕下方，看起来像「搜索没反应」（2026-09-15 用户反馈）。
   置顶卡不在这里恢复：它的 display 是 grid（不是 block），由 renderGrid() 自己设。 */
function guideView(v){
  const set=(id,show)=>{const e=$(id);if(e)e.style.display=show?'':'none'};
  set('nzWrap', v==='grid');
  // 状态条只在宫格首页出现 —— 搜索结果页和分类列表页要收起，否则今日来访/天气/打卡
  // 四条标签会压在结果上面，把用户真正要看的东西往下推。
  set('pulse', v==='grid');
  set('catGridWrap', v==='grid');
  set('catListWrap', v==='list');
  if(v!=='grid')set('pinnedCards',false);
}

function showCategory(catId){
  const art=CAT_ART[catId];
  if(!art){
    guideView('list');
    $('catListHead').textContent=I18N.catName(catId);
    $('catBack').textContent=t('backGrid');
    $('catBack').onclick=()=>{renderGrid()};
    $('catListArticles').innerHTML=`<div class="empty">${esc(t('emptyCat'))}</div>`;
    setTab('guide');
    return;
  }
  navigate('article/'+encodeURIComponent(art._id));
}

/** 交叉引用「见【某篇·某节】」的目标解析。中文原名先试，再试各语言译名 —— 译本里
    写的是该语言的篇名，只按中文标题找会在非中文界面下全部失效。 */
function resolveRef(name){
  const n=String(name||'').trim();
  if(!n)return null;
  const direct=ARTICLES.find(a=>a.title.includes(n)||n.includes(a.title));
  if(direct)return direct;
  const I=window.ARTICLES_I18N||{};
  return ARTICLES.find(a=>{
    const tr=I[a._id]&&I[a._id].title;
    return tr&&Object.values(tr).some(v=>v&&(v.includes(n)||n.includes(v)));
  })||null;
}

/* ── 正文译文包按需加载 ──────────────────────────────────────
   articles-body-i18n.js 是全站最大的一个文件（gzip 约 165KB，占首屏六成），
   而【中文读者一个字节都用不上】—— trMap() 在 lang==='zh' 时直接返回 null。
   原来它挂在 index.html 里同步加载，等于让占多数的中文读者替另外三种语言
   付流量和解析时间，还挡在首屏渲染前面。

   现在：中文不加载；非中文在启动时并行拉。拉到之前正文照常显示中文，
   到了再重排一次。拉失败（离线且还没进过缓存）就一直是中文 ——
   少了译文不该连正文都看不成。 */
const BUILD=(function(){
  try{const m=String(document.currentScript&&document.currentScript.src||'').match(/[?&]v=([^&]+)/);return m?m[1]:''}
  catch(e){return ''}
})();
let trState='idle';                 // idle | loading | ready | failed
const trWaiters=[];
function ensureBodyI18N(cb){
  if(I18N.getLang()==='zh'||window.ARTICLES_BODY_I18N||trState==='failed'){cb&&cb();return}
  if(cb)trWaiters.push(cb);
  if(trState==='loading')return;
  trState='loading';
  const flush=ok=>{
    trState=ok?'ready':'failed';
    searchRebuild();                    // 译文到位后搜索索引要重建，否则搜不到译文正文
    trWaiters.splice(0).forEach(f=>{try{f()}catch(e){}});
  };
  const s=document.createElement('script');
  s.src='js/articles-body-i18n.js'+(BUILD?'?v='+encodeURIComponent(BUILD):'');
  s.async=true;
  s.onload=()=>flush(true);
  s.onerror=()=>flush(false);
  document.head.appendChild(s);
}

/** 当前语言的译文表（按区块 ID 索引）。整篇没有译文时返回 null。 */
function trMap(art){
  const lang=I18N.getLang();
  if(lang==='zh')return null;
  const e=window.ARTICLES_BODY_I18N&&window.ARTICLES_BODY_I18N[art._id];
  const m=e&&e[lang];
  return (m&&Object.keys(m).length)?m:null;
}

/** 把译文按 ID 覆盖到中文区块上。
    结构（type、嵌套形状）永远来自中文，译文只提供文字字段 ——
    所以译本不可能与中文结构漂移；某个区块缺译时也只有那一块显示中文。 */
function mergeBlocks(blocks,map){
  return blocks.map(b=>{
    const tr=b.id&&map[b.id];
    const nested=(b.type==='collapse'&&Array.isArray(b.blocks))?mergeBlocks(b.blocks,map):null;
    if(!tr&&!nested)return b;
    const out=Object.assign({},b,tr||{});
    if(nested)out.blocks=nested;
    return out;
  });
}

/** 当前语言下该篇应渲染的 blocks。 */
function bodyBlocks(art){
  const blocks=art.blocks||[];
  const map=trMap(art);
  return map?mergeBlocks(blocks,map):blocks;
}

// ── 文章详情 ──
function showArticle(id,wantHeading,wantSec){
  const art=ARTICLES.find(a=>String(a._id)===String(id));
  if(!art){$('pane-article').style.display='none';renderGrid();return}
  // 记下进入文章前的宫格滚动位置（文章窗已经开着 = 文内互引跳转，不覆盖）
  const paNow=$('pane-article');
  if(paNow&&getComputedStyle(paNow).display==='none') guideScrollY=window.scrollY||0;
  hPush({id:art._id,title:I18N.articleField(art,'title'),categoryName:I18N.catName(art.category)});
  document.querySelectorAll('.pane').forEach(p=>{p.style.display=(p.id==='pane-article')?'':'none'});
  $('pane-article').style.display='';
  setTab('guide');

  const title=I18N.articleField(art,'title');
  const summary=I18N.articleField(art,'summary');
  const catLabel=I18N.catName(art.category);
  // 提示条只在「整篇都没有译文」时出现；个别区块缺译不打扰读者，静默显示中文即可
  const blocks=bodyBlocks(art);
  const notice=trMap(art)?'':t('bodyNotice');

  $('articleHeader').innerHTML=`<h1>${esc(title)}</h1>
    <div class="meta">${esc(catLabel)} · ${esc(t('updated'))} ${esc(art.updatedAt||'')} · ${esc(t('byAdmin'))}</div>
    ${summary?`<div style="margin-top:8px;font-size:13px;color:#666;background:#f8f8f8;border-radius:8px;padding:8px 10px">${esc(summary)}</div>`:''}
    ${notice?`<div class="notice" style="margin-top:8px">🌐 ${esc(notice)}</div>`:''}`;

  // 正文（TOC 取自同一份 blocks，与正文语言必然一致）
  const body=$('articleBody');
  body.innerHTML=window.GuideRender.renderBlocks(blocks,null);

  const headings=blocks.filter(b=>b.type==='heading').map(b=>b.text);
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
    toc.querySelector('.toc-tab')?.classList.add('on');
  }else{toc.style.display='none';toc.innerHTML=''}

  // 电话 / 互引
  // 电话本身是 <a href="tel:">：手机上交给系统（会先弹确认框，不会误拨）。
  // 桌面浏览器拨不了号，这里拦下改为复制 —— 用能不能悬停/精确指点来区分，比 UA 嗅探可靠。
  const isDesktop=(()=>{try{return matchMedia('(hover: hover) and (pointer: fine)').matches}catch(e){return false}})();
  if(isDesktop){
    body.querySelectorAll('.tel').forEach(a=>{
      a.addEventListener('click',async e=>{
        e.preventDefault();
        const tel=a.dataset.tel||a.textContent.replace(/[^0-9-]/g,'');
        const ok=await copyText(tel);
        // 复制失败也必须给反馈：把号码本身弹出来，用户至少能看着抄或长按选中。
        // 静默失败是最糟的 —— 用户会以为点了没反应而反复点。
        toast(ok?t('copied')+tel:tel);
      });
    });
  }
  body.querySelectorAll('.ref').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const hit=resolveRef(btn.dataset.guide||'');
        if(hit)navigate('article/'+encodeURIComponent(hit._id));
      });
    });
    // 生活支援巴士实时模块（bus_live block）
        if(window.GuideBusLive){
          body.querySelectorAll('.bus-live').forEach(el=>window.GuideBusLive.init(el));
        }
        // 悬浮窗打开：锁定背景滚动（body.modal-open 由 CSS 处理 overflow:hidden），
        // 关闭按钮/遮罩点击由 onHashChange 离开 article 时解除。
        document.body.classList.add('modal-open');
        window.scrollTo(0,0);
        /* 换文章要真的回到顶部：手机/平板的滚动容器是 .sheet-card，
           window.scrollTo 管不到它 —— 不重置就会出现「点下一篇后停在上一篇的
           滚动位置」，看起来像内容没换。深链跳转在下面，会再显式赋值，不受影响。 */
        for(const s of articleScrollers()){ if(s.scrollTop) s.scrollTop=0; }
        // 文末的上一篇 / 下一篇（按宫格顺序）
        try{ renderArticleNav(art); }catch(e){}
        // 新文章从顶部开始：回到顶部按钮该隐藏、目录高亮该回到第一节，
        // 都要在这里主动刷一次，否则状态还停在上一次打开的那篇。
        try{ if(refreshToTop)refreshToTop(); if(refreshTocSpy)refreshTocSpy(); }catch(e){}

        /* 深链到小节。⚠️ 必须放在 window.scrollTo(0,0) **之后**并延后一拍 ——
           放在前面会被那次 scrollTo 冲掉（实测目标小节停在视口下方 970px）。
           定位按**区块 ID**（语言无关），退路是按标题文本；
           不用「第 N 节」的序号 —— 正文增删后序号会整体错位，
           和小程序那个「点目录跳到错位置」的缺陷同源。 */
        if(wantSec||wantHeading){
          /* 定位到小节。
             ⚠️ 不用 scrollIntoView：弹层有入场动画，动画期间滚动容器还没就绪，
                实测 scrollIntoView 会被静默忽略（目标停在视口下方 5000px、scrollTop=0，
                而同一次手动调用却有效）——行为不可预期。
             改为**直接给滚动容器赋 scrollTop**：目标相对容器的偏移自己算，
             赋完再量一次，没到位就重试（动画/布局落定后再补一次）。 */
          let tries=0;
          const jump=()=>{
            let target=null,idx=-1;
            if(wantSec){
              target=body.querySelector('[data-blk="'+wantSec+'"]');   // h2/h3 都认
            }else{
              idx=headings.indexOf(wantHeading);
              if(idx<0) idx=headings.findIndex(h=>h&&(h.includes(wantHeading)||wantHeading.includes(h)));
              if(idx>=0) target=document.getElementById('sec-'+idx);
            }
            const sc=body.closest('.sheet-card')||document.querySelector('.sheet-card');
            if(!target||!sc) return;
            const want=target.getBoundingClientRect().top-sc.getBoundingClientRect().top+sc.scrollTop-10;
            sc.scrollTop=Math.max(0,want);
            let off=Math.abs(target.getBoundingClientRect().top-sc.getBoundingClientRect().top-10);
            if(off>24){
              // 兜底：直接赋 scrollTop 没生效时再走 scrollIntoView（两者行为视浏览器而定）
              target.scrollIntoView({block:'start'});
              off=Math.abs(target.getBoundingClientRect().top-sc.getBoundingClientRect().top-10);
            }
            if(off>24 && tries++<5){ setTimeout(jump,140); return; }
            if(idx>=0) toc.querySelectorAll('.toc-tab').forEach((x,i2)=>x.classList.toggle('on',i2===idx));
          };
          setTimeout(jump,60);
        }
    }

/** 复制文本，返回是否成功。
    clipboard API 在无焦点、非安全上下文、权限被拒时都会抛错，
    所以退回到老的 execCommand 再试一次；两者都不行就如实返回 false。 */
async function copyText(str){
  try{ await navigator.clipboard.writeText(str); return true; }catch(_){}
  try{
    const ta=document.createElement('textarea');
    ta.value=str; ta.setAttribute('readonly','');
    ta.style.cssText='position:fixed;top:0;left:-9999px;opacity:0';
    document.body.appendChild(ta); ta.select();
    const ok=document.execCommand&&document.execCommand('copy');
    ta.remove(); return !!ok;
  }catch(_){ return false; }
}

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function toast(msg){
  let el=document.getElementById('_toast');
  if(!el){
    el=document.createElement('div');el.id='_toast';
    // role=status + aria-live：读屏软件会念出「已复制」这类反馈，否则视障用户完全不知道发生了什么
    el.setAttribute('role','status');el.setAttribute('aria-live','polite');
    el.style.cssText='position:fixed;left:50%;bottom:84px;background:rgba(0,0,0,.82);color:#fff;font-size:13px;padding:9px 16px;border-radius:999px;z-index:99;max-width:80vw;text-align:center';
    document.body.appendChild(el);
  }
  el.textContent=msg;
  // 先摘掉 class 并强制重排，保证连着触发两次也能重新播入场动画
  el.classList.remove('show');void el.offsetWidth;el.classList.add('show');
  clearTimeout(el._tm);el._tm=setTimeout(()=>el.classList.remove('show'),1800);
}

// ── search（索引与排序在 guide/js/search.js） ──
/* 旧实现是 `haystack.includes(整串查询)`：实测 recall@1 只有 29%，
   「银行 开户」「手机 套餐」这类多词查询恒为 0 结果，搜「手机」时手机那篇只排第 4
   （前面是入境/在留/银行 —— 正文里顺带提过手机而已）。
   基准：node tools/bench_search.js（35 条真实查询的 recall@1/@3）—— 改搜索前先跑它。
   这里只负责接界面：渲染成「标题(高亮) + 命中上下文 + 分类」。
   译文包到位后 searchRebuild() 重建索引，否则读日文的人搜日文正文搜不到。 */
const SUGGEST=['手机','银行','打工','医院','垃圾分类','地震'];
let runSearch=()=>{};
function searchReady(){return !!(window.GuideSearch&&ARTICLES.length)}
function searchRebuild(){
  if(searchReady())GuideSearch.build(ARTICLES,{nav:window.ARTICLES_I18N||{},body:window.ARTICLES_BODY_I18N||{},langs:['zh','ja','en','ko']});
}
/** 关键词高亮：在原文上逐字扫，避开正则转义问题与 <mark> 套娃 */
function hl(text,q){
  const s=String(text==null?'':text);
  const terms=String(q||'').trim().split(/\s+/).filter(Boolean).map(x=>x.toLowerCase()).sort((a,b)=>b.length-a.length);
  if(!terms.length)return esc(s);
  const low=s.toLowerCase();let out='',i=0;
  while(i<s.length){
    let hit=null;
    for(const term of terms)if(low.startsWith(term,i)){hit=term;break}
    if(hit){out+='<mark>'+esc(s.slice(i,i+hit.length))+'</mark>';i+=hit.length}
    else{out+=esc(s[i]);i++}
  }
  return out;
}
/* ── 使用体验：回到顶部 / 目录联动 / 最近搜索（2026-09-15）─────────

   三处都是实测出来的摩擦点：
     · 学术篇正文 7134px（约 10 屏），从中间想回顶部只能一路划
     · 桌面侧栏目录 14 节，滚动时不指示当前在哪一节；手机横排目录
       高亮的项常常在屏幕外，等于没提示
     · 搜过的词不留存，重复搜索要重打
*/

/** 文章正文的滚动容器：手机是 .sheet-card，桌面 ≥1024px 换成了 #pane-article。
    两个都要监听，不能写死一个。 */
function articleScrollers(){
  const pa=$('pane-article'), sc=document.querySelector('#pane-article .sheet-card');
  return [pa,sc].filter(Boolean);
}
function articleVisible(){
  const pa=$('pane-article');
  return !!pa&&getComputedStyle(pa).display!=='none';
}

/** 回到顶部按钮 + 阅读进度条：滚过一段才出现，避免短文章也顶着个按钮。
    两者共用一个更新器 —— 监听的是同一批滚动容器、同一批滚动事件，
    分成两套只会多一倍监听器，还容易出现「一个有反应一个没有」。 */
function initToTop(){
  const btn=$('btnToTop'); if(!btn)return;
  const scs=articleScrollers();
  const update=()=>{
    const bar=$('readProgress');
    if(!articleVisible()){
      btn.hidden=true;
      if(bar)bar.hidden=true;
      return;
    }
    // 选「真正在滚的容器」。判据用**可滚动高度**而不是 scrollTop ——
    // 用 scrollTop 时，未滚动（全为 0）会回退到列表第一个（手机上是
    // #pane-article，max 只有几十 px），于是进度条在「刚打开还没滚」时
    // 会莫名其妙地隐藏，滚一下又出现。
    let sc=null,bestY=0,bestMax=-1;
    for(const s of scs){
      const m=Math.max(0,(s.scrollHeight||0)-(s.clientHeight||0));
      if(m>bestMax){bestMax=m;sc=s}
      const y=s.scrollTop||0;
      if(y>bestY)bestY=y;
    }
    btn.hidden=bestY<500;
    if(bar){
      // 短于约一屏的文章不显示进度条 —— 那点进度没有信息量
      if(bestMax>80){
        bar.hidden=false;
        const i=bar.firstElementChild;
        if(i)i.style.width=Math.min(100,(bestY/bestMax)*100).toFixed(1)+'%';
      }else bar.hidden=true;
    }
  };
  scs.forEach(s=>s.addEventListener('scroll',update,{passive:true}));
  btn.addEventListener('click',()=>{
    const sc=scs.find(s=>(s.scrollTop||0)>0);
    if(sc&&sc.scrollTo)sc.scrollTo({top:0,behavior:'smooth'});
    else window.scrollTo({top:0,behavior:'smooth'});
  });
  refreshToTop=update;
  update();
}

/** 目录联动：滚到哪一节，目录里对应项高亮；横排时把当前项滑进可视区 */
function initTocSpy(){
  const toc=$('toc'); if(!toc)return;
  const scs=articleScrollers();
  const update=()=>{
    if(!articleVisible())return;
    const tabs=[...toc.querySelectorAll('.toc-tab')];
    if(tabs.length<2)return;
    const sc=scs.find(s=>(s.scrollTop||0)>0)||scs[0];
    const base=sc?sc.getBoundingClientRect().top:0;
    // 当前节 = 最后一个「顶边已经滚过容器顶部（留 80px 余量）」的小节
    let cur=0;
    tabs.forEach((a,i)=>{
      const el=document.getElementById('sec-'+a.dataset.idx);
      if(!el)return;
      if(el.getBoundingClientRect().top-base<=80)cur=i;
    });
    tabs.forEach((a,i)=>a.classList.toggle('on',i===cur));
    if(toc.scrollWidth>toc.clientWidth+4){          // 横排（手机）时保证可见
      const act=tabs[cur]; if(!act)return;
      const tr=toc.getBoundingClientRect(), ar=act.getBoundingClientRect();
      const l=ar.left-tr.left+toc.scrollLeft, w=ar.width, cw=toc.clientWidth, sx=toc.scrollLeft;
      /* 「最小滑动量」而不是居中：居中会把靠左的项往右滑过去（第 0 节被推到
         容器左侧 -142px，等于更看不见了）。偏左就左对齐、偏右就右对齐。
         另外用 behavior:auto 而不是 smooth —— 平滑滚动期间 getBoundingClientRect
         读到的是动画中间态，叠加下一次滚动事件会算出错误目标（实测过冲）。 */
      const PAD=12;
      let target=sx;
      if(l<sx+PAD)target=l-PAD;
      else if(l+w>sx+cw-PAD)target=l+w-cw+PAD;
      if(Math.abs(target-sx)>1){
        target=Math.max(0,Math.min(target,toc.scrollWidth-cw));
        if(toc.scrollTo)toc.scrollTo({left:target,behavior:'auto'});else toc.scrollLeft=target;
      }
    }
  };
  scs.forEach(s=>s.addEventListener('scroll',update,{passive:true}));
  refreshTocSpy=update;
}

/* ── 文末上一篇 / 下一篇 ── */
/** 顺序 = **序章 + 宫格顺序**。
    宫格顺序是用户实际浏览的顺序（照格子一篇篇点），跨分类也走，把 15 篇串成一条线。
    但有两篇**不占宫格格子**：guide-newcomer（新入生特辑）与 guide-firstmonth
    （落地后 30 天总表）—— 它们同属分类 14，而 14 没有格子。
    只按宫格取序，这两篇就成了孤岛：读者读完没有上一篇/下一篇，只能返回宫格。
    它们恰恰是新生最先该读的两篇，所以放在链首当序章（顺序固定，便于复现）。 */
const NAV_HEAD=['guide-newcomer','guide-firstmonth'];
function navOrder(){
  const grid=(typeof CATS!=='undefined'&&CATS?CATS:[]).map(c=>CAT_ART[c.id]).filter(Boolean);
  const inGrid=new Set(grid.map(a=>a._id));
  const head=NAV_HEAD.map(id=>ARTICLES.find(a=>a._id===id)).filter(a=>a&&!inGrid.has(a._id));
  // 兜底：将来若又出现不占格子的文章，追加到末尾，别让它静默变成孤岛
  const rest=ARTICLES.filter(a=>!inGrid.has(a._id)&&!head.some(h=>h._id===a._id));
  return head.concat(grid, rest);
}
function renderArticleNav(art){
  const box=$('articleNav'); if(!box)return;
  const order=navOrder();
  const i=order.findIndex(a=>a&&String(a._id)===String(art._id));
  if(i<0){box.hidden=true;box.innerHTML='';return}
  const prev=i>0?order[i-1]:null, next=i<order.length-1?order[i+1]:null;
  if(!prev&&!next){box.hidden=true;box.innerHTML='';return}
  const cell=(a,cls,label)=>a
    ? '<a class="'+cls+'" href="#article/'+encodeURIComponent(a._id)+'">'
      +'<div class="an-k">'+esc(label)+'</div>'
      +'<div class="an-t">'+esc(I18N.articleField(a,'title'))+'</div></a>'
    : '<span></span>';
  box.innerHTML=cell(prev,'prev',t('prevArticle'))+cell(next,'next',t('nextArticle'));
  box.hidden=false;
  box.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    navigate(a.getAttribute('href').slice(1));
  }));
}

/* ── 添加到主屏幕 ── */
/** 只在浏览器真的抛出 beforeinstallprompt（= 可安装且未安装）时才显示。
    iOS Safari 不抛这个事件 —— 那里就什么都不显示，而不是做 UA 嗅探去猜：
    猜错会在不支持的浏览器上给出无效指引，比不提示更糟。 */
function initInstallBar(){
  const bar=$('installBar'); if(!bar)return;
  const KEY='kyudai-install-dismissed';
  let dismissed=false;
  try{ dismissed=localStorage.getItem(KEY)==='1' }catch(e){}
  let deferred=null;
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();               // 拦下浏览器自带横幅，改用我们自己的
    deferred=e;
    if(dismissed)return;
    $('installTitle').textContent=t('installTitle');
    $('installDesc').textContent=t('installDesc');
    $('installGo').textContent=t('installGo');
    $('installNo').textContent=t('installNo');
    bar.hidden=false;
  });
  $('installNo').addEventListener('click',()=>{
    bar.hidden=true; dismissed=true;
    try{ localStorage.setItem(KEY,'1') }catch(e){}
  });
  $('installGo').addEventListener('click',async()=>{
    bar.hidden=true;
    if(!deferred)return;
    try{ deferred.prompt(); await deferred.userChoice; }catch(e){}
    deferred=null;
  });
  window.addEventListener('appinstalled',()=>{ bar.hidden=true; deferred=null; });
}

/* ── 最近搜索（localStorage）── */
const HIST_KEY='kyudai-search-hist', HIST_MAX=8;
function histLoad(){
  try{const a=JSON.parse(localStorage.getItem(HIST_KEY)||'[]');return Array.isArray(a)?a.filter(x=>typeof x==='string'&&x).slice(0,HIST_MAX):[]}
  catch(e){return[]}
}
function histAdd(q){
  const v=String(q||'').trim(); if(!v)return;
  const a=histLoad().filter(x=>x!==v); a.unshift(v);
  try{localStorage.setItem(HIST_KEY,JSON.stringify(a.slice(0,HIST_MAX)))}catch(e){}
}
function histClear(){ try{localStorage.removeItem(HIST_KEY)}catch(e){} }
/** 聚焦且输入为空时展开；点条目即重搜 */
function renderSearchHist(){
  const box=$('searchHist'), inp=$('searchInput'); if(!box||!inp)return;
  const list=histLoad();
  if(document.activeElement!==inp||inp.value.trim()||!list.length){box.hidden=true;box.innerHTML='';return}
  box.hidden=false;
  box.innerHTML='<div class="search-hist-head"><span>'+esc(t('searchHist'))+'</span>'
    +'<button class="search-hist-clear" type="button">'+esc(t('searchHistClear'))+'</button></div>'
    +'<div class="search-hist-list">'+list.map(x=>
      '<button class="search-hist-chip" type="button" data-q="'+esc(x)+'">'+esc(x)+'</button>').join('')+'</div>';
  const c=box.querySelector('.search-hist-clear');
  if(c)c.addEventListener('click',e=>{e.preventDefault();histClear();renderSearchHist();inp.focus()});
  box.querySelectorAll('.search-hist-chip').forEach(b=>b.addEventListener('click',e=>{
    e.preventDefault(); inp.value=b.dataset.q; runSearch(); inp.focus(); renderSearchHist();
  }));
}

function initSearch(){
  const inp=$('searchInput'),clear=$('searchClear');if(!inp)return;
  function uc(){clear.classList.toggle('show',!!inp.value)}
  function run(){
    const q=inp.value.trim();uc();
    if(!q){renderGrid();return}
    let list,via='';
    if(searchReady()){
      const hits=GuideSearch.query(q,{lang:I18N.getLang(),limit:40});
      via=hits.length?(hits[0].via||''):'';
      list=hits.map(h=>({a:ARTICLES.find(x=>x._id===h.id),snip:h.snip,why:h.why})).filter(x=>x.a);
    }else{                       // search.js 未加载时的兜底，至少别把整页搞崩
      const n=q.toLowerCase();
      list=ARTICLES.filter(a=>((a.title||'')+(a.summary||'')).toLowerCase().includes(n)).map(a=>({a,snip:''}));
    }
    showSearchResults(list,q,via);
  }
  runSearch=run;
  let tm=0;
  inp.addEventListener('input',()=>{uc();clearTimeout(tm);tm=setTimeout(run,140);renderSearchHist()});   // 防抖：别每敲一个字就重排一次
  // 只在「明确的搜索意图」时才记进历史：按回车、或点开了某条结果。
  // 每次防抖都记会把「银」「银行」这种中间状态也存进去，历史就废了。
  // 键盘导航也走这里：↑↓ 选择、Enter 打开选中的那条（没选就只记历史）。
  inp.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      const cards=searchKbd.cards||[];
      if(!cards.length)return;
      e.preventDefault();
      const n=cards.length;
      let i=searchKbd.idx+(e.key==='ArrowDown'?1:-1);
      if(i<-1)i=n-1;
      if(i>=n)i=-1;
      searchKbd.set(i);
      return;
    }
    if(e.key==='Escape'){ const b=$('searchHist'); if(b)b.hidden=true; return; }
    if(e.key==='Enter'){
      const cards=searchKbd.cards||[];
      if(searchKbd.idx>=0&&cards[searchKbd.idx]){
        e.preventDefault();
        cards[searchKbd.idx].click();     // 复用卡片自己的处理（含记历史 + navigate）
        return;
      }
      histAdd(inp.value); renderSearchHist();
    }
  });
  inp.addEventListener('focus',renderSearchHist);
  document.addEventListener('click',e=>{
    if(!e.target.closest||!e.target.closest('#searchWrap')){const b=$('searchHist');if(b)b.hidden=true}
  });
  clear.addEventListener('click',()=>{inp.value='';uc();renderGrid();inp.focus()});
}
function showSearchResults(list,q,via){
  guideView('list');
  // 结果必须落在第一屏：页面可能停在新生专区中段，不滚回顶部就等于看不到结果
  try{window.scrollTo(0,0)}catch(e){}
  $('catListHead').textContent=t('searchLabel')+' — '+q+(list.length?' · '+t('searchCount').replace('%n%',list.length):'');
  $('catBack').textContent=t('backGrid');
  $('catBack').onclick=()=>{$('searchInput').value='';renderGrid()};
  const box=$('catListArticles');
  // 命中来自哪一层要讲清楚：模糊 / 关联的结果若不说来源，用户会以为搜错了
  const note = via==='fuzzy' ? t('searchFuzzy') : (via==='alias' ? t('searchAlias') : '');
  if(!list.length){              // 零结果不能只说「没有」——给可点的关键词，别让用户空手走
    box.innerHTML='<div class="empty">'+esc(t('noResults'))+'</div>'
      +'<div class="sug"><div class="sug-t">'+esc(t('searchHint'))+'</div><div class="sug-k">'
      +SUGGEST.map(k=>'<button class="sug-b" data-q="'+esc(k)+'">'+esc(k)+'</button>').join('')
      +'</div></div>';
    box.querySelectorAll('.sug-b').forEach(b=>b.addEventListener('click',()=>{
      $('searchInput').value=b.dataset.q;runSearch();$('searchInput').focus();
    }));
    return;
  }
  // 高亮要连「实际命中的词」一起标：模糊命中时正文里并没有查询词本身，
  // 只按原查询词标会出现「说命中却一片都不高亮」。
  const hlFor = why => {
    const extra = [].concat(
      ((why && why.near) || []).map(x => x.hit),
      ((why && why.alias) || []).map(x => x.hit));
    return extra.length ? q + ' ' + extra.join(' ') : q;
  };
  box.innerHTML = (note ? '<div class="search-note">'+esc(note)+'</div>' : '')
    + list.map(({a,snip,why})=>{
      const hq = hlFor(why);
      return '<article class="card-lite" data-id="'+esc(a._id)+'">'
        +'<div class="t">'+hl(I18N.articleField(a,'title'),hq)+'</div>'
        +(snip?'<div class="sn">'+hl(snip,hq)+'</div>':'')
        +'<div class="meta"><span class="tag">'+esc(I18N.catName(a.category))+'</span></div>'
        +'</article>';
    }).join('');
  box.querySelectorAll('.card-lite').forEach(el=>el.addEventListener('click',()=>{
    // 点开了某条结果 = 这次搜索有用，值得记进历史（比每次防抖都记干净得多）
    histAdd(q);
    navigate('article/'+encodeURIComponent(el.dataset.id));
  }));
  /* 键盘导航（桌面用）：↑↓ 选、Enter 开。状态放在模块级并每轮重建 ——
     直接在这里 addEventListener('keydown') 会随每次输入累加，越敲越卡。 */
  const cards=[...box.querySelectorAll('.card-lite')];
  const setKbd=i=>{
    searchKbd.idx=i;
    searchKbd.cards=cards;
    cards.forEach((c,j)=>c.classList.toggle('kbd-on',j===i));
    if(i>=0&&cards[i]){ try{ cards[i].scrollIntoView({block:'nearest'}) }catch(e){} }
  };
  searchKbd={idx:-1,cards:cards,set:setKbd};
  setKbd(-1);
}

// ── 村历 ──
let cuState={year:0,month:0,expanded:false,selDate:''};
const BAR_TYPE={admin:'admin',term:'term',break:'rest',holiday:'rest',event:'misc',exam:'misc',user:'user'};
const LANE_STEP=22,LANE_STEP_X=28,BAR_INSET=3;
function typeLabel(ty){const m=t('typeLabels');return m[ty]||ty}
function todayStr(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
/** 条目名的语言选择：zh 界面 zh 主 + ja 副；其余界面 ja（官方名）主 + zh 副 */
/* 村历条目名：主名用当前语言，副名保留日文原名。
   日文不能丢 —— 官网通知、学務システム、掲示板上印的都是日文，
   只给译名的话，用户拿着译名去官网对不上。
   ⚠️ 原来非中文一律「日文为主 + 中文为副」，于是英文和韩文界面下满屏是
   日文加中文 —— 两种文字读者都不认得，正是「切了语言还在显示别的语言」。 */
function nameOf(it){
  const lang=I18N.getLang();
  const zh=it.zh||it.title||'';
  const ja=it.title||'';
  if(lang==='zh')return{name:zh,sub:ja&&ja!==zh?ja:''};
  if(lang==='ja')return{name:ja||zh,sub:''};
  const loc=I18N.cunliName(ja,lang);          // en / ko 译名表，见 i18n.js
  return loc?{name:loc,sub:ja}:{name:ja||zh,sub:''};
}
function initCunli(){
  const td=todayStr(),y=+td.slice(0,4),m=+td.slice(5,7);
  cuState.year=y;cuState.month=m;cuState.today=td;
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
    // 导出 .ics 校历：用当前语言的标题，Blob 下载
    const btnIcs=$('btnExportIcs');
    if(btnIcs&&window.CunliExport){
      btnIcs.style.display='';
      btnIcs.addEventListener('click',()=>{
        try{
          const mapped=(CUNLI.items||[]).map(it=>({
            id:it.id, title:nameOf(it).name, date:it.date, end:it.end,
            // 导出也要跟语言走：原来 note/place 直接传原始字段，
            // 英文界面导出的 .ics 里说明和地点还是中文。
            note:I18N.cunliNote?I18N.cunliNote(it,I18N.getLang()):(it.note||''),
            place:I18N.cunliPlace?I18N.cunliPlace(it,I18N.getLang()):it.place
          }));
          const ics=window.CunliExport.buildIcs(mapped);
          const blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});
          const url=URL.createObjectURL(blob);
          const a=document.createElement('a');
          a.href=url; a.download='kyudai-calendar.ics';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(()=>URL.revokeObjectURL(url),1000);
          toast(t('exported'));
        }catch(e){ console.error('[ics]',e); }
      });
    }
    renderCunli();
  }
function slideMonth(dir){
  let y=cuState.year,m=cuState.month+(dir==='l'?-1:1);
  if(m<1){y--;m=12}if(m>12){y++;m=1}
  const key=y+'-'+String(m).padStart(2,'0');
  if(key<(CUNLI.range.from||'2026-01-01').slice(0,7)||key>(CUNLI.range.to||'2027-12-31').slice(0,7))return;
  cuState.year=y;cuState.month=m;cuState.selDate='';renderCunli();
}
function rowHTML(it,dateTxt){
  const n=nameOf(it);
  return `<div class="row" data-id="${esc(it.id)}"><span class="tg tg-${esc(it.type)}">${esc(typeLabel(it.type))}</span><div class="row-main"><span class="row-t">${esc(n.name)}${it.star?'<span class="star">※</span>':''}</span>${n.sub?`<span class="row-ja">${esc(n.sub)}</span>`:''}</div><span class="row-d">${esc(dateTxt)}</span></div>`;
}
function renderCunli(){
  if(!U)return;
  const year=cuState.year,month=cuState.month,today=cuState.today,expanded=cuState.expanded;
  const barItems=window._cu_barItems||[],byId=window._cu_byId||{},holSet=window._cu_holSet||{},items=window._cu_items||[];
  const step=expanded?LANE_STEP_X:LANE_STEP;
  const res=U.monthSegments(barItems,year,month,expanded?0:undefined);
  const min=(CUNLI.range.from||'2026-01-01').slice(0,7),max=(CUNLI.range.to||'2027-12-31').slice(0,7);
  const key=year+'-'+String(month).padStart(2,'0');
  $('mTitleBtn').textContent=t('monthTitle')(year,month);
  $('btnPrev').classList.toggle('off',key<=min);$('btnNext').classList.toggle('off',key>=max);
  $('btnToday').style.display=key!==today.slice(0,7)?'':'none';
  $('btnExpand').textContent=expanded?t('collapse'):t('expand');
  const wgrid=$('wgrid');
  wgrid.innerHTML=res.grid.weeks.map((days,wi)=>{
    const segs=res.weeks[wi].segs;let wMax=-1;segs.forEach(s=>{if(s.lane>wMax)wMax=s.lane});
    const laneH=wMax<0?6:(wMax+1)*step;
    const daysHtml=days.map(d=>{
      const cls=['wd',d.out?'out':'',d.dow===0?'sun':'',d.dow===6?'sat':'',holSet[d.date]?'hol':'',d.date===today?'today':'',d.date===cuState.selDate?'sel':''].filter(Boolean).join(' ');
      return `<div class="${cls}" data-date="${d.date}"><span class="wd-n">${d.d}</span></div>`;
    }).join('');
    const barsHtml=segs.map(s=>{
      const it=byId[s.id],text=(it&&nameOf(it).name)||s.title;
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
  $('runs').innerHTML=runs.map(r=>`<span class="run">🎌 ${esc(U.fmtRange({date:r.start,end:r.end}))}　${esc(t('renkyu')(r.len))}</span>`).join('');
  renderCunliSel();
  const up=U.upcoming(items,today,{within:90,max:3});
  $('upcomingList').innerHTML=up.length
    ?up.map(u=>rowHTML(u.item,u.ongoing?t('ongoing'):U.fmtRange(u.item))).join('')
    :`<div class="empty" style="padding:12px">${esc(t('noUpcoming'))}</div>`;
  $('upcomingList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
  const mc=$('monthCard');
  if(expanded){
    mc.style.display='';const mi=U.monthItems(items,year,month);
    $('monthListTitle').textContent=t('monthN')(mi.length);
    $('monthList').innerHTML=mi.map(it=>rowHTML(it,U.fmtRange(it))).join('');
    $('monthList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
    const pend=U.pendingItems(items);
    $('pendingList').innerHTML=pend.map(it=>{const n=nameOf(it);return `<div class="row" data-id="${esc(it.id)}"><span class="tg" style="background:#fafafa;color:#777;border-color:#eee">${esc(t('pending'))}</span><div class="row-main"><span class="row-t">${esc(n.name)}</span></div><span class="row-d">${esc(t('pendingBox'))}</span></div>`}).join('');
    $('pendingList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
  }else mc.style.display='none';
}
function renderCunliSel(){
  const sc=$('selCard');if(!cuState.selDate){sc.style.display='none';return}
  const list=U.dayItems(window._cu_items||[],cuState.selDate);sc.style.display='';
  const wd=t('wdFull')[U.dow(cuState.selDate)];
  $('selLabel').textContent=t('dayTitle')(+cuState.selDate.slice(5,7),+cuState.selDate.slice(8,10),wd);
  $('selCount').textContent=list.length?t('nItems')(list.length):t('noneOnDay');
  $('selList').innerHTML=list.map(it=>rowHTML(it,U.fmtRange(it))).join('');
  $('selList').querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>openDetail(el.dataset.id)));
}
function openDetail(id){
  const it=(window._cu_items||[]).find(x=>String(x.id)===String(id));if(!it)return;
  const n=nameOf(it),srcMap=CUNLI.sources||{},src=srcMap[it.src]||null;
  const wd=it.date?t('wdFull')[U.dow(it.date)]:'';
  // 说明文字与地点也要跟语言走 —— 原来直接输出 it.note / it.place.zh，
  // 切到英文/韩文时标题变了、说明还是中文。
  const noteTxt=I18N.cunliNote?I18N.cunliNote(it,I18N.getLang()):(it.note||'');
  const placeTxt=I18N.cunliPlace?I18N.cunliPlace(it,I18N.getLang()):(it.place?(it.place.zh+'（'+it.place.ja+'）'):'');
  $('detailBody').innerHTML=`<div style="font-size:16px;font-weight:800">${esc(n.name)}${it.star?'<span class="star">※</span>':''}</div>${n.sub?`<div style="font-size:13px;color:#777;margin-top:2px">${esc(n.sub)}</div>`:''}<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="tg tg-${esc(it.type)}">${esc(typeLabel(it.type))}</span><span style="font-size:12px;color:#666">${it.date?esc(U.fmtRange(it))+' · '+esc(wd):esc(t('pending'))}</span></div>${it.place?`<div style="margin-top:8px;font-size:13px">${esc(t('place'))}：${esc(placeTxt)}</div>`:''}${it.desc?`<div style="margin-top:12px;font-size:14px;line-height:1.7;white-space:pre-wrap">${esc(it.desc)}</div>`:''}${noteTxt?`<div style="margin-top:10px;background:#fff7e6;border:1px solid #ffe7ba;border-radius:8px;padding:8px 10px;font-size:13px;color:#7a4d00">${esc(noteTxt)}</div>`:''}${src?`<div style="margin-top:10px;font-size:12px;color:#888">${esc(t('source'))}：${src.url?`<a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.name)}</a>`:esc(src.name)}</div>`:''}`;
  $('detailMask').style.display='';
}
function closeDetail(){
  const m=$('detailMask');
  if(m.style.display==='none')return;
  // 加 .closing 触发退场动画，播完再真正隐藏。用 animationend 而非固定定时器，
  // 这样在「减少动态效果」下（动画被压到 0.01ms）会立刻收尾，不会空等
  m.classList.add('closing');
  const done=()=>{m.style.display='none';m.classList.remove('closing')};
  const sheet=m.querySelector('.sheet');
  if(!sheet)return done();
  let fired=false;
  const on=()=>{if(fired)return;fired=true;sheet.removeEventListener('animationend',on);done()};
  sheet.addEventListener('animationend',on);
  setTimeout(on,400);   // 动画事件没来（被打断等）时的兜底
}

// ── 院系官网 ──
const CAMPUS_LABEL={
  zh:{ito:'伊都',hosp:'病院',ohashi:'大桥',chikushi:'筑紫'},
  ja:{ito:'伊都',hosp:'病院',ohashi:'大橋',chikushi:'筑紫'},
  en:{ito:'Ito',hosp:'Hospital',ohashi:'Ohashi',chikushi:'Chikushi'},
  ko:{ito:'이토',hosp:'병원',ohashi:'오하시',chikushi:'지쿠시'},
};
/* 学部/学府名。数据只有 ja / zh / en —— 没有 ko。
   原来缺名时退回日文，于是韩文界面下 33 个学部全是日文名。
   改为优先退英文：韩语读者读得懂英文校名，读不懂「システム生命科学府」。 */
function facName(f){const l=I18N.getLang();return f[l]||f.en||f.ja||f.zh}
function facRows(list){
  const cm=CAMPUS_LABEL[I18N.getLang()]||CAMPUS_LABEL.zh;
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
  const loc=t('locale');
  wrap.innerHTML=list.map(it=>{
    // 标题按当前语言实时取（历史里可能存着旧语言的标题）
    const art=ARTICLES.find(a=>String(a._id)===String(it.id));
    const title=art?I18N.articleField(art,'title'):it.title;
    const cat=art?I18N.catName(art.category):(it.categoryName||'');
    return `<article class="card-lite" data-hid="${esc(it.id)}"><div class="t">${esc(title)}</div><div class="meta"><span class="tag">${esc(cat)}</span><span style="font-size:12px;color:#999">${new Date(it.ts).toLocaleString(loc,{hour12:false})}</span></article>`;
  }).join('');
  wrap.querySelectorAll('[data-hid]').forEach(el=>el.addEventListener('click',()=>navigate('article/'+encodeURIComponent(el.dataset.hid))));
}

// ── init ──
function init(){
  initLang();applyI18N();searchRebuild();initSearch();renderGrid();initCunli();renderHistory();
  initToTop();initTocSpy();      // 长文回顶 / 阅读进度 / 目录联动（纯增强，失败不影响主流程）
  initInstallBar();              // 添加到主屏幕（只在浏览器真的支持时出现）
  // 非中文时并行取正文译文包；不 await —— 首屏不该等它
  ensureBodyI18N(()=>{ if(currentHash().startsWith('article/'))onHashChange(); });
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.tab)));
  // 悬浮窗关闭：返回/✕/点击遮罩都回指南首页（hash 离开 article/ 时 setTab 隐藏 pane-article 并解锁滚动）
  $('btnBack').addEventListener('click',()=>navigate('guide'));
  const closeArticle=()=>navigate('guide');
  const ca=$('btnCloseArticle'); if(ca)ca.addEventListener('click',closeArticle);
  const pa=$('pane-article');
  if(pa)pa.addEventListener('click',e=>{ if(e.target===pa)closeArticle(); });

  /* ── 电脑端 / 非触屏可用性（2026-09-02）
     触屏可以随手划，桌面端只有滚轮、滚动条、键盘。
     这三样没有一样可用的话，桌面用户会以为页面坏了。 */

  // ① 滚轮落在遮罩（卡片外黑色区）时，转发给卡片滚动：
  //    桌面用户习惯鼠标在哪都滚；遮罩区域 body 是 overflow:hidden，
  //    事件无处可去 = 用户看到的「滑不动」。整卡滚动 + 遮罩转发双保险。
  if(pa){
      pa.addEventListener('wheel',(e)=>{
        const card=pa.querySelector('.sheet-card');
        if(!card)return;
        // 鼠标已在卡片内 → 浏览器原生滚动，别抢；只有落在遮罩上才转发
        if(card.contains(e.target))return;
        e.preventDefault();
        card.scrollTop += e.deltaY;
      },false);
    }
  // ② TOC 横滚条：桌面滚轮只有垂直轴，把 deltaY 转成 scrollLeft，
  //    否则那一串分类标签在桌面端永远滑不到最右边。
  const tocBox=$('toc');
  if(tocBox){
    tocBox.addEventListener('wheel',(e)=>{
      if(e.deltaY!==0 && tocBox.scrollWidth>tocBox.clientWidth+4){
        e.preventDefault();
        tocBox.scrollLeft += e.deltaY;
      }
    },false);
  }
  // ③ Esc 关闭悬浮窗（键盘用户；触屏无 Esc 自然不影响）
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape' && currentHash().startsWith('article/')){
      closeArticle();
    }
  });

  $('btnClearHistory').addEventListener('click',()=>{hClear();renderHistory();toast(t('cleared'))});
  window.addEventListener('hashchange',onHashChange);
  onHashChange();
}
// Service Worker：让指南断网可读（见 sw.js 头注）。
// file:// 下打开时 navigator.serviceWorker 不存在，注册失败也不该影响页面本身。
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{})});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
