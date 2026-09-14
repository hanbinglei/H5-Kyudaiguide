#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""qc_i18n_payload.py — 译文质量机械检查（合并前跑）。

检查项：
  ① 数字一致性：源文里的数字/日期/时刻集合必须在译文中原样出现（多、少、改都报）
  ② 中文泄漏：译文中出现「简体专用汉字」——用数据驱动的方式判定：
     取中文源文里出现、而**同一篇日语译本里从未出现**的汉字作为简体专用集，
     再检查 en/ko 译文是否混入这些字（ja 自身用汉字属正常，只查非日语汉字）
  ③ 未翻译：译文与源文完全相同
  ④ 空值 / 过短：疑似漏填
  ⑤ URL 一致性：译文里的 URL 必须与源文一致

用法：python tools/qc_i18n_payload.py guide-newcomer D:/.../payload_newcomer.json
"""
import json, os, re, sys, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HAN = re.compile(r"[\u4e00-\u9fff]")
NUM = re.compile(r"\d[\d,.]*")
MON_RESTORE = [("january","1"),("february","2"),("march","3"),("april","4"),("may","5"),("june","6"),
               ("july","7"),("august","8"),("september","9"),("october","10"),("november","11"),("december","12"),
               ("jan","1"),("feb","2"),("mar","3"),("apr","4"),("jun","6"),("jul","7"),("aug","8"),
               ("sep","9"),("oct","10"),("nov","11"),("dec","12")]


def norm_for_nums(t):
    """把月份名还原成数字再比数字，避免「9月 → September」被当成数字不一致。"""
    x = str(t)
    # 月份名**区分大小写**：英文日期一律首字母大写，
    # 否则 "may shift"（情态动词）会被当成 5 月替换成 "5"
    for name, num in MON_RESTORE:
        x = re.sub(r"\b" + name.capitalize() + r"\b", num, x)
    x = x.lower().replace(",", "")   # 千位逗号不参与比较
    return x


def flat(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): flat(b["blocks"], o)
    return o


def texts_of(b, ph="source"):
    """取一个块的所有文本（源块或译文块）"""
    out = []
    if b.get("type") in ("heading", "subheading", "paragraph", "notice", "warning"):
        out.append(b.get("text") or "")
    for it in (b.get("items") or []):
        if isinstance(it, dict):
            for k in ("text", "title", "desc", "label"):
                if it.get(k): out.append(str(it[k]))
        else:
            out.append(str(it))
    for h in (b.get("headers") or []): out.append(str(h))
    for r_ in (b.get("rows") or []):
        for c in r_: out.append(str(c))
    for l in (b.get("links") or []):
        if isinstance(l, dict) and l.get("label"): out.append(str(l["label"]))
    return [x for x in out if x.strip()]


def main():
    art, payload_path = sys.argv[1], sys.argv[2]
    src_blocks = flat(json.load(open(os.path.join(ROOT, "content", art + ".json"), encoding="utf-8"))["blocks"])
    S = {b["id"]: b for b in src_blocks}
    pay = json.load(open(payload_path, encoding="utf-8"))
    sub = sys.argv[3] if len(sys.argv) > 3 else None   # 可选：只查某一语言

    # ② 数据驱动地求「简体专用汉字」：中文源文有、本篇日语译本没有
    zh_chars = set()
    for b in src_blocks:
        for t in texts_of(b): zh_chars |= set(HAN.findall(t))
    ja_chars = set()
    for b in (pay.get("ja") or {}).values():
        for t in texts_of(b): ja_chars |= set(HAN.findall(t))
    simplified = zh_chars - ja_chars if ja_chars else set()

    issues = {"数字不一致": [], "中文泄漏": [], "未翻译": [], "空值": [], "URL不一致": []}
    for L, blocks in pay.items():
        if sub and L != sub: continue
        for bid, tb in blocks.items():
            sb = S.get(bid)
            if not sb: continue
            if not isinstance(tb, dict): continue
            ts, tt = texts_of(sb), texts_of(tb)
            for s, t in zip(ts, tt):
                # ① 数字
                sn, tn = sorted(NUM.findall(norm_for_nums(s))), sorted(NUM.findall(norm_for_nums(t)))
                if sn != tn:
                    issues["数字不一致"].append("%s/%s：源 %s ≠ 译 %s  ←「%s」" % (L, bid, sn, tn, s[:34]))
                # ② 中文泄漏（en/ko 出现简体专用字；ja 只查明显非日语的字形差异不判）
                if L in ("en", "ko"):
                    bad = sorted(set(HAN.findall(t)) & simplified)
                    if bad:
                        issues["中文泄漏"].append("%s/%s：%s ←「%s」" % (L, bid, "".join(bad), t[:44]))
                # ③ 未翻译
                # 纯日本专有名词（无中文特有字形）保留原文属正确做法，不报
                KANA_OK = bool(re.search(r"[\u3040-\u30ff]", s)) and not re.search(
                    r"[个为这说会时对开关业东丝达铁编并项车让还过样种类别点电务单双发变难书图团员围伤价优众传]", s)
                if t.strip() == s.strip() and HAN.search(s) and L != "ja" and not KANA_OK:
                    issues["未翻译"].append("%s/%s：「%s」" % (L, bid, s[:44]))
                # ④ 过短
                if HAN.search(s) and len(s) > 12 and len(t.strip()) < max(2, len(s) * 0.15):
                    issues["空值"].append("%s/%s：源 %d 字 → 译 %d 字「%s」" % (L, bid, len(s), len(t), t[:30]))
            # ⑤ URL
            def urls(x): return sorted(set(re.findall(r"https?://[^\s\"'）)]+", json.dumps(x, ensure_ascii=False))))
            su, tu = urls(sb), urls(tb)
            if su != tu:
                issues["URL不一致"].append("%s/%s：源 %s ≠ 译 %s" % (L, bid, su, tu))

    total = sum(len(v) for v in issues.values())
    print("质检 %s（%s）：问题 %d 处" % (art, sub or "全部语言", total))
    for k, v in issues.items():
        if not v: continue
        print("\n【%s】%d 处" % (k, len(v)))
        for x in v[:14]: print("   " + x)
        if len(v) > 14: print("   … 其余 %d 处" % (len(v) - 14))
    if not total:
        print("  ✓ 无问题")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
