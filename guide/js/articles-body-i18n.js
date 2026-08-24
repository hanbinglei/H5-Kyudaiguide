// articles-body-i18n.js — 指南正文译本（ja / en / ko）
//
// 结构约定：每篇每语言的数组与 data-articles.js 里该篇 blocks **逐位同构**
//   —— 长度相同、索引相同、每块 type 相同、items/rows 条数相同。只译文字，不动结构。
//   校验：node tools/check_body_i18n.js（同时断言 URL 与电话号码集合完全一致）
//
// 未收录的文章/语言组合会自动回退到中文原文，并在文章顶部显示「正文为中文」提示，
// 逐篇独立判断 —— 所以本文件可以分批补齐，不必一次写完。
//
// 翻译原则：
//   · 数字、电话、URL、机构名一律不改动；不确定的宁可保留原文，绝不臆造。
//   · 日文版把中文里的日语专有名词还原为原词（在留カード / 住民登録 / 定期券…）。
//   · heading/subheading 是导航用短标题，保持简短。
(function(){
window.ARTICLES_BODY_I18N = {

// ══════════════ cat12 应急联系（28 块）══════════════
'guide-emergency': {
ja: [
  { type:'paragraph', text:'緊急時は、まず状況の種類を見極めてから電話してください。以下は日本共通の番号と、福岡の公式窓口です。' },
  { type:'heading', text:'生命・安全の緊急' },
  { type:'list', items:[
    { text:'110——犯罪や事故が起きて警察が必要なとき' },
    { text:'119——火災のとき、または救急搬送（救急車）が必要なとき' },
    { text:'#7119——急な病気で救急車を呼ぶべきか迷うときの救急電話相談（福岡県、24時間）。短縮番号がつながらない場合は 092-471-0099' },
    { text:'#8000（子ども）——子どもの夜間の急な病気の相談。短縮番号がつながらない場合は 092-731-4119' },
  ]},
  { type:'heading', text:'中国大使館・領事館' },
  { type:'paragraph', text:'在福岡中国総領事館が領事保護、証明書、緊急時の支援を担当します。日本で緊急事態に遭い領事の支援が必要な場合は、外交部グローバル領事保護緊急ホットライン（24時間）: +86-10-12308 または +86-10-65612308 へ。' },
  { type:'paragraph', text:'・（領事保護の相談 092-752-0085）' },
  { type:'links', items:[ { text:'在福岡中国総領事館', url:'https://fukuoka.china-consulate.gov.cn/' } ]},
  { type:'heading', text:'大学の窓口' },
  { type:'paragraph', text:'九州大学国際部は、在学中の留学生に事務的な相談と緊急時の連絡支援を行っています。寮に関する緊急事態は、まず寮の管理人または管理会社に連絡してください。' },
  { type:'heading', text:'外国人相談窓口' },
  { type:'paragraph', text:'・福岡市外国人総合相談支援センター：0120-66-1799（無料）/ 092-262-1799、受付 平日 8:45~18:00、多言語対応' },
  { type:'links', items:[ { url:'https://www.fcif.or.jp/', text:'福岡よかトピア国際交流財団' } ]},
  { type:'paragraph', text:'・福岡県国際交流センター：外国人向けの生活支援情報' },
  { type:'links', items:[ { text:'kokusaihiroba.or.jp', url:'https://www.kokusaihiroba.or.jp/' } ]},
  { type:'heading', text:'参考情報源' },
  { type:'links', items:[
    { text:'九州大学・生活ガイド／パンフレット（リビングガイド含む）', url:'https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/' },
    { url:'https://www.isc.kyushu-u.ac.jp/intlweb/student', text:'Global Gateway（在留・住居・生活情報）' },
    { text:'出入国在留管理庁', url:'http://www.moj.go.jp/isa/index.html' },
    { text:'文部科学省・外国人留学生が利用できる制度一覧', url:'https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm' },
    { text:'外務省海外安全情報', url:'https://www.anzen.mofa.go.jp/' },
  ]},
  { type:'heading', text:'生活の相談' },
  { type:'list', items:[
    { text:'188——消費生活相談（消費者トラブル）' },
    { text:'#8008 または 0570-013-320——女性の相談専用ダイヤル（DV など）' },
    { text:'189——児童相談（虐待など）' },
  ]},
  { type:'heading', text:'詐欺に遭ったら（被害後の応急対応）' },
  { type:'paragraph', text:'留学生は詐欺の被害に遭いやすい層です。すでに送金してしまった、あるいは今まさに操られている場合は、以下の優先順位で対応してください。詐欺の見抜き方と日常の防犯については、トップの「新入生必読・詐欺防止ガイド」をご覧ください。' },
  { type:'steps', items:[
    { title:'すぐに銀行へ連絡', desc:'送金元の口座がある銀行に連絡し、支払停止と口座凍結を依頼します。送金後は数分で引き出される可能性があるため、早いほどよいです' },
    { title:'警察に届け出る', desc:'日本では 110 番。チャット履歴、送金記録、相手の情報を証拠として保存してください' },
    { title:'中国の家族から通報してもらう', desc:'家族に中国国内の 110 番へ電話してもらい、電信ネットワーク詐欺対策センターにつないでもらいます' },
    { desc:'領事保護の電話番号は公式サイトで確認してください。外交部グローバル領事保護緊急ホットライン（24時間）は上の「中国大使館・領事館」の項に記載', title:'在外中国大使館・領事館に連絡' },
  ]},
  { type:'notice', text:'💡 騙されたのはあなたのせいではありません。詐欺グループの手口は非常に精巧です。お金が戻る可能性は高くありませんが、届け出には意味があります。恥ずかしさから黙り込まないでください。' },
  { type:'heading', text:'この地域の災害リスク' },
  { type:'paragraph', text:'福岡は地震が多い地域ではありませんが、リスクがないわけではありません。警固断層帯は糸島半島北部の海域から南東へ福岡市街を貫き、太宰府付近まで延びています。その南東部は比較的大きな地震が起きる可能性があると評価されており、日本の主要な活断層の中では確率が高めです。北西部の海域では 2005 年に地震が発生しました。' },
  { type:'list', items:[
    { text:'洪水：瑞梅寺川、雷山川などは脊振山地を源としており、大雨のときに氾濫する可能性があります。キャンパスは標高が高くリスクは小さめですが、国道 202 号沿いに住む場合は、賃貸契約時に渡される防災事項をよく読んでください' },
    { text:'水不足：2025–2026 年の冬、福岡全域が深刻な水不足となり、一部のダムは貯水率がほぼ底をつき、糸島地区では一時減圧給水が行われました' },
    { text:'原子力：玄海原子力発電所は伊都キャンパスから直線距離で約 40 km ですが、福岡は南東と北西の風が主で、日本海側の津波の可能性も低いとされています' },
  ]},
  { type:'notice', text:'福岡市の LINE 公式アカウントは防災情報を配信しています。来日後に追加しておくことをおすすめします —— 本記事の上にある「福岡市 LINE 公式アカウント」の節を参照。' },
  { type:'links', items:[
    { text:'地震調査研究推進本部・警固断層帯', url:'https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/' },
    { text:'気象庁', url:'https://www.jma.go.jp/bosai/' },
  ]},
  { type:'notice', text:'本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。' },
],
en: [
  { type:'paragraph', text:'In an emergency, work out what kind of situation it is before you dial. Below are Japan’s nationwide numbers and Fukuoka’s official points of contact.' },
  { type:'heading', text:'Life-Threatening / Safety Emergencies' },
  { type:'list', items:[
    { text:'110 — a crime or accident has occurred and you need the police' },
    { text:'119 — fire, or you need an ambulance' },
    { text:'#7119 — emergency phone consultation when you fall ill suddenly and are unsure whether to call an ambulance (Fukuoka Prefecture, 24 hours). If the short number will not connect, dial 092-471-0099' },
    { text:'#8000 (children) — nighttime consultation for a child’s sudden illness. If the short number will not connect, dial 092-731-4119' },
  ]},
  { type:'heading', text:'Chinese Embassy & Consulate' },
  { type:'paragraph', text:'The Chinese Consulate-General in Fukuoka handles consular protection, documents, and emergency assistance. If you face an emergency in Japan and need consular help, call the Ministry of Foreign Affairs global consular protection hotline (24 hours): +86-10-12308 or +86-10-65612308.' },
  { type:'paragraph', text:'· (Consular protection enquiries 092-752-0085)' },
  { type:'links', items:[ { text:'Chinese Consulate-General in Fukuoka', url:'https://fukuoka.china-consulate.gov.cn/' } ]},
  { type:'heading', text:'University Contacts' },
  { type:'paragraph', text:'Kyushu University’s International Student Affairs Division provides administrative consultation and emergency contact support for enrolled international students. For dorm-related emergencies, contact the dorm supervisor or the management office first.' },
  { type:'heading', text:'Support Desks for Foreign Residents' },
  { type:'paragraph', text:'· Fukuoka City International Support Center: 0120-66-1799 (toll-free) / 092-262-1799, open weekdays 8:45–18:00, multilingual support' },
  { type:'links', items:[ { url:'https://www.fcif.or.jp/', text:'Fukuoka Yokatopia International Exchange Foundation' } ]},
  { type:'paragraph', text:'· Fukuoka Prefectural International Exchange Center: living-support information for foreign residents' },
  { type:'links', items:[ { text:'kokusaihiroba.or.jp', url:'https://www.kokusaihiroba.or.jp/' } ]},
  { type:'heading', text:'Reference Sources' },
  { type:'links', items:[
    { text:'Kyushu University · Student life guides / pamphlets (incl. the Living Guide)', url:'https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/' },
    { url:'https://www.isc.kyushu-u.ac.jp/intlweb/student', text:'Global Gateway (residence, housing, daily life)' },
    { text:'Immigration Services Agency of Japan', url:'http://www.moj.go.jp/isa/index.html' },
    { text:'MEXT · List of programs available to international students', url:'https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm' },
    { text:'MOFA Overseas Travel Safety Information', url:'https://www.anzen.mofa.go.jp/' },
  ]},
  { type:'heading', text:'Everyday Help Lines' },
  { type:'list', items:[
    { text:'188 — consumer affairs consultation (consumer disputes)' },
    { text:'#8008 or 0570-013-320 — women’s helpline (domestic violence, etc.)' },
    { text:'189 — child welfare consultation (abuse, etc.)' },
  ]},
  { type:'heading', text:'If You Are Scammed (emergency response)' },
  { type:'paragraph', text:'International students are a high-risk group for scams. If you have already transferred money, or are being manipulated right now, act in the following order. For how to recognise scams and protect yourself day to day, see “Anti-Fraud Guide (Must-Read)”, pinned at the top of the guide list.' },
  { type:'steps', items:[
    { title:'Contact your bank immediately', desc:'Call the bank holding the sending account and request a stop payment and an account freeze. Funds can be withdrawn within minutes of a transfer, so the sooner the better' },
    { title:'Report to the police', desc:'In Japan, dial 110. Keep chat logs, transfer records, and the other party’s details as evidence' },
    { title:'Have relatives in China file a report', desc:'Ask family to dial 110 in China and ask to be connected to the anti-telecom-fraud centre' },
    { desc:'Look up the consular protection number on the official website. The MFA global consular protection hotline (24 h) is listed under “Chinese Embassy & Consulate” above', title:'Contact the Chinese embassy or consulate' },
  ]},
  { type:'notice', text:'💡 Being scammed is not your fault — these operations are highly sophisticated. The chance of recovering the money is low, but reporting still matters. Do not stay silent out of shame.' },
  { type:'heading', text:'Disaster Risk in This Area' },
  { type:'paragraph', text:'Fukuoka is not a highly earthquake-prone region, but it is not without risk. The Kego Fault Zone runs from the sea off the northern Itoshima Peninsula south-east through central Fukuoka as far as the area around Dazaifu. Its south-eastern segment is assessed as capable of producing a relatively large earthquake, with a probability on the higher side among Japan’s major active faults. An earthquake occurred in the north-western offshore segment in 2005.' },
  { type:'list', items:[
    { text:'Flooding: the Zuibaiji and Raizan rivers rise in the Sefuri mountains and can overflow during heavy rain. The campus sits on higher ground and is lower-risk; if you live along Route 202, read the disaster-prevention notes given to you when renting carefully' },
    { text:'Water shortage: in the winter of 2025–2026 the whole of Fukuoka faced a severe water shortage, with some reservoirs nearly empty and the Itoshima area temporarily placed on reduced-pressure supply' },
    { text:'Nuclear power: the Genkai Nuclear Power Plant is roughly 40 km from Ito Campus in a straight line, but Fukuoka’s prevailing winds are south-easterly and north-westerly, and a tsunami on the Sea of Japan side is considered unlikely' },
  ]},
  { type:'notice', text:'Fukuoka City’s official LINE account pushes disaster-prevention information; adding it once you arrive is recommended — see the “Fukuoka City official LINE account” section above.' },
  { type:'links', items:[
    { text:'Headquarters for Earthquake Research Promotion · Kego Fault Zone', url:'https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/' },
    { text:'Japan Meteorological Agency', url:'https://www.jma.go.jp/bosai/' },
  ]},
  { type:'notice', text:'Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website.' },
],
ko: [
  { type:'paragraph', text:'긴급 상황에서는 먼저 어떤 종류인지 판단한 뒤 전화하세요. 아래는 일본 공통 번호와 후쿠오카 지역의 공식 창구입니다.' },
  { type:'heading', text:'생명·안전 긴급' },
  { type:'list', items:[
    { text:'110 — 범죄나 사고가 발생해 경찰이 필요할 때' },
    { text:'119 — 화재, 또는 응급 이송(구급차)이 필요할 때' },
    { text:'#7119 — 갑자기 아파서 구급차를 불러야 할지 판단이 서지 않을 때의 응급 전화 상담(후쿠오카현, 24시간). 단축번호가 연결되지 않으면 092-471-0099' },
    { text:'#8000(어린이) — 아이의 야간 응급 질환 상담. 단축번호가 연결되지 않으면 092-731-4119' },
  ]},
  { type:'heading', text:'중국 대사관·영사관' },
  { type:'paragraph', text:'주후쿠오카 중국 총영사관이 영사 보호, 증명서, 긴급 지원을 담당합니다. 일본에서 긴급 상황을 만나 영사 지원이 필요하면 외교부 글로벌 영사보호 긴급 핫라인(24시간) +86-10-12308 또는 +86-10-65612308 로 연락하세요.' },
  { type:'paragraph', text:'· (영사 보호 상담 092-752-0085)' },
  { type:'links', items:[ { text:'주후쿠오카 중국 총영사관', url:'https://fukuoka.china-consulate.gov.cn/' } ]},
  { type:'heading', text:'학교 관련' },
  { type:'paragraph', text:'규슈대학 국제부는 재학 중인 유학생에게 행정 상담과 긴급 연락 지원을 제공합니다. 기숙사 관련 긴급 상황은 기숙사 관리인 또는 관리 사무소에 먼저 연락하세요.' },
  { type:'heading', text:'외국인 상담 창구' },
  { type:'paragraph', text:'· 후쿠오카시 외국인 종합상담지원센터: 0120-66-1799(무료) / 092-262-1799, 접수 평일 8:45~18:00, 다국어 대응' },
  { type:'links', items:[ { url:'https://www.fcif.or.jp/', text:'후쿠오카 요카토피아 국제교류재단' } ]},
  { type:'paragraph', text:'· 후쿠오카현 국제교류센터: 외국인을 위한 생활 지원 정보' },
  { type:'links', items:[ { text:'kokusaihiroba.or.jp', url:'https://www.kokusaihiroba.or.jp/' } ]},
  { type:'heading', text:'참고 정보원' },
  { type:'links', items:[
    { text:'규슈대학 · 생활 가이드/팸플릿(리빙 가이드 포함)', url:'https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/' },
    { url:'https://www.isc.kyushu-u.ac.jp/intlweb/student', text:'Global Gateway(체류·주거·생활 정보)' },
    { text:'출입국재류관리청', url:'http://www.moj.go.jp/isa/index.html' },
    { text:'문부과학성 · 외국인 유학생이 이용할 수 있는 제도 일람', url:'https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm' },
    { text:'외무성 해외안전정보', url:'https://www.anzen.mofa.go.jp/' },
  ]},
  { type:'heading', text:'생활 관련 상담' },
  { type:'list', items:[
    { text:'188 — 소비생활 상담(소비자 분쟁)' },
    { text:'#8008 또는 0570-013-320 — 여성 상담 전용 회선(가정폭력 등)' },
    { text:'189 — 아동 상담(학대 등)' },
  ]},
  { type:'heading', text:'사기를 당했다면(피해 후 응급 대응)' },
  { type:'paragraph', text:'유학생은 사기 피해가 잦은 집단입니다. 이미 송금했거나 지금 조종당하고 있다면 아래 우선순위대로 대응하세요. 사기 수법 식별과 일상적인 예방은 목록 맨 위의 「신입생 필독 · 사기 방지 가이드」를 참고하세요.' },
  { type:'steps', items:[
    { title:'즉시 은행에 연락', desc:'송금 계좌의 개설 은행에 연락해 지급 정지와 계좌 동결을 요청하세요. 송금 후 몇 분 만에 인출될 수 있으므로 빠를수록 좋습니다' },
    { title:'현지 경찰에 신고', desc:'일본에서는 110번. 대화 기록, 송금 기록, 상대방 정보를 증거로 보관하세요' },
    { title:'중국의 가족에게 신고 요청', desc:'가족이 중국 국내 110번으로 전화해 전기통신 사기 대응 센터로 연결하도록 하세요' },
    { desc:'영사 보호 전화번호는 공식 사이트에서 확인하세요. 외교부 글로벌 영사보호 긴급 핫라인(24시간)은 위 「중국 대사관·영사관」 항목 참조', title:'주재 중국 대사관·영사관에 연락' },
  ]},
  { type:'notice', text:'💡 사기를 당한 것은 당신의 잘못이 아닙니다. 사기 조직의 수법은 매우 정교합니다. 돈을 되찾을 가능성은 크지 않지만 신고에는 의미가 있습니다. 부끄러움 때문에 침묵하지 마세요.' },
  { type:'heading', text:'이 지역의 재해 위험' },
  { type:'paragraph', text:'후쿠오카는 지진이 잦은 지역은 아니지만 위험이 없는 것은 아닙니다. 케고 단층대는 이토시마반도 북부 해역에서 남동쪽으로 후쿠오카 시가지를 가로질러 다자이후 부근까지 이어집니다. 그 남동부는 비교적 큰 지진이 발생할 가능성이 있다고 평가되며, 일본의 주요 활단층 중에서는 확률이 높은 편입니다. 북서부 해역에서는 2005년에 지진이 발생했습니다.' },
  { type:'list', items:[
    { text:'홍수: 즈이바이지천, 라이잔천 등은 세후리 산지에서 발원해 폭우 시 범람할 수 있습니다. 캠퍼스는 지대가 높아 위험이 작은 편이지만, 국도 202호 인근에 산다면 임대 계약 시 제공되는 방재 사항을 잘 읽어 두세요' },
    { text:'물 부족: 2025–2026년 겨울 후쿠오카 전역에 심각한 물 부족이 발생해 일부 댐의 저수율이 바닥에 가까워졌고, 이토시마 지역은 한때 감압 급수가 시행되었습니다' },
    { text:'원자력: 겐카이 원자력발전소는 이토 캠퍼스에서 직선거리로 약 40 km이지만, 후쿠오카는 남동풍과 북서풍이 주를 이루고 동해(일본해) 쪽 쓰나미 가능성도 낮다고 봅니다' },
  ]},
  { type:'notice', text:'후쿠오카시 공식 LINE 계정은 방재 정보를 발송합니다. 입국 후 추가해 두시길 권합니다 —— 본문 위쪽 「후쿠오카시 LINE 공식 계정」 절을 참조하세요.' },
  { type:'links', items:[
    { text:'지진조사연구추진본부 · 케고 단층대', url:'https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/' },
    { text:'일본 기상청', url:'https://www.jma.go.jp/bosai/' },
  ]},
  { type:'notice', text:'이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요.' },
],
},

};
})();
