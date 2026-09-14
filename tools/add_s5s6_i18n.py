#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""S5/S6 三语译本（guide-academic 新增 9 块 + 改写的 1 块）。
配套：node tools/merge_body_i18n.js guide-academic tools/.s56_i18n.json --merge
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = json.load(open(os.path.join(ROOT, "tools", ".s56_blocks.json"), encoding="utf-8"))
k = {v["text"][:10]: i for i, v in enumerate(B.values())} if False else None
# 按插入时的 label 顺序取名
# 按插入顺序取 id —— 不要靠文本匹配（正文用词和标签并不总是一致，容易错配）
ORDER = ["sub", "machine", "table", "notice", "collect", "haras", "chc", "engp", "eng"]
_ids = list(B.keys())
assert len(_ids) == len(ORDER) == 9, (_ids, len(_ids))
LAB = dict(zip(ORDER, _ids))
REWRITTEN = "7d38ec"   # 改写的「证明书怎么开」段落

ROWS = {
 "ja": [["伊都", "センター1号館 2F"], ["伊都", "イースト1号館C棟 1F"], ["伊都", "ウエスト1号館A棟 3F"],
        ["伊都", "ウエスト4号館 2F"], ["伊都", "ウエスト5号館東 3F"], ["筑紫", "ビスタホール売店入口"],
        ["大橋", "芸術工学部管理棟 1F"], ["病院", "基礎研究棟A棟 1F"]],
 "en": [["Ito", "Center Bldg 1, 2F"], ["Ito", "East Bldg 1C, 1F"], ["Ito", "West Bldg 1A, 3F"],
        ["Ito", "West Bldg 4, 2F"], ["Ito", "West Bldg 5 East, 3F"], ["Chikushi", "Vista Hall shop entrance"],
        ["Ohashi", "Design Bldg admin, 1F"], ["Hospital", "Basic Research A, 1F"]],
 "ko": [["이토", "센터1호관 2F"], ["이토", "이스트1호관 C동 1F"], ["이토", "웨스트1호관 A동 3F"],
        ["이토", "웨스트4호관 2F"], ["이토", "웨스트5호관 동관 3F"], ["치쿠시", "비스타홀 매점 입구"],
        ["오하시", "예술공학부 관리동 1F"], ["병원", "기초연구동 A동 1F"]],
}
HEAD = {"ja": ["キャンパス", "場所"], "en": ["Campus", "Location"], "ko": ["캠퍼스", "위치"]}
URLS = {
 "chc": ["https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_chinese_2026.pdf",
         "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_english_2026.pdf",
         "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_japanese_2026.pdf",
         "https://chc.kyushu-u.ac.jp/student/health_check/"],
 "eng": ["https://www.isc.kyushu-u.ac.jp/intlweb/student/english",
         "https://www.isc.kyushu-u.ac.jp/intlweb/en/student/english"],
}

