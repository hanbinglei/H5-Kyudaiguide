#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可读性清理 · 第四批C（重做）：guide-shopping + guide-transport

上一版按**索引**替换 —— 但这几个列表的超长项并不在索引 0
（92e039 在 1、af7aff 在 3、3f3ee3 在 4），结果覆盖了正确的项、长项反而留着。
本版一律**按文本前缀匹配**替换，不做索引假设。
"""
import json, os, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]

def load(a): return json.load(open(os.path.join(ROOT, "content", a + ".json"), encoding="utf-8"))
def save(a, d):
    json.dump(d, open(os.path.join(ROOT, "content", a + ".json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)

def allb(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): allb(b["blocks"], o)
    return o

def repl_item(F, blkid, prefix, new, insert_after=None):
    """把 blkid 里以 prefix 开头的项换成 new；若给 insert_after 则在其后再插一条。"""
    b = next(x for x in F if x.get("id") == blkid)
    hit = None
    for k, it in enumerate(b.get("items") or []):
        t = it.get("text") if isinstance(it, dict) else it
        if isinstance(t, dict): t = t.get("text")
        if str(t).startswith(prefix): hit = k; break
    assert hit is not None, "未找到: %s / %s" % (blkid, prefix)
    it = b["items"][hit]
    if isinstance(it, dict): it["text"] = new
    else: b["items"][hit] = {"text": new}
    if insert_after:
        b["items"].insert(hit + 1, {"text": insert_after})
    return True

def repl_cell(F, blkid, old, new):
    b = next(x for x in F if x.get("id") == blkid)
    n = 0
    for r_ in (b.get("rows") or []):
        for k, c in enumerate(r_):
            if str(c) == old: r_[k] = new; n += 1
    assert n, "单元格未找到: %s / %s" % (blkid, old)
    return n

# ══════════ shopping ══════════
d = load("guide-shopping"); F = allb(d["blocks"])
repl_item(F, "edac1a", "マックスバリュ", "マックスバリュ（MaxValu）：AEON 系超市，周船寺西店 24 小时营业")
repl_item(F, "b4d3ba", "ドラッグイレブン", "ドラッグイレブン：九州本地药妆连锁（药品・化妆品・日用品）")
repl_item(F, "b4d3ba", "サンドラッグ", "サンドラッグ / ダイレックス：药妆与折扣店，日用品较便宜")
repl_item(F, "92e039", "サニー（Sunny）", "サニー / マルキョウ：福冈本地超市，生鲜便宜、常有特价")
repl_item(F, "af7aff", "トレジャーファクトリー", "トレジャーファクトリー（周船寺）：与 2nd street 相近，量少些")
for o, n in [("日用品与家具较便宜，在线库存查询方便；自行车区也不错", "日用品家具便宜，可在线查库存"),
             ("很大，住 SETTLE 的话相对近", "卖场大，离 SETTLE 较近"),
             ("变速ママチャリ约两万円以内，性价比高；没有电助力", "变速车两万円内，无电助力"),
             ("自行车区意外地不错，有便宜的电助力", "有较便宜的电助力车")]:
    repl_cell(F, "3496a2" if "SETTLE" in o or "库存" in o else "97941b", o, n)
save("guide-shopping", d)
print("shopping：列表 5 项 + 单元格 4 处（按文本匹配）")

# ══════════ transport ══════════
d = load("guide-transport"); F = allb(d["blocks"])
repl_cell(F, "54f112", "九大学研都市站 ↔ 伊都校区各公交站", "九大学研都市站↔伊都校区")
repl_cell(F, "54f112", "前原站北口・周船寺小学前 ↔ 伊都校区", "前原・周船寺小学前↔伊都")
repl_item(F, "76448a", "信用卡触碰支付",
          "触碰支付（タッチ決済）：地铁 3 线 36 站可直接刷信用卡",
          insert_after="当日累计满 640 円后不再扣费（残障・儿童 320 円），2024-04-01 起实施")
repl_item(F, "28e638", "伊都校区回数券", "伊都校区回数券：6,730 円 / 10 张（3 个月有效），九大生協可购")
repl_item(F, "28e638", "エコルカード", "エコルカード / ワイドエコルカード：西铁巴士月票，价格因区域而异")
repl_item(F, "3f3ee3", "返程坐回九大学研都市",
          "返程在出闸前的精算机补付姪浜→九大学研都市的差额（约 300 円）")
repl_item(F, "e03f4f", "买车后要上牌",
          "上牌：原付牌照由居住地市役所 / 区役所发放（非车管所），西区与丝岛市窗口不同")
repl_cell(F, "032240", "270×2 + 640 = 1,180円", "合计 1,180 円")
repl_cell(F, "de3307", "2,350 円（仅用 My Number Card 时 1,550 円）", "2,350 円")
# 两处外移说明段
b28 = next(x for x in F if x.get("id") == "28e638")
i = bl_placeholder = None
top = d["blocks"]
def find_pos(bs, blkid, path=None):
    for k, b in enumerate(bs):
        if b.get("id") == blkid: return bs, k
        if b.get("blocks"):
            r = find_pos(b["blocks"], blkid)
            if r: return r
    return None
lst, k = find_pos(top, "28e638")
if not any(x.get("id") == bid("transport", "kippu_note") for x in F):
    lst.insert(k + 1, {"id": bid("transport", "kippu_note"), "type": "notice",
        "text": "回数券适用范围：地铁各站 ↔ JR 九大学研都市站 ↔ 昭和巴士九大校区内。每张 673 円。"})
lst2, k2 = find_pos(top, "de3307")
if not any(x.get("id") == bid("transport", "mynumber_note") for x in F):
    lst2.insert(k2 + 1, {"id": bid("transport", "mynumber_note"), "type": "notice",
        "text": "※ 使用 My Number Card 在线申请时，上述费用降为 1,550 円。"})
save("guide-transport", d)
print("transport：列表 5 项 + 单元格 4 处 + 2 个说明段")
