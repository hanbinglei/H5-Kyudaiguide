#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""normalize_payload.py — 合并前把译文 payload 里「不该由译者负责」的部分回填。

解决两类必然出现的结构性缺陷（靠叮嘱译者不可靠，必须由代码保证）：

① 链接 URL 为空
   清单里只给了标签，译者看不到 URL，于是写成 ""。URL 本来就不该翻译。
   → 一律用源文的 URL 覆盖。

② 表格里「跳过翻译」的单元格变成 null / ""
   提取器把纯日期、纯数字这类中立内容跳过了，译者不知道要回填，写 null。
   → 一律用源值回填。否则外语界面会出现整格空白（信息直接消失）。

③ 顺带统一：任何译文空值都回填源值（宁可显示中文，也不能显示空白）。

用法：python tools/normalize_payload.py guide-newcomer in.json out.json
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def flat(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): flat(b["blocks"], o)
    return o



# ── 日期本地化（确定性转换，不交给 LLM）──────────────────────────
MON_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
WD_EN = {"月": "Mon", "火": "Tue", "水": "Wed", "木": "Thu", "金": "Fri", "土": "Sat", "日": "Sun"}
WD_KO = {"月": "월", "火": "화", "水": "수", "木": "목", "金": "금", "土": "토", "日": "일"}
JUN_EN = {"上旬": "early", "中旬": "mid", "下旬": "late"}
JUN_KO = {"上旬": "상순", "中旬": "중순", "下旬": "하순"}

DATEISH = re.compile(r"\d+\s*[月日年]|\d/\d|上旬|中旬|下旬|[（(][月火水木金土日][）)]")


def localize_date(t, lang):
    """把中文/日文写法的日期转成目标语言写法。仅处理能确定性转换的形态。

    ja: 原样返回（源文本身就是日文日期写法，直接可用）
    en: 9月24日 → Sep 24 ; 9/24(木) → 9/24 (Thu) ; 10月上旬 → early Oct
    ko: 9月24日 → 9월 24일 ; 9/24(木) → 9/24(목) ; 10月上旬 → 10월 상순
    """
    if lang == "ja":
        return t
    out = t
    # 货币先转（与日期无关，不能放在日期守卫之后）
    if lang == "en":
        out = re.sub(r"([\d,]+)\s*円", r"\1 yen", out)
    else:
        out = re.sub(r"([\d,]+)\s*円", r"\1엔", out)
    if lang in ("en", "ko"):
        # 译文里混入的中文全角标点转成对应语言的半角形式
        # （保留「」『』——用于标示日文原名，是可读的做法）
        out = (out.replace("（", " (").replace("）", ") ")
                  .replace("：", ": ").replace("，", ", ").replace("。", ". ")
                  .replace("、", ", ").replace("；", "; "))
        out = re.sub(r"\s{2,}", " ", out).strip()
        out = re.sub(r"\(\s+", "(", out).replace(" )", ")")
    if not DATEISH.search(out):
        return out
    if lang == "en":
        out = re.sub(r"(\d{1,2})年", lambda m: m.group(1) + " ", out)
        out = re.sub(r"(\d{1,2})月(\d{1,2})日",
                     lambda m: MON_EN[int(m.group(1)) - 1] + " " + m.group(2), out)
        out = re.sub(r"(\d{1,2})月(?![\d])", lambda m: MON_EN[int(m.group(1)) - 1], out)
        out = re.sub(r"(上旬|中旬|下旬)", lambda m: JUN_EN[m.group(1)], out)
        out = re.sub(r"(?<![\d月])(\d{1,2})日", lambda m: m.group(1), out)   # 无月份前缀的「N日」
        out = re.sub(r"[（(]([月火水木金土日])[）)]", lambda m: "(" + WD_EN[m.group(1)] + ")", out)
        out = re.sub(r"([\d,]+)\s*円", r"\1 yen", out)
        out = re.sub(r"\s{2,}", " ", out).replace("  ", " ")
    else:  # ko
        out = re.sub(r"(\d{1,2})月(\d{1,2})日", lambda m: m.group(1) + "월 " + m.group(2) + "일", out)
        out = re.sub(r"(上旬|中旬|下旬)", lambda m: JUN_KO[m.group(1)], out)
        out = re.sub(r"(?<![\d월])(\d{1,2})일", lambda m: m.group(1) + "일", out)
        out = re.sub(r"(?<![\d월])(\d{1,2})日", lambda m: m.group(1) + "일", out)   # 无月份前缀
        out = re.sub(r"[（(]([月火水木金土日])[）)]", lambda m: "(" + WD_KO[m.group(1)] + ")", out)
        out = re.sub(r"([\d,]+)\s*円", r"\1엔", out)
    return out


