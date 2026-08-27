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
      html+=`<h2 id="sec-${sec}">${esc(text)}</h2>`;
    }else{
      html+=blockToHTML(b);
    }
  }
  return html;
}

function blockToHTML(b){
  if(!b)return'';
  if(b.type==='subheading')return`<h3>${esc(b.text)}</h3>`;
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
  if(b.text)return`<p>${esc(b.text)}</p>`;
  return'';
}

window.GuideRender={renderBlocks,normalizeBlocks,splitPhone};
})();
