#!/usr/bin/env node
/**
 * verify_cunli_nameof.js — 离线复现村历的四语输出，全量断言
 *
 * 复现 app.js 的 nameOf() 与 i18n.js 的 cunliNote()/cunliPlace()，
 * 对**全部条目 × 四种语言**断言「en/ko 不再漏出日文/中文」。
 *
 * 为什么离线做：浏览器是用户自己的，不能长期占用；
 * 而这三处的实现都只是「查表 + 回落」，离线能完整覆盖。
 * ⚠️ 若 app.js 里改了 nameOf 的回落规则，这里要同步改 —— 两边必须看着同一份规则。
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function run(f, expr) {
  const s = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', f), 'utf8') + '\n;window.__R=' + expr + ';').runInNewContext(s);
  return s.window.__R;
}
const CUNLI = run('data-cunli.js', 'CUNLI_DATA');
const G = run('i18n.js', 'window.GuideI18N');

/** 与 app.js nameOf() 保持一致 */
function nameOf(it, lang) {
  const zh = it.zh || it.title || '';
  const ja = it.title || '';
  if (lang === 'zh') return { name: zh, sub: ja && ja !== zh ? ja : '' };
  if (lang === 'ja') return { name: ja || zh, sub: '' };
  const loc = G.cunliName(ja, lang);
  return loc ? { name: loc, sub: ja } : { name: ja || zh, sub: '' };
}
const KANA = /[\u3040-\u30ff]/;
const HAN = /[\u4e00-\u9fff]/;
// 「日文残留」判定：假名 => 一定是日文；汉字单独不判（中文/日文都可能，
//   例如 ESP 加入期限 里就有汉字，但那是专名，允许保留）
const JA = s => KANA.test(String(s));

let fail = 0;
const items = CUNLI.items || [];
for (const it of items) {
  for (const L of ['en', 'ko']) {
    const n = nameOf(it, L);
    if (JA(n.name)) { console.log(`✗ [${it.id}] ${L} 活动名仍是日文: ${n.name}`); fail++; }
    if (it.note) {
      const nt = G.cunliNote(it, L);
      if (nt === it.note) { console.log(`✗ [${it.id}] ${L} 说明未翻译（与中文原文相同）`); fail++; }
      if (!nt) { console.log(`✗ [${it.id}] ${L} 说明为空`); fail++; }
    }
    if (it.place) {
      const pt = G.cunliPlace(it, L);
      if (!pt) { console.log(`✗ [${it.id}] ${L} 地点为空`); fail++; }
      else if (pt.indexOf(it.place.zh) === 0 && L !== 'zh') {
        // 英文/韩文时地点应以译名开头，而不是中文原文
        if (pt.startsWith(it.place.zh) && HAN.test(pt.slice(0, 6))) {
          console.log(`✗ [${it.id}] ${L} 地点回落到中文: ${pt}`); fail++;
        }
      }
    }
  }
  // 中文与日文必须都有名字
  if (!it.zh) { console.log(`✗ [${it.id}] 缺 zh`); fail++; }
  if (!it.title) { console.log(`✗ [${it.id}] 缺日文原名`); fail++; }
}
console.log(`\n覆盖：${items.length} 条 × 4 语（活动名 / 说明 / 地点）`);
console.log(fail ? `✗ ${fail} 处不合格` : '✓ 全部合格：en/ko 不再漏出日文活动名或中文说明');
process.exit(fail ? 1 : 0);
