#!/usr/bin/env node
/**
 * check_newcomer_zone.js — 校验新生专区的深链
 *
 * 为什么必须校验：专区是**新生看到的第一屏**，每条都深链到别篇的小节。
 * 只要 ref 写错或 sec（区块 ID）对不上，点下去就是"打开了文章但没滚到那一节"，
 * 甚至打不开 —— 而这种错**页面不会报错**，要靠人一条条点才可能发现。
 *
 * 用法: node tools/check_newcomer_zone.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const LANGS = ['zh', 'ja', 'en', 'ko'];

function loadWin(file, name) {
  const sandbox = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8')).runInNewContext(sandbox);
  return sandbox.window[name];
}
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const ZONE = loadWin('data-newcomer-zone.js', 'NEWCOMER_ZONE') || {};
const byId = new Map(ARTICLES.map(a => [a._id, a]));

function headingIds(a) {
  const out = new Set();
  const walk = bs => (bs || []).forEach(b => {
    if (b.type === 'heading' || b.type === 'subheading') out.add(b.id);
    if (b.blocks) walk(b.blocks);
  });
  walk(a.blocks);
  return out;
}

const errs = [], warns = [];
let n = 0;
for (const st of ZONE.stages || []) {
  if (!st.label || !st.label.zh) errs.push(`阶段 ${st.id}: 缺 label.zh`);
  for (const l of LANGS) if (st.label && !st.label[l]) warns.push(`阶段 ${st.id}: label 缺 ${l}`);
  const items = st.items || [];
  if (items.length > 5) warns.push(`阶段 ${st.id}: ${items.length} 条 > 5（可读性预算上限）`);
  for (const it of items) {
    n++;
    const a = byId.get(it.ref);
    if (!a) { errs.push(`阶段 ${st.id}: ref「${it.ref}」不存在于文章列表`); continue; }
    if (!it.sec) { errs.push(`阶段 ${st.id} / ${it.ref}: 缺 sec（会打开文章但不定位小节）`); continue; }
    if (!headingIds(a).has(it.sec)) errs.push(`阶段 ${st.id} / ${it.ref}: sec「${it.sec}」在该篇里找不到对应小节`);
    if (!it.text || !it.text.zh) errs.push(`阶段 ${st.id} / ${it.ref}: 缺 text.zh`);
    for (const l of LANGS) if (it.text && !it.text[l]) warns.push(`阶段 ${st.id} / ${it.ref}: text 缺 ${l}`);
  }
}

const langs = new Set((ZONE.stages || []).map(s => s.label && Object.keys(s.label).length));
console.log(`专区：${(ZONE.stages || []).length} 个阶段 · ${n} 条深链 · 语言数 ${[...langs].join('/')}`);
for (const e of errs) console.log('  ✗ ' + e);
for (const w of warns) console.log('  · ' + w);
console.log(errs.length
  ? `\n✗ ${errs.length} 处深链错误（新生第一屏点不动）`
  : `\n✓ ${n} 条深链全部可用${warns.length ? `（${warns.length} 处缺译会回退中文）` : ''}`);
process.exit(errs.length ? 1 : 0);
