// data-newcomer-zone.js — 新生专区（首页顶部的时间线导航）
//
// 定位：服务"刚到日本"的人 —— 不复制正文，只把散在各篇里的关键步骤
// 按**时间顺序**串起来，每条用 ?sec=<区块ID> 深链到对应小节。
//
// 为什么用区块 ID 而不是标题文本：标题会随界面语言变（日/英/韩译本），
// ID 不会；也不用维护 4 份标题对照表。
// 校验：tools/check_newcomer_zone.js（ID 必须真实存在，否则链接点不动）
//
// 只放 5×3=15 条，按可读性预算 —— 这不是目录，是"接下来做什么"的短清单。
window.NEWCOMER_ZONE = {
  "stages": [
    {
      "id": "before", "icon": "✈️",
      "label": { "zh": "来日前", "ja": "来日前", "en": "Before you fly", "ko": "출국 전" },
      "items": [
        { "ref": "guide-firstmonth", "sec": "125163",
          "text": { "zh": "三样东西到了日本很难补", "ja": "日本で揃えにくい 3 点", "en": "Three things hard to get later", "ko": "일본에서 구하기 어려운 3가지" } },
        { "ref": "guide-entry", "sec": "92d7fe",
          "text": { "zh": "行李·被褥·印章", "ja": "荷物・寝具・印鑑", "en": "Luggage, bedding, seal", "ko": "짐·침구·도장" } },
        { "ref": "guide-housing", "sec": "0785ee",
          "text": { "zh": "宿舍怎么申请", "ja": "寮の申請方法", "en": "How to apply for dorms", "ko": "기숙사 신청 방법" } },
        { "ref": "guide-phone", "sec": "72f94d",
          "text": { "zh": "先买临时上网卡", "ja": "まず一時的な SIM を", "en": "Get a temporary SIM first", "ko": "임시 SIM 먼저" } },
        { "ref": "guide-entry", "sec": "9bc5f2",
          "text": { "zh": "入境与在留卡", "ja": "入国と在留カード", "en": "Arrival and residence card", "ko": "입국과 재류카드" } }
      ]
    },
    {
      "id": "arrival", "icon": "🛬",
      "label": { "zh": "落地头 3 天", "ja": "到着後 3 日", "en": "First 3 days", "ko": "도착 후 3일" },
      "items": [
        { "ref": "guide-entry", "sec": "8e952c",
          "text": { "zh": "办理的先后顺序", "ja": "手続きの順番", "en": "Order of procedures", "ko": "수속 순서" } },
        { "ref": "guide-newcomer", "sec": "3e4f5a",
          "text": { "zh": "机场穿梭巴士", "ja": "空港シャトルバス", "en": "Airport shuttle bus", "ko": "공항 셔틀버스" } },
        { "ref": "guide-firstmonth", "sec": "ca70c6",
          "text": { "zh": "住址登记（一切的前提）", "ja": "住居登録（すべての前提）", "en": "Address registration (the key step)", "ko": "주소 등록(모든 것의 전제)" } },
        { "ref": "guide-bank", "sec": "9fb1a4",
          "text": { "zh": "银行开户要带的", "ja": "口座開設の持ち物", "en": "What to bring to the bank", "ko": "은행 개설 준비물" } },
        { "ref": "guide-phone", "sec": "57ee3f",
          "text": { "zh": "选 SIM 卡", "ja": "SIM を選ぶ", "en": "Choosing a SIM", "ko": "SIM 선택" } }
      ]
    },
    {
      "id": "firstmonth", "icon": "📅",
      "label": { "zh": "30 天内", "ja": "30 日以内", "en": "Within 30 days", "ko": "30일 이내" },
      "items": [
        { "ref": "guide-firstmonth", "sec": "41022a",
          "text": { "zh": "手续依赖表：谁挡着谁", "ja": "手続きの依存関係", "en": "What blocks what", "ko": "무엇이 무엇을 막는가" } },
        { "ref": "guide-firstmonth", "sec": "dcdc27",
          "text": { "zh": "最容易漏掉的三件", "ja": "最も漏れやすい 3 件", "en": "Three most-missed items", "ko": "가장 빠뜨리기 쉬운 3가지" } },
        { "ref": "guide-medical", "sec": "a955e0",
          "text": { "zh": "国民健康保险", "ja": "国民健康保険", "en": "National health insurance", "ko": "국민건강보험" } },
        { "ref": "guide-transport", "sec": "397485",
          "text": { "zh": "自行车：买·骑·处分", "ja": "自転車：買う・乗る・捨てる", "en": "Bicycles: buy, ride, dispose", "ko": "자전거: 구입·이용·처분" } },
        { "ref": "guide-antifraud", "sec": "3743ca",
          "text": { "zh": "防骗核心原则", "ja": "詐欺対策の原則", "en": "Core anti-fraud rules", "ko": "사기 방지 원칙" } }
      ]
    }
  ]
};
