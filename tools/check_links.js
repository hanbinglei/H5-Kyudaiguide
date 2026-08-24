#!/usr/bin/env node
/**
 * check_links.js — 外链可达性核查
 *
 * 指南里 80 多条外链全部指向官方页面。链接腐烂（改版、迁移、下线）是内容失真里
 * 最常见、也最容易自动发现的一类 —— 值得每周跑一次。
 *
 * 注意：非 200 不等于链接坏了。政府与大学站点常有反爬（403）、
 * 或对 HEAD 不友好（405）。所以这里 HEAD 失败会退回 GET，并把
 * 403/405 单独归为「需人工确认」，不与 404 混为一谈。
 *
 * 用法: node tools/check_links.js [--json]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

function loadArticles() {
  const p = path.join(__dirname, '..', 'guide', 'js', 'data-articles.js');
  const s = fs.readFileSync(p, 'utf8');
  return JSON.parse(s.slice(s.indexOf('['), s.lastIndexOf(']') + 1));
}

// 收集 URL → 出现在哪几篇
function collect(articles) {
  const map = new Map();
  const add = (u, id) => { if (!map.has(u)) map.set(u, new Set()); map.get(u).add(id); };
  const walk = (b, id) => {
    (b.items || []).forEach(it => { if (it.url) add(it.url, id); });
    const texts = [];
    if (typeof b.text === 'string') texts.push(b.text);
    (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (typeof it[k] === 'string') texts.push(it[k]); }));
    (b.rows || []).forEach(r => r.forEach(c => { if (typeof c === 'string') texts.push(c); }));
    texts.forEach(t => (t.match(/https?:\/\/[^\s)）"'，、]+/g) || []).forEach(u => add(u, id)));
    (b.blocks || []).forEach(ib => walk(ib, id));
  };
  articles.forEach(a => (a.blocks || []).forEach(b => walk(b, a._id)));
  return map;
}

async function probe(url) {
  const opts = { redirect: 'follow', headers: { 'User-Agent': UA, 'Accept-Language': 'ja,en;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' } };
  for (const method of ['HEAD', 'GET']) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 25000);
      const res = await fetch(url, { ...opts, method, signal: ctl.signal });
      clearTimeout(timer);
      // HEAD 被拒时一律回退 GET。大学与政府站点里 400/403/405/501 常常只是
      // 「不接受 HEAD」，并非链接失效 —— 不回退就会把好链接误报成坏链接。
      if (method === 'HEAD' && [400, 401, 403, 405, 501].includes(res.status)) continue;
      return { status: res.status, finalUrl: res.url };
    } catch (e) {
      if (method === 'GET') return { status: 0, error: String(e.message || e).slice(0, 60) };
    }
  }
  return { status: 0, error: 'unreachable' };
}

(async () => {
  const arts = loadArticles();
  const map = collect(arts);
  const urls = [...map.keys()].sort();
  const rows = [];
  const CONC = 6;
  let i = 0;
  await Promise.all(Array.from({ length: CONC }, async () => {
    while (i < urls.length) {
      const u = urls[i++];
      const r = await probe(u);
      rows.push({ url: u, ...r, articles: [...map.get(u)] });
    }
  }));
  rows.sort((a, b) => a.url.localeCompare(b.url));

  const ok = rows.filter(r => r.status >= 200 && r.status < 300);
  const redirected = ok.filter(r => r.finalUrl && r.finalUrl.replace(/\/$/, '') !== r.url.replace(/\/$/, ''));
  const manual = rows.filter(r => [401, 403, 405, 429].includes(r.status));
  const dead = rows.filter(r => r.status === 404 || r.status === 410);
  const other = rows.filter(r => !ok.includes(r) && !manual.includes(r) && !dead.includes(r));

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify({ checkedAt: new Date().toISOString(), rows }, null, 1));
    return;
  }
  console.log(`外链 ${rows.length} 条 · 检查于 ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`);
  console.log(`  ✅ 可达 ${ok.length}   ⚠️ 需人工确认 ${manual.length}   ❌ 疑似失效 ${dead.length}   ❔ 其他 ${other.length}`);
  const show = (title, list, withFinal) => {
    if (!list.length) return;
    console.log('\n' + title);
    list.forEach(r => {
      console.log(`  [${r.status || r.error}] ${r.url}`);
      if (withFinal && r.finalUrl) console.log(`        → ${r.finalUrl}`);
      console.log(`        出现于: ${r.articles.join(', ')}`);
    });
  };
  show('❌ 疑似失效（需立刻处理）:', dead);
  show('❔ 无法连接 / 异常状态:', other);
  show('⚠️ 需人工确认（多为反爬或不支持 HEAD，未必是坏链）:', manual);
  show('↪️ 发生跳转（原链接仍可用，但可考虑改为最终地址）:', redirected, true);

  process.exitCode = dead.length ? 1 : 0;
})();
