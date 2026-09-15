#!/usr/bin/env node
/**
 * audit_sources.js — 盘点所有文章里的外部链接（为「文末附原始链接」做准备）
 *
 * 回答四个问题：
 *   ① 每篇有多少条外部链接、去重后多少
 *   ② 域名分布（哪些是官方源、哪些是工具/地图等）
 *   ③ 各篇是否已有统一的「参考信息源」小节
 *   ④ 哪些链接只藏在正文里、文末没有汇总
 *
 * 用法：node tools/audit_sources.js [--json]
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(ROOT, 'guide', 'js', 'data-articles.js'), 'utf8'), ctx);
const ARTICLES = ctx.window.ARTICLES;

// 内部锚点（#article/... 之类）不算外部出处
const isExternal = (u) => /^https?:\/\//i.test(u);
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return '(解析失败)'; } };

const rows = [];
const allUrls = [];
for (const a of ARTICLES) {
  const seen = new Map();          // url → 出现位置
  let srcHeading = null;
  a.blocks.forEach((b, i) => {
    const s = JSON.stringify(b);
    const ms = s.match(/https?:\/\/[^"\\\s)]+/g) || [];
    for (const raw of ms) {
      const url = raw.replace(/\\(.)/g, '$1');
      if (!isExternal(url)) continue;
      if (!seen.has(url)) seen.set(url, []);
      seen.get(url).push(b.type + '#' + i);
    }
    if (b.type === 'heading' && /参考|出典|来源|情報源|source/i.test(b.text || '')) {
      srcHeading = { idx: i, text: b.text };
    }
  });
  const urls = [...seen.keys()];
  urls.forEach((u) => allUrls.push({ art: a._id, url: u }));
  rows.push({
    id: a._id,
    blocks: a.blocks.length,
    nUrls: urls.length,
    nDup: a.blocks.length ? [...seen.values()].reduce((s, v) => s + v.length, 0) : 0,
    srcHeading,
    urls,
    lastBlockIdx: a.blocks.length - 1,
    // 文末最后一节是不是出处小节
    tailIsSource: !!(srcHeading && srcHeading.idx >= a.blocks.length - 6),
  });
}

const uniq = [...new Set(allUrls.map((x) => x.url))];
const dom = {};
uniq.forEach((u) => { const h = hostOf(u); dom[h] = (dom[h] || 0) + 1; });

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ rows, domains: dom }, null, 1));
  process.exit(0);
}

console.log('文章数 %d · 外部链接出现次数 %d · 去重 %d\n', ARTICLES.length, allUrls.length, uniq.length);
console.log('=== 每篇情况 ===');
console.log('  ' + 'id'.padEnd(20) + '块数'.padEnd(6) + '链接(去重)'.padEnd(11) + '已有出典节');
for (const r of rows) {
  console.log('  ' + r.id.padEnd(20) + String(r.blocks).padEnd(6) + String(r.nUrls).padEnd(11)
    + (r.srcHeading ? '有：' + r.srcHeading.text + '(第' + r.srcHeading.idx + '块)' : '—'));
}
console.log('\n=== 域名分布（去重后）===');
Object.entries(dom).sort((a, b) => b[1] - a[1]).forEach(([d, n]) => console.log('  ' + String(n).padStart(3) + '  ' + d));

console.log('\n=== 已有出典节的篇数 ===');
const withSrc = rows.filter((r) => r.srcHeading).length;
console.log('  ' + withSrc + ' / ' + rows.length + ' 篇');
console.log('\n=== 文末 6 块内就有出典节的 ===');
rows.filter((r) => r.tailIsSource).forEach((r) => console.log('  ' + r.id));
