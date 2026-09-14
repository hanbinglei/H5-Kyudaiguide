#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""语气专项 · 第四批：正文残留的口语化表述

「学长学姐」「别人的攻略」「别搞混」「你质疑两句他就恼羞成怒」
「想避开日语授课的话先看」「老生可代为转达」这类。
译文齐全的篇目（entry / firstmonth / academic / scholarship）三语同步。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (文章, 块id, 新中文)
ZH = [
 ("guide-entry", "a6a23c", "九大会为新生安排 Supporter（在校生），在出发前通过邮件联系。建议尽快回复并交换 LINE / WeChat。Supporter 可协助办理入住、区役所登记、银行开户等手续。"),
 ("guide-entry", "62e9c1", "入住宿舍后的头两周左右，学校会安排「生活支援バス」，供尚未有交通工具的新生采买生活用品。该名称会出现在各类通知中 —— 它不是常设线路，而是每期为新生单独安排的临时接驳。"),
 ("guide-entry", "041128", "**运行日期、班次与路线每期不同，由各宿舍与各学府分别通知。** 上表仅列停靠点 —— 具体发车时间与目的地以收到的宿舍或学府通知为准，请勿沿用往年的安排。"),
 ("guide-firstmonth", "6d60e7", "若从**非指定机场**（那霸、鹿儿岛、静冈等地方机场）入境，机场只发「在留卡预定交付通知」，在留卡将在住民登记完成后 1〜2 周邮寄至登记住址 —— 期间所有需要在留卡的手续均无法办理。经福冈入境无此问题。见【入境准备】"),
 ("guide-academic", "4d947b", "九大开设**大量英语授课科目**。2026 年度交换留学生可听讲的科目有单独清单，如需避开日语授课，可先查阅该清单。"),
 ("guide-scholarship", "887b6a", "**学内选考**交国際部留学課留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp`。学習奨励費（私費対象・月 48,000 円）则须向**所属学部／学府的学務係**申请，两者勿混淆。"),
 ("guide-life", "faabed", "ミールプリペ 的返利档位在 2026 年调整过，低档位的比例明显下降 —— 充得少反而不划算。充值前请先确认官方最新的档位表再决定金额，请勿沿用旧攻略中的数字。现行各档充值额与返利额见官网：https://www.coop.kyushu-u.ac.jp/e-money/index.html"),
 ("guide-life", "d7dc2a", "流程：拍照 → 报宿管 → 提供房间号。可由在校生代为转达，宿管随后联系本人。福冈潮湿、霉菌常见，应急可先贴胶带隔离。"),
 ("guide-antifraud", "0125e2", "来自真实案例与群聊经验：直接询问口音来源（明显某地区口音多为诈骗）；用当地方言或日语回应，对方往往直接挂断；询问对方所属警局，再自行上网查找公开电话回拨核实；诈骗者急于成交，被追问细节时容易失态。最关键的是保护银行信息 —— 保管好卡号与密码。"),
]

