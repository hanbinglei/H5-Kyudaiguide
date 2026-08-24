# -*- coding: utf-8 -*-
"""
merge_official_extras.py — 把官方图新设施类型增量并入 facilities.json

背景：官方矢量图 ITO_1_Eng.pdf 除 A/S/WC 外还含 AED(♥)/停车(P)/校门(Gate)/
出入口(IN/OUT)，由 extract_facility_icons.py 提取到 official-icons.json。
本脚本只把这些**新类型**补进现有 facilities.json，不重建全表——
因为 build_facilities.py 依赖 %TMP%/overpass_amenity.json（Overpass 缓存，常缺失），
而 A/S/WC/OSM 点早已并入现表，无需重跑。

幂等：本脚本自己加的点带 src=SRC_TAG，重跑时先剔除再重加，可安全反复执行。
去重：新点与现表同类点 25m 内视为同一设施（主要针对 AED——现表已有 1 个 OSM AED）。
"""
import json, os, math, collections

FAC = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'facilities.json')
ICONS = os.path.join(os.path.dirname(__file__), 'out', 'official-icons.json')
SRC_TAG = 'kyudai-map-2026-ext'
EXTRA = {'parking', 'aed', 'gate', 'entrance', 'exit'}   # 本轮新增的类型

fac = json.load(open(FAC, encoding='utf-8'))
icons = json.load(open(ICONS, encoding='utf-8'))

# 幂等：先移除上轮本脚本追加的点
fac = [f for f in fac if f.get('src') != SRC_TAG]

MLON = 111320 * math.cos(math.radians(33.6))
MLAT = 111320.0


def near(a, b, m=25):
    return math.hypot((a['lon'] - b['lon']) * MLON, (a['lat'] - b['lat']) * MLAT) < m


added = collections.Counter()
for ic in icons:
    if ic['type'] not in EXTRA:
        continue
    # 与现表同类点去重（AED 与既有 OSM AED；其余类型现表暂无，天然不冲突）
    if any(f['type'] == ic['type'] and near(f, ic) for f in fac):
        continue
    added[ic['type']] += 1
    fac.append({'id': f"off_{ic['type']}_{added[ic['type']]}", 'type': ic['type'],
                'lon': ic['lon'], 'lat': ic['lat'],
                'name': '', 'name_en': ic.get('name', ''), 'src': SRC_TAG})

json.dump(fac, open(FAC, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('增量补入:', dict(added), '| facilities 合计', len(fac))
print('全类型分布:', dict(collections.Counter(f['type'] for f in fac)))
