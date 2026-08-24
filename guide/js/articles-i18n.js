// articles-i18n.js — 文章多语言翻译（与 data-articles.js 的 _id 严格对应）
// 空分类（4/7/9/12）无文章，i18n 不需要条目
(function(){
window.ARTICLES_I18N = {
// cat=1 入境准备 — hot-firststeps（无 heading）
'hot-firststeps': {
  title:{ ja:'到着後に最初にやること', en:'First Things After Arrival', ko:'도착 후 가장 먼저 할 일' },
  summary:{ ja:'日本に到着して最初に優先すべき手続きの順序。', en:'Priority order of tasks right after landing in Japan.', ko:'일본 도착 후 가장 먼저 처리할 순서.' },
},

// cat=2 在留手续 — guide-2（权威指南，4 sections）
'guide-2': {
  title:{ ja:'在留手続（住民登録・再入国・役所）', en:'Residence Procedures (Registration / Re-entry / Ward Office)', ko:'체류 수속 (주민등록·재입국·구청)' },
  summary:{ ja:'到着後にやるべき在留手続の全体像。住民登録→銀行→電話の順序。', en:'Full sequence of residence tasks after arrival. Registration → bank → SIM.', ko:'도착 후 처리할 체류 수속 전체 순서.' },
  sections:{ ja:['到着後の手続き順序','住民登録の2つの方法','日本を一時離れる場合','よく使う公的機関'], en:['Post-arrival Order','Two Ways to Register Residence','Temporarily Leaving Japan','Key Public Offices'], ko:['도착 후 절차 순서','주민등록 2가지 방법','일시 출국 시','자주 쓰는 공적 기관'] },
},

// cat=3 租房 — hot-rent3（无 heading）
'hot-rent3': {
  title:{ ja:'福岡3エリアの住まい選び', en:'Choosing Housing in 3 Fukuoka Areas', ko:'후쿠오카 3지역 주거 선택' },
  summary:{ ja:'学研・周船寺・校区横の3エリア比較。家賃・通勤・生活利便性。', en:'Kyudai-gakken / Susenji / Campus-adjacent: rent, commute, convenience.', ko:'학연·스센지·캠퍼스 인접 3지역 비교.' },
},

// cat=5 手机·网络 — hot-sim（1 section）
'hot-sim': {
  title:{ ja:'おすすめSIMカード', en:'Recommended SIM Cards', ko:'추천 SIM카드' },
  summary:{ ja:'留学生におすすめのSIMカード・格安SIMまとめ。', en:'Budget SIM cards recommended for international students.', ko:'유학생 추천 저가 SIM카드.' },
  sections:{ ja:['みんなの経験（募集中）'], en:["Everyone's Experience (Collecting)"], ko:['경험 공유 (수집 중)'] },
},

// cat=6 学业·奖学金 — guide-6（无 heading）
'guide-6': {
  title:{ ja:'私費留学生奨学金', en:'Private-Sponsored Student Scholarships', ko:'사비 유학생 장학금' },
  summary:{ ja:'私費留学生が申請できる奨学金情報。', en:'Scholarship info for privately-funded international students.', ko:'사비 유학생 신청 가능 장학금 정보.' },
},

// cat=8 医疗·保险 — hot-med-otc（1 section）
'hot-med-otc': {
  title:{ ja:'常用薬の準備', en:'Preparing OTC Medications', ko:'상비약 준비' },
  summary:{ ja:'日本に持ってきたい常備薬と、現地での入手方法。', en:'Medications to bring from home + how to buy locally.', ko:'가져갈 상비약과 현지 구매 방법.' },
  sections:{ ja:['みんなの常備薬（募集中）'], en:['OTC Meds (Collecting)'], ko:['상비약 (수집 중)'] },
},

// cat=10 生活贴士 — ito-guide（4 sections，最权威）
'ito-guide': {
  title:{ ja:'新伊都国風土記', en:'New Ito Chronicle', ko:'신 이토 풍토기' },
  summary:{ ja:'九州大学伊都キャンパスおよび周辺の生活ガイド。地理・天気・行政区画。', en:'Living guide for Kyushu University Ito Campus: geography, weather, admin areas.', ko:'규슈대 이토 캠퍼스 및 주변 생활 가이드.' },
  sections:{ ja:['基本情報','気候','行政区画','糸島と係島'], en:['Basic Info','Climate','Administrative Divisions','Itoshima vs 糸島'], ko:['기본 정보','기후','행정 구역','이토시마'] },
},

// cat=11 购物 — guide-11（6 sections）
'guide-11': {
  title:{ ja:'買い物ガイド（伊都キャンパス周辺）', en:'Shopping Guide (Ito Campus Area)', ko:'쇼핑 가이드 (이토 캠퍼스 주변)' },
  summary:{ ja:'周辺のスーパー・コンビニ・ドラッグストア・ディスカウント情報。', en:'Nearby supermarkets, convenience stores, drugstores & discounts.', ko:'근처 슈퍼마켓·편의점·약국·할인 정보.' },
  sections:{ ja:['早見表','最寄り：九大学研都市駅周辺','割引・量販','大型スーパー','コンビニ','延伸商圏（7km）'], en:['Quick Reference','Kyudai-gakken Station Area','Discounts & Bulk','Supermarkets','Convenience Stores','Extended (7 km)'], ko:['빠른 참조','학연도시역 주변','할인·대량 구매','슈퍼마켓','편의점','확장 상권 (7km)'] },
},

// cat=13 安全必读 — guide-antifraud（5 sections）
'guide-antifraud': {
  title:{ ja:'詐欺防止ガイド（初心者必読）', en:'Anti-Fraud Guide (Must-Read for Beginners)', ko:'사기 방지 가이드 (초보 필독)' },
  summary:{ ja:'留学生向け詐欺対策。手口・防止・緊急時の対応。', en:'Anti-fraud for international students: tactics, prevention, emergency.', ko:'유학생 대상 사기 대책: 수법·예방·긴급 대응.' },
  sections:{ ja:['① よくある詐欺の手口','② 防犯の基本原則','③ 日常の警戒チェックリスト','④ 詐欺に引っかかった場合','⑤ 騙しを見抜くコツ'], en:['① Common Fraud Types','② Prevention Basics','③ Daily Checklist','④ If You Got Scammed','⑤ Spotting Red Flags'], ko:['① 흔한 사기 수법','② 예방 기본 원칙','③ 일일 점검 체크리스트','④ 사기 피해 시 대응','⑤ 사기 의심 포인트'] },
},
};
})();
