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
    "text": "博士課程に進む予定で、教授の退職により修了が延びたり指導教員が変わったりすることが心配なら、事前にそれとなく状況を確認しておくとよいでしょう。その後の指導に影響するかどうかは、教授と直接会って確認するのがいちばん確実です。"
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
      "text": "健康支援センター：ビッグさんど 2 階。心理・健康の相談"
     },
     {
      "text": "留学生相談室（ISC）：イースト1号館 B540。履修、住居、病気、育児など、指導教員には話しにくいことも"
     },
     {
      "text": "キャンパスヘルスサポートルーム：イースト1号館2階 E-B-202。対人関係、生活上の合理的配慮など"
     },
     {
      "text": "マルチリンガル交流スペース（EZぷらっと）：イースト1号館2階 E-C-202。留学支援、語学学習、書籍・DVD の貸出"
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
    "text": "If you plan to pursue a doctorate and worry that a supervisor’s retirement might delay your graduation or force a change of supervisor, it is worth quietly finding out where things stand beforehand. Whether it affects your supervision arrangements is best confirmed by talking to the professor in person."
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
    "text": "박사과정을 생각하고 있고 교수의 퇴직으로 졸업이 늦어지거나 지도교수가 바뀔까 걱정된다면, 미리 상황을 넌지시 알아보는 것이 좋습니다. 이후 지도에 영향이 있는지는 교수와 직접 만나 확인하는 것이 가장 확실합니다."
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
  },
  "es": {
   "333750": {
    "text": "Reconocimientos médicos y ventanillas dentro de la universidad"
   },
   "742187": {
    "text": "Exención de matrícula"
   },
   "444ca9": {
    "text": "Organizado por: cuentas y certificados → selección de cursos y clases → investigación y estudios de posgrado → becas y exenciones."
   },
   "cc1cac": {
    "text": "Cuentas y certificados"
   },
   "3b7366": {
    "text": "La activación de SSO-KID no se puede hacer con un correo distinto al de la universidad. El certificado de notas, el certificado de matrícula, el certificado de descuento de estudiante para el Shinkansen（新幹線学割）y otros se solicitan a través de la página de certificados (certificate) del sitio oficial de Kyushu University; los certificados de los estudiantes de posgrado se tramitan en ku-cert."
   },
   "5ed19b": {
    "items": [
     {
      "text": "Certificados de Kyushu University (notas, matrícula, descuentos, etc.)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "Certificados de estudiantes de posgrado (ku-cert)",
      "url": "https://ku-cert.kyushu-u.ac.jp/cert/z/c_menu.html/_/g"
     },
     {
      "text": "Sistema de selección de cursos (JTC)",
      "url": "https://jlc.kyushu-u.ac.jp/JTCsi/page/placement/ButtonPlacement.aspx"
     },
     {
      "text": "Correo de la universidad (Outlook, iniciar sesión con la cuenta de la universidad)",
      "url": "https://outlook.office.com/mail/"
     },
     {
      "text": "Contraseña/cuenta SSO (passchg)",
      "url": "https://ci.iii.kyushu-u.ac.jp/m/"
     }
    ]
   },
   "c8db3c": {
    "text": "Algunas instalaciones (como las externas frente a la estación Hakata) requieren reserva para poder entrar; los estudiantes que no son de QBS también pueden entrar, aunque en ocasiones como las sesiones informativas puede resultar incómodo intervenir. Las plazas de aparcamiento se solicitan a través del sistema car-entry."
   },
   "ad0d60": {
    "items": [
     {
      "text": "Guía de instalaciones externas de Hakata",
      "url": "https://www.kyushu-u.ac.jp/ja/university/facility/external/hakata/guide/"
     },
     {
      "text": "Solicitud de plazas de aparcamiento de la universidad",
      "url": "https://car-entry.cargate.kyushu-u.ac.jp/reg_apply/"
     },
     {
      "text": "Gestión de la tarjeta de puntos Rakuten（楽天ポイントカード）",
      "url": "https://pointcard.rakuten.co.jp/"
     }
    ]
   },
   "c8e67d": {
    "text": "Selección de cursos y clases"
   },
   "e254fb": {
    "text": "La selección de cursos suele empezar en la primera o segunda semana del nuevo semestre (aproximadamente del 4/8 al 4/10; consulta el aviso oficial de la universidad). JTW es un sistema de cursos independiente; la universidad avisa por correo a quienes cumplan los requisitos."
   },
   "b1a9b5": {
    "text": "La lista de libros de texto suele publicarse recién en la primera clase, así que conviene pensar con antelación en cómo comprarlos; también se pueden conseguir de segunda mano de los estudiantes de cursos superiores. Los doctorandos pueden asistir a los cursos de japonés del Centro de Estudiantes Internacionales (ISC); consulta la página del ISC."
   },
   "9ce243": {
    "items": [
     {
      "text": "Cursos de japonés del ISC",
      "url": "https://isc.kyushu-u.ac.jp/center/international/japaneselang/"
     }
    ]
   },
   "4d947b": {
    "text": "Kyushu University ofrece **una gran cantidad de asignaturas impartidas en inglés**. Para los estudiantes de intercambio del año 2026 hay una lista aparte de asignaturas a las que pueden asistir; si quieres evitar las clases en japonés, consulta primero esa lista."
   },
   "d13843": {
    "items": [
     {
      "text": "Lista de asignaturas impartidas en inglés (página en japonés)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/english"
     },
     {
      "text": "Courses Conducted in English (página en inglés)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/en/student/english"
     }
    ]
   },
   "f9e37c": {
    "text": "Investigación y estudios de posgrado"
   },
   "5b832c": {
    "text": "¿Es necesario contactar antes con el profesor para ingresar directamente en Kyushu University?"
   },
   "acc4f9": {
    "text": "Sí. **Primero hay que contactar con el profesor** y confirmar que está dispuesto a aceptarte, y después presentarse al examen. Esto depende de si el profesor acepta estudiantes extranjeros y de si el laboratorio tiene plazas: incluso si apruebas el examen, sin plaza puede ser imposible ingresar. Las calificaciones de la licenciatura no son el único factor; lo que cuenta sobre todo es el criterio del profesor. Algunos programas de informática no exigen el consentimiento previo del profesor（内諾）, pero aun así se recomienda contactar con antelación para confirmarlo."
   },
   "6be666": {
    "text": "El profesor tutor está próximo a jubilarse"
   },
   "406f13": {
    "text": "Si piensas hacer un doctorado y te preocupa que la jubilación del profesor retrase tu graduación o te obligue a cambiar de tutor, puedes informarte con antelación de forma indirecta sobre la situación del profesor. La forma más directa de saber si esto afectará a la supervisión posterior es hablarlo en persona con el profesor."
   },
   "3668c3": {
    "text": "Research Student (estudiante de investigación, 研究生)"
   },
   "93d2c1": {
    "text": "La experiencia depende en gran medida del estilo del profesor: unos guían todo el tiempo en inglés y son exigentes; otros son más flexibles y dejan que aprendas por tu cuenta. Las horas de presencia en el laboratorio son una norma interna del laboratorio; asistir puntualmente es el requisito básico. Los detalles se pueden preguntar al profesor o a los estudiantes de cursos superiores."
   },
   "eedeaa": {
    "text": "Referencia para la preparación: cada especialidad es distinta; puedes inscribirte y presentarte una vez para conocer el formato de las preguntas y los requisitos, y prepararte en consecuencia."
   },
   "14676e": {
    "text": "Becas y exenciones"
   },
   "fbd83d": {
    "text": "El RA (asistente de investigación) de Kyushu University sigue un estándar unificado para toda la universidad; según los comentarios, en el Departamento de Matemáticas ronda los 44,000 円/月 (valor orientativo; puede variar según el departamento y el año). Para solicitar el RA hace falta un tema de investigación adecuado; no todo el mundo puede obtenerlo y la competencia es bastante fuerte. Las publicaciones que muestran ingresos en internet no representan el nivel general; sirven solo como referencia."
   },
   "853a53": {
    "text": "Becas para estudiantes internacionales autofinanciados"
   },
   "b6950e": {
    "text": "Para las becas que pueden solicitar los estudiantes internacionales autofinanciados, la fuente más autorizada es el «tablón de anuncios de becas para estudiantes internacionales autofinanciados»（私費留学生奨学金公示板）del Centro de Estudiantes Internacionales (ISC), que se actualiza continuamente con las convocatorias vigentes. Los períodos de solicitud suelen ser cortos; se recomienda consultarlo con regularidad y confirmar cuanto antes las condiciones y las fechas límite."
   },
   "066616": {
    "items": [
     {
      "text": "Tablón de becas para estudiantes internacionales autofinanciados del ISC (último año)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang=jp"
     }
    ]
   },
   "c3f0b4": {
    "text": "Normalmente se solicita iniciando sesión en campusweb (el procedimiento se explica en «Trámites de estancia · solicitud de acceso a campus»); el período de solicitud sigue el aviso oficial de la universidad."
   },
   "e248db": {
    "text": "Cursos de japonés（日本語コース, JTCs）"
   },
   "7fbb45": {
    "text": "El centro de estudiantes internacionales de Kyushu University ofrece cursos de japonés (Japanese Training Courses). Hay que registrarse en línea dentro del período indicado y presentarse a la prueba de nivel（プレースメントテスト); **si se pierde el plazo de inscripción, no hay forma de registrarse después**."
   },
   "66a59f": {
    "items": [
     {
      "text": "El período de inscripción suele ser la primera semana después del inicio de clases (por ejemplo, del 13 al 18 de abril)"
     },
     {
      "text": "Dirigido a estudiantes de grado, de posgrado y no matriculados en asignaturas regulares（非正課生）"
     },
     {
      "text": "Consulta: intlr-isc@jimu.kyushu-u.ac.jp / 092-802-2228"
     }
    ]
   },
   "32f280": {
    "items": [
     {
      "text": "Página de registro de JTCs",
      "url": "https://isc.kyushu-u.ac.jp/center/jtcs/"
     }
    ]
   },
   "6aab6e": {
    "text": "Además existen los cursos intensivos de japonés（集中日本語コース, Intensive Japanese Courses）, abiertos en el semestre de otoño a todos los estudiantes internacionales (se requieren condiciones como un nivel de japonés suficiente y el permiso del profesor tutor)."
   },
   "c9398a": {
    "text": "Clases de japonés fuera de la universidad（学外の日本語教室, 6 lugares）"
   },
   "714c74": {
    "text": "Los cursos de japonés de Kyushu University son **gratuitos** (ver los enlaces de arriba). Fuera de la universidad hay además 6 clases de voluntarios, con costes que van de gratis a 100 円 por sesión; para practicar la conversación cotidiana y conocer a gente local son más adecuadas que las clases dentro del campus. La mayoría requieren contactar antes por correo."
   },
   "f627ad": {
    "headers": [
     "Clase",
     "Ubicación",
     "Horario",
     "Coste"
    ],
    "rows": [
     [
      "Círculo Internacional de Ito（伊都インターナショナルサークル）",
      "Campus Ito, West4",
      "木 17:30〜20:00",
      "cuota de entrada 500 円"
     ],
     [
      "Hiroba de japonés Itoshima（日本語ひろば いとしま）",
      "Centro de Derechos Humanos de Itoshima（糸島市人権センター）",
      "Consulta necesaria",
      "100 円 por sesión"
     ],
     [
      "Hiroba de intercambio internacional Motooka（元岡国際交流ひろば）",
      "centro cívico Motooka（元岡公民館）",
      "水 18:30〜20:00",
      "Gratis"
     ],
     [
      "Global Friendship",
      "Centro Internacional de la ciudad de Fukuoka, 4F（福岡市国際会館 4F）",
      "Consulta necesaria",
      "100 円 por sesión"
     ],
     [
      "かすが・にほんごひろば",
      "クローバープラザ 3F",
      "Consulta necesaria",
      "600 円 al mes"
     ],
     [
      "Yorutomo-kai de Kashii-hama（香椎浜 よるとも会）",
      "escuela primaria Kashii-hama（香椎浜小学校）",
      "Consulta necesaria",
      "Gratis"
     ]
    ]
   },
   "0d6cf9": {
    "items": [
     {
      "text": "Círculo Internacional de Ito（伊都インターナショナルサークル）090-8764-9588",
      "url": "mailto:hatae_iic@yahoo.co.jp"
     },
     {
      "text": "Hiroba de japonés Itoshima（日本語ひろば いとしま）092-322-5095",
      "url": "mailto:nihongoitoshima@gmail.com"
     },
     {
      "text": "Hiroba de intercambio internacional Motooka（元岡国際交流ひろば）— consulta por correo",
      "url": "mailto:motookahiroba@gmail.com"
     },
     {
      "text": "Global Friendship 090-5727-9925",
      "url": "mailto:globalfriendshipnihongo@gmail.com"
     },
     {
      "text": "Hiroba de japonés Kasuga（かすが・にほんごひろば）080-6441-0763",
      "url": "mailto:fk.kasuga.nihongo@gmail.com"
     },
     {
      "text": "Yorutomo-kai de Kashii-hama（香椎浜 よるとも会）090-5921-7798",
      "url": "mailto:tomoikifukuoka@gmail.com"
     }
    ]
   },
   "048da7": {
    "text": "Reconocimiento médico"
   },
   "9bf76b": {
    "text": "Cada año, en abril y octubre, hay un reconocimiento médico periódico (normalmente en el 2.º piso del Big Sando（ビッグさんど）). Tras la revisión se puede expedir gratuitamente el certificado de reconocimiento médico（健康診断書）. Si hay conflicto de fechas, se puede cambiar la cita."
   },
   "1a0232": {
    "text": "**Sin haberse sometido al reconocimiento, no se puede expedir el certificado de reconocimiento médico.** Lo necesitarás para solicitar becas y para encontrar trabajo; asegúrate de asistir."
   },
   "0c0390": {
    "text": "Retirada de certificados: los estudiantes de cursos regulares usan las **máquinas expendedoras automáticas**; los research students y los estudiantes de intercambio las solicitan en el **Centro de Apoyo a la Vida en el Campus y a la Salud**（キャンパスライフ・健康支援センター）de cada campus, gratis."
   },
   "c29b18": {
    "text": "Lista de ventanillas de consulta"
   },
   "ac541e": {
    "items": [
     {
      "text": "Centro de Apoyo a la Salud（健康支援センター）: 2.º piso del Big Sando; consultas psicológicas y de salud"
     },
     {
      "text": "Oficina de consultas para estudiantes internacionales (ISC): B540; asignaturas, vivienda, enfermedades, cuidado de niños y asuntos que resultan incómodos de plantear al profesor tutor"
     },
     {
      "text": "Sala de apoyo de salud del campus（キャンパスヘルスサポートルーム）: E-B-202; relaciones interpersonales y adaptaciones en la vida diaria"
     },
     {
      "text": "Espacio de intercambio multilingüe (EZ Puratto, マルチリンガル交流スペース): E-C-202; apoyo a estudios en el extranjero, idiomas y préstamo de materiales"
     },
     {
      "text": "Oficina de asuntos académicos（教務課）: Edificio East 1, C108; registro de asignaturas, certificados y expediente académico"
     },
     {
      "text": "Oficina de asuntos estudiantiles（学生課）: Edificio East 1, C108; descuento de estudiante para transporte（定期学割）, reemisión de la tarjeta de estudiante y diversas solicitudes"
     },
     {
      "text": "Centro de apoyo（サポートセンター）: Edificio East 1, C108; visado, información sobre hospitales, vivienda, clases de japonés, etc."
     }
    ]
   },
   "b41e84": {
    "text": "Oficina de prevención del acoso（ハラスメント対策推進室）: ventanilla de consulta y denuncia sobre acoso (acoso sexual, acoso académico y abuso de poder)."
   },
   "e6e7d1": {
    "items": [
     {
      "text": "Guía del Centro de Apoyo a la Salud (PDF en chino)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_chinese_2026.pdf"
     },
     {
      "text": "Ídem (versión en inglés)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_english_2026.pdf"
     },
     {
      "text": "Ídem (versión en japonés)",
      "url": "https://chc.kyushu-u.ac.jp/@@supportx//wp-content/uploads/2026/05/brochure_japanese_2026.pdf"
     },
     {
      "text": "Reconocimiento médico periódico de estudiantes (página oficial)",
      "url": "https://chc.kyushu-u.ac.jp/student/health_check/"
     }
    ]
   },
   "9e1128": {
    "text": "Contactos por facultad e instituto（部局別問い合わせ先）"
   },
   "7b2c1e": {
    "items": [
     {
      "text": "Humanidades y Sociedad Global（人文・地球社会）: jbkkyomu1lt@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Entorno Humano y Educación（人環・教育）: jbkkyomu1ed@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Derecho: jbkkyomu2la@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Economía: jbkkyomu2ec@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Oficina de asuntos estudiantiles（学生係）: jbggakusei@jimu.kyushu-u.ac.jp"
     }
    ]
   },
   "f40f04": {
    "text": "Calendario académico: confirma la versión aplicable"
   },
   "f8719f": {
    "headers": [
     "Período",
     "Año académico 2026"
    ],
    "rows": [
     [
      "Semestre de primavera",
      "04-08 ～ 06-09"
     ],
     [
      "Semestre de verano",
      "06-10 ～ 08-07"
     ],
     [
      "Semestre de otoño",
      "10-01 ～ 12-06"
     ],
     [
      "Semestre de invierno",
      "12-07 ～ 02-15"
     ],
     [
      "Vacaciones de primavera",
      "04-01 ～ 04-07"
     ],
     [
      "Vacaciones de verano",
      "08-08 ～ 09-30"
     ],
     [
      "Vacaciones de invierno",
      "12-26 ～ 01-04"
     ]
    ]
   },
   "92c5cc": {
    "text": "Ceremonia de ingreso: 04-03 (otoño: 10-02) · entrega de diplomas: 03-25 (otoño: 09-25) · festival Kyudai（九大祭）: 10-30 – 11-02."
   },
   "828e4c": {
    "text": "**Este es el calendario estándar unificado de toda la universidad; puede diferir según la escuela de posgrado o la facultad** — así lo señala la propia página oficial. Antes de reservar vuelos de vuelta a casa, exámenes o prácticas, vuelve a confirmarlo en el sitio web de tu propia facultad; no uses el calendario de la Facultad de Ingeniería para planificar asuntos de otra facultad."
   },
   "acd972": {
    "items": [
     {
      "text": "Kyushu University · calendario académico (toda la universidad)",
      "url": "https://www.kyushu-u.ac.jp/ja/faculty/schedule/"
     }
    ]
   },
   "1240ad": {
    "text": "Cómo solicitar certificados"
   },
   "7d38ec": {
    "text": "El certificado de matrícula（在学証明）, el certificado de notas, el certificado de finalización prevista de estudios（卒業/修了見込証明）y otros se tramitan a través del portal de emisión de certificados de la universidad. Algunos se pueden imprimir por cuenta propia en las **máquinas expendedoras automáticas del campus** (ver más abajo)."
   },
   "8d720b": {
    "text": "Máquinas expendedoras automáticas (8:30〜17:15)"
   },
   "7ddd0f": {
    "text": "El certificado de matrícula（在学証明書）, el certificado de desplazamiento（通学証明書）, el certificado de descuento de estudiante（学割証）y el certificado de reconocimiento médico（健康診断証明書）se pueden imprimir por cuenta propia, **sin hacer cola**. Ojo: **solo pueden usarlas los estudiantes de cursos regulares**; los research students y los estudiantes de intercambio deben acudir a su ventanilla correspondiente."
   },
   "9dc610": {
    "headers": [
     "Campus",
     "Ubicación"
    ],
    "rows": [
     [
      "Ito",
      "Edificio Center 1, 2F"
     ],
     [
      "Ito",
      "Edificio East 1, Bloque C, 1F"
     ],
     [
      "Ito",
      "Edificio West 1, Bloque A, 3F"
     ],
     [
      "Ito",
      "Edificio West 4, 2F"
     ],
     [
      "Ito",
      "Edificio West 5 Este, 3F"
     ],
     [
      "Chikushi",
      "entrada de la tienda del Vista Hall（ビスタホール売店入口）"
     ],
     [
      "Ohashi",
      "edificio administrativo de la Facultad de Diseño（芸術工学部管理棟）, 1F"
     ],
     [
      "Hospital（病院）",
      "Edificio de Investigación Básica, Bloque A, 1F"
     ]
    ]
   },
   "d2ae99": {
    "items": [
     {
      "text": "Kyushu University · emisión de certificados",
      "url": "https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/"
     },
     {
      "text": "ISC · guía de vida diaria para estudiantes internacionales",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-019"
     }
    ]
   },
   "35d880": {
    "text": "RA (ayudante de investigación)"
   }
  }
 },
 "guide-antifraud": {
  "ja": {
   "aa3847": {
    "text": "本稿の目的は、不審な状況に遭ったときの対処法を知ることです。最優先事項は2つ——振り込まないこと、個人情報を教えないことです。何かあれば、直ちに文末の最初の電話番号へ連絡してください。"
   },
   "52ec55": {
    "text": "⚠️ 留学を始めたばかりの方は、ぜひ先にこの記事を通読してください。詐欺グループの手口は巧妙で、高学歴の人でも騙されることがあります。「慌てない・信じない・金を出さない」を徹底すれば、ほとんどの詐欺を回避できます。"
   },
   "094ae5": {
    "text": "一、よくある詐欺の類型"
   },
   "011c4f": {
    "text": "1. 大使館・領事館／公安・検察・裁判所を名乗る詐欺"
   },
   "049994": {
    "text": "手口：電話で「中国大使館／領事館」を名乗り、「重要書類の未受取」「旅券の異常」「事件の調査」などと言う。転送された「国内の公安局／検察院」からは「資金洗浄（マネーロンダリング）の容疑」をかけられ、Signal／Webex／Skype などの暗号化アプリのダウンロードと「遠隔ビデオ取調べ」を要求される。偽造した警察手帳や公文書を見せて「保釈金」「取保候審の保証金」を要求し、「応じなければ国外退去・送還する」と脅す。"
   },
   "a49a0e": {
    "text": "見分け方：①中国の在外大使館・領事館が電話で「事件に関与している」と通知することはありません。②中国国内の公安・検察・裁判所が電話や WeChat、QQ で国境を越えた捜査を行うことはありません。③振込・送金や通信アプリのダウンロードを要求することも絶対にありません。④発信番号は偽装（改ざん）できるため、表示が「公安局」でも信頼できません。"
   },
   "a1f761": {
    "text": "2. 両替詐欺（留学生に多い）"
   },
   "72ad22": {
    "text": "手口：WeChat グループで「格安両替」「至急、円が必要」と書き込む。偽造した振込画面のスクリーンショットを見せて先に振り込ませる。「ABC 詐欺」では、詐欺師 A が人民元の支払い役、B が円の支払い役を装い、両方に同時に振り込ませた後に姿を消す。「仲介者」を装って両側から騙し取る手口もある。"
   },
   "edaa9e": {
    "text": "見分け方：両替は銀行などの正規ルートだけを利用してください。WeChat グループ内の見知らぬ人の両替情報は、すべて不審なものとみなしてください。先に振り込んでから受け取る方法は絶対に避けてください。「レートが異常に良い」両替は、ほぼ詐欺です。"
   },
   "3a818c": {
    "text": "3. 大学・教授を名乗る詐欺"
   },
   "adabc1": {
    "text": "手口：大学を装ってメールを送り「学費・登録料」の支払いを要求する。教授を名乗ってギフトカードの代理購入や代理振込を依頼する。システムの脆弱性を利用して教授のメールアドレスを偽装する。"
   },
   "b41808": {
    "text": "見分け方：大学がメールや電話で銀行の暗証番号や即時振込を求めることは絶対にありません。教授から突然代理購入を頼まれたら、直接会うか電話で教授本人に確認してください。送信元のメールアドレスが本当に大学のドメインかも確認してください。"
   },
   "d246ca": {
    "text": "4. SMS・リンクを使ったフィッシング詐欺"
   },
   "e1d74f": {
    "text": "手口：「賃貸契約の保証金」「ETC の有効期限切れ」「荷物の滞留」などと SMS にリンクを添付して支払いを求める。配送業者・郵便局・電力会社を装ってリンクを送ってくる。"
   },
   "ffd258": {
    "text": "見分け方：リンクを送って支払わせるのはすべて詐欺です。日本の正規の支払い方法は、コンビニ決済、銀行振込、口座自動引き落としです。不確かな場合は公式の電話番号に確認し、リンクはクリックしないでください。"
   },
   "8eed64": {
    "text": "5. 仮想誘拐"
   },
   "b25888": {
    "text": "手口：詐欺師はまず留学生を外部と連絡できない状態にし、その間に国内の家族に「誘拐された」と連絡して身代金を要求する。情報の行き違いを利用した恐喝です。"
   },
   "a3c952": {
    "text": "見分け方：「子どもが誘拐された」という連絡を受けたら、すぐに駐在の大使館・領事館に連絡して確認してください。「家族に連絡してはいけない」と要求するのは、すべて詐欺です。"
   },
   "9f1d78": {
    "text": "6. 注文代行を装うアルバイト詐欺"
   },
   "aa1237": {
    "text": "手口：WhatsApp や WeChat で「高収入・簡単」をうたうアルバイトのグループに招待する。まず商品代金の立て替え払いや商品購入を求める。最初は少額の報酬を返し、その後、高額を支払わせてから資金を持ち逃げする。"
   },
   "2cd15e": {
    "text": "見分け方：先に金を払わせるアルバイトはすべて詐欺です。在留カードには資格外活動の許可範囲が記載されており、超高額報酬の「アルバイト」はそもそも違法です。身に覚えのない WhatsApp グループはすぐに退会し、通報してください。"
   },
   "55891a": {
    "text": "7. コンビニでのギフトカード詐欺"
   },
   "041a81": {
    "text": "手口：警察・大使館・技術者を名乗り、「口座確認」「凍結解除」を理由に、コンビニで高額のギフトカード（Vプリカ／Apple Gift Card など）を購入させ、カード番号とパスワードを伝えさせる。"
   },
   "1449d2": {
    "text": "見分け方：どのような正規の機関でも、口座確認や支払いのためにギフトカードの購入を求めることはありません。コンビニの店員が注意を促すこともありますが、いつも止められるとは限りません。"
   },
   "8eecc1": {
    "text": "8. 訪問販売・電力会社の切り替え勧誘"
   },
   "584b05": {
    "text": "手口：電力会社や通信会社の社員を名乗って訪問し、「会社を乗り換えると安くなります」と言って個人情報を騙し取ったり、高額なプランへの契約を迫ったりする。"
   },
   "ccc44b": {
    "text": "見分け方：訪問販売の勧誘は、そもそも割に合わないことが多いです。その場で契約せず、「必要ありません」と伝えてドアを閉めてください。本当の会社が予告なく訪問することはありません。"
   },
   "3743ca": {
    "text": "二、詐欺防止の基本原則"
   },
   "daa01e": {
    "items": [
     {
      "title": "慌てない・信じない・金を払わない",
      "desc": ""
     },
     {
      "title": "公安・検察・裁判所や大使館・領事館を名乗る電話で振込を求められたら、すぐに切る",
      "desc": ""
     },
     {
      "title": "「秘密に」「家族や友人には言わないで」と要求するのは、必ず詐欺",
      "desc": ""
     },
     {
      "title": "不確かなら電話で確認する。大使館の公式サイトで公開されている領事保護ホットラインへ。相手から教えられた番号にはかけない",
      "desc": ""
     }
    ]
   },
   "0252c5": {
    "text": "日頃の対策：知らない番号からの電話には応答せず、録音が流れたらすぐに切る。大使館・領事館や公安を名乗る電話は、一度切ってから公式サイトの番号を自分で調べてかけ直す。WeChat グループ内の両替情報には返信せず、個別に連絡もとらない。リンク付き SMS はクリックしない。ギフトカードの購入を求められたら100%詐欺なので、すぐに会話を終える。大学・教授を名乗るメールで振込を求められたら、直接会うか電話で確認する。訪問販売はドアを開けず、「必要ありません」と言って閉める。"
   },
   "2f22d1": {
    "text": "三、日頃の対策 早見表"
   },
   "02de93": {
    "headers": [
     "場面",
     "対処法"
    ],
    "rows": [
     [
      "知らない番号からの電話",
      "応答せず、録音が流れたらすぐに切る"
     ],
     [
      "大使館・領事館や公安を名乗る",
      "一度切って、公式サイトの番号へかけ直して確認する"
     ],
     [
      "見知らぬ人から WeChat／WhatsApp の友達追加",
      "拒否するか、まず身分を確認する"
     ],
     [
      "WeChat グループ内の両替情報",
      "返信せず、個別連絡もとらず、無視する"
     ],
     [
      "リンク付き SMS を受け取った",
      "クリックしない！まず送信元を確認する"
     ],
     [
      "ギフトカードの購入を求められた",
      "100%詐欺なので、すぐに会話を終える"
     ],
     [
      "大学・教授からのメールで振込を求められた",
      "直接会うか電話で確認する"
     ],
     [
      "訪問販売",
      "ドアを開けず、「必要ありません」と言って閉める"
     ]
    ]
   },
   "717d03": {
    "text": "四、騙された後の緊急対応（優先度順）"
   },
   "c06ba5": {
    "items": [
     {
      "title": "すぐに銀行へ連絡する",
      "desc": "振込先口座の銀行に連絡し、支払い停止・口座凍結を依頼します。資金は振り出されると数分で引き出される可能性があるため、早ければ早いほどよいです。"
     },
     {
      "title": "現地の警察に被害届を出す",
      "desc": "日本では 110 番に通報します。チャット履歴、振込記録、相手の情報を証拠として保管してください。"
     },
     {
      "title": "中国国内の家族が被害届を出す",
      "desc": "家族に国内の 110 番へ通報してもらい、通信ネットワーク詐欺対策センターにつないでもらうか、戸籍所在地の公安機関に直接連絡してもらいます。"
     },
     {
      "title": "中国の在外大使館・領事館に連絡する",
      "desc": "公式サイトで領事保護ホットラインを確認します。外交部のグローバル領事保護・サービス緊急ホットライン（24時間）は「緊急連絡」の項目を参照してください。"
     },
     {
      "title": "注意喚起を発信する",
      "desc": "WeChat グループで体験を共有し、他の人が騙されるのを防ぎます。"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 騙されたのはあなたのせいではありません。詐欺グループは専門的な訓練を受けており、高学歴の人も被害に遭っています。取り戻せる可能性は低いですが、被害届を出すことには意味があります（事件の関連付けやグループの追跡につながります）。恥ずかしさで黙り込まないでください。あなたの経験が、他の人の被害を防ぐかもしれません。"
   },
   "3e86de": {
    "text": "五、詐欺を見破るポイント"
   },
   "0125e2": {
    "text": "実際の被害事例とグループチャットの経験から：発信者の訛りの出身地を尋ねる（特定地域の訛りが明らかな場合は、ほぼ詐欺です）。現地の方言や日本語で応答すると、相手がすぐ切ることが多いです。所属する警察署を尋ね、自分で調べた公開電話番号にかけ直して確認します。詐欺師は成約を急いでおり、細かい点を追及されると動揺しやすいです。最も重要なのは銀行情報の保護です——カード番号と暗証番号は厳重に保管してください。"
   },
   "40510e": {
    "items": [
     {
      "text": "中国駐福岡総領事館",
      "url": "https://fukuoka.china-consulate.gov.cn/"
     }
    ]
   }
  },
  "en": {
   "aa3847": {
    "text": "Purpose of this article: to know how to respond when encountering a suspicious situation. Two primary rules - never transfer money, never disclose personal information; after an incident, immediately call the first number at the end of this article."
   },
   "52ec55": {
    "text": "⚠️ New students should read this article in full first: fraud rings use sophisticated methods, and even highly educated people can be caught. Keeping in mind the principle \"stay calm, never believe, give no money when asked\" can avoid the vast majority of scams."
   },
   "094ae5": {
    "text": "I. Common Types of Fraud"
   },
   "011c4f": {
    "text": "1. Impersonating Embassies/Consulates or Police and Judicial Authorities "
   },
   "049994": {
    "text": "Modus operandi: callers claim to be from the Chinese Embassy/Consulate, stating that important documents remain uncollected, that the passport is abnormal, or that an investigation is underway; the call is transferred to a \"domestic Public Security Bureau/Procuratorate\" claiming the victim is suspected of money laundering; victims are told to download encrypted apps such as Signal/Webex/Skype for a \"remote video interrogation\"; forged police IDs and official documents are displayed; victims are asked to pay \"bail\" or \"release-pending guarantee deposits,\" with threats of \"deportation/extradition if the victim does not cooperate.\""
   },
   "a49a0e": {
    "text": "Recognition points: (1) Chinese embassies/consulates abroad never notify anyone by phone of involvement in a case; (2) domestic police and judicial authorities never handle cases across borders by phone/WeChat/QQ; (3) they never ask for transfers or downloads of communication apps; (4) caller numbers can be disguised with number spoofing, so a display of \"police\" is not trustworthy either."
   },
   "a1f761": {
    "text": "2. Currency Exchange Fraud (common among international students)"
   },
   "72ad22": {
    "text": "Modus operandi: WeChat group posts advertise \"low-rate exchange\" or \"urgently need yen\"; forged transfer screenshots are shown to demand payment first; the \"ABC scam\" - scammer A poses as selling RMB and scammer B as selling yen, luring the victim to transfer money to both before disappearing; the \"middleman\" role is used to defraud both sides."
   },
   "edaa9e": {
    "text": "Recognition points: exchange currency only through official bank channels; treat any exchange offer from strangers in WeChat groups as suspicious; never pay first and receive later; exchange offers with \"especially good rates\" are almost always scams."
   },
   "3a818c": {
    "text": "3. Impersonating the University/Professors"
   },
   "adabc1": {
    "text": "Modus operandi: emails impersonating the university demand payment of \"tuition/registration fees\"; people impersonating professors ask others to buy gift cards or transfer money on their behalf; professor email addresses are spoofed through exploited vulnerabilities."
   },
   "b41808": {
    "text": "Recognition points: the university never asks by email or phone for bank passwords or an immediate transfer; when a professor suddenly asks for a purchase, confirm in person or by phone with the professor directly; verify that the sender's email address is truly on the university domain."
   },
   "d246ca": {
    "text": "4. SMS/Link Phishing"
   },
   "e1d74f": {
    "text": "Modus operandi: text messages about \"rental deposits,\" \"ETC expiry,\" \"parcel held\" and similar include links that demand payment; senders impersonate couriers, the post office, or power companies."
   },
   "ffd258": {
    "text": "Recognition points: any message that demands payment via a link is fraud; legitimate payment methods in Japan are convenience store payment, bank transfer (furikomi, 振込), and automatic account deduction; when unsure, call the official number first and do not click links."
   },
   "8eed64": {
    "text": "5. Virtual Kidnapping"
   },
   "b25888": {
    "text": "Modus operandi: scammers first isolate the international student from outside contact, then contact the family at home claiming the student has been kidnapped and demanding ransom, exploiting the information gap to extort money."
   },
   "a3c952": {
    "text": "Recognition points: upon a call that \"the child has been kidnapped,\" immediately contact the Chinese embassy/consulate abroad to verify; any demand to \"not contact family\" is fraud."
   },
   "9f1d78": {
    "text": "6. Click Farming/Part-Time Job Fraud"
   },
   "aa1237": {
    "text": "Modus operandi: WhatsApp/WeChat groups recruit people into \"part-time job groups\" promising high pay and easy work; victims are asked to front the cost of goods or purchase products; small early payouts build trust, then a large sum is taken and the scammers disappear."
   },
   "2cd15e": {
    "text": "Recognition points: any part-time job that asks for money first is a scam; the residence card (在留カード) lists the scope of permitted activities outside one's status, and ultra-high-paying \"jobs\" are not legitimate to begin with; leave unfamiliar WhatsApp groups immediately and report them."
   },
   "55891a": {
    "text": "7. Convenience Store Gift Card Fraud"
   },
   "041a81": {
    "text": "Modus operandi: callers impersonating police, embassies, or technicians claim the need to \"verify an account\" or \"lift a freeze,\" instructing victims to buy large-denomination gift cards at convenience stores (Vプリカ/Apple Gift Card, etc.) and disclose the card number and password."
   },
   "1449d2": {
    "text": "Recognition points: no legitimate organization asks anyone to buy gift cards for verification or payment; convenience store staff sometimes warn customers, but cannot always stop the fraud."
   },
   "8eecc1": {
    "text": "8. Door-to-Door Sales/Switching Power Companies"
   },
   "584b05": {
    "text": "Modus operandi: people posing as power or internet company staff visit homes claiming that \"switching companies is cheaper,\" to obtain personal information or sign victims up for expensive plans."
   },
   "ccc44b": {
    "text": "Recognition points: door-to-door offers are often not a real bargain; do not sign on the spot; say \"I don't need it\" and close the door; legitimate companies do not visit uninvited."
   },
   "3743ca": {
    "text": "II. Core Anti-Fraud Principles"
   },
   "daa01e": {
    "items": [
     {
      "title": "Stay calm, never believe, give no money when asked",
      "desc": ""
     },
     {
      "title": "Any call claiming to be from police or judicial authorities or an embassy that demands a transfer: hang up immediately",
      "desc": ""
     },
     {
      "title": "Any request to \"keep it confidential\" or \"not tell family/friends\" is certainly fraud",
      "desc": ""
     },
     {
      "title": "When unsure, verify by phone: call the consular protection number published on the embassy's official website, not the number the caller provides",
      "desc": ""
     }
    ]
   },
   "0252c5": {
    "text": "Daily prevention: do not answer unfamiliar calls actively, and hang up immediately if the call is recorded; if the caller claims to be from an embassy or the police, hang up and search the official website for the number to call back; do not reply to or privately message exchange offers in WeChat groups; do not click links in text messages; being asked to buy gift cards is 100% fraud - end the conversation immediately; email transfer requests from the university/professors should be confirmed in person or by phone; for door-to-door sales, do not open the door, or say \"not needed\" and close it."
   },
   "2f22d1": {
    "text": "III. Daily Prevention Quick Reference"
   },
   "02de93": {
    "headers": [
     "Situation",
     "Action"
    ],
    "rows": [
     [
      "Receiving an unfamiliar call",
      "Do not answer; hang up immediately if recorded"
     ],
     [
      "Caller claims to be from an embassy/police",
      "Hang up, search the official website for the number, and call back to confirm"
     ],
     [
      "A stranger adding on WeChat/WhatsApp",
      "Refuse, or confirm the identity first"
     ],
     [
      "Exchange offers in WeChat groups",
      "Do not reply, do not message privately, ignore entirely"
     ],
     [
      "Receiving a text message with a link",
      "Do not click! Verify the sender first"
     ],
     [
      "Someone asks to buy gift cards",
      "100% fraud; end the conversation immediately"
     ],
     [
      "University/professor email demands a transfer",
      "Confirm in person or by phone"
     ],
     [
      "Door-to-door sales",
      "Do not open the door, or say \"I don't need it\" and close it"
     ]
    ]
   },
   "717d03": {
    "text": "IV. Emergency Response After Being Defrauded (in order of priority)"
   },
   "c06ba5": {
    "items": [
     {
      "title": "Contact the bank immediately",
      "desc": "Contact the bank that opened the receiving account and request a stop payment and account freeze - funds can be withdrawn within minutes of transfer, so the sooner the better"
     },
     {
      "title": "Report to the local police",
      "desc": "In Japan, call 110; keep chat logs, transfer records, and the other party's information as evidence"
     },
     {
      "title": "Contact family at home to report",
      "desc": "Ask family to call 110 in China and request transfer to the anti-telecom and online fraud center, or call the public security organ of the registered domicile directly"
     },
     {
      "title": "Contact the Chinese embassy/consulate abroad",
      "desc": "Look up the consular protection number on the official website; the Ministry of Foreign Affairs Global Consular Protection and Services Emergency Hotline (24 hours) is listed in the \"Emergency Contacts\" section"
     },
     {
      "title": "Post a warning",
      "desc": "Share the experience in WeChat groups to prevent more people from being defrauded"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 Being defrauded is not the victim's fault - fraud rings are professionally trained, and victims include highly educated people. The chance of recovering the money is small, but reporting still has value (cases can be linked and the ring tracked down); do not stay silent out of shame - the experience may help others avoid the same trap."
   },
   "3e86de": {
    "text": "V. Key Points for Recognizing Fraud"
   },
   "0125e2": {
    "text": "Drawn from real cases and group chat experience: directly ask about the origin of the caller's accent (a marked accent from a certain region is often fraud); respond in the local dialect or Japanese, and the caller often hangs up immediately; ask which police station the caller belongs to, then search online for the publicly listed number and call back to verify; fraudsters are eager to close the deal and tend to lose composure when pressed for details. The most critical point is protecting banking information - keep card numbers and passwords safe."
   },
   "40510e": {
    "items": [
     {
      "text": "Consulate-General of the People's Republic of China in Fukuoka",
      "url": "https://fukuoka.china-consulate.gov.cn/"
     }
    ]
   }
  },
  "ko": {
   "aa3847": {
    "text": "이 문서의 목적은 수상한 상황에서 어떻게 대처해야 하는지 알려 주는 것입니다. 가장 중요한 두 가지 — 송금하지 않기, 개인정보를 알려 주지 않기. 사건 발생 후에는 문서 끝의 첫 번째 전화번호로 즉시 전화합니다."
   },
   "52ec55": {
    "text": "⚠️ 유학을 처음 시작하는 분은 반드시 이 글을 먼저 읽어 주십시오. 사기 조직의 수법은 정교해서 고학력자도 당할 수 있습니다. \"당황하지 말고, 끝까지 믿지 말고, 돈을 요구하면 주지 않는다\"를 명심하면 대부분의 사기를 피할 수 있습니다."
   },
   "094ae5": {
    "text": "1. 주요 사기 유형"
   },
   "011c4f": {
    "text": "1. 대사관·영사관/공안·검찰·법원 사칭 "
   },
   "049994": {
    "text": "수법: 전화로 \"중국 대사관/영사관\"을 사칭하며 중요한 서류를 찾아가지 않았다, 여권에 이상이 있다, 사건 조사에 연루되었다고 말하고, \"중국 내 공안/검찰\"로 연결해 돈세탁 혐의가 있다고 주장합니다. Signal/Webex/Skype 등 암호화 앱 설치를 요구하며 \"원격 화상 심문\"을 진행하고, 위조된 경찰 신분증과 공문을 보여 줍니다. \"보석금\", \"보석 보증금\"을 납부하라고 요구하며 \"협조하지 않으면 추방/인도된다\"고 협박합니다."
   },
   "a49a0e": {
    "text": "구별 포인트: ①주재 대사관·영사관은 전화로 사건 연루를 통보하지 않습니다. ②중국 내 공안·검찰·법원은 전화/위챗/QQ로 국경을 넘는 수사를 하지 않습니다. ③절대 송금이나 통신 앱 다운로드를 요구하지 않습니다. ④발신 번호는 번호 변조기로 위장할 수 있으므로 \"공안\"으로 표시되어도 믿을 수 없습니다."
   },
   "a1f761": {
    "text": "2. 환전 사기 (유학생에게 빈번)"
   },
   "72ad22": {
    "text": "수법: 위챗 단체 대화방에 \"저렴한 환전\", \"엔화 급구\" 글을 올리고, 위조된 송금 스크린샷을 보여 주며 먼저 돈을 송금하라고 요구합니다. \"ABC 사기\" — 사기꾼 A는 위안화, B는 엔화를 내보내는 척하며 양쪽에 동시에 송금하게 유도한 뒤 사라집니다. \"중개인\"을 자처하며 양쪽을 상대로 사기를 칩니다."
   },
   "edaa9e": {
    "text": "구별 포인트: 환전은 은행의 정식 채널로만 합니다. 위챗 단체 대화방에서 모르는 사람이 올린 환전 정보는 모두 의심스러운 것으로 간주합니다. 절대 먼저 돈을 보내지 않습니다. \"환율이 특히 좋은\" 환전은 거의 대부분 사기입니다."
   },
   "3a818c": {
    "text": "3. 학교/교수 사칭"
   },
   "adabc1": {
    "text": "수법: 학교를 사칭해 \"학비/등록비\"를 내라고 이메일을 보내고, 교수를 사칭해 기프트 카드 대신 구매나 대신 송금을 요구하며, 취약점을 이용해 교수의 이메일 주소를 도용합니다."
   },
   "b41808": {
    "text": "구별 포인트: 학교는 이메일이나 전화로 은행 비밀번호를 요구하거나 즉시 송금을 요구하지 않습니다. 교수가 갑자기 대신 구매를 부탁하면 → 직접 만나거나 전화로 교수 본인에게 확인합니다. 발신자 이메일 주소가 실제로 학교 도메인인지 확인합니다."
   },
   "d246ca": {
    "text": "4. 문자/링크 피싱"
   },
   "e1d74f": {
    "text": "수법: \"집 임대 보증금\", \"ETC 만료\", \"택배 보관\" 등 문자에 링크를 첨부해 돈을 내게 합니다. 택배/우체국/전력 회사를 사칭해 링크를 보내기도 합니다."
   },
   "ffd258": {
    "text": "구별 포인트: 링크를 보내며 결제를 요구하는 것은 모두 사기입니다. 일본의 정식 결제 방식은 편의점 결제, 은행 송금(振込), 계좌 자동이체입니다. 확실하지 않으면 먼저 공식 전화로 확인하고 링크를 클릭하지 마십시오."
   },
   "8eed64": {
    "text": "5. 가상 납치"
   },
   "b25888": {
    "text": "수법: 사기꾼이 먼저 유학생을 통제해 외부와 격리시킨 뒤, 본국 가족에게 연락해 납치당했다며 몸값을 요구합니다. 정보의 차이를 이용한 갈취 수법입니다."
   },
   "a3c952": {
    "text": "구별 포인트: \"아이가 납치당했다\"는 연락을 받으면 → 즉시 주재 대사관·영사관에 연락해 확인합니다. \"가족에게 연락하지 말라\"고 요구하는 것은 모두 사기입니다."
   },
   "9f1d78": {
    "text": "6. 리뷰 조작/아르바이트 사기"
   },
   "aa1237": {
    "text": "수법: WhatsApp/위챗으로 \"아르바이트 모임\"에 초대해 고액에 간단하다고 합니다. 먼저 상품 대금을 대신 내거나 상품을 구매하라고 요구하고, 초기에는 소액을 돌려주다가 → 큰 금액을 받은 뒤 잠적합니다."
   },
   "2cd15e": {
    "text": "구별 포인트: 먼저 돈을 내게 하는 아르바이트는 모두 사기입니다. 체류카드(在留カード)에는 자격 외 활동 허용 범위가 표시되어 있으며, 지나치게 고액인 \"아르바이트\"는 원래 불법입니다. 낯선 WhatsApp 모임은 바로 나가고 신고하십시오."
   },
   "55891a": {
    "text": "7. 편의점 기프트 카드 사기"
   },
   "041a81": {
    "text": "수법: 경찰/대사관/기술자를 사칭해 \"계좌 검증\", \"동결 해제\"를 이유로 편의점에서 고액 기프트 카드(Vプリカ/Apple Gift Card 등)를 구매하고 카드 번호와 비밀번호를 알려 달라고 요구합니다."
   },
   "1449d2": {
    "text": "구별 포인트: 어떤 정식 기관도 기프트 카드 구매로 검증하거나 결제하도록 요구하지 않습니다. 편의점 직원이 때때로 경고하기도 하지만 매번 막을 수는 없습니다."
   },
   "8eecc1": {
    "text": "8. 방문 판매/전력 회사 변경"
   },
   "584b05": {
    "text": "수법: 전력/인터넷 회사 직원을 사칭해 방문하여 \"회사를 바꾸면 더 저렴하다\"며 개인정보를 빼내거나 고액 요금제에 가입시키려 합니다."
   },
   "ccc44b": {
    "text": "구별 포인트: 방문 판매는 본질적으로 득이 없을 수 있습니다. 자리에서 바로 계약하지 말고 \"필요 없습니다\"라고 말한 뒤 문을 닫으십시오. 진짜 회사는 불쑥 찾아오지 않습니다."
   },
   "3743ca": {
    "text": "2. 사기 예방 핵심 원칙"
   },
   "daa01e": {
    "items": [
     {
      "title": "당황하지 말고, 끝까지 믿지 말며, 돈을 요구하면 주지 않는다",
      "desc": ""
     },
     {
      "title": "공안·검찰·법원/대사관을 사칭하는 전화에서 송금을 요구하면 → 즉시 끊는다",
      "desc": ""
     },
     {
      "title": "\"비밀을 지켜라\", \"가족/친구에게 알리지 말라\"고 요구하는 것은 → 반드시 사기입니다",
      "desc": ""
     },
     {
      "title": "확실하지 않으면 전화로 확인합니다. 대사관 공식 홈페이지에 공개된 영사 보호 전화번호로 걸고, 상대방이 알려 준 번호로는 걸지 않습니다",
      "desc": ""
     }
    ]
   },
   "0252c5": {
    "text": "일상 예방: 낯선 전화는 먼저 받지 않거나 녹음이 나오면 즉시 끊습니다. 상대가 대사관/공안을 사칭하면 → 끊은 뒤 공식 홈페이지에서 전화번호를 찾아 다시 걸어 확인합니다. 위챗 단체 대화방의 환전 정보에는 답장하지 않고 개인 대화도 하지 않습니다. 링크가 포함된 문자는 클릭하지 않습니다. 누군가 기프트 카드 구매를 요구하면 → 100% 사기이므로 즉시 대화를 끝냅니다. 학교/교수 이메일이 송금을 요구하면 → 직접 만나거나 전화로 확인합니다. 방문 판매는 문을 열지 않거나 \"필요 없습니다\"라고 말한 뒤 닫습니다."
   },
   "2f22d1": {
    "text": "3. 일상 예방 요약"
   },
   "02de93": {
    "headers": [
     "상황",
     "대처 방법"
    ],
    "rows": [
     [
      "낯선 전화를 받았을 때",
      "먼저 받지 않고, 녹음이 나오면 즉시 끊는다"
     ],
     [
      "상대가 대사관/공안을 사칭할 때",
      "끊은 뒤 공식 홈페이지 번호를 찾아 다시 걸어 확인한다"
     ],
     [
      "모르는 사람이 위챗/WhatsApp 친구 신청",
      "거절하거나 먼저 신분을 확인한다"
     ],
     [
      "위챗 단체 대화방의 환전 정보",
      "답장·개인 대화 없이 그냥 무시한다"
     ],
     [
      "링크가 포함된 문자 수신",
      "클릭하지 않는다! 먼저 발신자를 확인한다"
     ],
     [
      "누군가 기프트 카드 구매를 요구",
      "100% 사기, 즉시 대화를 끝낸다"
     ],
     [
      "학교/교수 이메일이 송금을 요구",
      "직접 만나거나 전화로 확인한다"
     ],
     [
      "방문 판매",
      "문을 열지 않거나 \"필요 없습니다\"라고 말한 뒤 닫는다"
     ]
    ]
   },
   "717d03": {
    "text": "4. 사기를 당한 후 대응 (우선순위 순)"
   },
   "c06ba5": {
    "items": [
     {
      "title": "즉시 은행에 연락한다",
      "desc": "송금 계좌의 개설 은행에 연락해 지급 정지와 계좌 동결을 요청합니다. 자금은 이체된 뒤 몇 분 안에 인출될 수 있으므로 빠를수록 좋습니다"
     },
     {
      "title": "현지 경찰에 신고한다",
      "desc": "일본에서는 110으로 전화하고, 채팅 기록·송금 기록·상대방 정보를 증거로 보관합니다"
     },
     {
      "title": "본국 가족에게 연락해 신고한다",
      "desc": "가족에게 중국 국내 110으로 전화해 전기통신 네트워크 사기 신고 센터로 연결하거나, 직접 호적 소재지 공안 기관에 전화하도록 합니다"
     },
     {
      "title": "주재 중국 대사관·영사관에 연락한다",
      "desc": "공식 홈페이지에서 영사 보호 전화번호를 확인합니다. 외교부 글로벌 영사 보호·서비스 긴급 콜센터(24시간)는 \"긴급 연락처\" 항목을 참조합니다"
     },
     {
      "title": "알림을 공유한다",
      "desc": "위챗 단체 대화방에 경험을 공유해 더 많은 사람이 사기를 당하지 않게 합니다"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 사기를 당한 것은 당신의 잘못이 아닙니다. 사기 조직은 전문적인 훈련을 받았으며 피해자에는 고학력자도 포함됩니다. 돈을 되찾을 가능성은 작지만 신고에는 여전히 가치가 있습니다(사건 병합 수사, 조직 추적이 가능합니다). 부끄러움 때문에 침묵하지 마십시오. 당신의 경험이 다른 사람을 사기에서 지켜 줄 수 있습니다."
   },
   "3e86de": {
    "text": "5. 사기 식별 요점"
   },
   "0125e2": {
    "text": "실제 사례와 단체 대화방의 경험에 따르면: 억양의 출신지를 직접 물어보면(특정 지역의 억양이 뚜렷하면 대부분 사기), 현지 사투리나 일본어로 응답하면 상대가 곧바로 끊는 경우가 많습니다. 상대가 소속된 경찰서를 물어본 뒤 스스로 인터넷에서 공개 전화번호를 찾아 다시 걸어 확인합니다. 사기꾼은 빨리 성사시키려 하므로 세부 내용을 추궁하면 당황하는 경우가 많습니다. 가장 중요한 것은 은행 정보 보호입니다. 카드 번호와 비밀번호를 안전하게 보관하십시오."
   },
   "40510e": {
    "items": [
     {
      "text": "중국 주 후쿠오카 총영사관",
      "url": "https://fukuoka.china-consulate.gov.cn/"
     }
    ]
   }
  },
  "es": {
   "aa3847": {
    "text": "Objetivo de este artículo: saber cómo actuar ante situaciones sospechosas. Dos reglas prioritarias: no transferir dinero y no revelar datos personales; si los hechos ya ocurrieron, llama de inmediato al primer teléfono que aparece al final del artículo."
   },
   "52ec55": {
    "text": "⚠️ Si acabas de llegar a Japón para estudiar, lee este artículo completo antes que nada: las bandas de estafadores usan métodos muy elaborados y también caen personas con estudios superiores. Ten presente la regla «no entrar en pánico, no creer nada, no entregar dinero»: con ella evitarás la gran mayoría de las estafas."
   },
   "094ae5": {
    "text": "I. Tipos de estafa más comunes"
   },
   "011c4f": {
    "text": "1. Suplantación de embajadas, consulados o autoridades policiales y judiciales"
   },
   "049994": {
    "text": "Método: llaman diciendo que son la «embajada o el consulado de China» y afirman que tienes un documento importante sin recoger, que hay un problema con tu pasaporte o que estás implicado en una investigación; después te pasan con una supuesta «comisaría o fiscalía de China», que afirma que se te investiga por blanqueo de dinero; te piden instalar aplicaciones cifradas como Signal, Webex o Skype para un «interrogatorio por videollamada a distancia»; muestran credenciales policiales y documentos falsificados; exigen pagar una «fianza» o un «depósito de libertad provisional» y amenazan con «deportarte o extraditarte si no colaboras»."
   },
   "a49a0e": {
    "text": "Claves para reconocerlo: ① las embajadas y consulados de China en el extranjero no te avisan por teléfono de que estás implicado en un caso; ② la policía y la fiscalía de China no tramitan casos internacionales por teléfono, WeChat o QQ; ③ nunca piden que hagas una transferencia ni que descargues aplicaciones de mensajería; ④ el número de origen puede falsearse con un simulador de llamadas, así que aunque en pantalla aparezca «comisaría», no es fiable."
   },
   "a1f761": {
    "text": "2. Estafa en el cambio de divisas (muy frecuente entre estudiantes internacionales)"
   },
   "72ad22": {
    "text": "Método: publican en grupos de WeChat ofertas de «cambio de divisas a buen precio» o mensajes como «necesito yenes con urgencia»; falsifican capturas de pantalla de transferencias y te piden que envíes el dinero primero; la «estafa ABC», en la que el estafador A dice aportar yuanes y el B dice aportar yenes, te incitan a transferir a los dos a la vez y luego desaparecen; actúan como «intermediarios» y estafan a ambas partes."
   },
   "edaa9e": {
    "text": "Claves para reconocerlo: cambia divisas solo por canales bancarios oficiales; considera sospechosa cualquier oferta de cambio de un desconocido en grupos de WeChat; nunca envíes dinero antes de recibirlo; los cambios con un «tipo de cambio excepcionalmente bueno» son casi siempre una estafa."
   },
   "3a818c": {
    "text": "3. Suplantación de la universidad o de un profesor"
   },
   "adabc1": {
    "text": "Método: envían correos haciéndose pasar por la universidad y piden el pago de «tasas académicas o de matrícula»; se hacen pasar por un profesor y piden que compres tarjetas regalo o hagas transferencias en su nombre; aprovechan fallos de seguridad para falsificar la dirección de correo del profesor."
   },
   "b41808": {
    "text": "Claves para reconocerlo: la universidad nunca pide por correo o por teléfono tu contraseña bancaria ni una transferencia inmediata; si un profesor te pide de repente que compres algo en su nombre, confírmalo en persona o por teléfono con el propio profesor; comprueba si la dirección del remitente pertenece de verdad al dominio de la universidad."
   },
   "d246ca": {
    "text": "4. Mensajes y enlaces de phishing"
   },
   "e1d74f": {
    "text": "Método: envían mensajes con un enlace para pagar, con excusas como «depósito de alquiler», «caducidad del ETC» o «paquete retenido»; también envían enlaces haciéndose pasar por empresas de mensajería, servicios postales o compañías eléctricas."
   },
   "ffd258": {
    "text": "Claves para reconocerlo: todo mensaje que incluya un enlace para pagar es una estafa; en Japón los pagos legítimos se hacen en tiendas de conveniencia, por transferencia bancaria (振込) o por domiciliación de cuenta; si tienes dudas, llama antes al teléfono oficial y no hagas clic en el enlace."
   },
   "8eed64": {
    "text": "5. Secuestro virtual"
   },
   "b25888": {
    "text": "Método: el estafador aísla primero al estudiante internacional de su entorno y después contacta con su familia en el país de origen para decir que lo han secuestrado y exigir un rescate, aprovechando la falta de comunicación entre ambos."
   },
   "a3c952": {
    "text": "Claves para reconocerlo: si recibes un aviso de que «han secuestrado a tu hijo», contacta de inmediato con la embajada o el consulado para verificarlo; quien te pida «no contactar con tu familia» es un estafador."
   },
   "9f1d78": {
    "text": "6. Estafa de trabajos a tiempo parcial y de pedidos falsos"
   },
   "aa1237": {
    "text": "Método: te añaden en WhatsApp o WeChat a un «grupo de trabajo a tiempo parcial» donde prometen un sueldo alto por una tarea sencilla; te piden adelantar el pago de la mercancía o comprar productos; al principio devuelven pequeñas cantidades y, cuando la suma es grande, se llevan el dinero y desaparecen."
   },
   "2cd15e": {
    "text": "Claves para reconocerlo: cualquier trabajo a tiempo parcial que te pida pagar primero es una estafa; tu tarjeta de residencia indica el alcance del permiso de actividad fuera del estatus, así que un «trabajo a tiempo parcial» con un sueldo desorbitado tampoco es legal; sal de los grupos de WhatsApp de desconocidos y denúncialos."
   },
   "55891a": {
    "text": "7. Estafa de las tarjetas regalo en tiendas de conveniencia"
   },
   "041a81": {
    "text": "Método: se hacen pasar por la policía, una embajada o un técnico y, con la excusa de «verificar la cuenta» o «desbloquearla», te piden comprar tarjetas regalo de importe elevado en una tienda de conveniencia (Vプリカ, Apple Gift Card, etc.) y darles el número y el código."
   },
   "1449d2": {
    "text": "Claves para reconocerlo: ninguna institución seria pide comprar tarjetas regalo para verificar algo o para pagar; a veces el personal de la tienda de conveniencia te avisa, pero no siempre consigue detenerlo."
   },
   "8eecc1": {
    "text": "8. Venta a domicilio y cambio de compañía eléctrica"
   },
   "584b05": {
    "text": "Método: se presentan en tu casa como empleados de una compañía eléctrica o de internet y dicen que «cambiar de compañía es más barato» para conseguir tus datos personales o hacerte firmar un plan caro."
   },
   "ccc44b": {
    "text": "Claves para reconocerlo: la venta a domicilio puede no convenirte en absoluto; no firmes nada en el momento, di «no lo necesito» y cierra la puerta; una compañía legítima no se presenta sin avisar."
   },
   "3743ca": {
    "text": "II. Principios básicos para evitar las estafas"
   },
   "daa01e": {
    "items": [
     {
      "title": "Mantén la calma, no te lo creas y no entregues dinero",
      "desc": ""
     },
     {
      "title": "Cualquier llamada que diga ser de la policía, la fiscalía o una embajada y pida una transferencia → cuelga directamente",
      "desc": ""
     },
     {
      "title": "Quien te pida «guardar el secreto» o «no contárselo a tu familia o a tus amigos» es sin duda un estafador",
      "desc": ""
     },
     {
      "title": "Si tienes dudas, verifica por teléfono: llama al número de protección consular publicado en la web oficial de la embajada, no al número que te haya dado la otra persona",
      "desc": ""
     }
    ]
   },
   "0252c5": {
    "text": "Prevención diaria: no respondas a las llamadas de números desconocidos y, si suena una grabación, cuelga de inmediato; si quien llama dice ser de la embajada o de la policía, cuelga y busca por tu cuenta el número oficial en la web para devolver la llamada; no respondas ni escribas en privado a los mensajes de cambio de divisas que aparecen en grupos de WeChat; no hagas clic en los mensajes con enlaces; si alguien te pide comprar tarjetas regalo, es una estafa al 100 %, termina la conversación de inmediato; si un correo de la universidad o de un profesor pide una transferencia, confírmalo en persona o por teléfono; ante una venta a domicilio, no abras la puerta o di «no lo necesito» y ciérrala."
   },
   "2f22d1": {
    "text": "III. Consulta rápida para la prevención diaria"
   },
   "02de93": {
    "headers": [
     "Situación",
     "Qué hacer"
    ],
    "rows": [
     [
      "Recibes una llamada de un número desconocido",
      "No respondas y, si suena una grabación, cuelga de inmediato"
     ],
     [
      "Quien llama dice ser de la embajada o de la policía",
      "Cuelga, busca el número oficial en la web y llama tú para confirmarlo"
     ],
     [
      "Un desconocido te agrega a WeChat o WhatsApp",
      "Recházalo o confirma antes su identidad"
     ],
     [
      "Ofertas de cambio de divisas en un grupo de WeChat",
      "No respondas, no escribas en privado, ignóralas por completo"
     ],
     [
      "Recibes un mensaje con un enlace",
      "¡No hagas clic! Verifica antes al remitente"
     ],
     [
      "Alguien te pide comprar tarjetas regalo",
      "Es una estafa al 100 %, termina la conversación de inmediato"
     ],
     [
      "Un correo de la universidad o de un profesor pide una transferencia",
      "Confírmalo en persona o por teléfono"
     ],
     [
      "Venta a domicilio",
      "No abras la puerta o di «no lo necesito» y cierra la puerta"
     ]
    ]
   },
   "717d03": {
    "text": "IV. Qué hacer después de una estafa (por orden de prioridad)"
   },
   "c06ba5": {
    "items": [
     {
      "title": "Contacta con el banco de inmediato",
      "desc": "Llama al banco donde está abierta la cuenta desde la que se hizo la transferencia y pide que detengan el pago y bloqueen la cuenta: el dinero puede retirarse pocos minutos después de la transferencia, así que cuanto antes mejor"
     },
     {
      "title": "Denuncia ante la policía local",
      "desc": "En Japón llama al 110 y guarda los historiales de chat, los registros de la transferencia y los datos de la otra persona como pruebas"
     },
     {
      "title": "Pide a tus familiares en tu país que denuncien",
      "desc": "Que llamen al 110 de tu país y pidan ser transferidos al centro de lucha contra el fraude telefónico y en internet, o bien directamente a la comisaría correspondiente a su domicilio registrado"
     },
     {
      "title": "Contacta con la embajada o el consulado de China",
      "desc": "Consulta el número de protección consular en la web oficial; la línea global de emergencia de protección y servicios consulares del Ministerio de Asuntos Exteriores (24 horas) aparece en la sección «Contactos de emergencia»（应急联系）"
     },
     {
      "title": "Comparte el aviso",
      "desc": "Cuenta lo que te pasó en los grupos de WeChat para evitar que más personas caigan en la estafa"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 Ser víctima de una estafa no es culpa tuya: las bandas de estafadores están entrenadas profesionalmente y entre las víctimas hay personas con estudios superiores. Hay pocas esperanzas de recuperar el dinero, pero denunciar sigue teniendo valor (permite vincular casos y rastrear a la banda); no te calles por vergüenza, tu experiencia puede ayudar a otras personas a no caer en la trampa."
   },
   "3e86de": {
    "text": "V. Puntos clave para reconocer una estafa"
   },
   "0125e2": {
    "text": "Basado en casos reales y en la experiencia de los grupos de chat: pregunta directamente por el origen de su acento (un acento claramente de cierta región suele indicar una estafa); responde en dialecto local o en japonés y la otra persona normalmente colgará; pregúntale a qué comisaría pertenece y busca tú mismo el teléfono público en internet para llamar y verificarlo; los estafadores tienen prisa por cerrar el trato y se ponen nerviosos cuando se les piden detalles. Lo más importante es proteger tu información bancaria: cuida bien el número de tu tarjeta y tu contraseña."
   },
   "40510e": {
    "items": [
     {
      "text": "Consulado General de China en Fukuoka",
      "url": "https://fukuoka.china-consulate.gov.cn/"
     }
    ]
   }
  }
 },
 "guide-bank": {
  "ja": {
   "637370": {
    "text": "自分で福岡銀行の店舗で口座を開設する場合も、同様に**事前の予約が必須**です。予約なしの直接来店は受け付けていません。"
   },
   "908368": {
    "text": "各銀行の特徴"
   },
   "a43466": {
    "text": "口座開設、家賃・学費の納付、クレジットカードの申込み、海外への送金——実際の手続きの順番に沿って構成しています。**まず「銀行に行く前に」の節をお読みください**。印鑑の規格と営業時間は、口座開設前に確認が必要な項目です。"
   },
   "9fb1a4": {
    "text": "銀行に行く前に：印鑑・オリエンテーション・営業時間"
   },
   "930ced": {
    "text": "銀行口座の開設には必ず印鑑が必要です（**シャチハタは不可**）。来日前に必ず個人印鑑をご用意ください。印鑑がなければ窓口で口座を開設することができません。【入国準備】参照"
   },
   "9d3912": {
    "text": "銀行オリエンテーション（口座開設説明会）は留学手続きの中でも重要な一環です。来日前に申し込みが完了しているかご確認ください。通常の入学オリエンテーションとは別のイベントであり、それぞれ別に予約する必要があります。学校の回を逃した場合、その後は通常、自分で銀行の窓口で手続きするしかなく、時間がかかります。"
   },
   "a34b68": {
    "text": "銀行の営業時間"
   },
   "f68cb8": {
    "text": "日本の銀行の窓口営業時間は通常**午前10:00から午後15:00まで**です。15:00以降はATM以外の窓口・カウンターでの業務は一切行えません。口座開設や送金の手続きは必ず営業時間内にお越しください。"
   },
   "49d42a": {
    "text": "支払い：家賃・学費"
   },
   "9639d1": {
    "text": "交換留学生やJTWプログラムの学生は、通常、家賃を銀行振込でのみ支払うことができ、現金での支払いは受け付けられません。口座開設後はキャッシュカード（現金カード）が発行され、ATMで入金や振込ができます。モバイルバンキングアプリは不要です。"
   },
   "52174c": {
    "text": "注意：海外発行の銀行カードは日本の家賃の支払いに直接使用できません。ATMは通常午後5時以降利用できなくなるため、振込は営業時間内に済ませてください。"
   },
   "4e10c7": {
    "text": "授業料の口座振替"
   },
   "340c3a": {
    "text": "口座振替（自動引き落とし）を申し込んだのに引き落としが確認できない場合は、申請した窓口で状況を確認してください。引き落としに失敗すると延滞になりますので、様子を見るだけで済ませないでください。"
   },
   "beb008": {
    "text": "クレジットカードの申請"
   },
   "9e4ae1": {
    "text": "日本のクレジットカードの発行基準は母国とは異なります。来日直後で信用情報がない状態で一般的なクレジットカードを申し込むと、審査に落ちやすい傾向があります。一方、PayPayカードは外国人にとって比較的利用しやすく、スマホアプリから申し込めて敷居も低いため、最初の1枚として検討できます。"
   },
   "13aee8": {
    "text": "なお、クレジットカードの申込みは全体的に複雑で、多くのカードは日本での居住期間が6か月以上あり、在留期間にも十分な残りがあることが審査通過の条件です。また、学生の場合は承認される限度額が通常それほど高くなく、日常の少額決済やクレジットヒストリーの積み上げに利用するのが主な目的となります。"
   },
   "299ec9": {
    "text": "ゆうちょ銀行（郵便局の銀行）"
   },
   "7f6376": {
    "text": "開設のハードルが最も低く、通常は在留カードと学生証があれば口座を開設できます。在留期間が6か月未満でも開設可能です（一部機能に制限あり）。全国に店舗があり、ATM手数料も比較的安価です。国費奨学金を受給している方は、学校が一括開催する口座開設会で口座を開設する必要があり、自分で郵便局へ行って手続きすることはできません。JASSOの学習奨励費もゆうちょ口座での受取りが指定されています。"
   },
   "d6d8e4": {
    "text": "注意：来日から6か月未満の間、海外からゆうちょ口座への入金には比較的高い手数料がかかります（約7,500円/回）。高額な海外送金の予定がある場合は、事前に計画を立て、複数の方法を比較することをおすすめします。"
   },
   "6f4401": {
    "text": "福岡銀行"
   },
   "767f70": {
    "text": "福岡県内で主流の銀行です。口座開設には印鑑（シャチハタ不可）、在留カード、パスポートが必要です。窓口サービスは現在主に日本語での対応となっており、一部の支店では短期滞在の留学生の口座開設に慎重な場合があるため、事前に電話で確認することをおすすめします。"
   },
   "e9546f": {
    "text": "学校のオリエンテーションを逃してしまった場合や、来日後に自分で先に口座を開設したい場合は、福岡銀行の公式サイトで予約が必要です。少なくとも1〜2週間前までに手続きすることをおすすめします。学校のオリエンテーションで一括開設した口座の場合、その場で渡されるのは通常キャッシュカードのみです。通帳が必要な場合は、別途自分で銀行の窓口で手続きする必要があります。"
   },
   "c93498": {
    "text": "西日本シティ銀行（西福岡銀行）"
   },
   "7e1a3e": {
    "text": "口座開設には印鑑と在留カードが必要です。申込書に記入する住所（漢字）は本人が記入しなければならず、代筆はできません。手続き前に自分の住所の書き方を確認しておいてください。西日本シティ銀行（西福岡銀行）は通常、予約なしで当日直接来店できます。ただし、手続きはすべて**日本語での対応が必要**です。日本語に不安がある場合は、日本語が話せる人の同伴が必要です。"
   },
   "b65e5c": {
    "text": "口座開設の必要書類一覧"
   },
   "77b3a2": {
    "text": "後日、海外からの送金を受け取る場合、銀行からマイナンバーの提示を求められます。マイナンバーカードをまだ取得していない場合は、マイナンバーが記載された住民票の写しで代替できます。【在留手续】参照"
   },
   "35e7b3": {
    "text": "学校の一括口座開設会：対象は福岡銀行のみ"
   },
   "66223f": {
    "text": "学校は新入生が到着した後に「福岡銀行口座開設会」を開催し、その場で一括して口座開設の手続きを行います。自分で予約や問い合わせをする手間が省けます。ただし、対象は福岡銀行のみです。ゆうちょや西日本シティの口座を開設したい場合は、自分で店舗に行く必要があります。"
   },
   "9958c0": {
    "text": "**事前の申し込みが必要**です。入国支援システム（Pre-Arrival System）から予約してください。同じ回では通常、行政手続きの案内も行われるため、まとめて済ませるのが最も効率的です。定員や開催回数は学校からの案内に従ってください。"
   },
   "1dc907": {
    "items": [
     {
      "text": "在留カード（裏面の住所欄に住居地の届出が完了していること）"
     },
     {
      "text": "パスポート"
     },
     {
      "text": "印鑑（シャチハタ不可。通常の印鑑をご用意ください）"
     },
     {
      "text": "学生証"
     },
     {
      "text": "携帯電話番号（未取得の場合は Supporter の電話番号で申請し、取得後に変更）"
     },
     {
      "text": "現金（口座開設時の初回入金用に少額）"
     }
    ]
   }
  },
  "en": {
   "637370": {
    "text": "When opening an account at a 福岡銀行 branch independently, **an appointment is also required first**; walk-ins are not accepted."
   },
   "908368": {
    "text": "Features of Major Banks"
   },
   "a43466": {
    "text": "Opening an account, paying rent and tuition, applying for a credit card, and remitting money home are arranged in the actual order of the procedures. **Read the \"Before Going to the Bank\" section first** — the required type of seal and the bank's opening hours must be confirmed before you go."
   },
   "9fb1a4": {
    "text": "Before Going to the Bank: Hanko Seal, Orientation, and Business Hours"
   },
   "930ced": {
    "text": "Opening a bank account always requires a personal seal (hanko); **shachihata stamps are not acceptable**. Prepare a personal seal before arriving in Japan, or an account cannot be opened at the counter. See 【Arrival & Entry】"
   },
   "9d3912": {
    "text": "The bank orientation (account opening information session) is an important step in the study-abroad procedures; check whether registration has been completed before arriving in Japan. It is a different event from the regular entrance orientation and requires a separate reservation. If the session hosted by the university is missed, the account must usually be opened in person at a bank counter, which takes considerable time."
   },
   "a34b68": {
    "text": "Bank Business Hours"
   },
   "f68cb8": {
    "text": "Counter service at Japanese banks is generally available from **10:00 to 15:00**. After 15:00, no window or counter services are provided except ATMs; account opening, remittance, and other procedures must be completed during business hours."
   },
   "49d42a": {
    "text": "Paying Money: Rent and Tuition"
   },
   "9639d1": {
    "text": "Exchange and JTW program students can usually pay rent only by bank transfer, as cash is not accepted. Once the account is opened, a cash card is issued, which can be used to deposit money and make transfers at an ATM; no mobile banking app is required."
   },
   "52174c": {
    "text": "Note: bank cards issued overseas cannot be used directly to pay Japanese rent. ATMs generally close after 5 p.m., so transfers should be completed during working hours."
   },
   "4e10c7": {
    "text": "Direct Debit for Tuition (口座振替)"
   },
   "340c3a": {
    "text": "If you have applied for automatic withdrawal (口座振替) but the charge does not appear, confirm the status with the office that accepted your application. A failed withdrawal results in arrears, so do not simply wait."
   },
   "beb008": {
    "text": "Credit Card Application"
   },
   "9e4ae1": {
    "text": "The criteria for issuing credit cards in Japan differ from those overseas; applying for a traditional credit card shortly after arrival with no credit history is likely to be rejected. By comparison, the PayPay Card is friendlier to foreigners; it can be applied for in the mobile app with a lower threshold and may be considered as a first credit card."
   },
   "13aee8": {
    "text": "Note: credit card applications are generally complicated, and most cards require residence in Japan for more than 6 months with sufficient remaining period of stay to pass screening; limits approved for students are usually low, suiting everyday small purchases and credit history building."
   },
   "299ec9": {
    "text": "ゆうちょ銀行 (Japan Post Bank)"
   },
   "7f6376": {
    "text": "It has the lowest opening threshold: an account can usually be opened with a residence card and student ID, even with less than 6 months of residence status (some functions are restricted). Branches are found nationwide and ATM fees are low. Recipients of the government (MEXT) scholarship must open their accounts on-site at the 口座開設会 (account opening session) organized by the university and cannot apply at a post office on their own; the JASSO Learning Encouragement Scholarship is also designated to be received in a ゆうちょ account."
   },
   "d6d8e4": {
    "text": "Note: while in Japan for less than 6 months, receiving remittances from overseas into a ゆうちょ account incurs high fees (about 7500 yen per transfer). For large overseas remittances, plan ahead and compare options."
   },
   "6f4401": {
    "text": "福岡銀行 (Fukuoka Bank)"
   },
   "767f70": {
    "text": "The main local bank in Fukuoka. Opening an account requires a seal (hanko; shachihata stamps not acceptable), residence card, and passport. Counter service is currently provided mainly in Japanese, and some branches may be cautious about opening accounts for short-term international students; calling ahead to confirm is recommended."
   },
   "e9546f": {
    "text": "If the university's orientation is missed, or an account is wanted earlier after arrival, an appointment must be made on the Fukuoka Bank website, ideally at least 1-2 weeks in advance. Accounts opened through the university's orientation usually only come with a cash card at the session; for a passbook (通帳), a separate visit to a bank branch is required."
   },
   "c93498": {
    "text": "西日本シティ銀行 (Nishi-Nippon City Bank)"
   },
   "7e1a3e": {
    "text": "Opening an account requires a seal (hanko) and residence card. The address (in kanji) on the application form must be written by the applicant in person and cannot be written by proxy; confirm how to write the address before applying. At 西日本シティ銀行 (Nishi-Nippon City Bank), walk-ins are usually accepted on the same day without an appointment; however, the entire procedure **must be conducted in Japanese**, and if not proficient in Japanese, an accompanying person who speaks Japanese is required."
   },
   "b65e5c": {
    "text": "Checklist of Documents for Opening an Account"
   },
   "77b3a2": {
    "text": "To receive remittances from overseas later, the bank requires the My Number (マイナンバー). If the My Number card has not been issued yet, a certificate of residence (住民票) with the My Number recorded on it can be submitted instead. See 【在留手续】"
   },
   "35e7b3": {
    "text": "The University's Group Account Opening Session: Only 福岡銀行"
   },
   "66223f": {
    "text": "After new students arrive, the university holds a \"福岡銀行口座開設会\" (Fukuoka Bank account opening session) where accounts are opened collectively on-site, saving the trouble of making an appointment and arranging communication individually. However, it covers only 福岡銀行; to open an account at ゆうちょ銀行 or 西日本シティ銀行, students must visit a branch on their own."
   },
   "9958c0": {
    "text": "**Advance registration is required**, via the 入国支援システム (Pre-Arrival System). The same session usually also includes guidance on administrative procedures, so completing both at once saves the most time. Availability and sessions are subject to the university's notices."
   },
   "1dc907": {
    "items": [
     {
      "text": "Residence card (the address field on the back must already show the registered address)"
     },
     {
      "text": "Passport"
     },
     {
      "text": "Personal seal (inkan; a self-inking Shachihata stamp is not accepted — bring an ordinary seal)"
     },
     {
      "text": "Student ID card"
     },
     {
      "text": "Mobile phone number (if not available yet, the Supporter's number may be entered first and changed later)"
     },
     {
      "text": "A small amount of cash (for the initial deposit when opening the account)"
     }
    ]
   }
  },
  "ko": {
   "637370": {
    "text": "직접 福岡銀行 지점에서 계좌를 개설하는 경우에도 마찬가지로 **사전 예약이 반드시 필요**하며, 예약 없이 방문하면 안 됩니다."
   },
   "908368": {
    "text": "은행별 특징"
   },
   "a43466": {
    "text": "계좌 개설, 집세·학비 납부, 신용카드 발급, 본국 송금까지 실제로 진행하는 순서에 맞춰 구성했습니다. **「은행 방문 전」 항목을 먼저 읽어 주십시오.** 인감 규격과 영업 시간은 계좌 개설 전에 확인해야 하는 항목입니다."
   },
   "9fb1a4": {
    "text": "은행 방문 전: 인감·orientation·영업 시간"
   },
   "930ced": {
    "text": "은행 계좌 개설에는 반드시 인감이 필요합니다(**シャチハタ 불가**). 일본 도착 전에 개인 인감을 반드시 준비해야 하며, 준비하지 않으면 창구에서 계좌를 개설할 수 없습니다. 【입국 준비】 참조"
   },
   "9d3912": {
    "text": "은행 orientation(계좌 개설 설명회)은 유학 수속에서 비교적 중요한 과정입니다. 일본 도착 전에 신청했는지 확인하시기 바랍니다. 일반 입학 orientation과는 다른 행사이므로 각각 따로 예약해야 합니다. 학교 일정을 놓치면 이후에는 보통 직접 은행 창구에서 처리해야 하므로 시간이 많이 걸립니다."
   },
   "a34b68": {
    "text": "은행 영업 시간"
   },
   "f68cb8": {
    "text": "일본 은행의 창구 영업 시간은 보통 **오전 10:00부터 오후 15:00까지**입니다. 15:00 이후에는 ATM을 제외한 모든 창구 업무가 종료되므로, 계좌 개설이나 송금 등은 반드시 영업 시간 내에 방문하시기 바랍니다."
   },
   "49d42a": {
    "text": "납부: 집세·학비"
   },
   "9639d1": {
    "text": "교환학생과 JTW 프로그램 학생은 보통 은행 송금으로만 집세를 납부할 수 있으며 현금은 받지 않습니다. 계좌가 개설되면 cash card(현금 카드)를 받을 수 있으며, ATM에서 입금·송금이 가능해 모바일 뱅킹 앱을 사용할 필요가 없습니다."
   },
   "52174c": {
    "text": "주의: 해외에서 발급된 은행 카드는 일본 집세 납부에 직접 사용할 수 없습니다. ATM은 보통 오후 5시 이후에 닫히므로 송금은 업무 시간 내에 완료하시기 바랍니다."
   },
   "4e10c7": {
    "text": "授業料 자동이체(口座振替)"
   },
   "340c3a": {
    "text": "계좌 자동이체(口座振替)를 신청했는데 출금이 확인되지 않으면, 신청한 창구에서 상태를 확인하십시오. 출금에 실패하면 연체가 되므로, 기다리기만 해서는 안 됩니다."
   },
   "beb008": {
    "text": "신용카드 신청"
   },
   "9e4ae1": {
    "text": "일본 신용카드 발급 기준은 본국과 다릅니다. 도착 직후 신용 기록이 없으면 일반 신용카드 신청이 거절되기 쉽습니다. 반면 PayPay 카드는 외국인에게 비교적 친절하며, 모바일 앱에서 신청할 수 있고 문턱이 낮아 첫 번째 신용카드로 고려할 만합니다."
   },
   "13aee8": {
    "text": "참고로, 신용카드 신청 절차는 전반적으로 복잡합니다. 대부분의 카드는 일본 거주 기간이 6개월 이상이고 재류 기간이 충분히 남아 있어야 심사를 통과할 수 있습니다. 학생 신분으로 승인되는 한도는 보통 낮으며, 주로 일상적인 소액 결제와 신용 기록 쌓기에 사용됩니다."
   },
   "299ec9": {
    "text": "ゆうちょ銀行(우체국 은행)"
   },
   "7f6376": {
    "text": "개설 문턱이 가장 낮아, 보통 재류카드와 학생증만 있으면 계좌를 개설할 수 있으며 재류 기간이 6개월 미만이어도 개설이 가능합니다(일부 기능 제한). 점포가 전국에 있고 ATM 수수료가 낮습니다. 국비 장학금 수혜자는 학교가 주최하는 口座開設会 현장에서 계좌를 개설해야 하며, 직접 우체국에서 처리할 수 없습니다. JASSO 학습 장려비도 ゆうちょ 계좌로 받도록 지정되어 있습니다."
   },
   "d6d8e4": {
    "text": "주의: 일본 도착 후 6개월 미만인 기간에는 해외에서 ゆうちょ 계좌로 송금하면 수수료가 높게 부과됩니다(약 7500엔/회). 대규모 해외 송금이 필요하다면 미리 계획하고 여러 방법을 비교하시기 바랍니다."
   },
   "6f4401": {
    "text": "福岡銀行(후쿠오카 은행)"
   },
   "767f70": {
    "text": "후쿠오카 지역의 대표 은행입니다. 계좌 개설에는 인감(シャチハタ 불가), 재류카드, 여권이 필요합니다. 창구 서비스는 현재 대부분 일본어로 이루어지며, 일부 지점은 단기 체류 유학생의 계좌 개설을 신중하게 여길 수 있으므로 먼저 전화로 확인하시기 바랍니다."
   },
   "e9546f": {
    "text": "학교 orientation을 놓쳤거나 일본 도착 후 직접 계좌를 미리 개설하려면 福岡銀行 공식 사이트에서 예약해야 하며, 최소 1-2주 전에 신청하시기 바랍니다. 학교 orientation을 통해 일괄 개설한 계좌는 현장에서 보통 은행 카드(cash card)만 교부됩니다. 통장(通帳)이 필요하면 직접 은행 지점에 방문하여 별도로 신청해야 합니다."
   },
   "c93498": {
    "text": "西日本シティ銀行(서일본 시티 은행)"
   },
   "7e1a3e": {
    "text": "계좌 개설에는 인감과 재류카드가 필요합니다. 신청서의 주소(한자)는 본인이 직접 작성해야 하며 대필할 수 없으므로, 신청 전에 본인 주소의 한자 표기를 확인하시기 바랍니다. 西日本シティ銀行(서일본 시티 은행)은 보통 예약 없이 당일 방문할 수 있습니다. 단, 모든 절차는 **반드시 일본어로 진행**되어야 하며, 일본어가 능숙하지 않다면 일본어가 가능한 사람의 동행이 필요합니다."
   },
   "b65e5c": {
    "text": "계좌 개설 서류 목록"
   },
   "77b3a2": {
    "text": "이후 해외에서 송금을 받아야 한다면 은행에서 マイナンバー 제출을 요구합니다. 아직 マイナンバーカード를 받지 못한 경우, マイナンバー가 기재된 주민표(住民票)를 대신 제출할 수 있습니다. 【재류 절차】 참조"
   },
   "35e7b3": {
    "text": "학교 일괄 개설회: 福岡銀行만 해당"
   },
   "66223f": {
    "text": "학교는 신입생 도착 후 「福岡銀行口座開設会」를 한 번 개최하며, 현장에서 일괄적으로 계좌를 개설해 주므로 직접 예약하고 상담해야 하는 번거로움이 없습니다. 다만 대상은 福岡銀行 한 곳뿐이며, ゆうちょ나 西日本シティ 계좌를 개설하려면 직접 지점에 가야 합니다."
   },
   "9958c0": {
    "text": "**사전 신청이 필요**하며, 入国支援システム(Pre-Arrival System)을 통해 예약합니다. 같은 행사에는 보통 행정 수속 안내도 포함되어 있어 두 가지를 한 번에 처리하는 것이 가장 효율적입니다. 신청 인원과 일정은 학교 안내에 따릅니다."
   },
   "1dc907": {
    "items": [
     {
      "text": "재류카드(뒷면 주소란에 주소 등록이 완료되어 있어야 함)"
     },
     {
      "text": "여권"
     },
     {
      "text": "도장(샤치하타 불가. 일반 도장을 준비)"
     },
     {
      "text": "학생증"
     },
     {
      "text": "휴대전화 번호(아직 없으면 Supporter 전화번호로 먼저 기재하고, 개설 후 변경)"
     },
     {
      "text": "소액의 현금(계좌 개설 시 초입금용)"
     }
    ]
   }
  },
  "es": {
   "637370": {
    "text": "Si vas a abrir la cuenta por tu cuenta en una sucursal del Banco de Fukuoka（福岡銀行）, también **debes reservar con antelación**; no se atiende sin cita."
   },
   "908368": {
    "text": "Características de cada banco"
   },
   "a43466": {
    "text": "Apertura de cuenta, pago del alquiler y de la matrícula, solicitud de tarjeta de crédito y envío de dinero al extranjero: el contenido sigue el orden real de los trámites. **Lee primero la sección «Antes de ir al banco»**: el tipo de sello requerido y el horario de atención deben confirmarse antes de ir."
   },
   "9fb1a4": {
    "text": "Antes de ir al banco: sello personal, orientation y horario de atención"
   },
   "930ced": {
    "text": "Para abrir una cuenta bancaria es imprescindible un sello personal (hanko) (**no se acepta Shachihata（シャチハタ）**). Antes de venir a Japón, asegúrate de preparar tu sello personal; de lo contrario no podrás abrir la cuenta en ventanilla. Ver 【Preparativos para la entrada a Japón】"
   },
   "9d3912": {
    "text": "La orientation bancaria (sesión informativa para abrir una cuenta) es una de las partes más importantes de los trámites de estudio en el extranjero; antes de venir a Japón, confirma si ya te has inscrito. Es un evento distinto de la orientation general de ingreso y requiere una reserva por separado. Si pierdes la sesión organizada por la universidad, por lo general después solo podrás tramitarlo por tu cuenta en la ventanilla del banco, lo que consume bastante tiempo."
   },
   "a34b68": {
    "text": "Horario de atención del banco"
   },
   "f68cb8": {
    "text": "El horario de ventanilla de los bancos japoneses es, por lo general, **de 10:00 a 15:00**. Después de las 15:00 no se atiende ningún trámite de ventanilla ni de mostrador, salvo en los cajeros automáticos (ATM). Para abrir una cuenta o hacer una transferencia, acude siempre dentro del horario de atención."
   },
   "49d42a": {
    "text": "Pagar: alquiler y matrícula"
   },
   "9639d1": {
    "text": "Los estudiantes de intercambio y los del programa JTW normalmente solo pueden pagar el alquiler mediante transferencia bancaria; no se acepta efectivo. Una vez abierta la cuenta recibirás una cash card (tarjeta de efectivo), con la que podrás depositar y transferir en el ATM, sin necesidad de usar la app de banca móvil."
   },
   "52174c": {
    "text": "Atención: las tarjetas bancarias emitidas en el extranjero no sirven directamente para pagar el alquiler en Japón; por lo general los ATM cierran después de las 5 de la tarde, así que realiza las transferencias dentro del horario de trabajo."
   },
   "4e10c7": {
    "text": "Domiciliación bancaria de la matrícula (口座振替)"
   },
   "340c3a": {
    "text": "Si has solicitado el cargo automático (口座振替) y el cobro no aparece, confirma el estado en la ventanilla donde presentaste la solicitud. Un cargo fallido genera recargos por mora, así que no te limites a esperar."
   },
   "beb008": {
    "text": "Solicitud de tarjeta de crédito"
   },
   "9e4ae1": {
    "text": "La lógica de emisión de tarjetas de crédito en Japón es distinta de la de otros países: si acabas de llegar y no tienes historial de crédito, es fácil que te rechacen la solicitud de una tarjeta tradicional. En cambio, la tarjeta PayPay es más accesible para los extranjeros, se solicita desde la app del móvil y el umbral es más bajo, por lo que puede considerarse como primera tarjeta de crédito."
   },
   "13aee8": {
    "text": "Conviene advertir que, en conjunto, solicitar una tarjeta de crédito es un proceso complejo: la mayoría de los productos exige haber residido en Japón al menos 6 meses y contar con un margen suficiente en el periodo de residencia restante para superar la revisión; además, el límite que se aprueba a los estudiantes suele ser bajo, por lo que sirve principalmente para gastos diarios pequeños y para ir construyendo historial crediticio."
   },
   "299ec9": {
    "text": "Banco Yucho（ゆうちょ銀行）"
   },
   "7f6376": {
    "text": "Es el banco con el umbral de apertura más bajo: normalmente basta con la tarjeta de residencia y el carné de estudiante, y se puede abrir incluso con menos de 6 meses de residencia (algunas funciones quedan limitadas). Tiene sucursales en todo el país y comisiones de ATM bajas. Quienes reciben una beca del Gobierno (MEXT) deben abrir la cuenta en la sesión colectiva de apertura (口座開設会) organizada por la universidad, y no pueden hacerlo por su cuenta en la oficina de correos; la beca de estímulo al estudio de JASSO también se recibe en una cuenta de Yucho（ゆうちょ）."
   },
   "d6d8e4": {
    "text": "Atención: si han pasado menos de 6 meses desde tu llegada a Japón, las transferencias desde el extranjero a una cuenta de Yucho（ゆうちょ）conllevan comisiones elevadas (unos 7500 yenes por operación). Si prevés enviar cantidades importantes desde el extranjero, conviene planificarlo con antelación y comparar varias opciones."
   },
   "6f4401": {
    "text": "Banco de Fukuoka（福岡銀行）"
   },
   "767f70": {
    "text": "Es el banco principal de ámbito local en Fukuoka. Para abrir una cuenta se necesitan el sello personal (**no se acepta Shachihata（シャチハタ）**), la tarjeta de residencia y el pasaporte. La atención en ventanilla se ofrece actualmente sobre todo en japonés, y algunas sucursales pueden mostrarse cautelosas ante estudiantes internacionales con estancia corta, por lo que conviene confirmarlo antes por teléfono."
   },
   "e9546f": {
    "text": "Si por descuido pierdes la orientation de la universidad, o si quieres abrir la cuenta por tu cuenta y con antelación después de llegar a Japón, deberás reservar en la web oficial del Banco de Fukuoka（福岡銀行）; se recomienda hacerlo con al menos 1-2 semanas de antelación. En las cuentas abiertas de forma colectiva a través de la orientation de la universidad normalmente solo se entrega la tarjeta bancaria (cash card) en el momento; si necesitas una libreta de ahorros (通帳), tendrás que acudir por tu cuenta a una sucursal del banco."
   },
   "c93498": {
    "text": "Nishi-Nippon City Bank（西日本シティ銀行）"
   },
   "7e1a3e": {
    "text": "Para abrir una cuenta se necesitan el sello personal y la tarjeta de residencia. La dirección (en caracteres kanji) del formulario de solicitud debes escribirla tú mismo, no se admite que otra persona la escriba; antes de ir, confirma cómo se escribe tu dirección. En Nishi-Nippon City Bank（西日本シティ銀行）normalmente se puede acudir directamente el mismo día, sin reserva; sin embargo, todo el trámite **debe realizarse en japonés**, así que si tu japonés no es fluido necesitarás que te acompañe alguien que lo hable."
   },
   "b65e5c": {
    "text": "Lista de documentos para abrir una cuenta"
   },
   "77b3a2": {
    "text": "Si más adelante necesitas recibir transferencias desde el extranjero, el banco te pedirá el My Number; si aún no tienes la tarjeta My Number, puedes presentar en su lugar un certificado de residencia (住民票) en el que conste el My Number. Ver 【Trámites de residencia】"
   },
   "35e7b3": {
    "text": "Sesión colectiva de apertura de la universidad: solo el Banco de Fukuoka（福岡銀行）"
   },
   "66223f": {
    "text": "Después de la llegada de los estudiantes nuevos, la universidad celebra una «福岡銀行口座開設会», en la que se tramita la apertura de cuenta de forma colectiva y se evita la molestia de reservar y negociar por tu cuenta. Pero solo cubre el Banco de Fukuoka（福岡銀行）: si quieres abrir una cuenta en Yucho（ゆうちょ）o en Nishi-Nippon City Bank（西日本シティ銀行）, tendrás que ir tú mismo a una sucursal."
   },
   "9958c0": {
    "text": "**Se requiere inscripción previa**, mediante reserva a través del 入国支援システム (Pre-Arrival System). La misma sesión suele incluir además orientación sobre los trámites administrativos, y hacer ambas cosas a la vez ahorra el máximo de tiempo. El número de plazas y las sesiones se rigen por lo que notifique la universidad."
   },
   "1dc907": {
    "items": [
     {
      "text": "Tarjeta de residencia (el apartado de dirección del reverso debe tener ya el domicilio registrado)"
     },
     {
      "text": "Pasaporte"
     },
     {
      "text": "Sello personal (inkan): no se acepta el sello autoentintado (Shachihata); hay que llevar un sello normal"
     },
     {
      "text": "Tarjeta de estudiante"
     },
     {
      "text": "Número de teléfono móvil (si aún no se tiene, puede indicarse el del Supporter y cambiarlo después)"
     },
     {
      "text": "Una pequeña cantidad de efectivo (para el depósito inicial al abrir la cuenta)"
     }
    ]
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
      "text": "#7119 —— 急な病気で救急車を呼ぶべきか迷うときの救急電話相談（福岡県、24時間）。短縮番号がつながらない場合は 092-471-0099"
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
      "text": "洪水：瑞梅寺川、雷山川などは脊振山地を源としており、大雨のときに氾濫する可能性があります。キャンパスは標高が高くリスクは小さめですが、国道 202 号沿いに住む場合は、賃貸契約時に渡される防災事項をよく読んでください"
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
   },
   "e1d701": {
    "text": "ハラスメントと不当な扱い"
   },
   "e1d702": {
    "text": "ハラスメント、差別、不当な扱いにあったら、まずこれを覚えておいてください。我慢する必要はなく、公的な窓口があり、しかも**相談しても不利益にはなりません**。"
   },
   "e1d703": {
    "items": [
     {
      "text": "ハラスメントかどうか分からない → まず相談で構いません。自分で判断しなくて大丈夫"
     },
     {
      "text": "中国語で話したい → 学生相談室に英語・中国語対応のカウンセラーがいます"
     },
     {
      "text": "入居拒否・サービス拒否・差別的言動 → 法務省 外国語人権相談 0570-090911（平日 9:00–17:00）"
     },
     {
      "text": "賃金未払い・違法な労働を求められた → 厚労省 外国人労働相談（中国語ページあり）"
     }
    ]
   },
   "e1d704": {
    "text": "九大のハラスメント窓口のルール：厳秘は守られ、**相談によって不利益な扱いを受けることはなく**、所属部局に関係なくどの相談員にも相談できます。ただし**匿名の通報・投書は受け付けていません** —— 調査に入るには実名が必要です。"
   },
   "e1d705": {
    "text": "話し合いで解決しない場合は「苦情申立（調査）」を求めることができます。ハラスメント委員会が調査部会を設置して事実関係を確認し、認定されれば大学が懲戒等の措置を講じます。"
   },
   "e1d706": {
    "items": [
     {
      "text": "九州大学 ハラスメント対策推進室（公式・相談の流れ）",
      "url": "https://ohpc.kyushu-u.ac.jp/consultation.php"
     },
     {
      "text": "学生相談室（公式・英語・中国語可）",
      "url": "https://chc.kyushu-u.ac.jp/organization/consultation/"
     },
     {
      "text": "法務省 外国人のための人権相談（公式）",
      "url": "https://www.moj.go.jp/JINKEN/jinken04_00101.html"
     },
     {
      "text": "厚労省 外国人労働相談（公式・中国語）",
      "url": "https://www.startup-roudou.mhlw.go.jp/foreigner_chi.html"
     },
     {
      "text": "総合労働相談コーナー（福岡労働局 公式）",
      "url": "https://jsite.mhlw.go.jp/fukuoka-roudoukyoku/roudoukyoku/gyoumu_naiyou/soumu/sodan/sodan01.html"
     }
    ]
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
      "text": "#7119 — emergency telephone consultation when you fall ill suddenly and are unsure whether to call an ambulance (Fukuoka Prefecture, 24 hours). If the short number will not connect, dial 092-471-0099"
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
   },
   "e1d701": {
    "text": "Harassment and unfair treatment"
   },
   "e1d702": {
    "text": "If you face harassment, discrimination or unfair treatment, remember this first: you do not have to put up with it, official help exists, and **consulting will not work against you**."
   },
   "e1d703": {
    "items": [
     {
      "text": "Not sure whether it counts as harassment → you can simply ask first; you do not have to label it yourself"
     },
     {
      "text": "Prefer to speak Chinese → the Student Counselling Room has English- and Chinese-speaking counsellors"
     },
     {
      "text": "Refused housing or service, discriminatory remarks → MOJ foreign-language human rights hotline 0570-090911 (weekdays 9:00–17:00)"
     },
     {
      "text": "Unpaid wages, asked to work illegally → MHLW consultation for foreign workers (Chinese page available)"
     }
    ]
   },
   "e1d704": {
    "text": "Rules at Kyushu U's harassment office: confidentiality is strict, **consulting will not bring you any disadvantage**, and you may approach any counsellor regardless of your department. However, **anonymous reports and letters are not accepted** — entering the investigation process requires your name."
   },
   "e1d705": {
    "text": "If it cannot be resolved through discussion, you can request a formal grievance filing (investigation). The harassment committee sets up an investigation panel to establish the facts, and if the conduct is confirmed the university takes disciplinary and other measures."
   },
   "e1d706": {
    "items": [
     {
      "text": "Kyushu University Harassment Prevention Office (official, consultation flow)",
      "url": "https://ohpc.kyushu-u.ac.jp/consultation.php"
     },
     {
      "text": "Student Counselling Room (official, English and Chinese available)",
      "url": "https://chc.kyushu-u.ac.jp/organization/consultation/"
     },
     {
      "text": "MOJ human rights counselling for foreign nationals (official)",
      "url": "https://www.moj.go.jp/JINKEN/jinken04_00101.html"
     },
     {
      "text": "MHLW consultation for foreign workers (official, Chinese)",
      "url": "https://www.startup-roudou.mhlw.go.jp/foreigner_chi.html"
     },
     {
      "text": "General Labour Consultation Corner, Fukuoka Labour Bureau (official)",
      "url": "https://jsite.mhlw.go.jp/fukuoka-roudoukyoku/roudoukyoku/gyoumu_naiyou/soumu/sodan/sodan01.html"
     }
    ]
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
      "text": "#7119 — 갑자기 아파서 구급차를 불러야 할지 판단이 서지 않을 때의 응급 전화 상담(후쿠오카현, 24시간). 단축번호가 연결되지 않으면 092-471-0099"
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
   },
   "e1d701": {
    "text": "괴롭힘과 부당한 대우"
   },
   "e1d702": {
    "text": "괴롭힘·차별·부당한 대우를 겪었다면 먼저 이것만 기억하세요. 참을 필요가 없고, 공식 창구가 있으며, **상담해도 불이익을 받지 않습니다**."
   },
   "e1d703": {
    "items": [
     {
      "text": "괴롭힘인지 확실하지 않음 → 우선 상담만 해도 됩니다. 스스로 판단하지 않아도 됩니다"
     },
     {
      "text": "중국어로 이야기하고 싶음 → 학생상담실에 영어·중국어 가능 상담원이 있습니다"
     },
     {
      "text": "입주 거절·서비스 거절·차별적 발언 → 법무성 외국어 인권상담 0570-090911(평일 9:00–17:00)"
     },
     {
      "text": "임금 체불·위법한 노동 요구 → 후생노동성 외국인 노동 상담(중국어 페이지 있음)"
     }
    ]
   },
   "e1d704": {
    "text": "규슈대 괴롭힘 창구의 규칙: 비밀은 엄수되며, **상담으로 불이익을 받지 않고**, 소속 부국과 무관하게 어느 상담원에게나 상담할 수 있습니다. 다만 **익명 신고와 투서는 접수하지 않습니다** — 조사 절차에 들어가려면 실명이 필요합니다."
   },
   "e1d705": {
    "text": "대화로 해결되지 않으면 「고충 신청(조사)」을 요구할 수 있습니다. 괴롭힘 위원회가 조사부회를 설치해 사실관계를 확인하고, 인정되면 대학이 징계 등의 조치를 취합니다."
   },
   "e1d706": {
    "items": [
     {
      "text": "규슈대 괴롭힘 대책추진실(공식·상담 절차)",
      "url": "https://ohpc.kyushu-u.ac.jp/consultation.php"
     },
     {
      "text": "학생상담실(공식·영어·중국어 가능)",
      "url": "https://chc.kyushu-u.ac.jp/organization/consultation/"
     },
     {
      "text": "법무성 외국인 인권상담(공식)",
      "url": "https://www.moj.go.jp/JINKEN/jinken04_00101.html"
     },
     {
      "text": "후생노동성 외국인 노동 상담(공식·중국어)",
      "url": "https://www.startup-roudou.mhlw.go.jp/foreigner_chi.html"
     },
     {
      "text": "종합노동상담코너(후쿠오카 노동국 공식)",
      "url": "https://jsite.mhlw.go.jp/fukuoka-roudoukyoku/roudoukyoku/gyoumu_naiyou/soumu/sodan/sodan01.html"
     }
    ]
   }
  },
  "es": {
   "392840": {
    "text": "El Consulado General de China en Fukuoka se encarga de la protección consular, los documentos y la asistencia de emergencia. Si sufres una emergencia en Japón y necesitas asistencia consular, puedes llamar a la línea mundial de emergencia consular del Ministerio de Relaciones Exteriores (24 horas): +86-10-12308 o +86-10-65612308."
   },
   "800183": {
    "text": "· Centro de Intercambio Internacional de la Prefectura de Fukuoka: información de apoyo a la vida diaria para extranjeros"
   },
   "d9edd9": {
    "text": "Ante una emergencia, primero identifica el tipo y luego marca. Estos son los números generales de Japón y los canales oficiales locales de Fukuoka."
   },
   "e02b8f": {
    "text": "Emergencias de vida o seguridad"
   },
   "b3b000": {
    "items": [
     {
      "text": "110 — cuando ocurre un delito o un accidente y necesitas a la policía"
     },
     {
      "text": "119 — en caso de incendio o cuando se necesita atención médica de urgencia (ambulancia)"
     },
     {
      "text": "#7119 — consulta de urgencias cuando hay una enfermedad repentina y no sabes si necesitas una ambulancia (prefectura de Fukuoka, 24 horas)"
     },
     {
      "text": "#8000 (para niños) — consulta por enfermedad repentina de un niño durante la noche; si el número corto no funciona, marca 092-731-4119"
     }
    ]
   },
   "6daaf2": {
    "text": "Embajada y consulados (China)"
   },
   "06b1ad": {
    "text": "· (consultas de protección consular 092-752-0085)"
   },
   "40a3b6": {
    "items": [
     {
      "text": "Consulado General de China en Fukuoka",
      "url": "https://fukuoka.china-consulate.gov.cn/"
     }
    ]
   },
   "8ff3c2": {
    "text": "Asuntos de la universidad"
   },
   "05277d": {
    "text": "El Área Internacional de la Universidad de Kyushu puede ofrecer consultas administrativas y asistencia de contacto de emergencia a los estudiantes internacionales matriculados; en emergencias relacionadas con el dormitorio se recomienda contactar primero al encargado del dormitorio o al administrador."
   },
   "0a63f9": {
    "text": "Ventanillas de consulta para extranjeros"
   },
   "7ee48c": {
    "text": "· Centro Integral de Consulta y Apoyo para Extranjeros de la ciudad de Fukuoka: 0120-66-1799 (gratuito) / 092-262-1799, atención en días hábiles 8:45~18:00, con apoyo en varios idiomas"
   },
   "8f6c5b": {
    "items": [
     {
      "text": "Fundación de Intercambio Internacional Fukuoka Yokatopia（福岡よかトピア国際交流財団）",
      "url": "https://www.fcif.or.jp/"
     }
    ]
   },
   "0ce8ec": {
    "text": "Fuentes de información de referencia"
   },
   "2687b6": {
    "items": [
     {
      "text": "Universidad de Kyushu · Guía de vida / folleto (incluye リビングガイド)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "text": "Global Gateway（información sobre estatus de residencia, vivienda y vida diaria）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     },
     {
      "text": "Agencia de Servicios de Inmigración",
      "url": "http://www.moj.go.jp/isa/index.html"
     },
     {
      "text": "MEXT · lista de sistemas disponibles para estudiantes internacionales",
      "url": "https://www.mext.go.jp/a_menu/koutou/ryugaku/1405561_00006.htm"
     },
     {
      "text": "Información de seguridad en el extranjero del Ministerio de Relaciones Exteriores",
      "url": "https://www.anzen.mofa.go.jp/"
     }
    ]
   },
   "8dd5f7": {
    "text": "Ayuda para asuntos de la vida diaria"
   },
   "70bd3f": {
    "items": [
     {
      "text": "188 — consulta sobre la vida del consumidor (conflictos de consumo)"
     },
     {
      "text": "#8008 o 0570-013-320 — línea de consulta para mujeres (violencia doméstica, etc.)"
     },
     {
      "text": "189 — consulta sobre niños (maltrato, etc.)"
     }
    ]
   },
   "e1d701": {
    "text": "Acoso y trato injusto"
   },
   "e1d702": {
    "text": "Si sufres acoso, discriminación o un trato injusto, recuerda primero esto: no tienes que aguantarlo solo, existen ventanillas oficiales, y **consultar no te perjudicará**."
   },
   "e1d703": {
    "items": [
     {
      "text": "No sabes si cuenta como acoso → también puedes consultar primero, no hace falta definirlo antes"
     },
     {
      "text": "Quieres hablar en chino → la Oficina de Consulta Estudiantil (学生相談室) cuenta con consejeros de inglés y chino"
     },
     {
      "text": "Te rechazan un alquiler, te niegan un servicio o recibes comentarios discriminatorios → consulta de derechos humanos en lenguas extranjeras del Ministerio de Justicia（外国語人権相談）0570-090911 (días hábiles 9:00–17:00)"
     },
     {
      "text": "No te pagan el trabajo a tiempo parcial o te exigen trabajo ilegal → consulta laboral para extranjeros del Ministerio de Salud, Trabajo y Bienestar（外国人労働相談）(hay página en chino)"
     }
    ]
   },
   "e1d704": {
    "text": "Las reglas de la ventanilla de acoso de Kyudai: confidencialidad estricta, **no recibirás un trato desfavorable por consultar**, no importa a qué departamento pertenezcas y puedes acudir a cualquier consejero; sin embargo, **las denuncias anónimas y los escritos no se tramitan** — para iniciar un procedimiento de investigación es obligatorio dar tu nombre."
   },
   "e1d705": {
    "text": "Si no se llega a una solución, puedes solicitar una «reclamación formal (investigación)」（苦情申立）: el comité de acoso cuenta con una comisión de investigación que verifica los hechos y, si se determinan, la universidad aplica medidas disciplinarias, entre otras."
   },
   "e1d706": {
    "items": [
     {
      "text": "Oficina de Promoción de Medidas contra el Acoso de la Universidad de Kyushu（ハラスメント対策推進室）(oficial · proceso de consulta)",
      "url": "https://ohpc.kyushu-u.ac.jp/consultation.php"
     },
     {
      "text": "Oficina de Consulta Estudiantil（学生相談室）(oficial · disponible en inglés y chino)",
      "url": "https://chc.kyushu-u.ac.jp/organization/consultation/"
     },
     {
      "text": "Ministerio de Justicia: ventanillas de consulta para extranjeros y línea multilingüe de derechos humanos (oficial)",
      "url": "https://www.moj.go.jp/JINKEN/jinken04_00101.html"
     },
     {
      "text": "Ministerio de Salud, Trabajo y Bienestar: consulta laboral para extranjeros（外国人労働相談）(oficial · en chino)",
      "url": "https://www.startup-roudou.mhlw.go.jp/foreigner_chi.html"
     },
     {
      "text": "Centro General de Consulta Laboral（総合労働相談コーナー）(Oficina de Trabajo de Fukuoka, oficial)",
      "url": "https://jsite.mhlw.go.jp/fukuoka-roudoukyoku/roudoukyoku/gyoumu_naiyou/soumu/sodan/sodan01.html"
     }
    ]
   },
   "ab086d": {
    "text": "Qué hacer de inmediato tras sufrir una estafa"
   },
   "8d68f1": {
    "text": "Los estudiantes internacionales son un grupo muy expuesto a las estafas. Si ya hiciste una transferencia o estás siendo manipulado, actúa siguiendo este orden de prioridad; para una guía más completa sobre cómo identificar las estafas y prevenirlas en el día a día, consulta en la página de inicio «Lectura obligatoria para principiantes · Seguridad antirfraude para estudiar en Japón»."
   },
   "070eb4": {
    "items": [
     {
      "title": "Contacta de inmediato con el banco",
      "desc": "Comunícate con el banco donde está la cuenta desde la que enviaste el dinero y solicita detener el pago y bloquear la cuenta; el dinero puede ser retirado pocos minutos después de la transferencia, así que cuanto antes mejor"
     },
     {
      "title": "Denuncia ante la policía local",
      "desc": "En Japón marca 110 y conserva los historiales de chat, los registros de transferencia y los datos de la otra parte como pruebas"
     },
     {
      "title": "Pide a tus familiares en China que denuncien",
      "desc": "Que tus familiares llamen al 110 en China y pidan que les transfieran al Centro contra el Fraude Telefónico y en Internet"
     },
     {
      "title": "Contacta con la embajada o los consulados de China",
      "desc": "Consulta el teléfono de protección consular en la web oficial; la línea mundial de emergencia consular (24 h) del Ministerio de Relaciones Exteriores aparece arriba, en «Embajada y consulados (China)»"
     }
    ]
   },
   "682c0c": {
    "text": "💡 Ser estafado no es tu culpa; las redes de estafa tienen métodos muy elaborados. Recuperar el dinero es poco probable, pero denunciar sigue teniendo valor; no guardes silencio por vergüenza."
   },
   "1a55d0": {
    "text": "Riesgos de desastres en esta zona"
   },
   "a2c2ba": {
    "text": "Fukuoka no es una zona de alta actividad sísmica, pero no está exenta de riesgos. La falla de Kego（警固断層帯）se extiende desde el mar al norte de la península de Itoshima hacia el sureste, atraviesa la zona urbana de Fukuoka y llega hasta las cercanías de Dazaifu; se evalúa que su segmento sureste puede provocar un terremoto de cierta magnitud, con una probabilidad relativamente alta entre las principales fallas de Japón. En su segmento noroeste, en el mar, ya se produjo un terremoto en 2005."
   },
   "d1f94f": {
    "items": [
     {
      "text": "Inundaciones: los ríos Zuiryuji y Raizan pueden desbordarse con lluvias intensas; el campus está en una zona elevada, por lo que el riesgo es menor"
     },
     {
      "text": "Escasez de agua: en el invierno de 2025–2026 hubo escasez de agua en toda la región de Fukuoka y en la zona de Itoshima se redujo temporalmente la presión del suministro"
     },
     {
      "text": "Energía nuclear: la central nuclear de Genkai está a unos 40 km del campus Ito y los vientos predominantes soplan del sureste y del noroeste"
     }
    ]
   },
   "aa5140": {
    "text": "La cuenta oficial de LINE de la ciudad de Fukuoka envía información de prevención de desastres; se recomienda añadirla al llegar — consulta la sección «Cuenta oficial de LINE de la ciudad de Fukuoka» más arriba en este artículo."
   },
   "030d6c": {
    "items": [
     {
      "text": "Sede de Promoción de la Investigación Sísmica（地震調査研究推進本部）· falla de Kego",
      "url": "https://www.jishin.go.jp/regional_seismicity/rs_katsudanso/f108_kego/"
     },
     {
      "text": "Agencia Meteorológica de Japón",
      "url": "https://www.jma.go.jp/bosai/"
     }
    ]
   },
   "8903c1": {
    "text": "Parte del contenido de este artículo se ha elaborado a partir de «新伊都国風土記» (autores: Hato_Tsubame y CantonSimon), incluido con autorización de los autores. Los precios, los horarios y los procedimientos mencionados cambian con el tiempo; para asuntos importantes, consulta siempre las webs oficiales correspondientes."
   },
   "04e631": {
    "items": [
     {
      "text": "kokusaihiroba.or.jp",
      "url": "https://www.kokusaihiroba.or.jp/"
     }
    ]
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
      "センターゾーン入口等 3 か所",
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
  },
  "es": {
   "329701": {
    "text": "De la terminal internacional a la estación de metro"
   },
   "378734": {
    "text": "Si vives en ITO Kyoso-kan y no hay un servicio directo, puedes tomar una línea con más frecuencia hasta la Biblioteca Central (中央図書館) o el Big Orange (ビッグオレンジ) y caminar desde allí: Biblioteca Central → ITO Kyoso-kan son unos 1.1 km, unos 15 minutos a pie; Big Orange → ITO Kyoso-kan son unos 1.4 km, unos 20 minutos a pie. Con mucho equipaje será más lento; valóralo según tu caso."
   },
   "520711": {
    "text": "Tampoco pasa nada si te lo pierdes: es solo un servicio transitorio de los primeros días. Para las compras diarias posteriores puedes tomar el autobús Showa hasta la zona de la estación Kyudai-Gakkentoshi, usar los casilleros de recogida de Aeon en el campus (ver «Compras») o, si vives lejos, plantearte comprar una bicicleta."
   },
   "549889": {
    "text": "**No importa lo tarde que llegues: el mismo día puedes instalarte con normalidad.** Según la hora de llegada, el trámite de entrada y la explicación de las normas del dormitorio pueden quedar para el día siguiente, pero el alojamiento en sí no se ve afectado."
   },
   "d15555": {
    "text": "Los primeros días tras llegar a Japón hay que realizar varios trámites de forma concentrada y algunos deben seguir un orden determinado. A continuación se presentan ordenados según el itinerario «antes de entrar al país → después de aterrizar»."
   },
   "e71472": {
    "text": "Trámites (antes de entrar al país)"
   },
   "0a4bc5": {
    "text": "Cuándo se emite el COE (certificado de elegibilidad del estatus de residencia)"
   },
   "9d9ff6": {
    "text": "Después de que la universidad presenta la solicitud ante la Agencia de Servicios de Inmigración, el COE suele emitirse en un plazo de 1~3 meses. Según la experiencia previa, la Universidad de Kyushu (九大) procesa las solicitudes con rapidez: en la mayoría de los casos se obtiene en aproximadamente 1 mes, por lo que normalmente se llega a tiempo para la matrícula."
   },
   "0ad4d3": {
    "text": "Las áreas sensibles, como las carreras de ingeniería y ciencias (por ejemplo, IA, espacio o energía nuclear), pueden estar sujetas a revisiones adicionales, lo que alarga el proceso y conlleva el riesgo de no llegar a Japón antes del inicio de clases. En ese caso, conviene contactar con el personal académico y con el dormitorio (寮) para explicar la situación y acordar alternativas, como retrasar la llegada."
   },
   "a52750": {
    "text": "Una vez emitido, el COE se envía por correo electrónico en versión electrónica (PDF) y tiene **una validez de 3 meses**; hay que completar la solicitud de visado y entrar al país dentro de ese plazo."
   },
   "30ec7e": {
    "text": "Después de recibir el COE"
   },
   "a02f9c": {
    "items": [
     {
      "text": "Solicitar el visado en la embajada o el consulado de Japón en China (normalmente 5~7 días hábiles)"
     },
     {
      "text": "Reservar el billete de avión y organizar el alojamiento"
     },
     {
      "text": "Esperar el viaje a Japón"
     }
    ]
   },
   "92d7fe": {
    "text": "Preparativos antes de salir: equipaje, futón y sello"
   },
   "07924e": {
    "text": "Qué llevar y qué dejar"
   },
   "db2432": {
    "text": "Para decidir si merece la pena llevar un artículo, puedes plantearte tres preguntas:"
   },
   "4c7fd5": {
    "items": [
     {
      "text": "¿Es un producto electrónico o de alta tecnología? (En Japón suelen ser más caros; conviene llevarlo)"
     },
     {
      "text": "¿Solo se consigue en tu país de origen? (Los productos importados son caros en Japón)"
     },
     {
      "text": "¿Lo usas todos los días? (Para evitar incomodidades al llegar)"
     }
    ]
   },
   "6c9ae7": {
    "text": "En Japón hay ropa asequible, como Uniqlo (cuyas prendas de temporadas pasadas suelen estar rebajadas), así que la ropa normal se puede comprar allí; se recomienda traer ropa interior propia. Conviene llevar algo más de productos electrónicos y algo de efectivo. El protector solar no es caro en Japón, así que traerlo o no es opcional. El verano en Fukuoka es caluroso; hay que prepararse para el calor."
   },
   "d1f1ea": {
    "text": "Futón"
   },
   "a28fda": {
    "text": "En el dormitorio se puede alquilar ropa de cama, pero según las opiniones la calidad es regular. Se recomienda traer la ropa de cama que va en contacto con el cuerpo (funda del edredón y funda de la almohada); además, seguirán sirviéndote después de mudarte."
   },
   "1267be": {
    "text": "Equipamiento del dormitorio"
   },
   "d0461c": {
    "text": "El dormitorio ya cuenta con: cama, escritorio y silla, estantería, frigorífico y aire acondicionado. **No se proporcionan**: utensilios de cocina, hervidor, vajilla, toallas ni artículos de higiene. El papel higiénico solo incluye 1 rollo; hay que reponerlo por tu cuenta en cuanto puedas."
   },
   "6c0af7": {
    "items": [
     {
      "text": "Global Gateway · información para estudiantes internacionales (incluye vivienda)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "67b2e2": {
    "text": "Sello (はんこ)"
   },
   "7a40b0": {
    "text": "En la vida diaria en Japón se necesita el sello en muchas situaciones. Puedes comprarlo en la máquina de grabado automático de Don Quijote (ドンキホーテ), desde unos 500 円; se pueden grabar kanji, hiragana, katakana y letras. Atención: el sello de tinta automática shachihata (シャチハタ) **no se puede usar para abrir una cuenta bancaria**, así que compra un sello de material común. Ver «Banco · transferencias»."
   },
   "65cb2d": {
    "text": "Contacto antes de viajar (Supporter)"
   },
   "a6a23c": {
    "text": "La Universidad de Kyushu asigna a cada estudiante nuevo un Supporter (estudiante actual), que se pondrá en contacto por correo antes de la salida. Conviene responder lo antes posible e intercambiar LINE / WeChat. El Supporter puede ayudar con el registro de entrada al dormitorio, el registro en la oficina del distrito, la apertura de cuenta bancaria y otros trámites."
   },
   "9bc5f2": {
    "text": "Entrada al país: la tarjeta de residencia y el control de inmigración"
   },
   "2ca893": {
    "text": "El Aeropuerto de Fukuoka es uno de los aeropuertos designados para la entrega de la tarjeta de residencia; te la entregan en el momento al pasar el control de inmigración. En ese momento, el campo de dirección de la tarjeta está en blanco; hay que registrarlo en la oficina del distrito después de aterrizar. El personal del control ayuda a quitar la grapa que fija el COE al pasaporte."
   },
   "7a12ab": {
    "text": "Quienes entren por aeropuertos no designados (aeropuertos regionales como Naha, Kagoshima, Shizuoka…) solo reciben en el lugar el «aviso de entrega prevista de la tarjeta de residencia» (在留カード交付予定通知); la tarjeta de residencia se envía por correo a la dirección registrada aproximadamente 1～2 semanas después de completar el registro de residencia. Al entrar por Fukuoka no ocurre esto."
   },
   "6001bc": {
    "text": "Pasar todo el control suele tardar 20～30 minutos; puede alargarse si llegan muchos vuelos a la misma hora. Si has confirmado el autobús de enlace de la universidad, deja margen de tiempo."
   },
   "7298fb": {
    "text": "Ruta de salida: los cuatro controles que se pasan en orden"
   },
   "0a5d8b": {
    "text": "El recorrido tras bajar del avión está señalizado por carteles en todo momento; basta con fijarse en los siguientes."
   },
   "ec1775": {
    "items": [
     {
      "title": "Llegadas (到着 / Arrivals)",
      "desc": "Sigue el cartel de fondo negro con el avión amarillo: «到着 Arrivals». En el mismo cartel, el símbolo verde «乗り継ぎ (国際線) Transfer» indica el pasillo de conexiones (transbordos)."
     },
     {
      "title": "Cuarentena (検疫 / Quarantine) → control de inmigración",
      "desc": "Si ya te registraste en Visit Japan Web, usa el pasillo marcado «Visit Japan Web 受付済みの方» y las letras a b c d. Si aún no te has registrado, puedes hacerlo allí mismo: busca la pancarta de fondo azul y letras blancas «共同キオスク / The integrated KIOSK», señalada a 50m."
     },
     {
      "title": "Recogida de equipaje (手荷物受取所 / Baggage Claim)",
      "desc": "Mira la pantalla «手荷物受取 (Baggage Claim)»; localiza tu vuelo por el aeropuerto de origen (出発地) y el número de vuelo (便名). El número a la derecha de tu vuelo es el de la cinta de equipaje."
     },
     {
      "title": "Aduana (税関 / Customs)",
      "desc": "Hay dos pasillos. Si hiciste la declaración por el móvil, usa el terminal «電子申告端末 (Customs Electronic Declaration Terminal)»; si declaras en papel, sigue la flecha roja del cartel amarillo «PAPER 紙申告»."
     }
    ]
   },
   "a03965": {
    "text": "Antes de salir: prepara cambio en metálico"
   },
   "0da744": {
    "text": "**Si piensas usar el transporte público, cambia el dinero antes de salir del aeropuerto.**\nEn el metro y en las líneas de JR se puede pagar con tarjeta contactless (ver la siguiente sección), pero el autobús Showa del campus solo acepta efectivo o tarjeta IC. La máquina cambiadora de los autobuses en Japón suele aceptar únicamente billetes de 1,000 円; los billetes de 5,000 円 y 10,000 円 no se pueden cambiar. Como los cajeros del aeropuerto suelen entregar billetes de 10,000 円, se recomienda cambiarlos antes en la tienda de conveniencia del aeropuerto y tener a mano unos cuantos billetes de 1,000 円 y algo de calderilla."
   },
   "c04837": {
    "text": "Del aeropuerto a Ito: el autobús de enlace"
   },
   "1589b8": {
    "text": "La universidad organiza autobuses de enlace gratuitos para estudiantes nuevos en fechas fijas alrededor del inicio de clases, solo para el campus Ito; el vehículo es un midibús o un autobús según el número de pasajeros de ese día. Las paradas de subida están en las terminales internacional y nacional del Aeropuerto de Fukuoka, y las de bajada incluyen la estación Kyudai-Gakkentoshi y los distintos dormitorios de estudiantes. Se atiende por orden de llegada, sin reserva previa."
   },
   "a963ac": {
    "text": "**Las fechas y horarios de funcionamiento cambian cada semestre; consulta el aviso más reciente enviado por la universidad.** Si llegas fuera del periodo de funcionamiento o no puedes alcanzarlo por un retraso del vuelo, puedes ir por tu cuenta de las tres formas siguientes."
   },
   "b7abf2": {
    "items": [
     {
      "text": "Información sobre el punto de encuentro del autobús de enlace de la Universidad de Kyushu (página de ejemplo; consulta el aviso más reciente)",
      "url": "https://notepm.jp/sharing/90f2611c-aaa9-4f96-b32f-a88ca30e57c9"
     }
    ]
   },
   "c11763": {
    "text": "Por tu cuenta (1): tren"
   },
   "4ecc41": {
    "text": "Es la opción más fiable de las tres."
   },
   "c1cff3": {
    "text": "Las terminales internacional y nacional del Aeropuerto de Fukuoka están a lados opuestos de la pista: **la estación de metro está en el lado de la terminal nacional, así que primero hay que tomar el autobús de conexión gratuito para llegar allí.**"
   },
   "76803e": {
    "items": [
     {
      "title": "Encontrar el autobús de conexión",
      "desc": "Al salir de la sala de llegadas, sigue los carteles de las columnas: «国内線連絡バス (地下鉄) Shuttle Bus (INT'L ⇔ Domestic, Subway)». La parada de subida es la A2."
     },
     {
      "title": "Llegada a la terminal nacional",
      "desc": "Junto a la parada de bajada está la entrada de la estación Fukuoka Airport (福岡空港駅), con escaleras mecánicas hacia abajo. En el mismo pasillo hay otra columna con el cartel «2 路線バス»: es el autobús urbano de línea, no el que va a Ito."
     }
    ]
   },
   "51cf4a": {
    "text": "Entrar en la estación y subir al tren"
   },
   "2e12f7": {
    "text": "La máquina de billetes está a la derecha del pasillo, marcada «きっぷうりば (Tickets)»."
   },
   "6041f9": {
    "text": "Los tornos aceptan pago contactless con tarjeta de crédito (VISA / JCB / AMEX / Mastercard; junto al torno hay un cartel «タッチ決済 乗車OK»). **El día de la llegada no hace falta comprar billete ni obtener una tarjeta IC: puedes pasar directamente con tu tarjeta.**"
   },
   "ab8535": {
    "text": "Confirmar el sentido del tren"
   },
   "4ac4a5": {
    "text": "La estación Fukuoka Airport es la estación de origen (en el interior indica «当駅は始発駅です»); todos los trenes salen de aquí."
   },
   "91e638": {
    "text": "**Toma el tren con dirección Chikuzen-Maebaru / Nishikaratsu / Karatsu. El tren hacia Meinohama termina en Meinohama y obliga a transbordar.**"
   },
   "9870ff": {
    "text": "En la pantalla electrónica, los dos sentidos se distinguen por colores, así que puedes identificarlos aunque no sepas leer:"
   },
   "094817": {
    "headers": [
     "Dirección",
     "Color en pantalla",
     "¿Directo?"
    ],
    "rows": [
     [
      "Chikuzen-Maebaru / Nishikaratsu / Karatsu",
      "Blanco",
      "Directo, sin transbordo"
     ],
     [
      "Meinohama",
      "Rosa",
      "Termina en Meinohama, hay que transbordar"
     ]
    ]
   },
   "33eac7": {
    "text": "Servicio directo y tarifas"
   },
   "110b67": {
    "text": "La línea de metro del Aeropuerto (空港線) y la línea JR Chikuhi (筑肥線) funcionan como servicio directo; después de Meinohama se entra en el tramo de JR:"
   },
   "60e8e9": {
    "headers": [
     "Estación",
     "Número"
    ],
    "rows": [
     [
      "Meinohama (姪浜)",
      "JK01"
     ],
     [
      "Shimoyamato (下山門)",
      "JK02"
     ],
     [
      "Imajuku (今宿)",
      "JK03"
     ],
     [
      "Kyudai-Gakkentoshi (九大学研都市)",
      "JK04"
     ]
    ]
   },
   "6a2144": {
    "text": "Transbordo al autobús Showa en la estación Kyudai-Gakkentoshi"
   },
   "3df5ca": {
    "headers": [
     "Destino",
     "Parada de bajada",
     "Frecuencia"
    ],
    "rows": [
     [
      "D1 / D2 / D3",
      "La entrada de Center Zone y otras 3 paradas",
      "Frecuente"
     ],
     [
      "ITO Kyoso-kan (伊都協奏館)",
      "ITO Kyoso-kan (伊都協奏館)",
      "Poco frecuente"
     ],
     [
      "SETTLE International",
      "Kokusaimura-mae / Tomari-kitaguchi (国際村前 / 泊北口)",
      "Poco frecuente"
     ]
    ]
   },
   "f8af94": {
    "text": "Para ir a SETTLE también puedes bajarte en la estación Hatae (波多江), caminar unos 400 metros hasta la estación de 産の宮 y transbordar al autobús. **Desde el aeropuerto no se puede tomar el tren rápido.** Un taxi desde Hatae hasta SETTLE cuesta unos 1,300 円 (valor de referencia)."
   },
   "05176b": {
    "text": "Por tu cuenta (2): taxi"
   },
   "3077e9": {
    "text": "Del Aeropuerto de Fukuoka al campus Ito cuesta unos 8,000～10,000 円 (valor de referencia; el importe real lo marca el taxímetro). Es una opción razonable si llevas mucho equipaje o llegas después de la última salida del transporte público."
   },
   "7135a9": {
    "text": "Por tu cuenta (3): solo autobús"
   },
   "7f84f6": {
    "text": "Desde la terminal internacional, toma el autobús Nishitetsu hasta la salida Chikushi de la estación Hakata (博多駅筑紫口); cruza la estación Hakata y camina unos 400 metros hasta la plataforma «Hakata Ekimae A» (博多駅前 A); allí transborda a la línea K del Nishitetsu hasta el Big Orange de la Universidad de Kyushu (九大ビッグオレンジ). Ambos tramos tienen intervalos largos y la línea K deja de funcionar pronto, así que solo plantéatelo si los horarios encajan bien."
   },
   "0ee9af": {
    "text": "Para consultar autobuses usa Google Maps y **establece siempre la hora de salida**. En esta zona varias líneas tienen poca frecuencia; si no fijas la hora, puede mostrarte el servicio del día siguiente."
   },
   "cdff70": {
    "text": "Resumen de costes por tramo"
   },
   "2f3a74": {
    "headers": [
     "Tramo",
     "Medio",
     "Coste"
    ],
    "rows": [
     [
      "Terminal internacional ⇄ terminal nacional",
      "Autobús de conexión",
      "Gratis"
     ],
     [
      "Fukuoka Airport (福岡空港) → Kyudai-Gakkentoshi (九大学研都市)",
      "Metro + JR (directo)",
      "610 円, unos 36 min, sin transbordo"
     ],
     [
      "Kyudai-Gakkentoshi (九大学研都市) → paradas del campus",
      "Autobús Showa",
      "Según la web oficial"
     ],
     [
      "Fukuoka Airport (福岡空港) → campus Ito",
      "Taxi",
      "Unos 8,000〜10,000 円"
     ],
     [
      "Hatae (波多江) → SETTLE",
      "Taxi",
      "Unos 1,300 円 (valor de referencia)"
     ]
    ]
   },
   "e8280e": {
    "text": "Si vas a menudo al centro de la ciudad o al aeropuerto, puedes considerar el bono de viajes del campus Ito (伊都キャンパス回数券): 6,730 円 / 10 billetes, es decir, 673 円 por viaje; cubre desde las estaciones del metro hasta las paradas del campus en la línea de la Universidad de Kyushu (九大線) del autobús Showa. **La página oficial no indica si se puede usar hasta la estación del Aeropuerto de Fukuoka**; confírmalo por tu cuenta antes de comprarlo. Más detalles en «Transporte»."
   },
   "f7cdf3": {
    "text": "Llegada al dormitorio: se puede entrar a cualquier hora del día"
   },
   "d5f4d7": {
    "text": "Por eso, si el vuelo se retrasa, la conexión se demora o tienes que recurrir al taxi, no hace falta preocuparse por no tener dónde dormir esa noche."
   },
   "8e952c": {
    "text": "Orden de los trámites en los primeros días tras la llegada"
   },
   "da2b75": {
    "text": "Los trámites que se realizan tras instalarse siguen este orden: ① tarjeta SIM → ② cuenta bancaria → ③ seguro nacional de salud → ④ bicicleta y artículos de primera necesidad → ⑤ familiarizarse con el campus. Ver «Móvil · internet», «Banco · transferencias» y «Salud · seguros»."
   },
   "4547cd": {
    "text": "De ellos, **el registro de la dirección es un requisito previo para la mayoría de los trámites**: primero se presenta la tarjeta de residencia para registrar la dirección y se recoge al día siguiente; después se tramitan la tarjeta SIM y la cuenta bancaria. Además, no olvides asistir a las distintas orientaciones; el tutor o el Supporter te avisarán con antelación."
   },
   "3e3e21": {
    "text": "Los recorridos del aeropuerto, los carteles y la información local de esta sección se basan en los registros y fotos aportados por Hato y Ayáo (阿遥), y se han redactado a partir de ellos."
   },
   "2c1d72": {
    "text": "Periodo de instalación: el autobús de apoyo a la vida diaria (生活支援バス)"
   },
   "62e9c1": {
    "text": "Durante las dos primeras semanas aproximadamente tras entrar en el dormitorio, la universidad organiza el «autobús de apoyo a la vida diaria» (生活支援バス) para que los estudiantes nuevos que aún no tienen medio de transporte puedan comprar artículos de primera necesidad. Este nombre aparece en varios avisos: no es una línea permanente, sino un servicio temporal organizado específicamente para cada promoción."
   },
   "72acee": {
    "items": [
     {
      "text": "En la puerta de D1"
     },
     {
      "text": "En la puerta de ITO Kyoso-kan (伊都協奏館)"
     },
     {
      "text": "En la puerta de SETTLE International"
     },
     {
      "text": "En la puerta de la estación JR Kyudai-Gakkentoshi (JR 九大学研都市駅)"
     }
    ]
   },
   "041128": {
    "text": "**Las fechas, frecuencias y rutas cambian en cada promoción; cada dormitorio y cada facultad las avisa por separado.** La tabla anterior solo indica las paradas: la hora de salida y el destino concretos siguen el aviso que recibas del dormitorio o la facultad; no te bases en los horarios de años anteriores."
   },
   "7dc6be": {
    "text": "Parte del contenido de este artículo se basa en «新伊都国風土記» (Shin Ito-koku Fudoki), escrito por Hato_Tsubame y CantonSimon, e incluido con autorización de los autores. Los precios, horarios y procedimientos mencionados cambian con el tiempo; para asuntos importantes, consulta siempre las páginas web oficiales."
   }
  }
 },
 "guide-housing": {
  "ja": {
   "161806": {
    "items": [
     {
      "text": "九州大学指定寮：大学が民間アパートと契約しており、保証人なしで入居できます。詳細は留学課に問い合わせてください"
     },
     {
      "text": "公営住宅（市営/県営）：家賃が低めですが募集期間が限られており、九大住宅保証制度への加入が必要です"
     },
     {
      "text": "九大生協管理アパート：生協の店舗（伊都皎皎舎）または公式サイトで確認できます"
     },
     {
      "text": "福岡国際交流会館：多言語対応で、外国人向けです"
     },
     {
      "text": "シェアハウス/ゲストハウス：糸島エリアには古民家シェアハウスがあります（糸結、ことのはなど）"
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "「入国支援システム」でオンライン申請",
      "desc": "留学生はこのルートを利用します。来日までに手続きを完了させる必要があります。複数の寮を同時に申請し、希望順位を記入できます。"
     },
     {
      "title": "締切までに提出",
      "desc": "2026 年 10 月期を例にすると、締切は同年 7 月 31 日 17:00（日本時間）です。"
     },
     {
      "title": "結果通知を待つ",
      "desc": "10 月期の結果は、8 月末頃に本人と指導教員へメールで通知されます。"
     },
     {
      "title": "フライト情報を事前登録",
      "desc": "入寮日の7営業日前までに、システムでフライト情報を登録してください。登録がないと期日どおりに入居できません。"
     }
    ]
   },
   "910043": {
    "text": "交通：糸島系統の九大線はすべて通り、九大線系統にも 2A 線が1本通っています。利用できるバス停は国際村前、伊都の湯どころ入口、泊北口の3つです。国際村前が最寄りで、2A 線はすべて停車しますが、糸島系統は一部の路線のみ通過します。国際村前を通らない糸島線はすべて伊都の湯どころ入口に停車し、学校方面へはここで降りる方が近く、横断歩道も渡らずに済みます。泊北口は上記の路線すべてが停車します。"
   },
   "67f6a8": {
    "text": "校内寮と市街地での賃貸は2つの選択肢です。**まずは寮を検討することをおすすめします** ―― 費用が安く、手続きが簡単で、保証人も不要です。本記事では選び方、初期費用、契約上の注意点について説明します。"
   },
   "c8bea3": {
    "text": "建物と設備"
   },
   "6c71d4": {
    "text": "交通と立地"
   },
   "ef875c": {
    "text": "費用と募集期間"
   },
   "59e679": {
    "text": "校内寮：4つの寮の比較"
   },
   "ec0d25": {
    "text": "多くの留学生は1年目はまず校内寮に住み、生活が落ち着いてから賃貸を検討します。伊都キャンパスには応募できる寮が4つあります：ドミトリー1/2/3（D1/D2/D3）と伊都協奏館で、いずれも留学生と日本人学生の混住です。もう一つ、SETTLE International は民間アパートですが、九州大学が留学生寮に指定しており、同じ申込方法で応募できます。詳細は本ページ後半の専用セクションを参照してください。"
   },
   "bdce7d": {
    "headers": [
     "寮",
     "間取り",
     "月額費用",
     "教室棟まで"
    ],
    "rows": [
     [
      "D1",
      "単間 13 ㎡（254 室）",
      "23,000 円＋光熱費",
      "徒歩約 5 分"
     ],
     [
      "D2",
      "単間 17 ㎡／夫婦室 43 ㎡",
      "30,000 円＋光熱費",
      "徒歩約 5 分"
     ],
     [
      "D3",
      "4 人ユニットシェア",
      "23,500 円 全込み",
      "徒歩約 5 分"
     ],
     [
      "伊都協奏館",
      "単間 17 ㎡／夫婦室 43 ㎡",
      "21,000 円＋光熱費",
      "徒歩約 15 分"
     ]
    ]
   },
   "ca3d1f": {
    "text": "間取りと室数：ドミトリー1・2 にはそれぞれ単間 17 ㎡ と夫婦室 43 ㎡ があります。ドミトリー2 は単間 242 室・夫婦室 20 室、ドミトリー1 は単間 549 室・夫婦室 15 室です。伊都協奏館 D3 は 4 人ユニットシェア（個室 7 ㎡＋共用 28 ㎡）です。"
   },
   "612bb9": {
    "text": "月額費用＝寄宿料＋共益費 4,500 円です。D3 の 23,500 円には光熱水費とネット料金が含まれており、唯一の「全込み」プランです。残りの3か所は電気・ガス・水道が実費精算で、ネットは自分で指定事業者と契約する必要があります（月 2,000～3,500 円程度）。4か所とも入居時に敷金 30,000 円がかかり、退去時に返還されます。"
   },
   "a35e71": {
    "text": "**ずっと住み続けられるわけではありません。** 寮は学期ごとに再募集され、1回の入居期間は約半年です（例：2026 年 10 月期は入居日から 2027 年 3 月 15 日まで）。年に 4 月期と 10 月期の2回募集があり、期間が終わると規定に従って再申請するか退去する必要があります。長く住む予定の方は、この点を考慮に入れてください。"
   },
   "e96b54": {
    "items": [
     {
      "text": "4つの寮とも食堂はありません（公式に明記されています）。自炊するか、キャンパス内の食堂を利用してください"
     },
     {
      "text": "留学生は寝具のレンタルが必須です：半年 7,480 円、または年 14,960 円"
     },
     {
      "text": "夫婦室は留学生のみ申請でき、設置されているのは D2 と伊都協奏館のみです"
     },
     {
      "text": "D3 は 4 人ユニットシェア：留学生 2 名＋日本人学生 2 名。申請時には交流の動機を記入する必要があります"
     }
    ]
   },
   "0785ee": {
    "text": "寮の申請方法"
   },
   "f917d8": {
    "text": "D3 は第一志望のみ記入でき、井尻寮との併願はできません。部屋が割り当てられた後は、原則として変更できません。"
   },
   "f7acdc": {
    "text": "**研究生（研究生 / リサーチスチューデント）と交換留学生が入居できるかについて、公式には明確な記載がありません。** 日本人向けのルートでは研究生・聴講生などの非正課生が明確に除外されています。留学生向けのルートの募集要項には「新たに来学・来日予定の留学生」とだけ書かれており、この2つの身分は個別に記載されていません。不明な場合は直接問い合わせてください：国際部留学課受入支援係 imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "九州大学・学生寮",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "九州大学・宿舎情報ステーション",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC・留学生寮の詳細",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "入国支援システム（申請入口）",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "福岡の賃貸：3つのエリアの比較"
   },
   "c9a766": {
    "text": "学研（九大学研都市駅周辺）"
   },
   "60cdc9": {
    "text": "3つのエリアの中で最も範囲が広く、バス始発駅があるため、すべての路線に乗れて、通学に最も便利です。その分、同じ条件の家賃は周船寺の 1.1～1.2 倍程度です。"
   },
   "095a6e": {
    "text": "周船寺（Susenji）"
   },
   "fe6c53": {
    "text": "距離・家賃・生活の便利さのバランスが良いエリアです。一部の建物は古めで、木造の建物は防音が普通レベルです。交通は主に周船寺線に依存しており、バスの本数は学研ほど多くありません。"
   },
   "298caa": {
    "text": "キャンパスすぐ隣"
   },
   "374ae9": {
    "text": "建物は比較的新しく、非木造が多く、一部は基本的な家電付きです。欠点は周辺に店が少なく、日常の買い物は主にコンビニ頼みになるため、生活の利便性が低いことです。"
   },
   "02657e": {
    "text": "経験談：2022 年から学研に住んでいる学生の例では、大家が当初家賃を約2倍に値上げしようとしたところ、交渉の結果 53,000 円/月に据え置かれました。家賃には交渉の余地があるため、更新時に積極的に相談してみましょう。"
   },
   "1bb6a1": {
    "text": "初期費用"
   },
   "fa402b": {
    "text": "賃貸の初期費用は通常、家賃の 4～5 倍程度かかります。クリーニング代、鍵交換代、管理費などが含まれます（あくまで経験上の目安で、実際は契約内容によります）。審査には約1か月かかるため、7 月に入居予定なら 5 月頃から物件探しを始めることをおすすめします。"
   },
   "c505d6": {
    "text": "光熱費（電気・ガス・水道）"
   },
   "495d0f": {
    "text": "夏にエアコンを使うと、電気代・ガス代・水道代を合わせて月約 20,000 円になります（経験値で、使用状況によって異なります）。"
   },
   "cb74b3": {
    "text": "郵便転送"
   },
   "994e7b": {
    "text": "引っ越し後の郵便局での転送手続きについては【在留手続・郵便転送】を参照してください。ここでは重複して説明しません。"
   },
   "c541f6": {
    "text": "周辺の便利リンク"
   },
   "11a7ad": {
    "items": [
     {
      "text": "家賃相場（HOME'S）",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO 学生版（九大伊都キャンパス周辺）",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "text": "九大前不動産",
      "url": "https://www.kyudaimae.co.jp/"
     },
     {
      "text": "周船寺・段ボール捨て場",
      "url": "https://maps.app.goo.gl/WMofqf67itQLxT1B9"
     },
     {
      "text": "周船寺・ポスト",
      "url": "https://maps.app.goo.gl/v1yiCxUtXgySeABSA?g_st=ic"
     },
     {
      "text": "段ボール回収（福岡市）",
      "url": "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/kaishujoho.html#web"
     },
     {
      "text": "学校健康センター・相談",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "その他の賃貸の探し方"
   },
   "4919b5": {
    "text": "伊都キャンパス周辺は賃貸物件が限られているため、複数のルートを並行して探すことをおすすめします："
   },
   "83dd45": {
    "text": "注意：特別聴講学生、研究生などの非正課生は賃貸契約に制限がある場合があります。事前にサポートセンターへ相談することをおすすめします。"
   },
   "69b4a1": {
    "text": "さらに外側の2エリア：高田、富士見・泉"
   },
   "a7c359": {
    "headers": [
     "エリア（所在地含む）",
     "家賃",
     "生活",
     "通学"
    ],
    "rows": [
     [
      "高田（糸島市、周船寺―波多江の間）",
      "福岡市西区より安い",
      "買い物や食事に問題なし",
      "九大線の本数はやや少なめ、車があればより速い"
     ],
     [
      "富士見・泉（周船寺と学校の間、静かな住宅街）",
      "周船寺中心部よりやや安い",
      "北に行くほど少なくなり、南か東へ移動する必要がある",
      "周船寺または学園通り経由で、比較的便利"
     ]
    ]
   },
   "d28f07": {
    "text": "市をまたぐ場合は注意：高田は糸島市に属するため、手続きは筑前前原駅近くの糸島市役所で行います。福岡市西区に住む場合は、九大学研都市駅近くの福岡市役所西部出張所です。ゴミ袋も両市で共通ではないため、購入前に自分がどちらに属するか確認してください。"
   },
   "3dede6": {
    "text": "SETTLE International：他の寮との違い"
   },
   "6eed67": {
    "text": "SETTLE は実際には一般向けに運営されている商業アパートで、住民の約半数は日本人学生のため、家賃は三つの寮の中で最も高いです。運営形態が異なるため、他の寮や伊都協奏館での経験は通常そのまま当てはまりません。また、糸島市に位置するため、各種手続きの流れも福岡市西区に住む人とは異なります。"
   },
   "55a19c": {
    "headers": [
     "項目",
     "金額（九大申込ルート）"
    ],
    "rows": [
     [
      "寄宿料",
      "41,000 円／月"
     ],
     [
      "管理費",
      "5,000 円／月"
     ],
     [
      "24 時間サポート / 火災保険 / 口座振替",
      "合計 2,120 円／月"
     ],
     [
      "定額水道",
      "2,200 円／月"
     ],
     [
      "月額合計",
      "約 50,320 円＋光熱費"
     ],
     [
      "入居時一括",
      "132,100 円"
     ]
    ]
   },
   "97975c": {
    "text": "初期費用の内訳：132,100 円 ＝ 敷金 30,000 ＋ カードキー 16,500 ＋ クリーニング 58,300 ＋ 諸経費 27,300。月額費用にはネット料金（無料）が含まれますが、ルーターは自分で用意する必要があります。"
   },
   "482c1e": {
    "text": "**2つの料金体系があります。間違えないように注意してください。** 上の表は九大の申込ルートで入居する場合の料金です。運営会社に直接借りる場合は別の体系になります（家賃が別途かかり、礼金と1年契約があり、食事代は月ごとに別途支払います）。両者は公式に併存しているため、申請前に自分がどちらのルートかを必ず確認してください。"
   },
   "ee03f5": {
    "text": "公式情報の補足：間取りは 1R 約 18.48～21.69 ㎡（2タイプあり、指定不可）。食堂（食事代別途）と、6 階の学習室（10:00–20:00）があります。入居期間は他の寮より約半年長いです。料金と設備は公式の最新案内をご確認ください。"
   },
   "adf452": {
    "items": [
     {
      "text": "場所：キャンパス南西、南門の外で農学部の近く。南門から学校へは長い坂を上ります"
     },
     {
      "text": "向き：北向きは日当たりが悪く道路の騒音あり。南向きは夏が暑く、虫が多い"
     },
     {
      "text": "設備：建物は新しく、最上階に自習室と乾燥機、1 階に食堂があります"
     },
     {
      "text": "周辺：スーパーはありません（角にコンビニがあるのみ）。銭湯と数軒のレストランあり"
     }
    ]
   },
   "8d272b": {
    "text": "経験談：食堂付きは日本の学生アパートではよくある設備で、九大のような不便な場所では確かに価値があります。ただし、住んだ人の話では、味も価格も特筆するほどではありません。寮として入居する場合は商業アパートほどの高額な初期費用はかからないため、低コストで試せる機会ととらえることができます。"
   },
   "9c8146": {
    "text": "バスの本数は少なく、徒歩圏内に生活施設はほぼありません。いつでも気軽に出かけられるようにするには、自分の移動手段が必要です。また、SETTLE から学校までは坂ばかりです（南へ下って国道沿いまでは平らですが）。普通の自転車ではかなりきつく、電動アシスト自転車は高いうえ、坂道もそれほど楽になりません。自転車で坂を上る自信がなければ、原付を検討するのがおすすめです ――【交通・原付 / 免許】を参照してください。"
   },
   "63c7c3": {
    "text": "不動産会社の選び方"
   },
   "be819d": {
    "text": "ネットで見つけた気になる物件も、実際の物件情報はほとんどがどこかの不動産会社に握られています。写真だけでは部屋の実際の状態までは分からないため、できるだけ現地で内見しましょう。迷う物件があればグループで聞いて、現在住んでいる人や過去に住んだ人がいないか確かめましょう。"
   },
   "89ee7b": {
    "headers": [
     "不動産会社",
     "特徴"
    ],
    "rows": [
     [
      "九大生協",
      "大学の機関ではなく、一部の物件は仲介手数料無料"
     ],
     [
      "エイブル",
      "全国チェーン、仲介手数料は家賃半月分"
     ],
     [
      "三好不動産",
      "福岡ローカルで実力が強い"
     ],
     [
      "アパマンショップ",
      "イオンのすぐ下にあり、スーパーへ行くついでに寄れる"
     ],
     [
      "九大前不動産",
      "SETTLE の管理会社"
     ],
     [
      "日本ハウス",
      "自社管理物件は手数料を取らない場合あり"
     ],
     [
      "ホームメイト",
      "学校の近くに物件あり、店舗は姪浜"
     ]
    ]
   },
   "4e0936": {
    "text": "経験談：上記は実際に住んだ人の印象です。各社の制度は変わるため、契約前には実際の見積もりを確認してください。生協の九大賃貸ガイド誌は一読の価値があり、価格とエリアのイメージを掴むことができます。"
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME'S（地図モードで物件探しが便利）",
      "url": "https://www.homes.co.jp/chintai/"
     },
     {
      "text": "SUUMO 九州",
      "url": "https://suumo.jp/kyushu/"
     },
     {
      "text": "九大生協・住まいさがし",
      "url": "https://coop.kyushu-u.ac.jp/wp/"
     }
    ]
   },
   "3218b7": {
    "text": "本記事の一部は『新伊都国風土記』（作者：Hato_Tsubame、CantonSimon）をもとに、作者の許可を得て収録したものです。文中の料金・バスの本数・手続きは時間とともに変わるため、重要な事項は各公式サイトをご確認ください。"
   }
  },
  "en": {
   "161806": {
    "items": [
     {
      "text": "Kyushu University designated dormitories: the university contracts with private apartment operators, and move-in is possible without a guarantor; ask the International Student Section for details"
     },
     {
      "text": "Public housing (city-operated / prefecture-operated): lower rents but limited application periods, and enrollment in the Kyushu University Housing Guarantee System is required"
     },
     {
      "text": "Apartments managed by the Kyushu University co-op (九大生協): listed at the co-op store (伊都皎皎舎) or on its website"
     },
     {
      "text": "福岡国際交流会館 (Fukuoka International Exchange Center): multilingual support, aimed at foreign residents"
     },
     {
      "text": "Share houses / guest houses: the Itoshima area has share houses in renovated old homes (e.g., 糸結, ことのは, etc.)"
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "Apply online through the Pre-Arrival Support System",
      "desc": "International students use this channel and must complete the procedure before arriving in Japan. Multiple dormitories can be applied for at once, in order of preference."
     },
     {
      "title": "Submit before the deadline",
      "desc": "For the October 2026 term, for example, the deadline is 17:00 on July 31 of that year (Japan time)."
     },
     {
      "title": "Wait for the result notification",
      "desc": "For the October term, notification is sent by email around the end of August to the applicant and the supervising faculty member."
     },
     {
      "title": "Register flight details in advance",
      "desc": "Flight information must be entered in the system at least 7 business days before the move-in date; otherwise, move-in may not be possible on time."
     }
    ]
   },
   "910043": {
    "text": "Transport: all 九大 (Kyudai) line buses of the Itoshima system pass through here, and one route, 2A, of the Kyudai line system also passes through. Three stops are available: 国際村前, 伊都の湯どころ入口 and 泊北口. 国際村前 is the closest and is served by all 2A buses, but only some Itoshima-system routes run through it; Itoshima-system routes that do not pass 国際村前 all stop at 伊都の湯どころ入口, where alighting toward the campus is closer and there is no need to cross the road; 泊北口 is served by all of the routes above."
   },
   "67f6a8": {
    "text": "On-campus dormitories and city apartments are two separate paths, and **dormitories are recommended first** - they are cheaper, the procedures are simpler, and no guarantor is needed. This article explains how to choose, the initial costs, and points to note when signing a contract."
   },
   "c8bea3": {
    "text": "Rooms and Facilities"
   },
   "6c71d4": {
    "text": "Transport and Location"
   },
   "ef875c": {
    "text": "Fees and Recruitment Periods"
   },
   "59e679": {
    "text": "On-Campus Dormitories: Comparison of the Four Options"
   },
   "ec0d25": {
    "text": "Most international students spend their first year in an on-campus dormitory and consider renting privately after settling in. The Ito Campus offers four options: ドミトリー1/2/3 (D1/D2/D3) and 伊都協奏館, all of which house international and Japanese students together. One further option, SETTLE International, is a private apartment building designated by Kyushu University as an international student dormitory and is handled under the same application process; see the dedicated section later on this page."
   },
   "bdce7d": {
    "headers": [
     "Dormitory",
     "Unit type",
     "Monthly fee",
     "To lecture buildings"
    ],
    "rows": [
     [
      "D1",
      "Single room 13 ㎡ (254 rooms)",
      "23,000 yen + utilities",
      "About 5 min on foot"
     ],
     [
      "D2",
      "Single 17 ㎡ / couple 43 ㎡",
      "30,000 yen + utilities",
      "About 5 min on foot"
     ],
     [
      "D3",
      "4-person shared unit",
      "23,500 yen all-inclusive",
      "About 5 min on foot"
     ],
     [
      "伊都協奏館",
      "Single 17 ㎡ / couple 43 ㎡",
      "21,000 yen + utilities",
      "About 15 min on foot"
     ]
    ]
   },
   "ca3d1f": {
    "text": "Room types and numbers: ドミトリー1 and ドミトリー2 each offer singles of 17 ㎡ and couple units of 43 ㎡; ドミトリー2 has 242 singles and 20 couple units, while ドミトリー1 has 549 singles and 15 couple units. The 4-person shared units in 伊都協奏館 D3 consist of a 7 ㎡ private room plus 28 ㎡ of shared space."
   },
   "612bb9": {
    "text": "Monthly fee = lodging fee (寄宿料) + common-area fee (共益費) of 4,500 円. The 23,500 円 for D3 already includes electricity, gas, water and internet, making it the only \"all-inclusive\" option; for the other three, utilities are billed by actual usage, and the internet requires a separate contract with a designated carrier (about 2,000-3,500 円/month). All four charge a deposit of 30,000 円, refundable when moving out."
   },
   "a35e71": {
    "text": "**Not a place to stay indefinitely.** Dormitories are re-opened for applications every semester, roughly half a year at a time (e.g., the October 2026 term runs from the move-in date to March 15, 2027). Applications open once for the April term and once for the October term each year, and at the end of each term residents must re-apply or move out as prescribed. This should be factored into any long-term plans."
   },
   "e96b54": {
    "items": [
     {
      "text": "None of the four has a cafeteria (as explicitly stated officially); residents must cook for themselves or eat at campus cafeterias"
     },
     {
      "text": "International students must rent bedding: 7,480 yen per half year, or 14,960 yen per year"
     },
     {
      "text": "Couple units can be applied for only by international students, and only ドミトリー2 and 伊都協奏館 have them"
     },
     {
      "text": "D3 consists of 4-person shared units: 2 international students + 2 Japanese students; the application must state the motivation for exchange"
     }
    ]
   },
   "0785ee": {
    "text": "Applying for Dormitories"
   },
   "f917d8": {
    "text": "D3 can be listed only as the first choice, and cannot be applied for together with 井尻寮. In principle, once a room is assigned, changes are not permitted."
   },
   "f7acdc": {
    "text": "**Whether research students (研究生 / リサーチスチューデント) and exchange students can move in is not clearly stated by the university.** The Japanese path explicitly excludes non-degree students such as research students and auditing students; for the international path, the application guidelines only state \"新たに来学・来日予定の留学生\" (international students newly scheduled to enroll and arrive) and do not list these two categories separately. When in doubt, ask directly: 国際部留学課受入支援係 imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "Kyushu University - Student Dormitories",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "Kyushu University - Dormitory Information Site",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC - International Student Dormitory Details",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "Pre-Arrival Support System (application portal)",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "Renting in Fukuoka: Comparison of Three Areas"
   },
   "c9a766": {
    "text": "学研 (near Kyudai-Gakkentoshi Station)"
   },
   "60cdc9": {
    "text": "The largest of the three areas, and the departure point of the bus service, so all routes can be taken from here and the commute is the most convenient. Correspondingly, rent for comparable conditions is about 1.1-1.2 times that of 周船寺 (Susenji)."
   },
   "095a6e": {
    "text": "周船寺 (Susenji)"
   },
   "fe6c53": {
    "text": "A fairly balanced option in terms of distance, rent and everyday convenience. Some buildings are older, and wooden construction offers average sound insulation. Transport relies mainly on the 周船寺 (Susenji) line, whose bus routes are less numerous than those of 学研."
   },
   "298caa": {
    "text": "Right Beside the Campus"
   },
   "374ae9": {
    "text": "Buildings here are usually newer and mostly non-wooden, and some are furnished with basic appliances. The drawback is that there are few shops nearby; daily shopping depends mainly on convenience stores, and everyday convenience is lower."
   },
   "02657e": {
    "text": "Experience note: a student has been living in 学研 since 2022; the landlord originally planned to nearly double the rent, but after negotiation it remained at 53,000 円/month. Rents leave room for negotiation, and proactive communication at renewal is recommended."
   },
   "1bb6a1": {
    "text": "Initial Costs"
   },
   "fa402b": {
    "text": "Initial costs for renting are generally 4-5 times the monthly rent, including cleaning, key replacement, management fees and the like (an empirical range; the actual contract prevails). The screening process takes about one month, so to move in by July, house hunting should begin as early as May."
   },
   "c505d6": {
    "text": "Utility Fees (Electricity, Gas, Water)"
   },
   "495d0f": {
    "text": "In summer with air conditioning running, electricity, gas and water together come to about 20,000 円 per month (an empirical figure that varies with usage habits)."
   },
   "cb74b3": {
    "text": "Mail Forwarding"
   },
   "994e7b": {
    "text": "How to arrange mail forwarding at the post office after moving is covered in [Residence Procedures - Post Office Mail Address Transfer]; it is not repeated here."
   },
   "c541f6": {
    "text": "Useful Links"
   },
   "11a7ad": {
    "items": [
     {
      "text": "Rent market (HOME'S)",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO Student Edition (around Kyushu University Ito Campus)",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "text": "九大前不動産",
      "url": "https://www.kyudaimae.co.jp/"
     },
     {
      "text": "周船寺 - Cardboard Box Disposal Point",
      "url": "https://maps.app.goo.gl/WMofqf67itQLxT1B9"
     },
     {
      "text": "周船寺 - Postbox",
      "url": "https://maps.app.goo.gl/v1yiCxUtXgySeABSA?g_st=ic"
     },
     {
      "text": "Cardboard Box Recycling (Fukuoka City)",
      "url": "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/kaishujoho.html#web"
     },
     {
      "text": "University Health Center - Counseling",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "More Housing Channels"
   },
   "4919b5": {
    "text": "Rental listings around the Ito Campus are limited; using several channels in parallel is recommended:"
   },
   "83dd45": {
    "text": "Note: non-degree students such as special auditing students and research students may face restrictions when renting; consulting the サポートセンター (Support Center) in advance is recommended."
   },
   "69b4a1": {
    "text": "Two More Areas Farther Out: 高田, 富士见·泉"
   },
   "a7c359": {
    "headers": [
     "Area (with location)",
     "Rent",
     "Daily life",
     "Commute"
    ],
    "rows": [
     [
      "高田 (Itoshima City, between 周船寺 and 波多江)",
      "Cheaper than Nishi-ku, Fukuoka City",
      "Adequate shopping and dining options",
      "The 九大 (Kyudai) line runs somewhat less often; a car makes travel faster"
     ],
     [
      "富士见·泉 (between 周船寺 and the campus, a quiet residential area)",
      "Slightly cheaper than central 周船寺",
      "Options thin out toward the north; heading south or east is needed",
      "Via 周船寺 or 学園通, fairly convenient"
     ]
    ]
   },
   "d28f07": {
    "text": "Note the municipal boundary: 高田 belongs to Itoshima City, so administrative errands go to the 糸島市役所 (Itoshima City Hall) near 筑前前原 (Chikuzen-Maebaru) Station; residents of Nishi-ku, Fukuoka City use the 福岡市役所西部出張所 (Fukuoka City Hall Western Branch Office) near Kyudai-Gakkentoshi Station. The designated garbage bags also differ between the two, so confirm which side applies before buying."
   },
   "3dede6": {
    "text": "SETTLE International: Differences from the Other Dormitories"
   },
   "6eed67": {
    "text": "SETTLE is in fact a commercially operated apartment building open to the general public, and about half of its residents are Japanese students; it is therefore the most expensive of the three. Because of this different mode of operation, experience from the other dormitories and 伊都協奏館 usually does not carry over; and since it is located in Itoshima City, administrative procedures also differ from those for residents of Nishi-ku, Fukuoka City."
   },
   "55a19c": {
    "headers": [
     "Item",
     "Amount (Kyushu University application channel)"
    ],
    "rows": [
     [
      "Lodging fee (寄宿料)",
      "41,000 yen/month"
     ],
     [
      "Management fee",
      "5,000 yen/month"
     ],
     [
      "24-hour support / fire insurance / bank transfer (口座振替)",
      "Total 2,120 yen/month"
     ],
     [
      "Fixed water charge (定额水道)",
      "2,200 yen/month"
     ],
     [
      "Monthly total",
      "About 50,320 yen + utilities"
     ],
     [
      "One-time at move-in",
      "132,100 yen"
     ]
    ]
   },
   "97975c": {
    "text": "Initial cost breakdown: 132,100 円 = deposit 30,000 + card key 16,500 + cleaning 58,300 + miscellaneous fees 27,300. The monthly fee includes internet access (free), but a router must be provided by the resident."
   },
   "482c1e": {
    "text": "**Two price systems - do not mix them up.** The table above shows the prices for moving in through the Kyushu University application channel; renting directly from the operator is a different system (rent charged separately, with key money, a one-year contract, and meal fees billed separately each month). Both exist officially, so confirm which path applies before applying."
   },
   "ee03f5": {
    "text": "Official information supplement: the unit type is 1R of about 18.48-21.69 ㎡ (two layouts, which cannot be chosen); a dining hall is provided (meals billed separately), and there is a study room on the 6th floor (10:00-20:00). The period of residence is about half a year longer than at the other dormitories. Prices and facilities are subject to the latest official information."
   },
   "adf452": {
    "items": [
     {
      "text": "Location: southwest of the campus, outside the South Gate, near the Faculty of Agriculture; the route from the South Gate to the campus involves a long uphill climb"
     },
     {
      "text": "Orientation: north-facing units have poor daylight and road noise; south-facing units are hot in summer and have more insects"
     },
     {
      "text": "Facilities: the building is new; the top floor has a study room and dryers, and the first floor has a cafeteria"
     },
     {
      "text": "Surroundings: no supermarket (only a convenience store at the corner); there is a public bath and a few restaurants"
     }
    ]
   },
   "8d272b": {
    "text": "Experience note: an attached cafeteria is a common feature in Japanese student apartment complexes and does add value in a location as remote as Kyushu University, but according to former residents the food and prices are nothing special. Moving in as a dormitory means avoiding the high initial costs charged for commercial apartments, so it can serve as a low-cost trial."
   },
   "9c8146": {
    "text": "Bus frequency is sparse, and there is almost no daily-life infrastructure within walking distance; getting out at any time requires one's own transport. The route from SETTLE to the campus is all uphill (flat only southward along the national highway), which is hard work on an ordinary bicycle; e-bikes are expensive and not much easier on slopes. If cycling uphill is a concern, consider a 原付 (motorized scooter) instead - see [Transport - 原付 / Driver's License]."
   },
   "63c7c3": {
    "text": "Key Points for Choosing an Agency"
   },
   "be819d": {
    "text": "A listing found online is usually held by some specific agency in practice. Photos do not show the actual condition of a unit, so units should be viewed in person whenever possible; for uncertain listings, ask in a group chat whether anyone currently lives there or has lived there."
   },
   "89ee7b": {
    "headers": [
     "Agency",
     "Features"
    ],
    "rows": [
     [
      "九大生協",
      "Not a university body; some listings have no agency fee"
     ],
     [
      "エイブル",
      "Nationwide chain; agency fee is half a month's rent"
     ],
     [
      "三好不動産",
      "Strong local presence in Fukuoka"
     ],
     [
      "アパマンショップ",
      "Located right below AEON; on the way to the supermarket"
     ],
     [
      "九大前不動産",
      "The manager of SETTLE"
     ],
     [
      "日本ハウス",
      "No fee on some self-managed listings"
     ],
     [
      "ホームメイト",
      "Has units near the campus; office in 姪浜 (Meinohama)"
     ]
    ]
   },
   "4e0936": {
    "text": "Experience note: the above reflects the impressions of former residents; individual policies change, so rely on actual quotes before signing. The co-op's (生協) Kyushu University rental magazine is worth a first look, as it gives a rough sense of prices and areas."
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME'S (map view is convenient for searching)",
      "url": "https://www.homes.co.jp/chintai/"
     },
     {
      "text": "SUUMO Kyushu",
      "url": "https://suumo.jp/kyushu/"
     },
     {
      "text": "九大生協 - Housing Search (住まいさがし)",
      "url": "https://coop.kyushu-u.ac.jp/wp/"
     }
    ]
   },
   "3218b7": {
    "text": "Parts of this article are compiled from《新伊都国風土記》(authors: Hato_Tsubame and CantonSimon), included with the authors' permission. Prices, schedules and procedures in the text change over time; for important matters, refer to the respective official websites."
   }
  },
  "ko": {
   "161806": {
    "items": [
     {
      "text": "九州大学 지정 기숙사(指定寮): 학교가 민간 아파트와 계약하며 보증인 없이 입주할 수 있습니다. 자세한 내용은 유학과(留学課)에 문의하세요."
     },
     {
      "text": "공영 주택(시영/현영): 월세가 낮지만 모집 기간이 제한적이며 규다이 주택 보증 제도(九大住宅保証制度)에 가입해야 합니다."
     },
     {
      "text": "九大生協 관리 아파트: 생협 매장(伊都皎皎舎) 또는 공식 사이트에서 확인할 수 있습니다."
     },
     {
      "text": "福岡国際交流会館: 다국어 대응으로 외국인을 대상으로 합니다."
     },
     {
      "text": "셰어하우스/게스트하우스: 이토시마(糸島) 지역에는 고민가(古民家) 셰어하우스가 있습니다(예: 糸結, ことのは 등)."
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "「입국 지원 시스템」에서 온라인 신청",
      "desc": "유학생은 이 경로로 진행하며, 일본에 오기 전에 완료해야 합니다. 여러 곳을 동시에 신청하고 지망 순위를 기재할 수 있습니다."
     },
     {
      "title": "마감 전에 제출",
      "desc": "2026년 10월 기수를 예로 들면, 마감은 해당 연도 7월 31일 17:00(일본 시간)입니다."
     },
     {
      "title": "결과 통지 대기",
      "desc": "10월 기수는 약 8월 말에 이메일로 본인과 지도 교원에게 통지됩니다."
     },
     {
      "title": "항공편 사전 등록",
      "desc": "입사일 기준 최소 7영업일 전에 시스템에 항공편 정보를 입력해야 하며, 그렇지 않으면 제때 입주할 수 없습니다."
     }
    ]
   },
   "910043": {
    "text": "교통: 이토시마(糸島) 계통의 九大線이 모두 경유하며, 九大線 계통에도 2A 노선 하나가 경유합니다. 이용 가능한 정류장은 国際村前, 伊都の湯どころ入口, 泊北口 세 곳입니다. 国際村前이 가장 가깝고 2A 노선이 모두 정차하지만 이토시마 계통은 일부 노선만 경유합니다. 国際村前을 경유하지 않는 이토시마 계통 노선은 모두 伊都の湯どころ入口에 정차하며, 학교 방향으로 갈 때는 이곳에서 내리는 것이 더 가깝고 길을 건널 필요도 없습니다. 泊北口는 위 노선이 모두 정차합니다."
   },
   "67f6a8": {
    "text": "교내 기숙사와 시내 자취는 두 가지 경로이며, **기숙사를 먼저 고려할 것**을 권장합니다. 비용이 낮고 절차가 간단하며 보증인이 필요 없기 때문입니다. 이 문서에서는 선택 방법, 초기 비용, 계약 시 주의사항을 설명합니다."
   },
   "c8bea3": {
    "text": "주택과 시설"
   },
   "6c71d4": {
    "text": "교통과 위치"
   },
   "ef875c": {
    "text": "비용과 모집 기간"
   },
   "59e679": {
    "text": "교내 기숙사: 네 곳 비교"
   },
   "ec0d25": {
    "text": "대부분의 유학생은 1년차에 교내 기숙사에 먼저 거주한 후, 자리를 잡은 다음 자취를 고려합니다. 이토(伊都) 캠퍼스에는 신청 가능한 곳이 네 곳 있습니다: ドミトリー1/2/3(D1/D2/D3)과 이토쿄소칸(伊都協奏館)이며, 모두 유학생과 일본인 학생이 함께 생활합니다. 또 한 곳인 SETTLE International은 민간 아파트지만 규슈대학(九州大学)이 유학생 기숙사로 지정해 동일한 신청 절차를 거칩니다. 자세한 내용은 본 문서 뒤의 별도 항목을 참조하세요."
   },
   "bdce7d": {
    "headers": [
     "기숙사",
     "방 형태",
     "월 비용",
     "교수동까지"
    ],
    "rows": [
     [
      "D1",
      "싱글 13㎡(254실)",
      "23,000엔 + 수도·전기",
      "도보 약 5분"
     ],
     [
      "D2",
      "싱글 17㎡/부부 43㎡",
      "30,000엔 + 수도·전기",
      "도보 약 5분"
     ],
     [
      "D3",
      "4인 유닛 공용",
      "23,500엔 전액 포함",
      "도보 약 5분"
     ],
     [
      "伊都協奏館",
      "싱글 17㎡/부부 43㎡",
      "21,000엔 + 수도·전기",
      "도보 약 15분"
     ]
    ]
   },
   "ca3d1f": {
    "text": "방 형태와 실수: ドミトリー1·2는 각각 싱글 17㎡와 부부실 43㎡를 갖추고 있습니다. ドミトリー2는 싱글 242실, 부부실 20실이며, ドミトリー1은 싱글 549실, 부부실 15실입니다. 이토쿄소칸(伊都協奏館) D3는 4인 유닛 공용(개인실 7㎡ + 공용 28㎡)입니다."
   },
   "612bb9": {
    "text": "월 비용 = 기숙료(寄宿料) + 공동이익비(共益費) 4,500 円. D3의 23,500 円에는 수도·전기·가스와 인터넷 요금이 포함되어 있어 유일하게 「전액 포함」인 곳이며, 나머지 세 곳은 수도·전기·가스를 실제 사용량대로 별도 부과하고 네트워크는 지정 통신사업자와 직접 계약해야 합니다(약 2,000~3,500 円/월). 네 곳 모두 보증금 30,000 円을 별도로 징수하며 퇴거 시 반환됩니다."
   },
   "a35e71": {
    "text": "**한 번 들어가면 계속 살 수 있는 것이 아닙니다.** 기숙사는 매 학기 재모집하며, 1회 기간은 약 반년입니다(예: 2026년 10월 기수는 입주일부터 2027년 3월 15일까지). 매년 4월 기수와 10월 기수가 각 한 차례 있으며, 기간이 끝나면 규정에 따라 재신청하거나 퇴거해야 합니다. 장기 거주를 계획한다면 이 점을 반드시 감안하세요."
   },
   "e96b54": {
    "items": [
     {
      "text": "네 곳 모두 식당이 없습니다(공식 안내에 명시). 직접 요리하거나 교내 식당을 이용해야 합니다."
     },
     {
      "text": "유학생은 침구를 반드시 대여해야 합니다: 7,480엔/반년 또는 14,960엔/1년"
     },
     {
      "text": "부부실은 유학생만 신청할 수 있으며 D2와 이토쿄소칸(伊都協奏館)에만 마련되어 있습니다."
     },
     {
      "text": "D3는 4인 유닛 공용입니다: 유학생 2명 + 일본인 학생 2명. 신청 시 교류 동기를 작성해야 합니다."
     }
    ]
   },
   "0785ee": {
    "text": "기숙사 신청 방법"
   },
   "f917d8": {
    "text": "D3는 1지망으로만 기재할 수 있으며 이지리료(井尻寮)와 중복 지원할 수 없습니다. 방이 배정되면 원칙적으로 변경할 수 없습니다."
   },
   "f7acdc": {
    "text": "**연구생(研究生/리서치 스튜던트(リサーチスチューデント))과 교환학생의 입주 가능 여부는 공식적으로 명확히 밝혀지지 않았습니다.** 일본인 경로는 연구생, 청강생(聴講生) 등 비정규생(非正課生)을 명시적으로 제외하며, 유학생 경로의 모집 요강에는 「신규 입학·입국 예정 유학생(新たに来学・来日予定の留学生)」이라고만 적혀 있어 이 두 부류를 별도로 명시하지 않았습니다. 확실하지 않다면 직접 문의하세요: 국제부 유학과 수입지원계(国際部留学課受入支援係) imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "九州大学 · 학생 기숙사(学生寮)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "九州大学 · 기숙사 정보 사이트",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC · 유학생 기숙사 상세",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "입국 지원 시스템(신청 입구)",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "후쿠오카 자취: 세 지역 비교"
   },
   "c9a766": {
    "text": "학겐(学研)·규다이가쿠겐토시(九大学研都市) 역 주변"
   },
   "60cdc9": {
    "text": "세 지역 중 범위가 가장 넓고 버스 기점이 있어 모든 노선을 이용할 수 있으며 통학에 가장 편리합니다. 그에 따라 같은 조건의 월세는 周船寺의 약 1.1~1.2배입니다."
   },
   "095a6e": {
    "text": "周船寺(스센지/Susenji)"
   },
   "fe6c53": {
    "text": "거리, 월세, 생활 편의성 사이에서 비교적 균형이 잡힌 지역입니다. 일부 건물은 오래되었고 목조 건물의 방음은 보통 수준입니다. 교통은 주로 周船寺선에 의존하며, 버스 노선은 学研만큼 다양하지 않습니다."
   },
   "298caa": {
    "text": "캠퍼스 바로 옆"
   },
   "374ae9": {
    "text": "건물은 대체로 새롭고 비목조가 많으며 일부는 기본 가전이 갖춰져 있습니다. 단점은 주변에 상점이 적어 일상적인 쇼핑을 주로 편의점에 의존해야 하므로 생활 편의성이 낮다는 점입니다."
   },
   "02657e": {
    "text": "경험 참고: 한 학생이 2022년부터 学研에 거주 중인데, 집주인이 처음에 월세를 약 2배 올리려 했으나 협의 후 53,000 円/월을 유지했습니다. 월세에는 협상의 여지가 있으며 갱신 시 적극적으로 소통하세요."
   },
   "1bb6a1": {
    "text": "초기 비용"
   },
   "fa402b": {
    "text": "자취 초기 비용은 보통 월세의 4~5배이며, 청소비, 키 교체비, 관리비 등이 포함됩니다(경험상 범위이며 실제는 계약 기준입니다). 심사 절차는 약 한 달이 걸리므로 7월 입주를 계획한다면 5월부터 방을 찾기 시작하는 것이 좋습니다."
   },
   "c505d6": {
    "text": "수도·전기·가스 요금"
   },
   "495d0f": {
    "text": "여름철 에어컨 가동 시 전기, 가스, 수도 요금을 합쳐 월 약 20,000 円입니다(경험치이며 사용 습관에 따라 다릅니다)."
   },
   "cb74b3": {
    "text": "우편물 전송(주소 변경)"
   },
   "994e7b": {
    "text": "이사 후 우체국 전송 신청 방법은 【재류 수속·우편물 전송】을 참조하세요. 이곳에서는 반복하지 않습니다."
   },
   "c541f6": {
    "text": "주변 유용 링크"
   },
   "11a7ad": {
    "items": [
     {
      "text": "월세 시세(HOME'S)",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO 학생판(규다이 이토 캠퍼스 주변)",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "text": "九大前不動産",
      "url": "https://www.kyudaimae.co.jp/"
     },
     {
      "text": "周船寺 · 골판지 버리는 곳",
      "url": "https://maps.app.goo.gl/WMofqf67itQLxT1B9"
     },
     {
      "text": "周船寺 · 우체통",
      "url": "https://maps.app.goo.gl/v1yiCxUtXgySeABSA?g_st=ic"
     },
     {
      "text": "골판지 수거(후쿠오카시)",
      "url": "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/kaishujoho.html#web"
     },
     {
      "text": "학교 건강 센터 · 상담",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "추가 월세 정보 채널"
   },
   "4919b5": {
    "text": "이토(伊都) 캠퍼스 주변의 임대 물건은 한정적이므로 여러 채널을 병행할 것을 권장합니다:"
   },
   "83dd45": {
    "text": "주의: 특별 청강생(特別聴講学生), 연구생(研究生) 등 비정규생은 자취 시 제한을 받을 수 있으므로 사전에 서포트 센터(サポートセンター)에 문의할 것을 권장합니다."
   },
   "69b4a1": {
    "text": "조금 더 나간 두 지역: 다카타(高田), 후지미·이즈미(富士見·泉)"
   },
   "a7c359": {
    "headers": [
     "지역(위치 포함)",
     "월세",
     "생활",
     "통학"
    ],
    "rows": [
     [
      "다카타(高田)·이토시마시 소재(糸島市), 周船寺~波多江 사이",
      "후쿠오카시 니시구보다 저렴",
      "쇼핑·식사 문제없음",
      "九大線 배차가 다소 적음, 차가 있으면 더 빠름"
     ],
     [
      "후지미·이즈미(富士見·泉), 周船寺와 학교 중간의 조용한 주택가",
      "周船寺 중심부보다 약간 저렴",
      "북쪽으로 갈수록 적어져 남쪽·동쪽으로 나가야 함",
      "周船寺 또는 学園通 경유가 비교적 편리"
     ]
    ]
   },
   "d28f07": {
    "text": "시 경계를 넘는 경우 주의: 다카타(高田)는 이토시마시(糸島市)에 속하므로 행정 업무는 치쿠젠마에바루(筑前前原) 역 부근의 이토시마 시청(糸島市役所)을 이용해야 하며, 후쿠오카시 니시구에 사는 경우에는 규다이가쿠겐토시(九大学研都市) 역 부근의 후쿠오카시청 니시부 출장소(福岡市役所西部出張所)를 이용합니다. 쓰레기 봉투도 양쪽이 호환되지 않으므로 구매 전에 자신이 어느 쪽에 속하는지 확인하세요."
   },
   "3dede6": {
    "text": "SETTLE International: 다른 기숙사와의 차이점"
   },
   "6eed67": {
    "text": "SETTLE는 실제로 일반에 영업하는 상업용 아파트이며, 입주자의 약 절반이 일본인 학생이라 세 곳 중 가격이 가장 높습니다. 운영 방식이 다르기 때문에 다른 기숙사나 協奏館의 경험은 보통 적용되지 않으며, 이토시마시(糸島市)에 위치한 관계로 각종 행정 절차도 후쿠오카시 니시구에 사는 사람들과 다릅니다."
   },
   "55a19c": {
    "headers": [
     "항목",
     "금액(九大 신청 경로)"
    ],
    "rows": [
     [
      "기숙료",
      "41,000엔/월"
     ],
     [
      "관리비",
      "5,000엔/월"
     ],
     [
      "24시간 지원 / 화재 보험 / 계좌 자동이체(口座振替)",
      "합계 2,120엔/월"
     ],
     [
      "정액 수도요금",
      "2,200엔/월"
     ],
     [
      "월 합계",
      "약 50,320엔 + 광열비(光熱費)"
     ],
     [
      "입주 시 일시불",
      "132,100엔"
     ]
    ]
   },
   "97975c": {
    "text": "초기 비용 내역: 132,100 円 = 보증금 30,000 + 카드키 16,500 + 청소비 58,300 + 제경비(諸経費) 27,300. 월 비용에는 인터넷 요금이 포함되어 있으며(무료), 라우터는 직접 준비해야 합니다."
   },
   "482c1e": {
    "text": "**두 가지 가격 체계가 있으니 헷갈리지 마세요.** 위 표는 九大 신청 경로로 입주할 때의 가격이며, 운영사에 직접 임대하면 별도의 체계입니다(월세 별도, 예약금(礼金)과 1년 계약, 식비는 월별 별도 징수). 두 체계는 공식적으로 공존하므로 신청 전에 자신이 어느 경로로 진행하는지 확인하세요."
   },
   "ee03f5": {
    "text": "공식 정보 보충: 방 형태는 1R 약 18.48~21.69㎡(두 가지 타입 중 지정 불가)이며, 식당(식비 별도), 6층 학습실(10:00-20:00)이 마련되어 있습니다. 입주 기간은 다른 기숙사보다 약 반년 깁니다. 가격과 시설은 공식 최신 안내(案内)를 기준으로 합니다."
   },
   "adf452": {
    "items": [
     {
      "text": "위치: 캠퍼스 남서쪽, 남문(南門) 밖, 농학부 부근에 있습니다. 남문에서 학교로 가려면 긴 오르막길을 올라가야 합니다."
     },
     {
      "text": "방향: 북향은 채광이 나쁘고 도로 소음이 있으며, 남향은 여름에 햇볕이 강하고 모기가 많습니다."
     },
     {
      "text": "시설: 건물이 매우 새롭고 최상층에 자습실과 건조기가 있으며 1층에 식당이 있습니다."
     },
     {
      "text": "주변: 슈퍼마켓은 없고(길목의 편의점만 있음) 목욕 시설과 몇몇 식당이 있습니다."
     }
    ]
   },
   "8d272b": {
    "text": "경험 참고: 식당이 딸린 것은 일본 학생 아파트에서 흔한 구성이며, 九大 같은 외딴 위치에서는 확실히 가치가 있지만 살아본 사람들의 반응에 따르면 맛과 가격 모두 뛰어나지는 않습니다. 기숙사로 입주할 때는 상업용 아파트식 고액의 초기 비용이 부과되지 않으므로 저비용의 경험으로 삼을 수 있습니다."
   },
   "9c8146": {
    "text": "배차 간격이 길고 도보권 안에 생활 시설이 거의 없어 언제든 외출하려면 자가 교통수단이 필요합니다. SETTLE에서 학교까지는 전부 오르막길이며(남쪽으로는 국도(国道) 연변이 평지), 일반 자전거는 상당히 힘들고 전기자전거는 비싸면서 오르막에서도 크게 편하지 않습니다. 자전거로 오르막길을 오르는 데 자신이 없다면 원부(原付)를 바로 고려할 것을 권장합니다 - 【交通·原付 / 驾照】을 참조하세요."
   },
   "63c7c3": {
    "text": "부동산 중개 선택 포인트"
   },
   "be819d": {
    "text": "인터넷에서 마음에 드는 집을 찾아도 실제 물건은 대부분 어느 중개업체가 쥐고 있습니다. 사진만으로는 집의 실제 상태를 알 수 없으므로 가능하면 직접 현장에서 봐야 하며, 확신이 없는 집은 단체 채팅방에서 현재 살고 있거나 살았던 사람이 있는지 물어보세요."
   },
   "89ee7b": {
    "headers": [
     "중개업체",
     "특징"
    ],
    "rows": [
     [
      "九大生協",
      "학교 기관이 아니며 일부 물건은 수수료 면제"
     ],
     [
      "エイブル",
      "전국 체인, 중개 수수료는 월세 반개월분"
     ],
     [
      "三好不動産",
      "후쿠오카 지역에서 비교적 강세"
     ],
     [
      "アパマンショップ",
      "이온(AEON) 건물 1층에 있어 마트 갈 때 들르기 편함"
     ],
     [
      "九大前不動産",
      "SETTLE의 운영사"
     ],
     [
      "日本ハウス",
      "자가 관리 물건 중 일부는 수수료를 받지 않음"
     ],
     [
      "ホームメイト",
      "학교 근처에 물건이 있으며 매장은 姪浜에 있음"
     ]
    ]
   },
   "4e0936": {
    "text": "경험 참고: 위 내용은 살아본 사람들의 인상이며, 업체별 정책은 달라질 수 있으므로 계약 전 실제 견적을 기준으로 하세요. 생협(生協)이 발행하는 九大 월세 잡지(住まいさがし)를 먼저 훑어보면 가격과 지역에 대한 대략적인 감을 잡을 수 있습니다."
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME'S(지도 모드로 방 찾기가 편리함)",
      "url": "https://www.homes.co.jp/chintai/"
     },
     {
      "text": "SUUMO 규슈",
      "url": "https://suumo.jp/kyushu/"
     },
     {
      "text": "九大生協 · 주택 찾기(住まいさがし)",
      "url": "https://coop.kyushu-u.ac.jp/wp/"
     }
    ]
   },
   "3218b7": {
    "text": "이 문서의 일부 내용은 「新伊都国風土記」(저자 Hato_Tsubame, CantonSimon)를 정리한 것이며 저자의 허가를 받아 수록했습니다. 본문의 가격, 배차, 절차는 모두 시간에 따라 변할 수 있으므로 중요한 사항은 각 공식 홈페이지를 기준으로 하세요."
   }
  },
  "es": {
   "161806": {
    "items": [
     {
      "text": "Dormitorios designados por la Universidad de Kyushu: la universidad tiene contratos con apartamentos privados y se puede entrar sin fiador; preguntar en la oficina de estudiantes internacionales."
     },
     {
      "text": "Vivienda pública (公営住宅, municipal/prefectural): alquiler más bajo, pero plazos de solicitud limitados; hay que participar en el sistema de garantía de vivienda de Kyudai (九大住宅保証制度)."
     },
     {
      "text": "Apartamentos gestionados por 九大生協 (cooperativa de Kyudai): se pueden consultar en la tienda de la cooperativa (伊都皎皎舎) o en la página oficial."
     },
     {
      "text": "福岡国際交流会館: atención multilingüe, orientado a personas extranjeras."
     },
     {
      "text": "Casa compartida (share house) / guesthouse: en la zona de Itoshima hay share houses en casas antiguas tradicionales (como 糸結, ことのは, etc.)."
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "Solicitar en línea en el «Sistema de Apoyo a la Entrada»",
      "desc": "Los estudiantes internacionales utilizan esta vía y deben completarla antes de llegar a Japón. Se puede solicitar a varias residencias a la vez e indicar el orden de preferencia."
     },
     {
      "title": "Presentar antes de la fecha límite",
      "desc": "Por ejemplo, para el periodo de octubre de 2026, la fecha límite es el 31 de julio de ese año a las 17:00 (hora de Japón)."
     },
     {
      "title": "Esperar la notificación del resultado",
      "desc": "Para el periodo de octubre, el resultado se notifica por correo a finales de agosto a la persona y a su profesor tutor."
     },
     {
      "title": "Registrar el vuelo con antelación",
      "desc": "Hay que introducir la información del vuelo en el sistema al menos 7 días hábiles antes de la fecha de entrada al dormitorio; de lo contrario, no se podrá entrar a tiempo."
     }
    ]
   },
   "910043": {
    "text": "Transporte: todas las líneas del sistema Itoshima de la línea Kyudai pasan por aquí, y el sistema de líneas Kyudai también tiene una línea 2A que pasa. Las paradas disponibles son 国際村前, 伊都の湯どころ入口 y 泊北口. 国際村前 es la más cercana: todas las líneas 2A paran allí, pero solo parte de las líneas del sistema Itoshima pasan por ella; las líneas de Itoshima que no pasan por 国際村前 paran todas en 伊都の湯どころ入口, donde conviene bajarse si vas hacia la universidad porque está más cerca y no hay que cruzar la carretera; en 泊北口 paran todas las líneas mencionadas."
   },
   "67f6a8": {
    "text": "Los dormitorios de la universidad y el alquiler en la ciudad son dos vías distintas: **se recomienda considerar primero el dormitorio**, ya que es más barato, los trámites son más sencillos y no se necesita fiador. Este artículo explica cómo elegir, los gastos iniciales y los puntos a tener en cuenta en el contrato."
   },
   "59e679": {
    "text": "Dormitorios de la universidad: comparativa de las cuatro opciones"
   },
   "ec0d25": {
    "text": "La mayoría de los estudiantes internacionales viven primero en dormitorios de la universidad durante el primer año y, una vez estables, consideran alquilar por su cuenta. En el campus Ito hay cuatro opciones a las que se puede solicitar: ドミトリー1/2/3 (D1/D2/D3) e 伊都協奏館, todas con estudiantes internacionales y japoneses conviviendo. Además, SETTLE International es un apartamento privado, pero está designado por la Universidad de Kyushu como dormitorio para estudiantes internacionales y se solicita por el mismo procedimiento; los detalles se tratan en una sección aparte más adelante en esta página."
   },
   "bdce7d": {
    "headers": [
     "Dormitorio",
     "Tipo de habitación",
     "Cuota mensual",
     "Distancia a los edificios de clase"
    ],
    "rows": [
     [
      "Dormitorio 1 (D1)",
      "Individual de 13 ㎡ (254 室)",
      "23,000 円 + agua y electricidad",
      "A pie, unos 5 min"
     ],
     [
      "Dormitorio 2 (D2)",
      "Individual de 17 ㎡ / pareja de 43 ㎡",
      "30,000 円 + agua y electricidad",
      "A pie, unos 5 min"
     ],
     [
      "Dormitorio 3 (D3)",
      "Unidad compartida de 4 personas",
      "23,500 円 todo incluido",
      "A pie, unos 5 min"
     ],
     [
      "伊都協奏館",
      "Individual de 17 ㎡ / pareja de 43 ㎡",
      "21,000 円 + agua y electricidad",
      "A pie, unos 15 min"
     ]
    ]
   },
   "ca3d1f": {
    "text": "Tipos de habitación y número de unidades: ドミトリー1 y ドミトリー2 tienen individuales de 17 ㎡ y habitaciones de pareja de 43 ㎡; ドミトリー2 tiene 242 individuales y 20 de pareja, y ドミトリー1 tiene 549 individuales y 15 de pareja. La D3 de 伊都協奏館 es una unidad compartida de 4 personas (habitación individual de 7 ㎡ + espacios comunes de 28 ㎡)."
   },
   "ef875c": {
    "text": "Cuotas y plazo de solicitud"
   },
   "612bb9": {
    "text": "La cuota mensual = 寄宿料 (cuota de alojamiento) + 共益費 (gastos comunes) de 4,500 円. En los 23,500 円 de D3 ya están incluidos luz, agua, gas e internet; es la única opción «todo incluido». En las otras tres, los gastos de luz, agua y gas se cobran aparte según el consumo real, y el internet hay que contratarlo por cuenta propia con el operador designado (aprox. 2,000～3,500 円／mes). Las cuatro cobran además un depósito de 30,000 円, reembolsable al salir."
   },
   "a35e71": {
    "text": "**No es un alojamiento permanente.** Los dormitorios se vuelven a ofertar cada semestre; cada estancia dura unos seis meses (por ejemplo, el periodo de octubre de 2026 va desde la fecha de entrada hasta el 15 de marzo de 2027). Hay una convocatoria cada año para el periodo de abril y otra para el de octubre; al finalizar, hay que volver a solicitar o mudarse según lo establecido. Si piensas a largo plazo, tenlo en cuenta."
   },
   "e96b54": {
    "items": [
     {
      "text": "Ninguno de los cuatro tiene comedor (así lo declara oficialmente); hay que cocinar por cuenta propia o ir al comedor del campus."
     },
     {
      "text": "Los estudiantes internacionales deben alquilar la ropa de cama: 7,480 円／medio año, o 14,960 円／año."
     },
     {
      "text": "La habitación de pareja solo la pueden solicitar estudiantes internacionales y solo existe en D2 y 伊都協奏館."
     },
     {
      "text": "D3 es una unidad compartida de 4 personas: 2 estudiantes internacionales + 2 estudiantes japoneses; la solicitud requiere escribir la motivación para el intercambio."
     }
    ]
   },
   "0785ee": {
    "text": "Cómo solicitar el dormitorio"
   },
   "f917d8": {
    "text": "D3 solo se puede marcar como primera opción y no se puede solicitar junto con el dormitorio 井尻寮. Una vez asignada la habitación, en principio no se puede cambiar."
   },
   "f7acdc": {
    "text": "**La página oficial no aclara si pueden entrar los estudiantes de investigación (研究生 / リサーチスチューデント) y los estudiantes de intercambio.** El canal para estudiantes japoneses excluye explícitamente a los estudiantes de investigación, oyentes y otras personas no matriculadas en cursos regulares; las bases de la convocatoria del canal para estudiantes internacionales solo indican «estudiantes internacionales que tienen previsto llegar a la universidad o a Japón por primera vez», sin enumerar por separado esas dos categorías. Si no lo tienes claro, pregunta directamente: 国際部留学課受入支援係 (Sección de Apoyo a la Recepción de la Oficina de Estudiantes Internacionales del Departamento Internacional), imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "Universidad de Kyushu · Dormitorios de estudiantes",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "Universidad de Kyushu · Portal de información de vivienda",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC · Detalles de los dormitorios para estudiantes internacionales",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "Sistema de Apoyo a la Entrada (acceso a la solicitud)",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "Alquilar en Fukuoka: comparativa de tres zonas"
   },
   "c9a766": {
    "text": "Gakken (alrededores de la estación Kyudai-Gakkentoshi)"
   },
   "60cdc9": {
    "text": "Es la más amplia de las tres zonas y es la estación de salida de los autobuses, por lo que se puede tomar cualquier línea; es la más cómoda para ir a clase. En consecuencia, con las mismas condiciones, el alquiler es unas 1.1~1.2 veces el de Susenji."
   },
   "095a6e": {
    "text": "Susenji（周船寺）"
   },
   "fe6c53": {
    "text": "Es la opción más equilibrada entre distancia, alquiler y comodidad para la vida diaria. Algunos edificios son antiguos y el aislamiento acústico de las construcciones de madera es normal. El transporte depende principalmente de la línea Susenji; las líneas de autobús no son tan variadas como en Gakken."
   },
   "298caa": {
    "text": "Justo al lado del campus"
   },
   "374ae9": {
    "text": "Los edificios suelen ser nuevos y en su mayoría no son de madera; algunos incluyen electrodomésticos básicos. El inconveniente es que hay pocas tiendas alrededor: las compras cotidianas dependen sobre todo de las tiendas de conveniencia y la comodidad de vida es menor."
   },
   "02657e": {
    "text": "Referencia de experiencia: un estudiante vive en Gakken desde 2022; el propietario pensaba subir el alquiler casi 2 veces, pero tras negociar se mantuvo en 53,000 円/月. El alquiler tiene margen de negociación; al renovar el contrato, conviene hablar con el propietario."
   },
   "1bb6a1": {
    "text": "Gastos iniciales"
   },
   "fa402b": {
    "text": "Los gastos iniciales del alquiler suelen ser de 4~5 veces la renta mensual e incluyen limpieza, cambio de cerradura, gastos de gestión, etc. (es un rango basado en experiencias; el contrato real es lo que vale). El proceso de aprobación tarda aproximadamente un mes; si planeas entrar en julio, conviene empezar a buscar ya en mayo."
   },
   "c505d6": {
    "text": "Gastos de luz, agua y gas"
   },
   "495d0f": {
    "text": "En verano, con el aire acondicionado en marcha, electricidad, gas y agua suman unos 20,000 円 al mes (valor orientativo; varía según los hábitos de uso)."
   },
   "cb74b3": {
    "text": "Redirección del correo"
   },
   "994e7b": {
    "text": "El trámite de redirección del correo en la oficina de correos después de mudarse se explica en 【Trámites de residencia · Redirección del correo】; no se repite aquí."
   },
   "c541f6": {
    "text": "Enlaces útiles de la zona"
   },
   "11a7ad": {
    "items": [
     {
      "text": "Precios de alquiler (HOME'S)",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO versión estudiantes (alrededores del campus Ito de Kyudai)",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "text": "九大前不動産",
      "url": "https://www.kyudaimae.co.jp/"
     },
     {
      "text": "Susenji · Punto de recogida de cartones",
      "url": "https://maps.app.goo.gl/WMofqf67itQLxT1B9"
     },
     {
      "text": "Susenji · Buzón",
      "url": "https://maps.app.goo.gl/v1yiCxUtXgySeABSA?g_st=ic"
     },
     {
      "text": "Reciclaje de cartones (ciudad de Fukuoka)",
      "url": "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/kaishujoho.html#web"
     },
     {
      "text": "Centro de salud de la universidad · Consultas",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "Más canales para buscar vivienda"
   },
   "4919b5": {
    "text": "La oferta de pisos en alquiler cerca del campus Ito es limitada; conviene combinar varios canales a la vez:"
   },
   "83dd45": {
    "text": "Aviso: los estudiantes oyentes especiales (特別聴講学生), los estudiantes de investigación (研究生) y otras personas no matriculadas en cursos regulares pueden encontrar restricciones al alquilar; conviene consultar con antelación al centro de apoyo (サポートセンター)."
   },
   "69b4a1": {
    "text": "Dos zonas más allá: Takata y Fujimi-Izumi"
   },
   "a7c359": {
    "headers": [
     "Zona (con ubicación)",
     "Alquiler",
     "Vida diaria",
     "Desplazamientos"
    ],
    "rows": [
     [
      "Takata（高田; ciudad de Itoshima, entre Susenji y Hatae）",
      "Más barato que el distrito oeste de Fukuoka",
      "Comprar y comer sin problema",
      "La línea Kyudai tiene menos frecuencias; con coche es más rápido"
     ],
     [
      "Fujimi-Izumi（富士见·泉; entre Susenji y la universidad, zona residencial tranquila）",
      "Un poco más barato que el centro de Susenji",
      "Cuanto más al norte, menos tiendas; hay que ir hacia el sur o el este",
      "Pasando por Susenji o Gakuen-dori（学園通）, es bastante cómodo"
     ]
    ]
   },
   "d28f07": {
    "text": "Ojo si cruzas de municipio: Takata pertenece a la ciudad de Itoshima; para los trámites hay que ir a la oficina del ayuntamiento de Itoshima（糸島市役所）, cerca de la estación Chikuzen-Maebaru（筑前前原）. Quienes viven en el distrito oeste de Fukuoka van a la sucursal oeste de la oficina del ayuntamiento de Fukuoka（福岡市役所西部出張所）, cerca de la estación Kyudai-Gakkentoshi. Las bolsas de basura tampoco valen en ambos municipios: antes de comprar, confirma a cuál perteneces."
   },
   "3dede6": {
    "text": "SETTLE International: diferencias con los demás dormitorios"
   },
   "6eed67": {
    "text": "SETTLE es en realidad un apartamento comercial abierto al público; alrededor de la mitad de los residentes son estudiantes japoneses, por lo que su alquiler mensual es el más alto de las tres opciones. Precisamente por funcionar de otra manera, las experiencias de los demás dormitorios y de 伊都協奏館 normalmente no le aplican; y como está en la ciudad de Itoshima, varios trámites también son distintos de los de quienes viven en el distrito oeste de Fukuoka."
   },
   "55a19c": {
    "headers": [
     "Concepto",
     "Importe (vía de solicitud de Kyudai)"
    ],
    "rows": [
     [
      "寄宿料 (cuota de alojamiento)",
      "41,000 円／月"
     ],
     [
      "管理費 (gastos de gestión)",
      "5,000 円／月"
     ],
     [
      "Soporte 24 h / seguro contra incendios / débito domiciliado",
      "En total, 2,120 円／月"
     ],
     [
      "Agua a tarifa fija",
      "2,200 円／月"
     ],
     [
      "Total mensual",
      "Aprox. 50,320 円 + gastos de luz y gas"
     ],
     [
      "Pago único a la entrada",
      "132,100 円"
     ]
    ]
   },
   "97975c": {
    "text": "Desglose de los gastos iniciales: 132,100 円 = depósito 30,000 + llave tarjeta 16,500 + limpieza 58,300 + otros gastos 27,300. En la cuota mensual está incluido el internet (gratis); hay que llevar el router por cuenta propia."
   },
   "482c1e": {
    "text": "**Hay dos sistemas de precios; no te confundas.** La tabla anterior corresponde a los precios para entrar por el canal de solicitud de Kyudai; alquilar directamente al operador es otro esquema (alquiler aparte, gratificación al propietario, contrato de un año y comidas cobradas por separado cada mes). Ambos coexisten oficialmente; antes de solicitar, confirma por cuál vía vas."
   },
   "c8bea3": {
    "text": "El edificio y las instalaciones"
   },
   "ee03f5": {
    "text": "Complemento de información oficial: el tipo de habitación es 1R de unos 18.48～21.69 ㎡ (no se puede elegir entre los dos modelos), con comedor (las comidas se pagan aparte) y sala de estudio en la planta 6 (10:00–20:00). La estancia dura unos seis meses más que en los demás dormitorios. Los precios y las instalaciones se rigen por el último folleto oficial."
   },
   "adf452": {
    "items": [
     {
      "text": "Ubicación: al suroeste del campus, fuera de la puerta sur, cerca de la Facultad de Agricultura; desde la puerta sur hay que subir una cuesta larga para llegar a la universidad."
     },
     {
      "text": "Orientación: al norte, poca luz natural y ruido de la carretera; al sur, mucho sol en verano y más mosquitos."
     },
     {
      "text": "Instalaciones: el edificio es muy nuevo; en la planta superior hay sala de estudio y secadora, y en la planta baja hay comedor."
     },
     {
      "text": "Alrededores: no hay supermercado (solo una tienda de conveniencia en el cruce); hay un baño público y varios restaurantes."
     }
    ]
   },
   "8d272b": {
    "text": "Referencia de experiencia: tener comedor es algo habitual en los apartamentos de estudiantes japoneses, y en una ubicación tan apartada como Kyudai sí tiene valor; sin embargo, según quienes han vivido allí, ni el sabor ni el precio destacan. Entrar como dormitorio no supone los elevados gastos iniciales de un apartamento comercial, así que puede servir como una experiencia de bajo coste."
   },
   "6c71d4": {
    "text": "Transporte y ubicación"
   },
   "9c8146": {
    "text": "Las frecuencias son escasas y casi no hay servicios en la zona a pie; para salir cuando quieras necesitas tu propio medio de transporte. Además, de SETTLE a la universidad todo son cuestas (hacia el sur, hasta la carretera nacional, sí hay terreno llano): una bicicleta normal resulta bastante pesada, y una eléctrica es cara y las subidas tampoco se alivian mucho. Si no tienes confianza en pedalear cuestas, plantéate directamente un ciclomotor (原付) — ver 【Transporte · Ciclomotor / Carné de conducir】."
   },
   "63c7c3": {
    "text": "Puntos clave al elegir agencia"
   },
   "be819d": {
    "text": "Cuando encuentras un piso que te gusta por internet, en la práctica la oferta suele estar en manos de alguna agencia. Las fotos no muestran el estado real de la vivienda; en la medida de lo posible, visita el piso en persona; si un piso te genera dudas, pregunta en el grupo por si algún compañero vive o ha vivido allí."
   },
   "89ee7b": {
    "headers": [
     "Agencia",
     "Características"
    ],
    "rows": [
     [
      "九大生協 (cooperativa de Kyudai)",
      "No es una institución de la universidad; algunos pisos sin comisión"
     ],
     [
      "エイブル",
      "Cadena nacional; la comisión de intermediación equivale a media mensualidad"
     ],
     [
      "三好不動産",
      "Con presencia sólida en Fukuoka"
     ],
     [
      "アパマンショップ",
      "Está bajo el Aeon; se visita de paso al supermercado"
     ],
     [
      "九大前不動産",
      "Es el administrador de SETTLE"
     ],
     [
      "日本ハウス",
      "Algunos pisos de gestión propia no cobran comisión"
     ],
     [
      "ホームメイト",
      "Tiene pisos cerca de la universidad; la oficina está en 姪浜 (Meinohama)"
     ]
    ]
   },
   "4e0936": {
    "text": "Referencia de experiencia: lo anterior son impresiones de quienes han vivido allí; las políticas de cada agencia cambian y antes de firmar manda la oferta real. Merece la pena hojear la revista de vivienda de Kyudai que publica la cooperativa: sirve para hacerse una idea general de precios y zonas."
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME'S (el modo mapa facilita mucho buscar piso)",
      "url": "https://www.homes.co.jp/chintai/"
     },
     {
      "text": "SUUMO Kyushu",
      "url": "https://suumo.jp/kyushu/"
     },
     {
      "text": "九大生協 · Búsqueda de vivienda (住まいさがし)",
      "url": "https://coop.kyushu-u.ac.jp/wp/"
     }
    ]
   },
   "3218b7": {
    "text": "Parte del contenido de esta página procede de《新伊都国風土記》(autores: Hato_Tsubame y CantonSimon), recopilado con autorización de los autores. Los precios, las frecuencias y los trámites indicados cambian con el tiempo; para los asuntos importantes, consulta las páginas oficiales correspondientes."
   }
  }
 },
 "guide-life": {
  "ja": {
   "222467": {
    "text": "生協：構内での支払い方法"
   },
   "509375": {
    "text": "粗大ゴミ（家具・家電など）は電話で予約して収集してもらう必要があり、有料です。"
   },
   "9d0f73": {
    "text": "ゴミの分別・天気・郵便ポスト・食堂・生協——これらの内容は専門の授業で教わることはありませんが、日常的に頻繁に使うものです。必要なときにご覧ください。"
   },
   "c6f3dd": {
    "text": "福岡の天気"
   },
   "564f6c": {
    "text": "福岡の夏は暑く、熱中症対策が必要です。外出時は水を持参し、エアコンや扇風機を活用してください。夏から秋の台風シーズンは、大学や気象庁の注意報・警報に注意してください。"
   },
   "81acda": {
    "text": "ゴミの分別"
   },
   "aeecc8": {
    "text": "福岡市の家庭ゴミは、燃えるごみ（可燃）、燃えないごみ（不燃）、空きびん（空瓶）・ペットボトル（PET 瓶）の3種類に分別して定期収集されます（粗大ゴミは別途予約が必要です）。"
   },
   "0efd50": {
    "text": "**指定ゴミ袋の使用が必須です**（コンビニやスーパーで販売されており、種類ごとに袋の印字が異なります）。燃えるごみは週2回、それ以外は月1回の収集です。福岡市は夜間収集が多く、一般的に収集日前日の日没後から24時までの間に出します。"
   },
   "48309f": {
    "text": "福岡市公式サイトには中国語版のゴミ分別検索システムがあり、品目名を入力すると分別区分を調べられます："
   },
   "caad01": {
    "items": [
     {
      "text": "福岡市ゴミ分別検索（中国語）",
      "url": "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/cn/items"
     }
    ]
   },
   "52ee2d": {
    "text": "福岡市 LINE 公式アカウント"
   },
   "3f8bd7": {
    "text": "福岡市公式 LINE（@fukuokacity）では、防災・ゴミ収集日・子育て・防犯・イベントなどの情報配信を受けられるほか、ワクチン接種の予約やゴミ分別の検索なども LINE から行えます。フォローして必要なカテゴリを設定してください。"
   },
   "2defd6": {
    "text": "サークル・部活動"
   },
   "958a05": {
    "text": "サークルに参加することは、日本人の学生と知り合い、キャンパスに馴染むきっかけの一つです。九大には体育系・文化系などさまざまなサークルがあります。"
   },
   "aff452": {
    "text": "・（日本語）"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "九州大学課外活動（サークル一覧）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/extracurricular/"
     }
    ]
   },
   "a71552": {
    "text": "・留学生は KUFSA（九州大学留学生会）と KUIFA（九州大学国際親善会）に注目してみてください。どちらもさまざまなイベントを開催しています"
   },
   "a7df77": {
    "text": "マルチリンガル交流スペース（EZぷらっと）"
   },
   "cadf66": {
    "text": "イースト1号館 2 階には多言語学習スペース EZ ぷらっとがあり、全学生に無料で開放されています。語学学習の支援（書籍・DVD・オンライン教材）を提供しているほか、留学相談や関連イベントへの参加もできます。"
   },
   "123b43": {
    "text": "寮の修理依頼（水漏れ・カビ）"
   },
   "d7dc2a": {
    "text": "手順：写真を撮る → 寮の管理人に報告する → 部屋番号を伝える。在校生を通して伝えてもらうこともでき、管理人から本人に連絡があります。福岡は湿気が多くカビが発生しやすいため、応急処置としてテープを貼って隔離しておくとよいでしょう。"
   },
   "4f9189": {
    "text": "Coffee Hour は各寮で毎週定期的に開催される集まりで、さまざまな国や文化背景を持つ参加者が集まります。新しい友達を作る機会です。"
   },
   "3b5a1b": {
    "text": "キャンパスライフ：食堂・図書館・イベント"
   },
   "7a6ada": {
    "text": "食堂のメニューは日替わりで、営業時間や日曜日の営業の有無は生協のウェブサイトで確認できます。図書館の開館情報は公式サイトで確認でき、試験期間中は開館時間が延長されることがあります。"
   },
   "dca705": {
    "items": [
     {
      "text": "図書館の開館情報",
      "url": "https://www.lib.kyushu-u.ac.jp/ja"
     },
     {
      "text": "生協食堂（営業時間・日曜営業）",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     },
     {
      "text": "生協食堂の月間メニュー",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html"
     }
    ]
   },
   "2b45db": {
    "text": "キャンパス・まちのイベント"
   },
   "ba080f": {
    "items": [
     {
      "text": "九大祭（キャンパスイベント一覧）",
      "url": "https://kyudaisai.jp/"
     },
     {
      "text": "博多どんたく（福岡市の大規模な祭り）",
      "url": "https://www.dontaku.fukunet.or.jp/"
     }
    ]
   },
   "0120b0": {
    "text": "九州大学生活協同組合（生協）は構内のほとんどの食堂や売店を運営しており、不動産仲介や保険などの業務も行っています。大学の公式機関ではなく、独立した協同組合です——サービスを利用するにはまず加入する必要があります。"
   },
   "a22a49": {
    "text": "加入手続きはやや煩雑なので、生協の実店舗で直接手続きすることをおすすめします。加入後は生協アプリでの支払いが利用でき、方法は2種類あります。"
   },
   "a728d5": {
    "headers": [
     "方式",
     "使い方",
     "還元",
     "購入できるもの"
    ],
    "rows": [
     [
      "生協電子マネー",
      "都度チャージして使う",
      "1% ポイント",
      "全商品"
     ],
     [
      "ミールプリペ",
      "まとめて高額チャージ",
      "約 2%～5%、チャージ額に応じて増加",
      "食堂・売店の食品のみ"
     ]
    ]
   },
   "faabed": {
    "text": "ミールプリペ の還元率は2026年に改定され、低額帯の割合が大きく下がりました——少額チャージだとかえって割高です。チャージ前に公式サイトの最新の還元率表を確認して金額を決めてください。以前の攻略記事の数字はそのまま使わないでください。現在の各ランクのチャージ額と還元額は公式サイトをご覧ください：https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "食堂：分布と支払い方法"
   },
   "b871d7": {
    "items": [
     {
      "text": "生協食堂：営業時間・日替わりメニュー・月間メニューはすべて生協のウェブサイトで確認できます。構内の主力です"
     },
     {
      "text": "GARDEN KITCHEN（W1 理学部入口）：生協ではなく、ICカードと支付宝（Alipay）が使えます"
     },
     {
      "text": "QASIS と ビッグどら の食堂にはそれぞれインド料理の窓口があり、QASIS の窓口は微信支付（WeChat Pay）に対応しています"
     }
    ]
   },
   "f308d3": {
    "items": [
     {
      "text": "九大生協・食堂部案内",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     }
    ]
   },
   "281f66": {
    "text": "居住地で決まる手続きの流れ"
   },
   "42f05c": {
    "text": "糸島半島は福岡市西区と糸島市に分かれています。大学自体は福岡市西区にあり、SETTLE International 以外の寮もすべて西区にあります。ただし周辺の住宅街は2つの市にまたがっており、これが手続きに行く役所を左右します。"
   },
   "39e635": {
    "headers": [
     "住む場所",
     "行く役所",
     "最寄り駅"
    ],
    "rows": [
     [
      "福岡市西区",
      "福岡市役所西部出張所",
      "九大学研都市駅"
     ],
     [
      "糸島市（高田や SETTLE 周辺など）",
      "糸島市役所",
      "JR 筑前前原駅"
     ]
    ]
   },
   "26be59": {
    "text": "**両市のゴミ袋は互換性がありません。** 購入前に自分がどちらの地域に住んでいるか確認してください。間違えて買うとゴミを出せなくなります。"
   },
   "5ce69e": {
    "text": "天気：風が強く、冬は穏やか"
   },
   "445f0d": {
    "text": "福岡は日本海側と太平洋側の両方の気候の特徴を持っています。冬は北西からの寒気を正面から受け、風は強いものの気温はおおむね0度以上で、降水は少なめです——福岡と朝鮮半島の間の海面が狭く、十分な水蒸気が蓄積しないため、北陸のような大雪はめったにありませんが、強風は頻繁で、最も強い時は最大瞬間風速が風力8に達することがあります。"
   },
   "cc62d7": {
    "text": "6月から7月は梅雨で、その後は太平洋高気圧（副熱帯高気圧）に覆われ、蒸し暑く晴れが続き雨は少ないですが、蓄積されたエネルギーが強い対流を引き起こしやすくなります。秋にも秋雨の時期がありますが、梅雨ほど典型的ではありません。春と秋は気温が比較的穏やかで、秋は晴れる日が多く外出に向いています。"
   },
   "0aeb5b": {
    "items": [
     {
      "text": "予報・風力・レーダー図を見る：windy（スマホアプリあり）"
     },
     {
      "text": "実況と長期予報を見る：気象庁"
     },
     {
      "text": "リアルタイムデータ：tenki.jp"
     },
     {
      "text": "台風シーズンの進路予報：Tropical Tidbits（ただし台風が福岡を直撃することは稀です）"
     }
    ]
   },
   "48c15c": {
    "text": "この地域は雨雲の動きが速いため、出かける前にレーダー図をひと目確認する方が、時間ごとの予報を見るよりも正確です。"
   },
   "20bca1": {
    "text": "郵便ポストの場所"
   },
   "9add58": {
    "items": [
     {
      "text": "日本の郵便ポストマップ（postmap）",
      "url": "https://www.postmap.org/map"
     }
    ]
   },
   "df5369": {
    "text": "本ページの一部の内容は『新伊都国風土記』（著者：Hato_Tsubame、CantonSimon）を整理したもので、著者の許可を得て掲載しています。文中の価格・運行情報・手続きは時期によって変わります。重要な事項は各公式サイトでご確認ください。"
   },
   "e1e701": {
    "text": "落とし物をしたとき"
   },
   "e1e702": {
    "text": "学内か学外かで窓口が違います。まずどこで失くしたかを確認しましょう。"
   },
   "e1e703": {
    "items": [
     {
      "text": "学内（伊都センターゾーン）→ 学生支援課 092-802-5915。公式の**落とし物登録フォーム**あり"
     },
     {
      "text": "学内（伊都イースト／ウエスト）→ 各学務窓口：イースト 092-802-6361"
     },
     {
      "text": "　　ウエスト：理学 092-802-4014 ／ 工学 092-802-2736 ／ 農学 092-802-4508"
     },
     {
      "text": "学内でトラブル、警察が必要 → 伊都キャンパス**警務員室 092-802-2305**"
     },
     {
      "text": "キャンパス周辺で最寄りの交番 → **周船寺交番 092-806-1110**"
     }
    ]
   },
   "e1e704": {
    "text": "⚠️ 緊急時は学校より先に **110**（警察）または **119**（救急）へ。学内の番号は事後の支援用で、通報窓口ではありません。"
   },
   "e1e705": {
    "items": [
     {
      "text": "学生何でも相談窓口（公式・落とし物登録フォームと各キャンパス窓口）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/contact/consultation/"
     },
     {
      "text": "九州大学 緊急連絡先（公式・警務員室・交番・相談ホットライン）",
      "url": "https://chc.kyushu-u.ac.jp/emergency/"
     }
    ]
   }
  },
  "en": {
   "222467": {
    "text": "Co-op (生協): Payment Methods on Campus"
   },
   "509375": {
    "text": "Bulk waste (furniture, home appliances, etc.) is collected by telephone reservation, and the service is subject to a fee."
   },
   "9d0f73": {
    "text": "Waste sorting, weather, post boxes, cafeterias, and the Co-op (生協) — none of these are covered in any dedicated course, yet they are used constantly in daily life. Consult the relevant section as needed."
   },
   "c6f3dd": {
    "text": "Fukuoka Weather"
   },
   "564f6c": {
    "text": "Summers in Fukuoka are hot, so heatstroke prevention is important: carry water when going out and make good use of air conditioning and fans. Summer and autumn are the typhoon season — pay attention to warning notices from the university and the meteorological authorities."
   },
   "81acda": {
    "text": "Waste Sorting"
   },
   "aeecc8": {
    "text": "Household waste in Fukuoka City is collected on a regular schedule in three categories: 燃えるごみ (burnable), 燃えないごみ (non-burnable), and 空きびん・ペットボトル (empty bottles / PET bottles). Bulk waste requires a separate reservation."
   },
   "0efd50": {
    "text": "**Designated garbage bags are required** (available at convenience stores and supermarkets; the bags differ by waste category, with different printing on each). Burnable waste is collected twice a week and the rest once a month; in Fukuoka City collection mostly takes place at night, so bags are generally put out between sunset and 24:00 on the day before collection."
   },
   "48309f": {
    "text": "The Fukuoka City website has a waste-sorting lookup in Chinese: enter the name of an item to check its category."
   },
   "caad01": {
    "items": [
     {
      "text": "Fukuoka City waste sorting lookup (Chinese)",
      "url": "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/cn/items"
     }
    ]
   },
   "52ee2d": {
    "text": "Fukuoka City Official LINE Account"
   },
   "3f8bd7": {
    "text": "The official Fukuoka City LINE account (@fukuokacity) sends push notifications on disaster prevention, waste collection days, childcare, crime prevention, and events. It also allows LINE-based vaccine reservations and waste-sorting lookup. Follow the account and set the categories as needed."
   },
   "2defd6": {
    "text": "Clubs and Student Activities"
   },
   "958a05": {
    "text": "Joining a club (サークル) is one way to get to know Japanese students and become part of campus life. Kyushu University (九大) has clubs across sports, culture, and other fields."
   },
   "aff452": {
    "text": "· (Japanese)"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "Kyushu University extracurricular activities (club list)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/extracurricular/"
     }
    ]
   },
   "a71552": {
    "text": "· International students may follow KUFSA (九州大学留学生会) and KUIFA (九州大学国際親善会); both regularly organize various events"
   },
   "a7df77": {
    "text": "Multilingual Exchange Space (EZぷらっと)"
   },
   "cadf66": {
    "text": "The multilingual learning space EZ ぷらっと on the 2nd floor of East Building 1 (イースト1号館) is open free of charge to all students. It provides language-learning support (books, DVDs, online materials), and also offers study-abroad consultation and related events."
   },
   "123b43": {
    "text": "Dormitory Repairs (Leaks / Mold)"
   },
   "d7dc2a": {
    "text": "Procedure: take a photo → notify the dormitory manager → provide the room number. A current resident can relay the report on behalf of the student; the manager then contacts the student directly. Fukuoka is humid and mold is common; as an emergency measure, tape can be applied first to isolate the affected area."
   },
   "4f9189": {
    "text": "Coffee Hour is a gathering held weekly at each dormitory, with participants from different countries and cultural backgrounds — an opportunity to make new friends."
   },
   "3b5a1b": {
    "text": "Campus Life: Cafeterias, Library, and Events"
   },
   "7a6ada": {
    "text": "Cafeteria menus change daily; operating hours and whether they are open on Sundays are posted on the Co-op (生協) website. Library opening hours are listed on the official website and may be extended during examination periods."
   },
   "dca705": {
    "items": [
     {
      "text": "Library opening hours",
      "url": "https://www.lib.kyushu-u.ac.jp/ja"
     },
     {
      "text": "Co-op cafeteria (hours / Sundays)",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     },
     {
      "text": "Co-op cafeteria monthly menu",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html"
     }
    ]
   },
   "2b45db": {
    "text": "Campus / City Events"
   },
   "ba080f": {
    "items": [
     {
      "text": "九大祭 (campus events list)",
      "url": "https://kyudaisai.jp/"
     },
     {
      "text": "Hakata Dontaku (博多どんたく), a major festival in Fukuoka City",
      "url": "https://www.dontaku.fukunet.or.jp/"
     }
    ]
   },
   "0120b0": {
    "text": "The Kyushu University Co-op (九州大学生活協同組合, abbreviated 生協) operates most of the cafeterias and shops on campus and also offers housing agency and insurance services. It is not an official university body but an independent cooperative — membership is therefore required to use its services."
   },
   "a22a49": {
    "text": "The enrollment procedure is somewhat complicated; going directly to a physical Co-op (生協) store is recommended. After joining, payment can be made with the Co-op App, in two ways."
   },
   "a728d5": {
    "headers": [
     "Method",
     "How to use",
     "Reward",
     "What can be purchased"
    ],
    "rows": [
     [
      "Co-op e-money (生協電子マネー)",
      "Top up and use on demand",
      "1% points",
      "Any items"
     ],
     [
      "ミールプリペ",
      "One-time large top-up",
      "Approx. 2-5%, increasing by tier",
      "Food items at cafeterias and shops only"
     ]
    ]
   },
   "faabed": {
    "text": "Meal Prepaid (ミールプリペ) reward tiers were revised in 2026, and the rates for the lower tiers dropped considerably — small top-ups are no longer worthwhile. Before topping up, check the latest official tier table and decide the amount accordingly; do not reuse figures from older guides. Current top-up amounts and rewards for each tier are listed on the official website: https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "Cafeterias: Locations and Payment Methods"
   },
   "b871d7": {
    "items": [
     {
      "text": "Co-op (生協) cafeterias: operating hours, daily menus, and monthly menus are all on the Co-op website; they are the mainstay of campus dining"
     },
     {
      "text": "GARDEN KITCHEN (near the entrance of Building W1, Faculty of Sciences): not run by the Co-op; IC cards and Alipay accepted"
     },
     {
      "text": "Both the QASIS and ビッグどら cafeterias have an Indian food counter; the one at QASIS accepts WeChat Pay"
     }
    ]
   },
   "f308d3": {
    "items": [
     {
      "text": "Kyushu University Co-op cafeteria guide",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     }
    ]
   },
   "281f66": {
    "text": "Administrative Procedures by Residential Area"
   },
   "42f05c": {
    "text": "The Itoshima Peninsula is split between Nishi Ward, Fukuoka City and Itoshima City. The university itself is in Nishi Ward, and all dormitories except SETTLE International are in Nishi Ward as well. The surrounding residential areas, however, span both cities, and this directly determines where one goes for administrative procedures."
   },
   "39e635": {
    "headers": [
     "Residential area",
     "Office to visit",
     "Nearest station"
    ],
    "rows": [
     [
      "Nishi Ward, Fukuoka City (福岡市西区)",
      "福岡市役所西部出張所 (Fukuoka City Nishi Branch Office)",
      "Kyudai Gakken Toshi Station (九大学研都市駅)"
     ],
     [
      "Itoshima City (e.g., around Takada and SETTLE)",
      "糸島市役所 (Itoshima City Hall)",
      "JR Chikuzen-Maebaru Station (筑前前原駅)"
     ]
    ]
   },
   "26be59": {
    "text": "**The garbage bags of the two cities are not interchangeable.** Before buying, confirm which municipality the residence belongs to — the wrong bags cannot be put out."
   },
   "5ce69e": {
    "text": "Weather: Windy, with Mild Winters"
   },
   "445f0d": {
    "text": "Fukuoka's climate combines features of both the Sea of Japan side and the Pacific Ocean side. In winter it directly faces cold air coming from the northwest: windy, yet temperatures mostly stay above 0 °C, with relatively little precipitation. Because the sea between Fukuoka and the Korean Peninsula is too narrow to accumulate enough moisture, heavy snow like that in the Hokuriku (北陸) region is rare — instead, strong winds are common, and gusts can reach Force 8 at their strongest."
   },
   "cc62d7": {
    "text": "June and July are the rainy season (梅雨), after which the region comes under the subtropical high: muggy, sunny, and dry, though the accumulated energy readily triggers severe convection. Autumn also has a rainy spell, but less pronounced than the rainy season. Spring and autumn are comparatively mild, and autumn brings many clear days suited to going out."
   },
   "0aeb5b": {
    "items": [
     {
      "text": "Forecasts, wind, and radar maps: windy (mobile app available)"
     },
     {
      "text": "Current conditions and long-range forecasts: Japan Meteorological Agency (気象庁)"
     },
     {
      "text": "Real-time data: tenki.jp"
     },
     {
      "text": "Typhoon track forecasts during the typhoon season: Tropical Tidbits (though typhoons rarely pass directly over Fukuoka)"
     }
    ]
   },
   "48c15c": {
    "text": "Rain clouds in this area move quickly; a quick look at the radar map before going out is more reliable than the hourly forecast."
   },
   "20bca1": {
    "text": "Post Box Locations"
   },
   "9add58": {
    "items": [
     {
      "text": "Japan post box map (PostMap)",
      "url": "https://www.postmap.org/map"
     }
    ]
   },
   "df5369": {
    "text": "Parts of this article are compiled from 《新伊都国風土記》 (authors: Hato_Tsubame, CantonSimon), included with the authors' permission. Prices, schedules, and procedures in this article change over time; for important matters, refer to the official websites."
   },
   "e1e701": {
    "text": "If you lose something"
   },
   "e1e702": {
    "text": "The counter differs depending on whether you lost it on or off campus — first work out where."
   },
   "e1e703": {
    "items": [
     {
      "text": "On campus (Ito Center Zone) → Student Support Division 092-802-5915; there is an official **lost-item reporting form**"
     },
     {
      "text": "On campus (Ito East/West) → your faculty office: East 092-802-6361"
     },
     {
      "text": "　　West: Science 092-802-4014 ／ Engineering 092-802-2736 ／ Agriculture 092-802-4508"
     },
     {
      "text": "Trouble on campus needing police → Ito campus **security office (警務員室) 092-802-2305**"
     },
     {
      "text": "Nearest police box to campus → **Shusenji koban 092-806-1110**"
     }
    ]
   },
   "e1e704": {
    "text": "⚠️ In an emergency, do not start with the university — call **110** (police) or **119** (ambulance) directly. Campus numbers are for follow-up support, not for reporting emergencies."
   },
   "e1e705": {
    "items": [
     {
      "text": "Student general consultation desk (official: lost-item form and campus counters)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/contact/consultation/"
     },
     {
      "text": "Kyushu University emergency contacts (official: security office, koban, helplines)",
      "url": "https://chc.kyushu-u.ac.jp/emergency/"
     }
    ]
   }
  },
  "ko": {
   "222467": {
    "text": "생협: 캠퍼스 내 결제 수단"
   },
   "509375": {
    "text": "대형 폐기물(가구, 가전 등)은 전화로 예약하여 수거하며, 유료입니다."
   },
   "9d0f73": {
    "text": "쓰레기 분리수거, 날씨, 우체통, 식당, 생협 - 이런 내용은 별도의 강의로 배우지 않지만 일상에서 자주 필요합니다. 필요할 때 찾아보시기 바랍니다."
   },
   "c6f3dd": {
    "text": "후쿠오카 날씨"
   },
   "564f6c": {
    "text": "후쿠오카는 여름이 매우 더우므로 폭염 대비가 필요하며, 외출할 때는 물을 챙기고 에어컨과 선풍기를 적절히 활용해야 합니다. 여름과 가을은 태풍 시즌이므로 학교와 기상 당국의 경보 공지를 확인하시기 바랍니다."
   },
   "81acda": {
    "text": "쓰레기 분리수거"
   },
   "aeecc8": {
    "text": "후쿠오카시의 가정용 쓰레기는 3종류로 나누어 정기 수거됩니다: 燃えるごみ(가연 쓰레기), 燃えないごみ(불연 쓰레기), 空きびん・ペットボトル(빈 병·PET병)(그 외 대형 폐기물은 별도 예약 필요)."
   },
   "0efd50": {
    "text": "**지정 봉투를 사용해야 합니다**(편의점과 슈퍼마켓에서 판매하며, 종류에 따라 봉투 표기가 다릅니다). 가연 쓰레기는 주 2회, 그 외 쓰레기는 월 1회 수거됩니다. 후쿠오카시는 야간 수거가 많으며, 보통 수거일 전날 해가 진 뒤부터 24시 사이에 내놓습니다."
   },
   "48309f": {
    "text": "후쿠오카시 공식 웹사이트에는 중국어 쓰레기 분류 조회 시스템이 있어, 물품명을 입력하면 분류를 확인할 수 있습니다:"
   },
   "caad01": {
    "items": [
     {
      "text": "후쿠오카시 쓰레기 분류 조회(중국어)",
      "url": "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/cn/items"
     }
    ]
   },
   "52ee2d": {
    "text": "후쿠오카시 LINE 공식 계정"
   },
   "3f8bd7": {
    "text": "후쿠오카시 공식 LINE(@fukuokacity)에서는 방재, 쓰레기 수거일, 육아, 방범, 행사 등의 정보를 알림으로 받을 수 있으며, LINE으로 예방접종 예약이나 쓰레기 분류 조회 등도 가능합니다. 친구 추가 후 필요에 따라 카테고리를 설정하시기 바랍니다."
   },
   "2defd6": {
    "text": "동아리·부활동"
   },
   "958a05": {
    "text": "동아리(サークル)에 가입하는 것은 일본인 학생을 사귀고 캠퍼스 생활에 적응하는 좋은 방법 중 하나입니다. 규슈대학에는 스포츠, 문화 등 다양한 동아리가 있습니다."
   },
   "aff452": {
    "text": "· (일본어)"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "九州大学課外活動(동아리 일람)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/extracurricular/"
     }
    ]
   },
   "a71552": {
    "text": "· 유학생은 KUFSA(규슈대학 유학생회)와 KUIFA(규슈대학 국제친선회)를 주목하시기 바랍니다. 두 단체는 각종 행사를 자주 개최합니다"
   },
   "a7df77": {
    "text": "マルチリンガル交流スペース(EZぷらっと)"
   },
   "cadf66": {
    "text": "イースト1号館 2층에는 다언어 학습 공간 EZぷらっと가 있으며, 모든 학생에게 무료로 개방되어 있습니다. 어학 학습 지원(서적, DVD, 온라인 교재)을 제공하며, 유학 상담과 관련 행사 참여도 가능합니다."
   },
   "123b43": {
    "text": "기숙사 수리 신청(누수/곰팡이)"
   },
   "d7dc2a": {
    "text": "절차: 사진 촬영 → 기숙사 관리인에게 신고 → 호실 번호 제공. 재학생이 대신 전달할 수도 있으며, 관리인이 이후 본인에게 연락합니다. 후쿠오카는 습기가 많아 곰팡이가 흔하므로, 긴급 시에는 먼저 테이프로 봉합해 두시기 바랍니다."
   },
   "4f9189": {
    "text": "Coffee Hour는 각 기숙사에서 매주 정기적으로 열리는 모임으로, 다양한 국가와 문화 배경의 참가자가 모여 새로운 친구를 사귈 수 있는 기회입니다."
   },
   "3b5a1b": {
    "text": "캠퍼스 생활: 식당·도서관·행사"
   },
   "7a6ada": {
    "text": "식당 메뉴는 매일 바뀌며, 영업시간과 일요일 영업 여부는 생협 웹사이트를 확인하시기 바랍니다. 도서관 개관 정보는 공식 웹사이트를 확인하되, 시험 기간에는 개관 시간이 연장될 수 있습니다."
   },
   "dca705": {
    "items": [
     {
      "text": "도서관 개관 정보",
      "url": "https://www.lib.kyushu-u.ac.jp/ja"
     },
     {
      "text": "생협 식당(영업/일요일)",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     },
     {
      "text": "생협 식당 월간 메뉴",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html"
     }
    ]
   },
   "2b45db": {
    "text": "캠퍼스/도시 행사"
   },
   "ba080f": {
    "items": [
     {
      "text": "九大祭(캠퍼스 행사 일람)",
      "url": "https://kyudaisai.jp/"
     },
     {
      "text": "博多どんたく(후쿠오카시 대규모 축제)",
      "url": "https://www.dontaku.fukunet.or.jp/"
     }
    ]
   },
   "0120b0": {
    "text": "九州大学生活協同組合(생협)은 캠퍼스 내 대부분의 식당과 매장을 운영하며, 부동산 중개와 보험 등의 업무도 담당합니다. 학교의 공식 기관이 아닌 독립된 협동조합이므로, 서비스를 이용하려면 먼저 가입해야 합니다."
   },
   "a22a49": {
    "text": "가입 절차가 다소 번거로우므로 생협의 오프라인 매장에서 직접 가입하는 것을 권장합니다. 가입 후에는 생협 앱으로 결제할 수 있으며, 결제 방식은 두 가지입니다."
   },
   "a728d5": {
    "headers": [
     "방식",
     "이용 방법",
     "적립",
     "구매 가능 품목"
    ],
    "rows": [
     [
      "生協電子マネー",
      "충전할 때마다 바로 사용",
      "1% 적립",
      "모든 상품"
     ],
     [
      "ミールプリペ",
      "한 번에 큰 금액 충전",
      "약 2%~5%, 구간에 따라 증가",
      "식당 및 매장의 식품에만 한정"
     ]
    ]
   },
   "faabed": {
    "text": "ミールプリペ의 적립 구간은 2026년에 개정되어, 낮은 구간의 적립률이 크게 낮아졌습니다. 적게 충전하면 오히려 손해입니다. 충전 전에 공식 웹사이트의 최신 구간표를 확인하여 금액을 결정하시기 바라며, 예전 가이드의 숫자는 사용하지 마십시오. 현재 각 구간의 충전액과 적립액은 공식 웹사이트를 참조하세요: https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "식당: 위치와 결제 수단"
   },
   "b871d7": {
    "items": [
     {
      "text": "생협 식당: 영업시간, 일별 메뉴와 월간 메뉴가 모두 생협 웹사이트에 있으며, 캠퍼스 내 주력 식당입니다"
     },
     {
      "text": "GARDEN KITCHEN(W1 이학부 앞): 생협 소속이 아니며, IC 카드와 알리페이 사용 가능"
     },
     {
      "text": "QASIS와 ビッグどら 식당에는 각각 인도 요리 창구가 있으며, QASIS의 창구는 위챗페이를 지원합니다"
     }
    ]
   },
   "f308d3": {
    "items": [
     {
      "text": "九大生協 · 食堂部案内",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     }
    ]
   },
   "281f66": {
    "text": "거주지에 따라 달라지는 행정 절차"
   },
   "42f05c": {
    "text": "이토시마 반도는 후쿠오카시 니시구와 이토시마시로 나뉘어 있습니다. 학교 자체는 후쿠오카시 니시구에 있으며, SETTLE International을 제외한 기숙사도 모두 니시구에 있습니다. 그런데 주변 주택가는 두 도시에 걸쳐 있어, 이것이 행정 절차를 어디에서 처리할지 직접 결정합니다."
   },
   "39e635": {
    "headers": [
     "거주지",
     "가야 할 관청",
     "가장 가까운 역"
    ],
    "rows": [
     [
      "후쿠오카시 니시구",
      "福岡市役所西部出張所",
      "九大学研都市駅"
     ],
     [
      "이토시마시(다카타, SETTLE 일대)",
      "糸島市役所",
      "JR 筑前前原駅"
     ]
    ]
   },
   "26be59": {
    "text": "**두 도시의 쓰레기 봉투는 서로 호환되지 않습니다.** 구매 전에 자신이 어느 쪽에 속하는지 확인하시기 바랍니다. 잘못 사면 쓰레기를 버릴 수 없습니다."
   },
   "5ce69e": {
    "text": "날씨: 바람이 많고 겨울은 온화함"
   },
   "445f0d": {
    "text": "후쿠오카는 일본해 쪽과 태평양 쪽 기후의 특징을 동시에 지닙니다. 겨울에는 북서쪽에서 불어오는 찬 공기를 정면으로 맞아 바람이 강하지만 기온은 대체로 0도 이상이며 강수량은 적습니다. 후쿠오카와 한반도 사이의 바다 폭이 좁아 수증기가 충분히 쌓이지 못하기 때문에, 호쿠리쿠처럼 폭설이 내리는 경우는 드물지만 강풍은 잦고 최대 순간 풍속이 8급에 달할 때도 있습니다."
   },
   "cc62d7": {
    "text": "6~7월은 장마철이며, 이후 아열대 고기압의 영향을 받아 무덥고 맑은 날이 이어지며 비는 적지만, 쌓인 에너지가 강한 대류를 일으키기 쉽습니다. 가을에도 장마와 비슷한 가을비 시기가 있지만 장마만큼 전형적이지는 않습니다. 봄과 가을은 기온이 비교적 온화하며, 가을은 맑은 날이 많아 외출하기 좋습니다."
   },
   "0aeb5b": {
    "items": [
     {
      "text": "예보·풍력·레이더 관측: windy(모바일 앱 있음)"
     },
     {
      "text": "실황과 장기 예보: 일본 기상청"
     },
     {
      "text": "실시간 데이터: tenki.jp"
     },
     {
      "text": "태풍 시즌 경로 예보: Tropical Tidbits(다만 태풍이 후쿠오카에 정면으로 통과하는 경우는 드묾)"
     }
    ]
   },
   "48c15c": {
    "text": "이 일대는 비구름의 이동이 매우 빠르므로, 외출 전에 레이더 관측을 확인하는 것이 시간별 예보보다 정확합니다."
   },
   "20bca1": {
    "text": "우체통 위치"
   },
   "9add58": {
    "items": [
     {
      "text": "일본 우체통 지도(postmap)",
      "url": "https://www.postmap.org/map"
     }
    ]
   },
   "df5369": {
    "text": "이 글의 일부 내용은 《新伊都国風土記》(저자 Hato_Tsubame, CantonSimon)에서 정리한 것으로, 저자의 허가를 받아 수록되었습니다. 본문의 가격, 운행 횟수와 절차는 시간이 지나면서 변할 수 있으므로, 중요한 사항은 각 공식 웹사이트를 기준으로 확인하시기 바랍니다."
   },
   "e1e701": {
    "text": "물건을 잃어버렸을 때"
   },
   "e1e702": {
    "text": "교내인지 교외인지에 따라 창구가 다릅니다. 먼저 어디서 잃어버렸는지 확인하세요."
   },
   "e1e703": {
    "items": [
     {
      "text": "교내(이토 센터존) → 학생지원과 092-802-5915. 공식 **분실물 등록 양식** 있음"
     },
     {
      "text": "교내(이토 이스트/웨스트) → 각 학무 창구: 이스트 092-802-6361"
     },
     {
      "text": "　　웨스트: 이학 092-802-4014 ／ 공학 092-802-2736 ／ 농학 092-802-4508"
     },
     {
      "text": "교내 문제로 경찰이 필요 → 이토 캠퍼스 **경무원실 092-802-2305**"
     },
     {
      "text": "캠퍼스 주변 최근접 파출소 → **슈센지 코반 092-806-1110**"
     }
    ]
   },
   "e1e704": {
    "text": "⚠️ 긴급할 때는 학교보다 먼저 **110**(경찰) 또는 **119**(구급)로. 교내 번호는 사후 지원용이며 신고 창구가 아닙니다."
   },
   "e1e705": {
    "items": [
     {
      "text": "학생 무엇이든 상담 창구(공식·분실물 양식 및 캠퍼스 창구)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/contact/consultation/"
     },
     {
      "text": "규슈대 긴급 연락처(공식·경무원실·파출소·상담 핫라인)",
      "url": "https://chc.kyushu-u.ac.jp/emergency/"
     }
    ]
   }
  },
  "es": {
   "222467": {
    "text": "Cooperativa（生協）: formas de pago en el campus"
   },
   "509375": {
    "text": "La basura voluminosa（粗大ゴミ）(muebles, electrodomésticos, etc.) debe reservarse por teléfono para su recogida y tiene un costo."
   },
   "9d0f73": {
    "text": "Separación de basura, clima, buzones de correo, cafeterías y cooperativa universitaria（生協）: ninguno de estos temas se enseña en un curso, pero se usan a diario. Consúltalos cuando los necesites."
   },
   "c6f3dd": {
    "text": "Clima en Fukuoka"
   },
   "564f6c": {
    "text": "Los veranos en Fukuoka son calurosos, así que hay que protegerse del calor: lleva agua al salir y usa bien el aire acondicionado y el ventilador. En verano y otoño es temporada de tifones; presta atención a los avisos de la universidad y de la agencia meteorológica."
   },
   "81acda": {
    "text": "Separación de basura"
   },
   "aeecc8": {
    "text": "La basura doméstica de la ciudad de Fukuoka se recoge periódicamente en tres categorías: basura combustible（燃えるごみ）, basura no combustible（燃えないごみ） y botellas vacías y botellas de PET（空きびん・ペットボトル）. La basura voluminosa（粗大ゴミ） requiere una reserva aparte."
   },
   "0efd50": {
    "text": "**Es obligatorio usar las bolsas designadas**（se venden en las tiendas de conveniencia y supermercados; son distintas según la categoría y llevan impresiones diferentes）. La basura combustible se recoge 2 veces por semana y el resto, una vez al mes; en Fukuoka la recogida suele ser nocturna, y normalmente se saca entre la puesta de sol y las 24:00 del día anterior a la recogida."
   },
   "48309f": {
    "text": "El sitio web oficial de la ciudad de Fukuoka tiene un buscador de clasificación de basura en chino: introduce el nombre del artículo y verás a qué categoría pertenece:"
   },
   "caad01": {
    "items": [
     {
      "text": "Buscador de clasificación de basura de la ciudad de Fukuoka (en chino)"
     }
    ]
   },
   "52ee2d": {
    "text": "Cuenta oficial de LINE de la ciudad de Fukuoka"
   },
   "3f8bd7": {
    "text": "La cuenta oficial de LINE de la ciudad de Fukuoka（@fukuokacity）envía avisos de prevención de desastres（防災）, días de recogida de basura, crianza, prevención de delitos（防犯） y eventos; también permite reservar vacunas y consultar la clasificación de basura por LINE. Puedes seguirla y configurar las categorías que necesites."
   },
   "2defd6": {
    "text": "Círculos y clubes（サークル・部活動）"
   },
   "958a05": {
    "text": "Unirse a un círculo（サークル）es una de las formas de conocer estudiantes japoneses e integrarse en el campus. En la Universidad de Kyushu hay círculos de todo tipo, deportivos y culturales."
   },
   "aff452": {
    "text": "· (en japonés)"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "九州大学課外活動 (lista de círculos)"
     }
    ]
   },
   "a71552": {
    "text": "· Los estudiantes internacionales pueden seguir a KUFSA（九州大学留学生会）y a KUIFA（九州大学国際親善会）; ambas organizan actividades de todo tipo con frecuencia."
   },
   "a7df77": {
    "text": "Espacio de intercambio multilingüe（EZぷらっと）"
   },
   "cadf66": {
    "text": "En la planta 2 del edificio Este 1（イースト1号館）hay un espacio multilingüe de aprendizaje, EZ ぷらっと, abierto gratuitamente a todos los estudiantes; ofrece apoyo para el aprendizaje de idiomas (libros, DVD, materiales en línea) y también se puede recibir asesoría sobre estudios en el extranjero y participar en actividades relacionadas."
   },
   "123b43": {
    "text": "Aviso de averías en el dormitorio (fugas de agua/moho)"
   },
   "d7dc2a": {
    "text": "Proceso: saca una foto → avisa al administrador del dormitorio → indica el número de habitación. También puede transmitirlo un estudiante residente; luego el administrador se pondrá en contacto contigo. En Fukuoka hay mucha humedad y el moho es frecuente; como medida de emergencia, puedes aislar la zona con cinta adhesiva."
   },
   "4f9189": {
    "text": "Coffee Hour es una reunión que se celebra semanalmente en cada dormitorio; los participantes vienen de distintos países y culturas, y es una oportunidad para conocer gente nueva."
   },
   "3b5a1b": {
    "text": "Vida en el campus: cafeterías, biblioteca y actividades"
   },
   "7a6ada": {
    "text": "El menú de las cafeterías cambia a diario; los horarios y si abren los domingos se consultan en el sitio web de la cooperativa（生協）. La información de apertura de la biblioteca está en el sitio oficial, y durante la época de exámenes el horario puede ampliarse."
   },
   "dca705": {
    "items": [
     {
      "text": "Información de apertura de la biblioteca"
     },
     {
      "text": "Cafeterías de la cooperativa (horarios/domingos)"
     },
     {
      "text": "Menú mensual de las cafeterías de la cooperativa"
     }
    ]
   },
   "2b45db": {
    "text": "Actividades en el campus y la ciudad"
   },
   "ba080f": {
    "items": [
     {
      "text": "九大祭 (actividades del campus)"
     },
     {
      "text": "博多どんたく (gran festival de la ciudad de Fukuoka)"
     }
    ]
   },
   "0120b0": {
    "text": "La 九州大学生活協同組合（cooperativa universitaria, 生協）opera la mayoría de las cafeterías y tiendas del campus, y también se dedica a la intermediación inmobiliaria y a los seguros. No es un órgano oficial de la universidad, sino una cooperativa independiente — por eso, para usar sus servicios, primero hay que hacerse miembro."
   },
   "a22a49": {
    "text": "El trámite de afiliación es algo engorroso; se recomienda hacerlo directamente en una tienda física de la cooperativa. Una vez afiliado, se puede pagar con la app de la cooperativa, y hay dos formas."
   },
   "a728d5": {
    "headers": [
     "Forma",
     "Cómo se usa",
     "Reembolso",
     "Qué se puede comprar"
    ],
    "rows": [
     [
      "Dinero electrónico de la cooperativa（生協電子マネー）",
      "Se recarga y se usa al momento",
      "1% en puntos",
      "Cualquier producto"
     ],
     [
      "Meal Prepaid（ミールプリペ）",
      "Recarga única de gran importe",
      "Aprox. 2%～5%, aumenta según el tramo",
      "Solo alimentos de cafeterías y tiendas"
     ]
    ]
   },
   "faabed": {
    "text": "Los tramos de reembolso de Meal Prepaid（ミールプリペ）se ajustaron en 2026 y las tasas de los tramos bajos bajaron notablemente: recargar poco ya no resulta rentable. Antes de recargar, consulta la última tabla oficial de tramos y decide el importe; no reutilices las cifras de guías antiguas. Los importes de recarga y reembolso de cada tramo vigente están en el sitio oficial: https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "Cafeterías: ubicación y formas de pago"
   },
   "b871d7": {
    "items": [
     {
      "text": "Cafeterías de la cooperativa（生協）: horarios, menú del día y menú mensual están en el sitio web de la cooperativa; son la opción principal del campus"
     },
     {
      "text": "GARDEN KITCHEN (entrada de la Facultad de Ciencias, W1): no es de la cooperativa; se puede pagar con tarjeta IC y Alipay（支付宝）"
     },
     {
      "text": "En las cafeterías QASIS y ビッグどら hay un puesto de comida india en cada una; el de QASIS acepta WeChat Pay（微信支付）"
     }
    ]
   },
   "f308d3": {
    "items": [
     {
      "text": "Guía de cafeterías de la cooperativa de la Universidad de Kyushu（九大生協・食堂部案内）"
     }
    ]
   },
   "281f66": {
    "text": "Trámites según el lugar de residencia"
   },
   "42f05c": {
    "text": "La península de Itoshima（糸島半島）está dividida entre el distrito Nishi de la ciudad de Fukuoka y la ciudad de Itoshima. La universidad está en el distrito Nishi, y todos los dormitorios, salvo SETTLE International, también están en ese distrito. Pero las zonas residenciales cercanas abarcan las dos ciudades, y eso determina dónde tienes que hacer cada trámite."
   },
   "39e635": {
    "headers": [
     "Dónde vives",
     "A qué oficina municipal（役所）ir",
     "Estación más cercana"
    ],
    "rows": [
     [
      "Distrito Nishi de Fukuoka（福岡市西区）",
      "Oficina delegada Oeste del Ayuntamiento de Fukuoka（福岡市役所西部出張所）",
      "Estación Kyudai-Gakkentoshi（九大学研都市駅）"
     ],
     [
      "Ciudad de Itoshima (zona de Takata, de SETTLE, etc.)",
      "Ayuntamiento de Itoshima（糸島市役所）",
      "Estación JR Chikuzen-Maebaru（JR 筑前前原駅）"
     ]
    ]
   },
   "26be59": {
    "text": "**Las bolsas de basura de las dos ciudades no son compatibles.** Antes de comprarlas, confirma a cuál de los dos lados perteneces; si compras la equivocada, no podrás sacar la basura."
   },
   "5ce69e": {
    "text": "Clima: ventoso, con inviernos suaves"
   },
   "445f0d": {
    "text": "Fukuoka combina rasgos del clima del lado del mar de Japón y del lado del Pacífico. En invierno recibe de frente el aire frío del noroeste: hay mucho viento, pero la temperatura casi siempre se mantiene por encima de 0 grados y llueve poco — como la franja de mar entre Fukuoka y la península de Corea es muy estrecha, no se acumula suficiente vapor de agua, así que rara vez hay nevadas como las de la región de Hokuriku, pero los vientos fuertes son frecuentes y las ráfagas máximas pueden llegar a la fuerza 8."
   },
   "cc62d7": {
    "text": "Junio y julio son la temporada de lluvias（梅雨）; después domina el anticiclón subtropical, con calor húmedo, cielos despejados y poca lluvia, pero la energía acumulada suele provocar tormentas convectivas intensas. En otoño también hay un periodo de lluvias, aunque menos marcado que la temporada de lluvias. En primavera y otoño las temperaturas son suaves, y el otoño trae muchos días despejados, ideales para salir."
   },
   "0aeb5b": {
    "items": [
     {
      "text": "Pronóstico, viento y mapas de radar: windy (tiene app para móvil)"
     },
     {
      "text": "Condiciones actuales y pronóstico a largo plazo: Agencia Meteorológica de Japón（気象庁）"
     },
     {
      "text": "Datos en tiempo real: tenki.jp"
     },
     {
      "text": "Trayectorias de tifones en temporada: Tropical Tidbits (aunque los tifones rara vez pasan directamente por Fukuoka)"
     }
    ]
   },
   "48c15c": {
    "text": "Las nubes de lluvia se mueven rápido por esta zona; echar un vistazo al mapa de radar antes de salir da un resultado más fiable que consultar el pronóstico por horas."
   },
   "20bca1": {
    "text": "Ubicación de los buzones de correo"
   },
   "9add58": {
    "items": [
     {
      "text": "Mapa de buzones de correo de Japón (postmap)"
     }
    ]
   },
   "df5369": {
    "text": "Parte del contenido de esta página procede de《新伊都国風土記》(autores: Hato_Tsubame y CantonSimon), incluido con autorización de los autores. Los precios, horarios y trámites mencionados cambian con el tiempo; para asuntos importantes, consulta los sitios web oficiales."
   },
   "e1e701": {
    "text": "Qué hacer si pierdes algo"
   },
   "e1e702": {
    "text": "Las ventanillas de gestión son distintas dentro y fuera del campus; primero identifica dónde lo perdiste."
   },
   "e1e703": {
    "items": [
     {
      "text": "Dentro del campus (zona central de Ito): oficina de apoyo al estudiante（学生支援課）, 092-802-5915; la universidad tiene un **formulario de registro de objetos perdidos**"
     },
     {
      "text": "Dentro del campus (zonas Este/Oeste de Ito): ventanilla académica de cada zona; Este: 092-802-6361"
     },
     {
      "text": "Oeste: Ciencias: 092-802-4014 / Ingeniería: 092-802-2736 / Agricultura: 092-802-4508"
     },
     {
      "text": "Si hay un altercado en el campus y necesitas a la policía: **oficina del oficial de seguridad（警務員室）del campus Ito, 092-802-2305**"
     },
     {
      "text": "La comisaría（交番）más cercana al campus: **comisaría de Susenji, 092-806-1110**"
     }
    ]
   },
   "e1e704": {
    "text": "⚠️ En una emergencia no llames primero a la universidad: marca directamente **110** (policía) o **119** (emergencias médicas). Los números del campus sirven para ayudar después, no son un canal de alerta."
   },
   "e1e705": {
    "items": [
     {
      "text": "Ventanilla de consultas para estudiantes（学生何でも相談窓口）(oficial: incluye el formulario de objetos perdidos y las ventanillas de cada campus)"
     },
     {
      "text": "Contactos de emergencia de la Universidad de Kyushu（緊急連絡先）(oficial: oficina del oficial de seguridad, comisarías y líneas de consulta)"
     }
    ]
   }
  }
 },
 "guide-medical": {
  "ja": {
   "543059": {
    "text": "学校健康センター"
   },
   "50e4ae": {
    "text": "日本で診療を受ける前に確認すべきことは3つあります。国民健康保険に加入しているか、どの病院に行くか、中国語に対応しているかです。本記事では、保険・学研災・ESP・中国語対応の医療相談窓口を1つの流れとしてまとめています。"
   },
   "a955e0": {
    "text": "国民健康保険"
   },
   "6d0c07": {
    "text": "来日後、できるだけ早く国民健康保険に加入してください（手続きの順番は【入国準備・到着後の手続きの順番】を参照してください）。加入すると、診療費の自己負担は30%になります。"
   },
   "40a340": {
    "text": "学研災 / 学研賠（原則全員加入）"
   },
   "1de97f": {
    "text": "学研災（学生教育研究災害傷害保険）は、九州大学が原則として全学生に加入を求めている傷害保険で、保険料は在学年数分をまとめて支払います。国民健康保険との役割分担は、国保が診療の医療費を負担し、学研災は「ケガによる損害」そのものを補償するというものです。"
   },
   "dd53eb": {
    "headers": [
     "対象",
     "1年保険料"
    ],
    "rows": [
     [
      "学部生（一般）",
      "1,000 円"
     ],
     [
      "医・歯・薬学部",
      "1,020 円"
     ],
     [
      "大学院各課程",
      "450〜1,000 円"
     ],
     [
      "学研賠 A 課程（一般）",
      "340 円"
     ],
     [
      "学研賠 C 課程（医療系）",
      "500 円"
     ],
     [
      "学研賠 L 課程（法科）",
      "1,640 円"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "補償対象：正課、学校が認めた課外活動、学校行事、在学中、および通学途中"
     },
     {
      "text": "給付例：入院 4,000 円／日（最長 180 日）、治療 3,000 ～ 30,000 円"
     },
     {
      "text": "学研賠（賠償責任保険付き）の賠償限度額は 1 事故 1 億円"
     }
    ]
   },
   "c636c2": {
    "text": "学研災【疾病は対象外】―― 病気で診療を受ける場合は国民健康保険を利用します。この保険に頼らないでください。また、学研賠は学研災への加入が前提で、単独では加入できません。"
   },
   "07daed": {
    "items": [
     {
      "text": "九州大学・学生保険（学研災 / 学研賠）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance"
     }
    ]
   },
   "ec29c8": {
    "text": "ESP（留学生緊急支援サービス）"
   },
   "c05384": {
    "text": "ESP（Emergency Secure Plan）は、九州大学の留学生が加入する緊急支援サービス（保険ではありません）です。主な内容は以下のとおりです："
   },
   "ebdd5e": {
    "items": [
     {
      "text": "診療時の三者間通話通訳（日本語・英語・中国語など）"
     },
     {
      "text": "適切な医療機関の紹介"
     },
     {
      "text": "緊急時の母国家族への連絡"
     }
    ]
   },
   "77eb90": {
    "text": "**年会費 約1,650 円**（通学傷害保険の特約を含みます。金額は当年度の案内に準じます）。オンラインで登録後、クレジットカードまたはコンビニで支払います。申請の流れは Coop / ISC からのメール案内に従ってください。"
   },
   "f5cfed": {
    "items": [
     {
      "text": "ESP・学研災等の保険紹介（九州大学）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance/"
     },
     {
      "text": "Global Gateway・留学生情報",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "4a1f02": {
    "text": "多言語医療相談ホットライン"
   },
   "2880fb": {
    "text": "福岡県「ふくおか国際医療サポートセンター」（旧・福岡アジア医療サポートセンター）では、多言語の電話通訳を24時間365日、通訳料無料で提供しています："
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595（約19言語：英語・中国語・韓国語・タイ語・ベトナム語・インドネシア語など）"
     },
     {
      "text": "「ふくおか医療情報ネット」から言語別に医療機関を検索することもできます"
     }
    ]
   },
   "a14f90": {
    "items": [
     {
      "text": "福岡アジア医療サポートセンター",
      "url": "https://asian-msc.jp/"
     }
    ]
   },
   "bb0130": {
    "items": [
     {
      "text": "健康センター相談",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "1c9357": {
    "text": "福岡市外国人医療・生活支援"
   },
   "eea36a": {
    "text": "福岡市には外国人総合相談窓口があります。診療で言葉の壁に直面した場合は、まず電話で相談してください："
   },
   "bbd53a": {
    "text": "・福岡市外国人総合相談支援センター：0120-66-1799（無料）/ 092-262-1799、受付 平日 8:45~18:00、多言語対応"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "福岡市多言語ポータル（簡体字中国語）",
      "url": "https://www.city.fukuoka.lg.jp/chinese/"
     }
    ]
   },
   "e1a701": {
    "text": "体調不良と受診"
   },
   "e1a702": {
    "text": "日本の医療は「まず緊急度を判断し、それから行き先を決める」という流れです。緊急度が高ければ救急車を呼び、病院に行くべきか迷う場合はまず電話で相談できます。どちらの窓口も 24 時間対応です。"
   },
   "e1a703": {
    "items": [
     {
      "text": "緊急度が高い（突然の激しい頭痛・呼吸困難・意識がはっきりしない）→ 119 番"
     },
     {
      "text": "病院に行くべきか迷う → #7119（24 時間・無料）"
     },
     {
      "text": "#7119 がつながらない（IP 電話など）→ 092-471-0099"
     },
     {
      "text": "受診できる病院を探す → 同じく #7119、音声案内で「1 番」"
     }
    ]
   },
   "e1a704": {
    "items": [
     {
      "text": "福岡県 救急医療電話相談窓口（公式）",
      "url": "https://www.pref.fukuoka.lg.jp/contents/fukuokaqq.html"
     }
    ]
   },
   "e1a705": {
    "text": "学内：健康相談室（無料）"
   },
   "e1a706": {
    "text": "九大の健康相談室は内科医が担当し、一般的な健康相談と診療を行っています。相談・治療に**費用は一切かからず**、受診内容が**指導教員を含む第三者に漏れることもありません**。必要に応じて学外の専門医を紹介してくれます。"
   },
   "e1a707": {
    "items": [
     {
      "text": "伊都・センターゾーン：092-802-5881"
     },
     {
      "text": "伊都・ウエストゾーン：092-802-3297"
     },
     {
      "text": "病院地区：092-642-6889"
     },
     {
      "text": "大橋：092-553-4581　／　筑紫：092-583-8431"
     }
    ]
   },
   "e1a708": {
    "text": "相談日は地区ごとに異なります。行く前に電話で確認してください。"
   },
   "e1a709": {
    "items": [
     {
      "text": "九州大学 キャンパスライフ・健康支援センター（公式）",
      "url": "https://chc.kyushu-u.ac.jp/organization/facility/"
     }
    ]
   },
   "e1a70a": {
    "text": "夜間・休日"
   },
   "e1a70b": {
    "text": "福岡市立急患診療センターは夜間・休日の急病を応急処置として診ます。公式に「不要・不急の受診はできるだけ控え、まずはかかりつけ医の診療時間内に」と明記されています。"
   },
   "e1a70c": {
    "items": [
     {
      "text": "場所：早良区百道浜 1-6-9"
     },
     {
      "text": "電話：092-847-1099"
     }
    ]
   },
   "e1a70d": {
    "items": [
     {
      "text": "福岡市医師会 急患診療センター（公式）",
      "url": "https://www.city.fukuoka.med.or.jp/facilities/"
     }
    ]
   }
  },
  "en": {
   "543059": {
    "text": "University Health Center"
   },
   "50e4ae": {
    "text": "Before visiting a doctor in Japan, three things should be confirmed: whether enrolled in 国民健康保険 (national health insurance), which hospital to visit, and whether Chinese is supported. This article brings together the insurance, 学研災, ESP, and the Chinese-language medical consultation hotline in one place."
   },
   "a955e0": {
    "text": "国民健康保険 (National Health Insurance)"
   },
   "6d0c07": {
    "text": "Enroll in 国民健康保険 (national health insurance) promptly after arrival (procedure order: see 【Arrival & Entry · The Order of Things in Your First Days】). After enrollment, the patient's personal share of medical costs is 30%."
   },
   "40a340": {
    "text": "学研災 / 学研賠 (All Students Join in Principle)"
   },
   "1de97f": {
    "text": "学研災 (学生教育研究災害傷害保険) is the accident insurance that Kyushu University in principle requires all students to join, with the premium paid in a single lump sum covering the years of enrollment. Its division of roles with 国民健康保険 (national health insurance): 国保 covers the medical costs of treatment, while 学研災 covers the injury itself — the loss caused by an accident."
   },
   "dd53eb": {
    "headers": [
     "Category",
     "1-Year Premium"
    ],
    "rows": [
     [
      "Undergraduate (general)",
      "1,000 yen"
     ],
     [
      "Medicine, Dentistry, and Pharmaceutical Sciences",
      "1,020 yen"
     ],
     [
      "Graduate school programs",
      "450〜1,000 yen"
     ],
     [
      "学研賠 Course A (general)",
      "340 yen"
     ],
     [
      "学研賠 Course C (medical)",
      "500 yen"
     ],
     [
      "学研賠 Course L (law)",
      "1,640 yen"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "Coverage: regular classes, school-approved extracurricular activities, school events, periods on campus, and commuting to and from school"
     },
     {
      "text": "Benefit examples: hospitalization 4,000 yen/day (up to 180 days), treatment 3,000 ～ 30,000 yen"
     },
     {
      "text": "学研賠 (supplementary liability insurance) compensation limit: 1 億円 per accident"
     }
    ]
   },
   "c636c2": {
    "text": "学研災【does not cover illness】— treatment for illness falls under 国民健康保険 (national health insurance); this insurance should not be relied on for illness. In addition, 学研賠 requires prior enrollment in 学研災; the two cannot be purchased separately."
   },
   "07daed": {
    "items": [
     {
      "text": "Kyushu University · Student Insurance (学研災 / 学研賠)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance"
     }
    ]
   },
   "ec29c8": {
    "text": "ESP (International Student Emergency Support Service)"
   },
   "c05384": {
    "text": "ESP (Emergency Secure Plan) is an emergency support service (not insurance) that Kyushu University international students must join. It mainly provides:"
   },
   "ebdd5e": {
    "items": [
     {
      "text": "Three-way telephone interpretation during medical visits (Japanese, English, Chinese, etc.)"
     },
     {
      "text": "Introductions to appropriate medical institutions"
     },
     {
      "text": "Contacting family in the home country in emergencies"
     }
    ]
   },
   "77eb90": {
    "text": "**Annual fee: approx. 1,650 円** (includes the commuting accident insurance rider; the amount follows the current year's announcement). Register online and pay by credit card or at a convenience store; the application procedure follows the Coop / ISC email instructions."
   },
   "f5cfed": {
    "items": [
     {
      "text": "ESP, 学研災 and Other Insurance (Kyushu University)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance/"
     },
     {
      "text": "Global Gateway · International Student Information",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "4a1f02": {
    "text": "Multilingual Medical Consultation Hotline"
   },
   "2880fb": {
    "text": "Fukuoka Prefecture's ふくおか国際医療サポートセンター (Fukuoka International Medical Support Center; formerly 福岡アジア医療サポートセンター) provides multilingual telephone interpretation, available 24 hours a day, 365 days a year, with interpretation free of charge:"
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595 (approx. 19 languages: English, Chinese, Korean, Thai, Vietnamese, Indonesian, etc.)"
     },
     {
      "text": "Medical institutions can also be searched by language via ふくおか医療情報ネット (Fukuoka Medical Information Net)"
     }
    ]
   },
   "a14f90": {
    "items": [
     {
      "text": "福岡アジア医療サポートセンター",
      "url": "https://asian-msc.jp/"
     }
    ]
   },
   "bb0130": {
    "items": [
     {
      "text": "Health Center Consultation",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "1c9357": {
    "text": "Fukuoka City Medical and Life Support for Foreign Residents"
   },
   "eea36a": {
    "text": "Fukuoka City operates a comprehensive consultation service for foreign residents. Those who encounter language barriers at a medical visit can call for help first:"
   },
   "bbd53a": {
    "text": "· Fukuoka City Foreign Residents Comprehensive Consultation Support Center: 0120-66-1799 (toll-free) / 092-262-1799, available weekdays 8:45~18:00, multilingual"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "Fukuoka City Multilingual Portal (Simplified Chinese)",
      "url": "https://www.city.fukuoka.lg.jp/chinese/"
     }
    ]
   },
   "e1a701": {
    "text": "Feeling unwell: where to go"
   },
   "e1a702": {
    "text": "Medical care in Japan works in two steps: judge how urgent it is, then decide where to go. If it is clearly urgent, call an ambulance; if you are unsure whether you need a hospital, you can call and ask first. Both lines run 24 hours."
   },
   "e1a703": {
    "items": [
     {
      "text": "Clearly urgent (sudden severe headache, trouble breathing, confusion) → call 119"
     },
     {
      "text": "Unsure whether to go to hospital → dial #7119 (24 h, free)"
     },
     {
      "text": "#7119 not reachable (IP phones etc.) → 092-471-0099"
     },
     {
      "text": "Looking for a hospital that can see you → same #7119, choose option 1"
     }
    ]
   },
   "e1a704": {
    "items": [
     {
      "text": "Fukuoka Prefecture emergency medical telephone consultation (official)",
      "url": "https://www.pref.fukuoka.lg.jp/contents/fukuokaqq.html"
     }
    ]
   },
   "e1a705": {
    "text": "On campus: Health Counselling Room (free)"
   },
   "e1a706": {
    "text": "Kyushu U's Health Counselling Room is staffed by physicians, offering general health advice and treatment. There is **no charge** for consultation or treatment, and what you discuss is **not disclosed to third parties, including your supervisor**. Where needed, the doctor will refer you to a specialist outside the university."
   },
   "e1a707": {
    "items": [
     {
      "text": "Ito, Center Zone: 092-802-5881"
     },
     {
      "text": "Ito, West Zone: 092-802-3297"
     },
     {
      "text": "Hospital Campus: 092-642-6889"
     },
     {
      "text": "Ohashi: 092-553-4581 ／ Chikushi: 092-583-8431"
     }
    ]
   },
   "e1a708": {
    "text": "Consultation days differ by campus — call ahead to confirm."
   },
   "e1a709": {
    "items": [
     {
      "text": "Kyushu University Center for Health Sciences and Counseling (official)",
      "url": "https://chc.kyushu-u.ac.jp/organization/facility/"
     }
    ]
   },
   "e1a70a": {
    "text": "Nights and holidays"
   },
   "e1a70b": {
    "text": "Fukuoka City Emergency Medical Center handles night-time and holiday emergencies on a first-aid basis. Its official guidance asks you to avoid non-urgent visits and to see your regular doctor first during normal hours."
   },
   "e1a70c": {
    "items": [
     {
      "text": "Address: 1-6-9 Momochihama, Sawara-ku"
     },
     {
      "text": "Phone: 092-847-1099"
     }
    ]
   },
   "e1a70d": {
    "items": [
     {
      "text": "Fukuoka City Medical Association emergency centres (official)",
      "url": "https://www.city.fukuoka.med.or.jp/facilities/"
     }
    ]
   }
  },
  "ko": {
   "543059": {
    "text": "학교 건강센터"
   },
   "50e4ae": {
    "text": "일본에서 진료받기 전에 확인할 세 가지: 국민건강보험 가입 여부, 갈 병원, 중국어 지원 여부입니다. 이 글은 보험, 学研災, ESP와 중국어 의료상담 핫라인을 하나의 흐름으로 소개합니다."
   },
   "a955e0": {
    "text": "국민건강보험 (国民健康保険)"
   },
   "6d0c07": {
    "text": "일본 도착 후 가능한 한 빨리 국민건강보험 (国民健康保険)에 가입하시기 바랍니다 (가입 순서는 【입국 준비·도착 후 며칠간의 처리 순서】 참조). 가입하면 진료비 본인 부담이 30%가 됩니다."
   },
   "40a340": {
    "text": "学研災 / 学研賠 (원칙적으로 전원 가입)"
   },
   "1de97f": {
    "text": "学研災 (学生教育研究災害傷害保険)는 九州大学가 원칙적으로 전 학생의 가입을 요구하는 상해보험으로, 보험료는 재학 연수에 따라 일시불로 납부합니다. 국민건강보험과의 분담은: 국민건강보험이 진료비를 담당하고, 学研災는 「부상으로 인한 손해」 그 자체를 담당합니다."
   },
   "dd53eb": {
    "headers": [
     "대상",
     "1년 보험료"
    ],
    "rows": [
     [
      "학부생 (일반)",
      "1,000엔"
     ],
     [
      "의·치·약학부",
      "1,020엔"
     ],
     [
      "대학원 각 과정",
      "450〜1,000엔"
     ],
     [
      "学研賠 A 코스 (일반)",
      "340엔"
     ],
     [
      "学研賠 C 코스 (의료계)",
      "500엔"
     ],
     [
      "学研賠 L 코스 (법과)",
      "1,640엔"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "보장 범위: 정규 수업, 학교가 인정한 과외 활동, 학교 행사, 재학 기간 및 통학 중"
     },
     {
      "text": "지급 예: 입원 4,000엔/일 (최장 180일), 치료 3,000 ～ 30,000엔"
     },
     {
      "text": "学研賠 (배상책임보험)의 배상 한도는 1 사고 1 億円"
     }
    ]
   },
   "c636c2": {
    "text": "学研災는 【질병 불포함】입니다. 병이 나서 진료를 받는 것은 국민건강보험에서 담당하므로, 이 보험에 기대지 마십시오. 또한 学研賠는 学研災에 먼저 가입한 후에야 가입할 수 있으며, 둘은 단독으로 가입할 수 없습니다."
   },
   "07daed": {
    "items": [
     {
      "text": "九州大学 · 학생보험 (学研災 / 学研賠)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance"
     }
    ]
   },
   "ec29c8": {
    "text": "ESP (유학생 긴급지원 서비스)"
   },
   "c05384": {
    "text": "ESP (Emergency Secure Plan)는 九州大学 유학생이 반드시 가입해야 하는 긴급지원 서비스 (보험 아님)로, 주로 다음을 제공합니다:"
   },
   "ebdd5e": {
    "items": [
     {
      "text": "진료 시 3자 전화 통역 (일·영·중 등)"
     },
     {
      "text": "적절한 의료기관 소개"
     },
     {
      "text": "긴급 시 모국 가족과 연락"
     }
    ]
   },
   "77eb90": {
    "text": "**연회비 약 1,650 円** (통학 상해보험 특약 포함, 금액은 당해 연도 안내 기준). 온라인 등록 후 신용카드 또는 편의점에서 결제하며, 신청 절차는 Coop / ISC 메일 안내를 기준으로 합니다."
   },
   "f5cfed": {
    "items": [
     {
      "text": "ESP・学研災 등 보험 소개 (九大)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance/"
     },
     {
      "text": "Global Gateway·유학생 정보",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "4a1f02": {
    "text": "다국어 의료상담 핫라인"
   },
   "2880fb": {
    "text": "福岡県의 「ふくおか国際医療サポートセンター」 (구 福岡アジア医療サポートセンター)는 다국어 전화 통역을 제공하며, 24시간 365일 통화 통역은 무료입니다:"
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595 (약 19개 언어: 영·중·한·태·베트남·인도네시아 등)"
     },
     {
      "text": "「ふくおか医療情報ネット」에서 언어별 의료기관 검색도 가능합니다"
     }
    ]
   },
   "a14f90": {
    "items": [
     {
      "text": "福岡アジア医療サポートセンター",
      "url": "https://asian-msc.jp/"
     }
    ]
   },
   "bb0130": {
    "items": [
     {
      "text": "건강센터 상담",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "1c9357": {
    "text": "福岡市 외국인 의료·생활 지원"
   },
   "eea36a": {
    "text": "福岡市에는 외국인 종합상담 창구가 마련되어 있습니다. 진료 시 언어 장벽이 있을 때는 먼저 전화로 상담을 요청할 수 있습니다:"
   },
   "bbd53a": {
    "text": "· 福岡市 외국인 종합상담 지원센터: 0120-66-1799 (무료) / 092-262-1799, 접수: 평일 8:45~18:00, 다국어 대응"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "福岡市 다국어 포털 (간체 중국어)",
      "url": "https://www.city.fukuoka.lg.jp/chinese/"
     }
    ]
   },
   "e1a701": {
    "text": "아플 때: 어디로 가야 하나"
   },
   "e1a702": {
    "text": "일본의 진료는 「먼저 긴급도를 판단하고, 그다음 갈 곳을 정한다」는 흐름입니다. 긴급도가 높으면 구급차를 부르고, 병원에 가야 할지 망설여지면 먼저 전화로 상담할 수 있습니다. 두 창구 모두 24시간입니다."
   },
   "e1a703": {
    "items": [
     {
      "text": "긴급도가 높음(갑작스러운 심한 두통·호흡 곤란·의식 불명) → 119"
     },
     {
      "text": "병원에 가야 할지 모르겠음 → #7119(24시간·무료)"
     },
     {
      "text": "#7119 연결 안 됨(IP 전화 등) → 092-471-0099"
     },
     {
      "text": "진료 가능한 병원을 찾음 → 같은 #7119, 음성 안내에서 「1번」"
     }
    ]
   },
   "e1a704": {
    "items": [
     {
      "text": "후쿠오카현 응급의료 전화 상담 창구(공식)",
      "url": "https://www.pref.fukuoka.lg.jp/contents/fukuokaqq.html"
     }
    ]
   },
   "e1a705": {
    "text": "교내: 건강상담실(무료)"
   },
   "e1a706": {
    "text": "규슈대 건강상담실은 내과 의사가 담당하며 일반 건강 상담과 진료를 합니다. 상담과 치료에 **비용이 전혀 들지 않고**, 진료 내용이 **지도교수를 포함한 제3자에게 알려지지 않습니다**. 필요하면 교외 전문의를 소개해 줍니다."
   },
   "e1a707": {
    "items": [
     {
      "text": "이토·센터존: 092-802-5881"
     },
     {
      "text": "이토·웨스트존: 092-802-3297"
     },
     {
      "text": "병원 캠퍼스: 092-642-6889"
     },
     {
      "text": "오하시: 092-553-4581 ／ 지쿠시: 092-583-8431"
     }
    ]
   },
   "e1a708": {
    "text": "상담 가능한 요일은 캠퍼스마다 다릅니다. 가기 전에 전화로 확인하세요."
   },
   "e1a709": {
    "items": [
     {
      "text": "규슈대 캠퍼스라이프·건강지원센터(공식)",
      "url": "https://chc.kyushu-u.ac.jp/organization/facility/"
     }
    ]
   },
   "e1a70a": {
    "text": "야간·휴일"
   },
   "e1a70b": {
    "text": "후쿠오카시립 응급진료센터는 야간·휴일의 급병을 응급처치로 진료합니다. 공식 안내에 「불필요하거나 급하지 않은 진료는 가급적 피하고, 먼저 주치의의 진료 시간 내에」라고 명시되어 있습니다."
   },
   "e1a70c": {
    "items": [
     {
      "text": "주소: 사와라구 모모치하마 1-6-9"
     },
     {
      "text": "전화: 092-847-1099"
     }
    ]
   },
   "e1a70d": {
    "items": [
     {
      "text": "후쿠오카시 의사회 응급진료센터(공식)",
      "url": "https://www.city.fukuoka.med.or.jp/facilities/"
     }
    ]
   }
  },
  "es": {
   "543059": {
    "text": "Centro de salud del campus"
   },
   "50e4ae": {
    "text": "Antes de acudir al médico en Japón conviene confirmar tres cosas: si ya estás afiliado al seguro nacional de salud, a qué hospital ir y si el centro atiende en chino. Este artículo conecta en una sola línea el seguro, 学研災, el ESP y la línea de consulta médica en chino."
   },
   "a955e0": {
    "text": "Seguro nacional de salud"
   },
   "6d0c07": {
    "text": "Tramita el seguro nacional de salud lo antes posible después de llegar a Japón (para el orden de los trámites, consulta «Preparación para la entrada al país · Orden de los trámites tras la llegada»). Una vez afiliado, tu parte del coste de la consulta es del 30 %."
   },
   "40a340": {
    "text": "学研災 / 学研賠 (todos los estudiantes deben afiliarse, en principio)"
   },
   "1de97f": {
    "text": "学研災 (学生教育研究災害傷害保険) es el seguro de accidentes al que Kyudai exige, en principio, que se afilie todo el alumnado; la prima se paga de una sola vez en función de los años previstos de estudio. El reparto de funciones con el seguro nacional de salud es el siguiente: el seguro nacional cubre los gastos médicos de una consulta, mientras que 学研災 cubre el hecho mismo de sufrir una lesión."
   },
   "dd53eb": {
    "headers": [
     "Destinatarios",
     "Prima de 1 año"
    ],
    "rows": [
     [
      "Estudiantes de grado (general)",
      "1,000 円"
     ],
     [
      "Facultades de Medicina, Odontología y Farmacia",
      "1,020 円"
     ],
     [
      "Programas de posgrado",
      "450〜1,000 円"
     ],
     [
      "学研賠 curso A (general)",
      "340 円"
     ],
     [
      "学研賠 curso C (área médica)",
      "500 円"
     ],
     [
      "学研賠 curso L (área de Derecho)",
      "1,640 円"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "Cobertura: clases regulares, actividades extracurriculares reconocidas por la universidad, eventos escolares, el tiempo de permanencia en el centro y el trayecto hasta él"
     },
     {
      "text": "Ejemplos de prestación: hospitalización 4,000 円 al día (máximo 180 días), tratamiento 3,000 ～ 30,000 円"
     },
     {
      "text": "El límite de indemnización de 学研賠 (que incluye seguro de responsabilidad civil) es de 1 億円 por accidente"
     }
    ]
   },
   "c636c2": {
    "text": "学研災 [no cubre enfermedades]: cuando enfermas y acudes al médico, lo que se aplica es el seguro nacional de salud; no cuentes con este seguro. Además, para contratar 学研賠 hay que estar afiliado primero a 学研災; no se pueden contratar por separado."
   },
   "07daed": {
    "items": [
     {
      "text": "Universidad de Kyushu · Seguro estudiantil (学研災 / 学研賠)"
     }
    ]
   },
   "ec29c8": {
    "text": "ESP (servicio de apoyo urgente para estudiantes internacionales)"
   },
   "c05384": {
    "text": "El ESP (Emergency Secure Plan) es un servicio de apoyo urgente (no un seguro) al que deben suscribirse los estudiantes internacionales de la Universidad de Kyushu. Ofrece principalmente:"
   },
   "ebdd5e": {
    "items": [
     {
      "text": "Interpretación telefónica a tres bandas durante una consulta médica (japonés, inglés, chino, etc.)"
     },
     {
      "text": "Orientación hacia centros médicos adecuados"
     },
     {
      "text": "Contacto con los familiares del país de origen en caso de urgencia"
     }
    ]
   },
   "77eb90": {
    "text": "**La cuota anual es de unos 1,650 円** (incluye una cobertura especial de seguro de accidentes en el trayecto al centro de estudios; el importe vigente es el de la guía del año correspondiente). Tras registrarte en línea, se paga con tarjeta de crédito o en una tienda de conveniencia; para el procedimiento de solicitud, sigue las indicaciones que Coop / ISC envían por correo electrónico."
   },
   "f5cfed": {
    "items": [
     {
      "text": "Presentación de seguros como el ESP y 学研災 (Kyudai)"
     },
     {
      "text": "Global Gateway · Información para estudiantes internacionales"
     }
    ]
   },
   "4a1f02": {
    "text": "Línea de consulta médica multilingüe"
   },
   "2880fb": {
    "text": "El ふくおか国際医療サポートセンター (Centro de Apoyo Médico Internacional de Fukuoka, antes 福岡アジア医療サポートセンター) ofrece interpretación telefónica multilingüe, 24 horas al día los 365 días del año y sin coste para quien llama:"
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595 (unos 19 idiomas: inglés, chino, coreano, tailandés, vietnamita, indonesio, etc.)"
     },
     {
      "text": "También puedes buscar centros médicos por idioma en ふくおか医療情報ネット"
     }
    ]
   },
   "a14f90": {
    "items": [
     {
      "text": "Centro de Apoyo Médico para Asia de Fukuoka (福岡アジア医療サポートセンター)"
     }
    ]
   },
   "e1a701": {
    "text": "Enfermedad y consulta médica"
   },
   "e1a702": {
    "text": "En Japón el proceso es el siguiente: primero se valora la urgencia y después se decide adónde ir. Si la urgencia es alta, llama directamente a la ambulancia; si no sabes si necesitas ir al hospital, puedes consultar antes por teléfono. Ambas vías funcionan 24 horas."
   },
   "e1a703": {
    "items": [
     {
      "text": "Urgencia alta (dolor de cabeza repentino e intenso, dificultad para respirar, pérdida de consciencia) → llama directamente al 119"
     },
     {
      "text": "Si no sabes si necesitas ir al hospital → llama al #7119 (24 horas, gratuito)"
     },
     {
      "text": "Si no consigues comunicar con el #7119 (teléfonos IP, etc.) → 092-471-0099"
     },
     {
      "text": "Si buscas un hospital que pueda atenderte → llama también al #7119 y elige la opción 1 siguiendo las indicaciones de voz"
     }
    ]
   },
   "e1a704": {
    "items": [
     {
      "text": "Ventanilla de consulta médica telefónica de urgencia de la prefectura de Fukuoka (oficial)"
     }
    ]
   },
   "e1a705": {
    "text": "En el campus: 健康相談室 (consultorio de salud, gratuito)"
   },
   "e1a706": {
    "text": "En el 健康相談室 de Kyudai atienden médicos internistas, y se ofrecen consultas generales de salud y tratamiento. Ni la consulta ni el tratamiento **generan coste alguno**, y el contenido de la visita **no se comunica a terceros, incluido tu tutor**. Cuando es necesario, el médico te deriva a un hospital especializado de fuera del campus."
   },
   "e1a707": {
    "items": [
     {
      "text": "Ito · Center Zone: 092-802-5881"
     },
     {
      "text": "Ito · West Zone: 092-802-3297"
     },
     {
      "text": "Zona del hospital universitario: 092-642-6889"
     },
     {
      "text": "Ohashi: 092-553-4581　／　Chikushi: 092-583-8431"
     }
    ]
   },
   "e1a708": {
    "text": "Los días de consulta varían según la zona; confírmalo por teléfono antes de ir."
   },
   "e1a709": {
    "items": [
     {
      "text": "Centro de Apoyo a la Salud y a la Vida en el Campus de la Universidad de Kyushu (oficial)"
     }
    ]
   },
   "e1a70a": {
    "text": "Noche y días festivos"
   },
   "e1a70b": {
    "text": "El Centro Municipal de Atención de Urgencias de Fukuoka (福岡市立急患診療センター) se ocupa de las enfermedades repentinas durante la noche y en los días festivos, y solo realiza tratamiento de urgencia. La institución pide expresamente que se eviten las visitas no urgentes y que se acuda primero al médico habitual."
   },
   "e1a70c": {
    "items": [
     {
      "text": "Dirección: Sawara-ku, Momochihama 1-6-9"
     },
     {
      "text": "Teléfono: 092-847-1099"
     }
    ]
   },
   "e1a70d": {
    "items": [
     {
      "text": "Centro de Atención de Urgencias del Colegio Médico de la ciudad de Fukuoka (oficial)"
     }
    ]
   },
   "bb0130": {
    "items": [
     {
      "text": "Consulta en el centro de salud"
     }
    ]
   },
   "1c9357": {
    "text": "Apoyo médico y de vida para personas extranjeras en la ciudad de Fukuoka"
   },
   "eea36a": {
    "text": "La ciudad de Fukuoka dispone de una ventanilla de consulta general para personas extranjeras; si encuentras barreras de idioma al acudir al médico, puedes pedir ayuda por teléfono primero:"
   },
   "bbd53a": {
    "text": "· Centro de Apoyo y Consulta General para Personas Extranjeras de la ciudad de Fukuoka: 0120-66-1799 (gratuito) / 092-262-1799, horario de atención 8:45~18:00 en días laborables, varios idiomas"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "Portal multilingüe de la ciudad de Fukuoka (chino simplificado)"
     }
    ]
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
    "text": "福岡県の最低賃金は **1,057 円/時間**（2026 年 10 月 3 日まで）、2026 年 10 月 4 日から **1,114 円/時間** に引き上げられます。実際の時給は業種により異なり、コンビニ・飲食は低め、家庭教師・翻訳は高めです。具体的な条件は雇用主によります。"
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
    "text": "Fukuoka Prefecture's minimum wage is **1,057 yen/hour** (until 3 October 2026) and rises to **1,114 yen/hour** from 4 October 2026. Actual wages vary by industry: convenience stores and restaurants at the lower end, tutoring and translation at the higher end. Specific conditions depend on the employer."
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
    "text": "후쿠오카현 최저임금은 **1,057엔/시간**(2026년 10월 3일까지)이며, 2026년 10월 4일부터 **1,114엔/시간**으로 인상됩니다. 실제 시급은 업종에 따라 다르며, 편의점·음식점은 낮은 편, 과외·번역은 높은 편입니다. 구체적인 조건은 고용주에 따릅니다."
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
  },
  "es": {
   "1947e3": {
    "text": "Antes de trabajar a tiempo parcial hay que completar dos trámites: el **permiso de actividad fuera del estatus** (no se puede trabajar sin haberlo obtenido) y los impuestos y la pensión. Este artículo explica el límite de horas de trabajo, los canales para buscar empleo y cómo actuar ante el impago del salario."
   },
   "5e12c4": {
    "text": "Permiso de actividad fuera del estatus y límite de horas de trabajo"
   },
   "f0b619": {
    "text": "Para trabajar a tiempo parcial en Japón con un visado de estudiante, **primero hay que obtener el «permiso de actividad fuera del estatus»**. Este permiso puede solicitarse en el aeropuerto al entrar al país, o más tarde en la Agencia de Servicios de Inmigración regional. Trabajar sin haberlo obtenido es ilegal y puede afectar al visado. Consulta el apartado [Trámites de residencia]（在留手続き）."
   },
   "9071cc": {
    "text": "Durante el período lectivo, el límite es de 28 horas por semana. Durante las vacaciones largas (vacaciones de primavera, de verano y de invierno), el límite es de 8 horas por día y 40 horas por semana. Si se determina que has trabajado por encima del límite de forma ilegal, puede afectar a la renovación del visado; respeta estrictamente las normas."
   },
   "105e04": {
    "text": "Salario por hora y canales de búsqueda de empleo"
   },
   "77b055": {
    "text": "El salario mínimo de la prefectura de Fukuoka es **1,057 円/hora**（hasta el 2026 年 10 月 3 日）, y desde el 2026 年 10 月 4 日 sube a **1,114 円/hora**. El salario real varía según el sector: en las tiendas de conveniencia y en la restauración suele ser más bajo; en las clases particulares y la traducción, más alto. Las condiciones concretas dependen de cada empleador."
   },
   "493aef": {
    "text": "Canales principales: el tablón de anuncios de la cooperativa de la universidad（生協）o de la oficina de asuntos internacionales, sitios de búsqueda de empleo como Townwork（タウンワーク）o Baitoru（バイトル）, y recomendaciones de estudiantes de cursos superiores o de personas de tu laboratorio de investigación. No hay que buscar trabajo con urgencia antes de entrar al país; también da tiempo de sobra después de llegar, una vez tramitada la tarjeta de residencia y la cuenta bancaria."
   },
   "1ae89a": {
    "text": "Precauciones y portales oficiales"
   },
   "b2625a": {
    "items": [
     {
      "text": "Obtén primero el permiso de actividad fuera del estatus y solo después empieza a trabajar."
     },
     {
      "text": "Respeta estrictamente el límite de 28 horas por semana y lleva tu propio registro de turnos para no superarlo."
     },
     {
      "text": "Declara los ingresos del trabajo a tiempo parcial según la normativa, para evitar conflictos con la solicitud de becas o con la declaración de impuestos."
     },
     {
      "text": "Desconfía de las agencias que piden un depósito o retienen documentos de identidad: es una señal de alerta."
     }
    ]
   },
   "c5ccc9": {
    "items": [
     {
      "text": "Agencia de Servicios de Inmigración — permiso de actividad fuera del estatus",
      "url": "https://www.isa.go.jp/"
     },
     {
      "text": "Townwork（タウンワーク）",
      "url": "https://townwork.net/"
     },
     {
      "text": "Baitoru（バイトル）",
      "url": "https://baitoru.com/"
     }
    ]
   }
  }
 },
 "guide-phone": {
  "ja": {
   "939835": {
    "text": "契約前に必要な2つの前提条件"
   },
   "a3ea1a": {
    "text": "来日後にまず解決すべきなのが通信の問題です。**まずは一時的なデータSIMを用意しておくことをおすすめします**。到着後に正式なプランを選びましょう。本記事では大手3キャリアと格安SIMを比較し、解約時の注意点も説明します。"
   },
   "72f94d": {
    "text": "来日前：一時的なデータSIM（おすすめ）"
   },
   "69d3e3": {
    "text": "来日前に短期利用できるデータSIMを1枚用意しておくことをおすすめします（約1週間で十分ですが、念のため有効期限が長いものを選んでも構いません）。到着後は地図・連絡・各種手続きに使えて、移行期間を余裕をもって過ごせます。"
   },
   "58e988": {
    "text": "中国移動の CMlink を選ぶか、ECサイトで旅行用データSIM（トラベルSIM）を購入すれば十分です。手続きが簡単で、購入後すぐに使えます。"
   },
   "17c7e7": {
    "text": "一時的なSIMカードは到着直後のつなぎとしてのみ使用してください。長期間日本で生活する場合は、早めに日本の格安SIMを契約してください（詳しくは下記「SIMカードの選び方」参照）。"
   },
   "57ee3f": {
    "text": "SIMカードの選び方"
   },
   "a65f78": {
    "text": "日本の大手3キャリア（docomo / au / SoftBank）の本家プランは月額が総じて高いため、学生には大手キャリアのサブブランドがおすすめです。例えば SoftBank 系の Y!mobile、au 系の UQ mobile は料金が安く、通信も比較的安定しています。また、楽天モバイル（Rakuten）は料金が安いことから、留学生にも多く利用されています。"
   },
   "930aa8": {
    "text": "月間データ量で選ぶなら、povo、ahamo などの格安SIMがコストパフォーマンスに優れています。povo は必要な分だけデータを購入でき、ahamo はデータ容量が多く5Gにも対応しています。これまでの経験では、povo と ahamo は伊都周辺での利用感が良く、楽天モバイルと SoftBank は伊都キャンパス周辺の電波状況が良くありません。"
   },
   "95aeea": {
    "text": "留学生向けの GTN、Sakura などのSIMは、これまでの経験では価格が高めで通信品質の評判も良くないため、契約前に比較検討することをおすすめします。また、Jio、Mobal などを調べてみるのも良いでしょう。"
   },
   "b88191": {
    "text": "オンライン申し込みと多言語サポート"
   },
   "1238cc": {
    "text": "オンライン申し込みに対応し、クレジットカード不要の格安SIM（例：IIJmio、LINEMO など）を優先して選びましょう。通常はオンラインで申し込みから開通まで完了できます。"
   },
   "bb18de": {
    "text": "補足：旧「LINE MOBILE」は2021年に新規受付を終了し、2023年にサービスを終了しました。後継は SoftBank 系の LINEMO です。現在は LINEMO をお申し込みください。"
   },
   "a79fe6": {
    "text": "電話での相談が必要な場合は、以下の主要キャリアが多言語のカスタマーサポートを提供しています："
   },
   "7cc68f": {
    "items": [
     {
      "text": "docomo：0120-005-250（英語・中国語・ポルトガル語・スペイン語）、受付時間：平日 9:00~20:00"
     },
     {
      "text": "au：0120-959-472（英語・韓国語・中国語・ポルトガル語）"
     },
     {
      "text": "SoftBank：0800-919-0157、つながったら 8→9→9 の順に押して英語窓口へ。英語の受付時間は 10:00~19:00"
     }
    ]
   },
   "d3cc3b": {
    "text": "eSIM は**機種が非対応の場合は正常に利用できないことがあります**。初めて契約する場合は、まず物理SIMを選ぶか、念のため物理SIMをもう1枚用意しておくことをおすすめします。"
   },
   "a747f8": {
    "text": "キャンパスネットワーク"
   },
   "7bdf67": {
    "text": "学校アカウントを取得すると学内 Wi-Fi（kitenet）に接続できます。eduroam は大学間で利用できる Wi-Fi サービスで、別途登録が必要です。公式マニュアルのページは、SSO-KID でログインしてから閲覧してください。"
   },
   "72a8d0": {
    "text": "学内 Wi-Fi（kitenet）の接続用 ID は **SSO-KID@kitenet**（SSO-KID は学生証の裏面に記載された 10 桁の数字）、パスワードは SSO-KID のパスワードです（Campusmate と同じ）。"
   },
   "0fb853": {
    "items": [
     {
      "text": "kitenet 設定マニュアル：iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "kitenet 設定マニュアル：Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "kitenet 設定マニュアル：その他の OS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "kitenet 公式ページ（日本語）",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/"
     },
     {
      "text": "KiteNet 接続マニュアル（英語）",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam 登録",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "解約 / 番号移行"
   },
   "5b8387": {
    "items": [
     {
      "text": "povo で LINE の年齢認証ができない場合の対処法",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "text": "SoftBank の番号解約手続き",
      "url": "https://www.softbank.jp/support/faq/view/10062"
     },
     {
      "text": "au から povo への乗り換え手続き",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "住所の登録が済んでいること（在留カードの裏面に住所が記載されていること）"
     },
     {
      "text": "支払いに使えるクレジットカード、または開設済みの日本の銀行口座があること"
     }
    ]
   },
   "7e41fb": {
    "text": "この2つの条件があるため、SIM契約は到着初日にできるものではありません。一般的な順序は、住所登録 → SIM契約・口座開設 → その他の手続き です。さらに口座開設には電話番号が必要なため、どうしても行き詰まった場合は、まず Supporter やサポートセンターの番号で口座を開設し、自分の番号を取得してから変更するとよいでしょう。"
   },
   "e1b701": {
    "text": "自宅のネット回線"
   },
   "e1b702": {
    "text": "寮と自分で借りた部屋では事情がまったく違います。寮はネット込みではないので自分で契約し、賃貸は工事ができるかどうかを先に確認します。"
   },
   "e1b703": {
    "text": "寮：ネットは自分で契約"
   },
   "e1b704": {
    "text": "学生寮（伊都協奏館を含む）に**ネットは含まれていません**。利用するには指定事業者との契約が必要で、大学が示す目安は**月額 2,000 円程度**です。"
   },
   "e1b705": {
    "items": [
     {
      "text": "伊都協奏館 管理人室：092-806-5779"
     },
     {
      "text": "ドミトリー1／2／3 の管理人室電話は下記の公式ページ参照"
     }
    ]
   },
   "e1b706": {
    "items": [
     {
      "text": "九州大学 学生寮（公式・費用と管理人室電話）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory"
     }
    ]
   },
   "e1b707": {
    "text": "賃貸：光回線か工事不要か"
   },
   "e1b708": {
    "items": [
     {
      "text": "光回線：工事が 2 回（屋内・屋外）必要で、オーナーまたは管理会社の承諾も要る。申込から開通まで数週間かかることが多い"
     },
     {
      "text": "工事不要：ホームルーターやモバイル Wi-Fi。コンセントに挿すだけ。短期居住や工事が難しい物件に向く"
     }
    ]
   },
   "e1b709": {
    "text": "光回線の工事は**本人の立ち会いが必須**で、**事前にオーナーまたは管理会社の承諾**を取る必要があります。無断で工事すると契約違反になります。この手順は省けません。"
   },
   "e1b70a": {
    "items": [
     {
      "text": "NURO 光：オーナー・管理会社への工事承諾のご案内（公式）",
      "url": "https://support.nuro.jp/faqsupport/nuro/web/knowledge10994.html"
     },
     {
      "text": "SoftBank Air（公式・工事不要）",
      "url": "https://www.softbank.jp/internet/air/"
     }
    ]
   }
  },
  "en": {
   "939835": {
    "text": "Two Prerequisites Before Signing Up"
   },
   "a3ea1a": {
    "text": "Communication is the first thing to arrange after arriving in Japan. **Prepare a temporary data SIM for the transition** and choose a regular plan after landing. This article compares the three major carriers and budget SIMs (格安 SIM), and explains what to note when cancelling a contract."
   },
   "72f94d": {
    "text": "Before Arrival: Temporary Data SIM (Recommended)"
   },
   "69d3e3": {
    "text": "A short-term data SIM prepared before coming to Japan (about one week is enough; a longer validity may be chosen for safety) makes the transition smoother, covering navigation, contact and paperwork right after landing."
   },
   "58e988": {
    "text": "CMlink of China Mobile or a travel data SIM bought from an online marketplace both work; application is simple and the SIM is usable immediately."
   },
   "17c7e7": {
    "text": "The temporary SIM is only for the transition after landing; those staying in Japan long-term should sign up for a local budget SIM (格安 SIM) as soon as possible (see SIM selection below)."
   },
   "57ee3f": {
    "text": "SIM Card Selection"
   },
   "a65f78": {
    "text": "The monthly fees of the three major carriers' own-brand plans (docomo / au / SoftBank) are generally high. Sub-brands of the major carriers are more recommended for students: for example, Y!mobile under SoftBank and UQ mobile under au offer lower rates with relatively stable networks. Rakuten Mobile (Rakuten) is also popular among international students because of its low rates."
   },
   "930aa8": {
    "text": "For monthly data volume, budget SIMs such as povo and ahamo offer good value: povo sells data packs on demand, while ahamo includes more data and supports 5G. Based on past experience, povo and ahamo perform well around Ito, while Rakuten Mobile and SoftBank have average signals around the Ito campus."
   },
   "95aeea": {
    "text": "International-student-oriented SIMs such as GTN and Sakura are reported to be overpriced with poor signal reviews, so compare options before signing up. Jio, Mobal and others are also worth checking."
   },
   "b88191": {
    "text": "Online Application and Multilingual Support"
   },
   "1238cc": {
    "text": "Budget SIMs that support online application and do not require a credit card (such as IIJmio and LINEMO) are preferable; application and activation can usually be completed online."
   },
   "bb18de": {
    "text": "Note: the former LINE MOBILE stopped accepting new contracts in 2021 and ended service in 2023. Its successor is LINEMO of the SoftBank group, so make sure to get LINEMO."
   },
   "a79fe6": {
    "text": "For phone inquiries, the following major carriers provide multilingual support:"
   },
   "7cc68f": {
    "items": [
     {
      "text": "docomo: 0120-005-250 (English, Chinese, Portuguese, Spanish), available on weekdays 9:00~20:00"
     },
     {
      "text": "au: 0120-959-472 (English, Korean, Chinese, Portuguese)"
     },
     {
      "text": "SoftBank: 0800-919-0157; press 8→9→9 after connecting for English, available 10:00~19:00"
     }
    ]
   },
   "d3cc3b": {
    "text": "eSIM **may not work properly due to device incompatibility**; for the first contract, a physical SIM is the first choice, or carry an extra physical card as a backup."
   },
   "a747f8": {
    "text": "Campus Network"
   },
   "7bdf67": {
    "text": "Once the university account is obtained, the campus Wi-Fi (kitenet) can be used. eduroam is a Wi-Fi service shared between universities and requires separate registration. The official manual pages require signing in with the SSO-KID."
   },
   "72a8d0": {
    "text": "The login ID for the campus Wi-Fi (kitenet) is **SSO-KID@kitenet** (the SSO-KID is the 10-digit number printed on the back of the student ID card), and the password is the SSO-KID password (the same as for Campusmate)."
   },
   "0fb853": {
    "items": [
     {
      "text": "kitenet setup manual: iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "kitenet setup manual: Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "kitenet setup manual: other OS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "kitenet official page (Japanese)",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/"
     },
     {
      "text": "KiteNet connection guide (English)",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam registration",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "Cancellation / Porting"
   },
   "5b8387": {
    "items": [
     {
      "text": "Handling povo LINE Age Verification Failure",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "text": "SoftBank Number Cancellation Procedure",
      "url": "https://www.softbank.jp/support/faq/view/10062"
     },
     {
      "text": "Transferring from au to povo",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "Residence registration completed — the address must be on the back of the residence card"
     },
     {
      "text": "A credit card available for payment, or a Japanese bank account already opened"
     }
    ]
   },
   "7e41fb": {
    "text": "These two conditions mean that signing up for a SIM cannot be done on the first day after arrival. The usual order is: residence registration → SIM contract / bank account opening → other procedures. Opening an account itself requires a phone number, so when these requirements block each other, an account can be opened using the number of a Supporter or the Support Center (サポートセンター) first, then changed to one's own number later."
   },
   "e1b701": {
    "text": "Internet at home"
   },
   "e1b702": {
    "text": "Dormitories and private rentals work completely differently: dorms do not include internet, so you contract it yourself; for a rental, first check whether installation is even possible."
   },
   "e1b703": {
    "text": "Dorms: you arrange internet yourself"
   },
   "e1b704": {
    "text": "Student dormitories (including Ito Kyoso-kan) do **not include internet**. You need a contract with the designated provider; the university's stated reference cost is **around 2,000 yen per month**."
   },
   "e1b705": {
    "items": [
     {
      "text": "Ito Kyoso-kan caretaker's office: 092-806-5779"
     },
     {
      "text": "Dormitory 1/2/3 caretaker numbers: see the official page below"
     }
    ]
   },
   "e1b706": {
    "items": [
     {
      "text": "Kyushu University student dormitories (official: fees and caretaker numbers)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory"
     }
    ]
   },
   "e1b707": {
    "text": "Rentals: fibre or no-install"
   },
   "e1b708": {
    "items": [
     {
      "text": "Fibre: needs two installations (indoor and outdoor) plus the owner's or management company's consent; activation often takes weeks"
     },
     {
      "text": "No-install: a home router or mobile Wi-Fi — just plug it in. Good for short stays or buildings where work is difficult"
     }
    ]
   },
   "e1b709": {
    "text": "Fibre installation **requires you to be present** and **needs the owner's or management company's prior consent**. Having work done without asking breaches your contract — do not skip this step."
   },
   "e1b70a": {
    "items": [
     {
      "text": "NURO Hikari: asking the owner/management company for installation consent (official)",
      "url": "https://support.nuro.jp/faqsupport/nuro/web/knowledge10994.html"
     },
     {
      "text": "SoftBank Air (official, no installation)",
      "url": "https://www.softbank.jp/internet/air/"
     }
    ]
   }
  },
  "ko": {
   "939835": {
    "text": "가입 전 두 가지 전제 조건"
   },
   "a3ea1a": {
    "text": "일본에 도착한 후 가장 먼저 해결해야 할 문제가 통신입니다. **우선 임시 인터넷 카드로 전환하는 것을 권장하며**, 도착 후 정식 요금제를 선택하세요. 본문은 3대 통신사와 저가 SIM(格安SIM)을 비교하고, 해지 시 주의사항을 설명합니다."
   },
   "72f94d": {
    "text": "입국 전: 임시 인터넷 카드(추천)"
   },
   "69d3e3": {
    "text": "일본에 오기 전에 단기로 사용할 수 있는 인터넷 카드를 미리 준비할 것을 권장합니다(약 1주일이면 충분하며, 안심을 위해 더 긴 유효기간을 신청해도 됩니다). 도착 후 내비게이션, 연락, 각종 수속에 사용할 수 있어 여유 있게 전환할 수 있습니다."
   },
   "58e988": {
    "text": "중국 이동통신사의 CMlink를 선택하거나, 전자상거래 플랫폼에서 여행용 데이터 카드(여행 SIM)를 구매하면 됩니다. 가입이 간단하고 구매 즉시 사용할 수 있습니다."
   },
   "17c7e7": {
    "text": "임시 카드는 도착 직후의 전환용으로만 사용하세요. 일본에서 장기 거주할 경우 빠른 시일 내에 일본 현지의 저가 SIM(格安SIM)을 가입하기 바랍니다(아래 'SIM 카드 선택' 참조)."
   },
   "57ee3f": {
    "text": "SIM 카드 선택"
   },
   "a65f78": {
    "text": "일본 3대 통신사(docomo / au / SoftBank)의 본 브랜드 월 요금은 대체로 비쌉니다. 학생이라면 대형 통신사의 서브 브랜드를 추천합니다. 예를 들어 SoftBank 계열의 Y!mobile, au 계열의 UQ mobile은 요금이 더 저렴하고 네트워크도 상대적으로 안정적입니다. 또한 라쿠텐 모바일(Rakuten)은 요금이 저렴해 유학생 사이에서도 많이 선택하는 통신사입니다."
   },
   "930aa8": {
    "text": "월 데이터 용량 기준으로 고르면 povo, ahamo 등 저가 SIM(格安SIM)의 가성비가 높습니다. povo는 필요에 따라 데이터 팩을 구매하고, ahamo는 데이터 용량이 많고 5G를 지원합니다. 기존 경험에 따르면 이토(伊都) 주변에서는 povo, ahamo의 체감이 좋았고, 라쿠텐 모바일과 SoftBank는 신호가 보통 수준이었습니다."
   },
   "95aeea": {
    "text": "유학생 대상 GTN, Sakura 등의 SIM은 기존 경험상 가격이 높고 신호 평가가 나쁜 편이므로, 가입 전에 먼저 비교할 것을 권장합니다. 그 외에 Jio, Mobal 등도 알아볼 수 있습니다."
   },
   "b88191": {
    "text": "온라인 신청과 다국어 고객센터"
   },
   "1238cc": {
    "text": "온라인 신청을 지원하고 신용카드가 필요 없는 저가 SIM(格安SIM)(예: IIJmio, LINEMO 등)을 우선 선택하세요. 보통 온라인으로 신청과 개통까지 마칠 수 있습니다."
   },
   "bb18de": {
    "text": "설명: 기존 「LINE MOBILE」은 2021년에 신규 가입을 중단했고 2023년에 서비스가 종료되었습니다. 후속 서비스는 SoftBank 계열의 LINEMO이므로, 지금은 LINEMO로 가입하시기 바랍니다."
   },
   "a79fe6": {
    "text": "전화 상담이 필요하다면, 다음 주요 통신사에서 다국어 고객센터를 제공합니다:"
   },
   "7cc68f": {
    "items": [
     {
      "text": "docomo: 0120-005-250(영어·중국어·포르투갈어·스페인어), 접수 시간 평일 9:00~20:00"
     },
     {
      "text": "au: 0120-959-472(영어·한국어·중국어·포르투갈어)"
     },
     {
      "text": "SoftBank: 0800-919-0157, 연결 후 8→9→9를 누르면 영어로 전환됩니다. 영어 접수 시간 10:00~19:00"
     }
    ]
   },
   "d3cc3b": {
    "text": "eSIM은 **기기 모델과 호환되지 않아 정상적으로 사용하지 못할 수 있습니다**. 처음 가입할 때는 실물 SIM을 우선 선택하고, 만약에 대비해 실물 카드를 하나 더 준비할 것을 권장합니다."
   },
   "a747f8": {
    "text": "교내 네트워크"
   },
   "7bdf67": {
    "text": "학교 계정을 받으면 교내 Wi-Fi(kitenet)에 연결할 수 있습니다. eduroam은 대학 간에 이용할 수 있는 Wi-Fi 서비스로 별도 등록이 필요합니다. 공식 매뉴얼 페이지는 SSO-KID로 로그인한 뒤 열람할 수 있습니다."
   },
   "72a8d0": {
    "text": "교내 Wi-Fi(kitenet)의 접속 ID는 **SSO-KID@kitenet**(SSO-KID는 학생증 뒷면에 적힌 10자리 숫자)이며, 비밀번호는 SSO-KID 비밀번호입니다(Campusmate와 동일)."
   },
   "0fb853": {
    "items": [
     {
      "text": "kitenet 설정 매뉴얼: iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "kitenet 설정 매뉴얼: Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "kitenet 설정 매뉴얼: 기타 OS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "kitenet 공식 페이지(일본어)",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/"
     },
     {
      "text": "KiteNet 연결 매뉴얼(영어)",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam 등록",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "해지 / 번호 이동"
   },
   "5b8387": {
    "items": [
     {
      "text": "povo에서 LINE 연령 인증이 되지 않을 때의 대처",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "text": "SoftBank 번호 해지 절차",
      "url": "https://www.softbank.jp/support/faq/view/10062"
     },
     {
      "text": "au에서 povo로 번호 이동 신청",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "주소 등록 완료 - 재류카드 뒷면에 주소가 있어야 합니다"
     },
     {
      "text": "결제에 사용할 수 있는 신용카드, 또는 개설해 둔 일본 은행 계좌가 있어야 합니다"
     }
    ]
   },
   "7e41fb": {
    "text": "이 두 가지 때문에 SIM 가입은 입국 첫날에 끝낼 수 있는 일이 아닙니다. 일반적인 순서는 주소 등록 → SIM 가입 / 계좌 개설 → 기타 수속입니다. 그런데 계좌 개설 자체에도 전화번호가 필요하므로, 정말로 서로 막힐 경우 Supporter 또는 서포트센터(サポートセンター)의 번호로 먼저 계좌를 개설하고, 자신의 번호를 받은 뒤 변경하시면 됩니다."
   },
   "e1b701": {
    "text": "집에서 쓰는 인터넷"
   },
   "e1b702": {
    "text": "기숙사와 직접 빌린 집은 상황이 전혀 다릅니다. 기숙사는 인터넷이 포함되어 있지 않아 직접 계약하고, 임대 주택은 공사가 가능한지 먼저 확인해야 합니다."
   },
   "e1b703": {
    "text": "기숙사: 인터넷은 직접 계약"
   },
   "e1b704": {
    "text": "학생 기숙사(이토 교소칸 포함)에는 **인터넷이 포함되어 있지 않습니다**. 이용하려면 지정 사업자와 계약해야 하며, 대학이 제시한 기준은 **월 2,000엔 정도**입니다."
   },
   "e1b705": {
    "items": [
     {
      "text": "이토 교소칸 관리인실: 092-806-5779"
     },
     {
      "text": "기숙사 1/2/3 관리인실 전화는 아래 공식 페이지 참조"
     }
    ]
   },
   "e1b706": {
    "items": [
     {
      "text": "규슈대 학생 기숙사(공식·비용 및 관리인실 전화)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory"
     }
    ]
   },
   "e1b707": {
    "text": "임대: 광회선 또는 공사 불필요"
   },
   "e1b708": {
    "items": [
     {
      "text": "광회선: 공사가 2회(실내·실외) 필요하고 건물주나 관리회사의 동의도 받아야 합니다. 신청부터 개통까지 몇 주 걸리는 경우가 많습니다"
     },
     {
      "text": "공사 불필요: 홈라우터나 모바일 Wi-Fi. 플러그만 꽂으면 됩니다. 단기 거주나 공사가 어려운 집에 적합합니다"
     }
    ]
   },
   "e1b709": {
    "text": "광회선 공사는 **본인이 입회해야 하고**, **사전에 건물주나 관리회사의 동의**를 받아야 합니다. 무단으로 공사하면 계약 위반입니다. 이 절차는 생략할 수 없습니다."
   },
   "e1b70a": {
    "items": [
     {
      "text": "NURO 광: 건물주·관리회사 공사 승낙 안내(공식)",
      "url": "https://support.nuro.jp/faqsupport/nuro/web/knowledge10994.html"
     },
     {
      "text": "SoftBank Air(공식·공사 불필요)",
      "url": "https://www.softbank.jp/internet/air/"
     }
    ]
   }
  },
  "es": {
   "939835": {
    "text": "Dos requisitos previos antes de contratar la tarjeta"
   },
   "a3ea1a": {
    "text": "Al llegar a Japón, lo primero que hay que resolver es la comunicación. **Se recomienda preparar antes una tarjeta de datos temporal como transición** y elegir el plan definitivo una vez en el país. Este artículo compara las tres grandes operadoras y las SIM de bajo coste（格安 SIM）, y explica qué tener en cuenta al cancelar el contrato."
   },
   "72f94d": {
    "text": "Antes de venir: tarjeta de datos temporal (recomendado)"
   },
   "69d3e3": {
    "text": "Se recomienda preparar antes de venir a Japón una tarjeta de datos de uso a corto plazo (con 1 semana suele bastar; por precaución también se puede solicitar una validez más larga) y usarla al llegar para la navegación, los contactos y los trámites, de modo que la transición sea más tranquila."
   },
   "58e988": {
    "text": "Puedes optar por CMlink de China Mobile o comprar en una plataforma de comercio electrónico una tarjeta de datos para viajes (SIM turística); el trámite es sencillo y se usa al instante."
   },
   "17c7e7": {
    "text": "La tarjeta temporal solo sirve como transición al llegar; si vas a vivir en Japón a largo plazo, tramita cuanto antes una SIM de bajo coste japonesa (véase «Elección de tarjeta SIM» más abajo)."
   },
   "57ee3f": {
    "text": "Elección de tarjeta SIM"
   },
   "a65f78": {
    "text": "La cuota mensual de las marcas principales de las tres grandes operadoras japonesas (docomo / au / SoftBank) suele ser cara; para los estudiantes es más recomendable elegir las submarcas de esas operadoras, como Y!mobile, de SoftBank, o UQ mobile, de au, con tarifas más bajas y una red relativamente estable. Además, Rakuten Mobile también es una de las más elegidas entre los estudiantes internacionales por sus tarifas económicas."
   },
   "930aa8": {
    "text": "Si eliges según los datos mensuales, las SIM de bajo coste como povo y ahamo tienen una buena relación calidad-precio: povo permite comprar paquetes de datos según necesidad y ahamo incluye más datos y es compatible con 5G. Según la experiencia previa, povo y ahamo funcionan mejor en los alrededores del campus Ito, mientras que Rakuten Mobile y SoftBank tienen una señal regular en las inmediaciones del campus Ito."
   },
   "95aeea": {
    "text": "En el caso de SIM orientadas a estudiantes internacionales como GTN o Sakura, según la experiencia previa los precios son más bien altos y las valoraciones de la señal, peores; conviene comparar antes de contratar. También puedes informarte sobre Jio, Mobal y otras."
   },
   "b88191": {
    "text": "Solicitud en línea y atención al cliente multilingüe"
   },
   "1238cc": {
    "text": "Da prioridad a las SIM de bajo coste que admitan solicitud en línea y no exijan tarjeta de crédito (como IIJmio, LINEMO, etc.); por lo general la solicitud y la activación se completan por internet."
   },
   "bb18de": {
    "text": "Nota: el antiguo «LINE MOBILE» dejó de aceptar nuevas contrataciones en 2021 y cesó el servicio en 2023; su sucesor es LINEMO, del grupo SoftBank, así que ahora hay que fijarse en LINEMO."
   },
   "a79fe6": {
    "text": "Si necesitas consultar por teléfono, las siguientes operadoras principales ofrecen atención al cliente multilingüe:"
   },
   "7cc68f": {
    "items": [
     {
      "text": "docomo: 0120-005-250 (inglés, chino, portugués, español), horario de atención: días laborables 9:00~20:00"
     },
     {
      "text": "au: 0120-959-472 (inglés, coreano, chino, portugués)"
     },
     {
      "text": "SoftBank: 0800-919-0157; tras conectar, marca 8→9→9 para pasar al inglés; atención en inglés 10:00~19:00"
     }
    ]
   },
   "d3cc3b": {
    "text": "La eSIM **puede no funcionar correctamente por incompatibilidad con el modelo de teléfono**; en la primera contratación es preferible elegir una SIM física o llevar además una tarjeta física por si acaso."
   },
   "e1b701": {
    "text": "El internet de casa"
   },
   "e1b702": {
    "text": "El internet de los dormitorios y el de una vivienda alquilada por tu cuenta son muy distintos: el dormitorio no incluye internet y hay que contratarlo por tu cuenta, mientras que en una vivienda alquilada primero hay que confirmar si se puede realizar la obra de instalación."
   },
   "e1b703": {
    "text": "Dormitorio: el internet lo contratas tú"
   },
   "e1b704": {
    "text": "Los dormitorios de estudiantes (incluido 伊都協奏館) **no incluyen internet**. Para conectarte hay que contratar con la operadora designada; el precio de referencia publicado por la universidad es de **unos 2,000 円 al mes**."
   },
   "e1b705": {
    "items": [
     {
      "text": "伊都協奏館, oficina del administrador: 092-806-5779"
     },
     {
      "text": "ドミトリー 1／2／3: el teléfono de la oficina del administrador aparece en la página oficial indicada más abajo"
     }
    ]
   },
   "e1b706": {
    "items": [
     {
      "text": "Universidad de Kyushu, dormitorios de estudiantes (oficial · costes y teléfono de la oficina del administrador)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory"
     }
    ]
   },
   "e1b707": {
    "text": "Vivienda alquilada por tu cuenta: fibra óptica o sin obra"
   },
   "e1b708": {
    "items": [
     {
      "text": "Fibra óptica: requiere dos obras (interior + exterior), necesita el consentimiento del propietario o de la empresa administradora, y la activación suele tardar varias semanas"
     },
     {
      "text": "Sin obra: ホームルーター（router doméstico）o モバイル Wi-Fi（Wi-Fi móvil）; se usa solo con enchufarlo y es adecuado para estancias cortas o viviendas donde la obra resulta complicada"
     }
    ]
   },
   "e1b709": {
    "text": "En la obra de la fibra óptica **es obligatoria tu presencia** y **hay que obtener primero el consentimiento del propietario o de la empresa administradora**. Empezar la obra sin avisar constituye un incumplimiento del contrato, así que este paso no se puede omitir."
   },
   "e1b70a": {
    "items": [
     {
      "text": "NURO 光: explicación del consentimiento de obra al propietario y a la empresa administradora (oficial)",
      "url": "https://support.nuro.jp/faqsupport/nuro/web/knowledge10994.html"
     },
     {
      "text": "SoftBank Air (oficial · sin obra)",
      "url": "https://www.softbank.jp/internet/air/"
     }
    ]
   },
   "a747f8": {
    "text": "Red del campus"
   },
   "7bdf67": {
    "text": "Una vez obtenida la cuenta de la universidad se puede usar el Wi-Fi del campus (kitenet). eduroam es un servicio de Wi-Fi compartido entre universidades y requiere un registro aparte. Las páginas del manual oficial requieren iniciar sesión con el SSO-KID."
   },
   "72a8d0": {
    "text": "El ID de acceso al Wi-Fi del campus (kitenet) es **SSO-KID@kitenet** (el SSO-KID es el número de 10 dígitos del reverso de la tarjeta de estudiante) y la contraseña es la del SSO-KID (la misma que la de Campusmate)."
   },
   "0fb853": {
    "items": [
     {
      "text": "Manual de configuración de kitenet: iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "Manual de configuración de kitenet: Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "Manual de configuración de kitenet: otros SO",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "Página oficial de kitenet (japonés)",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/"
     },
     {
      "text": "Manual de conexión de KiteNet (inglés)",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "Registro en eduroam",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "Baja / portabilidad"
   },
   "5b8387": {
    "items": [
     {
      "text": "Cómo resolver cuando povo no permite la verificación de edad de LINE",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "text": "Proceso de baja de un número de SoftBank",
      "url": "https://www.softbank.jp/support/faq/view/10062"
     },
     {
      "text": "Trámite para pasar de au a povo",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "Tener ya completado el registro de residencia: el reverso de la tarjeta de residencia（在留カード）debe mostrar la dirección"
     },
     {
      "text": "Tener una tarjeta de crédito con la que domiciliar el pago, o una cuenta bancaria japonesa ya abierta"
     }
    ]
   },
   "7e41fb": {
    "text": "Estos dos puntos hacen imposible que contratar la tarjeta sea cosa del primer día de llegada. El orden habitual es: registro de residencia → contratar la tarjeta / abrir la cuenta → el resto de trámites. Y como abrir la cuenta exige a su vez un número de teléfono, si de verdad se bloquean mutuamente puedes abrir la cuenta con el número del Supporter o del サポートセンター y cambiarlo después de tener tu propio número."
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
    "text": "年金は老齢に備える保険で、日本に住む20歳以上の人は加入義務があります。令和8年度（2026）の保険料は**月額 17,920円**です。留学生は通常、実際の納付は不要で、次の2つの方法で免除を受けられます。"
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
    "text": "国民健康保険（National Health Insurance）is medical insurance; once enrolled, the individual bears only 30% of medical costs. International students must enroll. It can be applied for together with 住民登録（resident registration）. See 【Medical & Insurance】"
   },
   "ca823a": {
    "text": "国民年金（National Pension）"
   },
   "cf19f3": {
    "text": "年金（pension）is retirement insurance; all persons aged 20 or over residing in Japan are obliged to enroll. The premium for fiscal year 令和 8（2026）is **17,920 円 per month**. International students generally do not actually pay; the premium can be reduced or exempted in two ways:"
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
      "desc": "For the scheduled period of absence, tick 「1 年以内」(within one year), and below, tick 「临时出国, 预定再入国」(temporary departure with scheduled re-entry)."
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
    "text": "연금은 노후 보장을 위한 보험으로, 일본에 거주하는 20세 이상은 모두 가입 의무가 있으며, 令和8年度(레이와8년도)(2026)의 보험료는 **매월 17,920円(17,920엔)**입니다. 유학생은 일반적으로 실제 납부가 필요 없으며, 다음 두 가지 방법으로 감면받을 수 있습니다:"
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
  },
  "es": {
   "123756": {
    "headers": [
     "Duración de la salida",
     "Qué hay que hacer"
    ],
    "rows": [
     [
      "1 año o menos",
      "Basta con el permiso de reentrada presunto (みなし再入国許可)"
     ],
     [
      "Más de 1 año",
      "Solicitar con antelación el permiso de reentrada en la Agencia de Servicios de Inmigración"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "Antes de obtener el carné de estudiante hay que haber completado el registro de residencia;"
     },
     {
      "text": "El tiempo de emisión del carné de estudiante varía según la facultad y no se entrega el mismo día;"
     },
     {
      "text": "Una vez obtenido el carné de estudiante, hay que volver a la oficina del distrito para hacer el cambio."
     }
    ]
   },
   "569204": {
    "text": "Trámites antes de regresar al país de origen"
   },
   "745564": {
    "text": "Oficina del distrito / del ayuntamiento (administración local): trámites de la vida diaria, registro de residencia (住民登録), seguro nacional de salud (国民健康保険), pensión nacional (国民年金), My Number (マイナンバー)"
   },
   "824008": {
    "text": "La mayoría de los trámites relacionados con el estatus de residencia se pueden realizar en ventanilla o en línea, pero tienen plazos y un orden determinado. Primero hay que distinguir bien las dos instituciones:"
   },
   "8988f9": {
    "text": "El registro de domicilio es el punto de partida de todos los trámites: **sin completarlo no se puede abrir una cuenta bancaria ni contratar un teléfono móvil**. Este artículo primero distingue entre la oficina del distrito (区役所) y la Agencia de Servicios de Inmigración, y después explica en orden el registro de domicilio, la renovación del estatus de residencia, el My Number y el seguro de salud."
   },
   "cc395e": {
    "text": "División de funciones entre la oficina del distrito y la Agencia de Servicios de Inmigración"
   },
   "37a783": {
    "text": "Oficina del distrito vs. Agencia de Servicios de Inmigración"
   },
   "a14519": {
    "text": "Agencia de Servicios de Inmigración (administración nacional): visado y estatus de residencia, renovación y modificación de la tarjeta de residencia, permiso de reentrada (再入国許可), permiso de actividad fuera del estatus (資格外活動許可)"
   },
   "5f159d": {
    "text": "En resumen: la oficina del distrito gestiona la vida diaria; la Agencia de Servicios de Inmigración, el visado."
   },
   "1b1c2c": {
    "text": "Registro de domicilio en la tarjeta de residencia"
   },
   "da7df6": {
    "text": "El registro de domicilio es el primer paso después de llegar a Japón y también el más importante: casi todos los trámites posteriores (banco, teléfono móvil, seguro, etc.) solo se pueden realizar después de haberlo completado. Hay dos formas de hacerlo:"
   },
   "72da73": {
    "text": "Por cuenta propia: acudir a Saitopia (さいとぴあ, sucursal 西部出張所), junto a la estación Kyudai-Gakkentoshi (九大学研都市駅) de JR, a unos 1 minuto a pie (horario de atención: días laborables 8:45~17:15, cerrado los fines de semana y festivos)."
   },
   "b9e577": {
    "text": "En las ventanillas hay mostradores de asuntos de los ciudadanos (市民係) y de seguros y pensiones (保険年金係). Normalmente, en unas 1~1.5 horas se pueden completar a la vez el registro de residencia, la pensión y el seguro de salud. El personal tiene experiencia y puede atender en inglés."
   },
   "e1582c": {
    "text": "Que lo gestione la universidad: la universidad guarda temporalmente la tarjeta de residencia durante unos 3 días hábiles y solo realiza el registro de residencia; la pensión y el seguro de salud se tramitan por cuenta propia. La ventaja es que no hay que ir personalmente."
   },
   "e5831f": {
    "text": "Se puede elegir cualquiera de las dos opciones; incluso si se elige que lo gestione la universidad, no hay problema en completar después los demás trámites en la oficina del distrito. Una vez hecho el registro, hay que entregar la tarjeta de residencia en la oficina de asuntos estudiantiles correspondiente para un nuevo registro."
   },
   "fff1b2": {
    "text": "Cambio de domicilio después de mudarse"
   },
   "3eed49": {
    "text": "Después de mudarse (incluido dentro del mismo municipio), hay que hacer la declaración de entrada (転入届) en la oficina del distrito de la nueva dirección en un plazo de **14 días** y actualizar el domicilio en el reverso de la tarjeta de residencia. Hay que llevar: la tarjeta de residencia, el pasaporte y el certificado de residencia (住民票) anterior, si se tiene. En las mudanzas entre municipios, primero hay que presentar la declaración de salida (転出届) en la oficina del distrito del domicilio anterior y después la declaración de entrada (転入届) en el nuevo."
   },
   "ec20eb": {
    "text": "Reenvío de correo en la oficina de correos"
   },
   "258c3a": {
    "text": "Después de mudarse se puede solicitar en línea el reenvío de correo, con una validez de unos 3 meses. Si te mudas de A a B y luego a C, puedes solicitar primero A→B y después B→C; si durante ese tiempo llega correo a A, se reenviará automáticamente a C."
   },
   "ac86c0": {
    "text": "Renovación de la tarjeta de residencia"
   },
   "29561b": {
    "text": "La renovación se puede solicitar a partir de los **3 meses anteriores a la expiración** del período de residencia. Lugar: oficina regional de la Agencia de Servicios de Inmigración en Fukuoka (福岡出入国在留管理局), cerca de la estación Akasaka (赤坂駅) del metro. Los materiales necesarios suelen incluir: tarjeta de residencia, pasaporte, certificado de matrícula (在学証明書), formulario de solicitud (descargable en el sitio oficial), certificado de ingresos, etc."
   },
   "f9cb98": {
    "text": "No renovar a tiempo constituye «estancia ilegal» (不法残留), con consecuencias graves y graduadas: penalmente se puede imponer **hasta 3 años de prisión o una multa de hasta 300 万円**; además conlleva la denegación de desembarco (上陸拒否, prohibición de reingreso): 1 año para quienes se presentan voluntariamente y salen del país, 5 años para quienes son deportados a la fuerza y 10 años para los reincidentes. Hazlo siempre antes de la fecha de expiración."
   },
   "0086fd": {
    "items": [
     {
      "text": "Agencia de Servicios de Inmigración (出入国在留管理庁)",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "Tarjeta de residencia específica (nueva norma de 2026)"
   },
   "702ad6": {
    "text": "A partir de 2026 年 6 月 14 日, la tarjeta de residencia y la tarjeta My Number se integran en una sola: se emite la tarjeta de residencia específica, que reúne ambas funciones en un único plástico. Las tarjetas de residencia actuales siguen siendo válidas durante su período de vigencia; el cambio es voluntario. Al renovar por vencimiento, se puede solicitar la nueva tarjeta si se desea."
   },
   "092dbb": {
    "text": "Solicitud de acceso a campus (campusweb)"
   },
   "8977fb": {
    "items": [
     {
      "text": "campusweb de la Universidad de Kyushu (九大)",
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do"
     }
    ]
   },
   "1dda60": {
    "text": "Las solicitudes de reducción de matrícula, como las de la Facultad de Agricultura, suelen tramitarse también por campusweb (si no sabes si está disponible, puedes intentar abrir la página anterior)."
   },
   "9c6062": {
    "text": "Inicio de sesión y activación de SSO-KID"
   },
   "d66ea0": {
    "text": "Si no consigues iniciar sesión o activar la cuenta unificada de la universidad (SSO-KID), consulta los accesos siguientes. Atención: para activar SSO-KID **no se puede usar un correo distinto del correo institucional**."
   },
   "7d1d01": {
    "items": [
     {
      "text": "Inicio de sesión de estudiantes de SSO-KID",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/students.html"
     },
     {
      "text": "Activación de la contraseña de SSO",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     }
    ]
   },
   "67b663": {
    "text": "My Number (マイナンバー)"
   },
   "e63790": {
    "text": "Después del registro de residencia, la notificación del número personal llega por correo certificado a la dirección. Se recomienda solicitar cuanto antes la tarjeta My Number (tarjeta de plástico con foto) en la oficina del distrito: la necesitarás después para abrir una cuenta bancaria, recibir transferencias desde el extranjero, contratar seguros, etc. Al recibir transferencias del extranjero, el banco pedirá el My Number; se puede presentar el certificado de residencia (住民票) en el que conste."
   },
   "0b4d10": {
    "text": "Seguro nacional de salud (seguro médico)"
   },
   "8f34d4": {
    "text": "El seguro nacional de salud es un seguro médico: al afiliarse, la persona solo paga el 30% de la atención médica. Los estudiantes internacionales deben afiliarse. Se puede solicitar a la vez que el registro de residencia. Ver【Salud y Seguros】"
   },
   "ca823a": {
    "text": "Pensión nacional (pensión de jubilación)"
   },
   "cf19f3": {
    "text": "La pensión nacional es un seguro de pensión: toda persona de 20 años o más que resida en Japón tiene la obligación de afiliarse. En el año fiscal Reiwa 8 (2026), la prima es de **17,920 円 al mes**. Los estudiantes internacionales normalmente no necesitan pagarla de forma efectiva: se puede reducir o eximir por dos vías:"
   },
   "637f64": {
    "text": "① Exención por ingresos por debajo del límite: se puede solicitar al llegar a Japón, cuando aún no hay ingresos; es la solución transitoria que la oficina del distrito ofrece en la primera gestión."
   },
   "ca081f": {
    "text": "② Exención de pago para estudiantes (学生納付特例): la medida de largo plazo más adecuada para estudiantes internacionales: la prima se aplaza durante los años de estudio y se abona después, al tener ingresos tras graduarse. Para solicitarla se necesita el carné de estudiante y que los ingresos del año anterior estén por debajo del límite fijado (unos 128 万円 más las deducciones por dependientes; consulta la cifra oficial)."
   },
   "c8342b": {
    "text": "Proceso clave y dudas frecuentes"
   },
   "4f17e5": {
    "text": "Registro de residencia → solicitar en la oficina del distrito la exención por ingresos por debajo del límite → recoger el carné de estudiante en la oficina de asuntos estudiantiles → volver a la oficina del distrito para cambiar la exención de ① a ②, la exención de pago para estudiantes"
   },
   "90bede": {
    "text": "Cada año hay estudiantes que olvidan hacer ese cambio y después reciben facturas de la pensión. Atención:"
   },
   "e7cf1e": {
    "text": "Lugar de solicitud: el mostrador de pensiones de la oficina del distrito donde se hizo el registro de residencia, o la oficina de pensiones de Nishi-Fukuoka (西福岡年金事務所)."
   },
   "8a0854": {
    "items": [
     {
      "text": "Agencia de Pensiones de Japón · Exención de pago para estudiantes (学生納付特例)",
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html"
     }
    ]
   },
   "5960c7": {
    "text": "Antes de salir de Japón hay que gestionar:"
   },
   "067610": {
    "items": [
     {
      "text": "Dar de baja el domicilio: presentar la declaración de salida (転出届) en la oficina del distrito"
     },
     {
      "text": "Seguro nacional de salud: devolver el certificado de seguro y liquidar las primas; si se han pagado 6 meses, se puede solicitar el reembolso único por salida (脱退一時金)"
     },
     {
      "text": "Pensión nacional: si se solicitó alguna exención, confirmar el tratamiento posterior"
     },
     {
      "text": "Impuestos: confirmar que el impuesto municipal (住民税) y el impuesto sobre la renta están liquidados; tras salir de Japón puede llegar una notificación de pago adicional, que habrá que encargar a un amigo que siga en Japón"
     },
     {
      "text": "Cuenta bancaria: decidir si se cierra la cuenta"
     },
     {
      "text": "Teléfono móvil: cancelar el contrato o portar el número (MNP)"
     },
     {
      "text": "Dormitorio / apartamento: hacer la salida conforme al contrato"
     },
     {
      "text": "Trámites de la universidad: certificados de calificaciones y de graduación, devolver los libros a la biblioteca, baja de la cooperativa (生協), etc."
     }
    ]
   },
   "23d79c": {
    "text": "Las cantidades impagadas pueden afectar al historial crediticio personal y también salpicar al fiador o al profesor tutor."
   },
   "497bc4": {
    "text": "Impuesto de turismo internacional (国際観光旅客税, «impuesto de salida»)"
   },
   "a61a13": {
    "text": "Al salir de Japón en avión o en barco se cobra el impuesto internacional de turismo (国際観光旅客税), conocido popularmente como «impuesto de salida»; por lo general ya está incluido en el precio del billete. Desde las salidas de 2026-07-01, el impuesto sube de 1,000 円 a 3,000 円 por salida."
   },
   "f0dbae": {
    "text": "Hay una medida transitoria que conviene recordar: los contratos de transporte firmados antes de 2026-06-30 (es decir, los billetes ya emitidos) siguen cobrándose a 1,000 円, aunque la salida real sea posterior al 7 月 1 日. Si piensas volver a casa en verano, emitir el billete antes supone una diferencia real."
   },
   "6432da": {
    "text": "Cómo comprobarlo: revisar en el desglose del precio del billete o en el recibo si aparece el concepto «国際観光旅客税» o si entre los impuestos figura la cantidad JPY 3,000. Este impuesto no se cobra en los vuelos de entrada a Japón, así que solo aparece en sentido de «salida»."
   },
   "f21cc4": {
    "text": "Salida temporal de Japón (volver a casa / asistir a congresos)"
   },
   "b36386": {
    "text": "A diferencia del regreso definitivo, la salida temporal tiene su propio procedimiento. En principio, primero hay que obtener el consentimiento del profesor tutor (si aún no hay tutor asignado, se solicita al presidente del comité de estudiantes) y después presentar en la universidad la notificación de viaje al extranjero (海外渡航届). El formato del formulario puede variar según la facultad o la escuela de posgrado; conviene preguntarlo al obtener el consentimiento."
   },
   "e00cbb": {
    "items": [
     {
      "title": "Recoger la declaración de entrada y salida al salir de Japón",
      "desc": "Solicitarla y cumplimentarla al realizar los trámites de salida de Japón."
     },
     {
      "title": "Marcar la opción correcta",
      "desc": "En el período previsto de salida, marcar «1 año o menos» y, debajo, «salida temporal con intención de reingreso»."
     },
     {
      "title": "Confirmar el sello",
      "desc": "El personal de aduanas fija la declaración al pasaporte y estampa en el reverso el sello «みなし再入国許可»."
     }
    ]
   },
   "ba4f4e": {
    "text": "**Si la tarjeta de residencia expira antes de cumplirse 1 año, el plazo que manda es el de la tarjeta de residencia**, no el de «1 año». Si esta regla se calcula mal, a la vuelta puede que no te dejen entrar."
   },
   "f188b5": {
    "text": "Aviso de transporte: la estación Aeropuerto de Fukuoka del metro conecta directamente con la terminal de **vuelos nacionales**. Para volver a casa o viajar a otro país hay que ir a la terminal de **vuelos internacionales**, con transbordo en el autobús lanzadera gratuito."
   },
   "5a78fd": {
    "text": "Tránsito por Hong Kong: documentos y devolución de impuestos"
   },
   "6e4653": {
    "text": "Entre Hong Kong y Fukuoka hay vuelos directos de varias aerolíneas, dos de ellas de bajo coste, por lo que muchos estudiantes del sur de China eligen hacer escala en Hong Kong. Sin embargo, las reglas sobre qué documento usar en el tránsito son más complicadas de lo que parece, y un error puede dejar un antecedente negativo."
   },
   "d598ce": {
    "headers": [
     "Situación",
     "¿Se puede usar el pasaporte de China continental?",
     "Puntos clave"
    ],
    "rows": [
     [
      "Solo hacer escala en la zona de tránsito del aeropuerto",
      "No implica entrada ni salida del país",
      "No hay que tener en cuenta los requisitos siguientes"
     ],
     [
      "A ⇄ Hong Kong (en 7 días) ⇄ B",
      "Sí",
      "A y B no pueden ser la misma zona; se necesita billete de continuación"
     ],
     [
      "Japón → Hong Kong → regreso directo a Japón",
      "No",
      "Hay que tramitar previamente el «permiso de entrada a Hong Kong»"
     ],
     [
      "Permanecer en Hong Kong más de 7 días",
      "No",
      "Igual que arriba: hay que tramitarlo con antelación"
     ],
     [
      "Solo ir y volver entre el continente y Hong Kong",
      "No",
      "Es obligatorio usar el permiso de viaje Hong Kong-Macao (港澳通行证)"
     ]
    ]
   },
   "6114a5": {
    "text": "Documentos de tránsito y riesgos"
   },
   "49f1ab": {
    "text": "Si se entra a Hong Kong desde el continente con el documento equivocado, la aduana dejará en el pasaporte un registro DT (Delete Travel) que afectará a las entradas posteriores a Hong Kong y a las solicitudes de visado de otros países. Con este punto no hay que tentar la suerte."
   },
   "51009c": {
    "text": "El «permiso de entrada a Hong Kong» se puede tramitar en la embajada o el consulado de China en Japón; permite una estancia máxima de 14 días por entrada, con varias modalidades: 1 entrada en 3 meses, 2 entradas en 3 meses, entradas múltiples de 1 año y entradas múltiples de 2 años. El consulado de Fukuoka está cerca de la estación Tojinmachi (唐人町駅) del metro."
   },
   "26200b": {
    "text": "Devolución del impuesto de salida"
   },
   "b3abdf": {
    "text": "Devolución de impuestos: todos los vuelos que salen de Hong Kong suelen incluir el impuesto de salida de pasajeros aéreos que cobra Hong Kong. Si se cumplen las condiciones, se puede solicitar la devolución en un plazo de 28 días desde el despegue. Las condiciones y los pasos concretos están explicados en la sección «国際観光旅客税（impuesto de salida）」 de este artículo; también se puede consultar directamente la guía oficial de Hong Kong para devoluciones."
   },
   "2cbead": {
    "items": [
     {
      "text": "Devolución del impuesto de salida de pasajeros de Hong Kong (oficial)",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "Embajada de China en Japón · Guía para ir a Hong Kong desde el extranjero",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "Parte del contenido de este artículo proviene de《新伊都国風土記》(autores: Hato_Tsubame, CantonSimon), recopilado con autorización de los autores. Los precios, horarios y procedimientos indicados en el texto cambian con el tiempo; para los asuntos importantes, consulta siempre los sitios web oficiales."
   }
  }
 },
 "guide-shopping": {
  "ja": {
   "01aac7": {
    "text": "日々の買い物場所、節約術、**避けるべき落とし穴**（中古プラットフォーム、転売代行、分割払い契約）をまとめています。必要なときに該当箇所をご覧ください。"
   },
   "3082ec": {
    "text": "概要：商業エリアの分布"
   },
   "8e23fa": {
    "text": "伊都キャンパスは福岡市西区元岡にあり、周辺はキャンパスと住宅地が中心です。最寄りの商業エリアは九大学研都市駅周辺で、西は糸島市（筑前前原）、東は姪浜・室見方面まで、キャンパスを中心におおむね7km圏内に広がっています。日常の買い物は駅周辺のスーパーとドラッグストアが中心で、まとめ買いにはディスカウントストアや総合スーパーが便利です。"
   },
   "d5299c": {
    "text": "日用品は九大学研都市周辺でほぼ揃います。家具や生活必需品はニトリ（Nitori）が利用できます。最寄りの店舗は福岡西店（地下鉄橋本駅付近）で、伊都キャンパスからは離れており徒歩圏内ではないため、車などでの移動が必要です。"
   },
   "3dc2d0": {
    "text": "以下は「距離／種類」ごとに整理しています。各店舗の住所・営業時間・7km圏内かどうかは、実際に地図で検索してご確認ください。店舗は変わることがあります。"
   },
   "aacc3a": {
    "text": "スーパー：MaxValu・西鉄ストア"
   },
   "edac1a": {
    "items": [
     {
      "text": "マックスバリュ（MaxValu）：イオン系スーパー。周船寺西店は24時間営業"
     },
     {
      "text": "にしてつストア（西鉄ストア、周船寺店）：西鉄系スーパー。生鮮・総菜・福岡の名産品が充実"
     }
    ]
   },
   "18b42b": {
    "text": "ドラッグストア：医薬品・日用品"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "ドラッグイレブン：九州地盤のドラッグチェーン（医薬品・化粧品・日用品）"
     },
     {
      "text": "サンドラッグ／ダイレックス：ドラッグ＆ディスカウント店。日用品が比較的安い"
     }
    ]
   },
   "c24ac4": {
    "text": "ディスカウント店：トライアル・業務スーパー"
   },
   "d29eba": {
    "items": [
     {
      "text": "トライアル（Trial）：ディスカウントスーパー。食品・日用品の価格が安く、一部店舗は24時間営業"
     },
     {
      "text": "業務スーパー（Gyomu Super、伊都店）：冷凍食品や業務用が中心。まとめ買いに便利"
     }
    ]
   },
   "84d22e": {
    "text": "大型総合店：イオン・サニー"
   },
   "92e039": {
    "items": [
     {
      "text": "イオン（AEON、福岡伊都店）：総合スーパー。衣料・日用品・生鮮・総菜が揃う"
     },
     {
      "text": "サニー／マルキョウ：福岡地場のスーパー。生鮮が安く、特売も多い"
     }
    ]
   },
   "6e9f25": {
    "text": "コンビニと周辺の商業エリア"
   },
   "a76085": {
    "text": "ローソン／セブンイレブン／ファミリーマート：駅やキャンパス近くにあります。飲料・軽食・日用品・ATM・コピーなど急な用事に便利ですが、価格はやや高めです。"
   },
   "40861e": {
    "text": "姪浜・室見方面（東側）にはスーパーやドラッグストア、商業施設が多く、地下鉄・バスで行けます。糸島市・筑前前原（西側）には地元のスーパーや商店街があり、ついでに立ち寄るのもおすすめです。"
   },
   "9da2b2": {
    "text": "中古ショップと節約のポイント"
   },
   "30eccf": {
    "items": [
     {
      "text": "中古自転車店（地図）",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "text": "西区の24時間段ボール回収スポット",
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic"
     },
     {
      "text": "九大生協（語学試験などの学内申込情報）",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "ポイント"
   },
   "1ff8de": {
    "items": [
     {
      "text": "コピー用紙などはナフコ（Nafco）、ドンキホーテ、ダイレックスで買うと安い"
     },
     {
      "text": "協奏館に住んでいる人は移動販売車「いと丸くん」で生鮮食品を買える"
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "九州大学 生活ガイド／パンフレット（リビングガイド含む）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "text": "Global Gateway（在留・住居・生活情報）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "8328f6": {
    "text": "家具・家電：ホームセンター"
   },
   "666b25": {
    "text": "日用品・家具・家電・自転車が一か所で揃い、食品も一部取り扱っています。百円ショップほど安くはありませんが、品揃えが豊富なのが強みです。多くのホームセンターはオンラインショップや在庫確認に対応しているので、出かける前に価格と在庫をネットで確認すれば、無駄足を防げます。"
   },
   "3496a2": {
    "headers": [
     "店舗名",
     "キャンパスからの距離",
     "備考"
    ],
    "rows": [
     [
      "ホームプラザナフコ 元岡店",
      "最寄り",
      "オンラインショップ利用可"
     ],
     [
      "ホームセンターグッデイ 伊都店",
      "近い",
      "比較的新しい"
     ],
     [
      "ミスターマックス 糸島店",
      "中程度",
      "日用品・家具が安く、在庫をオンラインで確認できる"
     ],
     [
      "スーパービバホーム 志摩店",
      "遠い",
      "売場が広く、SETTLE に近い"
     ],
     [
      "コメリパワー 周船寺店",
      "遠い",
      "店舗が大きく、品揃えが豊富"
     ]
    ]
   },
   "adfb20": {
    "text": "百円ショップ：在庫を確認してから行く"
   },
   "28bbb8": {
    "text": "ホームセンターで1,000円するものが、ここでは100円で済むこともあります。その分、品質はやや劣ります。到着直後に日用品を揃える際の費用対効果は抜群です。Seria は全品100円の純粋な百円ショップ。ダイソー は200～1,000円の商品もあり、高価格帯のものは品質が少し良くなります。"
   },
   "dc40bc": {
    "text": "店舗によって品揃えが違うことが多く、品切れもよくあります。ダイソー の公式アプリで店舗ごとの在庫を確認できるので、行く前に調べれば無駄足を防げます。"
   },
   "69029b": {
    "text": "リサイクルショップ：本・家具・家電・衣類"
   },
   "8db039": {
    "text": "価格は特別安いわけではありませんが、基本的なクリーニングが施され一定の保証があるため、短期滞在で新品を買いたくない場合に適しています。"
   },
   "af7aff": {
    "items": [
     {
      "text": "BOOKOFF PLUS 福岡糸島店：本とアニメ・ゲーム関連グッズが中心"
     },
     {
      "text": "セカンドストリート 糸島店：比較的新しく、品揃えが豊富。価格はやや高め"
     },
     {
      "text": "リサイクルマート 糸島店：飾り気はないが、値段は比較的安い"
     },
     {
      "text": "トレジャーファクトリー（周船寺）：セカンドストリートに近いが、品数はやや少なめ"
     }
    ]
   },
   "52dfde": {
    "text": "自転車：伊都での必需品"
   },
   "adb267": {
    "text": "伊都で自転車がないと本当に不便ですし、日本の自転車も安くありません。大学は高台にあり坂道は避けられないので、最低でも変速機付きのモデルを選びましょう。予算に余裕があれば電動アシストも検討できます。複数の店を比較してから決めることをおすすめします。"
   },
   "97941b": {
    "headers": [
     "店舗名",
     "キャンパスからの距離",
     "体験者の声"
    ],
    "rows": [
     [
      "ルミエール 今宿店",
      "中程度（Kラインで行ける）",
      "変速機付きは2万円以内。電動アシストなし"
     ],
     [
      "Cycle Shop Palette 九大前店",
      "最寄り",
      "比較的安い車種があり、支付宝（Alipay）が使える"
     ],
     [
      "サイクルベースあさひ 伊都店／糸島店",
      "中程度",
      "大手チェーンで安心、車種も豊富。価格はやや高め"
     ],
     [
      "イオンバイク 福岡伊都店",
      "近い",
      "イオンの中にあり便利。価格はやや高め"
     ],
     [
      "ミスターマックス 糸島店",
      "中程度",
      "比較的安い電動アシスト車がある"
     ]
    ]
   },
   "b5f388": {
    "text": "体験者の声：上記の評価は実際に訪れた人の意見です。価格や在庫は変わるため、店舗での実物をご確認ください。中古自転車は、グループ内で卒業生が譲り渡すケースもあります。店頭より安いことが多いですが、防犯登録の名義変更手続きを忘れずに。"
   },
   "a2836a": {
    "text": "イオンの学内受け取りロッカー：寮生に最も便利"
   },
   "3dfc41": {
    "text": "2025年10月から、学内の中央食堂前にイオンオンラインスーパーの受け取りロッカーが設置されました。このロッカーへの配送は送料無料で、取り扱い品目は九大学研都市のイオンスーパーとほぼ同じです。実際、商品はその店舗から発送されます。学内に住んでいれば、遠出せずに用事のついでに受け取れます。"
   },
   "ac5dc4": {
    "items": [
     {
      "title": "アカウント登録",
      "desc": "iAEONアカウントを持っていればそのまま使えます。"
     },
     {
      "title": "店舗を選んで注文",
      "desc": "イオン福岡伊都店を選択します。最低注文金額が設定されています。"
     },
     {
      "title": "カートで受け取りを選択",
      "desc": "「受取り時間」で「店舗などでお受取」を選び、選択可能な時間帯を確認します。"
     },
     {
      "title": "受け取りロッカーを指定",
      "desc": "次の画面で「受取場所」から学内のロッカーを選び、受け取り時間に注意します。"
     }
    ]
   },
   "3238c2": {
    "text": "体験者の声：オンラインショップの価格は実店舗とほぼ同じです（もともと安くはありません）。生鮮・総菜は種類が少なめですが、野菜・果物は充実しており、日用品はイオン2階の商品までカバーしています。自宅配送を選ぶと別途送料がかかり、配送可能かどうかは郵便番号の入力で確認できます。"
   },
   "4fc028": {
    "items": [
     {
      "text": "イオン九州 オンラインスーパー",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "本記事の一部は『新伊都国風土記』（著者：Hato_Tsubame、CantonSimon）を基に、著者の許可を得て収録しています。価格・運行・手続きは時期によって変わるため、重要な情報は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "01aac7": {
    "text": "Everyday shopping locations, ways to save money, and **pitfalls to avoid** (secondhand platforms, proxy purchasing, installment contracts). Browse as needed."
   },
   "3082ec": {
    "text": "Overview: Commercial Area Distribution"
   },
   "8e23fa": {
    "text": "Ito Campus is located in Motooka, Nishi Ward, Fukuoka City, surrounded mainly by the campus and residential areas; the nearest commercial areas are around Kyudai Gakkentoshi Station. Itoshima City (Chikuzen-Maebaru) lies to the west and the Meinohama/Muromi area to the east, all roughly within about 7 km of the campus. Daily shopping centers on supermarkets and drugstores around the station; for bulk stock-ups, discount stores and general supermarkets are the choice."
   },
   "d5299c": {
    "text": "Daily necessities are mostly available in the Gakken area. For furniture and household essentials, Nitori (ニトリ) is an option - note that the nearest store is the Fukuoka-Nishi store (near Hashimoto Station on the subway), which is far from Ito Campus and beyond walking distance; transportation is required."
   },
   "3dc2d0": {
    "text": "The entries below are organized by distance/type; for branch addresses, business hours, and whether a store falls within 7 km, rely on actual map searches, as branches may change."
   },
   "aacc3a": {
    "text": "Supermarkets: MaxValu, Nishitetsu Store (西鉄ストア)"
   },
   "edac1a": {
    "items": [
     {
      "text": "MaxValu (マックスバリュ): an AEON-affiliated supermarket; Sefuranishi store open 24 hours"
     },
     {
      "text": "Nishitetsu Store (にしてつストア, Sefuru store): a Nishitetsu-affiliated supermarket offering fresh produce, prepared foods, and Fukuoka specialties"
     }
    ]
   },
   "18b42b": {
    "text": "Drugstores: Medicine and Toiletries"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "Drug Eleven (ドラッグイレブン): a Kyushu-based drugstore chain (pharmaceuticals, cosmetics, daily necessities)"
     },
     {
      "text": "Sundrug / Direx (サンドラッグ / ダイレックス): drugstores and discount stores with inexpensive daily necessities"
     }
    ]
   },
   "c24ac4": {
    "text": "Discount Stores: Trial and Gyomu Super"
   },
   "d29eba": {
    "items": [
     {
      "text": "Trial (トライアル): a discount supermarket with low food and daily-necessity prices; some stores open 24 hours"
     },
     {
      "text": "Gyomu Super (業務スーパー, Ito store): focused on frozen foods and wholesale items; suitable for stocking up"
     }
    ]
   },
   "84d22e": {
    "text": "General Merchandise: AEON and Sunny"
   },
   "92e039": {
    "items": [
     {
      "text": "AEON (イオン, Fukuoka-Ito store): a general merchandise store offering clothing, home goods, fresh produce, and prepared foods"
     },
     {
      "text": "Sunny / Marukyo (サニー / マルキョウ): Fukuoka-based supermarkets with inexpensive fresh produce and frequent specials"
     }
    ]
   },
   "6e9f25": {
    "text": "Convenience Stores and Surrounding Areas"
   },
   "a76085": {
    "text": "Lawson / Seven-Eleven / FamilyMart (ローソン / セブンイレブン / ファミリーマート): located around the station and campus; convenient for drinks, light meals, daily necessities, ATMs, and copying in a pinch, though prices run higher."
   },
   "40861e": {
    "text": "The Meinohama/Muromi area (to the east) offers more supermarkets, drugstores, and commercial facilities, reachable by subway or bus; Chikuzen-Maebaru in Itoshima City (to the west) has local supermarkets and a shopping street worth browsing along the way."
   },
   "9da2b2": {
    "text": "Secondhand Shops and Money-Saving Tips"
   },
   "30eccf": {
    "items": [
     {
      "text": "Secondhand bicycle shop (map)",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "text": "Nishi Ward 24-hour cardboard recycling point",
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic"
     },
     {
      "text": "Kyushu University Co-op (九大生協): on-campus registration info such as language exams",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "Key Points"
   },
   "1ff8de": {
    "items": [
     {
      "text": "Items such as copy paper are cheaper at Nafco (ナフコ), Don Quijote (ドンキホーテ), and Direx (ダイレックス)"
     },
     {
      "text": "Residents of Kyosai-kan (協奏館) can buy fresh produce from the mobile sales vehicle \"Ito-maru-kun\" (移動販売車「いと丸くん」)"
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "Kyushu University life guide/brochure (includes Living Guide)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "text": "Global Gateway (residence status, housing, and daily life information)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "8328f6": {
    "text": "Furniture and Appliances: Home Centers"
   },
   "666b25": {
    "text": "Daily necessities, furniture, appliances, and bicycles can all be purchased in one place, along with some food items. Prices are not as low as at 100-yen shops, but these stores win on selection. Most home centers offer well-developed online stores and inventory lookup; checking prices and availability online before going out can save a trip."
   },
   "3496a2": {
    "headers": [
     "Store",
     "Distance from campus",
     "Notes"
    ],
    "rows": [
     [
      "Home Plaza Nafco Motooka (ホームプラザナフコ 元岡店)",
      "Closest",
      "Online store available"
     ],
     [
      "Good Day Home Center Ito (ホームセンターグッデイ 伊都店)",
      "Near",
      "Relatively new"
     ],
     [
      "MrMax Itoshima (ミスターマックス 糸島店)",
      "Medium",
      "Inexpensive daily necessities and furniture; online inventory lookup available"
     ],
     [
      "Super Viva Home Shima (スーパービバホーム 志摩店)",
      "Far",
      "Large store; near SETTLE"
     ],
     [
      "Komeri Power Sefuru (コメリパワー 周船寺店)",
      "Far",
      "Very large; wide selection"
     ]
    ]
   },
   "adfb20": {
    "text": "100-Yen Shops: Check Stock Before Going"
   },
   "28bbb8": {
    "text": "An item costing 1,000 yen at a home center may cost only 100 yen here, with quality to match. These shops offer the best value right after arrival when picking up odds and ends. Seria is a pure 100-yen shop carrying only 100 yen items; Daiso (ダイソー) carries items from 200 to 1,000 yen, with pricier ones being somewhat better quality."
   },
   "dc40bc": {
    "text": "Stock varies between stores and is often out of stock. The official Daiso app provides per-store inventory; checking before going is better than a wasted trip."
   },
   "69029b": {
    "text": "Secondhand Shops: Books, Furniture, Appliances, Clothing"
   },
   "8db039": {
    "text": "Prices are not especially low, but items come cleaned with some assurance, making these shops suitable when living short-term and not wanting to buy new."
   },
   "af7aff": {
    "items": [
     {
      "text": "Bookoff PLUS Fukuoka-Itoshima (BOOKOFF PLUS 福岡糸島店): mainly books and anime/manga merchandise"
     },
     {
      "text": "Second Street Itoshima (セカンドストリート 糸島店): relatively new, wide selection, slightly higher prices"
     },
     {
      "text": "Recycle Mart Itoshima (リサイクルマート 糸島店): more basic, items relatively inexpensive"
     },
     {
      "text": "Treasure Factory Sefuru (トレジャーファクトリー, 周船寺): similar to Second Street, smaller stock"
     }
    ]
   },
   "52dfde": {
    "text": "Bicycles: Essential in Ito"
   },
   "adb267": {
    "text": "Life in Ito without a bicycle is genuinely difficult, and bicycles in Japan are not cheap either. The campus sits on high ground and hills are unavoidable, so a geared model is the minimum; with budget to spare, an electrically assisted bike is worth considering. Comparing several shops before deciding is recommended."
   },
   "97941b": {
    "headers": [
     "Store",
     "Distance from campus",
     "Experience notes"
    ],
    "rows": [
     [
      "Lumiere Imajuku (ルミエール 今宿店)",
      "Medium (K line rides)",
      "Geared bikes under 20,000 yen; no electric assist"
     ],
     [
      "Cycle Shop Palette Kyudai-mae (Cycle Shop Palette 九大前店)",
      "Closest",
      "Some inexpensive bikes; Alipay accepted"
     ],
     [
      "Cycle Base Asahi Ito/Itoshima (サイクルベースあさひ 伊都店 / 糸島店)",
      "Medium",
      "Large chain; well organized, many bikes, slightly higher prices"
     ],
     [
      "AEON Bike Fukuoka-Ito (イオンバイク 福岡伊都店)",
      "Near",
      "Convenient inside AEON; slightly higher prices"
     ],
     [
      "MrMax Itoshima (ミスターマックス 糸島店)",
      "Medium",
      "Inexpensive electric-assist bikes available"
     ]
    ]
   },
   "b5f388": {
    "text": "Experience notes: the evaluations above come from people who actually visited; prices and stock change, so the in-store situation prevails. For used bikes, also watch group chats for graduating students selling theirs - usually cheaper than stores, but remember to complete the transfer procedure for the anti-theft registration."
   },
   "a2836a": {
    "text": "AEON On-Campus Pickup Lockers: Most Convenient for Dorm Residents"
   },
   "3dfc41": {
    "text": "Since October 2025, a pickup locker for the AEON online supermarket has been available at the entrance of the Central Cafeteria on campus. Deliveries to this locker are free of delivery charges, and the selection covers essentially the full range of the AEON supermarket in the Gakken area - the goods in fact ship from that store. For on-campus residents, there is no need to travel: pick it up on the way back from errands."
   },
   "ac5dc4": {
    "items": [
     {
      "title": "Create an account",
      "desc": "An existing iAEON account works as well."
     },
     {
      "title": "Select the store and place an order",
      "desc": "Choose AEON Fukuoka-Ito; a minimum order amount applies."
     },
     {
      "title": "Choose pickup in the cart",
      "desc": "Under 受取り時間 (receiving time), select \"店舗などでお受取\" (receive at store, etc.) and note the available time slots."
     },
     {
      "title": "Specify the pickup locker",
      "desc": "After proceeding, select the on-campus locker under 受取場所 (receiving location) and note the pickup time."
     }
    ]
   },
   "3238c2": {
    "text": "Experience notes: online store prices are essentially the same as in physical stores (not inexpensive to begin with). Fresh and prepared foods are limited, vegetables and fruit are fairly complete, and daily necessities cover items up to the second floor of AEON. Home delivery incurs an extra fee; availability is confirmed by entering the postal code."
   },
   "4fc028": {
    "items": [
     {
      "text": "AEON Kyushu online supermarket",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "Part of this article is compiled from \"New Itokoku Fudoki\" (新伊都国風土記, authors Hato_Tsubame and CantonSimon), included with the authors' permission. Prices, schedules, and procedures in the text change over time; for important matters, refer to the official websites."
   }
  },
  "ko": {
   "01aac7": {
    "text": "일상적인 쇼핑 장소, 돈을 아끼는 방법과 **피해야 할 함정**(중고 플랫폼, 대행 구매, 할부 계약)을 정리했습니다. 필요할 때 참고하시기 바랍니다."
   },
   "3082ec": {
    "text": "개요: 상권 분포"
   },
   "8e23fa": {
    "text": "이토 캠퍼스는 후쿠오카시 니시구 모토오카에 있으며, 주변은 캠퍼스와 주택가가 대부분입니다. 가장 가까운 상권은 큐다이가쿠겐코시역 일대이고, 서쪽으로는 이토시마시(치쿠젠마에바루), 동쪽으로는 메이노하마·무로미 일대까지 캠퍼스를 중심으로 약 7km 반경 안에 있습니다. 일상적인 장보기는 역 주변 슈퍼마켓과 드럭스토어가 중심이며, 대량 구매는 디스카운트 스토어와 종합 슈퍼마켓을 이용할 수 있습니다."
   },
   "d5299c": {
    "text": "일용품은 가쿠겐 일대에서 대부분 구할 수 있습니다. 가구와 생활 필수품은 Nitori(ニトリ)에서 구할 수 있는데, 가장 가까운 매장은 후쿠오카 서부점(지하철 하시모토역 부근)으로 이토 캠퍼스에서 멀리 떨어져 있어 도보로 갈 수 없으므로 차량을 이용해야 합니다."
   },
   "3dc2d0": {
    "text": "아래는 「거리/유형」별로 정리한 것입니다. 구체적인 지점 주소, 영업시간, 7km 이내 여부는 지도에서 직접 검색한 결과를 기준으로 하시기 바랍니다. 지점은 변경될 수 있습니다."
   },
   "aacc3a": {
    "text": "슈퍼마켓: MaxValu·西鉄ストア"
   },
   "edac1a": {
    "items": [
     {
      "text": "マックスバリュ(MaxValu): AEON 계열 슈퍼마켓. 周船寺西店은 24시간 영업합니다."
     },
     {
      "text": "にしてつストア(西鉄ストア, 周船寺店): 니시테츠 계열 슈퍼마켓. 신선식품, 조리식품, 후쿠오카 특산물을 취급합니다."
     }
    ]
   },
   "18b42b": {
    "text": "드럭스토어: 의약품·세면용품"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "ドラッグイレブン: 큐슈 지역 드럭스토어 체인(의약품·화장품·일용품)."
     },
     {
      "text": "サンドラッグ / ダイレックス: 드럭스토어 겸 디스카운트 스토어로, 일용품이 비교적 저렴합니다."
     }
    ]
   },
   "c24ac4": {
    "text": "디스카운트 스토어: Trial·業務スーパー"
   },
   "d29eba": {
    "items": [
     {
      "text": "トライアル(Trial): 디스카운트 슈퍼마켓. 식품·일용품 가격이 낮고 일부 매장은 24시간 영업합니다."
     },
     {
      "text": "業務スーパー(Gyomu Super, 伊都店): 냉동식품과 대량 판매가 중심으로, 대량 구매에 적합합니다."
     }
    ]
   },
   "84d22e": {
    "text": "대형 종합: AEON·Sunny"
   },
   "92e039": {
    "items": [
     {
      "text": "イオン(AEON, 福岡伊都店): 종합 슈퍼마켓. 의류, 생활용품, 신선식품, 조리식품이 다양합니다."
     },
     {
      "text": "サニー / マルキョウ: 후쿠오카 지역 슈퍼마켓. 신선식품이 저렴하고 특가가 자주 있습니다."
     }
    ]
   },
   "6e9f25": {
    "text": "편의점과 주변 상권"
   },
   "a76085": {
    "text": "ローソン / セブンイレブン / ファミリーマート: 역과 캠퍼스 주변에 있습니다. 음료, 간단한 식사, 일용품, ATM, 복사 등 비상 상황에 편리하지만 가격은 다소 높습니다."
   },
   "40861e": {
    "text": "메이노하마·무로미 일대(동쪽)에는 슈퍼마켓, 드럭스토어, 상업 시설이 더 많으며 지하철이나 버스로 갈 수 있습니다. 이토시마시 치쿠젠마에바루(서쪽)에는 지역 슈퍼마켓과 상점가가 있어 들러 보기 좋습니다."
   },
   "9da2b2": {
    "text": "중고 매장과 돈을 아끼는 요점"
   },
   "30eccf": {
    "items": [
     {
      "text": "중고 자전거 매장(지도)",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "text": "니시구 24시간 골판지 회수 장소",
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic"
     },
     {
      "text": "九大生協(언어 시험 등 교내 접수 정보)",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "요점"
   },
   "1ff8de": {
    "items": [
     {
      "text": "복사용지 등은 ナフコ(Nafco), ドンキホーテ, ダイレックス에서 사는 것이 저렴합니다."
     },
     {
      "text": "協奏館에 사는 경우 이동판매차 「いと丸くん」으로 신선식품을 살 수 있습니다."
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "큐슈대학 생활 가이드/팸플릿(리빙 가이드 포함)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "text": "Global Gateway(체류·주거·생활 정보)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "8328f6": {
    "text": "가구·가전: 홈센터"
   },
   "666b25": {
    "text": "일용품, 가구, 가전, 자전거를 한곳에서 모두 구할 수 있고 식품도 일부 취급합니다. 가격은 100엔 숍만큼 저렴하지는 않지만, 물건이 다양하다는 장점이 있습니다. 대부분의 홈센터는 온라인 쇼핑몰과 재고 조회가 갖춰져 있어, 출발 전에 온라인으로 가격과 재고를 확인하면 방문 한 번으로 끝낼 수 있습니다."
   },
   "3496a2": {
    "headers": [
     "매장명",
     "캠퍼스와의 거리",
     "비고"
    ],
    "rows": [
     [
      "ホームプラザナフコ 元岡店",
      "가장 가까움",
      "온라인 쇼핑몰 이용 가능"
     ],
     [
      "ホームセンターグッデイ 伊都店",
      "가까움",
      "비교적 신규"
     ],
     [
      "ミスターマックス 糸島店",
      "중간",
      "일용품·가구가 저렴, 온라인 재고 조회 가능"
     ],
     [
      "スーパービバホーム 志摩店",
      "멀음",
      "매장이 크고 SETTLE과 가까움"
     ],
     [
      "コメリパワー 周船寺店",
      "멀음",
      "매우 크고 품목이 다양함"
     ]
    ]
   },
   "adfb20": {
    "text": "100엔 숍: 재고 확인 후 방문"
   },
   "28bbb8": {
    "text": "홈센터에서 1,000엔에 파는 물건도 이곳에서는 100엔에 해결할 수 있지만, 품질은 그만큼 낮습니다. 막 도착해 잡동사니를 마련할 때 가성비가 가장 좋습니다. Seria는 순수 100엔 숍으로 전 품목이 100엔이며, ダイソー에는 200~1,000엔 상품도 있어 비싼 것은 품질이 조금 더 좋습니다."
   },
   "dc40bc": {
    "text": "매장마다 취급 품목이 자주 다르고 품절도 잦습니다. ダイソー 공식 앱에서 특정 매장의 재고를 확인할 수 있으니, 방문 전에 확인하면 헛걸음하지 않습니다."
   },
   "69029b": {
    "text": "중고 매장: 책, 가구, 가전, 의류"
   },
   "8db039": {
    "text": "가격이 특별히 저렴한 편은 아니지만, 기본적인 세척이 되어 있고 일정한 보증이 있어 단기 거주 중 새것을 사고 싶지 않은 경우에 적합합니다."
   },
   "af7aff": {
    "items": [
     {
      "text": "BOOKOFF PLUS 福岡糸島店: 책과 서브컬처 굿즈가 중심"
     },
     {
      "text": "セカンドストリート 糸島店: 비교적 새롭고 종류가 많지만 가격은 다소 높음"
     },
     {
      "text": "リサイクルマート 糸島店: 소박하지만 물건이 상대적으로 저렴함"
     },
     {
      "text": "トレジャーファクトリー(周船寺): 세컨드 스트리트와 비슷하지만 물량이 적음"
     }
    ]
   },
   "52dfde": {
    "text": "자전거: 이토에서의 필수품"
   },
   "adb267": {
    "text": "이토에서 자전거가 없으면 정말 불편하며, 일본의 자전거도 저렴하지 않습니다. 학교가 고지대에 있어 언덕길을 피할 수 없으므로 최소한 변속 기능이 있는 모델을 선택해야 하고, 예산이 충분하면 전동 보조 자전거를 고려할 수 있습니다. 여러 매장을 둘러본 후 결정하시기 바랍니다."
   },
   "97941b": {
    "headers": [
     "매장명",
     "캠퍼스와의 거리",
     "경험 참고"
    ],
    "rows": [
     [
      "ルミエール 今宿店",
      "중간(K선 이용 가능)",
      "변속 자전거 2만엔 이내, 전동 보조 없음"
     ],
     [
      "Cycle Shop Palette 九大前店",
      "가장 가까움",
      "저렴한 차량 있음, 알리페이 결제 가능"
     ],
     [
      "サイクルベースあさひ 伊都店 / 糸島店",
      "중간",
      "대형 체인으로 규모가 있고 차량이 많지만 가격은 다소 높음"
     ],
     [
      "イオンバイク 福岡伊都店",
      "가까움",
      "이온 매장 안에 있어 편리하지만 가격은 다소 높음"
     ],
     [
      "ミスターマックス 糸島店",
      "중간",
      "저렴한 전동 보조 자전거 취급"
     ]
    ]
   },
   "b5f388": {
    "text": "경험 참고: 위 평가는 실제로 방문한 사람들의 의견이며, 가격과 재고는 변할 수 있으므로 매장 실물을 기준으로 하시기 바랍니다. 중고 자전거는 커뮤니티에서 선배들의 졸업 양도 물품을 살펴보는 것도 좋습니다. 보통 매장보다 저렴하지만, 도난 방지 등록의 명의 이전 절차를 꼭 해야 합니다."
   },
   "a2836a": {
    "text": "이온 캠퍼스 내 픽업함: 기숙사 거주자에게 가장 편리"
   },
   "3dfc41": {
    "text": "2025년 10월부터 캠퍼스 내 중앙식당 입구에 이온 온라인 슈퍼마켓의 픽업함이 설치되었습니다. 이 픽업함으로 배송하면 배송료가 무료이며, 취급 품목은 가쿠겐 이온 슈퍼마켓의 전 품목을 거의 모두 포함합니다. 실제로 상품도 그 매장에서 출고됩니다. 캠퍼스 내에 살고 있다면 멀리 나가지 않고 볼일 보는 길에 받을 수 있습니다."
   },
   "ac5dc4": {
    "items": [
     {
      "title": "계정 등록",
      "desc": "이미 iAEON 계정이 있으면 그대로 사용할 수 있습니다."
     },
     {
      "title": "매장 선택 후 주문",
      "desc": "イオン福岡伊都店을 선택합니다. 최소 주문 금액이 있습니다."
     },
     {
      "title": "장바구니에서 픽업 선택",
      "desc": "受取り時間(수령 시간)에서 「店舗などでお受取」를 선택하고, 선택 가능한 시간대를 확인합니다."
     },
     {
      "title": "픽업함 지정",
      "desc": "다음 단계로 넘어가면 受取場所(수령 장소)에서 캠퍼스 내 픽업함을 선택하고 수령 시간을 확인합니다."
     }
    ]
   },
   "3238c2": {
    "text": "경험 참고: 온라인 쇼핑몰 가격은 오프라인 매장과 대체로 같습니다(그 자체가 저렴한 편은 아닙니다). 신선식품과 조리식품은 종류가 적고, 채소·과일은 비교적 다양하며, 일용품은 이온 2층의 상품까지 포함합니다. 집 배송을 선택하면 배송비가 별도로 부과되며, 배송 가능 여부는 우편번호 입력으로 확인할 수 있습니다."
   },
   "4fc028": {
    "items": [
     {
      "text": "イオン九州 온라인 슈퍼마켓",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "이 글의 일부 내용은 『新伊都国風土記』(저자 Hato_Tsubame, CantonSimon)를 정리한 것으로, 저자의 허락을 받아 수록했습니다. 글 속의 가격, 운행 시간, 절차는 시간이 지나면 변할 수 있으므로 중요한 사항은 각 공식 홈페이지를 기준으로 하시기 바랍니다."
   }
  },
  "es": {
   "01aac7": {
    "text": "Lugares de compra diaria, formas de ahorrar y **trampas que conviene evitar** (plataformas de segunda mano, compras por encargo, contratos a plazos). Puedes consultarlo según lo necesites."
   },
   "3082ec": {
    "text": "Resumen: distribución de las zonas comerciales"
   },
   "8e23fa": {
    "text": "El campus Ito está en Motooka, distrito Nishi de la ciudad de Fukuoka, y sus alrededores son sobre todo el propio campus y zonas residenciales. La zona comercial más cercana está en los alrededores de la estación Kyudai-Gakkentoshi; hacia el oeste se llega a la ciudad de Itoshima (Chikuzen-Maebaru) y hacia el este a las zonas de Meinohama（姪浜）y Muromi（室見）, más o menos dentro de un radio de 7 km desde el campus. Para las compras diarias sirven principalmente los supermercados y las droguerías cerca de la estación; para hacer acopio a granel puedes ir a las tiendas de descuento y a los supermercados integrales."
   },
   "d5299c": {
    "text": "Los artículos de uso diario se consiguen casi todos en la zona de la estación Kyudai-Gakkentoshi. Para muebles y artículos de primera necesidad puedes ir a Nitori（ニトリ）: ten en cuenta que la sucursal más cercana es la de Fukuoka Nishi, cerca de la estación Hashimoto del metro（地下鉄橋本駅）, que queda lejos del campus Ito y no está a distancia caminable, así que hay que ir en transporte."
   },
   "3dc2d0": {
    "text": "Lo siguiente está organizado por «distancia/tipo»; las direcciones exactas de cada sucursal, los horarios y si están dentro de los 7 km, confírmalos con una búsqueda en el mapa, ya que las sucursales pueden cambiar."
   },
   "aacc3a": {
    "text": "Supermercados: MaxValu y Nishitetsu Store"
   },
   "edac1a": {
    "items": [
     {
      "text": "MaxValu（マックスバリュ）: supermercado del grupo AEON; la sucursal Suenishi Nishi（周船寺西店）está abierta 24 horas."
     },
     {
      "text": "Nishitetsu Store（にしてつストア, sucursal Suenishi 周船寺店）: supermercado del grupo Nishitetsu, con productos frescos, comidas preparadas y especialidades de Fukuoka."
     }
    ]
   },
   "18b42b": {
    "text": "Droguerías: medicamentos e higiene personal"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "Drug Eleven（ドラッグイレブン）: cadena de droguerías local de Kyushu (medicamentos, cosméticos y artículos de uso diario)."
     },
     {
      "text": "Sundrug（サンドラッグ）y Direx（ダイレックス）: droguerías y tiendas de descuento, con artículos de uso diario más baratos."
     }
    ]
   },
   "c24ac4": {
    "text": "Tiendas de descuento: Trial y Gyomu Super"
   },
   "d29eba": {
    "items": [
     {
      "text": "Trial（トライアル）: supermercado de descuento con precios bajos en alimentos y artículos de uso diario; algunas sucursales abren 24 horas."
     },
     {
      "text": "Gyomu Super（業務スーパー, sucursal Ito 伊都店）: especializado sobre todo en congelados y venta al mayor; ideal para comprar en cantidad."
     }
    ]
   },
   "84d22e": {
    "text": "Grandes superficies: AEON y Sunny"
   },
   "92e039": {
    "items": [
     {
      "text": "AEON（イオン, sucursal Fukuoka Ito 福岡伊都店）: supermercado integral con ropa, artículos para el hogar, productos frescos y comidas preparadas."
     },
     {
      "text": "Sunny（サニー）y Marukyo（マルキョウ）: supermercados locales de Fukuoka con productos frescos baratos y ofertas frecuentes."
     }
    ]
   },
   "6e9f25": {
    "text": "Tiendas de conveniencia y zonas comerciales aledañas"
   },
   "a76085": {
    "text": "Lawson（ローソン）／7-Eleven（セブンイレブン）／FamilyMart（ファミリーマート）: hay sucursales cerca de la estación y del campus; son prácticas para emergencias (bebidas, comidas ligeras, artículos de uso diario, cajeros automáticos, fotocopias), aunque los precios son más altos."
   },
   "40861e": {
    "text": "En las zonas de Meinohama y Muromi（姪浜・室見, hacia el este）hay más supermercados, droguerías y establecimientos comerciales, a los que se llega en metro o autobús; en Chikuzen-Maebaru（筑前前原）, ciudad de Itoshima (hacia el oeste), hay supermercados locales y una calle comercial que puedes recorrer de paso."
   },
   "9da2b2": {
    "text": "Tiendas de segunda mano y consejos para ahorrar"
   },
   "30eccf": {
    "items": [
     {
      "text": "Tienda de bicicletas de segunda mano (ubicación en el mapa)",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "text": "Punto de reciclaje de cartón abierto 24 horas en el distrito Nishi",
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic"
     },
     {
      "text": "Co-op de la Universidad de Kyushu（九大生協, información sobre inscripciones en el campus, como exámenes de idiomas）",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "Puntos clave"
   },
   "1ff8de": {
    "items": [
     {
      "text": "El papel de fotocopiadora y artículos similares son más baratos en Nafco（ナフコ）, Don Quijote（ドンキホーテ）y Direx（ダイレックス）."
     },
     {
      "text": "Quienes viven en Kyoso-kan（協奏館）pueden comprar productos frescos en el camión de venta ambulante «Itomaru-kun»（いと丸くん）."
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "Guía de vida / folletos de la Universidad de Kyushu (incluye Living Guide)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "text": "Global Gateway (información sobre estatus de residencia, vivienda y vida diaria)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "8328f6": {
    "text": "Muebles y electrodomésticos: tiendas del hogar (home center)"
   },
   "666b25": {
    "text": "En una tienda del hogar encuentras en un solo lugar artículos de uso diario, muebles, electrodomésticos y bicicletas, además de algunos alimentos. Los precios no son tan bajos como en las tiendas de 100 yenes, pero a cambio tienen de todo. La mayoría de las tiendas del hogar cuentan con tienda online y consulta de stock; revisar el precio y la disponibilidad en internet antes de salir te ahorra un viaje."
   },
   "3496a2": {
    "headers": [
     "Tienda",
     "Distancia del campus",
     "Notas"
    ],
    "rows": [
     [
      "Home Plaza Nafco Motooka（ホームプラザナフコ 元岡店）",
      "La más cercana",
      "Tienda online disponible"
     ],
     [
      "Home Center Gooday, sucursal Ito（ホームセンターグッデイ 伊都店）",
      "Cerca",
      "Relativamente nueva"
     ],
     [
      "MrMax, sucursal Itoshima（ミスターマックス 糸島店）",
      "Media",
      "Artículos de uso diario y muebles baratos; stock consultable en línea"
     ],
     [
      "Super Viva Home, sucursal Shima（スーパービバホーム 志摩店）",
      "Lejos",
      "Gran superficie; cerca de SETTLE"
     ],
     [
      "Komeri Power, sucursal Suenishi（コメリパワー 周船寺店）",
      "Lejos",
      "Muy grande, con todas las categorías"
     ]
    ]
   },
   "adfb20": {
    "text": "Tiendas de 100 yenes: ve después de confirmar el stock"
   },
   "28bbb8": {
    "text": "Lo que en una tienda del hogar cuesta 1.000 円, aquí puede conseguirse por 100 円, aunque la calidad es proporcionalmente menor. Es lo más rentable justo al llegar, para comprar los enseres básicos. Seria es una tienda pura de 100 yenes: todos sus productos cuestan 100 円. En Daiso（ダイソー）hay productos desde 200 円 hasta 1,000 円, y los más caros tienen mejor calidad."
   },
   "dc40bc": {
    "text": "El surtido cambia según la sucursal y a menudo hay faltantes. La aplicación oficial de Daiso permite consultar el stock de cada tienda; revisarla antes de ir evita un viaje en vano."
   },
   "69029b": {
    "text": "Tiendas de segunda mano: libros, muebles, electrodomésticos y ropa"
   },
   "8db039": {
    "text": "Los precios no son particularmente bajos, pero los artículos pasan por una limpieza básica y ofrecen cierta garantía; son adecuados si vives por poco tiempo y no quieres comprar cosas nuevas."
   },
   "af7aff": {
    "items": [
     {
      "text": "BOOKOFF PLUS Fukuoka Itoshima（BOOKOFF PLUS 福岡糸島店）: sobre todo libros y artículos de anime y manga."
     },
     {
      "text": "Second Street, sucursal Itoshima（セカンドストリート 糸島店）: relativamente nueva, con mucha variedad y precios un poco más altos."
     },
     {
      "text": "Recycle Mart, sucursal Itoshima（リサイクルマート 糸島店）: más sencilla, con artículos relativamente baratos."
     },
     {
      "text": "Treasure Factory（トレジャーファクトリー, Suenishi 周船寺）: parecida a Second Street, pero con menos surtido."
     }
    ]
   },
   "52dfde": {
    "text": "Bicicletas: algo imprescindible en Ito"
   },
   "adb267": {
    "text": "En Ito, no tener vehículo se nota de verdad, y las bicicletas en Japón tampoco son baratas. El campus está en una zona elevada y las cuestas son inevitables, así que elige al menos un modelo con cambios; si el presupuesto lo permite, considera la asistencia eléctrica. Conviene visitar varias tiendas antes de decidir."
   },
   "97941b": {
    "headers": [
     "Tienda",
     "Distancia del campus",
     "Referencias"
    ],
    "rows": [
     [
      "Lumière, sucursal Imajuku（ルミエール 今宿店）",
      "Media (accesible con la línea K)",
      "Bicicleta con cambios por menos de 20.000 円, sin asistencia eléctrica"
     ],
     [
      "Cycle Shop Palette Kyudai-mae（九大前店）",
      "La más cercana",
      "Hay bicicletas económicas; acepta Alipay"
     ],
     [
      "Cycling Base Asahi, sucursales Ito / Itoshima（サイクルベースあさひ 伊都店 / 糸島店）",
      "Media",
      "Gran cadena, ordenada y con mucho stock; precios un poco más altos"
     ],
     [
      "AEON Bike, sucursal Fukuoka Ito（イオンバイク 福岡伊都店）",
      "Cerca",
      "Práctica por estar dentro de AEON; precios un poco más altos"
     ],
     [
      "MrMax, sucursal Itoshima（ミスターマックス 糸島店）",
      "Media",
      "Hay bicicletas con asistencia eléctrica económicas"
     ]
    ]
   },
   "b5f388": {
    "text": "Referencias: estas valoraciones provienen de personas que han visitado las tiendas; los precios y el stock cambian, así que lo que vale es lo que veas en el local. Para las bicicletas de segunda mano también puedes fijarte en las ventas de estudiantes que se gradúan en los grupos: suelen ser más baratas que en las tiendas, pero recuerda tramitar el traspaso del registro antirrobo."
   },
   "a2836a": {
    "text": "Casilleros de recogida de AEON en el campus: lo más cómodo para quienes viven en los dormitorios"
   },
   "3dfc41": {
    "text": "Desde octubre de 2025 hay casilleros de recogida del supermercado online de AEON en la entrada de la cafetería central del campus. Enviar a estos casilleros no tiene gastos de envío, y la selección de productos cubre prácticamente todas las categorías del supermercado AEON de Gakken: de hecho, la mercancía sale de esa misma tienda. Si vives dentro del campus, no hace falta ir lejos: puedes recogerlo de paso cuando termines tus trámites."
   },
   "ac5dc4": {
    "items": [
     {
      "title": "Crear una cuenta",
      "desc": "Si ya tienes una cuenta iAEON, sirve la misma."
     },
     {
      "title": "Elegir tienda y hacer el pedido",
      "desc": "Selecciona AEON Fukuoka Ito（イオン福岡伊都店）; hay un importe mínimo de pedido."
     },
     {
      "title": "Elegir recogida en el carrito",
      "desc": "En 受取り時間 elige «店舗などでお受取» y presta atención a las franjas horarias disponibles."
     },
     {
      "title": "Designar el casillero",
      "desc": "En el paso siguiente, en 受取場所 elige el casillero del campus y fíjate en el horario de recogida."
     }
    ]
   },
   "3238c2": {
    "text": "Referencias: los precios de la tienda online son prácticamente iguales a los de las tiendas físicas (que de por sí no son baratos). Hay pocas categorías de productos frescos y comidas preparadas, pero verduras y frutas están bastante completas, y los artículos de uso diario cubren lo que se vende en el segundo piso de AEON. Si eliges envío a domicilio se cobra un gasto de envío aparte, y la posibilidad de entrega depende de lo que indique el código postal que introduzcas."
   },
   "4fc028": {
    "items": [
     {
      "text": "Supermercado online de AEON Kyushu（イオン九州）",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "Parte del contenido de este artículo proviene de «Shin-Ito Koku Fudoki»（新伊都国風土記）, de Hato_Tsubame y CantonSimon, recopilado con autorización de los autores. Los precios, horarios y procedimientos del texto cambian con el tiempo; para asuntos importantes, consulta los sitios web oficiales."
   }
  }
 },
 "guide-transport": {
  "ja": {
   "397485": {
    "text": "自転車：購入・利用・廃棄"
   },
   "402355": {
    "text": "2つの場面に応じて2つのプランがあります：①天神/博多だけに行く場合はプラン1（回数券、往復で994円）。②市内の2か所以上に行き、時間に余裕がある場合はプラン2（姪浜乗り換え＋地下鉄1日乗車券）。"
   },
   "565847": {
    "text": "使い方：アプリの案内に従ってモバイルチケットを有効化した後、降車前に運転手に提示すればそのまま降りられます。"
   },
   "d182c2": {
    "text": "寮から大学へ、天神・博多へ行く、自転車を買う、運転免許を取る——**日常の移動ルートを先に決める**ことをおすすめし、その後に切符の購入方法を決めましょう。本記事では、運賃、定期券、割引券、節約方法を並べて比較します。"
   },
   "695d78": {
    "text": "その他のチケットと割引"
   },
   "00a067": {
    "text": "2つのプランの詳細"
   },
   "032cc4": {
    "text": "まとめと操作のヒント"
   },
   "5803fa": {
    "text": "関連リンク"
   },
   "0e3977": {
    "text": "西鉄バスの割引"
   },
   "d2037e": {
    "text": "試験の流れと受付時間"
   },
   "1b9a7f": {
    "text": "伊都キャンパスでは、自転車は主要な移動手段です。学研都市駅から大学まで徒歩で約45〜50分、自転車で約20〜30分、バイクまたは車で約10〜15分です。バス（約15〜20分）も利用できますが、本数は少なめです。"
   },
   "29a476": {
    "text": "自転車の購入"
   },
   "fc7dbb": {
    "text": "新車は一般的に17,000円以上、福岡での購入価格帯は約11,000円（経験値）です。中古はMercari、または学生同士の譲渡情報から探すことができます。購入時には**防犯登録（600円）**が必要で、防犯登録カードは大切に保管してください（抹消時に必要です）。【買い物】参照"
   },
   "255bf5": {
    "text": "自転車の処分・譲渡"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "不要になった自転車は、中古ショップで売るか、友人に譲ることができます"
     },
     {
      "text": "防犯登録の抹消手続きが必要です：購入時の「防犯登録カードお客様控え」+身分証明書を持って警察署で手続きしてください"
     },
     {
      "text": "リサイクルマート糸島は英語で対応可能です"
     }
    ]
   },
   "ccfc54": {
    "text": "シェアサイクル / レンタル"
   },
   "08e40e": {
    "text": "キャンパス内にはシェア自転車・シェア電動バイクの駐輪スポットがあり、場所と利用可能な車両はキャンパスマップや関連アプリで確認できます。大学ではレンタル自転車も提供しており、生協で問い合わせできます。"
   },
   "9ce8b1": {
    "text": "バスの乗り方：乗降方法と市内運賃"
   },
   "96d0f3": {
    "text": "日本のバスは、多くが後ろのドア（車両中央付近）から乗り、前のドア（運転手の横）から降ります。"
   },
   "c35290": {
    "text": "乗降時は基本的にICカードにタッチします（均一料金の路線を除く）。現金で支払う場合は、乗車時に車両入口付近の発券機で「整理券」を取ります——どの停留所から乗ったかを証明するものです。降車時に整理券を運賃と一緒に運賃箱に入れます。"
   },
   "aed18c": {
    "text": "車内には両替機がありますが、1000円札と500円硬貨しか両替できません。事前に小銭を用意しておくことをおすすめします。"
   },
   "5d3027": {
    "text": "福岡市内の一般バス"
   },
   "f264f5": {
    "text": "西鉄バスの市街地区間（博多駅・天神・薬院駅前など）は一律150円、一般区間の初乗りは210円（2024年1月の運賃改定後）です。福岡のバス・地下鉄はすべてICカード（SUGOCA、nimoca、はやかんなど）に対応しています。"
   },
   "60da92": {
    "text": "大学へ：路線・my route・通学定期"
   },
   "de2248": {
    "text": "九大伊都キャンパスへは、主に以下の3つのバス路線があります："
   },
   "54f112": {
    "headers": [
     "路線",
     "運営会社",
     "主要区間",
     "片道運賃"
    ],
    "rows": [
     [
      "九州大学線（本線）",
      "昭和バス",
      "九大学研都市駅 ↔ 伊都キャンパス",
      "330円"
     ],
     [
      "九州大学線（糸島）",
      "昭和バス",
      "前原・周船寺小学校前 ↔ 伊都",
      "200円"
     ],
     [
      "急行・直通便",
      "西鉄バス",
      "博多駅前・天神 ↔ 伊都キャンパス",
      "670円～"
     ]
    ]
   },
   "3f31f6": {
    "text": "九大学研都市駅からキャンパス内の各所（東地区、オレンジ棟、工学部、農学部など）までの全バス停は**一律330円**です。キャンパス内一律区間は160円。学研都市駅→伊都営業所は390円、泊北口・国際村前方面は410円です。"
   },
   "9a0cda": {
    "text": "GoogleでaimoのQRコードを読み取れない場合は、aimoの日本語ページをお試しください：https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "おすすめの方法：my routeアプリ"
   },
   "790a29": {
    "text": "my routeアプリをダウンロードしてください（iOSは海外ストアへの切り替えが必要）。アプリ内では昭和バス九州大学線（糸島市内の路線を除く）を検索でき、550円 / 18時間の乗り放題チケット（乗り放題乗車券）を販売しています。支払いはクレジットカードまたはPayPayに対応しており、普段の通学におすすめの乗車方法の一つです。"
   },
   "96fc42": {
    "text": "通学定期券"
   },
   "f61466": {
    "headers": [
     "路線",
     "区間",
     "1ヶ月",
     "3ヶ月"
    ],
    "rows": [
     [
      "昭和バス 九州大学線",
      "学研都市駅 ↔ 伊都キャンパス",
      "10,000円",
      "28,000円"
     ],
     [
      "昭和バス 九州大学線（糸島）",
      "前原・周船寺 ↔ 伊都キャンパス",
      "7,200円",
      "20,520円"
     ],
     [
      "JR筑肥線＋地下鉄",
      "学研都市 → 天神",
      "約 11,680円",
      "—"
     ],
     [
      "西鉄バス",
      "区間により異なる",
      "—",
      "—"
     ]
    ]
   },
   "3dd9c3": {
    "items": [
     {
      "text": "昭和バス 九州大学線：スマホのネット定期券、九大生専用"
     },
     {
      "text": "昭和バス 九州大学線（糸島）：紙・スマホ共通"
     },
     {
      "text": "JR筑肥線＋地下鉄：NAVITIMEで検索"
     },
     {
      "text": "西鉄バス：西鉄公式サイトを参照"
     }
    ]
   },
   "967aaa": {
    "text": "キャンパス内には無料の予約制シャトルバス「aimo」もあり、学内37か所の停留所をカバーしています。スマホで予約して指定の停留所から乗車します。オンデマンド便のほか、定時定路線で同じく予約が必要な循環便があり、学期中の平日08:00–22:00に運行しています。"
   },
   "6ca9ff": {
    "text": "aimoは手を挙げれば止まるシャトルバスではなく、予約制です。混雑時は10分以上待つこともあり、時間に余裕のない移動には当てにしないでください。"
   },
   "060e79": {
    "text": "割引チケット一覧"
   },
   "459d9a": {
    "text": "以下は公式の最新情報を基準にしてください："
   },
   "76448a": {
    "items": [
     {
      "text": "地下鉄1日乗車券：640円で、当日の地下鉄全線（空港線・箱崎線・七隈線）に乗り放題です"
     },
     {
      "text": "タッチ決済：地下鉄3線36駅でクレジットカードが直接利用可能"
     },
     {
      "text": "当日640円に達すると以降は加算されません（障がい者・こどもは320円）"
     }
    ]
   },
   "84fe39": {
    "text": "タッチ決済の1日上限は「同一カード番号 かつ 同一媒体」の場合のみ合算されます。朝はカード本体、午後はスマホのウォレットで同じカードをタッチすると、それぞれ別々に計算され、上限は適用されません——上限を利用するには、1日中同じ方法でタッチしてください。また、地下鉄の区間は姪浜までで、九大から出発する前半はJR筑肥線を走るため、その区間はこの上限には含まれません。"
   },
   "28e638": {
    "items": [
     {
      "text": "伊都キャンパス回数券：6,730円 / 10枚（3ヶ月有効）、九大生協で購入可能"
     },
     {
      "text": "エコルカード / ワイドエコルカード：西鉄バスの定期券で、価格はエリアにより異なります"
     },
     {
      "text": "通学定期券：JR・西鉄・地下鉄それぞれに学割の定期券があり、学生証の取得後に申請できます"
     }
    ]
   },
   "bf8325": {
    "text": "回数券の利用範囲：地下鉄各駅 ↔ JR九大学研都市駅 ↔ 昭和バス九大キャンパス内。1枚あたり673円です。"
   },
   "50ea66": {
    "text": "注意：特別聴講生・研究生などの非正規生は、エコルカードと通学定期券を**購入できません**。"
   },
   "56c5db": {
    "items": [
     {
      "text": "地下鉄1日乗車券",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/oneday.php"
     },
     {
      "text": "伊都キャンパス回数券（昭和バス）",
      "url": "https://showa-bus.jp/tickets/pass_itocampus/"
     },
     {
      "text": "伊都キャンパス回数券（地下鉄）",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/itocampus.php"
     },
     {
      "text": "エコルカード（西鉄）",
      "url": "https://www.nishitetsu.jp/bus/ecole/"
     }
    ]
   },
   "5824ef": {
    "text": "・連絡ミニ回数券：6枚1綴りで、乗車駅によって2,610 / 2,820 / 2,980 / 3,360円、JR九州の各駅で発売しています。伊都キャンパス回数券とは利用範囲が異なるため、購入前に普段利用する区間が対象かどうか確認してください。"
   },
   "9acd34": {
    "text": "・西鉄バス 6時間 / 24時間 free pass：有効時間内は、対象エリア内の西鉄バスに乗り放題で、my routeアプリで購入できます。九大からK線で天神まで片道約710円かかるため、当日市内を何度も移動する場合は通常お得です。"
   },
   "a010db": {
    "text": "西鉄free passの価格と対象エリアは、公式が価格を画像内に記載しており、ネット上で出回る数字はまちまちです。購入前にmy routeアプリでご確認ください。**対象エリアに九大区間が含まれるかどうかは、価格以上に購入価値を左右します。**"
   },
   "c1a2f8": {
    "text": "天神・博多へ：2つの節約プラン"
   },
   "70e66b": {
    "text": "福岡市内で最もにぎわうエリアは天神–博多ですが、大学からこの2か所まで直接乗ると片道570円かかります。その理由は、九大学研都市・周船寺一帯がJR筑肥線エリアで、福岡市地下鉄と直結しており、乗車のたびにJRと福岡市地下鉄の両社にそれぞれ運賃を支払うことになるためです。"
   },
   "842f3d": {
    "text": "プラン2の姪浜は福岡市地下鉄箱崎線・空港線の始発駅で、本数が多く、乗り換えにさほど時間はかかりません。"
   },
   "13e40f": {
    "text": "適用：当日は天神/博多周辺のみで活動する場合。往復で各1枚（計2枚）使用します。現在の販売価格は994円（約497円/枚）で、直接乗るより1枚あたり73円お得です。6枚1組で販売され、1ヶ月以内に有効、期限切れで失効となるため、移動計画に合わせて購入してください。"
   },
   "4e6275": {
    "items": [
     {
      "text": "駅構内に入り、「みどりの窓口」の隣にある券売機コーナーを探します"
     },
     {
      "text": "タッチパネルで「オトクチケット」ボタンをタップします"
     },
     {
      "text": "出発駅（周船寺 または 九大学研都市）と枚数を選択します（6枚購入し、今回は2枚使用）"
     },
     {
      "text": "現金を投入するかICカードで支払い、切符を受け取ります"
     },
     {
      "text": "切符を持って自動改札を通過し乗車します。天神/博多に着いたら切符を改札に挿入して出場します"
     }
    ]
   },
   "092ecf": {
    "text": "対象：当日は市内の2か所以上を訪れ、時間に余裕がある場合。柱となるのは、JRで姪浜（福岡市地下鉄の始発駅）まで乗って下車し、地下鉄1日乗車券に乗り換えて1日中移動することです。姪浜は箱崎線・空港線の始発駅で、九大学研都市駅より本数がはるかに多く、乗り換えにさほど時間はかかりません。"
   },
   "2c1ea4": {
    "text": "合計費用：270×2 + 640 = 1,180円。1か所だけなら割高です（直行570×2 = 1,140円のほうが安い）。"
   },
   "3f3ee3": {
    "items": [
     {
      "text": "周船寺 または 九大学研都市駅で姪浜までの切符を購入します（片道270円）"
     },
     {
      "text": "姪浜駅で下車して改札を出、姪浜駅の構内に入ります"
     },
     {
      "text": "姪浜駅の券売機で福岡市地下鉄1日乗車券（640円）を購入します"
     },
     {
      "text": "地下鉄1日乗車券で福岡市地下鉄全線を自由に乗車できます。当日は改札を出て再度入場しても繰り返し利用可能です"
     },
     {
      "text": "帰りは出場前に精算機で姪浜→九大学研都市の差額（約300円）を支払います"
     },
     {
      "text": "*1日乗車券は改札を出た後も当日有効なので、次に福岡市内へ行くときに使えます*"
     }
    ]
   },
   "032240": {
    "headers": [
     "方法",
     "往復費用"
    ],
    "rows": [
     [
      "博多まで直接乗車して往復",
      "570×2 = 1,140円"
     ],
     [
      "姪浜往復＋地下鉄1日乗車券",
      "合計 1,180円"
     ]
    ]
   },
   "2a2b4d": {
    "text": "まとめ：1か所だけ行く場合は直接切符を買うほうが安い（1,140円）。1日で2か所以上行く場合は「姪浜乗り換え＋地下鉄1日乗車券」がお得です。"
   },
   "1fac9d": {
    "text": "ヒント：券売機や改札の精算方法に不慣れな場合は、地下鉄/JRの駅員（制服を着用し、名札を付けています）に、簡単な中国語や英語で購入・出場・精算のサポートをお願いできます。"
   },
   "ec7b4d": {
    "text": "原付 / 運転免許"
   },
   "50dcb4": {
    "text": "免許の書き換えや原付免許の取得などは以下のリンクを参考にしてください。原付は教習所に通わなくても、予約後に直接試験を受けることも可能ですが、詳細は福岡県警の案内に従ってください。"
   },
   "b31729": {
    "items": [
     {
      "text": "福岡県警・原付免許",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "練習場（周船寺近辺）",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "電動キックボードの安全",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "免許書き換えの移動経験：まず博多へ行き、博多駅からJR福北豊線で飯塚へ、そこから徒歩で向かいます。"
   },
   "6135a0": {
    "text": "2025年の制度変更：新基準原付"
   },
   "187f72": {
    "text": "排出ガス規制の強化に伴い、50cc以下の原付一種は2025-10-31をもって生産終了となり、代わりに「新基準原付」が登場しました：排気量は125cc以下に拡大されましたが、最高出力は4.0kW以下に制限されます。制度は2025-04-01から施行され、新しい排出ガス規制は2025-11-01から適用されます。"
   },
   "55a01a": {
    "text": "排気量は大きくなりましたが、**法的な扱いは一切変わりません**。原付一種として扱われます：法定最高速度30 km/h、3車線以上の道路の交差点で右折する場合は二段階右折、二人乗りは禁止です。「125ccだから60km/h出せる」「二人乗りできる」という情報はすべて誤りです。"
   },
   "2553ff": {
    "text": "試験：学科のみ、先に講習が必要"
   },
   "22a10d": {
    "text": "原付免許は実技試験がなく、30分の学科試験のみで、問題は日本語・英語・中国語・ベトナム語の4言語に対応しています。実際に難しいのは試験ではなく、先に「原付講習」を受講し終えることです——受講が終わっていないと、学科試験に合格しても当日中に免許は交付されません。"
   },
   "de3307": {
    "headers": [
     "項目",
     "金額"
    ],
    "rows": [
     [
      "試験手数料",
      "1,600円"
     ],
     [
      "免許交付料",
      "2,350円"
     ],
     [
      "合計（最低）",
      "3,950円"
     ]
    ]
   },
   "2b03e1": {
    "text": "※ マイナンバーカードを使ったオンライン申請の場合、上記の費用は1,550円に減額されます。"
   },
   "f264aa": {
    "text": "受付時間は平日朝の08:30–09:00の30分間のみです（休日と12/29–01/03を除く）。福岡県内の試験場は4か所です。時間を過ぎると別の日に出直す必要があるため、伊都から出発する場合は移動時間を計算しておいてください。"
   },
   "e03f4f": {
    "items": [
     {
      "text": "ナンバープレート：原付の標識はお住まいの市役所/区役所から交付されます（車検場ではありません）。西区と糸島市では窓口が異なります"
     },
     {
      "text": "自賠責保険（強制保険）への加入が必須で、保険に加入せず走行するのは違法です"
     }
    ]
   },
   "3ef442": {
    "items": [
     {
      "text": "福岡県警察・原付免許",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/026_2.html"
     },
     {
      "text": "福岡県警察・原付講習",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "日本自動車工業会・原付一種新区分",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "タクシー：運賃と配車"
   },
   "4dff94": {
    "text": "夜に終電に間に合わない場合や、大きな荷物がある場合に利用することになります。福岡地区の現在の運賃は2026-07-01から適用されています。"
   },
   "adf1b4": {
    "headers": [
     "車種",
     "初乗り（1.1 km 以内）",
     "以降100円ごと"
    ],
    "rows": [
     [
      "普通車",
      "600円",
      "287 m"
     ],
     [
      "大型車",
      "720円",
      "176 m"
     ],
     [
      "特大車",
      "780円",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "深夜割増：22:00から翌日05:00まで、運賃が2割増しになります"
     },
     {
      "text": "迎車料金は各社が独自に設定しており、金額は統一されていません"
     },
     {
      "text": "JR各駅の出口には一般に客待ちのタクシーがいますが、駅から離れた場所では電話やアプリでの配車が必要です"
     }
    ]
   },
   "f7c689": {
    "text": "ネット上で流れている「初乗り1,064メートル670円、以降268メートル80円」は旧運賃で、2026-07-01に廃止されました。この数字が載っている攻略サイトは、他の内容もそれ以前に書かれている可能性が高いため、あわせてご注意ください。"
   },
   "9b2747": {
    "items": [
     {
      "text": "福岡市タクシー協会・運賃表",
      "url": "https://www.taxi-fukcty.or.jp/charge/"
     }
    ]
   },
   "e612d1": {
    "text": "本記事のテーマ選定の一部は『新伊都国風土記』（著者 Hato_Tsubame、CantonSimon）の整理を参考にしています。文中のすべての数字と手順は各公式サイトから取得し再確認したもので、同書と食い違いがある場合は公式の情報を優先してください。"
   },
   "e1c701": {
    "text": "新幹線"
   },
   "e1c702": {
    "text": "博多からは 2 方向あります。本州方面の**山陽新幹線**と、九州南部方面の**九州新幹線**です。"
   },
   "e1c703": {
    "text": "⚠️ **ジャパン・レール・パス（JR Pass）は留学生には買えません。** 公式の利用資格は「短期滞在」で入国した外国人旅行者のみで、留学の在留資格は該当しません。買っても引き換えできません。"
   },
   "e1c704": {
    "text": "きっぷの買い方と節約"
   },
   "e1c705": {
    "items": [
     {
      "text": "ネット予約：smartEX は東海道・山陽・九州新幹線に対応。予約後は IC カードでそのまま改札を通れる"
     },
     {
      "text": "学割：JR 指定校の学生かつ**片道 100 km 超**で運賃が 2 割引"
     },
     {
      "text": "ただし学割は「乗車券」のみで、新幹線の特急券は対象外"
     },
     {
      "text": "ぷらっとこだま：JR 東海ツアーズの割引商品。こだま号限定で通常より安い"
     }
    ]
   },
   "e1c706": {
    "text": "学割には学校が発行する**学割証**が必要です。所属の学務窓口で申請できます（JASSO の定めにより学校が配付）。"
   },
   "e1c707": {
    "items": [
     {
      "text": "学割証（JASSO 公式）",
      "url": "https://www.jasso.go.jp/gakusei/gakuwari/index.html"
     },
     {
      "text": "学生割引乗車券の買い方（JR 東日本 公式）",
      "url": "https://media.jreast.co.jp/articles/1731"
     },
     {
      "text": "smartEX（公式・ネット予約）",
      "url": "https://smart-ex.jp/top.php"
     },
     {
      "text": "ぷらっとこだま（JR 東海ツアーズ 公式）",
      "url": "https://travel.jr-central.co.jp/plan/tokushu/kep"
     },
     {
      "text": "ジャパン・レール・パス 利用資格（公式）",
      "url": "https://japanrailpass.net/about_jrp/riyou/"
     }
    ]
   },
   "675d9f": {
    "title": "プラン1：オトクチケット（回数券）· 天神／博多のみ（往復 994円）"
   },
   "fb7753": {
    "title": "プラン2：姪浜乗り換え＋地下鉄1日乗車券 · 複数地点／時間に余裕（総額 1,180円）"
   }
  },
  "en": {
   "397485": {
    "text": "Bicycles: buying, riding, and disposal"
   },
   "402355": {
    "text": "Two scenarios, two options: ① Tenjin/Hakata only → Option 1 (coupon tickets, 994円 for the round trip); ② two or more city destinations with time to spare → Option 2 (transfer at Meinohama + subway one-day pass)."
   },
   "565847": {
    "text": "How to use: after enabling the ticket in the app as instructed, show it to the driver before alighting and simply get off."
   },
   "d182c2": {
    "text": "From the dormitory to campus, to Tenjin and Hakata, buying a bicycle, getting a driver's license — **decide on the daily route first**, then choose the ticket plan. This article compares fares, commuter passes, discount tickets, and money-saving options side by side."
   },
   "695d78": {
    "text": "Other tickets and discounts"
   },
   "00a067": {
    "text": "Details of the two options"
   },
   "032cc4": {
    "text": "Conclusions and practical tips"
   },
   "5803fa": {
    "text": "Related links"
   },
   "0e3977": {
    "text": "Nishitetsu Bus discounts"
   },
   "d2037e": {
    "text": "Exam procedure and application hours"
   },
   "1b9a7f": {
    "text": "On the Ito Campus, bicycles are a common means of transport. From JR Kyudai-Gakkentoshi Station, walking to the campus takes about 45–50 minutes, cycling about 20–30, and a motorcycle or car about 10–15. Buses also run (about 15–20 minutes) but less frequently."
   },
   "29a476": {
    "text": "Buying a bicycle"
   },
   "fc7dbb": {
    "text": "A new bicycle generally costs 17,000円 or more; the secondhand price in Fukuoka is around 11,000円 (typical figure). Secondhand bicycles can be found on Mercari or through student transfer postings. When buying, **anti-theft registration (600円)** is required, and the anti-theft registration card must be kept (needed for cancellation later). See 【购物】"
   },
   "255bf5": {
    "text": "Disposing of or transferring a bicycle"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "Unwanted bicycles can be sold to a secondhand shop or transferred to a friend"
     },
     {
      "text": "The anti-theft registration must be cancelled: bring the customer copy of the anti-theft registration card received at purchase plus identification to the police station"
     },
     {
      "text": "リサイクルマート糸島 (Recycle Mart Itoshima) offers English support"
     }
    ]
   },
   "ccfc54": {
    "text": "Shared bicycles / rental"
   },
   "08e40e": {
    "text": "Shared bicycle and shared e-scooter parking points are available on campus; locations and availability can be checked on the campus map or in the relevant app. The university also offers rental bicycles; ask at the Co-op (生協)."
   },
   "9ce8b1": {
    "text": "Taking the bus: boarding, alighting, and city fares"
   },
   "96d0f3": {
    "text": "Most buses in Japan are boarded from the rear (middle) door and alighted from the front door (beside the driver)."
   },
   "c35290": {
    "text": "Boarding and alighting basically require tapping an IC card (except on flat-fare routes). When paying cash, take a 整理券 (numbered boarding ticket) from the ticket dispenser by the door at boarding — it proves the boarding stop — and insert it into the fare box together with the fare when alighting."
   },
   "aed18c": {
    "text": "A change machine is on board, but it can only change 1,000円 bills into 500円 coins; prepare small change in advance."
   },
   "5d3027": {
    "text": "Standard buses within Fukuoka City"
   },
   "f264f5": {
    "text": "On Nishitetsu Bus central-city sections (Hakata Station, Tenjin, Yakuin-ekimae, etc.) the flat fare is 150円; the starting fare on ordinary sections is 210円 (after the January 2024 fare revision). Fukuoka's buses and subway all accept IC cards (SUGOCA, nimoca, Hayakaken, etc.)."
   },
   "60da92": {
    "text": "Getting to campus: routes, my route, and commuter passes"
   },
   "de2248": {
    "text": "The following three bus services run to the Kyushu University Ito Campus:"
   },
   "54f112": {
    "headers": [
     "Route",
     "Operator",
     "Main section",
     "One-way fare"
    ],
    "rows": [
     [
      "Kyushu University Line (main)",
      "Shōwa Bus",
      "Kyudai-Gakkentoshi Station ↔ Ito Campus",
      "330 yen"
     ],
     [
      "Kyushu University Line (Itoshima)",
      "Shōwa Bus",
      "Maebaru · Susenji Shogakko-mae ↔ Ito",
      "200 yen"
     ],
     [
      "Express / direct services",
      "Nishitetsu Bus",
      "Hakata Station-mae · Tenjin ↔ Ito Campus",
      "670 yen～"
     ]
    ]
   },
   "3f31f6": {
    "text": "All bus stops from Kyudai-Gakkentoshi Station to the campus (East Zone, Orange Hall, the Faculty of Engineering, the Faculty of Agriculture, etc.) are a **flat 330円**. The flat-fare zone within the campus is 160円. Gakkentoshi Station → Ito office costs 390円, and the Tomari-kitaguchi (泊北口) / Kokusaimura-mae (国際村前) direction 410円."
   },
   "9a0cda": {
    "text": "If scanning the aimo QR code with Google causes problems, use the aimo Japanese page instead: https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "Recommended: the my route app"
   },
   "790a29": {
    "text": "The my route app can be downloaded (on iOS, the store region must be switched to an overseas one). The app covers the Shōwa Bus Kyushu University Line (excluding Itoshima City routes) and sells a 550円 / 18-hour unlimited-ride ticket (乗り放題チケット), payable by credit card or PayPay — one of the recommended options for the daily commute to campus."
   },
   "96fc42": {
    "text": "Student commuter passes"
   },
   "f61466": {
    "headers": [
     "Route",
     "Section",
     "1 month",
     "3 months"
    ],
    "rows": [
     [
      "Shōwa Bus Kyushu University Line",
      "Kyudai-Gakkentoshi Station ↔ Ito Campus",
      "10,000 yen",
      "28,000 yen"
     ],
     [
      "Shōwa Bus Kyushu University Line (Itoshima)",
      "Maebaru · Susenji ↔ Ito Campus",
      "7,200 yen",
      "20,520 yen"
     ],
     [
      "JR Chikuhi Line + subway",
      "Kyudai-Gakkentoshi → Tenjin",
      "about 11,680 yen",
      "—"
     ],
     [
      "Nishitetsu Bus",
      "Varies by section",
      "—",
      "—"
     ]
    ]
   },
   "3dd9c3": {
    "items": [
     {
      "text": "Shōwa Bus Kyushu University Line: smartphone-based commuter pass, for Kyushu University students only"
     },
     {
      "text": "Shōwa Bus Kyushu University Line (Itoshima): valid in paper and smartphone form"
     },
     {
      "text": "JR Chikuhi Line + subway: check with NAVITIME"
     },
     {
      "text": "Nishitetsu Bus: follow the official Nishitetsu website"
     }
    ]
   },
   "967aaa": {
    "text": "On campus there is also the free reservation-based shuttle aimo, covering 37 stops; reserve by smartphone and board at the designated stop. Besides the on-demand service, a loop service with fixed schedules and routes, also requiring reservation, operates on weekdays during term time from 08:00–22:00."
   },
   "6ca9ff": {
    "text": "aimo is not a flag-down shuttle but a reservation-based one. When demand is high, waiting can take ten-plus minutes or longer, so do not rely on it when time is tight."
   },
   "060e79": {
    "text": "Discount tickets at a glance"
   },
   "459d9a": {
    "text": "The following is based on the latest official information:"
   },
   "76448a": {
    "items": [
     {
      "text": "Subway one-day pass: 640 yen, unlimited rides that day on all subway lines (Airport Line, Hakozaki Line, Nanakuma Line)"
     },
     {
      "text": "Contactless payment (タッチ決済): credit cards can be tapped directly at all 36 stations of the 3 subway lines"
     },
     {
      "text": "No further charge once 640 yen is reached in a day (320 yen for persons with disabilities and children)"
     }
    ]
   },
   "84fe39": {
    "text": "The contactless daily cap is aggregated only for the same card number and the same medium. Tapping a physical card in the morning and the same card through a phone wallet in the afternoon counts each separately, and the cap does not apply — to enjoy the ceiling, use a single method all day. Also, the subway section ends at Meinohama; the first leg from Kyudai runs on the JR Chikuhi Line and is not counted toward this cap."
   },
   "28e638": {
    "items": [
     {
      "text": "Ito Campus coupon tickets: 6,730 yen / 10 tickets (valid 3 months), available at the Kyushu University Co-op"
     },
     {
      "text": "Ecoluka Card / Wide Ecoluka Card: Nishitetsu Bus monthly passes, price varies by zone"
     },
     {
      "text": "Student commuter passes: JR, Nishitetsu, and the subway each offer student-discount passes; applicable once the student ID card is issued"
     }
    ]
   },
   "bf8325": {
    "text": "Coupon ticket coverage: subway stations ↔ JR Kyudai-Gakkentoshi Station ↔ Shōwa Bus within the Kyudai campus. Each ticket 673円."
   },
   "50ea66": {
    "text": "Note: non-regular students such as special auditors and research students **cannot purchase** the Ecoluka Card or student commuter passes."
   },
   "56c5db": {
    "items": [
     {
      "text": "Subway one-day pass",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/oneday.php"
     },
     {
      "text": "Ito Campus coupon tickets (Shōwa Bus)",
      "url": "https://showa-bus.jp/tickets/pass_itocampus/"
     },
     {
      "text": "Ito Campus coupon tickets (subway)",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/itocampus.php"
     },
     {
      "text": "Ecoluka Card (Nishitetsu)",
      "url": "https://www.nishitetsu.jp/bus/ecole/"
     }
    ]
   },
   "5824ef": {
    "text": "· 連絡ミニ回数券 (connecting mini coupon tickets): books of 6, priced 2,610 / 2,820 / 2,980 / 3,360円 depending on the boarding station, sold at JR Kyushu stations. The covered sections differ from the Ito Campus coupon tickets, so before buying, check whether the section normally used is included."
   },
   "9acd34": {
    "text": "· Nishitetsu Bus 6-hour / 24-hour free pass: unlimited rides on Nishitetsu Bus within the free area during the valid period; purchase in the my route app. A one-way ride from Kyudai to Tenjin on the K line already costs about 710円, so it is generally worthwhile when making several rides within the city on the same day."
   },
   "a010db": {
    "text": "For the price and free area of the Nishitetsu free pass, the official price is printed inside an image, and the figures circulating elsewhere are inconsistent. Confirm in the my route app before purchasing. **Whether the free area covers the Kyudai section matters more than the price in deciding whether it is worth buying.**"
   },
   "c1a2f8": {
    "text": "Tenjin and Hakata: two money-saving options"
   },
   "70e66b": {
    "text": "The busiest districts in Fukuoka City are Tenjin and Hakata, but a direct ride from campus to either costs up to 570円 one way. The reason is that the Kyudai-Gakkentoshi and Susenji area belongs to the JR Chikuhi Line, which connects directly with the Fukuoka City Subway; a single trip pays the JR company and the Fukuoka City subway company separately, which drives the fare up."
   },
   "842f3d": {
    "text": "In Option 2, Meinohama is the origin station of the Fukuoka City Subway Hakozaki and Airport Lines, with dense train frequency, so the transfer costs little time."
   },
   "13e40f": {
    "text": "Applicable: activities that day are only in the Tenjin/Hakata area. One ticket per leg (2 in total) currently costs 994円 (about 497円 each), 73円 per ticket cheaper than riding directly. Tickets are sold in sets of 6, valid for 1 month and void after expiry; purchase according to the outing plan."
   },
   "4e6275": {
    "items": [
     {
      "text": "After entering the station, find the ticket-vending machine area beside 「みどりの窓口」(Midori-no-madoguchi)"
     },
     {
      "text": "On the touch screen, tap the「オトクチケット」button"
     },
     {
      "text": "Select the departure station (Susenji or Kyudai-Gakkentoshi) and the number of tickets (buy 6 at once; 2 used this time)"
     },
     {
      "text": "Pay by cash or IC card and collect the tickets"
     },
     {
      "text": "Pass through the automatic gate with the ticket and board; at Tenjin/Hakata, insert the ticket into the gate to exit"
     }
    ]
   },
   "092ecf": {
    "text": "Applicable: two or more city destinations that day with no tight schedule. The core is to ride JR only to Meinohama (the origin station of the Fukuoka City Subway), get off, and switch to a subway one-day pass for the day. Meinohama is the origin of the Hakozaki and Airport Lines, with much denser service than Kyudai-Gakkentoshi Station, so the transfer adds little time."
   },
   "2c1ea4": {
    "text": "Total cost: 270×2 + 640 = 1,180円; for only one destination it is not worthwhile (the direct ride at 570×2 = 1,140円 is cheaper)."
   },
   "3f3ee3": {
    "items": [
     {
      "text": "At Susenji or Kyudai-Gakkentoshi Station, buy a ticket to Meinohama (270 yen one way)"
     },
     {
      "text": "Alight at Meinohama Station, exit the gate, and enter the Meinohama concourse"
     },
     {
      "text": "At the Meinohama ticket machines, buy a Fukuoka City Subway one-day pass (640 yen)"
     },
     {
      "text": "Ride anywhere on the Fukuoka City Subway with the one-day pass; it can be used repeatedly, exiting and re-entering the gate on the same day"
     },
     {
      "text": "On the return, pay the difference for Meinohama → Kyudai-Gakkentoshi at the fare-adjustment machine before exiting the gate (about 300 yen)"
     },
     {
      "text": "*The one-day pass remains valid for the day after exiting the gate and can be kept for the next visit to Fukuoka City*"
     }
    ]
   },
   "032240": {
    "headers": [
     "Method",
     "Round-trip cost"
    ],
    "rows": [
     [
      "Direct round trip to Hakata",
      "570×2 = 1,140 yen"
     ],
     [
      "Meinohama round trip + subway one-day pass",
      "Total 1,180 yen"
     ]
    ]
   },
   "2a2b4d": {
    "text": "Conclusion: for a single destination, buying the direct ticket is cheaper (1,140円); for two or more destinations in a day, the Meinohama transfer + subway one-day pass is more economical."
   },
   "1fac9d": {
    "text": "Tip: if unfamiliar with the ticket machines or fare adjustment at the gates, station staff of the subway/JR (in uniform with name badges) can be asked, in simple Chinese or English, to assist with ticket purchase, exiting, and fare adjustment."
   },
   "ec7b4d": {
    "text": "Mopeds / driver's licenses"
   },
   "50dcb4": {
    "text": "License conversion, moped (原付) exams, etc. can be handled through the following links; for the moped license, a driving school is not required — after booking an appointment the test can be taken directly. Details follow the Fukuoka Prefectural Police."
   },
   "b31729": {
    "items": [
     {
      "text": "Fukuoka Prefectural Police · moped license",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "Practice site (near Susenji)",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "E-scooter safety",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "Experience on license-conversion trips: first go to Hakata, transfer at Hakata Station to the JR Fukuhoku-Yutaka Line for Iizuka, then walk the remaining distance."
   },
   "6135a0": {
    "text": "2025 rule change: the new-standard moped"
   },
   "187f72": {
    "text": "With tighter emission regulations, Class-1 mopeds (原付一種) under 50cc ceased production on 2025-10-31, replaced by the \"new-standard moped\" (新基準原付): displacement is relaxed to 125cc or less, while maximum output is limited to 4.0 kW or less. The framework took effect on 2025-04-01, and the new emission regulations apply from 2025-11-01."
   },
   "55a01a": {
    "text": "Displacement is larger, but **the legal treatment is unchanged**; it is still treated as a Class-1 moped: statutory maximum speed 30 km/h, two-stage right turn required when turning right at intersections on roads with three or more lanes, and carrying passengers is prohibited. Claims that \"125cc means it can run 60 and carry a passenger\" are all wrong."
   },
   "2553ff": {
    "text": "The exam: written only, with a required lecture first"
   },
   "22a10d": {
    "text": "The moped license has no practical exam, only a 30-minute written test, with question papers available in four languages: Japanese, English, Chinese, and Vietnamese. What really blocks applicants is not the exam but completing the「原付講習」lecture first — without it, no license is issued that day even if the written test is passed."
   },
   "de3307": {
    "headers": [
     "Item",
     "Fee"
    ],
    "rows": [
     [
      "Examination fee",
      "1,600 yen"
     ],
     [
      "License issuance fee",
      "2,350 yen"
     ],
     [
      "Total (minimum)",
      "3,950 yen"
     ]
    ]
   },
   "2b03e1": {
    "text": "※ When applying online with a My Number Card, the above fees are reduced to 1,550 円."
   },
   "f264aa": {
    "text": "Applications are accepted only on weekday mornings from 08:30–09:00 (excluding holidays and 12/29–01/03); there are 4 testing centers in Fukuoka Prefecture. Missing the window means returning another day, so allow enough travel time from Ito."
   },
   "e03f4f": {
    "items": [
     {
      "text": "Registration: moped plates are issued by the municipal / ward office of residence (not a vehicle office); the counters in Nishi Ward and Itoshima City differ"
     },
     {
      "text": "Compulsory Automobile Liability Insurance (自賠責保険) is mandatory; riding without insurance is illegal"
     }
    ]
   },
   "3ef442": {
    "items": [
     {
      "text": "Fukuoka Prefectural Police · moped license (原付免許)",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/026_2.html"
     },
     {
      "text": "Fukuoka Prefectural Police · moped lecture (原付講習)",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "Japan Automobile Manufacturers Association · new classification of Class-1 mopeds",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "Taxis: fares and hailing"
   },
   "4dff94": {
    "text": "Taxis are used when the last train is missed at night or bulky luggage is carried. The current fare scale of the Fukuoka area took effect on 2026-07-01."
   },
   "adf1b4": {
    "headers": [
     "Vehicle type",
     "Flag-down (within 1.1 km)",
     "Thereafter, per 100 yen"
    ],
    "rows": [
     [
      "Standard",
      "600 yen",
      "287 m"
     ],
     [
      "Large",
      "720 yen",
      "176 m"
     ],
     [
      "Extra-large",
      "780 yen",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "Late-night surcharge: 22:00 to 05:00 the next morning, fare plus 20%"
     },
     {
      "text": "Dispatch fees (hailing a taxi to the door) are set by each company and are not uniform"
     },
     {
      "text": "JR station exits generally have taxis waiting; in remote areas, call by phone or through an app"
     }
    ]
   },
   "f7c689": {
    "text": "The figures circulating online \"670円 for the first 1,064 m, then 80円 per 268 m\" are the previous fare scale, void since 2026-07-01. Guides carrying these numbers were mostly written before that date; treat their other content with the same caution."
   },
   "9b2747": {
    "items": [
     {
      "text": "Fukuoka City Taxi Association · fare table",
      "url": "https://www.taxi-fukcty.or.jp/charge/"
     }
    ]
   },
   "e612d1": {
    "text": "Part of this article's topic selection references the compilation《新伊都国風土記》(a work by Hato_Tsubame and CantonSimon). All figures and procedures in this article are taken from official websites and re-verified; where they differ from that work, the official sources prevail."
   },
   "e1c701": {
    "text": "Shinkansen"
   },
   "e1c702": {
    "text": "Two lines start from Hakata: the **Sanyo Shinkansen** toward Honshu, and the **Kyushu Shinkansen** toward southern Kyushu."
   },
   "e1c703": {
    "text": "⚠️ **JR Pass is not available to international students.** Official eligibility is limited to foreign visitors entering Japan under \"Temporary Visitor\" status; a student residence status does not qualify, and the pass cannot be exchanged even if purchased."
   },
   "e1c704": {
    "text": "Buying tickets and saving"
   },
   "e1c705": {
    "items": [
     {
      "text": "Online booking: smartEX covers the Tokaido, Sanyo and Kyushu Shinkansen; after booking, tap straight through the gates with an IC card"
     },
     {
      "text": "Student discount: designated-school students, **one way over 100 km**, 20% off the fare"
     },
     {
      "text": "Note it applies only to the base ticket; Shinkansen express surcharges are excluded"
     },
     {
      "text": "Platt Kodama: a discounted product from JR Central Tours, limited to Kodama services"
     }
    ]
   },
   "e1c706": {
    "text": "The student discount requires a **student discount certificate (学割証)** issued by the university; apply at your faculty's student affairs office (per JASSO, the school issues it)."
   },
   "e1c707": {
    "items": [
     {
      "text": "Student discount certificate (JASSO, official)",
      "url": "https://www.jasso.go.jp/gakusei/gakuwari/index.html"
     },
     {
      "text": "How to buy a student discount ticket (JR East, official)",
      "url": "https://media.jreast.co.jp/articles/1731"
     },
     {
      "text": "smartEX (official, online booking)",
      "url": "https://smart-ex.jp/top.php"
     },
     {
      "text": "Platt Kodama (JR Central Tours, official)",
      "url": "https://travel.jr-central.co.jp/plan/tokushu/kep"
     },
     {
      "text": "Japan Rail Pass eligibility (official)",
      "url": "https://japanrailpass.net/about_jrp/riyou/"
     }
    ]
   },
   "675d9f": {
    "title": "Option 1: Otoku Ticket (multi-ride coupon ticket) · Tenjin/Hakata only (994 yen round trip)"
   },
   "fb7753": {
    "title": "Option 2: transfer at Meinohama + subway 1-day pass · multiple destinations / ample time (1,180 yen total)"
   }
  },
  "ko": {
   "397485": {
    "text": "자전거: 구입・이용・폐기"
   },
   "402355": {
    "text": "두 가지 상황에 대응하는 두 가지 방법이 있습니다: ① 天神/博多만 갈 때 → 방법 1(회수권, 왕복 합계 994円); ② 시내 2곳 이상을 방문하고 시간이 넉넉할 때 → 방법 2(姪浜 환승＋지하철 1일권)."
   },
   "565847": {
    "text": "사용 방법: App 안내에 따라 시스템 티켓을 활성화한 뒤, 하차 전에 운전기사에게 보여 주면 바로 하차할 수 있습니다."
   },
   "d182c2": {
    "text": "기숙사에서 학교까지, 天神・博多 방문, 자전거 구입, 면허 취득 — **먼저 일상 동선을 정한 뒤** 승차권 구매 방안을 결정하시기 바랍니다. 본문에서는 운임, 정기권, 할인권과 비용 절약 방안을 나란히 비교합니다."
   },
   "695d78": {
    "text": "기타 승차권과 할인"
   },
   "00a067": {
    "text": "두 가지 방법의 상세 내역"
   },
   "032cc4": {
    "text": "결론과 이용 팁"
   },
   "5803fa": {
    "text": "관련 링크"
   },
   "0e3977": {
    "text": "西鉄バス 할인"
   },
   "d2037e": {
    "text": "시험 절차와 접수 시간"
   },
   "1b9a7f": {
    "text": "伊都 캠퍼스에서는 자전거가 흔히 쓰이는 교통수단입니다. 学研 JR 역에서 학교까지 도보 약 45~50분, 자전거는 약 20~30분, 오토바이나 자동차는 약 10~15분이 걸립니다. 버스(약 15~20분)도 이용할 수 있지만 운행 횟수가 적습니다."
   },
   "29a476": {
    "text": "자전거 구입"
   },
   "fc7dbb": {
    "text": "새 자전거는 보통 17,000円 이상, 후쿠오카 중고 시세는 약 11,000円(경험치)입니다. 중고품은 Mercari를 이용하거나 학생들 사이의 양도 정보를 확인할 수 있습니다. 구입 시 **도난 방지 등록(600円)**을 해야 하며, 도난 방지 등록 카드(폐기 처리 시 필요)는 잘 보관해 두어야 합니다. 【쇼핑】 참조"
   },
   "255bf5": {
    "text": "자전거 처분·양도"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "안 쓰는 자전거는 중고점에 판매하거나 친구에게 양도할 수 있습니다"
     },
     {
      "text": "도난 방지 등록 말소가 필요합니다. 구입 시 받은 「도난 방지 등록 카드 고객 보관용」+ 신분증을 지참하고 경찰서에서 처리합니다"
     },
     {
      "text": "リサイクルマート糸島는 영어로 대응 가능합니다"
     }
    ]
   },
   "ccfc54": {
    "text": "공유 자전거 / 렌탈"
   },
   "08e40e": {
    "text": "캠퍼스 안에는 공유 자전거와 공유 전동 자전거의 주차 지점이 있으며, 위치와 이용 가능한 차량은 캠퍼스 지도나 관련 App에서 확인할 수 있습니다. 학교에서도 렌탈 자전거를 제공하므로 生協에 문의하면 됩니다."
   },
   "9ce8b1": {
    "text": "버스 이용 방법: 승하차와 시내 운임"
   },
   "96d0f3": {
    "text": "일본의 버스는 대부분 뒷문(차량 중간)에서 승차하고 앞문(기사 옆)에서 하차합니다."
   },
   "c35290": {
    "text": "승하차 시 기본적으로 IC 카드를 태그해야 합니다(균일 요금 노선 제외). 현금을 사용하는 경우, 승차할 때 차량 문 근처의 발권기에서 「정리권(整理券)」을 받습니다. 이는 어느 정류장에서 탔는지 증명하는 표입니다. 하차할 때는 整理券을 요금과 함께 요금함에 넣습니다."
   },
   "aed18c": {
    "text": "차량 안에 환전기가 있지만 1000円 지폐와 500円 동전만 환전할 수 있으므로, 미리 잔돈을 준비해 두는 것이 좋습니다."
   },
   "5d3027": {
    "text": "福岡 시내 일반 버스"
   },
   "f264f5": {
    "text": "西鉄バ스의 시내 중심 구간(博多駅・天神・薬院駅前 등)은 균일 요금 150円, 일반 구간은 기본 요금 210円입니다(2024년 1월 운임 개정 이후). 후쿠오카 시내 버스와 지하철 모두 IC 카드(SUGOCA, nimoca, はやかん 등)를 지원합니다."
   },
   "60da92": {
    "text": "학교 가는 방법: 노선·my route·통학 정기권"
   },
   "de2248": {
    "text": "九大 伊都 캠퍼스로 가는 주요 버스 노선은 다음과 같이 3개입니다:"
   },
   "54f112": {
    "headers": [
     "노선",
     "운영 회사",
     "주요 구간",
     "편도 운임"
    ],
    "rows": [
     [
      "九州大学線(본선)",
      "昭和バス",
      "九大学研都市駅↔伊都キャンパス",
      "330엔"
     ],
     [
      "九州大学線(糸島)",
      "昭和バス",
      "前原・周船寺小学校前↔伊都",
      "200엔"
     ],
     [
      "급행・직행 차량",
      "西鉄バス",
      "博多駅前・天神 ↔ 伊都キャンパス",
      "670엔～"
     ]
    ]
   },
   "3f31f6": {
    "text": "九大学研都市駅에서 캠퍼스 안의 각 구역(東区, 橙楼, 工学院, 農学院 등)까지 모든 버스 정류장은 **일괄 330円**입니다. 캠퍼스 내 균일 요금 구간은 160円입니다. 学研都市駅→伊都営業所는 390円, 泊北口・国際村前 방면은 410円입니다."
   },
   "9a0cda": {
    "text": "Google로 aimo의 QR 코드를 스캔하는 데 문제가 있으면 aimo 일본어 페이지를 이용할 수 있습니다: https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "추천 방법: my route App"
   },
   "790a29": {
    "text": "my route App을 다운로드할 수 있습니다(iOS는 해외 스토어로 변경 필요). App 안에서 昭和バス 九州大学線(糸島시의 노선 제외)을 찾을 수 있으며, 550円 / 18시간 동안 무제한 탑승 가능한 乗り放題チケット를 판매합니다. 결제는 신용카드 또는 PayPay를 선택할 수 있어, 일상 통학에 비교적 추천되는 탑승 방법 중 하나입니다."
   },
   "96fc42": {
    "text": "통학 정기권"
   },
   "f61466": {
    "headers": [
     "노선",
     "구간",
     "1개월",
     "3개월"
    ],
    "rows": [
     [
      "昭和バス 九州大学線",
      "学研都市駅 ↔ 伊都キャンパス",
      "10,000엔",
      "28,000엔"
     ],
     [
      "昭和バス 九州大学線(糸島)",
      "前原・周船寺 ↔ 伊都キャンパス",
      "7,200엔",
      "20,520엔"
     ],
     [
      "JR筑肥線＋지하철",
      "学研都市 → 天神",
      "약 11,680엔",
      "—"
     ],
     [
      "西鉄バス",
      "구간에 따라 다름",
      "—",
      "—"
     ]
    ]
   },
   "3dd9c3": {
    "items": [
     {
      "text": "昭和バス 九州大学線: 스마트폰 통학 정기권, 九大생 전용"
     },
     {
      "text": "昭和バス 九州大学線(糸島): 종이/스마트폰 모두 사용 가능"
     },
     {
      "text": "JR筑肥線＋지하철: NAVITIME으로 조회"
     },
     {
      "text": "西鉄バス: 西鉄バス 공식 사이트 기준"
     }
    ]
   },
   "967aaa": {
    "text": "캠퍼스 안에는 무료 예약제 셔틀버스 aimo가 있으며 교내 37곳의 정류장을 운행합니다. 스마트폰으로 예약한 뒤 지정된 정류장에서 탑승합니다. 호출하면 오는 온디맨드 편 외에도 정해진 시간과 노선으로 운행되고 역시 예약이 필요한 순환편이 있으며, 학기 중 평일 08:00–22:00에 운행합니다."
   },
   "6ca9ff": {
    "text": "aimo는 손을 들면 세워 주는 셔틀이 아니라 예약제입니다. 승객이 많으면 10분대 이상, 심하면 더 오래 기다려야 할 수도 있으므로, 시간이 빠듯한 수업에는 기대하지 마세요."
   },
   "060e79": {
    "text": "할인 승차권 일람"
   },
   "459d9a": {
    "text": "아래는 공식 최신 정보를 기준으로 합니다:"
   },
   "76448a": {
    "items": [
     {
      "text": "지하철 1일 승차권: 640엔, 당일 지하철 전 노선(空港線・箱崎線・七隈線) 무제한 탑승"
     },
     {
      "text": "터치 결제(タッチ決済): 지하철 3개 노선 36개 역에서 신용카드를 바로 태그할 수 있음"
     },
     {
      "text": "당일 640엔에 도달하면 추가 요금이 부과되지 않음(장애인・어린이 320엔)"
     }
    ]
   },
   "84fe39": {
    "text": "터치 결제의 일일 상한은 「동일 카드 번호 + 동일 매체」일 때만 합산됩니다. 아침에 실물 카드를 태그하고 오후에 휴대폰 지갑으로 같은 카드를 태그하면 양쪽이 따로 계산되어 상한이 적용되지 않습니다. 상한 혜택을 받으려면 하루 종일 한 가지 방식만 사용해야 합니다. 또한 지하철 구간은 姪浜까지이며, 九大에서 출발하는 앞 구간은 JR筑肥線을 이용하므로 그 구간은 이 상한에 포함되지 않습니다."
   },
   "28e638": {
    "items": [
     {
      "text": "伊都캠퍼스 회수권: 6,730엔 / 10장(3개월 유효), 九大生協에서 구입 가능"
     },
     {
      "text": "エコルカード / ワイドエコルカード: 西鉄バス 정기권, 가격은 지역에 따라 다름"
     },
     {
      "text": "통학 정기권: JR・西鉄・지하철에 각각 학생 할인 정기권이 있으며, 학생증을 받은 뒤 신청할 수 있습니다"
     }
    ]
   },
   "bf8325": {
    "text": "회수권 적용 범위: 지하철 각 역 ↔ JR 九大学研都市駅 ↔ 昭和バス 九大 캠퍼스 내. 장당 673円입니다."
   },
   "50ea66": {
    "text": "주의: 특별 청강생, 대학원생 등 비정규 학생은 エコルカード와 통학 정기권을 **구매할 수 없습니다**."
   },
   "56c5db": {
    "items": [
     {
      "text": "지하철 1일 승차권",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/oneday.php"
     },
     {
      "text": "伊都캠퍼스 회수권(昭和バス)",
      "url": "https://showa-bus.jp/tickets/pass_itocampus/"
     },
     {
      "text": "伊都캠퍼스 회수권(지하철)",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/itocampus.php"
     },
     {
      "text": "エコルカード(西鉄)",
      "url": "https://www.nishitetsu.jp/bus/ecole/"
     }
    ]
   },
   "5824ef": {
    "text": "· 連絡ミニ回数券: 6장 한 묶음으로, 승차 역에 따라 2,610 / 2,820 / 2,980 / 3,360円이며 JR九州 각 역에서 판매합니다. 이 회수권은 伊都캠퍼스 회수권과 적용 구간이 다르므로, 구매 전에 평소 다니는 구간이 범위 안에 있는지 먼저 확인하세요."
   },
   "9acd34": {
    "text": "· 西鉄バス 6시간 / 24시간 free pass: 유효 시간 동안 무료 구역 안의 西鉄バ스를 무제한 탑승할 수 있으며 my route App에서 구매합니다. 九大에서 K선을 타고 天神까지 가는 편도 요금이 약 710円이므로, 당일 시내에서 여러 번 버스를 탈 때는 보통 이득입니다."
   },
   "a010db": {
    "text": "西鉄 free pass의 판매 가격과 무료 구역은, 공식이 가격을 이미지로만 제공하여 유포되는 숫자가 제각각입니다. 구매 전에 my route App에서 확인하세요. **무료 구역에 九大 구간이 포함되는지가 가격보다 구매할 가치를 더 크게 좌우합니다.**"
   },
   "c1a2f8": {
    "text": "天神・博多 가기: 비용 절약 방법 2가지"
   },
   "70e66b": {
    "text": "후쿠오카 시내에서 가장 번화한 지역은 天神–博多입니다. 하지만 학교에서 이 두 곳까지 직행하면 편도 요금이 570円이나 됩니다. 그 이유는 九大学研都市와 周船寺 일대가 JR筑肥線에 속하고 福岡市地下鉄과 직접 이어져 있어, 탑승할 때 JR과 후쿠오카시 지하철에 각각 요금을 내야 하기 때문입니다."
   },
   "842f3d": {
    "text": "방법 2의 姪浜은 福岡市地下鉄 箱崎線・空港線의 시발역으로 열차가 자주 운행되어 환승에 걸리는 시간이 그리 많지 않습니다."
   },
   "13e40f": {
    "text": "적용: 당일 天神/博多 일대에서만 움직일 때. 왕복 각 1장(총 2장)이 필요하며, 현재 판매가 994円(약 497円/장)으로 직행보다 장당 73円 저렴합니다. 6장 한 세트로 판매되고 1개월 안에 유효하며 기간이 지나면 무효가 되므로, 이동 계획에 맞춰 구매하세요."
   },
   "4e6275": {
    "items": [
     {
      "text": "입장 후 「みどりの窓口」 옆의 무인 발매기 구역을 찾습니다"
     },
     {
      "text": "터치스크린에서 「オトクチケット」 버튼을 누릅니다"
     },
     {
      "text": "출발역(周船寺 또는 九大学研都市)과 매수(한 번에 6장 구매, 이번에는 2장 사용)를 선택합니다"
     },
     {
      "text": "현금을 넣거나 IC 카드로 결제한 뒤 티켓을 받습니다"
     },
     {
      "text": "티켓을 들고 자동 개찰구를 통과해 탑승하고, 天神/博多에 도착하면 티켓을 개찰구에 넣고 나옵니다"
     }
    ]
   },
   "092ecf": {
    "text": "적용: 당일 시내 2곳 이상을 방문하고 시간이 빠듯하지 않을 때. 핵심은 JR만 타고 姪浜(福岡市地下鉄 시발역)에 내려 지하철 1일권으로 환승해 하루를 보내는 것입니다. 姪浜은 箱崎線・空港線의 시발역으로 九大学研都市駅보다 열차가 훨씬 자주 운행되어 환승에 시간이 많이 들지 않습니다."
   },
   "2c1ea4": {
    "text": "총 비용: 270×2 + 640 = 1,180円. 한 곳만 갈 때는 손해입니다(직행 570×2 = 1,140円이 더 저렴)."
   },
   "3f3ee3": {
    "items": [
     {
      "text": "周船寺 또는 九大学研都市 역에서 姪浜까지의 승차권을 구매합니다(편도 270엔)"
     },
     {
      "text": "姪浜駅에서 하차해 개찰구를 나간 뒤 역 구내로 들어갑니다"
     },
     {
      "text": "姪浜駅의 발매기에서 福岡市地下鉄 1일권(640엔)을 구매합니다"
     },
     {
      "text": "지하철 1일권으로 福岡市地下鉄 전 노선을 자유롭게 탑승할 수 있습니다. 당일에 개찰을 나갔다 다시 들어가도 반복해서 사용할 수 있습니다"
     },
     {
      "text": "귀가할 때는 개찰구를 나가기 전 정산기에서 姪浜→九大学研都市의 차액(약 300엔)을 추가로 지불합니다"
     },
     {
      "text": "*1일권은 개찰 후에도 당일 유효하므로, 다음에 후쿠오카 시내에 갈 때 다시 사용할 수 있습니다*"
     }
    ]
   },
   "032240": {
    "headers": [
     "방식",
     "왕복 비용"
    ],
    "rows": [
     [
      "博多까지 직행 왕복",
      "570×2 = 1,140엔"
     ],
     [
      "姪浜 왕복＋지하철 1일권",
      "합계 1,180엔"
     ]
    ]
   },
   "2a2b4d": {
    "text": "결론: 한 곳만 방문할 때 → 직접 승차권을 사는 편이 더 저렴합니다(1,140円). 하루에 2곳 이상 방문할 때 → 「姪浜 환승＋지하철 1일권」이 더 유리합니다."
   },
   "1fac9d": {
    "text": "팁: 발매기나 개찰 정산 조작에 익숙하지 않다면 지하철/JR 역사 안의 직원(제복을 입고 명찰을 착용)에게 간단한 중국어나 영어로 승차권 구매, 개찰 통과와 정산을 도와 달라고 요청할 수 있습니다."
   },
   "ec7b4d": {
    "text": "原付 / 면허"
   },
   "50dcb4": {
    "text": "면허 교환, 原付 면허 취득 등은 아래 링크를 참고할 수 있습니다. 原付 시험은 반드시 운전학원을 거쳐야 하는 것은 아니며, 예약 후 바로 응시할 수도 있습니다. 구체적인 내용은 福岡県警의 안내를 기준으로 합니다."
   },
   "b31729": {
    "items": [
     {
      "text": "福岡県警・原付免許",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "연습 장소(周船寺 부근)",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "전동 킥보드 안전",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "면허 교환 동행 경험: 먼저 博多까지 간 뒤 博多駅에서 JR福北豊線으로 환승해 飯塚까지 가고, 그 후 도보로 이동합니다."
   },
   "6135a0": {
    "text": "2025년 제도 변경: 新基準原付"
   },
   "187f72": {
    "text": "배기가스 규제가 강화되면서 50cc 이하의 原付一種은 2025-10-31에 단종되고, 대신 「新基準原付」가 도입됩니다. 배기량은 125cc 이하로 완화되지만 최고 출력은 4.0 kW 이하로 제한됩니다. 제도는 2025-04-01부터 시행되고, 신규 배기가스 규제는 2025-11-01부터 적용됩니다."
   },
   "55a01a": {
    "text": "배기량은 커졌지만 **법적 대우는 조금도 변하지 않았습니다**. 여전히 原付一種으로 취급됩니다. 법정 최고 속도 30 km/h, 3차선 이상 도로의 교차로 우회전은 二段階右折 방식으로 해야 하며, 동승은 금지입니다. 「125cc니까 60km/h로 달릴 수 있고 동승도 된다」는 말은 모두 틀린 정보입니다."
   },
   "2553ff": {
    "text": "면허 취득: 필기만 응시, 사전에 강습 필수"
   },
   "22a10d": {
    "text": "原付 면허는 실기 시험이 없고 30분의 학과 시험만 있으며, 시험 문제는 일본어, 영어, 중국어, 베트남어 4개 언어로 제공됩니다. 실제로 어려운 것은 시험보다 사전에 「原付講習」을 수강해야 한다는 점입니다. 강습을 마치지 않으면 필기를 통과해도 당일에는 면허를 받을 수 없습니다."
   },
   "de3307": {
    "headers": [
     "항목",
     "금액"
    ],
    "rows": [
     [
      "시험 수수료",
      "1,600엔"
     ],
     [
      "면허 교부 수수료",
      "2,350엔"
     ],
     [
      "합계(최저)",
      "3,950엔"
     ]
    ]
   },
   "2b03e1": {
    "text": "※ My Number Card로 온라인 신청하면 위 비용은 1,550円으로 낮아집니다."
   },
   "f264aa": {
    "text": "접수 시간은 평일 아침 08:30–09:00의 30분뿐입니다(휴일 및 12/29–01/03 제외). 후쿠오카현 안의 시험장은 총 4곳입니다. 놓치면 다른 날 다시 와야 하므로, 伊都에서 출발할 때 이동 시간을 계산해 두세요."
   },
   "e03f4f": {
    "items": [
     {
      "text": "번호판: 原付 번호판은 거주지 관할 市役所 / 区役所에서 발급합니다(차량 관리소가 아님). 西区와 糸島市의 창구가 다릅니다"
     },
     {
      "text": "자배책보험(自賠責保険)에 반드시 가입해야 하며, 보험 없이 주행하면 위법입니다"
     }
    ]
   },
   "3ef442": {
    "items": [
     {
      "text": "福岡県警察 · 原付免許",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/026_2.html"
     },
     {
      "text": "福岡県警察 · 原付講習",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "日本自動車工業会 · 原付一種新区分",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "택시: 운임과 호출"
   },
   "4dff94": {
    "text": "밤에 막차를 놓쳤을 때나 큰 짐을 끌고 이동할 때 사용하게 됩니다. 후쿠오카 지역의 현행 운임은 2026-07-01부터 적용됩니다."
   },
   "adf1b4": {
    "headers": [
     "차종",
     "기본요금(1.1 km 이내)",
     "이후 100엔마다"
    ],
    "rows": [
     [
      "일반 차량",
      "600엔",
      "287 m"
     ],
     [
      "대형 차량",
      "720엔",
      "176 m"
     ],
     [
      "특대형 차량",
      "780엔",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "심야 할증: 22:00부터 익일 05:00까지 운임 20% 가산"
     },
     {
      "text": "영차료(호출 배차)는 각 회사가 자체적으로 정하며 금액이 통일되어 있지 않습니다"
     },
     {
      "text": "JR 각 역 출구에는 보통 승객을 기다리는 택시가 있지만, 벽지에서는 전화나 App으로 호출해야 합니다"
     }
    ]
   },
   "f7c689": {
    "text": "인터넷에 퍼진 「기본요금 1,064m 670円, 이후 268m마다 80円」은 이전 버전 운임으로 2026-07-01부터 폐지되었습니다. 이 숫자가 나오는 공략은 나머지 내용도 대부분 그 이전에 작성된 것이므로 함께 유의하세요."
   },
   "9b2747": {
    "items": [
     {
      "text": "福岡市タクシー協会 · 운임표",
      "url": "https://www.taxi-fukcty.or.jp/charge/"
     }
    ]
   },
   "e612d1": {
    "text": "본문의 일부 주제 선정은 《新伊都国風土記》(저자 Hato_Tsubame, CantonSimon)의 정리를 참고했습니다. 본문의 모든 숫자와 절차는 각 공식 웹사이트에서 가져와 다시 확인했으며, 해당 글과 차이가 있을 경우 공식 정보를 기준으로 합니다."
   },
   "e1c701": {
    "text": "신칸센"
   },
   "e1c702": {
    "text": "하카타에서 두 방향이 있습니다. 본슈 방면의 **산요 신칸센**과 규슈 남부 방면의 **규슈 신칸센**입니다."
   },
   "e1c703": {
    "text": "⚠️ **JR 패스는 유학생이 살 수 없습니다.** 공식 이용 자격은 「단기 체재」로 입국한 외국인 여행자에 한정되며, 유학 재류 자격은 해당되지 않습니다. 사도 교환할 수 없습니다."
   },
   "e1c704": {
    "text": "표 사는 법과 절약"
   },
   "e1c705": {
    "items": [
     {
      "text": "온라인 예약: smartEX는 도카이도·산요·규슈 신칸센 대응. 예약 후 IC 카드로 바로 개찰구를 통과할 수 있습니다"
     },
     {
      "text": "학생 할인: JR 지정교 학생이며 **편도 100km 초과** 구간 운임 20% 할인"
     },
     {
      "text": "단 학생 할인은 「승차권」에만 적용되며 신칸센 특급권은 대상이 아닙니다"
     },
     {
      "text": "플랫 고다마: JR 도카이 투어즈 할인 상품. 고다마호 한정으로 정가보다 저렴"
     }
    ]
   },
   "e1c706": {
    "text": "학생 할인에는 학교가 발급하는 **학할증**이 필요합니다. 소속 학무 창구에서 신청할 수 있습니다(JASSO 규정상 학교가 배포)."
   },
   "e1c707": {
    "items": [
     {
      "text": "학할증(JASSO 공식)",
      "url": "https://www.jasso.go.jp/gakusei/gakuwari/index.html"
     },
     {
      "text": "학생 할인 승차권 구입법(JR 동일본 공식)",
      "url": "https://media.jreast.co.jp/articles/1731"
     },
     {
      "text": "smartEX(공식·온라인 예약)",
      "url": "https://smart-ex.jp/top.php"
     },
     {
      "text": "플랫 고다마(JR 도카이 투어즈 공식)",
      "url": "https://travel.jr-central.co.jp/plan/tokushu/kep"
     },
     {
      "text": "JR 패스 이용 자격(공식)",
      "url": "https://japanrailpass.net/about_jrp/riyou/"
     }
    ]
   },
   "675d9f": {
    "title": "방법 1: 오토쿠 티켓(회수권) · 덴진/하카타만(왕복 994엔)"
   },
   "fb7753": {
    "title": "방법 2: 姪浜 환승 + 지하철 1일권 · 여러 곳/시간 여유(총액 1,180엔)"
   }
  },
  "es": {
   "397485": {
    "text": "Bicicleta: compra, uso y retirada"
   },
   "402355": {
    "text": "Para cada situación hay un plan: ① si solo vas a Tenjin/Hakata → plan 1 (billete multiviaje, 994円 entre ida y vuelta); ② si vas a 2 o más lugares de la ciudad y tienes tiempo → plan 2 (transbordo en Meinohama + billete de un día del metro)."
   },
   "565847": {
    "text": "Cómo usarlo: activa el ticket del sistema siguiendo las instrucciones de la aplicación y, antes de bajar, muéstralo al conductor y baja directamente."
   },
   "d182c2": {
    "text": "Ir del dormitorio a la universidad, moverse por Tenjin y Hakata, comprar una bicicleta u obtener el carné de conducir: **lo recomendable es decidir primero la ruta diaria** y después elegir el plan de billetes. Este artículo compara en paralelo tarifas, abonos de transporte, cupones de descuento y formas de ahorrar."
   },
   "1b9a7f": {
    "text": "En el campus Ito, la bicicleta es un medio de transporte habitual. Desde la estación JR de Kyudai-Gakkentoshi, caminar hasta la universidad tarda unos 45~50 minutos; en bicicleta, unos 20~30 minutos; en moto o en coche, unos 10~15 minutos. También se puede ir en autobús (unos 15~20 minutos), pero las frecuencias son pocas."
   },
   "29a476": {
    "text": "Comprar una bicicleta"
   },
   "fc7dbb": {
    "text": "Una bicicleta nueva suele costar a partir de 17,000 円; en Fukuoka, el precio de mercado de segunda mano ronda los 11,000 円 (valor orientativo). Para una de segunda mano puedes usar Mercari o fijarte en los avisos de traspaso entre estudiantes. Al comprarla hay que hacer el **registro antirrobo (600 円)** y guardar la tarjeta del registro antirrobo (la necesitarás para la baja). Ver 【Compras】."
   },
   "255bf5": {
    "text": "Retirada y traspaso de la bicicleta"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "Una bicicleta que ya no uses se puede vender en una tienda de segunda mano o traspasarla a un amigo."
     },
     {
      "text": "Hay que dar de baja el registro antirrobo: lleva a la comisaría de policía la copia del cliente de la tarjeta de registro antirrobo que recibiste al comprar la bicicleta, junto con un documento de identidad."
     },
     {
      "text": "En Recycle Mart Itoshima (リサイクルマート糸島) atienden en inglés."
     }
    ]
   },
   "ccfc54": {
    "text": "Bicicletas compartidas / alquiler"
   },
   "08e40e": {
    "text": "En el campus hay puntos de estacionamiento de bicicletas compartidas y de bicicletas eléctricas compartidas; su ubicación y la disponibilidad se pueden consultar en el mapa del campus o en la aplicación correspondiente. La universidad también ofrece bicicletas de alquiler: pregunta en la cooperativa de estudiantes (生協)."
   },
   "9ce8b1": {
    "text": "Cómo viajar en autobús: subir y bajar, y tarifas urbanas"
   },
   "96d0f3": {
    "text": "En la mayoría de los autobuses de Japón se sube por la puerta trasera (en el centro del vehículo) y se baja por la puerta delantera (junto al conductor)."
   },
   "c35290": {
    "text": "Al subir y al bajar se pasa la tarjeta IC en casi todos los casos (excepto en las líneas de tarifa plana). Si pagas en efectivo, al subir tienes que coger el «ticket de zona» (整理券) de la máquina emisora situada junto a la puerta: es el comprobante de la parada en la que subiste. Al bajar, introduce el ticket de zona junto con el importe en la caja de monedas."
   },
   "aed18c": {
    "text": "El autobús lleva una máquina de cambio, pero solo acepta billetes de 1000 円 y monedas de 500 円; conviene llevar cambio preparado."
   },
   "5d3027": {
    "text": "Autobuses urbanos de Fukuoka"
   },
   "f264f5": {
    "text": "En el tramo del centro del autobús Nishitetsu (estación de Hakata, Tenjin, frente a la estación de Yakuin, etc.) la tarifa es plana, 150円, y en los tramos generales la tarifa inicial es 210円 (tras el ajuste de tarifas de enero de 2024). Los autobuses y el metro de Fukuoka aceptan tarjetas IC (SUGOCA, nimoca, Hayakaken (はやかん), etc.)."
   },
   "60da92": {
    "text": "Ir a la universidad: líneas, my route y abono de estudiante"
   },
   "de2248": {
    "text": "Para ir al campus Ito de la Universidad de Kyushu hay principalmente estas 3 líneas de autobús:"
   },
   "54f112": {
    "headers": [
     "Ruta",
     "Operador",
     "Tramo principal",
     "Tarifa de ida"
    ],
    "rows": [
     [
      "Línea de la Universidad de Kyushu (línea principal)",
      "Autobús Showa",
      "Estación Kyudai-Gakkentoshi ↔ campus Ito",
      "330円"
     ],
     [
      "Línea de la Universidad de Kyushu (Itoshima)",
      "Autobús Showa",
      "Maehara · frente a la escuela primaria de Suzenji ↔ Ito",
      "200円"
     ],
     [
      "Expreso · servicio directo",
      "Autobús Nishitetsu",
      "Frente a la estación de Hakata · Tenjin ↔ campus Ito",
      "670円～"
     ]
    ]
   },
   "3f31f6": {
    "text": "Desde la estación Kyudai-Gakkentoshi, todas las paradas de autobús del campus (zona este, edificio Orange, Facultad de Ingeniería, Facultad de Agricultura, etc.) tienen **tarifa plana de 330円**. Dentro del campus, el tramo de tarifa plana es de 160円. De la estación Kyudai-Gakkentoshi a la oficina de Ito (伊都営業所), 390円, y en dirección a Tomari-kitaguchi (泊北口) y frente a la aldea internacional (国際村), 410円."
   },
   "9a0cda": {
    "text": "Si tienes problemas para escanear el código QR de aimo con Google, puedes usar la página japonesa de aimo: https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "Opción recomendada: la aplicación my route"
   },
   "790a29": {
    "text": "Puedes descargar la aplicación my route (en iOS hay que cambiar la región a una fuera de Japón). En la aplicación está la línea de la Universidad de Kyushu del autobús Showa (excepto las líneas de la ciudad de Itoshima) y se vende el ticket de viajes ilimitados (乗り放題チケット) de 550円 / 18 horas; se puede pagar con tarjeta de crédito o con PayPay. Es una de las formas más recomendadas para el desplazamiento diario a la universidad."
   },
   "96fc42": {
    "text": "Abono de estudiante (通学定期)"
   },
   "f61466": {
    "headers": [
     "Ruta",
     "Tramo",
     "1 mes",
     "3 meses"
    ],
    "rows": [
     [
      "Línea de la Universidad de Kyushu del autobús Showa",
      "Estación Kyudai-Gakkentoshi ↔ campus Ito",
      "10,000円",
      "28,000円"
     ],
     [
      "Línea de la Universidad de Kyushu del autobús Showa (Itoshima)",
      "Maehara · Suzenji ↔ campus Ito",
      "7,200円",
      "20,520円"
     ],
     [
      "Línea Chikuhi de JR + metro",
      "Kyudai-Gakkentoshi → Tenjin",
      "aprox. 11,680円",
      "—"
     ],
     [
      "Autobús Nishitetsu",
      "Según el tramo",
      "—",
      "—"
     ]
    ]
   },
   "3dd9c3": {
    "items": [
     {
      "text": "Línea de la Universidad de Kyushu del autobús Showa: abono digital para el móvil, exclusivo para estudiantes de la Universidad de Kyushu."
     },
     {
      "text": "Línea de la Universidad de Kyushu del autobús Showa (Itoshima): válido en papel o en el móvil."
     },
     {
      "text": "Línea Chikuhi de JR + metro: consulta en NAVITIME."
     },
     {
      "text": "Autobús Nishitetsu: según el sitio web oficial de Nishitetsu."
     }
    ]
   },
   "967aaa": {
    "text": "Además, dentro del campus hay un servicio de lanzadera gratuito con reserva previa, aimo, que cubre 37 paradas del campus: reserva con el móvil y sube en la parada indicada. Además del servicio a demanda, también hay un servicio de ruta y horario fijos que también requiere reserva; funciona los días laborables del periodo lectivo de 08:00 a 22:00."
   },
   "6ca9ff": {
    "text": "aimo no es una lanzadera que se pueda tomar alzando la mano: es con reserva previa. Cuando hay mucha afluencia, la espera puede ser de diez minutos o más; si tienes prisa por llegar a clase, no cuentes con él."
   },
   "060e79": {
    "text": "Resumen de billetes con descuento"
   },
   "459d9a": {
    "text": "Lo siguiente está sujeto a la información oficial más reciente:"
   },
   "76448a": {
    "items": [
     {
      "text": "Billete de un día del metro: 640円, viajes ilimitados ese día en todas las líneas de metro (línea Kuko (空港線), línea Hakozaki (箱崎線) y línea Nanakuma (七隈線))."
     },
     {
      "text": "Pago sin contacto (タッチ決済): se puede pasar directamente la tarjeta de crédito en las 36 estaciones de las 3 líneas de metro."
     },
     {
      "text": "El mismo día, al llegar a 640円 acumulados, no se cobra más (personas con discapacidad y niños: 320円)."
     }
    ]
   },
   "84fe39": {
    "text": "El tope diario del pago sin contacto solo se calcula de forma conjunta con «el mismo número de tarjeta y el mismo medio». Si por la mañana pasas la tarjeta física y por la tarde usas la misma tarjeta desde la cartera del móvil, cada lado cuenta por separado y el tope no se aplica: para disfrutar del tope, usa un único método todo el día. Además, el tramo de metro llega hasta Meinohama (姪浜); el primer tramo desde la Universidad de Kyushu va por la línea Chikuhi de JR y no cuenta para este tope."
   },
   "695d78": {
    "text": "Otros billetes y descuentos"
   },
   "28e638": {
    "items": [
     {
      "text": "Billete multiviaje del campus Ito: 6,730 円 / 10 billetes (válido 3 meses), se puede comprar en la cooperativa de estudiantes de la Universidad de Kyushu."
     },
     {
      "text": "Ecoru Card (エコルカード) / Wide Ecoru Card (ワイドエコルカード): abono mensual del autobús Nishitetsu; el precio varía según la zona."
     },
     {
      "text": "Abono de estudiante: JR, Nishitetsu y el metro tienen cada uno su abono con descuento para estudiantes; se puede solicitar después de recibir el carné de estudiante."
     }
    ]
   },
   "bf8325": {
    "text": "Ámbito del billete multiviaje: todas las estaciones de metro ↔ estación JR Kyudai-Gakkentoshi ↔ líneas del autobús Showa dentro del campus de la Universidad de Kyushu. Cada billete cuesta 673 円."
   },
   "50ea66": {
    "text": "Atención: los estudiantes no regulares, como los oyentes especiales (特別聴講生) y los estudiantes de investigación (研究生), **no pueden comprar** la Ecoru Card (エコルカード) ni el abono de estudiante (通学定期券)."
   },
   "56c5db": {
    "items": [
     {
      "text": "Billete de un día del metro",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/oneday.php"
     },
     {
      "text": "Billete multiviaje del campus Ito (autobús Showa)",
      "url": "https://showa-bus.jp/tickets/pass_itocampus/"
     },
     {
      "text": "Billete multiviaje del campus Ito (metro)",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/itocampus.php"
     },
     {
      "text": "Ecoru Card (Nishitetsu)",
      "url": "https://www.nishitetsu.jp/bus/ecole/"
     }
    ]
   },
   "5824ef": {
    "text": "· Billete multiviaje mini de enlace (連絡ミニ回数券): cuadernillo de 6 billetes; según la estación de salida cuesta 2,610 / 2,820 / 2,980 / 3,360 円 y se vende en las estaciones de JR Kyushu. El tramo que cubre es distinto del billete multiviaje del campus Ito: antes de comprarlo, comprueba si el tramo que usas habitualmente está incluido."
   },
   "0e3977": {
    "text": "Descuentos del autobús Nishitetsu"
   },
   "9acd34": {
    "text": "· Free pass de 6 horas / 24 horas del autobús Nishitetsu (西鉄バス): permite viajes ilimitados en los autobuses Nishitetsu dentro de la zona gratuita durante el periodo de validez; se compra en la aplicación my route. Solo el trayecto de ida de la Universidad de Kyushu a Tenjin por la línea K cuesta unos 710 円, así que suele compensar si ese día vas a hacer varios viajes por la ciudad."
   },
   "a010db": {
    "text": "Sobre el precio y la zona gratuita del free pass de Nishitetsu: la compañía publica los precios dentro de imágenes, y las cifras que circulan no coinciden entre sí. Antes de comprarlo, confírmalo en la aplicación my route. **Que la zona gratuita cubra o no el tramo de la Universidad de Kyushu afecta más a si merece la pena que el propio precio.**"
   },
   "c1a2f8": {
    "text": "Ir a Tenjin y Hakata: dos planes para ahorrar"
   },
   "70e66b": {
    "text": "La zona más concurrida de Fukuoka es Tenjin-Hakata, pero ir directamente desde la universidad hasta allí cuesta 570円 el trayecto sencillo. La razón es que la zona de Kyudai-Gakkentoshi y Suzenji pertenece a la línea Chikuhi de JR, que conecta directamente con el metro de la ciudad de Fukuoka: al viajar se paga una parte a JR y otra al metro de la ciudad de Fukuoka, y por eso la tarifa es alta."
   },
   "842f3d": {
    "text": "Meinohama (姪浜), del plan 2, es la estación de origen de las líneas Hakozaki (箱崎線) y Kuko (空港線) del metro de la ciudad de Fukuoka; hay muchas frecuencias y el transbordo no supone perder mucho tiempo."
   },
   "00a067": {
    "text": "Detalle de los dos planes"
   },
   "13e40f": {
    "text": "Cuándo usarlo: si ese día solo te mueves por la zona de Tenjin/Hakata. Se usa un billete por trayecto (2 en total); el precio actual es de 994円 (unos 497円 por billete), 73円 más barato por billete que el viaje directo. Se venden en grupos de 6, válidos durante 1 mes y caducan si no se usan: compra según tu plan de viajes."
   },
   "4e6275": {
    "items": [
     {
      "text": "Después de entrar en la estación, busca la zona de máquinas expendedoras junto a la «ventanilla verde» (みどりの窓口)."
     },
     {
      "text": "En la pantalla táctil, pulsa el botón «Otoku Ticket» (オトクチケット)."
     },
     {
      "text": "Elige la estación de salida (Suzenji o Kyudai-Gakkentoshi) y el número de billetes (se compran 6 de una vez; esta vez usa 2)."
     },
     {
      "text": "Mete efectivo o paga con la tarjeta IC y recoge los billetes."
     },
     {
      "text": "Pasa el billete por el torniquete automático para subir; al llegar a Tenjin/Hakata, introdúcelo en el torniquete para salir."
     }
    ]
   },
   "092ecf": {
    "text": "Cuándo usarlo: si ese día vas a 2 o más lugares de la ciudad y no tienes prisa. La clave es bajarse en Meinohama (la estación de origen del metro de la ciudad de Fukuoka) cogiendo solo el JR, y pasar el día con el billete de un día del metro. Meinohama es la estación de origen de las líneas Hakozaki (箱崎線) y Kuko (空港線), con muchas más frecuencias que la estación Kyudai-Gakkentoshi, así que el transbordo apenas añade tiempo."
   },
   "2c1ea4": {
    "text": "Coste total: 270×2 + 640 = 1,180円; si solo vas a un lugar no compensa (viajar directo, 570×2 = 1,140円, es más barato)."
   },
   "3f3ee3": {
    "items": [
     {
      "text": "En la estación de Suzenji o de Kyudai-Gakkentoshi, compra el billete hasta Meinohama (trayecto sencillo: 270円)."
     },
     {
      "text": "Baja en la estación de Meinohama, sal del torniquete y entra en el vestíbulo de la estación."
     },
     {
      "text": "Compra el billete de un día del metro de la ciudad de Fukuoka (640円) en la máquina expendedora de Meinohama."
     },
     {
      "text": "Con el billete de un día puedes usar todas las líneas del metro de la ciudad de Fukuoka; ese día puedes salir y volver a entrar por los torniquetes las veces que quieras."
     },
     {
      "text": "A la vuelta, antes de salir por el torniquete, paga la diferencia del tramo Meinohama → Kyudai-Gakkentoshi en la máquina de ajuste (unos 300 円)."
     },
     {
      "text": "*El billete de un día sigue siendo válido ese día después de salir del torniquete; guárdalo para la próxima vez que vengas a la ciudad de Fukuoka.*"
     }
    ]
   },
   "032240": {
    "headers": [
     "Método",
     "Coste de ida y vuelta"
    ],
    "rows": [
     [
      "Viaje directo de ida y vuelta a Hakata",
      "570×2 = 1,140円"
     ],
     [
      "Meinohama ida y vuelta + billete de un día del metro",
      "Total 1,180 円"
     ]
    ]
   },
   "032cc4": {
    "text": "Conclusión y consejos de uso"
   },
   "2a2b4d": {
    "text": "Conclusión: si solo vas a un lugar, comprar el billete directo es más barato (1,140円); si en un día vas a 2 o más lugares, usar «transbordo en Meinohama + billete de un día del metro» compensa más."
   },
   "1fac9d": {
    "text": "Consejo: si no conoces el funcionamiento de las máquinas expendedoras o del ajuste de tarifa en el torniquete, puedes pedir ayuda directamente al personal de la estación de metro/JR (van con uniforme y placa identificativa); pídeles en chino sencillo o en inglés que te ayuden a comprar el billete, salir del torniquete y ajustar la tarifa."
   },
   "ec7b4d": {
    "text": "Ciclomotor / carné de conducir"
   },
   "50dcb4": {
    "text": "Para canjear el carné de conducir o sacar el de ciclomotor (原付), consulta los enlaces siguientes; para el ciclomotor no hace falta apuntarse a una autoescuela: también se puede hacer el examen directamente tras reservar cita. Los detalles están sujetos a las indicaciones de la policía de la prefectura de Fukuoka."
   },
   "b31729": {
    "items": [
     {
      "text": "Policía de la prefectura de Fukuoka · carné de ciclomotor",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "Zona de prácticas (cerca de Suzenji)",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "Seguridad de los patinetes eléctricos",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "Experiencia yendo juntos al canje del carné: se puede ir primero a Hakata; en la estación de Hakata se cambia a la línea Fukuhoku-Yutaka (福北豊線) de JR hasta Iizuka (飯塚), y desde allí se va caminando."
   },
   "6135a0": {
    "text": "Cambio normativo de 2025: el ciclomotor de nuevo estándar (新基準原付)"
   },
   "187f72": {
    "text": "Tras el endurecimiento de las normas de emisiones, el ciclomotor de clase 1 (原付一種) de menos de 50cc dejó de fabricarse el 2025-10-31; en su lugar llega el «ciclomotor de nuevo estándar» (新基準原付): la cilindrada se amplía hasta 125cc o menos, pero la potencia máxima se limita a 4.0 kW o menos. El régimen rige desde el 2025-04-01 y la nueva norma de emisiones se aplica desde el 2025-11-01."
   },
   "55a01a": {
    "text": "La cilindrada ha aumentado, pero **el tratamiento legal no ha cambiado en absoluto**: se sigue tratando como ciclomotor de clase 1 (原付一種): velocidad máxima legal de 30 km/h, giro a la derecha en dos fases (二段階右折) en los cruces de las vías con tres o más carriles, y prohibido llevar pasajero. Cualquier afirmación del tipo «como es 125cc ya puede ir a 60 y llevar pasajero» es errónea."
   },
   "2553ff": {
    "text": "El examen: solo teórico, pero con curso previo obligatorio"
   },
   "22a10d": {
    "text": "El carné de ciclomotor no tiene examen práctico: solo hay un examen teórico de 30 minutos, y el cuestionario está disponible en japonés, inglés, chino y vietnamita. Lo que de verdad complica no es el examen, sino que antes hay que completar la «formación para ciclomotor» (原付講習): si no la has terminado, aunque apruebes el examen teórico no obtienes el carné ese mismo día."
   },
   "de3307": {
    "headers": [
     "Concepto",
     "Importe"
    ],
    "rows": [
     [
      "Tasa de examen (試験手数料)",
      "1,600 円"
     ],
     [
      "Tasa de expedición del carné",
      "2,350 円"
     ],
     [
      "Total (mínimo)",
      "3,950 円"
     ]
    ]
   },
   "2b03e1": {
    "text": "※ Si lo solicitas por Internet con la tarjeta My Number, el coste anterior baja a 1,550 円."
   },
   "d2037e": {
    "text": "Proceso del examen y horario de recepción"
   },
   "f264aa": {
    "text": "La recepción de solicitudes es solo de 08:30 a 09:00 de la mañana de los días laborables (excepto festivos y del 12/29 al 01/03), y hay 4 centros de examen en la prefectura de Fukuoka. Si la pierdes, tendrás que volver otro día: calcula bien el tiempo de desplazamiento desde Ito (伊都)."
   },
   "e03f4f": {
    "items": [
     {
      "text": "Matriculación: la placa del ciclomotor la expide la oficina del ayuntamiento / del distrito del lugar de residencia (no la oficina de vehículos); la ventanilla del distrito Nishi (西区) es distinta de la de la ciudad de Itoshima (糸島市)."
     },
     {
      "text": "Es obligatorio contratar el seguro de responsabilidad civil obligatoria (自賠責保険); circular sin seguro es ilegal."
     }
    ]
   },
   "3ef442": {
    "items": [
     {
      "text": "Policía de la prefectura de Fukuoka · carné de ciclomotor (原付免許)",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/026_2.html"
     },
     {
      "text": "Policía de la prefectura de Fukuoka · formación para ciclomotor (原付講習)",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "Asociación Japonesa de Fabricantes de Automóviles (日本自動車工業会) · nueva clasificación del ciclomotor de clase 1",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "Taxi: tarifas y cómo pedirlo"
   },
   "4dff94": {
    "text": "Te hará falta cuando pierdas el último tren por la noche o cuando lleves equipaje voluminoso. La tarifa vigente en la zona de Fukuoka se aplica desde el 2026-07-01."
   },
   "adf1b4": {
    "headers": [
     "Tipo de vehículo",
     "Tarifa inicial (dentro de 1.1 km)",
     "Después, cada 100 円"
    ],
    "rows": [
     [
      "Coche estándar",
      "600 円",
      "287 m"
     ],
     [
      "Coche grande",
      "720 円",
      "176 m"
     ],
     [
      "Coche extra grande",
      "780 円",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "Recargo nocturno (深夜割増): de 22:00 a las 05:00 del día siguiente, la tarifa sube un 20 %."
     },
     {
      "text": "La tarifa de recogida (el taxi viene a buscarte) la fija cada empresa; el importe no es uniforme."
     },
     {
      "text": "En las salidas de las estaciones de JR suele haber taxis esperando; en las zonas apartadas hay que pedirlo por teléfono o con una aplicación."
     }
    ]
   },
   "f7c689": {
    "text": "La tarifa que circula por Internet de «inicio 1,064 m por 670 円, después 268 m por 80 円» es la versión anterior y quedó derogada el 2026-07-01. Si una guía muestra esas cifras, es probable que el resto de su contenido se escribiera antes de esa fecha; tenlo en cuenta."
   },
   "5803fa": {
    "text": "Enlaces relacionados"
   },
   "9b2747": {
    "items": [
     {
      "text": "Asociación de Taxis de Fukuoka (福岡市タクシー協会) · tabla de tarifas",
      "url": "https://www.taxi-fukcty.or.jp/charge/"
     }
    ]
   },
   "e612d1": {
    "text": "La selección de algunos temas de este artículo se basa en la recopilación de «新伊都国風土記» (Shin Itokoku Fudoki), de los autores Hato_Tsubame y CantonSimon. Todas las cifras y procedimientos del texto proceden de los sitios web oficiales y se han vuelto a comprobar; en caso de discrepancia con ese documento, prevalece la información oficial."
   },
   "e1c701": {
    "text": "Shinkansen (新幹線)"
   },
   "e1c702": {
    "text": "Desde Hakata salen dos líneas: el **shinkansen de Sanyo (山陽新幹線)**, en dirección a Honshu, y el **shinkansen de Kyushu (九州新幹線)**, hacia el sur de Kyushu."
   },
   "e1c703": {
    "text": "⚠️ **Los estudiantes internacionales no pueden comprar el JR Pass (ジャパン・レール・パス).** Según las normas oficiales, solo se vende a los viajeros extranjeros que entran en Japón con el estatus de «estancia corta» (短期滞在); el estatus de residencia por estudios no entra en esa categoría, y aunque lo compres no podrás canjearlo. La idea que circula por Internet de «poder usar todo el JR de Japón sin límite» no se aplica a nosotros."
   },
   "e1c704": {
    "text": "Comprar billetes y ahorrar"
   },
   "e1c705": {
    "items": [
     {
      "text": "Reserva por Internet: smartEX cubre los shinkansen de Tokaido (東海道), Sanyo (山陽) y Kyushu (九州); después de reservar, puedes entrar en la estación pasando directamente la tarjeta IC."
     },
     {
      "text": "Descuento de estudiante (学割): para estudiantes de los centros designados por JR y con un **trayecto sencillo de más de 100 km**, la tarifa tiene un 20 % de descuento."
     },
     {
      "text": "Ten en cuenta que el descuento de estudiante solo cubre el «billete de tren» (乗車券): el suplemento por el expreso (特急券) del shinkansen no entra en el descuento."
     },
     {
      "text": "Platt Kodama (ぷらっとこだま): un producto con descuento de la agencia de viajes JR Tokai; solo se puede usar en el Kodama (こだま) y es más barato que el precio normal."
     }
    ]
   },
   "e1c706": {
    "text": "El descuento de estudiante requiere el **certificado de estudiante (学割証)** que expide la universidad: basta con solicitarlo en la ventanilla de asuntos académicos correspondiente (la normativa de JASSO establece que lo reparte la universidad)."
   },
   "e1c707": {
    "items": [
     {
      "text": "Certificado de estudiante (学割証) (JASSO, oficial)",
      "url": "https://www.jasso.go.jp/gakusei/gakuwari/index.html"
     },
     {
      "text": "Cómo comprar y usar el billete con descuento de estudiante (JR East, oficial)",
      "url": "https://media.jreast.co.jp/articles/1731"
     },
     {
      "text": "smartEX (oficial · reserva por Internet)",
      "url": "https://smart-ex.jp/top.php"
     },
     {
      "text": "Platt Kodama (ぷらっとこだま) (agencia de viajes JR Tokai, oficial)",
      "url": "https://travel.jr-central.co.jp/plan/tokushu/kep"
     },
     {
      "text": "Requisitos de uso del JR Pass (oficial)",
      "url": "https://japanrailpass.net/about_jrp/riyou/"
     }
    ]
   },
   "675d9f": {
    "title": "Plan 1: Otoku Ticket (billete multiviaje) · solo Tenjin/Hakata (994円 ida y vuelta)"
   },
   "fb7753": {
    "title": "Plan 2: transbordo en Meinohama + pase de un día de metro · varios destinos / con tiempo (1,180円 en total)"
   }
  }
 },
 "guide-airport": {
  "ja": {
   "ap0000": {
    "text": "福岡空港から伊都キャンパスへ、**タクシーを使わずに**行くルートです：空港 → 入国審査 → 手荷物受取 → 無料連絡バス → 地下鉄 → バス。順番どおりに進めば大丈夫で、全体で 1 時間半ほどです。"
   },
   "ap0001": {
    "text": "本文のルートは**2026 年 5 月の実地記録**（同じ道を歩いた学生が区間ごとに撮影した写真と説明）に基づき、駅と乗り方は**九州大学公式サイト**で確認済みです。写真はタップで拡大でき、標識の文字まで読み取れます。"
   },
   "ap0002": {
    "text": "全行程 7 ステップ"
   },
   "ap0004": {
    "text": "**間違えやすいのは一か所だけ**：地下鉄は必ず「筑前前原」または「西唐津」方面に乗ってください。「姪浜」行きに乗ると九大学研都市には行けず、姪浜で乗り換えが必要です。詳しくは第 5 節。"
   },
   "ap0005": {
    "text": "一、飛行機を降りたら：人の流れについていく"
   },
   "ap0006": {
    "text": "降機後は**人の流れについていく**だけです。通常ルートは一本しかありません。下の「到着／Arrivals」の標識が見えたら、矢印の方向へ進みます——到着ゲートによって方向が違うので、記憶ではなく**矢印**を見てください。"
   },
   "ap0008": {
    "text": "**日本語が分からなくても大丈夫です。**空港の標識はほぼ漢字で、やさしい英語も併記されているので、方向を見失うことはありません。"
   },
   "ap0010": {
    "text": "二、入国審査"
   },
   "ap0011": {
    "text": "**出発前にスマホで準備しておくのがおすすめです。**日本の入国・税関申告は Visit Japan Web で事前に登録でき、QR コードを発行できます。到着後に紙の申告書に書くより格段に早く済みます。"
   },
   "ap0014": {
    "text": "列は**外国人の列**に並びます。登録済みの入国 QR コードとパスポートを係員に提示します。現在はほとんどが**電子ゲート**で、QR コード読み取り → パスポート読み取り → 指紋 → 顔写真、の順に進みます。完了後、機械が **A／B／C／D のどの窓口**に行くかを表示し、係員が案内します。"
   },
   "ap0015": {
    "text": "**入国審査エリアは撮影禁止です。**この区間は写真がありません。現場の係員の案内に従って進んでください。"
   },
   "ap0017a": {
    "text": "手荷物受取"
   },
   "ap0018": {
    "text": "「**手荷物受取所／Baggage Claim**」の標識に従って進み、受取ホールに着いたら大型モニターで自分の便の**ターンテーブル番号**を確認し、そこで待ちます。"
   },
   "ap0020a": {
    "text": "税関"
   },
   "ap0021": {
    "text": "荷物を受け取ったら税関へ。**電子申告と紙申告でレーンが分かれています**。案内に従い、自分の申告方法に合ったレーンから出ます。"
   },
   "ap0023": {
    "text": "四、無料連絡バスで国内線へ"
   },
   "ap0024": {
    "text": "到着ロビーを出たら案内に従い、**A2 出口**を探します。"
   },
   "ap0027": {
    "text": "A2 出口の外から**無料連絡バス**で国内線ターミナルへ移動します。ここは徒歩では行けず、必ずバスに乗ります。車内は**中国語のアナウンス**もあるので安心です。"
   },
   "ap0029": {
    "text": "五、地下鉄：「筑前前原」方面を選ぶ"
   },
   "ap0030": {
    "text": "国内線に着いたら**地下鉄の階へ下ります**。Suica などの交通系 IC カードを事前に用意していなくても、**現地で作れます**。作る窓口は左側にあります。"
   },
   "ap0032a": {
    "text": "方向を間違えないこと"
   },
   "ap0033": {
    "text": "そのまま改札へ進みます。ここが要点です：「**筑前前原**」方面か「**西唐津**」方面の電車に乗ってください。この二つだけが**九大学研都市へ直通**します。なお、駅の案内表示に**「筑前前原」と書かれていないこともあります**。ローマ字表記（Chikuzen-Maebaru）と路線図の終点駅名で確認してください。"
   },
   "ap0036": {
    "text": "**乗り間違えたら？**誤って「姪浜」行きに乗ってしまった場合は、終点の**姪浜**で降り、同じホームで次の「筑前前原」方面の電車を待てば九大学研都市に着きます。少し時間がかかるだけです。改札を出て買い直す必要はありません。"
   },
   "ap0037": {
    "text": "六、降車とキャンパス行きバスへの乗り換え"
   },
   "ap0037a": {
    "text": "降車"
   },
   "ap0038": {
    "text": "目的の駅は「**九大学研都市**」（Kyudai-Gakkentoshi）です。福岡空港駅から**直通で約 40 分**（九州大学公式サイトのデータ）。"
   },
   "ap0041a": {
    "text": "バスへ乗り換え"
   },
   "ap0042": {
    "text": "駅を出たら**昭和バス**に乗り換えて伊都キャンパスへ向かいます。バス停は駅のすぐ近くにあり、駅構内の案内に従えば着きます。"
   },
   "ap0042a": {
    "text": "出発前チェックリスト"
   },
   "ap0044": {
    "text": "本文の写真は、実際にこの道を歩いた学生が区間ごとに撮影したものです。ルート自体は九州大学公式サイトで確認済みです。もし歩いてみて本文と違う点（標識の移設、駅の改修など）があれば、ページ下部のフィードバックからお知らせください。"
   },
   "ap0017": {
    "text": "三、手荷物受取と税関"
   },
   "ap0003": {
    "items": [
     {
      "title": "飛行機を降りて人の流れについていく",
      "desc": "道は一本、標識の矢印の方向へ"
     },
     {
      "title": "入国審査",
      "desc": "外国人の列に並び、QR コードとパスポートを提示"
     },
     {
      "title": "手荷物受取",
      "desc": "モニターで自分の便のターンテーブル番号を確認"
     },
     {
      "title": "税関",
      "desc": "電子申告と紙申告でレーンが分かれる"
     },
     {
      "title": "無料連絡バス",
      "desc": "A2 出口から国内線行きに乗る"
     },
     {
      "title": "地下鉄",
      "desc": "「筑前前原」方面なら直通・乗り換えなし"
     },
     {
      "title": "昭和バスに乗り換え",
      "desc": "九大学研都市駅からキャンパスへ"
     }
    ]
   },
   "ap0043": {
    "items": [
     {
      "text": "出発前に Visit Japan Web で入国・税関申告を登録し、QR コードをスクリーンショット保存"
     },
     {
      "text": "国内線から地下鉄に乗る際、方向幕が「筑前前原」か「西唐津」であることを確認"
     },
     {
      "text": "降りる駅名が「九大学研都市」であることを確認（「九大前」など別の駅と間違えない）"
     },
     {
      "text": "荷物が多い場合は、駅から寮までタクシーを使うのも一案"
     }
    ]
   },
   "ap0012": {
    "items": [
     {
      "text": "Visit Japan Web（入国・税関申告）",
      "url": "https://vjw-lp.digital.go.jp/zh-hans/"
     }
    ]
   },
   "ap0007": {
    "alt": "到着ロビー方向の黒い案内標識（到着／Arrivals・手荷物受取所）",
    "caption": "到着ロビー方向の標識：到着／Arrivals、手荷物受取所／Baggage Claim"
   },
   "ap0009": {
    "alt": "入国審査方向へ向かう空港内の通路と吊り下げ標識",
    "caption": "標識に従い入国審査方面へ"
   },
   "ap0013": {
    "alt": "入国審査エリアの列と案内標識",
    "caption": "入国審査エリア"
   },
   "ap0016": {
    "alt": "入国審査後の通路と窓口番号の案内",
    "caption": "審査後は窓口番号の案内に従う"
   },
   "ap0019": {
    "alt": "手荷物受取ホールの案内標識",
    "caption": "手荷物受取ホール"
   },
   "ap0020": {
    "alt": "便ごとのターンテーブル番号を表示するモニター",
    "caption": "モニターで自分の便のターンテーブル番号を確認"
   },
   "ap0022": {
    "alt": "税関のレーン、電子申告と紙申告の分流",
    "caption": "税関：電子と紙でレーンが分かれる"
   },
   "ap0025": {
    "alt": "連絡バス乗り場への案内標識",
    "caption": "ロビーを出たら案内に従う"
   },
   "ap0026": {
    "alt": "A2 出口の標識",
    "caption": "A2 出口を探す"
   },
   "ap0028": {
    "alt": "無料連絡バスと国内線ターミナル方向",
    "caption": "無料連絡バス（国内線行き・中国語アナウンスあり）"
   },
   "ap0031": {
    "alt": "国内線ターミナルから地下鉄階へ下りる通路",
    "caption": "地下鉄の階へ下りる"
   },
   "ap0032": {
    "alt": "地下鉄駅のカード発行窓口と券売機エリア",
    "caption": "交通系 IC カードは左側で作れる"
   },
   "ap0034": {
    "alt": "地下鉄改札付近の路線・方向案内",
    "caption": "そのまま改札へ"
   },
   "ap0035": {
    "alt": "ホームの方向案内（筑前前原方面）",
    "caption": "案内に従い所定のホームへ、「筑前前原」方面を確認"
   },
   "ap0039": {
    "alt": "車内の路線図と到着案内",
    "caption": "車内に路線図とローマ字のアナウンスあり"
   },
   "ap0040": {
    "alt": "ホームの駅名標",
    "caption": "駅名を確認、降り早すぎ・乗り過ごしに注意"
   },
   "ap0041": {
    "alt": "ホームと出口方向",
    "caption": "目的駅で降車"
   }
  },
  "en": {
   "ap0000": {
    "text": "Getting from Fukuoka Airport to Ito Campus **without a taxi**: airport → immigration → baggage → free shuttle → subway → bus. Follow the order and you are fine; the whole trip takes about ninety minutes."
   },
   "ap0001": {
    "text": "The route below is based on a **walkthrough recorded in May 2026** (photos and notes taken stage by stage by a student who walked it), with the stations and boarding rules checked against **Kyushu University's official site**. Tap any photo to enlarge it — the text on the signs is legible."
   },
   "ap0002": {
    "text": "Seven steps in total"
   },
   "ap0004": {
    "text": "**Only one step is easy to get wrong**: on the subway, board a train bound for **Chikuzen-Maebaru** or **Nishi-Karatsu**. A train bound for **Meinohama** will not take you to Kyudai-Gakkentoshi — you would have to change at Meinohama. See section five."
   },
   "ap0005": {
    "text": "1. After landing: follow the crowd"
   },
   "ap0006": {
    "text": "Just **follow the crowd** after disembarking; there is usually only one path. When you see the 「到着／Arrivals」 sign below, go whichever way its arrow points — the direction differs by gate, so read the **arrow**, not your memory."
   },
   "ap0008": {
    "text": "**No Japanese required.** Airport signs are mostly kanji with beginner-level English alongside, so finding your way is no problem."
   },
   "ap0010": {
    "text": "2. Immigration"
   },
   "ap0011": {
    "text": "**Do this on your phone before you fly.** Japan's immigration and customs declaration can be completed in advance on Visit Japan Web, which issues a QR code. That saves a lot of time compared with filling in paper forms after landing."
   },
   "ap0014": {
    "text": "Join the **foreign-passport line**. Show your immigration QR code and passport to the officer. These days it is mostly an **electronic gate**: scan the QR code → read the passport → fingerprint → photo. Afterwards the machine tells you which desk — **A／B／C／D** — to go to, and staff guide you."
   },
   "ap0015": {
    "text": "**Photography is prohibited inside the immigration area.** There are no photos of this stretch; just follow the staff on site."
   },
   "ap0017a": {
    "text": "Baggage claim"
   },
   "ap0018": {
    "text": "Follow the 「**手荷物受取所／Baggage Claim**」 signs. In the hall, check the large screens for your flight's **carousel number** and wait there."
   },
   "ap0020a": {
    "text": "Customs"
   },
   "ap0021": {
    "text": "With your bags, head to customs. **Electronic and paper declarations use different lanes** — follow the signs and exit through the one matching your declaration type."
   },
   "ap0023": {
    "text": "4. Free shuttle to the domestic terminal"
   },
   "ap0024": {
    "text": "Leaving the arrivals hall, follow the guidance and find **Exit A2**."
   },
   "ap0027": {
    "text": "Outside Exit A2, take the **free shuttle** to the domestic terminal. You cannot walk this stretch — the bus is the only way. There are **announcements in Chinese** on board."
   },
   "ap0029": {
    "text": "5. The subway: choose the Chikuzen-Maebaru direction"
   },
   "ap0030": {
    "text": "At the domestic terminal, **go down to the subway level**. If you have not prepared a Suica or other IC card, **you can get one on the spot**; the counter is on the left."
   },
   "ap0032a": {
    "text": "Get the direction right"
   },
   "ap0033": {
    "text": "Walk straight to the gates. This is the crux: board a train bound for 「**筑前前原**」 or 「**西唐津**」 — only those two run **through to Kyudai-Gakkentoshi**. Note that station signage **does not always say 「筑前前原」**; check the romanised name (Chikuzen-Maebaru) and the terminus on the route map."
   },
   "ap0036": {
    "text": "**What if you board the wrong train?** If you end up on a 「姪浜」(Meinohama) train, get off at the terminus **Meinohama** and wait on the same platform for the next Chikuzen-Maebaru-bound train. You will still reach Kyudai-Gakkentoshi — it just takes a little longer. No need to exit and buy another ticket."
   },
   "ap0037": {
    "text": "6. Arriving and transferring to the campus bus"
   },
   "ap0037a": {
    "text": "Your stop"
   },
   "ap0038": {
    "text": "The station you want is 「**九大学研都市**」 (Kyudai-Gakkentoshi). The through service from Fukuoka Airport takes **about 40 minutes** (Kyushu University official data)."
   },
   "ap0041a": {
    "text": "Transfer to the bus"
   },
   "ap0042": {
    "text": "Outside the station, transfer to a **Showa bus** for Ito Campus. The stop is close to the station; in-station signage will lead you there."
   },
   "ap0042a": {
    "text": "Before you leave: checklist"
   },
   "ap0044": {
    "text": "The photos here were taken stage by stage by a student who actually walked this route, and the route itself has been checked against Kyushu University's official site. If you walk it and find something different (a sign moved, a station rebuilt), tell us using the feedback button at the bottom of the page."
   },
   "ap0017": {
    "text": "3. Baggage claim and customs"
   },
   "ap0003": {
    "items": [
     {
      "title": "Land and follow the crowd",
      "desc": "One path only — take the direction the arrow points"
     },
     {
      "title": "Immigration",
      "desc": "Foreign-passport line; show QR code and passport"
     },
     {
      "title": "Baggage claim",
      "desc": "Find your flight's carousel number on the screens"
     },
     {
      "title": "Customs",
      "desc": "Electronic and paper declarations use different lanes"
     },
     {
      "title": "Free shuttle",
      "desc": "From Exit A2, ride to the domestic terminal"
     },
     {
      "title": "Subway",
      "desc": "Chikuzen-Maebaru direction runs through, no change"
     },
     {
      "title": "Showa bus",
      "desc": "From Kyudai-Gakkentoshi station to campus"
     }
    ]
   },
   "ap0043": {
    "items": [
     {
      "text": "Complete immigration and customs on Visit Japan Web before flying; screenshot the QR code"
     },
     {
      "text": "Boarding the subway, confirm the destination reads Chikuzen-Maebaru or Nishi-Karatsu"
     },
     {
      "text": "Confirm your stop is Kyudai-Gakkentoshi — not another station with a similar name"
     },
     {
      "text": "With heavy luggage, a taxi from the station to your dorm is also an option"
     }
    ]
   },
   "ap0012": {
    "items": [
     {
      "text": "Visit Japan Web (immigration & customs declaration)",
      "url": "https://vjw-lp.digital.go.jp/zh-hans/"
     }
    ]
   },
   "ap0007": {
    "alt": "Black overhead sign pointing to arrivals (到着／Arrivals, Baggage Claim)",
    "caption": "Sign for arrivals: 到着／Arrivals, 手荷物受取所／Baggage Claim"
   },
   "ap0009": {
    "alt": "Airport corridor with overhead signage toward immigration",
    "caption": "Follow the signs toward immigration"
   },
   "ap0013": {
    "alt": "Queues and signage in the immigration area",
    "caption": "Immigration area"
   },
   "ap0016": {
    "alt": "Corridor after immigration with desk-number guidance",
    "caption": "After inspection, follow the desk-number signs"
   },
   "ap0019": {
    "alt": "Signage in the baggage claim hall",
    "caption": "Baggage claim hall"
   },
   "ap0020": {
    "alt": "Screens showing each flight's carousel number",
    "caption": "Find your flight's carousel number on the screens"
   },
   "ap0022": {
    "alt": "Customs lanes separating electronic and paper declarations",
    "caption": "Customs: electronic and paper use separate lanes"
   },
   "ap0025": {
    "alt": "Signage toward the shuttle bus stop",
    "caption": "Leaving the hall, follow the guidance"
   },
   "ap0026": {
    "alt": "Exit A2 sign",
    "caption": "Find Exit A2"
   },
   "ap0028": {
    "alt": "Free shuttle bus and direction to the domestic terminal",
    "caption": "Free shuttle (to the domestic terminal; announcements in Chinese)"
   },
   "ap0031": {
    "alt": "Passage descending from the domestic terminal to the subway level",
    "caption": "Go down to the subway level"
   },
   "ap0032": {
    "alt": "IC card counter and ticket machines at the subway station",
    "caption": "Get your IC card at the counter on the left"
   },
   "ap0034": {
    "alt": "Line and direction guidance near the subway gates",
    "caption": "Straight on to the gates"
   },
   "ap0035": {
    "alt": "Platform direction signage pointing to Chikuzen-Maebaru",
    "caption": "Follow the signs to the platform; check for Chikuzen-Maebaru"
   },
   "ap0039": {
    "alt": "Route map and arrival information inside the train",
    "caption": "Route map and romanised announcements on board"
   },
   "ap0040": {
    "alt": "Station name sign on the platform",
    "caption": "Check the station name — don't get off early or ride past"
   },
   "ap0041": {
    "alt": "Platform and exit direction",
    "caption": "Get off at your stop"
   }
  },
  "ko": {
   "ap0000": {
    "text": "후쿠오카 공항에서 이토 캠퍼스까지 **택시를 쓰지 않고** 가는 경로입니다: 공항 → 입국 심사 → 수하물 수취 → 무료 셔틀 → 지하철 → 버스. 순서대로만 가면 되고, 전체 1시간 30분 정도 걸립니다."
   },
   "ap0001": {
    "text": "아래 경로는 **2026년 5월 실지 답사 기록**(같은 길을 걸은 학생이 구간마다 찍은 사진과 설명)을 바탕으로 했고, 역과 승차 방식은 **규슈대학 공식 사이트**로 확인했습니다. 사진을 누르면 확대되며, 표지판 글자까지 읽을 수 있습니다."
   },
   "ap0002": {
    "text": "전체 7단계"
   },
   "ap0004": {
    "text": "**헷갈리기 쉬운 곳은 한 군데뿐**입니다: 지하철은 반드시 「**지쿠젠마에바루(筑前前原)**」 또는 「**니시카라쓰(西唐津)**」 방면에 타세요. 「**메이노하마(姪浜)**」 행에 타면 규다이갓켄토시에 갈 수 없고, 메이노하마에서 갈아타야 합니다. 자세한 내용은 5절."
   },
   "ap0005": {
    "text": "1. 비행기에서 내린 뒤: 인파를 따라가기"
   },
   "ap0006": {
    "text": "내린 뒤에는 **인파를 따라가기만** 하면 됩니다. 보통 길은 하나뿐입니다. 아래 「到着／Arrivals」 표지판이 보이면 화살표가 가리키는 쪽으로 갑니다 — 도착 게이트마다 방향이 다르니 기억이 아니라 **화살표**를 보세요."
   },
   "ap0008": {
    "text": "**일본어를 몰라도 괜찮습니다.** 공항 표지판은 대부분 한자이고 쉬운 영어도 함께 적혀 있어 방향을 잃을 일이 없습니다."
   },
   "ap0010": {
    "text": "2. 입국 심사"
   },
   "ap0011": {
    "text": "**출발 전에 스마트폰으로 준비해 두는 것을 권합니다.** 일본 입국·세관 신고는 Visit Japan Web에서 미리 등록해 QR 코드를 발급받을 수 있습니다. 도착 후 종이 신고서를 쓰는 것보다 훨씬 빠릅니다."
   },
   "ap0014": {
    "text": "줄은 **외국인 줄**에 섭니다. 등록한 입국 QR 코드와 여권을 직원에게 제시합니다. 요즘은 대부분 **전자 게이트**로, QR 코드 스캔 → 여권 판독 → 지문 → 사진 순으로 진행됩니다. 끝나면 기계가 **A／B／C／D 중 어느 창구**로 가야 하는지 알려주고, 직원이 안내합니다."
   },
   "ap0015": {
    "text": "**입국 심사 구역은 촬영 금지입니다.** 이 구간은 사진이 없습니다. 현장 직원의 안내를 따라가세요."
   },
   "ap0017": {
    "text": "3. 수하물 수취와 세관"
   },
   "ap0017a": {
    "text": "수하물 수취"
   },
   "ap0018": {
    "text": "「**手荷物受取所／Baggage Claim**」 표지판을 따라가고, 수취 홀에 도착하면 대형 모니터에서 자기 항공편의 **컨베이어 번호**를 확인해 그곳에서 기다립니다."
   },
   "ap0020a": {
    "text": "세관"
   },
   "ap0021": {
    "text": "짐을 받은 뒤 세관으로 갑니다. **전자 신고와 종이 신고는 레인이 다릅니다.** 안내에 따라 자기 신고 방식에 맞는 레인으로 나옵니다."
   },
   "ap0023": {
    "text": "4. 무료 셔틀로 국내선 이동"
   },
   "ap0024": {
    "text": "도착 로비를 나와 안내를 따라 **A2 출구**를 찾습니다."
   },
   "ap0027": {
    "text": "A2 출구 밖에서 **무료 셔틀**을 타고 국내선 터미널로 갑니다. 이 구간은 걸어갈 수 없고 반드시 버스를 타야 합니다. 차내에 **중국어 안내 방송**이 있습니다."
   },
   "ap0029": {
    "text": "5. 지하철: 「지쿠젠마에바루」 방면을 고르기"
   },
   "ap0030": {
    "text": "국내선에 도착하면 **지하철 층으로 내려갑니다.** 스이카 등 교통 IC 카드를 미리 준비하지 않았어도 **현장에서 만들 수 있습니다.** 발급 창구는 왼쪽에 있습니다."
   },
   "ap0032a": {
    "text": "방향을 틀리지 않기"
   },
   "ap0033": {
    "text": "그대로 개찰구로 갑니다. 여기가 핵심입니다: 「**지쿠젠마에바루**」 방면이나 「**니시카라쓰**」 방면 열차에 타세요. 이 둘만 **규다이갓켄토시까지 직통**입니다. 참고로 역 안내 표지에 **「筑前前原」라고 적혀 있지 않은 경우도 있습니다.** 로마자 표기(Chikuzen-Maebaru)와 노선도의 종점 역명으로 확인하세요."
   },
   "ap0036": {
    "text": "**잘못 탔다면?** 실수로 「메이노하마」 행에 탔다면 종점인 **메이노하마**에서 내려 같은 승강장에서 다음 「지쿠젠마에바루」 방면 열차를 기다리면 규다이갓켄토시에 도착합니다. 시간이 조금 더 걸릴 뿐입니다. 개찰구를 나가 표를 다시 살 필요는 없습니다."
   },
   "ap0037": {
    "text": "6. 하차와 캠퍼스행 버스 환승"
   },
   "ap0037a": {
    "text": "하차"
   },
   "ap0038": {
    "text": "목적역은 「**규다이갓켄토시(九大学研都市)**」입니다. 후쿠오카 공항역에서 **직통 약 40분**(규슈대학 공식 사이트 자료)입니다."
   },
   "ap0041a": {
    "text": "버스로 환승"
   },
   "ap0042": {
    "text": "역을 나와 **쇼와버스**로 갈아타 이토 캠퍼스로 갑니다. 버스 정류장은 역 바로 근처에 있고, 역 안내를 따르면 도착합니다."
   },
   "ap0042a": {
    "text": "출발 전 체크리스트"
   },
   "ap0044": {
    "text": "이 글의 사진은 실제로 이 길을 걸은 학생이 구간마다 촬영한 것입니다. 경로 자체는 규슈대학 공식 사이트로 확인했습니다. 직접 걸어보고 글과 다른 점(표지판 이전, 역 개수 등)이 있으면 페이지 아래 피드백 버튼으로 알려주세요."
   },
   "ap0003": {
    "items": [
     {
      "title": "비행기에서 내려 인파를 따라가기",
      "desc": "길은 하나, 표지판 화살표 방향으로"
     },
     {
      "title": "입국 심사",
      "desc": "외국인 줄에 서서 QR 코드와 여권 제시"
     },
     {
      "title": "수하물 수취",
      "desc": "모니터에서 자기 항편 컨베이어 번호 확인"
     },
     {
      "title": "세관",
      "desc": "전자 신고와 종이 신고는 레인이 다름"
     },
     {
      "title": "무료 셔틀",
      "desc": "A2 출구에서 국내선행 승차"
     },
     {
      "title": "지하철",
      "desc": "지쿠젠마에바루 방면이면 직통·환승 없음"
     },
     {
      "title": "쇼와버스 환승",
      "desc": "규다이갓켄토시역에서 캠퍼스로"
     }
    ]
   },
   "ap0043": {
    "items": [
     {
      "text": "출발 전 Visit Japan Web에서 입국·세관 신고를 등록하고 QR 코드를 캡처해 두기"
     },
     {
      "text": "국내선에서 지하철 탑승 시 행선지가 지쿠젠마에바루 또는 니시카라쓰인지 확인"
     },
     {
      "text": "내릴 역명이 「규다이갓켄토시」인지 확인 (비슷한 다른 역명과 혼동 주의)"
     },
     {
      "text": "짐이 많으면 역에서 기숙사까지 택시를 쓰는 것도 방법"
     }
    ]
   },
   "ap0012": {
    "items": [
     {
      "text": "Visit Japan Web (입국·세관 신고)",
      "url": "https://vjw-lp.digital.go.jp/zh-hans/"
     }
    ]
   },
   "ap0007": {
    "alt": "도착 로비 방향 검은 안내 표지판(도착／Arrivals, 수하물 수취소)",
    "caption": "도착 로비 방향 표지판: 到着／Arrivals, 手荷物受取所／Baggage Claim"
   },
   "ap0009": {
    "alt": "입국 심사 방향으로 향하는 공항 내 통로와 매다는 표지판",
    "caption": "표지판을 따라 입국 심사 방향으로"
   },
   "ap0013": {
    "alt": "입국 심사 구역의 줄과 안내 표지판",
    "caption": "입국 심사 구역"
   },
   "ap0016": {
    "alt": "입국 심사 후 통로와 창구 번호 안내",
    "caption": "심사 후에는 창구 번호 안내를 따름"
   },
   "ap0019": {
    "alt": "수하물 수취 홀의 안내 표지판",
    "caption": "수하물 수취 홀"
   },
   "ap0020": {
    "alt": "항공편별 컨베이어 번호를 표시하는 모니터",
    "caption": "모니터에서 자기 항공편 컨베이어 번호 확인"
   },
   "ap0022": {
    "alt": "세관 레인, 전자 신고와 종이 신고 분리",
    "caption": "세관: 전자와 종이 레인이 다름"
   },
   "ap0025": {
    "alt": "셔틀버스 승차장으로 가는 안내 표지판",
    "caption": "로비를 나와 안내를 따라감"
   },
   "ap0026": {
    "alt": "A2 출구 표지판",
    "caption": "A2 출구 찾기"
   },
   "ap0028": {
    "alt": "무료 셔틀버스와 국내선 터미널 방향",
    "caption": "무료 셔틀(국내선행, 중국어 안내 있음)"
   },
   "ap0031": {
    "alt": "국내선 터미널에서 지하철 층으로 내려가는 통로",
    "caption": "지하철 층으로 내려가기"
   },
   "ap0032": {
    "alt": "지하철역 카드 발급 창구와 발매기 구역",
    "caption": "교통 IC 카드는 왼쪽에서 발급"
   },
   "ap0034": {
    "alt": "지하철 개찰구 부근 노선·방향 안내",
    "caption": "그대로 개찰구로"
   },
   "ap0035": {
    "alt": "승강장 방향 안내(지쿠젠마에바루 방면)",
    "caption": "안내를 따라 지정 승강장으로, 지쿠젠마에바루 방면 확인"
   },
   "ap0039": {
    "alt": "차내 노선도와 도착 안내",
    "caption": "차내에 노선도와 로마자 안내 방송 있음"
   },
   "ap0040": {
    "alt": "승강장 역명 표지",
    "caption": "역명 확인, 너무 일찍 내리거나 지나치지 않기"
   },
   "ap0041": {
    "alt": "승강장과 출구 방향",
    "caption": "목적역에서 하차"
   }
  },
  "es": {
   "ap0000": {
    "text": "La primera vez que vas del aeropuerto de Fukuoka al campus Ito, esta ruta **no requiere taxi** en ningún tramo: aeropuerto → control de inmigración → recogida de equipaje → autobús lanzadera gratuito → metro → autobús urbano. Solo tienes que seguir el orden, y el trayecto completo dura alrededor de hora y media."
   },
   "ap0001": {
    "text": "La ruta de este artículo proviene de un **registro fotográfico de mayo de 2026** (las fotos y notas que un estudiante tomó tramo por tramo mientras aprendía el recorrido), y tanto las estaciones como la forma de viajar se han verificado con la **página oficial de la Universidad de Kyushu**. Todas las fotos de campo se pueden abrir y ampliar, y el texto de los carteles se lee con claridad."
   },
   "ap0002": {
    "text": "Siete pasos en total"
   },
   "ap0003": {
    "items": [
     {
      "title": "Bajas del avión y sigues a la multitud",
      "desc": "Solo hay un camino: sigue la dirección de las flechas de los carteles"
     },
     {
      "title": "Control de inmigración",
      "desc": "Haz cola en el carril para extranjeros y entrega el código QR de entrada y el pasaporte"
     },
     {
      "title": "Recogida de equipaje",
      "desc": "Consulta la pantalla para encontrar el número de cinta de tu vuelo"
     },
     {
      "title": "Control de aduanas",
      "desc": "La declaración electrónica y la declaración en papel usan carriles distintos"
     },
     {
      "title": "Autobús lanzadera gratuito",
      "desc": "Ve a la salida A2 y toma el autobús que va a la terminal nacional"
     },
     {
      "title": "Metro",
      "desc": "Fíjate en la dirección «筑前前原»; el tren va directo, sin transbordo"
     },
     {
      "title": "Transbordo al autobús Showa",
      "desc": "En la estación Kyudai-Gakkentoshi, al salir de la estación toma el autobús hasta el campus"
     }
    ]
   },
   "ap0004": {
    "text": "**En todo el trayecto solo hay un punto donde es fácil equivocarse de tren**: en el metro debes subir al tren con dirección «筑前前原» o «西唐津». Si subes al tren con dirección «姪浜», no llegarás a Kyudai-Gakkentoshi y tendrás que hacer transbordo en Meinohama. Consulta la sección cinco."
   },
   "ap0005": {
    "text": "1. Después de bajar del avión: sigue a la multitud"
   },
   "ap0006": {
    "text": "Al bajar del avión basta con **seguir a la multitud**; normalmente solo hay un camino. Cuando veas el cartel «到着／Arrivals» que aparece abajo, ve hacia donde apunten las flechas del cartel: según la puerta de embarque por la que salgas la dirección puede ser distinta, así que guíate por las flechas y no por la memoria."
   },
   "ap0008": {
    "text": "**No pasa nada si no entiendes japonés.** Los carteles del aeropuerto usan en su mayoría kanji y también hay inglés básico, así que no tendrás problemas para orientarte."
   },
   "ap0010": {
    "text": "2. Control de inmigración"
   },
   "ap0011": {
    "text": "**Conviene rellenarlo en el móvil antes de salir.** La entrada y la declaración de aduanas de Japón se pueden completar por adelantado en Visiting Japan Web, que genera un código QR; al llegar solo tienes que escanearlo, y es mucho más rápido que rellenar el formulario en papel en el avión."
   },
   "ap0012": {
    "items": [
     {
      "text": "Visit Japan Web (entrada y declaración de aduanas)",
      "url": "https://vjw-lp.digital.go.jp/zh-hans/"
     }
    ]
   },
   "ap0014": {
    "text": "En la cola usa el **carril para extranjeros**. Entrega el código QR de entrada ya rellenado y el pasaporte al personal para que lo verifiquen. Hoy en día, en la mayoría de los casos se usa una **puerta automática**: escanear el código de entrada → leer el pasaporte → registrar las huellas dactilares → tomar la foto; al terminar, la máquina te indica a qué ventanilla A/B/C/D debes ir, y en el lugar hay personal que te orienta."
   },
   "ap0015": {
    "text": "**Está prohibido hacer fotos dentro de la zona de control de inmigración.** En este tramo no hay fotos que consultar; basta con seguir las indicaciones del personal."
   },
   "ap0017": {
    "text": "3. Recogida de equipaje y control de aduanas"
   },
   "ap0017a": {
    "text": "Recogida de equipaje"
   },
   "ap0018": {
    "text": "Sigue los carteles de «**手荷物受取所／Baggage Claim**»; al llegar a la sala de recogida de equipaje, mira la pantalla grande, busca el **número de cinta** correspondiente a tu vuelo y espera allí tu equipaje."
   },
   "ap0020a": {
    "text": "Control de aduanas"
   },
   "ap0021": {
    "text": "Con el equipaje en mano, pasa por la aduana. **La declaración electrónica y la declaración en papel tienen carriles distintos**; en el lugar hay indicaciones, así que elige la salida correspondiente a tu tipo de declaración."
   },
   "ap0023": {
    "text": "4. Autobús lanzadera gratuito a la terminal nacional"
   },
   "ap0024": {
    "text": "Al salir de la sala de llegadas sigue las indicaciones y busca la **salida A2**."
   },
   "ap0027": {
    "text": "Fuera de la salida A2 toma el **autobús lanzadera gratuito** hasta la terminal de vuelos nacionales. Este tramo no se puede hacer a pie: hay que tomar el autobús. En el autobús **hay anuncios en chino**, así que no te preocupes por no entenderlos."
   },
   "ap0029": {
    "text": "5. Metro: fíjate en la dirección «筑前前原»"
   },
   "ap0030": {
    "text": "Al llegar a la terminal nacional, **baja al piso del metro**. Si no has tramitado antes una tarjeta IC de transporte como Suica, no hay problema: **puedes hacerlo allí mismo**, y la ventanilla para tramitarla está a la izquierda."
   },
   "ap0032a": {
    "text": "Fíjate bien en la dirección para no subir al tren equivocado"
   },
   "ap0033": {
    "text": "Camina recto hasta el torno de acceso. La clave está en este paso: hay que tomar el tren con dirección «筑前前原» o «西唐津», pues solo estos dos van **directos a Kyudai-Gakkentoshi**. Ten en cuenta que en los carteles de la estación **no siempre aparece escrito «筑前前原»**: guíate por el romaji (Chikuzen-Maebaru) y por el nombre de la estación terminal en el mapa de líneas."
   },
   "ap0036": {
    "text": "**¿Y si te equivocas de tren?** Si por descuido subes al tren con dirección «姪浜», baja en la estación terminal, **Meinohama**, y espera en el mismo andén el siguiente tren con dirección «筑前前原»: también llega a Kyudai-Gakkentoshi, solo que tardarás un poco más. No hace falta salir de la estación ni comprar otro billete."
   },
   "ap0037": {
    "text": "6. Llegada a la estación y transbordo al autobús"
   },
   "ap0037a": {
    "text": "Llegada a la estación"
   },
   "ap0038": {
    "text": "La estación de destino es «**九大学研都市**» (Kyudai-Gakkentoshi). Desde la estación del aeropuerto de Fukuoka, el trayecto directo hasta aquí dura **unos 40 minutos** (datos de la página oficial de la Universidad de Kyushu)."
   },
   "ap0041a": {
    "text": "Transbordo al autobús hacia el campus"
   },
   "ap0042": {
    "text": "Al salir de la estación, haz transbordo al **autobús Showa** para ir al campus Ito. La parada de autobús está cerca de la estación; basta con seguir las indicaciones dentro de la estación."
   },
   "ap0042a": {
    "text": "Lista de comprobación antes de salir"
   },
   "ap0044": {
    "text": "Las fotos de este artículo provienen del registro que un estudiante hizo tramo por tramo al recorrer esta ruta sobre el terreno, y la ruta en sí se ha verificado con la página oficial de la Universidad de Kyushu. Si al recorrerla encuentras algún punto que no coincide con este artículo (carteles que han cambiado de sitio, obras en la estación, etc.), avísanos con el botón de comentarios al final de la página."
   },
   "ap0007": {
    "alt": "Cartel negro en dirección a la sala de llegadas, con 到着 / Arrivals y 手荷物受取所",
    "caption": "Señal hacia la sala de llegadas: 到着 / Arrivals, 手荷物受取所 / Baggage Claim"
   },
   "ap0009": {
    "alt": "Pasillo y carteles suspendidos dentro del aeropuerto hacia el control de inmigración",
    "caption": "Sigue las señales hacia el control de inmigración"
   },
   "ap0013": {
    "alt": "Zona de control de inmigración, con colas y señales",
    "caption": "Zona de control de inmigración"
   },
   "ap0016": {
    "alt": "Pasillo tras el control de inmigración, con la numeración de ventanillas",
    "caption": "Tras el control, sigue la numeración de ventanillas"
   },
   "ap0019": {
    "alt": "Señal de la sala de recogida de equipajes",
    "caption": "Sala de recogida de equipajes"
   },
   "ap0020": {
    "alt": "Pantalla electrónica con la cinta de equipajes de cada vuelo",
    "caption": "Busca la cinta de tu vuelo en la pantalla grande"
   },
   "ap0022": {
    "alt": "Canales de declaración en aduana: declaración electrónica y en papel",
    "caption": "Declaración en aduana: los canales electrónico y en papel son distintos"
   },
   "ap0025": {
    "alt": "Señal que guía hacia la parada del autobús lanzadera",
    "caption": "Al salir de la sala, sigue las indicaciones"
   },
   "ap0026": {
    "alt": "Señal de la salida A2",
    "caption": "Localiza la salida A2"
   },
   "ap0028": {
    "alt": "Autobús lanzadera gratuito, dirección a la terminal nacional",
    "caption": "Autobús lanzadera gratuito (hacia la terminal nacional, con anuncios en varios idiomas)"
   },
   "ap0031": {
    "alt": "Pasillo descendente de la terminal nacional al nivel del metro",
    "caption": "Baja al nivel del metro"
   },
   "ap0032": {
    "alt": "Ventanilla de tarjetas y zona de máquinas expendedoras en la estación de metro",
    "caption": "A la izquierda está la ventanilla para la tarjeta de transporte"
   },
   "ap0034": {
    "alt": "Señales de línea y dirección junto a los tornos del metro",
    "caption": "Continúa recto hasta los tornos"
   },
   "ap0035": {
    "alt": "Señales de dirección en el andén, hacia Chikuzen-Maebaru",
    "caption": "Sigue las indicaciones hasta el andén correcto y busca la dirección «Chikuzen-Maebaru»"
   },
   "ap0039": {
    "alt": "Mapa de líneas e información de paradas dentro del vagón",
    "caption": "En el vagón hay mapas de líneas y anuncios de parada con transcripción latina"
   },
   "ap0040": {
    "alt": "Señal con el nombre de la estación en el andén",
    "caption": "Comprueba el nombre de la estación: no te bajes antes ni te pases"
   },
   "ap0041": {
    "alt": "Andén y dirección de salida",
    "caption": "Bájate al llegar a tu estación"
   },
   "ap0043": {
    "items": [
     {
      "text": "Antes de salir, rellena la entrada y la declaración de aduana en Visit Japan Web y guarda una captura del código QR"
     },
     {
      "text": "Al cambiar al metro en la terminal nacional, comprueba que el cartel de dirección indique «Chikuzen-Maebaru» o «Nishi-Karatsu»"
     },
     {
      "text": "Confirma que tu estación es «Kyudai-Gakkentoshi» y no otra como «Kyudai-mae»"
     },
     {
      "text": "Si llevas mucho equipaje, puedes tomar un taxi de la estación al dormitorio; está dentro de la tarifa mínima"
     }
    ]
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
    "text": "大学アカウントの落とし穴が 2 つ：SSO-KID の有効化には**大学のメールアドレス以外は使えません**。学内 Wi-Fi のアカウントは SSO-KID@kitenet で、パスワードは SSO-KID を有効化したときに設定したものです。参照【在留手続き】"
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
      "text": "急な体調不良で、救急車を呼ぶべきか判断できないとき —— #7119（短縮番号がつながらなければ 092-471-0099）"
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
    "text": "Two traps with the university account: activating your SSO-KID **cannot be done with any address other than your university email**. The campus Wi-Fi username is SSO-KID@kitenet, and the password is the one you set when you activated the SSO-KID. See【Residence Procedures】"
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
      "text": "Sudden illness and you are not sure whether to call an ambulance — #7119 (if the short number does not connect, dial 092-471-0099)"
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
    "text": "대학 계정의 함정이 두 가지: SSO-KID 활성화에는 **대학 메일 이외의 주소는 쓸 수 없습니다**. 교내 Wi-Fi 계정은 SSO-KID@kitenet이고, 비밀번호는 SSO-KID를 활성화할 때 설정한 그것입니다. 참조【체류 수속】"
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
      "text": "갑작스러운 몸 상태 악화로 구급차를 불러야 할지 판단이 서지 않을 때 —— #7119(단축번호가 안 되면 092-471-0099)"
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
  },
  "es": {
   "125163": {
    "text": "Antes de partir: 3 artículos difíciles de conseguir después de llegar a Japón"
   },
   "762418": {
    "headers": [
     "Asunto",
     "Plazo",
     "Qué ocurre si se incumple"
    ],
    "rows": [
     [
      "COE",
      "Entrar en Japón dentro de 3 meses tras la emisión",
      "Se anula, hay que volver a solicitarlo"
     ],
     [
      "Mudanza de vivienda（incluida dentro de la misma ciudad）",
      "Declarar en la oficina del distrito de la nueva dirección en 14 días",
      "——"
     ],
     [
      "Renovación de la tarjeta de residencia",
      "Se puede hacer desde 3 meses antes de que expire el periodo de residencia",
      "Si vence, es estancia ilegal"
     ],
     [
      "Pago único de retiro de la pensión",
      "Presentar dentro de 2 años después de salir de Japón",
      "Si pasa el plazo, no se puede solicitar"
     ]
    ]
   },
   "7dd5df": {
    "text": "Durante el primer mes tras la llegada hay que hacer una docena de trámites, y tienen un orden: algunos solo se pueden completar después de haber hecho otros. Este artículo los ordena en una sola línea. **Es un índice, no un sustituto**: los documentos concretos, las direcciones y los importes se rigen por el contenido de cada sección."
   },
   "2c7db0": {
    "text": "Para abrir una cuenta bancaria es **obligatorio** usar un sello (hanko) de material común; los shachihata（シャチハタ, sello de tinta automática）no se aceptan en ningún caso. Sin sello no se puede abrir la cuenta, y el alquiler, la matrícula y la beca van por cuenta bancaria. Si no te da tiempo de grabar el sello en tu país, en los Don Quijote（ドンキホーテ）de Japón hay máquinas de grabado automático, desde unos 500 円. Véase 【Preparativos de llegada】"
   },
   "4c0436": {
    "text": "El COE tiene una validez de **3 meses**: hay que completar la solicitud de visado y entrar en Japón dentro del plazo. Los ámbitos sensibles de ciencia e ingeniería（IA, espacio, energía nuclear）pueden ser objeto de una revisión adicional y el proceso se alarga; si de verdad no llegas al inicio del curso, contacta cuanto antes con el personal docente y con el alojamiento para negociar un retraso. Véase 【Preparativos de llegada】"
   },
   "9da430": {
    "text": "La tarjeta SIM de datos temporal es solo un puente de una semana aproximadamente: al llegar necesitas internet para navegar, comunicarte y hacer trámites, y la SIM local japonesa solo se puede contratar bien después de completar el registro de residencia. Véase 【Móvil e internet】"
   },
   "7404c3": {
    "text": "El día de la llegada: 2 trámites que se pueden hacer en el aeropuerto"
   },
   "eba78f": {
    "items": [
     {
      "title": "Recoger la tarjeta de residencia",
      "desc": "El aeropuerto de Fukuoka es un aeropuerto designado para la emisión de la tarjeta: te la entregan en el momento tras pasar el control. En ese momento el campo de dirección está vacío; después hay que registrarla en la oficina del distrito."
     },
     {
      "title": "Solicitar el permiso de actividad fuera del estatus",
      "desc": "Si piensas trabajar a tiempo parcial, hazlo aquí de una vez: se puede solicitar en el aeropuerto al entrar en Japón, y si lo pierdes tendrás que ir aparte a la Agencia de Servicios de Inmigración."
     }
    ]
   },
   "6bb153": {
    "text": "Trabajar sin haber obtenido el permiso de actividad fuera del estatus es ilegal y puede afectar al visado. Durante el periodo de clases el límite es de **28 horas** semanales; en las vacaciones largas, 8 horas al día y 40 horas por semana. Véase 【Trabajo a tiempo parcial】"
   },
   "6d60e7": {
    "text": "Si entras por un **aeropuerto no designado**（aeropuertos regionales como Naha, Kagoshima, Shizuoka）, el aeropuerto solo emite un «aviso de entrega prevista de la tarjeta de residencia»; la tarjeta de residencia se enviará por correo a la dirección registrada 1〜2 semanas después de completar el registro de residencia. Durante ese periodo no se puede hacer ningún trámite que requiera la tarjeta de residencia. Entrar por Fukuoka no tiene este problema. Véase 【Preparativos de llegada】"
   },
   "0dcd62": {
    "text": "Pasar el control suele tardar 20~30 minutos, y más cuando llegan muchos vuelos el mismo día; si tienes que alcanzar el autobús de enlace, prevé tiempo. El autobús de enlace de la universidad sale de las terminales internacional y nacional del aeropuerto de Fukuoka, **por orden de llegada y sin reserva**; las fechas y los horarios cambian cada semestre, según el aviso de la universidad. Véase 【Preparativos de llegada】"
   },
   "ca70c6": {
    "text": "Primera semana: registro de residencia（requisito previo de los demás trámites）"
   },
   "aea806": {
    "text": "Banco, móvil, seguro, pensión: **casi todos los trámites posteriores exigen que la dirección ya esté registrada en el reverso de la tarjeta de residencia**. Por eso va lo primero, y ocupa uno o dos días: entregas la tarjeta de residencia en el momento y la recuperas al día siguiente."
   },
   "eb553f": {
    "items": [
     {
      "title": "Registro de residencia（住民登録）",
      "desc": "Ve tú mismo a Saitopia（さいとぴあ）o encárgaselo a la universidad."
     },
     {
      "title": "Recoger la tarjeta de residencia",
      "desc": "Después de que la dirección quede impresa en el reverso, hay que entregarla de nuevo en la oficina de asuntos estudiantiles de cada facultad para otro registro."
     },
     {
      "title": "Contratar la tarjeta SIM",
      "desc": ""
     },
     {
      "title": "Abrir la cuenta bancaria",
      "desc": ""
     },
     {
      "title": "Seguro nacional de salud + pensión nacional",
      "desc": "Se pueden tramitar a la vez que el registro de residencia."
     }
    ]
   },
   "7a8ea2": {
    "text": "Saitopia（subsucursal del oeste, 西部出張所）está a unos 1 minuto a pie de la estación JR «Kyudai-Gakkentoshi». Atención **días laborables 8:45~17:15**, cerrada los fines de semana y festivos. Las ventanillas incluyen la sección de ciudadanía（市民係）y la sección de seguro y pensión（保険年金係）; normalmente en **1~1.5 horas se completan de una vez el registro de residencia, la pensión y el seguro de salud**, y el personal puede atender en inglés. Véase 【Trámites de residencia】"
   },
   "ae2598": {
    "text": "La gestión por la universidad solo cubre el registro de residencia: la universidad guarda temporalmente la tarjeta de residencia unos 3 días hábiles; la pensión y el seguro de salud todavía tienes que hacerlos tú. Ambas opciones valen: si eliges la gestión por la universidad, luego puedes completar tú mismo el resto de trámites sin problema. Véase 【Trámites de residencia】"
   },
   "563ad8": {
    "text": "La orientación bancaria es una **actividad aparte** y se reserva por separado de la orientación de ingreso; hay que confirmar antes de venir a Japón si te has inscrito. Si la pierdes, normalmente solo queda ir tú mismo a la ventanilla, que lleva bastante tiempo. Además, las ventanillas de los bancos japoneses suelen atender solo de **10:00~15:00**; después de las 15:00 no se puede hacer nada salvo usar el cajero automático. Véase 【Banco y transferencias】"
   },
   "41022a": {
    "text": "Dependencias entre trámites"
   },
   "5adfc3": {
    "headers": [
     "Trámite",
     "Requisito previo",
     "Dónde se hace"
    ],
    "rows": [
     [
      "Registro de residencia",
      "Tarjeta de residencia",
      "Saitopia / oficina del distrito"
     ],
     [
      "Tarjeta SIM",
      "Tarjeta de residencia con dirección registrada",
      "En línea o en tienda"
     ],
     [
      "Abrir cuenta bancaria",
      "Tarjeta de residencia, pasaporte, sello (hanko) y carné de estudiante",
      "Ventanilla del banco / sesión informativa"
     ],
     [
      "Seguro nacional de salud",
      "Registro de residencia",
      "Oficina del distrito（puede hacerse a la vez que el registro de residencia）"
     ],
     [
      "Exención de pago para estudiantes",
      "Carné de estudiante",
      "Ventanilla de pensiones de la oficina del distrito"
     ],
     [
      "マイナンバーカード",
      "Registro de residencia",
      "Oficina del distrito"
     ],
     [
      "Recibir transferencias del extranjero",
      "マイナンバー",
      "Banco"
     ],
     [
      "Trabajo a tiempo parcial",
      "Permiso de actividad fuera del estatus",
      "Aeropuerto o Agencia de Servicios de Inmigración"
     ]
    ]
   },
   "96276e": {
    "text": "Si al abrir la cuenta todavía no tienes número de móvil propio, en el campo del teléfono puedes poner primero el número del Supporter o del Centro de Apoyo（サポートセンター）, y cambiarlo después de tener el tuyo. Para abrir la cuenta también hay que llevar algo de efectivo para el depósito inicial. Véase 【Banco y transferencias】"
   },
   "dcdc27": {
    "text": "Primer mes: los 3 trámites que más se pasan por alto"
   },
   "1b0c01": {
    "text": "El paso de la pensión **se olvida todos los años**. El proceso completo es: registro de residencia → tramitar por primera vez en la oficina del distrito la «exención por ingresos por debajo del umbral» → recibir el carné de estudiante → **volver a la oficina del distrito** para cambiar a la exención de pago para estudiantes. Si te olvidas de cambiar, luego recibirás la factura de la pensión. Ten en cuenta que el carné de estudiante no se entrega el mismo día; el tiempo de emisión varía según la facultad. Véase 【Trámites de residencia】"
   },
   "ae843e": {
    "text": "El ESP（servicio de apoyo de emergencia para estudiantes internacionales）es de afiliación obligatoria para los estudiantes internacionales de la Universidad de Kyushu; la cuota anual es de unos 1,650 円, e incluye interpretación telefónica a tres bandas al ir al médico, información sobre instituciones médicas y contacto con la familia en emergencias. **No es un seguro**: es distinto del seguro nacional de salud, y hay que contratar los dos. Véase 【Salud y seguros】"
   },
   "bca906": {
    "text": "Plazos que anotar en el calendario"
   },
   "b9105b": {
    "text": "No renovar a tiempo el estatus de residencia es «estancia ilegal», con consecuencias por niveles: en lo penal se puede imponer **prisión de hasta 3 años o multa de hasta 300 万円**; además conlleva la denegación de reingreso: 1 año para quien se entrega y sale voluntariamente, 5 años para quien es deportado por la fuerza y 10 años para los reincidentes. Véase 【Trámites de residencia】"
   },
   "973bb1": {
    "text": "Después de instalarse"
   },
   "16e6d0": {
    "text": "El dormitorio ya viene con cama, mesa y silla, estantería, nevera y aire acondicionado; **no se proporcionan** utensilios de cocina, hervidor, vajilla, toallas ni artículos de aseo, y solo se incluye 1 rollo de papel higiénico. El futón se puede alquilar, pero las opiniones dicen que la calidad es regular; se recomienda traer tu propia ropa de cama de contacto（funda de edredón, funda de almohada）, que además te servirá después de salir del dormitorio. Véase 【Preparativos de llegada】"
   },
   "38bab8": {
    "text": "En el campus Ito la vida diaria depende de la bicicleta: desde la estación JR Kyudai-Gakkentoshi se tarda unos 45~50 minutos a pie hasta la universidad, y 20~30 minutos en bici. Al comprar la bicicleta hay que hacer el **registro antirrobo（600 円）**; guarda bien la tarjeta del registro, la necesitarás para la baja. Véase 【Transporte】"
   },
   "3897a8": {
    "text": "En la ciudad de Fukuoka la basura se recoge por tipos de forma periódica, y **es obligatorio usar las bolsas designadas**（se venden en tiendas de conveniencia y supermercados, con impresión distinta según el tipo）. La basura combustible se recoge 2 veces por semana y el resto 1 vez al mes, casi siempre de noche; normalmente se saca entre la puesta de sol y las 24:00 del día anterior al de la recogida. La web oficial de la ciudad tiene un buscador de clasificación en chino: introduces el nombre del objeto y te dice cómo clasificarlo. Véase 【Consejos de vida diaria】"
   },
   "36cd13": {
    "text": "Dos trampas con las cuentas de la universidad: para activar SSO-KID **no se puede usar un correo distinto del correo de la universidad**; la cuenta del WiFi del campus es SSO-KID@kitenet, y la contraseña es la que pusiste al activar SSO-KID. Véase 【Trámites de residencia】"
   },
   "082061": {
    "text": "Teléfonos de emergencia"
   },
   "b01952": {
    "items": [
     {
      "text": "Delitos o accidentes, si necesitas a la policía — 110"
     },
     {
      "text": "Incendio, o si necesitas una ambulancia — 119"
     },
     {
      "text": "Enfermedad súbita o duda de si llamar a la ambulancia — #7119（si el número corto no funciona, marca 092-471-0099）"
     },
     {
      "text": "Problemas de idioma al ir al médico — 092-286-9595（24 horas, 365 días, unos 19 idiomas, traducción telefónica gratuita）"
     },
     {
      "text": "Si necesitas asistencia consular — Línea de emergencia de protección consular del Ministerio de Asuntos Exteriores +86-10-12308（24 horas）"
     },
     {
      "text": "Dificultades de la vida diaria y quieres consultar en chino — Consulta integral para extranjeros de la ciudad de Fukuoka（días laborables 8:45~18:00）"
     }
    ]
   },
   "9b980b": {
    "text": "La lista completa de números y la información de embajadas y consulados, en 【Contactos de emergencia】"
   },
   "644b54": {
    "text": "Lecturas complementarias"
   },
   "918ebe": {
    "text": "Los primeros meses tras la llegada son la época de mayor riesgo de ser objetivo de fraudes: cambio de divisas a precio sospechosamente bajo, llamadas que suplantan a la embajada o a la policía, y todo tipo de pretextos para «transferir el dinero primero». Véase 【Seguridad anti-estafas para estudiantes（prioritaria para principiantes）】"
   },
   "06893a": {
    "items": [
     {
      "text": "Sello (はんこ): de material normal; no se acepta el tipo シャチハタ"
     },
     {
      "text": "El COE original y una copia del PDF que recibiste por correo"
     },
     {
      "text": "Una SIM temporal o wifi portátil para usar nada más aterrizar"
     }
    ]
   },
   "0aad31": {
    "items": [
     {
      "text": "Cuando tengas el carné de estudiante, vuelve a la oficina del distrito y cambia la pensión de la «exención por bajos ingresos» a la «exención de pago para estudiantes»"
     },
     {
      "text": "Solicita la tarjeta My Number (hará falta más adelante para el banco, las transferencias y el seguro)"
     },
     {
      "text": "Pasa la revisión médica periódica de abril / octubre (normalmente en la 2.ª planta de Big Sando)"
     }
    ]
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
    "text": "来日後にネット環境が整っていない新入留学生に対し、留学課は**臨時の Wi-Fi ログイン ID・パスワード**を提供します（9月下旬に入国支援システムに登録したメールアドレスへ送付）。九州大学キャンパス内には複数の無線アクセスポイントがあります。**SSO-KID** は入学時に一人ずつ付与される全学共通の ID で、学内 Wi-Fi や学生用メールアドレスなどの利用に必要です。"
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
      "desc": "公式マニュアルは iOS・Android・その他の OS の 3 種類です（下記リンク参照。閲覧には SSO-KID でのログインが必要です）。"
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
      "text": "SSO-KID 有効化の手順（公式）",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/idpw.html#activation"
     },
     {
      "text": "kitenet 設定マニュアル：iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "kitenet 設定マニュアル：Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "kitenet 設定マニュアル：その他の OS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "キャンパス Wi-Fi 公式ページ（留学課）",
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
      "url": "https://itoclinic.kyushu-u.ac.jp/",
      "desc": "院内診療所の公式サイト"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp",
      "desc": "公式サイト"
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
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html",
      "desc": "厚生労働省：海外からの医薬品持込みの制限について"
     },
     {
      "text": "ワクチンで予防できる感染症情報",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html",
      "desc": "渡航前に接種歴を確認"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf",
      "desc": "学内サークル・日本語版 PDF"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf",
      "desc": "国際サークル・英語版 PDF"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/",
      "desc": "国際部の留学生向け情報サイト（定期確認推奨）"
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
      "url": "https://lin.ee/EiQqccP",
      "desc": "LINE 公式アカウント"
     },
     {
      "text": "Q-Mate 公式サイト",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about",
      "desc": "公式サイト"
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
      "text": "Q-Mate Instagram",
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**原文の出典**：留学課 NotePM「新入留学生サポートポータル（伊都キャンパス）」2026-08-20（各子ページおよび公式 PDF の時刻表を含む）。情報は公式の最新発表を基準とします。"
   },
   "3c4d5e": {
    "title": "伊都協奏館 / ドミトリー1-3 入居者 · 日程（A～G グループ）"
   },
   "4d5e6f": {
    "title": "セトルインターナショナル（SETTLE International）入居者 · 日程（A～C グループ）"
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
      "9月24日・25日",
      "Free airport shuttle bus",
      "All new international students",
      "First come, first served; no reservation required"
     ],
     [
      "9月24日・25日・29日・30日・10月1日",
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
      "9月28日",
      "オリエン + 4 concurrent sessions",
      "All new international students (including other campuses)",
      "⚠️ Attendance required for new international students"
     ],
     [
      "9月29日・30日",
      "Campus tour for new international students",
      "All new international students",
      "Registration required; 20 persons per session"
     ],
     [
      "10月6日・7日・8日",
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
    "text": "For new international students whose network environment is not yet ready after arrival in Japan, 留学課 provides a **temporary Wi-Fi login ID and password** (sent in late September to the email address registered in the 入国支援システム). Wireless access points are available at many locations on Kyushu University campuses.The **SSO-KID** is a university-wide ID issued to every incoming student; it is required to use campus Wi-Fi, the student email account and other services."
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
      "desc": "Official manuals cover iOS, Android and other operating systems (see the links below; signing in with the SSO-KID is required to open them)."
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
      "text": "SSO-KID activation guide (official)",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/idpw.html#activation"
     },
     {
      "text": "kitenet setup manual: iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "kitenet setup manual: Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "kitenet setup manual: other OS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "Campus Wi-Fi official page (international office)",
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
      "9/29(火)",
      "10:30-12:00",
      "イーストゾーン (humanities)"
     ],
     [
      "9/29(火)",
      "15:00-16:30",
      "ウエストゾーン (sciences)"
     ],
     [
      "9/30(水)",
      "10:30-12:00",
      "ウエストゾーン (sciences)"
     ],
     [
      "9/30(水)",
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
      "1 ",
      "1,650 yen",
      "Non-regular students, research students, etc."
     ],
     [
      "2 ",
      "3,300 yen",
      "Master's course"
     ],
     [
      "3 ",
      "4,950 yen",
      "Doctoral course"
     ],
     [
      "4 ",
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
      "url": "https://itoclinic.kyushu-u.ac.jp/",
      "desc": "Official website of the campus clinic"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp",
      "desc": "Official website"
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
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html",
      "desc": "Ministry of Health, Labour and Welfare: restrictions on bringing medications into Japan"
     },
     {
      "text": "Information on vaccine-preventable infectious diseases",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html",
      "desc": "Check vaccination history before travel"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf",
      "desc": "On-campus clubs, Japanese edition (PDF)"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf",
      "desc": "International clubs, English edition (PDF)"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/",
      "desc": "International office site for international students — worth checking regularly"
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
      "text": "Q-Mate Instagram：@_qmate"
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
      "url": "https://lin.ee/EiQqccP",
      "desc": "Official LINE account"
     },
     {
      "text": "Q-Mate official website",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about",
      "desc": "Official website"
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
      "text": "Q-Mate Instagram",
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**Source**: 留学課 NotePM 「新入留学生サポートポータル（伊都キャンパス）」2026-08-20 (including sub-pages and official PDF timetables). The latest official publication takes precedence."
   },
   "3c4d5e": {
    "title": "Residents of 伊都協奏館 / ドミトリー1-3 · Schedule (Groups A–G)"
   },
   "4d5e6f": {
    "title": "Residents of セトルインターナショナル (SETTLE International) · Schedule (Groups A–C)"
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
      "9月24日・25日",
      "무료 공항 셔틀버스",
      "모든 신입 유학생",
      "선착순, 예약 불필요"
     ],
     [
      "9月24日・25日・29日・30日・10月1日",
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
      "9月28日",
      "オリエン + 병행 4건",
      "모든 신입 유학생 (기타 캠퍼스 포함)",
      "⚠️ 신입 유학생 참가 필수"
     ],
     [
      "9月29日・30日",
      "신입 유학생 캠퍼스 투어",
      "모든 신입 유학생",
      "신청 필요, 회당 20명"
     ],
     [
      "10月6日・7日・8日",
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
    "text": "일본 입국 후 네트워크 환경이 갖추어지지 않은 신입 유학생을 위해 留学課가 **임시 Wi-Fi 로그인 ID・비밀번호**를 제공합니다（9월 하순에 입국 지원 시스템에 등록된 메일 주소로 발송）. 九州大学 캠퍼스 내에는 무선 액세스 포인트가 여러 곳 있습니다.**SSO-KID**는 입학 시 한 사람당 하나씩 부여되는 전교 공통 ID로, 교내 Wi-Fi와 학생용 메일 주소 등의 이용에 필요합니다."
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
      "desc": "공식 매뉴얼은 iOS, Android, 기타 OS 세 가지입니다(아래 링크 참조. 열람하려면 SSO-KID 로그인이 필요합니다)."
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
      "text": "SSO-KID 활성화 방법 안내(공식)",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/idpw.html#activation"
     },
     {
      "text": "kitenet 설정 매뉴얼: iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "kitenet 설정 매뉴얼: Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "kitenet 설정 매뉴얼: 기타 OS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "캠퍼스 Wi-Fi 공식 페이지(유학과)",
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
      "9/29(火)",
      "10:30-12:00",
      "イーストゾーン (문과)"
     ],
     [
      "9/29(火)",
      "15:00-16:30",
      "ウエストゾーン (이과)"
     ],
     [
      "9/30(水)",
      "10:30-12:00",
      "ウエストゾーン (이과)"
     ],
     [
      "9/30(水)",
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
      "url": "https://itoclinic.kyushu-u.ac.jp/",
      "desc": "교내 진료소 공식 사이트"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp",
      "desc": "공식 사이트"
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
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html",
      "desc": "후생노동성: 해외 의약품 반입 제한 안내"
     },
     {
      "text": "백신으로 예방하는 감염병 정보",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html",
      "desc": "출국 전 접종 이력 확인"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf",
      "desc": "교내 동아리·일본어판 PDF"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf",
      "desc": "국제 동아리·영어판 PDF"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/",
      "desc": "국제부 유학생 정보 사이트(정기 확인 권장)"
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
      "text": "Q-Mate Instagram：@_qmate"
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
      "url": "https://lin.ee/EiQqccP",
      "desc": "LINE 공식 계정"
     },
     {
      "text": "Q-Mate 공식 사이트",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about",
      "desc": "공식 사이트"
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
      "text": "Q-Mate Instagram",
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**원문 출처**: 留学課 NotePM「新入留学生サポートポータル（伊都キャンパス）」2026-08-20（각 하위 페이지와 공식 PDF 시간표 포함）. 정보는 공식 최신 발표를 기준으로 합니다."
   },
   "3c4d5e": {
    "title": "伊都協奏館 / ドミトリー1-3 입주자 · 일정(A~G조)"
   },
   "4d5e6f": {
    "title": "セトルインターナショナル(SETTLE International) 입주자 · 일정(A~C조)"
   }
  },
  "es": {
   "83b134": {
    "text": "Toda la información de apoyo para quienes ingresan en otoño de 2026: traslado desde el aeropuerto, entrada al dormitorio, Wi-Fi, trámites administrativos, orientación（オリエンテーション）, sesión de apertura de cuenta bancaria y ESP. **Se recomienda revisar primero el resumen del programa** y ampliar cada sección según sea necesario."
   },
   "9c1a2e": {
    "text": "Este artículo reúne toda la información oficial de apoyo de la oficina de estudiantes internacionales de la División Internacional de la Universidad de Kyushu dirigida a **los estudiantes internacionales de nuevo ingreso del otoño de 2026**. Fuente original: portal NotePM de la oficina de estudiantes internacionales «Portal de apoyo para estudiantes internacionales de nuevo ingreso（新入留学生サポートポータル - campus Ito, 伊都キャンパス）», publicado el 2026-08-20. Los destinatarios y las fechas de cada actividad tienen limitaciones oficiales; verifica siempre según lo indicado en este artículo."
   },
   "1b2c3d": {
    "text": "Resumen del programa"
   },
   "a4b5c6": {
    "headers": [
     "Fecha",
     "Actividad",
     "Destinatarios",
     "Notas"
    ],
    "rows": [
     [
      "9月24日・25日",
      "Autobús lanzadera gratuito desde el aeropuerto",
      "Todos los estudiantes internacionales de nuevo ingreso",
      "Por orden de llegada, sin reserva"
     ],
     [
      "9月24日・25日・29日・30日・10月1日",
      "Autobús gratuito de apoyo para la vida diaria",
      "Estudiantes internacionales de nuevo ingreso y acompañantes",
      "Por orden de llegada, sin reserva"
     ],
     [
      "9月24日～10月上旬",
      "Trámites administrativos y orientación bancaria",
      "Estudiantes de nuevo ingreso del extranjero que residen en dormitorios estudiantiles",
      "⚠️ Inscripción previa obligatoria"
     ],
     [
      "9月28日",
      "Orientación + 4 actividades paralelas",
      "Todos los estudiantes internacionales de nuevo ingreso (incluidos los de otros campus)",
      "⚠️ Asistencia obligatoria para estudiantes internacionales de nuevo ingreso"
     ],
     [
      "9月29日・30日",
      "Visita guiada al campus para estudiantes internacionales de nuevo ingreso",
      "Todos los estudiantes internacionales de nuevo ingreso",
      "Requiere inscripción; 20 personas por sesión"
     ],
     [
      "10月6日・7日・8日",
      "Sesión de apertura de cuenta del Banco de Fukuoka（福岡銀行）",
      "Estudiantes de nuevo ingreso que ya completaron el registro de domicilio",
      "⚠️ Inscripción previa obligatoria"
     ]
    ]
   },
   "2d3e4f": {
    "text": "Los horarios disponibles para entrar a cada dormitorio estudiantil se rigen por lo indicado en las bases de la convocatoria（募集要項：Solicitud de dormitorio para estudiantes internacionales, 留学生用宿舎申請）a partir de la página 6."
   },
   "3e4f5a": {
    "text": "① Autobús lanzadera gratuito desde el aeropuerto (Aeropuerto de Fukuoka → dormitorios de Ito)"
   },
   "4f5a6b": {
    "text": "El 24 y 25 de septiembre de 2026, la oficina de estudiantes internacionales operará autobuses lanzadera gratuitos desde el Aeropuerto de Fukuoka con destino directo a la estación Kyudai-Gakkentoshi (九大学研都市駅) / dormitorios 1-3 (ドミトリー1-3) / Ito Kyosokan（伊都協奏館） / Settle International（セトルインターナショナル）. **En principio, solo pueden subir los propios estudiantes internacionales de nuevo ingreso**. Se asignan por orden de llegada y sin reserva; si el autobús se llena, es posible que no se pueda abordar. Llega al punto de encuentro **al menos 15 minutos antes**."
   },
   "5a6b7c": {
    "headers": [
     "Salida (Aeropuerto de Fukuoka)",
     "Servicio 1",
     "Servicio 2",
     "Servicio 3",
     "Servicio 4"
    ],
    "rows": [
     [
      "Terminal internacional",
      "9:00",
      "11:30",
      "15:00",
      "18:00"
     ],
     [
      "Terminal nacional",
      "9:25",
      "11:55",
      "15:25",
      "18:25"
     ]
    ]
   },
   "6b7c8d": {
    "headers": [
     "Llegada",
     "Servicio 1",
     "Servicio 2",
     "Servicio 3",
     "Servicio 4"
    ],
    "rows": [
     [
      "Estación Kyudai-Gakkentoshi",
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
      "No para"
     ],
     [
      "ドミトリー1～3",
      "10:45",
      "13:15",
      "16:45",
      "19:30"
     ],
     [
      "Ito Kyosokan（伊都協奏館）",
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
      "text": "El Servicio 4 no para en Settle International（セトルインターナショナル）ningún día."
     },
     {
      "text": "Punto de encuentro: terminales internacional / nacional del Aeropuerto de Fukuoka"
     },
     {
      "text": "Desde 1 hora antes de la salida, personal con cartel de «Kyushu University» guía en la puerta de llegadas"
     },
     {
      "text": "Los horarios de salida y llegada pueden variar según las condiciones del tráfico."
     },
     {
      "text": "Los estudiantes internacionales de nuevo ingreso de los campus Byoin（病院）, Chikushi（筑紫） y Ohashi（大桥）**no pueden** usar este autobús."
     }
    ]
   },
   "8d9e0f": {
    "text": "② Autobús gratuito de apoyo para la vida diaria (dormitorios ⇄ estación Kyudai-Gakkentoshi)"
   },
   "9e0f1a": {
    "text": "Trayecto: Ito Kyosokan（伊都協奏館） / dormitorios 1-3 (ドミトリー1-3) / Settle International（セトルインターナショナル） ⇄ estación Kyudai-Gakkentoshi (九大学研都市駅). En la zona de Gakkentoshi hay centros comerciales y servicios públicos como AEON Mall y Saitopia（さいとぴあ）. Días de operación: 9月24日・25日・29日・30日、10月1日. Pueden usarlo los estudiantes internacionales de nuevo ingreso y sus acompañantes, por orden de llegada. La siguiente tabla muestra en tiempo real la hora de llegada del siguiente servicio."
   },
   "0f1a2b": {
    "text": "Los asientos del autobús son limitados y se asignan por orden de llegada; quienes vivan en los dormitorios 2 y 3 (ドミトリー2・3) deben abordar en el dormitorio 1 (ドミトリー1). Los horarios de operación y las paradas se rigen por el PDF del póster oficial."
   },
   "w1a2b3": {
    "text": "③ Wi-Fi del campus（キャンパスWi-Fi / kitenet）"
   },
   "w2b3c4": {
    "text": "Para los estudiantes internacionales de nuevo ingreso que aún no tengan conexión de red preparada tras su llegada a Japón, la oficina de estudiantes internacionales proporciona **ID y contraseña temporales de acceso al Wi-Fi** (se envían a finales de septiembre al correo registrado en el sistema de apoyo a la llegada). La Universidad de Kyushu cuenta con múltiples puntos de acceso inalámbrico en el campus.El **SSO-KID** es un identificador común de toda la universidad que se asigna a cada estudiante al ingresar; es necesario para usar el Wi-Fi del campus, el correo de estudiante y otros servicios."
   },
   "w3c4d5": {
    "text": "Validez de las credenciales temporales: **2026年9月24日(木)～10月9日(金)**. Después de 10月9日 ya no se podrán usar; deberás configurar kitenet（Wi-Fi del campus para estudiantes de Kyushu University）con tu propio **SSO-KID**."
   },
   "w4d5e6": {
    "items": [
     {
      "title": "Confirma tu propio SSO-KID",
      "desc": "Los estudiantes regulares lo tienen **en el reverso de la tarjeta de estudiante**. Quienes no tengan tarjeta de estudiante deben consultar a la oficina de asuntos estudiantiles de su facultad（学部）o escuela de posgrado（学府）(pregunta también por el código de registro)."
     },
     {
      "title": "Prepara los materiales",
      "desc": "Código de registro + una dirección de correo que no sea @s.kyushu-u.ac.jp."
     },
     {
      "title": "Activa el SSO-KID",
      "desc": "Actívalo en el sitio oficial: https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "title": "Completa la configuración inicial de kitenet",
      "desc": "Los manuales oficiales cubren iOS, Android y otros sistemas operativos (véanse los enlaces siguientes; para abrirlos hay que iniciar sesión con el SSO-KID)."
     }
    ]
   },
   "w5e6f7": {
    "items": [
     {
      "text": "Página de activación de SSO-KID",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     },
     {
      "text": "Guía de activación de SSO-KID (oficial)",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/idpw.html#activation"
     },
     {
      "text": "Manual de configuración de kitenet: iOS",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-ios/"
     },
     {
      "text": "Manual de configuración de kitenet: Android",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/manual-android/"
     },
     {
      "text": "Manual de configuración de kitenet: otros SO",
      "url": "https://www.nc.kyushu-u.ac.jp/kitenet/?#manual"
     },
     {
      "text": "Página oficial del Wi-Fi del campus (oficina de estudiantes internacionales)",
      "url": "https://notepm.jp/sharing/751f751c-dbec-4cf0-a5b9-0e3a396b467d"
     }
    ]
   },
   "1a2b3c": {
    "text": "④ Trámites administrativos y orientación bancaria (lectura obligatoria para residentes de dormitorios)"
   },
   "2b3c4d": {
    "text": "Para los estudiantes internacionales de nuevo ingreso que llegan del extranjero y residirán en dormitorios estudiantiles, la oficina de estudiantes internacionales gestiona en su nombre trámites administrativos como el registro de domicilio y el seguro nacional de salud, y explica la pensión nacional, la tarjeta My Number y la apertura de cuenta bancaria（Japan Post Bank（ゆうちょ） / Banco de Fukuoka（福岡銀行） / Nishi-Nippon City Bank（西日本シティ銀行））. **Es obligatorio asistir a la primera y a la segunda sesión de orientación**. Lugar: Jonathan K.S. Choi Cultural Center（日本ジョナサン・KS・チョイ文化館）(No.79 del mapa del campus). Llevar: pasaporte, tarjeta de residencia y bolígrafo negro. La fecha de participación se reserva en el sistema de apoyo a la llegada (Pre-Arrival Assistance) (el formulario solo aparece cuando se completa el trámite de entrada al dormitorio); **no se envía correo de recordatorio**, así que anota la fecha reservada y confírmala en la página de estado. La fecha de la primera sesión no puede ser anterior al día de ingreso al dormitorio. Antes del día de participación, envía al correo de la oficina de estudiantes internacionales las fotos de la página de datos del pasaporte y de la página con el sello del permiso de entrada (si la página de datos ya se subió al sistema de apoyo a la llegada, basta con enviar la del sello de entrada). Quienes no puedan asistir por conflicto de horarios pueden realizar los trámites por su cuenta con los videos instructivos multilingües elaborados por Q-Mate."
   },
   "c0d1e2": {
    "headers": [
     "Grupo",
     "1.ª sesión de orientación",
     "2.ª sesión de orientación"
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
    "text": "A unos 18 minutos a pie desde Kyosokan（協奏館）y a unos 5-7 minutos a pie desde los dormitorios（ドミトリー）. El cupo es limitado y es posible que no puedas elegir la fecha deseada. Cuando la oficina de estudiantes internacionales realiza el registro de domicilio en tu nombre, no se puede solicitar al mismo tiempo la tarjeta de residencia específica（特定在留カード）, el documento que integra la tarjeta My Number con la tarjeta de residencia; en el caso de registro de domicilio de nueva entrada es gratuita y **no es obligatoria**."
   },
   "e2f0a3": {
    "headers": [
     "Grupo",
     "1.ª sesión de orientación",
     "2.ª sesión de orientación"
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
    "text": "El lugar es el mismo (cultural center No.79). Unos 13 minutos en autobús (bajar en Big Orange（九大ビッグオレンジ前）) y unos 35 minutos a pie."
   },
   "5e6f0a": {
    "text": "⑤ Orientación para estudiantes internacionales de nuevo ingreso (9月28日)"
   },
   "6f0a1b": {
    "text": "9月28日(月) 12:50-15:10, en el Salón Shiinoki（椎木講堂）del campus Ito. Darán charlas la comisaría de Nishi（西警察署）, la Oficina Regional de Fukuoka de la Agencia de Servicios de Inmigración（福岡出入国在留管理局） y el Cuerpo de Bomberos de la ciudad de Fukuoka（福岡市消防局）. **Asistencia obligatoria para los estudiantes internacionales de nuevo ingreso** (excepto cuando coincida con otra sesión de orientación). Se requiere inscripción previa: **formulario de inscripción** https://forms.cloud.microsoft/r/nCDDWic1U5"
   },
   "a3b4c5": {
    "headers": [
     "Hora",
     "Programa"
    ],
    "rows": [
     [
      "12:50",
      "Discurso de apertura"
     ],
     [
      "12:55",
      "Presentación de «Q-Mate»"
     ],
     [
      "13:05",
      "Información práctica para la nueva vida en Fukuoka"
     ],
     [
      "13:10",
      "KUFSA（asociación de estudiantes internacionales, 留学生会）"
     ],
     [
      "13:20",
      "Presentación del servicio de asesoramiento psicológico del campus"
     ],
     [
      "13:25",
      "Sistema de estatus de residencia (Agencia de Servicios de Inmigración)"
     ],
     [
      "13:35",
      "Descanso de 15 minutos"
     ],
     [
      "13:50",
      "Seguridad y prevención del delito (comisaría de Nishi, 西警察署)"
     ],
     [
      "14:30",
      "Incendios, primeros auxilios y prevención de desastres (Cuerpo de Bomberos)"
     ],
     [
      "14:55",
      "Aviso de la biblioteca"
     ],
     [
      "15:00",
      "Discurso de clausura"
     ]
    ]
   },
   "b4c5d6": {
    "text": "Ese mismo día hay 4 actividades más: venta de tarjetas SIM (lugar: Galleria del Salón Shiinoki（椎木講堂）; elige una de dos sesiones: ① 10:30-12:30, antes de la orientación, ② 15:10-17:00, después de la orientación; el sitio oficial recomienda priorizar la sesión de la mañana, pues la de la tarde puede estar concurrida; **es necesaria la inscripción previa**; los planes, precios y el método de inscripción se indican en el póster oficial), visita a la biblioteca (Biblioteca Central), consulta de inmigración（入管相談会）(puedes consultar en el lugar sobre el estatus de residencia) y fiesta de bienvenida（歓迎会）(17:00-18:00 @ BIG SKY, solo para estudiantes internacionales de nuevo ingreso). Hay autobuses lanzadera gratuitos de ida y vuelta al Salón Shiinoki（椎木講堂） desde los campus Byoin（病院）, Chikushi（筑紫） y Ohashi（大桥）, el Centro Internacional de Fukuoka（福岡市国際会館） e Ijiri（井尻） (ida: salida aproximada 10:40-10:50; vuelta: salida aproximada 18:20); por orden de llegada, y para la vuelta se debe mostrar el boleto entregado en la ida. **El punto de encuentro de la lanzadera es el lugar designado en cada campus (consulta el PDF oficial); no es el Centro de Intercambio Internacional（国際交流会館）.**"
   },
   "5f0a6b": {
    "text": "⑥ Visita guiada al campus para estudiantes internacionales de nuevo ingreso (9月29・30日)"
   },
   "6a7b8c": {
    "headers": [
     "Fecha",
     "Hora",
     "Zona temática"
    ],
    "rows": [
     [
      "9/29(火)",
      "10:30-12:00",
      "Zona Este（イーストゾーン）: humanidades（文科）"
     ],
     [
      "9/29(火)",
      "15:00-16:30",
      "Zona Oeste（ウエストゾーン）: ciencias（理科）"
     ],
     [
      "9/30(水)",
      "10:30-12:00",
      "Zona Oeste（ウエストゾーン）: ciencias（理科）"
     ],
     [
      "9/30(水)",
      "15:00-16:30",
      "Zona Este（イーストゾーン）: humanidades（文科）"
     ]
    ]
   },
   "7b8c9d": {
    "text": "Punto de encuentro: edificio 6 de la Zona Central（センター6号館）. 20 personas por sesión, unos 90 minutos, todo a pie; usa zapatos cómodos para caminar y lleva tu propia bebida. El idioma principal es el inglés (también se acepta japonés). Puedes inscribirte en una zona distinta a la tuya (los estudiantes de humanidades también pueden elegir la sesión de ciencias). Durante la actividad se tomarán fotos que podrían publicarse en redes sociales; si te incomoda, avísalo con antelación a Q-Mate. Organiza Q-Mate; el formulario de inscripción está en el portal oficial."
   },
   "8c9d0e": {
    "text": "⑦ Sesión de apertura de cuenta del Banco de Fukuoka（福岡銀行）(10月6・7・8日)"
   },
   "9d0e1f": {
    "text": "El Banco de Fukuoka（福岡銀行） tiene cajeros automáticos dentro del campus Ito y es uno de los principales bancos de la prefectura de Fukuoka. Al participar en la sesión de apertura puedes **recibir en el acto el número de cuenta y la tarjeta bancaria**, sin necesidad de ir a una sucursal; la cuenta puede usarse directamente para recibir becas y para la domiciliación del alquiler. Personal del Banco de Fukuoka y de la Universidad de Kyushu ofrece apoyo en inglés y japonés. **Lugar: Jonathan K.S. Choi Cultural Center（日本Jonathan KS Choi文化館）(No.79 del mapa del campus)**; elige una de las sesiones 1.ª a 3.ª (evita el horario de tus clases)."
   },
   "0e1f2a": {
    "items": [
     {
      "text": "Condición ①: haber completado el registro de domicilio en la tarjeta de residencia"
     },
     {
      "text": "Condición ②: que queden más de 3 meses del período de residencia (quienes no cumplan deben acudir por su cuenta a una sucursal bancaria)"
     },
     {
      "text": "Inscripción: sistema de apoyo a la llegada (Pre-Arrival Assistance) → completar el formulario de la sesión de apertura de cuenta y subir la foto de la tarjeta de residencia (el formulario solo se muestra durante el período de inscripción)"
     },
     {
      "text": "La inscripción solo es válida cuando se recibe el correo de confirmación de la oficina de estudiantes internacionales; sin ese correo no se puede participar y, en principio, no se permite cancelar"
     },
     {
      "text": "El sello (印鑑) no puede ser automático（シャチハタ）: debe ser un sello tradicional con tinta roja（朱肉）; además se necesita un número de teléfono utilizable en Japón"
     },
     {
      "text": "Quienes tengan nacionalidad estadounidense deben confirmar antes su SSN (Social Security Number)"
     }
    ]
   },
   "1f2a3b": {
    "text": "⑧ ESP: plan de tranquilidad en emergencias para estudiantes internacionales y otros（外国人留学生等緊急安心プラン）"
   },
   "2a3b4c": {
    "text": "Dirigido a todos los estudiantes internacionales de la Universidad de Kyushu que tengan el estatus de residencia de «estudiante（留学）»; **la afiliación es obligatoria**. Ofrece asistencia médica 24 horas, 365 días al año, en chino, inglés y japonés: recomendación de hospitales, interpretación telefónica durante la consulta médica (con permiso del médico), contacto con la familia en el país de origen y organización del transporte en emergencias, entre otros. **Atención: ESP no es un seguro médico** y no reembolsa los gastos médicos; los costos de hospitalización, tratamiento y exámenes deben pagarse por cuenta propia o a través del seguro nacional de salud."
   },
   "3b4c5d": {
    "headers": [
     "Años de estudio",
     "Costo",
     "Aplicación"
    ],
    "rows": [
     [
      "1 año",
      "1,650円",
      "Estudiantes no regulares, estudiantes de investigación（研究生）y otros"
     ],
     [
      "2 años",
      "3,300円",
      "Maestría（修士課程）"
     ],
     [
      "3 años",
      "4,950円",
      "Doctorado（博士後期課程）"
     ],
     [
      "4 años",
      "6,600円",
      "Licenciatura（学部）"
     ]
    ]
   },
   "4c5d6e": {
    "items": [
     {
      "text": "Fecha límite de afiliación: **2026年10月30日(金)**."
     },
     {
      "text": "Solicitud: en línea a través de la app oficial; se necesita un número de teléfono japonés; se recomienda tramitarla después de llegar a Japón"
     },
     {
      "text": "El nombre de la app figura de forma inconsistente en los materiales oficiales (OSSMA / NEXUS); prevalece el manual más reciente"
     },
     {
      "text": "Pago: tarjeta de crédito / tienda de conveniencia (se elige al registrarse en línea; se agrega una comisión)."
     }
    ]
   },
   "m1h2i3": {
    "text": "⑨ Información práctica y recursos médicos y de salud"
   },
   "m2i3j4": {
    "text": "La página «お役立ち情報» (información útil) de la oficina de estudiantes internacionales reúne recursos prácticos para la vida en Fukuoka. **Lo que más preocupa a los estudiantes de nuevo ingreso es la atención médica**: dentro del campus Ito hay una clínica (伊都クリニック), pero no abre los fines de semana; para atenderse fuera del campus se debe consultar la **lista de instituciones médicas que atienden en idiomas extranjeros** (edición de mayo de 2026; nivel de idioma: A fluido / B conversación cotidiana / C básico)."
   },
   "m3j4k5": {
    "headers": [
     "Hospital",
     "Ubicación",
     "Especialidades",
     "Idiomas"
    ],
    "rows": [
     [
      "Clínica Ito（伊都クリニック）(dentro del campus)",
      "Centro Zona 6, 1F（センター6号館 1F）",
      "Medicina interna y psiquiatría",
      "Inglés: nivel B"
     ],
     [
      "Hospital Nishi-Fukuoka（西福岡病院）",
      "Nishi-ku (西区), Ikinomatsubara（生之松原）",
      "General",
      "Nivel A · 20 idiomas"
     ],
     [
      "Hospital Conmemorativo de Fukuoka（福岡記念病院）",
      "Sawara-ku (早良区), Nishijin（西新）",
      "General",
      "Nivel A"
     ]
    ]
   },
   "45ba0c": {
    "text": "Horarios de atención y contacto: Clínica Ito（伊都クリニック）días laborables 10:00-12:30 / 14:00-16:30; Hospital Nishi-Fukuoka（西福岡病院）0570-09-1331 (se requiere carta de referencia médica y reserva; sin carta de referencia se pagan 7,700 円 adicionales); Hospital Conmemorativo de Fukuoka（福岡記念病院）092-821-4731. Antes de acudir a un hospital fuera del campus, verifica los siguientes puntos: si se necesita reserva; la Clínica Ito no abre los fines de semana, por lo que necesitarás buscar otro hospital fuera del campus."
   },
   "d966c7": {
    "items": [
     {
      "text": "Clínica Ito（伊都クリニック）",
      "url": "https://itoclinic.kyushu-u.ac.jp/"
     },
     {
      "text": "Hospital Conmemorativo de Fukuoka（福岡記念病院）",
      "url": "http://kinen.jp"
     }
    ]
   },
   "m4k5l6": {
    "items": [
     {
      "text": "Lista de instituciones médicas del campus Ito (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E4%BC%8A%E9%83%BD%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-1.pdf"
     },
     {
      "text": "Lista de instituciones médicas del campus Byoin（病院）(PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%97%85%E9%99%A2%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2-2.pdf"
     },
     {
      "text": "Lista de instituciones médicas del campus Ohashi（大桥）(PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E5%A4%A7%E6%A9%8B%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     },
     {
      "text": "Lista de instituciones médicas del campus Chikushi（筑紫）(PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/06/%E7%AD%91%E7%B4%AB%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9_%E5%8C%BB%E7%99%82%E6%A9%9F%E9%96%A2.pdf"
     }
    ]
   },
   "2cbef1": {
    "text": "Recursos útiles y enlaces"
   },
   "m5l6m7": {
    "items": [
     {
      "text": "Ingreso a Japón de medicamentos de uso personal"
     },
     {
      "text": "Información sobre enfermedades prevenibles por vacunación"
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
      "text": "Ingreso a Japón de medicamentos de uso personal",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1.html"
     },
     {
      "text": "Información sobre enfermedades prevenibles por vacunación",
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
    "text": "⑩ Contacto y consultas"
   },
   "6e7f8a": {
    "items": [
     {
      "text": "Consultas antes de la llegada: oficina de estudiantes internacionales imm.s@jimu.kyushu-u.ac.jp"
     },
     {
      "text": "Consultas diarias: LINE «Consultation Desk» (responde Q-Mate)"
     },
     {
      "text": "Q-Mate Instagram：@_qmate"
     },
     {
      "text": "Sitio web de Q-Mate: respuestas a dudas y resumen de información para la vida diaria"
     }
    ]
   },
   "0e969c": {
    "items": [
     {
      "text": "Consultas diarias después de la llegada",
      "url": "https://lin.ee/EiQqccP"
     },
     {
      "text": "Sitio web de Q-Mate",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about"
     }
    ]
   },
   "7e8f9a": {
    "items": [
     {
      "text": "Portal oficial NotePM (en japonés)",
      "url": "https://notepm.jp/sharing/fb0e6579-ad42-4aaa-90fb-9bcff4e253e3"
     },
     {
      "text": "Portal oficial NotePM (en inglés)",
      "url": "https://notepm.jp/sharing/da6d736d-f9e1-44db-ba5e-580d2f1413b2"
     },
     {
      "text": "Q-Mate Instagram",
      "url": "https://www.instagram.com/_qmate/"
     }
    ]
   },
   "8f9a0b": {
    "text": "**Fuente original**: portal NotePM de la oficina de estudiantes internacionales «Portal de apoyo para estudiantes internacionales de nuevo ingreso（新入留学生サポートポータル - campus Ito, 伊都キャンパス）» 2026-08-20 (incluye las subpáginas y los PDF oficiales de horarios). Prevalece la información publicada oficialmente más reciente."
   },
   "3c4d5e": {
    "title": "Residentes de Ito Kyosokan (伊都協奏館) / dormitorios 1-3 (ドミトリー1-3) · Calendario (grupos A–G)"
   },
   "4d5e6f": {
    "title": "Residentes de Settle International (セトルインターナショナル) · Calendario (grupos A–C)"
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
  },
  "es": {
   "768171": {
    "items": [
     {
      "text": "Becas para estudiantes internacionales autofinanciados（私費留学生のための奨学金）(panorama del sistema)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/page-012"
     },
     {
      "text": "Scholarship Guidebook (cómo redactar la solicitud y entrevistas)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2021/03/guidebook_scholarship.pdf"
     },
     {
      "text": "Material explicativo del proceso de solicitud（応募流程）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/08/The-scholarship-application-process-1.pdf"
     },
     {
      "text": "Colección de preguntas frecuentes sobre becas（奨学金 Q&A）",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2024/09/QA-List_JPN_202405.pdf"
     },
     {
      "text": "Estudiantes internacionales becados por el Gobierno (MEXT)（国費外国人留学生）(descripción del sistema)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/government-expense"
     }
    ]
   },
   "13edbe": {
    "text": "Este artículo te ayuda a aclarar dos cosas: **qué puedes solicitar ahora** y **cómo solicitarlo**. Las becas para estudiantes internacionales autofinanciados de Kyudai exigen en general estar ya matriculado y saber japonés, y se dividen en dos vías: la recomendación de la universidad y la solicitud directa. Las 7 que aparecen a continuación siguen abiertas."
   },
   "25d902": {
    "text": "**Fuente de los datos**: Global Gateways «奨学金一覧»（国際部留学課）, recopilado el 2026-09-14. Cada fundación reabre su convocatoria cada año, y los importes y las fechas límite cambian: **antes de actuar, consulta el listado oficial de abajo para confirmar el texto original**."
   },
   "3fe9fc": {
    "text": "Solicitables ahora (7)"
   },
   "552ef2": {
    "headers": [
     "Beca",
     "Importe",
     "Fecha límite"
    ],
    "rows": [
     [
      "CWAJ 外国人留学生大学院女子奨…",
      "200万円 al año",
      "10/5"
     ],
     [
      "INPEX教育交流…（3 个国别版）",
      "160,000円 al mes",
      "10/31"
     ],
     [
      "日本台湾交流協会日本奨学金",
      "14万4千円 al mes",
      "10/23"
     ],
     [
      "福岡よかトピア国際交流財団",
      "50万円 al año",
      "9/24 17:00"
     ],
     [
      "本庄国際奨学財団",
      "23万円 al mes",
      "10/31"
     ],
     [
      "平和中島財団奨学金",
      "Estudiantes de grado: 17万円 al mes",
      "9/25 17:00"
     ],
     [
      "イノアック国際教育振興財団奨学金",
      "5万円 al mes",
      "10/9 13:00"
     ]
    ]
   },
   "0e1654": {
    "text": "De las siguientes puedes obtener directamente los documentos oficiales: **descarga primero las bases de la convocatoria（募集要項） y luego decide si presentarte**."
   },
   "075ce4": {
    "items": [
     {
      "text": "INPEX教育交流…（3 个国别版） — bases de la convocatoria (PDF)・インドネシア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1199&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — bases de la convocatoria (PDF)・オーストラリア",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1200&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "INPEX教育交流…（3 个国别版） — bases de la convocatoria (PDF)・UAE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1201&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "福岡よかトピア国際交流財団 — bases de la convocatoria (PDF)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1212&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — bases de la convocatoria (PDF)・edición 2027",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1210&img_type=1&img_for=1&mime_type=application/pdf"
     },
     {
      "text": "平和中島財団奨学金 — bases de la convocatoria (PDF)・edición 2026",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/view-attach-file.php?sc_id=1140&img_type=1&img_for=1&mime_type=application/pdf"
     }
    ]
   },
   "620a45": {
    "text": "Para los demás, entra desde el listado oficial (se actualiza cada año e incluye las convocatorias ya cerradas):"
   },
   "d123df": {
    "items": [
     {
      "text": "Listado de becas（奨学金一覧）(oficial, año en curso)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang="
     },
     {
      "text": "Listado de becas（奨学金一覧）(oficial, año anterior, incluye las ya cerradas)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2026&lang="
     },
     {
      "text": "Scholarship list (English)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2027&lang=en"
     }
    ]
   },
   "c482ce": {
    "text": "5 puntos clave antes de solicitar"
   },
   "9145cf": {
    "items": [
     {
      "text": "**Debes leer tú mismo las bases de la convocatoria（募集要項）**: existen casos reales de candidaturas descalificadas por presentarse sin haberlas entendido."
     },
     {
      "text": "**La compatibilidad con otras becas tiene límites**: la mayoría no permite recibir dos a la vez; incluso donde hay un tope, confírmalo punto por punto."
     },
     {
      "text": "**El japonés es un requisito obligatorio**: muchas fundaciones exigen redactar a mano en japonés y una entrevista en japonés."
     },
     {
      "text": "**La mayoría solo acepta a estudiantes ya matriculados**: son muy pocas las que se pueden solicitar antes de ingresar."
     },
     {
      "text": "**La competencia es intensa**: solicitar no equivale a ser seleccionado, así que conviene presentarse a varias."
     }
    ]
   },
   "7efb8a": {
    "text": "Las dos vías de solicitud"
   },
   "2461df": {
    "headers": [
     "Vía",
     "Quién presenta los documentos",
     "Riesgo de no ser seleccionado"
    ],
    "rows": [
     [
      "Recomendación de la universidad (selección interna)",
      "Primero se presenta a la oficina de estudiantes internacionales y, si se aprueba, la universidad te recomienda.",
      "Es fácil quedar eliminado en la selección interna."
     ],
     [
      "Solicitud directa",
      "La presentas tú mismo a la fundación.",
      "Depende por completo de ti seguir la web oficial y las fechas límite."
     ]
    ]
   },
   "887b6a": {
    "text": "**La selección interna（学内選考）** se presenta a la sección de estudiantes internacionales de la oficina de estudiantes internacionales（国際部留学課留学生係）: `intlr-pscholar@jimu.kyushu-u.ac.jp`. La beca de estímulo al aprendizaje（学習奨励費）, dirigida a estudiantes autofinanciados con 48,000 円 al mes, debe solicitarse en la **oficina de asuntos académicos（学務係） de tu facultad o escuela de posgrado**; no confundas ambas."
   },
   "8aa843": {
    "text": "Estudiantes internacionales becados por el Gobierno (MEXT)（国費外国人留学生）"
   },
   "303df2": {
    "text": "Es un programa del Ministerio de Educación, Cultura, Deportes, Ciencia y Tecnología (MEXT). **La matrícula la cubre la universidad y además se incluyen los billetes de avión de ida y vuelta.** El importe mensual varía según la categoría: máster 147,000 円 / doctorado 148,000 円 / estudiante de investigación 146,000 円 / grado 120,000 円."
   },
   "7ba84b": {
    "items": [
     {
      "text": "**Recomendación de la universidad**: el periodo de solicitud lo fija cada escuela de posgrado → selección interna 2月 → aceptación 6月"
     },
     {
      "text": "**Recomendación de la embajada**: solicitud 2–3月 → primera selección 5–7月 → llegada a Japón el año siguiente"
     }
    ]
   },
   "546b06": {
    "text": "**Al pasar a un nivel superior no se renueva automáticamente**: se necesita la recomendación del tutor y solicitar al MEXT（文科省）la prórroga del periodo de pago; la aprobación depende de la selección del MEXT."
   },
   "55d28a": {
    "text": "Para estudiantes autofinanciados: beca de estímulo al aprendizaje（学習奨励費）"
   },
   "d52461": {
    "headers": [
     "Concepto",
     "Contenido"
    ],
    "rows": [
     [
      "Importe mensual",
      "48,000 円"
     ],
     [
      "Duración",
      "1 año o 6 meses"
     ],
     [
      "Convocatoria",
      "En principio 2 veces al año (primavera y otoño)"
     ],
     [
      "Dirigido a",
      "Estudiantes regulares de grado / estudiantes de posgrado y estudiantes de investigación（研究生）"
     ],
     [
      "Ventanilla",
      "Oficina de asuntos académicos（学務係） de tu facultad"
     ]
    ]
   },
   "2d2248": {
    "text": "Enlaces oficiales"
   },
   "1ea4c3": {
    "text": "**No tomes esta página como el calendario del próximo año.** Los nombres, los importes y las fechas límite cambian cada año, y el listado oficial solo incluye el año en curso."
   },
   "0b08bd": {
    "text": "Consultas: sección de estudiantes internacionales de la oficina de estudiantes internacionales（国際部留学課 留学生係） `intlr-pscholar@jimu.kyushu-u.ac.jp` (becas para estudiantes autofinanciados); para la beca de estímulo al aprendizaje（学習奨励費）, acude a la **oficina de asuntos académicos（学務係） de tu facultad o escuela de posgrado**."
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
      "ES 作文、日本語の要求が高い"
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
      "ES essay, demanding Japanese"
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
      "ES 작문, 일본어 요구 수준 높음"
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
  },
  "es": {
   "13edbe": {
    "text": "La búsqueda de empleo en Japón se basa en el sistema **新卒一括採用** (contratación conjunta de recién graduados): las empresas contratan una sola vez al año y todas las personas siguen el mismo calendario. Este artículo aclara tres cosas: cuándo empieza, qué evalúa cada una de las tres etapas y dónde están las ventanillas de atención."
   },
   "3cf804": {
    "text": "Próximos eventos"
   },
   "aad43e": {
    "headers": [
     "Evento",
     "Fecha",
     "Dirigido a"
    ],
    "rows": [
     [
      "Feria de estudio de sectores y empresas (業界・企業研究フェア) 2026",
      "12/2 16:40〜",
      "2027/9・2028/3"
     ],
     [
      "Formato",
      "Zoom en línea",
      "Principalmente en japonés (con subtítulos)"
     ]
    ]
   },
   "db6bf7": {
    "text": "Participan 11 empresas (正興電機, 福岡銀行, ニトリ, AGC, NTTデータ, カプコン, 楽天カード, entre otras). Organiza: **学務部キャリア支援課 092-802-5902**. La información oficial tiene prioridad."
   },
   "4decce": {
    "text": "Características de la búsqueda de empleo en Japón"
   },
   "504b9c": {
    "items": [
     {
      "text": "**新卒一括採用**: contratación única según el año de graduación; la empresa decide al candidato mientras todavía estudia."
     },
     {
      "text": "**4 月入社** (incorporación en abril): se gradúa en marzo y se entra el 1 de abril, casi al mismo ritmo en todos los sectores."
     },
     {
      "text": "**Se valora el potencial, no la capacidad inmediata**: no se exige saber hacer el trabajo antes de entrar, sino que se pueda formar a la persona."
     },
     {
      "text": "**メンバーシップ型** (empleo por pertenencia): no se limitan las funciones, el lugar ni el horario; se contrata como «puesto general» (総合職)."
     }
    ]
   },
   "1e230b": {
    "text": "Las empresas japonesas evalúan a los estudiantes internacionales con el **mismo criterio que a los estudiantes japoneses**, tanto en empresas japonesas como extranjeras. No existe una «vía exclusiva para extranjeros»."
   },
   "8523d8": {
    "text": "Calendario: una vez al año"
   },
   "7bcd01": {
    "headers": [
     "Etapa",
     "Fecha",
     "Qué hacer"
    ],
    "rows": [
     [
      "Preparación",
      "5 meses antes del proceso principal",
      "Autoanálisis y estudio del sector"
     ],
     [
      "Prácticas de verano",
      "7〜9 月",
      "Contacto anticipado con las empresas"
     ],
     [
      "Solicitud y sesiones informativas",
      "3〜5 月",
      "Enviar el currículum y asistir a sesiones informativas"
     ],
     [
      "ES y pruebas escritas",
      "3〜6 月",
      "Ensayo del formulario de solicitud y prueba SPI"
     ],
     [
      "Entrevistas",
      "Desde junio",
      "De 2 a 3 rondas por empresa"
     ],
     [
      "Oferta de empleo (内定)",
      "Desde junio (formal en octubre)",
      "Informar a la universidad una vez decidido"
     ]
    ]
   },
   "cfc60c": {
    "text": "El punto de partida es el **1 de marzo del año anterior al último curso** (grado: 3.er año; máster: 1.er año; doctorado: 2.º año) y el proceso termina a mediados de junio: unos 4 meses. **Si pierdes este año, después es difícil recuperarlo**."
   },
   "0d5661": {
    "text": "Las tres etapas de selección"
   },
   "27c2f5": {
    "headers": [
     "Etapa",
     "Qué se evalúa",
     "Dificultad para estudiantes internacionales"
    ],
    "rows": [
     [
      "Selección documental",
      "Ensayo ES con un número de caracteres determinado",
      "Ensayo ES: exige un nivel alto de japonés"
     ],
     [
      "Prueba de aptitud y examen escrito",
      "SPI, entre otros; los enunciados son en japonés",
      "Las preguntas no son difíciles, pero hay que ser rápido y preciso"
     ],
     [
      "Entrevista",
      "Debate en grupo, entrevista grupal y entrevista individual",
      "De 2 a 3 rondas por empresa; se evalúa la expresión oral"
     ]
    ]
   },
   "8476b7": {
    "text": "En el ES hay que redactar los «motivos de la solicitud» y «lo que más te esforzaste durante tus estudios», y **los estudiantes internacionales suelen tener dificultades con la redacción en japonés**. La universidad cuenta con un **進路・就職アドバイザー** (asesor de trayectoria profesional y empleo) que puede ayudarte a revisar el texto."
   },
   "40bdee": {
    "text": "Los dos trámites posteriores al 内定"
   },
   "ffe405": {
    "items": [
     {
      "text": "**Cambio de estatus de residencia**: pasar del estatus «estudiante internacional» (留学) a un estatus de residencia que permita trabajar."
     },
     {
      "text": "**Notificación a la universidad**: una vez decidida tu trayectoria profesional, debes informar al departamento al que perteneces; también puedes presentarla a través del sistema de apoyo al empleo."
     }
    ]
   },
   "14b0cf": {
    "text": "Accesos oficiales y ventanillas de atención"
   },
   "082260": {
    "items": [
     {
      "text": "学務部学生支援課 キャリア支援室 (Oficina de Apoyo Profesional) — responsable del apoyo al empleo de estudiantes internacionales"
     },
     {
      "text": "Edificio 1 del Centro (センター1号館), 2.º piso, ventanilla n.º 2 (campus Ito)"
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
      "text": "Sobre la búsqueda de empleo en Japón (público · léelo primero)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/jobhunting"
     },
     {
      "text": "Situación de las trayectorias tras la graduación (datos reales de años anteriores)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign/situation"
     },
     {
      "text": "Apoyo al empleo para estudiantes internacionales (portal general)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/employment/foreign"
     },
     {
      "text": "Eventos de empleo dentro del campus (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/on-campus_seminar_guidance"
     },
     {
      "text": "Eventos de empleo fuera del campus (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/off-campus_guidance"
     },
     {
      "text": "Ofertas de empleo (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/jobvacancy"
     },
     {
      "text": "Programas de prácticas (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/internships"
     },
     {
      "text": "Experiencias de búsqueda de empleo (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/reports"
     },
     {
      "text": "Consulta sobre trayectoria y empleo (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/consulting"
     },
     {
      "text": "Información útil para la búsqueda de empleo de estudiantes internacionales (requiere inicio de sesión SSO)",
      "url": "https://www.kyushu-u.ac.jp/ja/internal/employment/intl_support/information"
     },
     {
      "text": "Study in Japan (empleo en Japón y estatus de residencia)",
      "url": "https://www.studyinjapan.go.jp/ja/work-in-japan/employment/"
     }
    ]
   },
   "8a888e": {
    "text": "De las 9 páginas anteriores, **la mayoría requiere iniciar sesión con el SSO de Kyudai** (todas las que aparecen bajo `/ja/internal/` son páginas internas). Antes de matricularte solo puedes consultar «Sobre la búsqueda de empleo en Japón» y «Situación de las trayectorias tras la graduación». Que no encuentres una página no es un fallo: es una cuestión de permisos."
   }
  }
 }
};
})();
