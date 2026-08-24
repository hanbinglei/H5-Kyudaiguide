# -*- coding: utf-8 -*-
"""
georef_assign.py — 把 PDF 地图上的建筑编号标记配准到 OSM 建筑轮廓

流程：
  1. 控制点：OSM 建筑的 name_en 与 PDF 图例英文名归一化匹配 → (PDF标记坐标, OSM质心) 对
  2. 拟合仿射变换 PDF(x,y) → WGS84(lon,lat)，最小二乘 + 一轮离群点剔除
  3. 用变换把全部 99 个编号标记投到经纬度，射线法找包含它的 OSM 轮廓
     （不在任何轮廓内则取 25m 内最近质心，仍无则标记 unmatched）
  4. 输出 assignments.json + 控制点残差报告（供人工复核）

精度依据：仿射假设 = 插画图与真实地理近似线性关系。残差中位数是检验此
假设的直接证据，若 >30m 则该假设不成立，结果不可用（脚本会显式警告）。
"""
import json, math, os, re
import numpy as np

BASE = os.path.join(os.path.dirname(__file__), '..')
OUT = os.path.join(os.path.dirname(__file__), 'out')

markers = {int(k): v for k, v in json.load(open(os.path.join(OUT, 'markers.json'))).items()}
legend = {int(k): v for k, v in json.load(open(os.path.join(OUT, 'legend.json'), encoding='utf-8')).items()}
geo = json.load(open(os.path.join(BASE, 'h5-mvp/data/osm-buildings.geojson'), encoding='utf-8'))

# ---------- 工具 ----------
def norm_name(s):
    """名称归一化：小写、去 ♥/括号内容/标点/罗马数字统一"""
    s = re.sub(r'[♥♡]', '', s)
    s = re.sub(r'\(.*?\)', '', s)
    s = s.replace('Ⅰ', '1').replace('Ⅱ', '2').replace('Ⅲ', '3')
    s = re.sub(r'\bI\b', '1', s); s = re.sub(r'\bII\b', '2', s); s = re.sub(r'\bIII\b', '3', s)
    return re.sub(r'[^a-z0-9]', '', s.lower())

def centroid(coords):
    """多边形形心（鞋带公式）；退化时用顶点均值"""
    pts = coords[0]
    a = cx = cy = 0.0
    for i in range(len(pts) - 1):
        x0, y0 = pts[i]; x1, y1 = pts[i + 1]
        cross = x0 * y1 - x1 * y0
        a += cross; cx += (x0 + x1) * cross; cy += (y0 + y1) * cross
    if abs(a) < 1e-12:
        xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
        return sum(xs) / len(xs), sum(ys) / len(ys)
    return cx / (3 * a), cy / (3 * a)

