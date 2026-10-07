#!/usr/bin/env node
/** 搜索分层优先级与多语标题索引的定向回归。 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
function loadWin(file, name) {
  const sandbox = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8'))
    .runInNewContext(sandbox);
  return sandbox.window[name];
}

const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};
const Search = loadWin('search.js', 'GuideSearch');
Search.build(ARTICLES, { nav: NAV, body: BODY, langs: ['zh', 'ja', 'en', 'ko', 'es'] });

// 这些真实语序覆盖：词表键、别名候选和已翻译的小标题不能压过主题精确命中。
const CASES = [
  ['zh', '手机丢了', 'guide-life'],
  ['ja', '落とし物をしたら', 'guide-life'],
  ['en', 'lost my phone', 'guide-life'],
  ['ko', '아플 때 어떻게', 'guide-medical'],
  ['ko', '휴대폰 잃어버렸을 때', 'guide-life'],
];

let failed = 0;
for (const [lang, query, expected] of CASES) {
  const results = Search.query(query, { lang, limit: 20 });
  const rank = results.findIndex(item => item.id === expected) + 1;
  const top = results[0] ? results[0].id : '(no results)';
  const ok = rank === 1;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${lang} ${query}: expected first=${expected}, actual first=${top}, target rank=${rank || '—'}`);
}
console.log(`\n${CASES.length - failed}/${CASES.length} focused search regressions passed`);
if (failed) process.exitCode = 1;
