#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""S4：生成 guide-career（就职·实习，category 16）＋ 三语译本 payload。

数据来源（均已存档）：
  · career_jobhunting.md  「日本での就職活動について」（公开页，正文全长）
  · career_situation.md   「卒業（修了）後の進路状況」（历年 PDF 入口）
  · ja_education_employment_foreign.md  9 个子页链接中枢
  · 01_要点与日程.md / 11_Instagram帖子全量.md  業界・企業研究フェア 2026/12/2

⚠️ 9 个子页里有 7 个在 /ja/internal/ 下、**需要九大 SSO 登录**（入学前看不到）。
   文章里必须写明这一点 —— 否则读者点进去只会看到登录页。
"""
import json, os, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, "content", "guide-career.json")
IDX = os.path.join(ROOT, "content", "index.json")
FETCHED = "2026-09-14"


def bid(*parts):
    return hashlib.md5(("|".join(str(p) for p in parts)).encode("utf-8")).hexdigest()[:6]


B = []
B.append({"id": bid("lead"), "type": "paragraph",
          "text": "日本的就活是**新卒一括採用**——企业每年只招一次，所有人按同一张时间表走。"
                  "这篇讲清三件事：什么时候开始、三道关各考什么、窗口在哪。"})

B.append({"id": bid("ev"), "type": "heading", "level": 2, "text": "近期活动"})
B.append({"id": bid("ev_t"), "type": "fee_table",
          "headers": ["活动", "时间", "对象"],
          "rows": [["業界・企業研究フェア（2026）", "12/2 16:40〜", "2027/9・2028/3"],
                   ["形式", "Zoom 线上", "主要日语（有字幕）"]]})
B.append({"id": bid("ev_p"), "type": "paragraph",
          "text": "11 家企业参加（正興電機・福岡銀行・ニトリ・AGC・NTTデータ・カプコン・楽天カード等）。"
                  "主办：**学務部キャリア支援課 092-802-5902**。以官方公告为准。"})

B.append({"id": bid("h_feat"), "type": "heading", "level": 2, "text": "日本就活和别处不一样"})
B.append({"id": bid("l_feat"), "type": "list", "items": [
    {"text": "**新卒一括採用**：按毕业年度一次性招，在校期间就定人。"},
    {"text": "**4 月入社**：3 月毕业、4 月 1 日入职，几乎全行业同步。"},
    {"text": "**看潜力不看即战力**：不要求入职前就会，看能否被培养。"},
    {"text": "**メンバーシップ型**：职务・地点・时间都不限定，按「综合职」招。"}]})
B.append({"id": bid("p_feat"), "type": "paragraph",
          "text": "日本企业把外国留学生放在**和日本学生同一套标准**下选考 —— 日企、外企都一样。"
                  "不存在「外国人专用通道」。"})

B.append({"id": bid("h_sched"), "type": "heading", "level": 2, "text": "时间表：一年只有一次"})
B.append({"id": bid("t_sched"), "type": "fee_table",
          "headers": ["阶段", "时间", "要做什么"],
          "rows": [
              ["准备", "本番前 5 个月", "自我分析・业界研究"],
              ["夏季实习", "7〜9 月", "提前和企业接触"],
              ["应募・说明会", "3〜5 月", "投简历・参加说明会"],
              ["ES・笔试", "3〜6 月", "报名表作文・SPI"],
              ["面试", "6 月起", "一家公司 2〜3 轮"],
              ["内定", "6 月起（正式 10 月）", "确定后向大学报告"]]})
B.append({"id": bid("p_sched"), "type": "paragraph",
          "text": "起点是**最终学年的前一年 3 月 1 日**（学部 3 年・修士 1 年・博士 2 年），"
                  "6 月中旬收尾 —— 约 4 个月，**错过这一年就很难补救**。"})

B.append({"id": bid("h_test"), "type": "heading", "level": 2, "text": "三道关，难点各不同"})
B.append({"id": bid("t_test"), "type": "fee_table",
          "headers": ["关卡", "考什么", "留学生的坎"],
          "rows": [
              ["书面选考", "指定字数的 ES 作文", "多数人最吃力的一关"],
              ["适性检查・笔试", "SPI 等，日语出题", "题不难，要又快又准"],
              ["面试", "小组讨论・集体・单独", "一家 2〜3 轮，看表达"]]})
B.append({"id": bid("p_test"), "type": "paragraph",
          "text": "ES 要写「志望理由」「学生时代最努力的事」，**留学生普遍卡在日语写作**。"
                  "学校有**進路・就職アドバイザー**可以帮你改稿。"})

B.append({"id": bid("h_after"), "type": "heading", "level": 2, "text": "内定之后别忘两件事"})
B.append({"id": bid("l_after"), "type": "list", "items": [
    {"text": "**在留资格变更**：从「留学」换成可就业的在留资格。"},
    {"text": "**向大学报告**：进路定了必须报所属部局，也可用就職支援系统提交。"}]})

B.append({"id": bid("h_win"), "type": "heading", "level": 2, "text": "官方入口与窗口"})
B.append({"id": bid("l_win"), "type": "list", "items": [
    {"text": "学務部学生支援課 キャリア支援室（留学生就職支援担当）"},
    {"text": "センター1号館 2 階・2 番窓口（伊都校区）"},
    {"text": "TEL 092-802-5902"},
    {"text": "Email q-ssc@jimu.kyushu-u.ac.jp"}]})
B.append({"id": bid("lk_res"), "type": "links", "items": [
    {"text": "日本での就職活動について（公开・先读这篇）",
     "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"},
    {"text": "卒業後の進路状況（历年实际数据）",
     "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"},
    {"text": "外国人留学生のための就職支援（总入口）",
     "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"},
    {"text": "学内就職イベント（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"},
    {"text": "学外就職イベント（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"},
    {"text": "求人情報（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"},
    {"text": "インターンシップ（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"},
    {"text": "就活体験記（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"},
    {"text": "進路・就職相談（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"},
    {"text": "留学生のための就活お役立ち情報（需 SSO 登录）",
     "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"},
    {"text": "Study in Japan（日本での就職・在留資格）",
     "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"}]})
B.append({"id": bid("n_sso"), "type": "notice",
          "text": "上面 9 个页面里**大部分需要九大 SSO 登录**（`/ja/internal/` 下的都是校内页）。"
                  "入学前能看的只有「日本での就職活動について」和「進路状況」。"
                  "找不到页面不是故障，是权限。"})

art = {"_id": "guide-career", "category": "16",
       "title": "就职·实习（外国人留学生）",
       "summary": "日本就活的规则（新卒一括採用・4月入社・看潜力）、一年只有一次的时间表、"
                  "三道关（ES・SPI・面试）各卡在哪、内定后的在留资格变更与报告义务、"
                  "キャリア支援課窗口与 12/2 企業研究フェア。",
       "tags": ["就职", "实习", "ES", "SPI", "キャリア支援課"],
       "author": "管理员", "updatedAt": FETCHED, "blocks": B}
json.dump(art, open(ART, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

idx = json.load(open(IDX, encoding="utf-8"))
if not any(a["_id"] == "guide-career" for a in idx["articles"]):
    idx["articles"].append({"_id": "guide-career", "category": "16",
                            "blocks": len(B), "file": "content/guide-career.json"})
    json.dump(idx, open(IDX, "w", encoding="utf-8"), ensure_ascii=False, indent=2)

# CATEGORIES 补 16 格
p = os.path.join(ROOT, "guide", "js", "data-categories.js")
t = open(p, encoding="utf-8", newline="").read()
if "id: '16'" not in t:
    t = t.replace("  { id: '15', name: '奖学金', icon: '💰' },\r\n];",
                  "  { id: '15', name: '奖学金', icon: '💰' },\r\n"
                  "  { id: '16', name: '就职·实习', icon: '🧑‍💼' },\r\n];")
    open(p, "w", encoding="utf-8", newline="").write(t)
    print("CATEGORIES 已补 16 格")

json.dump([b["id"] for b in B], open(os.path.join(ROOT, "tools", ".career_ids.json"), "w"),
          ensure_ascii=False)
print(f"wrote {ART} · {len(B)} 块")
print("块 id:", " ".join(b["id"] for b in B))
