#!/usr/bin/env node
/**
 * test_pulse.js — 首页状态条的离线仿真测试
 *
 * 为什么要有：状态条依赖两个第三方接口（tally 计数、Open-Meteo 天气），
 * 拿浏览器去测就得等网络、还得看对方脸色；更需要测的其实是**降级行为**
 * （某个接口挂了会怎样），那个用真实网络反而不好构造。
 *
 * 做法：给 pulse.js 造一个假 DOM + 假 fetch + 假 localStorage，在 vm 里跑，
 * 然后断言渲染出来的四条标签。
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

/* ── 假 DOM ── */
function el(tag) {
  const e = {
    tagName: tag, children: [], innerHTML: '', hidden: false, className: '', _text: '',
    appendChild(c) { this.children.push(c); return c; },
    classList: { add() {}, remove() {}, contains(c) { return String(e.className).includes(c); } },
    get textContent() { return this._text || (this.children || []).map((c) => c.textContent).join(''); },
    set textContent(v) { this._text = v; },
  };
  return e;
}
// 真实 HTML 是 <div id="pulse" class="pulse" hidden> —— 假元素也要从 hidden 起步，
// 否则测不出「一条数据都没有时保持收起」这个行为
const nodes = { pulse: el('div') };
nodes.pulse.hidden = true;
// innerHTML 赋值要能反推出纯文本，否则断言不到内容
Object.defineProperty(nodes.pulse, 'innerHTML', {
  get() { return ''; },
  set(v) { if (v === '') { this.children.length = 0; this._text = ''; } },
});

function makeSandbox(opts) {
  opts = opts || {};
  const doc = {
    readyState: 'complete',
    querySelector: (s) => (s === '#pulse' ? nodes.pulse : null),
    getElementById: (id) => (id === 'pulse' ? nodes.pulse : null),
    createElement: (t) => {
      const e = el(t);
      Object.defineProperty(e, 'innerHTML', {
        get() { return ''; },
        set(v) { e._text = String(v).replace(/<[^>]*>/g, ''); },
      });
      return e;
    },
    addEventListener(t, fn) { if (t === 'hashchange') sb.__hashCb = fn; },
  };
  const store = Object.assign({}, opts.store || {});
  const sb = {
    window: {}, document: doc, console,
    location: { hash: opts.hash || '' },
    localStorage: {
      getItem: (k) => (k in store ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: (k) => { delete store[k]; },
    },
    fetch: (url) => {
      if (String(url).indexOf('tally') >= 0) {
        if (opts.tally === 'fail') return Promise.resolve({ ok: false });
        const day = String(url).indexOf('/all.json') >= 0;
        return Promise.resolve({ ok: true, json: () => Promise.resolve(day ? opts.total : opts.today) });
      }
      if (String(url).indexOf('open-meteo') >= 0) {
        if (opts.wx === 'fail') return Promise.reject(new Error('offline'));
        return Promise.resolve({ ok: true, json: () => Promise.resolve(opts.wxData) });
      }
      return Promise.resolve({ ok: false });
    },
    AbortController: global.AbortController,
    setTimeout, clearTimeout, Promise,
    // pulse.js 用 window.addEventListener 挂 hashchange
    addEventListener(t, fn) { if (t === 'hashchange') sb.__hashCb = fn; },
  };
  sb.window = sb;
  sb.__store = store;
  return sb;
}

function boot(opts) {
  const sb = makeSandbox(opts);
  const ctx = vm.createContext(sb);
  // 依赖：i18n / 村历数据 / 村历工具 / 文章表
  ctx.window = ctx;
  for (const f of ['i18n.js', 'cunli-utils.js', 'data-cunli.js', 'data-articles.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8'), ctx, { filename: f });
  }
  // 语言必须显式锁住 —— i18n 默认跟随浏览器，不锁的话断言会随跑测试的机器漂
  if (ctx.GuideI18N && ctx.GuideI18N.setLang) ctx.GuideI18N.setLang(opts.lang || 'zh');
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', 'pulse.js'), 'utf8'), ctx, { filename: 'pulse.js' });
  return { ctx, sb };
}

const today = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const WX_OK = { current: { temperature_2m: 25.4, weather_code: 1 }, daily: { precipitation_probability_max: [20] } };
const WX_RAIN = { current: { temperature_2m: 22.1, weather_code: 61 }, daily: { precipitation_probability_max: [80] } };

const texts = () => nodes.pulse.children.map((c) => c.textContent.trim());
const warns = () => nodes.pulse.children.map((c) => c.classList.contains('warn'));

let fail = 0;
const ok = (cond, label, extra) => {
  if (cond) { console.log('  ✓ ' + label); } else { fail++; console.log('  ✗ ' + label + (extra ? '  → ' + extra : '')); }
};
const settle = () => new Promise((r) => setTimeout(r, 30));

