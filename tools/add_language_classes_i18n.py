#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""S3 的三语译本 payload（学外日本語教室 4 个块），配
   node tools/merge_body_i18n.js guide-academic tools/.langclass_i18n.json --merge
使用（--merge 是增量合并，不会动该篇已有的其它译文）。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ids = json.load(open(os.path.join(ROOT, "tools", ".langclass.json"), encoding="utf-8"))
SUB, P, T, L = ids["SUB"], ids["P"], ids["T"], ids["L"]
cls = ids["classes"]

NAMES = {
 "en": ["Ito International Circle", "Nihongo Hiroba Itoshima", "Motooka Kokusai Hiroba",
        "Global Friendship", "Kasuga Nihongo Hiroba", "Kashihama Yorutomo-kai"],
 "ko": ["이토 인터내셔널 서클", "니혼고 히로바 이토시마", "모토오카 국제교류 히로바",
        "Global Friendship", "카스가 니혼고 히로바", "카시하마 요루토모회"],
}
PLACES = {
 "en": ["Ito Campus West 4", "Itoshima Human Rights Center", "Motooka Community Hall",
        "Fukuoka Intl. Hall 4F", "Clover Plaza 3F", "Kashihama Elementary"],
 "ko": ["이토 캠퍼스 West4", "이토시마시 인권센터", "모토오카 공민관",
        "후쿠오카시 국제회관 4F", "클로버 플라자 3F", "카시하마 초등학교"],
}
TIMES = {
 "ja": ["木 17:30〜20:00", "要問い合わせ", "水 18:30〜20:00", "要問い合わせ", "要問い合わせ", "要問い合わせ"],
 "en": ["Thu 17:30-20:00", "Ask them", "Wed 18:30-20:00", "Ask them", "Ask them", "Ask them"],
 "ko": ["목 17:30~20:00", "문의 필요", "수 18:30~20:00", "문의 필요", "문의 필요", "문의 필요"],
}
FEES = {
 "ja": ["入会金 500 円", "1 回 100 円", "無料", "1 回 100 円", "月 600 円", "無料"],
 "en": ["500 JPY joining fee", "100 JPY / session", "Free", "100 JPY / session",
        "600 JPY / month", "Free"],
 "ko": ["입회금 500엔", "1회 100엔", "무료", "1회 100엔", "월 600엔", "무료"],
}
MAILTXT = {"ja": "— メールで問い合わせ", "en": "- email enquiry", "ko": "- 메일 문의"}
NAMES_JA = [c["name"] for c in cls]

TR = {
 "ja": {
   SUB: {"text": "学外の日本語教室（6 か所）"},
   P: {"text": "九大自身の日本語コースは**無料**（上のリンク参照）。学外にも**ボランティア教室**が 6 か所あり、"
               "料金は無料〜1 回 100 円。日常会話を練習したい、地域の人と知り合いたい人には校内の授業より向いています。"
               "多くは事前のメール連絡が必要です。"},
   T: {"headers": ["教室", "場所", "時間", "料金"],
       "rows": [[NAMES_JA[i], ("伊都キャンパス West4" if i == 0 else cls[i]["place"]),
                 TIMES["ja"][i], FEES["ja"][i]] for i in range(6)]},
   L: {"items": [{"text": (NAMES_JA[i] + (" " + cls[i]["phone"] if cls[i]["phone"] else MAILTXT["ja"])),
                  "url": "mailto:" + cls[i]["mail"]} for i in range(6)]},
 },
 "en": {
   SUB: {"text": "Community Japanese classes (6)"},
   P: {"text": "Kyushu U.'s own Japanese courses are **free** (link above). Off campus there are "
               "**six volunteer-run classes**, from free to 100 JPY per session - better than campus classes "
               "if you want everyday conversation and local contacts. Most require an email in advance."},
   T: {"headers": ["Class", "Location", "Time", "Fee"],
       "rows": [[NAMES["en"][i], PLACES["en"][i], TIMES["en"][i], FEES["en"][i]] for i in range(6)]},
   L: {"items": [{"text": (NAMES["en"][i] + (" " + cls[i]["phone"] if cls[i]["phone"] else MAILTXT["en"])),
                  "url": "mailto:" + cls[i]["mail"]} for i in range(6)]},
 },
 "ko": {
   SUB: {"text": "교외 일본어 교실(6곳)"},
   P: {"text": "규슈대 자체 일본어 강좌는 **무료**입니다(위 링크). 교외에도 **자원봉사 교실**이 6곳 있고 "
               "비용은 무료~1회 100엔. 일상 회화를 연습하고 지역 주민과 알고 지내고 싶다면 교내 수업보다 낫습니다. "
               "대부분 사전 메일 연락이 필요합니다."},
   T: {"headers": ["교실", "장소", "시간", "요금"],
       "rows": [[NAMES["ko"][i], PLACES["ko"][i], TIMES["ko"][i], FEES["ko"][i]] for i in range(6)]},
   L: {"items": [{"text": (NAMES["ko"][i] + (" " + cls[i]["phone"] if cls[i]["phone"] else MAILTXT["ko"])),
                  "url": "mailto:" + cls[i]["mail"]} for i in range(6)]},
 },
}
OUT = os.path.join(ROOT, "tools", ".langclass_i18n.json")
json.dump(TR, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("payload:", OUT, "| 每语块数:", {l: len(v) for l, v in TR.items()})
