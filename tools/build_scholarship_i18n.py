#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 guide-scholarship 的三语正文译文注入 guide/js/articles-body-i18n.js。

约定（与既有文章一致）：
 - paragraph/heading/subheading/notice/warning  -> {"text": "..."}
 - list/steps/checklist                          -> {"items":[{"text":...}, ...]}
 - links                                          -> {"items":[{"text":...,"url":...}]}
 - fee_table                                     -> {"headers":[...],"rows":[[...]]}
 - collapse 的标题                                -> {"title":"..."}
大奖学金的「名称/金额/対象/締切」列是日文专有名词与官方原文，三语**原样保留**；
表头、正文、以及手工编写的国費/学習奨励費表**逐项翻译**。
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, "content", "guide-scholarship.json")
I18N = os.path.join(ROOT, "guide", "js", "articles-body-i18n.js")
art = json.load(open(ART, encoding="utf-8"))

def flat_map(blocks, out=None):
    """含 collapse 内嵌块的 id → block 映射"""
    if out is None:
        out = {}
    for b in blocks:
        if b.get("id"):
            out[b["id"]] = b
        if isinstance(b.get("blocks"), list):
            flat_map(b["blocks"], out)
    return out

BLOCKS = flat_map(art["blocks"])

# 表头三语（大表格的单元格是日文原文，三语共用）
HEAD = {
    "ja": {"奖学金": "奨学金", "支給額": "支給額", "対象": "対象", "応募截止": "応募締切"},
    "en": {"奖学金": "Scholarship", "支給額": "Amount", "対象": "Eligibility", "応募截止": "Deadline"},
    "ko": {"奖学金": "장학금", "支給額": "금액", "対象": "대상", "応募截止": "마감"},
}

def table_tr(b, lang):
    """表格：表头翻译，单元格原样（专有名词・官方日文原文）"""
    hd = [HEAD[lang].get(h, h) for h in b["headers"]]
    return {"headers": hd, "rows": b["rows"]}

