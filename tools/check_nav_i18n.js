#!/usr/bin/env node
/**
 * check_nav_i18n.js — 校验 articles-i18n.js 的**结构**（此前完全没有覆盖）
 *
 * 为什么需要它：正文译本有 check_body_i18n 兜着，nav 层却没有。
 * 曾经把一篇写成嵌套式 `{ja:{title}}`，而其余全部是扁平式 `{title:{ja,zh,en,ko}}`，
 * 结果：`I18N.articleField` 读 `i18n.title[lang]` 读不到 → 日/英/韩界面一直显示中文标题，
 * 搜索索引也拿不到那篇的外语标题 —— **完全不报错，静默降级**。
 *
 * 用法: node tools/check_nav_i18n.js
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
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};

const errs = [], warns = [];
for (const a of ARTICLES) {
  const nv = NAV[a._id];
  if (!nv) { errs.push(`${a._id}: nav 层没有条目（标题/摘要会回退中文，且搜索拿不到外语标题）`); continue; }
  // 结构判定：扁平式 = nv.title 是「语言 → 字符串」的对象。
  // 约定：zh 可以省略（zh 直接取正文标题），ja/en/ko 必须给。
  const flat = nv.title && typeof nv.title === 'object'
    && !nv.title.title && LANGS.some(l => typeof nv.title[l] === 'string');
  const nested = LANGS.some(l => nv[l] && typeof nv[l] === 'object' && nv[l].title);
  if (!flat) {
    errs.push(`${a._id}: nav 结构不是扁平式 ${'{title:{zh,ja,en,ko}}'}${nested ? '（检测到嵌套式 {ja:{title}}）' : ''}`);
    continue;
  }
  const miss = ['ja', 'en', 'ko'].filter(l => !nv.title[l] || !nv.summary[l]);
  if (miss.length) warns.push(`${a._id}: 缺 ${miss.join('/')} 的 title 或 summary`);
}

console.log(`文章 ${ARTICLES.length} 篇 · nav 条目 ${Object.keys(NAV).length} 个`);
for (const e of errs) console.log('  ✗ ' + e);
for (const w of warns) console.log('  · ' + w);
console.log(errs.length
  ? `\n✗ ${errs.length} 处结构错误（会导致对应语言静默显示中文标题）`
  : `\n✓ nav 结构一致${warns.length ? `（${warns.length} 处缺译，会回退中文）` : ''}`);
process.exit(errs.length ? 1 : 0);
