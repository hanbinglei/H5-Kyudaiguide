#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把「相談窓口一览」下 7 个各自独立的段落合并成一个 list 块。

起因：该节原有 7 个段落（每个窗口一段），我 S5c 又加了 2 个块 → 9 个元素，
超过可读性预算的「每个 heading 下 ≤5 个元素」。7 个同构段落本来就该是一个列表。

做法：
  · 按顺序取出这 7 段的文案（中文）→ 组成 list 的 items
  · 删掉这 7 个段落块，插入 list 块
  · 译文：从 articles-body-i18n.js 里按原 7 个 id 取出 ja/en/ko 文本，
    合成同样的 items 数组，写到新的 list id 下；并**删掉那 7 个旧 id 的译文**
    （否则 check_body_i18n 会报「译文指向不存在的区块」）
"""
import json, os, io, re, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, "content", "guide-academic.json")
I18N = os.path.join(ROOT, "guide", "js", "articles-body-i18n.js")

PREFIX = [
 "健康支援センター（カウンセリング）",
 "留学生相談室（ISC）",
 "キャンパスヘルスサポートルーム",
 "マルチリンガル交流スペース（EZぷらっと）",
 "教務課：",
 "学生課：",
 "サポートセンター：",
]
NEW_ID = hashlib.md5(b"list_consult_windows").hexdigest()[:6]


def bid(*p):
    return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]


art = json.load(open(ART, encoding="utf-8"))
bl = art["blocks"]
assert not any(b["id"] == NEW_ID for b in bl), "已执行过，勿重复"

# 1) 定位那 7 个段落（按前缀，保持顺序）
targets = []
for pre in PREFIX:
    hit = next((i for i, b in enumerate(bl)
                if b.get("type") == "paragraph" and (b.get("text") or "").startswith(pre)), None)
    assert hit is not None, "定位失败: " + pre
    targets.append(hit)
print("定位到的段落索引:", targets)
assert targets == sorted(targets)

# 2) 读现有译文
raw = io.open(I18N, encoding="utf-8", newline="").read()
m = re.search(r'"guide-academic": \{', raw)
start = m.start()
d = 0
for k in range(raw.index("{", start), len(raw)):
    if raw[k] == "{":
        d += 1
    elif raw[k] == "}":
        d -= 1
        if d == 0:
            end = k + 1
            break
entry = json.loads(raw[start + len('"guide-academic": '):end])

old_ids = [bl[i]["id"] for i in targets]
trans_items = {}
for lang in ("ja", "en", "ko"):
    items = []
    for oid in old_ids:
        v = (entry.get(lang) or {}).get(oid)
        assert v and v.get("text"), f"{lang}/{oid} 缺译文"
        items.append({"text": v["text"]})
    trans_items[lang] = items
print("已提取 7 段译文 ×3 语言")

# 3) 组装 list 块并替换
items_zh = [{"text": bl[i]["text"]} for i in targets]
lst = {"id": NEW_ID, "type": "list", "items": items_zh}
lo, hi = targets[0], targets[-1]
assert hi - lo + 1 == 7, (lo, hi)
bl[lo:hi + 1] = [lst]
art["blocks"] = bl
json.dump(art, open(ART, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"段落合并为 list 块 {NEW_ID}；该篇块数 {len(bl)}")

# 4) 译文：写入新 id、删除旧 id
for lang in ("ja", "en", "ko"):
    for oid in old_ids:
        entry[lang].pop(oid, None)
    entry[lang][NEW_ID] = {"items": trans_items[lang]}
new_json = json.dumps(entry, ensure_ascii=False, indent=1)
out = raw[:start] + '"guide-academic": ' + new_json + raw[end:]
io.open(I18N, "w", encoding="utf-8", newline="").write(out)
print("译文已迁移：7 段 → 1 个 list（旧 id 已清除）")
