// bus-live.js — 生活支援巴士「下一班」实时模块
// 挂在 render.js 渲染出的 .bus-live 容器上；数据来自 content 的 bus_live block。
// 每 30 秒刷新倒计时；运行日外显示「今日不运行」。
(function(){
'use strict';
const MIN = 60 * 1000;

/* 时间 "HH:MM" → 当日分钟数 */
function toMin(t){ const [h,m]=t.split(':').map(Number); return h*60+m; }

/* 当前时间（分钟数）→ 下一个班次；返回 {min, hm, diffMin} 或 null（今日已过） */
function nextRun(times, nowMin){
  let best=null;
  for(const t of times){
    const m=toMin(t);
    if(m<nowMin) continue;            // 已过
    if(!best || m<best.min) best={min:m, hm:t};
  }
  return best;
}

function isRunDay(days){
  const d=new Date();
  return (days||[]).some(([mo,da])=>d.getMonth()+1===mo && d.getDate()===da);
}

/* 站名显示：优先用 UI 词典（按 labelKey），核心文案也一样 */
function txt(key){
  try{ const I=window.GuideI18N; return I?I.t(key):''; }catch(e){ return ''; }
}

function renderTable(root, block){
  const days=block.days||[];
  const d=new Date();
  const nowMin=d.getHours()*60+d.getMinutes();
  const running=isRunDay(days);
  const dirs=block.stops||[];
  const dirLabel=dir=>txt(dir.labelKey||'');

  let html='<div class="bus-live-meta">';
  html += running
    ? `<span class="bus-live-dot on"></span>${esc(txt('busRunning'))}`
    : `<span class="bus-live-dot"></span>${esc(txt('busNotRunning'))}&nbsp;·&nbsp;${esc(txt('busRunDays'))} ${days.map(([m,da])=>m+'/'+da).join('、')}`;
  html += '</div>';

  html += '<table class="table bus-live-table"><thead><tr>';
  html += `<th>${esc(txt('busStop'))}</th>`;
  for(const dir of dirs) html += `<th>${esc(dirLabel(dir))}</th>`;
  html += '</tr></thead><tbody>';

  /* 以「去程（往车站）」的站序为基准行；回程同站名对齐 */
  const rowsKey=[];
  const firstDir=dirs[0];
  (firstDir?firstDir.times:[]).forEach(st=>rowsKey.push(st.stop));
  // 其他方向若出现新站（如回程始发站）也补进行
  dirs.slice(1).forEach(dir=>(dir.times||[]).forEach(st=>{ if(!rowsKey.includes(st.stop)) rowsKey.push(st.stop); }));

  const today=new Date();
  const isToday=d=>today.getMonth()+1===d[0]&&today.getDate()===d[1];

  for(const stop of rowsKey){
    html += `<tr><td class="bus-live-stop">${esc(txt(stop))}</td>`;
    for(const dir of dirs){
      const st=(dir.times||[]).find(x=>x.stop===stop);
      const times=st?st.t:[];
      if(!running || !times.length){
        html += `<td class="bus-live-cell muted">${esc(running?txt('busNoData'):'—')}</td>`;
        continue;
      }
      const next=nextRun(times, nowMin);
      if(!next){
        html += `<td class="bus-live-cell muted">${esc(txt('busLastBusGone'))}</td>`;
        continue;
      }
      const diff=next.min-nowMin;
      const diffTxt=diff<=0?'—':(diff<60?`${diff} min`:`${Math.floor(diff/60)}h${diff%60?String(diff%60).padStart(2,'0'):''}`);
      const urgent=diff<=15;
      html += `<td class="bus-live-cell"><span class="bus-live-time">${esc(next.hm)}</span>`;
      html += ` <span class="bus-live-diff${urgent?' urgent':''}">${esc(diffTxt)}</span></td>`;
    }
    html += '</tr>';
  }
  html += '</tbody></table>';
  html += `<div class="bus-live-note">${esc(txt('busNote'))}</div>`;

  root.innerHTML=html;
}

function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

/* 启动：渲染一次 + 每 30s 刷新 */
function init(root){
  if(!root || root.dataset.busDone) return;
  root.dataset.busDone='1';
  let block=null;
  try{ block=JSON.parse(root.dataset.schedule||'null'); }catch(e){ block=null; }
  if(!block) return;
  renderTable(root, block);
  setInterval(function(){ renderTable(root, block); }, 30000);
}

/* 等页面语言切换完成后由 app.js 调 refresh：重建全部容器 */
function refreshAll(){
  document.querySelectorAll('.bus-live').forEach(function(el){
    el.dataset.busDone='';
    el.innerHTML='';
    init(el);
  });
}

window.GuideBusLive={ init, refreshAll, renderTable };
})();