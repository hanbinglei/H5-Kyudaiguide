#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""S4 三语译本 payload（guide-career 19 块）。
配套：node tools/merge_body_i18n.js guide-career tools/.career_i18n.json
      node tools/patch_nav_entry.js guide-career <lang> title|summary <后面由脚本处理>

块顺序与 tools/.career_ids.json 一致（生成器按同一顺序写出）。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ids = json.load(open(os.path.join(ROOT, "tools", ".career_ids.json"), encoding="utf-8"))
assert len(ids) == 19, len(ids)
LEAD, EV, EVT, EVP, HFEAT, LFEAT, PFEAT, HSCHED, TSCHED, PSCHED, \
    HTEST, TTEST, PTEST, HAFTER, LAFTER, HWIN, LWIN, LRES, NSSO = ids

HEADS = {
 "ja": ["直近のイベント", "日本の就活は他と違う", "スケジュール：年 1 回だけ",
        "3 つの関門、それぞれの難所", "内定後の 2 つの手続き", "公式入口と窓口"],
 "en": ["Upcoming event", "How Japanese job hunting differs", "The calendar: once a year only",
        "Three gates, three different hard parts", "Two things after your offer", "Official pages and counter"],
 "ko": ["최근 이벤트", "일본 취업은 다릅니다", "일정: 1년에 한 번뿐",
        "세 개의 관문, 각각 다른 난관", "내정 후 두 가지 수속", "공식 입구와 창구"],
}

