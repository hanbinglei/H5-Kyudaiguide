#!/usr/bin/env node
/**
 * check_body_i18n.js — 正文译本结构校验
 *
 * 译本必须与中文正文「逐位同构」：块数相同、每块 type 相同、
 * list/steps/checklist 的 items 条数相同、fee_table 的行列数相同。
 * 另外断言 URL 与电话号码集合完全一致 —— 翻译时最容易手滑改动的就是这两样，
 * 而它们错了用户会打错电话、点进死链，比译文生硬严重得多。
 *
 * 用法: node tools/check_body_i18n.js
 * 退出码非 0 即校验失败。
 */
'use strict';
const fs = require('fs');
const path = require('path');
const G = path.join(__dirname, '..', 'guide', 'js');

function loadWindowGlobal(file, globalName) {
  const src = fs.readFileSync(path.join(G, file), 'utf8');
  const sandbox = { window: {} };
  new (require('vm').Script)(src).runInNewContext(sandbox);
  return sandbox.window[globalName];
}

const ARTICLES = loadWindowGlobal('data-articles.js', 'ARTICLES');
let BODY = {};
if (fs.existsSync(path.join(G, 'articles-body-i18n.js'))) {
  BODY = loadWindowGlobal('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};
}

const LANGS = ['ja', 'en', 'ko'];

// 「联络方式按读者国籍本地化」是有意为之，不是翻译手滑：
// 应急联系篇里的领事馆一节，中文版指向中国总领事馆，韩语版就该指向韩国总领事馆，
// 日/英版面向多国读者则改为「查你自己国家的公馆」。这几组的 URL/电话必然与中文不同，
// 所以跳过等值断言，改为打印差异供人工复核 —— 但结构断言照旧执行。
const CONTACT_LOCALIZED = {
  'guide-emergency': ['ja', 'en', 'ko'],  // 领事馆按读者国籍
  'guide-medical': ['ja', 'en', 'ko'],    // 福冈市官网指向各语言版
  'guide-antifraud': ['ja', 'en', 'ko'],  // 报案渠道与公馆按读者国籍
};

const errors = [];
const notes = [];
const stats = { translated: 0, pending: 0, blocks: 0 };

// ── 从一棵 blocks 树里收集所有 URL / 电话 ──
const TEL = /(0\d{2,4}-\d{2,4}-\d{3,4}|#\d{4}|\+\d{1,3}(?:-\d{1,8}){1,3})/g;
function harvest(blocks, urls, tels) {
  for (const b of blocks || []) {
    const texts = [];
    if (typeof b.text === 'string') texts.push(b.text);
    for (const it of b.items || []) {
      if (typeof it.text === 'string') texts.push(it.text);
      if (typeof it.title === 'string') texts.push(it.title);
      if (typeof it.desc === 'string') texts.push(it.desc);
      if (typeof it.url === 'string') urls.push(it.url);
    }
    for (const row of b.rows || []) for (const c of row) if (typeof c === 'string') texts.push(c);
    for (const h of b.headers || []) if (typeof h === 'string') texts.push(h);
    if (b.type === 'collapse') harvest(b.blocks, urls, tels);
    for (const t of texts) {
      for (const m of t.matchAll(TEL)) tels.push(m[1]);
      for (const m of t.matchAll(/https?:\/\/[^\s)）"'，、]+/g)) urls.push(m[0]);
    }
  }
}

// ── 结构逐位比对 ──
function compare(zh, tr, lang, id, trail) {
  if (zh.length !== tr.length) {
    errors.push(`${id}/${lang}${trail}: 块数不符 zh=${zh.length} ${lang}=${tr.length}`);
    return;
  }
  zh.forEach((zb, i) => {
    const tb = tr[i];
    if (!tb) { errors.push(`${id}/${lang}${trail}[${i}]: 译本缺块`); return; }
    if (zb.type !== tb.type) errors.push(`${id}/${lang}${trail}[${i}]: type 不符 ${zb.type} != ${tb.type}`);
    const zn = (zb.items || []).length, tn = (tb.items || []).length;
    if (zn !== tn) errors.push(`${id}/${lang}${trail}[${i}] ${zb.type}: items 条数 ${zn} != ${tn}`);
    if (zb.type === 'fee_table') {
      if ((zb.headers || []).length !== (tb.headers || []).length)
        errors.push(`${id}/${lang}${trail}[${i}]: 表头列数不符`);
      if ((zb.rows || []).length !== (tb.rows || []).length)
        errors.push(`${id}/${lang}${trail}[${i}]: 表格行数不符`);
      (zb.rows || []).forEach((r, ri) => {
        const tr2 = (tb.rows || [])[ri] || [];
        if (r.length !== tr2.length) errors.push(`${id}/${lang}${trail}[${i}] 第${ri}行列数不符`);
      });
    }
    if (zb.type === 'collapse') compare(zb.blocks || [], tb.blocks || [], lang, id, `${trail}[${i}].blocks`);
  });
}

for (const art of ARTICLES) {
  const entry = BODY[art._id];
  for (const lang of LANGS) {
    const tr = entry && entry[lang];
    if (!tr) { stats.pending++; continue; }
    stats.translated++;
    stats.blocks += tr.length;
    compare(art.blocks, tr, lang, art._id, '');

    // URL / 电话集合必须一致（本地化联络方式的组除外，改为打印差异）
    const zu = [], zt = [], tu = [], tt = [];
    harvest(art.blocks, zu, zt);
    harvest(tr, tu, tt);
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
}

console.log(`文章 ${ARTICLES.length} 篇 × ${LANGS.length} 语 = ${ARTICLES.length * LANGS.length} 组`);
console.log(`已翻译 ${stats.translated} 组（${stats.blocks} 块） · 待翻译 ${stats.pending} 组`);
if (notes.length) {
  console.log(`\n⚙ ${notes.length} 处「有意本地化」的联络方式差异（请人工核对号码真实性）：`);
  notes.forEach(n => console.log('  ' + n));
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} 处问题：`);
  errors.forEach(e => console.error('  ' + e));
  process.exit(1);
}
console.log('\n✓ 结构一致；URL / 电话除已声明的本地化外完全一致');
