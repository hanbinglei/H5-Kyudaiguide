#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 content/guide-scholarship.json（奖学金专板）。

数据源：data/scholarship_official.json（由 tools/fetch_scholarship.py 从
Global Gateways 奨学金一覧 抓取，EUC-JP）。
重跑：先 fetch_scholarship.py 更新数据，再跑本脚本。
"""
import json, os, hashlib, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "scholarship_official.json")
OUT  = os.path.join(ROOT, "content", "guide-scholarship.json")
FETCHED = "2026-09-14"

def bid(*parts):
    h = hashlib.md5(("|".join(str(p) for p in parts)).encode("utf-8")).hexdigest()
    return h[:6]

def cut(s, n):
    s = re.sub(r"\s+", " ", (s or "")).strip()
    return s if len(s) <= n else s[: n - 1] + "…"

def table_from(records, headers, cols, limit=None):
    rows = []
    for r in (records if limit is None else records[:limit]):
        rows.append([cut(r[c], 46) for c in cols])
    return {"id": bid("tbl", headers[0], len(rows)), "type": "fee_table",
            "headers": headers, "rows": rows}

def main():
    d = json.load(open(DATA, encoding="utf-8"))
    y27 = d["years"]["2027_ja"]
    y26 = d["years"]["2026_ja"]
    open27 = [r for r in y27["records"] if r["status"] == "open"]
    open26 = [r for r in y26["records"] if r["status"] == "open"]
    live = open27 + open26
    live.sort(key=lambda r: r["deadline"])

    B = []
    B.append({"id": bid("p1"), "type": "paragraph",
              "text": "这一篇覆盖九州大学**私費外国人留学生**能申请的奖学金：两条应募路径、必须自己读懂的募集要項、"
                      "当前募集中名单、按年度的全部一览，以及**国費外国人留学生**制度。"
                      "主要面向**已在读**的同学，新入生可以先了解规则、等入学后再动手。"})

    B.append({"id": bid("n1"), "type": "notice",
              "text": f"**列表数据出典**：Global Gateways「奨学金一覧」（国際部留学課），采集于 {FETCHED}。"
                      "该列表每年更新、且部分奖学金募集期只有一两周 —— "
                      "**动手前请务必打开官方页面确认当年度原文**，本页只做导航与整理。"})

    B.append({"id": bid("h1"), "type": "heading", "level": 2, "text": "申请前必须懂的 5 件事"})
    B.append({"id": bid("l1"), "type": "list", "items": [
        {"text": "**募集要項必须自己读**。理解不到位就应募、结果被取消资格的情况真实存在。"},
        {"text": "**併給限制**：同时领多份奖学金通常被禁止，或对合计金额设上限。这项一定要逐条确认。"},
        {"text": "**在留资格**多为「留学」。持「家族滞在」「永住者」等资格时，部分奖学金不能申请。"},
        {"text": "**日语能力**普遍是硬门槛：不少财团要求日文自笔书写（含小论文）与日语面试，且募集要項只有日文版。"},
        {"text": "多数奖学金以**已在九州大学在籍者**为对象。入学前能申请的很少 —— 这也是本页把「在读后」写清楚的原因。"},
        {"text": "**竞争率很高**。应募了不等于会采用，建议同时投多家、并优先保证学业成绩。"}]})
    B.append({"id": bid("p2"), "type": "paragraph",
              "text": "国際部留学課还整理了一本 **Scholarship Guidebook**（申请书写法、面试要点），见下方链接。"})

    B.append({"id": bid("h2"), "type": "heading", "level": 2, "text": "两条应募路径"})
    B.append({"id": bid("t_path"), "type": "fee_table",
              "headers": ["路径", "流程", "要注意"],
              "rows": [
                  ["大学推薦（学内选考）", "先过校内选考 → 学校向财团推荐 → 财团最终审查",
                   "校内选考就会落选；即被推荐也可能最终不采用"],
                  ["直接応募", "不经过学校，自行向财团申请", "需自己盯官网与截止日；材料要求更杂"]]})
    B.append({"id": bid("p3"), "type": "paragraph",
              "text": "**学内选考的提交窗口是国際部留学課留学生係**（`intlr-pscholar@jimu.kyushu-u.ac.jp`）；"
                      "**直接応募**则由本人对接财团。文部科学省外国人留学生学習奨励費走的是**所属学部/学府的学務係**，"
                      "两条线别搞混。"})

    B.append({"id": bid("h3"), "type": "heading", "level": 2,
              "text": f"现在还能申请的（{len(live)} 件）"})
    B.append({"id": bid("p4"), "type": "paragraph",
              "text": "下表按**截止日**排序，只含官方列表中标记为「募集中」的条目。"
                      "金额与条件为官方原文摘要 —— 具体材料清单请点下方官方一览。"})
    B.append(table_from(live, ["奖学金", "支給額", "対象", "応募截止"],
                        ["name", "stipend", "eligibility", "deadline"]))

    B.append({"id": bid("h4"), "type": "heading", "level": 2, "text": "全部一览（按年度）"})
    B.append({"id": bid("p5"), "type": "paragraph",
              "text": "「年度」是奖学金的适用年度，不是应募年份：**2027 年度**多为 2026 年秋应募、2027 年 4 月开始支给。"
                      "标「終了」的条目保留下来，方便判断「这家一般什么时候开募集」。"})
    B.append({"id": bid("c27"), "type": "collapse", "title": f"2027 年度 · 全 {len(y27['records'])} 件",
              "blocks": [table_from(y27["records"], ["奖学金", "支給額", "対象", "応募截止"],
                                    ["name", "stipend", "eligibility", "deadline"])]})
    B.append({"id": bid("c26"), "type": "collapse", "title": f"2026 年度 · 全 {len(y26['records'])} 件",
              "blocks": [table_from(y26["records"], ["奖学金", "支給額", "対象", "応募截止"],
                                    ["name", "stipend", "eligibility", "deadline"])]})

    B.append({"id": bid("h5"), "type": "heading", "level": 2, "text": "国費外国人留学生（政府奖学金）"})
    B.append({"id": bid("p6"), "type": "paragraph",
              "text": "文部科学省设立、面向**研究者养成与国与国之间桥梁**的制度。九大招收 4 类："
                      "研究留学生（大学院）、学部留学生、日本語・文化研修生、"
                      "以及 Young Leaders' Program（YLP）。**授業料由大学负担，另给往返机票。**"})
    B.append({"id": bid("t_kuhi"), "type": "fee_table",
              "headers": ["类别", "月額（含地域加算）", "支給期間"],
              "rows": [
                  ["研究留学生・修士／専門職", "147,000 円", "至该课程结业（标准修业年限内）"],
                  ["研究留学生・博士", "148,000 円", "同上"],
                  ["研究留学生・研究生（非正规生）", "146,000 円", "含日语教育在内 2 年以内"],
                  ["学部留学生", "120,000 円", "大学推薦：至课程结业／大使館推薦：含 1 年日语教育共 5 年（医歯薬 7 年）"],
                  ["日本語・文化研修生", "120,000 円", "1 学年"]]})
    B.append({"id": bid("h6"), "type": "subheading", "text": "两条申请时间线"})
    B.append({"id": bid("l_kuhi"), "type": "list", "items": [
        {"text": "**大学推薦**：募集期由各学府定（问自己学府的学務係）→ 次年 2 月 校内选考・推荐 → 6 月 选考・采用 → 10 月 渡日入学"},
        {"text": "**大使館推薦**：2–3 月 在外公馆募集 → 5–7 月 一次选考（书类・笔试・面试）→ 8 月前 取得受入内諾書 → 10 月–次年 2 月 二次选考 → 4 月或 10 月 渡日"}]})
    B.append({"id": bid("p7"), "type": "paragraph",
              "text": "**進学（升入更高学位）时**不会自动续：需由指导教員推荐、向文部科学省申请**支給期間延長**，"
                      "是否通过由文科省选考决定 —— 请提前与指导教員谈。"})

    B.append({"id": bid("h7"), "type": "heading", "level": 2, "text": "私費対象：文部科学省外国人留学生学習奨励費"})
    B.append({"id": bid("t_mext"), "type": "fee_table",
              "headers": ["项目", "内容"],
              "rows": [
                  ["对象", "学部生：仅正规生 ／ 大学院生：研究生或正规生"],
                  ["月額", "48,000 円"],
                  ["支給期間", "1 年 或 6 个月"],
                  ["募集时期", "原则上一年两次（春・秋），也有不募集的时候"],
                  ["窗口", "所属学部・大学院的**学務係**（不是留学課）"]]})
    B.append({"id": bid("p8"), "type": "paragraph",
              "text": "这条是**私費**留学生的奖学金，与上面的国費制度不同，手续也走学生係 —— 名字像、路径完全不一样。"})

    B.append({"id": bid("h8"), "type": "heading", "level": 2, "text": "官方入口与咨询"})
    B.append({"id": bid("lk1"), "type": "links", "items": [
        {"text": "奨学金一覧（2027 年度・日文）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
        {"text": "奨学金一覧（2026 年度・日文）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
        {"text": "Scholarship list (2027 / English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"},
        {"text": "私費留学生のための奨学金（制度总览）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
        {"text": "Scholarship Guidebook（申请书写法・面试）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
        {"text": "応募流程讲解资料", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
        {"text": "学内选考手续与必要书类", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/On-campus-selection.pdf"},
        {"text": "奨学金 Q&A 集", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
        {"text": "国費外国人留学生（制度说明）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"},
        {"text": "国費：支給期間延長申请", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/2ffc084a7bc89c0ce517807396d55ecf.pdf"},
        {"text": "JASSO 学習奨励費（留学生受入れ促進プログラム）", "url": "https://www.jasso.go.jp/ryugaku/scholarship_j/shoreihi/index.html"}]})
    B.append({"id": bid("w1"), "type": "warning",
              "text": "**不要把这一页的内容当成下一年度的安排照搬。** 奖学金名称、金额、截止日每年都变，"
                      "官方列表也只列当年度。新一年度开始后，请回到 Global Gateways 的奨学金一覧重新确认。"})
    B.append({"id": bid("n2"), "type": "notice",
              "text": "咨询窗口：**国際部留学課 留学生係（私費留学生向け奨学金）** `intlr-pscholar@jimu.kyushu-u.ac.jp`；"
                      "学習奨励費请找**所属学部・学府的学務係**。"})

    art = {"_id": "guide-scholarship", "category": "15",
           "title": "奖学金（私費・国費）",
           "summary": "私費留学生能申请的民间财团奖学金（两条应募路径、併給与日语门槛）、2026/2027 年度官方一览"
                      "（含当前募集中列表与截止日）、国費外国人留学生 4 类别与月額、学習奨励費 48,000 円/月及各自的窗口。",
           "tags": ["奖学金", "国费", "MEXT", "学習奨励費", "留学課"],
           "author": "管理员", "updatedAt": FETCHED, "blocks": B}
    json.dump(art, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"wrote {OUT}\n  blocks={len(B)}  募集中={len(live)}  2027={len(y27['records'])}  2026={len(y26['records'])}")

if __name__ == "__main__":
    main()
