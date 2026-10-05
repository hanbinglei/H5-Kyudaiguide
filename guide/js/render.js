// render.js — blocks 渲染器（移植自 components/article-render，支持语言 + 翻译标题）
(function(){
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

/** 共用强调契约：块.emphasis[fieldPath]，UTF-16 原文区间 [start,end)。
 * 先去掉旧 ** 标记并保留原文位置，再在完整点击目标内部切样式，避免格式吞掉链接。
 * 未知样式、越界区间及切开代理对的下标均忽略；正文从不作为 HTML 执行。 */
function emphasisFor(block, path) {
  const marks = block && block.emphasis && block.emphasis[path];
  return Array.isArray(marks) ? marks : [];
}
/** 可选quote锁定原文片段；后台改字使偏移过期时忽略样式，旧无quote标注仍兼容。 */
function matchesEmphasisQuote(text, mark) {
  return !Object.prototype.hasOwnProperty.call(mark, 'quote') || mark.quote === text.slice(mark.start, mark.end);
}
/** 将原文与结构化强调转换为安全文字片段，tokenize 只识别已有点击元素。 */
function styledInline(raw, marks, tokenize) {
  const text = typeof raw === 'string' ? raw : String(raw == null ? '' : raw);
  const valid = (Array.isArray(marks) ? marks : []).filter(m =>
    m && ['bold', 'italic', 'underline'].includes(m.style) &&
    Number.isInteger(m.start) && Number.isInteger(m.end) &&
    m.start >= 0 && m.end > m.start && m.end <= text.length &&
    !splitsSurrogate(text, m.start) && !splitsSurrogate(text, m.end) && matchesEmphasisQuote(text, m));
  const source = [], legacy = [];
  let visible = '', cursor = 0, match;
  const bold = /\*\*([^*]+?)\*\*/g;
  /** 添加可见字符，同时记录它在原字符串中的位置。 */
  function append(from, end, isBold) {
    for (let i = from; i < end; i++) { visible += text[i]; source.push(i); legacy.push(isBold); }
  }
  while ((match = bold.exec(text))) {
    append(cursor, match.index, false);
    append(match.index + 2, match.index + match[0].length - 2, true);
    cursor = match.index + match[0].length;
  }
  append(cursor, text.length, false);
  let offset = 0;
  return tokenize(visible).flatMap(seg => {
    const shown = seg.visibleText !== undefined ? seg.visibleText :
      seg.type === 'tel' ? seg.number : seg.type === 'ref' ? '见【' + seg.label + '】' :
      seg.type === 'place' ? seg.label : seg.type === 'url' ? seg.url : seg.content || '';
    const from = offset + (seg.displayOffset || 0);
    offset += seg.sourceLength === undefined ? shown.length : seg.sourceLength;
    const parts = [];
    // 按 Unicode 字符走，不能把 emoji 的两个 UTF-16 码元拆成两个 text 节点。
    let at = from;
    for (const ch of shown) {
      const styles = { bold: !!legacy[at], italic: false, underline: false };
      valid.forEach(m => { if (source[at] >= m.start && source[at] < m.end) styles[m.style] = true; });
      const last = parts[parts.length - 1];
      if (last && last.bold === styles.bold && last.italic === styles.italic && last.underline === styles.underline) last.content += ch;
      else parts.push(Object.assign({ content: ch }, styles));
      at += ch.length;
    }
    if (seg.type === 'text' || seg.type === 'bold') {
      return parts.length ? parts.map(p => Object.assign({ type: p.bold ? 'bold' : 'text' }, p)) : [{ type: 'text', content: '' }];
    }
    return [Object.assign({}, seg, { parts })];
  });
}
/** 检查区间边界是否位于 emoji 等 Unicode 代理对中间。 */
function splitsSurrogate(text, index) {
  return index > 0 && index < text.length &&
    /[\uD800-\uDBFF]/.test(text[index - 1]) && /[\uDC00-\uDFFF]/.test(text[index]);
}
/** 把 URL、电话和互引识别为完整点击目标；显示文字按原文位置保留。 */
function tokenizeInline(text){
  const re=/\[([^\]]+)\]\((https?:\/\/[^)]+)\)|https?:\/\/[^\s)）"'，、。；：<>]+|(\+\d{1,3}-\d{1,4}-\d{3,8}|0\d{2,4}-?\d{2,4}-?\d{3,4})|(?:见|参照|See|참조|Consulta|Véase|Ver)\s*【([^】]+)】/gi;
  const out=[];let cursor=0,m;
  while((m=re.exec(text))){
    if(m.index>cursor)out.push({type:'text',content:text.slice(cursor,m.index)});
    if(m[1])out.push({type:'url',url:m[2],visibleText:m[1],sourceLength:m[0].length,displayOffset:1});
    else if(m[3])out.push({type:'tel',number:m[3]});
    else if(m[4])out.push({type:'ref',label:m[4],guide:m[4].split('·')[0].trim(),visibleText:m[0]});
    else out.push({type:'url',url:m[0]});
    cursor=re.lastIndex;
  }
  if(cursor<text.length)out.push({type:'text',content:text.slice(cursor)});
  return out;
}
/** 兼容旧 API 与 **粗体**，新增强调只通过可选的原文区间传入。 */
function splitPhone(text,marks){return styledInline(text,marks,tokenizeInline)}
/** 外链只允许 HTTP(S)，转义 HTML 并不能阻止 javascript: 链接执行。 */
function safeURL(url){return /^https?:\/\/[^\s]+$/i.test(String(url||''))?String(url):''}

