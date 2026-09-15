#!/usr/bin/env node
/**
 * audit_subjective.js — 找出「没有出处支撑的主观说法」候选句
 *
 * 判据不是「出现某个词就一定是主观」—— 而是把可疑句集中捞出来人工过一遍。
 * 分四类：
 *   S1 绝对化断言（最 / 一定 / 绝对 / 唯一 / 必须）—— 官方依据里没有这种话
 *   S2 主观评价（推荐 / 划算 / 性价比高 / 靠谱 / 舒服 / 坑）
 *   S3 推测当事实（应该 / 大概 / 一般来说 / 通常 / 大部分人 / 大家都）
 *   S4 经验性断言（其实 / 事实上 / 大家都知道 / 亲测）
 *
 * 输出：按文章分组，带区块 ID 与前后文，便于回原文核对。
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

const ctx = { window: {}, console, JSON,
  document: { documentElement: {}, querySelector: () => null, addEventListener() {},
              body: { classList: { add() {}, remove() {} } } },
  localStorage: { getItem: () => null, setItem() {} },
  navigator: { language: 'zh' }, location: { hash: '' } };
ctx.window.localStorage = ctx.localStorage;
ctx.window.location = ctx.location;
vm.createContext(ctx);
for (const f of ['data-categories.js', 'data-articles.js', 'data-newcomer-zone.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide/js', f), 'utf8'), ctx);
}
const ARTICLES = ctx.window.ARTICLES || ctx.ARTICLES;

const RULES = [
  ['S1 绝对化', /(最(好|佳|便宜|划算|快|方便|重要|常见|大|小|多|少|高|低)|一定|绝对|唯一|必须|千万|万无一失|百分百)/],
  ['S2 主观评价', /(推荐|划算|性价比|靠谱|不靠谱|舒服|不太行|很坑|踩坑|值得|yyds|慎选)/],
  ['S3 推测当事实', /(应该(是|会|能)|大概|估计|一般(来说|都)|通常(情况|来说)?|大部分人|大家都|多数人|想必)/],
  ['S4 经验断言', /(其实(都|就)?|事实上|众所周知|亲测|过来人|听说是)/],
];

const clean = (s) => String(s).replace(/\s+/g, ' ').trim();
const sentences = (s) => clean(s).split(/(?<=[。！？；!?;])/).map(x => x.trim()).filter(Boolean);

const hits = [];
function scanText(txt, where) {
  for (const s of sentences(txt)) {
    if (s.length < 6) continue;
    for (const [tag, re] of RULES) {
      const m = s.match(re);
      if (m) { hits.push({ where, tag, word: m[0], text: s.slice(0, 130) }); break; }
    }
  }
}
function walkBlocks(blocks, where) {
  for (const b of blocks || []) {
    if (typeof b === 'string') { scanText(b, where); continue; }
    if (!b || typeof b !== 'object') continue;
    const id = b.id || b.key || '';
    const w = where + (id ? ' #' + id : '');
    if (b.text) scanText(b.text, w);
    if (b.title) scanText(b.title, w + '(标题)');
    if (b.items) {
      for (const it of b.items) {
        if (typeof it === 'string') scanText(it, w);
        else if (it) { if (it.text) scanText(it.text, w); if (it.desc) scanText(it.desc, w); }
      }
    }
    if (b.rows) for (const r of b.rows) {
      if (Array.isArray(r)) r.forEach(c => scanText(String(c), w + '(表)'));
      else if (r && typeof r === 'object') Object.values(r).forEach(c => scanText(String(c), w + '(表)'));
    }
    if (b.cells) for (const r of b.cells) if (Array.isArray(r)) r.forEach(c => scanText(String(c), w + '(表)'));
    if (b.q) scanText(b.q, w + '(问答)');
    if (b.a) scanText(b.a, w + '(问答)');
  }
}

for (const a of ARTICLES || []) {
  const whereMeta = `【${a.title}】(${a._id})`;
  if (a.summary) scanText(a.summary, whereMeta + ' 摘要');
  walkBlocks(a.blocks, whereMeta);
}
// 新生专区
const NZ = ctx.window.NEWCOMER_ZONE;
if (NZ && NZ.stages) for (const st of NZ.stages) {
  const pick = (o) => typeof o === 'string' ? o : (o && (o.zh || o.ja || o.en || o.ko)) || '';
  scanText(pick(st.title), '【新生专区】' + pick(st.title).slice(0, 14));
  for (const it of st.items || []) {
    scanText(pick(it.zh) || pick(it.text) || '', '【新生专区】' + pick(st.title).slice(0, 12));
    scanText(pick(it.desc) || '', '【新生专区】');
  }
}

// 汇总
const byTag = {};
for (const h of hits) (byTag[h.tag] = byTag[h.tag] || []).push(h);
console.log('可疑句合计 %d 条（%d 篇有命中）\n', hits.length,
  new Set(hits.map(h => h.where.split(')')[0])).size);
for (const tag of Object.keys(byTag)) {
  console.log('\n########## ' + tag + ' —— %d 条 ##########', byTag[tag].length);
  const byArt = {};
  for (const h of byTag[tag]) {
    const k = h.where.split(' #')[0];
    (byArt[k] = byArt[k] || []).push(h);
  }
  for (const k of Object.keys(byArt)) {
    console.log('\n── ' + k);
    for (const h of byArt[k]) {
      console.log('   [%s] %s\n      「%s」', h.word, h.where.includes('#') ? '#' + h.where.split('#')[1] : '(正文)', h.text);
    }
  }
}
