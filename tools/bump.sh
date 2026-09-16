#!/usr/bin/env bash
# bump.sh — 升级缓存版本号（guide/index.html 的 ?v= 与 guide/sw.js 的 VERSION）
#
# 为什么要脚本：这两个值分散在两个文件，必须同步。我手工 sed 过一次，模式写错、
# **静默没改到**，而当时只看到「命令成功」—— 结果新代码配旧版本号，浏览器继续用
# 缓存，线上行为没变。
#
# 上一次写这个脚本时又踩了一个：旧版本号读成**空串**，于是 `s/?v=/…/g` 把版本号
# 拼到了所有位置（?v=20260918a20260917e）。脚本末尾的回读验证**抓住了**这一点并
# 拒绝提交 —— 但那已经是 sed 改完之后，文件坏了。
# 所以现在：① 改之前先验旧版本号非空 ② 先备份，失败自动回滚 ③ 再回读验证。
#
# 用法： bash tools/bump.sh 20260918a
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

V="${1:-}"
if [ -z "$V" ]; then
  echo "用法: bash tools/bump.sh <新版本号，如 20260918b>"
  echo "当前 index.html 版本: $(grep -o '?v=[0-9a-zA-Z]*' guide/index.html | sort -u | head -1)"
  echo "当前 sw.js  VERSION : $(grep -o "VERSION *= *'[^']*'" guide/sw.js | head -1)"
  exit 1
fi

OLD_HTML="$(grep -o '?v=[0-9a-zA-Z]*' guide/index.html | sort -u | head -1 | cut -d= -f2)"
OLD_SW="$(grep -o "VERSION *= *'[^']*'" guide/sw.js | head -1 | sed "s/.*'\(.*\)'/\1/")"

# ① 改动之前就必须校验。空模式会让 sed 匹配一切（上一次就是这么坏的文件）。
if [ -z "$OLD_HTML" ]; then
  echo "✗ 没有从 guide/index.html 读出旧版本号 —— 拒绝继续（空模式会改坏文件）"
  exit 1
fi
if [ -z "$OLD_SW" ]; then
  echo "✗ 没有从 guide/sw.js 读出 VERSION —— 拒绝继续"
  exit 1
fi
if [ "$OLD_HTML" = "$V" ] && [ "$OLD_SW" = "$V" ]; then
  echo "✓ 已经是 $V，无需改动"
  exit 0
fi

echo "旧版本: index.html=$OLD_HTML  sw.js=$OLD_SW  →  $V"

# ② 备份，失败回滚
cp guide/index.html /tmp/.bump-index.bak
cp guide/sw.js /tmp/.bump-sw.bak
rollback() { cp /tmp/.bump-index.bak guide/index.html; cp /tmp/.bump-sw.bak guide/sw.js; echo "已回滚"; }

# 只替换完整版本号（不是 ?v= 本身），且用精确的旧值
sed -i "s/?v=$OLD_HTML\b/?v=$V/g" guide/index.html
sed -i "s/$OLD_SW/$V/g" guide/sw.js

# ③ 回读验证
FAIL=0
N_NEW=$(grep -o "?v=$V" guide/index.html | wc -l | tr -d ' ')
N_OLDLEFT=$(grep -o "?v=$OLD_HTML" guide/index.html | wc -l | tr -d ' ')
V_SW="$(grep -o "VERSION *= *'[^']*'" guide/sw.js | head -1 | sed "s/.*'\(.*\)'/\1/")"
# 坏模式的症状：版本号被拼接（出现「新号紧跟别的号」）
BAD=$(grep -o "?v=$V[0-9a-zA-Z]" guide/index.html | wc -l | tr -d ' ')

echo "index.html: 新号 $N_NEW 处 · 旧号残留 $N_OLDLEFT 处 · 拼接残留 $BAD 处"
echo "sw.js VERSION = $V_SW"

[ "$N_NEW" -gt 0 ] || { echo "✗ index.html 没有改到"; FAIL=1; }
[ "$N_OLDLEFT" -eq 0 ] || { echo "✗ index.html 仍有旧版本号"; FAIL=1; }
[ "$BAD" -eq 0 ] || { echo "✗ 版本号被拼接（空模式改坏的典型症状）"; FAIL=1; }
[ "$V_SW" = "$V" ] || { echo "✗ sw.js VERSION 没改到（仍是 $V_SW）"; FAIL=1; }

if [ $FAIL -ne 0 ]; then
  rollback
  echo "✗ 版本号升级失败（已回滚）—— 不要提交"
  exit 1
fi
rm -f /tmp/.bump-index.bak /tmp/.bump-sw.bak
echo "✓ 两个文件都已升到 $V，回读验证通过"