blocks = flat_map(art["blocks"])
TR = {
 "ja": {
  "ec6ef2": {"text": "このページは九州大学の**私費外国人留学生**が応募できる奨学金をまとめたものです。"
                     "2 つの応募ルート、自分で読み切る必要がある募集要項、現在募集中の一覧、年度ごとの全件一覧、"
                     "そして**国費外国人留学生**制度を扱います。主に**在籍中**の学生向けですが、"
                     "新入生は先にルールだけ把握しておくとよいでしょう。"},
  "c82561": {"text": "**一覧データの出典**：Global Gateways「奨学金一覧」（国際部留学課）、2026-09-14 取得。"
                     "この一覧は毎年更新され、募集期間が 1〜2 週間しかないものもあります —— "
                     "**必ず公式ページで当年度の原文を確認してください**。本ページは案内と整理のみです。"},
  "346b81": {"text": "応募前に必ず理解しておく 5 つのこと"},
  "377fd5": {"items": [
     {"text": "**募集要項は自分で読む**。理解せずに応募して採用取消になった例が実際にあります。"},
     {"text": "**併給の制限**：複数の奨学金の同時受給は原則禁止か、合計額に上限があります。ここは必ず確認を。"},
     {"text": "**在留資格**は多くが「留学」。 「家族滞在」「永住者」等では応募できない奨学金があります。"},
     {"text": "**日本語能力**は事実上の関門：日本語での自筆書類（小論文含む）や日本語面接を求める財団が多く、募集要項が日本語のみのことも。"},
     {"text": "多くは**既に九州大学に在籍している者**が対象。入学前に応募できるものは少数です。"},
     {"text": "**競争率は非常に高い**。応募＝採用ではないため、複数併願しつつ学業成績を優先しましょう。"}]},
  "1d665b": {"text": "国際部留学課は **Scholarship Guidebook**（申請書の書き方・面接の要点）も用意しています。下のリンク参照。"},
  "490b28": {"text": "2 つの応募ルート"},
  "ade284": {"headers": ["ルート", "流れ", "注意"], "rows": [
     ["大学推薦（学内選考）", "学内選考 → 大学が財団へ推薦 → 財団の最終審査", "学内で落ちることも、推薦されても不採用になることもある"],
     ["直接応募", "大学を経由せず、自分で財団へ応募", "自分で公式サイトと締切を追う必要がある。書類要件が煩雑"]]},
  "7bc3ca": {"text": "**学内選考の提出窓口は国際部留学課留学生係**（`intlr-pscholar@jimu.kyushu-u.ac.jp`）。"
                     "**直接応募**は本人が財団とやり取りします。文部科学省外国人留学生学習奨励費は**所属学部・学府の学務係**が窓口で、"
                     "この 2 つは別ルートです。"},
  "6f207f": {"text": "いま応募できるもの（9 件）"},
  "13207e": {"text": "下表は**締切順**で、公式一覧で「募集中」とされているものだけを載せています。"
                     "金額・条件は公式原文の要約です —— 必要書類は下の公式一覧で確認してください。"},
  "ce1b1e": {"text": "全件一覧（年度別）"},
  "ed92ef": {"text": "「年度」は奨学金の適用年度で、応募年ではありません。**2027 年度**は多くが 2026 年秋に応募し、"
                     "2027 年 4 月から支給開始です。「終了」の項目も残してあります —— 「この財団はだいたいいつ募集するか」の判断に使えます。"},
  "77230e": {"text": "国費外国人留学生（政府奨学金）"},
  "c6c27f": {"text": "文部科学省が設けた、**研究者の育成と国と国の懸け橋となる人材**を目的とする制度です。九大は 4 種別で受け入れています："
                     "研究留学生（大学院）、学部留学生、日本語・文化研修生、そして Young Leaders' Program（YLP）。"
                     "**授業料は大学負担、往復の渡航費も支給されます。**"},
  "b59cea": {"headers": ["種別", "月額（地域加算含む）", "支給期間"], "rows": [
     ["研究留学生・修士／専門職", "147,000 円", "当該課程の修了まで（標準修業年限内）"],
     ["研究留学生・博士", "148,000 円", "同上"],
     ["研究留学生・研究生（非正規生）", "146,000 円", "日本語教育を含め 2 年以内"],
     ["学部留学生", "120,000 円", "大学推薦：課程修了まで／大使館推薦：日本語教育 1 年を含め 5 年（医歯薬は 7 年）"],
     ["日本語・文化研修生", "120,000 円", "1 学年"]]},
  "d8544b": {"text": "2 つの応募スケジュール"},
  "7ba84b": {"items": [
     {"text": "**大学推薦**：募集期間は学府ごとに異なる（自分の学府の学務係へ）→ 翌年 2 月 学内選考・推薦 → 6 月 選考・採用 → 10 月 渡日"},
     {"text": "**大使館推薦**：2〜3 月 在外公館で募集 → 5〜7 月 一次選考（書類・筆記・面接）→ 8 月までに受入内諾書 → 10 月〜翌年 2 月 二次選考 → 4 月または 10 月 渡日"}]},
  "46d46a": {"text": "**進学（上位学位へ）しても自動継続にはなりません**。指導教員の推薦を得て文部科学省へ**支給期間延長**を申請し、"
                     "可否は文科省の選考で決まります —— 早めに指導教員と相談してください。"},
  "f43b61": {"text": "私費対象：文部科学省外国人留学生学習奨励費"},
  "d52461": {"headers": ["項目", "内容"], "rows": [
     ["対象", "学部生：正規生のみ ／ 大学院生：研究生または正規生"],
     ["月額", "48,000 円"],
     ["支給期間", "1 年 または 6 か月"],
     ["募集時期", "原則として年 2 回（春・秋）。募集がない時期もある"],
     ["窓口", "所属学部・大学院の**学務係**（留学課ではない）"]]},
  "2e3f20": {"text": "これは**私費**留学生向けの奨学金で、上の国費制度とは別物です。手続きも学生係経由 —— "
                     "名前は似ていますが経路がまったく違います。"},
  "b9a858": {"text": "公式入口と相談窓口"},
  "ae7750": {"items": [
     {"text": "奨学金一覧（2027 年度・日本語）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
     {"text": "奨学金一覧（2026 年度・日本語）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
     {"text": "Scholarship list (2027 / English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"},
     {"text": "私費留学生のための奨学金（制度の概要）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
     {"text": "Scholarship Guidebook（申請書の書き方・面接）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
     {"text": "応募手続きの解説資料", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
     {"text": "学内選考の手続きと必要書類", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/On-campus-selection.pdf"},
     {"text": "奨学金 Q&A 集", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
     {"text": "国費外国人留学生（制度説明）", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"},
     {"text": "国費：支給期間延長の申請", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/2ffc084a7bc89c0ce517807396d55ecf.pdf"},
     {"text": "JASSO 学習奨励費（留学生受入れ促進プログラム）", "url": "https://www.jasso.go.jp/ryugaku/scholarship_j/shoreihi/index.html"}]},
  "a95dcb": {"text": "**このページの内容を翌年度の予定として流用しないでください。** 名称・金額・締切は毎年変わりますし、"
                     "公式一覧も当年度しか載せていません。新年度になったら Global Gateways の奨学金一覧で必ず確認し直してください。"},
  "a6bbc9": {"text": "相談窓口：**国際部留学課 留学生係（私費留学生向け奨学金）** `intlr-pscholar@jimu.kyushu-u.ac.jp`。"
                     "学習奨励費は**所属学部・学府の学務係**へ。"},
  "f18522": {"title": "2027 年度・全 10 件"},
  "8557ac": {"title": "2026 年度・全 67 件"},
 },
 "en": {
  "ec6ef2": {"text": "This page covers the scholarships available to **privately financed international students** at Kyushu University: "
                     "the two application routes, the guidelines you must read yourself, what is open right now, the full list by year, "
                     "and the **Japanese Government (MEXT) scholarship** system. It is aimed mainly at **students already enrolled** - "
                     "newcomers can read it to learn the rules first."},
  "c82561": {"text": "**Source of the list**: Global Gateways “Scholarship Information” (International Student Exchange Division), "
                     "captured 2026-09-14. The list is updated yearly and some calls run for only one or two weeks - "
                     "**always confirm the current wording on the official page**. This page is navigation and digest only."},
  "346b81": {"text": "Five things to understand before you apply"},
  "377fd5": {"items": [
     {"text": "**Read the guidelines yourself.** Students really do lose awards for applying without understanding them."},
     {"text": "**Double-dipping rules**: receiving several scholarships at once is normally banned, or capped in total amount. Check every case."},
     {"text": "**Residence status** is usually “Student”. Holders of “Dependent” or “Permanent Resident” cannot apply for some scholarships."},
     {"text": "**Japanese ability** is a de facto gate: many foundations require handwritten Japanese documents (including a short essay) and interviews in Japanese, and guidelines are often Japanese-only."},
     {"text": "Most schemes target **students already enrolled** at Kyushu University. Very few accept applications before enrolment."},
     {"text": "**Competition is fierce.** Applying does not mean being selected - apply to several while keeping your grades up."}]},
  "1d665b": {"text": "The division also publishes a **Scholarship Guidebook** (how to write applications, interview tips) - see the links below."},
  "490b28": {"text": "The two application routes"},
  "ade284": {"headers": ["Route", "Process", "Watch out"], "rows": [
     ["University nomination (on-campus selection)", "Pass the on-campus selection -> university nominates you -> foundation screens", "You can fail on campus; even a nomination may not be selected"],
     ["Direct application", "Apply to the foundation yourself, without the university", "You must track the foundation site and deadlines yourself; document requirements vary"]]},
  "7bc3ca": {"text": "**On-campus selection documents go to the International Student Exchange Division** "
                     "(`intlr-pscholar@jimu.kyushu-u.ac.jp`). **Direct applications** are handled by you with the foundation. "
                     "The MEXT Study Incentive Grant goes through **your faculty/graduate school office** - different track entirely."},
  "6f207f": {"text": "Open for application now (9)"},
  "13207e": {"text": "Sorted by **deadline**; only entries marked as open in the official list. Amounts and eligibility are digests of the "
                     "official Japanese text - see the official list below for the document checklist."},
  "ce1b1e": {"text": "Full list by year"},
  "ed92ef": {"text": "“Year” is the award year, not the application year: **2027** awards are mostly applied for in autumn 2026 and paid from April 2027. "
                     "Closed entries are kept so you can tell when each foundation usually opens."},
  "77230e": {"text": "Japanese Government (MEXT) scholarship"},
  "c6c27f": {"text": "A system created by MEXT to **train researchers and build bridges between countries**. Kyushu U. hosts four categories: "
                     "Research Students (graduate level), Undergraduate Students, Japanese Studies Students, and the Young Leaders' Program (YLP). "
                     "**Tuition is covered by the university, plus return airfare.**"},
  "b59cea": {"headers": ["Category", "Monthly stipend (incl. regional allowance)", "Duration"], "rows": [
     ["Research student - Master's / professional", "147,000 JPY", "Until completion of the course (within standard term)"],
     ["Research student - Doctorate", "148,000 JPY", "Same as above"],
     ["Research student - non-degree (research student)", "146,000 JPY", "Within 2 years including Japanese training"],
     ["Undergraduate student", "120,000 JPY", "Univ. nomination: until completion / Embassy: 5 years incl. 1 year Japanese (7 for medicine, dentistry, pharmacy)"],
     ["Japanese Studies student", "120,000 JPY", "One academic year"]]},
  "d8544b": {"text": "Two application timelines"},
  "7ba84b": {"items": [
     {"text": "**University nomination**: call period set by each graduate school (ask your school office) -> Feb: on-campus selection/nomination -> Jun: selection & award -> Oct: arrival"},
     {"text": "**Embassy nomination**: Feb-Mar call at overseas missions -> May-Jul first screening (documents, written test, interview) -> by Aug obtain acceptance letter -> Oct-Feb second screening -> arrival in Apr or Oct"}]},
  "46d46a": {"text": "**Advancing to a higher degree does not continue the award automatically.** Your supervisor must support an application to MEXT to **extend the payment period**, and MEXT decides. Discuss it early."},
  "f43b61": {"text": "For privately financed students: MEXT Study Incentive Grant"},
  "d52461": {"headers": ["Item", "Details"], "rows": [
     ["Eligibility", "Undergraduates: regular students only / Graduate: research or regular students"],
     ["Monthly stipend", "48,000 JPY"],
     ["Duration", "1 year or 6 months"],
     ["Call period", "Normally twice a year (spring / autumn); sometimes not offered at all"],
     ["Counter", "**Student affairs office of your faculty / graduate school** (not the exchange division)"]]},
  "2e3f20": {"text": "This one is for **privately financed** students and is separate from the MEXT government scholarship above. It also goes through the student affairs office - similar name, totally different route."},
  "b9a858": {"text": "Official pages and enquiries"},
  "ae7750": {"items": [
     {"text": "Scholarship list (FY2027, Japanese)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
     {"text": "Scholarship list (FY2026, Japanese)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
     {"text": "Scholarship list (FY2027, English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"},
     {"text": "Scholarships for privately financed students (overview)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
     {"text": "Scholarship Guidebook (writing applications, interviews)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
     {"text": "Application process explained", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
     {"text": "On-campus selection: procedure and required documents", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/On-campus-selection.pdf"},
     {"text": "Scholarship Q&A", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
     {"text": "MEXT government scholarship (explanation)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"},
     {"text": "MEXT: application to extend the payment period", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/2ffc084a7bc89c0ce517807396d55ecf.pdf"},
     {"text": "JASSO Study Incentive Grant", "url": "https://www.jasso.go.jp/ryugaku/scholarship_j/shoreihi/index.html"}]},
  "a95dcb": {"text": "**Do not reuse this page as next year's schedule.** Names, amounts and deadlines change every year, and the official list only covers the current year. Check the Global Gateways list again each year."},
  "a6bbc9": {"text": "Enquiries: **International Student Exchange Division - scholarship desk** `intlr-pscholar@jimu.kyushu-u.ac.jp`. "
                     "For the Study Incentive Grant, contact **your faculty / graduate school student affairs office**."},
  "f18522": {"title": "FY2027 - all 10"},
  "8557ac": {"title": "FY2026 - all 67"},
 },
 "ko": {
  "ec6ef2": {"text": "이 페이지는 규슈대학교 **사비 유학생**이 신청할 수 있는 장학금을 정리한 것입니다. "
                     "두 가지 신청 경로, 직접 읽어야 하는 모집요항, 현재 모집 중 목록, 연도별 전체 목록, "
                     "그리고 **국비 유학생** 제도를 다룹니다. 주로 **재학 중**인 학생 대상이며, 신입생은 규칙만 먼저 파악해 두면 됩니다."},
  "c82561": {"text": "**목록 데이터 출처**: Global Gateways「奨学金一覧」(국제부 유학과), 2026-09-14 수집. "
                     "이 목록은 매년 갱신되며 모집 기간이 1~2주뿐인 것도 있습니다 - "
                     "**반드시 공식 페이지에서 해당 연도 원문을 확인하세요**. 이 페이지는 안내와 정리일 뿐입니다."},
  "346b81": {"text": "신청 전 반드시 이해해야 할 5가지"},
  "377fd5": {"items": [
     {"text": "**모집요항은 직접 읽습니다.** 이해하지 않고 신청해 선정이 취소된 사례가 실제로 있습니다."},
     {"text": "**중복 수급 제한**: 여러 장학금 동시 수급은 원칙적으로 금지되거나 합계액에 상한이 있습니다."},
     {"text": "**재류자격**은 대부분 「유학」. 「가족체재」「영주자」 등은 신청할 수 없는 장학금이 있습니다."},
     {"text": "**일본어 능력**이 사실상 관문입니다: 일본어 자필 서류(소논문 포함)와 일본어 면접을 요구하는 재단이 많고, 모집요항이 일본어만인 경우도 있습니다."},
     {"text": "대부분 **이미 규슈대학교에 재학 중인 사람**이 대상입니다. 입학 전에 신청할 수 있는 것은 소수입니다."},
     {"text": "**경쟁률이 매우 높습니다.** 신청했다고 선정되는 것이 아니므로 여러 곳에 지원하면서 학업 성적을 우선하세요."}]},
  "1d665b": {"text": "국제부 유학과는 **Scholarship Guidebook**(신청서 작성법·면접 요령)도 제공합니다. 아래 링크 참조."},
  "490b28": {"text": "두 가지 신청 경로"},
  "ade284": {"headers": ["경로", "절차", "주의"], "rows": [
     ["대학 추천(교내 선고)", "교내 선고 → 대학이 재단에 추천 → 재단 최종 심사", "교내에서 탈락할 수 있고, 추천되어도 불채용될 수 있음"],
     ["직접 응모", "대학을 거치지 않고 재단에 직접 신청", "공식 사이트와 마감일을 스스로 관리해야 함. 서류 요건이 복잡"]]},
  "7bc3ca": {"text": "**교내 선고 서류 제출 창구는 국제부 유학과 유학생계**(`intlr-pscholar@jimu.kyushu-u.ac.jp`). "
                     "**직접 응모**는 본인이 재단과 진행합니다. 문부과학성 외국인 유학생 학습장려비는 **소속 학부·학부(대학원) 사무실**이 창구로, 완전히 다른 경로입니다."},
  "6f207f": {"text": "지금 신청할 수 있는 것(9건)"},
  "13207e": {"text": "**마감일 순**으로 정렬했고, 공식 목록에서 모집 중으로 표시된 항목만 실었습니다. "
                     "금액·조건은 공식 일본어 원문의 요약입니다 - 필요 서류는 아래 공식 목록에서 확인하세요."},
  "ce1b1e": {"text": "전체 목록(연도별)"},
  "ed92ef": {"text": "「연도」는 장학금 적용 연도이며 응모 연도가 아닙니다. **2027년도**는 대부분 2026년 가을에 응모하고 2027년 4월부터 지급됩니다. "
                     "「종료」 항목도 남겨 두었습니다 - 그 재단이 보통 언제 모집하는지 판단하는 데 쓰입니다."},
  "77230e": {"text": "국비 외국인 유학생(정부 장학금)"},
  "c6c27f": {"text": "문부과학성이 만든, **연구자 양성과 국가 간 가교 인재**를 목적으로 한 제도입니다. 규슈대는 4개 구분으로 받습니다: "
                     "연구유학생(대학원), 학부유학생, 일본어·문화연수생, 그리고 Young Leaders' Program(YLP). "
                     "**수업료는 대학 부담, 왕복 항공권도 지급됩니다.**"},
  "b59cea": {"headers": ["구분", "월액(지역 가산 포함)", "지급 기간"], "rows": [
     ["연구유학생·석사／전문직", "147,000엔", "해당 과정 수료까지(표준 수업연한 내)"],
     ["연구유학생·박사", "148,000엔", "위와 같음"],
     ["연구유학생·연구생(비정규)", "146,000엔", "일본어 교육 포함 2년 이내"],
     ["학부유학생", "120,000엔", "대학 추천: 과정 수료까지／대사관 추천: 일본어 교육 1년 포함 5년(의치약 7년)"],
     ["일본어·문화연수생", "120,000엔", "1학년"]]},
  "d8544b": {"text": "두 가지 신청 일정"},
  "7ba84b": {"items": [
     {"text": "**대학 추천**: 모집 기간은 학부(대학원)별로 다름(소속 사무실에 문의) → 다음 해 2월 교내 선고·추천 → 6월 선고·채용 → 10월 도일"},
     {"text": "**대사관 추천**: 2~3월 재외공관 모집 → 5~7월 1차 선고(서류·필기·면접) → 8월까지 수입내낙서 → 10월~다음 해 2월 2차 선고 → 4월 또는 10월 도일"}]},
  "46d46a": {"text": "**상위 학위로 진학해도 자동 연장되지 않습니다.** 지도교원의 추천을 받아 문부과학성에 **지급 기간 연장**을 신청하고, 가부는 문부과학성 선고로 결정됩니다 - 일찍 상담하세요."},
  "f43b61": {"text": "사비 대상: 문부과학성 외국인 유학생 학습장려비"},
  "d52461": {"headers": ["항목", "내용"], "rows": [
     ["대상", "학부생: 정규생만 ／ 대학원생: 연구생 또는 정규생"],
     ["월액", "48,000엔"],
     ["지급 기간", "1년 또는 6개월"],
     ["모집 시기", "원칙적으로 연 2회(봄·가을). 모집이 없는 때도 있음"],
     ["창구", "소속 학부·대학원 **사무실**(유학과가 아님)"]]},
  "2e3f20": {"text": "이것은 **사비** 유학생용 장학금으로 위의 국비 제도와 다릅니다. 절차도 사무실 경유 - 이름은 비슷하지만 경로가 완전히 다릅니다."},
  "b9a858": {"text": "공식 입구와 상담 창구"},
  "ae7750": {"items": [
     {"text": "장학금 목록(2027년도·일본어)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="},
     {"text": "장학금 목록(2026년도·일본어)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="},
     {"text": "Scholarship list (2027 / English)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"},
     {"text": "사비 유학생을 위한 장학금(제도 개요)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"},
     {"text": "Scholarship Guidebook(신청서 작성·면접)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"},
     {"text": "응모 절차 해설 자료", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"},
     {"text": "교내 선고 절차와 필요 서류", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/On-campus-selection.pdf"},
     {"text": "장학금 Q&A", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"},
     {"text": "국비 외국인 유학생(제도 설명)", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"},
     {"text": "국비: 지급 기간 연장 신청", "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/2ffc084a7bc89c0ce517807396d55ecf.pdf"},
     {"text": "JASSO 학습장려비", "url": "https://www.jasso.go.jp/ryugaku/scholarship_j/shoreihi/index.html"}]},
  "a95dcb": {"text": "**이 페이지 내용을 다음 연도 일정으로 그대로 쓰지 마세요.** 이름·금액·마감일은 매년 바뀌고, 공식 목록도 해당 연도만 싣습니다. 새 연도가 되면 Global Gateways 목록에서 다시 확인하세요."},
  "a6bbc9": {"text": "상담 창구: **국제부 유학과 유학생계(사비 유학생 장학금)** `intlr-pscholar@jimu.kyushu-u.ac.jp`. "
                     "학습장려비는 **소속 학부·대학원 사무실**로."},
  "f18522": {"title": "2027년도·전 10건"},
  "8557ac": {"title": "2026년도·전 67건"},
 },
}

# ---- 组装 ----
def translated(lang, bid_):
    b = blocks[bid_]
    if b["type"] == "collapse":
        return {"title": TR[lang][bid_]["title"]}
    if b.get("headers"):
        return table_tr(b, lang)
    return TR[lang].get(bid_)

def build_lang(lang):
    obj = {}
    for bid_ in blocks:
        v = translated(lang, bid_)
        if v is not None:
            obj[bid_] = v
    return obj

new = {lang: build_lang(lang) for lang in ("ja", "en", "ko")}
TMP = os.path.join(ROOT, "tools", ".scholarship_i18n.json")
json.dump(new, open(TMP, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# title / summary 译文
entry = {
 "ja": {"title": "奨学金（私費・国費）",
        "summary": "私費留学生が応募できる民間財団の奨学金（2 つの応募ルート・併給と日本語の壁）、2026/2027 年度の公式一覧（募集中と締切つき）、"
                   "国費外国人留学生 4 種別と月額、学習奨励費 48,000 円/月、それぞれの窓口。"},
 "en": {"title": "Scholarships (private & government)",
        "summary": "Foundation scholarships open to privately financed students (two routes, double-dipping and Japanese-language gates), "
                   "the official FY2026/2027 lists with what is open now and deadlines, the four MEXT categories and stipends, "
                   "the 48,000 JPY/month Study Incentive Grant, and each counter."},
 "ko": {"title": "장학금(사비·국비)",
        "summary": "사비 유학생이 신청할 수 있는 재단 장학금(두 경로·중복 수급과 일본어 장벽), 2026/2027년도 공식 목록(모집 중 항목과 마감일), "
                   "국비 외국인 유학생 4개 구분과 월액, 학습장려비 48,000엔/월, 각 창구."},
}
TMP2 = os.path.join(ROOT, "tools", ".scholarship_nav_i18n.json")
json.dump(entry, open(TMP2, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("blocks/lang:", {l: len(v) for l, v in new.items()})
print("payload:", TMP, TMP2)

