#!/usr/bin/env node
/**
 * add_nav_entries.js — 向 articles-i18n.js 新增/覆盖条目（upsert）
 *
 * patch_nav_entry.js 只能往**已存在**的条目追加；新增一篇时需要这个。
 * 做法：按大括号配对定位条目 → 用 JSON 重写；不存在则插在最后一条之后。
 * 兼容文件里混着的单引号紧凑写法。
 *
 * 用法: node tools/add_nav_entries.js <payload.json>
 *   payload.json = { "guide-xxx": { title:{ja,en,ko}, summary:{ja,en,ko} }, ... }
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'guide', 'js', 'articles-i18n.js');
const payloadPath = process.argv[2];
if (!payloadPath) {
  console.error('usage: node tools/add_nav_entries.js <payload.json>');
  process.exit(2);
}
const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

function findEntry(text, id) {
  for (const key of ['"' + id + '": {', "'" + id + "': {"]) {
    const start = text.indexOf(key);
    if (start < 0) continue;
    let d = 0, end = -1;
    for (let k = start + key.length - 1; k < text.length; k++) {
      if (text[k] === '{') d++;
      else if (text[k] === '}') { d--; if (d === 0) { end = k; break; } }
    }
    if (end > 0) return { start, end, key };
  }
  return null;
}

const render = (id, obj) => {
  const lines = JSON.stringify(obj, null, 1).split('\n');
  // 条目缩进 1 空格，内部再多 1 空格
  const body = lines.map((l, i) => (i === 0 ? l : ' ' + l)).join('\n');
  // ⚠️ 别漏了开头的 { —— JSON.stringify 的首行就是 '{'，slice(1) 把它切掉后必须补回来
  return '"' + id + '": {' + body.slice(1);
};

let text = fs.readFileSync(FILE, 'utf8').replace(/\r\n/g, '\n');
const added = [];
for (const [id, obj] of Object.entries(payload)) {
  const hit = findEntry(text, id);
  const block = render(id, obj);
  if (hit) {
    text = text.slice(0, hit.start) + block + text.slice(hit.end + 1);
    added.push(id + '(覆盖)');
  } else {
    // 插在最后一个条目之后
    const anchor = text.lastIndexOf('\n};');
    if (anchor < 0) throw new Error('找不到外层对象结尾');
    let head = text.slice(0, anchor).replace(/\s+$/, '');
    if (!head.endsWith(',')) head += ',';
    text = head + '\n' + block + text.slice(anchor);
    added.push(id + '(新增)');
  }
}
fs.writeFileSync(FILE, text.replace(/\n/g, '\r\n'), 'utf8');

// 回读验证
const sandbox = { window: {} };
new vm.Script(fs.readFileSync(FILE, 'utf8')).runInNewContext(sandbox);
const NAV = sandbox.window.ARTICLES_I18N;
const ok = Object.keys(payload).every(id => {
  const e = NAV[id];
  return e && ['ja', 'en', 'ko'].every(l => e.title && e.title[l] && e.summary && e.summary[l]);
});
console.log('处理:', added.join(', '));
console.log('nav 条目总数:', Object.keys(NAV).length, '| 回读验证:', ok ? 'OK' : '失败');
process.exit(ok ? 0 : 1);
