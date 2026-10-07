// data-newcomer-zone.js — 新生专区（首页顶部的时间线导航）
//
// 定位：服务"刚到日本"的人 —— 不复制正文，只把散在各篇里的关键步骤
// 按**时间顺序**串起来，每条用 ?sec=<区块ID> 深链到对应小节。
//
// 为什么用区块 ID 而不是标题文本：标题会随界面语言变（日/英/韩译本），
// ID 不会；也不用维护 4 份标题对照表。
// 常用资料独立于日程阶段，避免把未定日期事项误呈现为活动安排。
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
  ],
  "resources": [
    {"ref":"guide-newcomer","sec":"jca101","title":{"zh":"JTCs 日语课｜2026 后期报名","ja":"JTCs 日本語補講｜2026 年度後期","en":"JTCs Japanese courses | Fall 2026","ko":"JTCs 일본어 수업｜2026년 후기","es":"JTCs japonés | Otoño de 2026"},"desc":{"zh":"10/16—10/21 登记与分班测试；10/26—10/27 另行选班。非学分，查看精确时刻与课程安排。","ja":"10/16—10/21 は新規登録・テスト、10/26—10/27 はクラス登録。単位不認定。時刻と授業日程を確認。","en":"Registration and placement test: 10/16—10/21. Separate class selection: 10/26—10/27. Non-credit; check exact times and the course schedule.","ko":"10/16—10/21 등록·분반 테스트, 10/26—10/27 별도 반 선택. 학점 미인정. 정확한 시각과 수업 일정을 확인하세요.","es":"Registro y prueba de nivel: 10/16—10/21. Selección de clase aparte: 10/26—10/27. Sin créditos; consulta las horas exactas y el calendario."}},
    { "ref": "guide-academic", "sec": "1240ad",
      "title": { "zh": "证明书申请与打印", "ja": "証明書の申請・印刷", "en": "Certificates: apply and print", "ko": "증명서 신청·출력", "es": "Solicitar e imprimir certificados" },
      "desc": { "zh": "先查本人学籍能开什么，再选发券机、便利店或窗口；含费用、四校区位置和健康证明例外。", "ja": "学籍と対象証明書を確認して受取方法を選択。料金・4キャンパスの発行機・健康証明書の例外を掲載。", "en": "Check eligibility before choosing a campus machine, convenience store or office. Includes fees, four-campus locations and health-certificate exceptions.", "ko": "학적과 발급 자격을 확인한 뒤 발급기·편의점·창구를 선택하세요. 비용, 4개 캠퍼스 위치와 건강증명서 예외를 안내합니다.", "es": "Comprueba tu situación académica antes de elegir máquina, tienda o ventanilla. Incluye tarifas, ubicaciones en cuatro campus y excepciones médicas." } },
    { "ref": "guide-housing", "sec": "d27e01",
      "title": { "zh": "宿舍设备与入住采购", "ja": "寮の設備と入居時の準備", "en": "Dorm facilities and move-in supplies", "ko": "기숙사 시설 및 입주 준비", "es": "Instalaciones y artículos para la mudanza" },
      "desc": { "zh": "核对 D1/D2、D3、協奏館与 SETTLE；入住提醒与生活巴士信息分开。", "ja": "D1/D2、D3、協奏館、SETTLE を確認。入居案内と生活支援バスの日程は別情報です。", "en": "Compare D1/D2, D3, Kyoso-kan and SETTLE. Move-in notes are separate from the shopping-bus schedule.", "ko": "D1/D2, D3, 교소칸, SETTLE을 비교하세요. 입주 안내와 생활지원 버스 일정은 별도 정보입니다.", "es": "Compara D1/D2, D3, Kyoso-kan y SETTLE. Las notas de entrada no son el horario del autobús de compras." } },
    { "ref": "guide-medical", "sec": "40a340",
      "title": { "zh": "学生保险与医疗", "ja": "学生保険と医療", "en": "Student insurance and healthcare", "ko": "학생 보험 및 의료", "es": "Seguro estudiantil y atención médica" },
      "desc": { "zh": "区分学研災、责任险、留学生综合保险、ESP 与国保的适用范围。", "ja": "学研災、賠償責任保険、留学生総合保険、ESP、国保の適用範囲を区別します。", "en": "Understand the scope of Gakkensai, liability cover, inbound student insurance, ESP and NHI.", "ko": "학연재해보험, 배상책임보험, 유학생 종합보험, ESP와 국민건강보험의 적용 범위를 구분합니다.", "es": "Distingue el alcance de Gakkensai, la responsabilidad civil, el seguro para estudiantes internacionales, ESP y el seguro nacional." } },
    { "ref": "guide-academic", "sec": "m7card0",
      "title": { "zh": "学生证：领取、遗失与补办", "ja": "学生証：受取・紛失・再発行", "en": "Student cards: pickup, loss and replacement", "ko": "학생증: 수령·분실·재발급", "es": "Carné estudiantil: recogida, pérdida y reposición" },
      "desc": { "zh": "含停用、损坏、补办费用与所属窗口；初次领取仍按本人所属的入学通知。", "ja": "利用停止・故障・再発行料金と所属窓口。初回受取は所属の入学案内で確認。", "en": "Card suspension, faults, replacement fees and your department’s office. Check your own admission notice for initial pickup.", "ko": "이용 정지·고장·재발급 비용과 소속 창구를 안내합니다. 최초 수령은 소속 입학 안내를 확인하세요.", "es": "Suspensión, averías, tarifas de reposición y oficina de tu unidad. Consulta el aviso de admisión para la primera recogida." } }
  ]
};
