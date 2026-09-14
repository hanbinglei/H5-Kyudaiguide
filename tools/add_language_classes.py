#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""S3：把「学外の日本語教室 6 家」补进 content/guide-academic.json

来源：Global Gateways「日本語教育」页（intlweb/student/japanese）
      https://www.isc.kyushu-u.ac.jp/intlweb/student/japanese
      （抓取存档 gg_full/intlweb_student_japanese.md）

可读性：subheading + 段 + 4 列表格(6行) + 链接，共 4 个元素；单元格 ≤14 字。
联系方式一律做成 mailto 链接（GG 原文就要求"邮件联系各教室"）。
"""
import json, os, re, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, "content", "guide-academic.json")
IDX = os.path.join(ROOT, "content", "index.json")


def bid(*parts):
    return hashlib.md5(("|".join(str(p) for p in parts)).encode("utf-8")).hexdigest()[:6]


# 教室 / 地点 / 时间 / 费用 / 邮件
CLASSES = [
    ("伊都インターナショナルサークル", "伊都校区 West4", "木 17:30〜20:00", "入会金 500 円", "hatae_iic@yahoo.co.jp"),
    ("日本語ひろば いとしま", "糸島市人権センター", "要问询", "1 次 100 円", "nihongoitoshima@gmail.com"),
    ("元岡国際交流ひろば", "元岡公民館", "水 18:30〜20:00", "免费", "motookahiroba@gmail.com"),
    ("Global Friendship", "福岡市国際会館 4F", "要问询", "1 次 100 円", "globalfriendshipnihongo@gmail.com"),
    ("かすが・にほんごひろば", "クローバープラザ 3F", "要问询", "月 600 円", "fk.kasuga.nihongo@gmail.com"),
    ("香椎浜 よるとも会", "香椎浜小学校", "要问询", "免费", "tomoikifukuoka@gmail.com"),
]
PHONE = ["090-8764-9588", "092-322-5095", "", "090-5727-9925", "080-6441-0763", "090-5921-7798"]

SUB_ID = bid("sub_langclass")
P_ID = bid("p_langclass")
T_ID = bid("t_langclass")
L_ID = bid("lk_langclass")

blocks = [
    {"id": SUB_ID, "type": "subheading", "text": "学外の日本語教室（6 家）"},
    {"id": P_ID, "type": "paragraph",
     "text": "九大自己的日语课**免费**（见上方链接）。校外另有 6 家**志愿者教室**，费用从免费到 100 円/次，"
             "想练日常会话、结识本地人的话比校内课更合适。**多数需要事前邮件联系。**"},
    {"id": T_ID, "type": "fee_table",
     "headers": ["教室", "地点", "时间", "费用"],
     "rows": [[c[0], c[1], c[2], c[3]] for c in CLASSES]},
    {"id": L_ID, "type": "links", "items": [
        {"text": (f"{c[0]} {PHONE[i]}" if PHONE[i] else f"{c[0]} — 邮件咨询"),
         "url": "mailto:" + c[4]}
        for i, c in enumerate(CLASSES)]},
]

art = json.load(open(ART, encoding="utf-8"))
blocks_all = art["blocks"]
# 插到「日本語コース（JTCs）」小节之后（即下一个 heading 之前）
cut = next(i for i, b in enumerate(blocks_all)
           if b.get("type") == "heading" and "健康診断" in (b.get("text") or ""))
assert not any(b["id"] == SUB_ID for b in blocks_all), "已插入过，勿重复执行"
blocks_all[cut:cut] = blocks
art["blocks"] = blocks_all
art["summary"] = art["summary"].replace(
    "JTCs 日语课程", "JTCs 日语课程与学外 6 家志愿者日语教室")
json.dump(art, open(ART, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"已插入 {len(blocks)} 块到 guide-academic（位置 {cut}）· 该篇现有 {len(blocks_all)} 块")

idx = json.load(open(IDX, encoding="utf-8"))
for a in idx["articles"]:
    if a["_id"] == "guide-academic":
        a["blocks"] = len(blocks_all)
json.dump(idx, open(IDX, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("index.json 的 blocks 计数已同步")

json.dump({"SUB": SUB_ID, "P": P_ID, "T": T_ID, "L": L_ID,
           "rows_zh": [[c[0], c[1], c[2], c[3]] for c in CLASSES],
           "classes": [{"name": c[0], "place": c[1], "time": c[2], "fee": c[3],
                        "mail": c[4], "phone": PHONE[i]} for i, c in enumerate(CLASSES)]},
          open(os.path.join(ROOT, "tools", ".langclass.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("块 id:", SUB_ID, P_ID, T_ID, L_ID)
