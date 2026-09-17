#!/usr/bin/env node
/**
 * merge_body_i18n.js — 把某一篇的三语正文译本合并进 guide/js/articles-body-i18n.js
 *
 * 用法: node tools/merge_body_i18n.js <articleId> <payload.json>
 *   payload.json = { ja: {blockId: {...}}, en: {...}, ko: {...} }
 *
 * 为什么用脚本而不是手工插入：本文件按区块 ID 索引、由机器生成，
 * 手工插入极易产生重复逗号 / 缩进漂移 / 段落错位。
 * 本脚本读回现有对象 → 覆盖该篇 → 用 JSON.stringify(obj,null,1) 整体重写，
 * 缩进与文件名保持一致（1 空格），并保留文件头的说明注释。
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const TARGET = path.join(ROOT, 'guide', 'js', 'articles-body-i18n.js');
const HEADER_END = '(function(){';
const FOOTER = '})();\n';

const [articleId, payloadPath] = process.argv.slice(2);
if (!articleId || !payloadPath) {
  console.error('usage: node tools/merge_body_i18n.js <articleId> <payload.json>');
  process.exit(2);
}

const src = fs.readFileSync(TARGET, 'utf8').replace(/\r\n/g, '\n');
const hi = src.indexOf(HEADER_END);
if (hi < 0) throw new Error('找不到文件头标记');
const header = src.slice(0, hi);

const sandbox = { window: {} };
new vm.Script(src).runInNewContext(sandbox);
const BODY = sandbox.window.ARTICLES_BODY_I18N || {};

const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));
// 默认整篇替换；传 --merge 时只覆盖 payload 里出现的块（补几块译文时用，
// 否则整篇替换会把该篇已有的几十条译文全删掉）
const MERGE = process.argv.includes('--merge');
if (MERGE) {
  BODY[articleId] = BODY[articleId] || {};
  for (const l of ['ja', 'en', 'ko', 'es']) {
    BODY[articleId][l] = Object.assign({}, BODY[articleId][l] || {}, payload[l] || {});
  }
} else {
  BODY[articleId] = payload;
}

const body = 'window.ARTICLES_BODY_I18N = ' + JSON.stringify(BODY, null, 1) + ';\n';
fs.writeFileSync(TARGET, header + HEADER_END + '\n' + body + FOOTER, 'utf8');

// 回读验证
const check = { window: {} };
new vm.Script(fs.readFileSync(TARGET, 'utf8')).runInNewContext(check);
const got = check.window.ARTICLES_BODY_I18N[articleId];
// 增量合并后条目数只会变多，所以验证的是「payload 里的块是否都在」而不是总数相等
// 只验证 payload 里**实际提供了**的语言 —— 译文可分批交付（先 ja+ko、再 en），
// 早先这里写死三种语言齐全，分批交付时会因 payload.en 不存在而崩（文件已写入但退出码 1）
const LANGS = ['ja', 'en', 'ko', 'es'].filter(l => payload[l] && typeof payload[l] === 'object');
const ok = got && LANGS.length > 0 &&
  LANGS.every(l => got[l] && Object.keys(payload[l]).every(k => got[l][k] !== undefined));
const total = l => (got && got[l] ? Object.keys(got[l]).length : 0);
const cnt = l => (payload[l] ? Object.keys(payload[l]).length : 0);
console.log(`merged ${articleId}${MERGE ? ' (merge)' : ''}: payload ja=${cnt('ja')} en=${cnt('en')} ko=${cnt('ko')}`
  + ` | 合并后该篇 ja=${total('ja')} en=${total('en')} ko=${total('ko')} | 回读验证=${ok ? 'OK' : '失败'}`);
process.exit(ok ? 0 : 1);
