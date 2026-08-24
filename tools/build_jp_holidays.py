# -*- coding: utf-8 -*-
"""
build_jp_holidays.py — 内閣府「国民の祝日」CSV → jp-holidays.json

用途：巴士时刻表日型判定。日本的祝日即使落在平日也走「日祝ダイヤ」，
只按星期（周六/周日）判定会漏掉山の日、敬老の日等落在平日的法定祝日。
内阁府 CSV 是权威来源，含振替休日・国民の休日。
只保留近未来（>= 去年）以控制体积；离线版会内嵌。
输出 h5-mvp/data/jp-holidays.json
"""
import urllib.request, csv, io, re, json, os, datetime

URL = 'https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv'
KEEP_FROM = datetime.date.today().year - 1   # 保留去年起

req = urllib.request.Request(URL, headers={'User-Agent': 'KyudaimapBus/1.0'})
txt = urllib.request.urlopen(req, timeout=30).read().decode('shift_jis', 'replace')
rows = list(csv.reader(io.StringIO(txt)))

holidays = []
for r in rows[1:]:
    if not r or not re.match(r'\d{4}/\d{1,2}/\d{1,2}', r[0]):
        continue
    y, m, d = map(int, r[0].split('/'))
    if y >= KEEP_FROM:
        holidays.append(f'{y:04d}-{m:02d}-{d:02d}')

result = {
    'source': '内閣府「国民の祝日について」',
    'source_url': URL,
    'fetched': datetime.date.today().isoformat(),
    'note': ('巴士日祝ダイヤ判定：本表(法定祝日/振替休日/国民の休日) 或 周日 → holiday；'
             '周六 → saturday；其余 → weekday。お盆・年末年始等运营商临时ダイヤ改正不含，以官网为准。'),
    'holidays': holidays,
}
DST = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'jp-holidays.json')
json.dump(result, open(DST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(f'祝日 {len(holidays)} 条（{holidays[0]} ~ {holidays[-1]}） -> {DST}')