/** 样式标签只由白名单生成，所有正文字符先转义。 */
function renderPart(part){
  let html=esc(part.content||'');
  if(part.underline)html='<u class="inline-underline">'+html+'</u>';
  if(part.italic)html='<em class="inline-italic">'+html+'</em>';
  if(part.bold)html='<strong class="bold">'+html+'</strong>';
  return html;
}
/** 完整链接内可以叠加多个样式片段；不拆分链接地址和点击目标。 */
function renderSegments(segs){
  return segs.map(s=>{
    if(s.type==='text'||s.type==='bold')return renderPart({...s,bold:s.bold||s.type==='bold'});
    const body=(s.parts||[{content:s.visibleText!==undefined?s.visibleText:s.type==='tel'?s.number:s.type==='ref'?'见【'+s.label+'】':s.url||s.content||''}]).map(renderPart).join('');
    if(s.type==='tel')return '<a class="tel" href="tel:'+esc(s.number.replace(/-/g,''))+'" data-tel="'+esc(s.number)+'">📞 '+body+'</a>';
    if(s.type==='url'){
      const url=safeURL(s.url);
      return url?'<a class="inline-url" href="'+esc(url)+'" target="_blank" rel="noopener">'+body+'</a>':body;
    }
    if(s.type==='ref')return '<button class="ref" data-guide="'+esc(s.guide)+'" data-label="'+esc(s.label)+'">'+body+'<span class="ref-go" aria-hidden="true">›</span></button>';
    return body;
  }).join('');
}

/** 编号拆分前核对quote，再重新投影下标与quote，保持原段落的编号列表体验。 */
function sliceEmphasis(text,marks,start,end){
  return (Array.isArray(marks)?marks:[]).filter(m=>m&&
    Number.isInteger(m.start)&&Number.isInteger(m.end)&&m.start>=0&&m.end>m.start&&m.end<=text.length&&
    m.start<end&&m.end>start&&!splitsSurrogate(text,m.start)&&!splitsSurrogate(text,m.end)&&matchesEmphasisQuote(text,m))
    .map(m=>{
      const from=Math.max(m.start,start),to=Math.min(m.end,end);
      const projected={start:from-start,end:to-start,style:m.style};
      if(Object.prototype.hasOwnProperty.call(m,'quote'))projected.quote=text.slice(from,to);
      return projected;
    });
}
function splitNumberedList(text,marks){
  const re=/(\d+)\.\s+/g;const matches=[...text.matchAll(re)];
  if(matches.length<2)return null;
  const firstStart=matches[0].index;
  const prefix=firstStart>0?text.slice(0,firstStart).trim():'';
  const items=[];
  for(let i=0;i<matches.length;i++){
    const mm=matches[i];const cs=mm.index+mm[0].length;
    const ce=i+1<matches.length?matches[i+1].index:text.length;
    const raw=text.slice(cs,ce),content=raw.trim(),start=cs+raw.indexOf(content);
    items.push({num:mm[1],text:content,segments:splitPhone(content,sliceEmphasis(text,marks,start,start+content.length))});
  }
  return{prefix,items,prefixMarks:sliceEmphasis(text,marks,text.indexOf(prefix),text.indexOf(prefix)+prefix.length)};
}