def walk_localize(bs, lang):
    for b in bs:
        t = b.get("type")
        if t in ("heading", "subheading", "paragraph", "notice", "warning") and b.get("text"):
            b["text"] = localize_date(b["text"], lang)
        for it in (b.get("items") or []):
            if isinstance(it, dict):
                for k in ("text", "title", "desc"):
                    if it.get(k): it[k] = localize_date(it[k], lang)
        for i, h in enumerate(b.get("headers") or []):
            b["headers"][i] = localize_date(h, lang)
        for r_ in (b.get("rows") or []):
            for i, c in enumerate(r_):
                r_[i] = localize_date(str(c), lang)
        if b.get("blocks"): walk_localize(b["blocks"])


PLACEHOLDER = re.compile(r"^[\s—–—－\-ー~〜]+$")


def force_source(S, sb, tb):
    """把「提取器跳过」的单元强制改回源文值。

    判断依据与 extract_i18n_units.needs_translation 一致 —— 凡是不需要翻译的位置
    （纯日期/数字/URL/纯假名专名），译文里出现的任何不同内容都视为译者的猜测，一律覆盖。
    返回覆盖处数。
    """
    n = 0
    try:
        import importlib.util
        spec = importlib.util.spec_from_file_location(
            "ex", os.path.join(ROOT, "tools", "extract_i18n_units.py"))
        ex = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(ex)
        need = ex.needs_translation
    except Exception:
        return 0

    def force(s_val, t_val):
        """源不需要翻译 → 强制用源值"""
        nonlocal n
        if t_val is None:
            return s_val
        if not need(s_val) and str(s_val).strip() != str(t_val).strip():
            n += 1
            return s_val
        return t_val

    st = sb.get("type")
    if st in ("heading", "subheading", "paragraph", "notice", "warning"):
        tb["text"] = force(sb.get("text") or "", tb.get("text"))
    for i, si in enumerate(sb.get("items") or []):
        if not isinstance(si, dict): continue
        ti = (tb.get("items") or [None])[i] if i < len(tb.get("items") or []) else None
        if not isinstance(ti, dict): continue
        for k in ("text", "title", "desc"):
            if k in si:
                ti[k] = force(si.get(k) or "", ti.get(k))
    for i, sh in enumerate(sb.get("headers") or []):
        th = (tb.get("headers") or [])
        if i < len(th) and not need(sh):
            if str(sh).strip() != str(th[i]).strip():
                th[i] = sh; n += 1
    for ri, srow in enumerate(sb.get("rows") or []):
        trows = tb.get("rows") or []
        if ri >= len(trows): continue
        for ci, sc in enumerate(srow):
            if ci >= len(trows[ri]): continue
            trows[ri][ci] = force(sc, trows[ri][ci])
    # 链接标签
    sitems = sb.get("links") or sb.get("items") or []
    titems = tb.get("items") or tb.get("links") or []
    for i, si in enumerate(sitems):
        if i >= len(titems) or not isinstance(si, dict): continue
        ti = titems[i]
        if not isinstance(ti, dict): continue
        lbl = si.get("label") or si.get("text") or ""
        if lbl and not need(lbl):
            cur = ti.get("text") if ti.get("text") is not None else ti.get("label")
            if str(lbl).strip() != str(cur or "").strip():
                ti["text"] = lbl; n += 1
    return n


def is_blank(x):
    """空值判定。除了真正的空串，也把「占位破折号」视为空 ——
    提取器跳过的单元格（纯数字/日期）译者不知道该填什么，会写 `—`；
    若不视为空，归一化就不会回填，数据就静默丢了（实测日文表的距离就是这么丢的）。
    注意：只有当**源值本身不是破折号**时才回填，所以「不适用 = —」的正当取值不受影响。
    """
    if x is None:
        return True
    if not isinstance(x, str):
        return False
    t = x.strip()
    return t == "" or bool(PLACEHOLDER.match(t))


