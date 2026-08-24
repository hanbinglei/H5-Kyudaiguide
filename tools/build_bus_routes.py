# -*- coding: utf-8 -*-
"""
build_bus_routes.py — 抓昭和バス伊都线代表班次的停靠站序列，建动画用路径数据

数据链（用于地图上的巴士示意动画）：
  StopsList 页 = 一个班次的「站序 + 各站着时刻」
  → 站名匹配 facilities 的 bus_stop 坐标（校内站有坐标；校外站无坐标，动画只画校内段）
  → 各站相对发车的分钟偏移 offset（动画按 当前时间-发车时间 在站间线性插值）
输出 h5-mvp/data/bus-routes.json
"""
import json, os, re, urllib.request, time

NODE = '00291944'
LINES = [('gakuen', '00053907'), ('shusenji', '00053915'), ('yokohama-nishi', '00053914')]


def jina(url):
    req = urllib.request.Request('https://r.jina.ai/' + url,
                                 headers={'User-Agent': 'KyudaimapBus/1.0'})
    return urllib.request.urlopen(req, timeout=90).read().decode('utf-8', 'replace')


# ---- bus_stop 坐标索引（归一化名 → (lat,lon)）----
FAC = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'facilities.json')
stops = [f for f in json.load(open(FAC, encoding='utf-8')) if f['type'] == 'bus_stop']


def norm(s):
    s = re.sub(r'[（(].*?[）)]', '', s)                       # 去括号
    s = s.replace('九大', '').replace('前', '')               # 去「九大」前缀/「前」后缀噪声
    return re.sub(r'[\s　・·]', '', s).lower()


stop_idx = {}
for f in stops:
    stop_idx.setdefault(norm(f.get('name', '')), (f['lat'], f['lon']))


def match_coord(name):
    k = norm(name)
    if not k:
        return None
    if k in stop_idx:
        return stop_idx[k]
    # 包含兜底：仅当双方核心名都够长(>=4)才认，避免「元岡」这类短地名前缀把
    # 元岡郵便局前/元岡小学校前 误配到同一站
    for sk, ll in stop_idx.items():
        if len(sk) >= 4 and len(k) >= 4 and (k in sk or sk in k):
            return ll
    return None


def to_min(h, m):
    return int(h) * 60 + int(m)


routes = {}
for lid, link in LINES:
    diag = jina(f'https://transfer.navitime.biz/showa-bus/pc/diagram/BusDiagram'
                f'?linkId={link}&nodeId={NODE}&updown=0')
    # 取第一个班次的 StopsList 参数（operationId + 日期时分）
    m = re.search(r'StopsList\?operationId=([0-9a-f]+)&year=(\d+)&month=(\d+)&day=(\d+)'
                  r'&hour=(\d+)&minutes=(\d+)', diag)
    if not m:
        print(f'{lid}: 找不到班次链接'); continue
    op, y, mo, d, h, mi = m.groups()
    sl = jina(f'https://transfer.navitime.biz/showa-bus/pc/diagram/StopsList?operationId={op}'
              f'&year={y}&month={mo}&day={d}&hour={h}&minutes={mi}&type&linkId={link}'
              f'&nodeId={NODE}&updown=0')
    # 解析站序：`*   站名` 之后跟 `HH:MM 発` 或 `HH:MM着`
    seq = re.findall(r'\*\s+([^\n\[]+?)\s*\n\s*\n\s*(\d{1,2}):(\d{2})\s*(発|着)', sl)
    if not seq:
        print(f'{lid}: 站序解析失败'); continue
    dep = to_min(seq[0][1], seq[0][2])
    stop_list, matched = [], 0
    for name, hh, mm, _ in seq:
        name = name.strip()
        ll = match_coord(name)
        if ll:
            matched += 1
        stop_list.append({'name': name, 'offset': to_min(hh, mm) - dep,
                          'lat': ll[0] if ll else None, 'lon': ll[1] if ll else None})
    routes[lid] = {'sample_departure': f'{int(h):02d}:{int(mi):02d}', 'stops': stop_list}
    print(f'{lid}: {len(stop_list)} 站, 坐标匹配 {matched}/{len(stop_list)}, '
          f'全程 {stop_list[-1]["offset"]} 分')
    time.sleep(1)

result = {
    'source': '昭和バス / NaviTime StopsList',
    'note': ('每线路取一个代表班次的站序+站间相对分钟(offset)。动画：位置 = 按 当前时间-发车时间 '
             '在相邻两站 offset 间线性插值。校外站无坐标(lat/lon=null)，动画只连有坐标的校内段。'),
    'fetched': __import__('datetime').date.today().isoformat(),
    'routes': routes,
}
DST = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'bus-routes.json')
json.dump(result, open(DST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('→', DST)
