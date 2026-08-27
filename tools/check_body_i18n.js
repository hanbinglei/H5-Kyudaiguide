#!/usr/bin/env node
/**
 * check_body_i18n.js — 正文译本校验（按区块 ID）
 *
 * 译本按 ID 索引后，「结构漂移」已不可能发生（结构一律取自中文）。
 * 于是这里改查三件真正还会出错的事：
 *   1. 译文指向了不存在的 ID —— 中文侧删过块、或 ID 抄错，该译文永远不会显示
 *   2. list/steps/checklist/fee_table 的条目数与中文不一致 —— 译时漏掉一条，读者少看一条
 *   3. URL 与电话集合与中文不一致 —— 翻译最容易手滑、后果也最直接的两样
 *      （「按读者国籍本地化联络方式」是有意为之，走白名单，只打印差异供人工复核）
 * 另外报出各篇各语言的**覆盖率**，让「还有哪些没译」一眼可见。
 *
 * 用法: node tools/check_body_i18n.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const LANGS = ['ja', 'en', 'ko'];

// 联络方式按读者国籍本地化是有意的，不是翻译手滑：
// 中文版指向中国总领事馆，韩语版就该指向韩国总领事馆；日/英版面向多国读者则改为
// 「查你自己国家的公馆」。这几组 URL/电话必然与中文不同 —— 跳过等值断言，
// 改为打印差异供人工核对号码真实性。
const CONTACT_LOCALIZED = {
  'guide-emergency': ['ja', 'en', 'ko'],
  'guide-medical': ['ja', 'en', 'ko'],
  'guide-antifraud': ['ja', 'en', 'ko'],
  'guide-life': ['ja', 'en', 'ko'],
  // 「出事时打哪个电话」那一条：中文写的是中国的领保热线，ja/en 改为
  // 「联系本国在外机构」并列出在福冈的总领事馆，ko 换成韩国总领事馆
  'guide-firstmonth': ['ja', 'en', 'ko'],
};

function loadWin(file, name) {
  const sandbox = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8')).runInNewContext(sandbox);
  return sandbox.window[name];
}
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};

const errors = [], notes = [];

// 把中文区块摊平成 id → block（含 collapse 内嵌）
function flatten(blocks, out = new Map()) {
  for (const b of blocks) {
    if (b.id) out.set(b.id, b);
    if (Array.isArray(b.blocks)) flatten(b.blocks, out);
  }
  return out;
}

const TEL = /(0\d{2,4}-\d{2,4}-\d{3,4}|#\d{4}|\+\d{1,3}(?:-\d{1,8}){1,3})/g;
function harvest(block, urls, tels) {
  const texts = [];
  if (typeof block.text === 'string') texts.push(block.text);
  if (typeof block.title === 'string') texts.push(block.title);
  for (const it of block.items || []) {
    ['text', 'title', 'desc'].forEach(k => { if (typeof it[k] === 'string') texts.push(it[k]); });
    if (typeof it.url === 'string') urls.push(it.url);
  }
  for (const row of block.rows || []) for (const c of row) if (typeof c === 'string') texts.push(c);
  for (const h of block.headers || []) if (typeof h === 'string') texts.push(h);
  for (const t of texts) {
    for (const m of t.matchAll(TEL)) tels.push(m[1]);
    for (const m of t.matchAll(/https?:\/\/[^\s)）"'，、]+/g)) urls.push(m[0]);
  }
}

let totalBlocks = 0, totalTranslated = 0;
const coverage = [];

for (const art of ARTICLES) {
  const zh = flatten(art.blocks || []);
  totalBlocks += zh.size;
  const entry = BODY[art._id] || {};
  const row = { id: art._id, blocks: zh.size };

  for (const lang of LANGS) {
    const map = entry[lang];
    if (!map) { row[lang] = 0; continue; }
    row[lang] = Object.keys(map).length;
    totalTranslated += row[lang];

    // 1. 指向不存在的 ID
    for (const id of Object.keys(map)) {
      if (!zh.has(id)) errors.push(`${art._id}/${lang}: 译文指向不存在的区块 id "${id}"（永远不会显示）`);
    }
    // 2. 条目数一致
    for (const [id, tb] of Object.entries(map)) {
      const zb = zh.get(id); if (!zb) continue;
      if (tb.items && (tb.items.length !== (zb.items || []).length))
        errors.push(`${art._id}/${lang} [${id}] ${zb.type}: 条目数 ${tb.items.length} ≠ 中文 ${(zb.items || []).length}`);
      if (tb.rows) {
        if (tb.rows.length !== (zb.rows || []).length)
          errors.push(`${art._id}/${lang} [${id}]: 表格行数 ${tb.rows.length} ≠ 中文 ${(zb.rows || []).length}`);
        tb.rows.forEach((r, i) => {
          const zr = (zb.rows || [])[i] || [];
          if (r.length !== zr.length) errors.push(`${art._id}/${lang} [${id}]: 表格第 ${i} 行列数不符`);
        });
      }
      if (tb.headers && tb.headers.length !== (zb.headers || []).length)
        errors.push(`${art._id}/${lang} [${id}]: 表头列数不符`);
    }
    // 3. URL / 电话集合
    const zu = [], zt = [], tu = [], tt = [];
    for (const b of zh.values()) harvest(b, zu, zt);
    for (const [id, tb] of Object.entries(map)) {
      const zb = zh.get(id); if (!zb) continue;
      harvest(Object.assign({}, zb, tb), tu, tt);
    }
    // 未译的块沿用中文，其 URL/电话也应计入
    for (const [id, b] of zh) if (!map[id]) harvest(b, tu, tt);

    const localized = (CONTACT_LOCALIZED[art._id] || []).includes(lang);
    const setEq = (a, b, what) => {
      const A = [...new Set(a)].sort(), B = [...new Set(b)].sort();
      if (A.join('|') === B.join('|')) return;
      const miss = A.filter(x => !B.includes(x)), extra = B.filter(x => !A.includes(x));
      const msg = `${art._id}/${lang}: ${what} 中文有而译本无=${JSON.stringify(miss)} 译本新增=${JSON.stringify(extra)}`;
      (localized ? notes : errors).push(msg);
    };
    setEq(zu, tu, 'URL');
    setEq(zt, tt, '电话');
  }
  coverage.push(row);
}

console.log(`文章 ${ARTICLES.length} 篇 · 中文区块 ${totalBlocks} · 译文条目 ${totalTranslated}\n`);
console.log('覆盖率（译文条目 / 中文区块）:');
for (const r of coverage) {
  const pct = l => r.blocks ? Math.round(r[l] / r.blocks * 100) : 0;
  const mark = LANGS.every(l => pct(l) >= 100) ? '✓' : ' ';
  console.log(`  ${mark} ${r.id.padEnd(18)} ${String(r.blocks).padStart(3)} 块  ` +
    LANGS.map(l => `${l} ${String(pct(l)).padStart(3)}%`).join('  '));
}

if (notes.length) {
  console.log(`\n⚙ ${notes.length} 处「有意本地化」的联络方式差异（请人工核对号码真实性）：`);
  notes.forEach(n => console.log('  ' + n));
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} 处问题：`);
  errors.forEach(e => console.error('  ' + e));
  process.exit(1);
}
console.log('\n✓ 无悬空 ID；条目/表格数一致；URL / 电话除已声明的本地化外完全一致');
