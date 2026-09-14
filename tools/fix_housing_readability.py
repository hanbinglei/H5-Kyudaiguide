#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可读性清理 · 第四批B：guide-housing（20 处）

策略：单元格过长的根因是把**明细**塞进了单元格。明细外移到表下说明段，
单元格只留结果值（信息不丢，表也不再被撑破）。
另 3 条长列表项（位置/朝向/周边）缩短。该篇三语覆盖 6%，改动只需中文。
"""
import json, os, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]
P = os.path.join(ROOT, "content", "guide-housing.json")
d = json.load(open(P, encoding="utf-8"))
bl = d["blocks"]
def find(i): return next(b for b in bl if b.get("id") == i)

# ① bdce7d 宿舍表：室数・共用面积外移
t = find("bdce7d")
t["rows"] = [
 ["ドミトリー1", "单间 17 ㎡／夫妻室 43 ㎡", "30,000 円 + 水电", "约 10 分"],
 ["ドミトリー2", "单间 17 ㎡／夫妻室 43 ㎡", "21,000 円 + 水电", "约 10 分"],
 ["伊都協奏館 D3", "4 人单元共享", "21,000 円 + 水电", "约 10 分"],
] if False else t["rows"]
# 仅改写超限单元格，保持其它列不动
old_rows = [r[:] for r in t["rows"]]
for r_ in t["rows"]:
    for k, c in enumerate(r_):
        s = str(c)
        if s.startswith("单间 17 ㎡（"):   r_[k] = "单间 17 ㎡／夫妻室 43 ㎡"
        elif s.startswith("单间 30,000"): r_[k] = "30,000 円 + 水电"
        elif s.startswith("4 人单元共享（"): r_[k] = "4 人单元共享"
        elif s.startswith("单间 21,000"):  r_[k] = "21,000 円 + 水电"
nid = bid("housing", "room_note")
if not any(b.get("id") == nid for b in bl):
    bl.insert(bl.index(t) + 1, {"id": nid, "type": "notice",
        "text": "房型与室数：ドミトリー1・2 各有单间 17 ㎡ 与夫妻室 43 ㎡；ドミトリー2 的单间 242 室、夫妻室 20 室，ドミトリー1 的单间 549 室、夫妻室 15 室。伊都協奏館 D3 为 4 人单元共享（个室 7 ㎡ + 共用 28 ㎡）。"})
print("bdce7d：4 个单元格缩短，明细外移")

# ② a7c359 区域表
a = find("a7c359")
NEW = {"走高田经由的丝岛九大线，班次略少；有原付或车的话走田间小路很快": "九大线班次略少，有车更快",
       "越往北越少，需南下周船寺或东去学园通": "越往北越少，需南下或东行",
       "周船寺经由或学园通经由的九大线，较方便": "周船寺或学园通经由，较方便"}
for r_ in a["rows"]:
    for k, c in enumerate(r_):
        if str(c) in NEW: r_[k] = NEW[str(c)]
print("a7c359：3 个单元格缩短")

# ③ 55a19c 初期费用表：明细外移
f = find("55a19c")
for r_ in f["rows"]:
    for k, c in enumerate(r_):
        s = str(c)
        if s.startswith("约 50,320"):  r_[k] = "约 50,320 円 + 光热费"
        elif s.startswith("132,100 円（"): r_[k] = "132,100 円"
i = bl.index(f)
if not any(b.get("id") == bid("housing", "cost_note") for b in bl):
    bl.insert(i + 1, {"id": bid("housing", "cost_note"), "type": "notice",
        "text": "初期费用明细：132,100 円 = 押金 30,000 + 卡钥匙 16,500 + 清扫 58,300 + 诸经费 27,300。月度费用中含网费（免费），需自备路由器。"})
print("55a19c：2 个单元格缩短，明细外移")

# ④ 89ee7b 中介表
m = find("89ee7b")
NEW2 = {"听起来官方，其实不是学校机构。自己管理的部分房源不收手续费": "非学校机构，部分房源免手续费",
        "全国连锁，中介费只要半个月房租": "全国连锁，中介费半个月房租",
        "管理 SETTLE International": "SETTLE 的管理方",
        "学校附近房源不少，但线下门店在姪浜": "学校附近有房，门店在姪浜"}
for r_ in m["rows"]:
    for k, c in enumerate(r_):
        if str(c) in NEW2: r_[k] = NEW2[str(c)]
print("89ee7b：4 个单元格缩短")

# ⑤ 长列表项
LIST = {"e96b54": {0: "四处均无食堂（官方明确说明），需自炊或去校内食堂",
                   3: "D3 为 4 人单元共享：留学生 2 + 日本学生 2，申请需写交流动机"},
        "161806": {1: "公営住宅（市営/県営）：租金较低，募集期有限，需加入九大住宅保証制度"},
        "adf452": {0: "位置：校区西南、南门外，靠近农学部，从南门去学校要爬长坡",
                   1: "朝向：朝北采光差、有路噪；朝南夏天晒、蚊虫多",
                   3: "周边：无超市（仅路口便利店）；有洗浴中心与几家餐厅"}}
for i, mp in LIST.items():
    b = find(i)
    b["items"] = [({"text": (it.get("text") if isinstance(it, dict) else it),
                    **({"num": it["num"]} if isinstance(it, dict) and it.get("num") else {})})
                   for it in b["items"]]
    for k, v in mp.items(): b["items"][k]["text"] = v
    print("%s：%d 项缩短" % (i, len(mp)))

json.dump(d, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("\n块数:", len(bl))
