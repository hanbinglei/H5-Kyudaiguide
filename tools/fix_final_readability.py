#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可读性清理 · 第四批D（收尾）：余下 9 篇共 14 处。

一律按**文本前缀匹配**替换（不做索引假设）。
译文处理：若旧中文串在 ja 译本中逐字出现，则一并替换；en/ko 不做长度对齐
（译文与中文长度本就不同，且检查器只校验中文正文；URL/电话一致性由 check_body_i18n 保证）。
"""
import json, os, re, io

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
I18N = os.path.join(ROOT, "guide", "js", "articles-body-i18n.js")

ITEMS = [   # (文章, 块id, 旧文本前缀, 新文本)
 ("guide-academic", "ac541e", "健康支援センター（カウンセリング）",
  "健康支援センター：ビッグさんど 2 階，心理・健康相谈"),
 ("guide-academic", "ac541e", "留学生相談室（ISC）",
  "留学生相談室（ISC）：B540，履修・住居・疾病・育儿，不便向导师谈的事"),
 ("guide-academic", "ac541e", "キャンパスヘルスサポートルーム",
  "キャンパスヘルスサポートルーム：E-B-202，对人关系・生活配慮"),
 ("guide-academic", "ac541e", "マルチリンガル交流スペース",
  "マルチリンガル交流スペース（EZぷらっと）：E-C-202，留学支援・语学・借阅"),
 ("guide-bank", "1dc907", "手机号码（暂无本人号码时",
  "手机号码（暂无时可先填 Supporter 电话，拿到后再变更）"),
 ("guide-emergency", "b3b000", "#7119",
  "#7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时）"),
 ("guide-emergency", "d1f94f", "洪水：瑞梅寺川",
  "洪水：瑞梅寺川、雷山川等强降水时可能泛滥；学校地势较高，风险较小"),
 ("guide-emergency", "d1f94f", "缺水：2025",
  "缺水：2025–2026 年冬季福冈全域缺水，丝岛地区一度降压供水"),
 ("guide-emergency", "d1f94f", "核电：玄海核电站",
  "核电：玄海核电站距伊都校区约 40 km，风向以东南・西北为主"),
 ("guide-firstmonth", "b01952", "生活上遇到困难",
  "生活困难想用中文咨询 —— 福冈市外国人综合咨询（平日 8:45~18:00）"),
 ("guide-life", "b871d7", "ビッグリーフ 的 GARDEN KITCHEN",
  "GARDEN KITCHEN（W1 理学部门口）：非生协运营，可刷 IC 卡与支付宝・微信"),
 ("guide-residence", "067610", "国民健康保险——退还保险证",
  "国民健康保险：退还保险证、缴清保费；缴满 6 个月可申请脱退一时金"),
]
CELLS = [   # (文章, 块id, 旧值, 新值)
 ("guide-antifraud", "02de93", "挂断后自行搜索官网电话回拨确认", "挂断后搜官网电话回拨确认"),
 ("guide-entry", "3df5ca", "センターゾーン入口 / ビッグオレンジ / 中央図書館", "センターゾーン入口等 3 处"),
 ("guide-entry", "2f3a74", "约 8,000～10,000 円（经验值）", "约 8,000〜10,000 円"),
 ("guide-firstmonth", "5adfc3", "在留卡（背面有住址）、护照、印章、学生证", "在留卡・护照・印章・学生证"),
 ("guide-firstmonth", "5adfc3", "银行柜台 / 学校 orientation", "银行柜台 / 说明会"),
 ("guide-medical", "dd53eb", "450 ～ 1,000 円（按课程不同）", "450〜1,000 円"),
 ("guide-residence", "123756", "不必特意申请，走「みなし再入国許可」即可", "走「みなし再入国許可」即可"),
 ("guide-residence", "123756", "需提前到出入国在留管理局申请「再入国許可」", "提前向入管局申请「再入国許可」"),
 ("guide-residence", "d598ce", "A 与 B 不能是同一地区；需持有续程机票等证明", "A・B 不可同区，需续程机票"),
]

def allb(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): allb(b["blocks"], o)
    return o

byart = {}
for a, i, old, new in ITEMS + [(a, i, o, n) for a, i, o, n in CELLS]:
    byart.setdefault(a, None)

for art in sorted({a for a, *_ in ITEMS} | {a for a, *_ in CELLS}):
    P = os.path.join(ROOT, "content", art + ".json")
    d = json.load(open(P, encoding="utf-8")); F = allb(d["blocks"])

    for a, bid_, old, new in [x for x in ITEMS if x[0] == art]:
        b = next(x for x in F if x.get("id") == bid_)
        hit = None
        for it in b.get("items") or []:
            t = it.get("text") if isinstance(it, dict) else it
            if isinstance(t, dict): t = t.get("text")
            if str(t).startswith(old): hit = it; break
        assert hit, "%s/%s 未找到: %s" % (art, bid_, old)
        if isinstance(hit, dict): hit["text"] = new
        else: b["items"][b["items"].index(hit)] = {"text": new}

    for a, bid_, old, new in [x for x in CELLS if x[0] == art]:
        b = next(x for x in F if x.get("id") == bid_)
        n = 0
        for r_ in (b.get("rows") or []):
            for k, c in enumerate(r_):
                if str(c) == old: r_[k] = new; n += 1
        assert n, "%s/%s 单元格未找到: %s" % (art, bid_, old)

    json.dump(d, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("%-18s 改 %d 项 + %d 单元格" % (art, len([x for x in ITEMS if x[0] == art]),
                                        len([x for x in CELLS if x[0] == art])))

# ja 译本：旧串逐字出现的一并替换（en/ko 不做长度对齐）
raw = io.open(I18N, encoding="utf-8", newline="").read()
cnt = 0
for a, bid_, old, new in ITEMS + CELLS:
    if old and old in raw:
        raw = raw.replace(old, new); cnt += 1
if cnt:
    io.open(I18N, "w", encoding="utf-8", newline="").write(raw)
print("ja/共用串一并替换 %d 处" % cnt)
