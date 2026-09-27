#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""add_newcomer_jtcs.py —— 把 JTCs／JACs 日语课程报名写进 H5 新生专区

来源：留学課 2026-09 邮件（JTCs 2026 年度後期通知）+ ISC 官方页
（https://isc.kyushu-u.ac.jp/center/international/japaneselang/ 、jtcs / jacs）。

为什么单独做一节而不是只在学术篇里写：新生专区是新生真正会读的那一篇，
而日语课程有硬日程（问卷已截止、10/16〜10/21 分班考试与登记）——
只写在学术篇里，新生翻不到，就会有人以为还能补报。

写入内容（zh 为源，四语译文见 tools/.newcomer_jtcs_i18n.json，走
validate_i18n_payload → apply_i18n_payload 落地）：
  jca101 heading ⑨ 日语课程（JTCs／JACs）报名
  jca102 paragraph 两条路径与上课地点
  jca103 notice 2026 后期日程（问卷已截止 / 已答者 10/16〜10/21 / 未答者先问 office）
  jca104 list 两条路径的规格、地点、证明书
  jca105 links 官方课程页与在线登记系统

同时把原 ⑨ 实用信息・医疗健康资源 顺延为 ⑩（JTCs 有具体日程，排在
作为附录的「实用信息」之前更符合阅读顺序）。

用法：python3 tools/add_newcomer_jtcs.py [--dry]
"""
import io
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, "content", "guide-newcomer.json")
ANCHOR = "m1h2i3"          # 实用信息 的 heading，新节插在它前面
UPDATED_AT = "2026-09-27"

NEW_BLOCKS = [
    {"id": "jca101", "type": "heading", "text": "⑨ 日语课程（JTCs／JACs）报名"},
    {"id": "jca102", "type": "paragraph",
     "text": "留学生中心开设日语课程，分两条路径：**JTCs**（単位不認定，每周 2 次 × 10 周，"
             "7 个级别）与 **JACs**（単位認定，每周 2 次 × 15 周，8 个级别），上课地点都在"
             "伊都校区 Center Zone 5（センター5号馆）。2026 后期（秋学期）的报名已经走完"
             "问卷阶段，接下来是分班考试与课程登记。"},
    {"id": "jca103", "type": "notice",
     "text": "2026 后期日程：官方问卷已于 **9/25 13:00 截止**。已答问卷者请在 "
             "**10/16(金)〜10/21(水)** 完成分班考试与课程登记；未答问卷者请先联系 JTCs office"
             "（japanesecourses@jimu.kyushu-u.ac.jp，注明姓名・校区・学生番号）确认能否参加"
             "本期，**不要直接在课程系统上补报** —— 系统按已登记的名单走。只填问卷不算完成申请。"},
    {"id": "jca104", "type": "list", "items": [
        {"text": "JTCs（伊都・単位不認定）：每周 2 次 × 10 周・7 个级别・结业发受讲证明书"},
        {"text": "JACs（伊都・単位認定）：每周 2 次 × 15 周・8 个级别・对象为学部正规留学生等"},
        {"text": "上课地点：伊都校区 Center Zone 5（センター5号馆）"},
        {"text": "需要受讲证明书者请在离开九大前申请（回国后申请会收费且手续更复杂）"},
    ]},
    {"id": "jca105", "type": "links", "items": [
        {"text": "九大日语课程总览（按身份与校区选择）",
         "url": "https://isc.kyushu-u.ac.jp/center/international/japaneselang/"},
        {"text": "JTCs 课程页（伊都・単位不認定）", "url": "https://isc.kyushu-u.ac.jp/center/jtcs/"},
        {"text": "JACs 课程页（伊都・単位認定）", "url": "https://isc.kyushu-u.ac.jp/center/jacs"},
        {"text": "JTCs 在线登记系统（分班考试・班级登记）",
         "url": "https://jlc.kyushu-u.ac.jp/JTCsi/page/placement/ButtonPlacement.aspx"},
    ]},
]


def main():
    raw = io.open(PATH, encoding="utf-8", newline="").read()
    doc = json.loads(raw)
    blocks = doc["blocks"]

    if any(b.get("id") == "jca101" for b in blocks):
        print("已存在 jca101，本次不做改动（脚本是幂等的）。")
        return 0

    idx = next((i for i, b in enumerate(blocks) if b.get("id") == ANCHOR), None)
    if idx is None:
        print("✗ 找不到锚点 %s，中止。" % ANCHOR)
        return 1

    # 原 ⑨ 顺延为 ⑩（只改编号，文字不动）
    old = blocks[idx].get("text", "")
    if not old.startswith("⑨"):
        print("✗ 锚点 %s 的标题不是 ⑨ 开头（实际：%s），中止 —— 说明编号已被改过。" % (ANCHOR, old))
        return 1
    blocks[idx]["text"] = "⑩" + old[1:]

    blocks[idx:idx] = NEW_BLOCKS
    doc["updatedAt"] = UPDATED_AT
    tags = doc.setdefault("tags", [])
    if "日语课程" not in tags:
        tags.append("日语课程")

    out = json.dumps(doc, ensure_ascii=False, indent=2).replace("\n", "\r\n")
    if "--dry" in sys.argv:
        print("（dry-run）将插入 %d 块，锚点 %s 顺延为 ⑩，updatedAt → %s"
              % (len(NEW_BLOCKS), ANCHOR, UPDATED_AT))
        return 0
    with io.open(PATH, "w", encoding="utf-8", newline="") as fh:
        fh.write(out)
    print("✓ 已插入 %d 块（jca101〜jca105），%s 顺延为 ⑩，updatedAt → %s"
          % (len(NEW_BLOCKS), ANCHOR, UPDATED_AT))
    print("  下一步：python tools/validate_i18n_payload.py guide-newcomer tools/.newcomer_jtcs_i18n.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
