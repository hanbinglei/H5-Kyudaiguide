#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""validate_i18n_payload.py — 合并**之前**校验译文 payload 的结构。

用法：python tools/validate_i18n_payload.py guide-newcomer tools/xx.json

为什么需要：表/列表/链接的译文结构与普通段落不同（headers+rows / items），
结构写错合并进去不会报错，但界面会显示成残缺或空白 —— 事后很难发现。
本脚本按源文件的真实结构逐块核对：条目数、行数、列数、必备键。

退出码 0 = 通过；1 = 有结构问题（不要合并）。
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ("ja", "en", "ko")


def flatten(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): flatten(b["blocks"], o)
    return o


def main():
    art, payload_path = sys.argv[1], sys.argv[2]
    src = json.load(open(os.path.join(ROOT, "content", art + ".json"), encoding="utf-8"))["blocks"]
    F = {b["id"]: b for b in flatten(src)}
    pay = json.load(open(payload_path, encoding="utf-8"))
    errs, warns = [], []

    present = [L for L in LANGS if L in pay]
    if not present:
        print("  ✗ payload 里没有任何语言键（应为 ja / en / ko 之一）"); sys.exit(1)
    missing = [L for L in LANGS if L not in pay]
    if missing:
        warns.append("本次只含 %s；%s 尚未提供（按语言分批交付时属正常）"
                     % ("/".join(present), "/".join(missing)))
    for L in present:
        tr = pay[L]
        for b in F.values():
            bid, t = b.get("id"), b.get("type")
            v = tr.get(bid)
            if v is None:
                continue                      # 未提供的块按「回退中文」处理，不算错
            if not isinstance(v, dict):
                errs.append("%s/%s：应为对象，实为 %s" % (L, bid, type(v).__name__)); continue
            if t in ("heading", "subheading", "paragraph", "notice", "warning"):
                if "text" not in v:
                    errs.append("%s/%s：%s 缺 text" % (L, bid, t))
            elif t in ("list", "steps"):
                if "items" not in v:
                    errs.append("%s/%s：%s 缺 items" % (L, bid, t)); continue
                if len(v["items"]) != len(b.get("items") or []):
                    errs.append("%s/%s：items 数 %d ≠ 源 %d" % (L, bid, len(v["items"]), len(b.get("items") or [])))
            elif b.get("headers"):
                if "headers" not in v or "rows" not in v:
                    errs.append("%s/%s：表格缺 headers/rows" % (L, bid)); continue
                if len(v["headers"]) != len(b["headers"]):
                    errs.append("%s/%s：表头列数 %d ≠ 源 %d" % (L, bid, len(v["headers"]), len(b["headers"])))
                if len(v["rows"]) != len(b.get("rows") or []):
                    errs.append("%s/%s：表行数 %d ≠ 源 %d" % (L, bid, len(v["rows"]), len(b.get("rows") or [])))
                else:
                    for ri, (r1, r2) in enumerate(zip(v["rows"], b["rows"])):
                        if len(r1) != len(r2):
                            errs.append("%s/%s：第 %d 行列数 %d ≠ 源 %d" % (L, bid, ri + 1, len(r1), len(r2)))
            elif t == "links":
                key = "items" if "items" in v else ("links" if "links" in v else None)
                if not key:
                    errs.append("%s/%s：links 缺 items" % (L, bid)); continue
                n_src = len(b.get("links") or b.get("items") or [])
                if len(v[key]) != n_src:
                    errs.append("%s/%s：links 数 %d ≠ 源 %d" % (L, bid, len(v[key]), n_src))
        # URL / 联系方式一致性（同 check_body_i18n 的口径）
        for bid, v in tr.items():
            b = F.get(bid)
            if not b: continue
            def urls(x):
                return set(re.findall(r"https?://[^\s\"'）)]+", json.dumps(x, ensure_ascii=False)))
            if urls(v) - urls(b):
                warns.append("%s/%s：译本引入了源中没有的 URL" % (L, bid))

    n_blocks = sum(len(pay[L]) for L in present)
    print("校验 %s ← %s：译文块条目 %d" % (art, os.path.basename(payload_path), n_blocks))
    for w in warns: print("  ⚠ " + w)
    if errs:
        print("  ✗ 结构问题 %d 处：" % len(errs))
        for e in errs[:40]: print("     " + e)
        sys.exit(1)
    print("  ✓ 结构校验通过（条目数/行列数/必备键一致）")


if __name__ == "__main__":
    main()
