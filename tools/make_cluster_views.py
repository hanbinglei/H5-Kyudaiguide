# -*- coding: utf-8 -*-
"""
make_cluster_views.py — 为待人工指认的编号簇生成"插画 vs OSM 轮廓"并排对照图

左图：PDF 对应区域高清渲染（编号标记周围 ±70pt，放大 3x）
右图：MLS 变换预测位置周围的 OSM 建筑轮廓（含 osm_id 短标签 + 已有名称 +
      预测落点红叉），坐标按米缩放，与左图方向一致（北朝上）

输出: tools/out/cluster_<name>.png，供人工视觉比对后指认归属。
"""
import json, math, os, sys
import fitz
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon as MplPoly
from matplotlib.font_manager import FontProperties
FP = FontProperties(fname='C:/Windows/Fonts/meiryo.ttc')

BASE = os.path.join(os.path.dirname(__file__), '..')
OUT = os.path.join(os.path.dirname(__file__), 'out')

markers = {int(k): v for k, v in json.load(open(f'{OUT}/markers.json')).items()}
legend = {int(k): v for k, v in json.load(open(f'{OUT}/legend.json', encoding='utf-8')).items()}
asg = {int(k): v for k, v in json.load(open(f'{OUT}/assignments.json', encoding='utf-8')).items()}
geo = json.load(open(os.path.join(BASE, 'h5-mvp/data/osm-buildings.geojson'), encoding='utf-8'))

LAT0 = 33.6
MLON = 111320.0 * math.cos(math.radians(LAT0))
MLAT = 111320.0

# 命令行: python make_cluster_views.py 名称 编号1 编号2 ...
name = sys.argv[1]
nums = [int(x) for x in sys.argv[2:]]

# ---- 左图：PDF 裁剪渲染 ----
pts = [(m['x'], m['y']) for n in nums for m in markers.get(n, [])]
xs, ys = [p[0] for p in pts], [p[1] for p in pts]
pad = 70
clip = fitz.Rect(min(xs)-pad, min(ys)-pad, max(xs)+pad, max(ys)+pad)
page = fitz.open(os.path.join(BASE, 'ITO_1_Eng.pdf'))[0]
pix = page.get_pixmap(matrix=fitz.Matrix(3, 3), clip=clip)
pdf_png = f'{OUT}/cluster_{name}_pdf.png'
pix.save(pdf_png)

# ---- 右图：OSM 轮廓 ----
lls = [(h['lon'], h['lat']) for n in nums for h in asg[n]['hits']]
lons, lats = [p[0] for p in lls], [p[1] for p in lls]
lon0, lat0 = (min(lons)+max(lons))/2, (min(lats)+max(lats))/2
half = 180  # 米
fig, ax = plt.subplots(figsize=(9, 9))
for f in geo['features']:
    ring = f['geometry']['coordinates'][0]
    mx = [(p[0]-lon0)*MLON for p in ring]
    my = [(p[1]-lat0)*MLAT for p in ring]
    if max(mx) < -half or min(mx) > half or max(my) < -half or min(my) > half:
        continue
    nm = f['properties'].get('name', '')
    color = '#2a7' if nm else '#999'
    ax.add_patch(MplPoly(list(zip(mx, my)), closed=True, fill=True,
                         facecolor='#cde' if not nm else '#cec', edgecolor=color, lw=1))
    cx, cy = sum(mx)/len(mx), sum(my)/len(my)
    sid = str(f['properties']['id'])[-4:]          # osm_id 后4位做短标签
    ax.text(cx, cy, sid + ('\n' + nm[:10] if nm else ''), fontsize=7,
            ha='center', va='center', color='#345')
for n in nums:
    for h in asg[n]['hits']:
        px, py = (h['lon']-lon0)*MLON, (h['lat']-lat0)*MLAT
        ax.plot(px, py, 'rx', ms=12, mew=2.5)
        ax.text(px+3, py+3, str(n), fontsize=13, color='red', fontproperties=FP)
ax.set_xlim(-half, half); ax.set_ylim(-half, half)
ax.set_aspect('equal'); ax.set_title(f'{name}: OSM footprints (red X = predicted)', fontproperties=FP)
ax.grid(True, alpha=0.2)
osm_png = f'{OUT}/cluster_{name}_osm.png'
plt.savefig(osm_png, dpi=110, bbox_inches='tight')
print('saved:', pdf_png, osm_png)
for n in nums:
    print(n, legend[n][:60], '->', [(h['how'], h['osm_id'], h['osm_name']) for h in asg[n]['hits']])
