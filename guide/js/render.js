// render.js — blocks 渲染器（移植自 components/article-render，支持语言 + 翻译标题）
(function(){
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

function splitPhone(text){
  if(typeof text!=='string')return[{type:'text',content:text||''}];
  // REF 必须带引导词才算交叉引用 —— 正文里也有 学研災【不含疾病】 这类纯强调用法，
  // 只认裸【】会把它误判成链接。引导词按语言给全，译本用各自语言写即可。
  const URLRE=/(https?:\/\/[^\s)）"'，、]+)/g;
  const TEL=/(0\d{2,4}-?\d{2,4}-?\d{3,4})/g,BOLD=/\*\*([^*]+?)\*\*/g,REF=/(?:见|参照|See|참조)\s*【([^】]+)】/g;
  const marks=[];let m;
  TEL.lastIndex=0;while((m=TEL.exec(text))!==null)marks.push({at:m.index,len:m[0].length,seg:{type:'tel',number:m[1]}});
  BOLD.lastIndex=0;while((m=BOLD.exec(text))!==null)marks.push({at:m.index,len:m[0].length,seg:{type:'bold',content:m[1]}});
  REF.lastIndex=0;while((m=REF.exec(text))!==null){const l=m[1];marks.push({at:m.index,len:m[0].length,seg:{type:'ref',label:l,guide:l.split('·')[0].trim()}})}
  // 正文里直接写出的 URL 也应可点。此前只有 links 区块可点，写在 notice/warning
  // 正文里的官方页面地址是纯文本 —— 读者看得见却点不动。
  URLRE.lastIndex=0;while((m=URLRE.exec(text))!==null)marks.push({at:m.index,len:m[0].length,seg:{type:'url',url:m[1]}});
  if(!marks.length)return[{type:'text',content:text}];
  marks.sort((a,b)=>a.at-b.at);const segs=[];let last=0;
  for(const k of marks){if(k.at<last)continue;if(k.at>last)segs.push({type:'text',content:text.slice(last,k.at)});segs.push(k.seg);last=k.at+k.len}
  if(last<text.length)segs.push({type:'text',content:text.slice(last)});
  if(!segs.length)segs.push({type:'text',content:text});
  return segs;
}

function renderSegments(segs){
  return segs.map(s=>{
    if(s.type==='text')return esc(s.content);
    if(s.type==='bold')return`<strong class="bold">${esc(s.content)}</strong>`;
    // 电话用真链接：手机上点了由系统弹确认框再拨号（应急篇里这一点很要紧），
    // 桌面端没有拨号能力，由 app.js 拦下改为复制到剪贴板。
    if(s.type==='tel')return`<a class="tel" href="tel:${esc(s.number.replace(/-/g,''))}" data-tel="${esc(s.number)}">📞 ${esc(s.number)}</a>`;
    if(s.type==='url')return`<a class="inline-url" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url)}</a>`;
    // ›单独成 span：它是装饰，不是名字的一部分 —— 分开才能把它调淡，
    // 而 aria-label 里也不该念出来。
    if(s.type==='ref'){const see=window.GuideI18N?window.GuideI18N.t('seeRef'):'见';const name=`${see}【${s.label}】`;return`<button class="ref" data-guide="${esc(s.guide)}" data-label="${esc(s.label)}" aria-label="${esc(name)}">${esc(name)}<span class="ref-go" aria-hidden="true">›</span></button>`;}
    return esc(s.content||'');
  }).join('');
}

function splitNumberedList(text){
  const re=/(\d+)\.\s+/g;const matches=[...text.matchAll(re)];
  if(matches.length<2)return null;
  const firstStart=matches[0].index;
  const prefix=firstStart>0?text.slice(0,firstStart).trim():'';
  const items=[];
  for(let i=0;i<matches.length;i++){
    const mm=matches[i];const cs=mm.index+mm[0].length;
    const ce=i+1<matches.length?matches[i+1].index:text.length;
    items.push({num:mm[1],text:text.slice(cs,ce).trim(),segments:splitPhone(text.slice(cs,ce).trim())});
  }
  return{prefix,items};
}

function normalizeBlocks(blocks){
  if(!Array.isArray(blocks))return[];
  const out=[];
  for(const b of blocks){
    if(!b||typeof b!=='object'){out.push(b);continue}
    if(b.type==='list'){out.push({type:'list',items:(b.items||[]).map(it=>({num:it.num,text:it.text,segments:splitPhone(String(it.text||''))}))});continue}
    if(['notice','warning','quote','community'].includes(b.type)){out.push({...b,segments:splitPhone(b.text||'')});continue}
    if(b.type==='bus_live'){out.push({...b});continue}   // 数据块：结构原样保留
    if(typeof b.text!=='string'){out.push(b);continue}
    if(b.type!=='paragraph'){out.push(b);continue}
    const mdLinkRe=/\[([^\]]+)\]\(([^)]+)\)/g;
    let m,lastIdx=0,hasMd=false;const segs=[];
    while((m=mdLinkRe.exec(b.text))!==null){
      hasMd=true;if(m.index>lastIdx)segs.push({type:'text',content:b.text.slice(lastIdx,m.index)});
      segs.push({type:'link',text:m[1],url:m[2]});lastIdx=mdLinkRe.lastIndex;
    }
    if(hasMd){
      if(lastIdx<b.text.length)segs.push({type:'text',content:b.text.slice(lastIdx)});
      const remaining=segs.filter(s=>s.type==='text').map(s=>s.content).join('').trim();
      const links=segs.filter(s=>s.type==='link').map(s=>({text:s.text,url:s.url}));
      if(remaining)out.push({type:'paragraph',segments:splitPhone(remaining)});
      if(links.length)out.push({type:'links',items:links});
    }else{
      const numbered=splitNumberedList(b.text);
      if(numbered){
        if(numbered.prefix)out.push({type:'paragraph',segments:splitPhone(numbered.prefix)});
        out.push({type:'list',items:numbered.items});
      }else{
        out.push({type:'paragraph',segments:splitPhone(b.text)});
      }
    }
  }
  return out;
}

/**
 * renderBlocks(blocks, translatedHeadings)
 * @param {Array} blocks - 文章 blocks 数组
 * @param {Array|null} translatedHeadings - 翻译后的标题数组（按 index），null=用原文
 */
function renderBlocks(blocks,translatedHeadings){
  const norm=normalizeBlocks(blocks);
  let sec=-1;
  let html='';
  for(const b of norm){
    if(b.type==='heading'){
      sec++;
      const text=(translatedHeadings&&translatedHeadings[sec]!==undefined)?translatedHeadings[sec]:b.text;
      html+=`<h2 id="sec-${sec}" data-blk="${esc(b.id||'')}">${esc(text)}</h2>`;
    }else{
      html+=blockToHTML(b);
    }
  }
  return html;
}

function blockToHTML(b){
  if(!b)return'';
  // subheading 也给 data-blk：校验器（check_newcomer_zone）把 heading/subheading 都当成
  // 可深链目标，只给 h2 加就会「校验绿、实际点不到」
  if(b.type==='subheading')return`<h3 data-blk="${esc(b.id||'')}">${esc(b.text)}</h3>`;
  if(b.type==='paragraph')return`<p>${renderSegments(b.segments||splitPhone(b.text||''))}</p>`;
  if(b.type==='quote')return`<div class="quote">${renderSegments(b.segments||splitPhone(b.text||''))}</div>`;
  if(b.type==='notice')return`<div class="notice">📝 ${renderSegments(b.segments||splitPhone(b.text||''))}</div>`;
  if(b.type==='warning')return`<div class="warning">⚠️ ${renderSegments(b.segments||splitPhone(b.text||''))}</div>`;
  if(b.type==='community')return`<div class="notice">💬 ${renderSegments(b.segments||splitPhone(b.text||''))}</div>`;
  if(b.type==='links'){const open=window.GuideI18N?window.GuideI18N.t('openLink'):'打开 ›';return`<div class="links">${(b.items||[]).map(it=>`<a class="link-card" href="${esc(it.url)}" target="_blank" rel="noopener"><span class="txt">${esc(it.text||it.url)}</span><span class="go">${esc(open)}</span></a>`).join('')}</div>`;}
  if(b.type==='checklist')return`<div class="ar-list">${(b.items||[]).map(it=>`<div class="ar-list-item"><span class="ar-list-num">☐</span><span class="ar-list-text">${renderSegments(it.segments||splitPhone(it.text||''))}</span></div>`).join('')}</div>`;
  if(b.type==='list')return`<div class="ar-list">${(b.items||[]).map(it=>`<div class="ar-list-item"><span class="ar-list-num">${esc(it.num||'·')}</span><span class="ar-list-text">${renderSegments(it.segments||splitPhone(it.text||''))}</span></div>`).join('')}</div>`;
  if(b.type==='steps')return`<div class="steps">${(b.items||[]).map((it,i)=>`<div class="step"><div class="step-dot">${i+1}</div><div class="step-body"><div class="step-title">${esc(it.title||'')}</div>${it.desc?`<div class="step-desc">${esc(it.desc)}</div>`:''}</div></div>`).join('')}</div>`;
  if(b.type==='fee_table')return`<div class="table-wrap"><table class="table"><thead><tr>${(b.headers||[]).map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${(b.rows||[]).map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if(b.type==='collapse')return`<details class="notice" style="background:#fff"><summary style="cursor:pointer;font-weight:700">${esc(b.title||'展开')}</summary><div style="margin-top:8px">${(b.blocks||[]).map(ib=>blockToHTML(ib)).join('')}</div></details>`;
  if(b.type==='image'){
    const cap = b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : '';
    return `<figure class="ar-figure" data-blk="${esc(b.id||'')}">`
      + `<img src="${esc(b.src)}" alt="${esc(b.alt||'')}" loading="lazy" decoding="async">`
      + cap + `</figure>`;
  }
    // bus_live —— 渲染为骨架容器，数据存 dataset.schedule，由 bus-live.js 填充实时表格
    if(b.type==='bus_live'){
      const data=JSON.stringify(b);
      return`<div class="bus-live" data-schedule="${esc(data)}"><div class="bus-live-loading">…</div></div>`;
    }
    if(b.text)return`<p>${esc(b.text)}</p>`;
  return'';
}

/* ── 文末「参考链接与出处」─────────────────────────────────────
   把正文里出现过的外部链接汇总一遍，放在文章最后。

   为什么从**渲染后的 DOM** 抓、而不是从 blocks 数据抓：
     ① 锚文本已经是当前语言的（正文里翻译过，这里直接复用，不必再翻一遍）
     ② 正文里手写的裸 URL 也被 renderSegments 转成了 <a>，一并覆盖
     ③ 不用维护第二份数据，正文改了这里自动跟上，不存在漂移

   分组：官方 / 公共机构（政府、学校、公共法人）与其他链接分开。
   前者是「这条信息从哪来」，后者多是地图、比价、预约这类工具链接 ——
   混在一起会冲淡前者的可信感。 */
const OFFICIAL_HOST = /\.(go\.jp|lg\.jp|ac\.jp|or\.jp|ed\.jp|gov\.cn|go\.kr|ac\.kr)$/i;

// 取主机名用纯正则，不用 new URL()。
// 两个理由：① 某些宿主环境（如 Node 的 vm 沙箱）没有 URL 这个 Web API，
// 一旦取不到就会被 try/catch 吞掉、静默把官方链接判成「其他」——
// 分组悄悄失效比直接报错更难发现；② 这里只需要 host，正则足够且无异常路径。
function hostOf(url){
  const m=/^https?:\/\/([^\/?#]+)/i.exec(String(url||''));
  return m?m[1].replace(/^www\./,'').toLowerCase():'';
}

function renderSources(container){
  if(!container||!container.querySelectorAll)return null;
  const seen=new Map();                       // 保序去重：同一 URL 只出现一次
  for(const a of container.querySelectorAll('a[href]')){
    const href=a.getAttribute('href')||'';
    // 只收外部 http(s)。tel:、#sec-N（目录锚点）、以及页内互引都排除
    if(!/^https?:\/\//i.test(href))continue;
    if(seen.has(href))continue;
    let label=(a.textContent||'').trim();
    // links 块的链接卡里除了标题还有个「打开 ›」按钮 span，直接取 textContent
    // 会把按钮文案拼进标签（「九大 certificate… 打开 ›」）。有 .txt 就只取它。
    const tSpan=a.querySelector?a.querySelector('.txt'):null;
    if(tSpan&&tSpan.textContent)label=tSpan.textContent.trim();
    // 正文里手写的裸 URL，锚文本就是 URL 本身 —— 那样带着协议头又长又难扫，
    // 去掉 https:// 与结尾斜杠，和下一行的域名信息合并显示
    if(!label||/^https?:\/\//i.test(label))label=href.replace(/^https?:\/\//i,'').replace(/\/$/,'');
    seen.set(href,{url:href,label:label});
  }
  const items=[...seen.values()];
  if(!items.length)return null;               // 一条链接都没有就不出现，不留空壳

  const official=[],other=[];
  for(const it of items){(OFFICIAL_HOST.test(hostOf(it.url))?official:other).push(it);}

  const T=(k,f)=>{try{return window.GuideI18N?window.GuideI18N.t(k):f}catch(e){return f}};
  const row=it=>{
    const shown=it.url.replace(/^https?:\/\//i,'').replace(/\/$/,'');
    const sub=(it.label===shown)?'':`<span class="src-u">${esc(shown)}</span>`;
    return `<a class="src-row" href="${esc(it.url)}" target="_blank" rel="noopener">`
      +`<span class="src-t">${esc(it.label)}</span>${sub}</a>`;
  };
  const group=(title,list)=>list.length
    ?`<h3 class="src-sub">${esc(title)}<span class="src-n">${list.length}</span></h3><div class="src-list">${list.map(row).join('')}</div>`
    :'';

  const sec=document.createElement('details');
  sec.id='articleSources';
  sec.className='src-box';
  // 默认折叠：guide-academic 一篇就有 19 条，全部铺开会把文末堆成一大片，
  // 反而稀释正文。折叠后标题行给条数，想看的人一点即开，不想看的不受干扰。
  sec.innerHTML=`<summary class="src-sum"><span class="src-h">${esc(T('sourcesTitle','参考链接与出处'))}</span>`
    +`<span class="src-n">${items.length}</span></summary>`
    +`<p class="src-lead">${esc(T('sourcesLead','本文正文提到的原始链接汇总如下，可直接点开核对原文。'))}</p>`
    +group(T('sourcesOfficial','官方·公共机构'),official)
    +group(T('sourcesOther','其他链接'),other);
  container.appendChild(sec);
  return sec;
}

window.GuideRender={renderBlocks,normalizeBlocks,splitPhone,renderSources};
})();


/* ── 图片点开放大 ──
   指南里的照片是标志牌，本来就该能看清字。点开显示原始 webp，Esc 或点空白关闭。
   用事件委托 + 单例守卫，切文章/切语言重建 DOM 也不会重复挂载。 */
(function(){
  if(typeof document === 'undefined') return;   // node 测试环境无 DOM
if(window.__kyudaiLightbox) return;
  window.__kyudaiLightbox = true;
  function close(){
    const el = document.getElementById('arLightbox');
    if(el){ el.remove(); document.body.style.overflow=''; }
  }
  document.addEventListener('click', function(e){
    const img = e.target && e.target.closest && e.target.closest('.ar-figure img');
    if(img){
      const el = document.createElement('div');
      el.id = 'arLightbox';
      el.innerHTML = '<img alt="">';
      el.querySelector('img').src = img.currentSrc || img.src;
      el.addEventListener('click', close);
      document.body.appendChild(el);
      document.body.style.overflow = 'hidden';
      return;
    }
    if(e.target && e.target.id === 'arLightbox') close();
  }, false);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();
