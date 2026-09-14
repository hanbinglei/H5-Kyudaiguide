#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可读性清理 · 第四批A：guide-newcomer（22 处）

三种改法：
  ① URL 塞在列表项里 → 单项 79～175 字全是网址。拆成「短标题列表 + 链接块」
  ② 医院三条（位置・科目・语言・电话・网址混在一条）→ 改表格 + 说明段 + 链接块
  ③ 长散文项/单元格 → 缩短或拆项
该篇三语覆盖仅 2%，改动只需中文。
"""
import json, os, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]

P = os.path.join(ROOT, "content", "guide-newcomer.json")
d = json.load(open(P, encoding="utf-8"))
bl = d["blocks"]
def find(i): return next(b for b in bl if b.get("id") == i)

# ── ① m5l6m7：URL 外移为链接块 ────────────────────────────────
m = find("m5l6m7")
URLS = [("个人使用药品携入日本", "厚生劳动省：海外携入医药品的限制说明", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html"),
        ("疫苗预防的传染病信息", "渡航前确认接种史", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html"),
        ("2026 CLUB & CIRCLE GUIDE", "校内社团・日文版 PDF", "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf"),
        ("2026 International Clubs Guide", "国际社团・英文版 PDF", "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf"),
        ("Global Gateways", "国际部留学生信息网，建议定期查看", "https://www.isc.kyushu-u.ac.jp/intlweb/")]
m["items"] = [{"text": t} for t, _, _ in URLS]
m["kind"] = "linkref"
idx = bl.index(m)
if not any(b.get("id") == bid("newcomer", "links1") for b in bl):
    bl.insert(idx + 1, {"id": bid("newcomer", "links1"), "type": "links", "kind": "web",
                        "links": [{"label": t, "desc": ds, "url": u} for t, ds, u in URLS]})
print("m5l6m7 → 5 条短标题 + 链接块")

# ── ② m3j4k5：医院三条 → 表格 + 说明 + 链接 ────────────────────
h = find("m3j4k5")
h["type"] = "fee_table"
h["headers"] = ["医院", "位置", "科目", "语言対応"]
h["rows"] = [["伊都诊所（校内）", "センター6号館 1F", "内科・精神科", "英语 B 级"],
             ["西福冈医院", "西区生之松原", "综合", "A 级・20 种语言"],
             ["福冈纪念医院", "早良区西新", "综合", "A 级"]]
i2 = bl.index(h)
extra = [
 {"id": bid("newcomer", "hosp_note"), "type": "notice",
  "text": "就诊时间与联系方式：伊都诊所工作日 10:00-12:30 / 14:00-16:30；西福冈医院 0570-09-1331（介绍信・预约制，无介绍信另付 7,700 円）；福冈纪念医院 092-821-4731。"},
 {"id": bid("newcomer", "hosp_links"), "type": "links", "kind": "web",
  "links": [{"label": "伊都诊所", "desc": "校内诊所官网", "url": "https://itoclinic.kyushu-u.ac.jp/"},
            {"label": "福冈纪念医院", "desc": "官网", "url": "http://kinen.jp"}]}]
for k, b in enumerate(extra):
    if not any(x.get("id") == b["id"] for x in bl):
        bl.insert(i2 + 1 + k, b)
print("m3j4k5 → 4 列表格 + 时间电话说明 + 链接块")

# ── ③ 6e7f8a：联系方式 → 短列表 + 链接 ───────────────────────
c = find("6e7f8a")
CONTACT = [("抵日前咨询", "留学课 imm.s@jimu.kyushu-u.ac.jp（履修・授课问题请联系所属学部・学府）",
            None),
           ("抵日后的日常咨询", "LINE 官方账号「Consultation Desk」（Q-Mate 答复：住居・区役所手续・银行等）",
            "https://lin.ee/EiQqccP"),
           ("Q-Mate Instagram", "@_qmate", None),
           ("Q-Mate 官网", "答疑与生活信息汇总", "https://studentassistantqu.wixsite.com/q-mate/about")]
c["items"] = [{"text": "%s：%s" % (t, ds)} for t, ds, _ in CONTACT]
lnk = [{"label": t, "desc": "LINE 官方账号" if "LINE" in ds else "官网", "url": u}
       for t, ds, u in CONTACT if u]
j2 = bl.index(c)
if not any(b.get("id") == bid("newcomer", "links2") for b in bl):
    bl.insert(j2 + 1, {"id": bid("newcomer", "links2"), "type": "links", "kind": "web", "links": lnk})
print("6e7f8a → 4 条短项 + 链接块")

# ── ④ 0e1f2a：银行开户会 5 条 → 拆成 6 条短句 ──────────────────
b0 = find("0e1f2a")
b0["items"] = [{"text": t} for t in [
 "条件①：在留卡住所登记已完成",
 "条件②：在留期间剩余 3 个月以上（不足者需自行前往银行支店办理）",
 "报名：入国支援系统 → 填写开户会表单 + 上传在留卡照片（表单仅报名期内显示）",
 "收到留学课确认邮件才算报名成功；未收到者无法参加，原则上不可取消",
 "印章：不可用シャチハタ，须用朱肉的传统印章；另需日本可用的电话号码",
 "美国国籍者需事先确认 SSN（Social Security Number）"]]
print("0e1f2a → 5 条拆成 6 条")

# ── ⑤ 4c5d6e：SSN/OSSMA 长条 → 拆两条 ─────────────────────────
b1 = find("4c5d6e")
b1["items"] = [{"text": t} for t in b1["items"]]
b1["items"][1] = {"text": "申请：经官方 App 在线申请，需日本手机号，建议抵日后办理"}
b1["items"].insert(2, {"text": "App 名称官方资料记载不一致（OSSMA / NEXUS），以最新官方手册为准"})
print("4c5d6e → 1 条拆成 2 条")

# ── ⑥ 7c8d9e 长条 ────────────────────────────────────────────
b2 = find("7c8d9e")
b2["items"][1] = {"text": "集合：福冈机场国际线 / 国内线航站楼"}
b2["items"].insert(2, {"text": "出发前 1 小时起，持「Kyushu University」举牌的工作人员在到达口受付处引导"})
print("7c8d9e → 1 条拆成 2 条")

# ── ⑦ 单元格 ────────────────────────────────────────────────
CELLFIX = [("a4b5c6", "新入留学生オリエンテーション + SIM贩卖会・图书馆参观・入管咨询会・欢迎会",
            "オリエンテーション + 并行活动 4 项"),
           ("a3b4c5", "「KUFSA」（留学生会）介绍", "KUFSA（留学生会）"),
           ("a3b4c5", "在留资格制度（出入国在留管理局）", "在留资格制度（入管局）")]
n = 0
for b in bl:
    for r_ in (b.get("rows") or []):
        for k, c2 in enumerate(r_):
            for cid, old, new in CELLFIX:
                if b.get("id") == cid and str(c2).strip() == old:
                    r_[k] = new; n += 1
print("单元格替换 %d 处" % n)

json.dump(d, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("\n新块数:", len(bl))
