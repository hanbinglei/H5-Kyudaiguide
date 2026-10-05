/**
 * 将官方楼内目录合并到现有设施点。保留旧 ID/巴士字段，不按距离猜建筑。
 * 输入：indoor-facilities.json、facilities.json、真实建筑 GeoJSON。
 * 输出：同一个 facilities.json；纯函数 merge 可供测试，重复运行结果相同。
 * 用法：node tools/build_indoor_facilities.js（须在同步小程序前运行）。
 */
const fs = require('fs');
const path = require('path');
const OWNER = 'official-indoor-directory';

/** 局部坐标面积质心，避免大经纬度鞋带公式的相消误差；与原生打包一致。 */
function centroid(ring) {
  const [ox, oy] = ring[0];
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const x0 = ring[j][0] - ox, y0 = ring[j][1] - oy;
    const x1 = ring[i][0] - ox, y1 = ring[i][1] - oy;
    const f = x0 * y1 - x1 * y0;
    a += f; cx += (x0 + x1) * f; cy += (y0 + y1) * f;
  }
  if (Math.abs(a) < 1e-14) throw new Error('建筑轮廓不能计算质心');
  const r6 = n => Math.round(n * 1e6) / 1e6;
  return [r6(ox + cx / (3 * a)), r6(oy + cy / (3 * a))];
}

/** 完整验证后返回新数组；父楼/来源缺失直接失败，绝不随意就近定位。 */
function merge(base, directory, geo) {
  if (directory.campus !== 'ito') throw new Error('本生成器仅处理伊都目录');
  const ids = new Set();
  const buildings = new Map(geo.features.map(b => [String(b.properties.id), b]));
  const prior = new Map(base.map(f => [String(f.id), f]));
  const additions = [];
  for (const e of directory.entries) {
    if (!/^[a-zA-Z0-9_-]+$/.test(e.id) || ids.has(e.id)) throw new Error('重复或不安全设施 ID: ' + e.id);
    ids.add(e.id);
    const b = buildings.get(String(e.building));
    if (!b) throw new Error('找不到所属建筑: ' + e.id);
    const g = b.geometry;
    const ring = g.type === 'Polygon' ? g.coordinates[0] : g.type === 'MultiPolygon' ? g.coordinates[0][0] : null;
    if (!ring) throw new Error('不是建筑面: ' + e.id);
    const sources = e.sourceIds.map(k => {
      const s = directory.sources[k];
      if (!s || !/^https:\/\//.test(s.url)) throw new Error('缺官方来源: ' + e.id + '/' + k);
      return s;
    });
    if (!sources.length || !e.name_zh || !e.name_ja || !e.name_en) throw new Error('缺名称或来源: ' + e.id);
    const old = prior.get(e.id);
    // 旧 ID 被删/变更时必须显式处理，不能悄悄生成替代点让时刻关联失效。
    if (!old && !e.id.startsWith('indoor-')) throw new Error('复用的旧设施不存在: ' + e.id);
    const [lon, lat] = centroid(ring);
    const notes = e.notes || directory.notes[e.noteKey];
    if (!notes) throw new Error('缺使用说明: ' + e.id);
    additions.push(Object.assign({}, old || {}, {
      id: e.id, type: e.type, name: e.name_ja, name_zh: e.name_zh, name_ja: e.name_ja, name_en: e.name_en,
      aliases: [...new Set([...(e.aliases || []), e.name_zh, e.name_ja, e.name_en,
        ...(old ? [old.name, old.name_en, ...(old.aliases || [])].filter(Boolean) : [])])],
      building: String(e.building), floor: e.floor || undefined, room: e.room || undefined,
      lon, lat, notes, sources, checked: directory.checked,
      hourIds: e.hourIds || undefined, position_precision: 'building',
      // 只有新增 ID 归目录所有；旧 OSM 点仍保留自己的来源身份。
      directory_owner: old && !old.directory_owner ? undefined : OWNER
    }));
  }
  const retained = base.filter(f => !ids.has(String(f.id)) && f.directory_owner !== OWNER);
  const result = retained.concat(additions);
  if (new Set(result.map(f => String(f.id))).size !== result.length) throw new Error('合并后 ID 冲突');
  return result;
}

if (require.main === module) {
  const data = path.resolve(__dirname, '../h5-mvp/data');
  const read = f => JSON.parse(fs.readFileSync(path.join(data, f), 'utf8'));
  const result = merge(read('facilities.json'), read('indoor-facilities.json'), read('osm-buildings.geojson'));
  fs.writeFileSync(path.join(data, 'facilities.json'), JSON.stringify(result, null, 1) + '\n');
  console.log('设施总数 ' + result.length + '；楼内目录 ' + result.filter(f => f.building).length);
}
module.exports = { merge, centroid };
