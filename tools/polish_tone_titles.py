#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""语气专项 · 第二批：100% 译文篇目的板块标题（四语）

这些篇目（academic / entry / emergency / firstmonth / scholarship / career）三语齐全，
改中文必须连带 ja/en/ko，否则各语言界面显示的标题会不一致。

改的仍是同类病灶：反问句（「证明书怎么开」「遭遇诈骗怎么办」）、
口语动词（「先确认」「要带的」「安顿下来」「别忘」）、
比喻式表达（「是所有事的开关」「和别处不一样」「三样东西很难补」）。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (文章, 旧中文标题, 新中文, ja, en, ko)
T = [
 ("guide-academic", "学年历：先确认自己看的是哪一份", "学年历：确认适用版本",
  "学年暦：適用版の確認", "Academic calendar: check which version applies", "학사력: 적용 버전 확인"),
 ("guide-academic", "证明书怎么开", "证明书申请方式",
  "証明書の申請方法", "How to request certificates", "증명서 신청 방법"),
 ("guide-entry", "从机场到伊都：先确认有没有接驳车", "从机场到伊都：接驳车确认",
  "空港から伊都へ：シャトルバスの確認", "Airport to Ito: checking the shuttle", "공항에서 이토: 셔틀버스 확인"),
 ("guide-entry", "出发前：先把零钱准备好", "出发前：准备零钱",
  "出発前：小銭の準備", "Before departure: prepare coins", "출발 전: 소액 동전 준비"),
 ("guide-entry", "到达宿舍：当天几点到都可以入住", "到达宿舍：当天任意时间可入住",
  "寮到着：当日は何時でも入居可", "Arriving at the dorm: check in any time that day", "기숙사 도착: 당일 아무 때나 입주 가능"),
 ("guide-firstmonth", "出发前：三样东西到了日本很难补", "出发前：到日本后难以补办的 3 类物品",
  "出発前：日本で入手しにくい 3 点", "Before departure: three items hard to obtain in Japan",
  "출국 전: 일본에서 구하기 어려운 3가지"),
 ("guide-firstmonth", "落地当天：机场能办的两件事", "落地当天：机场可办理的 2 项",
  "到着当日：空港でできる 2 件", "Arrival day: two things to do at the airport", "도착 당일: 공항에서 처리할 2가지"),
 ("guide-firstmonth", "第一周：住址登记是所有事的开关", "第一周：住址登记（其他手续的前提）",
  "1 週目：住居登録（他の手続きの前提）", "Week one: address registration (prerequisite for other procedures)",
  "1주차: 주소 등록(다른 수속의 전제)"),
 ("guide-firstmonth", "谁挡着谁：手续依赖表", "手续依赖关系",
  "手続きの依存関係", "Procedure dependencies", "수속 의존 관계"),
 ("guide-firstmonth", "第一个月：最容易漏掉的三件", "第一个月：最易遗漏的 3 项",
  "1 か月目：漏れやすい 3 項目", "First month: the three most-missed items", "첫 달: 가장 빠뜨리기 쉬운 3가지"),
 ("guide-firstmonth", "安顿下来之后", "安顿之后的安排",
  "落ち着いてからの予定", "After you have settled in", "안정된 이후의 일정"),
 ("guide-firstmonth", "出事时打哪个电话", "紧急联系电话",
  "緊急時の連絡先", "Emergency contacts", "긴급 연락처"),
 ("guide-firstmonth", "还有一篇也请先看", "延伸阅读",
  "あわせてお読みください", "Related reading", "함께 읽을 자료"),
 ("guide-emergency", "遭遇诈骗怎么办（被骗后应急处理）", "遭遇诈骗后的应急处理",
  "詐欺に遭ったときの応急対応", "What to do after a fraud incident", "사기를 당한 후의 응급 대응"),
 ("guide-scholarship", "现在能申请的（7 件）", "当前可申请（7 件）",
  "現在応募できるもの（7 件）", "Currently open for application (7)", "현재 신청 가능(7건)"),
 ("guide-scholarship", "申请前必须懂的 5 件事", "申请前需知的 5 个要点",
  "応募前に知っておくべき 5 点", "Five points to know before applying", "신청 전 알아야 할 5가지"),
 ("guide-career", "日本就活和别处不一样", "日本就职活动的特点",
  "日本の就職活動の特徴", "Features of job hunting in Japan", "일본 취업활동의 특징"),
 ("guide-career", "三道关，难点各不同", "三道选考关卡",
  "3 つの選考段階", "Three selection stages", "3가지 전형 단계"),
 ("guide-career", "内定之后别忘两件事", "内定之后的两项手续",
  "内定後の 2 つの手続き", "Two procedures after a job offer", "내정 후 두 가지 수속"),
 ("guide-career", "时间表：一年只有一次", "时间表：每年一次",
  "スケジュール：年 1 回", "Schedule: once a year", "일정: 연 1회"),
]

def allb(bs, o=None):
    o = [] if o is None else o
    for b in bs:
        o.append(b)
        if b.get("blocks"): allb(b["blocks"], o)
    return o

# ① 中文正文
byart = {}
for a, *_ in T: byart.setdefault(a, []).append(_)
done = 0
for art in sorted(byart):
    P = os.path.join(ROOT, "content", art + ".json")
    d = json.load(open(P, encoding="utf-8")); F = allb(d["blocks"])
    for _, old, new, *_ in [x for x in T if x[0] == art]:
        hit = next((b for b in F if b.get("type") in ("heading", "subheading")
                    and (b.get("text") or "").strip() == old), None)
        assert hit, "%s 未找到标题: %s" % (art, old)
        hit["text"] = new; done += 1
    json.dump(d, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("%-18s %d 个标题" % (art, len([x for x in T if x[0] == art])))
print("中文标题改写 %d 个\n" % done)

# ② 三语译本：按「文章 → 语言 → 块id」重建
import hashlib
def bid(*p): return hashlib.md5(("|".join(p)).encode("utf-8")).hexdigest()[:6]
payload = {}
for art in sorted(byart):
    d = json.load(open(os.path.join(ROOT, "content", art + ".json"), encoding="utf-8"))
    F = allb(d["blocks"])
    for _, old, new, ja, en, ko in [x for x in T if x[0] == art]:
        b = next(x for x in F if x.get("text") == new)
        payload.setdefault(art, {})
        for L, v in (("ja", ja), ("en", en), ("ko", ko)):
            payload[art].setdefault(L, {})[b["id"]] = {"text": v}
    fp = os.path.join(ROOT, "tools", ".tone_%s.json" % art)
    json.dump(payload[art], open(fp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("payload →", os.path.basename(fp))
