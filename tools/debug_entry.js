#!/usr/bin/env node
/** 单篇打分拆解：为什么某篇没进结果 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(f, n) { const s = { window: {} }; new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8')).runInNewContext(s); return s.window[n]; }
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};
const sandbox = { window: {} };
new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', 'search.js'), 'utf8')).runInNewContext(sandbox);
const S = sandbox.window.GuideSearch;
S.build(ARTICLES, { nav: NAV, body: BODY, langs: ['zh', 'ja', 'en', 'ko'] });

const term = process.argv[2] || '医院';
const targets = (process.argv[3] || 'medical,newcomer').split(',');
const IDX = S._idx();
for (const t of targets) {
  const e = IDX.find(x => x.id.includes(t)); if (!e) { console.log(t, '（找不到）'); continue; }
  console.log('\n■ ' + e.id + '  ← 查询词「' + term + '」');
  for (const fk in e.f) {
    const v = e.f[fk];
    if (typeof v !== 'string') continue;
    const n = v.split(term).length - 1;
    if (n) {
      const i = v.indexOf(term);
      console.log('   ' + fk.padEnd(12) + ' 命中 ' + n + ' 次   上下文: …' + v.slice(Math.max(0, i - 18), i + 22).replace(/\n/g, ' ') + '…');
    }
  }
}
const r = S.query(term, { lang: 'zh', limit: 99 });
console.log('\n查询结果（' + r.length + ' 条）:');
for (const x of r) console.log('   ' + x.id.padEnd(22) + x.score + '   literal=' + JSON.stringify(x.why.literal) + ' alias=' + JSON.stringify(x.why.alias));
