// tour.js — 首次访问的分步引导
//
// 设计前提：**引导是可有可无的东西，而它盖在整个界面上。**
// 所以任何一步出问题都不允许把人困住 —— 宁可少讲一步，也不能让蒙层留在屏幕上。
// 具体做法：
//   · 每一步的锚点在【显示的那一刻】才去找，找不到或不可见就自动跳过这一步；
//   · 后面所有步骤都落空时直接收尾，而不是停在一个指着空气的蒙层上；
//   · 全流程包在 try/catch 里，抛错一律收尾；再挂一个 window.onerror 兜底 ——
//     哪怕是别处的脚本炸了，只要引导还开着就先把蒙层撤掉，让人能继续用；
//   · 出口给足：跳过按钮、Esc、点蒙层空白处前进，三条路任选。
//
// 文案全部来自 i18n.js 的 tour 词典，本文件不写死任何语言的字符串。
(function () {
'use strict';

var KEY = 'kg_tour_v1';          // 看过就不再自动弹；换版本号即可重新对所有人放一次
var I18N = window.GuideI18N;

/* 步骤表。
   el  : 锚点选择器，省略 = 不打光，卡片居中（用于开场白）
   tab : 这一步需要先切到哪个板块；靠点它自己的 tab 按钮实现，
         走 app.js 原本的那条路，不去猜它的内部状态。 */
var STEPS = [
  { k: 'welcome' },
  { k: 'search', el: '#searchWrap' },
  { k: 'pinned', el: '#pinnedCards', tab: 'guide' },
  { k: 'cats',   el: '#catGrid',     tab: 'guide' },
  { k: 'tabs',   el: '.tabbar' },
  { k: 'lang',   el: '#langSwitch' }
];

var alive = false, idx = 0, root = null, spot = null, card = null;
var target = null, ticking = 0, waited = 0;

function t(k) { try { return I18N ? I18N.t(k) : k; } catch (e) { return k; } }
function seen() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
function markSeen() { try { localStorage.setItem(KEY, '1'); } catch (e) {} }

/** 元素是否值得往上打光：存在、没被 display:none、且真的有面积。
    `#pinnedCards` 在搜索结果视图下是隐藏的，这一条正是给它准备的。 */
function usable(el) {
  if (!el) return false;
  var r = el.getBoundingClientRect();
  return r.width > 1 && r.height > 1;
}

function switchTab(name) {
  var btn = document.getElementById('tab' + name.charAt(0).toUpperCase() + name.slice(1));
  if (btn && !btn.classList.contains('on')) btn.click();
}

/* 收尾。可以被重复调用，多调几次也不出事。
   keep=true 表示【不是人主动结束的】—— 量不到视口、别处脚本炸了这一类。
   那种情况不该记成「他看过了」：页面在后台标签页里打开一次，就再也不放引导，
   而他其实一眼都没见到。 */
function end(keep) {
  alive = false;
  try { document.removeEventListener('keydown', onKey, true); } catch (e) {}
  try { window.removeEventListener('resize', reflow); } catch (e) {}
  try { window.removeEventListener('orientationchange', reflow); } catch (e) {}
  try { window.removeEventListener('scroll', reflow, true); } catch (e) {}
  try { window.removeEventListener('error', onCrash); } catch (e) {}
  if (root && root.parentNode) {
    var el = root;
    /* id 先摘掉再播退场动画。
       退场是异步的（animationend / 定时器），这中间如果有人又点了「?」，
       start() 会再建一个 #tour —— 两个同 id 的节点里，getElementById 拿到的是
       正在退场的那个旧节点，它的监听已经全解绑了，于是蒙层盖着、点什么都没反应。
       这正是「卡住」最容易出现的地方，所以摘 id 必须是同步的第一件事。 */
    el.removeAttribute('id');
    el.classList.add('tour-stale');   // 让 build() 认得出这是待清的残骸
    el.classList.add('closing');
    // 用 animationend 收尾，同时留一个定时器兜底 ——
    // 动画被关掉（prefers-reduced-motion）或事件没来时，蒙层照样会被撤掉。
    var kill = function () { if (el.parentNode) el.parentNode.removeChild(el); };
    try { el.addEventListener('animationend', kill, { once: true }); } catch (e) {}
    setTimeout(kill, 400);
  }
  root = spot = card = target = null;
  if (!keep) markSeen();
}

function onCrash() { if (alive) end(true); }   // 别处的脚本炸了，不该算在他头上

function onKey(e) {
  if (!alive) return;
  if (e.key === 'Escape') { e.preventDefault(); end(); }
  else if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); go(1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
}

/* 重排节流。rAF 优先，但一定配一个定时器兜底 ——
   页面在后台标签页里或渲染被节流时 rAF 回调可能迟迟不来，
   只挂 rAF 的话蒙层就会停在一个再也不更新的位置上。谁先到谁执行。 */
function reflow() {
  if (!alive || ticking) return;
  ticking = 1;
  var done = false;
  var once = function () {
    if (done || !alive) return;
    done = true; ticking = 0;
    try { place(); } catch (e) { end(); }
  };
  try { requestAnimationFrame(once); } catch (e) {}
  setTimeout(once, 120);
}

/** 把光圈和卡片摆到位。锚点不存在就退化成「居中卡片、不打光」——
    这是最后一道保险：宁可少一个光圈，也不要因为算不出坐标而崩在半路。 */
function place() {
  if (!root) return;
  var vw = window.innerWidth || document.documentElement.clientWidth || 0;
  var vh = window.innerHeight || document.documentElement.clientHeight || 0;
  /* 量不到视口就先别摆 —— 摆出来的坐标全是 0，蒙层盖着而卡片缩在左上角，
     人只看到一块黑。等一等再试；一直量不到（页面根本没在渲染）就直接收工：
     宁可不讲这一课，也不能拿一个空蒙层挡住整个界面。 */
  if (vw < 1 || vh < 1) {
    if (++waited > 12) { end(true); return; }   // 环境问题，不记成看过
    setTimeout(reflow, 150);
    return;
  }
  waited = 0;
  var cw = card.offsetWidth, ch = card.offsetHeight;

  if (!usable(target)) {
    spot.style.display = 'none';
    card.style.left = Math.round((vw - cw) / 2) + 'px';
    card.style.top = Math.round((vh - ch) / 2) + 'px';
    return;
  }

  var r = target.getBoundingClientRect(), pad = 6;
  spot.style.display = '';
  spot.style.left = Math.round(r.left - pad) + 'px';
  spot.style.top = Math.round(r.top - pad) + 'px';
  spot.style.width = Math.round(r.width + pad * 2) + 'px';
  spot.style.height = Math.round(r.height + pad * 2) + 'px';

  // 上下择空：下面塞得下就放下面，否则放上面，都塞不下就压在中间
  var below = r.bottom + 14, above = r.top - ch - 14, top;
  if (below + ch <= vh - 12) top = below;
  else if (above >= 12) top = above;
  else top = Math.max(12, Math.min((vh - ch) / 2, vh - ch - 12));

  var left = r.left + r.width / 2 - cw / 2;
  left = Math.max(12, Math.min(left, vw - cw - 12));
  card.style.left = Math.round(left) + 'px';
  card.style.top = Math.round(top) + 'px';
}

/** 显示第 i 步。锚点落空就顺延到下一步；全部落空就收尾。 */
function show(i) {
  if (!alive) return;
  for (; i < STEPS.length; i++) {
    var s = STEPS[i];
    if (s.tab) { try { switchTab(s.tab); } catch (e) {} }
    if (!s.el) { target = null; break; }
    var el = null;
    try { el = document.querySelector(s.el); } catch (e) {}
    if (!usable(el)) continue;                     // 这一步讲不成，跳过，不停在这儿
    // 不在视野里就先滚进来。固定定位的元素（底部 tab 栏）不用滚，
    // 滚它反而会把页面带到莫名其妙的位置。
    try {
      var fixed = getComputedStyle(el).position === 'fixed';
      var r = el.getBoundingClientRect();
      if (!fixed && (r.top < 60 || r.bottom > window.innerHeight - 60))
        el.scrollIntoView({ block: 'center' });
    } catch (e) {}
    target = el;
    break;
  }
  if (i >= STEPS.length) { end(); return; }

  idx = i;
  var k = STEPS[i].k, last = i === STEPS.length - 1;
  // 词典这一支是三层（tour.steps.welcome.t），而 t() 只认一层点号，所以直接取值。
  // 回退链和 t() 保持一致：当前语言 → zh → 空串。
  var st = (function () {
    try { return I18N.UI[I18N.getLang()].tour.steps[k] || I18N.UI.zh.tour.steps[k]; }
    catch (e) { try { return I18N.UI.zh.tour.steps[k]; } catch (e2) { return { t: '', d: '' }; } }
  })();
  card.querySelector('.tour-t').textContent = st.t || '';
  card.querySelector('.tour-d').textContent = st.d || '';
  card.querySelector('.tour-step').textContent = (i + 1) + ' / ' + STEPS.length;
  card.querySelector('.tour-prev').style.visibility = i === 0 ? 'hidden' : '';
  card.querySelector('.tour-next').textContent = last ? t('tour.done') : t('tour.next');

  /* 先【同步】摆一次，再用 rAF 补一次。
     不能只靠 rAF：页面在后台标签页里、或渲染被节流时，rAF 回调可能迟迟不来，
     那样卡片就会停在左上角一动不动 —— 蒙层已经盖上了，人却看不到内容在哪，
     这就是最典型的「卡在半路」。读 offsetHeight 本身会强制一次同步排版，
     所以同步这一次量到的高度就是对的；rAF 那一次只是给字体加载完之类的情况补位。 */
  try { place(); } catch (e) { end(); return; }
  requestAnimationFrame(function () { if (alive) { try { place(); } catch (e) { end(); } } });
}

function go(d) {
  if (!alive) return;
  var next = idx + d;
  if (next < 0) return;
  if (next >= STEPS.length) { end(); return; }
  // 往回走时也要能跳过落空的步骤，否则「上一步」会卡在一个讲不成的锚点上
  if (d < 0) {
    for (; next >= 0; next--) {
      var s = STEPS[next];
      if (!s.el) break;
      var el = null; try { el = document.querySelector(s.el); } catch (e) {}
      if (usable(el)) break;
    }
    if (next < 0) return;
  }
  try { show(next); } catch (e) { end(); }
}

function build() {
  // 上一轮没退干净的残骸（页面被 bfcache 恢复、动画事件没来等）一律先清掉，
  // 免得屏幕上叠着两层蒙层
  var stray = document.querySelectorAll('#tour,.tour-stale');
  for (var i = 0; i < stray.length; i++)
    if (stray[i].parentNode) stray[i].parentNode.removeChild(stray[i]);

  root = document.createElement('div');
  root.id = 'tour';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.innerHTML =
    '<div class="tour-spot"></div>' +
    '<div class="tour-card">' +
      '<div class="tour-t"></div>' +
      '<div class="tour-d"></div>' +
      '<div class="tour-bar">' +
        '<span class="tour-step"></span>' +
        '<button type="button" class="tour-skip"></button>' +
        '<button type="button" class="tour-prev"></button>' +
        '<button type="button" class="tour-next"></button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(root);
  spot = root.querySelector('.tour-spot');
  card = root.querySelector('.tour-card');
  card.querySelector('.tour-skip').textContent = t('tour.skip');
  card.querySelector('.tour-prev').textContent = t('tour.prev');

  card.querySelector('.tour-skip').addEventListener('click', function (e) { e.stopPropagation(); end(); });
  card.querySelector('.tour-prev').addEventListener('click', function (e) { e.stopPropagation(); go(-1); });
  card.querySelector('.tour-next').addEventListener('click', function (e) { e.stopPropagation(); go(1); });
  // 点蒙层空白处 = 前进。误触也只是往前一步，永远不会把人卡住。
  root.addEventListener('click', function () { go(1); });
}

function start(force) {
  if (alive) return;
  if (!force && seen()) return;
  try {
    alive = true; waited = 0;
    build();
    document.addEventListener('keydown', onKey, true);
    window.addEventListener('resize', reflow);
    window.addEventListener('orientationchange', reflow);
    window.addEventListener('scroll', reflow, true);
    window.addEventListener('error', onCrash);
    show(0);
  } catch (e) { end(); }
}

/** 自动开场的条件。
    带 #article/ 进来的人是顺着别人转发的链接来看某一篇的 ——
    在他面前先弹一套引导，是把他要看的东西挡住。那种情况下不自动放。 */
function auto() {
  try {
    if (seen()) return;
    if (/^#(article|category)\//.test(location.hash || '')) { markSeen(); return; }
    setTimeout(function () { start(false); }, 450);   // 等首屏渲染完再打光
  } catch (e) {}
}

function wire() {
  var btn = document.getElementById('tourOpen');
  if (btn) {
    btn.setAttribute('aria-label', t('tour.open'));
    btn.title = t('tour.open');
    btn.addEventListener('click', function () { start(true); });   // 手动叫出来时忽略「看过了」
    // 换语言时把这颗按钮的读屏名字也换掉。app.js 的 applyI18N 是模块内私有的，
    // 够不到，所以直接听语言下拉自己的 change。
    var sel = document.getElementById('langSwitch');
    if (sel) sel.addEventListener('change', function () {
      setTimeout(function () { btn.setAttribute('aria-label', t('tour.open')); btn.title = t('tour.open'); }, 0);
    });
  }
  auto();
}

window.GuideTour = { start: start, end: end, seen: seen };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
else wire();
})();
