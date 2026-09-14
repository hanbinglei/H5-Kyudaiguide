#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可读性清理 · 第三批（E 类）：给 6 个超载小节补小标题拆分。

这 6 处与「相談窓口」不同：那一节是 7 个**同构**项，该并成列表；
这 6 处一节里塞的是**不同主题**（段落＋表格＋警示混排），并列表只会更乱，
正确修法是插小标题把它分成 2～3 组，每组 ≤5 个元素。

顺带处理一个内容 bug：guide-transport 有一处 **⬜待核对** 的提示块
（西铁 free pass 售价未确认）—— 这是内部待办，不该出现在读者面前。移到内部备忘文件。
"""
import json, os, hashlib, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (文章, 锚点关系, 锚点文本片段, 新小标题中文, ja, en, ko)
INS = [
 ("guide-entry", "before", "福冈机场站是始发站",
  "认清乘车方向", "乗車方向の確認", "Which train to board", "승차 방향 확인"),
 ("guide-entry", "before", "地下铁空港线与 JR 筑肥线直通运行",
  "直通运行与票价", "直通運転と運賃", "Through service and fares", "직통 운행과 운임"),
 ("guide-housing", "before", "官方信息补充：房型为 1R",
  "房屋与设施", "居室と設備", "Rooms and facilities", "주거 형태와 설비"),
 ("guide-housing", "before", "交通：全部丝岛系统的九大线",
  "交通与位置", "交通と立地", "Access and location", "교통과 입지"),
 ("guide-residence", "before", "用错证件从内地进香港",
  "过境证件与风险", "越境に使う証明書類とリスク", "Cross-border documents and risks", "통과 증명서와 리스크"),
 ("guide-residence", "before", "退税：所有从香港起飞的航班",
  "离境税退还", "離境税の払い戻し", "Departure tax refund", "출국세 환급"),
 ("guide-transport", "after", "触碰支付的每日上限",
  "其他票券与优惠", "その他のきっぷと割引", "Other tickets and discounts", "기타 승차권과 할인"),
 ("guide-transport", "after", "方案 2 里的姪浜是",
  "两种方案的明细", "2 つの案の内訳", "Details of the two plans", "두 방안의 세부"),
 ("guide-transport", "before", "结论：只去一个地点",
  "结论与操作提示", "結論と操作のヒント", "Conclusion and practical tips", "결론과 조작 안내"),
 ("guide-transport", "after", "网上流传的「起步 1,064 米",
  "相关入口", "関連リンク", "Related links", "관련 링크"),
]
DROP = [("guide-transport", "⬜待核对")]

payload = {}
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]

by_art = {}
for art, rel, anchor, zh, ja, en, ko in INS:
    by_art.setdefault(art, []).append((rel, anchor, {"id": bid(art, zh), "type": "subheading", "text": zh},
                                       {"ja": ja, "en": en, "ko": ko}))

for art, items in by_art.items():
    p = os.path.join(ROOT, "content", art + ".json")
    d = json.load(open(p, encoding="utf-8"))
    bl = d["blocks"]
    # 从后往前插，避免索引漂移
    done = []
    for rel, anchor, blk, tr in sorted(items, key=lambda x: -next(
            (i for i, b in enumerate(bl) if anchor in str(b.get("text") or "")), 0)):
        idx = next((i for i, b in enumerate(bl) if anchor in str(b.get("text") or "")), None)
        assert idx is not None, "%s 锚点未找到: %s" % (art, anchor)
        assert not any(b.get("id") == blk["id"] for b in bl), "%s 已插入过 %s" % (art, blk["text"])
        bl.insert(idx if rel == "before" else idx + 1, blk)
        done.append(blk["text"])
        payload.setdefault(art, {}).setdefault("__new__", []).append((blk["id"], tr))
    # 删除内部待办
    for a, marker in DROP:
        if a != art: continue
        for i, b in enumerate(bl):
            if marker in str(b.get("text") or ""):
                open(os.path.join(ROOT, "tools", "INTERNAL_TODO.md"), "a", encoding="utf-8").write(
                    "- [ ] %s：%s\n" % (art, b["text"]))
                bl.pop(i); done.append("(移除内部待办)")
                break
    json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("%-17s 插入 %d 个: %s" % (art, len(done), "、".join(done)))

# 译文 payload（每篇一个文件）
for art, v in payload.items():
    pay = {}
    for blkid, tr in v["__new__"]:
        for L in ("ja", "en", "ko"):
            pay.setdefault(L, {})[blkid] = {"text": tr[L]}
    fp = os.path.join(ROOT, "tools", ".e_%s.json" % art)
    json.dump(pay, open(fp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("  payload →", os.path.basename(fp))
