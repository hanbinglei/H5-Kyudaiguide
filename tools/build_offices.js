#!/usr/bin/env node
/**
 * build_offices.js —— 由调查草案生成地图用的 offices.json
 *
 * 输入（人工维护的真源，带出处与置信度）：
 *   docs/data-drafts/offices.draft.json    物理办公室：建筑 osmId / 楼层 / 房号 / 三语名
 *   docs/data-drafts/faculties.draft.json  36 个学部学府 → 哪个窗口
 *
 * 输出（机器消费，不要手改）：
 *   miniprogram/modules/map/h5/data/offices.json
 *
 * 为什么要有这个脚本而不是直接手写产物：
 *   草案里每条都带 source / confidence / note，是给人核对用的；
 *   地图只需要「名字 + 别名 + 坐标建筑 + 一句说明」。两份分开维护必然会漂移
 *   （本项目已经因为「同一份数据两处维护」栽过一次：seedData.js 至今还是 guide-2/guide-6 那种
 *   云端根本不存在的旧 id）。所以产物一律由脚本生成，改草案后重跑即可。
 *
 * 关键设计 —— 把「学府名」折叠进办公室的 aliases：
 *   学生搜的是「農学府」，而窗口官方名叫「農学部等事務部学生課」，两者一个字都不重叠。
 *   与其在运行时做 faculty→office 的联表查询，不如生成时就把所有该窗口服务的学府名
 *   （中日双语 + 俗称）全塞进这个办公室的 aliases。搜索层只需要一次线性匹配，不用改结构。
 *
 * 用法：node scripts/build_offices.js
 */

const fs = require('fs');
const path = require('path');

// 路径已适配 Kyudaimap 结构（脚本在 tools/，草案在 tools/offices-src/，产物在 h5-mvp/data/）
const ROOT = path.resolve(__dirname, '..');
const OFF_SRC = path.join(__dirname, 'offices-src/offices.draft.json');
const FAC_SRC = path.join(__dirname, 'offices-src/faculties.draft.json');
const OUT = path.join(ROOT, 'h5-mvp/data/offices.json');
const ANN = path.join(ROOT, 'h5-mvp/data/annotations-claude.json');

const offSrc = JSON.parse(fs.readFileSync(OFF_SRC, 'utf8'));
const facSrc = JSON.parse(fs.readFileSync(FAC_SRC, 'utf8'));
const annotations = JSON.parse(fs.readFileSync(ANN, 'utf8'));

/** 去重 + 去空，别名表里塞重复词只会拖慢匹配 */
function uniq(arr) {
  const seen = new Set();
  const out = [];
  for (const x of arr) {
    const s = String(x || '').trim();
    if (!s || seen.has(s)) continue;
    seen.add(s);
    out.push(s);
  }
  return out;
}

// ---- 先把「每个办公室服务哪些学部学府」收集起来 ----
const allFac = [].concat(
  facSrc.undergraduate || [],
  facSrc.graduate || [],
  facSrc.universityWide || []
);

const servedBy = {};   // officeId -> [学府名...]
const notAtIto = [];   // 不在伊都的学部学府，单独成条，搜到时明说别白跑

for (const f of allFac) {
  const names = uniq([f.name_ja, f.name_zh].concat(f.aliases || []));
  if (f.campus === 'ito' && f.office) {
    (servedBy[f.office] = servedBy[f.office] || []).push(...names);
    // 例外窗口（目前只有工学部建築学科归文系）也要能被搜到
    if (f.exceptionOffice) {
      (servedBy[f.exceptionOffice] = servedBy[f.exceptionOffice] || []).push(...names);
    }
    if (f.secondaryOffice) {
      (servedBy[f.secondaryOffice] = servedBy[f.secondaryOffice] || []).push(...names);
    }
  } else if (f.campus !== 'ito') {
    notAtIto.push({
      id: 'off-elsewhere-' + Buffer.from(f.name_ja).toString('hex').slice(0, 10),
      kind: 'elsewhere',
      campus: f.campus,
      name_ja: f.name_ja,
      name_zh: f.name_zh,
      name_en: f.name_en || '',
      aliases: names,
      // 没有 building —— 前端据此判定「不能导航，只弹说明」
      note_zh: (f.note_zh || '') + `　窗口：${f.desk_ja || ''}${f.tel ? '（' + f.tel + '）' : ''}`
    });
  }
}

// ---- 生成办公室条目 ----
const CAMPUS_LABEL = { hospital: '病院（馬出）校区', chikushi: '筑紫校区', ohashi: '大橋校区' };

