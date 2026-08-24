# -*- coding: utf-8 -*-
"""
extract_facility_icons.py — 从官方矢量 PDF 提取设施图标（ATM/売店/WC）并配准到经纬度

原理：
  官方图 (ITO_1_Eng.pdf) 的设施图标是文本对象："A"=ATM、"S"=Store、"WC"=多目的厕所。
  提取这些独立文本的 PDF 坐标，再用 99 个建筑编号标记的配准结果
  （markers.json 的 PDF 坐标 ↔ assignments.json 的经纬度）作为密集控制点，
  做 MLS 局部仿射插值 → 图标经纬度。

排除区：图例框（页面右上 x>1000, y<200 附近的样例图标）、比例尺区。
输出: tools/out/official-icons.json  [{type, lon, lat}]
"""
import json, os, re
import numpy as np
import fitz

OUT = os.path.join(os.path.dirname(__file__), 'out')
PDF = os.path.join(os.path.dirname(__file__), '..', 'ITO_1_Eng.pdf')

markers = json.load(open(f'{OUT}/markers.json'))
asg = json.load(open(f'{OUT}/assignments.json', encoding='utf-8'))

# ---- 用全部编号标记构建控制点（PDF坐标 → 已配准经纬度）----
ctrl = []
for n, ms in markers.items():
    hits = asg[n]['hits']
    for m, h in zip(ms, hits):
        ctrl.append([m['x'], m['y'], h['lon'], h['lat']])
CTRL = np.array(ctrl)
print(f'控制点: {len(CTRL)}')

def mls(x, y):
    """MLS 局部仿射（与 georef_assign.py 同法，eps=60pt）"""
    d2 = (CTRL[:, 0] - x) ** 2 + (CTRL[:, 1] - y) ** 2
    w = np.sqrt(1.0 / (d2 + 60.0 ** 2))[:, None]
    A = np.hstack([CTRL[:, :2], np.ones((len(CTRL), 1))]) * w
    B = CTRL[:, 2:4] * w
    T = np.linalg.lstsq(A, B, rcond=None)[0]
    lon, lat = np.array([x, y, 1]) @ T
    return float(lon), float(lat)

# ---- 提取图标文本 ----
# 单符号图标：A=ATM S=Store WC=多目的トイレ P=駐車場 IN/OUT=車輌出入口
# ♥ 后缀：官方图例右上角明确标注 ♥=AED（除颤器），跟在配备 AED 的建筑名之后
# Gate 专名：地图上的校门（图例说明区 x>1000 的同名文字是图例，非门位，须排除）
page = fitz.open(PDF)[0]
ICON = {'A': 'atm', 'S': 'store', 'WC': 'toilets',
        'P': 'parking', 'IN': 'entrance', 'OUT': 'exit'}


def in_legend(cx, cy):
    return cx > 1000 and cy < 210       # 右上图例样例框


icons = []
aed_names = []      # ♥ 标注的建筑名（AED 是建筑级语义，坐标另取建筑质心，见下）
for block in page.get_text('dict')['blocks']:
    if block.get('type') != 0:
        continue
    for line in block['lines']:
        t = ' '.join(s['text'] for s in line['spans']).strip()
        x0, y0, x1, y1 = line['bbox']
        cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
        # (1) 单符号图标（地图上的独立符号，PDF 坐标即真实位置）
        if t in ICON:
            if in_legend(cx, cy):
                continue
            lon, lat = mls(cx, cy)
            icons.append({'type': ICON[t], 'lon': round(lon, 7), 'lat': round(lat, 7)})
        # (2) AED：建筑名以 ♥ 结尾。**只收集建筑名**，坐标不能用♥文本行的 PDF 坐标——
        #     ♥跟在（可能很长的）建筑名标注末尾，行末坐标严重偏移，实测 46/48 落校外。
        #     AED 语义是建筑级，正确坐标 = 匹配到的建筑质心（下方 aed_names 处理）。
        elif t.endswith('♥') and len(t) > 1:
            aed_names.append(t[:-1].strip())
        # (3) 校门专名（仅地图区；图例说明文字在 x>1000 一律排除）
        elif 'Gate' in t and cx < 1000 and len(t) < 40:
            lon, lat = mls(cx, cy)
            icons.append({'type': 'gate', 'lon': round(lon, 7), 'lat': round(lat, 7),
                          'name': t})

# ---- AED：建筑名 → 建筑质心（annotations 的 osm id = buildings 的 properties.id）----
BLD = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'osm-buildings.geojson')
ANN = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'annotations-claude.json')


ROMAN = {'Ⅰ': '1', 'Ⅱ': '2', 'Ⅲ': '3', 'Ⅳ': '4', 'Ⅴ': '5', 'Ⅵ': '6', 'Ⅶ': '7'}


