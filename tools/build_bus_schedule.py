# -*- coding: utf-8 -*-
"""
build_bus_schedule.py — 抓取昭和バス伊都线时刻表（去程：九大学研都市駅→九大）

数据源：昭和バス官方时刻表（NaviTime 承载）经 Jina Reader 取原始页面。
原始页每个班次链接形如 StopsList?...&day=DD&hour=HH&minutes=MM&...
  day 对应"该栏代表日"：用星期判日型（周一~五=平日 / 周六=土曜 / 周日=日祝），
  比小模型解析可靠。同分钟多目的地会重复出现 → 去重。
输出 h5-mvp/data/bus-schedule.json
"""
import json, os, re, datetime, urllib.request, urllib.parse, time

NODE = '00291944'   # 九大学研都市駅
LINES = [
    ('gakuen',        '00053907', '九州大学線〔学園通経由〕', '九州大学线（学园通经由）',
     'Kyushu Univ. Line (via Gakuen-dori)',  '九大東ゲート／九大総合グラウンド方面'),
    ('shusenji',      '00053915', '九州大学線〔周船寺経由〕', '九州大学线（周船寺经由）',
     'Kyushu Univ. Line (via Shusenji)',     '九大総合グラウンド／周船寺／九大工学部前方面'),
    ('yokohama-nishi', '00053914', '九州大学線〔横浜西経由〕', '九州大学线（横浜西经由）',
     'Kyushu Univ. Line (via Yokohama-nishi)', '九大総合グラウンド／横浜西／九大工学部前方面'),
]


def daytype(y, m, d):
    wd = datetime.date(y, m, d).weekday()   # 0=Mon..6=Sun
    return 'weekday' if wd <= 4 else ('saturday' if wd == 5 else 'holiday')


def fetch(link, updown):
    url = (f'https://transfer.navitime.biz/showa-bus/pc/diagram/BusDiagram'
           f'?linkId={link}&nodeId={NODE}&updown={updown}')
    req = urllib.request.Request('https://r.jina.ai/' + url,
                                 headers={'User-Agent': 'KyudaimapBus/1.0'})
    return urllib.request.urlopen(req, timeout=90).read().decode('utf-8', 'replace')


# 班次链接：...&year=YYYY&month=MM&day=DD&hour=HH&minutes=MM&...
PAT = re.compile(r'year=(\d{4})&month=(\d{1,2})&day=(\d{1,2})&hour=(\d{1,2})&minutes=(\d{1,2})')

out_lines = []
for lid, link, ja, zh, en, toward in LINES:
    md = fetch(link, 0)
    sched = {'weekday': {}, 'saturday': {}, 'holiday': {}}
    for y, mo, d, h, mi in PAT.findall(md):
        dt = daytype(int(y), int(mo), int(d))
        hh, mm = int(h), int(mi)
        sched[dt].setdefault(hh, set()).add(mm)
    # set → 有序 list；hour → 两位字符串键
    sched = {dt: {f'{h:02d}': sorted(v) for h, v in sorted(hh.items())}
             for dt, hh in sched.items()}
    n = sum(len(v) for hh in sched.values() for v in hh.values())
    print(f'{lid}: 平日{sum(len(v) for v in sched["weekday"].values())} '
          f'土{sum(len(v) for v in sched["saturday"].values())} '
          f'日祝{sum(len(v) for v in sched["holiday"].values())}  (计 {n} 班)')
    out_lines.append({'id': lid, 'navitime_link': link, 'name_ja': ja, 'name_zh': zh,
                      'name_en': en, 'toward': toward, 'depart_from_station': sched})
    time.sleep(1)   # 礼貌限速

result = {
    'source': '昭和バス / 昭和自動車',
    'timetable_provider': 'NaviTime (transfer.navitime.biz/showa-bus)',
    'source_url': f'https://transfer.navitime.biz/showa-bus/pc/diagram/LinkSearch?nodeId={NODE}',
    'fetched': datetime.date.today().isoformat(),
    'note': '时刻表可能改点，最新以昭和バス官网为准。区分 平日/土曜/日祝。分钟为从九大学研都市駅发车时刻（去程）。',
    'origin_station': {'name_ja': '九大学研都市駅', 'navitime_node': NODE},
    'lines': out_lines,
}
DST = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'bus-schedule.json')
json.dump(result, open(DST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('→', DST)
