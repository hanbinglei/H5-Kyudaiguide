# -*- coding: utf-8 -*-
"""
build_graph.py — 从 Overpass 步行路网构建 A* 导航图

输入: %TMP%/overpass_paths.json（highway=footway/path/service/... ways, out geom）
输出: h5-mvp/data/route-graph.json
      {"nodes": [[lon,lat],...], "edges": [[i,j,w_m],...]}  # 无向，w=米

处理：
  1. 顶点按坐标 1e-7 度取整合并（OSM 共享节点坐标完全一致，取整只为浮点保险）
  2. steps(台阶) 边权 ×1.5（走得慢），其余按实长
  3. 只保留最大连通分量（丢弃校外孤立路段）
"""
import json, math, os
from collections import defaultdict

SRC = os.path.join(os.environ['TMP'], 'overpass_paths.json')
DST = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'route-graph.json')

MLON = 111320 * math.cos(math.radians(33.6))
MLAT = 111320.0

raw = json.load(open(SRC, encoding='utf-8'))
node_id = {}          # 坐标key → 节点索引
nodes = []            # [lon, lat]
adj = defaultdict(set)
edges = {}            # (i,j) i<j → weight

def get_node(lon, lat):
    key = (round(lon, 7), round(lat, 7))
    if key not in node_id:
        node_id[key] = len(nodes)
        nodes.append([key[0], key[1]])
    return node_id[key]

nways = 0
for e in raw['elements']:
    if e.get('type') != 'way' or 'geometry' not in e:
        continue
    nways += 1
    penalty = 1.5 if e.get('tags', {}).get('highway') == 'steps' else 1.0
    pts = e['geometry']
    for a, b in zip(pts, pts[1:]):
        i, j = get_node(a['lon'], a['lat']), get_node(b['lon'], b['lat'])
        if i == j:
            continue
        w = math.hypot((a['lon']-b['lon'])*MLON, (a['lat']-b['lat'])*MLAT) * penalty
        k = (min(i, j), max(i, j))
        if k not in edges or edges[k] > w:
            edges[k] = round(w, 1)
        adj[i].add(j); adj[j].add(i)

# 最大连通分量（BFS）
seen, best = set(), []
for start in range(len(nodes)):
    if start in seen:
        continue
    comp, queue = [], [start]
    seen.add(start)
    while queue:
        u = queue.pop()
        comp.append(u)
        for v in adj[u]:
            if v not in seen:
                seen.add(v); queue.append(v)
    if len(comp) > len(best):
        best = comp

keep = set(best)
remap = {old: new for new, old in enumerate(sorted(keep))}
out_nodes = [nodes[old] for old in sorted(keep)]
out_edges = [[remap[i], remap[j], w] for (i, j), w in edges.items()
             if i in keep and j in keep]

json.dump({'nodes': out_nodes, 'edges': out_edges}, open(DST, 'w'), separators=(',', ':'))
kb = os.path.getsize(DST) / 1024
print(f'ways: {nways} | 全部节点: {len(nodes)} | 最大连通分量: {len(out_nodes)} 节点 / {len(out_edges)} 边 | {kb:.0f}KB')
