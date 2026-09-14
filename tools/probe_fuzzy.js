#!/usr/bin/env node
/**
 * probe_fuzzy.js — 校验「模糊用例」是否成立
 *
 * 一个模糊用例要成立，必须同时满足：
 *   ① 错写法**不在**任何文章中（否则测的是普通匹配）
 *   ② 正确写法**在**期望文章里（否则期望本身就是错的）
 *
 * 注意：haystack 必须包含三语译文 —— 日文形（在留カード / 自転車）只存在于译文包里，
 * 只 grep content/*.json 会得出「文章里没有这个词」的错误结论。
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(file, name) {
  const sandbox = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8')).runInNewContext(sandbox);
  return sandbox.window[name];
}
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};
const map = new Map(ARTICLES.map(a => [a._id, a]));

function hay(id) {
  const a = map.get(id); if (!a) return '';
  const acc = [a.title || '', a.summary || '', (a.tags || []).join(' ')];
  const nav = NAV[id];
  if (nav) acc.push(...Object.values(nav.title || {}), ...Object.values(nav.summary || {}));
  const walk = b => {
    if (b.text) acc.push(b.text);
    (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
    (b.headers || []).forEach(h => acc.push(h));
    (b.rows || []).forEach(r => acc.push(r.join(' ')));
    (b.blocks || []).forEach(walk);
  };
  (a.blocks || []).forEach(walk);
  const im = BODY[id] || {};
  for (const l of ['ja', 'en', 'ko']) {
    const tm = im[l]; if (!tm) continue;
    for (const k in tm) {
      const v = tm[k]; if (!v) continue;
      if (v.text) acc.push(v.text);
      (v.items || []).forEach(it => ['text', 'title', 'desc'].forEach(x => { if (it[x]) acc.push(it[x]); }));
      (v.headers || []).forEach(h => acc.push(h));
      (v.rows || []).forEach(r => acc.push(r.join(' ')));
    }
  }
  return acc.join(' ').toLowerCase();
}
const ALL = ARTICLES.map(a => hay(a._id)).join(' \u0001 ');

// [错写法, 正确写法, 期望文章, 说明]
const FUZZY = [
  ['在留カド', '在留カード', 'guide-residence', '漏长音符'],
  ['マイナンバ', 'マイナンバー', 'guide-firstmonth', '漏长音符'],
  ['ゆうちよ', 'ゆうちょ', 'guide-bank', '错字'],
  ['口坐', '口座', 'guide-bank', '错字 座→坐'],
  ['病愿', '病院', 'guide-medical', '错字 院→愿'],
  ['自転车', '自転車', 'guide-transport', '简体 車→车'],
  ['国费', '国費', 'guide-scholarship', '简体 費→费'],
  ['奨学', '奨学金', 'guide-scholarship', '截断'],
  ['アルバイト', 'バイト', 'guide-parttime', '全称（正文用简称）'],
  ['scholership', 'scholarship', 'guide-scholarship', '英文错字'],
  ['scholarshp', 'scholarship', 'guide-scholarship', '英文漏字'],
  ['wifi', 'Wi-Fi', 'guide-phone', '去连字符'],
  ['携帯', '携帯電話', 'guide-phone', '截断'],
  ['口座座', '口座', 'guide-bank', '多字'],
  ['银行行', '银行', 'guide-bank', '多字'],
  ['座口', '口座', 'guide-bank', '错序'],
];

console.log('错写法            正确写法        期望文章              ①错写不在库  ②正确在目标  判定');
console.log('─'.repeat(88));
const ok = [];
for (const [bad, good, id, note] of FUZZY) {
  const badInAll = ALL.includes(bad.toLowerCase());
  const goodInTarget = hay(id).includes(good.toLowerCase());
  const pass = !badInAll && goodInTarget;
  if (pass) ok.push([bad, id, note]);
  console.log(
    bad.padEnd(17) + good.padEnd(15) + id.padEnd(21) +
    (badInAll ? '是 ✗' : '否 ✓').padEnd(13) +
    (goodInTarget ? '是 ✓' : '否 ✗').padEnd(13) + (pass ? '成立' : '不成立')
  );
}
console.log('\n成立的模糊用例（' + ok.length + ' 个）:');
console.log(JSON.stringify(ok));
