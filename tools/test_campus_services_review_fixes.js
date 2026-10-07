'use strict';
/** 五语四项回归：按渲染后的原章节边界和明确官方条件检查，不能只比来源包与生成物。 */
const fs = require('fs'), vm = require('vm');
const article = require('../content/guide-life.json');
const accounts = require('../content/fragments/campus-services-accounts-20261007');
const living = require('../content/fragments/campus-services-living-20261007');
const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(require.resolve('../guide/js/articles-body-i18n.js'), 'utf8'), ctx);
const tr = ctx.window.ARTICLES_BODY_I18N;
let passed = 0, failed = 0;
/** 逐项报告而非第一项即退出，首次红灯必须能看到所有缺失条件。 */
function check(value, label) { if (value) passed++; else { failed++; console.error('FAIL ' + label); } }
let parent = ''; for (const b of article.blocks) { if (b.type === 'heading') parent = b.id; if (b.id === '2b45db') check(parent === '3b5a1b', '活动小节仍属于校园生活，不被体育章节收走'); }
for (const lang of ['zh', 'ja', 'en', 'ko', 'es']) {
  const wifi = lang === 'zh' ? require('../content/guide-newcomer.json').blocks.find(b => b.id === 'w3c4d5') : tr['guide-newcomer'][lang].w3c4d5;
  check(wifi.text === accounts.corrections.temporaryWifiNotice[lang], lang + '临时Wi-Fi提醒取自同一核对源');
  const card = accounts.sections.find(s => s.key === 'student-id').blocks[lang].find(b => b.id === 'studentid2');
  check(card.items.length === 4, lang + '有领卡后的第四步');
  const sport = living.sections.find(s => s.key === 'sports-use').blocks[lang].find(b => b.id === 'm7sport2').items[0].text;
  check(sport.includes('09:00') && sport.includes('16:00'), lang + '保留体育使用时段');
  const actual = lang === 'zh' ? require('../content/guide-academic.json').blocks.find(b => b.id === 'studentid2') : tr['guide-academic'][lang].studentid2;
  check(actual.items.length === 4, lang + '实际文章不是旧三步副本');
}
console.log('H5审阅四项回归：' + passed + ' 通过 / ' + failed + ' 失败');
if (failed) process.exitCode = 1;
