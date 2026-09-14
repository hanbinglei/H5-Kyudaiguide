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
    "narrow_cell": 10,   # 窄表（单元格全为短值）豁免列数限制
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
def eff_len(text):
    """可见长度：排除 URL / 邮箱 / 电话号码。

    这类串是不可缩短的单一 token —— 读者需要完整字符，
    它们占字数并不代表信息密度高（例：「咨询：xxx@kyushu-u.ac.jp / 092-802-2228」）。
    """
    t = str(text or "")
    t = re.sub(r"https?://\S+", "", t)
    t = re.sub(r"[\w.+-]+@[\w.-]+\.\w+", "", t)
    t = re.sub(r"\+?\d[\d\-()]{7,}\d", "", t)
    t = re.sub(r"#\d{3,4}", "", t)
    return len(re.sub(r"\s+", "", t))


def is_datetime(cell):
    """纯日期/时刻单元格不受字数限制：其长度由格式决定，缩短必然丢信息。
    例：9/24(木) 15:00-15:30、2026-12-02、9:00~17:15。"""
    t = re.sub(r"[0-9０-９/:：\-〜~～\.\s月火水木金土日曜()（）]", "", str(cell or ""))
    return t == "" and bool(str(cell or "").strip())




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
        # 窄表豁免：拥挤取决于「单元格宽度 × 列数」。全是 ≤10 字短值的时刻表，
        # 5 列在手机上仍排得开；为凑列数去拆时刻表只会丢数据或错行。
        narrow = all(chars(cell) <= LIM["narrow_cell"]
                     for row in (b.get("rows") or [])
                     for ci, cell in enumerate(row) if ci > 0)
        if c > LIM["table_cols"] and not narrow:
            v.append(("🟡", f"表 {b['id']}: {c} 列 > {LIM['table_cols']}（手机上会挤成一团）"))
        over = []
        for ri, row in enumerate(b.get("rows") or []):
            for ci, cell in enumerate(row):
                if ci == 0 or is_datetime(cell):
                    continue              # 第 1 列是专有名词（另有较宽上限）；纯日期/时刻单元格不受字数限制
                if eff_len(cell) > LIM["cell_chars"]:
                    over.append((eff_len(cell), ri, ci, str(cell)))
        if over:
            over.sort(reverse=True)
            worst = over[0]
            v.append(("🟡", f"表 {b['id']}: {len(over)} 个单元格 > {LIM['cell_chars']} 字"
                            f"（最长 {worst[0]} 字，第 {worst[1]+1} 行第 {worst[2]+1} 列）"
                            f" → 「{worst[3][:30]}…」"))

    # 3) 加粗密度
    for b in flatb:
        txt = b.get("text") or ""
        n = txt.count("**") // 2
        if n > LIM["bold_per_block"]:
            v.append(("🟡", f"块 {b['id']}: 一段里加粗 {n} 处 > {LIM['bold_per_block']}"))

    # 4) 列表单项
    for b in flatb:
        over = []
        for it in (b.get("items") or []):
            t = str(it.get("text") if isinstance(it, dict) else it)
            e = eff_len(t)
            if e > LIM["list_item_chars"]:
                over.append((e, t))
        if over:
            over.sort(reverse=True)
            v.append(("🟡", f"列表 {b['id']}: {len(over)} 项 > {LIM['list_item_chars']} 字"
                            f"（最长 {over[0][0]} 字）→「{over[0][1][:28]}…」"))

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
