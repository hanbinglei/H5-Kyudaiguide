# -*- coding: utf-8 -*-
"""
build_facilities.py — 从 Overpass amenity 抓取结果生成设施点位层 facilities.json

这是"食堂在哪里/ATM在哪里"类查询的数据基础（plan-v2 §3.2 / Phase 6 第一层）。
输入: %TMP%/overpass_amenity.json   输出: h5-mvp/data/facilities.json
类型归一：restaurant/cafe/fast_food/food_court → eat 大类由前端处理，此处保留原始细类。
已知缺口：OSM 里 ATM 仅 1 处（官方图例显示校内有多处），后续可人工补点。
"""
import json, os

SRC = os.path.join(os.environ['TMP'], 'overpass_amenity.json')
DST = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'facilities.json')

raw = json.load(open(SRC, encoding='utf-8'))
out, seen = [], set()
for e in raw['elements']:
    t = e.get('tags', {})
    typ = t.get('amenity') or t.get('shop') or t.get('highway') or t.get('emergency')
    if typ == 'defibrillator':
        typ = 'aed'
    c = e.get('center') or {'lat': e.get('lat'), 'lon': e.get('lon')}
    if c['lat'] is None:
        continue
    key = (e['type'], e['id'])
    if key in seen:
        continue
    seen.add(key)
    out.append({'id': f"{e['type'][0]}{e['id']}", 'type': typ,
                'lon': round(c['lon'], 7), 'lat': round(c['lat'], 7),
                'name': t.get('name', ''), 'name_en': t.get('name:en', '')})

# ---- 并入官方地图图标（extract_facility_icons.py 产出）----
# 官方 ATM/売店/WC 位置权威；与既有 OSM 同类点 25m 内视为同一设施（保留 OSM 有名版本）
import math
ICONS = os.path.join(os.path.dirname(__file__), 'out', 'official-icons.json')
# 官方图标类型 → facilities 类型。新增 AED(♥)/停车(P)/校门(Gate)/出入口(IN/OUT)：
# 这些在 OSM 里基本无对应点，与既有点天然不冲突（同类 25m 去重仍生效）。
TYPE_MAP = {'atm': 'atm', 'store': 'convenience', 'toilets': 'toilets',
            'parking': 'parking', 'aed': 'aed', 'gate': 'gate',
            'entrance': 'entrance', 'exit': 'exit'}
MLON = 111320 * math.cos(math.radians(33.6)); MLAT = 111320.0
if os.path.exists(ICONS):
    n_add = 0
    for ic in json.load(open(ICONS, encoding='utf-8')):
        typ = TYPE_MAP.get(ic['type'])
        if typ is None:              # 未知类型：跳过而非崩溃
            continue
        same = [f for f in out if f['type'] in
                (('atm', 'bank') if typ == 'atm' else
                 ('convenience', 'kiosk', 'supermarket') if typ == 'convenience' else (typ,))]
        if any(math.hypot((f['lon'] - ic['lon']) * MLON, (f['lat'] - ic['lat']) * MLAT) < 25
               for f in same):
            continue
        n_add += 1
        out.append({'id': f'official_{typ}_{n_add}', 'type': typ,
                    'lon': ic['lon'], 'lat': ic['lat'],
                    'name': '', 'name_en': ic.get('name', ''),
                    'src': 'kyudai-map-2026'})
    print('官方图标补入:', n_add)

json.dump(out, open(DST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
from collections import Counter
print('facilities:', len(out), Counter(f['type'] for f in out))
