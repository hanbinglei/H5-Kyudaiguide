# -*- coding: utf-8 -*-
"""
build_boundary.py — 抓取九大伊都校区校地多边形（v2）

v1 的错误（审查 R-UI1 发现）：
  relation 的 `out geom` 几何在 members[].geometry 里，v1 读顶层 e["geometry"]
  → 永远为空 → 静默落入 bbox fallback（整屏矩形，敷地界/遮罩/校外判定全部失效）。

v2：
  - 直接按 id 抓 relation 2255755（九州大学 伊都キャンパス），OQL 用纯 `out geom;`
  - outer 成员环缝合（与 merge_relations.py 同法）
  - 顶点数断言 >100：宁可构建失败也不静默产出 bbox
  - 若 %TMP%/campus_poly.json 存在则用缓存（Overpass 过载时的离线重跑）
输出 h5-mvp/data/campus-boundary.json（FeatureCollection，1 个 Polygon，坐标 6 位）
"""
import json, os, urllib.request

REL_ID = 2255755
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'h5-mvp', 'data', 'campus-boundary.json')
CACHE = os.path.join(os.environ.get('TMP', '/tmp'), 'campus_poly.json')

if os.path.exists(CACHE):
    print('使用缓存:', CACHE)
    data = json.load(open(CACHE, encoding='utf-8'))
else:
    q = f'[out:json][timeout:60];relation({REL_ID});out geom;'
    req = urllib.request.Request('https://lz4.overpass-api.de/api/interpreter',
                                 data=('data=' + urllib.parse.quote(q)).encode(),
                                 headers={'User-Agent': 'KyudaimapAnnotator/1.0'})
    import urllib.parse
    data = json.loads(urllib.request.urlopen(req, timeout=120).read())

rel = next(e for e in data['elements'] if e['type'] == 'relation' and e['id'] == REL_ID)

def stitch(segments):
    """首尾相接缝合 way 段为闭环（OSM 共享节点坐标一致）"""
    segs = [[(p['lon'], p['lat']) for p in s] for s in segments]
    rings = []
    while segs:
        ring = segs.pop(0)
        while ring[0] != ring[-1]:
            for k, s in enumerate(segs):
                if s[0] == ring[-1]:
                    ring += s[1:]; segs.pop(k); break
                if s[-1] == ring[-1]:
                    ring += list(reversed(s))[1:]; segs.pop(k); break
            else:
                break
        rings.append(ring)
    return rings

outers = [m['geometry'] for m in rel['members'] if m.get('role') == 'outer' and 'geometry' in m]
rings = stitch(outers)
# 校地被公共道路分割为多个 outer 环（西区环 + 中/东区环…）——必须全部保留，
# 只取最大环会丢掉整个东半校区（R-UI1 审查教训）。
closed = [r for r in rings if len(r) >= 4 and r[0] == r[-1]]
assert closed, '无闭合环'
assert sum(len(r) for r in closed) > 100, '顶点过少，疑似数据不完整——拒绝产出'

fc = {'type': 'FeatureCollection', 'features': [{
    'type': 'Feature',
    'geometry': {'type': 'MultiPolygon',
                 'coordinates': [[[[round(x, 6), round(y, 6)] for x, y in r]] for r in closed]},
    'properties': {'name': rel.get('tags', {}).get('name', '九州大学 伊都キャンパス'),
                   'osm_relation': REL_ID, 'rings': len(closed)}}]}
json.dump(fc, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False)
print(f'✅ 校地 MultiPolygon: {len(closed)} 环 / {sum(len(r) for r in closed)} 顶点, '
      f'{os.path.getsize(OUT):,} bytes -> {OUT}')
