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
  if(raw.startsWith('article/')){showArticle(decodeURIComponent(raw.slice(8)));setTab('guide');return}
  if(raw.startsWith('category/')){showCategory(decodeURIComponent(raw.slice(9)));setTab('guide');return}
  const tab=raw.split('?')[0].split('/')[0]||'guide';
  setTab(tab);
  if(tab==='guide')renderGrid();
  if(tab==='cunli')renderCunli();
  if(tab==='faculty')renderFaculties();
  if(tab==='history')renderHistory();
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
      I18N.setLang(sel.value);applyI18N();HAY.clear();
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
    showArticle 结尾会 scrollTo(0,0)，这里用 rAF 在它之后覆盖。 */
function restoreScroll(y){
  if(typeof y!=='number'||y<=0)return;
  requestAnimationFrame(()=>{ try{ window.scrollTo(0,y); }catch(e){} });
}
function applyI18N(){
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
  $('monthTap').textContent=t('tapDetail');
  // 官网
  $('facultyHead').textContent=t('facHead');
  $('facultySub').textContent=t('facSub');
  $('facUgTitle').textContent=t('facUg');
  $('facGradTitle').textContent=t('facGrad');
  $('facSrc').textContent=t('facSrc');
}

// ── 12 宫格（+ 置顶反诈卡） ──
function renderGrid(){
  applyI18N();
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
  $('catListWrap').style.display='none';
  $('catGridWrap').style.display='';
}

function showCategory(catId){
  const art=CAT_ART[catId];
  if(!art){
    $('catGridWrap').style.display='none';
    $('catListWrap').style.display='';
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
    HAY.clear();                    // 译文到位后搜索索引要重建，否则搜不到译文正文
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
function showArticle(id){
  const art=ARTICLES.find(a=>String(a._id)===String(id));
  if(!art){$('pane-article').style.display='none';renderGrid();return}
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
    window.scrollTo(0,0);
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

// ── search（正文 + 各语言标题/摘要一起进干草堆） ──
/* 搜索索引。
   ⚠️ 原来只取 b.text，于是住在 list 条目、fee_table 表格里的内容整篇搜不到 ——
   实测「脱退一时金」「092-286-9595」都是 0 结果，而这两条恰恰最该被搜到：
   一个过期就真的拿不回钱，一个是就医语言不通时打的号。现在逐字段摊平。
   译文正文只在译文包已经到位时并入（见 ensureBodyI18N）—— 没到位就先只索引中文，
   到位后 HAY.clear() 会让它自然重建，不必为此阻塞搜索。
   缓存的理由：这东西原本每敲一个字都要为 14 篇重建一次约 2.5 万字的字符串。 */
const HAY=new Map();
function searchHay(a){
  const lang=I18N.getLang();
  const key=a._id+'@'+lang+(window.ARTICLES_BODY_I18N?'+tr':'');
  const cached=HAY.get(key);
  if(cached!==undefined)return cached;

  const acc=[a.title||'',a.summary||'',(a.tags||[]).join(' ')];
  const i=window.ARTICLES_I18N&&window.ARTICLES_I18N[a._id];
  if(i){acc.push(...Object.values(i.title||{}),...Object.values(i.summary||{}))}
  const walk=b=>{
    if(b.text)acc.push(b.text);
    (b.items||[]).forEach(it=>['text','title','desc'].forEach(k=>{if(it[k])acc.push(it[k])}));
    (b.headers||[]).forEach(h=>acc.push(h));
    (b.rows||[]).forEach(r=>acc.push(r.join(' ')));
    (b.blocks||[]).forEach(walk);
  };
  (a.blocks||[]).forEach(walk);
  // 当前语言的正文译文：不并进来的话，读日文的人搜日文正文永远是 0 条
  const tm=trMap(a);
  if(tm)for(const id in tm){
    const v=tm[id];
    if(v&&v.text)acc.push(v.text);
    (v&&v.items||[]).forEach(it=>['text','title','desc'].forEach(k=>{if(it[k])acc.push(it[k])}));
    (v&&v.headers||[]).forEach(h=>acc.push(h));
    (v&&v.rows||[]).forEach(r=>acc.push(r.join(' ')));
  }

  const s=acc.join(' ').toLowerCase();
  HAY.set(key,s);
  return s;
}
function initSearch(){
  const inp=$('searchInput'),clear=$('searchClear');if(!inp)return;
  function uc(){clear.classList.toggle('show',!!inp.value)}
  inp.addEventListener('input',()=>{
    const q=inp.value.trim();uc();
    if(q){showSearchResults(ARTICLES.filter(a=>searchHay(a).includes(q.toLowerCase())),q)}
    else renderGrid();
  });
  clear.addEventListener('click',()=>{inp.value='';uc();renderGrid();inp.focus()});
}
function showSearchResults(list,q){
  $('pinnedCards').style.display='none';
  $('catGridWrap').style.display='none';
  $('catListWrap').style.display='';
  $('catListHead').textContent=t('searchLabel')+' — '+q;
  $('catBack').textContent=t('backGrid');
  $('catBack').onclick=()=>{$('searchInput').value='';renderGrid()};
  if(!list.length){$('catListArticles').innerHTML=`<div class="empty">${esc(t('noResults'))}</div>`;return}
  $('catListArticles').innerHTML=list.map(a=>
    `<article class="card-lite" data-id="${esc(a._id)}"><div class="t">${esc(I18N.articleField(a,'title'))}</div><div class="meta"><span class="tag">${esc(I18N.catName(a.category))}</span></div></article>`
  ).join('');
  $('catListArticles').querySelectorAll('.card-lite').forEach(el=>el.addEventListener('click',()=>navigate('article/'+encodeURIComponent(el.dataset.id))));
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
  const res=U.monthSegments(barItems,year,month);
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
  $('detailBody').innerHTML=`<div style="font-size:16px;font-weight:800">${esc(n.name)}${it.star?'<span class="star">※</span>':''}</div>${n.sub?`<div style="font-size:13px;color:#777;margin-top:2px">${esc(n.sub)}</div>`:''}<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="tg tg-${esc(it.type)}">${esc(typeLabel(it.type))}</span><span style="font-size:12px;color:#666">${it.date?esc(U.fmtRange(it))+' · '+esc(wd):esc(t('pending'))}</span></div>${it.place?`<div style="margin-top:8px;font-size:13px">${esc(t('place'))}：${esc(it.place.zh)}（${esc(it.place.ja)}）</div>`:''}${it.desc?`<div style="margin-top:12px;font-size:14px;line-height:1.7;white-space:pre-wrap">${esc(it.desc)}</div>`:''}${it.note?`<div style="margin-top:10px;background:#fff7e6;border:1px solid #ffe7ba;border-radius:8px;padding:8px 10px;font-size:13px;color:#7a4d00">${esc(it.note)}</div>`:''}${src?`<div style="margin-top:10px;font-size:12px;color:#888">${esc(t('source'))}：${src.url?`<a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.name)}</a>`:esc(src.name)}</div>`:''}`;
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
  initLang();applyI18N();initSearch();renderGrid();initCunli();renderHistory();
  // 非中文时并行取正文译文包；不 await —— 首屏不该等它
  ensureBodyI18N(()=>{ if(currentHash().startsWith('article/'))onHashChange(); });
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.tab)));
  $('btnBack').addEventListener('click',()=>renderGrid());
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
