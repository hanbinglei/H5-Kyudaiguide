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
BODY[articleId] = payload;

const body = 'window.ARTICLES_BODY_I18N = ' + JSON.stringify(BODY, null, 1) + ';\n';
fs.writeFileSync(TARGET, header + HEADER_END + '\n' + body + FOOTER, 'utf8');

// 回读验证
const check = { window: {} };
new vm.Script(fs.readFileSync(TARGET, 'utf8')).runInNewContext(check);
const got = check.window.ARTICLES_BODY_I18N[articleId];
const ok = got && ['ja', 'en', 'ko'].every(l => got[l] && Object.keys(got[l]).length === Object.keys(payload[l]).length);
console.log(`merged ${articleId}: ja=${Object.keys(payload.ja).length} en=${Object.keys(payload.en).length} ko=${Object.keys(payload.ko).length} 回读验证=${ok ? 'OK' : '失败'}`);
process.exit(ok ? 0 : 1);
