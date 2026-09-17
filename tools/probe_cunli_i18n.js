#!/usr/bin/env node
/**
 * probe_cunli_i18n.js — 村历译名覆盖率
 *
 * nameOf() 对 en/ko 走 I18N.cunliName(日文原名, lang) 查表，查不到就回落到日文。
 * 「切了语言还是日文」= 查表未命中。这里列出具体缺哪些。
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(f, n) { const s = { window: {} }; new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8')).runInNewContext(s); return s.window[n]; }
const CUNLI = loadWin('data-cunli.js', 'CUNLI_DATA') || (() => {
  const s = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', 'data-cunli.js'), 'utf8') + '\n;window.__C=typeof CUNLI_DATA!=="undefined"?CUNLI_DATA:null;').runInNewContext(s);
  return s.window.__C;
})();
const I18N = loadWin('i18n.js', 'GuideI18N');
console.log('cunliName 是否存在:', typeof (I18N && I18N.cunliName));
console.log('CUNLI items:', CUNLI && CUNLI.items ? CUNLI.items.length : '—');

const LANGS = ['en', 'ko', 'es'];
const items = (CUNLI && CUNLI.items) || [];
const miss = { en: [], ko: [] };
const hit = { en: 0, ko: 0 };
for (const it of items) {
  const ja = it.title || '';
  for (const L of LANGS) {
    const v = I18N.cunliName ? I18N.cunliName(ja, L) : null;
    if (v) hit[L]++; else miss[L].push(ja);
  }
}
for (const L of LANGS) {
  console.log('\n■ ' + L + '：命中 ' + hit[L] + ' / ' + items.length + '，缺 ' + miss[L].length);
  miss[L].forEach(x => console.log('   缺: ' + x));
}
const uniq = [...new Set(miss.en.concat(miss.ko))];
console.log('\n涉及的不同日文名（' + uniq.length + ' 个）:');
console.log(JSON.stringify(uniq));
