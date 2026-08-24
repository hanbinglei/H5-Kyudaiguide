/**
 * coord.js — 归一化坐标 ↔ Leaflet CRS.Simple 坐标 单一换算入口
 * 
 * 所有业务数据（buildings.json, facilities.json）仅存归一化坐标（0~1）。
 * Leaflet 运行时坐标仅在此模块生成，禁止外部直接写 Leaflet latlng。
 * 
 * 底图尺寸: 4961 × 3508 px (ito-campus-detailed.png)
 */

const MAP_W = 4961;
const MAP_H = 3508;

/**
 * 归一化坐标 → Leaflet [lat, lng] (即 [y, x] 像素坐标)
 * @param {number} nx - 归一化 x (0~1, 左→右)
 * @param {number} ny - 归一化 y (0~1, 上→下)
 * @returns {[number, number]} Leaflet latlng 坐标 [lat, lng]
 */
function normToLeaflet(nx, ny) {
  return [ny * MAP_H, nx * MAP_W];
}

/**
 * Leaflet [lat, lng] → 归一化坐标
 * @param {number} lat - Leaflet lat (y 像素)
 * @param {number} lng - Leaflet lng (x 像素)
 * @returns {{nx: number, ny: number}}
 */
function leafletToNorm(lat, lng) {
  return { nx: lng / MAP_W, ny: lat / MAP_H };
}

/**
 * 多边形数组归一化 → Leaflet latlng 数组
 * @param {number[][]} polygon - [[nx, ny], ...]
 * @returns {[number, number][]}
 */
function polygonToLeaflet(polygon) {
  return polygon.map(([nx, ny]) => normToLeaflet(nx, ny));
}

// 基准点自检（四角 + 中心）
const CHECK_POINTS = [
  { name: '左上', nx: 0, ny: 0, expectedLeaflet: [0, 0] },
  { name: '右上', nx: 1, ny: 0, expectedLeaflet: [0, MAP_W] },
  { name: '左下', nx: 0, ny: 1, expectedLeaflet: [MAP_H, 0] },
  { name: '右下', nx: 1, ny: 1, expectedLeaflet: [MAP_H, MAP_W] },
  { name: '中心', nx: 0.5, ny: 0.5, expectedLeaflet: [MAP_H / 2, MAP_W / 2] },
];

function runCoordCheck() {
  let ok = true;
  for (const p of CHECK_POINTS) {
    const got = normToLeaflet(p.nx, p.ny);
    if (Math.abs(got[0] - p.expectedLeaflet[0]) > 0.5 || 
        Math.abs(got[1] - p.expectedLeaflet[1]) > 0.5) {
      console.error(`❌ coord check FAIL: ${p.name} → expected ${p.expectedLeaflet}, got ${got}`);
      ok = false;
    }
  }
  if (ok) console.log('✅ coord.js 基准点自检通过');
  return ok;
}
