# -*- coding: utf-8 -*-
"""
rebuild_geojson.py — 用 Overpass 全量抓取结果重建 osm-buildings.geojson

背景：首版数据在工学部北侧研究区有洞（Overpass 限流未真正补全），
     缺失一整片带名称的建筑。本脚本从完整抓取(out tags geom)重建，
     字段结构与原版保持一致（id/name/name_ja/name_en/building/amenity/leisure）。

输入: %TMP%/overpass_full.json   输出: h5-mvp/data/osm-buildings.geojson（覆盖前备份原文件）
"""
import json, os, shutil

BASE = os.path.join(os.path.dirname(__file__), '..')
SRC = os.path.join(os.environ['TMP'], 'overpass_full.json')
DST = os.path.join(BASE, 'h5-mvp', 'data', 'osm-buildings.geojson')

raw = json.load(open(SRC, encoding='utf-8'))
feats, skipped = [], 0
seen = set()
for e in raw['elements']:
    if e.get('type') != 'way' or 'geometry' not in e:
        skipped += 1
        continue
    if e['id'] in seen:            # 防 Overpass 去重失效
        continue
    seen.add(e['id'])
    ring = [[p['lon'], p['lat']] for p in e['geometry']]
    if len(ring) < 4:              # 无效多边形（<3 顶点 + 闭合点）
        skipped += 1
        continue
    if ring[0] != ring[-1]:        # 确保闭合
        ring.append(ring[0])
    t = e.get('tags', {})
    feats.append({
        'type': 'Feature',
        'geometry': {'type': 'Polygon', 'coordinates': [ring]},
        'properties': {
            'id': e['id'],
            'name': t.get('name', ''),
            'name_ja': t.get('name:ja', ''),
            'name_en': t.get('name:en', ''),
            'building': t.get('building', ''),
            'amenity': t.get('amenity', ''),
            'leisure': t.get('leisure', ''),
        }
    })

# 覆盖前备份原文件（一次性，已存在则不重复备份）
bak = DST + '.v1.bak'
if os.path.exists(DST) and not os.path.exists(bak):
    shutil.copy2(DST, bak)

json.dump({'type': 'FeatureCollection', 'features': feats},
          open(DST, 'w', encoding='utf-8'), ensure_ascii=False)

named = sum(1 for f in feats if f['properties']['name'])
named_en = sum(1 for f in feats if f['properties']['name_en'])
print(f'features: {len(feats)} | named: {named} | name_en: {named_en} | skipped: {skipped}')
print(f'旧版备份: {bak}')