(async () => {
  console.log('=== ① 全部数据正常（中文）===');
  nodes.pulse.children.length = 0;
  let { ctx } = boot({ today: { visit: 31, visitor: 12 }, total: { visit: 900, visitor: 486 }, wxData: WX_OK, store: { 'kyudai-read': '["guide-entry","guide-bank"]' } });
  await settle();
  let t = texts();
  console.log('   渲染:', JSON.stringify(t, null, 0));
  ok(t.length === 4, '四条都出现', t.length + ' 条');
  ok(/今日 12 人来过 · 累计 486 人/.test(t[0] || ''), '① 来访取 visitor 而非 visit（12 不是 31）');
  ok(/距离 .+ 还有 \d+ 天/.test(t[1] || ''), '② 下一件大事', t[1]);
  ok(/福冈 25℃ · 大致晴/.test(t[2] || ''), '③ 天气', t[2]);
  ok(!/带伞/.test(t[2] || ''), '③ 降雨 20% 不提示带伞');
  ok(/已看过 2\/17 篇/.test(t[3] || ''), '④ 打卡 2/17', t[3]);

  console.log('\n=== ② 降雨 ≥50% 转警告色 ===');
  nodes.pulse.children.length = 0;
  boot({ today: { visit: 1, visitor: 1 }, total: { visit: 1, visitor: 1 }, wxData: WX_RAIN, store: {} });
  await settle();
  t = texts();
  ok(/带伞 80%/.test(t[2] || ''), '提示带伞', t[2]);
  ok(warns()[2] === true, '第 3 条带 warn 样式');

  console.log('\n=== ③ 降级：计数接口挂掉 ===');
  nodes.pulse.children.length = 0;
  boot({ tally: 'fail', wxData: WX_OK, store: {} });
  await settle();
  t = texts();
  ok(t.length === 3, '少一条但不整条消失', t.length + ' 条');
  ok(!t.some((x) => /人来过/.test(x)), '来访那条不出现');
  ok(t.some((x) => /福冈/.test(x)), '天气还在');
  ok(nodes.pulse.hidden === false, '状态条仍显示');

  console.log('\n=== ④ 降级：天气接口挂掉 ===');
  nodes.pulse.children.length = 0;
  boot({ wx: 'fail', today: { visit: 5, visitor: 3 }, total: { visit: 5, visitor: 4 }, store: {} });
  await settle();
  t = texts();
  ok(t.length === 3, '少一条', t.length + ' 条');
  ok(!t.some((x) => /福冈/.test(x)), '天气那条不出现');

  console.log('\n=== ⑤ 两个网络接口全挂 → 只剩本地两条（活动 / 打卡） ===');
  nodes.pulse.children.length = 0;
  boot({ tally: 'fail', wx: 'fail', store: {} });
  await settle();
  let tt5 = texts();
  ok(tt5.length === 2, '只剩 2 条', tt5.length + ' 条');
  ok(!tt5.some((x) => /人来过|福冈/.test(x)), '两条网络来源都不出现');
  ok(nodes.pulse.hidden === false, '状态条仍在（本地数据有效）');

  console.log('\n=== ⑤b 连本地数据也没有 → 整条收起 ===');
  nodes.pulse.children.length = 0;
  const sbE = makeSandbox({ tally: 'fail', wx: 'fail', store: {} });
  const ctxE = vm.createContext(sbE);
  sbE.window = sbE;
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', 'pulse.js'), 'utf8'), ctxE, { filename: 'pulse.js' });
  await settle();
  ok(nodes.pulse.children.length === 0, '无标签');
  ok(nodes.pulse.hidden === true, '整条 hidden（不留空壳）');

  console.log('\n=== ⑥ 四语文案 ===');
  for (const [lang, want] of [['ja', /本日 12 人・累計 486 人/], ['en', /12 today · 486 total/], ['ko', /오늘 12명 · 누적 486명/]]) {
    nodes.pulse.children.length = 0;
    const { ctx: c2 } = boot({ today: { visit: 31, visitor: 12 }, total: { visit: 900, visitor: 486 }, wxData: WX_OK, store: {} });
    c2.window.GuideI18N.setLang(lang);
    await settle();
    const tt = texts();
    ok(want.test(tt[0] || ''), lang + ' 来访文案', tt[0]);
    ok(/25/.test(tt[2] || ''), lang + ' 天气温度保留数字', tt[2]);
  }

  console.log('\n=== ⑦ 打卡：打开文章后计数增加（走 hash） ===');
  nodes.pulse.children.length = 0;
  const { sb: sb7, ctx: c7 } = boot({ today: { visit: 1, visitor: 1 }, total: { visit: 1, visitor: 1 }, wxData: WX_OK, store: {} });
  await settle();
  ok(/已看过 0\/17 篇/.test(texts()[3] || ''), '初始 0/17', texts()[3]);
  c7.location.hash = '#article/guide-medical';
  if (typeof c7.window.onhashchange === 'function') c7.window.onhashchange();
  else if (sb7.__hashCb) sb7.__hashCb();
  await settle();
  ok(JSON.parse(sb7.__store['kyudai-read'] || '[]').indexOf('guide-medical') >= 0, 'hash 里的文章 id 被记下');
  ok(/已看过 1\/17 篇/.test(texts()[3] || ''), '计数变 1/17', texts()[3]);

  console.log('\n' + (fail ? '✗ ' + fail + ' 项未通过' : '✓ 全部通过'));
  process.exit(fail ? 1 : 0);
})();
