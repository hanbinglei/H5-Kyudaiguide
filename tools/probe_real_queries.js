#!/usr/bin/env node
/**
 * probe_real_queries.js — 四语「真实语序查询」回归
 *
 * 为什么单独有这个工具：bench_search.js 的 61 条查询是**我为自己的预期设计的**，
 * 全部是 lang=zh，且只测「目标排第几」——
 *   · 测不出召回失败（查询返回 0 篇时，它只记「没命中」，不区分原因）
 *   · 测不出精度差（返回 17 篇 = 全站，照样算「命中」）
 *   · 测不出其他三种语言（我的基准是单语的，这是方法论错误）
 *
 * 本工具补上这两条，且四语各跑一遍：
 *   召回 recall — 期望文章必须在结果里
 *   精度 prec   — 结果条数不得超上限（用户搜一个具体问题，不该拿到半个站）
 *
 * 查询用**真实语序**：带助词、口语、疑问句，而不是关键词堆叠。
 * 用户就是这么打字的 —— 「打工 超时」能搜到、「打工超时」搜不到，
 * 那不是用户的问题，是系统的问题。
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

function loadWin(file, name) {
  const sb = { window: {} };
  new vm.Script(fs.readFileSync(path.join(ROOT, 'guide', 'js', file), 'utf8')).runInNewContext(sb);
  return sb.window[name];
}
const ARTICLES = loadWin('data-articles.js', 'ARTICLES');
const NAV = loadWin('articles-i18n.js', 'ARTICLES_I18N') || {};
const BODY = loadWin('articles-body-i18n.js', 'ARTICLES_BODY_I18N') || {};
const S = loadWin('search.js', 'GuideSearch');
S.build(ARTICLES, { nav: NAV, body: BODY, langs: ['zh', 'ja', 'en', 'ko'] });

// lang, 真实语序查询, 期望文章, 结果条数上限
const CASES = [
  ['zh', '怎么开银行账户',        'guide-bank',      5],
  ['zh', '银行开户要带什么',      'guide-bank',      5],
  ['zh', '打工超时了怎么办',      'guide-parttime',  5],
  ['zh', '感冒了去哪看',          'guide-medical',   5],
  ['zh', '生病了怎么办',          'guide-medical',   5],
  ['zh', '手机丢了',              'guide-life',      6],
  ['zh', '房租一个月多少钱',      'guide-housing',   6],
  ['zh', '垃圾分类怎么分',        'guide-life',      5],
  ['zh', '便宜买新干线票',        'guide-transport', 6],
  ['ja', '銀行口座の作り方',      'guide-bank',      5],
  ['ja', 'アルバイトの時間制限は','guide-parttime',  5],
  ['ja', '風邪をひいたら',        'guide-medical',   5],
  ['ja', '落とし物をしたら',      'guide-life',      6],
  ['ja', '奨学金をもらうには',    'guide-scholarship', 5],
  ['en', 'how to open a bank account', 'guide-bank', 5],
  ['en', 'what to do when sick',       'guide-medical', 5],
  ['en', 'part time job hours',        'guide-parttime', 5],
  ['en', 'lost my phone',              'guide-life',   6],
  ['en', 'cheap shinkansen ticket',    'guide-transport', 6],
  ['ko', '은행 계좌 개설 방법',   'guide-bank',      5],
  ['ko', '아플 때 어떻게',        'guide-medical',   5],
  ['ko', '아르바이트 시간 제한',  'guide-parttime',  5],
  ['ko', '휴대폰 잃어버렸을 때',  'guide-life',      6],
  ['ko', '장학금 신청',           'guide-scholarship', 5],
];

const pad = (s, n2) => { s = String(s); let w = 0; for (const ch of s) w += (ch.charCodeAt(0) > 0x1100 ? 2 : 1);
  return s + ' '.repeat(Math.max(0, n2 - w)); };
// 判据说明（2026-09 改）：
//   旧判据是「结果条数 ≤ N」，那个 N 是**我拍的**，而且量错了东西 ——
//   搜「银行」返回 10 篇是合理的（银行相关内容本来就散在多篇），
//   而用户在搜索框里**只会点第一条**。真正决定「好不好用」的是首位对不对。
//   所以：首位命中率 = 主指标；召回 = 护栏；条数只作参考，不计分。
let recMiss = 0, topMiss = 0, recTot = 0;
const byLang = {};
for (const [lang, q, want, maxN] of CASES) {
  const r = S.query(q, { lang, limit: 20 });
  const rank = r.findIndex(x => x.id === want);
  const okRec = rank >= 0;
  const okTop = rank === 0;
  recTot++; if (!okRec) recMiss++; if (!okTop) topMiss++;
  const b = byLang[lang] = byLang[lang] || { n: 0, r: 0, t: 0 };
  b.n++; if (okRec) b.r++; if (okTop) b.t++;
  console.log([okTop ? '◎' : (okRec ? '○' : '✗'), pad(lang, 4), pad(q.slice(0, 26), 28),
    pad(r.length + ' 篇', 7),
    okRec ? ('第 ' + (rank + 1) + ' 位' + (r[0] ? '  首位=' + r[0].id : '')) : '**没找到目标篇**',
    (r.length > maxN) ? '（参考：超过 ' + maxN + ' 篇）' : ''].join(' '));
}
console.log('\n── 汇总 ──   ◎ 首位命中 · ○ 召回但非首位 · ✗ 没找到');
for (const L of Object.keys(byLang)) {
  const b = byLang[L];
  console.log('  ' + pad(L, 3) + ' 首位 ' + b.t + '/' + b.n + ' · 召回 ' + b.r + '/' + b.n);
}
console.log('  合计 首位命中 ' + (recTot - topMiss) + '/' + recTot + '（' + (100 * (recTot - topMiss) / recTot).toFixed(1) + '%）'
  + ' · 召回 ' + (recTot - recMiss) + '/' + recTot + '（' + (100 * (recTot - recMiss) / recTot).toFixed(1) + '%）');
process.exit(recMiss || topMiss ? 1 : 0);
