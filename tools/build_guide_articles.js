#!/usr/bin/env node
/**
 * build_guide_articles.js — 从 Kyudaiguide 云端迁移备份生成 h5 的 data-articles.js
 *
 * 内容源（只读，不修改 Kyudaiguide）：
 *   Kyudaiguide/backup/2026-08-14/  —— 2026-08 内容大迁移的九批产物 + 云端快照
 *   · 每批目录只含该批动过的文章；某篇的「最终版」= 按批次顺序最后一次动它的产物
 *   · 批次顺序（见 HANDOFF_2026-08-15_content-migration.md）：
 *     A restructured → B enriched → C readable → D integrated → E dorms
 *     → F integrated2 → G shuttle → H transport2 → I batch3 → J batchJ
 *   · category / summary / isPinned 等元数据来自云端快照 articles.json
 *
 * 收录：12 篇主指南（cat 1–12）+ guide-antifraud（cat 13，置顶反诈）
 * 剔除：guide-ito（云端已隐藏）、hot-*（热题，h5 无此功能）、用户生成文档
 *
 * 断言：块数逐篇核对（与迁移交接文档一致，entry 以 batchJ 为准=74）；
 *       block 类型必须都在渲染器支持集内；分类 1–12 恰好各一篇。
 *
 * 用法：node tools/build_guide_articles.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const SRC = 'D:/微信小程序/Kyudaiguide/backup/2026-08-14';
const OUT = path.join(__dirname, '..', 'guide', 'js', 'data-articles.js');

// 各篇最终版所在批目录 + 期望块数（迁移交接文档 §一，entry 已被 batchJ 更新到 74）
const FINAL = {
  'guide-entry':     { dir: 'batchJ',      blocks: 74 },
  'guide-residence': { dir: 'integrated2', blocks: 64 },
  'guide-housing':   { dir: 'integrated2', blocks: 49 },
  'guide-bank':      { dir: 'batch3',      blocks: 29 },
  'guide-phone':     { dir: 'batch3',      blocks: 24 },
  'guide-academic':  { dir: 'batch3',      blocks: 52 },
  'guide-parttime':  { dir: 'readable',    blocks: 9  },
  'guide-medical':   { dir: 'readable',    blocks: 23 },
  'guide-transport': { dir: 'transport2',  blocks: 66 },
  'guide-life':      { dir: 'integrated2', blocks: 46 },
  'guide-shopping':  { dir: 'integrated2', blocks: 39 },
  'guide-emergency': { dir: 'integrated2', blocks: 28 },
};

// h5 渲染器（guide/js/render.js）支持的 block 类型
const SUPPORTED = new Set([
  'paragraph', 'heading', 'subheading', 'list', 'links', 'notice',
  'warning', 'quote', 'community', 'steps', 'fee_table', 'checklist', 'collapse',
]);

// ── MongoDB 扩展 JSON 归一化（$numberDouble / $numberInt / $date → 原生值）──
function normalize(v) {
  if (Array.isArray(v)) return v.map(normalize);
  if (v && typeof v === 'object') {
    const keys = Object.keys(v);
    if (keys.length === 1) {
      if (keys[0] === '$numberDouble' || keys[0] === '$numberInt' || keys[0] === '$numberLong') return Number(v[keys[0]]);
      if (keys[0] === '$date') {
        const inner = v.$date;
        const ms = typeof inner === 'object' ? Number(inner.$numberLong) : Number(new Date(inner));
        return new Date(ms).toISOString().slice(0, 10);
      }
    }
    const o = {};
    for (const k of keys) o[k] = normalize(v[k]);
    return o;
  }
  return v;
}

function collectTypes(blocks, bag) {
  for (const b of blocks || []) {
    bag.add(b.type);
    if (b.type === 'collapse') collectTypes(b.blocks, bag);
  }
}

function main() {
  // 元数据快照
  const snap = normalize(JSON.parse(fs.readFileSync(path.join(SRC, 'articles.json'), 'utf8')));
  const metaById = {};
  for (const a of snap) metaById[a._id] = a;

  const out = [];
  const catSeen = {};

  // 12 篇主指南：blocks 取最终批，元数据取快照
  for (const [id, spec] of Object.entries(FINAL)) {
    const raw = JSON.parse(fs.readFileSync(path.join(SRC, spec.dir, id + '.json'), 'utf8'));
    const doc = normalize(Array.isArray(raw) ? raw[0] : raw);
    const meta = metaById[id];
    if (!meta) throw new Error(`快照缺少元数据: ${id}`);
    const blocks = doc.blocks || [];
    if (blocks.length !== spec.blocks) {
      throw new Error(`${id} 块数不符: 期望 ${spec.blocks}, 实际 ${blocks.length}（${spec.dir}）`);
    }
    const types = new Set(); collectTypes(blocks, types);
    for (const t of types) if (!SUPPORTED.has(t)) throw new Error(`${id} 含渲染器不支持的类型: ${t}`);
    const cat = String(meta.category);
    if (catSeen[cat]) throw new Error(`分类 ${cat} 出现两篇: ${catSeen[cat]} / ${id}`);
    catSeen[cat] = id;
    out.push({
      _id: id,
      title: doc.title || meta.title,
      category: cat,
      summary: meta.summary || '',
      tags: meta.tags || [],
      author: '管理员',
      updatedAt: '2026-08-15',   // 内容大迁移完成日（entry 的 batchJ 同期）
      blocks,
    });
  }
  for (let c = 1; c <= 12; c++) {
    if (!catSeen[String(c)]) throw new Error(`分类 ${c} 缺文章`);
  }

  // 置顶反诈（cat 13，无批次动过 → 直接取快照全文）
  const anti = metaById['guide-antifraud'];
  if (!anti || !Array.isArray(anti.blocks) || !anti.blocks.length) throw new Error('快照缺 guide-antifraud 正文');
  const antiTypes = new Set(); collectTypes(anti.blocks, antiTypes);
  for (const t of antiTypes) if (!SUPPORTED.has(t)) throw new Error(`guide-antifraud 不支持类型: ${t}`);
  out.push({
    _id: 'guide-antifraud',
    title: anti.title,
    category: '13',
    summary: anti.summary || '',
    tags: anti.tags || [],
    isPinned: true,
    author: '管理员',
    updatedAt: '2026-08-15',
    blocks: anti.blocks,
  });

  // 按分类排序（1–12 + 13）
  out.sort((a, b) => Number(a.category) - Number(b.category));

  const total = out.reduce((s, a) => s + a.blocks.length, 0);
  const header = `// data-articles.js — 12 篇主指南（cat 1–12）+ 置顶反诈（cat 13）
// 由 tools/build_guide_articles.js 生成，勿手改。
// 源：Kyudaiguide 2026-08 内容大迁移产物（backup/2026-08-14，九批+batchJ 最终态）
// 共 ${out.length} 篇 · ${total} 块 · 生成于 ${new Date().toISOString().slice(0, 10)}
`;
  const body = 'window.ARTICLES = ' + JSON.stringify(out, null, 1) + ';\n';
  fs.writeFileSync(OUT, header + body, 'utf8');
  console.log(`OK: ${out.length} 篇 / ${total} 块 → ${OUT}`);
  out.forEach(a => console.log(`  cat${a.category.padStart(2)} ${a._id.padEnd(16)} ${a.blocks.length} 块  ${a.title}`));
}

main();
