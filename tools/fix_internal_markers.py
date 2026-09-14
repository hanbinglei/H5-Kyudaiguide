#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 5 处「⬜待核对」内部待办改写为面向读者的说明。

这些是真实未确认事项，但以 ⬜待核对 的形式出现等于把内部工作流摊给读者看
（其中一处甚至是表格单元格的值）。改写成正常说明，待办转入 tools/INTERNAL_TODO.md。
"""
import json, os, io, re, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]

FIX = {
 ("guide-entry", "e8280e"): "经常往返市区或机场的，可考虑「伊都キャンパス回数券」（6,730 円 / 10 枚，即 673 円/次），覆盖地下铁各站至昭和巴士九大线校内。**是否可用至福冈机场站，官方页面未写明**，购买前请自行确认。详见【交通】。",
 ("guide-housing", "f7acdc"): "**研究生（研究生 / リサーチスチューデント）与交换生能否入住，官方未明确说明。** 日本人通道明确排除研究生、聴講生等非正課生；留学生通道的募集要项只写「新たに来学・来日予定の留学生」，没有单独列出这两类身份。拿不准就直接问：国際部留学課受入支援係 imm.s@jimu.kyushu-u.ac.jp",
 ("guide-life", "faabed"): "ミールプリペ 的返利档位在 2026 年调整过，低档位的比例明显下降 —— 充得少反而不划算。充值前先看官方最新的档位表再决定金额，不要照着旧攻略里的数字算。现行各档充值额与返利额见官网：https://www.coop.kyushu-u.ac.jp/e-money/index.html",
 ("guide-transport", "a010db"): "西鉄 free pass 的售价与免费区域，官方把价格印在图片里，各处流传的数字口径不一致。购买前请在 my route App 内确认。**免费区域是否覆盖九大这一段，比价格更影响它值不值得买。**",
}
CELL = ("guide-entry", "2f3a74", "⬜待核对", "以官网为准")

# 新增小标题：把 transport「折扣票券一览」6 个元素拆成 3 + 3
SUB = ("guide-transport", "西鉄バス 6 小时 / 24 小时 free pass", "西铁巴士优惠",
       "西鉄バスの割引", "Nishitetsu bus discounts", "니시테츠 버스 할인")

todo = []
for (art, blkid), new in FIX.items():
    p = os.path.join(ROOT, "content", art + ".json")
    d = json.load(open(p, encoding="utf-8"))
    b = next(x for x in d["blocks"] if x["id"] == blkid)
    todo.append((art, blkid, b["text"]))
    b["text"] = new
    json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("%-18s %s 改写（%d → %d 字）" % (art, blkid, len(todo[-1][2]), len(new)))

# 表格单元格
art, blkid, old, new = CELL
p = os.path.join(ROOT, "content", art + ".json")
d = json.load(open(p, encoding="utf-8"))
b = next(x for x in d["blocks"] if x["id"] == blkid)
n = 0
for r_ in b["rows"]:
    for i, c in enumerate(r_):
        if str(c).strip() == old:
            r_[i] = new; n += 1
todo.append((art, blkid, "表格单元格：昭和巴士 九大学研都市→校内各站 费用未确认"))
json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("%-18s %s 单元格替换 %d 处" % (art, blkid, n))

# 小标题
art, anchor, zh, ja, en, ko = SUB
p = os.path.join(ROOT, "content", art + ".json")
d = json.load(open(p, encoding="utf-8"))
bl = d["blocks"]
idx = next(i for i, b in enumerate(bl) if anchor in str(b.get("text") or ""))
nb = {"id": bid(art, zh), "type": "subheading", "text": zh}
assert not any(b.get("id") == nb["id"] for b in bl), "已插入过"
bl.insert(idx, nb)
json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("%-18s 插入小标题「%s」" % (art, zh))

fp = os.path.join(ROOT, "tools", ".marker_%s.json" % art)
json.dump({L: {nb["id"]: {"text": t}} for L, t in (("ja", ja), ("en", en), ("ko", ko))},
          open(fp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

with open(os.path.join(ROOT, "tools", "INTERNAL_TODO.md"), "a", encoding="utf-8") as f:
    f.write("\n## 从正文中移出的待确认事项\n")
    for a, i, s in todo:
        f.write("- [ ] %s / %s：%s\n" % (a, i, s.replace("\n", " ")[:150]))
print("\n待办已记录 → tools/INTERNAL_TODO.md")