def main():
    art, src_path, out_path = sys.argv[1], sys.argv[2], sys.argv[3]
    S = {b["id"]: b for b in flat(json.load(open(os.path.join(ROOT, "content", art + ".json"), encoding="utf-8"))["blocks"])}
    pay = json.load(open(src_path, encoding="utf-8"))
    stat = {"url": 0, "cell": 0, "item": 0, "header": 0, "text": 0, "linklabel": 0}

    for L, blocks in pay.items():
        for bid, tb in list(blocks.items()):
            sb = S.get(bid)
            if not sb or not isinstance(tb, dict):
                continue
            st = sb.get("type")
            # ① 链接：URL 一律取源文
            if st == "links" or sb.get("items") and all(isinstance(i, dict) and "url" in i for i in (sb.get("items") or [])):
                sitems = sb.get("links") or sb.get("items") or []
                key = "items" if "items" in tb else ("links" if "links" in tb else "items")
                titems = tb.get(key) or []
                for i, si in enumerate(sitems):
                    if i >= len(titems): break
                    ti = titems[i]
                    if not isinstance(ti, dict): continue
                    su = si.get("url")
                    if su and ti.get("url") != su:
                        ti["url"] = su; stat["url"] += 1
                    if is_blank(ti.get("text")) and si.get("label"):
                        ti["text"] = si["label"]; stat["linklabel"] += 1
            # ② 表格：空单元格 / 空表头回填源值
            if sb.get("headers"):
                for i, h in enumerate(sb["headers"]):
                    th = (tb.get("headers") or [])
                    while len(th) < len(sb["headers"]):
                        th.append("")
                    if is_blank(th[i]) and not is_blank(h):
                        th[i] = h; stat["header"] += 1
                tb["headers"] = th
                for ri, srow in enumerate(sb.get("rows") or []):
                    trows = tb.get("rows") or []
                    if ri >= len(trows): break
                    for ci, sc in enumerate(srow):
                        trow = trows[ri]
                        while len(trow) <= ci:
                            trow.append("")
                        if is_blank(trow[ci]) and not is_blank(sc):
                            trow[ci] = sc; stat["cell"] += 1
            # ③ 列表 / 步骤：空项回填
            if st in ("list", "steps") or (sb.get("items") and sb.get("type") in ("list", "steps", "steps")):
                sitems = sb.get("items") or []
                titems = tb.get("items") or []
                for i, si in enumerate(sitems):
                    if i >= len(titems) or not isinstance(si, dict): continue
                    ti = titems[i]
                    if not isinstance(ti, dict): continue
                    for k in ("text", "title", "desc"):
                        if k in si and is_blank(ti.get(k)):
                            ti[k] = si[k]; stat["item"] += 1
            # ④ 段落类：空文本回填
            if sb.get("type") in ("heading", "subheading", "paragraph", "notice", "warning"):
                if is_blank(tb.get("text")) and not is_blank(sb.get("text")):
                    tb["text"] = sb["text"]; stat["text"] += 1

    for L, blocks in pay.items():
        for tb in blocks.values():
            if isinstance(tb, dict): walk_localize([tb], L)

    # ⑤ 强制回填「提取器跳过」的单元 —— 这些位置译者没被要求翻译，
    #    若它自行猜填就会变成错误数据。实测：韩语把中介名 エイブル / アパマンショップ
    #    写反、并把 ホームメイト 写成凭空的「ミニミニ」，描述与名字完全对不上。
    #    这类位置一律以源文为准（空值回填只能挡住空白，挡不住「看起来合理的猜测」）。
    forced = 0
    for L, blocks in pay.items():
        for bid, tb in blocks.items():
            sb = S.get(bid)
            if not sb or not isinstance(tb, dict):
                continue
            forced += force_source(S, sb, tb)
    if forced:
        print("   跳过单元强制回填源文：%d 处" % forced)

    json.dump(pay, open(out_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("归一化 → %s：URL 回填 %d · 单元格 %d · 表头 %d · 列表项 %d · 段落 %d · 链接标签 %d"
          % (os.path.basename(out_path), stat["url"], stat["cell"], stat["header"],
             stat["item"], stat["text"], stat["linklabel"]))


if __name__ == "__main__":
    main()