TR = {
 "ja": {
  LEAD: {"text": "日本の就活は**新卒一括採用** —— 企業は年に一度だけ募集し、全員が同じ日程で動きます。"
                 "このページでは 3 点を整理します：いつ始まるか、3 つの関門が何を問うか、窓口はどこか。"},
  EV: {"text": HEADS["ja"][0]},
  EVT: {"headers": ["イベント", "時間", "対象"], "rows": [
      ["業界・企業研究フェア（2026）", "12/2 16:40〜", "2027/9・2028/3"],
      ["形式", "Zoom オンライン", "主に日本語（字幕あり）"]]},
  EVP: {"text": "11 社が参加（正興電機・福岡銀行・ニトリ・AGC・NTTデータ・カプコン・楽天カード等）。"
                "主催：**学務部キャリア支援課 092-802-5902**。詳細は公式発表に従ってください。"},
  HFEAT: {"text": HEADS["ja"][1]},
  LFEAT: {"items": [
      {"text": "**新卒一括採用**：卒業年度ごとに一括募集し、在学中に決まる。"},
      {"text": "**4 月入社**：3 月卒業・4 月 1 日入社。ほぼ全業界が同時。"},
      {"text": "**ポテンシャル採用**：入社前の即戦力は求めず、伸びしろを見る。"},
      {"text": "**メンバーシップ型**：職務・勤務地・時間を限定せず「総合職」で採用。"}]},
  PFEAT: {"text": "日本企業は外国人留学生を**日本人学生と同じ基準**で選考します。日系・外資系を問いません。"
                  "「外国人専用ルート」はありません。"},
  HSCHED: {"text": HEADS["ja"][2]},
  TSCHED: {"headers": ["段階", "時期", "やること"], "rows": [
      ["準備", "本番の 5 か月前", "自己分析・業界研究"],
      ["夏季インターン", "7〜9 月", "早めに企業と接点"],
      ["エントリー・説明会", "3〜5 月", "応募・説明会参加"],
      ["ES・筆記", "3〜6 月", "作文・SPI"],
      ["面接", "6 月〜", "1 社 2〜3 回"],
      ["内定", "6 月〜（正式 10 月）", "決定後は大学へ報告"]]},
  PSCHED: {"text": "起点は**最終学年の前年 3 月 1 日**（学部 3 年・修士 1 年・博士 2 年）、6 月中旬に終了。"
                   "約 4 か月で、**この年を逃すと挽回が難しい**。"},
  HTEST: {"text": HEADS["ja"][3]},
  TTEST: {"headers": ["関門", "問われること", "留学生の壁"], "rows": [
      ["書類選考", "文字数指定の ES 作文", "最も苦労する人が多い"],
      ["適性検査・筆記", "SPI 等（日本語出題）", "難易度は高くないが速度が必要"],
      ["面接", "GD・グループ・個人", "1 社 2〜3 回、表現力を見る"]]},
  PTEST: {"text": "ES では「志望理由」「学生時代に力を入れたこと」を書きます。**留学生は日本語の作文で詰まりやすい**。"
                  "大学の**進路・就職アドバイザー**に添削を依頼できます。"},
  HAFTER: {"text": HEADS["ja"][4]},
  LAFTER: {"items": [
      {"text": "**在留資格の変更**：「留学」から就労可能な資格へ変更する。"},
      {"text": "**大学への報告**：進路確定後は所属部局へ。システムからも可。"}]},
  HWIN: {"text": HEADS["ja"][5]},
  LWIN: {"items": [
      {"text": "学務部学生支援課 キャリア支援室（留学生就職支援担当）"},
      {"text": "センター 1 号館 2 階・2 番窓口（伊都キャンパス）"},
      {"text": "TEL 092-802-5902"},
      {"text": "Email q-ssc@jimu.kyushu-u.ac.jp"}]},
  LRES: {"items": [
      {"text": "日本での就職活動について（公開・まずはこちら）",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"},
      {"text": "卒業後の進路状況（過去の実データ）",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"},
      {"text": "外国人留学生のための就職支援（総合入口）",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"},
      {"text": "学内就職イベント（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"},
      {"text": "学外就職イベント（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"},
      {"text": "求人情報（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"},
      {"text": "インターンシップ（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"},
      {"text": "就活体験記（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"},
      {"text": "進路・就職相談（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"},
      {"text": "留学生のための就活お役立ち情報（SSO ログインが必要）",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"},
      {"text": "Study in Japan（日本での就職・在留資格）",
       "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"}]},
  NSSO: {"text": "上の 9 ページのうち**多くは九大 SSO ログインが必要**です（`/ja/internal/` 配下は学内ページ）。"
                 "入学前に見られるのは「日本での就職活動について」と「進路状況」だけです。"
                 "ページが見つからないのは不具合ではなく権限の問題です。"},
 },
 "en": {
  LEAD: {"text": "Japanese job hunting runs on **mass hiring of new graduates**: companies recruit once a year and everyone "
                 "follows the same calendar. This page covers three things: when it starts, what the three gates test, and where to get help."},
  EV: {"text": HEADS["en"][0]},
  EVT: {"headers": ["Event", "Time", "Who"], "rows": [
      ["Industry & Company Fair (2026)", "Dec 2, 16:40-", "Sept 2027 / Mar 2028 grads"],
      ["Format", "Online (Zoom)", "Mainly Japanese (subtitles)"]]},
  EVP: {"text": "11 companies take part (Shoko Electric, Fukuoka Bank, Nitori, AGC, NTT Data, Capcom, Rakuten Card and others). "
                "Organised by the **Career Support Section, 092-802-5902**. Follow the official announcement."},
  HFEAT: {"text": HEADS["en"][1]},
  LFEAT: {"items": [
      {"text": "**Mass new-grad hiring**: recruited by graduation year, decided while still enrolled."},
      {"text": "**April entry**: graduate in March, start on 1 April - nearly every industry at once."},
      {"text": "**Potential over readiness**: you are not expected to be job-ready; growth matters more."},
      {"text": "**Membership-type employment**: no fixed role, location or hours - hired as \"generalist\"."}]},
  PFEAT: {"text": "Japanese companies screen international students **by the same standards as Japanese students** - "
                  "domestic or foreign firms alike. There is no separate foreigner route."},
  HSCHED: {"text": HEADS["en"][2]},
  TSCHED: {"headers": ["Stage", "When", "What to do"], "rows": [
      ["Preparation", "5 months ahead", "Self-analysis, industry research"],
      ["Summer internship", "Jul-Sep", "Make early contact"],
      ["Apply / info sessions", "Mar-May", "Apply, attend sessions"],
      ["Entry sheet & tests", "Mar-Jun", "Essays, SPI"],
      ["Interviews", "From June", "2-3 rounds per company"],
      ["Offer", "From June (formal Oct)", "Report to the university"]]},
  PSCHED: {"text": "It starts on **1 March of the year before your final year** (3rd-year undergrad, 1st-year master's, "
                   "2nd-year PhD) and ends mid-June - about four months, and **miss it and it is hard to recover**."},
  HTEST: {"text": HEADS["en"][3]},
  TTEST: {"headers": ["Gate", "What it tests", "Where it bites"], "rows": [
      ["Document screening", "Entry sheet essay, fixed length", "Hardest part for most people"],
      ["Aptitude / written test", "SPI etc., set in Japanese", "Easy questions, tight time"],
      ["Interviews", "Group discussion, group, 1-on-1", "2-3 rounds; delivery matters"]]},
  PTEST: {"text": "The entry sheet asks for your motivation and what you worked hardest at. "
                  "**Writing in Japanese is where most international students get stuck.** "
                  "The university's **career advisers** can review your draft."},
  HAFTER: {"text": HEADS["en"][4]},
  LAFTER: {"items": [
      {"text": "**Change your residence status**: from \"Student\" to a work-permitted status."},
      {"text": "**Report to the university**: required once your path is set; can be done online."}]},
  HWIN: {"text": HEADS["en"][5]},
  LWIN: {"items": [
      {"text": "Career Support Office, Student Support Division (international student desk)"},
      {"text": "Center Bldg 1, 2F, counter 2 (Ito Campus)"},
      {"text": "TEL 092-802-5902"},
      {"text": "Email q-ssc@jimu.kyushu-u.ac.jp"}]},
  LRES: {"items": [
      {"text": "Job hunting in Japan (public - start here)",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"},
      {"text": "Career paths after graduation (past data)",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"},
      {"text": "Job support for international students (overview)",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"},
      {"text": "On-campus job events (SSO login required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"},
      {"text": "Off-campus job events (SSO login required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"},
      {"text": "Job listings (SSO login required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"},
      {"text": "Internships (SSO login required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"},
      {"text": "Job-hunting experience reports (SSO login required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"},
      {"text": "Career consultation (SSO login required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"},
      {"text": "Useful information for international students (SSO required)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"},
      {"text": "Study in Japan (working in Japan & status of residence)",
       "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"}]},
  NSSO: {"text": "Most of those nine pages **require Kyushu U. SSO login** (everything under `/ja/internal/` is internal). "
                 "Before enrolment you can only read \"Job hunting in Japan\" and \"Career paths\". "
                 "A page that will not open is a permission issue, not a fault."},
 },
 "ko": {
  LEAD: {"text": "일본 취업은 **신졸 일괄 채용**입니다 —— 기업은 1년에 한 번만 모집하고 모두 같은 일정으로 움직입니다. "
                 "이 페이지는 세 가지를 정리합니다: 언제 시작하는지, 세 관문이 무엇을 보는지, 창구는 어디인지."},
  EV: {"text": HEADS["ko"][0]},
  EVT: {"headers": ["이벤트", "시간", "대상"], "rows": [
      ["업계·기업 연구 페어(2026)", "12/2 16:40~", "2027/9·2028/3"],
      ["형식", "Zoom 온라인", "주로 일본어(자막 있음)"]]},
  EVP: {"text": "11개사 참가(쇼코전기·후쿠오카은행·니토리·AGC·NTT데이터·캡콤·라쿠텐카드 등). "
                "주최: **학무부 커리어지원과 092-802-5902**. 자세한 내용은 공식 발표를 따르세요."},
  HFEAT: {"text": HEADS["ko"][1]},
  LFEAT: {"items": [
      {"text": "**신졸 일괄 채용**: 졸업 연도별로 한꺼번에 모집, 재학 중에 결정."},
      {"text": "**4월 입사**: 3월 졸업·4월 1일 입사. 거의 모든 업계가 동시."},
      {"text": "**포텐셜 채용**: 입사 전 즉전력은 요구하지 않고 성장 가능성을 봅니다."},
      {"text": "**멤버십형 고용**: 직무·근무지·시간을 한정하지 않고 「종합직」으로 채용."}]},
  PFEAT: {"text": "일본 기업은 외국인 유학생을 **일본인 학생과 같은 기준**으로 선발합니다. 일계·외자계 모두 같습니다. "
                  "「외국인 전용 루트」는 없습니다."},
  HSCHED: {"text": HEADS["ko"][2]},
  TSCHED: {"headers": ["단계", "시기", "할 일"], "rows": [
      ["준비", "본격 시작 5개월 전", "자기분석·업계 연구"],
      ["여름 인턴", "7~9월", "일찍 기업과 접점"],
      ["응모·설명회", "3~5월", "지원·설명회 참가"],
      ["ES·필기", "3~6월", "작문·SPI"],
      ["면접", "6월~", "1사 2~3회"],
      ["내정", "6월~(정식 10월)", "결정 후 대학에 보고"]]},
  PSCHED: {"text": "시작은 **최종 학년 전년도 3월 1일**(학부 3년·석사 1년·박사 2년), 6월 중순 종료. "
                   "약 4개월이며 **이 해를 놓치면 만회가 어렵습니다**."},
  HTEST: {"text": HEADS["ko"][3]},
  TTEST: {"headers": ["관문", "묻는 것", "유학생의 벽"], "rows": [
      ["서류 선고", "글자수 지정 ES 작문", "가장 힘들어하는 사람이 많음"],
      ["적성검사·필기", "SPI 등(일본어 출제)", "난도는 낮지만 속도 필요"],
      ["면접", "GD·그룹·개인", "1사 2~3회, 표현력 평가"]]},
  PTEST: {"text": "ES에서는 「지원 동기」「학창시절 가장 노력한 일」을 씁니다. "
                  "**유학생은 일본어 작문에서 막히기 쉽습니다.** "
                  "대학의 **진로·취업 어드바이저**에게 첨삭을 받을 수 있습니다."},
  HAFTER: {"text": HEADS["ko"][4]},
  LAFTER: {"items": [
      {"text": "**재류자격 변경**: 「유학」에서 취업 가능한 자격으로 변경."},
      {"text": "**대학에 보고**: 진로 확정 후 소속 부국에 보고. 시스템으로도 가능."}]},
  HWIN: {"text": HEADS["ko"][5]},
  LWIN: {"items": [
      {"text": "학무부 학생지원과 커리어지원실(유학생 취업지원 담당)"},
      {"text": "센터 1호관 2층·2번 창구(이토 캠퍼스)"},
      {"text": "TEL 092-802-5902"},
      {"text": "Email q-ssc@jimu.kyushu-u.ac.jp"}]},
  LRES: {"items": [
      {"text": "일본에서의 취업활동(공개·먼저 이 페이지)",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"},
      {"text": "졸업 후 진로 상황(과거 실데이터)",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"},
      {"text": "외국인 유학생을 위한 취업지원(총 입구)",
       "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"},
      {"text": "교내 취업 이벤트(SSO 로그인 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"},
      {"text": "교외 취업 이벤트(SSO 로그인 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"},
      {"text": "구인 정보(SSO 로그인 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"},
      {"text": "인턴십(SSO 로그인 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"},
      {"text": "취업 체험기(SSO 로그인 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"},
      {"text": "진로·취업 상담(SSO 로그인 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"},
      {"text": "유학생을 위한 취업 유용 정보(SSO 필요)",
       "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"},
      {"text": "Study in Japan(일본 취업·재류자격)",
       "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"}]},
  NSSO: {"text": "위 9개 페이지 중 **대부분은 규슈대 SSO 로그인이 필요**합니다(`/ja/internal/` 아래는 교내 페이지). "
                 "입학 전에 볼 수 있는 것은 「일본에서의 취업활동」과 「진로 상황」뿐입니다. "
                 "페이지가 안 열리는 것은 고장이 아니라 권한 문제입니다."},
 },
}

OUT = os.path.join(ROOT, "tools", ".career_i18n.json")
json.dump(TR, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

nav = {
 "ja": {"title": "就職・インターン（外国人留学生）",
        "summary": "日本就活のルール（新卒一括採用・4 月入社・ポテンシャル採用）、年 1 回のスケジュール、"
                   "3 つの関門（ES・SPI・面接）の難所、内定後の在留資格変更と報告義務、"
                   "キャリア支援室の窓口と 12/2 企業研究フェア。"},
 "en": {"title": "Careers & Internships (international students)",
        "summary": "How Japanese hiring works (mass new-grad hiring, April entry, potential-based selection), the once-a-year calendar, "
                   "what the three gates (entry sheet, SPI, interviews) actually test, the residence-status change and reporting duty "
                   "after an offer, the career office counter, and the 2 Dec company fair."},
 "ko": {"title": "취업·인턴십(외국인 유학생)",
        "summary": "일본 취업 규칙(신졸 일괄 채용·4월 입사·포텐셜 채용), 1년에 한 번인 일정, "
                   "세 관문(ES·SPI·면접)의 난관, 내정 후 재류자격 변경과 보고 의무, "
                   "커리어지원실 창구와 12/2 기업 연구 페어."},
}
# 形状必须是「按文章 id」而不是「按语言」——add_nav_entries.js 按 id 找条目的
nav_payload = {"guide-career": {
    "title": {l: nav[l]["title"] for l in ("ja", "en", "ko")},
    "summary": {l: nav[l]["summary"] for l in ("ja", "en", "ko")},
}}
json.dump(nav_payload, open(os.path.join(ROOT, "tools", ".career_nav.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("payload:", OUT, "| 每语块数:", {l: len(v) for l, v in TR.items()})
