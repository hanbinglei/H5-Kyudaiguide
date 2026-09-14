#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""S5 + S6：补入 guide-academic 的四组细节＋三语译本 payload。

S5a 自動発券機 具体信息（校区/位置/时间/仅正规课程）—— 原文只写了「也能出一部分」，太模糊
S5b 健康診断 两点关键补充（未受诊不能开证明书 / 非正规课程的领取渠道）
S5c 相談窓口 补 ハラスメント対策推進室 与健康支援センター三语小册子
S6  英語による授業（原文 0 处覆盖）

来源：gg_full/intlweb_student_facilities.md（キャンパスライフ）＋ intlweb_student_english.md
所有新增 URL 已实测 200。
"""
import json, os, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, "content", "guide-academic.json")
IDX = os.path.join(ROOT, "content", "index.json")


def bid(*p):
    return hashlib.md5(("|".join(str(x) for x in p)).encode("utf-8")).hexdigest()[:6]


CHC = "https://chc.kyushu-u.ac.jp/student/health_check/"
BRO = "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/"
ENG_JA = "https://www.isc.kyushu-u.ac.jp/intlweb/student/english"
ENG_EN = "https://www.isc.kyushu-u.ac.jp/intlweb/en/student/english"

NEW = {
 "A": [
  {"id": bid("sub_machine"), "type": "subheading", "text": "自动发券机（8:30〜17:15）"},
  {"id": bid("p_machine"), "type": "paragraph",
   "text": "在学証明書・通学証明書・学割証・健康診断証明書 都能自助打印，**不用排队**。"
           "注意：**只有正规课程学生能用** —— 研究生・交换留学生走所属窗口。"},
  {"id": bid("t_machine"), "type": "fee_table",
   "headers": ["校区", "位置"],
   "rows": [["伊都", "センター1号館 2F"], ["伊都", "イースト1号館C棟 1F"],
            ["伊都", "ウエスト1号館A棟 3F"], ["伊都", "ウエスト4号館 2F"],
            ["伊都", "ウエスト5号館東 3F"], ["筑紫", "ビスタホール売店入口"],
            ["大橋", "芸術工学部管理棟 1F"], ["病院", "基礎研究棟A棟 1F"]]},
 ],
 "B": [
  {"id": bid("n_health"), "type": "notice",
   "text": "**没受诊就开不出健康診断証明書。** 奖学金申请与就职都会用到它，务必参加。"},
  {"id": bid("p_health"), "type": "paragraph",
   "text": "証明書の领取：正规课程学生用**自动发券机**；研究生・交换留学生到各校区的"
           "**キャンパスライフ・健康支援センター**申请，免费。"},
 ],
 "C": [
  {"id": bid("p_haras"), "type": "paragraph",
   "text": "ハラスメント対策推進室：骚扰（性骚扰・学术霸凌・权力骚扰）的咨询与申诉窗口。"},
  {"id": bid("lk_chc"), "type": "links", "items": [
      {"text": "健康支援センター指南（中文版 PDF）", "url": BRO + "brochure_chinese_2026.pdf"},
      {"text": "同（英文版）", "url": BRO + "brochure_english_2026.pdf"},
      {"text": "同（日文版）", "url": BRO + "brochure_japanese_2026.pdf"},
      {"text": "学生定期健康診断（官方页）", "url": CHC}]},
 ],
 "D": [
  {"id": bid("p_eng"), "type": "paragraph",
   "text": "九大开设**大量英语授课科目**。2026 年度交换留学生可听讲的科目有单独清单，"
           "想避开日语授课的话先看这份清单。"},
  {"id": bid("lk_eng"), "type": "links", "items": [
      {"text": "英语授课科目清单（日文页）", "url": ENG_JA},
      {"text": "Courses Conducted in English（英文页）", "url": ENG_EN}]},
 ],
}

art = json.load(open(ART, encoding="utf-8"))
bl = art["blocks"]
assert not any(b["id"] == NEW["A"][0]["id"] for b in bl), "已插入过，勿重复执行"


def after(pred, blocks, label):
    """在满足 pred 的最后一个匹配块之后插入"""
    idx = [i for i, b in enumerate(bl) if pred(b)]
    assert idx, "定位失败: " + label
    at = idx[-1] + 1
    bl[at:at] = blocks
    print(f"  {label}: 插入 {len(blocks)} 块 @ {at}")


# A 组：证明书怎么开 —— 先去掉那句模糊描述，再在其后插入
for b in bl:
    if b.get("type") == "paragraph" and "自动发行机也能出一部分" in (b.get("text") or ""):
        b["text"] = ("在学证明、成绩证明、卒業/修了見込証明等，都从学校的证明书发行入口办理。"
                     "一部分可在**校内自动发券机**自助打印（见下）。")
        print("  已改写「证明书怎么开」原段落（去掉模糊表述）")
# 注意：上一步已把这段改写掉，定位要用**改写后**仍存在的串
after(lambda b: b.get("type") == "paragraph" and "都从学校的证明书发行入口办理" in (b.get("text") or ""), NEW["A"], "A 发券机")
after(lambda b: b.get("type") == "paragraph" and "每年 4 月和 10 月有定期健康診断" in (b.get("text") or ""), NEW["B"], "B 健康診断")
after(lambda b: b.get("type") == "paragraph" and "サポートセンター：イースト1号館" in (b.get("text") or ""), NEW["C"], "C 相談窓口")
after(lambda b: b.get("type") == "links" and b.get("id") == "9ce243", NEW["D"], "D 英语授课")

art["blocks"] = bl
art["summary"] = art["summary"].replace("JTCs 日语课程与学外 6 家志愿者日语教室",
                                        "英语授课科目、JTCs 日语课程与学外 6 家志愿者日语教室")
json.dump(art, open(ART, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

idx = json.load(open(IDX, encoding="utf-8"))
for a in idx["articles"]:
    if a["_id"] == "guide-academic":
        a["blocks"] = len(bl)
json.dump(idx, open(IDX, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

flat = {}
for grp in NEW.values():
    for b in grp:
        flat[b["id"]] = b
json.dump(flat, open(os.path.join(ROOT, "tools", ".s56_blocks.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print(f"\nguide-academic 现有 {len(bl)} 块；新增块 id: {' '.join(flat)}")
