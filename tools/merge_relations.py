# -*- coding: utf-8 -*-
"""
merge_relations.py — 把 OSM multipolygon relation 建筑并入数据集

背景：West 1/2/4/5号館、総合学習プラザ、ドミトリー1/2/3 等带中庭的连体楼
     在 OSM 里是 relation 而非 way，此前只抓 way 导致这些楼在交互层缺失
     （用户在地图上看得见底图轮廓但点不了）。本脚本一次性补齐：

  1. 拼接 outer 环（首尾相接缝合分段 way），holes 作为附加环保留
  2. id = 10^10 + relation_id（避免与 way id 空间冲突）
  3. 并入 osm-buildings.geojson（备份 .v2.bak）
  4. 写入三语标注 annotations-claude.json；撤销 #35 此前的低置信错配（1388121634）

输入: %TMP%/overpass_relations.json（out geom）
"""
import json, os, shutil

BASE = os.path.join(os.path.dirname(__file__), '..')
OUT = os.path.join(os.path.dirname(__file__), 'out')
GEO = os.path.join(BASE, 'h5-mvp', 'data', 'osm-buildings.geojson')
ANN = os.path.join(BASE, 'h5-mvp', 'data', 'annotations-claude.json')
ID_OFFSET = 10_000_000_000

raw = json.load(open(os.path.join(os.environ['TMP'], 'overpass_relations.json'), encoding='utf-8'))

def stitch(segments):
    """把若干 way 线段缝成闭环列表。端点坐标完全一致即相连（OSM 共享节点保证）。"""
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
                break   # 缝不上（数据缺口）：放弃闭合，按原样输出
        rings.append(ring)
    return rings

new_feats, resolved = [], []
for e in raw['elements']:
    if e.get('type') != 'relation':
        continue
    outers = [m['geometry'] for m in e.get('members', []) if m.get('role') == 'outer' and 'geometry' in m]
    inners = [m['geometry'] for m in e.get('members', []) if m.get('role') == 'inner' and 'geometry' in m]
    if not outers:
        continue
    outer_rings = stitch(outers)
    outer_rings.sort(key=len, reverse=True)          # 最大环放首位（质心/命中都用它）
    rings = [[[x, y] for x, y in r] for r in outer_rings[:1]]
    rings += [[[x, y] for x, y in r] for r in stitch(inners)]
    t = e.get('tags', {})
    fid = ID_OFFSET + e['id']
    new_feats.append({
        'type': 'Feature',
        'geometry': {'type': 'Polygon', 'coordinates': rings},
        'properties': {'id': fid, 'name': t.get('name', ''), 'name_ja': t.get('name:ja', ''),
                       'name_en': t.get('name:en', ''), 'building': t.get('building', ''),
                       'amenity': '', 'leisure': ''}})
    if t.get('name'):
        resolved.append((e['id'], fid, t['name']))

geo = json.load(open(GEO, encoding='utf-8'))
existing = {f['properties']['id'] for f in geo['features']}
added = [f for f in new_feats if f['properties']['id'] not in existing]
bak = GEO + '.v2.bak'
if not os.path.exists(bak):
    shutil.copy2(GEO, bak)
geo['features'] += added
json.dump(geo, open(GEO, 'w', encoding='utf-8'), ensure_ascii=False)

# ---- 标注：编号 → relation（zh/en 为人工补译，ja 用 OSM 名）----
NAME3 = {
    'ウエスト1号館': (36, 'West 1号馆', 'West Zone 1'),
    'ウエスト2号館': (35, 'West 2号馆（售店·书店）', 'West Zone 2 (Stores)'),
    'ウエスト4号館': (33, 'West 4号馆（就职咨询室）', 'West Zone 4'),
    'ウエスト5号館': (32, 'West 5号馆（Agri Dining）', 'West Zone 5, Agri. Dining'),
    '総合学習プラザ': (40, '综合学习广场', 'Open Learning Plaza'),
    'ドミトリー1': (75, '宿舍楼Ⅰ', 'Dormitory I (Student Residence)'),
    'ドミトリー2': (76, '宿舍楼Ⅱ', 'Dormitory II (Student Residence)'),
    'ドミトリー3': (77, '宿舍楼Ⅲ', 'Dormitory III (Student Residence)'),
}
ann = json.load(open(ANN, encoding='utf-8'))
meta = json.load(open(os.path.join(OUT, 'annotations-meta.json'), encoding='utf-8'))
# 撤销 #35 旧错配（低置信翼楼条目）
ann.pop('1388121634', None)
meta.pop('1388121634', None)
for relid, fid, nm in resolved:
    if nm in NAME3:
        num, zh, en = NAME3[nm]
        ann[str(fid)] = {'name_zh': zh, 'name_ja': nm, 'name_en': en}
        meta[str(fid)] = {'num': num, 'confidence': 'high'}
json.dump(ann, open(ANN, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(meta, open(os.path.join(OUT, 'annotations-meta.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)

print('relation 建筑并入:', len(added), '| 带名:', [(f, n) for _, f, n in resolved])
print('标注总数:', len(ann))
