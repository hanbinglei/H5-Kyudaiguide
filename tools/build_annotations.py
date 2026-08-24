# -*- coding: utf-8 -*-
"""
build_annotations.py — 生成最终三语标注文件

输入：tools/out/assignments.json（自动归属）+ 本文件内 OVERRIDES（人工改判）
      + NAMES 三语名表（en=2026英文版图例；ja=OSM名/2024日文版图例转录；zh=人工翻译）
输出：
  h5-mvp/data/annotations-claude.json  # {osm_id: {name_zh,name_ja,name_en}}，与标注页导入格式一致
  h5-mvp/data/poi-points.json          # 非建筑设施点位（运动场/农场等）
  tools/out/REVIEW.md                  # 待人工复核清单

名称来源规则：ja 优先用 OSM 已有名（实地核实过的），无则用 2024 日文版图例；
2024/2026 版编号在 23-25、100 有错位，错位处 ja 留空并写入复核清单，不硬凑。
"""
import json, os

BASE = os.path.join(os.path.dirname(__file__), '..')
OUT = os.path.join(os.path.dirname(__file__), 'out')

asg = {int(k): v for k, v in json.load(open(f'{OUT}/assignments.json', encoding='utf-8')).items()}
geo = json.load(open(os.path.join(BASE, 'h5-mvp/data/osm-buildings.geojson'), encoding='utf-8'))
osm_name = {f['properties']['id']: f['properties']['name'] for f in geo['features']}

# ---- 人工改判（依据：名称精确匹配 / 2024日文版图例交叉验证 / 候选形状分析）----
OVERRIDES = {
    12: 223785628,   # 衛星・通信実験棟 = Satellite Communications Laboratory (IE20)，名称精确匹配
    27: 900234570,   # 工学系総合研究棟 name_en 即 Engineering Research Laboratory；ja图例㉗同名确认
    31: 166554957,   # 水素材料先端科学研究センター(HY10)；ja图例㉛确认（原自动归属海洋構造工学実験棟为误配）
    57: 900436139,   # キャンパス・コモン name_en 即 Campus Common
    7:  1388144045,  # 課外活動施設Ⅲ：预测点27m内唯一像样建筑(562㎡)，中置信
    29: 1388128338,  # 水素ステーション(HY40)：3m处151㎡小型设施，符合加氢站体量
    39: 1388128332,  # QIAO(石のアート)：西講義棟旁30m处51㎡小型构筑物，中置信
    35: 1388121634,  # ウエスト2号館翼楼(393㎡)，低置信 → 复核清单
}
# 待人工裁定（OSM 无可靠轮廓或证据不足）→ 只进复核清单
PENDING = {
    25: '大学农场·园艺区：2026版图上无编号标记文本',
    32: 'West 5号馆：预测点周边只有<80㎡小构筑物，连体楼翼未在OSM单独成面',
    33: 'West 4号馆：同上',
    36: 'West 1号馆：预测点落在Big Leaf附近，无独立无名大轮廓',
    40: '综合学习广场（総合学習プラザ）：60m内无候选',
    75: '宿舍楼Ⅰ：预测点周边全是<100㎡小面，疑似OSM未画宿舍主楼',
    76: '宿舍楼Ⅱ：同上', 77: '宿舍楼Ⅲ：同上',
    82: 'NEXT-FC：预测点与I²CNER第1研究楼重叠，需实地确认独立楼',
    100: '大学博物馆收藏库：MLS外推区，预测偏差>700m不可信；2026版新名无日文对照',
}
LOW_CONF = {7, 28, 35, 39, 90}   # 保留但需复核

