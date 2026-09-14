#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可读性清理 · 第一批：给 11 篇补「30 秒结论」开篇段（≤130 字）。

为什么优先做这批：这是唯一的 🔴 类告警 —— 读者点进文章第一屏没有「这篇帮我做什么」，
只能自己从目录猜。补齐后每篇开头一句话说清价值与读法。

做法：在 blocks[0] 之前插入一个 paragraph；译文 payload 同步输出。
"""
import json, os, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LEAD = {
 "guide-antifraud": {
   "zh": "这篇只做一件事：让你遇到可疑情况时**知道该怎么办**。先记两条 —— 不转账、不透露个人信息；出事立刻打文末第一个电话。",
   "ja": "このページの目的は 1 つ：怪しいと思ったときに**どう動くか**が分かること。まず 2 つだけ覚えてください —— 送金しない、個人情報を渡さない。困ったら末尾の最初の電話へ。",
   "en": "This page does one thing: make sure you **know what to do** when something looks suspicious. Remember two rules first - never transfer money, never hand over personal details; if it happens, call the first number at the end.",
   "ko": "이 페이지의 목적은 하나입니다: 수상하다고 느낄 때 **어떻게 해야 하는지** 아는 것. 우선 두 가지만 기억하세요 —— 송금하지 않기, 개인정보 넘기지 않기. 문제가 생기면 마지막의 첫 번째 전화번호로."},
 "guide-bank": {
   "zh": "开户、交房租学费、办信用卡、汇款回国 —— 这篇按你实际会遇到的顺序讲。**先读「去银行前」那节**，印章和营业时间是最常栽的两点。",
   "ja": "口座開設・家賃や学費の支払い・クレジットカード・海外送金 —— 実際に遭遇する順に並べました。**まず「銀行に行く前に」を読んで**ください。印鑑と営業時間が最もよく引っかかる 2 点です。",
   "en": "Opening an account, paying rent and tuition, credit cards, sending money home - in the order you will actually meet them. **Read \"Before you go to the bank\" first**: the seal and the opening hours are the two most common traps.",
   "ko": "계좌 개설, 월세·학비 납부, 신용카드, 해외 송금 —— 실제로 마주치는 순서대로 정리했습니다. **먼저 「은행에 가기 전에」를 읽으세요.** 도장과 영업시간이 가장 자주 걸리는 두 가지입니다."},
 "guide-housing": {
   "zh": "校内宿舍和市区租房是两条路，**先看宿舍** —— 便宜、手续简单、不用保证人。这篇讲怎么选、初期要花多少、合同里该看什么。",
   "ja": "学内寮と民間賃貸は別ルートです。**まず寮を検討してください** —— 安く、手続きが簡単で、保証人も不要。このページでは選び方、初期費用、契約で確認すべき点を扱います。",
   "en": "Dormitories and private rentals are two different routes - **check the dorms first**: cheaper, simpler paperwork, no guarantor. This page covers how to choose, upfront costs, and what to check in the contract.",
   "ko": "교내 기숙사와 민간 임대는 다른 경로입니다. **먼저 기숙사를 보세요** —— 저렴하고 절차가 간단하며 보증인도 불필요. 이 페이지는 선택 방법, 초기 비용, 계약서에서 확인할 점을 다룹니다."},
 "guide-life": {
   "zh": "垃圾分类、天气、邮筒、食堂、生协 —— 这些没人专门教你，但每天都要用。按需要挑着看就行。",
   "ja": "ゴミ分別・天気・ポスト・食堂・生協 —— 誰も教えてくれませんが毎日使うものです。必要なところだけ拾い読みしてください。",
   "en": "Waste sorting, weather, post boxes, canteens, the co-op - nobody teaches these, but you use them daily. Pick the sections you need.",
   "ko": "쓰레기 분리배출, 날씨, 우체통, 식당, 생협 —— 아무도 가르쳐주지 않지만 매일 쓰는 것들입니다. 필요한 부분만 골라 보세요."},
 "guide-medical": {
   "zh": "在日本看病**先确认三件事**：有没有国民健康保险、去哪家医院、能不能用中文。这篇把保险、学研災、ESP 与中文医疗热线串成一条线。",
   "ja": "日本で受診する前に**3 つ確認**してください：国民健康保険に入っているか、どの病院に行くか、中国語が通じるか。保険・学研災・ESP・多言語医療相談を一本につなげたページです。",
   "en": "Before seeing a doctor in Japan, **confirm three things**: are you covered by national health insurance, which hospital to go to, and whether Chinese is supported. This page links insurance, Gakkensai, ESP and the multilingual medical hotline.",
   "ko": "일본에서 진료를 받기 전 **세 가지를 확인**하세요: 국민건강보험 가입 여부, 어느 병원에 갈지, 중국어가 통하는지. 보험·학켄사이·ESP·다국어 의료 상담을 한 줄로 연결했습니다."},
 "guide-newcomer": {
   "zh": "2026 年秋入学者的全部支持信息：机场接驳、宿舍入住、Wi-Fi、行政手续、オリエンテーション、银行开户会、ESP。**先看日程总览**，再按需要展开。",
   "ja": "2026 年秋入学者向けの支援情報をまとめました：空港シャトル、寮の入居、Wi-Fi、行政手続き、オリエンテーション、口座開設会、ESP。**まず日程総覧**を見て、必要な項目を開いてください。",
   "en": "Everything for autumn 2026 entrants: airport shuttle, dormitory check-in, Wi-Fi, administrative procedures, orientation, the bank account session, ESP. **Start with the schedule overview**, then open what you need.",
   "ko": "2026년 가을 입학자 지원 정보 총정리: 공항 셔틀, 기숙사 입주, Wi-Fi, 행정 수속, 오리엔테이션, 계좌 개설회, ESP. **먼저 일정 개요**를 보고 필요한 항목을 펼치세요."},
 "guide-parttime": {
   "zh": "打工要先过两道手续：**资格外活动许可**（没有它不能打工）和税・年金。这篇讲能打多久、怎么找、被拖欠工资怎么办。",
   "ja": "アルバイトには 2 つの手続きが必要です：**資格外活動許可**（これがないと働けません）と税・年金。働ける時間、探し方、賃金未払い時の対処を扱います。",
   "en": "Part-time work needs two steps first: the **permission to engage in activity other than that permitted** (without it you cannot work) and tax/pension. This page covers hour limits, how to find work, and unpaid wages.",
   "ko": "아르바이트에는 두 가지 수속이 필요합니다: **자격외활동 허가**(없으면 일할 수 없음)와 세금·연금. 근무 시간 한도, 구하는 방법, 임금 체불 대처를 다룹니다."},
 "guide-phone": {
   "zh": "到日本第一件事是能上网。**先买临时上网卡过渡**，落地后再选正式套餐 —— 这篇比较三大运营商与格安 SIM，以及解约要注意什么。",
   "ja": "来日して最初に必要なのは通信です。**まず一時的な SIM でつなぎ**、落ち着いてから本契約を —— 大手 3 社と格安 SIM の違い、解約時の注意を扱います。",
   "en": "The first thing you need in Japan is connectivity. **Get a temporary SIM first**, then choose a proper plan once you have settled - this page compares the big three with budget SIMs and covers cancellation.",
   "ko": "일본에서 가장 먼저 필요한 것은 통신입니다. **임시 SIM으로 연결한 뒤** 안정되면 정식 요금제를 —— 대형 3사와 알뜰 SIM의 차이, 해지 시 주의점을 다룹니다."},
 "guide-residence": {
   "zh": "住所登录是所有手续的开关 —— **没它开不了银行账户、办不了手机**。这篇先分清「区役所 vs 入管局」，再走住所登录、在留更新、My Number、健康保险。",
   "ja": "住居登録がすべての起点です —— **これがないと口座も携帯も作れません**。まず「区役所 vs 入管局」を切り分け、住居登録・在留更新・マイナンバー・健康保険と進みます。",
   "en": "Registering your address unlocks everything else - **without it you cannot open a bank account or get a phone**. This page first separates ward office from immigration, then walks through address registration, visa renewal, My Number and health insurance.",
   "ko": "주소 등록이 모든 수속의 시작입니다 —— **없으면 계좌도 휴대폰도 만들 수 없습니다**. 먼저 「구청 vs 출입국」을 구분하고, 주소 등록·재류 갱신·마이넘버·건강보험 순으로 진행합니다."},
 "guide-shopping": {
   "zh": "日常购物去哪、怎么省钱、**哪些坑要避**（二手平台、代购、分期合约）。按需要挑着看。",
   "ja": "日々の買い物はどこで、どう節約するか、**どんな罠を避けるか**（フリマ、代行購入、分割契約）。必要なところだけ読んでください。",
   "en": "Where to shop day to day, how to save, and **which traps to avoid** (marketplace apps, proxy buying, instalment contracts). Read the parts you need.",
   "ko": "일상 쇼핑은 어디서, 어떻게 아끼는지, **어떤 함정을 피할지**(중고 플랫폼, 대행 구매, 할부 계약). 필요한 부분만 보세요."},
 "guide-transport": {
   "zh": "从宿舍到学校、去天神博多、买自行车、考驾照 —— **先算清自己每天走哪条线**，再决定买什么票。这篇把票价、定期券、折扣券与省钱方案摆在一起比较。",
   "ja": "寮から大学へ、天神・博多へ、自転車、免許 —— **まず毎日の経路を決めてから**切符を選んでください。運賃・定期券・割引きっぷ・節約案を並べて比較しています。",
   "en": "Dorm to campus, trips to Tenjin and Hakata, bicycles, driving licences - **work out your daily route first**, then decide which ticket to buy. Fares, commuter passes, discount tickets and money-saving options compared side by side.",
   "ko": "기숙사에서 학교까지, 덴진·하카타, 자전거, 면허 —— **먼저 매일 다닐 경로를 정하고** 표를 고르세요. 운임·정기권·할인권·절약안을 나란히 비교했습니다."},
}
assert len(LEAD) == 11, len(LEAD)

payload = {}
changed = []
for art_id, texts in LEAD.items():
    p = os.path.join(ROOT, "content", art_id + ".json")
    d = json.load(open(p, encoding="utf-8"))
    assert d["blocks"][0].get("type") != "paragraph" or not d["blocks"][0].get("text", "").startswith(texts["zh"][:12]), \
        f"{art_id} 已插入过"
    bid = hashlib.md5((art_id + "|lead").encode("utf-8")).hexdigest()[:6]
    if any(b.get("id") == bid for b in d["blocks"]):
        print("  跳过（已有开篇）", art_id); continue
    assert len(texts["zh"]) <= 130, (art_id, len(texts["zh"]))
    d["blocks"].insert(0, {"id": bid, "type": "paragraph", "text": texts["zh"]})
    json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    payload[art_id] = {l: {"text": texts[l]} for l in ("ja", "en", "ko")}
    changed.append((art_id, bid, len(texts["zh"])))

# index.json 的 blocks 计数同步
idx = json.load(open(os.path.join(ROOT, "content", "index.json"), encoding="utf-8"))
for a in idx["articles"]:
    p = os.path.join(ROOT, a["file"])
    a["blocks"] = len(json.load(open(p, encoding="utf-8"))["blocks"])
json.dump(idx, open(os.path.join(ROOT, "content", "index.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=2)

# 译文 payload 按「文章 → 语言 → 块id → 内容」的中间格式，供 merge 用
merged = {}
for art_id, by_lang in payload.items():
    merged[art_id] = by_lang
OUT = os.path.join(ROOT, "tools", ".leads_i18n.json")
json.dump(merged, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"已给 {len(changed)} 篇插入开篇段：")
for a, i, n in changed:
    print(f"   {a:<20} id={i}  {n} 字")
print("payload:", OUT)