# 译文齐全篇目的三语（entry / firstmonth / academic / scholarship）
TR = {
 ("guide-entry", "a6a23c"): ("九大は新入生に Supporter（在校生）を配置し、出発前にメールで連絡します。できるだけ早く返信し、LINE / WeChat を交換してください。Supporter は入居・区役所登録・口座開設などの手続きを補助します。",
  "Kyushu U. assigns each new student a Supporter (a current student) who makes contact by email before departure. Reply promptly and exchange LINE / WeChat. Supporters assist with check-in, ward office registration and opening a bank account.",
  "규슈대는 신입생에게 Supporter(재학생)를 배정해 출국 전 이메일로 연락합니다. 가능한 한 빨리 답장하고 LINE / WeChat을 교환하세요. Supporter는 입주, 구청 등록, 계좌 개설 등의 수속을 지원합니다."),
 ("guide-entry", "62e9c1"): ("寮入居後の最初の 2 週間ほど、学校は「生活支援バス」を運行します。交通手段がまだない新入生が生活用品を購入するためのものです。この名称は各種通知に現れます —— 常設路線ではなく、各期の新入生向けに個別に手配される臨時便です。",
  "For about the first two weeks after moving into a dormitory, the university runs a Life Support Bus so new students without transport can buy daily necessities. The name appears in various notices - it is not a regular route but a temporary service arranged separately for each intake.",
  "기숙사 입주 후 약 2주간 학교는 「생활지원버스」를 운행합니다. 아직 교통수단이 없는 신입생이 생활용품을 구매하기 위한 것입니다. 이 명칭은 각종 안내에 등장합니다 —— 상설 노선이 아니라 각 기수 신입생을 위해 개별 편성되는 임시 운행입니다."),
 ("guide-entry", "041128"): ("**運行日・便・経路は期ごとに異なり、各寮・各学府から個別に通知されます。** 上表は停車地のみです —— 具体的な発車時刻と行き先は、受け取った寮または学府の通知に従ってください。過年度の案内を流用しないでください。",
  "**Service dates, runs and routes differ each intake and are notified separately by each dormitory and faculty.** The table above lists stops only - for departure times and destinations, follow the notice you receive. Do not reuse previous years' arrangements.",
  "**운행일·편·경로는 기수마다 다르며 각 기숙사와 학부에서 개별 통지됩니다.** 위 표는 정차 지점만입니다 —— 구체적인 출발 시각과 행선지는 받은 기숙사 또는 학부 안내를 따르세요. 지난 연도의 안내를 그대로 쓰지 마세요."),
 ("guide-firstmonth", "6d60e7"): ("**指定空港以外**（那覇・鹿児島・静岡などの地方空港）から入国した場合、空港は「在留カード交付予定通知」のみを発行し、在留カードは住民登録完了後 1〜2 週間で登録住址に郵送されます —— その間、在留カードが必要な手続きは一切できません。福岡入国ではこの問題はありません。",
  "If you enter through a **non-designated airport** (Naha, Kagoshima, Shizuoka and other regional airports), the airport issues only a notice of scheduled residence card delivery; the card is mailed to your registered address 1-2 weeks after residence registration is complete - during that period no procedure requiring the card can be completed. Entering via Fukuoka avoids this.",
  "**지정 공항 외**(나하·가고시마·시즈오카 등 지방 공항)로 입국하면 공항은 「재류카드 교부 예정 통지」만 발급하며, 재류카드는 주민등록 완료 후 1~2주 뒤 등록 주소로 우송됩니다 —— 그동안 재류카드가 필요한 수속은 일절 할 수 없습니다. 후쿠오카 입국은 이 문제가 없습니다."),
 ("guide-academic", "4d947b"): ("九大は**英語による授業を多数開講**しています。2026 年度に交換留学生が聴講できる科目のリストが別途公開されています。日本語の授業を避けたい場合は、まずこのリストをご確認ください。",
  "Kyushu U. teaches **many courses in English**. A separate list covers the 2026 courses open to exchange students; if you wish to avoid Japanese-taught classes, check that list first.",
  "규슈대는 **영어 수업을 다수 개설**하고 있습니다. 2026년도 교환유학생이 청강 가능한 과목 목록이 별도로 공개되어 있습니다. 일본어 수업을 피하려면 먼저 이 목록을 확인하세요."),
 ("guide-scholarship", "887b6a"): ("**学内選考**は国際部留学課留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp` へ。学習奨励費（私費対象・月 48,000 円）は**所属学部・学府の学務係**へ申請します。両者を混同しないでください。",
  "**Internal screening** applications go to the International Student Section, International Affairs Division, `intlr-pscholar@jimu.kyushu-u.ac.jp`. The Learning Incentive Grant (for privately funded students, ¥48,000/month) is applied for at the **academic affairs office of your faculty or graduate school** - do not confuse the two.",
  "**교내 선고**는 국제부 유학과 유학생 담당 `intlr-pscholar@jimu.kyushu-u.ac.jp` 로. 학습장려비(사비 대상·월 48,000엔)는 **소속 학부·학부(대학원)의 학무계**에 신청합니다. 둘을 혼동하지 마세요."),
}

def allb(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): allb(b["blocks"], o)
    return o

for art in sorted({a for a, _, _ in ZH}):
    P = os.path.join(ROOT, "content", art + ".json")
    d = json.load(open(P, encoding="utf-8")); F = allb(d["blocks"])
    pay = {}
    for a, i, new in [x for x in ZH if x[0] == art]:
        b = next((x for x in F if x.get("id") == i), None)
        assert b, "%s/%s 未找到" % (art, i)
        b["text"] = new
        if (art, i) in TR:
            ja, en, ko = TR[(art, i)]
            pay = {L: {i: {"text": v}} for L, v in (("ja", ja), ("en", en), ("ko", ko))}
    json.dump(d, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    if pay:
        json.dump(pay, open(os.path.join(ROOT, "tools", ".tone4_%s.json" % art), "w",
                            encoding="utf-8"), ensure_ascii=False, indent=1)
    print("%-18s %d 处%s" % (art, len([x for x in ZH if x[0] == art]),
                            "（含三语）" if pay else "（中文）"))