TR = {
 "ja": {
  REWRITTEN: {"text": "在学証明書・成績証明書・卒業（修了）見込証明書などは、大学の証明書発行窓口で申請します。"
                      "一部は**学内の自動発券機**でも取得できます（下記参照）。"},
  LAB["sub"]: {"text": "自動発券機（8:30〜17:15）"},
  LAB["machine"]: {"text": "在学証明書・通学証明書・学割証・健康診断証明書をセルフで発行できます。**並ばずに済みます**。"
                           "注意：**利用できるのは正規課程の学生のみ** —— 研究生・交換留学生は所属窓口へ。"},
  LAB["table"]: {"headers": HEAD["ja"], "rows": ROWS["ja"]},
  LAB["notice"]: {"text": "**健康診断を受けていないと健康診断証明書は発行できません。** 奨学金の申請や就職活動で必要になります。必ず受けてください。"},
  LAB["collect"]: {"text": "証明書の受け取り：正規課程の学生は**自動発券機**、研究生・交換留学生は各キャンパスの"
                           "**キャンパスライフ・健康支援センター**で申請（無料）。"},
  LAB["haras"]: {"text": "ハラスメント対策推進室：ハラスメント（セクシュアル・アカデミック・パワー）の相談・申告窓口。"},
  LAB["chc"]: {"items": [{"text": "健康支援センターパンフレット（中国語版）", "url": URLS["chc"][0]},
                         {"text": "同（英語版）", "url": URLS["chc"][1]},
                         {"text": "同（日本語版）", "url": URLS["chc"][2]},
                         {"text": "学生定期健康診断（公式）", "url": URLS["chc"][3]}]},
  LAB["engp"]: {"text": "九大は**英語による授業を多く開講**しています。2026 年度に交換留学生が聴講できる科目の"
                        "リストは別途公開されています。日本語の授業を避けたい人は先に確認を。"},
  LAB["eng"]: {"items": [{"text": "英語による授業の科目リスト（日本語ページ）", "url": URLS["eng"][0]},
                         {"text": "Courses Conducted in English（英語ページ）", "url": URLS["eng"][1]}]},
 },
 "en": {
  REWRITTEN: {"text": "Certificates of enrolment, transcripts and expected-graduation certificates are issued through "
                      "the university's certificate desk. Some are also available from the **self-service machines** "
                      "on campus (see below)."},
  LAB["sub"]: {"text": "Self-service certificate machines (8:30-17:15)"},
  LAB["machine"]: {"text": "Enrolment certificates, commuter certificates, student discounts and health-check "
                           "certificates print straight from the machine - **no queue**. Note: **regular-course "
                           "students only** - research and exchange students go to their faculty counter."},
  LAB["table"]: {"headers": HEAD["en"], "rows": ROWS["en"]},
  LAB["notice"]: {"text": "**No health check, no health certificate.** Scholarship applications and job hunting both "
                          "require it - make sure you attend."},
  LAB["collect"]: {"text": "Collecting the certificate: regular students use the **self-service machine**; research "
                           "and exchange students apply at the **Campus Life & Health Support Centre** on each campus (free)."},
  LAB["haras"]: {"text": "Harassment Prevention Office: the contact point for consultation and reports on harassment "
                         "(sexual, academic, power)."},
  LAB["chc"]: {"items": [{"text": "Health Support Centre brochure (Chinese)", "url": URLS["chc"][0]},
                         {"text": "Same (English)", "url": URLS["chc"][1]},
                         {"text": "Same (Japanese)", "url": URLS["chc"][2]},
                         {"text": "Annual student health check (official)", "url": URLS["chc"][3]}]},
  LAB["engp"]: {"text": "Kyushu U. teaches **many courses in English**. A separate list covers the 2026 courses open "
                        "to exchange students - check it first if you want to avoid Japanese-taught classes."},
  LAB["eng"]: {"items": [{"text": "Courses in English (Japanese page)", "url": URLS["eng"][0]},
                         {"text": "Courses Conducted in English (English page)", "url": URLS["eng"][1]}]},
 },
 "ko": {
  REWRITTEN: {"text": "재학증명서·성적증명서·졸업(수료)예정증명서 등은 대학 증명서 발급 창구에서 신청합니다. "
                      "일부는 **교내 자동 발권기**에서도 발급됩니다(아래 참조)."},
  LAB["sub"]: {"text": "자동 발권기(8:30~17:15)"},
  LAB["machine"]: {"text": "재학증명서·통학증명서·학할증·건강진단증명서를 셀프로 발급할 수 있습니다. **줄 서지 않아도 됩니다**. "
                           "주의: **정규 과정 학생만 이용 가능** —— 연구생·교환유학생은 소속 창구로."},
  LAB["table"]: {"headers": HEAD["ko"], "rows": ROWS["ko"]},
  LAB["notice"]: {"text": "**건강진단을 받지 않으면 건강진단증명서를 발급받을 수 없습니다.** 장학금 신청과 취업활동에 필요합니다. 반드시 받으세요."},
  LAB["collect"]: {"text": "증명서 수령: 정규 과정 학생은 **자동 발권기**, 연구생·교환유학생은 각 캠퍼스 "
                           "**캠퍼스라이프·건강지원센터**에서 신청(무료)."},
  LAB["haras"]: {"text": "괴롭힘 대책 추진실: 괴롭힘(성희롱·학술·권력) 상담 및 신고 창구."},
  LAB["chc"]: {"items": [{"text": "건강지원센터 안내(중국어판)", "url": URLS["chc"][0]},
                         {"text": "동일(영어판)", "url": URLS["chc"][1]},
                         {"text": "동일(일본어판)", "url": URLS["chc"][2]},
                         {"text": "학생 정기 건강진단(공식)", "url": URLS["chc"][3]}]},
  LAB["engp"]: {"text": "규슈대는 **영어 수업을 많이 개설**하고 있습니다. 2026년도 교환유학생이 청강 가능한 과목 "
                        "목록이 별도로 공개되어 있습니다. 일본어 수업을 피하고 싶다면 먼저 확인하세요."},
  LAB["eng"]: {"items": [{"text": "영어 수업 과목 목록(일본어 페이지)", "url": URLS["eng"][0]},
                         {"text": "Courses Conducted in English(영어 페이지)", "url": URLS["eng"][1]}]},
 },
}
missing = [l for l in TR for k2 in TR[l] if not k2]
assert all(len(v) == 10 for v in TR.values())   # 9 新增 + 1 改写, {l: len(v) for l, v in TR.items()}
OUT = os.path.join(ROOT, "tools", ".s56_i18n.json")
json.dump(TR, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("payload:", OUT, "| 每语块数:", {l: len(v) for l, v in TR.items()})
print("label→id:", json.dumps(LAB, ensure_ascii=False))
