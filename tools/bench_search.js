#!/usr/bin/env node
/**
 * bench_search.js — 指南站内搜索的回归基准（真实数据 + 断言）
 *
 * 用法:
 *   node tools/bench_search.js            # 只测当前实现（app.js 的 searchHay + includes）
 *   node tools/bench_search.js new        # 测 guide/js/search.js 的新实现
 *   node tools/bench_search.js both       # 两个一起对比
 *
 * 判据：recall@1 / recall@3 —— 期望文章是否排在结果第 1 / 前 3。
 * 「命中数」也很重要：命中 12 篇 = 等于没搜。
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
function loadWin(file, name) {
  const sandbox = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8')).runInNewContext(sandbox);
  return sandbox.window[name];
}
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};

// ── 当前实现（从 app.js 原样搬来，改语言由参数给） ──
function trMap(a, lang) {
  if (lang === 'zh') return null;
  const e = BODY[a._id];
  const m = e && e[lang];
  return m && Object.keys(m).length ? m : null;
}
const HAYcur = new Map();
function searchHayCur(a, lang) {
  const key = a._id + '@' + lang + (BODY ? '+tr' : '');
  const cached = HAYcur.get(key);
  if (cached !== undefined) return cached;
  const acc = [a.title || '', a.summary || '', (a.tags || []).join(' ')];
  const i = NAV[a._id];
  if (i) acc.push(...Object.values(i.title || {}), ...Object.values(i.summary || {}));
  const walk = b => {
    if (b.text) acc.push(b.text);
    (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
    (b.headers || []).forEach(h => acc.push(h));
    (b.rows || []).forEach(r => acc.push(r.join(' ')));
    (b.blocks || []).forEach(walk);
  };
  (a.blocks || []).forEach(walk);
  const tm = trMap(a, lang);
  if (tm) for (const id in tm) {
    const v = tm[id];
    if (v && v.text) acc.push(v.text);
    ((v && v.items) || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
    ((v && v.headers) || []).forEach(h => acc.push(h));
    ((v && v.rows) || []).forEach(r => acc.push(r.join(' ')));
  }
  const s = acc.join(' ').toLowerCase();
  HAYcur.set(key, s);
  return s;
}
function curQuery(q, lang) {
  const needle = q.trim().toLowerCase();
  return ARTICLES.filter(a => searchHayCur(a, lang).includes(needle)).map(a => a._id);
}

// ── 新实现 ──
let newQuery = null;
if (process.env.USE_NEW) {
  const src = fs.readFileSync(path.join(ROOT, 'guide', 'js', 'search.js'), 'utf8');
  const sandbox = { window: {} };
  new vm.Script(src).runInNewContext(sandbox);
  const S = sandbox.window.GuideSearch;
  S.build(ARTICLES, { nav: NAV, body: BODY, langs: ['zh', 'ja', 'en', 'ko', 'es'] });
  newQuery = (q, lang) => S.query(q, { lang, limit: 99 }).map(r => r.id);
}

// ── 查询集：expect = 期望排在前面的文章 ──
const Q = [
  ['手机', 'guide-phone', '中文主词'],
  ['手机卡', 'guide-phone', '中文+量词'],
  ['携帯', 'guide-phone', '日文'],
  ['SIM', 'guide-phone', '英文缩写'],
  ['流量', 'guide-phone', '口语词'],
  ['银行', 'guide-bank', '中文主词'],
  ['开户', 'guide-bank', '动作词'],
  ['口座', 'guide-bank', '日文'],
  ['送金', 'guide-bank', '日文'],
  ['汇款', 'guide-bank', '中文'],
  ['奖学金', 'guide-scholarship', '新文章·中文'],
  ['奨学金', 'guide-scholarship', '新文章·日文'],
  ['scholarship', 'guide-scholarship', '新文章·英文'],
  ['장학금', 'guide-scholarship', '新文章·韩文'],
  ['国费', 'guide-scholarship', '新文章·子话题'],
  ['医院', 'guide-newcomer', '中文主词（newcomer 有医院一览表；medical 只提一次）'],
  ['病院', 'guide-medical', '日文'],
  ['发烧', 'guide-medical', '症状'],
  ['国民健康保険', 'guide-medical', '日文制度名'],
  ['脱退一時金', 'guide-residence', '长专名'],
  ['092-286-9595', 'guide-medical', '电话号码'],
  ['在留カード', 'guide-residence', '日文专名'],
  ['在留卡', 'guide-residence', '中文译名'],
  ['打工', 'guide-parttime', '中文主词'],
  ['バイト', 'guide-parttime', '日文口语'],
  ['自転車', 'guide-transport', '日文'],
  ['青切符', 'guide-transport', '2026 新制度'],
  ['垃圾分类', 'guide-life', '中文'],
  ['地震', 'guide-emergency', '灾害'],
  ['银行 开户', 'guide-bank', '多词 AND'],
  ['手机 套餐', 'guide-phone', '多词 AND'],
  ['租房 礼金', 'guide-housing', '多词 AND'],
  ['nimoca', 'guide-transport', '交通卡'],
  ['在留 更新', 'guide-residence', '多词 AND'],
  ['地震 避难', 'guide-emergency', '多词 AND'],

  // ── 模糊：错字 / 漏字 / 多字 / 错序 / 简体（错写法本身不在任何文章里，
  //    必须靠模糊匹配才可能命中；用例均由 tools/probe_fuzzy.js 校验成立）──
  ['在留カド', 'guide-residence', '模糊·漏长音符', 'fuzzy'],
  ['ゆうちよ', 'guide-bank', '模糊·错字', 'fuzzy'],
  ['口坐', 'guide-bank', '模糊·错字 座→坐', 'fuzzy'],
  ['病愿', 'guide-medical', '模糊·错字 院→愿', 'fuzzy'],
  ['自転车', 'guide-transport', '模糊·简体 車→车', 'fuzzy'],
  ['scholership', 'guide-scholarship', '模糊·英文错字', 'fuzzy'],
  ['scholarshp', 'guide-scholarship', '模糊·英文漏字', 'fuzzy'],
  ['口座座', 'guide-bank', '模糊·多字', 'fuzzy'],
  ['银行行', 'guide-bank', '模糊·多字', 'fuzzy'],
  ['座口', 'guide-bank', '模糊·错序', 'fuzzy'],

  // ── 关联：查询词的字面**不在**目标文章里（由 tools/probe_related.js 逐个确认），
  //    只有靠同义词 / 共现扩展才可能命中。这是「关联搜索」的验收标准。──
  ['吃药', 'guide-medical', '关联·症状口语', 'related'],
  ['感冒', 'guide-medical', '关联·症状口语', 'related'],
  ['找房子', 'guide-housing', '关联·行为口语', 'related'],
  ['退房', 'guide-housing', '关联·退租口语', 'related'],
  ['水电费', 'guide-housing', '关联·生活术语', 'related'],
  ['火车', 'guide-transport', '关联·交通口语', 'related'],
  ['高铁', 'guide-transport', '关联·交通口语', 'related'],
  ['电话卡', 'guide-phone', '关联·口语说法', 'related'],
  ['没信号', 'guide-phone', '关联·口语症状', 'related'],
  ['报税', 'guide-parttime', '关联·制度俗称', 'related'],
  ['打工时间限制', 'guide-parttime', '关联·制度问法', 'related'],
  ['台风', 'guide-life', '关联·灾害（life 标题即写「福冈天气与台风」）', 'related'],
  ['倒垃圾', 'guide-life', '关联·口语', 'related'],
  ['开证明', 'guide-academic', '关联·手续口语（发券机在学术篇）', 'related'],
  ['养老金', 'guide-residence', '关联·制度俗称', 'related'],
  ['换钱', 'guide-bank', '关联·口语', 'related'],
];

const LANG = process.env.LANG_T || 'zh';
const impls = [];
if (!process.env.NEW_ONLY) impls.push(['当前', curQuery]);
try {
  const src = fs.readFileSync(path.join(ROOT, 'guide', 'js', 'search.js'), 'utf8');
  const sandbox = { window: {} };
  new vm.Script(src).runInNewContext(sandbox);
  const S = sandbox.window.GuideSearch;
  S.build(ARTICLES, { nav: NAV, body: BODY, langs: ['zh', 'ja', 'en', 'ko', 'es'] });
  impls.push(['新版', (q, lang) => S.query(q, { lang, limit: 99 }).map(r => r.id)]);
} catch (e) {
  if (!process.env.NEW_ONLY) console.error('(search.js 未装载: ' + e.message.slice(0, 60) + ')');
}

for (const [name, fn] of impls) {
  let r1 = 0, r3 = 0, miss = 0, fat = 0;
  const rows = [];
  const cats = {};                       // 分类别统计：base / fuzzy / related
  for (const [q, expect, note, cat0] of Q) {
    const cat = cat0 || 'base';
    if (!cats[cat]) cats[cat] = { n: 0, r1: 0, r3: 0, miss: 0 };
    cats[cat].n++;
    let ids = [];
    try { ids = fn(q, LANG); } catch (e) { ids = ['<ERROR ' + e.message.slice(0, 40) + '>']; }
    const rank = ids.indexOf(expect) + 1;
    if (rank === 1) { r1++; cats[cat].r1++; }
    else if (rank > 0 && rank <= 3) { r3++; cats[cat].r3++; }
    if (rank === 0) { miss++; cats[cat].miss++; }
    if (ids.length > 8) fat++;
    rows.push([q, ids.length, rank || '—', note, ids.slice(0, 3).join(', '), cat]);
  }
  console.log(`\n===== ${name}实现 (lang=${LANG}) 共 ${Q.length} 条查询 =====`);
  console.log('查询'.padEnd(16) + '命中'.padEnd(6) + '期望排名'.padEnd(10) + '说明'.padEnd(18) + '前 3 结果');
  for (const r of rows) {
    console.log(String(r[0]).padEnd(16) + String(r[1]).padEnd(6) + String(r[2]).padEnd(10) + String(r[3]).padEnd(18) + r[4]
      + (r[2] === '—' ? '   ← 完全没命中' : ''));
  }
  console.log(`\n  第1名命中 ${r1}/${Q.length} · 前3命中额外 ${r3} · 完全没命中 ${miss} · 命中>8篇(过载) ${fat}`);
  console.log(`  合计        recall@1 = ${(r1 / Q.length * 100).toFixed(1)}%   recall@3 = ${((r1 + r3) / Q.length * 100).toFixed(1)}%`);
  for (const k of ['base', 'fuzzy', 'related']) {
    const c = cats[k]; if (!c) continue;
    const label = { base: '基础查询', fuzzy: '模糊查询', related: '关联查询' }[k];
    console.log(`  ${label}  recall@1 = ${(c.r1 / c.n * 100).toFixed(1)}%   recall@3 = ${((c.r1 + c.r3) / c.n * 100).toFixed(1)}%`
      + `   （${c.n} 条 · 没命中 ${c.miss}）`);
  }
}