# ---- 三语名表 {编号: (zh, ja, en)}；ja=None 表示用 OSM 名 ----
N = {
    5:  ('松涛炼成场', None, 'Shoto Training Center'),
    6:  ('课外活动设施Ⅱ', None, 'Extracurricular Activities Facility II'),
    7:  ('课外活动设施Ⅲ', '課外活動施設Ⅲ', 'Extracurricular Activities Facility III'),
    8:  ('小体育馆', None, 'Gymnasium (West)'),
    9:  ('加速器·束流应用科学中心（CE70）', None, 'Center for Accelerator and Beam Applied Science (CE70)'),
    10: ('船舶海洋性能工学实验楼（EN80）', None, 'Seakeeping and Manoeuvring Basin (EN80)'),
    11: ('先进航空航天工学实验楼（EN70）', None, 'Center for Advanced Aerospace Engineering (EN70)'),
    12: ('卫星·通信实验楼（IE20）', None, 'Satellite Communications Laboratory (IE20)'),
    13: ('农业生物研究设施（AG40）', None, 'Agri-Bio Research Laboratory (AG40)'),
    14: ('公共3号馆（CF3）', None, 'Common Facility 3 (CF3)'),
    15: ('次世代能源实证设施（FE）', None, 'Hydrogen Institute for Sustainability (FE)'),
    20: ('生物环境利用推进中心（AG10）', None, 'Biotron Application Center (AG10)'),
    21: ('水环境·森林保全实验楼（AG11）', None, 'Water Environment Engineering Laboratory (AG11)'),
    22: ('家蚕生物资源研究设施（AG22）', None, 'Laboratory for Silkworm Bioresources (AG22)'),
    27: ('工学系综合研究楼（协作空间）', None, 'Engineering Research Laboratory'),
    28: ('钢铁研究中心（EN40）', '鉄鋼リサーチセンター（EN40）', 'Research Center for Steel (EN40)'),
    29: ('加氢站（HY40）', '水素ステーション（HY40）', 'Hydrogen Station (HY40)'),
    30: ('氢能源国际研究中心（HY30）', None, 'Hydrogen Institute for Sustainability (HY30)'),
    31: ('氢材料尖端科学研究中心（HY10）', None, 'Hydrogen Institute for Sustainability (HY10)'),
    34: ('West 3号馆', None, 'West Zone 3'),
    35: ('West 2号馆（售店·书店）', 'ウエスト2号館（売店・書店）', 'West Zone 2 (Stores)'),
    37: ('Big Dora（食堂·售店）', None, 'Big Dora (Restaurant and Stores)'),
    38: ('西讲义楼（E-café）', None, 'Lecture Hall West, E-café'),
    39: ('石艺术 QIAO', '石のアート QIAO（チャオ）', 'QIAO (Rock Art)'),
    41: ('Big Leaf（食堂·商店·讲义室）', None, 'Big Leaf (Restaurant, Shops and Lecture Rooms)'),
    42: ('理系图书馆（Libca）', None, 'Science and Technology Library'),
    43: ('信息基盘研究开发中心楼', None, 'Research Institute for Information Technology Building'),
    44: ('低温中心（CE60,61）', None, 'Low Temperature Center (Ito Center) (CE60, 61)'),
    45: ('超导系统科学研究中心（CE50,51）', None, 'Research Institute of Superconductor Science and Systems (RISS)'),
    46: ('先导物质科学研究所（CE41）', None, 'Institute for Materials Chemistry and Engineering (CE41)'),
    47: ('环境工学研究教育中心（CE40）', None, 'Center for Research and Education of Environmental Technology (CE40)'),
    48: ('同位素综合中心（CE31）', None, 'Central Institute of Radioisotope Science and Safety Management (CE31)'),
    49: ('超高压电子显微镜楼（CE20,21）', None, 'Research Laboratory for High Voltage Electron Microscopy (CE20, 21)'),
    50: ('公共1号馆（CF1）', None, 'Common Facility 1 (CF1)'),
    51: ('国际空间天气科学·教育中心（CE10）', None, 'International Research Center for Space and Planetary Environmental Science (CE10)'),
    52: ('稻盛财团纪念馆', None, 'INAMORI Center'),
    53: ('能源中心', None, 'Energy Center'),
    54: ('公共4号馆（CF4）', None, 'Common Facility 4 (CF4)'),
    55: ('环保中心', None, 'Eco Center'),
    56: ('公共2号馆（CF2·童梦咖啡）', None, 'Common Facility 2 (CF2), Doumu Cafe'),
    57: ('校园公共空间', None, 'Campus Common'),
    58: ('给水中心·环境安全中心', None, 'Water Supply Center, Center for Environment and Safety'),
    59: ('Center 5号馆', None, 'Center Zone 5'),
    60: ('Center 6号馆·伊都诊疗所', None, 'Center Zone 6, Ito Clinic'),
    61: ('Big Sand（食堂·售店）', None, 'Big Sand (Restaurant and Stores)'),
    62: ('Big Orange（信息中心）', None, 'Big Orange (Information Center)'),
    63: ('Center 1号馆', None, 'Center Zone 1'),
    64: ('Center 2号馆（Q-Commons·Qasis食堂）', None, 'Center Zone 2, Q-Commons & Qasis'),
    65: ('Center 3号馆', None, 'Center Zone 3'),
    66: ('Center 4号馆', None, 'Center Zone 4'),
    67: ('椎木讲堂（大学本部）', None, 'Shiiki Hall, University Headquarters'),
    68: ('藤井画廊', 'フジイギャラリー', 'Fujii Gallery'),
    70: ('课外活动设施Ⅰ', None, 'Extracurricular Activities Facility I'),
    71: ('综合体育馆', None, 'Gymnasium'),
    73: ('皎皎舍（书店·售店）', None, 'Koh-Koh-Sha House (Stores)'),
    74: ('亭亭舍', None, 'Tei-Tei-Sha House'),
    78: ('伊都迎宾馆', None, 'Ito Guest House'),
    79: ('日本乔纳森·KS·蔡文化馆', None, 'Jonathan KS Choi Cultural Centre of Japan'),
    80: ('碳中和能源国际研究所 第1研究楼', None, 'International Institute for Carbon-Neutral Energy Research (I²CNER) 1'),
    81: ('碳中和能源国际研究所 第2研究楼', None, 'International Institute for Carbon-Neutral Energy Research (I²CNER) 2'),
    83: ('共进化社会系统创新设施', None, 'Research Facilities for Co-Evolutional Social Systems'),
    84: ('East 1号馆（售店·就职咨询）', None, 'East Zone 1 (Stores)'),
    85: ('East 2号馆', None, 'East Zone 2'),
    86: ('大讲义室Ⅰ（铃与未来厅Ⅰ）', None, 'Lecture Room I (Suzuyo Mirai Hall I)'),
    87: ('大讲义室Ⅱ（铃与未来厅Ⅱ）', None, 'Lecture Room II (Suzuyo Mirai Hall II)'),
    88: ('Big Sky（食堂）', None, 'Big Sky (Restaurant)'),
    89: ('中央图书馆', None, 'Central Library'),
    90: ('石原古坟横穴式石室搬迁展示', '石ヶ原古墳横穴式石室の移築展示', 'Exhibition of Stone Chamber from Ishigahara Tumulus'),
    91: ('建筑构造实验楼（HE10）', None, 'Structural Building Engineering Laboratory (HE10)'),
    92: ('建筑环境实验楼（HE20）', None, 'Architectural Environment Research Building (HE20)'),
    93: ('AMS专攻实验楼（IS10）', None, 'Laboratory for Automotive Science (IS10)'),
    94: ('行动实验楼（HE30）', None, 'Psychological Experiment Building (HE30)'),
    95: ('综合临床心理中心（HE40）', None, 'Center for Clinical Psychology and Human Development (HE40)'),
    96: ('伊都协奏馆（学生宿舍）', None, 'Ito Harmony House (Student Residence)'),
}
# 26 号一号多楼：ja 用 OSM 各自名，en 统一官方名
N26 = ('工学部实验设施群', None, 'Engineering Department Experimental Facilities')

