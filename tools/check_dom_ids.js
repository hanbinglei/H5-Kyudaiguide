#!/usr/bin/env node
/**
 * check_dom_ids.js — app.js 引用的 DOM id 是否都在 index.html 里存在
 *
 * 为什么需要：`$('btnToTop')` 这种拼错**不会报错**，只会返回 null，
 * 然后那一段功能静默失效（按钮不出现、面板不展开），排查起来要重放整个流程。
 * 新增交互元素时最容易犯，实测本项目已有多次（sheet-close 未生效、
 * toc 找不到、refreshTocSpy 未接上等）。
 *
 * 判据：app.js / render.js 里出现的 $('x') 与 getElementById('x')，
 * 若 x 既不在 index.html 的 id 里，也不在脚本里被动态创建（innerHTML 里出现 id="x"），
 * 就算悬空。
 *
 * 用法：node tools/check_dom_ids.js
 */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'guide', 'index.html'), 'utf8');
const jsFiles = ['app.js', 'render.js', 'cunli-utils.js', 'tour.js', 'bus-live.js']
  .map(f => path.join(ROOT, 'guide', 'js', f))
  .filter(f => fs.existsSync(f));
const js = jsFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

// 静态 id：index.html 里的 id="..."
const staticIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
// 动态 id：两种写法都要认
//   ① 模板字符串里的 id="..."
//   ② createElement 之后赋 .id='...'（toast 就是这种，漏了会误报）
const dynIds = new Set([
  ...[...js.matchAll(/\bid="([A-Za-z0-9_-]+)"/g)].map(m => m[1]),
  ...[...js.matchAll(/\.id\s*=\s*'([A-Za-z0-9_-]+)'/g)].map(m => m[1]),
  ...[...js.matchAll(/\.id\s*=\s*"([A-Za-z0-9_-]+)"/g)].map(m => m[1]),
]);

const refs = new Set();
for (const m of js.matchAll(/\$\(\s*'([A-Za-z0-9_-]+)'\s*\)/g)) refs.add(m[1]);
for (const m of js.matchAll(/getElementById\(\s*'([A-Za-z0-9_-]+)'\s*\)/g)) refs.add(m[1]);

const missing = [...refs].filter(id => !staticIds.has(id) && !dynIds.has(id)).sort();
console.log(`index.html 静态 id ${staticIds.size} 个 · 脚本动态 id ${dynIds.size} 个 · app.js 引用 ${refs.size} 个`);
if (missing.length) {
  console.log(`\n✗ 引用了不存在的 id（该段功能会静默失效）${missing.length} 个：`);
  missing.forEach(id => console.log('   ' + id));
  process.exit(1);
}
console.log('\n✓ app.js 引用的 DOM id 全部存在');
