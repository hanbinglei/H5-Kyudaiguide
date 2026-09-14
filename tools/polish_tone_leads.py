#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""语气专项 · 第三批：11 篇开篇段（四语）

开篇段是读者第一眼看到的内容，也是口语化最集中的地方 ——
「让你知道该怎么办」「先看」「按需要挑着看就行」「最常栽的两点」这类。
改为陈述式说明体；不再用第二人称「你」，改为无主语或「读者」。

四语同步（这 11 篇中 academic/firstmonth 等篇目译文齐全，其余篇目只改中文）。
"""
import json, os, hashlib, io

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]

# 文章 → (新中文, ja, en, ko)
NEW = {
 "guide-antifraud": (
  "本文的目的：遇到可疑情况时知道如何应对。首要两条 —— 不转账、不透露个人信息；事发后立即拨打文末第一个电话。",
  "本ページの目的：不審に思ったときの対応を知ること。まず 2 点 —— 送金しない、個人情報を伝えない。被害に遭ったら末尾の最初の電話番号へ。",
  "Purpose of this page: knowing how to respond when something looks suspicious. Two rules first - do not transfer money, do not disclose personal information. If it happens, call the first number at the end.",
  "이 페이지의 목적: 수상할 때의 대응을 아는 것. 우선 두 가지 —— 송금하지 않기, 개인정보 알려주지 않기. 피해를 입으면 마지막의 첫 전화번호로 연락하세요."),
 "guide-bank": (
  "开户、缴纳房租学费、办理信用卡、汇款回国 —— 按实际办理顺序编排。**建议先读「去银行前」一节**，印章与营业时间是最常见的两个问题。",
  "口座開設・家賃や学費の支払い・クレジットカード・海外送金 —— 実際の手続き順に構成しています。**まず「銀行に行く前に」をお読みください**。印鑑と営業時間が最も多いつまずきです。",
  "Opening an account, paying rent and tuition, credit cards, sending money home - arranged in the order you will actually handle them. **Read \"Before you go to the bank\" first**: the seal and the opening hours are the two most common stumbling blocks.",
  "계좌 개설, 월세·학비 납부, 신용카드, 해외 송금 —— 실제 수속 순서대로 구성했습니다. **먼저 「은행에 가기 전에」를 읽어 주세요.** 도장과 영업시간이 가장 흔한 걸림돌입니다."),
 "guide-housing": (
  "校内宿舍与市区租房是两条路径，**建议先考虑宿舍** —— 费用低、手续简单、无需保证人。本文说明选择方法、初期费用与合同注意事项。",
  "学内寮と民間賃貸は別のルートです。**まず寮を検討してください** —— 費用が低く、手続きが簡単で、保証人も不要です。選び方、初期費用、契約の注意点を扱います。",
  "Dormitories and private rentals are two different routes. **Consider the dorms first** - lower cost, simpler paperwork, no guarantor. This page covers how to choose, upfront costs and contract points to check.",
  "교내 기숙사와 민간 임대는 다른 경로입니다. **먼저 기숙사를 검토하세요** —— 비용이 낮고 절차가 간단하며 보증인도 불필요합니다. 선택 방법, 초기 비용, 계약 유의점을 다룹니다."),
 "guide-life": (
  "垃圾分类、天气、邮筒、食堂、生协 —— 这些内容没有专门课程讲授，但日常频繁使用。可按需查阅。",
  "ゴミ分別・天気・ポスト・食堂・生協 —— これらは専門の講義があるわけではありませんが、日常で頻繁に使うものです。必要な項目をご参照ください。",
  "Waste sorting, weather, post boxes, canteens, the co-op - none of these is taught in a class, but all are used daily. Read the sections you need.",
  "쓰레기 분리배출, 날씨, 우체통, 식당, 생협 —— 별도의 강의가 있는 것은 아니지만 일상에서 자주 쓰입니다. 필요한 항목을 참고하세요."),
 "guide-medical": (
  "在日本就诊前需确认三件事：是否已加入国民健康保险、前往哪家医院、是否支持中文。本文把保险、学研災、ESP 与中文医疗咨询热线连成一条线。",
  "日本で受診する前に 3 点を確認してください：国民健康保険に加入しているか、どの病院に行くか、中国語が通じるか。保険・学研災・ESP・中国語医療相談を一本につないだページです。",
  "Before seeing a doctor in Japan, confirm three things: whether you are covered by national health insurance, which hospital to visit, and whether Chinese is supported. This page links insurance, Gakkensai, ESP and the Chinese-language medical hotline.",
  "일본에서 진료를 받기 전 세 가지를 확인하세요: 국민건강보험 가입 여부, 어느 병원에 갈지, 중국어 지원 여부. 보험·학켄사이·ESP·중국어 의료 상담을 한 줄로 연결했습니다."),
 "guide-newcomer": (
  "2026 年秋入学者的全部支持信息：机场接驳、宿舍入住、Wi-Fi、行政手续、オリエンテーション、银行开户会、ESP。**建议先看日程总览**，再按需展开。",
  "2026 年秋入学者向けの支援情報をまとめました：空港シャトル、寮の入居、Wi-Fi、行政手続き、オリエンテーション、口座開設会、ESP。**まず日程総覧をご覧ください**。以降は必要な項目を開いてください。",
  "All support information for autumn 2026 entrants: airport shuttle, dormitory check-in, Wi-Fi, administrative procedures, orientation, the bank account session, ESP. **Start with the schedule overview**, then open what you need.",
  "2026년 가을 입학자 지원 정보를 정리했습니다: 공항 셔틀, 기숙사 입주, Wi-Fi, 행정 수속, 오리엔테이션, 계좌 개설회, ESP. **먼저 일정 개요를 확인하세요.** 이후 필요한 항목을 펼치세요."),
 "guide-parttime": (
  "打工前需完成两道手续：**资格外活动许可**（未取得不得打工）与税・年金。本文说明工时上限、求职渠道与工资拖欠的应对。",
  "アルバイトには 2 つの手続きが必要です：**資格外活動許可**（未取得では働けません）と税・年金。労働時間の上限、探し方、賃金未払いへの対応を扱います。",
  "Two procedures come before part-time work: the **permission to engage in activity other than that permitted** (required to work) and tax/pension. This page covers hour limits, how to find work, and unpaid wages.",
  "아르바이트 전에 두 가지 수속이 필요합니다: **자격외활동 허가**(없으면 근무 불가)와 세금·연금. 근무 시간 상한, 구하는 방법, 임금 체불 대응을 다룹니다."),
 "guide-phone": (
  "到日本后首要解决通信问题。**建议先准备临时上网卡过渡**，落地后再选择正式套餐 —— 本文比较三大运营商与格安 SIM，并说明解约注意事项。",
  "来日後はまず通信の確保が必要です。**まず一時的な SIM を用意してつなぎ**、落ち着いてから本契約を —— 大手 3 社と格安 SIM を比較し、解約時の注意点を説明します。",
  "Connectivity is the first thing to arrange in Japan. **Prepare a temporary SIM as a stopgap**, then choose a proper plan once settled - this page compares the big three with budget SIMs and covers cancellation.",
  "일본에서 가장 먼저 해결할 것은 통신입니다. **임시 SIM을 준비해 연결한 뒤** 안정되면 정식 요금제를 —— 대형 3사와 알뜰 SIM을 비교하고 해지 시 유의점을 설명합니다."),
 "guide-residence": (
  "住址登记是所有手续的起点 —— **未完成则无法开设银行账户、办理手机**。本文先区分区役所与入管局，再依次说明住址登记、在留更新、My Number 与健康保险。",
  "住居登録はすべての手続きの起点です —— **未完了では口座開設も携帯契約もできません**。まず区役所と入管局を切り分け、住居登録・在留更新・マイナンバー・健康保険の順に説明します。",
  "Address registration is the starting point for every other procedure - **without it you cannot open a bank account or get a phone**. This page first separates the ward office from immigration, then walks through address registration, visa renewal, My Number and health insurance.",
  "주소 등록은 모든 수속의 출발점입니다 —— **완료하지 않으면 계좌 개설도 휴대폰 개통도 불가능합니다**. 먼저 구청과 출입국을 구분하고, 주소 등록·재류 갱신·마이넘버·건강보험 순으로 설명합니다."),
 "guide-shopping": (
  "日常购物地点、省钱方式与**需避开的陷阱**（二手平台、代购、分期合约）。可按需查阅。",
  "日々の買い物先、節約の方法、**避けるべき罠**（フリマ、代行購入、分割契約）。必要な項目をご参照ください。",
  "Where to shop day to day, how to save, and **the traps to avoid** (marketplace apps, proxy buying, instalment contracts). Read the sections you need.",
  "일상 쇼핑 장소, 절약 방법, **피해야 할 함정**(중고 플랫폼, 대행 구매, 할부 계약). 필요한 항목을 참고하세요."),
 "guide-transport": (
  "从宿舍到学校、前往天神博多、购买自行车、考取驾照 —— **建议先确定日常路线**，再决定购票方案。本文并列比较票价、定期券、折扣券与省钱方案。",
  "寮から大学へ、天神・博多へ、自転車の購入、免許の取得 —— **まず日常の経路を決めてから**切符の種類を選んでください。運賃・定期券・割引きっぷ・節約案を並べて比較しています。",
  "Dorm to campus, trips to Tenjin and Hakata, buying a bicycle, obtaining a licence - **settle your daily route first**, then choose the ticket option. Fares, commuter passes, discount tickets and money-saving options compared side by side.",
  "기숙사에서 학교까지, 덴진·하카타 방면, 자전거 구입, 면허 취득 —— **먼저 일상 경로를 정한 뒤** 승차권 방식을 결정하세요. 운임·정기권·할인권·절약안을 나란히 비교했습니다."),
}

for art, (zh, ja, en, ko) in NEW.items():
    P = os.path.join(ROOT, "content", art + ".json")
    d = json.load(open(P, encoding="utf-8"))
    lead = d["blocks"][0]
    assert lead["type"] == "paragraph" and lead["id"] == bid(art, "lead"), (art, lead.get("id"))
    old = lead["text"]
    lead["text"] = zh
    json.dump(d, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    fp = os.path.join(ROOT, "tools", ".lead2_%s.json" % art)
    json.dump({L: {lead["id"]: {"text": v}} for L, v in (("ja", ja), ("en", en), ("ko", ko))},
              open(fp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("%-18s %d → %d 字" % (art, len(old), len(zh)))
