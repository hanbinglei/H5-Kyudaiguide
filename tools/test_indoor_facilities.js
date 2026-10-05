/** 使用真实 H5 搜索函数验证设施目录、幂等生成、父楼关联和旧点保留。 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const { merge } = require('./build_indoor_facilities');
const root = path.resolve(__dirname, '..');
const read = f => JSON.parse(fs.readFileSync(path.join(root, 'h5-mvp/data', f), 'utf8'));
const fac = read('facilities.json'), geo = read('osm-buildings.geojson'), dir = read('indoor-facilities.json');
let n = 0;
function check(value, label) { assert.ok(value, label); n++; }
check(JSON.stringify(merge(fac, dir, geo)) === JSON.stringify(fac), '反复生成必须完全幂等');
const bad = JSON.parse(JSON.stringify(dir)); bad.entries[0].building = 'missing';
assert.throws(() => merge(fac, bad, geo), /找不到所属建筑/); n++;
const duplicate = JSON.parse(JSON.stringify(dir)); duplicate.entries.push(duplicate.entries[0]);
assert.throws(() => merge(fac, duplicate, geo), /重复/); n++;
const old = JSON.parse(require('child_process').execFileSync('git', ['show', 'HEAD:h5-mvp/data/facilities.json'], {cwd:root, encoding:'utf8'}));
for (const f of old) {
  const now = fac.find(x => x.id === f.id);
  check(!!now, '旧设施 ID 未删除 ' + f.id);
  if (!dir.entries.some(e => e.id === f.id)) check(JSON.stringify(now) === JSON.stringify(f), '未涉及的旧设施完全保留 ' + f.id);
  check(now.bus_name === f.bus_name && now.bus_dir === f.bus_dir, '巴士字段不变 ' + f.id);
}
const html = fs.readFileSync(path.join(root, 'h5-mvp/app.html'), 'utf8');
const off = read('offices.json');
const box = vm.createContext({ buildings:geo.features, annotations:read('annotations-claude.json'),
  offices:off.offices, elsewhere:off.elsewhere, classrooms:read('classrooms.json'), pois:read('poi-points.json'), facilities:fac });
vm.runInContext(html.slice(html.indexOf('function norm(s)'), html.indexOf('const resultsDiv =')), box);
for (const [q, id] of Object.entries({ '健身房':'indoor-gym-training', '泳池':'indoor-gym-pool',
  'swimming pool':'indoor-gym-pool', 'トレーニング室':'indoor-gym-training',
  SALC:'indoor-salc', BasE:'indoor-qrec-base', iCube:'indoor-icube', Libca:'indoor-libca', '打印':'indoor-central-print' })) {
  const rows = box.searchAll(q);
  check(rows.some(r => r.kind === 'facility' && r.obj.id === id && !r.fuzzy), q + ' 精确命中');
  check(new Set(rows.map(r => r.kind + (r.obj.id || r.obj.code))).size === rows.length, q + ' 不重复');
}
check(box.searchAll('BasE')[0].obj.id === 'indoor-qrec-base', 'BasE 排在棒球前');
check(fac.length === old.length + dir.entries.filter(e => !old.some(f => f.id === e.id)).length, '新增数量准确');
console.log('H5 楼内设施：' + n + ' 项通过，0 失败');