# POI 点位 {编号: (zh, ja, en, type)}
POI = {
    1:  ('射箭场', 'アーチェリー場', 'Archery Range', 'sports'),
    2:  ('棒球场', '野球場', 'Baseball Field', 'sports'),
    3:  ('田径场', '陸上競技場', 'Athletic Field', 'sports'),
    4:  ('弓道场', '弓道場', 'Japanese Archery Range', 'sports'),
    16: ('附属农场（畜产区）', '附属農場（畜産エリア）', 'University Farm (Livestock Area)', 'farm'),
    17: ('附属农场（水田区）', '附属農場（水田エリア）', 'University Farm (Paddy Field)', 'farm'),
    18: ('网球场', 'テニスコート', 'Tennis Court', 'sports'),
    19: ('生物多样性保全区', '生物多様性保全ゾーン', 'Biodiversity Conservation Zone', 'nature'),
    23: ('植物圃场设施', '植物圃場施設', 'Agriculture Zone', 'farm'),
    24: ('农学部百周年纪念广场', '', 'Centennial Space of the Faculty of Agriculture', 'plaza'),
    69: ('网球场', 'テニスコート', 'Tennis Court', 'sports'),
    72: ('多目的运动场', '多目的グラウンド', 'Multipurpose Sports Field', 'sports'),
    97: ('多目的运动场', '多目的グラウンド', 'Multipurpose Sports Field', 'sports'),
    98: ('网球场', 'テニスコート', 'Tennis Court', 'sports'),
    99: ('水田圃场设施', '水田圃場施設', 'Agriculture Zone', 'farm'),
}