function normalizeBlocks(blocks){
  if(!Array.isArray(blocks))return[];
  const out=[];
  for(const b of blocks){
    if(!b||typeof b!=='object'){out.push(b);continue}
    if(['list','checklist','steps','links'].includes(b.type)){
      const items=(b.items||[]).map((raw,i)=>{
        const it=typeof raw==='string'?{text:raw}:raw||{};
        return {...it,num:b.type==='list'?(it.num==null?i+1:it.num):it.num,
          segments:b.type==='links'
            ?styledInline(it.text||it.url||'',emphasisFor(b,'items.'+i+'.text'),text=>[{type:'text',content:text}])
            :splitPhone(it.text||'',emphasisFor(b,'items.'+i+'.text')),
          titleSegments:splitPhone(it.title||'',emphasisFor(b,'items.'+i+'.title')),
          descSegments:splitPhone(it.desc||'',emphasisFor(b,'items.'+i+'.desc'))};
      });
      out.push({...b,items});continue;
    }
    if(b.type==='fee_table'){
      out.push({...b,headerSegments:(b.headers||[]).map((h,i)=>splitPhone(h,emphasisFor(b,'headers.'+i))),
        rowSegments:(b.rows||[]).map((r,i)=>r.map((c,j)=>splitPhone(c,emphasisFor(b,'rows.'+i+'.'+j))))});continue;
    }
    if(b.type==='collapse'){
      out.push({...b,titleSegments:splitPhone(b.title||'展开',emphasisFor(b,'title')),blocks:normalizeBlocks(b.blocks)});continue;
    }
    if(['notice','warning','quote','community'].includes(b.type)){out.push({...b,segments:splitPhone(b.text||'',emphasisFor(b,'text'))});continue}
    if(b.type==='bus_live'){out.push({...b});continue}   // 数据块：结构原样保留
    if(typeof b.text!=='string'){out.push(b);continue}
    if(b.type!=='paragraph'){out.push(b);continue}
    if(b.emphasis&&Object.keys(b.emphasis).length||/\*\*[^*]*https?:\/\/[^*]*\*\*/i.test(b.text)){
      const numbered=splitNumberedList(b.text,emphasisFor(b,'text'));
      if(numbered){
        if(numbered.prefix)out.push({...b,segments:splitPhone(numbered.prefix,numbered.prefixMarks)});
        out.push({...b,type:'list',items:numbered.items});
      }else out.push({...b,segments:splitPhone(b.text,emphasisFor(b,'text'))});
      continue;
    }
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
      if(remaining)out.push({...b,type:'paragraph',segments:splitPhone(remaining)});
      if(links.length)out.push({...b,type:'links',items:links});
    }else{
      const numbered=splitNumberedList(b.text);
      if(numbered){
        if(numbered.prefix)out.push({...b,type:'paragraph',segments:splitPhone(numbered.prefix)});
        out.push({...b,type:'list',items:numbered.items});
      }else{
        out.push({...b,type:'paragraph',segments:splitPhone(b.text)});
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
  if(b.type==='links'){
    const open=window.GuideI18N?window.GuideI18N.t('openLink'):'打开 ›';
    return '<div class="links">'+(b.items||[]).map((it,i)=>{
      const url=safeURL(it.url),label=renderSegments(it.segments||styledInline(it.text||it.url,emphasisFor(b,'items.'+i+'.text'),text=>[{type:'text',content:text}]));
      const content='<span class="txt">'+label+'</span><span class="go">'+esc(open)+'</span>';
      return url?'<a class="link-card" href="'+esc(url)+'" target="_blank" rel="noopener">'+content+'</a>':'<span class="link-card">'+content+'</span>';
    }).join('')+'</div>';
  }
  if(b.type==='checklist')return`<div class="ar-list">${(b.items||[]).map(it=>`<div class="ar-list-item"><span class="ar-list-num">☐</span><span class="ar-list-text">${renderSegments(it.segments||splitPhone(it.text||''))}</span></div>`).join('')}</div>`;
  if(b.type==='list')return`<div class="ar-list">${(b.items||[]).map(it=>`<div class="ar-list-item"><span class="ar-list-num">${esc(it.num||'·')}</span><span class="ar-list-text">${renderSegments(it.segments||splitPhone(it.text||''))}</span></div>`).join('')}</div>`;
  if(b.type==='steps')return`<div class="steps">${(b.items||[]).map((it,i)=>`<div class="step"><div class="step-dot">${i+1}</div><div class="step-body"><div class="step-title">${renderSegments(it.titleSegments||splitPhone(it.title||''))}</div>${it.desc?`<div class="step-desc">${renderSegments(it.descSegments||splitPhone(it.desc))}</div>`:''}</div></div>`).join('')}</div>`;
  if(b.type==='fee_table')return`<div class="table-wrap"><table class="table"><thead><tr>${(b.headerSegments||(b.headers||[]).map(h=>splitPhone(h))).map(s=>`<th>${renderSegments(s)}</th>`).join('')}</tr></thead><tbody>${(b.rowSegments||(b.rows||[]).map(r=>r.map(c=>splitPhone(c)))).map(r=>`<tr>${r.map(s=>`<td>${renderSegments(s)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if(b.type==='collapse')return`<details class="notice" style="background:#fff"><summary style="cursor:pointer;font-weight:700">${renderSegments(b.titleSegments||splitPhone(b.title||'展开'))}</summary><div style="margin-top:8px">${(b.blocks||[]).map(ib=>blockToHTML(ib)).join('')}</div></details>`;
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
  const T=(k,f)=>{try{return window.GuideI18N?window.GuideI18N.t(k):f}catch(e){return f}};
  /* 经验性内容说明：与「有没有外部链接」无关，每篇都出。
     站内大量「通常…」「多为…」是维护者的实地观察、没有官方出处 ——
     与其逐句加限定词，不如在文末统一交代这一类内容的性质。 */
  {
    const exp=document.createElement('p');
    exp.className='exp-note';
    exp.textContent=T('expNote','');
    container.appendChild(exp);
  }
  if(!items.length)return null;               // 一条链接都没有就不出现，不留空壳

  const official=[],other=[];
  for(const it of items){(OFFICIAL_HOST.test(hostOf(it.url))?official:other).push(it);}

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

window.GuideRender={renderBlocks,normalizeBlocks,splitPhone,renderSegments,renderSources};
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
