#!/usr/bin/env node
/**
 * verify_article_nav.js — 文末「上一篇 / 下一篇」的连通性检查
 *
 * renderArticleNav() 按**宫格顺序**（CATS → CAT_ART）串成一条线。
 * 这里离线复现同一套顺序，回答两个问题：
 *   ① 链上有没有断点（某篇没有邻居 → 那篇文末就不会出现导航）
 *   ② 有没有文章根本不在链上（例如只属于「新生专区」而不占宫格格子的篇目）
 * ② 是真问题：不在链上的文章，读者读完只能返回宫格，导航对它等于不存在。
 *
 * ⚠️ app.js 里改 renderArticleNav 的取序规则时，这里要同步改。
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(f, n) { const s = { window: {} }; new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8')).runInNewContext(s); return s.window[n]; }
const CATS = loadWin('data-categories.js', 'CATEGORIES') || [];
const ARTICLES = loadWin('data-articles.js', 'ARTICLES') || [];

// 与 app.js 同源：CAT_ART[c.id] = 该分类的第一篇
const CAT_ART = {};
CATS.forEach(c => { CAT_ART[c.id] = ARTICLES.find(a => String(a.category) === c.id) || null; });
// 与 app.js 的 navOrder() 同源：序章 + 宫格 + 其余
const NAV_HEAD = ['guide-newcomer', 'guide-firstmonth'];
function navOrder() {
  const grid = CATS.map(c => CAT_ART[c.id]).filter(Boolean);
  const inGrid = new Set(grid.map(a => a._id));
  const head = NAV_HEAD.map(id => ARTICLES.find(a => a._id === id)).filter(a => a && !inGrid.has(a._id));
  const rest = ARTICLES.filter(a => !inGrid.has(a._id) && !head.some(h => h._id === a._id));
  return head.concat(grid, rest);
}
const order = navOrder();

console.log(`宫格 ${CATS.length} 格 · 链上 ${order.length} 篇 · 全站 ${ARTICLES.length} 篇`);
console.log('');

// ① 断点：某篇在链上但没有前也没有后（只有全链只有 1 篇时才正常）
const broken = order.filter((a, i) => i === 0 && order.length > 1 ? false : (i > 0 || i < order.length - 1) ? false : true);
// 更直接：每篇是否有邻居
const noNeighbour = order.filter((a, i) => i > 0 || i < order.length - 1 ? false : true);

// ② 不在链上的文章
const onChain = new Set(order.map(a => a._id));
const offChain = ARTICLES.filter(a => !onChain.has(a._id));

// 重复（同一篇占两格 → 链上出现两次，prev/next 会自指）
const dup = order.map(a => a._id).filter((x, i, arr) => arr.indexOf(x) !== i);

console.log('链的顺序（也是文末导航的顺序）：');
order.forEach((a, i) => {
  const prev = i > 0 ? order[i - 1]._id.replace('guide-', '') : '—';
  const next = i < order.length - 1 ? order[i + 1]._id.replace('guide-', '') : '—';
  console.log(`  ${String(i + 1).padStart(2)}. ${a._id.padEnd(20)} 上一篇=${prev.padEnd(18)} 下一篇=${next}`);
});

let bad = 0;
console.log('');
if (dup.length) { console.log('✗ 链上出现重复篇目（prev/next 会自指）：' + [...new Set(dup)].join(', ')); bad++; }
else console.log('✓ 链上无重复篇目');
if (noNeighbour.length) { console.log('✗ 无邻居（文末不显示导航）：' + noNeighbour.map(a => a._id).join(', ')); bad++; }
else console.log('✓ 链上每篇都有至少一个邻居');
if (offChain.length) {
  console.log(`\n⚠ 不在链上的 ${offChain.length} 篇（读完没有上一篇/下一篇，只能返回宫格）：`);
  offChain.forEach(a => console.log(`   ${a._id.padEnd(20)} category=${a.category}  ${a.title}`));
  console.log('   判断：若其中某篇是读者会顺序阅读的长文（如「落地后 30 天」），');
  console.log('   应当给它一个明确的相邻关系，而不是让它成为孤岛。');
} else console.log('✓ 全站文章都在链上');

console.log('');
console.log(bad ? '✗ 导航链有问题' : '✓ 导航链完整');
