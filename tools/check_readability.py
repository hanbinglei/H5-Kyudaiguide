#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""check_readability.py — 内容可读性预算的自动体检（见 skill: readability-budget）

用法: python tools/check_readability.py [content/guide-xxx.json ...]
      不带参数 = 扫全部 content/guide-*.json

设计原则：把「可读性」变成可数的数字，别靠感觉。阈值与 skill 里的预算表一致。
超过阈值 = 报出来，由人判断是「改」还是「这条例外」。
"""
import json, glob, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LIM = {
    "opening_chars": 130,     # 开篇「30 秒结论」段
    "table_rows": 15,
    "table_cols": 4,
    "cell_chars": 14,          # 描述性单元格；第 1 列（专有名词）放宽到 18
    "bold_per_block": 2,
    "list_item_chars": 40,
    "elems_per_heading": 5,
}


def flat(blocks, out=None):
    if out is None:
        out = []
    for b in blocks:
        out.append(b)
        if isinstance(b.get("blocks"), list):
            flat(b["blocks"], out)
    return out


def chars(s):
    return len(str(s or ""))


def audit(path):
    art = json.load(open(path, encoding="utf-8"))
    name = os.path.basename(path)
    v = []                                   # (级别, 说明)

    blocks = art.get("blocks") or []
    flatb = flat(blocks)

    # 1) 开篇 30 秒结论
    if not blocks or blocks[0].get("type") != "paragraph":
        v.append(("🔴", "开篇第一个块不是 paragraph —— 读者一进来没有「这篇帮我做什么」"))
    elif chars(blocks[0].get("text")) > LIM["opening_chars"]:
        v.append(("🟡", f"开篇段 {chars(blocks[0]['text'])} 字 > {LIM['opening_chars']}（30 秒读不完）"))

    # 2) 表格
    for b in flatb:
        if not b.get("headers"):
            continue
        r, c = len(b.get("rows") or []), len(b["headers"])
        if r > LIM["table_rows"]:
            v.append(("🔴", f"表 {b['id']}: {r} 行 > {LIM['table_rows']}（信息墙，应折叠或改为链接）"))
        if c > LIM["table_cols"]:
            v.append(("🟡", f"表 {b['id']}: {c} 列 > {LIM['table_cols']}（手机上会挤成一团）"))
        mx = mxcell = ""
        for row in b.get("rows") or []:
            for ci, cell in enumerate(row):
                if ci == 0:
                    continue              # 第 1 列是专有名词（奖学金名/路径名），另有较宽上限
                if chars(cell) > chars(mxcell):
                    mxcell = cell
        if chars(mxcell) > LIM["cell_chars"]:
            v.append(("🟡", f"表 {b['id']}: 最长单元格 {chars(mxcell)} 字 > {LIM['cell_chars']} → 「{str(mxcell)[:34]}…」"))

    # 3) 加粗密度
    for b in flatb:
        txt = b.get("text") or ""
        n = txt.count("**") // 2
        if n > LIM["bold_per_block"]:
            v.append(("🟡", f"块 {b['id']}: 一段里加粗 {n} 处 > {LIM['bold_per_block']}"))

    # 4) 列表单项
    for b in flatb:
        for it in (b.get("items") or []):
            t = it.get("text") if isinstance(it, dict) else it
            if chars(t) > LIM["list_item_chars"]:
                v.append(("🟡", f"列表 {b['id']}: 单项 {chars(t)} 字 > {LIM['list_item_chars']} →「{str(t)[:30]}…」"))
                break

    # 5) 每个 heading 下的元素数
    cnt = 0
    for b in blocks:
        if b.get("type") in ("heading", "subheading"):
            if cnt > LIM["elems_per_heading"]:
                v.append(("🟡", f"「{b.get('text')}」之前一个 heading 下挂了 {cnt} 个元素 > {LIM['elems_per_heading']}"))
            cnt = 0
        else:
            cnt += 1
    if cnt > LIM["elems_per_heading"]:
        v.append(("🟡", f"最后一个 heading 下挂了 {cnt} 个元素 > {LIM['elems_per_heading']}"))

    # 6) 规模概览
    print(f"\n=== {name} ===")
    print(f"  块数 {len(blocks)}（含内嵌 {len(flatb)}）· 文字总量 {sum(chars(b.get('text')) for b in flatb)} 字 · "
          f"表格 {sum(1 for b in flatb if b.get('headers'))} 张")
    if not v:
        print("  ✓ 全部在预算内")
    for lv, msg in v:
        print(f"  {lv} {msg}")
    return len([1 for lv, _ in v if lv == "🔴"]), len(v)


if __name__ == "__main__":
    args = sys.argv[1:] or sorted(glob.glob(os.path.join(ROOT, "content", "guide-*.json")))
    tot = 0
    for p in args:
        _, n = audit(p)
        tot += n
    print(f"\n合计 {tot} 处超预算")
