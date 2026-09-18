// articles-i18n.js — 文章导航层多语言（title / summary，与 data-articles.js 的 _id 严格对应）
// 分工：本文件只管标题与摘要（供宫格 / 详情头 / 搜索结果 / 交叉引用解析使用）；
//       正文在 articles-body-i18n.js。缺条目时回退 zh 原文。
(function(){
window.ARTICLES_I18N = {
'guide-entry': {
  title:{ ja:'入国準備', en:'Arrival & Entry', ko:'입국 준비', es:'Preparativos de llegada' },
  summary:{
    ja:'到着前後にやること：シャトルバス、荷物、在留カードと銀行/保険の順序、寝具の持参、研究室への連絡。',
    en:'What to do before and after landing: shuttle bus, luggage, the residence-card → bank/insurance order, bringing bedding, contacting your lab.',
    ko:'도착 전후 해야 할 일: 셔틀버스, 짐, 재류카드와 은행/보험 순서, 침구 지참, 연구실 연락.',
    es:'Lo que hay que hacer antes y después de aterrizar: autobús lanzadera, equipaje, la tarjeta de residencia y el orden de banco y seguro, traer ropa de cama y contactar con tu laboratorio.' },
},
'guide-residence': {
  title:{ ja:'在留手続き', en:'Residence Procedures', ko:'체류 수속', es:'Trámites de residencia' },
  summary:{
    ja:'在留カードの住所登録（自分で/学校代行）、引越し時の住所変更と郵便転送、在留カード更新と2026年特定在留カード、campusweb/SSO、マイナンバー、国民健康保険と国民年金の学生特例、帰国前の手続き。',
    en:'Residence-card address registration (self / via school), moving & mail forwarding, card renewal and the 2026 special residence card, campusweb/SSO login, My Number, National Health Insurance & pension student exemption, procedures before leaving Japan.',
    ko:'재류카드 주소 등록(직접/학교 대행), 이사 시 주소 변경과 우편 전송, 재류카드 갱신과 2026 특정 재류카드, campusweb/SSO, 마이넘버, 국민건강보험과 국민연금 학생 특례, 귀국 전 수속.',
    es:'Registro de la dirección en la tarjeta de residencia (por tu cuenta o mediante la universidad), cambio de dirección y reenvío postal al mudarte, renovación de la tarjeta y la tarjeta de residencia específica de 2026, acceso a campusweb/SSO, My Number, seguro nacional de salud y exención de la pensión para estudiantes, y trámites antes de volver a tu país.' },
},
'guide-housing': {
  title:{ ja:'住まい探し', en:'Housing', ko:'주거', es:'Vivienda' },
  summary:{
    ja:'福岡3エリア（学研都市/周船寺/キャンパス横）の選び方、初期費用と水道光熱、郵便転送、周辺の賃貸ルートと実用リンク。',
    en:'Choosing among 3 Fukuoka areas (Gakken-toshi / Susenji / campus-side), initial costs and utilities, mail forwarding, local rental channels and useful links.',
    ko:'후쿠오카 3개 지역(학연도시/스센지/캠퍼스 옆) 선택법, 초기 비용과 공과금, 우편 전송, 주변 임대 경로와 실용 링크.',
    es:'Cómo elegir entre las tres zonas de Fukuoka (Gakken-toshi, Susenji, junto al campus), gastos iniciales y suministros, reenvío postal, y canales locales de alquiler con enlaces útiles.' },
},
'guide-bank': {
  title:{ ja:'銀行・送金', en:'Banking & Remittance', ko:'은행·송금', es:'Banca y envíos' },
  summary:{
    ja:'口座開設の共通知識（印鑑・営業時間）、オリエンテーション参加の意味、家賃の口座振替、クレジットカード（PayPay 等）、各銀行の特徴と必要書類、海外送金とマイナンバー。',
    en:'Account-opening basics (personal seal, business hours), why to attend orientation, rent via direct debit, credit cards (PayPay etc.), each bank’s requirements and document checklist, overseas remittance and My Number.',
    ko:'계좌 개설 공통 상식(도장·영업시간), 오리엔테이션 참가 이유, 월세 자동이체, 신용카드(PayPay 등), 각 은행 특징과 서류 체크리스트, 해외 송금과 마이넘버.',
    es:'Lo esencial para abrir una cuenta (sello, horario), por qué conviene asistir a la orientación, el pago del alquiler y la domiciliación bancaria, tarjetas de crédito (PayPay y otras), características y documentos de cada banco, y transferencias al extranjero con My Number.' },
},
'guide-phone': {
  title:{ ja:'携帯・ネット', en:'Mobile & Internet', ko:'휴대폰·인터넷', es:'Móvil e internet' },
  summary:{
    ja:'来日前の一時上網カード（CMlink/旅行SIM）、SIM選び（povo/ahamo/Y!mobile/UQ mobile/楽天）、オンライン申込と多言語サポート、eSIM、学内WiFi（SSO-KID@kitenet）と eduroam、解約・乗り換えリンク。',
    en:'Temporary data SIM before arrival (CMlink / travel SIM), choosing a SIM (povo / ahamo / Y!mobile / UQ mobile / Rakuten), online application & multilingual support, eSIM, campus WiFi (SSO-KID@kitenet) and eduroam, cancellation & porting links.',
    ko:'입국 전 임시 데이터 SIM(CMlink/여행 SIM), SIM 선택(povo/ahamo/Y!mobile/UQ mobile/라쿠텐), 온라인 신청과 다국어 지원, eSIM, 교내 WiFi(SSO-KID@kitenet)와 eduroam, 해지·번호이동 링크.',
    es:'SIM temporal antes de llegar (CMlink / SIM de viaje), elección de operador (povo, ahamo, Y!mobile, UQ mobile, Rakuten), solicitud en línea y atención multilingüe, eSIM, wifi del campus (SSO-KID@Kitnet) y eduroam, y enlaces para darse de baja o cambiar de operador.' },
},
'guide-academic': {
  "title": {
   "ja": "学業・奨学金",
   "en": "Study & Scholarships",
   "ko": "학업·장학금",
   "es": "Estudios y becas"
  },
  "summary": {
   "ja": "学校アカウントと各種証明書、履修と授業、直接受験/研究生からの進学、RA と私費留学生奨学金、英語による授業、JTCs 日本語コース、健康診断と学内相談窓口、学外の日本語教室（ボランティア 6 か所）。",
   "en": "School accounts & certificates, course registration, direct-exam / research-student admission, RA positions & scholarships for self-funded students, English-taught courses, JTCs Japanese courses, health checkup and on-campus counseling, and six community Japanese classes.",
   "ko": "학교 계정과 각종 증명서, 수강 신청, 직접 수험/연구생 진학, RA와 사비 유학생 장학금, 영어 수업, JTCs 일본어 과정, 건강검진과 교내 상담 창구, 교외 일본어 교실 6곳.",
   "es": "Cuentas de la universidad y certificados, matrícula y asignaturas, acceso directo a posgrado, plazas de RA y becas para autofinanciados, asignaturas en inglés, cursos de japonés JTCs y seis clases voluntarias fuera del campus, revisión médica y ventanillas de orientación internas."
  }
 },
'guide-parttime': {
  title:{ ja:'アルバイト', en:'Part-time Work', ko:'아르바이트', es:'Trabajo a tiempo parcial' },
  summary:{
    ja:'資格外活動許可、労働時間の上限（週28時間）、福岡の最低時給、探し方と注意点、実用リンク。',
    en:'Permission to engage in other activities, the 28 h/week limit, Fukuoka minimum wage, where to find jobs and cautions, useful links.',
    ko:'자격외활동허가, 주 28시간 제한, 후쿠오카 최저시급, 구직 경로와 주의점, 실용 링크.',
    es:'Permiso de actividad fuera del estatus, límite de horas (28 h/semana), salario mínimo de Fukuoka, canales para encontrar trabajo, advertencias y enlaces útiles.' },
},
'guide-medical': {
  title:{ ja:'医療・保険', en:'Medical & Insurance', ko:'의료·보험', es:'Salud y seguro' },
  summary:{
    ja:'国民健康保険、ESP 緊急支援（三者通訳）、多言語医療ホットライン、キャンパス保健センター、福岡市の外国人医療・生活支援。',
    en:'National Health Insurance, ESP emergency support (three-way interpretation), multilingual medical hotlines, the campus health center, Fukuoka City support for foreign residents.',
    ko:'국민건강보험, ESP 긴급 지원(3자 통역), 다국어 의료 핫라인, 캠퍼스 보건센터, 후쿠오카시 외국인 의료·생활 지원.',
    es:'Seguro nacional de salud, asistencia urgente ESP (interpretación a tres bandas), líneas sanitarias multilingües, centro de salud de la universidad y apoyo médico y vital para extranjeros del Ayuntamiento de Fukuoka.' },
},
'guide-transport': {
  title:{ ja:'交通', en:'Transport', ko:'교통', es:'Transporte' },
  summary:{
    ja:'自転車（購入/防犯登録/処分）、バスと定期券（回数券/エコルカード/通学定期）、シェアサイクル、原付と免許。',
    en:'Bicycles (buying / anti-theft registration / disposal), buses & commuter passes (coupon tickets / Ecole card / student pass), bike-share, mopeds and licenses.',
    ko:'자전거(구입/방범등록/처분), 버스와 정기권(회수권/에코루/통학정기), 공유자전거, 원동기와 면허.',
    es:'Bicicleta (compra, registro antirrobo, desecho), autobús y abonos (bonos de viajes, Eco-ru, abono escolar), bicicletas compartidas, ciclomotor y carné de conducir.' },
},
'guide-life': {
  title:{ ja:'生活のコツ', en:'Life Tips', ko:'생활 팁', es:'Consejos prácticos' },
  summary:{
    ja:'福岡の天気と台風、ゴミ分別と指定袋、市の LINE アカウント、サークルと EZぷらっと、寮の修繕依頼、Coffee Hour、食堂・図書館とキャンパスイベント。',
    en:'Fukuoka weather & typhoons, garbage sorting & designated bags, the city’s LINE account, clubs and EZ-Platto, dorm repair requests, Coffee Hour, canteens, libraries and campus events.',
    ko:'후쿠오카 날씨와 태풍, 쓰레기 분리와 지정 봉투, 시 LINE 계정, 동아리와 EZ뿌랏토, 기숙사 수리 요청, Coffee Hour, 식당·도서관과 캠퍼스 행사.',
    es:'El tiempo en Fukuoka y los tifones, separación de basura y bolsas reglamentarias, la cuenta de LINE del ayuntamiento, círculos y EZ Puratto, reparaciones en el dormitorio, Coffee Hour, comedores y biblioteca, y actividades del campus.' },
},
'guide-shopping': {
  title:{ ja:'買い物', en:'Shopping', ko:'쇼핑', es:'Compras' },
  summary:{
    ja:'日用品はどこで買うか、伊都周辺の買い物マップ（駅前生鮮/ドラッグストア/ディスカウント/総合スーパー/コンビニ/7km圏）、中古と参考リンク。',
    en:'Where to buy daily goods, an Ito-area shopping map (station fresh food / drugstores / discount / supermarkets / convenience stores / 7 km zone), second-hand and reference links.',
    ko:'생필품 구매처, 이토 주변 쇼핑 지도(역 앞 신선식품/약국/할인점/종합슈퍼/편의점/7km권), 중고와 참고 링크.',
    es:'Dónde comprar artículos de uso diario, mapa de compras alrededor del campus Ito (frescos en la estación, droguería, descuento, supermercados, tiendas de conveniencia y zonas comerciales cercanas), segunda mano y enlaces de referencia.' },
},
'guide-emergency': {
  title:{ ja:'緊急連絡先', en:'Emergency Contacts', ko:'긴급 연락처', es:'Contactos de emergencia' },
  summary:{
    ja:'生命・安全の緊急番号（110/119/#7119）、福岡の各国領事館、学内と外国人相談窓口、生活相談ホットライン、この地域の災害リスク。',
    en:'Life-safety emergency numbers (110 / 119 / #7119), consulates in Fukuoka, university and foreign-resident help desks, daily-life hotlines, and local disaster risk.',
    ko:'생명·안전 긴급번호(110/119/#7119), 주후쿠오카 대한민국 총영사관, 학교와 외국인 상담 창구, 생활 상담 핫라인, 이 지역의 재해 위험.',
    es:'Números de emergencia (110 / 119 / #7119), consulados y línea del Ministerio de Asuntos Exteriores de China, servicios de consulta de la universidad y para extranjeros, y líneas de ayuda para la vida diaria.' },
},
'guide-antifraud': {
  title:{ ja:'詐欺防止ガイド（新入生必読）', en:'Anti-Fraud Guide (Must-Read)', ko:'사기 방지 가이드(필독)', es:'Guía antifraude (lectura prioritaria)' },
  summary:{
    ja:'留学生を狙うよくある詐欺の手口（大使館なりすまし/両替詐欺/バーチャル誘拐など）、防犯の基本原則、日常チェックリスト、被害後の対応と相談先。新入生はまずこちらをお読みください。',
    en:'Common scams targeting international students (embassy impersonation / currency-exchange fraud / virtual kidnapping), core prevention principles, a daily checklist, and what to do if scammed. Read this first.',
    ko:'유학생을 노리는 흔한 사기(대사관 사칭/환전 사기/가상 납치 등), 예방 기본 원칙, 일일 체크리스트, 피해 후 대응과 상담처. 신입생 필독.',
    es:'Los fraudes más habituales contra estudiantes internacionales (suplantación de consulados, cambio de divisas, secuestro virtual y otros), los principios básicos de prevención, una comprobación rápida diaria y qué hacer y a quién acudir si te estafan. Imprescindible al llegar, para proteger tu dinero y tu seguridad.' },
},
'guide-airport': {
  title:{ ja:'福岡空港から伊都キャンパスへ：公共交通の全行程ガイド',
          en:'Fukuoka Airport to Ito Campus: the complete public-transit guide',
          ko:'후쿠오카 공항에서 이토 캠퍼스까지: 대중교통 전체 가이드',
    es:'Del aeropuerto de Fukuoka al campus Ito: guía completa en transporte público' },
  summary:{
    ja:'飛行機を降りてから校門をくぐるまで、実際に歩いた記録をもとに整理した一枚のルート：人の流れについていく → 入国審査 → 手荷物受取と税関 → 無料連絡バスで国内線へ → 地下鉄で九大学研都市駅まで直通 → 昭和バスでキャンパスへ。現場写真 17 枚つきで、各段階を見比べながら進めます。つまずきやすいのは地下鉄の方向だけ——その一点は独立した節で詳しく説明しています。',
    en:'From stepping off the plane to walking through the campus gate, one continuous route rebuilt from a real walkthrough: follow the crowd → immigration → baggage and customs → free shuttle to the domestic terminal → subway straight through to Kyudai-Gakkentoshi → Showa bus to campus. With 17 on-site photos so you can compare each step. Only one step is easy to get wrong — the subway direction — and it gets a section of its own.',
    ko:'비행기에서 내려 교문을 들어설 때까지, 실제로 걸어보며 기록한 하나의 경로: 인파를 따라가기 → 입국 심사 → 수하물 수취와 세관 → 무료 셔틀로 국내선 이동 → 지하철로 규다이갓켄토시역까지 직통 → 쇼와버스로 캠퍼스까지. 현장 사진 17장이 있어 각 단계를 비교하며 진행할 수 있습니다. 헷갈리기 쉬운 곳은 지하철 방향 한 곳뿐이며, 그 부분은 별도 절에서 자세히 설명합니다.',
    es:'De la salida del avión a la puerta del campus, una ruta completa reconstruida con fotos tomadas sobre el terreno: seguir el flujo de pasajeros → control de inmigración → recogida de equipaje y aduana → autobús lanzadera gratuito hasta la terminal nacional → metro directo a la estación Kyudai-Gakkentoshi → autobús Showa hasta el campus. Incluye 17 fotografías para seguir cada paso. Donde más gente se equivoca es en la dirección del metro: una sección entera explica cómo evitarlo.' },
},
'guide-firstmonth': {
  title:{ ja:'着いてからの 30 日：手続き一覧', en:'Your First 30 Days: procedures in order', ko:'도착 후 30일: 수속 총정리', es:'Tus primeros 30 días: tabla general de trámites' },
  summary:{
    ja:'15 のカテゴリに散らばった入国後の手続きを、時系列に整理しました。いつやるか、これをやる前に何を終えている必要があるか、逃すと取り返しがつきにくいのはどれか。各節の最後に詳しい記事へのリンクがあります。',
    en:'The post-arrival procedures scattered across 15 categories, laid out on a single timeline: when to do each one, what has to be finished before it, and which ones are painful to fix if you miss them. Each section links back to the detailed article.',
    ko:'15개 분류에 흩어져 있는 입국 후 수속을 시간순으로 정리했습니다. 언제 하는지, 이걸 하기 전에 무엇을 끝내야 하는지, 놓치면 되돌리기 어려운 것은 무엇인지. 각 절 끝에 자세한 글로 가는 링크가 있습니다.',
    es:'Los trámites de llegada, repartidos en doce categorías, reunidos en una sola línea temporal: cuándo hacer cada uno, qué debe estar hecho antes, y cuáles son un problema si se te pasan. Cada sección remite al artículo detallado.' },
},
'guide-newcomer': {
  title:{ ja:'2026秋 新入生スペシャル：留学課サポート総覧', en:'2026 Fall Newcomer Special: Student Exchange Division support', ko:'2026 가을 신입생 특집: 유학과 지원 총람', es:'Especial nuevos estudiantes, otoño de 2026: panorama del apoyo disponible' },
  summary:{
    ja:'九州大学留学課（国際部）が 2026 年秋の新入留学生向けに用意したサポート情報のまとめ：無料空港シャトルバス／生活支援バス（リアルタイム次便つき）、行政手続き・銀行ガイダンス、オリエンテーション、銀行口座開設会、ESP 緊急安心プラン、問い合わせ・相談窓口。公式 NotePM ポータルが原本。',
    en:'A summary of all support provided by the Kyushu U Student Exchange Division for 2026 fall newcomers: free airport shuttle / shopping shuttle (with live next-bus), administrative & banking guidance, orientation, bank account event, ESP emergency plan, and contacts. Based on the official NotePM portal.',
    ko:'규슈대 유학과(국제부)가 2026년 가을 신입 유학생에게 준비한 지원 정보 총정리: 무료 공항 셔틀버스/생활지원버스(실시간 다음 차량 포함), 행정절차·은행 가이던스, 오리엔테이션, 은행 계좌 개설회, ESP 긴급 안심 플랜, 문의·상담 창구. 공식 NotePM 포털이 원본.',
    es:'Resumen de todo el apoyo de la oficina de estudiantes internacionales para los nuevos estudiantes del otoño de 2026: horarios del autobús del aeropuerto y del autobús de apoyo diario (con el próximo servicio en tiempo real), wifi del campus (kitenet / SSO-KID), sesión sobre trámites y banca, orientación, sesión de apertura de cuenta bancaria, plan de asistencia urgente ESP, y canales de contacto y consulta. Prevalece el portal oficial de NotePM.' },
},
"guide-scholarship": {
  "title": {
   "ja": "奨学金（私費・国費）",
   "en": "Scholarships (private & government)",
   "ko": "장학금(사비·국비)",
   "zh": "奖学金（私費・国費）",
   "es": "Becas (autofinanciados y del Gobierno)"
  },
  "summary": {
   "ja": "いま応募できる 7 件（金額・締切の一覧、募集要項のダウンロード付き）、2 つの応募ルート、日本語と併給の壁、国費外国人留学生 4 区分の月額、私費の学習奨励費 48,000 円/月。",
   "en": "The 7 currently open calls (amounts and deadlines, with downloadable guidelines), the two application routes, the Japanese-language and double-dipping gates, the four MEXT categories and stipends, and the 48,000 JPY/month Study Incentive Grant for privately financed students.",
   "ko": "지금 지원 가능한 7건(금액·마감 목록, 모집요강 다운로드 포함), 두 가지 지원 경로, 일본어와 중복 수급 장벽, 국비 외국인 유학생 4개 구분 월액, 사비 학습장려비 48,000엔/월.",
   "zh": "现在能申请的 7 件（金额・截止一览，含可下载的募集要項）、两条应募路径、日语与併給门槛、国費外国人留学生 4 类别月額、私費学習奨励費 48,000 円/月。",
   "es": "Las siete becas abiertas ahora (importes y plazos en una tabla, con las bases de convocatoria descargables), dos vías de solicitud, requisitos de japonés y compatibilidad entre becas, importes mensuales de las cuatro categorías de beca del Gobierno (MEXT) y la ayuda de estímulo al estudio de 48,000 円 al mes."
  }
 },
"guide-career": {
  "title": {
   "ja": "就職・インターン（外国人留学生）",
   "en": "Careers & Internships (international students)",
   "ko": "취업·인턴십(외국인 유학생)",
   "es": "Empleo y prácticas (estudiantes internacionales)"
  },
  "summary": {
   "ja": "日本就活のルール（新卒一括採用・4 月入社・ポテンシャル採用）、年 1 回のスケジュール、3 つの関門（ES・SPI・面接）の難所、内定後の在留資格変更と報告義務、キャリア支援室の窓口と 12/2 企業研究フェア。",
   "en": "How Japanese hiring works (mass new-grad hiring, April entry, potential-based selection), the once-a-year calendar, what the three gates (entry sheet, SPI, interviews) actually test, the residence-status change and reporting duty after an offer, the career office counter, and the 2 Dec company fair.",
   "ko": "일본 취업 규칙(신졸 일괄 채용·4월 입사·포텐셜 채용), 1년에 한 번인 일정, 세 관문(ES·SPI·면접)의 난관, 내정 후 재류자격 변경과 보고 의무, 커리어지원실 창구와 12/2 기업 연구 페어.",
   "es": "Las reglas del mercado laboral japonés (contratación conjunta de recién graduados, entrada en abril, se valoran las aptitudes), un calendario que solo se repite una vez al año, dónde se atasca cada una de las tres pruebas (ES, SPI y entrevista), el cambio de estatus de residencia y la obligación de notificar tras recibir una oferta, la oficina de apoyo profesional y la feria de empresas del 2/12."
  }
 }
};
})();
