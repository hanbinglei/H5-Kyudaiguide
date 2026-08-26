#!/usr/bin/env node
/**
 * check_claims.js — 断言台账体检
 *
 * 回答三个问题：
 *   1. 台账里的断言还指得到内容吗？（区块被删/ID 抄错 → 台账失效而无人察觉）
 *   2. 哪些「核过的」已经超过复核周期？（曾经正确的数字是最危险的一类错误）
 *   3. 内容里还有多少可核查面**根本没登记**？（金额/年份出现处 vs 已登记）
 *
 * 退出码：仅在「悬空 block 引用」时非 0。超期与未登记是提醒，不该拦住发布 ——
 * 它们要的是有人去查，不是让 CI 变红后被无视。
 *
 * 用法: node tools/check_claims.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'content');

const reg = JSON.parse(fs.readFileSync(path.join(SRC, 'claims.json'), 'utf8'));
const index = JSON.parse(fs.readFileSync(path.join(SRC, 'index.json'), 'utf8'));

const docs = {};
for (const e of index.articles) {
  const d = JSON.parse(fs.readFileSync(path.join(SRC, path.basename(e.file)), 'utf8'));
  docs[d._id] = d;
}
function flatten(blocks, out = new Map()) {
  for (const b of blocks) { if (b.id) out.set(b.id, b); if (Array.isArray(b.blocks)) flatten(b.blocks, out); }
  return out;
}
const flat = {};
for (const [id, d] of Object.entries(docs)) flat[id] = flatten(d.blocks || []);

function addDur(dateStr, dur) {
  const m = /^P(?:(\d+)Y)?(?:(\d+)M)?$/.exec(dur || '');
  const d = new Date(dateStr);
  if (!m) return null;
  if (m[1]) d.setFullYear(d.getFullYear() + +m[1]);
  if (m[2]) d.setMonth(d.getMonth() + +m[2]);
  return d;
}

const today = new Date();
const errors = [], stale = [], never = [];
const registered = new Set();

for (const c of reg.claims) {
  const f = flat[c.article];
  if (!f) { errors.push(`${c.id}: 文章 ${c.article} 不存在`); continue; }
  if (!f.has(c.block)) { errors.push(`${c.id}: 区块 ${c.article}/${c.block} 不存在（台账已指不到内容）`); continue; }
  registered.add(c.article + '/' + c.block);
  if (c.verified) {
    const due = addDur(c.verified, c.recheck);
    if (due && due < today) {
      const days = Math.round((today - due) / 86400000);
      stale.push({ ...c, overdue: days });
    }
  } else never.push(c);
}

// 未登记的可核查面：含金额或年份、但台账里没有对应条目的区块
const unregistered = [];
for (const [aid, f] of Object.entries(flat)) {
  for (const [bid, b] of f) {
    if (registered.has(aid + '/' + bid)) continue;
    const t = [b.text, (b.headers || []).join(' '), (b.rows || []).map(r => r.join(' ')).join(' '),
      (b.items || []).map(i => [i.text, i.title, i.desc].filter(Boolean).join(' ')).join(' ')]
      .filter(Boolean).join(' ');
    if (/[0-9][0-9,]*\s*円|¥[0-9,]/.test(t)) unregistered.push({ aid, bid, type: b.type, snip: t.replace(/\s+/g, ' ').slice(0, 62) });
  }
}

const lv = { verified: '✅', ambiguous: '⚠️', unverified: '❌' };
console.log(`断言台账：${reg.claims.length} 条`);
const by = {};
reg.claims.forEach(c => by[c.level] = (by[c.level] || 0) + 1);
console.log('  ' + Object.entries(by).map(([k, v]) => `${lv[k] || k} ${k} ${v}`).join('   '));

if (stale.length) {
  console.log(`\n⏰ 超过复核周期 ${stale.length} 条（曾经核过，但可能已经变了）：`);
  stale.forEach(c => console.log(`  [逾期 ${c.overdue} 天] ${c.id} —— ${c.claim}\n      上次核实 ${c.verified} · 周期 ${c.recheck} · ${c.source}`));
}
if (never.length) {
  console.log(`\n❌ 从未核实 ${never.length} 条（已登记官方源，但没人真的去查过）：`);
  never.forEach(c => console.log(`  ${c.id} —— ${c.claim}\n      应查：${c.sourceName} ${c.source}`));
}
if (unregistered.length) {
  console.log(`\n📋 未登记的可核查面 ${unregistered.length} 处（含金额但台账里没有）：`);
  unregistered.slice(0, 25).forEach(u => console.log(`  ${u.aid}/${u.bid} [${u.type}] ${u.snip}`));
  if (unregistered.length > 25) console.log(`  … 另有 ${unregistered.length - 25} 处`);
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} 处台账失效：`);
  errors.forEach(e => console.error('  ' + e));
  process.exit(1);
}
console.log('\n✓ 台账引用全部有效');
