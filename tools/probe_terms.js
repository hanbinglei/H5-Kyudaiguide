#!/usr/bin/env node
/** probe_terms.js — 查某组词各自出现在哪些文章里（判断期望文章是否写错、词表成员是否存在于语料） */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(f, n) { const s = { window: {} }; new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8')).runInNewContext(s); return s.window[n]; }
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};
function hay(a) {
  const acc = [a.title || '', a.summary || '', (a.tags || []).join(' ')];
  const nav = NAV[a._id]; if (nav) acc.push(...Object.values(nav.title || {}), ...Object.values(nav.summary || {}));
  const walk = b => { if (!b) return; if (b.text) acc.push(b.text);
    (b.items || []).forEach(it => ['text','title','desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
    (b.headers || []).forEach(h => acc.push(h));
    (b.rows || []).forEach(r => acc.push(r.join(' '))); (b.blocks || []).forEach(walk); };
  (a.blocks || []).forEach(walk);
  const im = BODY[a._id] || {};
  for (const l of ['ja','en','ko']) { const tm = im[l]; if (!tm) continue;
    for (const k in tm) { const v = tm[k]; if (!v) continue;
      if (v.text) acc.push(v.text);
      (v.items || []).forEach(it => ['text','title','desc'].forEach(x => { if (it[x]) acc.push(it[x]); }));
      (v.headers || []).forEach(h => acc.push(h)); (v.rows || []).forEach(r => acc.push(r.join(' '))); } }
  return acc.join(' ').toLowerCase();
}
const H = ARTICLES.map(a => [a._id, hay(a)]);
const WORDS = process.argv.slice(2);
for (const w of WORDS) {
  const found = H.filter(([, h]) => h.includes(w.toLowerCase())).map(([id]) => id.replace('guide-', ''));
  const n = H.reduce((s, [, h]) => { let c = 0, i = 0; while ((i = h.indexOf(w.toLowerCase(), i)) !== -1) { c++; i += w.length; } return s + Math.min(c, 2); }, 0);
  console.log(w.padEnd(12) + ' 文档频率 ' + String(found.length).padEnd(3) + ' 出现次数 ' + String(n).padEnd(4) + ' ' + (found.length ? found.join(', ') : '（全站无）'));
}
