# -*- coding: utf-8 -*-
"""
build_classrooms.py — 从九大官方"講義室の利用"页面生成 classrooms.json

信源（已验真）: https://www.kyushu-u.ac.jp/ja/university/facility/use/kougishitsu/
  伊都地区セン ターゾーン（センター1/2号館）+ イーストゾーン（イースト1/2号館、中央図書館大講義室）
  ※ 页面后半是大橋キャンパス（芸術工学部），必须排除。

编号规则（页面数据自证）：
  センター: 4位数字，第1位=号館，第2位=楼层（1209 = C1 2F）
  イースト: [棟字母]-[3位数字]，数字第1位=楼层（A-101 = A栋 1F）

输入: %TMP%/kougishitsu.md（Jina Reader 抓取）
输出: h5-mvp/data/classrooms.json（覆盖）
"""
import json, os, re

SRC = os.path.join(os.environ['TMP'], 'kougishitsu.md')
DST = os.path.join(os.path.dirname(__file__), '..', 'h5-mvp', 'data', 'classrooms.json')
URL = 'https://www.kyushu-u.ac.jp/ja/university/facility/use/kougishitsu/'

BLD = {   # 官方表"建物名"→ OSM way id（对照 annotations-claude.json）
    'センター1号館': 165694547,
    'センター2号館': 165694554,
    'イースト1号館': 770575334,
    'イースト2号館': 770575335,
    # 大講義室Ⅰ/Ⅱ 官方挂在"中央図書館"名下，但物理上是独立建筑，指到各自轮廓
}
DAIKOGI = {'大講義室Ⅰ': 770575332, '大講義室Ⅱ': 770575333}

lines = open(SRC, encoding='utf-8').read().splitlines()

rooms, cur_bld, in_ito = [], None, False
for ln in lines:
    if '伊都地区' in ln:
        in_ito = True
    elif ln.startswith('**') and 'ゾーン' not in ln and '系' not in ln and '事務局' not in ln:
        # 其他校区标题（大橋等）→ 停止
        if '備考' not in ln and in_ito and cur_bld and '号館' not in ln:
            pass
    if not in_ito or not ln.startswith('|'):
        continue
    cells = [c.strip() for c in ln.strip('|').split('|')]
    if len(cells) < 3 or cells[0].startswith('---') or cells[0] == '建物名 等':
        continue
    # 首列是建筑名 → 切换当前建筑，室名在第2列；否则室名在第1列
    if cells[0] in BLD or cells[0] == '中央図書館':
        cur_bld = cells[0]
        room_cell, seat_cell = cells[1], cells[2]
    else:
        room_cell, seat_cell = cells[0], cells[1]
    if cur_bld is None:
        continue
    # 大橋校区的表建筑名不在 BLD 里，cur_bld 不会切换过去——用室名格式再挡一道：
    m_center = re.fullmatch(r'\d{4}', room_cell)
    m_east = re.fullmatch(r'(演習室|講義室)([A-E])-(\d{3})', room_cell)
    m_daikogi = room_cell in DAIKOGI
    m_presen = room_cell == 'プレゼンスペース'
    if not (m_center or m_east or m_daikogi or m_presen):
        continue
    seats = int(seat_cell.replace(',', '')) if seat_cell.replace(',', '').isdigit() else None

    if m_center and cur_bld in ('センター1号館', 'センター2号館'):
        rooms.append({
            'code': room_cell, 'building': BLD[cur_bld], 'floor': room_cell[1],
            'name_ja': f'{cur_bld} {room_cell}', 'name_zh': '', 'name_en': '',
            'aliases': [f'{cur_bld}{room_cell}'], 'seats': seats, 'source': URL})
    elif m_east and cur_bld in ('イースト1号館', 'イースト2号館'):
        typ, wing, num = m_east.groups()
        code = f'{wing}-{num}'
        rooms.append({
            'code': code, 'building': BLD[cur_bld], 'floor': num[0],
            'name_ja': room_cell, 'name_zh': '', 'name_en': '',
            'aliases': [room_cell, f'{wing}{num}'], 'seats': seats, 'source': URL})
    elif m_daikogi:
        oid = DAIKOGI[room_cell]
        zh = '大讲义室Ⅰ（铃与未来厅Ⅰ）' if room_cell.endswith('Ⅰ') else '大讲义室Ⅱ（铃与未来厅Ⅱ）'
        en = 'Lecture Room I (Suzuyo Mirai Hall I)' if room_cell.endswith('Ⅰ') else 'Lecture Room II (Suzuyo Mirai Hall II)'
        rooms.append({
            'code': room_cell, 'building': oid, 'floor': '1',
            'name_ja': room_cell, 'name_zh': zh, 'name_en': en,
            'aliases': ['鈴与未来ホール' + room_cell[-1], 'Suzuyo Mirai Hall'],
            'seats': seats, 'source': URL})
    elif m_presen:
        rooms.append({
            'code': f'プレゼンスペース（{cur_bld}）', 'building': BLD[cur_bld], 'floor': '1',
            'name_ja': f'{cur_bld} プレゼンスペース', 'name_zh': '演示空间', 'name_en': 'Presentation Space',
            'aliases': ['プレゼンスペース'], 'seats': seats, 'source': URL})

