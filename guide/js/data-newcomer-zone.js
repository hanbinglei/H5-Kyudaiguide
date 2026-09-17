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
      "label": { "zh": "来日前", "ja": "来日前", "en": "Before departure", "ko": "출국 전", "es": "Antes de salir"},
      "items": [
        { "ref": "guide-firstmonth", "sec": "125163",
          "text": { "zh": "到日本后难以补办的 3 类物品", "ja": "日本で入手しにくい 3 点", "en": "Three items hard to obtain in Japan", "ko": "일본에서 구하기 어려운 3가지", "es": "Tres artículos difíciles de conseguir en Japón"} },
        { "ref": "guide-entry", "sec": "92d7fe",
          "text": { "zh": "行李・被褥・印章", "ja": "荷物・寝具・印鑑", "en": "Luggage, bedding and seal", "ko": "짐・침구・도장", "es": "Equipaje, ropa de cama y sello"} },
        { "ref": "guide-housing", "sec": "0785ee",
          "text": { "zh": "宿舍申请方式", "ja": "寮の申請方法", "en": "Dormitory application", "ko": "기숙사 신청 방법", "es": "Cómo solicitar el dormitorio"} },
        { "ref": "guide-phone", "sec": "72f94d",
          "text": { "zh": "抵日前准备临时上网卡", "ja": "来日前に一時 SIM を準備", "en": "Arrange a temporary SIM before arrival", "ko": "출국 전 임시 SIM 준비", "es": "Prepara una SIM temporal antes de llegar"} },
        { "ref": "guide-entry", "sec": "9bc5f2",
          "text": { "zh": "入境与在留卡", "ja": "入国と在留カード", "en": "Entry and residence card", "ko": "입국과 재류카드", "es": "Entrada y tarjeta de residencia"} }
      ]
    },
    {
      "id": "arrival", "icon": "🛬",
      "label": { "zh": "抵达后 3 天内", "ja": "到着後 3 日以内", "en": "First 3 days after arrival", "ko": "도착 후 3일 이내", "es": "Primeros 3 días tras llegar"},
      "items": [
        { "ref": "guide-entry", "sec": "8e952c",
          "text": { "zh": "手续办理顺序", "ja": "手続きの順序", "en": "Order of procedures", "ko": "수속 순서", "es": "Orden de los trámites"} },
        { "ref": "guide-newcomer", "sec": "3e4f5a",
          "text": { "zh": "机场接驳巴士", "ja": "空港シャトルバス", "en": "Airport shuttle", "ko": "공항 셔틀버스", "es": "Autobús lanzadera del aeropuerto"} },
        { "ref": "guide-firstmonth", "sec": "ca70c6",
          "text": { "zh": "住址登记（其他手续的前提）", "ja": "住居登録（他の手続きの前提）", "en": "Address registration (prerequisite for others)", "ko": "주소 등록(다른 수속의 전제)", "es": "Registro de dirección (requisito previo)"} },
        { "ref": "guide-bank", "sec": "9fb1a4",
          "text": { "zh": "银行开户所需材料", "ja": "口座開設の必要書類", "en": "Documents needed to open an account", "ko": "계좌 개설 필요 서류", "es": "Documentos para abrir una cuenta"} },
        { "ref": "guide-phone", "sec": "57ee3f",
          "text": { "zh": "SIM 卡选择", "ja": "SIM の選び方", "en": "Choosing a SIM", "ko": "SIM 선택 방법", "es": "Elegir una SIM"} }
      ]
    },
    {
      "id": "firstmonth", "icon": "📅",
      "label": { "zh": "30 天内", "ja": "30 日以内", "en": "Within 30 days", "ko": "30일 이내", "es": "Dentro de 30 días"},
      "items": [
        { "ref": "guide-firstmonth", "sec": "41022a",
          "text": { "zh": "手续依赖关系", "ja": "手続きの依存関係", "en": "Procedure dependencies", "ko": "수속 의존 관계", "es": "Dependencias entre trámites"} },
        { "ref": "guide-firstmonth", "sec": "dcdc27",
          "text": { "zh": "最易遗漏的 3 项", "ja": "漏れやすい 3 項目", "en": "Three most-missed items", "ko": "가장 빠뜨리기 쉬운 3가지", "es": "Los tres puntos que más se olvidan"} },
        { "ref": "guide-medical", "sec": "a955e0",
          "text": { "zh": "国民健康保险", "ja": "国民健康保険", "en": "National health insurance", "ko": "국민건강보험", "es": "Seguro nacional de salud"} },
        { "ref": "guide-transport", "sec": "397485",
          "text": { "zh": "自行车：购买・骑行・废弃", "ja": "自転車：購入・利用・廃棄", "en": "Bicycle: buy, ride, dispose", "ko": "자전거: 구입・이용・폐기", "es": "Bicicleta: comprar, usar, desechar"} },
        { "ref": "guide-antifraud", "sec": "3743ca",
          "text": { "zh": "防骗核心原则", "ja": "詐欺対策の基本原則", "en": "Core anti-fraud rules", "ko": "사기 방지 기본 원칙", "es": "Principios básicos contra el fraude"} }
      ]
    }
  ]
};
