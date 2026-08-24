# -*- coding: utf-8 -*-
"""
extract_markers.py — 从矢量 PDF (ITO_1_Eng.pdf) 提取建筑编号标记与图例对照表

甄别规则（v3）：
  图例条目 = 纯数字行 && 有右邻文本 && 数字 x0 落在"图例列"上。
  图例列 = 有右邻文本的数字实例按 x0 聚类后，成员 >= 4 的列
          （图例是纵向列表，同列几十个编号；地图标记的 x0 是散布的）。
  其余纯数字行 = 地图标记（同一编号允许多个标记，如 26 工学部实验设施群）。
  比例尺数字：右上角 y<70 且 x>800 的实例排除。

输出 (tools/out/)：
  markers.json  {编号: [{"x":..,"y":..}, ...]}   # 地图标记，PDF pt 坐标
  legend.json   {编号: "English name"}
"""
import fitz, json, os, re
from collections import defaultdict

PDF = os.path.join(os.path.dirname(__file__), '..', 'ITO_1_Eng.pdf')
OUT = os.path.join(os.path.dirname(__file__), 'out')
os.makedirs(OUT, exist_ok=True)

page = fitz.open(PDF)[0]

lines = []
for block in page.get_text('dict')['blocks']:
    if block.get('type') != 0:
        continue
    for line in block['lines']:
        t = ' '.join(s['text'] for s in line['spans']).strip()
        if t:
            lines.append((t, line['bbox']))

num_inst = [(int(t), b) for t, b in lines
            if re.fullmatch(r'\d{1,3}', t) and 1 <= int(t) <= 100]
text_lines = [(t, b) for t, b in lines if not re.fullmatch(r'\d{1,3}', t)]

def right_neighbor(bbox):
    """编号右侧 20pt 内、垂直重叠 >50% 的最近文本行"""
    x0, y0, x1, y1 = bbox
    best = None
    for t, b in text_lines:
        if 0 <= b[0] - x1 <= 20 and min(y1, b[3]) - max(y0, b[1]) > (y1 - y0) * 0.5:
            if best is None or b[0] < best[1][0]:
                best = (t, b)
    return best

# ---- 第一遍：找图例列（有右邻的数字实例按 x0 聚类，容差 3pt）----
cand = [(n, b, right_neighbor(b)) for n, b in num_inst]
cols = defaultdict(list)
for n, b, nb in cand:
    if nb:
        cols[round(b[0] / 3) * 3].append(n)
legend_cols = {x for x, members in cols.items() if len(members) >= 4}

def in_legend_col(x0):
    return any(abs(round(x0 / 3) * 3 - c) <= 3 for c in legend_cols)

# ---- 第二遍：分类 ----
markers, legend = defaultdict(list), {}
for n, b, nb in cand:
    cx, cy = (b[0] + b[2]) / 2, (b[1] + b[3]) / 2
    if cy < 70 and cx > 800:            # 比例尺区域
        continue
    # 图例条目：在图例列上 + 右邻文本是正经名称（>=4 字符，排除 WC/P/S 等图标短码）
    if nb and in_legend_col(b[0]) and len(nb[0].strip()) >= 4:
        if n not in legend:
            legend[n] = nb[0].strip()
    else:                               # 地图标记
        markers[n].append({'x': round(cx, 2), 'y': round(cy, 2)})

json.dump(markers, open(os.path.join(OUT, 'markers.json'), 'w'), indent=1)
json.dump(legend, open(os.path.join(OUT, 'legend.json'), 'w', encoding='utf-8'),
          indent=1, ensure_ascii=False)

multi = {n: len(v) for n, v in markers.items() if len(v) > 1}
print('markers:', len(markers), '| legend:', len(legend))
print('marker missing:', sorted(set(range(1, 101)) - set(markers)))
print('legend missing:', sorted(set(range(1, 101)) - set(legend)))
print('multi-marker:', multi)
print('legend cols:', sorted(legend_cols))
