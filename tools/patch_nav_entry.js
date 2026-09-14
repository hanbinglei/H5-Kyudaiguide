#!/usr/bin/env node
/**
 * patch_nav_entry.js — 安全地改 articles-i18n.js 里某一条目
 *
 * 为什么单独写：直接对那一行做字符串拼接很容易踩到缩进/换行的差异。
 * 这里改为「按大括号配对找出条目边界 → 用 JSON 有缩进地重写那一条」，
 * 其余内容一字不动。
 *
 * 用法: node tools/patch_nav_entry.js <articleId> <lang> <field> <appendText>
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'guide', 'js', 'articles-i18n.js');
const [id, lang, field, append] = process.argv.slice(2);
if (!id || !lang || !field) {
  console.error('usage: node tools/patch_nav_entry.js <articleId> <lang> <field> <appendText>');
  process.exit(2);
}

const raw = fs.readFileSync(FILE, 'utf8').replace(/\r\n/g, '\n');

// 1) 找条目的起止（从 "id": { 开始做大括号配对）
// 文件里混着两种风格：既有 15 篇是 'id': {（单引号+紧凑），新加的用 "id": {
// 两种都要找得到，否则一加条目就报「找不到条目」。
let key = '"' + id + '": {';
let start = raw.indexOf(key);
if (start < 0) { key = "'" + id + "': {"; start = raw.indexOf(key); }
if (start < 0) throw new Error('找不到条目 ' + id);
let d = 0, end = -1;
for (let k = start + key.length - 1; k < raw.length; k++) {
  if (raw[k] === '{') d++;
  else if (raw[k] === '}') { d--; if (d === 0) { end = k; break; } }
}
if (end < 0) throw new Error('条目大括号不配对');

// 2) 解析出对象（用 vm 从整文件取，保证拿到的是真值）
const sandbox = { window: {} };
new vm.Script(fs.readFileSync(FILE, 'utf8')).runInNewContext(sandbox);
const entry = sandbox.window.ARTICLES_I18N[id];
if (append) {
  if (!entry[field] || typeof entry[field][lang] !== 'string') {
    entry[field] = entry[field] || {};
    entry[field][lang] = '';
  }
  if (!entry[field][lang].includes(append)) entry[field][lang] += append;
}

// 3) 重写条目（保持文件原有缩进层级：条目在 1 空格缩进）
const body = JSON.stringify(entry, null, 1).split('\n');
const indented = body.map((l, i) => (i === 0 ? l : ' ' + l)).join('\n');
// end 指向原条目的收尾 '}'，要跳过它（新写的 JSON 里已经带了收尾括号），
// 否则会多出一个 '}' 把文件写坏
const out = raw.slice(0, start) + key + indented.slice(1) + raw.slice(end + 1);

fs.writeFileSync(FILE, out.replace(/\n/g, '\r\n'), 'utf8');

// 4) 回读验证
const chk = { window: {} };
new vm.Script(fs.readFileSync(FILE, 'utf8')).runInNewContext(chk);
const got = chk.window.ARTICLES_I18N[id][field][lang];
console.log(`${id}.${field}.${lang} → ${got}`);
console.log('回读验证:', got.includes(append) ? 'OK' : '失败');
