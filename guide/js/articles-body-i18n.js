// articles-body-i18n.js — 指南正文译本（ja / en / ko）
//
// **按区块 ID 索引**，不是按数组顺序。结构（type、嵌套形状）一律以 content/ 里的
// 中文为准，本文件只覆盖文字字段 —— 所以译本结构永远不可能与中文漂移，
// 且某个区块缺译时只有那一块回退中文，不影响整篇。
//
// 新增/改写内容时：改 content/<article>.json，然后按需在这里补对应 ID 的译文。
// 缺译不报错，只是该块显示中文原文。
// 校验：node tools/check_body_i18n.js
//
// 由 tools/migrate_i18n_to_ids.js 从旧的下标版一次性迁移而来。
(function(){
window.ARTICLES_BODY_I18N = {
 "guide-academic": {
  "ja": {
   "333750": {
    "text": "健康診断と学内の窓口"
   },
   "742187": {
    "text": "授業料免除"
   },
   "444ca9": {
    "text": "「アカウントと証明書 → 履修と授業 → 研究と進学 → 奨学金と免除」の順にまとめています。"
   },
   "cc1cac": {
    "text": "アカウントと各種証明書"
   },
   "3b7366": {
    "text": "SSO-KID の有効化には大学のメールアドレス以外は使えません。成績証明書、在学証明書、新幹線の学割証などは九大公式サイトの certificate ページから申請します。大学院生向けの証明書は ku-cert を使います。"
   },
   "5ed19b": {
    "items": [
     {
      "text": "九大 certificate（成績・在学・学割など）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "大学院生の証明書（ku-cert）",
      "url": "https://ku-cert.kyushu-u.ac.jp/cert/z/c_menu.html/_/g"
     },
     {
      "text": "履修システム（JTC）",
      "url": "https://jlc.kyushu-u.ac.jp/JTCsi/page/placement/ButtonPlacement.aspx"
     },
     {
      "text": "大学のメール（Outlook、大学アカウントでログイン）",
      "url": "https://outlook.office.com/mail/"
     },
     {
      "text": "SSO のパスワード・アカウント（passchg）",
      "url": "https://ci.iii.kyushu-u.ac.jp/m/"
     }
    ]
   },
   "c8db3c": {
    "text": "一部の施設（博多駅前のサテライト施設など）は予約しないと入れません。QBS の学生でなくても入れますが、説明会などの場面では発言しにくいことがあります。駐車場は car-entry システムから申請します。"
   },
   "ad0d60": {
    "items": [
     {
      "text": "博多サテライト施設のガイド",
      "url": "https://www.kyushu-u.ac.jp/ja/university/facility/external/hakata/guide/"
     },
     {
      "text": "学内駐車場の申請",
      "url": "https://car-entry.cargate.kyushu-u.ac.jp/reg_apply/"
     },
     {
      "text": "楽天ポイントカードの申込",
      "url": "https://pointcard.rakuten.co.jp/"
     }
    ]
   },
   "c8e67d": {
    "text": "履修と授業"
   },
   "e254fb": {
    "text": "履修登録は通常、新学期の第 1～2 週に始まります（4/8～4/10 ごろ。大学からの通知が優先）。JTW は独立した課程体系で、資格のある学生には大学から個別にメールで案内があります。"
   },
   "b1a9b5": {
    "text": "教科書は最初の授業で初めて指定されるのが普通なので、買い方を先に考えておく必要があります。先輩から中古を譲ってもらう手もあります。博士課程の学生は国際教育交流センター（ISC）の日本語コースを受講できます。詳細は ISC のページへ。"
   },
   "9ce243": {
    "items": [
     {
      "text": "ISC の日本語コース",
      "url": "https://isc.kyushu-u.ac.jp/center/international/japaneselang/"
     }
    ]
   },
   "f9e37c": {
    "text": "研究と進学"
   },
   "5b832c": {
    "text": "九大を直接受験する場合、先に教授へ連絡が必要か"
   },
   "acc4f9": {
    "text": "必要です。まず教授に連絡し、受け入れの意思を確認してから受験してください。 これは教授が外国人学生を受け入れるかどうか、研究室に枠があるかどうかに関わります —— 試験に合格しても、枠がなければ入学できないことがあります。学部の GPA だけで決まるわけではなく、主に教授の判断によります。情報系の一部の専攻では内諾が不要ですが、それでも事前に連絡して確認することをおすすめします。"
   },
   "6be666": {
    "text": "指導教員が定年退職に近い場合"
   },
   "406f13": {
    "text": "博士課程に進む予定で、教授の退職により修了が延びたり指導教員が変わったりすることが心配なら、事前にそれとなく状況を確認しておくとよいでしょう。通常、退職が近い教授は学生のその後の指導を手配してくれます。いちばん確実なのは、教授と直接会って懸念を伝えることです。"
   },
   "3668c3": {
    "text": "研究生（リサーチスチューデント）"
   },
   "93d2c1": {
    "text": "経験は教授のスタイルに大きく左右されます。全て英語で指導し要求も厳しい先生もいれば、比較的自由で自主学習に任せる先生もいます。研究室にいる時間は研究室ごとの決まりで、時間どおりに来ることが基本的な要件です。詳しくは教授か先輩に聞いてください。"
   },
   "eedeaa": {
    "text": "受験の参考：専攻ごとに事情が違います。まず一度受験してみて出題の傾向と要求を把握し、それを踏まえて準備するのもひとつの方法です。"
   },
   "14676e": {
    "text": "奨学金と免除"
   },
   "35d880": {
    "text": "RA（リサーチアシスタント）"
   },
   "fbd83d": {
    "text": "九大の RA は全学で基準が統一されており、数学系ではおよそ 44,000 円/月との声があります（経験値で、部局や年度によって異なる場合があります）。RA は適切な研究課題があって初めて申請でき、誰でも得られるものではなく競争もそれなりにあります。ネット上の収入のスクリーンショットは一般的な水準を表すものではないので、参考程度に。"
   },
   "853a53": {
    "text": "私費留学生向けの奨学金"
   },
   "b6950e": {
    "text": "私費留学生が申請できる奨学金は、国際教育交流センター（ISC）の「私費留学生奨学金掲示板」が最も信頼できる情報源で、現在募集中の制度が随時更新されます。募集期間は短いことが多いので、定期的に確認し、条件と締切を早めに押さえてください。"
   },
   "066616": {
    "items": [
     {
      "text": "ISC 私費留学生奨学金掲示板（最新年度）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang=jp"
     }
    ]
   },
   "c3f0b4": {
    "text": "通常は campusweb にログインして申請します（操作は 参照【在留手続き·campus のログイン申請】）。受付期間は大学からの通知が優先します。"
   },
   "e248db": {
    "text": "日本語コース（JTCs）"
   },
   "7fbb45": {
    "text": "九州大学の留学生センターは日本語コース（Japanese Training Courses）を開講しています。指定期間内にオンラインで登録し、プレースメントテストを受ける必要があります。登録期間を逃すと後から申し込むことはできません。"
   },
   "66a59f": {
    "items": [
     {
      "text": "登録期間は通常、学期が始まった最初の週（例：4 月 13～18 日）"
     },
     {
      "text": "対象は学部生、大学院生、非正課生"
     },
     {
      "text": "問い合わせ：intlr-isc@jimu.kyushu-u.ac.jp / 092-802-2228"
     }
    ]
   },
   "32f280": {
    "items": [
     {
      "text": "JTCs の登録ページ",
      "url": "https://isc.kyushu-u.ac.jp/center/jtcs/"
     }
    ]
   },
   "6aab6e": {
    "text": "このほか集中日本語コース（Intensive Japanese Courses）があり、秋学期は全留学生に開かれています（日本語能力や指導教員の許可などの条件を満たす必要があります）。"
   },
   "048da7": {
    "text": "健康診断"
   },
   "9bf76b": {
    "text": "毎年 4 月と 10 月に定期健康診断があります（通常はビッグさんど 2 階）。受診後は健康診断書を無料で発行できます。日程が合わない場合は変更できます。"
   },
   "c29b18": {
    "text": "相談窓口の一覧"
   },
   "9e1128": {
    "text": "部局別の問い合わせ先"
   },
   "7b2c1e": {
    "items": [
     {
      "text": "人文・地球社会担当：jbkkyomu1lt@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "人環・教育担当：jbkkyomu1ed@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "法学担当：jbkkyomu2la@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "経済担当：jbkkyomu2ec@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "学生係：jbggakusei@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "f40f04": {
    "text": "学年暦：適用版の確認"
   },
   "f8719f": {
    "headers": [
     "学期",
     "2026 年度"
    ],
    "rows": [
     [
      "春学期",
      "04-08 ～ 06-09"
     ],
     [
      "夏学期",
      "06-10 ～ 08-07"
     ],
     [
      "秋学期",
      "10-01 ～ 12-06"
     ],
     [
      "冬学期",
      "12-07 ～ 02-15"
     ],
     [
      "春休み",
      "04-01 ～ 04-07"
     ],
     [
      "夏休み",
      "08-08 ～ 09-30"
     ],
     [
      "冬休み",
      "12-26 ～ 01-04"
     ]
    ]
   },
   "92c5cc": {
    "text": "入学式 04-03（秋季 10-02）· 学位記授与 03-25（秋季 09-25）· 九大祭 10-30 ～ 11-02。"
   },
   "828e4c": {
    "text": "**これは全学共通の標準日程で、学府・学部ごとに異なる場合があります** —— 公式ページ自体がそう注記しています。帰国の航空券、試験、インターンを決める前に、必ず自分の学部のサイトでもう一度確認してください。工学部の日程で別の学部の予定を立てないように。"
   },
   "acd972": {
    "items": [
     {
      "text": "九州大学・学事日程（全学）",
      "url": "https://www.kyushu-u.ac.jp/ja/faculty/schedule/"
     }
    ]
   },
   "1240ad": {
    "text": "証明書の申請方法"
   },
   "7d38ec": {
    "text": "在学証明書・成績証明書・卒業（修了）見込証明書などは、大学の証明書発行窓口で申請します。一部は**学内の自動発券機**でも取得できます（下記参照）。"
   },
   "d2ae99": {
    "items": [
     {
      "text": "九州大学・各種証明書の発行",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "ISC・留学生の日常生活ガイド",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-019"
     }
    ]
   },
   "c9398a": {
    "text": "学外の日本語教室（6 か所）"
   },
   "714c74": {
    "text": "九大自身の日本語コースは**無料**（上のリンク参照）。学外にも**ボランティア教室**が 6 か所あり、料金は無料〜1 回 100 円。日常会話を練習したい、地域の人と知り合いたい人には校内の授業より向いています。多くは事前のメール連絡が必要です。"
   },
   "f627ad": {
    "headers": [
     "教室",
     "場所",
     "時間",
     "料金"
    ],
    "rows": [
     [
      "伊都インターナショナルサークル",
      "伊都キャンパス West4",
      "木 17:30〜20:00",
      "入会金 500 円"
     ],
     [
      "日本語ひろば いとしま",
      "糸島市人権センター",
      "要問い合わせ",
      "1 回 100 円"
     ],
     [
      "元岡国際交流ひろば",
      "元岡公民館",
      "水 18:30〜20:00",
      "無料"
     ],
     [
      "Global Friendship",
      "福岡市国際会館 4F",
      "要問い合わせ",
      "1 回 100 円"
     ],
     [
      "かすが・にほんごひろば",
      "クローバープラザ 3F",
      "要問い合わせ",
      "月 600 円"
     ],
     [
      "香椎浜 よるとも会",
      "香椎浜小学校",
      "要問い合わせ",
      "無料"
     ]
    ]
   },
   "0d6cf9": {
    "items": [
     {
      "text": "伊都インターナショナルサークル 090-8764-9588",
      "url": "mailto:hatae_iic@yahoo.co.jp"
     },
     {
      "text": "日本語ひろば いとしま 092-322-5095",
      "url": "mailto:nihongoitoshima@gmail.com"
     },
     {
      "text": "元岡国際交流ひろば— メールで問い合わせ",
      "url": "mailto:motookahiroba@gmail.com"
     },
     {
      "text": "Global Friendship 090-5727-9925",
      "url": "mailto:globalfriendshipnihongo@gmail.com"
     },
     {
      "text": "かすが・にほんごひろば 080-6441-0763",
      "url": "mailto:fk.kasuga.nihongo@gmail.com"
     },
     {
      "text": "香椎浜 よるとも会 090-5921-7798",
      "url": "mailto:tomoikifukuoka@gmail.com"
     }
    ]
   },
   "8d720b": {
    "text": "自動発券機（8:30〜17:15）"
   },
   "7ddd0f": {
    "text": "在学証明書・通学証明書・学割証・健康診断証明書をセルフで発行できます。**並ばずに済みます**。注意：**利用できるのは正規課程の学生のみ** —— 研究生・交換留学生は所属窓口へ。"
   },
   "9dc610": {
    "headers": [
     "キャンパス",
     "場所"
    ],
    "rows": [
     [
      "伊都",
      "センター1号館 2F"
     ],
     [
      "伊都",
      "イースト1号館C棟 1F"
     ],
     [
      "伊都",
      "ウエスト1号館A棟 3F"
     ],
     [
      "伊都",
      "ウエスト4号館 2F"
     ],
     [
      "伊都",
      "ウエスト5号館東 3F"
     ],
     [
      "筑紫",
      "ビスタホール売店入口"
     ],
     [
      "大橋",
      "芸術工学部管理棟 1F"
     ],
     [
      "病院",
      "基礎研究棟A棟 1F"
     ]
    ]
   },
   "1a0232": {
    "text": "**健康診断を受けていないと健康診断証明書は発行できません。** 奨学金の申請や就職活動で必要になります。必ず受けてください。"
   },
   "0c0390": {
    "text": "証明書の受け取り：正規課程の学生は**自動発券機**、研究生・交換留学生は各キャンパスの**キャンパスライフ・健康支援センター**で申請（無料）。"
   },
   "b41e84": {
    "text": "ハラスメント対策推進室：ハラスメント（セクシュアル・アカデミック・パワー）の相談・申告窓口。"
   },
   "e6e7d1": {
    "items": [
     {
      "text": "健康支援センターパンフレット（中国語版）",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_chinese_2026.pdf"
     },
     {
      "text": "同（英語版）",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_english_2026.pdf"
     },
     {
      "text": "同（日本語版）",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_japanese_2026.pdf"
     },
     {
      "text": "学生定期健康診断（公式）",
      "url": "https://chc.kyushu-u.ac.jp/student/health_check/"
     }
    ]
   },
   "4d947b": {
    "text": "九大は**英語による授業を多数開講**しています。2026 年度に交換留学生が聴講できる科目のリストが別途公開されています。日本語の授業を避けたい場合は、まずこのリストをご確認ください。"
   },
   "d13843": {
    "items": [
     {
      "text": "英語による授業の科目リスト（日本語ページ）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/english"
     },
     {
      "text": "Courses Conducted in English（英語ページ）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/en/student/english"
     }
    ]
   },
   "ac541e": {
    "items": [
     {
      "text": "健康支援センター：ビッグさんど 2 階，心理・健康相谈：ビッグさんど 2 階。心理・健康の相談"
     },
     {
      "text": "留学生相談室（ISC）：B540，履修・住居・疾病・育儿，不便向导师谈的事：イースト1号館 B540。履修、住居、病気、育児など、指導教員には話しにくいことも"
     },
     {
      "text": "キャンパスヘルスサポートルーム：E-B-202，对人关系・生活配慮：イースト1号館2階 E-B-202。対人関係、生活上の合理的配慮など"
     },
     {
      "text": "マルチリンガル交流スペース（EZぷらっと）：E-C-202，留学支援・语学・借阅（EZぷらっと）：イースト1号館2階 E-C-202。留学支援、語学学習、書籍・DVD の貸出"
     },
     {
      "text": "教務課：イースト1号館 C108。履修登録、証明書、学籍"
     },
     {
      "text": "学生課：イースト1号館 C108。通学定期の学割、学生証の再発行、各種申請"
     },
     {
      "text": "サポートセンター：イースト1号館 C108。ビザ、病院の紹介、住居、日本語教室など"
     }
    ]
   }
  },
  "en": {
   "333750": {
    "text": "Health Checkups and On-Campus Desks"
   },
   "742187": {
    "text": "Tuition fee waivers"
   },
   "444ca9": {
    "text": "Organised as: accounts and certificates → course registration → research and admission → scholarships and fee waivers."
   },
   "cc1cac": {
    "text": "Accounts and Certificates"
   },
   "3b7366": {
    "text": "Activating your SSO-KID requires a university email address; no other address will work. Transcripts, enrolment certificates, and Shinkansen student-discount certificates are requested from the certificate page on the university website; graduate students use ku-cert for their certificates."
   },
   "5ed19b": {
    "items": [
     {
      "text": "Kyudai certificates (transcript / enrolment / student discount)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "Graduate student certificates (ku-cert)",
      "url": "https://ku-cert.kyushu-u.ac.jp/cert/z/c_menu.html/_/g"
     },
     {
      "text": "Course registration system (JTC)",
      "url": "https://jlc.kyushu-u.ac.jp/JTCsi/page/placement/ButtonPlacement.aspx"
     },
     {
      "text": "University email (Outlook — sign in with your university account)",
      "url": "https://outlook.office.com/mail/"
     },
     {
      "text": "SSO password / account (passchg)",
      "url": "https://ci.iii.kyushu-u.ac.jp/m/"
     }
    ]
   },
   "c8db3c": {
    "text": "Some facilities, such as the satellite premises in front of Hakata Station, require a booking to enter. Students outside QBS may enter too, though at briefings and similar events it can be awkward to speak up. Parking spaces are applied for through the car-entry system."
   },
   "ad0d60": {
    "items": [
     {
      "text": "Hakata satellite facility guide",
      "url": "https://www.kyushu-u.ac.jp/ja/university/facility/external/hakata/guide/"
     },
     {
      "text": "Campus parking application",
      "url": "https://car-entry.cargate.kyushu-u.ac.jp/reg_apply/"
     },
     {
      "text": "Rakuten Point Card application",
      "url": "https://pointcard.rakuten.co.jp/"
     }
    ]
   },
   "c8e67d": {
    "text": "Course Registration"
   },
   "e254fb": {
    "text": "Registration usually opens in the first or second week of a new term (around 8–10 April; the university’s announcement governs). JTW runs on its own course structure, and eligible students are notified by separate email."
   },
   "b1a9b5": {
    "text": "Textbooks are typically only announced in the first class, so think about how you will buy them in advance; picking up second-hand copies from senior students is another route. Doctoral students may take Japanese courses at the International Student Center (ISC) — see the ISC page."
   },
   "9ce243": {
    "items": [
     {
      "text": "ISC Japanese courses",
      "url": "https://isc.kyushu-u.ac.jp/center/international/japaneselang/"
     }
    ]
   },
   "f9e37c": {
    "text": "Research and Admission"
   },
   "5b832c": {
    "text": "Do you need to contact a professor before sitting the entrance exam?"
   },
   "acc4f9": {
    "text": "Yes. You must contact a professor and confirm they are willing to take you before sitting the exam. This bears on whether the professor accepts international students and whether the lab has a place — even if you pass the exam, without a place you may not be able to enrol. Undergraduate GPA is not the only factor; it comes down largely to the professor’s judgement. A few informatics programs do not require prior consent, but contacting them in advance is still advisable."
   },
   "6be666": {
    "text": "If your supervisor is nearing retirement"
   },
   "406f13": {
    "text": "If you plan to pursue a doctorate and worry that a supervisor’s retirement might delay your graduation or force a change of supervisor, it is worth quietly finding out where things stand beforehand. Professors close to retirement usually arrange onward supervision for their students. The most direct approach is to raise your concerns with the professor face to face."
   },
   "3668c3": {
    "text": "Research students"
   },
   "93d2c1": {
    "text": "The experience depends heavily on the professor’s style: some supervise entirely in English and demand a lot; others are more hands-off and leave you to study independently. How long you are expected to be in the lab is set within each lab, and turning up on time is a basic expectation. Ask your professor or senior students for specifics."
   },
   "eedeaa": {
    "text": "On preparing: circumstances differ by program. One approach is to sit the exam once to learn the question types and expectations, then prepare accordingly."
   },
   "14676e": {
    "text": "Scholarships and Fee Waivers"
   },
   "35d880": {
    "text": "RA (Research Assistant)"
   },
   "fbd83d": {
    "text": "Kyudai applies a university-wide standard for RA positions; in mathematics, students report around ¥44,000 a month (an experience-based figure that may differ by department and year). An RA position requires a suitable research topic and is not available to everyone — competition is real. Income screenshots circulating online do not represent the typical level; treat them as anecdote."
   },
   "853a53": {
    "text": "Scholarships for self-funded international students"
   },
   "b6950e": {
    "text": "For scholarships open to self-funded international students, the most authoritative source is the International Student Center’s (ISC) scholarship noticeboard, which is updated as programs open. Application windows are often short, so check regularly and pin down the conditions and deadline early."
   },
   "066616": {
    "items": [
     {
      "text": "ISC scholarship noticeboard for self-funded students (current year)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang=jp"
     }
    ]
   },
   "c3f0b4": {
    "text": "Generally applied for by logging into campusweb (for how, See【Residence Procedures·campusweb login application】). The application window follows the university’s announcement."
   },
   "e248db": {
    "text": "Japanese Courses (JTCs)"
   },
   "7fbb45": {
    "text": "The Kyushu University international student center runs Japanese Training Courses. You must register online within the designated period and take a placement test; if you miss registration, you cannot apply later."
   },
   "66a59f": {
    "items": [
     {
      "text": "Registration is usually in the first week after term begins (for example 13–18 April)"
     },
     {
      "text": "Open to undergraduates, graduate students, and non-degree students"
     },
     {
      "text": "Enquiries: intlr-isc@jimu.kyushu-u.ac.jp / 092-802-2228"
     }
    ]
   },
   "32f280": {
    "items": [
     {
      "text": "JTCs registration page",
      "url": "https://isc.kyushu-u.ac.jp/center/jtcs/"
     }
    ]
   },
   "6aab6e": {
    "text": "There are also Intensive Japanese Courses, open to all international students in the autumn term (subject to conditions such as Japanese proficiency and your supervisor’s permission)."
   },
   "048da7": {
    "text": "Health checkup"
   },
   "9bf76b": {
    "text": "Regular health checkups are held each April and October (usually on the 2nd floor of ビッグさんど / Big Sand). Afterwards you can have a health certificate issued free of charge. If the date clashes with something, you can reschedule."
   },
   "c29b18": {
    "text": "Consultation desks"
   },
   "9e1128": {
    "text": "Contacts by department"
   },
   "7b2c1e": {
    "items": [
     {
      "text": "Humanities / Integrated Sciences for Global Society: jbkkyomu1lt@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Human-Environment Studies / Education: jbkkyomu1ed@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Law: jbkkyomu2la@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Economics: jbkkyomu2ec@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Student affairs: jbggakusei@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "f40f04": {
    "text": "Academic calendar: check which version applies"
   },
   "f8719f": {
    "headers": [
     "Term",
     "2026 academic year"
    ],
    "rows": [
     [
      "Spring term",
      "04-08 – 06-09"
     ],
     [
      "Summer term",
      "06-10 – 08-07"
     ],
     [
      "Autumn term",
      "10-01 – 12-06"
     ],
     [
      "Winter term",
      "12-07 – 02-15"
     ],
     [
      "Spring break",
      "04-01 – 04-07"
     ],
     [
      "Summer break",
      "08-08 – 09-30"
     ],
     [
      "Winter break",
      "12-26 – 01-04"
     ]
    ]
   },
   "92c5cc": {
    "text": "Entrance ceremony 04-03 (autumn 10-02) · Degree conferment 03-25 (autumn 09-25) · Kyudaisai 10-30 – 11-02."
   },
   "828e4c": {
    "text": "**This is the university-wide standard schedule, and individual graduate schools and faculties may differ** — the official page says as much itself. Before booking flights home, exams, or an internship, check your own faculty’s website again. Do not plan around the Engineering faculty’s dates if you are in another faculty."
   },
   "acd972": {
    "items": [
     {
      "text": "Kyushu University · academic calendar (university-wide)",
      "url": "https://www.kyushu-u.ac.jp/ja/faculty/schedule/"
     }
    ]
   },
   "1240ad": {
    "text": "How to request certificates"
   },
   "7d38ec": {
    "text": "Certificates of enrolment, transcripts and expected-graduation certificates are issued through the university's certificate desk. Some are also available from the **self-service machines** on campus (see below)."
   },
   "d2ae99": {
    "items": [
     {
      "text": "Kyushu University · issuing certificates",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "ISC · daily life guide for international students",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-019"
     }
    ]
   },
   "c9398a": {
    "text": "Community Japanese classes (6)"
   },
   "714c74": {
    "text": "Kyushu U.'s own Japanese courses are **free** (link above). Off campus there are **six volunteer-run classes**, from free to 100 JPY per session - better than campus classes if you want everyday conversation and local contacts. Most require an email in advance."
   },
   "f627ad": {
    "headers": [
     "Class",
     "Location",
     "Time",
     "Fee"
    ],
    "rows": [
     [
      "Ito International Circle",
      "Ito Campus West 4",
      "Thu 17:30-20:00",
      "500 JPY joining fee"
     ],
     [
      "Nihongo Hiroba Itoshima",
      "Itoshima Human Rights Center",
      "Ask them",
      "100 JPY / session"
     ],
     [
      "Motooka Kokusai Hiroba",
      "Motooka Community Hall",
      "Wed 18:30-20:00",
      "Free"
     ],
     [
      "Global Friendship",
      "Fukuoka Intl. Hall 4F",
      "Ask them",
      "100 JPY / session"
     ],
     [
      "Kasuga Nihongo Hiroba",
      "Clover Plaza 3F",
      "Ask them",
      "600 JPY / month"
     ],
     [
      "Kashihama Yorutomo-kai",
      "Kashihama Elementary",
      "Ask them",
      "Free"
     ]
    ]
   },
   "0d6cf9": {
    "items": [
     {
      "text": "Ito International Circle 090-8764-9588",
      "url": "mailto:hatae_iic@yahoo.co.jp"
     },
     {
      "text": "Nihongo Hiroba Itoshima 092-322-5095",
      "url": "mailto:nihongoitoshima@gmail.com"
     },
     {
      "text": "Motooka Kokusai Hiroba- email enquiry",
      "url": "mailto:motookahiroba@gmail.com"
     },
     {
      "text": "Global Friendship 090-5727-9925",
      "url": "mailto:globalfriendshipnihongo@gmail.com"
     },
     {
      "text": "Kasuga Nihongo Hiroba 080-6441-0763",
      "url": "mailto:fk.kasuga.nihongo@gmail.com"
     },
     {
      "text": "Kashihama Yorutomo-kai 090-5921-7798",
      "url": "mailto:tomoikifukuoka@gmail.com"
     }
    ]
   },
   "8d720b": {
    "text": "Self-service certificate machines (8:30-17:15)"
   },
   "7ddd0f": {
    "text": "Enrolment certificates, commuter certificates, student discounts and health-check certificates print straight from the machine - **no queue**. Note: **regular-course students only** - research and exchange students go to their faculty counter."
   },
   "9dc610": {
    "headers": [
     "Campus",
     "Location"
    ],
    "rows": [
     [
      "Ito",
      "Center Bldg 1, 2F"
     ],
     [
      "Ito",
      "East Bldg 1C, 1F"
     ],
     [
      "Ito",
      "West Bldg 1A, 3F"
     ],
     [
      "Ito",
      "West Bldg 4, 2F"
     ],
     [
      "Ito",
      "West Bldg 5 East, 3F"
     ],
     [
      "Chikushi",
      "Vista Hall shop entrance"
     ],
     [
      "Ohashi",
      "Design Bldg admin, 1F"
     ],
     [
      "Hospital",
      "Basic Research A, 1F"
     ]
    ]
   },
   "1a0232": {
    "text": "**No health check, no health certificate.** Scholarship applications and job hunting both require it - make sure you attend."
   },
   "0c0390": {
    "text": "Collecting the certificate: regular students use the **self-service machine**; research and exchange students apply at the **Campus Life & Health Support Centre** on each campus (free)."
   },
   "b41e84": {
    "text": "Harassment Prevention Office: the contact point for consultation and reports on harassment (sexual, academic, power)."
   },
   "e6e7d1": {
    "items": [
     {
      "text": "Health Support Centre brochure (Chinese)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_chinese_2026.pdf"
     },
     {
      "text": "Same (English)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_english_2026.pdf"
     },
     {
      "text": "Same (Japanese)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_japanese_2026.pdf"
     },
     {
      "text": "Annual student health check (official)",
      "url": "https://chc.kyushu-u.ac.jp/student/health_check/"
     }
    ]
   },
   "4d947b": {
    "text": "Kyushu U. teaches **many courses in English**. A separate list covers the 2026 courses open to exchange students; if you wish to avoid Japanese-taught classes, check that list first."
   },
   "d13843": {
    "items": [
     {
      "text": "Courses in English (Japanese page)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/english"
     },
     {
      "text": "Courses Conducted in English (English page)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/en/student/english"
     }
    ]
   },
   "ac541e": {
    "items": [
     {
      "text": "Health Support Center (counselling): ビッグさんど 2F. Psychological and health consultations"
     },
     {
      "text": "International Student Consultation Room (ISC): イースト1号館 (East Zone Bldg 1) B540. Course registration, housing, illness, childcare — including things awkward to raise with your supervisor"
     },
     {
      "text": "Campus Health Support Room: イースト1号館 2F, E-B-202. Interpersonal matters, reasonable accommodations for daily life"
     },
     {
      "text": "Multilingual Exchange Space (EZ ぷらっと): イースト1号館 2F, E-C-202. Study-abroad support, language learning, book and DVD lending"
     },
     {
      "text": "Academic Affairs Section: イースト1号館 C108. Course registration, certificates, student records"
     },
     {
      "text": "Student Affairs Section: イースト1号館 C108. Commuter-pass student discounts, replacement student ID, various applications"
     },
     {
      "text": "Support Center: イースト1号館 C108. Visas, hospital referrals, housing, Japanese classes, and more"
     }
    ]
   }
  },
  "ko": {
   "333750": {
    "text": "건강검진과 교내 창구"
   },
   "742187": {
    "text": "수업료 감면"
   },
   "444ca9": {
    "text": "「계정과 증명서 → 수강신청과 수업 → 연구와 진학 → 장학금과 감면」 순으로 정리했습니다."
   },
   "cc1cac": {
    "text": "계정과 각종 증명서"
   },
   "3b7366": {
    "text": "SSO-KID 활성화에는 학교 메일 주소 외에는 사용할 수 없습니다. 성적증명서, 재학증명서, 신칸센 학할증명서 등은 규슈대 공식 사이트의 certificate 페이지에서 신청합니다. 대학원생 관련 증명서는 ku-cert를 이용합니다."
   },
   "5ed19b": {
    "items": [
     {
      "text": "규슈대 certificate(성적/재학/학할 등)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "대학원생 증명서(ku-cert)",
      "url": "https://ku-cert.kyushu-u.ac.jp/cert/z/c_menu.html/_/g"
     },
     {
      "text": "수강신청 시스템(JTC)",
      "url": "https://jlc.kyushu-u.ac.jp/JTCsi/page/placement/ButtonPlacement.aspx"
     },
     {
      "text": "학교 메일(Outlook, 학교 계정으로 로그인)",
      "url": "https://outlook.office.com/mail/"
     },
     {
      "text": "SSO 비밀번호/계정(passchg)",
      "url": "https://ci.iii.kyushu-u.ac.jp/m/"
     }
    ]
   },
   "c8db3c": {
    "text": "일부 시설(하카타역 앞 외부 시설 등)은 예약해야 들어갈 수 있습니다. QBS 학생이 아니어도 들어갈 수 있지만, 설명회 같은 자리에서는 발언하기 어려울 수 있습니다. 주차 자리는 car-entry 시스템으로 신청합니다."
   },
   "ad0d60": {
    "items": [
     {
      "text": "하카타 외부 시설 가이드",
      "url": "https://www.kyushu-u.ac.jp/ja/university/facility/external/hakata/guide/"
     },
     {
      "text": "학교 주차 자리 신청",
      "url": "https://car-entry.cargate.kyushu-u.ac.jp/reg_apply/"
     },
     {
      "text": "라쿠텐 포인트카드 신청",
      "url": "https://pointcard.rakuten.co.jp/"
     }
    ]
   },
   "c8e67d": {
    "text": "수강신청과 수업"
   },
   "e254fb": {
    "text": "수강신청은 보통 새 학기 첫째~둘째 주에 시작합니다(4/8~4/10경, 학교 공지가 우선). JTW는 독립된 교육과정 체계로, 자격이 되는 학생에게는 학교가 개별 메일로 안내합니다."
   },
   "b1a9b5": {
    "text": "교재는 보통 첫 수업에서야 지정되므로 구입 방법을 미리 생각해 두어야 하며, 선배에게 중고로 받는 방법도 있습니다. 박사과정 학생은 국제유학생센터(ISC)의 일본어 과정을 들을 수 있습니다. 자세한 내용은 ISC 페이지를 참고하세요."
   },
   "9ce243": {
    "items": [
     {
      "text": "ISC 일본어 과정",
      "url": "https://isc.kyushu-u.ac.jp/center/international/japaneselang/"
     }
    ]
   },
   "f9e37c": {
    "text": "연구와 진학"
   },
   "5b832c": {
    "text": "규슈대 직접 수험 시 교수에게 먼저 연락해야 하나"
   },
   "acc4f9": {
    "text": "필요합니다. 먼저 교수에게 연락해 받아줄 의사를 확인한 뒤 시험을 치러야 합니다. 이는 교수가 외국인 학생을 받을지, 연구실에 자리가 있는지와 직결됩니다 —— 시험에 합격해도 자리가 없으면 입학하지 못할 수 있습니다. 학부 학점만으로 결정되는 것이 아니라 주로 교수의 판단에 달려 있습니다. 정보계 일부 전공은 내락이 필요 없지만, 그래도 미리 연락해 확인하기를 권합니다."
   },
   "6be666": {
    "text": "지도교수가 정년에 가까울 때"
   },
   "406f13": {
    "text": "박사과정을 생각하고 있고 교수의 퇴직으로 졸업이 늦어지거나 지도교수가 바뀔까 걱정된다면, 미리 상황을 넌지시 알아보는 것이 좋습니다. 보통 퇴직이 가까운 교수는 학생의 이후 지도를 마련해 둡니다. 가장 확실한 방법은 교수와 직접 만나 우려를 이야기하는 것입니다."
   },
   "3668c3": {
    "text": "연구생(리서치 스튜던트)"
   },
   "93d2c1": {
    "text": "경험은 교수의 스타일에 크게 좌우됩니다. 전부 영어로 지도하고 요구가 엄격한 분도 있고, 비교적 자유롭게 자율 학습에 맡기는 분도 있습니다. 연구실에 머무는 시간은 연구실 내부 규정이며, 정해진 시간에 나오는 것이 기본적인 요구입니다. 구체적인 사항은 교수나 선배에게 물어보세요."
   },
   "eedeaa": {
    "text": "수험 참고: 전공마다 사정이 다릅니다. 먼저 한 번 응시해 출제 유형과 요구 수준을 파악한 뒤 그에 맞춰 준비하는 방법도 있습니다."
   },
   "14676e": {
    "text": "장학금과 감면"
   },
   "35d880": {
    "text": "RA(리서치 어시스턴트)"
   },
   "fbd83d": {
    "text": "규슈대의 RA는 전교 기준이 통일되어 있으며, 수학계는 월 약 44,000엔이라는 이야기가 있습니다(경험값으로 부서·연도에 따라 다를 수 있습니다). RA는 적절한 연구 과제가 있어야 신청할 수 있고 누구나 받을 수 있는 것은 아니며 경쟁도 있는 편입니다. 인터넷의 수입 인증 사진은 일반적인 수준을 대변하지 않으니 참고만 하세요."
   },
   "853a53": {
    "text": "사비 유학생 장학금"
   },
   "b6950e": {
    "text": "사비 유학생이 신청할 수 있는 장학금은 국제유학생센터(ISC)의 「사비 유학생 장학금 게시판」이 가장 신뢰할 수 있는 출처로, 현재 모집 중인 사업이 계속 갱신됩니다. 모집 기간이 짧은 경우가 많으니 정기적으로 확인하고 조건과 마감일을 일찍 확정하세요."
   },
   "066616": {
    "items": [
     {
      "text": "ISC 사비 유학생 장학금 게시판(최신 연도)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang=jp"
     }
    ]
   },
   "c3f0b4": {
    "text": "보통 campusweb에 로그인해 신청합니다(방법은 참조【체류 수속·campus 로그인 신청】). 신청 기간은 학교 공지가 우선합니다."
   },
   "e248db": {
    "text": "일본어 과정(JTCs)"
   },
   "7fbb45": {
    "text": "규슈대학 유학생센터는 일본어 과정(Japanese Training Courses)을 개설합니다. 지정 기간에 온라인으로 등록하고 반 배치 시험(플레이스먼트 테스트)을 봐야 하며, 등록 기간을 놓치면 추가 신청은 불가능합니다."
   },
   "66a59f": {
    "items": [
     {
      "text": "등록 기간은 보통 개강 후 첫째 주(예: 4월 13~18일)"
     },
     {
      "text": "대상은 학부생, 대학원생, 비정규 과정 학생"
     },
     {
      "text": "문의: intlr-isc@jimu.kyushu-u.ac.jp / 092-802-2228"
     }
    ]
   },
   "32f280": {
    "items": [
     {
      "text": "JTCs 등록 페이지",
      "url": "https://isc.kyushu-u.ac.jp/center/jtcs/"
     }
    ]
   },
   "6aab6e": {
    "text": "이 밖에 집중 일본어 과정(Intensive Japanese Courses)이 있으며, 가을학기에는 전체 유학생에게 개방됩니다(일본어 능력, 지도교원 허가 등의 조건을 충족해야 합니다)."
   },
   "048da7": {
    "text": "건강검진"
   },
   "9bf76b": {
    "text": "매년 4월과 10월에 정기 건강검진이 있습니다(보통 ビッグさんど 2층). 검진 후에는 건강진단서를 무료로 발급받을 수 있습니다. 일정이 겹치면 변경할 수 있습니다."
   },
   "c29b18": {
    "text": "상담 창구 일람"
   },
   "9e1128": {
    "text": "부서별 문의처"
   },
   "7b2c1e": {
    "items": [
     {
      "text": "인문·지구사회 담당: jbkkyomu1lt@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "인간환경·교육 담당: jbkkyomu1ed@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "법학 담당: jbkkyomu2la@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "경제 담당: jbkkyomu2ec@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "학생계: jbggakusei@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "f40f04": {
    "text": "학사력: 적용 버전 확인"
   },
   "f8719f": {
    "headers": [
     "학기",
     "2026년도"
    ],
    "rows": [
     [
      "봄학기",
      "04-08 ~ 06-09"
     ],
     [
      "여름학기",
      "06-10 ~ 08-07"
     ],
     [
      "가을학기",
      "10-01 ~ 12-06"
     ],
     [
      "겨울학기",
      "12-07 ~ 02-15"
     ],
     [
      "봄방학",
      "04-01 ~ 04-07"
     ],
     [
      "여름방학",
      "08-08 ~ 09-30"
     ],
     [
      "겨울방학",
      "12-26 ~ 01-04"
     ]
    ]
   },
   "92c5cc": {
    "text": "입학식 04-03(가을 10-02) · 학위기 수여 03-25(가을 09-25) · 규다이사이 10-30 ~ 11-02."
   },
   "828e4c": {
    "text": "**이것은 전교 공통 표준 일정이며 학부·대학원마다 다를 수 있습니다** —— 공식 페이지 자체가 그렇게 명시하고 있습니다. 귀국 항공권, 시험, 인턴을 정하기 전에 반드시 자기 학부 사이트에서 다시 확인하세요. 공학부 일정으로 다른 학부의 일을 계획하지 마세요."
   },
   "acd972": {
    "items": [
     {
      "text": "규슈대학 · 학사일정(전교)",
      "url": "https://www.kyushu-u.ac.jp/ja/faculty/schedule/"
     }
    ]
   },
   "1240ad": {
    "text": "증명서 신청 방법"
   },
   "7d38ec": {
    "text": "재학증명서·성적증명서·졸업(수료)예정증명서 등은 대학 증명서 발급 창구에서 신청합니다. 일부는 **교내 자동 발권기**에서도 발급됩니다(아래 참조)."
   },
   "d2ae99": {
    "items": [
     {
      "text": "규슈대학 · 각종 증명서 발급",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "ISC · 유학생 일상생활 가이드",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-019"
     }
    ]
   },
   "c9398a": {
    "text": "교외 일본어 교실(6곳)"
   },
   "714c74": {
    "text": "규슈대 자체 일본어 강좌는 **무료**입니다(위 링크). 교외에도 **자원봉사 교실**이 6곳 있고 비용은 무료~1회 100엔. 일상 회화를 연습하고 지역 주민과 알고 지내고 싶다면 교내 수업보다 낫습니다. 대부분 사전 메일 연락이 필요합니다."
   },
   "f627ad": {
    "headers": [
     "교실",
     "장소",
     "시간",
     "요금"
    ],
    "rows": [
     [
      "이토 인터내셔널 서클",
      "이토 캠퍼스 West4",
      "목 17:30~20:00",
      "입회금 500엔"
     ],
     [
      "니혼고 히로바 이토시마",
      "이토시마시 인권센터",
      "문의 필요",
      "1회 100엔"
     ],
     [
      "모토오카 국제교류 히로바",
      "모토오카 공민관",
      "수 18:30~20:00",
      "무료"
     ],
     [
      "Global Friendship",
      "후쿠오카시 국제회관 4F",
      "문의 필요",
      "1회 100엔"
     ],
     [
      "카스가 니혼고 히로바",
      "클로버 플라자 3F",
      "문의 필요",
      "월 600엔"
     ],
     [
      "카시하마 요루토모회",
      "카시하마 초등학교",
      "문의 필요",
      "무료"
     ]
    ]
   },
   "0d6cf9": {
    "items": [
     {
      "text": "이토 인터내셔널 서클 090-8764-9588",
      "url": "mailto:hatae_iic@yahoo.co.jp"
     },
     {
      "text": "니혼고 히로바 이토시마 092-322-5095",
      "url": "mailto:nihongoitoshima@gmail.com"
     },
     {
      "text": "모토오카 국제교류 히로바- 메일 문의",
      "url": "mailto:motookahiroba@gmail.com"
     },
     {
      "text": "Global Friendship 090-5727-9925",
      "url": "mailto:globalfriendshipnihongo@gmail.com"
     },
     {
      "text": "카스가 니혼고 히로바 080-6441-0763",
      "url": "mailto:fk.kasuga.nihongo@gmail.com"
     },
     {
      "text": "카시하마 요루토모회 090-5921-7798",
      "url": "mailto:tomoikifukuoka@gmail.com"
     }
    ]
   },
   "8d720b": {
    "text": "자동 발권기(8:30~17:15)"
   },
   "7ddd0f": {
    "text": "재학증명서·통학증명서·학할증·건강진단증명서를 셀프로 발급할 수 있습니다. **줄 서지 않아도 됩니다**. 주의: **정규 과정 학생만 이용 가능** —— 연구생·교환유학생은 소속 창구로."
   },
   "9dc610": {
    "headers": [
     "캠퍼스",
     "위치"
    ],
    "rows": [
     [
      "이토",
      "센터1호관 2F"
     ],
     [
      "이토",
      "이스트1호관 C동 1F"
     ],
     [
      "이토",
      "웨스트1호관 A동 3F"
     ],
     [
      "이토",
      "웨스트4호관 2F"
     ],
     [
      "이토",
      "웨스트5호관 동관 3F"
     ],
     [
      "치쿠시",
      "비스타홀 매점 입구"
     ],
     [
      "오하시",
      "예술공학부 관리동 1F"
     ],
     [
      "병원",
      "기초연구동 A동 1F"
     ]
    ]
   },
   "1a0232": {
    "text": "**건강진단을 받지 않으면 건강진단증명서를 발급받을 수 없습니다.** 장학금 신청과 취업활동에 필요합니다. 반드시 받으세요."
   },
   "0c0390": {
    "text": "증명서 수령: 정규 과정 학생은 **자동 발권기**, 연구생·교환유학생은 각 캠퍼스 **캠퍼스라이프·건강지원센터**에서 신청(무료)."
   },
   "b41e84": {
    "text": "괴롭힘 대책 추진실: 괴롭힘(성희롱·학술·권력) 상담 및 신고 창구."
   },
   "e6e7d1": {
    "items": [
     {
      "text": "건강지원센터 안내(중국어판)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_chinese_2026.pdf"
     },
     {
      "text": "동일(영어판)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_english_2026.pdf"
     },
     {
      "text": "동일(일본어판)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_japanese_2026.pdf"
     },
     {
      "text": "학생 정기 건강진단(공식)",
      "url": "https://chc.kyushu-u.ac.jp/student/health_check/"
     }
    ]
   },
   "4d947b": {
    "text": "규슈대는 **영어 수업을 다수 개설**하고 있습니다. 2026년도 교환유학생이 청강 가능한 과목 목록이 별도로 공개되어 있습니다. 일본어 수업을 피하려면 먼저 이 목록을 확인하세요."
   },
   "d13843": {
    "items": [
     {
      "text": "영어 수업 과목 목록(일본어 페이지)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/english"
     },
     {
      "text": "Courses Conducted in English(영어 페이지)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/en/student/english"
     }
    ]
   },
   "ac541e": {
    "items": [
     {
      "text": "건강지원센터(카운슬링): ビッグさんど 2층. 심리·건강 상담"
     },
     {
      "text": "유학생 상담실(ISC): イースト1号館 B540. 수강, 주거, 질병, 육아 등 지도교수에게 말하기 어려운 내용도"
     },
     {
      "text": "캠퍼스 헬스 서포트룸: イースト1号館 2층 E-B-202. 대인관계, 생활상의 합리적 배려 등"
     },
     {
      "text": "다국어 교류 공간(EZ ぷらっと): イースト1号館 2층 E-C-202. 유학 지원, 어학 학습, 도서·DVD 대출"
     },
     {
      "text": "교무과: イースト1号館 C108. 수강 등록, 증명서, 학적"
     },
     {
      "text": "학생과: イースト1号館 C108. 통학 정기 학할, 학생증 재발급, 각종 신청"
     },
     {
      "text": "서포트센터: イースト1号館 C108. 비자, 병원 소개, 주거, 일본어 교실 등"
     }
    ]
   }
  }
 },
 "guide-antifraud": {
  "ja": {
   "aa3847": {
    "text": "本ページの目的：不審に思ったときの対応を知ること。まず 2 点 —— 送金しない、個人情報を伝えない。被害に遭ったら末尾の最初の電話番号へ。"
   }
  },
  "en": {
   "aa3847": {
    "text": "Purpose of this page: knowing how to respond when something looks suspicious. Two rules first - do not transfer money, do not disclose personal information. If it happens, call the first number at the end."
   }
  },
  "ko": {
   "aa3847": {
    "text": "이 페이지의 목적: 수상할 때의 대응을 아는 것. 우선 두 가지 —— 송금하지 않기, 개인정보 알려주지 않기. 피해를 입으면 마지막의 첫 전화번호로 연락하세요."
   }
  }
 },
 "guide-bank": {
  "ja": {
   "a43466": {
    "text": "口座開設・家賃や学費の支払い・クレジットカード・海外送金 —— 実際の手続き順に構成しています。**まず「銀行に行く前に」をお読みください**。印鑑と営業時間が最も多いつまずきです。"
   }
  },
  "en": {
   "a43466": {
    "text": "Opening an account, paying rent and tuition, credit cards, sending money home - arranged in the order you will actually handle them. **Read \"Before you go to the bank\" first**: the seal and the opening hours are the two most common stumbling blocks."
   }
  },
  "ko": {
   "a43466": {
    "text": "계좌 개설, 월세·학비 납부, 신용카드, 해외 송금 —— 실제 수속 순서대로 구성했습니다. **먼저 「은행에 가기 전에」를 읽어 주세요.** 도장과 영업시간이 가장 흔한 걸림돌입니다."
   }
  }
 },
 "guide-emergency": {
  "ja": {
   "392840": {
    "text": "福岡にはいくつかの国の総領事館が置かれています。緊急時はご自身の国の在外公館に連絡してください。福岡に公館があるのは 韓国 092-771-0461、中国 092-713-1121、アメリカ 092-751-9331、ベトナム 092-263-7668、タイ 092-739-9088 です。福岡に公館がない国は、東京の大使館が管轄します。"
   },
   "800183": {
    "text": "・福岡県国際交流センター：外国人向けの生活支援情報"
   },
   "d9edd9": {
    "text": "緊急時は、まず状況の種類を見極めてから電話してください。以下は日本共通の番号と、福岡の公式窓口です。"
   },
   "e02b8f": {
    "text": "生命・安全の緊急"
   },
   "b3b000": {
    "items": [
     {
      "text": "110——犯罪や事故が起きて警察が必要なとき"
     },
     {
      "text": "119——火災のとき、または救急搬送（救急車）が必要なとき"
     },
     {
      "text": "#7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时）——急な病気で救急車を呼ぶべきか迷うときの救急電話相談（福岡県、24時間）。短縮番号がつながらない場合は 092-471-0099"
     },
     {
      "text": "#8000（子ども）——子どもの夜間の急な病気の相談。短縮番号がつながらない場合は 092-731-4119"
     }
    ]
   },
   "6daaf2": {
    "text": "各国の領事館"
   },
   "06b1ad": {
    "text": "・（中国：領事保護の相談 092-752-0085、外交部グローバル領事保護緊急ホットライン +86-10-12308／韓国：夜間・休日の緊急 080-8588-2806、領事安全コールセンター +82-2-3210-0404）"
   },
   "40a3b6": {
    "items": [
     {
      "text": "在福外国機関の一覧（福岡よかトピア国際交流財団）",
      "url": "https://www.fcif.or.jp/information/living/foreign-agencies-in-fukuoka/"
     }
    ]
   },
   "8ff3c2": {
    "text": "大学の窓口"
   },
   "05277d": {
    "text": "九州大学国際部は、在学中の留学生に事務的な相談と緊急時の連絡支援を行っています。寮に関する緊急事態は、まず寮の管理人または管理会社に連絡してください。"
   },
   "0a63f9": {
    "text": "外国人相談窓口"
   },
   "7ee48c": {
    "text": "・福岡市外国人総合相談支援センター：0120-66-1799（無料）/ 092-262-1799、受付 平日 8:45~18:00、多言語対応"
   },
   "8f6c5b": {
    "items": [
     {
      "url": "https://www.fcif.or.jp/",
      "text": "福岡よかトピア国際交流財団"
     }
    ]
   },
   "04e631": {
    "items": [
     {
      "text": "kokusaihiroba.or.jp",
      "url": "https://www.kokusaihiroba.or.jp/"
     }
    ]
   },
   "0ce8ec": {
    "text": "参考情報源"
   },
   "2687b6": {
    "items": [
     {
      "text": "九州大学・生活ガイド／パンフレット（リビングガイド含む）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student",
      "text": "Global Gateway（在留・住居・生活情報）"
     },
     {
      "text": "出入国在留管理庁",
      "url": "http://www.moj.go.jp/isa/index.html"
     },
     {
      "text": "文部科学省・外国人留学生が利用できる制度一覧",
      "url": "https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm"
     },
     {
      "text": "外務省海外安全情報",
      "url": "https://www.anzen.mofa.go.jp/"
     }
    ]
   },
   "8dd5f7": {
    "text": "生活の相談"
   },
   "70bd3f": {
    "items": [
     {
      "text": "188——消費生活相談（消費者トラブル）"
     },
     {
      "text": "#8008 または 0570-013-320——女性の相談専用ダイヤル（DV など）"
     },
     {
      "text": "189——児童相談（虐待など）"
     }
    ]
   },
   "ab086d": {
    "text": "詐欺に遭ったときの応急対応"
   },
   "8d68f1": {
    "text": "留学生は詐欺の被害に遭いやすい層です。すでに送金してしまった、あるいは今まさに操られている場合は、以下の優先順位で対応してください。詐欺の見抜き方と日常の防犯については、トップの「新入生必読・詐欺防止ガイド」をご覧ください。"
   },
   "070eb4": {
    "items": [
     {
      "title": "すぐに銀行へ連絡",
      "desc": "送金元の口座がある銀行に連絡し、支払停止と口座凍結を依頼します。送金後は数分で引き出される可能性があるため、早いほどよいです"
     },
     {
      "title": "警察に届け出る",
      "desc": "日本では 110 番。チャット履歴、送金記録、相手の情報を証拠として保存してください"
     },
     {
      "title": "母国の家族からも通報してもらう",
      "desc": "家族に、母国の警察や振り込め詐欺の相談窓口へ届け出てもらいます"
     },
     {
      "desc": "領事保護の電話番号は各公館の公式サイトで確認してください。主な連絡先は上の「各国の領事館」の項に記載",
      "title": "自国の領事館に連絡"
     }
    ]
   },
   "682c0c": {
    "text": "💡 騙されたのはあなたのせいではありません。詐欺グループの手口は非常に精巧です。お金が戻る可能性は高くありませんが、届け出には意味があります。恥ずかしさから黙り込まないでください。"
   },
   "1a55d0": {
    "text": "この地域の災害リスク"
   },
   "a2c2ba": {
    "text": "福岡は地震が多い地域ではありませんが、リスクがないわけではありません。警固断層帯は糸島半島北部の海域から南東へ福岡市街を貫き、太宰府付近まで延びています。その南東部は比較的大きな地震が起きる可能性があると評価されており、日本の主要な活断層の中では確率が高めです。北西部の海域では 2005 年に地震が発生しました。"
   },
   "d1f94f": {
    "items": [
     {
      "text": "洪水：瑞梅寺川、雷山川等强降水时可能泛滥；学校地势较高，风险较小、雷山川などは脊振山地を源としており、大雨のときに氾濫する可能性があります。キャンパスは標高が高くリスクは小さめですが、国道 202 号沿いに住む場合は、賃貸契約時に渡される防災事項をよく読んでください"
     },
     {
      "text": "水不足：2025–2026 年の冬、福岡全域が深刻な水不足となり、一部のダムは貯水率がほぼ底をつき、糸島地区では一時減圧給水が行われました"
     },
     {
      "text": "原子力：玄海原子力発電所は伊都キャンパスから直線距離で約 40 km ですが、福岡は南東と北西の風が主で、日本海側の津波の可能性も低いとされています"
     }
    ]
   },
   "aa5140": {
    "text": "福岡市の LINE 公式アカウントは防災情報を配信しています。来日後に追加しておくことをおすすめします —— 本記事の上にある「福岡市 LINE 公式アカウント」の節を参照。"
   },
   "030d6c": {
    "items": [
     {
      "text": "地震調査研究推進本部・警固断層帯",
      "url": "https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/"
     },
     {
      "text": "気象庁",
      "url": "https://www.jma.go.jp/bosai/"
     }
    ]
   },
   "8903c1": {
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "392840": {
    "text": "Several countries maintain a consulate-general in Fukuoka. In an emergency, contact your own country’s mission. Those with an office in Fukuoka are: Korea 092-771-0461, China 092-713-1121, the United States 092-751-9331, Vietnam 092-263-7668, and Thailand 092-739-9088. If your country has no office in Fukuoka, its embassy in Tokyo has jurisdiction."
   },
   "800183": {
    "text": "· Fukuoka Prefectural International Exchange Center: living-support information for foreign residents"
   },
   "d9edd9": {
    "text": "In an emergency, work out what kind of situation it is before you dial. Below are Japan’s nationwide numbers and Fukuoka’s official points of contact."
   },
   "e02b8f": {
    "text": "Life-Threatening / Safety Emergencies"
   },
   "b3b000": {
    "items": [
     {
      "text": "110 — a crime or accident has occurred and you need the police"
     },
     {
      "text": "119 — fire, or you need an ambulance"
     },
     {
      "text": "#7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时） — emergency phone consultation when you fall ill suddenly and are unsure whether to call an ambulance (Fukuoka Prefecture, 24 hours). If the short number will not connect, dial 092-471-0099"
     },
     {
      "text": "#8000 (children) — nighttime consultation for a child’s sudden illness. If the short number will not connect, dial 092-731-4119"
     }
    ]
   },
   "6daaf2": {
    "text": "Your Country’s Consulate"
   },
   "06b1ad": {
    "text": "· (China: consular protection 092-752-0085, MFA global emergency hotline +86-10-12308 / Korea: after-hours emergency 080-8588-2806, consular call center +82-2-3210-0404)"
   },
   "40a3b6": {
    "items": [
     {
      "text": "Foreign agencies in Fukuoka (Fukuoka Yokatopia International Exchange Foundation)",
      "url": "https://www.fcif.or.jp/ej/ej-information/living/foreign-agencies-in-fukuoka/"
     }
    ]
   },
   "8ff3c2": {
    "text": "University Contacts"
   },
   "05277d": {
    "text": "Kyushu University’s International Student Affairs Division provides administrative consultation and emergency contact support for enrolled international students. For dorm-related emergencies, contact the dorm supervisor or the management office first."
   },
   "0a63f9": {
    "text": "Support Desks for Foreign Residents"
   },
   "7ee48c": {
    "text": "· Fukuoka City International Support Center: 0120-66-1799 (toll-free) / 092-262-1799, open weekdays 8:45–18:00, multilingual support"
   },
   "8f6c5b": {
    "items": [
     {
      "url": "https://www.fcif.or.jp/",
      "text": "Fukuoka Yokatopia International Exchange Foundation"
     }
    ]
   },
   "04e631": {
    "items": [
     {
      "text": "kokusaihiroba.or.jp",
      "url": "https://www.kokusaihiroba.or.jp/"
     }
    ]
   },
   "0ce8ec": {
    "text": "Reference Sources"
   },
   "2687b6": {
    "items": [
     {
      "text": "Kyushu University · Student life guides / pamphlets (incl. the Living Guide)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student",
      "text": "Global Gateway (residence, housing, daily life)"
     },
     {
      "text": "Immigration Services Agency of Japan",
      "url": "http://www.moj.go.jp/isa/index.html"
     },
     {
      "text": "MEXT · List of programs available to international students",
      "url": "https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm"
     },
     {
      "text": "MOFA Overseas Travel Safety Information",
      "url": "https://www.anzen.mofa.go.jp/"
     }
    ]
   },
   "8dd5f7": {
    "text": "Everyday Help Lines"
   },
   "70bd3f": {
    "items": [
     {
      "text": "188 — consumer affairs consultation (consumer disputes)"
     },
     {
      "text": "#8008 or 0570-013-320 — women’s helpline (domestic violence, etc.)"
     },
     {
      "text": "189 — child welfare consultation (abuse, etc.)"
     }
    ]
   },
   "ab086d": {
    "text": "What to do after a fraud incident"
   },
   "8d68f1": {
    "text": "International students are a high-risk group for scams. If you have already transferred money, or are being manipulated right now, act in the following order. For how to recognise scams and protect yourself day to day, see “Anti-Fraud Guide (Must-Read)”, pinned at the top of the guide list."
   },
   "070eb4": {
    "items": [
     {
      "title": "Contact your bank immediately",
      "desc": "Call the bank holding the sending account and request a stop payment and an account freeze. Funds can be withdrawn within minutes of a transfer, so the sooner the better"
     },
     {
      "title": "Report to the police",
      "desc": "In Japan, dial 110. Keep chat logs, transfer records, and the other party’s details as evidence"
     },
     {
      "title": "Have family at home file a report too",
      "desc": "Ask relatives to report it to the police or the anti-fraud authority in your home country"
     },
     {
      "desc": "Look up the consular protection number on your own mission’s official website. Key numbers are listed under “Your Country’s Consulate” above",
      "title": "Contact your country’s consulate"
     }
    ]
   },
   "682c0c": {
    "text": "💡 Being scammed is not your fault — these operations are highly sophisticated. The chance of recovering the money is low, but reporting still matters. Do not stay silent out of shame."
   },
   "1a55d0": {
    "text": "Disaster Risk in This Area"
   },
   "a2c2ba": {
    "text": "Fukuoka is not a highly earthquake-prone region, but it is not without risk. The Kego Fault Zone runs from the sea off the northern Itoshima Peninsula south-east through central Fukuoka as far as the area around Dazaifu. Its south-eastern segment is assessed as capable of producing a relatively large earthquake, with a probability on the higher side among Japan’s major active faults. An earthquake occurred in the north-western offshore segment in 2005."
   },
   "d1f94f": {
    "items": [
     {
      "text": "Flooding: the Zuibaiji and Raizan rivers rise in the Sefuri mountains and can overflow during heavy rain. The campus sits on higher ground and is lower-risk; if you live along Route 202, read the disaster-prevention notes given to you when renting carefully"
     },
     {
      "text": "Water shortage: in the winter of 2025–2026 the whole of Fukuoka faced a severe water shortage, with some reservoirs nearly empty and the Itoshima area temporarily placed on reduced-pressure supply"
     },
     {
      "text": "Nuclear power: the Genkai Nuclear Power Plant is roughly 40 km from Ito Campus in a straight line, but Fukuoka’s prevailing winds are south-easterly and north-westerly, and a tsunami on the Sea of Japan side is considered unlikely"
     }
    ]
   },
   "aa5140": {
    "text": "Fukuoka City’s official LINE account pushes disaster-prevention information; adding it once you arrive is recommended — see the “Fukuoka City official LINE account” section above."
   },
   "030d6c": {
    "items": [
     {
      "text": "Headquarters for Earthquake Research Promotion · Kego Fault Zone",
      "url": "https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/"
     },
     {
      "text": "Japan Meteorological Agency",
      "url": "https://www.jma.go.jp/bosai/"
     }
    ]
   },
   "8903c1": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
   }
  },
  "ko": {
   "392840": {
    "text": "주후쿠오카 대한민국 총영사관이 영사 업무와 긴급 지원을 담당합니다. 일본에서 사건·사고를 당해 영사 조력이 필요하면 외교부 영사안전콜센터(서울, 24시간) +82-2-3210-0404 로 연락하세요."
   },
   "800183": {
    "text": "· 후쿠오카현 국제교류센터: 외국인을 위한 생활 지원 정보"
   },
   "d9edd9": {
    "text": "긴급 상황에서는 먼저 어떤 종류인지 판단한 뒤 전화하세요. 아래는 일본 공통 번호와 후쿠오카 지역의 공식 창구입니다."
   },
   "e02b8f": {
    "text": "생명·안전 긴급"
   },
   "b3b000": {
    "items": [
     {
      "text": "110 — 범죄나 사고가 발생해 경찰이 필요할 때"
     },
     {
      "text": "119 — 화재, 또는 응급 이송(구급차)이 필요할 때"
     },
     {
      "text": "#7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时） — 갑자기 아파서 구급차를 불러야 할지 판단이 서지 않을 때의 응급 전화 상담(후쿠오카현, 24시간). 단축번호가 연결되지 않으면 092-471-0099"
     },
     {
      "text": "#8000(어린이) — 아이의 야간 응급 질환 상담. 단축번호가 연결되지 않으면 092-731-4119"
     }
    ]
   },
   "6daaf2": {
    "text": "영사관(대한민국)"
   },
   "06b1ad": {
    "text": "· (영사·민원 092-771-0461 / 야간·휴일 긴급 080-8588-2806)"
   },
   "40a3b6": {
    "items": [
     {
      "text": "주후쿠오카 대한민국 총영사관",
      "url": "https://overseas.mofa.go.kr/jp-fukuoka-ko/index.do"
     }
    ]
   },
   "8ff3c2": {
    "text": "학교 관련"
   },
   "05277d": {
    "text": "규슈대학 국제부는 재학 중인 유학생에게 행정 상담과 긴급 연락 지원을 제공합니다. 기숙사 관련 긴급 상황은 기숙사 관리인 또는 관리 사무소에 먼저 연락하세요."
   },
   "0a63f9": {
    "text": "외국인 상담 창구"
   },
   "7ee48c": {
    "text": "· 후쿠오카시 외국인 종합상담지원센터: 0120-66-1799(무료) / 092-262-1799, 접수 평일 8:45~18:00, 다국어 대응"
   },
   "8f6c5b": {
    "items": [
     {
      "url": "https://www.fcif.or.jp/",
      "text": "후쿠오카 요카토피아 국제교류재단"
     }
    ]
   },
   "04e631": {
    "items": [
     {
      "text": "kokusaihiroba.or.jp",
      "url": "https://www.kokusaihiroba.or.jp/"
     }
    ]
   },
   "0ce8ec": {
    "text": "참고 정보원"
   },
   "2687b6": {
    "items": [
     {
      "text": "규슈대학 · 생활 가이드/팸플릿(리빙 가이드 포함)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student",
      "text": "Global Gateway(체류·주거·생활 정보)"
     },
     {
      "text": "출입국재류관리청",
      "url": "http://www.moj.go.jp/isa/index.html"
     },
     {
      "text": "문부과학성 · 외국인 유학생이 이용할 수 있는 제도 일람",
      "url": "https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm"
     },
     {
      "text": "외무성 해외안전정보",
      "url": "https://www.anzen.mofa.go.jp/"
     }
    ]
   },
   "8dd5f7": {
    "text": "생활 관련 상담"
   },
   "70bd3f": {
    "items": [
     {
      "text": "188 — 소비생활 상담(소비자 분쟁)"
     },
     {
      "text": "#8008 또는 0570-013-320 — 여성 상담 전용 회선(가정폭력 등)"
     },
     {
      "text": "189 — 아동 상담(학대 등)"
     }
    ]
   },
   "ab086d": {
    "text": "사기를 당한 후의 응급 대응"
   },
   "8d68f1": {
    "text": "유학생은 사기 피해가 잦은 집단입니다. 이미 송금했거나 지금 조종당하고 있다면 아래 우선순위대로 대응하세요. 사기 수법 식별과 일상적인 예방은 목록 맨 위의 「신입생 필독 · 사기 방지 가이드」를 참고하세요."
   },
   "070eb4": {
    "items": [
     {
      "title": "즉시 은행에 연락",
      "desc": "송금 계좌의 개설 은행에 연락해 지급 정지와 계좌 동결을 요청하세요. 송금 후 몇 분 만에 인출될 수 있으므로 빠를수록 좋습니다"
     },
     {
      "title": "현지 경찰에 신고",
      "desc": "일본에서는 110번. 대화 기록, 송금 기록, 상대방 정보를 증거로 보관하세요"
     },
     {
      "title": "본국 가족에게도 신고 요청",
      "desc": "가족이 본국 경찰이나 금융사기 대응 기관에 신고하도록 하세요"
     },
     {
      "desc": "영사 조력 연락처는 공식 사이트에서 확인하세요. 영사안전콜센터(24시간)는 위 「영사관(대한민국)」 항목 참조",
      "title": "영사관에 연락"
     }
    ]
   },
   "682c0c": {
    "text": "💡 사기를 당한 것은 당신의 잘못이 아닙니다. 사기 조직의 수법은 매우 정교합니다. 돈을 되찾을 가능성은 크지 않지만 신고에는 의미가 있습니다. 부끄러움 때문에 침묵하지 마세요."
   },
   "1a55d0": {
    "text": "이 지역의 재해 위험"
   },
   "a2c2ba": {
    "text": "후쿠오카는 지진이 잦은 지역은 아니지만 위험이 없는 것은 아닙니다. 케고 단층대는 이토시마반도 북부 해역에서 남동쪽으로 후쿠오카 시가지를 가로질러 다자이후 부근까지 이어집니다. 그 남동부는 비교적 큰 지진이 발생할 가능성이 있다고 평가되며, 일본의 주요 활단층 중에서는 확률이 높은 편입니다. 북서부 해역에서는 2005년에 지진이 발생했습니다."
   },
   "d1f94f": {
    "items": [
     {
      "text": "홍수: 즈이바이지천, 라이잔천 등은 세후리 산지에서 발원해 폭우 시 범람할 수 있습니다. 캠퍼스는 지대가 높아 위험이 작은 편이지만, 국도 202호 인근에 산다면 임대 계약 시 제공되는 방재 사항을 잘 읽어 두세요"
     },
     {
      "text": "물 부족: 2025–2026년 겨울 후쿠오카 전역에 심각한 물 부족이 발생해 일부 댐의 저수율이 바닥에 가까워졌고, 이토시마 지역은 한때 감압 급수가 시행되었습니다"
     },
     {
      "text": "원자력: 겐카이 원자력발전소는 이토 캠퍼스에서 직선거리로 약 40 km이지만, 후쿠오카는 남동풍과 북서풍이 주를 이루고 동해(일본해) 쪽 쓰나미 가능성도 낮다고 봅니다"
     }
    ]
   },
   "aa5140": {
    "text": "후쿠오카시 공식 LINE 계정은 방재 정보를 발송합니다. 입국 후 추가해 두시길 권합니다 —— 본문 위쪽 「후쿠오카시 LINE 공식 계정」 절을 참조하세요."
   },
   "030d6c": {
    "items": [
     {
      "text": "지진조사연구추진본부 · 케고 단층대",
      "url": "https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/"
     },
     {
      "text": "일본 기상청",
      "url": "https://www.jma.go.jp/bosai/"
     }
    ]
   },
   "8903c1": {
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   }
  }
 },
 "guide-entry": {
  "ja": {
   "329701": {
    "text": "国際線から地下鉄の駅へ"
   },
   "378734": {
    "text": "伊都協奏館に住む予定で直通の便を待てないときは、本数の多い路線で中央図書館かビッグオレンジまで行き、そこから歩く方法があります：中央図書館 → 伊都協奏館 は約 1.1 km、徒歩 15 分ほど。ビッグオレンジ → 伊都協奏館 は約 1.4 km、徒歩 20 分ほど。大きな荷物を引いているともっとかかるので、状況に応じて判断してください。"
   },
   "520711": {
    "text": "逃しても大丈夫です。これは入居初期の一時的な措置にすぎません。その後の日常の買い物は昭和バスで学研都市駅の一帯まで行くか、イオンの学内受取ロッカーを使えます（参照【買い物】）。遠くに住んでいるなら自転車を買うのも手です。"
   },
   "549889": {
    "text": "**到着が何時になっても、その日のうちに入居できます。** 到着時刻によっては、入居手続きと寮のルール説明が翌日に回ることはありますが、宿泊そのものに影響はありません。"
   },
   "d15555": {
    "text": "来日後の最初の数日は手続きが集中し、しかも一部には順序があります。以下は「入国前 → 到着後」の時系列で整理しています。"
   },
   "e71472": {
    "text": "手続き期（入国前）"
   },
   "0a4bc5": {
    "text": "COE（在留資格認定証明書）が出るまでの時間"
   },
   "9d9ff6": {
    "text": "大学が入管に申請してから、COE は一般に 1~3 か月で交付されます。これまでの経験では九大は処理が早く、多くの場合 1 か月ほどで受け取れ、入学に間に合います。"
   },
   "0ad4d3": {
    "text": "理工系のうち慎重な扱いを受ける分野（AI、宇宙、原子力関連など）では追加の審査が入ることがあり、その分だけ期間が延びて、学期開始前の渡日に間に合わないおそれがあります。その場合は教務の担当者と寮に連絡して事情を説明し、遅らせる相談をしてください。"
   },
   "a52750": {
    "text": "COE は交付後に電子版（PDF）がメールで送られます。有効期間は 3 か月で、その間にビザの申請と入国を済ませる必要があります。"
   },
   "30ec7e": {
    "text": "COE を受け取ったら"
   },
   "a02f9c": {
    "items": [
     {
      "num": "1",
      "text": "日本大使館・領事館にビザを申請します（通常 5~7 営業日）"
     },
     {
      "num": "2",
      "text": "航空券を予約し、滞在先を手配します"
     },
     {
      "num": "3",
      "text": "渡日を待ちます"
     }
    ]
   },
   "92d7fe": {
    "text": "出発前の準備：荷物・寝具・印鑑"
   },
   "07924e": {
    "text": "荷物の取捨"
   },
   "db2432": {
    "text": "持っていく価値があるかどうかは、3 つの問いで判断できます："
   },
   "4c7fd5": {
    "items": [
     {
      "num": "1",
      "text": "電子機器・ハイテク製品か？（日本では高めなので持参をおすすめ）"
     },
     {
      "num": "2",
      "text": "地元でしか買えないものか？（輸入品は日本では高くつきます）"
     },
     {
      "num": "3",
      "text": "毎日使うものか？（着いてすぐ困らないように）"
     }
    ]
   },
   "6c9ae7": {
    "text": "日本にはユニクロなど手ごろな衣料品店があり（シーズン落ちはよく値下げされます）、普通の衣類は現地で買えます。下着は持参をおすすめします。電子機器は多めでもよく、少額の現金も用意しておきましょう。日焼け止めは日本でも高くないので、持っても持たなくても構いません。福岡の夏は暑いので、暑さ対策は必要です。"
   },
   "d1f1ea": {
    "text": "寝具"
   },
   "a28fda": {
    "text": "寮では布団を借りられますが、品質はふつうという声があります。肌に触れる寝具（掛けカバー、枕カバー）は持参すると、寮を出た後も使い続けられます。"
   },
   "1267be": {
    "text": "寮の備品"
   },
   "d0461c": {
    "text": "寮に備え付けてあるもの：ベッド、机と椅子、本棚、冷蔵庫、エアコン。ないもの：調理器具、ケトル、食器、タオル、洗面用具。トイレットペーパーは 1 ロールだけなので、早めに自分で補充してください。"
   },
   "6c0af7": {
    "items": [
     {
      "text": "Global Gateway・留学生情報（住居を含む）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "67b2e2": {
    "text": "印鑑（はんこ）"
   },
   "7a40b0": {
    "text": "日本の生活では印鑑が必要な場面が多くあります。「ドン・キホーテ」のセルフ彫刻機で作れます（およそ 500 円から）。漢字、ひらがな、カタカナ、アルファベットのいずれでも彫れます。注意：シャチハタ（インク内蔵式）は銀行の口座開設には使えないので、普通の材質の印鑑を用意してください。参照【銀行・送金】"
   },
   "65cb2d": {
    "text": "渡日前の連絡（Supporter）"
   },
   "a6a23c": {
    "text": "九大は出発前に Supporter（在学中の先輩）からメールで連絡が来るよう手配します。できるだけ早く返信して LINE / WeChat を交換しておきましょう。Supporter は入居、区役所での登録、銀行口座の開設などを手伝ってくれます。"
   },
   "9bc5f2": {
    "text": "入国：在留カードと通関"
   },
   "2ca893": {
    "text": "福岡空港は在留カードの交付指定空港なので、入国審査を通る際にその場でカードが交付されます。この時点では住所欄は空白で、到着後に区役所で登録する必要があります。税関の職員が、パスポートに COE を留めているホチキスを外すのを手伝ってくれます。"
   },
   "7a12ab": {
    "text": "指定空港でない空港（那覇、鹿児島、静岡などの地方空港）から入国した場合は、その場では「在留カード後日交付」の通知のみが渡され、在留カードは住民登録の完了後 1～2 週間ほどで登録した住所に郵送されます。福岡から入国する場合はこれに当たりません。"
   },
   "6001bc": {
    "text": "通関全体は通常 20～30 分ですが、同じ時間帯に到着便が多いと長くなります。大学の送迎バスに乗ることが決まっている場合は、余裕をみておいてください。"
   },
   "7298fb": {
    "text": "通関の動線：順に通る 4 つの関門"
   },
   "0a5d8b": {
    "text": "降機後のルートは案内表示でつながっています。以下の表示を見つければ迷いません。"
   },
   "ec1775": {
    "items": [
     {
      "title": "到着（Arrivals）",
      "desc": "黒地の案内板の「到着 Arrivals」に従います。目印は黄色い飛行機のマーク。同じ板には緑のマークの「乗り継ぎ(国際線) Transfer」もありますが、そちらは乗り継ぎ通路です。"
     },
     {
      "title": "検疫（Quarantine）→ 入国審査",
      "desc": "Visit Japan Web の登録が済んでいる人は「Visit Japan Web 受付済みの方」と a b c d が示された通路へ。まだの人はその場でもできます：青地に白字の横断幕「共同キオスク / The integrated KIOSK」を探してください。板に 50m と書かれています。"
     },
     {
      "title": "手荷物受取所",
      "desc": "「手荷物受取 Baggage Claim」のディスプレイで、出発地と便名から自分の便を探します。同じ行の右側の数字がターンテーブルの番号です。"
     },
     {
      "title": "税関",
      "desc": "通路は 2 つあります。スマホで申告を済ませた人は「電子申告端末 Customs Electronic Declaration Terminal」へ。紙で申告する人は黄色い立て看板「PAPER 紙申告」の赤い矢印に従います。"
     }
    ]
   },
   "a03965": {
    "text": "出発前：小銭の準備"
   },
   "0da744": {
    "text": "**公共交通機関を使う予定なら、空港を出る前に小銭を作っておいてください。**\n地下鉄と JR の区間はクレジットカードのタッチ決済が使えますが（次の節を参照）、学内の昭和バスは現金か IC カードしか受け付けません。日本のバスの両替機は通常 1,000 円札のみで、5,000 円札と 10,000 円札は崩せません。そして空港の ATM から出てくるのはたいてい 10,000 円札です。空港のコンビニで先に崩し、1,000 円札を数枚と硬貨を手元に残しておくことをおすすめします。"
   },
   "c04837": {
    "text": "空港から伊都へ：シャトルバスの確認"
   },
   "1589b8": {
    "text": "大学は学期の始まる前後の決まった日に、新入生向けの無料送迎バスを用意します。対象は伊都キャンパスのみで、車両はその日の人数に応じてマイクロバスか大型バスになります。乗車地は福岡空港の国際線／国内線ターミナル、降車地は九大学研都市駅と各学生寮です。先着順で予約は不要です。"
   },
   "a963ac": {
    "text": "**運行日と時刻は学期ごとに変わります。大学から届く最新の通知が優先です。** 運行期間に当たらない場合や、便の遅延で乗れなかった場合は、以下の 3 つの方法で自力で向かえます。"
   },
   "b7abf2": {
    "items": [
     {
      "text": "九大 送迎バスの集合案内（例として。最新の通知が優先）",
      "url": "https://notepm.jp/sharing/90f2611c-aaa9-4f96-b32f-a88ca30e57c9"
     }
    ]
   },
   "c11763": {
    "text": "自力で行く（1）：電車"
   },
   "4ecc41": {
    "text": "3 つの方法の中で最も安定しています。"
   },
   "c1cff3": {
    "text": "福岡空港の国際線と国内線のターミナルは滑走路の反対側にあります。**地下鉄の駅は国内線側なので、まず無料の連絡バスで移動する必要があります。**"
   },
   "76803e": {
    "items": [
     {
      "title": "連絡バスを見つける",
      "desc": "到着ロビーを出たら、柱の案内表示「国内線連絡バス(地下鉄) Shuttle Bus (INT’L ⇔ Domestic, Subway)」に従います。乗り場は A2 です。"
     },
     {
      "title": "国内線ターミナルに着いたら",
      "desc": "降車場所のすぐ横が「福岡空港駅」の入口で、下りのエスカレーターがあります。同じ通路には「2 路線バス」と書かれた柱もありますが、そちらは市内の路線バスで、伊都へ行く便ではありません。"
     }
    ]
   },
   "51cf4a": {
    "text": "改札を入って乗車"
   },
   "2e12f7": {
    "text": "券売機は通路の右側、「きっぷうりば Tickets」の表示のところにあります。"
   },
   "6041f9": {
    "text": "改札はクレジットカードのタッチ決済に対応しています（VISA / JCB / AMEX / Mastercard。改札の横に「タッチ決済 乗車OK」の表示があります）。**到着した当日は、先にきっぷを買ったり IC カードを作ったりする必要はなく、そのままカードをタッチして入れます。**"
   },
   "4ac4a5": {
    "text": "福岡空港駅は始発駅で（駅に「当駅は始発駅です」と表示があります）、すべての列車がここから発車します。"
   },
   "91e638": {
    "text": "**筑前前原 / 西唐津 / 唐津 方面の列車に乗ってください。姪浜行きの列車は姪浜止まりで、乗り換えが必要です。**"
   },
   "9870ff": {
    "text": "電光掲示板では色で区別されているので、文字が読めなくても判断できます："
   },
   "094817": {
    "headers": [
     "方面",
     "掲示板の色",
     "直通かどうか"
    ],
    "rows": [
     [
      "筑前前原 / 西唐津 / 唐津",
      "白",
      "直通。乗り換え不要"
     ],
     [
      "姪浜",
      "ピンク",
      "姪浜止まり。乗り換えが必要"
     ]
    ]
   },
   "110b67": {
    "text": "地下鉄空港線と JR 筑肥線は直通運転で、姪浜から先が JR の区間になります："
   },
   "60e8e9": {
    "headers": [
     "駅",
     "駅番号"
    ],
    "rows": [
     [
      "姪浜",
      "JK01"
     ],
     [
      "下山門",
      "JK02"
     ],
     [
      "今宿",
      "JK03"
     ],
     [
      "九大学研都市",
      "JK04"
     ]
    ]
   },
   "6a2144": {
    "text": "九大学研都市駅で昭和バスに乗り換え"
   },
   "3df5ca": {
    "headers": [
     "行き先",
     "降車停留所",
     "本数"
    ],
    "rows": [
     [
      "D1 / D2 / D3",
      "センターゾーン入口等 3 处",
      "多め"
     ],
     [
      "伊都協奏館",
      "伊都協奏館",
      "少なめ"
     ],
     [
      "SETTLE International",
      "国際村前 / 泊北口",
      "少なめ"
     ]
    ]
   },
   "f8af94": {
    "text": "SETTLE へは波多江駅で降り、約 400 m 歩いて産の宮のバス停で乗り換える方法もあります。**空港から向かうときは快速列車に乗らないでください。** 波多江からタクシーで SETTLE までは約 1,300 円です（経験値）。"
   },
   "05176b": {
    "text": "自力で行く（2）：タクシー"
   },
   "3077e9": {
    "text": "福岡空港から伊都キャンパスまでは約 8,000～10,000 円です（経験値。実際はメーターによります）。荷物が多いとき、あるいは到着が終電より後になるときの現実的な選択肢です。"
   },
   "7135a9": {
    "text": "自力で行く（3）：バスのみ"
   },
   "7f84f6": {
    "text": "国際線ターミナルから西鉄バスで博多駅筑紫口まで行き、博多駅を抜けて約 400 m 歩いて「博多駅前 A」のりばへ、そこから西鉄 K 線で九大ビッグオレンジまで。どちらの区間も発車間隔が大きく、K 線の最終も早いので、接続がちょうど合うときだけ検討してください。"
   },
   "0ee9af": {
    "text": "バスを調べるときは Google マップを使い、**必ず出発時刻を設定してください**。この地域は本数の少ない路線が多く、時刻を設定しないと翌日の便が返ってくることがあります。"
   },
   "cdff70": {
    "text": "区間ごとの費用"
   },
   "2f3a74": {
    "headers": [
     "区間",
     "方法",
     "費用"
    ],
    "rows": [
     [
      "国際線 ⇄ 国内線ターミナル",
      "連絡バス",
      "無料"
     ],
     [
      "福岡空港 → 九大学研都市",
      "地下鉄 + JR（直通）",
      "610 円、約 36 分、乗り換えなし"
     ],
     [
      "九大学研都市 → 学内各停留所",
      "昭和バス",
      "⬜要確認"
     ],
     [
      "福岡空港 → 伊都キャンパス",
      "タクシー",
      "約 8,000～10,000 円（経験値）"
     ],
     [
      "波多江 → SETTLE",
      "タクシー",
      "約 1,300 円（経験値）"
     ]
    ]
   },
   "e8280e": {
    "text": "市街地や空港へよく行き来するなら「伊都キャンパス回数券」（6,730 円 / 10 枚、1 回あたり 673 円）も検討できます。地下鉄各駅から昭和バスの九大線・学内までをカバーします。⬜要確認：この回数券が福岡空港駅まで使えるかどうか —— 2 つの公式ページのどちらにも明記がありません。詳しくは 参照【交通】。"
   },
   "f7cdf3": {
    "text": "寮到着：当日は何時でも入居可"
   },
   "d5f4d7": {
    "text": "ですから便の遅延や乗り継ぎのトラブル、やむを得ずタクシーに変更した場合でも、その晩の泊まる場所を心配する必要はありません。"
   },
   "8e952c": {
    "text": "到着後の数日の手続き順序"
   },
   "da2b75": {
    "text": "落ち着いてからの手続きは次の順に進めます：① SIM カード → ② 銀行口座 → ③ 国民健康保険 → ④ 自転車と生活必需品 → ⑤ キャンパスに慣れる。参照【携帯・ネット】参照【銀行・送金】参照【医療・保険】"
   },
   "4547cd": {
    "text": "このうち**住所登録がほとんどの手続きの前提**です —— まず在留カードを提出して住所を登録し、翌日に受け取ってから、SIM カードと銀行口座に進みます。またオリエンテーションへの参加も忘れずに。指導教員か Supporter が事前に知らせてくれます。"
   },
   "3e3e21": {
    "text": "この節の空港の動線、案内表示、現地の情報は、Hato と阿遥が記録と写真を提供し、それをもとにまとめました。"
   },
   "2c1d72": {
    "text": "落ち着くまで：生活支援バス"
   },
   "62e9c1": {
    "text": "寮に入って最初の 2 週間ほど、大学は「生活支援バス」を出し、まだ交通手段のない新入生が生活用品を買いに行けるようにします。いろいろな通知や他の人のまとめでこの言葉を見かけますが —— 常設の路線ではなく、各期ごとに新入生のために用意される臨時の便です。"
   },
   "72acee": {
    "items": [
     {
      "text": "D1 の前"
     },
     {
      "text": "伊都協奏館 の前"
     },
     {
      "text": "SETTLE International の前"
     },
     {
      "text": "JR 九大学研都市駅 の前"
     }
    ]
   },
   "041128": {
    "text": "**運行日・便・経路は期ごとに異なり、各寮・各学府から個別に通知されます。** 上表は停車地のみです —— 具体的な発車時刻と行き先は、受け取った寮または学府の通知に従ってください。過年度の案内を流用しないでください。"
   },
   "7dc6be": {
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
   },
   "ab8535": {
    "text": "乗車方向の確認"
   },
   "33eac7": {
    "text": "直通運転と運賃"
   }
  },
  "en": {
   "329701": {
    "text": "From the international terminal to the subway"
   },
   "378734": {
    "text": "If you are heading to Ito Kyousoukan and no direct service is coming, take one of the more frequent routes to the Central Library or Big Orange and walk from there: Central Library → Ito Kyousoukan is about 1.1 km, roughly 15 minutes on foot; Big Orange → Ito Kyousoukan is about 1.4 km, roughly 20 minutes. With heavy luggage it takes longer, so judge for yourself."
   },
   "520711": {
    "text": "Missing it is not a problem: it is only a stopgap for your first days. Afterwards you can take the Showa Bus to the Gakkentoshi Station area for everyday shopping, or use AEON’s on-campus pickup locker (See【Shopping】). If you live further out, buying a bicycle is worth considering."
   },
   "549889": {
    "text": "**However late you arrive, you can move in that same day.** Depending on the hour, the move-in formalities and the briefing on dormitory rules may be pushed to the next day, but staying the night is unaffected."
   },
   "d15555": {
    "text": "The first few days after arriving are dense with procedures, and some of them have to be done in order. What follows is organised as a timeline: before entry, then after landing."
   },
   "e71472": {
    "text": "Before Entry: the paperwork period"
   },
   "0a4bc5": {
    "text": "How long the COE takes"
   },
   "9d9ff6": {
    "text": "After the university files with immigration, the Certificate of Eligibility (COE) is generally issued within one to three months. In past experience Kyudai processes quickly, and in most cases it arrives in about a month — usually in time for enrolment."
   },
   "0ad4d3": {
    "text": "Sensitive science and engineering fields (AI, space, nuclear-related programs and the like) can attract additional screening, lengthening the wait and risking not reaching Japan before term starts. If that happens, contact your academic affairs officer and the dormitory to explain and arrange a later date."
   },
   "a52750": {
    "text": "Once issued, the COE is sent electronically as a PDF. It is valid for three months, within which you must complete your visa application and enter Japan."
   },
   "30ec7e": {
    "text": "Once you have the COE"
   },
   "a02f9c": {
    "items": [
     {
      "num": "1",
      "text": "Apply for a visa at a Japanese embassy or consulate (usually 5–7 business days)"
     },
     {
      "num": "2",
      "text": "Book your flight and arrange accommodation"
     },
     {
      "num": "3",
      "text": "Wait for departure"
     }
    ]
   },
   "92d7fe": {
    "text": "Packing: luggage, bedding, a personal seal"
   },
   "07924e": {
    "text": "What to bring"
   },
   "db2432": {
    "text": "Three questions will tell you whether something is worth packing:"
   },
   "4c7fd5": {
    "items": [
     {
      "num": "1",
      "text": "Is it electronic or high-tech? (Prices are higher in Japan, so bring it)"
     },
     {
      "num": "2",
      "text": "Can you only get it at home? (Imported goods are expensive here)"
     },
     {
      "num": "3",
      "text": "Do you use it every day? (So you are not stuck when you first arrive)"
     }
    ]
   },
   "6c9ae7": {
    "text": "Japan has affordable clothing shops such as Uniqlo, with end-of-season discounts, so ordinary clothes can wait until you arrive; underwear is worth bringing. Bring plenty of electronics, plus a little cash. Sunscreen is not expensive here, so it is up to you. Summers in Fukuoka are hot, so come prepared for the heat."
   },
   "d1f1ea": {
    "text": "Bedding"
   },
   "a28fda": {
    "text": "The dormitory rents out bedding, though reports say the quality is ordinary. Bringing the items next to your skin — duvet cover, pillowcase — means you can keep using them after you move out."
   },
   "1267be": {
    "text": "What the dormitory provides"
   },
   "d0461c": {
    "text": "Provided: bed, desk and chair, bookshelf, refrigerator, air conditioning. Not provided: cookware, kettle, tableware, towels, toiletries. Only one roll of toilet paper is supplied, so restock it soon."
   },
   "6c0af7": {
    "items": [
     {
      "text": "Global Gateway · information for international students (incl. housing)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "67b2e2": {
    "text": "Personal seal (hanko)"
   },
   "7a40b0": {
    "text": "A seal is needed in many situations in Japan. You can have one cut at the self-service machines in Don Quijote (from around 500 yen), in kanji, hiragana, katakana, or the Latin alphabet. Note: a シャチハタ (pre-inked) stamp cannot be used to open a bank account, so buy an ordinary one.See【Banking & Remittance】"
   },
   "65cb2d": {
    "text": "Contact Before Departure (your Supporter)"
   },
   "a6a23c": {
    "text": "Kyudai arranges for a Supporter — a senior student — to email you before you leave. Reply promptly and exchange LINE or WeChat. Your Supporter will help with moving in, registering at the ward office, opening a bank account, and so on."
   },
   "9bc5f2": {
    "text": "Entry: residence card and customs"
   },
   "2ca893": {
    "text": "Fukuoka Airport is a designated airport for residence card issuance, so your card is handed over on the spot as you clear immigration. The address field is blank at this point and must be registered at the ward office after you arrive. Customs staff will help remove the staples holding the COE in your passport."
   },
   "7a12ab": {
    "text": "If you enter through a non-designated airport (Naha, Kagoshima, Shizuoka, and other regional airports), you receive only a notice that the card will be issued later; the residence card is posted to your registered address one to two weeks after you complete resident registration. This does not apply when entering via Fukuoka."
   },
   "6001bc": {
    "text": "Clearing customs usually takes 20–30 minutes, longer when several flights land at once. If you have committed to a university shuttle, leave yourself some margin."
   },
   "7298fb": {
    "text": "The Route Out: four checkpoints in order"
   },
   "0a5d8b": {
    "text": "Signage links the whole route from the aircraft. Watch for the following."
   },
   "ec1775": {
    "items": [
     {
      "title": "Arrivals (到着)",
      "desc": "Follow “到着 Arrivals” on the black signs, marked with a yellow aircraft symbol. The same board also shows “乗り継ぎ(国際線) Transfer” with a green symbol — that is the connecting-flights route."
     },
     {
      "title": "Quarantine → immigration",
      "desc": "If you completed Visit Japan Web registration, take the lane marked “Visit Japan Web 受付済みの方” with a b c d. If you have not, you can do it on the spot: look for the blue banner with white text, “共同キオスク / The integrated KIOSK”, signposted at 50 m."
     },
     {
      "title": "Baggage claim",
      "desc": "Check the “手荷物受取 Baggage Claim” display, find your flight by origin and flight number, and the number to the right of that row is your carousel."
     },
     {
      "title": "Customs",
      "desc": "There are two lanes. If you declared on your phone, go to the “電子申告端末 Customs Electronic Declaration Terminal”; for a paper declaration, follow the red arrows on the yellow “PAPER 紙申告” signs."
     }
    ]
   },
   "a03965": {
    "text": "Before departure: prepare coins"
   },
   "0da744": {
    "text": "**If you plan to use public transport, break your notes into small change before leaving the airport.**\nThe subway and JR sections accept contactless credit cards (see the next section), but the Showa Bus on campus takes only cash or an IC card. Change machines on Japanese buses usually accept only 1,000 yen notes — 5,000 and 10,000 yen notes cannot be broken. And airport ATMs mostly dispense 10,000 yen notes. Break one at an airport convenience store and keep a few 1,000 yen notes and some coins on you."
   },
   "c04837": {
    "text": "Airport to Ito: checking the shuttle"
   },
   "1589b8": {
    "text": "On fixed dates around the start of term, the university runs a free shuttle for new students, for Ito Campus only, using a minibus or a coach depending on numbers that day. It picks up at the international and domestic terminals of Fukuoka Airport and drops off at Kyudai-gakkentoshi Station and the student dormitories. First come, first served; no booking needed."
   },
   "a963ac": {
    "text": "**The dates and times change every term — the latest notice from the university governs.** If you fall outside the operating window, or miss it because of a delayed flight, the three options below get you there yourself."
   },
   "b7abf2": {
    "items": [
     {
      "text": "Kyudai shuttle meeting-point information (example page; the latest notice governs)",
      "url": "https://notepm.jp/sharing/90f2611c-aaa9-4f96-b32f-a88ca30e57c9"
     }
    ]
   },
   "c11763": {
    "text": "On Your Own (1): the train"
   },
   "4ecc41": {
    "text": "The most reliable of the three."
   },
   "c1cff3": {
    "text": "Fukuoka Airport’s international and domestic terminals sit on opposite sides of the runway. **The subway station is on the domestic side, so you must first take the free shuttle bus across.**"
   },
   "76803e": {
    "items": [
     {
      "title": "Find the shuttle bus",
      "desc": "After leaving the arrivals hall, follow the pillar signs for “国内線連絡バス(地下鉄) Shuttle Bus (INT’L ⇔ Domestic, Subway)”. The stop is A2."
     },
     {
      "title": "At the domestic terminal",
      "desc": "The entrance to “福岡空港駅” (Fukuoka Airport Station) is right beside where you get off, with a descending escalator. Along the same corridor there is also a pillar marked “2 路線バス” — those are city bus routes, not the way to Ito."
     }
    ]
   },
   "51cf4a": {
    "text": "Through the gates and onto the train"
   },
   "2e12f7": {
    "text": "The ticket machines are on the right of the passage, marked “きっぷうりば Tickets”."
   },
   "6041f9": {
    "text": "The gates accept contactless credit cards (VISA / JCB / AMEX / Mastercard — look for “タッチ決済 乗車OK” beside the gate). **On the day you land there is no need to buy a ticket or get an IC card first; you can tap straight through.**"
   },
   "4ac4a5": {
    "text": "Fukuoka Airport is a terminus (the station displays “当駅は始発駅です”), so all trains depart from here."
   },
   "91e638": {
    "text": "**Take a train bound for Chikuzen-Maebaru / Nishi-Karatsu / Karatsu. Trains for Meinohama terminate there and require a change.**"
   },
   "9870ff": {
    "text": "The displays distinguish the two by colour, so you can tell without reading the characters:"
   },
   "094817": {
    "headers": [
     "Destination",
     "Colour on the board",
     "Direct?"
    ],
    "rows": [
     [
      "Chikuzen-Maebaru / Nishi-Karatsu / Karatsu",
      "White",
      "Direct, no change needed"
     ],
     [
      "Meinohama",
      "Pink",
      "Terminates at Meinohama; change required"
     ]
    ]
   },
   "110b67": {
    "text": "The subway Kuko line and the JR Chikuhi line run through to each other, and past Meinohama you are on JR:"
   },
   "60e8e9": {
    "headers": [
     "Station",
     "Number"
    ],
    "rows": [
     [
      "Meinohama",
      "JK01"
     ],
     [
      "Shimoyamato",
      "JK02"
     ],
     [
      "Imajuku",
      "JK03"
     ],
     [
      "Kyudai-gakkentoshi",
      "JK04"
     ]
    ]
   },
   "6a2144": {
    "text": "Changing to the Showa Bus at Kyudai-gakkentoshi"
   },
   "3df5ca": {
    "headers": [
     "Destination",
     "Alight at",
     "Frequency"
    ],
    "rows": [
     [
      "D1 / D2 / D3",
      "Center Zone entrance / Big Orange / Central Library",
      "More frequent"
     ],
     [
      "Ito Kyousoukan",
      "Ito Kyousoukan",
      "Less frequent"
     ],
     [
      "SETTLE International",
      "Kokusaimura-mae / Tomari-Kitaguchi",
      "Less frequent"
     ]
    ]
   },
   "f8af94": {
    "text": "For SETTLE you can also alight at Hatae Station and walk about 400 m to the Sannomiya bus stop to change. **Do not take a rapid train when coming from the airport.** A taxi from Hatae to SETTLE is about 1,300 yen (from experience)."
   },
   "05176b": {
    "text": "On Your Own (2): taxi"
   },
   "3077e9": {
    "text": "Fukuoka Airport to Ito Campus runs about 8,000–10,000 yen (an experience-based figure; the meter governs). A workable choice if you have a lot of luggage, or land after the last train."
   },
   "7135a9": {
    "text": "On Your Own (3): buses only"
   },
   "7f84f6": {
    "text": "Take a Nishitetsu bus from the international terminal to Hakata Station Chikushi exit, walk about 400 m through Hakata Station to the “Hakata Station Front A” stop, then take the Nishitetsu K line to Kyudai Big Orange. Both legs run infrequently and the K line’s last service is early, so consider this only when the connection happens to line up."
   },
   "0ee9af": {
    "text": "Use Google Maps to look up buses, and **be sure to set a departure time**. Many routes here run rarely, and without a time you may be shown the next day’s service."
   },
   "cdff70": {
    "text": "Costs by Leg"
   },
   "2f3a74": {
    "headers": [
     "Section",
     "Method",
     "Cost"
    ],
    "rows": [
     [
      "International ⇄ domestic terminal",
      "Shuttle bus",
      "Free"
     ],
     [
      "Fukuoka Airport → Kyudai-gakkentoshi",
      "Subway + JR (through service)",
      "¥610, about 36 min, no change"
     ],
     [
      "Kyudai-gakkentoshi → campus stops",
      "Showa Bus",
      "⬜ Unverified"
     ],
     [
      "Fukuoka Airport → Ito Campus",
      "Taxi",
      "About ¥8,000–10,000 (from experience)"
     ],
     [
      "Hatae → SETTLE",
      "Taxi",
      "About ¥1,300 (from experience)"
     ]
    ]
   },
   "e8280e": {
    "text": "If you travel into the city or to the airport often, consider the “Ito Campus coupon tickets” (6,730 yen for 10, i.e. 673 yen a trip), covering subway stations through to the Showa Bus Kyudai line on campus. ⬜ Unverified: whether these coupons are valid as far as Fukuoka Airport station — neither official page states it. For details, See【Transport】."
   },
   "f7cdf3": {
    "text": "Arriving at the dorm: check in any time that day"
   },
   "d5f4d7": {
    "text": "So if your flight is delayed, a connection goes wrong, or you have to switch to a taxi, there is no need to worry about having nowhere to sleep that night."
   },
   "8e952c": {
    "text": "The Order of Things in Your First Days"
   },
   "da2b75": {
    "text": "Once you have settled in, work through the procedures in this order: ① SIM card → ② bank account → ③ National Health Insurance → ④ a bicycle and daily necessities → ⑤ getting to know the campus.See【Mobile & Internet】See【Banking & Remittance】See【Medical & Insurance】"
   },
   "4547cd": {
    "text": "Of these, **address registration is the prerequisite for most of the rest** — submit your residence card to register your address, collect it the next day, and only then arrange a SIM and a bank account. Also remember to attend the various orientations; your supervisor or Supporter will remind you in advance."
   },
   "3e3e21": {
    "text": "The airport routing, signage, and on-the-ground details in this section were recorded and photographed by Hato and A-Yao, and written up from their material."
   },
   "2c1d72": {
    "text": "While Settling In: the daily-support bus"
   },
   "62e9c1": {
    "text": "For roughly the first two weeks after you move into the dormitory, the university runs a “daily-support bus” so that new students without transport can go and buy household goods. You will see the term in various notices and other people’s guides — it is not a permanent route but a temporary shuttle laid on for each intake of new students."
   },
   "72acee": {
    "items": [
     {
      "text": "Outside D1"
     },
     {
      "text": "Outside Ito Kyousoukan"
     },
     {
      "text": "Outside SETTLE International"
     },
     {
      "text": "Outside JR Kyudai-gakkentoshi Station"
     }
    ]
   },
   "041128": {
    "text": "**Service dates, runs and routes differ each intake and are notified separately by each dormitory and faculty.** The table above lists stops only - for departure times and destinations, follow the notice you receive. Do not reuse previous years' arrangements."
   },
   "7dc6be": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
   },
   "ab8535": {
    "text": "Which train to board"
   },
   "33eac7": {
    "text": "Through service and fares"
   }
  },
  "ko": {
   "329701": {
    "text": "국제선에서 지하철역까지"
   },
   "378734": {
    "text": "이토 교소칸에 사는데 직통 편을 기다릴 수 없다면, 편수가 많은 노선으로 중앙도서관이나 빅오렌지까지 가서 걸어가는 방법이 있습니다: 중앙도서관 → 이토 교소칸 약 1.1 km, 도보 15분 정도. 빅오렌지 → 이토 교소칸 약 1.4 km, 도보 20분 정도. 큰 짐을 끌면 더 오래 걸리니 상황에 따라 판단하세요."
   },
   "520711": {
    "text": "놓쳐도 괜찮습니다. 입주 초기의 임시 조치일 뿐입니다. 이후 일상적인 장보기는 쇼와 버스로 학연도시역 일대까지 가거나 이온의 교내 수령 락커를 이용하면 됩니다(참조【쇼핑】). 멀리 산다면 자전거를 사는 것도 방법입니다."
   },
   "549889": {
    "text": "**도착 시각이 아무리 늦어도 그날 정상적으로 입주할 수 있습니다.** 도착 시각에 따라 입주 수속과 기숙사 규칙 설명이 다음 날로 넘어갈 수는 있지만, 숙박 자체에는 영향이 없습니다."
   },
   "d15555": {
    "text": "입국 후 첫 며칠은 수속이 몰려 있고, 일부는 순서도 정해져 있습니다. 아래는 「입국 전 → 도착 후」 시간 순으로 정리했습니다."
   },
   "e71472": {
    "text": "수속 기간(입국 전)"
   },
   "0a4bc5": {
    "text": "COE(재류자격인정증명서)가 나오기까지"
   },
   "9d9ff6": {
    "text": "학교가 입관에 신청한 뒤 COE는 일반적으로 1~3개월 안에 발급됩니다. 기존 경험상 규슈대는 처리가 빠른 편이라 대개 1개월 정도면 받을 수 있고 입학에 맞출 수 있습니다."
   },
   "0ad4d3": {
    "text": "이공계 중 민감한 분야(AI, 우주, 원자력 관련 전공 등)는 추가 심사가 있을 수 있어 기간이 길어지고, 학기 시작 전 입국에 맞추지 못할 위험이 있습니다. 그럴 때는 교무 담당자와 기숙사에 연락해 사정을 설명하고 늦추는 것을 상의하세요."
   },
   "a52750": {
    "text": "COE는 발급 후 전자판(PDF)이 메일로 옵니다. 유효기간은 3개월이며 그 안에 비자 신청과 입국을 마쳐야 합니다."
   },
   "30ec7e": {
    "text": "COE를 받은 뒤"
   },
   "a02f9c": {
    "items": [
     {
      "num": "1",
      "text": "일본 대사관·영사관에 비자를 신청합니다(보통 5~7영업일)"
     },
     {
      "num": "2",
      "text": "항공권을 예약하고 숙소를 준비합니다"
     },
     {
      "num": "3",
      "text": "입국을 기다립니다"
     }
    ]
   },
   "92d7fe": {
    "text": "출발 전 준비: 짐·침구·도장"
   },
   "07924e": {
    "text": "짐 고르기"
   },
   "db2432": {
    "text": "가져갈 가치가 있는지는 세 가지 질문으로 판단할 수 있습니다:"
   },
   "4c7fd5": {
    "items": [
     {
      "num": "1",
      "text": "전자·첨단 제품인가?(일본은 비싼 편이라 가져오길 권합니다)"
     },
     {
      "num": "2",
      "text": "고향에서만 살 수 있는 것인가?(수입품은 일본에서 비쌉니다)"
     },
     {
      "num": "3",
      "text": "매일 쓰는 것인가?(도착 직후 불편하지 않도록)"
     }
    ]
   },
   "6c9ae7": {
    "text": "일본에는 유니클로 같은 저렴한 의류 매장이 있고(지난 시즌 상품은 자주 할인합니다) 일반 옷은 현지에서 사도 됩니다. 속옷은 가져오길 권합니다. 전자제품은 넉넉히 챙기고 소액의 현금도 준비하세요. 자외선 차단제는 일본에서도 비싸지 않으니 선택 사항입니다. 후쿠오카의 여름은 더우니 더위 대비를 하세요."
   },
   "d1f1ea": {
    "text": "침구"
   },
   "a28fda": {
    "text": "기숙사에서 이불을 빌릴 수 있지만 품질은 평범하다는 이야기가 있습니다. 몸에 닿는 침구(이불 커버, 베개 커버)는 가져오면 기숙사를 나온 뒤에도 계속 쓸 수 있습니다."
   },
   "1267be": {
    "text": "기숙사 비품"
   },
   "d0461c": {
    "text": "기숙사에 갖춰진 것: 침대, 책상과 의자, 책장, 냉장고, 에어컨. 없는 것: 조리도구, 전기포트, 식기, 수건, 세면용품. 화장지는 1롤만 있으니 되도록 빨리 직접 보충하세요."
   },
   "6c0af7": {
    "items": [
     {
      "text": "Global Gateway · 유학생 정보(주거 포함)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "67b2e2": {
    "text": "도장(はんこ)"
   },
   "7a40b0": {
    "text": "일본 생활에서는 도장이 필요한 곳이 많습니다. 「돈키호테」의 셀프 각인 기계에서 만들 수 있고(약 500엔부터) 한자·히라가나·가타카나·알파벳 모두 새길 수 있습니다. 주의: 샤치하타(잉크 내장식)는 은행 계좌 개설에 쓸 수 없으니 일반 재질의 도장을 준비하세요.참조【은행·송금】"
   },
   "65cb2d": {
    "text": "입국 전 연락(Supporter)"
   },
   "a6a23c": {
    "text": "규슈대는 출발 전에 Supporter(재학 중인 선배)가 메일로 연락하도록 주선합니다. 되도록 빨리 답장하고 LINE / WeChat을 교환해 두세요. Supporter는 입주, 구청 등록, 은행 계좌 개설 등을 도와줍니다."
   },
   "9bc5f2": {
    "text": "입국: 재류카드와 통관"
   },
   "2ca893": {
    "text": "후쿠오카 공항은 재류카드 지정 교부 공항이라 입국심사를 통과할 때 그 자리에서 카드를 발급합니다. 이때 주소란은 비어 있으며 도착 후 구청에서 등록해야 합니다. 세관 직원이 여권에 COE를 고정한 스테이플러를 빼는 것을 도와줍니다."
   },
   "7a12ab": {
    "text": "지정 공항이 아닌 곳(나하, 가고시마, 시즈오카 등 지방 공항)으로 입국하면 현장에서는 「재류카드 추후 교부 통지」만 받고, 재류카드는 주민등록을 마친 뒤 1~2주쯤 지나 등록한 주소로 우송됩니다. 후쿠오카로 입국하면 해당하지 않습니다."
   },
   "6001bc": {
    "text": "통관 전체는 보통 20~30분이지만 같은 시간대에 도착 편이 많으면 길어집니다. 학교 셔틀버스를 타기로 했다면 여유를 두세요."
   },
   "7298fb": {
    "text": "통관 동선: 차례로 지나는 네 관문"
   },
   "0a5d8b": {
    "text": "비행기에서 내린 뒤의 경로는 안내판으로 이어집니다. 아래 표시만 찾으면 됩니다."
   },
   "ec1775": {
    "items": [
     {
      "title": "도착(Arrivals)",
      "desc": "검은 바탕 안내판의 「到着 Arrivals」를 따라갑니다. 노란 비행기 표시가 표식입니다. 같은 판에 초록 표시의 「乗り継ぎ(国際線) Transfer」도 있는데 그것은 환승 통로입니다."
     },
     {
      "title": "검역(Quarantine) → 입국심사",
      "desc": "Visit Japan Web 등록을 마쳤다면 「Visit Japan Web 受付済みの方」와 a b c d가 표시된 통로로 갑니다. 아직이라면 현장에서도 할 수 있습니다: 파란 바탕에 흰 글씨의 현수막 「共同キオスク / The integrated KIOSK」를 찾으세요. 판에 50m라고 적혀 있습니다."
     },
     {
      "title": "수하물 수취소",
      "desc": "「手荷物受取 Baggage Claim」 화면에서 출발지와 편명으로 자기 항공편을 찾습니다. 같은 줄 오른쪽 숫자가 수취대 번호입니다."
     },
     {
      "title": "세관",
      "desc": "통로가 둘입니다. 휴대폰으로 신고를 마쳤다면 「電子申告端末 Customs Electronic Declaration Terminal」로, 종이로 신고한다면 노란 입간판 「PAPER 紙申告」의 빨간 화살표를 따라갑니다."
     }
    ]
   },
   "a03965": {
    "text": "출발 전: 소액 동전 준비"
   },
   "0da744": {
    "text": "**대중교통을 이용할 계획이라면 공항을 나서기 전에 잔돈을 만들어 두세요.**\n지하철과 JR 구간은 신용카드 터치 결제가 되지만(다음 절 참조), 교내의 쇼와 버스는 현금이나 IC 카드만 받습니다. 일본 버스의 환전기는 보통 1,000엔 지폐만 받고 5,000엔과 10,000엔 지폐는 바꿀 수 없습니다. 그런데 공항 ATM에서 나오는 것은 대개 10,000엔 지폐입니다. 공항 편의점에서 먼저 깨고 1,000엔 지폐 몇 장과 동전을 손에 두는 것을 권합니다."
   },
   "c04837": {
    "text": "공항에서 이토: 셔틀버스 확인"
   },
   "1589b8": {
    "text": "학교는 개강 전후의 정해진 날짜에 신입생용 무료 셔틀버스를 운행합니다. 이토 캠퍼스 한정이며 차량은 그날 인원에 따라 중형 또는 대형 버스입니다. 승차 지점은 후쿠오카 공항 국제선/국내선 터미널, 하차 지점은 규슈대 학연도시역과 각 학생 기숙사입니다. 선착순이며 예약은 필요 없습니다."
   },
   "a963ac": {
    "text": "**운행 날짜와 시각은 학기마다 바뀌며 학교가 보내는 최신 공지가 우선입니다.** 운행 기간이 아니거나 항공편 지연으로 타지 못했다면, 아래 세 가지 방법으로 직접 갈 수 있습니다."
   },
   "b7abf2": {
    "items": [
     {
      "text": "규슈대 셔틀버스 집합 안내(예시 페이지, 최신 공지가 우선)",
      "url": "https://notepm.jp/sharing/90f2611c-aaa9-4f96-b32f-a88ca30e57c9"
     }
    ]
   },
   "c11763": {
    "text": "직접 가기(1): 전철"
   },
   "4ecc41": {
    "text": "세 방법 중 가장 안정적입니다."
   },
   "c1cff3": {
    "text": "후쿠오카 공항의 국제선과 국내선 터미널은 활주로를 사이에 두고 반대편에 있습니다. **지하철역은 국내선 쪽에 있으므로 먼저 무료 연락버스로 이동해야 합니다.**"
   },
   "76803e": {
    "items": [
     {
      "title": "연락버스 찾기",
      "desc": "도착 로비를 나와 기둥의 안내판 「国内線連絡バス(地下鉄) Shuttle Bus (INT’L ⇔ Domestic, Subway)」를 따라갑니다. 승차구는 A2입니다."
     },
     {
      "title": "국내선 터미널 도착",
      "desc": "내리는 곳 바로 옆이 「福岡空港駅」 입구이며 내려가는 에스컬레이터가 있습니다. 같은 통로에 「2 路線バス」라고 적힌 기둥도 있는데 그것은 시내 노선버스로 이토로 가는 차가 아닙니다."
     }
    ]
   },
   "51cf4a": {
    "text": "개찰 통과와 승차"
   },
   "2e12f7": {
    "text": "발매기는 통로 오른쪽 「きっぷうりば Tickets」 표시가 있는 곳에 있습니다."
   },
   "6041f9": {
    "text": "개찰구는 신용카드 터치 결제를 지원합니다(VISA / JCB / AMEX / Mastercard, 개찰구 옆에 「タッチ決済 乗車OK」 표시). **도착 당일에는 먼저 표를 사거나 IC 카드를 만들 필요 없이 카드를 태그해 바로 들어갈 수 있습니다.**"
   },
   "4ac4a5": {
    "text": "후쿠오카 공항역은 시발역이라(역에 「当駅は始発駅です」 표시가 있습니다) 모든 열차가 여기서 출발합니다."
   },
   "91e638": {
    "text": "**지쿠젠마에바루 / 니시카라쓰 / 가라쓰 방면 열차를 타세요. 메이노하마행 열차는 메이노하마에서 종착하므로 환승이 필요합니다.**"
   },
   "9870ff": {
    "text": "전광판에서는 색으로 구분되므로 글자를 몰라도 판단할 수 있습니다:"
   },
   "094817": {
    "headers": [
     "방면",
     "전광판 색",
     "직통 여부"
    ],
    "rows": [
     [
      "지쿠젠마에바루 / 니시카라쓰 / 가라쓰",
      "흰색",
      "직통, 환승 불필요"
     ],
     [
      "메이노하마",
      "분홍색",
      "메이노하마 종착, 환승 필요"
     ]
    ]
   },
   "110b67": {
    "text": "지하철 구코선과 JR 지쿠히선은 직통 운행하며, 메이노하마부터는 JR 구간입니다:"
   },
   "60e8e9": {
    "headers": [
     "역",
     "번호"
    ],
    "rows": [
     [
      "메이노하마",
      "JK01"
     ],
     [
      "시모야마토",
      "JK02"
     ],
     [
      "이마주쿠",
      "JK03"
     ],
     [
      "규슈대 학연도시",
      "JK04"
     ]
    ]
   },
   "6a2144": {
    "text": "규슈대 학연도시역에서 쇼와 버스로 환승"
   },
   "3df5ca": {
    "headers": [
     "목적지",
     "하차 정류장",
     "편수"
    ],
    "rows": [
     [
      "D1 / D2 / D3",
      "센터존 입구 / 빅오렌지 / 중앙도서관",
      "많은 편"
     ],
     [
      "이토 교소칸",
      "이토 교소칸",
      "적은 편"
     ],
     [
      "SETTLE International",
      "고쿠사이무라마에 / 도마리키타구치",
      "적은 편"
     ]
    ]
   },
   "f8af94": {
    "text": "SETTLE로 갈 때는 하타에역에서 내려 약 400 m 걸어 산노미야 정류장에서 환승하는 방법도 있습니다. **공항에서 출발할 때는 쾌속열차를 타지 마세요.** 하타에에서 SETTLE까지 택시로 약 1,300엔입니다(경험값)."
   },
   "05176b": {
    "text": "직접 가기(2): 택시"
   },
   "3077e9": {
    "text": "후쿠오카 공항에서 이토 캠퍼스까지 약 8,000~10,000엔입니다(경험값이며 실제로는 미터기에 따릅니다). 짐이 많거나 도착 시각이 막차 이후일 때 현실적인 선택지입니다."
   },
   "7135a9": {
    "text": "직접 가기(3): 버스만으로"
   },
   "7f84f6": {
    "text": "국제선 터미널에서 니시테츠 버스로 하카타역 지쿠시 출구까지 가고, 하카타역을 지나 약 400 m 걸어 「하카타역 앞 A」 승차장으로, 거기서 니시테츠 K선으로 규슈대 빅오렌지까지 갑니다. 두 구간 모두 배차 간격이 크고 K선 막차도 이르니, 연결이 딱 맞을 때만 고려하세요."
   },
   "0ee9af": {
    "text": "버스를 검색할 때는 구글 지도를 쓰고 **반드시 출발 시각을 설정하세요**. 이 지역은 편수가 드문 노선이 많아 시각을 설정하지 않으면 다음 날 편이 나올 수 있습니다."
   },
   "cdff70": {
    "text": "구간별 비용"
   },
   "2f3a74": {
    "headers": [
     "구간",
     "방법",
     "비용"
    ],
    "rows": [
     [
      "국제선 ⇄ 국내선 터미널",
      "연락버스",
      "무료"
     ],
     [
      "후쿠오카 공항 → 규슈대 학연도시",
      "지하철 + JR(직통)",
      "610엔, 약 36분, 환승 없음"
     ],
     [
      "규슈대 학연도시 → 교내 각 정류장",
      "쇼와 버스",
      "⬜ 확인 필요"
     ],
     [
      "후쿠오카 공항 → 이토 캠퍼스",
      "택시",
      "약 8,000~10,000엔(경험값)"
     ],
     [
      "하타에 → SETTLE",
      "택시",
      "약 1,300엔(경험값)"
     ]
    ]
   },
   "e8280e": {
    "text": "시내나 공항을 자주 오간다면 「이토 캠퍼스 회수권」(6,730엔 / 10매, 1회당 673엔)도 고려할 만합니다. 지하철 각 역부터 쇼와 버스 규슈대선 교내까지 커버합니다. ⬜ 확인 필요: 이 회수권을 후쿠오카 공항역까지 쓸 수 있는지 —— 두 공식 페이지 모두 명시하지 않았습니다. 자세한 내용은 참조【교통】."
   },
   "f7cdf3": {
    "text": "기숙사 도착: 당일 아무 때나 입주 가능"
   },
   "d5f4d7": {
    "text": "그러니 항공편 지연이나 환승 문제, 부득이하게 택시로 바꿔야 하는 상황이라도 그날 밤 잘 곳을 걱정할 필요는 없습니다."
   },
   "8e952c": {
    "text": "도착 후 며칠간의 처리 순서"
   },
   "da2b75": {
    "text": "자리를 잡은 뒤의 수속은 다음 순서로 진행합니다: ① SIM 카드 → ② 은행 계좌 → ③ 국민건강보험 → ④ 자전거와 생필품 → ⑤ 캠퍼스 익히기.참조【휴대폰·인터넷】참조【은행·송금】참조【의료·보험】"
   },
   "4547cd": {
    "text": "이 가운데 **주소 등록이 대부분 수속의 전제 조건**입니다 —— 먼저 재류카드를 제출해 주소를 등록하고 다음 날 찾은 뒤에 SIM 카드와 은행 계좌를 진행하세요. 또한 각종 오리엔테이션 참석도 잊지 마세요. 지도교수나 Supporter가 미리 알려줍니다."
   },
   "3e3e21": {
    "text": "이 절의 공항 동선, 안내판, 현장 정보는 Hato와 아야오가 기록과 사진을 제공해 정리한 것입니다."
   },
   "2c1d72": {
    "text": "정착 기간: 생활지원 버스"
   },
   "62e9c1": {
    "text": "기숙사에 막 들어간 첫 2주 정도, 학교는 「생활지원 버스」를 운행해 아직 교통수단이 없는 신입생이 생활용품을 사러 갈 수 있게 합니다. 여러 공지와 다른 사람의 정리 글에서 이 말을 보게 되는데 —— 상설 노선이 아니라 매 기수마다 신입생을 위해 따로 마련하는 임시 셔틀입니다."
   },
   "72acee": {
    "items": [
     {
      "text": "D1 앞"
     },
     {
      "text": "이토 교소칸 앞"
     },
     {
      "text": "SETTLE International 앞"
     },
     {
      "text": "JR 규슈대 학연도시역 앞"
     }
    ]
   },
   "041128": {
    "text": "**운행일·편·경로는 기수마다 다르며 각 기숙사와 학부에서 개별 통지됩니다.** 위 표는 정차 지점만입니다 —— 구체적인 출발 시각과 행선지는 받은 기숙사 또는 학부 안내를 따르세요. 지난 연도의 안내를 그대로 쓰지 마세요."
   },
   "7dc6be": {
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   },
   "ab8535": {
    "text": "승차 방향 확인"
   },
   "33eac7": {
    "text": "직통 운행과 운임"
   }
  }
 },
 "guide-housing": {
  "ja": {
   "67f6a8": {
    "text": "学内寮と民間賃貸は別のルートです。**まず寮を検討してください** —— 費用が低く、手続きが簡単で、保証人も不要です。選び方、初期費用、契約の注意点を扱います。"
   },
   "c8bea3": {
    "text": "居室と設備"
   },
   "6c71d4": {
    "text": "交通と立地"
   },
   "ef875c": {
    "text": "費用と募集時期"
   }
  },
  "en": {
   "67f6a8": {
    "text": "Dormitories and private rentals are two different routes. **Consider the dorms first** - lower cost, simpler paperwork, no guarantor. This page covers how to choose, upfront costs and contract points to check."
   },
   "c8bea3": {
    "text": "Rooms and facilities"
   },
   "6c71d4": {
    "text": "Access and location"
   },
   "ef875c": {
    "text": "Costs and application periods"
   }
  },
  "ko": {
   "67f6a8": {
    "text": "교내 기숙사와 민간 임대는 다른 경로입니다. **먼저 기숙사를 검토하세요** —— 비용이 낮고 절차가 간단하며 보증인도 불필요합니다. 선택 방법, 초기 비용, 계약 유의점을 다룹니다."
   },
   "c8bea3": {
    "text": "주거 형태와 설비"
   },
   "6c71d4": {
    "text": "교통과 입지"
   },
   "ef875c": {
    "text": "비용과 모집 시기"
   }
  }
 },
 "guide-life": {
  "ja": {
   "9d0f73": {
    "text": "ゴミ分別・天気・ポスト・食堂・生協 —— これらは専門の講義があるわけではありませんが、日常で頻繁に使うものです。必要な項目をご参照ください。"
   }
  },
  "en": {
   "9d0f73": {
    "text": "Waste sorting, weather, post boxes, canteens, the co-op - none of these is taught in a class, but all are used daily. Read the sections you need."
   }
  },
  "ko": {
   "9d0f73": {
    "text": "쓰레기 분리배출, 날씨, 우체통, 식당, 생협 —— 별도의 강의가 있는 것은 아니지만 일상에서 자주 쓰입니다. 필요한 항목을 참고하세요."
   }
  }
 },
 "guide-medical": {
  "ja": {
   "50e4ae": {
    "text": "日本で受診する前に 3 点を確認してください：国民健康保険に加入しているか、どの病院に行くか、中国語が通じるか。保険・学研災・ESP・中国語医療相談を一本につないだページです。"
   }
  },
  "en": {
   "50e4ae": {
    "text": "Before seeing a doctor in Japan, confirm three things: whether you are covered by national health insurance, which hospital to visit, and whether Chinese is supported. This page links insurance, Gakkensai, ESP and the Chinese-language medical hotline."
   }
  },
  "ko": {
   "50e4ae": {
    "text": "일본에서 진료를 받기 전 세 가지를 확인하세요: 국민건강보험 가입 여부, 어느 병원에 갈지, 중국어 지원 여부. 보험·학켄사이·ESP·중국어 의료 상담을 한 줄로 연결했습니다."
   }
  }
 },
 "guide-parttime": {
  "ja": {
   "1947e3": {
    "text": "アルバイト前には 2 つの手続きが必要です：**資格外活動許可**（未取得では就労できません）と税・年金。本ページでは労働時間の上限、探し方、賃金未払いへの対応を説明します。"
   },
   "5e12c4": {
    "text": "資格外活動許可と労働時間の上限"
   },
   "f0b619": {
    "text": "留学ビザで日本でアルバイトをするには、**まず「資格外活動許可」を取得する必要があります**。この許可は入国時に空港で申請でき、入国後に地方出入国在留管理局で手続きすることもできます。許可なしの就労は違法であり、ビザに影響するおそれがあります。詳しくは【在留手続き】をご参照ください。"
   },
   "9071cc": {
    "text": "学期中は週 28 時間が上限です。長期休暇中（春休み・夏休み・冬休み）は 1 日 8 時間、週 40 時間が上限です。上限を超えた就労が違法と判断されると、在留期間の更新に影響します。厳守してください。"
   },
   "105e04": {
    "text": "時給の相場と求人の探し方"
   },
   "77b055": {
    "text": "福岡県の最低賃金は **1,057 円/時間** です（2025 年 11 月 16 日施行）。留学生の時給はおおむね 1,057〜1,200 円程度で、コンビニ・飲食は低め、家庭教師・翻訳は高めです。実際の条件は雇用主によります。"
   },
   "493aef": {
    "text": "主な経路：大学生協や国際部の掲示板、タウンワーク（Townwork）・バイトル（Baitoru）などの求人サイト、先輩や研究室からの紹介があります。入国前に急いで探す必要はなく、在留カードと銀行口座を用意してからでも間に合います。"
   },
   "1ae89a": {
    "text": "注意事項と公式窓口"
   },
   "b2625a": {
    "items": [
     {
      "text": "まず資格外活動許可を取得してからアルバイトを始めてください。"
     },
     {
      "text": "週 28 時間の上限を厳守し、シフトを自己管理して超過を避けてください。"
     },
     {
      "text": "アルバイト収入は規定に従って申告し、奨学金の申請や税務との衝突を避けてください。"
     },
     {
      "text": "保証金の支払いや身分証の預け入れを求める仲介は異常な兆候です。注意してください。"
     }
    ]
   },
   "c5ccc9": {
    "items": [
     {
      "text": "出入国在留管理庁・資格外活動許可",
      "url": "https://www.isa.go.jp/"
     },
     {
      "text": "タウンワーク（Townwork）",
      "url": "https://townwork.net/"
     },
     {
      "text": "バイトル（Baitoru）",
      "url": "https://baitoru.com/"
     }
    ]
   }
  },
  "en": {
   "1947e3": {
    "text": "Two procedures are required before part-time work: the **permission to engage in activity other than that permitted** (no work is allowed without it) and tax/pension. This page covers hour limits, how to find work, and how to respond to unpaid wages."
   },
   "5e12c4": {
    "text": "Work permit and weekly hour limits"
   },
   "f0b619": {
    "text": "To work part-time in Japan on a student visa, the **permission to engage in activity other than that permitted must be obtained first**. It can be applied for at the airport on arrival, or later at the regional immigration bureau. Working without it is illegal and may affect visa status. See [Residence procedures]."
   },
   "9071cc": {
    "text": "During term time the limit is 28 hours per week. During long vacations (spring, summer and winter) the limit is 8 hours per day and 40 hours per week. Exceeding these limits may be treated as illegal employment and can affect visa renewal, so strict compliance is required."
   },
   "105e04": {
    "text": "Wage rates and where to find work"
   },
   "77b055": {
    "text": "The minimum wage in Fukuoka Prefecture is **1,057 yen/hour** (effective 16 November 2025). International students typically earn around 1,057-1,200 yen/hour: convenience stores and restaurants at the lower end, tutoring and translation at the higher end. Actual conditions depend on the employer."
   },
   "493aef": {
    "text": "Main channels: notice boards at the university co-op or the international office, job sites such as Townwork and Baitoru, and referrals from senior students or a laboratory. There is no need to search before arrival - after obtaining a residence card and bank account is soon enough."
   },
   "1ae89a": {
    "text": "Precautions and official contacts"
   },
   "b2625a": {
    "items": [
     {
      "text": "Obtain the work permission before starting."
     },
     {
      "text": "Observe the 28-hour weekly limit strictly and keep personal shift records to avoid exceeding it."
     },
     {
      "text": "Declare part-time income as required to avoid conflicts with scholarship applications or tax."
     },
     {
      "text": "Agencies that demand deposits or retain identification documents are an abnormal signal - take care."
     }
    ]
   },
   "c5ccc9": {
    "items": [
     {
      "text": "Immigration Services Agency of Japan - work permission",
      "url": "https://www.isa.go.jp/"
     },
     {
      "text": "タウンワーク（Townwork）",
      "url": "https://townwork.net/"
     },
     {
      "text": "バイトル（Baitoru）",
      "url": "https://baitoru.com/"
     }
    ]
   }
  },
  "ko": {
   "1947e3": {
    "text": "아르바이트 전에 두 가지 수속이 필요합니다: **자격외활동 허가**(미취득 시 근무 불가)와 세금·연금. 이 페이지에서는 근무 시간 상한, 구하는 방법, 임금 체불 대응을 설명합니다."
   },
   "5e12c4": {
    "text": "자격외활동 허가와 근무 시간 상한"
   },
   "f0b619": {
    "text": "유학 비자로 일본에서 아르바이트를 하려면 **먼저 「자격외활동 허가」를 취득해야 합니다**. 이 허가는 입국 시 공항에서 신청할 수 있고, 입국 후 지방 출입국재류관리국에서도 수속할 수 있습니다. 허가 없이 근무하면 위법이며 비자에 영향을 줄 수 있습니다. 자세한 내용은 【재류 수속】을 참조하세요."
   },
   "9071cc": {
    "text": "학기 중에는 주 28시간이 상한입니다. 장기 방학 중(봄·여름·겨울방학)에는 1일 8시간, 주 40시간이 상한입니다. 상한을 초과한 근무가 위법으로 판단되면 재류 기간 갱신에 영향을 미칩니다. 반드시 준수하세요."
   },
   "105e04": {
    "text": "시급 시세와 구직 경로"
   },
   "77b055": {
    "text": "후쿠오카현 최저임금은 **1,057엔/시간**입니다(2025년 11월 16일 시행). 유학생 시급은 대체로 1,057~1,200엔 수준이며, 편의점·음식점은 낮은 편, 과외·번역은 높은 편입니다. 실제 조건은 고용주에 따릅니다."
   },
   "493aef": {
    "text": "주요 경로: 학교 생협 또는 국제부 게시판, 타운워크(Townwork)·바이토루(Baitoru) 등 구인 사이트, 선배나 연구실 소개 등이 있습니다. 입국 전에 서둘러 구할 필요는 없으며, 재류카드와 은행 계좌를 준비한 뒤에도 충분합니다."
   },
   "1ae89a": {
    "text": "주의사항과 공식 창구"
   },
   "b2625a": {
    "items": [
     {
      "text": "자격외활동 허가를 먼저 취득한 후 아르바이트를 시작하세요."
     },
     {
      "text": "주 28시간 상한을 엄수하고 근무표를 직접 관리해 초과를 피하세요."
     },
     {
      "text": "아르바이트 소득은 규정에 따라 신고하여 장학금 신청이나 세무와의 충돌을 피하세요."
     },
     {
      "text": "보증금을 요구하거나 신분증을 보관하는 중개는 이상 신호입니다. 주의하세요."
     }
    ]
   },
   "c5ccc9": {
    "items": [
     {
      "text": "출입국재류관리청·자격외활동 허가",
      "url": "https://www.isa.go.jp/"
     },
     {
      "text": "タウンワーク（Townwork）",
      "url": "https://townwork.net/"
     },
     {
      "text": "バイトル（Baitoru）",
      "url": "https://baitoru.com/"
     }
    ]
   }
  }
 },
 "guide-phone": {
  "ja": {
   "a3ea1a": {
    "text": "来日後はまず通信の確保が必要です。**まず一時的な SIM を用意してつなぎ**、落ち着いてから本契約を —— 大手 3 社と格安 SIM を比較し、解約時の注意点を説明します。"
   }
  },
  "en": {
   "a3ea1a": {
    "text": "Connectivity is the first thing to arrange in Japan. **Prepare a temporary SIM as a stopgap**, then choose a proper plan once settled - this page compares the big three with budget SIMs and covers cancellation."
   }
  },
  "ko": {
   "a3ea1a": {
    "text": "일본에서 가장 먼저 해결할 것은 통신입니다. **임시 SIM을 준비해 연결한 뒤** 안정되면 정식 요금제를 —— 대형 3사와 알뜰 SIM을 비교하고 해지 시 유의점을 설명합니다."
   }
  }
 },
 "guide-residence": {
  "ja": {
   "123756": {
    "headers": [
     "離れる期間",
     "必要な手続き"
    ],
    "rows": [
     [
      "1年以内",
      "「みなし再入国許可」を利用すればよい"
     ],
     [
      "1年を超える",
      "事前に入管局で再入国許可を申請"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "学生証を受け取る前に住民登録を完了しておく必要があります。"
     },
     {
      "text": "学生証の交付には学部によって時間がかかり、当日には受け取れません。"
     },
     {
      "text": "学生証を受け取ったら、必ずもう一度区役所で切り替え手続きを行ってください。"
     }
    ]
   },
   "569204": {
    "text": "帰国の前に必要な手続き"
   },
   "745564": {
    "text": "区役所／市役所（地方行政）：日常生活の手続きを担当します。住民登録、国民健康保険、国民年金、マイナンバーなど"
   },
   "824008": {
    "text": "在留に関する手続きの多くは窓口またはオンラインで行えますが、期限や手続きの順序があります。まずは2つの機関の違いを確認しましょう。"
   },
   "8988f9": {
    "text": "住所の届出はすべての手続きの起点です —— **未完了のままでは銀行口座の開設や携帯電話の契約ができません**。本記事では、まず区役所と入管局の役割分担を整理し、そのうえで住所の届出、在留資格の更新、マイナンバー、健康保険について順に説明します。"
   },
   "6114a5": {
    "text": "通過時の書類とリスク"
   },
   "26200b": {
    "text": "離境税の還付"
   },
   "cc395e": {
    "text": "区役所と入管局の役割分担"
   },
   "37a783": {
    "text": "区役所 vs 入管局"
   },
   "a14519": {
    "text": "出入国在留管理庁（入管局）（国の行政機関）：ビザ・在留資格を担当します。在留カードの更新・変更、再入国許可、資格外活動許可など"
   },
   "5f159d": {
    "text": "覚え方のポイント：区役所は生活、入管局はビザ（在留資格）を担当します。"
   },
   "1b1c2c": {
    "text": "在留カードへの住居地の記載"
   },
   "da7df6": {
    "text": "住所の届出は、来日後最初に行い、かつ最も重要な手続きです。銀行、携帯電話、保険など、その後のほぼすべての手続きは、住所の届出が完了してからでないと進められません。方法は次の2つです。"
   },
   "72da73": {
    "text": "自分で手続きする場合：九大学研都市駅そばの「さいとぴあ（西部出張所）」へ（JR「九大学研都市」駅から徒歩約1分。受付時間：平日 8:45〜17:15、土日祝は休み）。"
   },
   "b9e577": {
    "text": "窓口には市民係と保険年金係があり、通常 1〜1.5 時間で住民登録・年金・健康保険の手続きをまとめて完了できます。職員は経験豊富で、英語での対応も可能です。"
   },
   "e1582c": {
    "text": "学校による代理手続き：学校が在留カードを約3営業日預かり、住民登録のみを代理で行います。年金と健康保険は自分で別途手続きする必要があります。足を運ぶ必要がないのがメリットです。"
   },
   "e5831f": {
    "text": "どちらの方法でも構いません。学校の代理手続きを選んだ場合でも、後から自分で区役所へ行って残りの手続きを行っても問題ありません。届出完了後、在留カードは各自の学務課に提出して再登録してもらう必要があります。"
   },
   "fff1b2": {
    "text": "引っ越し後の住所変更"
   },
   "3eed49": {
    "text": "引っ越し後（同じ市区町村内への引っ越しを含む）は、**14日以内**に新しい住所の区役所で転入届を行い、在留カードの裏面に住所を更新してもらう必要があります。持ち物：在留カード、パスポート、引っ越し前の住民票（ある場合）。市区町村をまたぐ引っ越しは、先に元の住所の区役所で転出届を出し、その後新しい住所地で転入届を提出します。"
   },
   "ec20eb": {
    "text": "郵便物の転送（郵便転送）"
   },
   "258c3a": {
    "text": "引っ越し後、郵便物の転送はインターネットで申し込めます。有効期間は約3か月です。AからBへ、さらにCへと引っ越す場合は、A→B、次にB→Cの順で手続きします。その間にA宛に届いた郵便物は、自動的にCへ転送されます。"
   },
   "ac86c0": {
    "text": "在留カードの更新"
   },
   "29561b": {
    "text": "在留期間の**満了3か月前**から更新を申請できます。場所：福岡出入国在留管理局（地下鉄赤坂駅の近く）。必要書類は一般的に、在留カード、パスポート、在学証明書、申請書（公式サイトからダウンロード可）、所得証明などです。"
   },
   "f9cb98": {
    "text": "期限を過ぎて更新しないと「不法残留」となり、その結果は重大で段階に応じて異なります。刑事上は**3年以下の懲役または300万円以下の罰金**に処せられることがあります。さらに上陸拒否（再入国禁止）を伴います——自主的に出頭して出国した場合は1年、強制送還の場合は5年、再犯の場合は10年です。必ず満了前に手続きしてください。"
   },
   "0086fd": {
    "items": [
     {
      "text": "出入国在留管理庁（入管庁）",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "特定在留カード（2026年の新制度）"
   },
   "702ad6": {
    "text": "2026年6月14日から、在留カードとマイナンバーカードの一体化が始まり、2つの機能を1枚で兼ね備えた特定在留カードが発行されます。現在の在留カードも有効期間中はそのまま使え、切り替えは任意です。期限切れによる更新の際に、必要であれば新しいカードを併せて申請できます。"
   },
   "092dbb": {
    "text": "campus ログイン申請（campusweb）"
   },
   "8977fb": {
    "items": [
     {
      "text": "九大 campusweb",
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
     }
    ]
   },
   "1dda60": {
    "text": "農学部などの授業料免除申請も通常 campusweb から行います（公開されているか不明な場合は、先に上のページを開いてみてください）。"
   },
   "9c6062": {
    "text": "SSO-KID のログインとアクティベーション"
   },
   "d66ea0": {
    "text": "学校の統一アカウント（SSO-KID）のログイン／アクティベーションがうまくいかない場合は、以下の入口を参考にしてください。注意：SSO-KID のアクティベーションには**大学のメールアドレス以外は使用できません**。"
   },
   "7d1d01": {
    "items": [
     {
      "text": "SSO-KID 学生ログイン",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/students.html"
     },
     {
      "text": "SSO パスワード アクティベーション",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     }
    ]
   },
   "67b663": {
    "text": "マイナンバー（個人番号）"
   },
   "e63790": {
    "text": "住民登録後、個人番号のお知らせが簡易書留で届きます。できるだけ早く区役所でマイナンバーカード（写真付きのICカード）を申請することをおすすめします。銀行口座の開設、海外送金の受取、保険の手続きなどで必要になります。海外からの送金を受け取る際、銀行からマイナンバーの提示を求められることがあり、マイナンバーが記載された住民票を提出すれば対応できます。"
   },
   "0b4d10": {
    "text": "国民健康保険（医療保険）"
   },
   "8f34d4": {
    "text": "国民健康保険は医療保険で、加入すると医療費の自己負担は3割になります。留学生は加入が義務です。住民登録の手続きと同時に申請できます。【医療・保険】参照"
   },
   "ca823a": {
    "text": "国民年金（老齢年金）"
   },
   "cf19f3": {
    "text": "年金は老齢に備える保険で、日本に住む20歳以上の人は加入義務があります。令和7年度（2025）の保険料は**月額 17,510円**です。留学生は通常、実際の納付は不要で、次の2つの方法で免除を受けられます。"
   },
   "637f64": {
    "text": "① 所得が基準以下の免除：来日直後で収入がない場合に申請できます。区役所が初回手続き時に案内するつなぎの制度です。"
   },
   "ca081f": {
    "text": "② 学生納付特例：留学生に最も適した長期的な制度で、在学期間中は保険料の納付が猶予され、卒業後に収入ができてから追納します。申請には学生証が必要で、前年の所得が一定の基準（約128万円に扶養控除を加算。公式情報に準拠）以下であることが条件です。"
   },
   "c8342b": {
    "text": "重要な流れとよくある質問"
   },
   "4f17e5": {
    "text": "住民登録 → 区役所で初回の「所得が基準以下の免除」を申請 → 学務課で学生証を受け取る → もう一度区役所へ行き、免除を①から②の学生納付特例へ切り替える"
   },
   "90bede": {
    "text": "毎年、切り替えを忘れた学生が後から年金の納付書を受け取ってしまうことがあります。注意点："
   },
   "e7cf1e": {
    "text": "申請場所：住民登録をした区役所の年金窓口、または西福岡年金事務所。"
   },
   "8a0854": {
    "items": [
     {
      "text": "日本年金機構・学生納付特例",
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html"
     }
    ]
   },
   "5960c7": {
    "text": "日本を離れる前に済ませておくこと："
   },
   "067610": {
    "items": [
     {
      "text": "住所の抹消——区役所で転出届を提出"
     },
     {
      "text": "国民健康保険：保険証の返還と保険料の完納。6か月以上納めていれば脱退一時金を申請できます"
     },
     {
      "text": "国民年金——特例申請をしている場合は、今後の手続きを確認"
     },
     {
      "text": "税金——住民税・所得税の清算を確認。出国後に納付通知が届く可能性があるため、日本に残る友人に納付を依頼"
     },
     {
      "text": "銀行口座——解約するかどうかを決定"
     },
     {
      "text": "携帯電話——解約またはMNP転出"
     },
     {
      "text": "寮・アパート——契約に従って退去手続き"
     },
     {
      "text": "大学の手続き——成績・卒業証明書、図書館の返却、生協の脱退など"
     }
    ]
   },
   "23d79c": {
    "text": "未納の費用は個人の信用に影響するだけでなく、保証人や指導教員にまで及ぶことがあります。"
   },
   "497bc4": {
    "text": "国際観光旅客税（出国税）"
   },
   "a61a13": {
    "text": "日本から飛行機や船で出国する際、国際観光旅客税が課されます。通称「出国税」で、通常は航空券の料金に含まれています。税額は2026-07-01の出国分から、1回につき1,000円から3,000円に引き上げられます。"
   },
   "f0dbae": {
    "text": "覚えておきたい経過措置があります：2026-06-30までに締結された運送契約（つまり発券済みの航空券）は、実際の出国日が7月1日以降でも、引き上げ前の1,000円が適用されます。夏休みに帰国する予定なら、早めに発券するほど確実に差額を節約できます。"
   },
   "6432da": {
    "text": "確認方法：航空券の料金明細や領収書に「国際観光旅客税」の項目があるか、税項目に JPY 3,000 の記載があるかを確認します。日本へ入国する便には課されないため、この税は「出国」方向にのみ表示されます。"
   },
   "f21cc4": {
    "text": "一時的に日本を離れる場合（帰国／学会参加）"
   },
   "b36386": {
    "text": "永住帰国とは異なり、一時的な出国には独自の手続きがあります。原則として、まず指導教授の内諾を得て（まだ指導教員が決まっていない場合は学生委員長に相談）、その後学校へ海外渡航届を提出します。学部・学府によって様式が異なる場合があるため、内諾を得るときに併せて確認してください。"
   },
   "e00cbb": {
    "items": [
     {
      "title": "出国時に出入国申告書を受け取る",
      "desc": "日本の出国手続きの際に受け取り、記入します。"
     },
     {
      "title": "正しい項目にチェック",
      "desc": "出国予定期間は「1年以内」にチェックし、その下の「一時出国、再入国予定」にチェックします。"
     },
     {
      "title": "印の確認",
      "desc": "係官が申告書をパスポートに綴じ、裏面に「みなし再入国許可」の印を押します。"
     }
    ]
   },
   "ba4f4e": {
    "text": "**在留カードの期限が1年未満の場合は、在留カードの期限が基準になります**。「1年」が基準ではありません。ここを間違えると、帰国時に日本へ入れなくなる可能性があります。"
   },
   "f188b5": {
    "text": "交通の注意：地下鉄福岡空港駅から直接つながっているのは**国内線**ターミナルです。帰国や他国への渡航は**国際線**ターミナルからで、無料の連絡バスへの乗り換えが必要です。"
   },
   "5a78fd": {
    "text": "香港経由の往復：書類と税金の還付"
   },
   "6e4653": {
    "text": "香港と福岡の間には複数の航空会社が直行便を運航しており、うち2社はLCC（格安航空会社）のため、華南出身の学生の多くが香港経由を選びます。ただし、通過に使う書類のルールは想像以上に複雑で、間違えると悪い記録が残ります。"
   },
   "d598ce": {
    "headers": [
     "ケース",
     "中国本土のパスポートが使えるか",
     "ポイント"
    ],
    "rows": [
     [
      "空港の制限区域内での乗り継ぎのみ",
      "出入国に該当しない",
      "下記の条件は考慮不要"
     ],
     [
      "A地 ⇄ 香港（7日以内）⇄ B地",
      "可能",
      "A・Bは同一地域不可。続行便の航空券が必要"
     ],
     [
      "日本 → 香港 → そのまま日本へ戻る",
      "不可",
      "事前に「香港入境許可証」の取得が必要"
     ],
     [
      "香港に7日を超えて滞在",
      "不可",
      "上記と同様、事前の取得が必要"
     ],
     [
      "中国本土と香港の往復のみ",
      "不可",
      "港澳通行証の使用が必須"
     ]
    ]
   },
   "49f1ab": {
    "text": "間違った書類で中国本土から香港に入ると、係官がパスポートに DT（Delete Travel）の記録を残すことがあり、その後の香港への入国や他国のビザ申請に影響します。この点は油断せず、正しい書類を使いましょう。"
   },
   "51009c": {
    "text": "「香港入境許可証」は中国の在日大使館・領事館で申請できます。1回の滞在は最長14日間で、3か月1回、3か月2回、1年数次、2年数次などの種類があります。福岡の領事館は地下鉄唐人町駅の近くにあります。"
   },
   "b3abdf": {
    "text": "還付について：香港を出発するすべての便には、通常、香港が徴収する航空旅客離境税（Air Passenger Departure Tax）が含まれています。条件を満たせば払い戻しを申請でき、期限は出発後28日以内です。具体的な条件と手順は、本記事の「国際観光旅客税（出国税）」の項目の下にある説明を参照するか、香港政府の公式返金ガイドをご確認ください。"
   },
   "2cbead": {
    "items": [
     {
      "text": "香港航空旅客離境税の還付（公式）",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "中国在日大使館・海外から香港へ行く際のガイド",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "本記事の一部は『新伊都国風土記』（著者：Hato_Tsubame、CantonSimon）をもとに、著者の許可を得て収録しています。記事中の料金・時刻・手続きは時期により変わるため、重要事項は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "123756": {
    "headers": [
     "Length of absence",
     "What to do"
    ],
    "rows": [
     [
      "Within 1 year",
      "Only a みなし再入国許可 (deemed re-entry permit) is needed"
     ],
     [
      "More than 1 year",
      "Apply to the immigration bureau for a 再入国許可 (re-entry permit) in advance"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "Resident registration must be completed before the student ID card is issued;"
     },
     {
      "text": "The production time of the student ID card varies by faculty, and it is not available on the same day;"
     },
     {
      "text": "After receiving the student ID card, the 区役所 (ward office) must be visited once more to complete the switch."
     }
    ]
   },
   "569204": {
    "text": "Procedures before returning home"
   },
   "745564": {
    "text": "区役所/市役所（ward office / city office, local administration）: daily-life procedures, 住民登録（resident registration）, 国民健康保険（National Health Insurance）, 国民年金（National Pension）, マイナンバー（My Number）"
   },
   "824008": {
    "text": "Residence-related procedures can mostly be completed at a counter or online, but each has deadlines and a prescribed order. First, the two agencies should be distinguished:"
   },
   "8988f9": {
    "text": "Residence registration is the starting point of all procedures: **without it, bank accounts cannot be opened and mobile phones cannot be set up**. This article first distinguishes the 区役所（ward office）from the immigration bureau, then explains residence registration, residence-period renewal, My Number and health insurance in order."
   },
   "6114a5": {
    "text": "Transit documents and risks"
   },
   "26200b": {
    "text": "Departure tax refund"
   },
   "cc395e": {
    "text": "Division of duties: the 区役所（ward office）and the immigration bureau"
   },
   "37a783": {
    "text": "区役所（ward office）vs immigration bureau"
   },
   "a14519": {
    "text": "出入国在留管理庁（入管局）（the Immigration Services Agency, national administration）: visas and status of residence; renewal and change of the 在留カード（residence card）, 再入国許可（re-entry permit）, 資格外活動許可（permission to engage in activities other than those permitted by the status of residence）"
   },
   "5f159d": {
    "text": "In short: the 区役所（ward office）handles daily life, the immigration bureau handles visas."
   },
   "1b1c2c": {
    "text": "Registering an address on the 在留カード（residence card）"
   },
   "da7df6": {
    "text": "Residence registration is the first and most critical step after arrival: almost all subsequent procedures, including banking, mobile phones and insurance, require it to be completed first. Two options are available:"
   },
   "72da73": {
    "text": "Self-service: go to さいとぴあ（西部出張所）（Saitopia, the west branch office）next to Kyudai Gakkentoshi Station (about 1 minute on foot from JR「九大学研都市」station; counter hours: weekdays 8:45-17:15, closed on weekends and holidays)."
   },
   "b9e577": {
    "text": "The counter has 市民係（residents' affairs desk）and 保険年金係（insurance and pension desk）; residence registration, pension and health insurance can usually be completed together in about 1-1.5 hours. The staff are experienced and can respond in English."
   },
   "e1582c": {
    "text": "School proxy: the school keeps the 在留カード（residence card）for about 3 business days and handles 住民登録（resident registration）only; pension and health insurance must still be arranged separately. The advantage is that no visit to the office is required."
   },
   "e5831f": {
    "text": "Either option may be chosen; even if the school proxy option is selected, the remaining procedures can still be completed later in person at the 区役所（ward office）. After registration is complete, the 在留カード（residence card）must be submitted to the respective 学務課（student affairs office）and registered once more."
   },
   "fff1b2": {
    "text": "Changing the address after moving"
   },
   "3eed49": {
    "text": "After moving (including within the same municipality), a move-in notification must be filed at the 区役所（ward office）of the new address **within 14 days**, and the address on the back of the 在留カード（residence card）must be updated. Required items: 在留カード（residence card）, passport, and the previous 住民票（certificate of residence）（if available）. When moving across municipalities, a 転出届（notice of moving out）must first be filed at the former ward office, followed by a 転入届（notice of moving in）at the new one."
   },
   "ec20eb": {
    "text": "Postal mail forwarding"
   },
   "258c3a": {
    "text": "Mail forwarding can be arranged online after moving and remains valid for about 3 months. When moving from A to B and then to C, A→B can be arranged first and then B→C; mail sent to A during the period is automatically forwarded on to C."
   },
   "ac86c0": {
    "text": "Renewing the 在留カード（residence card）"
   },
   "29561b": {
    "text": "An application for renewal can be filed **up to 3 months before** the expiry of the period of stay. Location: 福岡出入国在留管理局（Fukuoka Regional Immigration Services Bureau）（near Akasaka Station on the subway）. Materials generally required: 在留カード（residence card）, passport, 在学証明書（certificate of enrollment）, 申請書（application form）（downloadable from the official website）, 収入証明（proof of income）, etc."
   },
   "f9cb98": {
    "text": "Failing to renew in time constitutes 不法残留（overstaying）, with serious, graduated consequences: criminally, **imprisonment of up to 3 years or a fine of up to 300 万円**; 上陸拒否（denial of landing, i.e. prohibition of re-entry）also applies - 1 year for those who depart voluntarily after turning themselves in, 5 years for those forcibly deported, and 10 years for repeat offenders. The renewal must be completed before expiration."
   },
   "0086fd": {
    "items": [
     {
      "text": "出入国在留管理庁 (Immigration Services Agency)",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "The 特定在留カード（Specified Residence Card）（new policy from 2026）"
   },
   "702ad6": {
    "text": "From June 14, 2026, the 在留カード（residence card）and マイナンバーカード（My Number Card）will be integrated into a single 特定在留カード（Specified Residence Card）that combines both functions. Existing residence cards remain valid until their expiry; switching is voluntary. When renewing at expiration, the new card can be applied for together if needed."
   },
   "092dbb": {
    "text": "Applying for campus login (campusweb)"
   },
   "8977fb": {
    "items": [
     {
      "text": "Kyushu University campusweb",
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
     }
    ]
   },
   "1dda60": {
    "text": "Applications such as tuition exemption for the Faculty of Agriculture are also generally submitted via campusweb (if unsure whether it is open, the page above can be opened first as a test)."
   },
   "9c6062": {
    "text": "SSO-KID login and activation"
   },
   "d66ea0": {
    "text": "If the university unified account (SSO-KID) cannot be logged into or activated, the entry points below can be used. Note: for SSO-KID activation, **an email address other than the school email address cannot be used**."
   },
   "7d1d01": {
    "items": [
     {
      "text": "SSO-KID student login",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/students.html"
     },
     {
      "text": "SSO password activation",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     }
    ]
   },
   "67b663": {
    "text": "マイナンバー（My Number）"
   },
   "e63790": {
    "text": "After resident registration, a notice of the individual number is sent to the address by registered mail. Applying for the マイナンバーカード（My Number Card, a plastic card with a photo）at the 区役所（ward office）as soon as possible is recommended, as it is needed later for opening bank accounts, receiving overseas remittances, enrolling in insurance, etc. When receiving remittances from abroad, the bank requests the マイナンバー（My Number）; a 住民票（certificate of residence）bearing the number can be submitted."
   },
   "0b4d10": {
    "text": "国民健康保険（National Health Insurance）"
   },
   "8f34d4": {
    "text": "国民健康保険（National Health Insurance）is medical insurance; once enrolled, the individual bears only 30% of medical costs. International students must enroll. It can be applied for together with 住民登録（resident registration）. See【医疗·保险】"
   },
   "ca823a": {
    "text": "国民年金（National Pension）"
   },
   "cf19f3": {
    "text": "年金（pension）is retirement insurance; all persons aged 20 or over residing in Japan are obliged to enroll. The premium for fiscal year 令和 7（2025）is **17,510 円 per month**. International students generally do not actually pay; the premium can be reduced or exempted in two ways:"
   },
   "637f64": {
    "text": "① Income-below-threshold exemption: it can be applied for upon arrival when no income exists yet, and is a transitional option offered by the 区役所（ward office）at the initial enrollment."
   },
   "ca081f": {
    "text": "② 学生納付特例（student contribution special exception）: the long-term option best suited to international students - premiums are deferred while enrolled and paid later once income is earned. The application requires the student ID card, and the previous year's income must be below the specified threshold (approximately 128 万円 plus dependent deductions; the official figures take precedence)."
   },
   "c8342b": {
    "text": "Key procedures and common questions"
   },
   "4f17e5": {
    "text": "住民登録（resident registration）→ apply for the income-below-threshold exemption at the 区役所（ward office）on the first visit → collect the student ID card from the 学務課（student affairs office）→ return to the 区役所（ward office）to switch the exemption from ① to ② 学生納付特例（student contribution special exception）"
   },
   "90bede": {
    "text": "Every year some students forget to make this switch and later receive pension bills. Note:"
   },
   "e7cf1e": {
    "text": "Application location: the pension counter of the 区役所（ward office）where resident registration was filed, or 西福岡年金事務所（Nishi-Fukuoka Pension Office）."
   },
   "8a0854": {
    "items": [
     {
      "text": "Japan Pension Service - 学生納付特例 (student contribution special exception)",
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html"
     }
    ]
   },
   "5960c7": {
    "text": "Before leaving Japan, the following must be arranged:"
   },
   "067610": {
    "items": [
     {
      "text": "Cancel the registered address - file a 転出届 (notice of moving out) at the 区役所 (ward office)"
     },
     {
      "text": "国民健康保険 (National Health Insurance) : return the insurance certificate and settle all premiums; if premiums were paid for 6 months or more, a 脱退一時金 (lump-sum withdrawal payment) can be claimed"
     },
     {
      "text": "国民年金 (National Pension) : if a special exception was applied for, confirm the follow-up procedure"
     },
     {
      "text": "Taxes: confirm that 住民税 (residence tax) and income tax are settled; a notice of additional payment may arrive after departure, in which case a friend in Japan must be asked to pay on one's behalf"
     },
     {
      "text": "Bank accounts: decide whether to close them"
     },
     {
      "text": "Mobile phone: cancel the contract or transfer the number via MNP"
     },
     {
      "text": "Dormitory/apartment: complete the move-out procedure according to the contract"
     },
     {
      "text": "University procedures: transcripts/graduation certificates, returning library books, 生協 (co-op) withdrawal, etc."
     }
    ]
   },
   "23d79c": {
    "text": "Unsettled fees can affect one's personal credit and may also implicate the guarantor or the supervising professor."
   },
   "497bc4": {
    "text": "国際観光旅客税（International Tourist Tax, the departure tax）"
   },
   "a61a13": {
    "text": "Air and sea passengers departing Japan are subject to the 国際観光旅客税（International Tourist Tax）, commonly known as the 「出国税（departure tax）」; it is generally included in the ticket price. From departures on and after 2026-07-01, the amount is raised from 1,000 円 to 3,000 円 per departure."
   },
   "f0dbae": {
    "text": "One transitional measure is worth remembering: for transport contracts concluded on or before 2026-06-30 (i.e. tickets already issued), the pre-adjustment rate of 1,000 円 still applies even if the actual departure date falls after July 1. For those planning to return home during the summer, issuing the ticket earlier means a real saving."
   },
   "6432da": {
    "text": "How to confirm: check the fare breakdown or receipt for an item named 「国際観光旅客税」, or for \"JPY 3,000\" among the taxes. Flights arriving in Japan are not subject to this tax, so it appears only in the outbound direction."
   },
   "f21cc4": {
    "text": "Temporarily leaving Japan (returning home / attending academic conferences)"
   },
   "b36386": {
    "text": "Unlike a permanent return home, temporary departure follows its own procedure. In principle, informal approval (内諾) from the supervising professor must first be obtained (students without an assigned supervisor should apply to the 学生委員長（chair of the student committee）), and then an 海外渡航届（overseas travel notification）is submitted to the university. The form format may differ by faculty or graduate school, so this should be asked about when obtaining approval."
   },
   "e00cbb": {
    "items": [
     {
      "title": "Obtain the departure/entry declaration card at departure",
      "desc": "Request and complete the form during the departure procedures in Japan."
     },
     {
      "title": "Select the correct options",
      "desc": "For the scheduled period of absence, tick 「1 年以内」(within one year), and below, tick the option for temporary departure with scheduled re-entry (「一時出国・再入国予定」)."
     },
     {
      "title": "Confirm the stamp",
      "desc": "The declaration form is attached to the passport, and the 「みなし再入国許可」stamp is applied on the back."
     }
    ]
   },
   "ba4f4e": {
    "text": "**If the 在留カード（residence card）expires in less than one year, the expiry date of the card prevails** over the 「1 年」rule. A miscalculation on this point can result in being refused entry upon return."
   },
   "f188b5": {
    "text": "Transportation reminder: the subway stop at Fukuoka Airport Station connects directly to the **domestic** terminal. Departures home or to other countries use the **international** terminal, which requires taking the free shuttle."
   },
   "5a78fd": {
    "text": "Transit via Hong Kong: documents and tax refund"
   },
   "6e4653": {
    "text": "Several airlines operate direct flights between Hong Kong and Fukuoka, two of them low-cost carriers, so many students from South China choose to transit via Hong Kong. However, the rules on which documents to use for transit are more complex than expected, and a misstep leaves a negative record."
   },
   "d598ce": {
    "headers": [
     "Case",
     "Mainland China passport usable?",
     "Notes"
    ],
    "rows": [
     [
      "Transit within the airport restricted area only",
      "No entry/exit involved",
      "The requirements below do not apply"
     ],
     [
      "Place A ⇄ Hong Kong (within 7 days) ⇄ Place B",
      "Yes",
      "A and B must not be in the same region; an onward ticket is required"
     ],
     [
      "Japan → Hong Kong → directly back to Japan",
      "No",
      "「香港進入許可」(Hong Kong entry permit) must be obtained in advance"
     ],
     [
      "Staying in Hong Kong for more than 7 days",
      "No",
      "Same as above, must be arranged in advance"
     ],
     [
      "Traveling between the mainland and Hong Kong only",
      "No",
      "The 港澳通行證 (Mainland Travel Permit for Hong Kong and Macao) must be used"
     ]
    ]
   },
   "49f1ab": {
    "text": "If the wrong document is used to enter Hong Kong from the mainland, customs will record a DT (Delete Travel) entry in the passport, which affects future entry into Hong Kong and visa applications to other countries. No chances should be taken on this point."
   },
   "51009c": {
    "text": "The 「香港進入許可」(Hong Kong entry permit) is issued by Chinese embassies/consulates in Japan, allowing a maximum stay of 14 days per visit; options include single entry within 3 months, double entry within 3 months, multiple entries within 1 year, and multiple entries within 2 years. The consulate in Fukuoka is near Tojinmachi Station on the subway."
   },
   "b3abdf": {
    "text": "Tax refund: flights departing from Hong Kong generally include the Air Passenger Departure Tax levied by Hong Kong. A refund can be claimed within 28 days after departure when the conditions are met. For the specific conditions and steps, see the explanation below the 「国際観光旅客税（出国税）」section of this article, or consult the official refund guide of the Hong Kong government directly."
   },
   "2cbead": {
    "items": [
     {
      "text": "Hong Kong Air Passenger Departure Tax refund (official)",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "Embassy of China in Japan - guide to visiting Hong Kong from abroad",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "Part of this article is compiled from 《新伊都国風土記》(by Hato_Tsubame and CantonSimon), included with the authors' permission. Prices, schedules and procedures in this article change over time; for important matters, the official websites take precedence."
   }
  },
  "ko": {
   "123756": {
    "headers": [
     "출국 기간",
     "처리할 사항"
    ],
    "rows": [
     [
      "1년 이내",
      "「みなし再入国許可(의제재입국허가)」로 충분합니다"
     ],
     [
      "1년 초과",
      "미리 入管局(입관국)에 再入国許可(재입국허가)를 신청합니다"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "학생증 수령 전에 먼저 주민 등록을 완료해야 합니다;"
     },
     {
      "text": "학생증 제작에는 학부(学部)에 따라 시간이 걸려 당일 수령이 불가능합니다;"
     },
     {
      "text": "학생증을 받은 뒤 반드시 区役所(구청)에 한 번 더 가서 전환 절차를 처리하십시오."
     }
    ]
   },
   "569204": {
    "text": "귀국 전에 해야 할 수속"
   },
   "745564": {
    "text": "区役所(구청)/市役所(시청)(지방 행정): 일상생활 수속, 住民登録(주민등록), 国民健康保険(국민건강보험), 国民年金(국민연금), マイナンバー(마이넘버)"
   },
   "824008": {
    "text": "재류 관련 수속은 대부분 창구나 온라인으로 처리할 수 있지만, 기한이 있고 순서도 있습니다. 먼저 두 기관을 구분하십시오:"
   },
   "8988f9": {
    "text": "주소 등록은 모든 수속의 출발점입니다. **미완료 시 은행 계좌 개설과 휴대폰 개통이 불가능합니다**. 본문에서는 우선 区役所(구청)와 入管局(입관국)의 역할을 구분한 뒤, 주소 등록, 재류 갱신, マイナンバー(마이넘버), 건강보험 순으로 설명합니다."
   },
   "6114a5": {
    "text": "경유 증명 서류와 리스크"
   },
   "26200b": {
    "text": "출국세 환급"
   },
   "cc395e": {
    "text": "区役所(구청)와 入管局(입관국)의 역할 분담"
   },
   "37a783": {
    "text": "区役所(구청) vs 入管局(입관국)"
   },
   "a14519": {
    "text": "出入国在留管理庁(출입국재류관리청)(入管局(입관국))(국가 행정): 비자·재류 자격, 在留カード(재류카드) 갱신·변경, 再入国許可(재입국허가), 資格外活動許可(자격외활동허가)"
   },
   "5f159d": {
    "text": "요약: 区役所(구청)는 생활을, 入管局(입관국)는 비자를 담당합니다."
   },
   "1b1c2c": {
    "text": "在留カード(재류카드) 주소 등록"
   },
   "da7df6": {
    "text": "주소 등록은 도착 후 가장 먼저, 그리고 가장 중요하게 처리해야 하는 단계입니다. 은행, 휴대폰, 보험 등 거의 모든 후속 수속은 주소 등록을 마쳐야 진행할 수 있습니다. 두 가지 방법이 있습니다:"
   },
   "72da73": {
    "text": "직접 처리: 九大学研都市(큐다이가쿠켄토시)역 옆의 さいとぴあ(사이토피아)(西部出張所(서부출장소))를 방문합니다(JR「九大学研都市」역에서 도보 약 1분; 접수 시간: 평일 8:45~17:15, 주말 및 공휴일 휴무)."
   },
   "b9e577": {
    "text": "창구에는 市民係(시민계), 保険年金係(보험연금계)가 있으며, 일반적으로 1~1.5시간이면 주민 등록, 연금, 건강보험을 한 번에 처리할 수 있습니다. 직원들은 경험이 풍부하며 영어로도 대응할 수 있습니다."
   },
   "e1582c": {
    "text": "학교 대행: 학교가 在留カード(재류카드)를 약 3영업일간 보관하며, 주민 등록만 대행해 줍니다. 연금과 건강보험은 직접 별도로 처리해야 합니다. 장점은 직접 나가지 않아도 된다는 점입니다."
   },
   "e5831f": {
    "text": "두 방법 중에서 선택할 수 있습니다. 학교 대행을 선택했더라도 이후 区役所(구청)에 직접 가서 나머지 수속을 추가로 처리해도 문제없습니다. 등록을 마친 뒤에는 在留カード(재류카드)를 각자 소속 학무과(学務課)에 제출해 한 번 더 등록해야 합니다."
   },
   "fff1b2": {
    "text": "이사 후 주소 변경"
   },
   "3eed49": {
    "text": "이사 후(같은 市区町村(시구정촌) 내 이사 포함) **14일 이내**에 새 주소지의 区役所(구청)에서 전입 신고를 하고, 在留カード(재류카드) 뒷면의 주소를 갱신해야 합니다. 지참물: 在留カード(재류카드), 여권, 이사 전 住民票(주민표)(있는 경우). 시구(市区)를 넘는 이사는 먼저 종전 주소지 区役所(구청)에서 転出届(전출신고)를 낸 뒤, 새 주소지에서 転入届(전입신고)를 해야 합니다."
   },
   "ec20eb": {
    "text": "우편물 전송(郵便転送)"
   },
   "258c3a": {
    "text": "이사 후 인터넷으로 우편물 전송(郵便転送)을 신청할 수 있으며, 유효기간은 약 3개월입니다. A에서 B로, 다시 C로 이사하는 경우 A→B, 이어서 B→C를 신청하면 됩니다. 그 사이에 A로 배달된 우편물은 자동으로 연속 전송되어 C까지 도착합니다."
   },
   "ac86c0": {
    "text": "在留カード(재류카드) 갱신"
   },
   "29561b": {
    "text": "在留 기간 **만료 3개월 전**부터 갱신을 신청할 수 있습니다. 장소: 福岡出入国在留管理局(후쿠오카출입국재류관리국)(지하철 아카사카(赤坂)역 부근). 필요 서류는 일반적으로 在留カード(재류카드), 여권, 在学証明書(재학증명서), 申請書(신청서)(공식 사이트에서 다운로드 가능), 收入証明(소득증명) 등입니다."
   },
   "f9cb98": {
    "text": "기한 내에 갱신하지 않으면 「不法残留(불법잔류)」가 되며, 결과가 심각하고 단계별로 다릅니다: 형사상 **3년 이하의 징역 또는 300万円(300만엔) 이하의 벌금**이 부과될 수 있으며, 上陸拒否(상륙거부)(재입국 금지)가 수반됩니다. 자진 출국자는 1년, 강제 송환된 사람은 5년, 상습범은 10년입니다. 반드시 만료 전에 처리하십시오."
   },
   "0086fd": {
    "items": [
     {
      "text": "出入国在留管理庁(출입국재류관리청)",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "特定在留カード(특정재류카드)(2026년 신제도)"
   },
   "702ad6": {
    "text": "2026년 6월 14일부터 在留カード(재류카드)와 マイナンバーカード(마이넘버카드)가 통합되어, 두 기능을 모두 갖춘 特定在留カード(특정재류카드)가 발급됩니다. 기존 在留カード(재류카드)는 유효기간 내에는 계속 정상적으로 사용할 수 있으며, 전환은 자유입니다. 만료 시 갱신할 때 필요하다면 새 카드를 함께 신청할 수 있습니다."
   },
   "092dbb": {
    "text": "campus 로그인 신청(campusweb)"
   },
   "8977fb": {
    "items": [
     {
      "text": "九大 campusweb",
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
     }
    ]
   },
   "1dda60": {
    "text": "농학부(農学部) 등 학비 감면 신청도 일반적으로 campusweb으로 진행합니다(개방 여부가 확실하지 않으면 위 페이지를 먼저 열어 확인해 볼 수 있습니다)."
   },
   "9c6062": {
    "text": "SSO-KID 로그인과 활성화"
   },
   "d66ea0": {
    "text": "학교 통합 계정(SSO-KID)의 로그인/활성화가 계속되지 않을 때에는 아래 진입 경로를 참고하십시오. 주의: SSO-KID 활성화는 **학교 메일 이외의 이메일을 사용할 수 없습니다**."
   },
   "7d1d01": {
    "items": [
     {
      "text": "SSO-KID 학생 로그인",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/students.html"
     },
     {
      "text": "SSO 비밀번호 활성화",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     }
    ]
   },
   "67b663": {
    "text": "マイナンバー(마이넘버)(개인번호)"
   },
   "e63790": {
    "text": "주민 등록 후 개인번호 통지서가 등기우편으로 주소지에 도착합니다. 가능한 한 빨리 区役所(구청)에서 マイナンバーカード(마이넘버카드)(사진이 붙은 플라스틱 카드)를 신청할 것을 권장합니다. 이후 은행 계좌 개설, 해외 송금 수령, 보험 가입 등에 모두 사용됩니다. 해외에서 송금을 받을 때 은행은 マイナンバー(마이넘버) 제시를 요구하므로, マイナンバー(마이넘버)가 기재된 住民票(주민표)를 제출하면 됩니다."
   },
   "0b4d10": {
    "text": "国民健康保険(국민건강보험)(의료보험)"
   },
   "8f34d4": {
    "text": "国民健康保険(국민건강보험)은 의료보험으로, 가입하면 진료 시 본인 부담이 30%뿐이며 유학생은 가입이 의무입니다. 주민 등록을 할 때 함께 신청할 수 있습니다. 【의료·보험】 참조"
   },
   "ca823a": {
    "text": "国民年金(국민연금)(연금보험)"
   },
   "cf19f3": {
    "text": "연금은 노후 보장을 위한 보험으로, 일본에 거주하는 20세 이상은 모두 가입 의무가 있으며, 令和7年度(레이와7년도)(2025)의 보험료는 **매월 17,510円(17,510엔)**입니다. 유학생은 일반적으로 실제 납부가 필요 없으며, 다음 두 가지 방법으로 감면받을 수 있습니다:"
   },
   "637f64": {
    "text": "① 소득 기준 미달 면제: 일본에 막 도착해 소득이 없을 때 신청할 수 있으며, 区役所(구청)가 최초 처리 시 제공하는 과도기 방안입니다."
   },
   "ca081f": {
    "text": "② 学生納付特例(학생납부특례): 유학생에게 가장 적합한 장기 방안으로, 재학 중에는 보험료 납부가 유예되고 졸업 후 소득이 생기면 추가 납부합니다. 신청에는 학생증이 필요하며, 전년도 소득이 기준선 이하(약 128万円(128만엔)에 부양 공제를 더한 금액, 공식 기준에 따름)여야 합니다."
   },
   "c8342b": {
    "text": "핵심 절차와 자주 묻는 질문"
   },
   "4f17e5": {
    "text": "주민 등록 → 최초로 区役所(구청)에서 「소득 기준 미달 면제」 처리 → 학무과(学務課)에서 학생증 수령 → 다시 区役所(구청)에 가서 면제를 ①에서 ② 学生納付特例(학생납부특례)로 전환"
   },
   "90bede": {
    "text": "매년 전환을 잊어버려 이후 연금 고지서를 받게 되는 학생들이 있습니다. 주의:"
   },
   "e7cf1e": {
    "text": "신청 장소: 주민 등록을 한 区役所(구청)의 연금 창구, 또는 西福岡年金事務所(니시후쿠오카네넨지무쇼)."
   },
   "8a0854": {
    "items": [
     {
      "text": "日本年金機構(일본연금기구)·学生納付特例(학생납부특례)",
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html"
     }
    ]
   },
   "5960c7": {
    "text": "일본을 떠나기 전에 처리해야 할 사항:"
   },
   "067610": {
    "items": [
     {
      "text": "주소 말소: 区役所(구청)에서 転出届(전출신고) 처리"
     },
     {
      "text": "国民健康保険(국민건강보험): 보험증 반납과 보험료 정산; 6개월 이상 납부 시 脱退一時金(탈퇴일시금) 신청 가능"
     },
     {
      "text": "国民年金(국민연금): 특례 신청을 한 경우 후속 처리 확인"
     },
     {
      "text": "세금: 住民税(주민세)와 소득세의 정산 확인; 출국 후 추가 납부 고지가 올 수 있어 일본에 있는 지인에게 대납을 위임해야 합니다"
     },
     {
      "text": "은행 계좌: 해지 여부 결정"
     },
     {
      "text": "휴대폰: 해지 또는 MNP 전환"
     },
     {
      "text": "기숙사/아파트: 계약에 따라 퇴거(退去) 처리"
     },
     {
      "text": "대학 수속: 성적/졸업 증명서, 도서관 도서 반납, 生協(생협) 탈퇴 등"
     }
    ]
   },
   "23d79c": {
    "text": "정산하지 않은 비용은 개인 신용에 영향을 줄 수 있으며, 보증인/지도교수에게까지 영향을 미칠 수 있습니다."
   },
   "497bc4": {
    "text": "国際観光旅客税(국제관광여객세)(출국세)"
   },
   "a61a13": {
    "text": "일본에서 비행기나 배로 출국할 때 国際観光旅客税(국제관광여객세), 통칭 「出国税(출국세)」가 부과되며, 일반적으로 항공권 가격에 포함되어 있습니다. 세액은 2026-07-01 이후 출국분부터 1회당 1,000円(1,000엔)에서 3,000円(3,000엔)으로 인상됩니다."
   },
   "f0dbae": {
    "text": "기억해 둘 만한 경과 조치가 있습니다: 2026-06-30 이전에 체결된 운송 계약(즉 이미 발권된 항공권)은 실제 출국일이 7월 1일 이후라도 조정 전의 1,000円(1,000엔)으로 계산됩니다. 여름방학 귀국을 계획하고 있다면 일찍 발권하는 것이 실질적인 차액입니다."
   },
   "6432da": {
    "text": "확인 방법: 항공권 가격 내역이나 영수증에 「国際観光旅客税(국제관광여객세)」 항목이 있는지, 또는 세금 항목에 JPY 3,000 표기가 있는지 확인합니다. 일본에 입국하는 항공편에는 이 세금이 부과되지 않으므로, 「출(出)」 방향에서만 나타납니다."
   },
   "f21cc4": {
    "text": "일시적 일본 출국(귀국 / 학회 참가)"
   },
   "b36386": {
    "text": "영구 귀국과 달리 일시 출국에는 별도의 절차가 있습니다. 원칙적으로 먼저 지도교수의 内諾(내락)을 받고(아직 배속된 지도교수가 없으면 학생위원장에게 신청), 학교에 海外渡航届(해외도항신고서)를 제출합니다. 学部(학부)/学府(대학원)마다 서식이 다를 수 있으므로 内諾(내락)을 받을 때 함께 확인하십시오."
   },
   "e00cbb": {
    "items": [
     {
      "title": "출국 시 출입국 신고서 수령",
      "desc": "일본 출국 수속 시 신고서를 받아 작성합니다."
     },
     {
      "title": "올바른 옵션 선택",
      "desc": "출국 예정 기간은 「1년 이내」를, 아래는 「임시 출국, 재입국 예정」을 선택합니다."
     },
     {
      "title": "도장 확인",
      "desc": "세관이 신고서를 여권에 부착하고 뒷면에 「みなし再入国許可(의제재입국허가)」 도장을 찍습니다."
     }
    ]
   },
   "ba4f4e": {
    "text": "**在留カード(재류카드)의 유효기간이 1년이 안 되어 만료되는 경우에는 在留カード(재류카드)의 기한을 기준으로 합니다**, 「1년」을 기준으로 하지 않습니다. 이 부분을 잘못 계산하면 돌아올 때 입국하지 못할 수 있습니다."
   },
   "f188b5": {
    "text": "교통 안내: 지하철 후쿠오카공항(福岡空港)역과 직접 연결되는 곳은 **국내선** 터미널입니다. 귀국하거나 다른 나라로 갈 때는 **국제선** 터미널로 가야 하며, 무료 셔틀버스로 환승해야 합니다."
   },
   "5a78fd": {
    "text": "홍콩 경유 왕복: 증명 서류와 세금 환급"
   },
   "6e4653": {
    "text": "홍콩과 후쿠오카 사이에는 여러 항공사의 직항편이 있으며, 그중 두 곳은 저비용 항공사(LCC)라서 중국 남부(華南) 출신의 많은 학생이 홍콩을 경유합니다. 다만 어떤 증명 서류로 경유하느냐에 따른 규칙이 생각보다 복잡하며, 잘못하면 불량 기록이 남을 수 있습니다."
   },
   "d598ce": {
    "headers": [
     "상황",
     "중국 본토 여권 사용 가능 여부",
     "핵심"
    ],
    "rows": [
     [
      "공항 통제구역 내에서만 환승",
      "출입국 절차 없음",
      "아래 요건을 무시해도 됩니다"
     ],
     [
      "A지 ⇄ 홍콩(7일 이내) ⇄ B지",
      "가능",
      "A·B는 같은 지역일 수 없으며, 이어지는 항공권(계속 여정)이 필요합니다"
     ],
     [
      "일본 → 홍콩 → 일본으로 직접 복귀",
      "불가",
      "「香港進入許可(홍콩 입국 허가)」를 미리 신청해야 합니다"
     ],
     [
      "홍콩 체류 7일 초과",
      "불가",
      "위와 동일, 사전에 신청해야 합니다"
     ],
     [
      "본토에서 단순히 홍콩 왕복",
      "불가",
      "반드시 港澳通行證(홍콩·마카오 통행증)을 사용해야 합니다"
     ]
    ]
   },
   "49f1ab": {
    "text": "잘못된 증명 서류로 본토에서 홍콩에 들어가면 세관이 여권에 DT(Delete Travel) 기록을 남기며, 이후 홍콩 입국과 다른 국가의 비자 신청에 영향을 미칩니다. 이 부분은 요행을 바라지 마십시오."
   },
   "51009c": {
    "text": "「香港進入許可(홍콩 입국 허가)」는 주일 중국 대사관/영사관에서 신청할 수 있으며, 1회 최대 체류 14일, 3개월 1회, 3개월 2회, 1년 다회, 2년 다회의 종류가 있습니다. 후쿠오카의 영사관은 지하철 토진마치(唐人町)역 근처에 있습니다."
   },
   "b3abdf": {
    "text": "환급: 홍콩에서 출발하는 모든 항공편에는 일반적으로 홍콩이 부과하는 항공 여객 출국세가 포함되어 있습니다. 조건에 해당하면 환급을 신청할 수 있으며, 기한은 출발 후 28일 이내입니다. 구체적인 조건과 절차는 본편 「国際観光旅客税(국제관광여객세)(출국세)」 항목 아래의 설명을 참조하거나, 홍콩 공식의 환급 안내를 직접 확인하십시오."
   },
   "2cbead": {
    "items": [
     {
      "text": "홍콩 항공 여객 출국세 환급(공식)",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "주일 중국 대사관 · 해외에서 홍콩으로 가는 안내",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "본편의 일부 내용은 《新伊都国風土記(신이토국풍토기)》(저자 Hato_Tsubame, CantonSimon)에서 정리한 것으로, 저자의 허가를 받아 수록되었습니다. 본문의 가격, 운행 횟수와 절차는 시간이 지나면 변할 수 있으므로, 중요한 사항은 각 공식 사이트를 기준으로 하십시오."
   }
  }
 },
 "guide-shopping": {
  "ja": {
   "01aac7": {
    "text": "日々の買い物先、節約の方法、**避けるべき罠**（フリマ、代行購入、分割契約）。必要な項目をご参照ください。"
   }
  },
  "en": {
   "01aac7": {
    "text": "Where to shop day to day, how to save, and **the traps to avoid** (marketplace apps, proxy buying, instalment contracts). Read the sections you need."
   }
  },
  "ko": {
   "01aac7": {
    "text": "일상 쇼핑 장소, 절약 방법, **피해야 할 함정**(중고 플랫폼, 대행 구매, 할부 계약). 필요한 항목을 참고하세요."
   }
  }
 },
 "guide-transport": {
  "ja": {
   "d182c2": {
    "text": "寮から大学へ、天神・博多へ、自転車の購入、免許の取得 —— **まず日常の経路を決めてから**切符の種類を選んでください。運賃・定期券・割引きっぷ・節約案を並べて比較しています。"
   },
   "695d78": {
    "text": "その他のきっぷと割引"
   },
   "00a067": {
    "text": "2 つの案の内訳"
   },
   "032cc4": {
    "text": "結論と操作のヒント"
   },
   "5803fa": {
    "text": "関連リンク"
   },
   "0e3977": {
    "text": "西鉄バスの割引"
   },
   "d2037e": {
    "text": "試験の流れと受付時間"
   }
  },
  "en": {
   "d182c2": {
    "text": "Dorm to campus, trips to Tenjin and Hakata, buying a bicycle, obtaining a licence - **settle your daily route first**, then choose the ticket option. Fares, commuter passes, discount tickets and money-saving options compared side by side."
   },
   "695d78": {
    "text": "Other tickets and discounts"
   },
   "00a067": {
    "text": "Details of the two plans"
   },
   "032cc4": {
    "text": "Conclusion and practical tips"
   },
   "5803fa": {
    "text": "Related links"
   },
   "0e3977": {
    "text": "Nishitetsu bus discounts"
   },
   "d2037e": {
    "text": "Test procedure and reception hours"
   }
  },
  "ko": {
   "d182c2": {
    "text": "기숙사에서 학교까지, 덴진·하카타 방면, 자전거 구입, 면허 취득 —— **먼저 일상 경로를 정한 뒤** 승차권 방식을 결정하세요. 운임·정기권·할인권·절약안을 나란히 비교했습니다."
   },
   "695d78": {
    "text": "기타 승차권과 할인"
   },
   "00a067": {
    "text": "두 방안의 세부"
   },
   "032cc4": {
    "text": "결론과 조작 안내"
   },
   "5803fa": {
    "text": "관련 링크"
   },
   "0e3977": {
    "text": "니시테츠 버스 할인"
   },
   "d2037e": {
    "text": "시험 절차와 접수 시간"
   }
  }
 },
 "guide-firstmonth": {
  "ja": {
   "125163": {
    "text": "出発前：日本で入手しにくい 3 点"
   },
   "762418": {
    "headers": [
     "項目",
     "期限",
     "過ぎるとどうなるか"
    ],
    "rows": [
     [
      "COE",
      "交付から 3 か月以内に入国",
      "失効し、申請しなおし"
     ],
     [
      "引っ越し（同一市区内も含む）",
      "14 日以内に新住所の区役所へ届出",
      "——"
     ],
     [
      "在留カードの更新",
      "在留期間の満了 3 か月前から可能",
      "過ぎればその時点で不法残留"
     ],
     [
      "脱退一時金",
      "出国後 2 年以内に提出",
      "期限を過ぎると申請できない"
     ]
    ]
   },
   "7dd5df": {
    "text": "着いてから最初の 1 か月でやることは十数件あり、それらには順番があります —— いくつかは別のものを先に終えないと手をつけられません。この記事はそれを 1 本の線に並べたものです。**これは索引であって、代わりではありません**：必要書類・場所・金額は各カテゴリの本文が優先します。"
   },
   "06893a": {
    "items": [
     {
      "text": "印鑑（はんこ）—— 一般的な素材のもの。シャチハタは不可"
     },
     {
      "text": "COE の原本と、メールで届いた PDF のバックアップ"
     },
     {
      "text": "着いてすぐ使える一時的なモバイル通信手段"
     }
    ]
   },
   "2c7db0": {
    "text": "銀行の口座開設には**必ず**一般的な素材の印鑑が必要で、シャチハタ（インク内蔵式）は一切受け付けられません。印鑑がないと口座が開けず、家賃・学費・奨学金はすべて銀行口座を通します。出国前に間に合わない場合、日本のドン・キホーテに自動彫刻機があり、500 円ほどから作れます。参照【入国準備】"
   },
   "4c0436": {
    "text": "COE の有効期間は **3 か月**で、その間にビザ申請と入国を終える必要があります。理工系の機微分野（AI・宇宙・原子力関連）は追加審査で期間が延びることがあります。どうしても始業に間に合わないときは、早めに教務の担当と寮の担当に連絡して延期を相談してください。参照【入国準備】"
   },
   "9da430": {
    "text": "一時的な通信手段は 1 週間ほどのつなぎです —— 着いてからの地図・連絡・手続きにはネットが要りますが、日本の SIM は住所登録が済んでからでないとスムーズに契約できません。参照【携帯・ネット】"
   },
   "7404c3": {
    "text": "到着当日：空港でできる 2 件"
   },
   "eba78f": {
    "items": [
     {
      "title": "在留カードを受け取る",
      "desc": "福岡空港は交付指定空港なので、入国審査後にその場で交付されます。この時点で住所欄は空欄で、あとで区役所に登録します。"
     },
     {
      "title": "資格外活動許可を申請する",
      "desc": "アルバイトをするつもりなら、ここで一緒に済ませます —— 入国時に空港で申請でき、逃すと入管局へもう一度行くことになります。"
     }
    ]
   },
   "6bb153": {
    "text": "資格外活動許可を得ずにアルバイトをするのは違法で、ビザに影響することがあります。学期中は週 **28 時間**まで、長期休暇中は 1 日 8 時間・週 40 時間までです。参照【アルバイト】"
   },
   "6d60e7": {
    "text": "**指定空港以外**（那覇・鹿児島・静岡などの地方空港）から入国した場合、空港は「在留カード交付予定通知」のみを発行し、在留カードは住民登録完了後 1〜2 週間で登録住址に郵送されます —— その間、在留カードが必要な手続きは一切できません。福岡入国ではこの問題はありません。"
   },
   "0dcd62": {
    "text": "入国審査から出るまで通常 20~30 分、同じ時間帯の到着便が多いともっとかかります。シャトルバスに乗る予定なら時間に余裕を見てください。大学のシャトルバスは福岡空港の国際線／国内線ターミナルから乗車、**先着順・予約不要**で、日程と時刻は学期ごとに変わるため学校からの通知が優先です。参照【入国準備】"
   },
   "ca70c6": {
    "text": "1 週目：住居登録（他の手続きの前提）"
   },
   "aea806": {
    "text": "銀行・携帯・保険・年金 —— **その後の手続きはほぼすべて、在留カードの裏面に住所が記載されていることを前提にしています**。だから最初に置いてあり、しかも 1~2 日かかります：在留カードはその場で預け、翌日に受け取ります。"
   },
   "eb553f": {
    "items": [
     {
      "title": "住所登録（住民登録）",
      "desc": "自分でさいとぴあへ行くか、大学の代行に任せます。"
     },
     {
      "title": "在留カードを受け取る",
      "desc": "裏面に住所が記載されたら、各学府の学務にもう一度届け出ます。"
     },
     {
      "title": "SIM カードを契約する"
     },
     {
      "title": "銀行口座を開く"
     },
     {
      "title": "国民健康保険 + 国民年金",
      "desc": "住民登録と同時に済ませられます。"
     }
    ]
   },
   "7a8ea2": {
    "text": "さいとぴあ（西部出張所）は JR「九大学研都市」駅から徒歩約 1 分、受付は **平日 8:45~17:15**、土日祝は休みです。市民係と保険年金係の窓口があり、通常 **1~1.5 時間で住民登録・年金・健康保険をまとめて済ませられます**。職員は英語でも対応できます。参照【在留手続き】"
   },
   "ae2598": {
    "text": "大学の代行は住民登録のみで、その間およそ 3 営業日、在留カードは大学が預かります。年金と健康保険は結局自分で行くことになります。どちらの方法でも構いません —— 代行を選んだあとで残りを自分で足しにいっても問題ありません。参照【在留手続き】"
   },
   "563ad8": {
    "text": "銀行のオリエンテーションは**独立したイベント**で、入学オリエンテーションとは別に予約します。来日前に申し込めているか確認してください。逃した場合は自分で窓口へ行くことになり、時間がかかります。なお日本の銀行の窓口業務は通常 **10:00~15:00** で、15:00 以降は ATM 以外何もできません。参照【銀行・送金】"
   },
   "41022a": {
    "text": "手続きの依存関係"
   },
   "5adfc3": {
    "headers": [
     "やること",
     "先に必要なもの",
     "場所"
    ],
    "rows": [
     [
      "住所登録",
      "在留カード",
      "さいとぴあ / 区役所"
     ],
     [
      "SIM カード",
      "住所が記載された在留カード",
      "オンラインまたは店舗"
     ],
     [
      "銀行口座開設",
      "在留カード（裏面に住所）・パスポート・印鑑・学生証",
      "銀行窓口 / 大学のオリエンテーション"
     ],
     [
      "国民健康保険",
      "住民登録",
      "区役所（住所登録と同時に可）"
     ],
     [
      "学生納付特例",
      "学生証",
      "区役所の年金窓口"
     ],
     [
      "マイナンバーカード",
      "住民登録",
      "区役所"
     ],
     [
      "海外から送金を受ける",
      "マイナンバー",
      "銀行"
     ],
     [
      "アルバイト",
      "資格外活動許可",
      "空港 または 入管局"
     ]
    ]
   },
   "96276e": {
    "text": "口座開設時にまだ本人の電話番号がない場合、電話番号欄にはサポーターやサポートセンターの番号を書いておき、番号を取得してから変更に行けば大丈夫です。開設時には初回入金用の現金も少し持っていきます。参照【銀行・送金】"
   },
   "dcdc27": {
    "text": "1 か月目：漏れやすい 3 項目"
   },
   "0aad31": {
    "items": [
     {
      "text": "学生証を受け取ったら区役所へ戻り、年金を「所得が基準以下による免除」から「学生納付特例」に切り替える"
     },
     {
      "text": "マイナンバーカードを申請する（銀行・送金・保険であとから必要になります）"
     },
     {
      "text": "4 月／10 月の定期健康診断を受ける（通常はビッグさんど 2 階）"
     }
    ]
   },
   "1b0c01": {
    "text": "年金のこの一手は**毎年必ず忘れる人がいます**。流れは：住民登録 → まず区役所で「所得が基準以下による免除」→ 学生証を受け取る → **もう一度区役所へ行って**学生納付特例に切り替える。切り替えを忘れると、あとで年金の請求書が届きます。学生証は当日交付ではなく、発行にかかる日数は学府によって違います。参照【在留手続き】"
   },
   "ae843e": {
    "text": "ESP（留学生緊急支援サービス）は九大の留学生が加入するもので、年会費はおよそ 1,650 円。受診時の三者間電話通訳、医療機関の紹介、緊急時の家族への連絡などが受けられます。これは**保険ではなく**、国民健康保険とは別のもので、両方とも必要です。参照【医療・保険】"
   },
   "bca906": {
    "text": "カレンダーに入れておく期限"
   },
   "b9105b": {
    "text": "在留期間を過ぎて更新していない状態は「不法残留」で、結果は段階的です。刑事上は **3 年以下の懲役または 300 万円以下の罰金**。あわせて上陸拒否期間がつき、自ら出頭して出国した場合は 1 年、強制退去になった場合は 5 年、繰り返した場合は 10 年です。参照【在留手続き】"
   },
   "973bb1": {
    "text": "落ち着いてからの予定"
   },
   "16e6d0": {
    "text": "寮にはベッド・机と椅子・本棚・冷蔵庫・エアコンが備え付けられています。**用意されていない**のは調理器具・電気ケトル・食器・タオル・洗面用具で、トイレットペーパーは 1 ロールのみ。布団はレンタルできますが質はいまひとつという声が多く、肌に触れる寝具（掛けカバー・枕カバー）は持参をおすすめします。寮を出たあとも使えます。参照【入国準備】"
   },
   "38bab8": {
    "text": "伊都キャンパスの日常は自転車が中心です：JR 九大学研都市駅から大学まで徒歩でおよそ 45~50 分、自転車なら 20~30 分。自転車を買ったら**防犯登録（600 円）**をして、登録カードは保管しておいてください —— 廃棄・譲渡のときに必要です。参照【交通】"
   },
   "3897a8": {
    "text": "福岡市のゴミは 3 種類に分かれ、定期収集です。**指定袋を使う必要があります**（コンビニやスーパーで購入でき、種類ごとに袋の印字が違います）。燃えるゴミは週 2 回、そのほかは月 1 回。夜間収集が中心で、通常は収集日の前日の日没後から 24 時までの間に出します。市の公式サイトには品目名で分別を調べられる検索システムがあります。参照【生活のコツ】"
   },
   "36cd13": {
    "text": "大学アカウントの落とし穴が 2 つ：SSO-KID の有効化には**大学のメールアドレス以外は使えません**。学内 Wi-Fi のアカウントは SSOKID@Kitnet で、パスワードは SSO-KID を有効化したときに設定したものです。参照【在留手続き】"
   },
   "082061": {
    "text": "緊急時の連絡先"
   },
   "b01952": {
    "items": [
     {
      "num": "1",
      "text": "犯罪・事故で警察が必要なとき —— 110"
     },
     {
      "num": "2",
      "text": "火災、または救急車が必要なとき —— 119"
     },
     {
      "num": "3",
      "text": "急な体調不良で、救急車を呼ぶべきか判断できないとき —— #7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时）（短縮番号がつながらなければ 092-471-0099）"
     },
     {
      "num": "4",
      "text": "受診時に言葉が通じないとき —— 092-286-9595（24 時間 365 日、約 19 言語、通話通訳は無料）"
     },
     {
      "num": "5",
      "text": "領事の支援が必要なとき —— ご自身の国の在外公館へ。福岡に総領事館があるのは 韓国 092-771-0461、中国 092-713-1121、アメリカ 092-751-9331、ベトナム 092-263-7668、タイ 092-739-9088 です"
     },
     {
      "num": "6",
      "text": "生活で困ったとき・母語で相談したいとき —— 0120-66-1799（福岡市外国人総合相談支援センター、平日 8:45~18:00、多言語対応）"
     }
    ]
   },
   "9b980b": {
    "text": "番号の一覧と在外公館の情報は参照【緊急連絡先】"
   },
   "644b54": {
    "text": "あわせてお読みください"
   },
   "918ebe": {
    "text": "着いたばかりの数か月は狙われやすい時期です —— 格安の両替、大使館や警察を名乗る電話、「まず送金を」という様々な名目。参照【詐欺防止ガイド（新入生必読）】"
   }
  },
  "en": {
   "125163": {
    "text": "Before departure: three items hard to obtain in Japan"
   },
   "762418": {
    "headers": [
     "Item",
     "Deadline",
     "What happens if you miss it"
    ],
    "rows": [
     [
      "COE",
      "Enter Japan within 3 months of issue",
      "It expires and must be applied for again"
     ],
     [
      "Moving (including within the same city)",
      "Report to the ward office of your new address within 14 days",
      "——"
     ],
     [
      "Residence card renewal",
      "From 3 months before your period of stay expires",
      "Past the date you are illegally overstaying"
     ],
     [
      "Lump-sum withdrawal payment",
      "Submit within 2 years of leaving Japan",
      "After that you cannot claim it"
     ]
    ]
   },
   "7dd5df": {
    "text": "There are more than a dozen things to do in your first month, and they come in an order — several cannot be started until something else is done. This article puts them on one line. **It is an index, not a replacement**: for documents, addresses and amounts, the category articles take precedence."
   },
   "06893a": {
    "items": [
     {
      "text": "A seal (hanko) — ordinary material; self-inking シャチハタ is not accepted"
     },
     {
      "text": "Your original COE, plus a backup of the PDF you received by email"
     },
     {
      "text": "A temporary data SIM or pocket Wi-Fi you can use the moment you land"
     }
    ]
   },
   "2c7db0": {
    "text": "Opening a bank account **requires** a seal of ordinary material; self-inking シャチハタ seals are never accepted. Without one you cannot open an account, and rent, tuition and scholarships all go through a bank account. If you cannot have one made before you leave, Don Quijote stores in Japan have self-service engraving machines from about ¥500. See【Arrival & Entry】"
   },
   "4c0436": {
    "text": "A COE is valid for **3 months**, and the visa application and your entry must both be completed within that window. Sensitive science and engineering fields (AI, space, nuclear) may face extra screening and longer processing. If you truly cannot make the start of term, contact your academic affairs office and the dormitory early to arrange a delay. See【Arrival & Entry】"
   },
   "9da430": {
    "text": "The temporary connection is only a bridge for about a week — you need the internet for maps, contacting people and paperwork the moment you arrive, but a Japanese SIM is hard to sign up for until your address is registered. See【Mobile & Internet】"
   },
   "7404c3": {
    "text": "Arrival day: two things to do at the airport"
   },
   "eba78f": {
    "items": [
     {
      "title": "Receive your residence card",
      "desc": "Fukuoka Airport is a designated issuing airport, so the card is handed to you on the spot after immigration. The address field is blank at this point; you register it later at the ward office."
     },
     {
      "title": "Apply for permission to work",
      "desc": "If you plan to work part-time, do it here — you can apply at the airport on entry, and missing it means a separate trip to the immigration bureau."
     }
    ]
   },
   "6bb153": {
    "text": "Working without permission to engage in activity outside your status is illegal and can affect your visa. During term the limit is **28 hours** a week; during long vacations it is 8 hours a day and 40 hours a week. See【Part-time Work】"
   },
   "6d60e7": {
    "text": "If you enter through a **non-designated airport** (Naha, Kagoshima, Shizuoka and other regional airports), the airport issues only a notice of scheduled residence card delivery; the card is mailed to your registered address 1-2 weeks after residence registration is complete - during that period no procedure requiring the card can be completed. Entering via Fukuoka avoids this."
   },
   "0dcd62": {
    "text": "Clearing immigration usually takes 20–30 minutes, longer when many flights land at once, so leave margin if you are catching the shuttle. The university shuttle departs from the international and domestic terminals at Fukuoka Airport, **first come first served, no reservation**; dates and times change every term, so the school’s own notice takes precedence. See【Arrival & Entry】"
   },
   "ca70c6": {
    "text": "Week one: address registration (prerequisite for other procedures)"
   },
   "aea806": {
    "text": "Bank, phone, insurance, pension — **almost every later procedure assumes your address is already printed on the back of your residence card**. That is why it comes first, and why it takes a day or two: you hand the card in and collect it the next day."
   },
   "eb553f": {
    "items": [
     {
      "title": "Register your address (住民登録)",
      "desc": "Go to さいとぴあ yourself, or let the university handle it for you."
     },
     {
      "title": "Collect your residence card",
      "desc": "Once the address is printed on the back, report it again to your own graduate school office."
     },
     {
      "title": "Get a SIM card"
     },
     {
      "title": "Open a bank account"
     },
     {
      "title": "National Health Insurance + National Pension",
      "desc": "These can be done at the same visit as your address registration."
     }
    ]
   },
   "7a8ea2": {
    "text": "さいとぴあ (the western branch office) is about a minute on foot from JR Kyudai-gakkentoshi Station, open **weekdays 8:45–17:15** and closed on weekends and holidays. It has both a residents desk and an insurance-and-pension desk, and you can usually **finish resident registration, pension and health insurance together in 1–1.5 hours**. Staff can help in English. See【Residence Procedures】"
   },
   "ae2598": {
    "text": "The university only handles the resident registration itself, holding your residence card for about three working days; pension and health insurance you still do yourself. Either route is fine — choosing the university route and then doing the rest yourself afterwards is perfectly normal. See【Residence Procedures】"
   },
   "563ad8": {
    "text": "The bank orientation is a **separate event**, booked separately from the enrolment orientation — check before you come that you actually have a place. If you miss it you generally have to go to a branch yourself, which takes longer. Note that Japanese bank counters normally operate **10:00–15:00**; after 15:00 nothing but the ATM is available. See【Banking & Remittance】"
   },
   "41022a": {
    "text": "Procedure dependencies"
   },
   "5adfc3": {
    "headers": [
     "What you want to do",
     "What must exist first",
     "Where"
    ],
    "rows": [
     [
      "Register your address",
      "Residence card",
      "さいとぴあ / ward office"
     ],
     [
      "Get a SIM card",
      "Residence card with address registered",
      "Online or in store"
     ],
     [
      "Open a bank account",
      "Residence card (address on back), passport, seal, student ID",
      "Bank counter / university orientation"
     ],
     [
      "National Health Insurance",
      "Resident registration",
      "Ward office (can be same visit)"
     ],
     [
      "Student pension exception",
      "Student ID",
      "Pension desk at the ward office"
     ],
     [
      "My Number card",
      "Resident registration",
      "Ward office"
     ],
     [
      "Receive money from abroad",
      "My Number",
      "Bank"
     ],
     [
      "Work part-time",
      "Permission to work",
      "Airport or immigration bureau"
     ]
    ]
   },
   "96276e": {
    "text": "If you do not have your own phone number yet when you open the account, you can put your supporter’s or the support centre’s number in the phone field and change it once you have your own. Bring a little cash as well, for the initial deposit. See【Banking & Remittance】"
   },
   "dcdc27": {
    "text": "First month: the three most-missed items"
   },
   "0aad31": {
    "items": [
     {
      "text": "Once you have your student ID, go back to the ward office and switch your pension from the low-income exemption to the student payment exception"
     },
     {
      "text": "Apply for a My Number card (banking, remittance and insurance all need it later)"
     },
     {
      "text": "Take the April / October health check (usually on the 2nd floor of Big Sando)"
     }
    ]
   },
   "1b0c01": {
    "text": "This pension step is **the one people forget every single year**. The full sequence is: resident registration → apply at the ward office for the low-income exemption → receive your student ID → **go back to the ward office** and switch to the student payment exception. Forget the switch and pension bills start arriving. Note that student IDs are not issued the same day, and how long they take differs by graduate school. See【Residence Procedures】"
   },
   "ae843e": {
    "text": "ESP (Emergency Support for International Students) is something Kyushu University international students join, at roughly ¥1,650 a year. It provides three-way phone interpretation when you see a doctor, referrals to medical institutions, and contact with your family in an emergency. It is **not insurance** — it is separate from National Health Insurance, and you need both. See【Medical & Insurance】"
   },
   "bca906": {
    "text": "Deadlines worth putting in your calendar"
   },
   "b9105b": {
    "text": "Letting your period of stay lapse without renewing is “illegal overstay”, and the consequences are tiered. Criminally it can mean **up to 3 years’ imprisonment or a fine of up to ¥3,000,000**. It also carries a bar on re-entry: one year if you come forward and leave voluntarily, five years if you are deported, and ten years for a repeat offence. See【Residence Procedures】"
   },
   "973bb1": {
    "text": "After you have settled in"
   },
   "16e6d0": {
    "text": "The dormitory comes with a bed, desk and chair, bookshelf, fridge and air conditioning. What is **not provided**: cookware, kettle, tableware, towels and toiletries, and only one roll of toilet paper. Bedding can be rented but people generally find the quality mediocre, so bringing your own covers (duvet cover, pillowcase) is worth it — and they still work after you move out. See【Arrival & Entry】"
   },
   "38bab8": {
    "text": "Day-to-day life on the Ito campus runs on bicycles: about 45–50 minutes on foot from JR Kyudai-gakkentoshi Station to the university, 20–30 minutes by bike. When you buy one, register it against theft (**bicycle crime-prevention registration, ¥600**) and keep the registration card — you need it when you dispose of or transfer the bike. See【Transport】"
   },
   "3897a8": {
    "text": "Fukuoka City sorts household waste into three types on a fixed collection schedule, and **you must use the designated bags** (sold at convenience stores and supermarkets, with different printing for each type). Burnable waste is collected twice a week, the rest once a month. Collection is mostly at night: put your bags out between sunset the day before and midnight. The city website has a search where you enter an item name to find its category. See【Life Tips】"
   },
   "36cd13": {
    "text": "Two traps with the university account: activating your SSO-KID **cannot be done with any address other than your university email**. The campus Wi-Fi username is SSOKID@Kitnet, and the password is the one you set when you activated the SSO-KID. See【Residence Procedures】"
   },
   "082061": {
    "text": "Emergency contacts"
   },
   "b01952": {
    "items": [
     {
      "num": "1",
      "text": "A crime or an accident, you need the police — 110"
     },
     {
      "num": "2",
      "text": "A fire, or you need an ambulance — 119"
     },
     {
      "num": "3",
      "text": "Sudden illness and you are not sure whether to call an ambulance — #7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时） (if the short number does not connect, dial 092-471-0099)"
     },
     {
      "num": "4",
      "text": "You cannot make yourself understood at the doctor — 092-286-9595 (24/7, about 19 languages, phone interpreting is free)"
     },
     {
      "num": "5",
      "text": "You need consular help — contact your own country’s mission. Those with a consulate-general in Fukuoka: Korea 092-771-0461, China 092-713-1121, the United States 092-751-9331, Vietnam 092-263-7668, Thailand 092-739-9088"
     },
     {
      "num": "6",
      "text": "Everyday trouble, or you want to ask in your own language — 0120-66-1799 (Fukuoka City International Support Center, weekdays 8:45–18:00, multilingual)"
     }
    ]
   },
   "9b980b": {
    "text": "For the full list of numbers and consulate information, See【Emergency Contacts】"
   },
   "644b54": {
    "text": "Related reading"
   },
   "918ebe": {
    "text": "The first few months after you arrive are when people are most likely to be targeted — cheap currency exchange, calls claiming to be from an embassy or the police, and any number of “transfer the money first” stories. See【Anti-Fraud Guide (Must-Read)】"
   }
  },
  "ko": {
   "125163": {
    "text": "출국 전: 일본에서 구하기 어려운 3가지"
   },
   "762418": {
    "headers": [
     "항목",
     "기한",
     "넘기면 어떻게 되는가"
    ],
    "rows": [
     [
      "COE",
      "교부 후 3개월 이내 입국",
      "실효되어 다시 신청해야 함"
     ],
     [
      "이사(같은 시구 내 포함)",
      "14일 이내에 새 주소 구청에 신고",
      "——"
     ],
     [
      "재류카드 갱신",
      "체류 기간 만료 3개월 전부터 가능",
      "넘기면 그 시점부터 불법 잔류"
     ],
     [
      "탈퇴일시금",
      "출국 후 2년 이내 제출",
      "기한이 지나면 신청 불가"
     ]
    ]
   },
   "7dd5df": {
    "text": "도착 후 첫 한 달에 해야 할 일은 십수 가지이고, 그 사이에는 순서가 있습니다 —— 몇 가지는 다른 것을 먼저 끝내야 손을 댈 수 있습니다. 이 글은 그것을 한 줄로 늘어놓은 것입니다. **이것은 색인이지 대체물이 아닙니다**: 필요 서류·장소·금액은 각 분류 본문이 우선입니다."
   },
   "06893a": {
    "items": [
     {
      "text": "도장(はんこ) —— 일반 재질의 것. 샤치하타는 불가"
     },
     {
      "text": "COE 원본과, 메일로 받은 PDF 백업"
     },
     {
      "text": "도착 즉시 쓸 수 있는 임시 모바일 통신 수단"
     }
    ]
   },
   "2c7db0": {
    "text": "은행 계좌 개설에는 **반드시** 일반 재질의 도장이 필요하며, 샤치하타(잉크 내장식)는 일절 받지 않습니다. 도장이 없으면 계좌를 열 수 없고, 월세·학비·장학금은 모두 은행 계좌를 거칩니다. 출국 전에 만들지 못했다면 일본의 돈키호테에 자동 조각기가 있어 약 500엔부터 만들 수 있습니다. 참조【입국 준비】"
   },
   "4c0436": {
    "text": "COE의 유효기간은 **3개월**이며, 그 안에 비자 신청과 입국을 마쳐야 합니다. 이공계 민감 분야(AI·우주·원자력 관련)는 추가 심사로 기간이 길어질 수 있습니다. 도저히 개강에 맞출 수 없을 때는 일찍 교무 담당과 기숙사 쪽에 연락해 연기를 상의하세요. 참조【입국 준비】"
   },
   "9da430": {
    "text": "임시 통신 수단은 일주일 정도의 징검다리입니다 —— 도착 후 지도·연락·수속에 인터넷이 필요하지만, 일본 SIM은 주소 등록이 끝나야 순조롭게 계약할 수 있습니다. 참조【휴대폰·인터넷】"
   },
   "7404c3": {
    "text": "도착 당일: 공항에서 처리할 2가지"
   },
   "eba78f": {
    "items": [
     {
      "title": "재류카드 수령",
      "desc": "후쿠오카 공항은 교부 지정 공항이라 입국 심사 후 그 자리에서 교부됩니다. 이 시점에는 주소란이 비어 있고, 나중에 구청에서 등록합니다."
     },
     {
      "title": "자격외활동허가 신청",
      "desc": "아르바이트를 할 생각이라면 여기서 함께 처리하세요 —— 입국 시 공항에서 신청할 수 있고, 놓치면 입국관리국에 한 번 더 가야 합니다."
     }
    ]
   },
   "6bb153": {
    "text": "자격외활동허가 없이 아르바이트를 하는 것은 위법이며 비자에 영향을 줄 수 있습니다. 학기 중에는 주 **28시간**까지, 장기 방학 중에는 하루 8시간·주 40시간까지입니다. 참조【아르바이트】"
   },
   "6d60e7": {
    "text": "**지정 공항 외**(나하·가고시마·시즈오카 등 지방 공항)로 입국하면 공항은 「재류카드 교부 예정 통지」만 발급하며, 재류카드는 주민등록 완료 후 1~2주 뒤 등록 주소로 우송됩니다 —— 그동안 재류카드가 필요한 수속은 일절 할 수 없습니다. 후쿠오카 입국은 이 문제가 없습니다."
   },
   "0dcd62": {
    "text": "입국 심사를 빠져나오기까지 보통 20~30분, 같은 시간대 도착 편이 많으면 더 걸립니다. 셔틀버스를 탈 예정이라면 시간을 넉넉히 잡으세요. 대학 셔틀버스는 후쿠오카 공항 국제선／국내선 터미널에서 승차하며 **선착순·예약 불필요**이고, 날짜와 시각은 학기마다 바뀌므로 학교 공지가 우선입니다. 참조【입국 준비】"
   },
   "ca70c6": {
    "text": "1주차: 주소 등록(다른 수속의 전제)"
   },
   "aea806": {
    "text": "은행·휴대폰·보험·연금 —— **이후 수속은 거의 전부 재류카드 뒷면에 주소가 기재되어 있는 것을 전제로 합니다**. 그래서 맨 앞에 있고, 하루에서 이틀이 걸립니다: 재류카드를 그 자리에서 맡기고 다음 날 찾아옵니다."
   },
   "eb553f": {
    "items": [
     {
      "title": "주소 등록(주민등록)",
      "desc": "직접 사이토피아에 가거나, 대학의 대행에 맡깁니다."
     },
     {
      "title": "재류카드 수령",
      "desc": "뒷면에 주소가 기재되면 각 학부 학무과에 한 번 더 신고합니다."
     },
     {
      "title": "SIM 카드 계약"
     },
     {
      "title": "은행 계좌 개설"
     },
     {
      "title": "국민건강보험 + 국민연금",
      "desc": "주민등록과 동시에 처리할 수 있습니다."
     }
    ]
   },
   "7a8ea2": {
    "text": "사이토피아(서부출장소)는 JR 「규슈대 학연도시」역에서 도보 약 1분, 접수는 **평일 8:45~17:15**이며 주말·공휴일은 휴무입니다. 시민계와 보험연금계 창구가 있어 보통 **1~1.5시간이면 주민등록·연금·건강보험을 한 번에 끝낼 수 있습니다**. 직원은 영어로도 대응할 수 있습니다. 참조【체류 수속】"
   },
   "ae2598": {
    "text": "대학 대행은 주민등록만 해 주며, 그동안 약 3영업일간 재류카드를 대학이 보관합니다. 연금과 건강보험은 결국 직접 가야 합니다. 어느 쪽이든 괜찮습니다 —— 대행을 택한 뒤에 나머지를 직접 하러 가도 문제없습니다. 참조【체류 수속】"
   },
   "563ad8": {
    "text": "은행 오리엔테이션은 **별개의 행사**로, 입학 오리엔테이션과 따로 예약합니다. 일본에 오기 전에 신청이 되어 있는지 확인하세요. 놓치면 보통 직접 창구에 가야 하고 시간이 더 걸립니다. 또한 일본 은행 창구 업무는 보통 **10:00~15:00**이며, 15:00 이후에는 ATM 외에는 아무것도 할 수 없습니다. 참조【은행·송금】"
   },
   "41022a": {
    "text": "수속 의존 관계"
   },
   "5adfc3": {
    "headers": [
     "할 일",
     "먼저 있어야 하는 것",
     "장소"
    ],
    "rows": [
     [
      "주소 등록",
      "재류카드",
      "사이토피아 / 구청"
     ],
     [
      "SIM 카드",
      "주소가 등록된 재류카드",
      "온라인 또는 매장"
     ],
     [
      "은행 계좌 개설",
      "재류카드(뒷면에 주소)·여권·도장·학생증",
      "은행 창구 / 대학 오리엔테이션"
     ],
     [
      "국민건강보험",
      "주민등록",
      "구청(주소 등록과 동시 가능)"
     ],
     [
      "학생납부특례",
      "학생증",
      "구청 연금 창구"
     ],
     [
      "마이넘버 카드",
      "주민등록",
      "구청"
     ],
     [
      "해외에서 송금 받기",
      "마이넘버",
      "은행"
     ],
     [
      "아르바이트",
      "자격외활동허가",
      "공항 또는 입국관리국"
     ]
    ]
   },
   "96276e": {
    "text": "계좌 개설 시 아직 본인 전화번호가 없다면 전화번호란에 서포터나 서포트센터 번호를 적어 두고, 번호를 받은 뒤에 변경하러 가면 됩니다. 개설 시에는 최초 입금용 현금도 조금 가져갑니다. 참조【은행·송금】"
   },
   "dcdc27": {
    "text": "첫 달: 가장 빠뜨리기 쉬운 3가지"
   },
   "0aad31": {
    "items": [
     {
      "text": "학생증을 받으면 구청으로 돌아가 연금을 「소득 기준 이하 면제」에서 「학생납부특례」로 전환"
     },
     {
      "text": "마이넘버 카드 신청(은행·송금·보험에서 나중에 필요합니다)"
     },
     {
      "text": "4월／10월 정기 건강진단 받기(보통 빅산도 2층)"
     }
    ]
   },
   "1b0c01": {
    "text": "연금의 이 단계는 **매년 반드시 잊는 사람이 나옵니다**. 흐름은: 주민등록 → 먼저 구청에서 「소득 기준 이하 면제」 → 학생증 수령 → **구청에 한 번 더 가서** 학생납부특례로 전환. 전환을 잊으면 나중에 연금 고지서가 옵니다. 학생증은 당일 교부가 아니며, 발급 기간은 학부마다 다릅니다. 참조【체류 수속】"
   },
   "ae843e": {
    "text": "ESP(유학생 긴급지원 서비스)는 규슈대 유학생이 가입하는 것으로, 연회비는 약 1,650엔입니다. 진료 시 삼자 통화 통역, 의료기관 소개, 긴급 시 가족 연락 등을 받을 수 있습니다. 이것은 **보험이 아니며**, 국민건강보험과는 별개로 둘 다 필요합니다. 참조【의료·보험】"
   },
   "bca906": {
    "text": "달력에 넣어 둘 기한"
   },
   "b9105b": {
    "text": "체류 기간이 지나도록 갱신하지 않은 상태는 「불법 잔류」이며, 결과는 단계적입니다. 형사상으로는 **3년 이하의 징역 또는 300만엔 이하의 벌금**. 여기에 상륙 거부 기간이 따라붙어, 자진 출두해 출국하면 1년, 강제 퇴거되면 5년, 반복하면 10년입니다. 참조【체류 수속】"
   },
   "973bb1": {
    "text": "안정된 이후의 일정"
   },
   "16e6d0": {
    "text": "기숙사에는 침대·책상과 의자·책장·냉장고·에어컨이 갖춰져 있습니다. **제공되지 않는** 것은 조리 기구·전기 주전자·식기·수건·세면도구이며, 화장지는 1롤만 있습니다. 이불은 대여할 수 있지만 품질이 그저 그렇다는 반응이 많아, 피부에 닿는 침구(이불 커버·베개 커버)는 가져오길 권합니다. 기숙사를 나온 뒤에도 계속 쓸 수 있습니다. 참조【입국 준비】"
   },
   "38bab8": {
    "text": "이토 캠퍼스의 일상은 자전거가 중심입니다: JR 규슈대 학연도시역에서 대학까지 도보로 약 45~50분, 자전거로는 20~30분. 자전거를 사면 **방범 등록(600엔)**을 하고 등록 카드는 보관해 두세요 —— 폐기·양도할 때 필요합니다. 참조【교통】"
   },
   "3897a8": {
    "text": "후쿠오카시의 쓰레기는 세 종류로 나뉘어 정기 수거됩니다. **지정 봉투를 사용해야 합니다**(편의점과 슈퍼에서 판매하며 종류별로 봉투의 인쇄가 다릅니다). 타는 쓰레기는 주 2회, 나머지는 월 1회. 야간 수거가 중심이라, 보통 수거일 전날 해가 진 뒤부터 24시 사이에 내놓습니다. 시 공식 사이트에는 품목명을 입력해 분류를 찾는 검색 시스템이 있습니다. 참조【생활의 요령】"
   },
   "36cd13": {
    "text": "대학 계정의 함정이 두 가지: SSO-KID 활성화에는 **대학 메일 이외의 주소는 쓸 수 없습니다**. 교내 Wi-Fi 계정은 SSOKID@Kitnet이고, 비밀번호는 SSO-KID를 활성화할 때 설정한 그것입니다. 참조【체류 수속】"
   },
   "082061": {
    "text": "긴급 연락처"
   },
   "b01952": {
    "items": [
     {
      "num": "1",
      "text": "범죄·사고로 경찰이 필요할 때 —— 110"
     },
     {
      "num": "2",
      "text": "화재, 또는 구급차가 필요할 때 —— 119"
     },
     {
      "num": "3",
      "text": "갑작스러운 몸 상태 악화로 구급차를 불러야 할지 판단이 서지 않을 때 —— #7119 —— 突发急病、不确定是否需叫救护车时的救急相谈（福冈县 24 小时）(단축번호가 안 되면 092-471-0099)"
     },
     {
      "num": "4",
      "text": "진료 시 말이 통하지 않을 때 —— 092-286-9595(24시간 365일, 약 19개 언어, 통화 통역 무료)"
     },
     {
      "num": "5",
      "text": "영사 조력이 필요할 때 —— 주후쿠오카 대한민국 총영사관 092-771-0461(야간·휴일 긴급 080-8588-2806)"
     },
     {
      "num": "6",
      "text": "생활에서 곤란할 때·모국어로 상담하고 싶을 때 —— 0120-66-1799(후쿠오카시 외국인 종합상담지원센터, 평일 8:45~18:00, 다국어 대응)"
     }
    ]
   },
   "9b980b": {
    "text": "번호 전체 목록과 재외공관 정보는 참조【긴급 연락처】"
   },
   "644b54": {
    "text": "함께 읽을 자료"
   },
   "918ebe": {
    "text": "막 도착한 첫 몇 달은 표적이 되기 쉬운 시기입니다 —— 싼 환전, 대사관이나 경찰을 사칭하는 전화, 「먼저 송금부터」라는 온갖 명목. 참조【사기 방지 가이드(필독)】"
   }
  }
 },
 "guide-newcomer": {
  "ja": {
   "83b134": {
    "text": "2026年秋入学者向けの支援情報をすべてまとめています：空港送迎、寮への入居、Wi-Fi、行政手続、オリエンテーション、銀行口座開設会、ESP。**まず日程一覧をご確認ください**、その後必要に応じてご覧ください。"
   },
   "9c1a2e": {
    "text": "本記事は、九州大学国際部留学課が**2026年秋季の新入留学生**向けに提供する公式支援情報をまとめたものです。原文の出典：留学課 NotePM ポータル「新入留学生サポートポータル（伊都キャンパス）」、公開日 2026-08-20。各行事の対象・日程は公式に限定されていますので、必ず本記事の記載に沿ってご確認ください。"
   },
   "1b2c3d": {
    "text": "日程一覧"
   },
   "a4b5c6": {
    "headers": [
     "日付",
     "行事",
     "対象",
     "備考"
    ],
    "rows": [
     [
      "9月24日・25日",
      "無料空港シャトルバス",
      "すべての新入留学生",
      "先着順、予約不要"
     ],
     [
      "9月24日・25日・29日・30日・10月1日",
      "無料生活支援バス",
      "新入留学生および支援者",
      "先着順、予約不要"
     ],
     [
      "9月24日～10月上旬",
      "行政手続・銀行ガイダンス",
      "学生寮に入居する海外からの新入生",
      "⚠️ 事前申込必須"
     ],
     [
      "9月28日",
      "オリエン＋並行4項目",
      "すべての新入留学生（他キャンパス含む）",
      "⚠️ 新入留学生は参加必須"
     ],
     [
      "9月29日・30日",
      "新入留学生キャンパスツアー",
      "すべての新入留学生",
      "申込制、各回20名"
     ],
     [
      "10月6日・7日・8日",
      "福岡銀行口座開設会",
      "住所登録を完了した新入生",
      "⚠️ 事前申込必須"
     ]
    ]
   },
   "2d3e4f": {
    "text": "各学生寮の入寮可能時間は、募集要項（留学生用宿舎申請）の6ページ以降を基準とします。"
   },
   "3e4f5a": {
    "text": "① 無料空港シャトルバス（福岡空港 → 伊都各寮）"
   },
   "4f5a6b": {
    "text": "2026年9月24日・25日の2日間、留学課は福岡空港から無料シャトルバスを運行します（九大学研都市駅 / ドミトリー1-3 / 伊都協奏館 / セトルインターナショナルまで直行）。**原則として新入留学生本人のみ**乗車できます。先着順・予約不要ですが、満員の場合は乗車できないことがあります。集合場所には**少なくとも15分前**にお越しください。"
   },
   "5a6b7c": {
    "headers": [
     "出発（福岡空港）",
     "第1便",
     "第2便",
     "第3便",
     "第4便"
    ],
    "rows": [
     [
      "国際線ターミナル",
      "9:00",
      "11:30",
      "15:00",
      "18:00"
     ],
     [
      "国内線ターミナル",
      "9:25",
      "11:55",
      "15:25",
      "18:25"
     ]
    ]
   },
   "6b7c8d": {
    "headers": [
     "到着",
     "第1便",
     "第2便",
     "第3便",
     "第4便"
    ],
    "rows": [
     [
      "九大学研都市駅",
      "9:55",
      "12:35",
      "16:05",
      "19:05"
     ],
     [
      "セトルインターナショナル",
      "10:25",
      "12:55",
      "16:25",
      "（停車しません）"
     ],
     [
      "ドミトリー1～3",
      "10:45",
      "13:15",
      "16:45",
      "19:30"
     ],
     [
      "伊都協奏館",
      "11:00",
      "13:30",
      "17:00",
      "19:50"
     ]
    ]
   },
   "7c8d9e": {
    "items": [
     {
      "text": "毎日、第4便はセトルインターナショナルに停車しません。"
     },
     {
      "text": "集合：福岡空港 国際線 / 国内線ターミナル"
     },
     {
      "text": "出発1時間前から、「Kyushu University」のボードを持った係員が到着口で案内します"
     },
     {
      "text": "出発・到着時刻は交通状況により前後することがあります。"
     },
     {
      "text": "病院・筑紫・大橋キャンパスの新入留学生は本バスを**利用できません**。"
     }
    ]
   },
   "8d9e0f": {
    "text": "② 無料生活支援バス（寮 ⇄ 九大学研都市駅）"
   },
   "9e0f1a": {
    "text": "運行区間：伊都協奏館 / ドミトリー1-3 / セトルインターナショナル ⇄ 九大学研都市駅（学研都市周辺には AEON Mall、さいとぴあ などの買い物・公共施設があります）。運行日：9月24日・25日・29日・30日、10月1日。新入留学生とその支援者が乗車でき、先着順です。下表は次便の到着時刻を表示します。"
   },
   "0f1a2b": {
    "text": "バスの座席には限りがあり、先着順です。ドミトリー2・3 の入居者はドミトリー1 から乗車してください。運行時刻・停車位置は公式ポスターの PDF を基準とします。"
   },
   "w1a2b3": {
    "text": "③ キャンパス Wi-Fi（キャンパスWi-Fi / kitenet）"
   },
   "w2b3c4": {
    "text": "来日後にネット環境が整っていない新入留学生に対し、留学課は**臨時の Wi-Fi ログイン ID・パスワード**を提供します（9月下旬に入国支援システムに登録したメールアドレスへ送付）。九州大学キャンパス内には複数の無線アクセスポイントがあります。"
   },
   "w3c4d5": {
    "text": "臨時ログイン情報の有効期間：**2026年9月24日(木)～10月9日(金)**。10月9日以降は利用できませんので、ご自身の **SSO-KID** で kitenet（九大生用キャンパス Wi-Fi）を設定してください。"
   },
   "w4d5e6": {
    "items": [
     {
      "title": "ご自身の SSO-KID の確認",
      "desc": "正規生は**学生証の裏面**に記載されています。学生証をお持ちでない方は、所属学部・学府の学生係にお問い合わせください（登録コードも併せてご確認ください）。"
     },
     {
      "title": "必要書類の準備",
      "desc": "登録コード ＋ @s.kyushu-u.ac.jp 以外のメールアドレス。"
     },
     {
      "title": "SSO-KID の有効化",
      "desc": "公式サイトで有効化します：https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "title": "kitenet の初期設定の完了",
      "desc": "公式サイトで iOS / Android / その他OS の設定ガイドが提供されています。"
     }
    ]
   },
   "w5e6f7": {
    "items": [
     {
      "text": "SSO-KID 有効化ページ",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "text": "キャンパス Wi-Fi 公式ページ",
      "url": "https://notepm.jp/sharing/751f751c-dbec-4cf0-a5b9-0e3a396b467d"
     }
    ]
   },
   "1a2b3c": {
    "text": "④ 行政手続・銀行ガイダンス（寮入居者は必読）"
   },
   "2b3c4d": {
    "text": "海外から入国し学生寮に入居する新入留学生を対象に、留学課が住所登録・国民健康保険などの行政手続を代行し、国民年金、マイナンバーカード、銀行口座開設（ゆうちょ / 福岡銀行 / 西日本シティ銀行）について説明します。**第1回と第2回の両方のガイダンスに参加必須です**。会場：日本ジョナサン・KS・チョイ文化館（キャンパスマップ No.79）。持ち物：パスポート・在留カード・黒のボールペン。入国支援システム（Pre-Arrival Assistance）で参加日を予約してください（宿舎入居手続の完了後にフォームが表示されます）。**リマインダーメールはありません**ので、ご自身で予約日を控え、ステータスページで確認してください。第1回ガイダンスの日付は入居当日より前にすることはできません。参加当日までに、パスポートの顔写真ページと入国許可スタンプページの写真を留学課のメールアドレスへ送付してください（顔写真ページを入国支援システムにアップロード済みの場合は、入国許可スタンプページのみで結構です）。日程が合わず参加できない場合は、Q-Mate が作成した多言語の解説動画を参考にご自身で手続を行ってください。"
   },
   "c0d1e2": {
    "headers": [
     "グループ",
     "第1回ガイダンス",
     "第2回ガイダンス"
    ],
    "rows": [
     [
      "A",
      "9/24(木) 15:00-15:30",
      "9/29(火) 13:00-14:00"
     ],
     [
      "B",
      "9/25(金) 13:00-13:30",
      "9/29(火) 13:00-14:00"
     ],
     [
      "C",
      "9/28(月) 10:00-10:30",
      "9/30(水) 13:00-14:00"
     ],
     [
      "D",
      "9/29(火) 10:00-10:30",
      "10/1(木) 13:00-14:00"
     ],
     [
      "E",
      "9/30(水) 10:00-10:30",
      "10/2(金) 13:00-14:00"
     ],
     [
      "F",
      "10/1(木) 10:00-10:30",
      "10/5(月) 12:30-13:30"
     ],
     [
      "G",
      "10/2(金) 10:00-10:30",
      "10/6(火) 12:00-13:00"
     ]
    ]
   },
   "d1e2f0": {
    "text": "協奏館から徒歩約18分、ドミトリーから徒歩約5-7分です。人数に限りがあるため、希望する日付を選べない場合があります。住所登録を留学課が代行する場合、特定在留カード（マイナンバーカードと在留カードが一体となったカード。新規入国の住所登録時は無料、**義務ではありません**）を同時に申請することはできません。"
   },
   "e2f0a3": {
    "headers": [
     "グループ",
     "第1回ガイダンス",
     "第2回ガイダンス"
    ],
    "rows": [
     [
      "A",
      "9/28(月) 11:00-11:30",
      "9/30(水) 15:00-16:00"
     ],
     [
      "B",
      "9/29(火) 11:00-11:30",
      "10/1(木) 15:00-16:00"
     ],
     [
      "C",
      "9/30(水) 11:00-11:30",
      "10/2(金) 15:00-16:00"
     ]
    ]
   },
   "f0a3b4": {
    "text": "会場は同一です（文化館 No.79）。バスで約13分（九大ビッグオレンジ前下車）、徒歩で約35分です。"
   },
   "5e6f0a": {
    "text": "⑤ 新入留学生オリエンテーション（9月28日）"
   },
   "6f0a1b": {
    "text": "9月28日(月) 12:50-15:10、伊都キャンパス椎木講堂。西警察署、福岡出入国在留管理局、福岡市消防局が登壇します。**新入留学生は参加必須**です（他のガイダンスと日程が重なる場合を除く）。事前登録が必要です：**参加申込フォーム** https://forms.cloud.microsoft/r/nCDDWic1U5"
   },
   "a3b4c5": {
    "headers": [
     "時間",
     "内容"
    ],
    "rows": [
     [
      "12:50",
      "開会挨拶"
     ],
     [
      "12:55",
      "「Q-Mate」紹介"
     ],
     [
      "13:05",
      "福岡での新生活に役立つ情報"
     ],
     [
      "13:10",
      "KUFSA（留学生会）"
     ],
     [
      "13:20",
      "学内カウンセリングサービスの紹介"
     ],
     [
      "13:25",
      "在留資格制度（入管）"
     ],
     [
      "13:35",
      "休憩15分"
     ],
     [
      "13:50",
      "安全・防犯（西警察署）"
     ],
     [
      "14:30",
      "火災・救急・防災（消防局）"
     ],
     [
      "14:55",
      "図書館からのお知らせ"
     ],
     [
      "15:00",
      "閉会挨拶"
     ]
    ]
   },
   "b4c5d6": {
    "text": "同日には他に4つの行事があります：SIMカード販売会（会場：椎木講堂 Galleria。2回のうちいずれか1回：①10:30-12:30 オリエン開始前、②15:10-17:00 終了後。公式は午前の回を推奨しており、午後は混雑する可能性があります。**事前登録必須**で、プラン・料金・登録方法は公式ポスターをご覧ください）、図書館見学（中央図書館）、入管相談会（在留資格を会場で相談できます）、ウェルカムパーティー（17:00-18:00 @ BIG SKY、新入留学生限定）。病院・筑紫・大橋キャンパスおよび福岡市国際会館・井尻からは椎木講堂までの無料送迎バスがあります（往路は約10:40-10:50発、復路は約18:20発）。先着順で、復路は往路で配布された乗車券の提示が必要です。**送迎バスの集合場所は各キャンパスの指定場所（公式PDF参照）であり、国際交流会館ではありません。**"
   },
   "5f0a6b": {
    "text": "⑥ 新入留学生キャンパスツアー（9月29・30日）"
   },
   "6a7b8c": {
    "headers": [
     "日付",
     "時間",
     "テーマエリア"
    ],
    "rows": [
     [
      "9/29(火)",
      "10:30-12:00",
      "イーストゾーン（文科）"
     ],
     [
      "9/29(火)",
      "15:00-16:30",
      "ウエストゾーン（理科）"
     ],
     [
      "9/30(水)",
      "10:30-12:00",
      "ウエストゾーン（理科）"
     ],
     [
      "9/30(水)",
      "15:00-16:30",
      "イーストゾーン（文科）"
     ]
    ]
   },
   "7b8c9d": {
    "text": "集合：センター6号館。各回20名・約90分・全行程徒歩のため、歩きやすい靴と飲み物をご用意ください。言語は主に英語です（日本語も可）。他エリアへの申込も可能です（文科系の学生が理科系の回を選ぶこともできます）。行事中は写真撮影を行い、SNS に掲載する場合があります。希望されない場合は事前に Q-Mate へお知らせください。主催は Q-Mate で、申込フォームは公式ポータルにあります。"
   },
   "8c9d0e": {
    "text": "⑦ 福岡銀行口座開設会（10月6・7・8日）"
   },
   "9d0e1f": {
    "text": "福岡銀行は伊都キャンパス内に ATM があり、福岡県の主要銀行の一つです。口座開設会に参加すると**その場で口座番号とキャッシュカードを受け取れ**、支店へ行く必要がなく、奨学金の受取や家賃の口座振替にそのまま利用できます。福岡銀行と九大のスタッフが英語・日本語で対応します。**会場：日本Jonathan KS Choi文化館（キャンパスマップ No.79）**、第1～3回のうちいずれか1回を選んでください（ご自身の授業時間を避けてください）。"
   },
   "0e1f2a": {
    "items": [
     {
      "text": "条件①：在留カードの住所登録が完了していること"
     },
     {
      "text": "条件②：在留期間が3か月以上残っていること（不足する場合はご自身で銀行支店へお越しください）"
     },
     {
      "text": "申込：入国支援システム → 口座開設会のフォームに入力 ＋ 在留カードの写真をアップロード（フォームは申込期間中のみ表示されます）"
     },
     {
      "text": "留学課からの確認メールを受け取って初めて申込完了となります。未受信の場合は参加できません。原則としてキャンセルはできません"
     },
     {
      "text": "印鑑：シャチハタは不可で、朱肉を使う従来型の印鑑が必要です。また、日本で使用できる電話番号が必要です"
     },
     {
      "text": "米国籍の方は SSN（Social Security Number）を事前にご確認ください"
     }
    ]
   },
   "1f2a3b": {
    "text": "⑧ ESP 外国人留学生等緊急安心プラン"
   },
   "2a3b4c": {
    "text": "「留学」の在留資格を持つ九州大学の全留学生が対象で、**加入必須**です。24時間・365日・中国語・英語・日本語の3か国語による医療支援を提供します：病院の紹介、受診時の電話通訳（医師の許可が必要）、緊急時の母国の家族への連絡や交通の手配など。**注意：ESP は医療保険ではありません**ので、医療費は補償されません。入院・治療・検査の費用は自己負担か国民健康保険の適用となります。"
   },
   "3b4c5d": {
    "headers": [
     "在学年数",
     "費用",
     "対象"
    ],
    "rows": [
     [
      "1年",
      "1,650円",
      "非正規生、研究生など"
     ],
     [
      "2年",
      "3,300円",
      "修士課程"
     ],
     [
      "3年",
      "4,950円",
      "博士後期課程"
     ],
     [
      "4年",
      "6,600円",
      "学部"
     ]
    ]
   },
   "4c5d6e": {
    "items": [
     {
      "text": "加入期限：**2026年10月30日(金)**。"
     },
     {
      "text": "申込：公式アプリからオンラインで申請します。日本の携帯電話番号が必要なため、来日後の手続をおすすめします"
     },
     {
      "text": "アプリ名は公式資料によって記載が異なります（OSSMA / NEXUS）。最新の手引きを基準としてください"
     },
     {
      "text": "支払い：クレジットカード / コンビニ（オンライン登録時に選択、別途手数料がかかります）。"
     }
    ]
   },
   "m1h2i3": {
    "text": "⑨ お役立ち情報・医療健康リソース"
   },
   "m2i3j4": {
    "text": "留学課の「お役立ち情報」ページには、福岡での生活に役立つ情報がまとめられています。**受診は新入生が最もよく直面する問題**です：伊都キャンパス内には伊都診療所がありますが、土日は開業していません。学外で受診する場合は**外国語対応の医療機関一覧**（2026年5月版、対応言語レベル A 堪能 / B 日常会話 / C 片言を含む）を参照してください。"
   },
   "m3j4k5": {
    "headers": [
     "医療機関",
     "場所",
     "診療科",
     "言語対応"
    ],
    "rows": [
     [
      "伊都診療所（学内）",
      "センター6号館 1F",
      "内科・精神科",
      "英語 B 級"
     ],
     [
      "西福岡病院",
      "西区生の松原",
      "総合",
      "A 級・20 言語"
     ],
     [
      "福岡記念病院",
      "早良区西新",
      "総合",
      "A 級"
     ]
    ]
   },
   "45ba0c": {
    "text": "診療時間と連絡先：伊都診療所は平日 10:00-12:30 / 14:00-16:30。西福岡病院 0570-09-1331（紹介状・予約制で、紹介状がない場合は別途 7,700 円）。福岡記念病院 092-821-4731。学外で受診する前にご確認ください：予約が必要かどうか。伊都診療所は土日が休診のため、学外の医療機関を探す必要があります。"
   },
   "d966c7": {
    "items": [
     {
      "text": "伊都診療所",
      "url": "https://itoclinic.kyushu-u.ac.jp/"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp"
     }
    ]
   },
   "m4k5l6": {
    "items": [
     {
      "text": "伊都キャンパス医療機関一覧 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E4%BC%8A%E9%83%BD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-1.pdf"
     },
     {
      "text": "病院キャンパス医療機関一覧 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%97%85%E9%99%A2%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-2.pdf"
     },
     {
      "text": "大橋キャンパス医療機関一覧 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E5%A4%A7%E6%A9%8B%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     },
     {
      "text": "筑紫キャンパス医療機関一覧 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%AD%91%E7%B4%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     }
    ]
   },
   "2cbef1": {
    "text": "お役立ちリソースとリンク"
   },
   "m5l6m7": {
    "items": [
     {
      "text": "個人使用の医薬品の日本への持込み"
     },
     {
      "text": "ワクチンで予防できる感染症情報"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE"
     },
     {
      "text": "2026 International Clubs Guide"
     },
     {
      "text": "Global Gateways"
     }
    ]
   },
   "8b5893": {
    "items": [
     {
      "text": "個人使用の医薬品の日本への持込み",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html"
     },
     {
      "text": "ワクチンで予防できる感染症情報",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/"
     }
    ]
   },
   "5d6e7f": {
    "text": "⑩ 連絡先と相談窓口"
   },
   "6e7f8a": {
    "items": [
     {
      "text": "来日前の相談：留学課 imm.s@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "日常の相談：LINE「Consultation Desk」（Q-Mate が回答）"
     },
     {
      "text": "Q-Mate Instagram：@_qmate"
     },
     {
      "text": "Q-Mate 公式サイト：Q&A と生活情報のまとめ"
     }
    ]
   },
   "0e969c": {
    "items": [
     {
      "text": "来日後の日常相談",
      "url": "https://lin.ee/EiQqccP"
     },
     {
      "text": "Q-Mate 公式サイト",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about"
     }
    ]
   },
   "7e8f9a": {
    "items": [
     {
      "text": "公式 NotePM ポータル（日本語）",
      "url": "https://notepm.jp/sharing/fb0e6579-ad42-4aaa-90fb-9bcff4e253e3"
     },
     {
      "text": "公式 NotePM ポータル（英語）",
      "url": "https://notepm.jp/sharing/da6d736d-f9e1-44db-ba5e-580d2f1413b2"
     },
     {
      "text": null,
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**原文の出典**：留学課 NotePM「新入留学生サポートポータル（伊都キャンパス）」2026-08-20（各子ページおよび公式 PDF の時刻表を含む）。情報は公式の最新発表を基準とします。"
   }
  },
  "en": {
   "83b134": {
    "text": "Complete support information for autumn 2026 entrants: airport shuttle, dormitory check-in, Wi-Fi, administrative procedures, オリエンテーション, bank account opening session, ESP. **Reviewing the schedule overview first is recommended**, then expanding each section as needed."
   },
   "9c1a2e": {
    "text": "This article compiles all official support information provided by Kyushu University 国際部留学課 for **new international students entering in autumn 2026**. Source: the division's NotePM portal 「新入留学生サポートポータル（伊都キャンパス）」, published 2026-08-20. Eligibility and dates for each activity are officially restricted; confirmation against the notes in this article is required."
   },
   "1b2c3d": {
    "text": "Schedule Overview"
   },
   "a4b5c6": {
    "headers": [
     "Date",
     "Activity",
     "Eligible Participants",
     "Notes"
    ],
    "rows": [
     [
      "Sep 24・25",
      "Free airport shuttle bus",
      "All new international students",
      "First come, first served; no reservation required"
     ],
     [
      "Sep 24・25・29・30・Oct 1",
      "Free daily-life support bus",
      "New international students and their supporters",
      "First come, first served; no reservation required"
     ],
     [
      "September 24 – early October",
      "Administrative procedures and bank guidance",
      "New students from overseas moving into student dormitories",
      "⚠️ Advance registration required"
     ],
     [
      "Sep 28",
      "オリエン + 4 concurrent sessions",
      "All new international students (including other campuses)",
      "⚠️ Attendance required for new international students"
     ],
     [
      "Sep 29・30",
      "Campus tour for new international students",
      "All new international students",
      "Registration required; 20 persons per session"
     ],
     [
      "Oct 6・7・8",
      "福岡銀行 account opening session",
      "New students who have completed residence registration",
      "⚠️ Advance registration required"
     ]
    ]
   },
   "2d3e4f": {
    "text": "Available move-in times for each student dormitory are as stated in 募集要項（留学生用宿舎申請）from page 6 onward."
   },
   "3e4f5a": {
    "text": "① Free Airport Shuttle Bus (福岡空港 → 伊都各宿舍)"
   },
   "4f5a6b": {
    "text": "On the two days of September 24 and 25, 2026, 留学課 operates a free shuttle bus from 福岡空港 directly to 九大学研都市駅 / ドミトリー1-3 / 伊都協奏館 / セトルインターナショナル. **In principle, use is limited to new international students themselves.** Seating is allocated first come, first served with no reservation required, and boarding may not be possible once the bus is full. Arrival at the meeting point **at least 15 minutes in advance** is required."
   },
   "5a6b7c": {
    "headers": [
     "Departure (福岡空港)",
     "Bus 1",
     "Bus 2",
     "Bus 3",
     "Bus 4"
    ],
    "rows": [
     [
      "International Terminal",
      "9:00",
      "11:30",
      "15:00",
      "18:00"
     ],
     [
      "Domestic Terminal",
      "9:25",
      "11:55",
      "15:25",
      "18:25"
     ]
    ]
   },
   "6b7c8d": {
    "headers": [
     "Arrival",
     "Bus 1",
     "Bus 2",
     "Bus 3",
     "Bus 4"
    ],
    "rows": [
     [
      "九大学研都市駅",
      "9:55",
      "12:35",
      "16:05",
      "19:05"
     ],
     [
      "セトルインターナショナル",
      "10:25",
      "12:55",
      "16:25",
      "(no stop)"
     ],
     [
      "ドミトリー1～3",
      "10:45",
      "13:15",
      "16:45",
      "19:30"
     ],
     [
      "伊都協奏館",
      "11:00",
      "13:30",
      "17:00",
      "19:50"
     ]
    ]
   },
   "7c8d9e": {
    "items": [
     {
      "text": "The 4th bus each day does not stop at セトルインターナショナル."
     },
     {
      "text": "Meeting point: 福岡空港 international / domestic terminals"
     },
     {
      "text": "From 1 hour before departure, staff holding a 「Kyushu University」 sign provide guidance at the arrival gates."
     },
     {
      "text": "Departure and arrival times may shift slightly depending on traffic conditions."
     },
     {
      "text": "New international students of 病院・筑紫・大橋 campuses **cannot** use this bus."
     }
    ]
   },
   "8d9e0f": {
    "text": "② Free Daily-Life Support Bus (dormitories ⇄ 九大学研都市駅)"
   },
   "9e0f1a": {
    "text": "Route: 伊都協奏館 / ドミトリー1-3 / セトルインターナショナル ⇄ 九大学研都市駅 (the 学研都市 area has AEON Mall, さいとぴあ and other shopping and public facilities). Operating days: September 24, 25, 29 and 30, and October 1. New international students and their supporters may ride; first come, first served. The table below shows the next arrival time in real time."
   },
   "0f1a2b": {
    "text": "Seats on the bus are limited and allocated first come, first served; residents of ドミトリー2・3 board at ドミトリー1. Operating times and stop locations follow the official poster PDF."
   },
   "w1a2b3": {
    "text": "③ Campus Wi-Fi (キャンパスWi-Fi / kitenet)"
   },
   "w2b3c4": {
    "text": "For new international students whose network environment is not yet ready after arrival in Japan, 留学課 provides a **temporary Wi-Fi login ID and password** (sent in late September to the email address registered in the 入国支援システム). Wireless access points are available at many locations on Kyushu University campuses."
   },
   "w3c4d5": {
    "text": "Validity of the temporary login credentials: **September 24, 2026 (Thu) – October 9, 2026 (Fri)**. The credentials can no longer be used after October 9; kitenet (Kyushu University student campus Wi-Fi) must be set up with the student's own **SSO-KID**."
   },
   "w4d5e6": {
    "items": [
     {
      "title": "Confirm the SSO-KID",
      "desc": "For degree students it appears on the **back of the student ID card**. Students without an ID card should consult the 学生係 of their faculty or graduate school (asking for the registration code at the same time)."
     },
     {
      "title": "Prepare the required items",
      "desc": "Registration code + an email address other than @s.kyushu-u.ac.jp."
     },
     {
      "title": "Activate the SSO-KID",
      "desc": "Activate on the official website: https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "title": "Complete the initial kitenet setup",
      "desc": "Official setup guides are provided for iOS / Android / other OS."
     }
    ]
   },
   "w5e6f7": {
    "items": [
     {
      "text": "SSO-KID activation page",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "text": "Campus Wi-Fi official page",
      "url": "https://notepm.jp/sharing/751f751c-dbec-4cf0-a5b9-0e3a396b467d"
     }
    ]
   },
   "1a2b3c": {
    "text": "④ Administrative Procedures and Banking Guidance (essential for dormitory residents)"
   },
   "2b3c4d": {
    "text": "For new international students arriving from overseas and moving into student dormitories, 留学課 handles administrative procedures such as residence registration and 国民健康保険 on their behalf, and explains 国民年金, マイナンバーカード and bank account opening (ゆうちょ / 福岡銀行 / 西日本シティ銀行). **Attendance at both the 1st and 2nd guidance sessions is required.** Venue: 日本ジョナサン・KS・チョイ文化館 (campus map No.79). Items to bring: passport, 在留カード, black ballpoint pen. The attendance date must be reserved in the 入国支援システム (Pre-Arrival Assistance) (the form appears only after dormitory move-in procedures are completed); **no reminder email is sent**, so the reserved date must be noted and confirmed on the status page. The date of the 1st guidance session may not be earlier than the day of move-in. Before the day of attendance, photographs of the passport photo page and the landing permission stamp page must be sent to the 留学課 email address (if the photo page has already been uploaded to the 入国支援システム, submitting only the landing permission stamp page is sufficient). Those unable to attend due to schedule conflicts may complete the procedures independently using the multilingual instructional videos produced by Q-Mate."
   },
   "c0d1e2": {
    "headers": [
     "Group",
     "1st guidance",
     "2nd guidance"
    ],
    "rows": [
     [
      "A",
      "9/24(Thu) 15:00-15:30",
      "9/29(Tue) 13:00-14:00"
     ],
     [
      "B",
      "9/25(Fri) 13:00-13:30",
      "9/29(Tue) 13:00-14:00"
     ],
     [
      "C",
      "9/28(Mon) 10:00-10:30",
      "9/30(Wed) 13:00-14:00"
     ],
     [
      "D",
      "9/29(Tue) 10:00-10:30",
      "10/1(Thu) 13:00-14:00"
     ],
     [
      "E",
      "9/30(Wed) 10:00-10:30",
      "10/2(Fri) 13:00-14:00"
     ],
     [
      "F",
      "10/1(Thu) 10:00-10:30",
      "10/5(Mon) 12:30-13:30"
     ],
     [
      "G",
      "10/2(Fri) 10:00-10:30",
      "10/6(Tue) 12:00-13:00"
     ]
    ]
   },
   "d1e2f0": {
    "text": "About 18 minutes on foot from 協奏館, and about 5-7 minutes on foot from ドミトリー. Capacity is limited, and the desired date may not be selectable. When residence registration is carried out by 留学課 on the student's behalf, the 特定在留カード (a card integrating the マイナンバーカード and the 在留カード; free of charge at residence registration on new entry, **not mandatory**) cannot be applied for at the same time."
   },
   "e2f0a3": {
    "headers": [
     "Group",
     "1st guidance",
     "2nd guidance"
    ],
    "rows": [
     [
      "A",
      "9/28(Mon) 11:00-11:30",
      "9/30(Wed) 15:00-16:00"
     ],
     [
      "B",
      "9/29(Tue) 11:00-11:30",
      "10/1(Thu) 15:00-16:00"
     ],
     [
      "C",
      "9/30(Wed) 11:00-11:30",
      "10/2(Fri) 15:00-16:00"
     ]
    ]
   },
   "f0a3b4": {
    "text": "Same venue (文化館 No.79). About 13 minutes by bus (alighting at 九大ビッグオレンジ前), about 35 minutes on foot."
   },
   "5e6f0a": {
    "text": "⑤ Orientation for New International Students (September 28)"
   },
   "6f0a1b": {
    "text": "September 28 (Mon) 12:50-15:10, 椎木講堂, 伊都キャンパス. Lectures by 西警察署, 福岡出入国在留管理局 and 福岡市消防局. **Attendance is required for new international students** (except when it conflicts with other guidance sessions). Advance registration required: **registration form** https://forms.cloud.microsoft/r/nCDDWic1U5"
   },
   "a3b4c5": {
    "headers": [
     "Time",
     "Programme"
    ],
    "rows": [
     [
      "12:50",
      "Opening remarks"
     ],
     [
      "12:55",
      "Introduction to 「Q-Mate」"
     ],
     [
      "13:05",
      "Practical information for a new life in Fukuoka"
     ],
     [
      "13:10",
      "KUFSA (international student association)"
     ],
     [
      "13:20",
      "Introduction to on-campus counseling services"
     ],
     [
      "13:25",
      "Status of residence system (入管)"
     ],
     [
      "13:35",
      "15-minute break"
     ],
     [
      "13:50",
      "Safety and crime prevention (西警察署)"
     ],
     [
      "14:30",
      "Fire, emergency medical care and disaster preparedness (消防局)"
     ],
     [
      "14:55",
      "Library announcements"
     ],
     [
      "15:00",
      "Closing remarks"
     ]
    ]
   },
   "b4c5d6": {
    "text": "Four other activities are held on the same day: a SIM card sales event (venue: 椎木講堂 Galleria; choose either of two sessions: ①10:30-12:30 before the orientation begins, ②15:10-17:00 after it ends; the official site recommends the morning session, as the afternoon may be crowded; **advance registration required**; plans, prices and registration method are given in the official poster), a library tour (中央図書館), an immigration consultation session (on-site consultation on status of residence), and a welcome party (17:00-18:00 @ BIG SKY, limited to new international students). Free shuttle buses run between 椎木講堂 and 病院・筑紫・大橋 campuses and 福岡市国際会館・井尻 (outward trip departing around 10:40-10:50, return trip departing around 18:20), first come, first served; the return trip requires presentation of the ticket issued on the outward trip. **The shuttle bus meeting points are the designated locations of each campus (see the official PDF) and are not 国際交流会館.**"
   },
   "5f0a6b": {
    "text": "⑥ Campus Tour for New International Students (September 29 and 30)"
   },
   "6a7b8c": {
    "headers": [
     "Date",
     "Time",
     "Themed area"
    ],
    "rows": [
     [
      "9/29(Tue)",
      "10:30-12:00",
      "イーストゾーン (humanities)"
     ],
     [
      "9/29(Tue)",
      "15:00-16:30",
      "ウエストゾーン (sciences)"
     ],
     [
      "9/30(Wed)",
      "10:30-12:00",
      "ウエストゾーン (sciences)"
     ],
     [
      "9/30(Wed)",
      "15:00-16:30",
      "イーストゾーン (humanities)"
     ]
    ]
   },
   "7b8c9d": {
    "text": "Meeting point: センター6号館. Each session is limited to 20 persons, lasts about 90 minutes and involves walking throughout; participants are advised to wear shoes suitable for walking and to bring drinking water. The main language is English (Japanese also available). Registration across areas is possible (humanities students may also select a sciences session). Photographs are taken during the event and may be posted on SNS; those who object should inform Q-Mate in advance. Organized by Q-Mate; the registration form is on the official portal."
   },
   "8c9d0e": {
    "text": "⑦ 福岡銀行 Account Opening Session (October 6, 7 and 8)"
   },
   "9d0e1f": {
    "text": "福岡銀行 has an ATM on 伊都キャンパス and is one of the main banks of Fukuoka Prefecture. Participation in the session allows an account number and cash card to be **obtained on the spot**, without visiting a branch, and the account can be used directly for receiving scholarships and for rent 口座振替. 福岡銀行 and Kyushu University staff provide support in English and Japanese. **Venue: 日本ジョナサン・KS・チョイ文化館 (campus map No.79)**; choose one of the 1st to 3rd sessions (avoiding one's own class times)."
   },
   "0e1f2a": {
    "items": [
     {
      "text": "Condition ①: residence registration on the 在留カード has been completed"
     },
     {
      "text": "Condition ②: 3 months or more remaining in the period of stay (those with less must apply at a bank branch themselves)"
     },
     {
      "text": "Registration: 入国支援システム → complete the session form + upload a photo of the 在留カード (the form is displayed only during the registration period)"
     },
     {
      "text": "Registration is complete only upon receipt of a confirmation email from 留学課; those who do not receive one cannot attend, and cancellation is not possible in principle"
     },
     {
      "text": "Seal: a シャチハタ is not accepted; a traditional seal using 朱肉 is required. A telephone number usable in Japan is also required."
     },
     {
      "text": "Persons of US nationality must confirm their SSN (Social Security Number) in advance"
     }
    ]
   },
   "1f2a3b": {
    "text": "⑧ ESP — Emergency Support Program for International Students"
   },
   "2a3b4c": {
    "text": "For all Kyushu University international students holding 「留学」 status of residence, **enrollment is mandatory**. It provides 24-hour, 365-day medical assistance in Chinese, English and Japanese: hospital referrals, telephone interpretation during medical visits (with the doctor's permission), contacting family in the home country in emergencies, and arranging transport. **Note: ESP is not medical insurance** and does not reimburse medical expenses; hospitalization, treatment and examination costs must still be paid personally or covered by 国民健康保険."
   },
   "3b4c5d": {
    "headers": [
     "Years of study",
     "Fee",
     "Applicable to"
    ],
    "rows": [
     [
      "1",
      "1,650 yen",
      "Non-regular students, research students, etc."
     ],
     [
      "2",
      "3,300 yen",
      "Master's course"
     ],
     [
      "3",
      "4,950 yen",
      "Doctoral course"
     ],
     [
      "4",
      "6,600 yen",
      "Undergraduate"
     ]
    ]
   },
   "4c5d6e": {
    "items": [
     {
      "text": "Enrollment deadline: **October 30, 2026 (Fri)**."
     },
     {
      "text": "Application: online via the official app; a Japanese mobile phone number is required, and application after arrival in Japan is recommended"
     },
     {
      "text": "The app name differs among official documents (OSSMA / NEXUS); the latest handbook takes precedence"
     },
     {
      "text": "Payment: credit card / convenience store (selected during online registration; an additional handling fee applies)."
     }
    ]
   },
   "m1h2i3": {
    "text": "⑨ Practical Information and Health Resources"
   },
   "m2i3j4": {
    "text": "The 留学課 「お役立ち情報」 page compiles useful resources for life in Fukuoka. **Seeking medical care is the issue new students encounter most often**: 伊都診療所 is located on 伊都キャンパス but is closed on weekends, and off-campus care requires reference to the **list of medical institutions providing foreign-language support** (May 2026 edition, including language-support levels A fluent / B daily conversation / C basic phrases)."
   },
   "m3j4k5": {
    "headers": [
     "Hospital",
     "Location",
     "Department",
     "Language support"
    ],
    "rows": [
     [
      "伊都診療所 (on campus)",
      "センター6号館 1F",
      "Internal medicine / psychiatry",
      "English level B"
     ],
     [
      "西福岡病院",
      "西区生の松原",
      "General",
      "Level A, 20 languages"
     ],
     [
      "福岡記念病院",
      "早良区西新",
      "General",
      "Level A"
     ]
    ]
   },
   "45ba0c": {
    "text": "Consultation hours and contact details: 伊都診療所 on weekdays 10:00-12:30 / 14:00-16:30; 西福岡病院 0570-09-1331 (referral letter and reservation required; without a referral letter an additional 7,700円 is charged); 福岡記念病院 092-821-4731. Before seeking care outside the campus, confirm whether a reservation is required; 伊都診療所 is closed on weekends, so an off-campus hospital must be found."
   },
   "d966c7": {
    "items": [
     {
      "text": "伊都診療所",
      "url": "https://itoclinic.kyushu-u.ac.jp/"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp"
     }
    ]
   },
   "m4k5l6": {
    "items": [
     {
      "text": "List of medical institutions for 伊都キャンパス (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E4%BC%8A%E9%83%BD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-1.pdf"
     },
     {
      "text": "List of medical institutions for 病院キャンパス (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%97%85%E9%99%A2%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-2.pdf"
     },
     {
      "text": "List of medical institutions for 大橋キャンパス (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E5%A4%A7%E6%A9%8B%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     },
     {
      "text": "List of medical institutions for 筑紫キャンパス (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%AD%91%E7%B4%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     }
    ]
   },
   "2cbef1": {
    "text": "Useful Resources and Links"
   },
   "m5l6m7": {
    "items": [
     {
      "text": "Bringing personal medications into Japan"
     },
     {
      "text": "Information on vaccine-preventable infectious diseases"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE"
     },
     {
      "text": "2026 International Clubs Guide"
     },
     {
      "text": "Global Gateways"
     }
    ]
   },
   "8b5893": {
    "items": [
     {
      "text": "Bringing personal medications into Japan",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html"
     },
     {
      "text": "Information on vaccine-preventable infectious diseases",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/"
     }
    ]
   },
   "5d6e7f": {
    "text": "⑩ Contact Information and Consultation"
   },
   "6e7f8a": {
    "items": [
     {
      "text": "Consultation before arrival in Japan: 留学課 imm.s@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Daily consultation: LINE 「Consultation Desk」 (answered by Q-Mate)"
     },
     {
      "text": "Q-Mate Instagram: @_qmate"
     },
     {
      "text": "Q-Mate official website: compilation of FAQ and life information"
     }
    ]
   },
   "0e969c": {
    "items": [
     {
      "text": "Daily consultation after arrival in Japan",
      "url": "https://lin.ee/EiQqccP"
     },
     {
      "text": "Q-Mate official website",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about"
     }
    ]
   },
   "7e8f9a": {
    "items": [
     {
      "text": "Official NotePM portal (Japanese)",
      "url": "https://notepm.jp/sharing/fb0e6579-ad42-4aaa-90fb-9bcff4e253e3"
     },
     {
      "text": "Official NotePM portal (English)",
      "url": "https://notepm.jp/sharing/da6d736d-f9e1-44db-ba5e-580d2f1413b2"
     },
     {
      "text": "",
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**Source**: 留学課 NotePM 「新入留学生サポートポータル（伊都キャンパス）」2026-08-20 (including sub-pages and official PDF timetables). The latest official publication takes precedence."
   }
  },
  "ko": {
   "83b134": {
    "text": "2026년 가을 입학생을 위한 모든 지원 정보: 공항 셔틀버스, 기숙사 입사, Wi-Fi, 행정 수속, オリエンテーション, 은행 계좌 개설회, ESP. **먼저 일정 개요를 확인한 뒤** 필요한 항목을 펼쳐 보시기 바랍니다."
   },
   "9c1a2e": {
    "text": "이 글은 九州大学 国際部留学課가 **2026년 가을 신입 유학생**을 대상으로 제공하는 모든 공식 지원 정보를 정리한 것입니다. 원문 출처: 留学課 NotePM 포털 「新入留学生サポートポータル（伊都キャンパス）」, 게시일 2026-08-20. 각 행사의 대상과 날짜는 모두 공식적으로 한정되어 있으므로, 반드시 이 글에 표시된 내용을 기준으로 확인하시기 바랍니다."
   },
   "1b2c3d": {
    "text": "일정 개요"
   },
   "a4b5c6": {
    "headers": [
     "날짜",
     "행사",
     "대상",
     "비고"
    ],
    "rows": [
     [
      "9월 24일・25일",
      "무료 공항 셔틀버스",
      "모든 신입 유학생",
      "선착순, 예약 불필요"
     ],
     [
      "9월 24일・25일・29일・30일・10월 1일",
      "무료 생활 지원 버스",
      "신입 유학생 및 지원자",
      "선착순, 예약 불필요"
     ],
     [
      "9월 24일～10月상순",
      "행정 수속・은행 안내",
      "기숙사에 입사하는 해외 신입생",
      "⚠️ 사전 신청 필수"
     ],
     [
      "9월 28일",
      "オリエン + 병행 4건",
      "모든 신입 유학생 (기타 캠퍼스 포함)",
      "⚠️ 신입 유학생 참가 필수"
     ],
     [
      "9월 29일・30일",
      "신입 유학생 캠퍼스 투어",
      "모든 신입 유학생",
      "신청 필요, 회당 20명"
     ],
     [
      "10월 6일・7일・8일",
      "福岡銀行 계좌 개설회",
      "주소 등록을 마친 신입생",
      "⚠️ 사전 신청 필수"
     ]
    ]
   },
   "2d3e4f": {
    "text": "각 학생 기숙사의 입사 가능 시기는 募集要項（留学生用宿舎申請）6페이지 이후를 기준으로 합니다."
   },
   "3e4f5a": {
    "text": "① 무료 공항 셔틀버스（福岡空港 → 伊都 각 기숙사）"
   },
   "4f5a6b": {
    "text": "2026年9月24日・25日 이틀간, 留学課는 福岡空港에서 무료 셔틀버스를 운행하여 九大学研都市駅 / ドミトリー1-3 / 伊都協奏館 / セトルインターナショナル까지 운행합니다. **원칙적으로 신입 유학생 본인만** 탑승할 수 있습니다. 선착순・예약 불필요이며, 만석이면 탑승하지 못할 수 있습니다. 집결 장소에 **최소 15분 전**까지 도착하시기 바랍니다."
   },
   "5a6b7c": {
    "headers": [
     "출발 (福岡空港)",
     "1편",
     "2편",
     "3편",
     "4편"
    ],
    "rows": [
     [
      "国際線ターミナル",
      "9:00",
      "11:30",
      "15:00",
      "18:00"
     ],
     [
      "国内線ターミナル",
      "9:25",
      "11:55",
      "15:25",
      "18:25"
     ]
    ]
   },
   "6b7c8d": {
    "headers": [
     "도착",
     "1편",
     "2편",
     "3편",
     "4편"
    ],
    "rows": [
     [
      "九大学研都市駅",
      "9:55",
      "12:35",
      "16:05",
      "19:05"
     ],
     [
      "セトルインターナショナル",
      "10:25",
      "12:55",
      "16:25",
      "(정차하지 않음)"
     ],
     [
      "ドミトリー1～3",
      "10:45",
      "13:15",
      "16:45",
      "19:30"
     ],
     [
      "伊都協奏館",
      "11:00",
      "13:30",
      "17:00",
      "19:50"
     ]
    ]
   },
   "7c8d9e": {
    "items": [
     {
      "text": "매일 4편은 セトルインターナショナル에 정차하지 않습니다."
     },
     {
      "text": "집결: 福岡空港 국제선 / 국내선 터미널"
     },
     {
      "text": "출발 1시간 전부터 「Kyushu University」 팻말을 든 담당자가 도착구에서 안내합니다."
     },
     {
      "text": "출발・도착 시간은 교통 상황에 따라 앞뒤로 변동될 수 있습니다."
     },
     {
      "text": "病院・筑紫・大橋 캠퍼스의 신입 유학생은 이 버스를 **이용할 수 없습니다**."
     }
    ]
   },
   "8d9e0f": {
    "text": "② 무료 생활 지원 버스（기숙사 ⇄ 九大学研都市駅）"
   },
   "9e0f1a": {
    "text": "운행 구간: 伊都協奏館 / ドミトリー1-3 / セトルインターナショナル ⇄ 九大学研都市駅（学研都市 일대에는 AEON Mall, さいとぴあ 등 쇼핑・공공 시설이 있습니다）. 운행일: 9月24日・25日・29日・30日、10月1日. 신입 유학생과 그 지원자가 탑승할 수 있으며, 선착순입니다. 아래 표는 다음 버스의 도착 시간을 실시간으로 표시합니다."
   },
   "0f1a2b": {
    "text": "버스 좌석은 한정되어 있고 선착순입니다. ドミトリー2・3 거주자는 ドミトリー1에서 탑승하시기 바랍니다. 운행 시각과 정차 위치는 공식 포스터 PDF를 기준으로 합니다."
   },
   "w1a2b3": {
    "text": "③ 캠퍼스 Wi-Fi（キャンパスWi-Fi / kitenet）"
   },
   "w2b3c4": {
    "text": "일본 입국 후 네트워크 환경이 갖추어지지 않은 신입 유학생을 위해 留学課가 **임시 Wi-Fi 로그인 ID・비밀번호**를 제공합니다（9월 하순에 입국 지원 시스템에 등록된 메일 주소로 발송）. 九州大学 캠퍼스 내에는 무선 액세스 포인트가 여러 곳 있습니다."
   },
   "w3c4d5": {
    "text": "임시 로그인 정보 유효 기간: **2026年9月24日(木)～10月9日(金)**. 10月9日 이후에는 사용할 수 없으며, 본인의 **SSO-KID**로 kitenet（九大生 캠퍼스 Wi-Fi）을 설정해야 합니다."
   },
   "w4d5e6": {
    "items": [
     {
      "title": "자신의 SSO-KID 확인",
      "desc": "정규 과정생은 **학생증 뒷면**에 기재되어 있습니다. 학생증이 없는 경우 소속 学部・学府의 学生課에 문의하시기 바랍니다 (등록 코드도 함께 문의) ."
     },
     {
      "title": "서류 준비",
      "desc": "등록 코드 + @s.kyushu-u.ac.jp 이외의 메일 주소."
     },
     {
      "title": "SSO-KID 활성화",
      "desc": "공식 사이트에서 활성화: https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "title": "kitenet 초기 설정 완료",
      "desc": "공식 사이트에서 iOS / Android / 기타 OS 설정 가이드를 제공합니다."
     }
    ]
   },
   "w5e6f7": {
    "items": [
     {
      "text": "SSO-KID 활성화 페이지",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "text": "캠퍼스 Wi-Fi 공식 페이지",
      "url": "https://notepm.jp/sharing/751f751c-dbec-4cf0-a5b9-0e3a396b467d"
     }
    ]
   },
   "1a2b3c": {
    "text": "④ 행정 수속・은행 안내（기숙사 입사자 필독）"
   },
   "2b3c4d": {
    "text": "해외에서 입국하여 학생 기숙사에 입사하는 신입 유학생을 대상으로, 留学課가 주소 등록, 국민건강보험 등 행정 수속을 대행하고 국민연금, マイナンバーカード, 은행 계좌 개설（ゆうちょ / 福岡銀行 / 西日本シティ銀行）을 설명합니다. **제1회와 제2회 두 차례 안내에 반드시 참가해야 합니다**. 회장: 日本ジョナサン・KS・チョイ文化館（캠퍼스 지도 No.79）. 지참: 여권・재류카드・검은색 볼펜. 입국 지원 시스템（Pre-Arrival Assistance）에서 참가 날짜를 예약해야 합니다（기숙사 입주 수속 완료 후에야 양식이 표시됨）. **알림 메일은 발송되지 않으므로** 예약 날짜를 스스로 기억하고 상태 페이지에서 확인하시기 바랍니다. 제1회 안내 날짜는 입주 당일보다 앞설 수 없습니다. 참가 당일 전까지 여권 사진면과 입국 허가 스탬프면 사진을 留学課 메일로 발송해야 합니다（사진면을 입국 지원 시스템에 이미 업로드한 경우 입국 허가 스탬프면만 제출）. 일정이 맞지 않아 참가할 수 없는 경우, Q-Mate가 제작한 다국어 안내 영상을 참고하여 직접 수속할 수 있습니다."
   },
   "c0d1e2": {
    "headers": [
     "그룹",
     "제1회 안내",
     "제2회 안내"
    ],
    "rows": [
     [
      "A",
      "9/24(목) 15:00-15:30",
      "9/29(화) 13:00-14:00"
     ],
     [
      "B",
      "9/25(금) 13:00-13:30",
      "9/29(화) 13:00-14:00"
     ],
     [
      "C",
      "9/28(월) 10:00-10:30",
      "9/30(수) 13:00-14:00"
     ],
     [
      "D",
      "9/29(화) 10:00-10:30",
      "10/1(목) 13:00-14:00"
     ],
     [
      "E",
      "9/30(수) 10:00-10:30",
      "10/2(금) 13:00-14:00"
     ],
     [
      "F",
      "10/1(목) 10:00-10:30",
      "10/5(월) 12:30-13:30"
     ],
     [
      "G",
      "10/2(금) 10:00-10:30",
      "10/6(화) 12:00-13:00"
     ]
    ]
   },
   "d1e2f0": {
    "text": "協奏館에서 도보 약 18분, ドミトリー에서 도보 약 5-7분. 인원이 한정되어 희망하는 날짜를 선택하지 못할 수 있습니다. 주소 등록을 留学課가 대행하는 경우, 특정재류카드（マイナンバーカード와 재류카드가 일체화된 카드; 신규 입국 시 주소 등록 시 무료, **의무 아님**）를 함께 신청할 수 없습니다."
   },
   "e2f0a3": {
    "headers": [
     "그룹",
     "제1회 안내",
     "제2회 안내"
    ],
    "rows": [
     [
      "A",
      "9/28(월) 11:00-11:30",
      "9/30(수) 15:00-16:00"
     ],
     [
      "B",
      "9/29(화) 11:00-11:30",
      "10/1(목) 15:00-16:00"
     ],
     [
      "C",
      "9/30(수) 11:00-11:30",
      "10/2(금) 15:00-16:00"
     ]
    ]
   },
   "f0a3b4": {
    "text": "회장은 동일합니다（文化館 No.79）. 버스로 약 13분（九大ビッグオレンジ前 하차）, 도보 약 35분."
   },
   "5e6f0a": {
    "text": "⑤ 신입 유학생 オリエンテーション（9月28日）"
   },
   "6f0a1b": {
    "text": "9月28日(月) 12:50-15:10, 伊都 캠퍼스 椎木講堂. 西警察署, 福岡出入国在留管理局, 福岡市消防局가 참석하여 강연합니다. **신입 유학생 참가 필수**（다른 안내 일정과 겹치는 경우 제외）. 사전 등록 필요: **신청 양식** https://forms.cloud.microsoft/r/nCDDWic1U5"
   },
   "a3b4c5": {
    "headers": [
     "시간",
     "순서"
    ],
    "rows": [
     [
      "12:50",
      "개회사"
     ],
     [
      "12:55",
      "「Q-Mate」 소개"
     ],
     [
      "13:05",
      "후쿠오카 신생활 실용 정보"
     ],
     [
      "13:10",
      "KUFSA (유학생회)"
     ],
     [
      "13:20",
      "교내 심리상담 서비스 소개"
     ],
     [
      "13:25",
      "재류자격 제도 (입국관리국)"
     ],
     [
      "13:35",
      "휴식 15분"
     ],
     [
      "13:50",
      "안전과 방범 (西警察署)"
     ],
     [
      "14:30",
      "화재・응급・방재 (消防局)"
     ],
     [
      "14:55",
      "도서관 안내"
     ],
     [
      "15:00",
      "폐회사"
     ]
    ]
   },
   "b4c5d6": {
    "text": "같은 날 4개의 행사가 더 있습니다: SIM 카드 판매회（회장: 椎木講堂 Galleria. 두 회차 중 하나를 선택: ①10:30-12:30 オリエン 시작 전, ②15:10-17:00 종료 후; 공식 사이트는 오전 회차를 권장하며, 오후는 혼잡할 수 있습니다. **사전 등록 필수**, 요금제・가격・등록 방법은 공식 포스터 참조）, 도서관 견학（中央図書館）, 입국관리 상담회（재류자격 현장 상담 가능）, 환영회（17:00-18:00 @ BIG SKY, 신입 유학생 한정）. 病院・筑紫・大橋 캠퍼스 및 福岡市国際会館・井尻에서는 椎木講堂까지 무료 셔틀버스가 왕복 운행됩니다（가편 약 10:40-10:50 출발, 복귀 약 18:20 출발）. 선착순이며, 복귀 시에는 가는 편에 받은 승차권을 제시해야 합니다. **셔틀버스 집결 장소는 각 캠퍼스 지정 위치이며（자세한 내용은 공식 PDF 참조）, 国際交流会館이 아닙니다.**"
   },
   "5f0a6b": {
    "text": "⑥ 신입 유학생 캠퍼스 견학（9月29・30日）"
   },
   "6a7b8c": {
    "headers": [
     "날짜",
     "시간",
     "주제 구역"
    ],
    "rows": [
     [
      "9/29(화)",
      "10:30-12:00",
      "イーストゾーン (문과)"
     ],
     [
      "9/29(화)",
      "15:00-16:30",
      "ウエストゾーン (이과)"
     ],
     [
      "9/30(수)",
      "10:30-12:00",
      "ウエストゾーン (이과)"
     ],
     [
      "9/30(수)",
      "15:00-16:30",
      "イーストゾーン (문과)"
     ]
    ]
   },
   "7b8c9d": {
    "text": "집결: センター6号館. 회당 20명, 약 90분, 전 구간 도보 이동이므로 걷기 편한 신발을 신고 물을 지참하시기 바랍니다. 언어는 영어 중심입니다（일본어도 가능）. 구역을 넘어 신청할 수 있습니다（문과 학생도 이과 구역 선택 가능）. 행사 중 사진을 촬영하여 SNS에 게재할 수 있으므로, 원하지 않는 경우 Q-Mate에 미리 알려 주시기 바랍니다. Q-Mate 주최이며, 신청 양식은 공식 포털에 있습니다."
   },
   "8c9d0e": {
    "text": "⑦ 福岡銀行 계좌 개설회（10月6・7・8日）"
   },
   "9d0e1f": {
    "text": "福岡銀行은 伊都 캠퍼스 내에 ATM을 두고 있으며, 福岡県의 주요 은행 중 하나입니다. 계좌 개설회에 참가하면 **현장에서 계좌번호와 캐시카드를 받을 수 있어** 지점에 갈 필요가 없고, 장학금 수령과 월세 자동이체에 바로 사용할 수 있습니다. 福岡銀行과 九大 직원이 영어・일본어로 지원합니다. **회장: 日本Jonathan KS Choi文化館（캠퍼스 지도 No.79）**, 제1～3회 중 한 회차를 선택（자신의 수업 시간은 피해야 함）."
   },
   "0e1f2a": {
    "items": [
     {
      "text": "조건①: 재류카드 주소 등록 완료"
     },
     {
      "text": "조건②: 재류 기간이 3개월 이상 남아 있을 것 (부족한 경우 직접 은행 지점에서 수속해야 함)"
     },
     {
      "text": "신청: 입국 지원 시스템 → 계좌 개설회 양식 작성 + 재류카드 사진 업로드 (양식은 신청 기간에만 표시됨)"
     },
     {
      "text": "留学課의 확인 메일을 받아야 신청이 완료되며, 받지 못한 경우 참가할 수 없고 원칙적으로 취소할 수 없습니다."
     },
     {
      "text": "인감: シャチハタ는 사용할 수 없고 朱肉를 사용하는 전통 인감이 필요하며, 일본에서 사용 가능한 전화번호도 필요합니다."
     },
     {
      "text": "미국 국적자는 사전에 SSN (Social Security Number) 을 확인해야 합니다."
     }
    ]
   },
   "1f2a3b": {
    "text": "⑧ ESP 외국인 유학생 등 긴급 안심 플랜"
   },
   "2a3b4c": {
    "text": "「留学」 재류자격을 가진 九州大学의 모든 유학생을 대상으로 하며, **가입이 필수**입니다. 24시간・365일・중영일 3개 언어 의료 지원을 제공합니다: 병원 소개, 진료 시 전화 통역（의사 허가 필요）, 긴급 시 모국 가족 연락과 교통편 마련 등. **주의: ESP는 의료보험이 아니며** 의료비를 지급하지 않습니다. 입원・치료・검사 비용은 본인이 부담하거나 국민건강보험으로 처리해야 합니다."
   },
   "3b4c5d": {
    "headers": [
     "재학 연수",
     "비용",
     "해당"
    ],
    "rows": [
     [
      "1년",
      "1,650엔",
      "비정규생・연구생 등"
     ],
     [
      "2년",
      "3,300엔",
      "석사 과정"
     ],
     [
      "3년",
      "4,950엔",
      "박사 후기 과정"
     ],
     [
      "4년",
      "6,600엔",
      "학부"
     ]
    ]
   },
   "4c5d6e": {
    "items": [
     {
      "text": "가입 마감: **2026年10월 30일(금)**."
     },
     {
      "text": "신청: 공식 App에서 온라인 신청, 일본 휴대전화 번호 필요, 입국 후 신청을 권장합니다."
     },
     {
      "text": "App 이름은 공식 자료마다 기재가 다르며 (OSSMA / NEXUS) , 최신 매뉴얼을 기준으로 합니다."
     },
     {
      "text": "결제: 신용카드 / 편의점 (온라인 등록 시 선택, 수수료 별도) ."
     }
    ]
   },
   "m1h2i3": {
    "text": "⑨ 실용 정보・의료 건강 리소스"
   },
   "m2i3j4": {
    "text": "留学課 「お役立ち情報」 페이지에는 후쿠오카 생활에 유용한 자료가 정리되어 있습니다. **진료는 신입생이 가장 자주 겪는 문제입니다**: 伊都 캠퍼스 내에 伊都診療所가 있지만 주말에는 운영하지 않으며, 교외 진료 시에는 **외국어 대응 의료기관 표**（2026年5月版, 대응 언어 등급 A 유창 / B 일상 / C 단편적）를 참고해야 합니다."
   },
   "m3j4k5": {
    "headers": [
     "병원",
     "위치",
     "진료과",
     "언어 대응"
    ],
    "rows": [
     [
      "伊都診療所 (교내)",
      "センター6号館 1F",
      "내과・정신과",
      "영어 B급"
     ],
     [
      "西福岡病院",
      "西区生の松原",
      "종합",
      "A급・20개 언어"
     ],
     [
      "福岡記念病院",
      "早良区西新",
      "종합",
      "A급"
     ]
    ]
   },
   "45ba0c": {
    "text": "진료 시간과 연락처: 伊都診療所 평일 10:00-12:30 / 14:00-16:30; 西福岡病院 0570-09-1331（소개장・예약제, 소개장이 없으면 7,700円 별도）; 福岡記念病院 092-821-4731. 교외 진료 전에 확인할 사항: 예약이 필요한지 여부; 伊都診療所는 주말에 운영하지 않으므로 다른 교외 병원을 찾아야 합니다."
   },
   "d966c7": {
    "items": [
     {
      "text": "伊都診療所",
      "url": "https://itoclinic.kyushu-u.ac.jp/"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp"
     }
    ]
   },
   "m4k5l6": {
    "items": [
     {
      "text": "伊都 캠퍼스 의료기관 표 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E4%BC%8A%E9%83%BD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-1.pdf"
     },
     {
      "text": "病院 캠퍼스 의료기관 표 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%97%85%E9%99%A2%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-2.pdf"
     },
     {
      "text": "大橋 캠퍼스 의료기관 표 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E5%A4%A7%E6%A9%8B%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     },
     {
      "text": "筑紫 캠퍼스 의료기관 표 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%AD%91%E7%B4%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     }
    ]
   },
   "2cbef1": {
    "text": "실용 자료와 링크"
   },
   "m5l6m7": {
    "items": [
     {
      "text": "개인용 의약품 일본 반입"
     },
     {
      "text": "백신으로 예방하는 감염병 정보"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE"
     },
     {
      "text": "2026 International Clubs Guide"
     },
     {
      "text": "Global Gateways"
     }
    ]
   },
   "8b5893": {
    "items": [
     {
      "text": "개인용 의약품 일본 반입",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html"
     },
     {
      "text": "백신으로 예방하는 감염병 정보",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/"
     }
    ]
   },
   "5d6e7f": {
    "text": "⑩ 연락처와 상담"
   },
   "6e7f8a": {
    "items": [
     {
      "text": "입국 전 상담: 留学課 imm.s@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "일상 상담: LINE 「Consultation Desk」 (Q-Mate 답변)"
     },
     {
      "text": "Q-Mate Instagram: @_qmate"
     },
     {
      "text": "Q-Mate 공식 사이트: 질의응답과 생활 정보 정리"
     }
    ]
   },
   "0e969c": {
    "items": [
     {
      "text": "입국 후 일상 상담",
      "url": "https://lin.ee/EiQqccP"
     },
     {
      "text": "Q-Mate 공식 사이트",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about"
     }
    ]
   },
   "7e8f9a": {
    "items": [
     {
      "text": "공식 NotePM 포털 (일본어)",
      "url": "https://notepm.jp/sharing/fb0e6579-ad42-4aaa-90fb-9bcff4e253e3"
     },
     {
      "text": "공식 NotePM 포털 (영어)",
      "url": "https://notepm.jp/sharing/da6d736d-f9e1-44db-ba5e-580d2f1413b2"
     },
     {
      "text": "",
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**원문 출처**: 留学課 NotePM「新入留学生サポートポータル（伊都キャンパス）」2026-08-20（각 하위 페이지와 공식 PDF 시간표 포함）. 정보는 공식 최신 발표를 기준으로 합니다."
   }
  }
 },
 "guide-scholarship": {
  "ja": {
   "768171": {
    "items": [
     {
      "text": "私費留学生のための奨学金（制度の概要）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"
     },
     {
      "text": "Scholarship Guidebook（申請書の書き方・面接）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"
     },
     {
      "text": "応募手続きの解説資料",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"
     },
     {
      "text": "奨学金 Q&A 集",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"
     },
     {
      "text": "国費外国人留学生（制度説明）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"
     }
    ]
   },
   "13edbe": {
    "text": "このページで分かることは 2 つ：**いま何に出せるか**、**どう出すか**。九大の私費奨学金はほぼ「在籍中 ＋ 日本語ができる」が条件で、大学推薦と直接応募の 2 ルートあります。いま応募できるのは下の 7 件です。"
   },
   "25d902": {
    "text": "**出典**：Global Gateways「奨学金一覧」（国際部留学課）、2026-09-14 取得。財団ごとに毎年募集し直し、金額も締切も変わります —— **応募前に下の公式一覧で原文を確認してください**。"
   },
   "3fe9fc": {
    "text": "現在応募できるもの（7 件）"
   },
   "552ef2": {
    "headers": [
     "奨学金",
     "金額",
     "締切"
    ],
    "rows": [
     [
      "CWAJ 外国人留学生大学院女子奨…",
      "年 200万円",
      "10/5"
     ],
     [
      "INPEX教育交流…（3 个国别版）",
      "月 160,000円",
      "10/31"
     ],
     [
      "日本台湾交流協会日本奨学金",
      "月 14万4千円",
      "10/23"
     ],
     [
      "福岡よかトピア国際交流財団",
      "年 50万円",
      "9/24 17:00"
     ],
     [
      "本庄国際奨学財団",
      "月 23万円",
      "10/31"
     ],
     [
      "平和中島財団奨学金",
      "学部生：月 17万円",
      "9/25 17:00"
     ],
     [
      "イノアック国際教育振興財団奨学金",
      "月 5万円",
      "10/9 13:00"
     ]
    ]
   },
   "0e1654": {
    "text": "以下は公式ファイルを直接入手できます —— **まず募集要項を読んでから出すか決めましょう**。"
   },
   "075ce4": {
    "items": [
     {
      "text": "INPEX教育交流…（3 个国别版） — 募集要項（PDF）・インドネシア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1199&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — 募集要項（PDF）・オーストラリア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1200&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — 募集要項（PDF）・UAE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1201&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "福岡よかトピア国際交流財団 — 募集要項（PDF）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1212&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — 募集要項（PDF）・2027 年度版",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1210&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — 募集要項（PDF）・2026 年度版",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1140&img_type=1&img_for=1&mime_type=application/pdf"
     }
    ]
   },
   "620a45": {
    "text": "それ以外は公式一覧から入ってください（毎年更新・終了分も掲載）："
   },
   "d123df": {
    "items": [
     {
      "text": "奨学金一覧（公式・当年度）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="
     },
     {
      "text": "奨学金一覧（公式・前年度、終了分を含む）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="
     },
     {
      "text": "Scholarship list (English)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"
     }
    ]
   },
   "c482ce": {
    "text": "応募前に知っておくべき 5 点"
   },
   "9145cf": {
    "items": [
     {
      "text": "**募集要項は自分で読む**：理解せず応募して取消になった例があります。"
     },
     {
      "text": "**併給に上限**：二重受給は原則不可。上限ありも要確認。"
     },
     {
      "text": "**日本語は事実上の関門**：自筆書類や日本語面接を求める財団が多い。"
     },
     {
      "text": "**多くは在籍者のみ**：入学前に出せるものはごく少数。"
     },
     {
      "text": "**競争は激しい**：応募 ≠ 採用。複数併願を。"
     }
    ]
   },
   "7efb8a": {
    "text": "2 つの応募ルート"
   },
   "2461df": {
    "headers": [
     "ルート",
     "誰が提出",
     "リスク"
    ],
    "rows": [
     [
      "大学推薦（学内選考）",
      "まず留学課へ。通過後に大学が推薦",
      "学内で先に落ちる"
     ],
     [
      "直接応募",
      "自分で財団へ出す",
      "公式サイトと締切を自分で追う"
     ]
    ]
   },
   "887b6a": {
    "text": "**学内選考**は国際部留学課留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp` へ。学習奨励費（私費対象・月 48,000 円）は**所属学部・学府の学務係**へ申請します。両者を混同しないでください。"
   },
   "8aa843": {
    "text": "国費外国人留学生（政府奨学金）"
   },
   "303df2": {
    "text": "文部科学省の制度。**授業料は大学負担、往復渡航費も支給。** 月額は区分ごとに：修士 147,000 円 ／ 博士 148,000 円 ／ 研究生 146,000 円 ／ 学部 120,000 円。"
   },
   "7ba84b": {
    "items": [
     {
      "text": "**大学推薦**：募集期は学府ごと → 2 月学内選考 → 6 月採用"
     },
     {
      "text": "**大使館推薦**：2〜3 月募集 → 5〜7 月一次選考 → 翌年渡日"
     }
    ]
   },
   "546b06": {
    "text": "**進学しても自動継続しません**：指導教員の推薦＋文科省への支給期間延長申請が必要で、可否は文科省の選考。"
   },
   "55d28a": {
    "text": "私費対象：学習奨励費"
   },
   "d52461": {
    "headers": [
     "項目",
     "内容"
    ],
    "rows": [
     [
      "月額",
      "48,000 円"
     ],
     [
      "期間",
      "1 年 または 6 か月"
     ],
     [
      "募集",
      "原則 年 2 回（春・秋）"
     ],
     [
      "対象",
      "学部正規生 ／ 大学院生・研究生"
     ],
     [
      "窓口",
      "所属学部の学務係"
     ]
    ]
   },
   "2d2248": {
    "text": "公式入口"
   },
   "1ea4c3": {
    "text": "**このページを来年度の予定として使わないでください。** 名称・金額・締切は毎年変わり、公式一覧も当年度分しか載りません。"
   },
   "0b08bd": {
    "text": "相談：国際部留学課 留学生係 `intlr-pscholar@jimu.kyushu-u.ac.jp`（私費奨学金）；学習奨励費は**所属学部・学府の学務係**へ。"
   }
  },
  "en": {
   "768171": {
    "items": [
     {
      "text": "Scholarships for privately financed students (overview)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"
     },
     {
      "text": "Scholarship Guidebook (writing applications, interviews)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"
     },
     {
      "text": "Application process explained",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"
     },
     {
      "text": "Scholarship Q&A",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"
     },
     {
      "text": "MEXT government scholarship (explanation)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"
     }
    ]
   },
   "13edbe": {
    "text": "Two things this page answers: **what you can apply for now**, and **how to apply**. Kyushu U. privately financed scholarships almost always require you to be enrolled and able to work in Japanese, and there are two routes: university nomination and direct application. Below are the 7 currently open."
   },
   "25d902": {
    "text": "**Source**: Global Gateways “Scholarship Information” (International Student Exchange Division), captured 2026-09-14. Foundations re-open every year and both amounts and deadlines change - **check the official list below before you apply**."
   },
   "3fe9fc": {
    "text": "Currently open for application (7)"
   },
   "552ef2": {
    "headers": [
     "Scholarship",
     "Amount",
     "Deadline"
    ],
    "rows": [
     [
      "CWAJ 外国人留学生大学院女子奨…",
      "年 200万円",
      "10/5"
     ],
     [
      "INPEX教育交流…（3 个国别版）",
      "月 160,000円",
      "10/31"
     ],
     [
      "日本台湾交流協会日本奨学金",
      "月 14万4千円",
      "10/23"
     ],
     [
      "福岡よかトピア国際交流財団",
      "年 50万円",
      "9/24 17:00"
     ],
     [
      "本庄国際奨学財団",
      "月 23万円",
      "10/31"
     ],
     [
      "平和中島財団奨学金",
      "学部生：月 17万円",
      "9/25 17:00"
     ],
     [
      "イノアック国際教育振興財団奨学金",
      "月 5万円",
      "10/9 13:00"
     ]
    ]
   },
   "0e1654": {
    "text": "For these you can get the official documents directly - **read the guidelines first, then decide whether to apply**."
   },
   "075ce4": {
    "items": [
     {
      "text": "INPEX教育交流…（3 个国别版） — Guidelines (PDF)・インドネシア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1199&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — Guidelines (PDF)・オーストラリア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1200&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — Guidelines (PDF)・UAE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1201&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "福岡よかトピア国際交流財団 — Guidelines (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1212&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — Guidelines (PDF)・2027 年度版",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1210&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — Guidelines (PDF)・2026 年度版",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1140&img_type=1&img_for=1&mime_type=application/pdf"
     }
    ]
   },
   "620a45": {
    "text": "For everything else, go through the official list (updated yearly, closed calls included):"
   },
   "d123df": {
    "items": [
     {
      "text": "Scholarship list (official, current year)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="
     },
     {
      "text": "Scholarship list (official, previous year incl. closed)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="
     },
     {
      "text": "Scholarship list (English)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"
     }
    ]
   },
   "c482ce": {
    "text": "Five points to know before applying"
   },
   "9145cf": {
    "items": [
     {
      "text": "**Read the guidelines yourself**: people really do lose awards for not understanding them."
     },
     {
      "text": "**Double-dipping is capped**: normally you cannot hold two, and caps need checking."
     },
     {
      "text": "**Japanese is a de facto gate**: many foundations want handwritten Japanese and interviews."
     },
     {
      "text": "**Most require enrolment**: very few accept applications before you enrol."
     },
     {
      "text": "**Competition is fierce**: applying ≠ being selected. Apply to several."
     }
    ]
   },
   "7efb8a": {
    "text": "The two application routes"
   },
   "2461df": {
    "headers": [
     "Route",
     "Who submits",
     "Main risk"
    ],
    "rows": [
     [
      "University nomination",
      "First to the exchange division; the university then nominates",
      "You can fail on campus first"
     ],
     [
      "Direct application",
      "You submit to the foundation yourself",
      "You track the site and deadline alone"
     ]
    ]
   },
   "887b6a": {
    "text": "**Internal screening** applications go to the International Student Section, International Affairs Division, `intlr-pscholar@jimu.kyushu-u.ac.jp`. The Learning Incentive Grant (for privately funded students, ¥48,000/month) is applied for at the **academic affairs office of your faculty or graduate school** - do not confuse the two."
   },
   "8aa843": {
    "text": "Japanese Government (MEXT) scholarship"
   },
   "303df2": {
    "text": "A MEXT system. **Tuition is covered by the university and return airfare is paid.** Monthly stipend by category: Master's 147,000 / Doctorate 148,000 / Research student 146,000 / Undergraduate 120,000 JPY."
   },
   "7ba84b": {
    "items": [
     {
      "text": "**University nomination**: call period set by each school → Feb on-campus selection → Jun award"
     },
     {
      "text": "**Embassy nomination**: Feb-Mar call → May-Jul first screening → arrival the following year"
     }
    ]
   },
   "546b06": {
    "text": "**Advancing to a higher degree does not continue it automatically**: you need your supervisor's support and a MEXT application to extend the period; MEXT decides."
   },
   "55d28a": {
    "text": "For privately financed students: Study Incentive Grant"
   },
   "d52461": {
    "headers": [
     "Item",
     "Details"
    ],
    "rows": [
     [
      "Monthly",
      "48,000 JPY"
     ],
     [
      "Duration",
      "1 year or 6 months"
     ],
     [
      "Call period",
      "Normally twice a year (spring/autumn)"
     ],
     [
      "Eligibility",
      "Undergraduate regular / graduate, research students"
     ],
     [
      "Counter",
      "Student affairs office of your faculty"
     ]
    ]
   },
   "2d2248": {
    "text": "Official pages"
   },
   "1ea4c3": {
    "text": "**Do not use this page as next year's plan.** Names, amounts and deadlines change every year, and the official list covers only the current year."
   },
   "0b08bd": {
    "text": "Enquiries: International Student Exchange Division `intlr-pscholar@jimu.kyushu-u.ac.jp` (private scholarships); for the Study Incentive Grant, **your faculty / graduate school office**."
   }
  },
  "ko": {
   "768171": {
    "items": [
     {
      "text": "사비 유학생을 위한 장학금(제도 개요)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"
     },
     {
      "text": "Scholarship Guidebook(신청서 작성·면접)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"
     },
     {
      "text": "응모 절차 해설 자료",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"
     },
     {
      "text": "장학금 Q&A",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"
     },
     {
      "text": "국비 외국인 유학생(제도 설명)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"
     }
    ]
   },
   "13edbe": {
    "text": "이 페이지가 답하는 두 가지: **지금 무엇에 지원할 수 있는가**, **어떻게 지원하는가**. 규슈대 사비 장학금은 대부분 재학 중 + 일본어 가능이 조건이며, 대학 추천과 직접 응모 두 경로가 있습니다. 지금 지원 가능한 것은 아래 7건입니다."
   },
   "25d902": {
    "text": "**출처**: Global Gateways「奨学金一覧」(국제부 유학과), 2026-09-14 수집. 재단마다 매년 다시 모집하고 금액과 마감일도 바뀝니다 - **지원 전에 아래 공식 목록에서 원문을 확인하세요**."
   },
   "3fe9fc": {
    "text": "현재 신청 가능(7건)"
   },
   "552ef2": {
    "headers": [
     "장학금",
     "금액",
     "마감"
    ],
    "rows": [
     [
      "CWAJ 外国人留学生大学院女子奨…",
      "年 200万円",
      "10/5"
     ],
     [
      "INPEX教育交流…（3 个国别版）",
      "月 160,000円",
      "10/31"
     ],
     [
      "日本台湾交流協会日本奨学金",
      "月 14万4千円",
      "10/23"
     ],
     [
      "福岡よかトピア国際交流財団",
      "年 50万円",
      "9/24 17:00"
     ],
     [
      "本庄国際奨学財団",
      "月 23万円",
      "10/31"
     ],
     [
      "平和中島財団奨学金",
      "学部生：月 17万円",
      "9/25 17:00"
     ],
     [
      "イノアック国際教育振興財団奨学金",
      "月 5万円",
      "10/9 13:00"
     ]
    ]
   },
   "0e1654": {
    "text": "아래 항목은 공식 파일을 바로 받을 수 있습니다 - **먼저 모집요강을 읽고 지원 여부를 정하세요**."
   },
   "075ce4": {
    "items": [
     {
      "text": "INPEX教育交流…（3 个国别版） — 모집요강 (PDF)・インドネシア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1199&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — 모집요강 (PDF)・オーストラリア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1200&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — 모집요강 (PDF)・UAE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1201&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "福岡よかトピア国際交流財団 — 모집요강 (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1212&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — 모집요강 (PDF)・2027 年度版",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1210&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — 모집요강 (PDF)・2026 年度版",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1140&img_type=1&img_for=1&mime_type=application/pdf"
     }
    ]
   },
   "620a45": {
    "text": "그 외에는 공식 목록에서 들어가세요(매년 갱신, 종료분 포함):"
   },
   "d123df": {
    "items": [
     {
      "text": "장학금 목록(공식·당해연도)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="
     },
     {
      "text": "장학금 목록(공식·전년도, 종료분 포함)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="
     },
     {
      "text": "Scholarship list (English)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"
     }
    ]
   },
   "c482ce": {
    "text": "신청 전 알아야 할 5가지"
   },
   "9145cf": {
    "items": [
     {
      "text": "**모집요강은 직접 읽기**: 이해 없이 지원해 취소된 사례가 있습니다."
     },
     {
      "text": "**중복 수급 상한**: 원칙적으로 두 곳 동시 수급 불가. 상한도 확인."
     },
     {
      "text": "**일본어가 사실상 관문**: 자필 서류와 일본어 면접을 요구하는 재단이 많습니다."
     },
     {
      "text": "**대부분 재학생만**: 입학 전 지원 가능한 것은 극소수."
     },
     {
      "text": "**경쟁이 치열**: 지원 ≠ 채용. 여러 곳에 지원하세요."
     }
    ]
   },
   "7efb8a": {
    "text": "두 가지 지원 경로"
   },
   "2461df": {
    "headers": [
     "경로",
     "제출처",
     "탈락 위험"
    ],
    "rows": [
     [
      "대학 추천(교내 선고)",
      "먼저 유학과로. 통과 후 대학이 추천",
      "교내에서 먼저 탈락"
     ],
     [
      "직접 응모",
      "본인이 재단에 제출",
      "공식 사이트와 마감을 스스로 관리"
     ]
    ]
   },
   "887b6a": {
    "text": "**교내 선고**는 국제부 유학과 유학생 담당 `intlr-pscholar@jimu.kyushu-u.ac.jp` 로. 학습장려비(사비 대상·월 48,000엔)는 **소속 학부·학부(대학원)의 학무계**에 신청합니다. 둘을 혼동하지 마세요."
   },
   "8aa843": {
    "text": "국비 외국인 유학생(정부 장학금)"
   },
   "303df2": {
    "text": "문부과학성 제도. **수업료는 대학 부담, 왕복 항공료도 지급.** 월액은 구분별로: 석사 147,000엔 ／ 박사 148,000엔 ／ 연구생 146,000엔 ／ 학부 120,000엔."
   },
   "7ba84b": {
    "items": [
     {
      "text": "**대학 추천**: 모집 기간은 학부별 → 2월 교내 선고 → 6월 채용"
     },
     {
      "text": "**대사관 추천**: 2~3월 모집 → 5~7월 1차 선고 → 다음 해 도일"
     }
    ]
   },
   "546b06": {
    "text": "**진학해도 자동 연장되지 않습니다**: 지도교원 추천 + 문부과학성 지급 기간 연장 신청이 필요하고, 가부는 문부과학성이 결정합니다."
   },
   "55d28a": {
    "text": "사비 대상: 학습장려비"
   },
   "d52461": {
    "headers": [
     "항목",
     "내용"
    ],
    "rows": [
     [
      "월액",
      "48,000엔"
     ],
     [
      "기간",
      "1년 또는 6개월"
     ],
     [
      "모집",
      "원칙 연 2회(봄·가을)"
     ],
     [
      "대상",
      "학부 정규생 ／ 대학원생·연구생"
     ],
     [
      "창구",
      "소속 학부 사무실"
     ]
    ]
   },
   "2d2248": {
    "text": "공식 입구"
   },
   "1ea4c3": {
    "text": "**이 페이지를 내년 일정으로 쓰지 마세요.** 이름·금액·마감일은 매년 바뀌고 공식 목록도 당해연도만 싣습니다."
   },
   "0b08bd": {
    "text": "상담: 국제부 유학과 유학생계 `intlr-pscholar@jimu.kyushu-u.ac.jp`(사비 장학금); 학습장려비는 **소속 학부·대학원 사무실**로."
   }
  }
 },
 "guide-career": {
  "ja": {
   "13edbe": {
    "text": "日本の就活は**新卒一括採用** —— 企業は年に一度だけ募集し、全員が同じ日程で動きます。このページでは 3 点を整理します：いつ始まるか、3 つの関門が何を問うか、窓口はどこか。"
   },
   "3cf804": {
    "text": "直近のイベント"
   },
   "aad43e": {
    "headers": [
     "イベント",
     "時間",
     "対象"
    ],
    "rows": [
     [
      "業界・企業研究フェア（2026）",
      "12/2 16:40〜",
      "2027/9・2028/3"
     ],
     [
      "形式",
      "Zoom オンライン",
      "主に日本語（字幕あり）"
     ]
    ]
   },
   "db6bf7": {
    "text": "11 社が参加（正興電機・福岡銀行・ニトリ・AGC・NTTデータ・カプコン・楽天カード等）。主催：**学務部キャリア支援課 092-802-5902**。詳細は公式発表に従ってください。"
   },
   "4decce": {
    "text": "日本の就職活動の特徴"
   },
   "504b9c": {
    "items": [
     {
      "text": "**新卒一括採用**：卒業年度ごとに一括募集し、在学中に決まる。"
     },
     {
      "text": "**4 月入社**：3 月卒業・4 月 1 日入社。ほぼ全業界が同時。"
     },
     {
      "text": "**ポテンシャル採用**：入社前の即戦力は求めず、伸びしろを見る。"
     },
     {
      "text": "**メンバーシップ型**：職務・勤務地・時間を限定せず「総合職」で採用。"
     }
    ]
   },
   "1e230b": {
    "text": "日本企業は外国人留学生を**日本人学生と同じ基準**で選考します。日系・外資系を問いません。「外国人専用ルート」はありません。"
   },
   "8523d8": {
    "text": "スケジュール：年 1 回"
   },
   "7bcd01": {
    "headers": [
     "段階",
     "時期",
     "やること"
    ],
    "rows": [
     [
      "準備",
      "本番の 5 か月前",
      "自己分析・業界研究"
     ],
     [
      "夏季インターン",
      "7〜9 月",
      "早めに企業と接点"
     ],
     [
      "エントリー・説明会",
      "3〜5 月",
      "応募・説明会参加"
     ],
     [
      "ES・筆記",
      "3〜6 月",
      "作文・SPI"
     ],
     [
      "面接",
      "6 月〜",
      "1 社 2〜3 回"
     ],
     [
      "内定",
      "6 月〜（正式 10 月）",
      "決定後は大学へ報告"
     ]
    ]
   },
   "cfc60c": {
    "text": "起点は**最終学年の前年 3 月 1 日**（学部 3 年・修士 1 年・博士 2 年）、6 月中旬に終了。約 4 か月で、**この年を逃すと挽回が難しい**。"
   },
   "0d5661": {
    "text": "3 つの選考段階"
   },
   "27c2f5": {
    "headers": [
     "関門",
     "問われること",
     "留学生の壁"
    ],
    "rows": [
     [
      "書類選考",
      "文字数指定の ES 作文",
      "最も苦労する人が多い"
     ],
     [
      "適性検査・筆記",
      "SPI 等（日本語出題）",
      "難易度は高くないが速度が必要"
     ],
     [
      "面接",
      "GD・グループ・個人",
      "1 社 2〜3 回、表現力を見る"
     ]
    ]
   },
   "8476b7": {
    "text": "ES では「志望理由」「学生時代に力を入れたこと」を書きます。**留学生は日本語の作文で詰まりやすい**。大学の**進路・就職アドバイザー**に添削を依頼できます。"
   },
   "40bdee": {
    "text": "内定後の 2 つの手続き"
   },
   "ffe405": {
    "items": [
     {
      "text": "**在留資格の変更**：「留学」から就労可能な資格へ変更する。"
     },
     {
      "text": "**大学への報告**：進路確定後は所属部局へ。システムからも可。"
     }
    ]
   },
   "14b0cf": {
    "text": "公式入口と窓口"
   },
   "082260": {
    "items": [
     {
      "text": "学務部学生支援課 キャリア支援室（留学生就職支援担当）"
     },
     {
      "text": "センター 1 号館 2 階・2 番窓口（伊都キャンパス）"
     },
     {
      "text": "TEL 092-802-5902"
     },
     {
      "text": "Email q-ssc@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "bd6778": {
    "items": [
     {
      "text": "日本での就職活動について（公開・まずはこちら）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"
     },
     {
      "text": "卒業後の進路状況（過去の実データ）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"
     },
     {
      "text": "外国人留学生のための就職支援（総合入口）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"
     },
     {
      "text": "学内就職イベント（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"
     },
     {
      "text": "学外就職イベント（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"
     },
     {
      "text": "求人情報（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"
     },
     {
      "text": "インターンシップ（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"
     },
     {
      "text": "就活体験記（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"
     },
     {
      "text": "進路・就職相談（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"
     },
     {
      "text": "留学生のための就活お役立ち情報（SSO ログインが必要）",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"
     },
     {
      "text": "Study in Japan（日本での就職・在留資格）",
      "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"
     }
    ]
   },
   "8a888e": {
    "text": "上の 9 ページのうち**多くは九大 SSO ログインが必要**です（`/ja/internal/` 配下は学内ページ）。入学前に見られるのは「日本での就職活動について」と「進路状況」だけです。ページが見つからないのは不具合ではなく権限の問題です。"
   }
  },
  "en": {
   "13edbe": {
    "text": "Japanese job hunting runs on **mass hiring of new graduates**: companies recruit once a year and everyone follows the same calendar. This page covers three things: when it starts, what the three gates test, and where to get help."
   },
   "3cf804": {
    "text": "Upcoming event"
   },
   "aad43e": {
    "headers": [
     "Event",
     "Time",
     "Who"
    ],
    "rows": [
     [
      "Industry & Company Fair (2026)",
      "Dec 2, 16:40-",
      "Sept 2027 / Mar 2028 grads"
     ],
     [
      "Format",
      "Online (Zoom)",
      "Mainly Japanese (subtitles)"
     ]
    ]
   },
   "db6bf7": {
    "text": "11 companies take part (Shoko Electric, Fukuoka Bank, Nitori, AGC, NTT Data, Capcom, Rakuten Card and others). Organised by the **Career Support Section, 092-802-5902**. Follow the official announcement."
   },
   "4decce": {
    "text": "Features of job hunting in Japan"
   },
   "504b9c": {
    "items": [
     {
      "text": "**Mass new-grad hiring**: recruited by graduation year, decided while still enrolled."
     },
     {
      "text": "**April entry**: graduate in March, start on 1 April - nearly every industry at once."
     },
     {
      "text": "**Potential over readiness**: you are not expected to be job-ready; growth matters more."
     },
     {
      "text": "**Membership-type employment**: no fixed role, location or hours - hired as \"generalist\"."
     }
    ]
   },
   "1e230b": {
    "text": "Japanese companies screen international students **by the same standards as Japanese students** - domestic or foreign firms alike. There is no separate foreigner route."
   },
   "8523d8": {
    "text": "Schedule: once a year"
   },
   "7bcd01": {
    "headers": [
     "Stage",
     "When",
     "What to do"
    ],
    "rows": [
     [
      "Preparation",
      "5 months ahead",
      "Self-analysis, industry research"
     ],
     [
      "Summer internship",
      "Jul-Sep",
      "Make early contact"
     ],
     [
      "Apply / info sessions",
      "Mar-May",
      "Apply, attend sessions"
     ],
     [
      "Entry sheet & tests",
      "Mar-Jun",
      "Essays, SPI"
     ],
     [
      "Interviews",
      "From June",
      "2-3 rounds per company"
     ],
     [
      "Offer",
      "From June (formal Oct)",
      "Report to the university"
     ]
    ]
   },
   "cfc60c": {
    "text": "It starts on **1 March of the year before your final year** (3rd-year undergrad, 1st-year master's, 2nd-year PhD) and ends mid-June - about four months, and **miss it and it is hard to recover**."
   },
   "0d5661": {
    "text": "Three selection stages"
   },
   "27c2f5": {
    "headers": [
     "Gate",
     "What it tests",
     "Where it bites"
    ],
    "rows": [
     [
      "Document screening",
      "Entry sheet essay, fixed length",
      "Hardest part for most people"
     ],
     [
      "Aptitude / written test",
      "SPI etc., set in Japanese",
      "Easy questions, tight time"
     ],
     [
      "Interviews",
      "Group discussion, group, 1-on-1",
      "2-3 rounds; delivery matters"
     ]
    ]
   },
   "8476b7": {
    "text": "The entry sheet asks for your motivation and what you worked hardest at. **Writing in Japanese is where most international students get stuck.** The university's **career advisers** can review your draft."
   },
   "40bdee": {
    "text": "Two procedures after a job offer"
   },
   "ffe405": {
    "items": [
     {
      "text": "**Change your residence status**: from \"Student\" to a work-permitted status."
     },
     {
      "text": "**Report to the university**: required once your path is set; can be done online."
     }
    ]
   },
   "14b0cf": {
    "text": "Official pages and counter"
   },
   "082260": {
    "items": [
     {
      "text": "Career Support Office, Student Support Division (international student desk)"
     },
     {
      "text": "Center Bldg 1, 2F, counter 2 (Ito Campus)"
     },
     {
      "text": "TEL 092-802-5902"
     },
     {
      "text": "Email q-ssc@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "bd6778": {
    "items": [
     {
      "text": "Job hunting in Japan (public - start here)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"
     },
     {
      "text": "Career paths after graduation (past data)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"
     },
     {
      "text": "Job support for international students (overview)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"
     },
     {
      "text": "On-campus job events (SSO login required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"
     },
     {
      "text": "Off-campus job events (SSO login required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"
     },
     {
      "text": "Job listings (SSO login required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"
     },
     {
      "text": "Internships (SSO login required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"
     },
     {
      "text": "Job-hunting experience reports (SSO login required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"
     },
     {
      "text": "Career consultation (SSO login required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"
     },
     {
      "text": "Useful information for international students (SSO required)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"
     },
     {
      "text": "Study in Japan (working in Japan & status of residence)",
      "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"
     }
    ]
   },
   "8a888e": {
    "text": "Most of those nine pages **require Kyushu U. SSO login** (everything under `/ja/internal/` is internal). Before enrolment you can only read \"Job hunting in Japan\" and \"Career paths\". A page that will not open is a permission issue, not a fault."
   }
  },
  "ko": {
   "13edbe": {
    "text": "일본 취업은 **신졸 일괄 채용**입니다 —— 기업은 1년에 한 번만 모집하고 모두 같은 일정으로 움직입니다. 이 페이지는 세 가지를 정리합니다: 언제 시작하는지, 세 관문이 무엇을 보는지, 창구는 어디인지."
   },
   "3cf804": {
    "text": "최근 이벤트"
   },
   "aad43e": {
    "headers": [
     "이벤트",
     "시간",
     "대상"
    ],
    "rows": [
     [
      "업계·기업 연구 페어(2026)",
      "12/2 16:40~",
      "2027/9·2028/3"
     ],
     [
      "형식",
      "Zoom 온라인",
      "주로 일본어(자막 있음)"
     ]
    ]
   },
   "db6bf7": {
    "text": "11개사 참가(쇼코전기·후쿠오카은행·니토리·AGC·NTT데이터·캡콤·라쿠텐카드 등). 주최: **학무부 커리어지원과 092-802-5902**. 자세한 내용은 공식 발표를 따르세요."
   },
   "4decce": {
    "text": "일본 취업활동의 특징"
   },
   "504b9c": {
    "items": [
     {
      "text": "**신졸 일괄 채용**: 졸업 연도별로 한꺼번에 모집, 재학 중에 결정."
     },
     {
      "text": "**4월 입사**: 3월 졸업·4월 1일 입사. 거의 모든 업계가 동시."
     },
     {
      "text": "**포텐셜 채용**: 입사 전 즉전력은 요구하지 않고 성장 가능성을 봅니다."
     },
     {
      "text": "**멤버십형 고용**: 직무·근무지·시간을 한정하지 않고 「종합직」으로 채용."
     }
    ]
   },
   "1e230b": {
    "text": "일본 기업은 외국인 유학생을 **일본인 학생과 같은 기준**으로 선발합니다. 일계·외자계 모두 같습니다. 「외국인 전용 루트」는 없습니다."
   },
   "8523d8": {
    "text": "일정: 연 1회"
   },
   "7bcd01": {
    "headers": [
     "단계",
     "시기",
     "할 일"
    ],
    "rows": [
     [
      "준비",
      "본격 시작 5개월 전",
      "자기분석·업계 연구"
     ],
     [
      "여름 인턴",
      "7~9월",
      "일찍 기업과 접점"
     ],
     [
      "응모·설명회",
      "3~5월",
      "지원·설명회 참가"
     ],
     [
      "ES·필기",
      "3~6월",
      "작문·SPI"
     ],
     [
      "면접",
      "6월~",
      "1사 2~3회"
     ],
     [
      "내정",
      "6월~(정식 10월)",
      "결정 후 대학에 보고"
     ]
    ]
   },
   "cfc60c": {
    "text": "시작은 **최종 학년 전년도 3월 1일**(학부 3년·석사 1년·박사 2년), 6월 중순 종료. 약 4개월이며 **이 해를 놓치면 만회가 어렵습니다**."
   },
   "0d5661": {
    "text": "3가지 전형 단계"
   },
   "27c2f5": {
    "headers": [
     "관문",
     "묻는 것",
     "유학생의 벽"
    ],
    "rows": [
     [
      "서류 선고",
      "글자수 지정 ES 작문",
      "가장 힘들어하는 사람이 많음"
     ],
     [
      "적성검사·필기",
      "SPI 등(일본어 출제)",
      "난도는 낮지만 속도 필요"
     ],
     [
      "면접",
      "GD·그룹·개인",
      "1사 2~3회, 표현력 평가"
     ]
    ]
   },
   "8476b7": {
    "text": "ES에서는 「지원 동기」「학창시절 가장 노력한 일」을 씁니다. **유학생은 일본어 작문에서 막히기 쉽습니다.** 대학의 **진로·취업 어드바이저**에게 첨삭을 받을 수 있습니다."
   },
   "40bdee": {
    "text": "내정 후 두 가지 수속"
   },
   "ffe405": {
    "items": [
     {
      "text": "**재류자격 변경**: 「유학」에서 취업 가능한 자격으로 변경."
     },
     {
      "text": "**대학에 보고**: 진로 확정 후 소속 부국에 보고. 시스템으로도 가능."
     }
    ]
   },
   "14b0cf": {
    "text": "공식 입구와 창구"
   },
   "082260": {
    "items": [
     {
      "text": "학무부 학생지원과 커리어지원실(유학생 취업지원 담당)"
     },
     {
      "text": "센터 1호관 2층·2번 창구(이토 캠퍼스)"
     },
     {
      "text": "TEL 092-802-5902"
     },
     {
      "text": "Email q-ssc@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "bd6778": {
    "items": [
     {
      "text": "일본에서의 취업활동(공개·먼저 이 페이지)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"
     },
     {
      "text": "졸업 후 진로 상황(과거 실데이터)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"
     },
     {
      "text": "외국인 유학생을 위한 취업지원(총 입구)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"
     },
     {
      "text": "교내 취업 이벤트(SSO 로그인 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"
     },
     {
      "text": "교외 취업 이벤트(SSO 로그인 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"
     },
     {
      "text": "구인 정보(SSO 로그인 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"
     },
     {
      "text": "인턴십(SSO 로그인 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"
     },
     {
      "text": "취업 체험기(SSO 로그인 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"
     },
     {
      "text": "진로·취업 상담(SSO 로그인 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"
     },
     {
      "text": "유학생을 위한 취업 유용 정보(SSO 필요)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"
     },
     {
      "text": "Study in Japan(일본 취업·재류자격)",
      "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"
     }
    ]
   },
   "8a888e": {
    "text": "위 9개 페이지 중 **대부분은 규슈대 SSO 로그인이 필요**합니다(`/ja/internal/` 아래는 교내 페이지). 입학 전에 볼 수 있는 것은 「일본에서의 취업활동」과 「진로 상황」뿐입니다. 페이지가 안 열리는 것은 고장이 아니라 권한 문제입니다."
   }
  }
 }
};
})();
