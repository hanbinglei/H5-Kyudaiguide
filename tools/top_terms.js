#!/usr/bin/env node
/**
 * top_terms.js — 列出每篇文章的「特征词」（组关联词表用）
 *
 * 关联词表右侧必须是**语料里真实存在的词**。靠日语直觉猜会写成
 * 失業/風邪/部屋探し 这类站内根本不出现的词（实测已踩过）。
 * 这里按「文档频率低 + 篇内频次高」提取候选，照实际用词建表。
 *
 * 用法:
 *   node tools/top_terms.js                # 全部文章
 *   node tools/top_terms.js medical life   # 指定篇
 *   node tools/top_terms.js --only-title medical   # 只看标题/标签/小标题
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(f, n) { const s = { window: {} }; new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8')).runInNewContext(s); return s.window[n]; }
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};

function parts(a) {
  const title = [a.title || '', a.summary || '', (a.tags || []).join(' ')].join(' ');
  const nav = NAV[a._id];
  const navTxt = nav ? [...Object.values(nav.title || {}), ...Object.values(nav.summary || {})].join(' ') : '';
  const heads = [], bodyTxt = [];
  const walk = b => {
    if (!b) return;
    const isHead = b.type === 'heading' || b.type === 'subheading';
    if (b.text) (isHead ? heads : bodyTxt).push(b.text);
    (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) bodyTxt.push(it[k]); }));
    (b.headers || []).forEach(h => bodyTxt.push(h));
    (b.rows || []).forEach(r => bodyTxt.push(r.join(' ')));
    (b.blocks || []).forEach(walk);
  };
  (a.blocks || []).forEach(walk);
  for (const l of ['ja', 'en', 'ko']) {
    const tm = (BODY[a._id] || {})[l]; if (!tm) continue;
    for (const k in tm) { const v = tm[k]; if (!v) continue;
      if (v.text) bodyTxt.push(v.text);
      (v.items || []).forEach(it => ['text','title','desc'].forEach(x => { if (it[x]) bodyTxt.push(it[x]); }));
      (v.headers || []).forEach(h => bodyTxt.push(h));
      (v.rows || []).forEach(r => bodyTxt.push(r.join(' '))); }
  }
  return { title: title + ' ' + navTxt, head: heads.join(' '), body: bodyTxt.join(' ') };
}
const P = new Map(ARTICLES.map(a => [a._id, parts(a)]));

/** 提取 CJK n-gram（2~4 字）与拉丁词，返回 {term, df, tf} */
function grams(text, n) {
  const out = new Map();
  const cjk = text.match(/[\u4e00-\u9fff\u3040-\u30ff]{2,}/g) || [];
  for (const run of cjk) {
    for (let i = 0; i + n <= run.length; i++) {
      const g = run.slice(i, i + n);
      out.set(g, (out.get(g) || 0) + 1);
    }
  }
  return out;
}
// 全局 DF
const DF = new Map();
for (const a of ARTICLES) {
  const all = P.get(a._id).title + ' ' + P.get(a._id).head + ' ' + P.get(a._id).body;
  const seen = new Set();
  for (const n of [2, 3, 4]) for (const g of grams(all, n).keys()) seen.add(g);
  for (const g of seen) DF.set(g, (DF.get(g) || 0) + 1);
}

const args = process.argv.slice(2);
const onlyTitle = args.includes('--only-title');
const want = args.filter(x => !x.startsWith('--'));
const list = want.length ? ARTICLES.filter(a => want.some(w => a._id.includes(w))) : ARTICLES;

for (const a of list) {
  const p = P.get(a._id);
  const text = onlyTitle ? p.title : (p.title + ' ' + p.head + ' ' + p.head + ' ' + p.body);
  const cand = new Map();
  for (const n of [2, 3, 4]) {
    for (const [g, tf] of grams(p.title + ' ' + p.head + ' ' + p.body, n)) cand.set(g, tf);
  }
  const tf = new Map();
  for (const n of [2, 3, 4]) for (const [g, c] of grams(text, n)) tf.set(g, (tf.get(g) || 0) + c);
  const rows = [...tf.entries()]
    .filter(([g]) => DF.get(g) === 1)                        // 只在本篇出现 = 最具区分度
    .map(([g, c]) => [g, c])
    .sort((x, y) => y[1] - x[1] || x[0].length - y[0].length)
    .slice(0, 22);
  console.log('\n■ ' + a._id.replace('guide-', '') + '   （标题/标签：' + p.title.slice(0, 60) + '）');
  console.log('   ' + rows.map(([g, c]) => g + '(' + c + ')').join('  '));
}
