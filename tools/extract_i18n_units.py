#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""extract_i18n_units.py — 把一篇的「可译单元」抽成扁平清单，供翻译用。

用法：
    python tools/extract_i18n_units.py guide-newcomer            # 打印摘要
    python tools/extract_i18n_units.py guide-newcomer out.json   # 写清单

输出结构：
{
  "article": "guide-newcomer",
  "stats": {"blocks": 50, "units": 155, "skip": 83},
  "units": [ {"id","block","kind","sub","src"} ... ],   # 只含需要翻译的
  "shape": { "<blockId>": {"kind":"list","n":5} ... }    # 各块期望的译文结构
}

skip 规则（这些不需要翻译）：
  · 纯日期/时刻、纯数字、金额
  · URL / 邮箱 / 电话
  · 纯拉丁文本（品牌名、App 名）
  · 完全不含汉字的串（纯假名专名，如 セトルインターナショナル）
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATE_ONLY = re.compile(r"^[0-9０-９/:：\-.〜~～・／月火水木金土日曜()（）\s]+$")
NUM_ONLY = re.compile(r"^[0-9０-９,，\.\s]+$")
URL_EMAIL = re.compile(r"https?://|[\w.+-]+@[\w.-]+\.\w+")
PHONE_ONLY = re.compile(r"^\+?[\d\-\s()]{9,}$")
LATIN_ONLY = re.compile(r"^[A-Za-z0-9 ,.\-()/&'’“”:;!?%+]+$")
KANA = re.compile(r"[\u3040-\u30ff]")
HAN = re.compile(r"[\u4e00-\u9fff]")


def needs_translation(t):
    """判定是否需要翻译。

    规则刻意保守：**只要含汉字就送去翻译**。
    早先版本试图识别「纯日本专有名词」来跳过，结果把带中文注记的条目也误跳过 ——
      「オリエン + 并行 4 项」「マイナンバー（个人编号）」「エコルカード（西铁）」
      「急行・直达车」全被当成专名，译出来就是中文漏进外语界面。
    专名多送一次代价很小（译者照抄即可），漏译代价很大，所以不冒这个风险。
    只跳过：纯日期/时刻、纯数字、纯金额、URL/邮箱/电话、纯拉丁文本、以及**完全不含汉字**的串
    （后者就是「セトルインターナショナル」「ドミトリー1～3」这类纯假名专名）。
    """
    t = str(t or "").strip()
    if not t:
        return False
    if DATE_ONLY.match(t) or NUM_ONLY.match(t) or PHONE_ONLY.match(t) or LATIN_ONLY.match(t):
        return False
    if URL_EMAIL.search(t) and not (HAN.search(t) and len(re.sub(URL_EMAIL, "", t)) > 3):
        return False
    return bool(HAN.search(t))


def scan(bs, out, shape):
    for b in bs:
        t = b.get("type")
        bid = b.get("id") or ""
        if t in ("heading", "subheading", "paragraph", "notice", "warning"):
            if needs_translation(b.get("text")):
                out.append({"id": bid, "block": t, "kind": "text", "sub": None, "src": b["text"]})
                shape.setdefault(bid, {"kind": "text", "n": 1})
        elif t in ("list", "steps"):
            items = b.get("items") or []
            n = 0
            for i, it in enumerate(items):
                for key in (("text",) if t == "list" else ("title", "desc")):
                    v = it.get(key) if isinstance(it, dict) else (it if key == "text" else None)
                    if needs_translation(v):
                        out.append({"id": bid, "block": t, "kind": t + "." + key,
                                    "sub": i, "src": str(v)})
                        n += 1
            if n:
                shape.setdefault(bid, {"kind": t, "items": len(items)})
        elif b.get("headers"):
            n = 0
            for i, h in enumerate(b["headers"]):
                if needs_translation(h):
                    out.append({"id": bid, "block": "fee_table", "kind": "header", "sub": i, "src": str(h)})
                    n += 1
            for ri, r_ in enumerate(b.get("rows") or []):
                for ci, c in enumerate(r_):
                    if needs_translation(c):
                        out.append({"id": bid, "block": "fee_table", "kind": "cell",
                                    "sub": [ri, ci], "src": str(c)})
                        n += 1
            if n:
                shape.setdefault(bid, {"kind": "fee_table",
                                       "headers": len(b["headers"]),
                                       "rows": [len(r_) for r_ in (b.get("rows") or [])]})
        elif t == "links":
            n = 0
            for i, l in enumerate(b.get("links") or b.get("items") or []):
                if needs_translation(l.get("label") or l.get("text")):
                    out.append({"id": bid, "block": "links", "kind": "link", "sub": i,
                                "src": str(l.get("label") or l.get("text"))})
                    n += 1
            if n:
                shape.setdefault(bid, {"kind": "links", "items": len(b.get("links") or b.get("items") or [])})
        if b.get("blocks"):
            scan(b["blocks"], out, shape)


def main():
    art = sys.argv[1]
    d = json.load(open(os.path.join(ROOT, "content", art + ".json"), encoding="utf-8"))
    blocks = d["blocks"]

    def count(bs, o=None):
        o = [] if o is None else o
        for b in bs:
            o.append(b)
            if b.get("blocks"): count(b["blocks"], o)
        return o

    allb = count(blocks)
    units, shape = [], {}
    scan(blocks, units, shape)
    total_units = 0
    for b in allb:
        t = b.get("type")
        if t in ("heading", "subheading", "paragraph", "notice", "warning"): total_units += 1
        elif t in ("list", "steps"): total_units += len(b.get("items") or [])
        elif b.get("headers"):
            total_units += len(b["headers"]) + sum(len(r_) for r_ in (b.get("rows") or []))
        elif t == "links": total_units += len(b.get("links") or b.get("items") or [])

    res = {"article": art,
           "stats": {"blocks": len(allb), "units": len(units), "skip": total_units - len(units)},
           "units": units, "shape": shape}
    if len(sys.argv) > 2:
        json.dump(res, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print("写出 %s：%d 块 / 待译 %d / 跳过 %d" % (sys.argv[2], len(allb), len(units), total_units - len(units)))
    else:
        print(json.dumps(res["stats"], ensure_ascii=False))
        for u in units[:10]:
            print("   [%s %s] %s" % (u["kind"], u["id"], u["src"][:60]))


if __name__ == "__main__":
    main()
