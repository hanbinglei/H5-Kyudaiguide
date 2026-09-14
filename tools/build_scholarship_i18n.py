#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 guide-scholarship 的三语译本 payload（ja/en/ko），交给
`node tools/merge_body_i18n.js guide-scholarship tools/.scholarship_i18n.json` 合并。

约定（与既有文章一致）：
 - paragraph/heading/subheading/notice/warning -> {"text": ...}
 - list/steps/checklist                        -> {"items": [{"text": ...}, ...]}
 - links                                       -> {"items": [{"text":..., "url":...}, ...]}
 - collapse                                    -> {"title": ...}
 - fee_table                                   -> {"headers": [...], "rows": [[...]]}
   · 「募集中」表的单元格是奖学金名/金额/截止（专有名词＋数字）→ 三语原样
   · 「应募路径」「学習奨励費」表是中文说明 → 逐项翻译（在 TR 里显式给 {headers, rows}）
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, "content", "guide-scholarship.json")
art = json.load(open(ART, encoding="utf-8"))


def flat_map(blocks, out=None):
    if out is None:
        out = {}
    for b in blocks:
        if b.get("id"):
            out[b["id"]] = b
        if isinstance(b.get("blocks"), list):
            flat_map(b["blocks"], out)
    return out


blocks = flat_map(art["blocks"])

HEAD = {
 "ja": {"奖学金": "奨学金", "金额": "金額", "截止": "締切", "路径": "ルート",
        "谁交材料": "提出先", "落选风险": "リスク", "项目": "項目", "内容": "内容"},
 "en": {"奖学金": "Scholarship", "金额": "Amount", "截止": "Deadline", "路径": "Route",
        "谁交材料": "Who submits", "落选风险": "Main risk", "项目": "Item", "内容": "Details"},
 "ko": {"奖学金": "장학금", "金额": "금액", "截止": "마감", "路径": "경로",
        "谁交材料": "제출처", "落选风险": "탈락 위험", "项目": "항목", "内容": "내용"},
}

# links 块里动态拼出来的「附件类型」词，按语言替换
KIND = {
 "ja": [("— 募集要項（PDF）", "— 募集要項（PDF）"), ("— 願書模板（ZIP）", "— 願書様式（ZIP）")],
 "en": [("— 募集要項（PDF）", "— Guidelines (PDF)"), ("— 願書模板（ZIP）", "— Application forms (ZIP)")],
 "ko": [("— 募集要項（PDF）", "— 모집요강 (PDF)"), ("— 願書模板（ZIP）", "— 원서 양식 (ZIP)")],
}