const offices = (offSrc.offices || []).map(o => {
  const ann = annotations[o.building] || {};
  const desks = (o.desks || []).map(d => d.name_ja);
  return {
    id: o.id,
    kind: 'office',
    building: o.building,          // OSM id，前端用它找建筑轮廓算中心点
    buildingNum: o.buildingNum,
    buildingName_ja: ann.name_ja || '',
    buildingName_zh: ann.name_zh || '',
    floor: o.floor || '',
    room: o.room || '',
    name_ja: o.name_ja,
    name_zh: o.name_zh,
    name_en: o.name_en || '',
    // 别名 = 自身别名 + 它服务的全部学部学府名 + 内部各担当/係名
    aliases: uniq([].concat(o.aliases || [], servedBy[o.id] || [], desks)),
    tel: o.tel || '',
    hours_ja: typeof o.hours_ja === 'string' ? o.hours_ja : '',
    note_zh: o.note_zh || '',
    confidence: o.confidence || 'confirmed'
  };
});

// 证明书自动发行机：办在留更新、申奖学金都要用，值得单独可搜
const cm = offSrc.certificateMachines;
const machines = cm ? (cm.locations || []).map((l, i) => {
  const ann = annotations[l.building] || {};
  return {
    id: 'off-cert-' + i,
    kind: 'office',
    building: l.building,
    buildingNum: l.buildingNum,
    buildingName_ja: ann.name_ja || '',
    buildingName_zh: ann.name_zh || '',
    floor: l.floor || '',
    room: '',
    name_ja: cm.name_ja,
    name_zh: cm.name_zh + '（' + (l.where_ja || '') + '）',
    name_en: cm.name_en,
    aliases: uniq((cm.aliases || []).concat([l.where_ja])),
    tel: '',
    hours_ja: '8:30–17:15',
    note_zh: cm._note ? '在学证明·通学证明·学割·健康诊断证明。仅正规生可用。' : '',
    confidence: 'confirmed'
  };
}) : [];

// ---- 排序：决定「一个词命中多条时，谁排第一」 ----
//
// 搜索是线性匹配、按数组顺序返回的，所以数组顺序 = 结果顺序。
// 举例：搜「留学生」会同时命中「国際部留学課」和「工学部等事務部（它有个国際化・留学生係）」，
// 但对本小程序的受众（中国留学生）来说，前者才是他们要找的那个。
// 不排的话，谁在草案里写得靠前谁就排第一 —— 那是随机的。
const PRIORITY = [
  'off-intl-ryugaku',   // 国際部留学課：宿舍·奖学金·在留支援，留学生最常跑
  'off-isc-counsel',    // 留学生相談（有中文）
  'off-health-east1',   // 健康支援室（有中文）
  'off-gakusei-shien'   // 学生支援課：奖学金·宿舍·课外活动
];
offices.sort((a, b) => {
  const ia = PRIORITY.indexOf(a.id), ib = PRIORITY.indexOf(b.id);
  if (ia === -1 && ib === -1) return 0;          // 都不在优先表里，保持草案原序
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
});

const out = {
  _generated: 'scripts/build_offices.js —— 不要手改，改 docs/data-drafts/*.draft.json 后重跑',
  _generatedAt: new Date().toISOString().slice(0, 10),
  _numberingBasis: '建筑编号(buildingNum)对齐新版伊都校园地图 f/57240；官网另有旧版编号，旧=新−3',
  offices: offices.concat(machines),
  elsewhere: notAtIto
};

fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

// ---- 自检：产物必须能和地图的建筑数据对上，否则搜到了也定位不了 ----
let bad = 0;
for (const o of out.offices) {
  if (!annotations[o.building]) {
    console.error(`✗ ${o.id} 的 building ${o.building} 不在 annotations 里`);
    bad = 1;
  }
  if (!o.aliases.length) {
    console.error(`✗ ${o.id} 没有任何别名 —— 只能靠官方全称搜到，等于搜不到`);
    bad = 1;
  }
}
if (bad) process.exit(1);

const aliasTotal = out.offices.reduce((s, o) => s + o.aliases.length, 0);
console.log(`✔ 生成 ${OUT.replace(ROOT + path.sep, '')}`);
console.log(`  办公室 ${out.offices.length} 条（含证明书发行机 ${machines.length} 处）`);
console.log(`  非伊都校区 ${out.elsewhere.length} 条（搜到时提示别白跑）`);
console.log(`  别名合计 ${aliasTotal} 个，平均每条 ${(aliasTotal / out.offices.length).toFixed(1)} 个`);
console.log(`  体积 ${(fs.statSync(OUT).size / 1024).toFixed(1)} KB`);
