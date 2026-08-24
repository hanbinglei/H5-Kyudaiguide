// articles-i18n.js — 文章导航层多语言（title / summary，与 data-articles.js 的 _id 严格对应）
// 设计：正文（blocks）与小节 TOC 为中文原文，切换语言时由 UI 层显示「正文为中文」提示；
//       这里只翻标题与摘要，供宫格 / 详情头 / 搜索结果使用。零缺省回退到 zh 原文。
(function(){
window.ARTICLES_I18N = {
'guide-entry': {
  title:{ ja:'入国準備', en:'Arrival & Entry', ko:'입국 준비' },
  summary:{
    ja:'到着前後にやること：シャトルバス、荷物、在留カードと銀行/保険の順序、寝具の持参、研究室への連絡。',
    en:'What to do before and after landing: shuttle bus, luggage, the residence-card → bank/insurance order, bringing bedding, contacting your lab.',
    ko:'도착 전후 해야 할 일: 셔틀버스, 짐, 재류카드와 은행/보험 순서, 침구 지참, 연구실 연락.' },
},
'guide-residence': {
  title:{ ja:'在留手続き', en:'Residence Procedures', ko:'체류 수속' },
  summary:{
    ja:'在留カードの住所登録（自分で/学校代行）、引越し時の住所変更と郵便転送、在留カード更新と2026年特定在留カード、campusweb/SSO、マイナンバー、国民健康保険と国民年金の学生特例、帰国前の手続き。',
    en:'Residence-card address registration (self / via school), moving & mail forwarding, card renewal and the 2026 special residence card, campusweb/SSO login, My Number, National Health Insurance & pension student exemption, procedures before leaving Japan.',
    ko:'재류카드 주소 등록(직접/학교 대행), 이사 시 주소 변경과 우편 전송, 재류카드 갱신과 2026 특정 재류카드, campusweb/SSO, 마이넘버, 국민건강보험과 국민연금 학생 특례, 귀국 전 수속.' },
},
'guide-housing': {
  title:{ ja:'住まい探し', en:'Housing', ko:'주거' },
  summary:{
    ja:'福岡3エリア（学研都市/周船寺/キャンパス横）の選び方、初期費用と水道光熱、郵便転送、周辺の賃貸ルートと実用リンク。',
    en:'Choosing among 3 Fukuoka areas (Gakken-toshi / Susenji / campus-side), initial costs and utilities, mail forwarding, local rental channels and useful links.',
    ko:'후쿠오카 3개 지역(학연도시/스센지/캠퍼스 옆) 선택법, 초기 비용과 공과금, 우편 전송, 주변 임대 경로와 실용 링크.' },
},
'guide-bank': {
  title:{ ja:'銀行・送金', en:'Banking & Remittance', ko:'은행·송금' },
  summary:{
    ja:'口座開設の共通知識（印鑑・営業時間）、オリエンテーション参加の意味、家賃の口座振替、クレジットカード（PayPay 等）、各銀行の特徴と必要書類、海外送金とマイナンバー。',
    en:'Account-opening basics (personal seal, business hours), why to attend orientation, rent via direct debit, credit cards (PayPay etc.), each bank’s requirements and document checklist, overseas remittance and My Number.',
    ko:'계좌 개설 공통 상식(도장·영업시간), 오리엔테이션 참가 이유, 월세 자동이체, 신용카드(PayPay 등), 각 은행 특징과 서류 체크리스트, 해외 송금과 마이넘버.' },
},
'guide-phone': {
  title:{ ja:'携帯・ネット', en:'Mobile & Internet', ko:'휴대폰·인터넷' },
  summary:{
    ja:'来日前の一時上網カード（CMlink/旅行SIM）、SIM選び（povo/ahamo/Y!mobile/UQ mobile/楽天）、オンライン申込と多言語サポート、eSIM、学内WiFi（SSOKID@Kitnet）と eduroam、解約・乗り換えリンク。',
    en:'Temporary data SIM before arrival (CMlink / travel SIM), choosing a SIM (povo / ahamo / Y!mobile / UQ mobile / Rakuten), online application & multilingual support, eSIM, campus WiFi (SSOKID@Kitnet) and eduroam, cancellation & porting links.',
    ko:'입국 전 임시 데이터 SIM(CMlink/여행 SIM), SIM 선택(povo/ahamo/Y!mobile/UQ mobile/라쿠텐), 온라인 신청과 다국어 지원, eSIM, 교내 WiFi(SSOKID@Kitnet)와 eduroam, 해지·번호이동 링크.' },
},
'guide-academic': {
  title:{ ja:'学業・奨学金', en:'Study & Scholarships', ko:'학업·장학금' },
  summary:{
    ja:'学校アカウントと各種証明書、履修と授業、直接受験/研究生からの進学、RA と私費留学生奨学金、JTCs 日本語コース、健康診断と学内相談窓口。',
    en:'School accounts & certificates, course registration, direct-exam / research-student admission, RA positions & scholarships for self-funded students, JTCs Japanese courses, health checkup and on-campus counseling.',
    ko:'학교 계정과 각종 증명서, 수강 신청, 직접 수험/연구생 진학, RA와 사비 유학생 장학금, JTCs 일본어 과정, 건강검진과 교내 상담 창구.' },
},
'guide-parttime': {
  title:{ ja:'アルバイト', en:'Part-time Work', ko:'아르바이트' },
  summary:{
    ja:'資格外活動許可、労働時間の上限（週28時間）、福岡の最低時給、探し方と注意点、実用リンク。',
    en:'Permission to engage in other activities, the 28 h/week limit, Fukuoka minimum wage, where to find jobs and cautions, useful links.',
    ko:'자격외활동허가, 주 28시간 제한, 후쿠오카 최저시급, 구직 경로와 주의점, 실용 링크.' },
},
'guide-medical': {
  title:{ ja:'医療・保険', en:'Medical & Insurance', ko:'의료·보험' },
  summary:{
    ja:'国民健康保険、ESP 緊急支援（三者通訳）、多言語医療ホットライン、キャンパス保健センター、福岡市の外国人医療・生活支援。',
    en:'National Health Insurance, ESP emergency support (three-way interpretation), multilingual medical hotlines, the campus health center, Fukuoka City support for foreign residents.',
    ko:'국민건강보험, ESP 긴급 지원(3자 통역), 다국어 의료 핫라인, 캠퍼스 보건센터, 후쿠오카시 외국인 의료·생활 지원.' },
},
'guide-transport': {
  title:{ ja:'交通', en:'Transport', ko:'교통' },
  summary:{
    ja:'自転車（購入/防犯登録/処分）、バスと定期券（回数券/エコルカード/通学定期）、シェアサイクル、原付と免許。',
    en:'Bicycles (buying / anti-theft registration / disposal), buses & commuter passes (coupon tickets / Ecole card / student pass), bike-share, mopeds and licenses.',
    ko:'자전거(구입/방범등록/처분), 버스와 정기권(회수권/에코루/통학정기), 공유자전거, 원동기와 면허.' },
},
'guide-life': {
  title:{ ja:'生活のコツ', en:'Life Tips', ko:'생활 팁' },
  summary:{
    ja:'福岡の天気と台風、ゴミ分別と指定袋、市の LINE アカウント、サークルと EZぷらっと、寮の修繕依頼、Coffee Hour、食堂・図書館とキャンパスイベント。',
    en:'Fukuoka weather & typhoons, garbage sorting & designated bags, the city’s LINE account, clubs and EZ-Platto, dorm repair requests, Coffee Hour, canteens, libraries and campus events.',
    ko:'후쿠오카 날씨와 태풍, 쓰레기 분리와 지정 봉투, 시 LINE 계정, 동아리와 EZ뿌랏토, 기숙사 수리 요청, Coffee Hour, 식당·도서관과 캠퍼스 행사.' },
},
'guide-shopping': {
  title:{ ja:'買い物', en:'Shopping', ko:'쇼핑' },
  summary:{
    ja:'日用品はどこで買うか、伊都周辺の買い物マップ（駅前生鮮/ドラッグストア/ディスカウント/総合スーパー/コンビニ/7km圏）、中古と参考リンク。',
    en:'Where to buy daily goods, an Ito-area shopping map (station fresh food / drugstores / discount / supermarkets / convenience stores / 7 km zone), second-hand and reference links.',
    ko:'생필품 구매처, 이토 주변 쇼핑 지도(역 앞 신선식품/약국/할인점/종합슈퍼/편의점/7km권), 중고와 참고 링크.' },
},
'guide-emergency': {
  title:{ ja:'緊急連絡先', en:'Emergency Contacts', ko:'긴급 연락처' },
  summary:{
    ja:'生命・安全の緊急番号（110/119/#7119）、福岡の各国領事館、学内と外国人相談窓口、生活相談ホットライン、この地域の災害リスク。',
    en:'Life-safety emergency numbers (110 / 119 / #7119), consulates in Fukuoka, university and foreign-resident help desks, daily-life hotlines, and local disaster risk.',
    ko:'생명·안전 긴급번호(110/119/#7119), 주후쿠오카 대한민국 총영사관, 학교와 외국인 상담 창구, 생활 상담 핫라인, 이 지역의 재해 위험.' },
},
'guide-antifraud': {
  title:{ ja:'詐欺防止ガイド（新入生必読）', en:'Anti-Fraud Guide (Must-Read)', ko:'사기 방지 가이드(필독)' },
  summary:{
    ja:'留学生を狙うよくある詐欺の手口（大使館なりすまし/両替詐欺/バーチャル誘拐など）、防犯の基本原則、日常チェックリスト、被害後の対応と相談先。新入生はまずこれを。',
    en:'Common scams targeting international students (embassy impersonation / currency-exchange fraud / virtual kidnapping), core prevention principles, a daily checklist, and what to do if scammed. Read this first.',
    ko:'유학생을 노리는 흔한 사기(대사관 사칭/환전 사기/가상 납치 등), 예방 기본 원칙, 일일 체크리스트, 피해 후 대응과 상담처. 신입생 필독.' },
},
};
})();
