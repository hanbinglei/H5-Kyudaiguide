#!/usr/bin/env node
/** 复现 bench 里的 <ERROR> */
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
S.build(ARTICLES, { nav: NAV, body: BODY, langs: ['zh', 'ja', 'en', 'ko', 'es'] });
for (const q of ['手机卡', '电话卡', '医院', '手机 套餐', '吃药']) {
  try {
    const r = S.query(q, { lang: 'zh', limit: 99 });
    console.log(q.padEnd(10), '命中', String(r.length).padEnd(3), r.slice(0, 3).map(x => x.id.replace('guide-', '') + ':' + x.score).join(', '));
  } catch (e) {
    console.log(q.padEnd(10), '✗ 抛异常:', e.message);
    console.log('   ', (e.stack || '').split('\n').slice(1, 4).join('\n    '));
  }
}
