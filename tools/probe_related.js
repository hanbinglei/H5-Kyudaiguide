#!/usr/bin/env node
/**
 * probe_related.js — 为「关联搜索」挑用例：确认候选词在目标文章里**确实不出现**
 *
 * 关联搜索的定义：查询词的字面不出现在正文，但语义相关。
 * 如果词本来就出现，那测的是普通匹配，不能算关联用例。
 *
 * 用法：node tools/probe_related.js
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function loadWin(file, name) {
  const sandbox = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8')).runInNewContext(sandbox);
  return sandbox.window[name];
}
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};

const map = new Map(ARTICLES.map(a => [a._id, a]));
function hay(id, langs) {
  const a = map.get(id); if (!a) return '';
  const acc = [a.title || '', a.summary || '', (a.tags || []).join(' ')];
  const nav = NAV[id];
  if (nav) acc.push(...Object.values(nav.title || {}), ...Object.values(nav.summary || {}));
  const walk = b => {
    if (b.text) acc.push(b.text);
    (b.items || []).forEach(it => ['text', 'title', 'desc'].forEach(k => { if (it[k]) acc.push(it[k]); }));
    (b.headers || []).forEach(h => acc.push(h));
    (b.rows || []).forEach(r => acc.push(r.join(' ')));
    (b.blocks || []).forEach(walk);
  };
  (a.blocks || []).forEach(walk);
  const im = BODY[id] || {};
  for (const l of langs) {
    const tm = im[l]; if (!tm) continue;
    for (const k in tm) {
      const v = tm[k]; if (!v) continue;
      if (v.text) acc.push(v.text);
      (v.items || []).forEach(it => ['text', 'title', 'desc'].forEach(x => { if (it[x]) acc.push(it[x]); }));
      (v.headers || []).forEach(h => acc.push(h));
      (v.rows || []).forEach(r => acc.push(r.join(' ')));
    }
  }
  return acc.join(' ').toLowerCase();
}

// 候选：[查询词, 期望文章, 说明]
const CAND = [
  ['生病', 'guide-medical', '口语·症状'],
  ['吃药', 'guide-medical', '口语·行为'],
  ['找房子', 'guide-housing', '口语·行为'],
  ['租房', 'guide-housing', '中文常说'],
  ['搬家', 'guide-housing', '关联行为'],
  ['火车', 'guide-transport', '中文常说'],
  ['高铁', 'guide-transport', '中文常说'],
  ['被骗', 'guide-antifraud', '口语·受害'],
  ['骗子', 'guide-antifraud', '口语·施害者'],
  ['电话卡', 'guide-phone', '口语说法'],
  ['没信号', 'guide-phone', '口语·症状'],
  ['网速慢', 'guide-phone', '口语·症状'],
  ['失业', 'guide-parttime', '关联'],
  ['裁员', 'guide-parttime', '关联'],
  ['火灾', 'guide-emergency', '灾害'],
  ['台风', 'guide-emergency', '灾害'],
  ['小偷', 'guide-life', '治安'],
  ['丢东西', 'guide-life', '口语'],
  ['开证明', 'guide-firstmonth', '口语·手续'],
  ['报税', 'guide-parttime', '制度俗称'],
  ['养老金', 'guide-residence', '中文常说'],
  ['年金', 'guide-residence', '日文制度名'],
  ['押金', 'guide-housing', '租房术语'],
  ['礼金', 'guide-housing', '租房术语'],
  ['水电费', 'guide-life', '生活术语'],
  ['宽带', 'guide-phone', '口语'],
  ['感冒', 'guide-medical', '症状'],
  ['打工时间限制', 'guide-parttime', '制度问法'],
  ['换钱', 'guide-bank', '口语'],
  ['汇款回国', 'guide-bank', '口语'],
];

const LANGS = ['zh', 'ja', 'en', 'ko'];
console.log('查询词            目标文章            字面是否已出现   结论');
console.log('─'.repeat(78));
const ok = [];
for (const [q, id] of CAND) {
  const h = hay(id, LANGS);
  const hit = h.includes(q.toLowerCase());
  const verdict = hit ? '✗ 已出现（属普通匹配）' : '✓ 真关联用例';
  if (!hit) ok.push([q, id]);
  console.log('%-16s %-18s %-14s %s', q, id, hit ? '是' : '否', verdict);
}
console.log('\n可用作关联用例（%d 个）:', ok.length);
console.log(JSON.stringify(ok));
