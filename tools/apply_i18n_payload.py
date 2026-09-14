#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""apply_i18n_payload.py — 一篇的译文落地流水线（校验 → 合并 → 构建 → 复核）。

用法：python tools/apply_i18n_payload.py guide-newcomer D:/Hermes/output/h5-i18n/payload_newcomer.json

顺序不能颠倒：
  ① 结构校验（validate_i18n_payload）—— 结构不对就停，绝不合并
  ② 合并进 articles-body-i18n.js（merge_body_i18n.js，增量模式）
  ③ 重新构建 data-articles.js
  ④ 复核：单元级完整度（check_i18n_units）+ 悬空 ID（check_body_i18n）
任何一步失败即中止并报告，不继续。
"""
import os, sys, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def run(args, label):
    r = subprocess.run(args, cwd=ROOT, capture_output=True, text=True, encoding="utf-8")
    out = (r.stdout or "") + (r.stderr or "")
    ok = r.returncode == 0
    print("\n── %s ── %s" % (label, "OK" if ok else "失败"))
    print("\n".join(l for l in out.splitlines() if l.strip())[:1600])
    return ok


def main():
    art, payload = sys.argv[1], sys.argv[2]
    print("=== %s ← %s ===" % (art, os.path.basename(payload)))

    if not run(["python", "tools/validate_i18n_payload.py", art, payload], "① 结构校验"):
        print("\n结构校验未通过，已中止（未做任何写入）。")
        sys.exit(1)

    if not run(["node", "tools/merge_body_i18n.js", art, payload, "--merge"], "② 合并译文"):
        sys.exit(1)

    if not run(["node", "--check", "guide/js/articles-body-i18n.js"], "③ 语法检查"):
        sys.exit(1)

    if not run(["node", "tools/build_guide_articles.js"], "④ 构建"):
        sys.exit(1)

    run(["python", "tools/check_i18n_units.py", art], "⑤ 单元级完整度")
    run(["node", "tools/check_body_i18n.js"], "⑥ 悬空 ID / 一致性")

    print("\n完成。别忘了全站复核：python tools/check_i18n_units.py")


if __name__ == "__main__":
    main()
