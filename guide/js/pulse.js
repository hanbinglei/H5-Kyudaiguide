/* pulse.js — 首页状态条（2026-09-15）
 *
 * 四条：今日来访 / 下一件大事 / 福冈天气 / 阅读打卡。
 *
 * 设计前提（务必保持）：
 *   ① 纯静态站没有后端，**做不出真·并发在线人数**。这里显示的是「今日独立访客」，
 *      文案必须写「今日 N 人来过」，不能写「正在阅览 N 人」—— 后者是编造。
 *   ② 四条互相独立，任一条拿不到数据就**单独不显示**，不影响其余；四条全空则整条收起。
 *   ③ 计数服务是第三方（tally.yuki.sh）。它挂了、被墙、或限流，页面必须照常能用 ——
 *      所以全部 fetch 都带超时与 catch，失败只是少一个标签。
 */
(function () {
  'use strict';

  // 与 app.js 的 $ 一致：**按 id 取**。别改成 querySelector ——
  // 那样 $('pulse') 会去找 <pulse> 标签，永远 null，静默失效。
  const $ = (id) => document.getElementById(id);
  const I18N = window.GuideI18N || {};
  const t = (k) => (typeof I18N.t === 'function' ? I18N.t(k) : k);
  /** t() 不支持占位符，这里自己替换 {name} —— 文案仍留在 i18n 表里，翻译校验器才扫得到 */
  const fill = (k, map) => String(t(k)).replace(/\{(\w+)\}/g, (m, p) => (map && map[p] !== undefined ? map[p] : m));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const CUNLI = window.CUNLI_DATA || { items: [] };
  const CU = window.CunliUtils || {};

  /* ── 外部数据源（都免注册、都带 CORS，实测过）──
     tally 按「键」计数，这里用两个键：每天一个（拿今日人数）+ 一个 all（拿累计）。
     用 visitor（独立访客）而不是 visit（访问次数）—— 前者才对应「多少人」。 */
  const TALLY = 'https://tally.yuki.sh/hits/kyudai-guide-h5';
  // 伊都キャンパス（＝九大学研都市駅一带）
  const WX_API = 'https://api.open-meteo.com/v1/forecast?latitude=33.595&longitude=130.2183'
    + '&current=temperature_2m,weather_code&daily=precipitation_probability_max'
    + '&timezone=Asia%2FTokyo&forecast_days=1';
  const READ_KEY = 'kyudai-read';
  const TIMEOUT = 6000;

  /* 天气码（WMO）→ i18n 键。合并同一类，避免为 28 个码写 28 条文案。 */
  const WX_WORD = {
    0: 'wxClear', 1: 'wxMainly', 2: 'wxPartly', 3: 'wxOvercast',
    45: 'wxFog', 48: 'wxFog',
    51: 'wxDrizzle', 53: 'wxDrizzle', 55: 'wxDrizzle', 56: 'wxDrizzle', 57: 'wxDrizzle',
    61: 'wxRain', 63: 'wxRain', 65: 'wxRain', 66: 'wxRain', 67: 'wxRain',
    71: 'wxSnow', 73: 'wxSnow', 75: 'wxSnow', 77: 'wxSnow', 85: 'wxSnow', 86: 'wxSnow',
    80: 'wxShowers', 81: 'wxShowers', 82: 'wxShowers',
    95: 'wxThunder', 96: 'wxThunder', 99: 'wxThunder',
  };

  /** JST 的今天。不取本机时区 —— 用户可能在国内或第三国打开，跨时区会差一天。 */
  function todayJST() {
    return new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
  }

  function withTimeout(url) {
    const ac = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = ac ? setTimeout(() => ac.abort(), TIMEOUT) : null;
    return fetch(url, { cache: 'no-store', signal: ac ? ac.signal : undefined })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .then((j) => { if (timer) clearTimeout(timer); return j; });
  }

  const num = (n) => Number(n).toLocaleString('en-US');

  /* ─────────────── 状态 ─────────────── */
  const st = { visitors: null, event: null, wx: null, read: null };

  function chipEl(icon, text, warn) {
    const el = document.createElement('span');
    el.className = 'pulse-i' + (warn ? ' warn' : '');
    el.innerHTML = '<span class="pi-ic" aria-hidden="true">' + icon + '</span><span>' + esc(text) + '</span>';
    return el;
  }

  /** 按当前状态重建整条。任一条数据缺失就直接不出这个标签（不留空壳）。 */
  function paint() {
    const box = $('pulse');
    if (!box) return;
    const out = [];

    if (st.visitors) {
      out.push(chipEl('👋', fill('pulseVisitors', { today: num(st.visitors.today), total: num(st.visitors.total) })));
    }
    if (st.event) {
      out.push(chipEl('📅', st.event));
    }
    if (st.wx) {
      out.push(chipEl(st.wx.icon, st.wx.text, st.wx.warn));
    }
    if (st.read && st.read.total) {
      out.push(chipEl('📖', fill('pulseRead', { n: st.read.n, total: st.read.total })));
    }

    box.innerHTML = '';
    out.forEach((c) => box.appendChild(c));
    box.hidden = out.length === 0;
  }

  /* ─────────────── ① 今日来访 ─────────────── */
  function loadVisitors() {
    const day = todayJST().replace(/-/g, '');
    return Promise.all([
      withTimeout(TALLY + '/' + day + '.json'),   // 不带 mode=read → 计数 +1
      withTimeout(TALLY + '/all.json'),
    ]).then(([d, a]) => {
      // 两个键都拿不到才放弃；只有一个也能显示半条，但那会误导，所以要求两个都有
      if (!d || !a) return;
      const today = Number(d.visitor), total = Number(a.visitor);
      if (!isFinite(today) || !isFinite(total)) return;
      st.visitors = { today, total };
      paint();
    });
  }

  /* ─────────────── ② 下一件大事 ─────────────── */
  /* 挑法（按优先级，都是「最近的一条」）：
       1. 90 天内的 star（标注为重要的）
       2. 60 天内的非节假日 —— 学校活动 / 手续 / 考试，对读者最可操作
       3. 最近的节假日（至少能告诉人哪天放假）
       4. 兜底：最近的一条
     不直接取「最近一条」的原因：那样常年显示「距离敬老の日还有 6 天」，
     而更有用的「新入留学生オリエンテーション」被压掉。 */
  function pickEvent() {
    const t0 = todayJST();
    const items = (CUNLI.items || [])
      .filter((x) => x && x.date && x.date >= t0)
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
    if (!items.length) return null;
    const within = (x, n) => !CU.diffDays || CU.diffDays(t0, x.date) <= n;
    return items.find((x) => x.star && within(x, 90))
      || items.find((x) => x.type !== 'holiday' && within(x, 60))
      || items.find((x) => x.type === 'holiday')
      || items[0];
  }

  function loadEvent() {
    const it = pickEvent();
    if (!it) return;
    const full = (I18N.cunliName && I18N.cunliName(it.title)) || it.title || '';
    // 括号里的补充说明在标签上太长（「新入留学生サポート（空港シャトルバス）」），去掉
    const short = String(full).replace(/[（(][^）)]*[）)]/g, '').trim() || String(full);
    const n = CU.diffDays ? CU.diffDays(todayJST(), it.date) : 0;
    st.event = n <= 0 ? fill('pulseEventToday', { name: short }) : fill('pulseEvent', { name: short, n });
    paint();
  }

  /* ─────────────── ③ 福冈天气 ─────────────── */
  function loadWeather() {
    return withTimeout(WX_API).then((j) => {
      if (!j || !j.current) return;
      const temp = Math.round(Number(j.current.temperature_2m));
      if (!isFinite(temp)) return;
      const wxk = WX_WORD[Number(j.current.weather_code)];
      const ppArr = (j.daily && j.daily.precipitation_probability_max) || [];
      const pp = Number(ppArr[0]);
      const warn = isFinite(pp) && pp >= 50;
      // 要下雨时**整条换成降雨文案**，不要在当前天况后面追加提示：
      // 当前天况与今日降雨概率讲的不是同一件事（实测出现过「☔ 大致晴 带伞 84%」——
      // 图标、文案、提示三者互相打架）。外出只看一件事：会不会下。
      const text = warn
        ? fill('pulseWxRain', { temp, p: pp })
        : fill('pulseWx', { temp, wx: wxk ? t(wxk) : '' }).trim();
      st.wx = { text, warn, icon: warn ? '☔' : '🌤' };
      paint();
    });
  }

  /* ─────────────── ④ 阅读打卡 ─────────────── */
  function readList() {
    try {
      const a = JSON.parse(localStorage.getItem(READ_KEY) || '[]');
      return Array.isArray(a) ? a : [];
    } catch (e) { return []; }
  }

  function loadRead() {
    const total = (window.ARTICLES || []).length;
    if (!total) return;
    const seen = readList().filter((id) => (window.ARTICLES || []).some((a) => a._id === id));
    st.read = { n: seen.length, total };
    paint();
  }

  /** 从 hash 里认「打开了哪一篇」，不需要改 app.js 的 showArticle。
      只记 id，不记时间、不记次数 —— 这里不是埋点，是给读者自己的打卡。 */
  function trackRead() {
    const m = /^#article\/(.+)$/.exec(location.hash || '');
    if (!m) return false;
    const id = decodeURIComponent(m[1]);
    const list = readList();
    if (list.indexOf(id) >= 0) return false;
    list.push(id);
    try { localStorage.setItem(READ_KEY, JSON.stringify(list)); } catch (e) { /* 无痕模式等 */ }
    return true;
  }

  /* ─────────────── 启动 ─────────────── */
  function init() {
    if (!$('pulse')) return;
    // 先按「什么都还没拿到」画一次：这样「收起」是脚本自己定的状态，
    // 而不是碰运气依赖标签上的初始 hidden 属性（万一以后谁把那属性删了就漏出来一个空壳）
    paint();
    trackRead();
    loadRead();
    loadEvent();
    loadVisitors();
    loadWeather();
    window.addEventListener('hashchange', () => {
      if (trackRead()) loadRead();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // 切语言时由 app.js 的 applyI18N() 调用，重算所有文案
  window.Pulse = { render: paint, refresh: () => { loadEvent(); loadRead(); paint(); } };
})();
