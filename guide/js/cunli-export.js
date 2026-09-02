// cunli-export.js — 村历导出 .ics（iCalendar）
// 纯函数：给定条目数组 + 标题本地化函数，返回 .ics 字符串。
// 结构：全天事件（VALUE=DATE）；跨日区间以结束日当日为 DTEND；
// 含 note/place 时写入 DESCRIPTION/LOCATION；多语言标题由调用方传入。
(function(){
'use strict';

/* RFC 5545 行折叠：每行 ≤75 字节，续行以空格开头。
   iCalendar 文本按 UTF-8 字节数计，必须处理 CJK。 */
function foldLine(raw){
  const bytes=(s)=>{ try{ return new TextEncoder().encode(s).length; }catch(e){ return s.length; } };
  const out=[];let start=0;
  // 按字节安全地切：先按字符分块再补，这里简化处理——CJK 字符不跨分片即可
  const chars=[...raw];
  let cur='';
  for(const ch of chars){
    if(bytes(cur+ch)>70&&cur){ out.push(cur); cur=ch; }
    else cur+=ch;
  }
  if(cur)out.push(cur);
  return out.map((l,i)=>i===0?l:' '+l).join('\r\n');
}

/* 转义：逗号/分号/反斜杠/换行 */
function esc(s){
  return String(s==null?'':s)
    .replace(/\\/g,'\\\\')
    .replace(/;/g,'\\;')
    .replace(/,/g,'\\,')
    .replace(/\r?\n/g,'\\n');
}

/* 'YYYY-MM-DD' → 'YYYYMMDD' */
function calDate(s){
  const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s||''));
  if(!m)return '';
  return m[1]+m[2]+m[3];
}

function todayYmd(){
  const d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

/* 生成 .ics。items: [{id,title(本地化后),date,end,note,place:{zh|ja}?}]；
   range: {from,to} 用于 PRODID 版本提示；sources 忽略。 */
function buildIcs(items){
  const now=todayYmd();
  const lines=[
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KyudaiGuide H5//CUNLI//ZH_CN',
    'CALSCALE:GREGORIAN',
    'X-WR-CALNAME:'+esc('九大伊都 · 留学指南 校历'),
  ];
  (items||[]).forEach(it=>{
    if(!it||!it.date)return;
    const ds=calDate(it.date);
    if(!ds)return;
    const de=it.end?calDate(it.end):'';
    // 全天事件：区间到 end 当天为止
    const dtend=de||ds;
    const uid='kg-'+it.id+'@kyudaiguide';
    lines.push('BEGIN:VEVENT');
    lines.push('UID:'+uid);
    lines.push('DTSTAMP:'+now.replace(/-/g,'')+'T000000Z');
    lines.push('DTSTART;VALUE=DATE:'+ds);
    if(de)lines.push('DTEND;VALUE=DATE:'+dtend);
    lines.push(foldLine('SUMMARY:'+esc(it.title||it.id)));
    if(it.note)lines.push(foldLine('DESCRIPTION:'+esc(it.note)));
    const place=it.place&&(it.place.zh||it.place.ja);
    if(place)lines.push(foldLine('LOCATION:'+esc(place)));
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n')+'\r\n';
}

window.CunliExport={ buildIcs, calDate, esc };
})();