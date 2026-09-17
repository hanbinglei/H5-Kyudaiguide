#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""check_i18n_units.py — 按「单元」粒度统计译文完整度（比 check_body_i18n 细）。

为什么需要：check_body_i18n 以「块」为单位统计，一个列表块有 6 条只译了 1 条也算
「有译文」—— 结果是界面里中文与译文混排，但检查器显示 100%。
本脚本以单元（列表项 / 表格单元格 / 链接标签 / 段落）为单位，
并且**只统计真正需要翻译的单元**（日期、金额、URL、纯假名专名不计入分母）。

用法：python tools/check_i18n_units.py [文章名 ...]
"""
import json, os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import importlib.util
spec = importlib.util.spec_from_file_location("ex", os.path.join(ROOT, "tools", "extract_i18n_units.py"))
ex = importlib.util.module_from_spec(spec); spec.loader.exec_module(ex)

I18N = os.path.join(ROOT, "guide", "js", "articles-body-i18n.js")
LANGS = ("ja", "en", "ko", "es")


def load_entry(art, raw):
    m = re.search(r'"%s": \{' % art, raw)
    if not m:
        return {}
    st = m.start(); d = 0
    for k in range(raw.index("{", st), len(raw)):
        if raw[k] == "{": d += 1
        elif raw[k] == "}":
            d -= 1
            if d == 0:
                return json.loads(raw[st + len('"%s": ' % art):k + 1])
    return {}


def unit_covered(tr_block, kind, sub):
    """该单元在译文块里是否有对应内容"""
    if not isinstance(tr_block, dict):
        return False
    if kind == "text":
        t = tr_block.get("text")
        return bool(t and str(t).strip())
    if kind in ("list.text", "steps.title", "steps.desc"):
        items = tr_block.get("items") or []
        if not isinstance(sub, int) or sub >= len(items):
            return False
        it = items[sub]
        key = "text" if kind == "list.text" else kind.split(".")[1]
        v = it.get(key) if isinstance(it, dict) else (it if key == "text" else None)
        return bool(v and str(v).strip())
    if kind == "header":
        h = tr_block.get("headers") or []
        return isinstance(sub, int) and sub < len(h) and bool(str(h[sub]).strip())
    if kind == "cell":
        r = tr_block.get("rows") or []
        try:
            ri, ci = sub
        except Exception:
            return False
        return ri < len(r) and ci < len(r[ri]) and bool(str(r[ri][ci]).strip())
    if kind == "link":
        items = tr_block.get("items") or tr_block.get("links") or []
        if not isinstance(sub, int) or sub >= len(items):
            return False
        it = items[sub]
        return bool((it.get("text") or it.get("label")) if isinstance(it, dict) else False)
    return False


def main():
    raw = open(I18N, encoding="utf-8").read()
    arts = sys.argv[1:] or [os.path.basename(p)[:-5] for p in
                            sorted(glob.glob(os.path.join(ROOT, "content", "guide-*.json")))]
    grand = [0, 0]
    print("%-20s %6s %8s %8s   %s" % ("文章", "需译单元", "已覆盖", "缺译", "三语进度"))
    for art in arts:
        d = json.load(open(os.path.join(ROOT, "content", art + ".json"), encoding="utf-8"))
        units, shape = [], {}
        ex.scan(d["blocks"], units, shape)
        e = load_entry(art, raw)
        cells = []
        for L in LANGS:
            tr = e.get(L) or {}
            ok = sum(1 for u in units if unit_covered(tr.get(u["id"]), u["kind"], u["sub"]))
            cells.append((L, ok, len(units)))
        need = len(units)
        worst = min(c[1] for c in cells)
        pct = (worst / need * 100) if need else 100
        print("%-20s %6d %8d %8d   %s" % (art, need, worst, need - worst,
              "  ".join("%s %d%%" % (L, (ok / need * 100) if need else 100) for L, ok, _ in cells)))
        grand[0] += need; grand[1] += (need - worst)
    p = (1 - grand[1] / grand[0]) * 100 if grand[0] else 100
    print("\n合计：需译单元 %d · 各语言最差覆盖 %.1f%% · 缺译 %d 个单元" % (grand[0], p, grand[1]))


if __name__ == "__main__":
    main()
