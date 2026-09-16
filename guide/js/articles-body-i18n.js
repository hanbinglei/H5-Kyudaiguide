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
    "text": "口座開設、家賃・学費の納付、クレジットカードの申込み、海外への送金——実際の手続きの順番に沿って構成しています。**まず「銀行に行く前に」の節をお読みになることをおすすめします**。印鑑と営業時間が最もよくある2つの問題です。"
   },
   "9fb1a4": {
    "text": "銀行に行く前に：印鑑・オリエンテーション・営業時間"
   },
   "930ced": {
    "text": "銀行口座の開設には必ず印鑑が必要です（**シャチハタは不可**）。来日前に必ず個人印鑑をご用意ください。印鑑がなければ窓口で口座を開設することができません。【入境准备】参照"
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
    "text": "口座振替（自動引き落とし）を申し込んだのに、なかなか引き落とされない場合は、通常は学校の事務処理に時間がかかっているだけなので、しばらく待てば問題ありません。"
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
    "text": "Opening an account, paying rent and tuition, applying for a credit card, and remitting money home are arranged in the actual order of the procedures. **Reading the \"Before Going to the Bank\" section first is recommended**, as the seal (hanko) and business hours are the two most common issues."
   },
   "9fb1a4": {
    "text": "Before Going to the Bank: Hanko Seal, Orientation, and Business Hours"
   },
   "930ced": {
    "text": "Opening a bank account always requires a personal seal (hanko); **shachihata stamps are not acceptable**. Prepare a personal seal before arriving in Japan, or an account cannot be opened at the counter. See 【入境准备】"
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
    "text": "If automatic withdrawal (口座振替) has been applied for but the charge is slow to appear, the delay is usually caused by the university's administrative processing; simply wait."
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
    "text": "계좌 개설, 집세·학비 납부, 신용카드 발급, 본국 송금까지 실제로 진행하는 순서에 맞춰 구성했습니다. **「은행 방문 전」 항목을 먼저 읽어 보시기를 권합니다.** 인감과 영업 시간이 가장 자주 겪는 두 가지 문제입니다."
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
    "text": "계좌 자동이체(口座振替)를 신청했는데도 좀처럼 출금되지 않는다면, 대개 학교 행정 처리 속도가 느린 것이 원인이므로 기다리면 됩니다."
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
    "text": "이사 후 우체국 전송 신청 방법은 【在留手续·邮局地址转送】을 참조하세요. 이곳에서는 반복하지 않습니다."
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
    "text": "Enroll in 国民健康保険 (national health insurance) promptly after arrival (procedure order: see【入境准备·落地后的办理顺序】). After enrollment, the patient's personal share of medical costs is 30%."
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
    "text": "일본 도착 후 가능한 한 빨리 국민건강보험 (国民健康保険)에 가입하시기 바랍니다 (가입 순서는 【入境准备·落地后的办理顺序】 참조). 가입하면 진료비 본인 부담이 30%가 됩니다."
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
    "text": "学校アカウントを取得すれば、学内WiFiに接続できます。eduroam は大学間をまたいで利用できるWiFiサービスで、別途登録が必要です。"
   },
   "72a8d0": {
    "text": "学内WiFiのログインIDは自分の SSOKID@Kitnet、パスワードは SSOKID を有効化したときに設定したパスワードです（Campusmate と同じ）。"
   },
   "0fb853": {
    "items": [
     {
      "text": "九大キャンパスネットワーク（KiteNet）接続マニュアル",
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
    "text": "The campus WiFi can be connected once the university account is obtained; eduroam, a WiFi service shared among universities, requires separate registration."
   },
   "72a8d0": {
    "text": "The login ID for campus WiFi is the student's SSOKID@Kitnet, and the password is the one set when activating SSOKID (same as Campusmate)."
   },
   "0fb853": {
    "items": [
     {
      "text": "Kyushu University Campus Network (KiteNet) Connection Guide",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam Registration",
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
    "text": "학교 계정을 받으면 교내 WiFi에 연결할 수 있습니다. eduroam은 대학 간 연동 WiFi 서비스로, 별도로 등록이 필요합니다."
   },
   "72a8d0": {
    "text": "교내 WiFi의 로그인 계정은 본인의 SSOKID@Kitnet이며, 비밀번호는 SSOKID 활성화 시 설정한 비밀번호입니다(Campusmate와 동일)."
   },
   "0fb853": {
    "items": [
     {
      "text": "큐슈대학 캠퍼스 네트워크(KiteNet) 연결 매뉴얼",
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
      "url": "https://itoclinic.kyushu-u.ac.jp/",
      "desc": "校内诊所官网"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp",
      "desc": "官网"
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
      "desc": "厚生劳动省：海外携入医药品的限制说明"
     },
     {
      "text": "ワクチンで予防できる感染症情報",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html",
      "desc": "渡航前确认接种史"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf",
      "desc": "校内社团・日文版 PDF"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf",
      "desc": "国际社团・英文版 PDF"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/",
      "desc": "国际部留学生信息网，建议定期查看"
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
      "desc": "LINE 官方账号"
     },
     {
      "text": "Q-Mate 公式サイト",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about",
      "desc": "官网"
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
      "desc": "校内诊所官网"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp",
      "desc": "官网"
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
      "desc": "厚生劳动省：海外携入医药品的限制说明"
     },
     {
      "text": "Information on vaccine-preventable infectious diseases",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html",
      "desc": "渡航前确认接种史"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf",
      "desc": "校内社团・日文版 PDF"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf",
      "desc": "国际社团・英文版 PDF"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/",
      "desc": "国际部留学生信息网，建议定期查看"
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
      "desc": "LINE 官方账号"
     },
     {
      "text": "Q-Mate official website",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about",
      "desc": "官网"
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
      "desc": "校内诊所官网"
     },
     {
      "text": "福岡記念病院",
      "url": "http://kinen.jp",
      "desc": "官网"
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
      "desc": "厚生劳动省：海外携入医药品的限制说明"
     },
     {
      "text": "백신으로 예방하는 감염병 정보",
      "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/visitor.html",
      "desc": "渡航前确认接种史"
     },
     {
      "text": "2026 CLUB & CIRCLE GUIDE",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-CLUB-CIRCLE-GUIDE.pdf",
      "desc": "校内社团・日文版 PDF"
     },
     {
      "text": "2026 International Clubs Guide",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2026/03/2026-INTL-CLUB-AND-CIRCLE%E3%80%80%E8%8B%B1%E8%AA%9E.pdf",
      "desc": "国际社团・英文版 PDF"
     },
     {
      "text": "Global Gateways",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/",
      "desc": "国际部留学生信息网，建议定期查看"
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
      "desc": "LINE 官方账号"
     },
     {
      "text": "Q-Mate 공식 사이트",
      "url": "https://studentassistantqu.wixsite.com/q-mate/about",
      "desc": "官网"
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
  }
 }
};
})();