TR = {
 "ja": {
  "13edbe": {"text": "このページで分かることは 2 つ：**いま何に出せるか**、**どう出すか**。"
                     "九大の私費奨学金はほぼ「在籍中 ＋ 日本語ができる」が条件で、"
                     "大学推薦と直接応募の 2 ルートあります。いま応募できるのは下の 7 件です。"},
  "25d902": {"text": "**出典**：Global Gateways「奨学金一覧」（国際部留学課）、2026-09-14 取得。"
                     "財団ごとに毎年募集し直し、金額も締切も変わります —— "
                     "**応募前に下の公式一覧で原文を確認してください**。"},
  "3fe9fc": {"text": "いま応募できるもの（7 件）"},
  "0e1654": {"text": "以下は公式ファイルを直接入手できます —— **まず募集要項を読んでから出すか決めましょう**。"},
  "620a45": {"text": "それ以外は公式一覧から入ってください（毎年更新・終了分も掲載）："},
  "d123df": {"items": [
     {"text": "奨学金一覧（公式・当年度）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
     {"text": "奨学金一覧（公式・前年度、終了分を含む）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
     {"text": "Scholarship list (English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"}]},
  "c482ce": {"text": "応募前に必ず理解する 5 つのこと"},
  "9145cf": {"items": [
     {"text": "**募集要項は自分で読む**：理解せず応募して取消になった例があります。"},
     {"text": "**併給に上限**：二重受給は原則不可。上限ありも要確認。"},
     {"text": "**日本語は事実上の関門**：自筆書類や日本語面接を求める財団が多い。"},
     {"text": "**多くは在籍者のみ**：入学前に出せるものはごく少数。"},
     {"text": "**競争は激しい**：応募 ≠ 採用。複数併願を。"}]},
  "7efb8a": {"text": "2 つの応募ルート"},
  "2461df": {"headers": ["ルート", "誰が提出", "リスク"], "rows": [
     ["大学推薦（学内選考）", "まず留学課へ。通過後に大学が推薦", "学内で先に落ちる"],
     ["直接応募", "自分で財団へ出す", "公式サイトと締切を自分で追う"]]},
  "887b6a": {"text": "**学内選考**は国際部留学課留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp`。"
                     "学習奨励費（私費対象・月 48,000 円）は**所属学部／学府の学務係**で、別ルートです。"},
  "8aa843": {"text": "国費外国人留学生（政府奨学金）"},
  "303df2": {"text": "文部科学省の制度。**授業料は大学負担、往復渡航費も支給。** 月額は区分ごとに："
                     "修士 147,000 円 ／ 博士 148,000 円 ／ 研究生 146,000 円 ／ 学部 120,000 円。"},
  "7ba84b": {"items": [
     {"text": "**大学推薦**：募集期は学府ごと → 2 月学内選考 → 6 月採用"},
     {"text": "**大使館推薦**：2〜3 月募集 → 5〜7 月一次選考 → 翌年渡日"}]},
  "546b06": {"text": "**進学しても自動継続しません**：指導教員の推薦＋文科省への支給期間延長申請が必要で、可否は文科省の選考。"},
  "55d28a": {"text": "私費対象：学習奨励費"},
  "d52461": {"headers": ["項目", "内容"], "rows": [
     ["月額", "48,000 円"],
     ["期間", "1 年 または 6 か月"],
     ["募集", "原則 年 2 回（春・秋）"],
     ["対象", "学部正規生 ／ 大学院生・研究生"],
     ["窓口", "所属学部の学務係"]]},
  "2d2248": {"text": "公式入口"},
  "768171": {"items": [
     {"text": "私費留学生のための奨学金（制度の概要）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
     {"text": "Scholarship Guidebook（申請書の書き方・面接）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
     {"text": "応募手続きの解説資料", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
     {"text": "奨学金 Q&A 集", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
     {"text": "国費外国人留学生（制度説明）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"}]},
  "1ea4c3": {"text": "**このページを来年度の予定として使わないでください。** 名称・金額・締切は毎年変わり、公式一覧も当年度分しか載りません。"},
  "0b08bd": {"text": "相談：国際部留学課 留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp`（私費奨学金）；学習奨励費は**所属学部・学府の学務係**へ。"},
 },
 "en": {
  "13edbe": {"text": "Two things this page answers: **what you can apply for now**, and **how to apply**. "
                     "Kyushu U. privately financed scholarships almost always require you to be enrolled and able to work in Japanese, "
                     "and there are two routes: university nomination and direct application. Below are the 7 currently open."},
  "25d902": {"text": "**Source**: Global Gateways “Scholarship Information” (International Student Exchange Division), captured 2026-09-14. "
                     "Foundations re-open every year and both amounts and deadlines change - "
                     "**check the official list below before you apply**."},
  "3fe9fc": {"text": "Open for application now (7)"},
  "0e1654": {"text": "For these you can get the official documents directly - **read the guidelines first, then decide whether to apply**."},
  "620a45": {"text": "For everything else, go through the official list (updated yearly, closed calls included):"},
  "d123df": {"items": [
     {"text": "Scholarship list (official, current year)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
     {"text": "Scholarship list (official, previous year incl. closed)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
     {"text": "Scholarship list (English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"}]},
  "c482ce": {"text": "Five things to understand before applying"},
  "9145cf": {"items": [
     {"text": "**Read the guidelines yourself**: people really do lose awards for not understanding them."},
     {"text": "**Double-dipping is capped**: normally you cannot hold two, and caps need checking."},
     {"text": "**Japanese is a de facto gate**: many foundations want handwritten Japanese and interviews."},
     {"text": "**Most require enrolment**: very few accept applications before you enrol."},
     {"text": "**Competition is fierce**: applying ≠ being selected. Apply to several."}]},
  "7efb8a": {"text": "The two application routes"},
  "2461df": {"headers": ["Route", "Who submits", "Main risk"], "rows": [
     ["University nomination", "First to the exchange division; the university then nominates", "You can fail on campus first"],
     ["Direct application", "You submit to the foundation yourself", "You track the site and deadline alone"]]},
  "887b6a": {"text": "**On-campus selection** goes to the International Student Exchange Division `intlr-pscholar@jimu.kyushu-u.ac.jp`. "
                     "The Study Incentive Grant (privately financed, 48,000 JPY/month) goes through **your faculty/graduate school office** - a different track."},
  "8aa843": {"text": "Japanese Government (MEXT) scholarship"},
  "303df2": {"text": "A MEXT system. **Tuition is covered by the university and return airfare is paid.** Monthly stipend by category: "
                     "Master's 147,000 / Doctorate 148,000 / Research student 146,000 / Undergraduate 120,000 JPY."},
  "7ba84b": {"items": [
     {"text": "**University nomination**: call period set by each school → Feb on-campus selection → Jun award"},
     {"text": "**Embassy nomination**: Feb-Mar call → May-Jul first screening → arrival the following year"}]},
  "546b06": {"text": "**Advancing to a higher degree does not continue it automatically**: you need your supervisor's support and a MEXT application to extend the period; MEXT decides."},
  "55d28a": {"text": "For privately financed students: Study Incentive Grant"},
  "d52461": {"headers": ["Item", "Details"], "rows": [
     ["Monthly", "48,000 JPY"],
     ["Duration", "1 year or 6 months"],
     ["Call period", "Normally twice a year (spring/autumn)"],
     ["Eligibility", "Undergraduate regular / graduate, research students"],
     ["Counter", "Student affairs office of your faculty"]]},
  "2d2248": {"text": "Official pages"},
  "768171": {"items": [
     {"text": "Scholarships for privately financed students (overview)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
     {"text": "Scholarship Guidebook (writing applications, interviews)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
     {"text": "Application process explained", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
     {"text": "Scholarship Q&A", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
     {"text": "MEXT government scholarship (explanation)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"}]},
  "1ea4c3": {"text": "**Do not use this page as next year's plan.** Names, amounts and deadlines change every year, and the official list covers only the current year."},
  "0b08bd": {"text": "Enquiries: International Student Exchange Division `intlr-pscholar@jimu.kyushu-u.ac.jp` (private scholarships); for the Study Incentive Grant, **your faculty / graduate school office**."},
 },
 "ko": {
  "13edbe": {"text": "이 페이지가 답하는 두 가지: **지금 무엇에 지원할 수 있는가**, **어떻게 지원하는가**. "
                     "규슈대 사비 장학금은 대부분 재학 중 + 일본어 가능이 조건이며, "
                     "대학 추천과 직접 응모 두 경로가 있습니다. 지금 지원 가능한 것은 아래 7건입니다."},
  "25d902": {"text": "**출처**: Global Gateways「奨学金一覧」(국제부 유학과), 2026-09-14 수집. "
                     "재단마다 매년 다시 모집하고 금액과 마감일도 바뀝니다 - "
                     "**지원 전에 아래 공식 목록에서 원문을 확인하세요**."},
  "3fe9fc": {"text": "지금 지원할 수 있는 것(7건)"},
  "0e1654": {"text": "아래 항목은 공식 파일을 바로 받을 수 있습니다 - **먼저 모집요강을 읽고 지원 여부를 정하세요**."},
  "620a45": {"text": "그 외에는 공식 목록에서 들어가세요(매년 갱신, 종료분 포함):"},
  "d123df": {"items": [
     {"text": "장학금 목록(공식·당해연도)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
     {"text": "장학금 목록(공식·전년도, 종료분 포함)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
     {"text": "Scholarship list (English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"}]},
  "c482ce": {"text": "지원 전 반드시 이해할 5가지"},
  "9145cf": {"items": [
     {"text": "**모집요강은 직접 읽기**: 이해 없이 지원해 취소된 사례가 있습니다."},
     {"text": "**중복 수급 상한**: 원칙적으로 두 곳 동시 수급 불가. 상한도 확인."},
     {"text": "**일본어가 사실상 관문**: 자필 서류와 일본어 면접을 요구하는 재단이 많습니다."},
     {"text": "**대부분 재학생만**: 입학 전 지원 가능한 것은 극소수."},
     {"text": "**경쟁이 치열**: 지원 ≠ 채용. 여러 곳에 지원하세요."}]},
  "7efb8a": {"text": "두 가지 지원 경로"},
  "2461df": {"headers": ["경로", "제출처", "탈락 위험"], "rows": [
     ["대학 추천(교내 선고)", "먼저 유학과로. 통과 후 대학이 추천", "교내에서 먼저 탈락"],
     ["직접 응모", "본인이 재단에 제출", "공식 사이트와 마감을 스스로 관리"]]},
  "887b6a": {"text": "**교내 선고**는 국제부 유학과 유학생계 `intlr-pscholar@jimu.kyushu-u.ac.jp`. "
                     "학습장려비(사비 대상·월 48,000엔)는 **소속 학부/대학원 사무실**로, 별도 경로입니다."},
  "8aa843": {"text": "국비 외국인 유학생(정부 장학금)"},
  "303df2": {"text": "문부과학성 제도. **수업료는 대학 부담, 왕복 항공료도 지급.** 월액은 구분별로: "
                     "석사 147,000엔 ／ 박사 148,000엔 ／ 연구생 146,000엔 ／ 학부 120,000엔."},
  "7ba84b": {"items": [
     {"text": "**대학 추천**: 모집 기간은 학부별 → 2월 교내 선고 → 6월 채용"},
     {"text": "**대사관 추천**: 2~3월 모집 → 5~7월 1차 선고 → 다음 해 도일"}]},
  "546b06": {"text": "**진학해도 자동 연장되지 않습니다**: 지도교원 추천 + 문부과학성 지급 기간 연장 신청이 필요하고, 가부는 문부과학성이 결정합니다."},
  "55d28a": {"text": "사비 대상: 학습장려비"},
  "d52461": {"headers": ["항목", "내용"], "rows": [
     ["월액", "48,000엔"],
     ["기간", "1년 또는 6개월"],
     ["모집", "원칙 연 2회(봄·가을)"],
     ["대상", "학부 정규생 ／ 대학원생·연구생"],
     ["창구", "소속 학부 사무실"]]},
  "2d2248": {"text": "공식 입구"},
  "768171": {"items": [
     {"text": "사비 유학생을 위한 장학금(제도 개요)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
     {"text": "Scholarship Guidebook(신청서 작성·면접)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
     {"text": "응모 절차 해설 자료", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
     {"text": "장학금 Q&A", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
     {"text": "국비 외국인 유학생(제도 설명)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"}]},
  "1ea4c3": {"text": "**이 페이지를 내년 일정으로 쓰지 마세요.** 이름·금액·마감일은 매년 바뀌고 공식 목록도 당해연도만 싣습니다."},
  "0b08bd": {"text": "상담: 국제부 유학과 유학생계 `intlr-pscholar@jimu.kyushu-u.ac.jp`(사비 장학금); 학습장려비는 **소속 학부·대학원 사무실**로."},
 },
}


def translated(lang, bid_):
    if bid_ in TR[lang]:
        return TR[lang][bid_]
    b = blocks[bid_]
    if b.get("headers"):
        # 表格：表头翻译，单元格原样（专有名词・数字）
        return {"headers": [HEAD[lang].get(h, h) for h in b["headers"]], "rows": b["rows"]}
    if b.get("type") == "links":
        # 附件链接：条目是「奖学金名 — 募集要項（PDF）」，名字是专有名词，
        # 只把「文件类型」那几个词按语言换掉（见 KIND）
        return {"items": [dict(it) for it in b.get("items") or []]}
    return None


def build_lang(lang):
    obj = {}
    for bid_ in blocks:
        v = translated(lang, bid_)
        if v is None:
            continue
        # links 块里「— 募集要項（PDF）」这类标签按语言换写法
        if v.get("items") and blocks[bid_].get("type") == "links":
            v = {"items": [dict(it) for it in v["items"]]}
            for it in v["items"]:
                for a, b_ in KIND[lang]:
                    it["text"] = it["text"].replace(a, b_)
        obj[bid_] = v
    return obj


new = {lang: build_lang(lang) for lang in ("ja", "en", "ko")}
TMP = os.path.join(ROOT, "tools", ".scholarship_i18n.json")
json.dump(new, open(TMP, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

entry = {
 "ja": {"title": "奨学金（私費・国費）",
        "summary": "いま応募できる 7 件（金額・締切の一覧、募集要項のダウンロード付き）、2 つの応募ルート、"
                   "日本語と併給の壁、国費外国人留学生 4 区分の月額、私費の学習奨励費 48,000 円/月。"},
 "en": {"title": "Scholarships (private & government)",
        "summary": "The 7 currently open calls (amounts and deadlines, with downloadable guidelines), the two application routes, "
                   "the Japanese-language and double-dipping gates, the four MEXT categories and stipends, "
                   "and the 48,000 JPY/month Study Incentive Grant for privately financed students."},
 "ko": {"title": "장학금(사비·국비)",
        "summary": "지금 지원 가능한 7건(금액·마감 목록, 모집요강 다운로드 포함), 두 가지 지원 경로, "
                   "일본어와 중복 수급 장벽, 국비 외국인 유학생 4개 구분 월액, 사비 학습장려비 48,000엔/월."},
}
json.dump(entry, open(os.path.join(ROOT, "tools", ".scholarship_nav_i18n.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

missing = {lang: [k for k in blocks if k not in new[lang]] for lang in new}
print("blocks/lang:", {l: len(v) for l, v in new.items()})
print("缺译:", {k: v for k, v in missing.items() if v} or "无")
print("payload:", TMP)
