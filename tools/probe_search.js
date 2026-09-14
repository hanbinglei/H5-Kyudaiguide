#!/usr/bin/env node
/**
 * probe_search.js — 用真实查询探测现有搜索的失败面（不评分，只看「找得到 / 找不到 / 排得对」）
 *
 * 用法：node tools/probe_search.js
 *
 * 关注三类：
 *   ① 模糊：漏字、多字、错字（在留カド / 在留カード / garbge）
 *   ② 关联：搜的词正文里没有，但语义相关（签证 → 在留手续、打工 → 资格外活动）
 *   ③ 零结果：完全找不到
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const win = { console };
function load(f) {
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide/js', f), 'utf8')).runInNewContext(win);
}
load('data-articles.js');
load('articles-i18n.js');
load('articles-body-i18n.js');
load('search.js');

const S = win.GuideSearch;
S.build(win.ARTICLES);

const CASES = [
  // ── 模糊：漏字 / 错字 / 少打字 ──
  ['在留カド', '在留卡相关（漏了长音符）'],
  ['在留カード', '在留カード（正确写法）'],
  ['在留卡', '在留卡（中文）'],
  ['garbge', 'garbage 打错'],
  ['garbage', 'garbage 正确'],
  ['ススマ', 'Suica/スマホ 打错'],
  ['しまほ', 'スマホ 平假名写法'],
  ['しんがく', '進学 平假名'],
  ['学割証', '学割 相关'],
  ['じてんしゃ', '自転車 平假名'],
  ['銀行口座', '开户'],
  ['こうざ', '口座 平假名'],
  ['アルバイト', '打工（日文）'],
  ['あるばいと', 'アルバイト 平假名'],
  // ── 关联：正文/标题里未必有这个词 ──
  ['签证', '→ 在留手续（正文用「在留資格」）'],
  ['生病', '→ 医疗/保险'],
  ['发烧', '→ 医疗'],
  ['缺钱', '→ 奖学金/打工'],
  ['被偷', '→ 紧急/警察'],
  ['搬家', '→ 住所变更/邮局转送'],
  ['打工超时', '→ 资格外活动许可'],
  ['垃圾分类', '→ 生活'],
  ['手机没信号', '→ 手机/网络'],
  ['汇率', '→ 换汇诈骗/汇款'],
  // ── 零结果候选 ──
  ['网络', '基础词'],
  ['電車', '交通'],
  ['机场', '交通'],
  ['住む', '居住'],
];

const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n);
for (const [q, note] of CASES) {
  let r = [];
  try { r = S.query(q, { lang: 'zh', limit: 3 }); } catch (e) { r = []; }
  const top = r.length ? r.map(x => `${x.id.replace('guide-', '')}(${x.score})`).join(' ') : '— 零结果';
  console.log(`${pad(q, 12)} ${pad(r.length ? String(r.length) : '0', 3)} ${pad(top, 58)} ${note}`);
}
