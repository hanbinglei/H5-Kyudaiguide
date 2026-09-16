#!/usr/bin/env bash
# check-all.sh — 一次跑完全部校验
#
# 为什么需要它：CI 原先只跑了 3 个检查（构建一致性 / 译本 / 台账），而仓库里有 14 个。
# 其余 11 个只在我本地手动跑过 —— 靠人记得，就一定会有漏。
# 「防护靠自觉」等于没有防护。
#
# 用法：
#   bash tools/check-all.sh          # 全部跑一遍，有硬性失败则退出码非 0
#   bash tools/check-all.sh --quick  # 跳过耗时的基准类检查
#
# 两类检查：
#   硬性（hard）—— 失败即退出码非 0，CI 会红，必须修
#   参考（soft）—— 只打印数字，不作门槛
#     （例：bench_search 是历史基准，含已知的排序缺口，不该拦住提交；
#            但 probe_real_queries 测的是「首位命中」，已经 100%，可以当门槛）
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

QUICK=0
[ "${1:-}" = "--quick" ] && QUICK=1

HARD_FAIL=0
SOFT_NOTE=0
ROW=()

run_hard() {   # 名称 · 命令
  local name="$1"; shift
  local out rc
  out="$("$@" 2>&1)"; rc=$?
  local last
  last="$(printf '%s' "$out" | grep -v '^$' | tail -1)"
  if [ $rc -ne 0 ]; then
    HARD_FAIL=$((HARD_FAIL + 1))
    printf '  \033[31m✗\033[0m %-22s %s\n' "$name" "$last"
    printf '%s\n' "$out" | grep -E '✗|Error|错误' | head -5 | sed 's/^/      /'
  else
    printf '  \033[32m✓\033[0m %-22s %s\n' "$name" "$last"
  fi
}

run_soft() {   # 名称 · 命令（只报数字）
  local name="$1"; shift
  local out
  out="$("$@" 2>&1)"
  local last
  last="$(printf '%s' "$out" | grep -v '^$' | tail -1)"
  printf '  \033[33m•\033[0m %-22s %s\n' "$name" "$last"
  SOFT_NOTE=$((SOFT_NOTE + 1))
}

echo "=== 硬性校验（失败即 CI 红）==="

# 构建可复现：产物必须与 content/ 一致
if ! node tools/build_guide_articles.js > /dev/null 2>&1; then
  printf '  \033[31m✗\033[0m %-22s %s\n' "build" "构建失败"
  HARD_FAIL=$((HARD_FAIL + 1))
else
  if git diff --quiet -- guide/js/data-articles.js 2>/dev/null; then
    printf '  \033[32m✓\033[0m %-22s %s\n' "build 一致性" "产物与 content/ 一致"
  else
    printf '  \033[31m✗\033[0m %-22s %s\n' "build 一致性" "产物与 content/ 不一致 —— 改了内容忘了重跑构建"
    HARD_FAIL=$((HARD_FAIL + 1))
  fi
fi

for t in check_dom_ids check_body_i18n check_nav_i18n check_newcomer_zone check_claims \
         check_cunli_i18n verify_cunli_nameof verify_article_nav \
         test_pulse test_sources test_feedback probe_real_queries; do
  [ -f "tools/$t.js" ] && run_hard "$t" node "tools/$t.js"
done

# Python 类：CI 上是 python3，本地可能是 python
PY=python3; command -v python3 > /dev/null 2>&1 || PY=python
if command -v "$PY" > /dev/null 2>&1; then
  for t in check_readability audit_i18n_full; do
    [ -f "tools/$t.py" ] && run_hard "$t.py" "$PY" "tools/$t.py"
  done
fi

if [ "$QUICK" = 0 ]; then
  echo
  echo "=== 参考指标（不作门槛）==="
  # bench_search 是 2026-09 之前建的 61 条单语基准，含已知的排序缺口（88.5%），
  # 拿来当门槛会拦住每一次提交 —— 但它能立刻暴露「改动把老行为弄坏了」。
  [ -f tools/bench_search.js ] && run_soft "bench_search(单语61条)" node tools/bench_search.js new
  [ -f tools/audit_subjective.js ] && run_soft "audit_subjective(主观说法)" node tools/audit_subjective.js
fi

echo
if [ $HARD_FAIL -gt 0 ]; then
  echo "✗ 硬性校验 $HARD_FAIL 项失败"
  exit 1
fi
echo "✓ 硬性校验全部通过（参考指标 $SOFT_NOTE 项见上）"
