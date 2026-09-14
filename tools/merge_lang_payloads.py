#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""merge_lang_payloads.py — 把按语言分批交付的 payload 合成一个整篇 payload。

用法：python tools/merge_lang_payloads.py guide-newcomer out.json p1.json [p2.json ...]

每个输入文件允许是 {ja:{…}} / {en:{…}} / {ko:{…}} 的任意子集；
同名语言按块 id 合并（后给的覆盖先给的）。缺的语言保持缺失，由后续批次补齐。
"""
import json, sys, os

out = {}
for f in sys.argv[3:]:
    d = json.load(open(f, encoding="utf-8"))
    for L, blocks in d.items():
        if not isinstance(blocks, dict):
            continue
        out.setdefault(L, {}).update(blocks)

json.dump(out, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("合成 %s：%s" % (sys.argv[2],
      "  ".join("%s %d 块" % (L, len(v)) for L, v in sorted(out.items()))))