def norm_b(s):
    """建筑名归一：全角罗马数字→阿拉伯、去括号内容、去非字母数字、小写"""
    for k, v in ROMAN.items():
        s = s.replace(k, v)
    s = re.sub(r'（[^）]*）|\([^)]*\)', '', s)
    return ''.join(c.lower() for c in s if c.isalnum())


def centroid(geom):
    """多边形质心（shoelace）；MultiPolygon 取首个多边形外环；退化则顶点均值"""
    if geom['type'] == 'MultiPolygon':
        ring = geom['coordinates'][0][0]
    else:
        ring = geom['coordinates'][0]
    a = cx = cy = 0.0
    for i in range(len(ring) - 1):
        x0, y0 = ring[i][:2]
        x1, y1 = ring[i + 1][:2]
        cr = x0 * y1 - x1 * y0
        a += cr
        cx += (x0 + x1) * cr
        cy += (y0 + y1) * cr
    if abs(a) < 1e-12:
        return (sum(p[0] for p in ring) / len(ring),
                sum(p[1] for p in ring) / len(ring))
    a *= 0.5
    return cx / (6 * a), cy / (6 * a)


bl = json.load(open(BLD, encoding='utf-8'))
bl_by_id = {f['properties']['id']: f for f in bl['features']}
bidx = {}                                     # 归一化建筑名 → feature
code_idx = {}                                 # 建筑编号(HE40/AG10...) → feature


def add_name(nm, f):
    if not nm:
        return
    bidx.setdefault(norm_b(nm), f)
    for c in re.findall(r'[A-Z]{2}\d{2,3}', nm):   # 提取建筑编号
        code_idx.setdefault(c, f)


for f in bl['features']:
    add_name(f['properties'].get('name_en'), f)
    add_name(f['properties'].get('name'), f)
ann = json.load(open(ANN, encoding='utf-8'))  # annotations 补 name_en/ja/zh → id → 几何
for k, a in ann.items():
    f = bl_by_id.get(int(k))
    if not f:
        continue
    for fld in ('name_en', 'name_ja', 'name_zh'):
        add_name(a.get(fld), f)


def match_building(nm):
    """三级匹配：精确归一 → 建筑编号(HE40) → 长子串(>12,唯一)。防止短串误配。"""
    key = norm_b(nm)
    if key in bidx:
        return bidx[key]
    codes = re.findall(r'[A-Z]{2}\d{2,3}', nm)   # ♥名被PDF换行截断也常保留编号
    if codes and codes[0] in code_idx:
        return code_idx[codes[0]]
    if len(key) > 12:                            # 长子串双向包含且唯一才采纳
        cands = [f for bn, f in bidx.items() if len(bn) > 12 and (key in bn or bn in key)]
        if len(cands) == 1:
            return cands[0]
    return None


# 运动场 AED：无建筑多边形（OSM 里是 leisure=pitch，非 building），用 OSM 运动场
# 多边形质心（Overpass 查得，2026-08 校内 leisure=pitch）。运动猝死风险高，安全价值大。
SPORTS_AED = {
    'Athletic Field': (130.20864, 33.60049),            # 陸上競技場
    'Multipurpose Sports Field': (130.22348, 33.59489),  # 多目的グラウンド
    'Baseball Field': (130.20666, 33.60293),            # 野球場（北・運動ゾーン）
}

seen_aed, aed_unmatched = set(), []
for nm in aed_names:
    f = match_building(nm)
    if not f:
        if nm in SPORTS_AED:                  # 运动场：用 leisure 质心兜底
            lon, lat = SPORTS_AED[nm]
            icons.append({'type': 'aed', 'lon': lon, 'lat': lat, 'name': nm})
        else:
            aed_unmatched.append(nm)          # 农场/无几何对象：无可靠坐标源，不造点
        continue
    bid = f['properties']['id']
    if bid in seen_aed:                       # 同建筑多条♥（列表+地图）只留一个
        continue
    seen_aed.add(bid)
    lon, lat = centroid(f['geometry'])
    icons.append({'type': 'aed', 'lon': round(lon, 7), 'lat': round(lat, 7), 'name': nm})

# gate/aed 可能因重复文本对象产出重合点：按 6 位坐标去重
dedup, seen = [], set()
for ic in icons:
    key = (ic['type'], round(ic['lon'], 6), round(ic['lat'], 6))
    if key in seen:
        continue
    seen.add(key)
    dedup.append(ic)
icons = dedup

json.dump(icons, open(f'{OUT}/official-icons.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
from collections import Counter
print('图标:', Counter(i['type'] for i in icons))
aed_total = sum(1 for i in icons if i['type'] == 'aed')
print(f'AED: 总 {aed_total}（建筑质心 {len(seen_aed)} + 运动场 leisure {aed_total - len(seen_aed)}）'
      f'  未定位 {len(aed_unmatched)}（农场/无英文名，不造点）: {aed_unmatched}')
