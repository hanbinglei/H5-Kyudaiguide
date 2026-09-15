#!/usr/bin/env node
/**
 * check_cunli_i18n.js — 村历（日历）译名完整性校验
 *
 * 为什么需要它：nameOf() 对 en/ko 走 I18N.cunliName(日文原名, lang) 查表，
 * **查不到就静默回落日文** —— 界面切成英文/韩文，日历条仍是日文，
 * 而其余部分都正常，看起来像「个别条目没翻译」而不是「表漏了」。
 * 实测就发生过：2026-09-02 直接往 data-cunli.js 加了留学課 c63–c69，
 * 名字表没跟着加，切英文时那 7 条全是日文（用户截图反馈）。
 *
 * 判据：
 *   ① 每条都要有 zh（缺了则中文界面显示日文原名）
 *   ② 每条都要在 CUNLI_NAMES 里有 en 与 ko
 *   ③ 表里有、数据里没有的 = 陈旧条目（提示，不算失败）
 *
 * 用法：node tools/check_cunli_i18n.js
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function run(f, expr) {
  const s = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8') + '\n;window.__R=' + expr + ';').runInNewContext(s);
  return s.window.__R;
}
const CUNLI = run('data-cunli.js', 'CUNLI_DATA');
// i18n.js 是赋到 window.GuideI18N 的属性（不是 var 声明），沙箱里
// 写裸名字 GuideI18N 会 ReferenceError —— 必须走 window.
const G = run('i18n.js', 'window.GuideI18N');
const NAMES = G.CUNLI_NAMES, NOTES = G.CUNLI_NOTES, PLACES = G.CUNLI_PLACES;
const items = (CUNLI && CUNLI.items) || [];

const noZh = [], noEn = [], noKo = [];
const noteMiss = [], placeMiss = [];
const used = new Set(), usedPlace = new Set();
for (const it of items) {
  const ja = it.title || '';
  used.add(ja);
  if (!it.zh) noZh.push(it.id + ' ' + ja);
  const e = NAMES[ja];
  if (!e || !e.en) noEn.push(it.id + ' ' + ja);
  if (!e || !e.ko) noKo.push(it.id + ' ' + ja);
  // 详情面板 / .ics 导出会显示说明与地点：en/ko 缺译文就会漏中文出去
  if (it.note) {
    const n = NOTES[it.id];
    if (!n || !n.en || !n.ko) noteMiss.push(it.id + ' ' + ja);
  }
  if (it.place && it.place.ja) {
    usedPlace.add(it.place.ja);
    const p = PLACES[it.place.ja];
    if (!p || !p.en || !p.ko) placeMiss.push(it.id + ' ' + ja + ' @ ' + it.place.ja);
  }
}
const stale = Object.keys(NAMES).filter(k => !used.has(k));
const staleNote = Object.keys(NOTES).filter(k => !items.some(it => it.id === k && it.note));
const stalePlace = Object.keys(PLACES).filter(k => !usedPlace.has(k));

let bad = 0;
console.log(`村历条目 ${items.length} 条 · 名字表 ${Object.keys(NAMES).length} · 说明表 ${Object.keys(NOTES).length} · 地点表 ${Object.keys(PLACES).length}`);
for (const [label, arr] of [['缺 zh（中文界面会显示日文）', noZh], ['缺 en 译名', noEn], ['缺 ko 译名', noKo],
                            ['缺说明译文（详情面板 / .ics 会漏中文）', noteMiss], ['缺地点译文', placeMiss]]) {
  if (arr.length) {
    bad += arr.length;
    console.log(`\n✗ ${label} ${arr.length} 条：`);
    arr.forEach(x => console.log('   ' + x));
  } else console.log(`✓ ${label}：0`);
}
const staleAll = [['名字', stale], ['说明', staleNote], ['地点', stalePlace]].filter(x => x[1].length);
if (staleAll.length) {
  console.log('');
  for (const [label, arr] of staleAll) {
    console.log(`⚠ ${label}表里有 ${arr.length} 条在数据中已不存在（陈旧，建议清理）：${arr.join(', ')}`);
  }
}
console.log('');
if (bad) { console.log('✗ 村历译名不完整：切到 en/ko 时缺译名的条目会回落显示中文/日文原名。'); process.exit(1); }
console.log('✓ 村历译名完整（活动名 / 说明 / 地点的 zh / en / ko 全部覆盖）');
