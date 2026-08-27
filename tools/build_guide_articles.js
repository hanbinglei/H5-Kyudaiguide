#!/usr/bin/env node
/**
 * build_guide_articles.js — 从 content/ 构建 guide/js/data-articles.js
 *
 * content/ 是内容的**唯一真源**，就在本仓库里 —— 任何人 clone 之后都能改、能重建。
 * （此前这里读的是 Kyudaiguide 小程序的 backup 目录：不在本仓库、且被对方 gitignore，
 *   等于内容处于「只读且不可再生」状态，一条 URL 写错都改不动。旧版留在
 *   build_guide_articles.js.old 备查。）
 *
 * 校验（任何一条不过就不产出，避免坏内容进入站点）：
 *   · 每个区块必须有唯一 id，且 type 在渲染器支持集内
 *   · fee_table 每行列数须与表头一致
 *   · 分类 1–12 恰好各一篇；置顶篇至多一篇
 *   · 交叉引用 见【篇名】 必须能解析到真实文章
 *
 * 用法: node tools/build_guide_articles.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'content');
const OUT = path.join(ROOT, 'guide', 'js', 'data-articles.js');

// 渲染器 render.js 支持的区块类型 —— 加新类型要先改渲染器
const TYPES = new Set(['paragraph', 'heading', 'subheading', 'list', 'links', 'notice',
  'warning', 'steps', 'fee_table', 'checklist', 'collapse', 'quote']);

const errors = [];
const ids = new Set();

function checkBlocks(blocks, aid, trail) {
  blocks.forEach((b, i) => {
    const at = `${aid}${trail}[${i}]`;
    if (!b.id) errors.push(`${at}: 缺 id`);
    else if (ids.has(aid + '/' + b.id)) errors.push(`${at}: id 重复 ${b.id}`);
    else ids.add(aid + '/' + b.id);
    if (!TYPES.has(b.type)) errors.push(`${at}: 未知区块类型 "${b.type}"（渲染器不支持）`);
    if (b.type === 'fee_table') {
      const n = (b.headers || []).length;
      if (!n) errors.push(`${at}: fee_table 缺表头`);
      (b.rows || []).forEach((r, ri) => {
        if (r.length !== n) errors.push(`${at}: fee_table 第 ${ri} 行 ${r.length} 列，表头 ${n} 列`);
      });
    }
    if (b.type === 'collapse') checkBlocks(b.blocks || [], aid, `${trail}[${i}].blocks`);
  });
}

function main() {
  const index = JSON.parse(fs.readFileSync(path.join(SRC, 'index.json'), 'utf8'));
  const arts = index.articles.map(e => {
    const f = path.join(SRC, path.basename(e.file));
    if (!fs.existsSync(f)) { errors.push(`index.json 登记了 ${e.file}，但文件不存在`); return null; }
    return JSON.parse(fs.readFileSync(f, 'utf8'));
  }).filter(Boolean);

  arts.forEach(a => checkBlocks(a.blocks || [], a._id, ''));

  // 分类覆盖
  const byCat = {};
  arts.forEach(a => { (byCat[a.category] = byCat[a.category] || []).push(a._id); });
  for (let c = 1; c <= 12; c++) {
    const n = (byCat[String(c)] || []).length;
    if (n !== 1) errors.push(`分类 ${c} 有 ${n} 篇（应恰好 1 篇）：${(byCat[String(c)] || []).join(',') || '无'}`);
  }
  /* 置顶（必读）可以多于一篇，但顺序必须是有人做过的决定 ——
     所以每篇都要有 pinOrder 且互不相同。缺了或撞了就只能按数组顺序或
     updatedAt 排，那等于「谁最后被编辑谁排第一」：去改一个错别字就会
     把首页第一张卡换掉，而没有任何人决定过这件事。 */
  const pinned = arts.filter(a => a.isPinned);
  const seenOrder = new Map();
  pinned.forEach(a => {
    if (typeof a.pinOrder !== 'number')
      errors.push(`${a._id}: isPinned 为真但没写 pinOrder（小的排在前面）`);
    else if (seenOrder.has(a.pinOrder))
      errors.push(`${a._id} 与 ${seenOrder.get(a.pinOrder)} 的 pinOrder 都是 ${a.pinOrder}，分不出先后`);
    else seenOrder.set(a.pinOrder, a._id);
  });

  // 交叉引用可解析性
  const titles = arts.map(a => a.title);
  const refRe = /(?:见|参照|See|참조)\s*【([^】]+)】/g;
  arts.forEach(a => {
    const acc = [];
    const walk = b => {
      if (typeof b.text === 'string') acc.push(b.text);
      (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (typeof it[k] === 'string') acc.push(it[k]); }));
      (b.blocks || []).forEach(walk);
    };
    (a.blocks || []).forEach(walk);
    acc.join('\n').replace(refRe, (_, name) => {
      const key = String(name).split('·')[0].trim();
      if (!titles.some(t => t.includes(key) || key.includes(t)))
        errors.push(`${a._id}: 交叉引用「${key}」找不到对应文章`);
      return '';
    });
  });

  if (errors.length) {
    console.error(`✗ ${errors.length} 处问题，未产出：`);
    errors.forEach(e => console.error('  ' + e));
    process.exit(1);
  }

  const total = arts.reduce((s, a) => s + (a.blocks || []).length, 0);
  const head = `// data-articles.js — 12 篇主指南（cat 1–12）+ 置顶反诈（cat 13）
// 由 tools/build_guide_articles.js 从 content/ 生成，勿手改。
// **要改内容请改 content/<article>.json**，然后重跑构建。
// 共 ${arts.length} 篇 · ${total} 块
//
// ⚠️ 这里不写生成日期。CI 的做法是「重跑构建 → git diff 必须为空」，
//    用来抓「改了 content/ 却忘了重跑」。而日期戳会让产物每天都不一样，
//    于是提交日之后的任何一次 push 都会红 —— 红的原因还跟内容毫无关系。
//    产物必须是输入的纯函数。想知道什么时候生成的，看 git log。
(function(){
window.ARTICLES = `;
  fs.writeFileSync(OUT, head + JSON.stringify(arts, null, 1) + ';\n})();\n', 'utf8');
  console.log(`✓ ${arts.length} 篇 / ${total} 块 → guide/js/data-articles.js`);
}
main();