annotations, meta, poi_out = {}, {}, []
for n, e in asg.items():
    if n in PENDING or n in POI:
        continue
    if n == 26:
        for h in e['hits']:
            if h['osm_id']:
                annotations[str(h['osm_id'])] = {
                    'name_zh': N26[0] + '·' + (osm_name.get(h['osm_id']) or ''),
                    'name_ja': osm_name.get(h['osm_id']) or '',
                    'name_en': N26[2]}
                meta[str(h['osm_id'])] = {'num': 26, 'confidence': 'high'}
        continue
    if n not in N:
        continue
    oid = OVERRIDES.get(n) or e['hits'][0]['osm_id']
    if not oid:
        continue
    zh, ja, en = N[n]
    annotations[str(oid)] = {
        'name_zh': zh,
        'name_ja': ja if ja is not None else (osm_name.get(oid) or ''),
        'name_en': en,
        'num': n}
    meta[str(oid)] = {'num': n, 'confidence': 'low' if n in LOW_CONF else 'high'}

for n, (zh, ja, en, typ) in POI.items():
    if n not in asg:
        continue
    h = asg[n]['hits'][0]
    poi_out.append({'num': n, 'type': typ, 'lon': h['lon'], 'lat': h['lat'],
                    'name_zh': zh, 'name_ja': ja, 'name_en': en})

json.dump(annotations, open(os.path.join(BASE, 'h5-mvp/data/annotations-claude.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
json.dump(poi_out, open(os.path.join(BASE, 'h5-mvp/data/poi-points.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
json.dump(meta, open(f'{OUT}/annotations-meta.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# ---- 复核清单 ----
lines = ['# 标注复核清单（%d 栋自动标注 + %d 个POI点）\n' % (len(annotations), len(poi_out)),
         '## 待人工裁定（未标注，请在标注页手动指认）\n']
for n, why in sorted(PENDING.items()):
    lines.append(f'- **#{n}** {asg[n]["legend_en"] if n in asg else "(图上无标记)"} — {why}')
lines.append('\n## 低置信标注（已标注，建议实地/街景核对）\n')
for oid, m in meta.items():
    if m['confidence'] == 'low':
        a = annotations[oid]
        lines.append(f'- **#{m["num"]}** {a["name_ja"]} → osm {oid}')
lines.append('\n## 版本差异备忘\n')
lines.append('- 英文版图例为 2026-04，日文版为 2024-04；编号 23-25、100 两版有错位/改名')
lines.append('- #24 日文名、#100 日文名暂缺（2026 版新增/改名，2024 日文版无对应）')
lines.append('- #8 小体育館：2026 英文版图例作 Gymnasium（West Zone #8），与 #71 総合体育館区分')
open(f'{OUT}/REVIEW.md', 'w', encoding='utf-8').write('\n'.join(lines))

print(f'annotations: {len(annotations)} 栋 | POI: {len(poi_out)} 点 | pending: {len(PENDING)}')
print('低置信:', [m['num'] for m in meta.values() if m['confidence'] == 'low'])