def point_in_ring(x, y, ring):
    """射线法"""
    inside = False
    j = len(ring) - 1
    for i in range(len(ring)):
        xi, yi = ring[i]; xj, yj = ring[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            inside = not inside
        j = i
    return inside

LAT0 = 33.6
M_PER_DEG_LAT = 111320.0
M_PER_DEG_LON = 111320.0 * math.cos(math.radians(LAT0))

def dist_m(lon1, lat1, lon2, lat2):
    return math.hypot((lon1 - lon2) * M_PER_DEG_LON, (lat1 - lat2) * M_PER_DEG_LAT)

# ---------- 1. 控制点 ----------
feats = []
for f in geo['features']:
    c = centroid(f['geometry']['coordinates'])
    feats.append({'id': f['properties']['id'], 'name': f['properties'].get('name', ''),
                  'name_en': f['properties'].get('name_en', ''), 'cx': c[0], 'cy': c[1],
                  'ring': f['geometry']['coordinates'][0]})

legend_norm = {n: norm_name(v) for n, v in legend.items()}
controls = []          # (num, pdf_x, pdf_y, lon, lat, osm_name)
used_nums = set()
for ft in feats:
    if not ft['name_en']:
        continue
    fn = norm_name(ft['name_en'])
    if not fn:
        continue
    hits = [n for n, ln in legend_norm.items()
            if ln and (ln == fn or ln in fn or fn in ln) and len(markers.get(n, [])) == 1]
    if len(hits) == 1 and hits[0] not in used_nums:
        n = hits[0]
        m = markers[n][0]
        controls.append((n, m['x'], m['y'], ft['cx'], ft['cy'], ft['name_en']))
        used_nums.add(n)

print(f'控制点: {len(controls)} 个')

# ---------- 2. 移动最小二乘(MLS)局部仿射 ----------
# 插画图各分区缩放/偏移不一致，全局仿射残差 ~22m 不够用。
# MLS：对每个查询点，用 w_i = 1/(d_i^2 + eps) 加权控制点做局部仿射拟合，
# 距离近的控制点主导变换 → 自适应分区变形。eps=60pt 防止过拟合单点。
CTRL = np.array([[c[1], c[2], c[3], c[4]] for c in controls])

def mls_transform(x, y, exclude_idx=None):
    d2 = (CTRL[:, 0] - x) ** 2 + (CTRL[:, 1] - y) ** 2
    w = 1.0 / (d2 + 60.0 ** 2)
    if exclude_idx is not None:
        w[exclude_idx] = 0.0
    W = np.sqrt(w)[:, None]
    A = np.hstack([CTRL[:, :2], np.ones((len(CTRL), 1))]) * W
    B = CTRL[:, 2:4] * W
    T = np.linalg.lstsq(A, B, rcond=None)[0]
    lon, lat = np.array([x, y, 1]) @ T
    return float(lon), float(lat)

# 留一法(LOO)评估真实精度：预测每个控制点时把它自己排除在拟合外。
# LOO>60m 的控制点 = 插画局部示意化区域（如东区实验楼群画得比实际紧凑），
# 这类点是"正确配对但坐标不可信"，保留会带歪邻域 → 从拟合集中剔除后重建。
loo = [dist_m(*mls_transform(c[1], c[2], exclude_idx=i), c[3], c[4])
       for i, c in enumerate(controls)]
print(f'MLS 留一法残差(初轮): 中位数 {np.median(loo):.1f}m / 最大 {max(loo):.1f}m')
bad = [(c[0], c[5][:30], round(r, 1)) for c, r in zip(controls, loo) if r > 60]
controls = [c for c, r in zip(controls, loo) if r <= 60]
CTRL = np.array([[c[1], c[2], c[3], c[4]] for c in controls])
print(f'剔除示意化区域控制点 {len(bad)}: {bad}')
loo = [dist_m(*mls_transform(c[1], c[2], exclude_idx=i), c[3], c[4])
       for i, c in enumerate(controls)]
print(f'MLS 留一法残差(终轮, {len(controls)}点): 中位数 {np.median(loo):.1f}m / 均值 {np.mean(loo):.1f}m / 最大 {max(loo):.1f}m')
if np.median(loo) > 30:
    print('⚠️ 警告：留一残差过大，局部变形超出 MLS 能力，结果需全量人工复核！')

def transform(x, y):
    return mls_transform(x, y)

def dist_to_ring_m(lon, lat, ring):
    """点到多边形边缘的最短距离（米）。在近似平面上用点到线段距离。"""
    px, py = lon * M_PER_DEG_LON, lat * M_PER_DEG_LAT
    best = float('inf')
    for i in range(len(ring) - 1):
        ax, ay = ring[i][0] * M_PER_DEG_LON, ring[i][1] * M_PER_DEG_LAT
        bx, by = ring[i+1][0] * M_PER_DEG_LON, ring[i+1][1] * M_PER_DEG_LAT
        dx, dy = bx - ax, by - ay
        t = 0 if dx == dy == 0 else max(0, min(1, ((px-ax)*dx + (py-ay)*dy) / (dx*dx + dy*dy)))
        best = min(best, math.hypot(px - (ax + t*dx), py - (ay + t*dy)))
    return best

# 非建筑设施（运动场/农场/广场等，OSM building 图层无对应轮廓）→ 输出为点位 POI
NON_BUILDING = {1, 2, 3, 4, 16, 17, 18, 19, 23, 24, 25, 69, 72, 97, 98, 99}

assignments = {}
for n in sorted(markers):
    entries = []
    for m in markers[n]:
        lon, lat = transform(m['x'], m['y'])
        if n in NON_BUILDING:
            entries.append({'lon': round(lon, 7), 'lat': round(lat, 7),
                            'how': 'poi-point', 'osm_id': None, 'osm_name': None})
            continue
        hit = next((ft for ft in feats if point_in_ring(lon, lat, ft['ring'])), None)
        how = 'inside'
        if hit is None:
            # 用"到轮廓边缘距离"匹配（质心距离对大体量建筑不公平）
            # 先用质心距离粗筛 150m 内的候选，再精算边缘距离
            cands = [ft for ft in feats if dist_m(lon, lat, ft['cx'], ft['cy']) < 150]
            scored = sorted((dist_to_ring_m(lon, lat, ft['ring']), ft) for ft in cands)
            if scored and scored[0][0] <= 35:
                d, hit = scored[0]
                how = f'nearest({d:.0f}m)'
                # 次近轮廓也在 15m 内 → 歧义，标记人工复核
                if len(scored) > 1 and scored[1][0] - d < 15:
                    how += '-ambiguous'
            else:
                how = f'unmatched(min {scored[0][0]:.0f}m)' if scored else 'unmatched(no cand)'
        entries.append({
            'lon': round(lon, 7), 'lat': round(lat, 7), 'how': how,
            'osm_id': hit['id'] if hit else None,
            'osm_name': hit['name'] if hit else None,
        })
    assignments[n] = {'legend_en': legend[n], 'hits': entries}

json.dump(assignments, open(os.path.join(OUT, 'assignments.json'), 'w', encoding='utf-8'),
          indent=1, ensure_ascii=False)

# ---------- 4. 汇总 ----------
inside = sum(1 for a in assignments.values() for h in a['hits'] if h['how'] == 'inside')
near = sum(1 for a in assignments.values() for h in a['hits'] if h['how'].startswith('nearest'))
un = [(n, a['legend_en']) for n, a in assignments.items()
      if all(h['how'].startswith('unmatched') for h in a['hits'])]
# 交叉验证：编号落进的轮廓本身有名字 → 检查名字是否对得上（人工复核用）
verify = [(n, a['legend_en'], h['osm_name']) for n, a in assignments.items()
          for h in a['hits'] if h['osm_name']]
print(f'\n命中轮廓内: {inside} | 就近匹配: {near} | 无匹配: {len(un)}')
print('无匹配编号:', un)
print('\n交叉验证样本（编号→图例名 vs 所落轮廓的OSM名）:')
for v in verify[:15]:
    print(' ', v[0], v[1][:40], '||', v[2])
