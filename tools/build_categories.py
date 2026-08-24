"""
build_categories.py — 按规则表给 84 栋标注建筑分类
读取 annotations-claude.json → 日本语名称匹配 → 写入 cat 字段
人工可改，重跑不覆盖已有 cat
"""
import json, os, re

BASE = os.path.dirname(os.path.abspath(__file__))
ANN_PATH = os.path.join(BASE, "..", "h5-mvp", "data", "annotations-claude.json")

with open(ANN_PATH, "r", encoding="utf-8") as f:
    annotations = json.load(f)

# 类别规则（按序匹配，首中即停）
RULES = [
    ("clinic",   r"診療所|保健|クリニック|病院|clinic|health"),
    ("library",  r"図書館|library|libca", re.IGNORECASE),
    ("dining",   r"食堂|レストラン|カフェ|売店|書店|big\s|ビッグ|dining|store|コンビニ|喫茶|cafe", re.IGNORECASE),
    ("dorm",     r"ドミトリー|寄宿|協奏館|皎皎|亭亭|house|寮|宿泊|ゲストハウス"),
    ("sports",   r"体育館|道場|錬成場|アリーナ|ジム|gym|sports|athletic", re.IGNORECASE),
    ("admin",    r"本部|事務|椎木講堂|給水|エコ|管理|センター[0-9]号|稲盛|文化館"),
    ("teaching", r"講義|号館|zone\s?\d|ホール|hall|プラザ|教育|教室|講堂|学[習修]"),
    ("research", r"実験|研究|センター(?!\d号)|実証|laboratory|institute|工場|分析|観測", re.IGNORECASE),
]

# Tier 1 (常驻标签)：按类别默认
TIER1_CATS = {"dining", "library", "admin", "clinic", "dorm", "sports"}

updated = 0
for osm_id, entry in annotations.items():
    if entry.get("cat"):
        continue  # 人工已定，不动
    
    hay = entry.get("name_ja", "") + " " + entry.get("name_zh", "")
    
    for cat, pattern, *flags in RULES:
        flag = flags[0] if flags else 0
        if re.search(pattern, hay, flag):
            entry["cat"] = cat
            updated += 1
            break
    
    if "cat" not in entry:
        entry["cat"] = "other"
        updated += 1
    
    # Tier 1: 常用建筑默认出标签
    if entry["cat"] in TIER1_CATS:
        entry["tier"] = 1

with open(ANN_PATH, "w", encoding="utf-8") as f:
    json.dump(annotations, f, ensure_ascii=False, indent=1)

print(f"Classified {updated} entries in {ANN_PATH}")

# Show distribution
cats = {}
for e in annotations.values():
    c = e.get("cat", "?")
    cats[c] = cats.get(c, 0) + 1
for c, n in sorted(cats.items(), key=lambda x: -x[1]):
    print(f"  {c:12s}: {n:>3}")
