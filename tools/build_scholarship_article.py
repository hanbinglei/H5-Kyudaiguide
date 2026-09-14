#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 content/guide-scholarship.json（奖学金专板）— 可读性优先版。

设计约束（见 skill: kyudaiguide-h5-maintenance / readability-budget）：
  · 开篇必须有 ≤130 字的「30 秒结论」
  · 单表 ≤15 行、≤4 列、单元格 ≤14 字
  · 不做全量镜像：67 行的年度全表**不进正文**，改为官方链接
    （该表 66/67 行已标「終了」，对「我该申请什么」零帮助，且旧金额有误导风险）
  · 同一事实只出现一次：募集中 7 件已在 2027 年度表里 → 年度表不再重复展示

数据源：
  data/scholarship_official.json   —— GG 奨学金一覧（EUC-JP）解析结果
  data/scholarship_attachments.json —— 奨学金No. → 募集要項 PDF/ZIP 的官方附件 URL
"""
import json, os, re, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data", "scholarship_official.json")
ATT = os.path.join(ROOT, "data", "scholarship_attachments.json")
OUT = os.path.join(ROOT, "content", "guide-scholarship.json")
FETCHED = "2026-09-14"
LIST = "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php"


def bid(*parts):
    return hashlib.md5(("|".join(str(p) for p in parts)).encode("utf-8")).hexdigest()[:6]


def cut(s, n):
    s = re.sub(r"\s+", " ", str(s or "")).strip()
    return s if len(s) <= n else s[: n - 1] + "…"


def short_name(n):
    """奖学金名压缩到 ≤14 字：去掉括号里的原文/英文全称"""
    n = re.sub(r"[（(][^）)]*[）)]", "", str(n or "")).strip()
    n = re.sub(r"\s+", " ", n)
    return cut(n, 18)   # 专有名词：预算里的 14 字是给描述性单元格的


def short_money(m):
    m = re.sub(r"\s+", "", str(m or ""))
    m = (m.replace("月額奨学金：", "月 ").replace("月額", "月 ").replace("年額", "年 ")
          .replace("年間", "年 ").replace("奨学金：", ""))
    m = re.split(r"[（(、]", m)[0]
    return cut(m, 14)


def short_deadline(d):
    """截止日压成「10/5 22:00」式的短写法（取区间里的最后一天）"""
    d = re.sub(r"\s+", "", str(d or ""))
    ds = re.findall(r"(\d{1,2})月(\d{1,2})日", d)
    if not ds:
        return cut(d, 14)
    mm, dd = ds[-1]
    t = re.search(r"(\d{1,2})時(\d{2})?分?", d)
    hm = ""
    if t:
        hm = f" {int(t.group(1))}:{t.group(2) if t.group(2) else '00'}"
    return f"{int(mm)}/{int(dd)}{hm}"


def load_live():
    d = json.load(open(DATA, encoding="utf-8"))
    live = []
    for y in ("2027_ja", "2026_ja"):
        for r in d["years"][y]["records"]:
            if r["status"] != "open":
                continue
            live.append(dict(r, _year=y, _no=str(r.get("no") or "")))
    live.sort(key=lambda r: (r["deadline"], r["name"]))

    # 同一 No.（如 INPEX 的三个国别版）合并成一行
    merged = {}
    for r in live:
        key = (r["_no"], short_deadline(r["deadline"]), short_money(r["stipend"]))
        if key in merged:
            merged[key]["_variants"].append(r["name"])
        else:
            merged[key] = dict(r, _variants=[])
    out = []
    for r in merged.values():
        r["_display"] = short_name(r["name"])
        if r["_variants"]:
            n = len(r["_variants"]) + 1
            r["_display"] = cut(r["_display"], 10) + f"（{n} 个国别版）"
        out.append(r)
    out.sort(key=lambda r: r["deadline"])
    return out


COUNTRIES = ["インドネシア", "オーストラリア", "パプアニューギニア", "UAE", "タイ",
             "ベトナム", "マレーシア", "フィリピン", "ミャンマー", "カンボジア"]


def attach_links(live, att):
    """给有官方附件的条目生成下载链接。同一件多份附件时补国别/序号，否则读者分不清点哪个。"""
    items = []
    for r in live:
        lst = sorted(att.get(r["_no"], []), key=lambda x: (x.get("year") or 0), reverse=True)
        for i, a in enumerate(lst):
            kind = "願書模板（ZIP）" if a["zip"] else "募集要項（PDF）"
            suffix = ""
            if len(lst) > 1:
                # 同一件挂多份附件：官方列表会把**新旧年度**的募集要項并存，
                # 金额可能不同（例：平和中島 旧 12/15 万円、新 17/20 万円），
                # 所以必须标出年度或国别，否则读者会照着旧版金额准备。
                if a.get("country"):
                    suffix = f"・{a['country']}"
                elif a.get("year"):
                    suffix = f"・{a['year']} 年度版"
                else:
                    suffix = f"・其 {i + 1}"
            items.append({"text": f"{r['_display']} — {kind}{suffix}", "url": a["url"]})
    return items


def main():
    live = load_live()
    att = json.load(open(ATT, encoding="utf-8"))
    links = attach_links(live, att)

    B = []
    # 1) 30 秒结论
    B.append({"id": bid("lead"), "type": "paragraph",
              "text": "这篇帮你弄清两件事：**现在能申请什么**、**怎么申请**。"
                      "九大的私費奖学金基本都要「已在校在读 ＋ 会日语」，分学校推荐和直接应募两条路。"
                      "现在还能申请的是下面 7 件。"})

    B.append({"id": bid("src"), "type": "notice",
              "text": f"**数据出典**：Global Gateways「奨学金一覧」（国際部留学課），采集于 {FETCHED}。"
                      "各财团每年重开募集、金额与截止日都会变 —— **动手前请点下面的官方一览确认原文**。"})

    # 2) 现在能申请的
    B.append({"id": bid("h_live"), "type": "heading", "level": 2, "text": f"现在能申请的（{len(live)} 件）"})
    B.append({"id": bid("t_live"), "type": "fee_table",
              "headers": ["奖学金", "金额", "截止"],
              "rows": [[r["_display"], short_money(r["stipend"]), short_deadline(r["deadline"])] for r in live]})
    if links:
        B.append({"id": bid("p_att"), "type": "paragraph",
                  "text": "下面这几件能直接拿到官方文件 —— **先下载募集要項，再决定要不要投**。"})
        B.append({"id": bid("lk_att"), "type": "links", "items": links})
    B.append({"id": bid("p_list"), "type": "paragraph",
              "text": "其余条目请从官方一览进入（每年更新，含已截止项目）："})
    B.append({"id": bid("lk_list"), "type": "links", "items": [
        {"text": "奨学金一覧（官方・当年度）", "url": f"{LIST}?nendo=2027&lang="},
        {"text": "奨学金一覧（官方・前年度，含已截止）", "url": f"{LIST}?nendo=2026&lang="},
        {"text": "Scholarship list (English)", "url": f"{LIST}?nendo=2027&lang=en"}]})

    # 3) 申请前必懂
    B.append({"id": bid("h_notes"), "type": "heading", "level": 2, "text": "申请前必须懂的 5 件事"})
    B.append({"id": bid("l_notes"), "type": "list", "items": [
        {"text": "**募集要項要自己读**：没读懂就应募，被取消资格的先例真实存在。"},
        {"text": "**併給有上限**：多数不允许同时领两家；有上限的也要逐条确认。"},
        {"text": "**日语是硬门槛**：不少财团要求日文自笔书写和日语面试。"},
        {"text": "**大多只收在读生**：入学前能申请的极少。"},
        {"text": "**竞争很激烈**：应募 ≠ 采用，建议多投几家。"}]})

    # 4) 两条路径
    B.append({"id": bid("h_route"), "type": "heading", "level": 2, "text": "两条应募路径"})
    B.append({"id": bid("t_route"), "type": "fee_table",
              "headers": ["路径", "谁交材料", "落选风险"],
              "rows": [
                  ["大学推薦（学内选考）", "先交留学課，通过后由学校推荐", "校内容易先被刷"],
                  ["直接応募", "自己交给财团", "全靠自己盯官网和截止日"]]})
    B.append({"id": bid("p_route"), "type": "paragraph",
              "text": "**学内选考**交国際部留学課留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp`。"
                      "学習奨励費（私費対象・月 48,000 円）另走**所属学部/学府的学務係**，别搞混。"})

    # 5) 国費
    B.append({"id": bid("h_kuhi"), "type": "heading", "level": 2, "text": "国費外国人留学生（政府奖学金）"})
    B.append({"id": bid("p_kuhi"), "type": "paragraph",
              "text": "文部科学省的制度。**授業料由大学负担，另给往返机票。** 月额按类别："
                      "修士 147,000 円 / 博士 148,000 円 / 研究生 146,000 円 / 学部 120,000 円。"})
    B.append({"id": bid("l_kuhi"), "type": "list", "items": [
        {"text": "**大学推薦**：募集期各学府自定 → 2 月校内选考 → 6 月采用"},
        {"text": "**大使館推薦**：2–3 月募集 → 5–7 月一次选考 → 次年渡日"}]})
    B.append({"id": bid("p_kuhi2"), "type": "paragraph",
              "text": "**升学不会自动续**：需导师推荐 + 向文科省申请支給期間延長，是否通过由文科省选考。"})

    # 6) 学習奨励費
    B.append({"id": bid("h_mext"), "type": "heading", "level": 2, "text": "私費対象：学習奨励費"})
    B.append({"id": bid("t_mext"), "type": "fee_table",
              "headers": ["项目", "内容"],
              "rows": [
                  ["月額", "48,000 円"],
                  ["期间", "1 年 或 6 个月"],
                  ["募集", "原则年 2 次（春・秋）"],
                  ["对象", "学部正规生 / 院生・研究生"],
                  ["窗口", "所属学部的学務係"]]})

    # 7) 官方入口
    B.append({"id": bid("h_off"), "type": "heading", "level": 2, "text": "官方入口"})
    B.append({"id": bid("lk_off"), "type": "links", "items": [
        {"text": "私費留学生のための奨学金（制度总览）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
        {"text": "Scholarship Guidebook（申请书写法・面试）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
        {"text": "応募流程讲解资料", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
        {"text": "奨学金 Q&A 集", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
        {"text": "国費外国人留学生（制度说明）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"}]})

    B.append({"id": bid("warn"), "type": "warning",
              "text": "**别把本页当成明年的安排。** 名称、金额、截止日每年都变，官方一览也只列当年度。"})
    B.append({"id": bid("win"), "type": "notice",
              "text": "咨询：国際部留学課 留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp`（私費奖学金）；学習奨励費 找**所属学部・学府的学務係**。"})

    art = {"_id": "guide-scholarship", "category": "15",
           "title": "奖学金（私費・国費）",
           "summary": f"现在能申请的 {len(live)} 件（金额・截止一览，含可下载的募集要項）、"
                      "两条应募路径、日语与併給门槛、国費外国人留学生 4 类别月額、私費学習奨励費 48,000 円/月。",
           "tags": ["奖学金", "国费", "MEXT", "学習奨励費", "留学課"],
           "author": "管理员", "updatedAt": FETCHED, "blocks": B}
    json.dump(art, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"wrote {OUT}")
    print(f"  块数 {len(B)} · 募集中 {len(live)} 件 · 附件链接 {len(links)} 条")
    print("  块 id:", " ".join(b["id"] for b in B))


if __name__ == "__main__":
    main()