# ---------- West 区教室（2026-07-19 增补，转录自已验真的官方 PDF）----------
# 信源：
#   MECH = 工学部講義室一覧 https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2023/10/Lecture_room.pdf
#   IMI  = ウエスト1号館配置図 https://www.imi.kyushu-u.ac.jp/sites/sgw2020/wp-content/themes/sgw2020/doc/kyushu-room.pdf
# 総合学習プラザ / West1 / West4 在 OSM 无独立轮廓（plaza 官方建築面積 2,145㎡，
# 已核实西講義棟周边无对应无名多边形）→ building_pending + 配准预测坐标（assignments.json）兜底。
MECH = 'https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2023/10/Lecture_room.pdf'
IMI = 'https://www.imi.kyushu-u.ac.jp/sites/sgw2020/wp-content/themes/sgw2020/doc/kyushu-room.pdf'
NISHI = 167423392   # 西講義棟

# 2026-07-19 起 West 楼群轮廓已通过 OSM relation 补齐（tools/merge_relations.py），
# id = 10^10 + relation_id，直接指向真实轮廓，不再需要 building_pending 兜底。
PLAZA = 10019151273   # 総合学習プラザ
WEST1 = 10012235450   # ウエスト1号館
WEST4 = 10019151272   # ウエスト4号館

def west(code, loc, floor, ja, aliases, src, zh='', en=''):
    r = {'code': code, 'building': loc if isinstance(loc, int) else None, 'floor': floor,
         'name_ja': ja, 'name_zh': zh, 'name_en': en, 'aliases': aliases, 'seats': None, 'source': src}
    if isinstance(loc, dict):
        r.update(loc)
    return r

# 西講義棟：工学部第1〜4講義室
for i, fl in [(1, '2'), (2, '2'), (3, '3'), (4, '3')]:
    rooms.append(west(f'工学部第{i}講義室', NISHI, fl, f'工学部第{i}講義室',
                      [f'工学部第{i}', f'第{i}講義室'], MECH))
# 総合学習プラザ：第5〜16 + 大講義室
for i in range(5, 17):
    fl = '1' if i <= 11 else '2'
    rooms.append(west(f'工学部第{i}講義室', PLAZA, fl, f'工学部第{i}講義室',
                      [f'工学部第{i}', f'第{i}講義室', '総合学習プラザ'], MECH))
rooms.append(west('工学部大講義室', PLAZA, '2', '工学部大講義室',
                  ['大講義室（工学部）', '総合学習プラザ大講義室'], MECH,
                  zh='工学部大讲义室', en='Engineering Large Lecture Room'))
# ウエスト4号館：中講義室 + 機械311-313（3xx=3F，与命名规则一致）+ 製図室（楼层图上未定）
rooms.append(west('工学部中講義室', WEST4, '2', '工学部中講義室', ['中講義室'], MECH))
for i, alias in [(311, '機械1'), (312, '機械2'), (313, '機械3')]:
    rooms.append(west(f'{i}講義室', WEST4, '3', f'{i}講義室（{alias}）', [str(i), alias], MECH))
for i in (302, 303, 304):
    rooms.append(west(f'製図室{i}', WEST4, '', f'製図室{i}', [str(i)], MECH))
# ウエスト1号館（IMI 配置図，C/D 棟 4-5F）
W1_ROOMS = [
    ('C-501', '5', '大講義室'), ('C-502', '5', ''), ('C-503', '5', '小講義室'),
    ('C-504', '5', '小講義室'), ('C-512', '5', '中講義室'), ('C-513', '5', '中講義室'),
    ('C-514', '5', ''), ('C-515', '5', ''),
    ('C-408', '4', '大会議室'), ('C-409', '4', '小会議室'),
    ('D-413', '4', 'IMIオーディトリアム'), ('D-414', '4', 'IMIコンファレンスルーム'),
]
for code, fl, typ in W1_ROOMS:
    ja = f'{code}{"／" + typ if typ else ""}'
    rooms.append(west(code, WEST1, fl, ja,
                      [code.replace('-', ''), typ] if typ else [code.replace('-', '')], IMI))

# 去重校验
codes = [r['code'] for r in rooms]
assert len(codes) == len(set(codes)), f'重复 code: {[c for c in codes if codes.count(c) > 1]}'

json.dump(rooms, open(DST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
from collections import Counter
print('教室总数:', len(rooms))
print('按建筑:', Counter(f"{r['building']}" for r in rooms))
print('样例:', json.dumps(rooms[0], ensure_ascii=False))
print('样例East:', json.dumps(next(r for r in rooms if r['code'].startswith('A-')), ensure_ascii=False))
