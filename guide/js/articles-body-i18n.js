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
   "516428": {
    "text": "留学生相談室（ISC）：イースト1号館 B540。履修、住居、病気、育児など、指導教員には話しにくいことも"
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
   "b15cf0": {
    "text": "健康支援センター（カウンセリング）：ビッグさんど 2 階。心理・健康の相談 092-802-5881"
   },
   "2ae235": {
    "text": "キャンパスヘルスサポートルーム：イースト1号館2階 E-B-202。対人関係、生活上の合理的配慮など"
   },
   "a5d419": {
    "text": "マルチリンガル交流スペース（EZぷらっと）：イースト1号館2階 E-C-202。留学支援、語学学習、書籍・DVD の貸出"
   },
   "1b05a4": {
    "text": "教務課：イースト1号館 C108。履修登録、証明書、学籍"
   },
   "c5a6e6": {
    "text": "学生課：イースト1号館 C108。通学定期の学割、学生証の再発行、各種申請"
   },
   "c96936": {
    "text": "サポートセンター：イースト1号館 C108。ビザ、病院の紹介、住居、日本語教室など"
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
    "text": "学年暦：まず自分が見ているのがどれかを確認"
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
    "text": "証明書の発行方法"
   },
   "7d38ec": {
    "text": "在学証明書、成績証明書、卒業／修了見込証明書などは、いずれも大学の証明書発行の窓口から手続きします。学内の自動発行機で出せるものもあり、学割証はそのひとつです（上の関連する説明を参照）。"
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
   }
  },
  "en": {
   "333750": {
    "text": "Health Checkups and On-Campus Desks"
   },
   "516428": {
    "text": "International Student Consultation Room (ISC): イースト1号館 (East Zone Bldg 1) B540. Course registration, housing, illness, childcare — including things awkward to raise with your supervisor"
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
   "b15cf0": {
    "text": "Health Support Center (counselling): ビッグさんど 2F. Psychological and health consultations 092-802-5881"
   },
   "2ae235": {
    "text": "Campus Health Support Room: イースト1号館 2F, E-B-202. Interpersonal matters, reasonable accommodations for daily life"
   },
   "a5d419": {
    "text": "Multilingual Exchange Space (EZ ぷらっと): イースト1号館 2F, E-C-202. Study-abroad support, language learning, book and DVD lending"
   },
   "1b05a4": {
    "text": "Academic Affairs Section: イースト1号館 C108. Course registration, certificates, student records"
   },
   "c5a6e6": {
    "text": "Student Affairs Section: イースト1号館 C108. Commuter-pass student discounts, replacement student ID, various applications"
   },
   "c96936": {
    "text": "Support Center: イースト1号館 C108. Visas, hospital referrals, housing, Japanese classes, and more"
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
    "text": "Academic Calendar: check which one you are looking at"
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
    "text": "How to Obtain Certificates"
   },
   "7d38ec": {
    "text": "Enrolment certificates, transcripts, and expected-graduation certificates are all requested through the university’s certificate issuing portal. Some can be printed from the machines on campus, the student-discount certificate among them (see the related note above)."
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
   }
  },
  "ko": {
   "333750": {
    "text": "건강검진과 교내 창구"
   },
   "516428": {
    "text": "유학생 상담실(ISC): イースト1号館 B540. 수강, 주거, 질병, 육아 등 지도교수에게 말하기 어려운 내용도"
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
   "b15cf0": {
    "text": "건강지원센터(카운슬링): ビッグさんど 2층. 심리·건강 상담 092-802-5881"
   },
   "2ae235": {
    "text": "캠퍼스 헬스 서포트룸: イースト1号館 2층 E-B-202. 대인관계, 생활상의 합리적 배려 등"
   },
   "a5d419": {
    "text": "다국어 교류 공간(EZ ぷらっと): イースト1号館 2층 E-C-202. 유학 지원, 어학 학습, 도서·DVD 대출"
   },
   "1b05a4": {
    "text": "교무과: イースト1号館 C108. 수강 등록, 증명서, 학적"
   },
   "c5a6e6": {
    "text": "학생과: イースト1号館 C108. 통학 정기 학할, 학생증 재발급, 각종 신청"
   },
   "c96936": {
    "text": "서포트센터: イースト1号館 C108. 비자, 병원 소개, 주거, 일본어 교실 등"
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
    "text": "학사일정: 내가 보는 것이 어느 것인지부터 확인"
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
    "text": "증명서 발급 방법"
   },
   "7d38ec": {
    "text": "재학증명서, 성적증명서, 졸업/수료예정증명서 등은 모두 학교의 증명서 발급 창구에서 처리합니다. 교내 자동발급기로 뽑을 수 있는 것도 있으며 학할증이 그중 하나입니다(위의 관련 설명 참조)."
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
   }
  }
 },
 "guide-antifraud": {
  "ja": {
   "52ec55": {
    "text": "⚠️ 留学生になったばかりの方は、まず本記事を最後まで読んでください。詐欺グループの手口は精巧で、高学歴の人でも引っかかります。「慌てない、信じない、金は渡さない」を徹底すれば、ほとんどの詐欺は避けられます。"
   },
   "094ae5": {
    "text": "一、よくある詐欺の類型"
   },
   "011c4f": {
    "text": "1. 大使館・領事館や警察・検察のなりすまし（最多）"
   },
   "049994": {
    "text": "手口：「大使館／領事館」を名乗る電話で、重要書類が未受取、パスポートに異常、事件に関与している、などと言う。「本国の警察・検察」に転送したことにしてマネーロンダリングの容疑をかける。Signal、Webex、Skype などのアプリを入れさせて「リモートで取り調べ」をする。偽造した身分証や公文書を見せる。「保釈金」「保証金」の支払いを求め、「応じなければ強制送還・引き渡しになる」と脅す。"
   },
   "a49a0e": {
    "text": "見抜き方：①在外公館が電話で「事件に関与している」と通知することはありません。②本国の警察や検察が、電話やメッセージアプリで国境を越えて捜査することはありません。③送金やアプリのインストールを求めることは絶対にありません。④発信番号は偽装できるため、「警察」と表示されても信用できません。"
   },
   "a1f761": {
    "text": "2. 両替詐欺（留学生に多い）"
   },
   "72ad22": {
    "text": "手口：SNS のグループで「レートの良い両替」「円が急ぎで必要」と投稿する。偽造した送金画面を見せて先に振り込ませる。「ABC 詐欺」——A が自国通貨側、B が円側を装い、双方に同時に送金させて消える。「仲介者」を装って両側から騙す。"
   },
   "edaa9e": {
    "text": "見抜き方：両替は銀行の正規のルートだけを使うこと。SNS グループの見知らぬ相手の両替情報はすべて疑わしいと考えること。先に送金して後から受け取る形には絶対に応じないこと。「レートが異様に良い」両替はほぼ詐欺です。"
   },
   "3a818c": {
    "text": "3. 大学や教授のなりすまし"
   },
   "adabc1": {
    "text": "手口：大学を装ったメールで「学費・登録料」の支払いを求める。教授を装ってギフトカードの代理購入や送金を頼む。脆弱性を突いて教授のメールアドレスを偽装する。"
   },
   "b41808": {
    "text": "見抜き方：大学がメールや電話で銀行の暗証番号を尋ねたり、即時の送金を求めたりすることはありません。教授が突然代理購入を頼んできたら、直接会うか電話で本人に確認すること。送信元が本当に大学のドメインかを確かめること。"
   },
   "d246ca": {
    "text": "4. SMS・リンクによるフィッシング"
   },
   "e1d74f": {
    "text": "手口：「家賃の保証金」「ETC の期限切れ」「荷物の保管期限」などの SMS にリンクを付けて支払わせる。宅配業者、郵便局、電力会社を装ってリンクを送る。"
   },
   "ffd258": {
    "text": "見抜き方：リンクを送って支払わせるものは詐欺です。日本の正規の支払いはコンビニ払い、銀行振込、口座振替です。不確かなときはリンクを開かず、公式の電話番号にかけて確認してください。"
   },
   "8eed64": {
    "text": "5. バーチャル誘拐"
   },
   "b25888": {
    "text": "手口：まず留学生を外部から隔離した状態にし、その上で本国の家族に「誘拐した」と連絡して身代金を要求する。情報の断絶を利用した恐喝です。"
   },
   "a3c952": {
    "text": "見抜き方：「子どもが誘拐された」という連絡を受けたら、すぐに在外公館に確認すること。「家族に連絡してはいけない」と求めるものは、すべて詐欺です。"
   },
   "9f1d78": {
    "text": "6. 副業・アルバイト詐欺"
   },
   "aa1237": {
    "text": "手口：WhatsApp や SNS の「副業グループ」に誘い、高収入で簡単だと言う。先に商品代金を立て替えさせたり購入させたりする。最初は少額を還元し、大きな額が集まった時点で持ち逃げする。"
   },
   "2cd15e": {
    "text": "見抜き方：先に自分がお金を出す形の副業はすべて詐欺です。在留カードには資格外活動許可の範囲が記載されており、極端に高収入の「アルバイト」はそもそも適法ではありません。知らない WhatsApp グループはすぐ退出して通報してください。"
   },
   "55891a": {
    "text": "7. コンビニのギフトカード詐欺"
   },
   "041a81": {
    "text": "手口：警察、大使館、技術者などを装い、「口座の確認」「凍結の解除」を理由にコンビニで高額のギフトカード（Vプリカ、Apple Gift Card など）を買わせ、番号とコードを伝えさせる。"
   },
   "1449d2": {
    "text": "見抜き方：正規の機関が、確認や支払いのためにギフトカードの購入を求めることはありません。コンビニの店員が声をかけてくれることもありますが、毎回止められるとは限りません。"
   },
   "8eecc1": {
    "text": "8. 訪問販売・電力会社の切り替え"
   },
   "584b05": {
    "text": "手口：電力会社やネット回線の担当者を装って訪問し、「乗り換えたほうが安い」と言って個人情報を聞き出したり、高額なプランを契約させたりする。"
   },
   "ccc44b": {
    "text": "見抜き方：訪問販売はそもそも割に合わないことがあります。その場で契約せず、「必要ありません」と言って扉を閉めてください。まっとうな会社が前触れなく訪ねてくることはありません。"
   },
   "3743ca": {
    "text": "二、防犯の基本原則"
   },
   "daa01e": {
    "items": [
     {
      "title": "慌てない、信じない、金は渡さない",
      "desc": ""
     },
     {
      "title": "警察・検察や大使館を名乗る電話で送金を求められたら → その場で切る",
      "desc": ""
     },
     {
      "title": "「秘密にしろ」「家族や友人に言うな」と求めるものは → 必ず詐欺",
      "desc": ""
     },
     {
      "desc": "",
      "title": "迷ったら電話で確認：公館の公式サイトに載っている番号にかけること。相手が伝えてきた番号にはかけない"
     }
    ]
   },
   "0252c5": {
    "text": "日常の防犯：知らない番号には出ない、出てしまったら録音してすぐ切る。相手が大使館や警察を名乗ったら、切ってから自分で公式サイトの番号を調べてかけ直す。SNS グループの両替情報には返信も個別連絡もしない。リンク付きの SMS は開かない。ギフトカードを買わせようとする相手は 100% 詐欺なので、その場で会話を終える。大学や教授からの送金依頼メールは、直接会うか電話で確認する。訪問販売には出ないか、「必要ありません」と言って扉を閉める。"
   },
   "2f22d1": {
    "text": "三、日常の早見表"
   },
   "02de93": {
    "headers": [
     "場面",
     "どうするか"
    ],
    "rows": [
     [
      "知らない番号から着信",
      "出ない。出てしまったら録音してすぐ切る"
     ],
     [
      "相手が大使館・警察を名乗る",
      "切ってから自分で公式サイトの番号を調べ、かけ直して確認"
     ],
     [
      "知らない人から SNS の友達追加",
      "断るか、まず身元を確認"
     ],
     [
      "SNS グループの両替情報",
      "返信しない、個別に連絡しない、無視する"
     ],
     [
      "リンク付きの SMS が届いた",
      "開かない。まず送信元を確認"
     ],
     [
      "ギフトカードを買えと言われた",
      "100% 詐欺。その場で会話を終える"
     ],
     [
      "大学・教授からの送金依頼メール",
      "直接会うか電話で確認"
     ],
     [
      "訪問販売",
      "出ないか、「必要ありません」と言って扉を閉める"
     ]
    ]
   },
   "717d03": {
    "text": "四、被害に遭った後の応急対応（優先順）"
   },
   "c06ba5": {
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
      "desc": "家族に、本国の警察や振り込め詐欺の相談窓口へ届け出てもらいます",
      "title": "母国の家族からも通報してもらう"
     },
     {
      "title": "自国の領事館に連絡",
      "desc": "領事保護の電話番号は各公館の公式サイトで確認してください。福岡にある各国公館の連絡先は「緊急連絡先」の記事に記載"
     },
     {
      "title": "注意を呼びかける",
      "desc": "経験をグループで共有し、これ以上被害が出ないようにする"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 騙されたのはあなたのせいではありません。詐欺グループは訓練を受けており、被害者には高学歴の人も含まれます。お金が戻る可能性は高くありませんが、届け出には意味があります（事件の関連づけやグループの追跡につながります）。恥ずかしさから黙り込まないでください。あなたの経験が、ほかの誰かを救うかもしれません。"
   },
   "3e86de": {
    "text": "五、詐欺を見抜くコツ"
   },
   "0125e2": {
    "text": "実際の事例とグループでの経験から：相手のなまりを確かめる（名乗っている機関と合わない話し方なら詐欺の可能性が高い）。方言や日本語で応じると、そのまま切られることが多い。「どの警察署か」と尋ね、自分でネットの公開番号を調べてかけ直す。詐欺師は焦りやすく、少し疑うと逆上します。そして何より大切なのは銀行情報を守ることです —— まじめに言えば、口座番号と暗証番号をきちんと管理してください。"
   },
   "40510e": {
    "items": [
     {
      "text": "在福外国機関の一覧（福岡よかトピア国際交流財団）",
      "url": "https://www.fcif.or.jp/information/living/foreign-agencies-in-fukuoka/"
     }
    ]
   }
  },
  "en": {
   "52ec55": {
    "text": "⚠️ If you are new to studying abroad, read this article to the end first. Fraud operations are sophisticated, and highly educated people fall for them too. Keep to “stay calm, believe nothing, hand over no money” and you will avoid the great majority of scams."
   },
   "094ae5": {
    "text": "1. Common Types of Fraud"
   },
   "011c4f": {
    "text": "1. Impersonating an embassy, consulate, police, or prosecutors (most common)"
   },
   "049994": {
    "text": "How it works: a call claiming to be from “your embassy or consulate” says there is an uncollected document, a problem with your passport, or an investigation involving you. It is then “transferred” to police or prosecutors back home, who accuse you of money laundering. You are told to install Signal, Webex, Skype, or similar for a “remote interrogation”. Forged ID and official documents are shown. You are asked to pay “bail” or a “guarantee deposit”, and threatened with deportation or extradition if you refuse."
   },
   "a49a0e": {
    "text": "How to spot it: ① a consulate will never phone to tell you that you are implicated in a case; ② police or prosecutors in your home country do not conduct cross-border investigations by phone or messaging apps; ③ they never ask you to transfer money or install communication software; ④ caller IDs can be spoofed, so “police” on your screen means nothing."
   },
   "a1f761": {
    "text": "2. Currency-exchange fraud (common among students)"
   },
   "72ad22": {
    "text": "How it works: posts in social media groups offer “great exchange rates” or claim to “urgently need yen”. Forged transfer screenshots are used to get you to send money first. In the “ABC scam”, A poses as the home-currency side and B as the yen side, luring you into paying both at once before disappearing. Others pose as a “middleman” and cheat both sides."
   },
   "edaa9e": {
    "text": "How to spot it: exchange money only through proper banking channels. Treat any exchange offer from a stranger in a group chat as suspect. Never send money first and expect to receive later. An exchange rate that looks unusually good is almost always a scam."
   },
   "3a818c": {
    "text": "3. Impersonating the university or a professor"
   },
   "adabc1": {
    "text": "How it works: emails posing as the university demand payment of “tuition or registration fees”. Someone posing as your professor asks you to buy gift cards or make a transfer on their behalf. Vulnerabilities are exploited to spoof a professor’s email address."
   },
   "b41808": {
    "text": "How to spot it: the university will never ask for your banking password or an immediate transfer by email or phone. If a professor suddenly asks you to buy something for them, confirm in person or by phone with the professor themselves. Check whether the sender’s address really is a university domain."
   },
   "d246ca": {
    "text": "4. SMS and link phishing"
   },
   "e1d74f": {
    "text": "How it works: text messages about a “rent deposit”, an “expired ETC card”, or a “package awaiting collection” carry a link that asks you to pay. Others impersonate couriers, the post office, or the electricity company."
   },
   "ffd258": {
    "text": "How to spot it: anything that sends you a link and asks for payment is fraud. Legitimate payment in Japan is made at a convenience store, by bank transfer (振込), or by direct debit. When unsure, do not open the link — call the official number instead."
   },
   "8eed64": {
    "text": "5. Virtual kidnapping"
   },
   "b25888": {
    "text": "How it works: the scammers first cut the student off from contact with the outside, then tell the family back home that they have been kidnapped and demand a ransom, exploiting the information gap."
   },
   "a3c952": {
    "text": "How to spot it: if you receive a call saying your child has been kidnapped, contact the relevant consulate to verify immediately. Anything that insists you must not contact your family is fraud."
   },
   "9f1d78": {
    "text": "6. Fake part-time work and “task” scams"
   },
   "aa1237": {
    "text": "How it works: you are pulled into a “side-job group” on WhatsApp or another app promising easy, well-paid work. You are asked to front the cost of goods or buy products. Small payouts come at first; once a large sum is in, they vanish with it."
   },
   "2cd15e": {
    "text": "How to spot it: any job that requires you to pay first is a scam. Your residence card states the scope of your permission to work, and an “part-time job” paying extraordinarily well is not lawful to begin with. Leave unknown WhatsApp groups immediately and report them."
   },
   "55891a": {
    "text": "7. Convenience-store gift card scams"
   },
   "041a81": {
    "text": "How it works: posing as police, an embassy, or a technician, they cite “verifying your account” or “unfreezing it” to make you buy high-value gift cards at a convenience store (V-Preca, Apple Gift Card, and the like) and read out the numbers and codes."
   },
   "1449d2": {
    "text": "How to spot it: no legitimate organisation ever asks you to buy gift cards to verify anything or to make a payment. Convenience store staff sometimes step in, but they cannot catch every case."
   },
   "8eecc1": {
    "text": "8. Door-to-door sales and utility switching"
   },
   "584b05": {
    "text": "How it works: someone claiming to represent an electricity or internet company calls at your door, says switching would be cheaper, and either extracts personal details or signs you up to an expensive plan."
   },
   "ccc44b": {
    "text": "How to spot it: door-to-door offers may simply not be good value. Do not sign anything on the spot — say “I do not need it” and close the door. Legitimate companies do not turn up unannounced."
   },
   "3743ca": {
    "text": "2. Core Principles"
   },
   "daa01e": {
    "items": [
     {
      "title": "Stay calm, believe nothing, hand over no money",
      "desc": ""
     },
     {
      "title": "Any call claiming to be police, prosecutors, or an embassy that asks you to transfer money → hang up",
      "desc": ""
     },
     {
      "title": "Anything that demands you “keep it secret” or “not tell family or friends” → certainly fraud",
      "desc": ""
     },
     {
      "desc": "",
      "title": "When unsure, verify by phone: call the number published on the mission’s own website, never the number they gave you"
     }
    ]
   },
   "0252c5": {
    "text": "Everyday precautions: do not answer unknown numbers, and if you do, record and hang up. If the caller claims to be an embassy or the police, hang up and look up the official number yourself. Do not reply to exchange offers in group chats or move to private messages. Do not open links in text messages. Anyone telling you to buy gift cards is 100% a scammer — end the conversation. Verify any email from the university or a professor asking for a transfer in person or by phone. Do not open the door to salespeople, or say “I do not need it” and close it."
   },
   "2f22d1": {
    "text": "3. Quick Reference"
   },
   "02de93": {
    "headers": [
     "Situation",
     "What to do"
    ],
    "rows": [
     [
      "A call from an unknown number",
      "Do not answer; if you do, record it and hang up"
     ],
     [
      "Caller claims to be an embassy or police",
      "Hang up, look up the official number yourself, and call back to check"
     ],
     [
      "A stranger adds you on a messaging app",
      "Decline, or verify who they are first"
     ],
     [
      "Exchange offers in a group chat",
      "Do not reply, do not message privately, ignore"
     ],
     [
      "A text message with a link",
      "Do not click. Verify the sender first"
     ],
     [
      "Someone tells you to buy gift cards",
      "100% a scam. End the conversation"
     ],
     [
      "Email from the university or a professor asking for a transfer",
      "Confirm in person or by phone"
     ],
     [
      "Door-to-door sales",
      "Do not open, or say “I do not need it” and close the door"
     ]
    ]
   },
   "717d03": {
    "text": "4. If You Are Scammed (in priority order)"
   },
   "c06ba5": {
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
      "desc": "Ask relatives to report it to the police or the anti-fraud authority in your home country",
      "title": "Have family at home file a report too"
     },
     {
      "title": "Contact your country’s consulate",
      "desc": "Look up the consular protection number on your own mission’s official website. Contacts for the consulates in Fukuoka are listed in the “Emergency Contacts” guide"
     },
     {
      "title": "Warn others",
      "desc": "Share what happened in your group chats so that fewer people are caught"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 Being scammed is not your fault — these groups are professionally trained, and their victims include highly educated people. The chance of recovering the money is low, but reporting still matters (it lets cases be linked and networks traced). Do not stay silent out of shame; your experience may spare someone else."
   },
   "3e86de": {
    "text": "5. Tricks for Seeing Through Them"
   },
   "0125e2": {
    "text": "From real cases and group chats: test their accent — speech that does not match the agency they claim to represent is a strong signal. Replying in the local dialect or in Japanese often makes them hang up outright. Ask which police station they are at, then look up the public number yourself and call it. Scammers get impatient easily and turn hostile after a couple of sceptical questions. Most important of all, guard your banking details — seriously: keep your account numbers and passwords safe."
   },
   "40510e": {
    "items": [
     {
      "text": "Foreign agencies in Fukuoka (Fukuoka Yokatopia International Exchange Foundation)",
      "url": "https://www.fcif.or.jp/ej/ej-information/living/foreign-agencies-in-fukuoka/"
     }
    ]
   }
  },
  "ko": {
   "52ec55": {
    "text": "⚠️ 유학이 처음이라면 이 글을 먼저 끝까지 읽으세요. 사기 조직의 수법은 정교해서 고학력자도 걸려듭니다. 「당황하지 않기, 믿지 않기, 돈 주지 않기」를 지키면 대부분의 사기는 피할 수 있습니다."
   },
   "094ae5": {
    "text": "1. 흔한 사기 유형"
   },
   "011c4f": {
    "text": "1. 대사관·영사관, 경찰·검찰 사칭(가장 많음)"
   },
   "049994": {
    "text": "수법: 「대사관/영사관」을 사칭한 전화로 중요 서류 미수령, 여권 이상, 사건 연루 등을 이야기합니다. 「본국 경찰·검찰」로 연결한 척하며 자금세탁 혐의를 씌웁니다. Signal, Webex, Skype 같은 앱을 설치하게 해 「원격 조사」를 합니다. 위조한 신분증과 공문서를 보여줍니다. 「보석금」, 「보증금」 납부를 요구하며 응하지 않으면 강제 송환·인도한다고 협박합니다."
   },
   "a49a0e": {
    "text": "식별 요령: ① 재외공관이 전화로 사건 연루 사실을 통보하는 일은 없습니다. ② 본국 경찰이나 검찰이 전화나 메신저로 국경을 넘어 수사하지 않습니다. ③ 송금이나 앱 설치를 요구하는 일은 절대 없습니다. ④ 발신번호는 위조할 수 있으므로 「경찰」로 표시되어도 믿을 수 없습니다."
   },
   "a1f761": {
    "text": "2. 환전 사기(유학생에게 많음)"
   },
   "72ad22": {
    "text": "수법: SNS 단체방에 「환율 좋은 환전」, 「엔화가 급히 필요」라고 올립니다. 위조한 송금 화면을 보여주며 먼저 보내게 합니다. 「ABC 사기」——A는 본국 통화 쪽, B는 엔화 쪽인 척하며 양쪽에 동시에 송금하게 한 뒤 사라집니다. 「중개인」을 자처하며 양쪽을 모두 속이기도 합니다."
   },
   "edaa9e": {
    "text": "식별 요령: 환전은 은행의 정식 경로만 이용하세요. SNS 단체방의 낯선 사람이 올린 환전 정보는 모두 의심스럽다고 보세요. 먼저 보내고 나중에 받는 방식에는 절대 응하지 마세요. 「환율이 유난히 좋은」 환전은 대부분 사기입니다."
   },
   "3a818c": {
    "text": "3. 학교·교수 사칭"
   },
   "adabc1": {
    "text": "수법: 학교를 사칭한 메일로 「학비·등록비」 납부를 요구합니다. 교수를 사칭해 기프트카드 대리 구매나 대신 송금을 부탁합니다. 취약점을 이용해 교수의 메일 주소를 위조하기도 합니다."
   },
   "b41808": {
    "text": "식별 요령: 학교가 메일이나 전화로 은행 비밀번호를 묻거나 즉시 송금을 요구하는 일은 없습니다. 교수가 갑자기 대리 구매를 부탁하면 직접 만나거나 전화로 본인에게 확인하세요. 발신자 주소가 정말 학교 도메인인지 확인하세요."
   },
   "d246ca": {
    "text": "4. 문자·링크 피싱"
   },
   "e1d74f": {
    "text": "수법: 「월세 보증금」, 「ETC 기한 만료」, 「택배 보관 기한」 같은 문자에 링크를 붙여 결제하게 합니다. 택배사, 우체국, 전력회사를 사칭해 링크를 보냅니다."
   },
   "ffd258": {
    "text": "식별 요령: 링크를 보내 결제하게 하는 것은 사기입니다. 일본의 정식 결제는 편의점 납부, 은행 이체(振込), 자동이체입니다. 확실하지 않으면 링크를 열지 말고 공식 전화번호로 확인하세요."
   },
   "8eed64": {
    "text": "5. 가상 납치"
   },
   "b25888": {
    "text": "수법: 먼저 유학생을 외부와 차단된 상태로 만든 뒤, 본국 가족에게 납치했다고 연락해 몸값을 요구합니다. 정보 단절을 이용한 공갈입니다."
   },
   "a3c952": {
    "text": "식별 요령: 「아이가 납치됐다」는 연락을 받으면 즉시 재외공관에 확인하세요. 「가족에게 연락하지 말라」고 요구하는 것은 모두 사기입니다."
   },
   "9f1d78": {
    "text": "6. 부업·아르바이트 사기"
   },
   "aa1237": {
    "text": "수법: WhatsApp이나 SNS의 「부업 단체방」으로 끌어들여 고수입에 쉽다고 합니다. 먼저 물품 대금을 대납하거나 상품을 사게 합니다. 처음에는 소액을 돌려주다가 큰 금액이 모이면 들고 잠적합니다."
   },
   "2cd15e": {
    "text": "식별 요령: 먼저 내 돈을 쓰게 하는 부업은 모두 사기입니다. 재류카드에는 자격외활동허가의 범위가 기재되어 있으며, 지나치게 고수입인 「아르바이트」는 애초에 합법이 아닙니다. 모르는 WhatsApp 단체방은 즉시 나가고 신고하세요."
   },
   "55891a": {
    "text": "7. 편의점 기프트카드 사기"
   },
   "041a81": {
    "text": "수법: 경찰, 대사관, 기술자 등을 사칭해 「계좌 확인」, 「동결 해제」를 이유로 편의점에서 고액 기프트카드(V프리카, Apple Gift Card 등)를 사게 하고 번호와 코드를 알려주게 합니다."
   },
   "1449d2": {
    "text": "식별 요령: 정상적인 기관이 확인이나 결제를 위해 기프트카드 구매를 요구하는 일은 없습니다. 편의점 점원이 말려주기도 하지만 매번 막을 수 있는 것은 아닙니다."
   },
   "8eecc1": {
    "text": "8. 방문 판매·전력회사 변경"
   },
   "584b05": {
    "text": "수법: 전력회사나 인터넷 회선 담당자를 사칭해 방문하고 「바꾸면 더 싸다」며 개인정보를 캐내거나 비싼 요금제를 계약하게 합니다."
   },
   "ccc44b": {
    "text": "식별 요령: 방문 판매는 애초에 이득이 아닐 수 있습니다. 그 자리에서 계약하지 말고 「필요 없습니다」라고 말한 뒤 문을 닫으세요. 제대로 된 회사는 예고 없이 찾아오지 않습니다."
   },
   "3743ca": {
    "text": "2. 예방의 기본 원칙"
   },
   "daa01e": {
    "items": [
     {
      "title": "당황하지 않기, 믿지 않기, 돈 주지 않기",
      "desc": ""
     },
     {
      "title": "경찰·검찰이나 대사관을 사칭한 전화가 송금을 요구하면 → 바로 끊기",
      "desc": ""
     },
     {
      "title": "「비밀로 하라」, 「가족·친구에게 알리지 말라」고 요구하면 → 반드시 사기",
      "desc": ""
     },
     {
      "desc": "",
      "title": "확실하지 않으면 전화로 확인: 공관 공식 사이트에 나온 번호로 걸 것. 상대가 알려준 번호로는 걸지 말 것"
     }
    ]
   },
   "0252c5": {
    "text": "일상 예방: 모르는 번호는 받지 않고, 받았다면 녹음 후 바로 끊습니다. 상대가 대사관이나 경찰을 사칭하면 끊은 뒤 직접 공식 사이트의 번호를 찾아 다시 겁니다. SNS 단체방의 환전 정보에는 답하지도, 개인적으로 연락하지도 않습니다. 링크가 붙은 문자는 열지 않습니다. 기프트카드를 사라는 상대는 100% 사기이니 그 자리에서 대화를 끝냅니다. 학교나 교수의 송금 요청 메일은 직접 만나거나 전화로 확인합니다. 방문 판매에는 문을 열지 않거나 「필요 없습니다」라고 말한 뒤 닫습니다."
   },
   "2f22d1": {
    "text": "3. 일상 점검 표"
   },
   "02de93": {
    "headers": [
     "상황",
     "대처"
    ],
    "rows": [
     [
      "모르는 번호로 전화가 옴",
      "받지 않기. 받았다면 녹음 후 즉시 끊기"
     ],
     [
      "상대가 대사관·경찰이라고 함",
      "끊은 뒤 직접 공식 사이트 번호를 찾아 다시 걸어 확인"
     ],
     [
      "낯선 사람이 메신저로 친구 추가",
      "거절하거나 먼저 신원 확인"
     ],
     [
      "단체방의 환전 정보",
      "답하지 않고, 개인 연락도 하지 않고, 무시"
     ],
     [
      "링크가 붙은 문자 수신",
      "누르지 않기. 먼저 발신자 확인"
     ],
     [
      "기프트카드를 사라고 함",
      "100% 사기. 즉시 대화 종료"
     ],
     [
      "학교·교수의 송금 요청 메일",
      "직접 만나거나 전화로 확인"
     ],
     [
      "방문 판매",
      "문을 열지 않거나 「필요 없습니다」라고 말한 뒤 닫기"
     ]
    ]
   },
   "717d03": {
    "text": "4. 피해 후 응급 대응(우선순위)"
   },
   "c06ba5": {
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
      "desc": "가족이 본국 경찰이나 금융사기 대응 기관에 신고하도록 하세요",
      "title": "본국 가족에게도 신고 요청"
     },
     {
      "title": "영사관에 연락",
      "desc": "영사 조력 연락처는 공관 공식 사이트에서 확인하세요. 후쿠오카 소재 공관 연락처는 「긴급 연락처」 글에 정리되어 있습니다"
     },
     {
      "title": "주변에 알리기",
      "desc": "겪은 일을 단체방에 공유해 추가 피해를 막으세요"
     }
    ]
   },
   "6d59ab": {
    "text": "💡 사기를 당한 것은 당신의 잘못이 아닙니다. 사기 조직은 전문적으로 훈련받았고 피해자 중에는 고학력자도 있습니다. 돈을 되찾을 가능성은 크지 않지만 신고에는 의미가 있습니다(사건을 병합하고 조직을 추적할 수 있습니다). 부끄러움 때문에 침묵하지 마세요. 당신의 경험이 다른 사람을 구할 수 있습니다."
   },
   "3e86de": {
    "text": "5. 사기를 간파하는 요령"
   },
   "0125e2": {
    "text": "실제 사례와 단체방 경험에서: 상대의 말투를 확인하세요(사칭한 기관과 맞지 않는 억양이면 사기일 가능성이 큽니다). 사투리나 일본어로 응대하면 그대로 끊어버리는 경우가 많습니다. 어느 경찰서인지 물어본 뒤 직접 인터넷에서 공개 번호를 찾아 걸어보세요. 사기꾼은 조급해서 두어 마디만 의심해도 화를 냅니다. 무엇보다 중요한 것은 은행 정보를 지키는 것입니다 —— 진지하게 말하면, 계좌번호와 비밀번호를 잘 관리하세요."
   },
   "40510e": {
    "items": [
     {
      "text": "주후쿠오카 대한민국 총영사관",
      "url": "https://overseas.mofa.go.kr/jp-fukuoka-ko/index.do"
     }
    ]
   }
  }
 },
 "guide-bank": {
  "ja": {
   "637370": {
    "text": "自分で福岡銀行の店舗に行って開設する場合も、**必ず事前予約が必要**で、飛び込みは受け付けていません。"
   },
   "908368": {
    "text": "各銀行の特徴"
   },
   "9fb1a4": {
    "text": "銀行へ行く前に：印鑑・オリエンテーション・営業時間"
   },
   "930ced": {
    "text": "銀行の口座開設には必ず印鑑が必要です（シャチハタ不可）。来日前に個人の印鑑を必ず用意してください。ないと窓口で口座を開設できません。"
   },
   "9d3912": {
    "text": "銀行オリエンテーション（口座開設説明会）は留学手続きの中でも重要なもののひとつです。来日前に申込済みかどうか確認してください。通常の入学オリエンテーションとは別の行事で、それぞれ予約が必要です。大学の回を逃すと、その後は基本的に自分で銀行の窓口へ行くことになり、かなり時間がかかります。"
   },
   "a34b68": {
    "text": "銀行の営業時間"
   },
   "f68cb8": {
    "text": "日本の銀行の窓口営業時間は、一般に午前 10:00 から午後 15:00 までです。15:00 以降は ATM を除き窓口業務を一切行いません。口座開設や送金などは必ず営業時間内に行ってください。"
   },
   "49d42a": {
    "text": "お金を払う：家賃・授業料"
   },
   "9639d1": {
    "text": "交換留学生や JTW プログラムの学生は、家賃を銀行振込でしか払えないことが多く、現金は受け付けられません。口座を開設するとキャッシュカードが届き、ATM で入金や振込ができます。スマホの銀行アプリを使う必要はありません。"
   },
   "52174c": {
    "text": "注意：海外発行のカードは日本の家賃の支払いには直接使えません。また ATM は 17 時以降は使えなくなることが多いため、振込は営業時間内に済ませてください。"
   },
   "4e10c7": {
    "text": "授業料の口座振替"
   },
   "340c3a": {
    "text": "口座振替（自動引き落とし）を申し込んだのになかなか引き落とされない場合は、たいてい大学の事務処理が遅れているだけです。待っていて問題ありません。"
   },
   "beb008": {
    "text": "クレジットカードの申込"
   },
   "9e4ae1": {
    "text": "日本のクレジットカードは審査の考え方が独特で、来日直後で信用履歴がない状態では、従来型のカードは審査に通りにくいです。その点 PayPay カードは外国人にも比較的やさしく、スマホアプリから申し込めてハードルも低いため、最初の 1 枚として検討できます。"
   },
   "13aee8": {
    "text": "ただしクレジットカードの申込全般はやや複雑です。多くのカードは日本に 6 か月以上居住していること、かつ在留期間に十分な残りがあることを審査条件としています。学生の身分で通った場合の限度額は高くないのが普通で、主に日常の少額決済と信用の積み上げに使うものと考えてください。"
   },
   "299ec9": {
    "text": "ゆうちょ銀行"
   },
   "7f6376": {
    "text": "口座開設のハードルが最も低く、通常は在留カードと学生証があれば開設できます。在留期間が 6 か月未満でも開設可能です（一部機能に制限あり）。店舗が全国にあり、ATM の手数料も低めです。国費奨学金の受給者は大学がまとめて行う口座開設会で開設する必要があり、自分で郵便局へ行くことはできません。JASSO の学習奨励費もゆうちょ口座での受取が指定されています。"
   },
   "d6d8e4": {
    "text": "注意：来日 6 か月未満の時点では、海外からゆうちょ口座へ送金すると高めの手数料（1 回あたり約 7,500 円）がかかります。多額の海外送金の予定があるなら、早めに計画し、複数の方法を比較してください。"
   },
   "6f4401": {
    "text": "福岡銀行"
   },
   "767f70": {
    "text": "福岡の地元主要銀行です。開設には印鑑（シャチハタ不可）、在留カード、パスポートが必要です。窓口対応は現状ほぼ日本語で、支店によっては短期滞在の留学生の開設に慎重なところもあるため、事前に電話で確認することをおすすめします。"
   },
   "e9546f": {
    "text": "大学のオリエンテーションを逃した場合や、来日後に自分で早めに開設したい場合は、福岡銀行の公式サイトからの予約が必要です。少なくとも 1~2 週間前に手続きすることをおすすめします。大学のオリエンテーションでまとめて開設した口座は、その場ではキャッシュカードのみが交付されるのが普通です。通帳が必要な場合は、自分で店舗へ行って手続きしてください。"
   },
   "c93498": {
    "text": "西日本シティ銀行"
   },
   "7e1a3e": {
    "text": "開設には印鑑と在留カードが必要です。申込書の住所（漢字）は本人が書く必要があり、代筆はできません。手続き前に自分の住所の書き方を確認しておいてください。西日本シティ銀行は通常、予約なしで当日そのまま行けますが、手続きは全て日本語で行われるため、日本語に不安がある場合は日本語のできる人に同行してもらう必要があります。"
   },
   "b65e5c": {
    "text": "口座開設に必要なもの"
   },
   "1dc907": {
    "items": [
     {
      "text": "在留カード（裏面の住所欄に住所登録が済んでいること）"
     },
     {
      "text": "パスポート"
     },
     {
      "text": "印鑑（シャチハタ不可。普通の印鑑を用意してください）"
     },
     {
      "text": "学生証"
     },
     {
      "text": "電話番号（自分の番号がまだない場合は、Supporter やサポートセンターの番号を記入し、取得後に変更）"
     },
     {
      "text": "少額の現金（口座開設時の初回入金用）"
     }
    ]
   },
   "77b3a2": {
    "text": "後で海外から送金を受け取る必要がある場合、銀行はマイナンバーの提示を求めます。マイナンバーカードがまだ手元にないときは、マイナンバーが記載された住民票で代用できます。"
   },
   "35e7b3": {
    "text": "大学の一括開設会：福岡銀行のみ"
   },
   "66223f": {
    "text": "大学は新入生の到着後に「福岡銀行口座開設会」を 1 回開催し、その場でまとめて口座を開設します。自分で予約したりやり取りしたりする手間が省けます。ただし対象は福岡銀行のみで、ゆうちょや西日本シティを開きたい場合は自分で店舗へ行く必要があります。"
   },
   "9958c0": {
    "text": "**事前の申込が必要です**。入国支援システム（Pre-Arrival System）から予約します。同じ回で行政手続きの案内も行われるのが普通で、二つまとめて済ませるのが最も時間の節約になります。定員と開催回は大学からの通知に従ってください。"
   }
  },
  "en": {
   "637370": {
    "text": "If you open an account at a Fukuoka Bank branch on your own, **you must book in advance as well** — walk-ins are not accepted."
   },
   "908368": {
    "text": "Bank-by-Bank Notes"
   },
   "9fb1a4": {
    "text": "Before You Go: seal, orientation, opening hours"
   },
   "930ced": {
    "text": "Opening a bank account always requires a personal seal (a pre-inked シャチハタ stamp is not accepted). Be sure to prepare one before coming to Japan — without it the counter cannot open your account."
   },
   "9d3912": {
    "text": "The bank orientation (account-opening briefing) is one of the more important steps in your arrival paperwork; check before you come whether you have signed up. It is a separate event from the general enrolment orientation and needs its own booking. If you miss the university session, you will usually have to go to a bank counter yourself afterwards, which takes considerably longer."
   },
   "a34b68": {
    "text": "Bank opening hours"
   },
   "f68cb8": {
    "text": "Japanese bank counters are generally open from 10:00 to 15:00. After 15:00 nothing but the ATM is available — no counter or teller service at all — so be sure to go during opening hours for account opening, remittances, and similar business."
   },
   "49d42a": {
    "text": "Paying: rent and tuition"
   },
   "9639d1": {
    "text": "Exchange students and students on the JTW program can usually pay rent only by bank transfer; cash is not accepted. Once your account is open you will receive a cash card, which lets you deposit and transfer at an ATM — you do not need a mobile banking app."
   },
   "52174c": {
    "text": "Note: a bank card issued overseas cannot be used directly to pay rent in Japan, and ATMs generally stop working after 17:00, so complete transfers during working hours."
   },
   "4e10c7": {
    "text": "Tuition by direct debit"
   },
   "340c3a": {
    "text": "If you have applied for direct debit (口座振替) but nothing has been taken from your account for a while, it is usually just slow administrative processing at the university. Waiting is fine."
   },
   "beb008": {
    "text": "Applying for a Credit Card"
   },
   "9e4ae1": {
    "text": "Credit cards in Japan are assessed on their own logic, and with no credit history right after arriving, a conventional card application is easily refused. By comparison the PayPay card is relatively friendly to foreign residents — you can apply in the smartphone app and the bar is lower — so it is worth considering as your first card."
   },
   "13aee8": {
    "text": "That said, credit card applications are on the whole rather involved: most cards require you to have lived in Japan for at least six months and to have a comfortable amount of time left on your residence status. Limits granted on a student status are usually not high, so treat the card mainly as a way to make small everyday payments and build up credit."
   },
   "299ec9": {
    "text": "Japan Post Bank (ゆうちょ銀行)"
   },
   "7f6376": {
    "text": "The easiest to open: normally your residence card and student ID are enough, and you can open one even with less than six months of residence (with some functions limited). It has branches nationwide and comparatively low ATM fees. Recipients of Japanese government scholarships must open their account at the university’s organised account-opening session and cannot go to a post office on their own; JASSO’s honors scholarship also requires a Japan Post Bank account for payment."
   },
   "d6d8e4": {
    "text": "Note: within your first six months in Japan, money sent from abroad into a Japan Post Bank account incurs a relatively high fee (about 7,500 yen per transfer). If you expect a large overseas transfer, plan ahead and compare your options."
   },
   "6f4401": {
    "text": "Fukuoka Bank (福岡銀行)"
   },
   "767f70": {
    "text": "The main local bank in Fukuoka. Opening an account requires a seal (シャチハタ not accepted), your residence card, and your passport. Counter service is currently mostly in Japanese, and some branches may be cautious about opening accounts for short-stay students, so calling ahead is advisable."
   },
   "e9546f": {
    "text": "If you missed the university orientation, or want to open an account yourself soon after arriving, you must book through Fukuoka Bank’s official website — allow at least one to two weeks. Accounts opened collectively at the university orientation normally come with only the cash card on the day; if you want a passbook (通帳), you need to visit a branch separately."
   },
   "c93498": {
    "text": "Nishi-Nippon City Bank (西日本シティ銀行)"
   },
   "7e1a3e": {
    "text": "Requires a seal and your residence card. The address on the application form (in kanji) must be written by you personally — no one may write it for you — so check how your address is written before you go. Nishi-Nippon City Bank normally accepts walk-ins on the day without a booking, but the entire process is conducted in Japanese; if your Japanese is not strong, bring someone who speaks it."
   },
   "b65e5c": {
    "text": "What to bring"
   },
   "1dc907": {
    "items": [
     {
      "text": "Residence card (with your address registered on the back)"
     },
     {
      "text": "Passport"
     },
     {
      "text": "Personal seal (シャチハタ not accepted — bring a regular seal)"
     },
     {
      "text": "Student ID"
     },
     {
      "text": "Phone number (if you do not have your own yet, you may enter a Supporter’s or the support center’s number and change it later)"
     },
     {
      "text": "A little cash (for the initial deposit)"
     }
    ]
   },
   "77b3a2": {
    "text": "If you later need to receive money from abroad, the bank will ask for your My Number. If you do not yet have your My Number card, a residence certificate (住民票) showing your My Number can be used instead."
   },
   "35e7b3": {
    "text": "The University’s Group Session: Fukuoka Bank only"
   },
   "66223f": {
    "text": "After new students arrive, the university holds one “Fukuoka Bank account-opening session” where accounts are opened together on the spot, sparing you the booking and the negotiation. But it covers Fukuoka Bank only — for Japan Post Bank or Nishi-Nippon City you must go to a branch yourself."
   },
   "9958c0": {
    "text": "**Advance registration is required**, booked through the Pre-Arrival System (入国支援システム). The same session usually also covers guidance on administrative procedures, and doing both at once saves the most time. Capacity and session dates follow the university’s announcements."
   }
  },
  "ko": {
   "637370": {
    "text": "직접 후쿠오카은행 지점에 가서 개설하는 경우에도 **반드시 사전 예약이 필요**하며 당일 방문은 받지 않습니다."
   },
   "908368": {
    "text": "은행별 특징"
   },
   "9fb1a4": {
    "text": "은행에 가기 전: 도장·오리엔테이션·영업시간"
   },
   "930ced": {
    "text": "은행 계좌 개설에는 반드시 도장이 필요합니다(샤치하타 불가). 입국 전에 개인 도장을 꼭 준비하세요. 없으면 창구에서 계좌를 개설할 수 없습니다."
   },
   "9d3912": {
    "text": "은행 오리엔테이션(계좌 개설 설명회)은 유학 수속 중에서도 중요한 편에 속합니다. 입국 전에 신청했는지 확인하세요. 일반 입학 오리엔테이션과는 별개의 행사로 각각 예약해야 합니다. 학교가 마련한 회차를 놓치면 이후에는 대개 직접 은행 창구에 가야 하며 시간이 상당히 걸립니다."
   },
   "a34b68": {
    "text": "은행 영업시간"
   },
   "f68cb8": {
    "text": "일본 은행의 창구 영업시간은 보통 오전 10:00부터 오후 15:00까지입니다. 15:00 이후에는 ATM을 제외하고 창구 업무를 일절 처리하지 않으니, 계좌 개설이나 송금은 반드시 영업시간 내에 하세요."
   },
   "49d42a": {
    "text": "돈 내기: 월세·수업료"
   },
   "9639d1": {
    "text": "교환학생과 JTW 프로그램 학생은 대개 은행 이체로만 월세를 낼 수 있고 현금은 받지 않습니다. 계좌를 개설하면 캐시카드가 나오며, ATM에서 입금과 이체를 할 수 있어 모바일 뱅킹 앱을 쓸 필요가 없습니다."
   },
   "52174c": {
    "text": "주의: 해외에서 발급한 카드는 일본 월세 납부에 바로 쓸 수 없습니다. 또 ATM은 보통 17시 이후에는 이용할 수 없으니 이체는 업무 시간 내에 마치세요."
   },
   "4e10c7": {
    "text": "수업료 자동이체(口座振替)"
   },
   "340c3a": {
    "text": "자동이체를 신청했는데 한참 출금되지 않는다면 대개 학교의 행정 처리가 느린 탓입니다. 기다리면 됩니다."
   },
   "beb008": {
    "text": "신용카드 신청"
   },
   "9e4ae1": {
    "text": "일본의 신용카드는 심사 방식이 독특해서, 갓 입국해 신용 이력이 없는 상태에서는 기존 방식의 카드는 거절되기 쉽습니다. 그에 비해 PayPay 카드는 외국인에게 비교적 우호적이고 스마트폰 앱으로 신청할 수 있으며 문턱도 낮아 첫 카드로 고려할 만합니다."
   },
   "13aee8": {
    "text": "다만 신용카드 신청은 전반적으로 복잡한 편입니다. 대부분의 카드가 일본 거주 6개월 이상, 그리고 재류 기간이 충분히 남아 있을 것을 심사 조건으로 합니다. 학생 신분으로 승인되는 한도는 보통 높지 않으므로, 주로 일상적인 소액 결제와 신용 적립용으로 생각하세요."
   },
   "299ec9": {
    "text": "유초은행(ゆうちょ銀行)"
   },
   "7f6376": {
    "text": "계좌 개설 문턱이 가장 낮아, 보통 재류카드와 학생증만 있으면 개설할 수 있고 재류 기간이 6개월 미만이어도 개설이 가능합니다(일부 기능 제한). 점포가 전국에 있고 ATM 수수료도 낮은 편입니다. 일본 정부 장학생은 학교가 일괄 진행하는 계좌 개설회에서 개설해야 하며 직접 우체국에 갈 수 없습니다. JASSO 학습장려비도 유초 계좌로 수령하도록 지정되어 있습니다."
   },
   "d6d8e4": {
    "text": "주의: 입국 6개월 미만 시점에는 해외에서 유초 계좌로 송금할 때 수수료가 높습니다(1회 약 7,500엔). 큰 금액의 해외 송금 계획이 있다면 미리 계획하고 여러 방법을 비교하세요."
   },
   "6f4401": {
    "text": "후쿠오카은행(福岡銀行)"
   },
   "767f70": {
    "text": "후쿠오카의 대표적인 지역 은행입니다. 개설에는 도장(샤치하타 불가), 재류카드, 여권이 필요합니다. 창구 응대는 현재 대부분 일본어이며, 지점에 따라 단기 체류 유학생의 개설에 신중한 곳도 있으니 미리 전화로 확인하기를 권합니다."
   },
   "e9546f": {
    "text": "학교 오리엔테이션을 놓쳤거나 입국 후 직접 미리 개설하고 싶다면 후쿠오카은행 공식 사이트에서 예약해야 하며, 최소 1~2주 전에 처리하기를 권합니다. 학교 오리엔테이션에서 일괄 개설한 계좌는 현장에서 보통 캐시카드만 교부됩니다. 통장이 필요하면 직접 지점에 가서 신청해야 합니다."
   },
   "c93498": {
    "text": "니시니혼시티은행(西日本シティ銀行)"
   },
   "7e1a3e": {
    "text": "개설에는 도장과 재류카드가 필요합니다. 신청서의 주소(한자)는 본인이 직접 써야 하며 대필은 안 되니, 가기 전에 자기 주소의 표기를 확인해 두세요. 니시니혼시티은행은 보통 예약 없이 당일 방문이 가능하지만, 모든 절차가 일본어로 진행되므로 일본어가 서툴다면 일본어가 가능한 사람과 동행해야 합니다."
   },
   "b65e5c": {
    "text": "개설 준비물"
   },
   "1dc907": {
    "items": [
     {
      "text": "재류카드(뒷면 주소란에 주소 등록이 완료되어 있을 것)"
     },
     {
      "text": "여권"
     },
     {
      "text": "도장(샤치하타 불가, 일반 도장을 준비하세요)"
     },
     {
      "text": "학생증"
     },
     {
      "text": "전화번호(본인 번호가 아직 없으면 Supporter나 서포트센터 번호를 적고, 받은 뒤 변경)"
     },
     {
      "text": "소액의 현금(계좌 개설 시 최초 입금용)"
     }
    ]
   },
   "77b3a2": {
    "text": "이후 해외에서 송금을 받아야 한다면 은행이 마이넘버 제시를 요구합니다. 마이넘버카드가 아직 없다면 마이넘버가 기재된 주민표(住民票)로 대신할 수 있습니다."
   },
   "35e7b3": {
    "text": "학교의 일괄 개설회: 후쿠오카은행만"
   },
   "66223f": {
    "text": "학교는 신입생 도착 후 「후쿠오카은행 계좌 개설회」를 한 차례 열어 현장에서 일괄 개설합니다. 직접 예약하고 소통하는 수고를 덜 수 있습니다. 다만 후쿠오카은행 한 곳만 해당되며, 유초나 니시니혼시티를 개설하려면 직접 지점에 가야 합니다."
   },
   "9958c0": {
    "text": "**사전 신청이 필요합니다**. 입국지원시스템(Pre-Arrival System)으로 예약합니다. 같은 회차에 행정 수속 안내도 함께 진행되는 것이 보통이라, 두 가지를 한 번에 끝내는 것이 시간 절약에 가장 좋습니다. 정원과 회차는 학교 공지를 따르세요."
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
      "text": "#7119——急な病気で救急車を呼ぶべきか迷うときの救急電話相談（福岡県、24時間）。短縮番号がつながらない場合は 092-471-0099"
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
    "text": "詐欺に遭ったら（被害後の応急対応）"
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
      "text": "#7119 — emergency phone consultation when you fall ill suddenly and are unsure whether to call an ambulance (Fukuoka Prefecture, 24 hours). If the short number will not connect, dial 092-471-0099"
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
    "text": "If You Are Scammed (emergency response)"
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
    "text": "사기를 당했다면(피해 후 응급 대응)"
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
    "text": "日本の生活では印鑑が必要な場面が多くあります。「ドン・キホーテ」のセルフ彫刻機で作れます（およそ 500 円から）。漢字、ひらがな、カタカナ、アルファベットのいずれでも彫れます。注意：シャチハタ（インク内蔵式）は銀行の口座開設には使えないので、普通の材質の印鑑を用意してください。"
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
    "text": "出発前に：小銭を用意しておく"
   },
   "0da744": {
    "text": "**公共交通機関を使う予定なら、空港を出る前に小銭を作っておいてください。**\n地下鉄と JR の区間はクレジットカードのタッチ決済が使えますが（次の節を参照）、学内の昭和バスは現金か IC カードしか受け付けません。日本のバスの両替機は通常 1,000 円札のみで、5,000 円札と 10,000 円札は崩せません。そして空港の ATM から出てくるのはたいてい 10,000 円札です。空港のコンビニで先に崩し、1,000 円札を数枚と硬貨を手元に残しておくことをおすすめします。"
   },
   "c04837": {
    "text": "空港から伊都へ：まず送迎バスの有無を確認"
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
      "センターゾーン入口 / ビッグオレンジ / 中央図書館",
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
    "text": "寮に着いたら：当日は何時に着いても入居できます"
   },
   "d5f4d7": {
    "text": "ですから便の遅延や乗り継ぎのトラブル、やむを得ずタクシーに変更した場合でも、その晩の泊まる場所を心配する必要はありません。"
   },
   "8e952c": {
    "text": "到着後の数日の手続き順序"
   },
   "da2b75": {
    "text": "落ち着いてからの手続きは次の順に進めます：① SIM カード → ② 銀行口座 → ③ 国民健康保険 → ④ 自転車と生活必需品 → ⑤ キャンパスに慣れる。"
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
    "text": "**運行日、本数、経路は毎期異なり、各寮と各学府がそれぞれ通知します。** 上に挙げたのは停留所だけです —— 何時に出るのか、どこまで行くのかは、必ず自分が受け取った寮または学府からの通知に従ってください。前年の内容をそのまま当てはめないように。"
   },
   "7dc6be": {
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
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
    "text": "A seal is needed in many situations in Japan. You can have one cut at the self-service machines in Don Quijote (from around 500 yen), in kanji, hiragana, katakana, or the Latin alphabet. Note: a シャチハタ (pre-inked) stamp cannot be used to open a bank account, so buy an ordinary one."
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
    "text": "Before You Set Off: get small change first"
   },
   "0da744": {
    "text": "**If you plan to use public transport, break your notes into small change before leaving the airport.**\nThe subway and JR sections accept contactless credit cards (see the next section), but the Showa Bus on campus takes only cash or an IC card. Change machines on Japanese buses usually accept only 1,000 yen notes — 5,000 and 10,000 yen notes cannot be broken. And airport ATMs mostly dispense 10,000 yen notes. Break one at an airport convenience store and keep a few 1,000 yen notes and some coins on you."
   },
   "c04837": {
    "text": "From the Airport to Ito: first check whether a shuttle is running"
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
    "text": "Arriving at the Dormitory: any hour on the day is fine"
   },
   "d5f4d7": {
    "text": "So if your flight is delayed, a connection goes wrong, or you have to switch to a taxi, there is no need to worry about having nowhere to sleep that night."
   },
   "8e952c": {
    "text": "The Order of Things in Your First Days"
   },
   "da2b75": {
    "text": "Once you have settled in, work through the procedures in this order: ① SIM card → ② bank account → ③ National Health Insurance → ④ a bicycle and daily necessities → ⑤ getting to know the campus."
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
    "text": "**Dates, frequency, and route differ every intake, and are announced separately by each dormitory and each graduate school.** Only the stops are listed above — when it departs and where it goes is governed entirely by the notice you receive from your dormitory or faculty. Do not copy last year’s arrangements."
   },
   "7dc6be": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
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
    "text": "일본 생활에서는 도장이 필요한 곳이 많습니다. 「돈키호테」의 셀프 각인 기계에서 만들 수 있고(약 500엔부터) 한자·히라가나·가타카나·알파벳 모두 새길 수 있습니다. 주의: 샤치하타(잉크 내장식)는 은행 계좌 개설에 쓸 수 없으니 일반 재질의 도장을 준비하세요."
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
    "text": "출발 전: 잔돈부터 마련하기"
   },
   "0da744": {
    "text": "**대중교통을 이용할 계획이라면 공항을 나서기 전에 잔돈을 만들어 두세요.**\n지하철과 JR 구간은 신용카드 터치 결제가 되지만(다음 절 참조), 교내의 쇼와 버스는 현금이나 IC 카드만 받습니다. 일본 버스의 환전기는 보통 1,000엔 지폐만 받고 5,000엔과 10,000엔 지폐는 바꿀 수 없습니다. 그런데 공항 ATM에서 나오는 것은 대개 10,000엔 지폐입니다. 공항 편의점에서 먼저 깨고 1,000엔 지폐 몇 장과 동전을 손에 두는 것을 권합니다."
   },
   "c04837": {
    "text": "공항에서 이토까지: 먼저 셔틀버스 유무 확인"
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
    "text": "기숙사 도착: 당일 몇 시에 도착해도 입주 가능"
   },
   "d5f4d7": {
    "text": "그러니 항공편 지연이나 환승 문제, 부득이하게 택시로 바꿔야 하는 상황이라도 그날 밤 잘 곳을 걱정할 필요는 없습니다."
   },
   "8e952c": {
    "text": "도착 후 며칠간의 처리 순서"
   },
   "da2b75": {
    "text": "자리를 잡은 뒤의 수속은 다음 순서로 진행합니다: ① SIM 카드 → ② 은행 계좌 → ③ 국민건강보험 → ④ 자전거와 생필품 → ⑤ 캠퍼스 익히기."
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
    "text": "**운행 날짜, 편수, 노선은 기수마다 다르며 각 기숙사와 각 대학원이 따로 공지합니다.** 위에는 정류장만 적었습니다 —— 언제 출발하는지, 어디까지 가는지는 반드시 본인이 받은 기숙사나 학부의 공지를 따르고, 지난해의 내용을 그대로 적용하지 마세요."
   },
   "7dc6be": {
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   }
  }
 },
 "guide-housing": {
  "ja": {
   "161806": {
    "items": [
     {
      "text": "九州大学指定寮：大学が民間マンションと契約しており、保証人なしで入居できます。詳しくは留学課へ"
     },
     {
      "text": "公営住宅（市営・県営）：家賃は安いものの募集期間が限られます。申込窓口はさいとぴあの区役所で、入居には九州大学住宅保証制度への加入が必要です"
     },
     {
      "text": "九大生協 管理アパート：生協の店舗（伊都皎皎舎）または公式サイトで確認できます"
     },
     {
      "text": "福岡国際交流会館：多言語対応で、外国人向けです"
     },
     {
      "text": "シェアハウス／ゲストハウス：糸島地区には古民家のシェアハウス（糸結、ことのは など）があります"
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "「入国支援システム」からオンライン申請",
      "desc": "留学生はこのルートを使い、来日前に済ませます。複数の宿舎を同時に申し込み、志望順位を書けます。"
     },
     {
      "title": "締切前に提出",
      "desc": "2026 年 10 月期の例では、締切はその年の 7 月 31 日 17:00（日本時間）。"
     },
     {
      "title": "結果通知を待つ",
      "desc": "10 月期は 8 月末ごろ、本人と指導教員にメールで通知されます。"
     },
     {
      "title": "早めにフライトを登録",
      "desc": "入寮日の 7 営業日前までにシステムでフライト情報を入力しないと、予定どおり入居できません。"
     }
    ]
   },
   "910043": {
    "text": "交通：糸島系統の九大線はすべて経由し、九大線系統にも 2A 線が 1 本通ります。使える停留所は 国際村前、伊都の湯どころ入口、泊北口 の 3 つ。国際村前が最も近く 2A 線は全て停まりますが、糸島系統は一部の路線しか経由しません。国際村前を通らない糸島線はすべて伊都の湯どころ入口に停まり、大学方面へはここで降りたほうが近く、道路を渡らずに済みます。泊北口は上記の路線が全て停まります。"
   },
   "59e679": {
    "text": "まず学内宿舎：4 か所の選び方"
   },
   "ec0d25": {
    "text": "多くの留学生は 1 年目をまず学内宿舎で過ごし、生活が落ち着いてから自分で部屋を借ります。伊都キャンパスで申し込めるのは 4 か所、ドミトリー1/2/3（D1/D2/D3）と伊都協奏館で、いずれも留学生と日本人学生が混住します。ほかに SETTLE International という民間マンションがありますが、九州大学が留学生宿舎に指定しており申込ルートは同じです。詳細は後の独立した節をご覧ください。"
   },
   "bdce7d": {
    "headers": [
     "宿舎",
     "部屋タイプ",
     "月額",
     "校舎まで"
    ],
    "rows": [
     [
      "D1",
      "個室 13 ㎡（254 室）",
      "23,000 円 + 光熱水費",
      "徒歩約 5 分"
     ],
     [
      "D2",
      "個室 17 ㎡（242 室）／夫婦室 43 ㎡（20 室）",
      "個室 30,000 円 + 光熱水費",
      "徒歩約 5 分"
     ],
     [
      "D3",
      "4 人ユニット共用（個室 7 ㎡ + 共用 28 ㎡）",
      "23,500 円 込み",
      "徒歩約 5 分"
     ],
     [
      "伊都協奏館",
      "個室 17 ㎡（549 室）／夫婦室 43 ㎡（15 室）",
      "個室 21,000 円 + 光熱水費",
      "徒歩約 15 分"
     ]
    ]
   },
   "612bb9": {
    "text": "月額 = 寄宿料 + 共益費 4,500 円。D3 の 23,500 円には光熱水費とネット代が含まれており、4 か所で唯一の「込み」です。ほかの 3 か所は水道光熱費が実費で、ネットも指定事業者と自分で契約する必要があります（月 2,000～3,500 円程度）。4 か所とも敷金 30,000 円が別途必要で、退去時に返還されます。"
   },
   "a35e71": {
    "text": "**ずっと住み続けられるわけではありません。** 宿舎は学期ごとに募集し、1 回はおよそ半年です（例：2026 年 10 月期は入居日から 2027 年 3 月 15 日まで）。毎年 4 月期と 10 月期の 2 回あり、期限が来たら規定に従って再申請するか退去します。長期の計画を立てるときはこの点を織り込んでください。"
   },
   "e96b54": {
    "items": [
     {
      "text": "4 か所とも食堂はありません —— 大学も「いずれの寄宿舎にも食堂はございません」と明記しています。食事は自炊か学内食堂で"
     },
     {
      "text": "留学生は寝具の貸与が必須：半年 7,480 円、または 1 年 14,960 円"
     },
     {
      "text": "夫婦室は留学生のみ申込可で、D2 と伊都協奏館にしかありません"
     },
     {
      "text": "D3 は 4 人 1 ユニットの共用型で、1 ユニットあたり留学生 2 人 + 日本人学生 2 人と決まっています。申込時に国際交流の動機を書く必要があります"
     }
    ]
   },
   "0785ee": {
    "text": "宿舎の申込方法"
   },
   "f917d8": {
    "text": "D3 は第一志望でしか出せず、井尻寮との併願もできません。部屋が割り当てられた後は原則として変更できません。"
   },
   "f7acdc": {
    "text": "⬜要確認：**研究生（リサーチスチューデント）と交換留学生が入居できるかどうか。** 日本人向けのルートでは研究生・聴講生など正課生でない身分は明確に除外されています。留学生ルートの募集要項には「新たに来学・来日予定の留学生」としか書かれておらず、この 2 つの身分について個別の説明がありません。判断がつかない場合は直接問い合わせてください：国際部留学課受入支援係 imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "九州大学・学生寮",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "九州大学・宿舎情報サイト",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC・留学生宿舎の詳細",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "入国支援システム（申込窓口）",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "福岡 3 エリアの選び方"
   },
   "c9a766": {
    "text": "学研（九大学研都市駅周辺）"
   },
   "60cdc9": {
    "text": "3 エリアの中で最も範囲が広く、バスの始発地なので全路線に乗れ、通学が最も便利です。その分、同条件の家賃は周船寺のおよそ 1.1~1.2 倍になります。"
   },
   "095a6e": {
    "text": "周船寺"
   },
   "fe6c53": {
    "text": "距離、家賃、生活の便利さのバランスが取れています。建物がやや古いところもあり、木造は防音がいまひとつ。交通は主に周船寺線に頼ることになり、バス路線は学研ほど豊富ではありません。"
   },
   "298caa": {
    "text": "キャンパスのすぐ隣"
   },
   "374ae9": {
    "text": "建物は比較的新しく非木造が多く、基本的な家電が付いている物件もあります。難点は周辺に店が少ないことで、日々の買い物はコンビニ頼みになりがちで、生活の利便性は低めです。"
   },
   "02657e": {
    "text": "経験参考：2022 年から学研に住んでいる学生の例では、大家が当初およそ 2 倍の値上げを提示しましたが、交渉の結果 53,000 円/月で据え置きになりました。家賃には交渉の余地があり、更新時に相談してみる価値はあります。"
   },
   "1bb6a1": {
    "text": "初期費用"
   },
   "fa402b": {
    "text": "賃貸の初期費用は一般に家賃の 4~5 か月分で、クリーニング代、鍵交換代、管理費などを含みます（経験に基づく幅で、実際は契約によります）。審査には 1 か月ほどかかるので、7 月入居を考えているなら 5 月には部屋探しを始めるとよいでしょう。"
   },
   "c505d6": {
    "text": "水道・光熱費"
   },
   "495d0f": {
    "text": "夏にエアコンを使うと、電気・ガス・水道を合わせて月 20,000 円程度になります（使い方によって変わる経験値です）。"
   },
   "cb74b3": {
    "text": "郵便物の転送"
   },
   "994e7b": {
    "text": "引っ越し後の郵便局での転送手続きは 参照【在留手続き·郵便物の転送】。ここでは繰り返しません。"
   },
   "c541f6": {
    "text": "周辺の実用リンク"
   },
   "11a7ad": {
    "items": [
     {
      "text": "家賃相場（HOME’S）",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO 学生版（九大伊都キャンパス周辺）",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "url": "https://www.kyudaimae.co.jp/",
      "text": "九大前不動産"
     },
     {
      "text": "周船寺・段ボールの持ち込み場所",
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
      "text": "キャンパス健康センター・相談",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "そのほかの住まい探しルート"
   },
   "4919b5": {
    "text": "伊都キャンパス周辺の賃貸物件は限られているので、複数のルートを並行することをおすすめします："
   },
   "83dd45": {
    "text": "注意：特別聴講学生や研究生など正課生でない身分の場合、賃貸に制限がかかることがあります。事前にサポートセンターへ相談してください。"
   },
   "69b4a1": {
    "text": "さらに外側の 2 エリア：高田、富士見・泉"
   },
   "a7c359": {
    "headers": [
     "エリア",
     "位置",
     "家賃",
     "生活",
     "通学"
    ],
    "rows": [
     [
      "高田",
      "周船寺と波多江駅の間、糸島市",
      "福岡市西区より安い",
      "買い物・食事は問題なし",
      "高田経由の糸島九大線。本数はやや少なめ。原付や車があれば農道を通ってすぐ"
     ],
     [
      "富士見・泉",
      "周船寺と大学の中間、静かな住宅地",
      "周船寺中心よりやや安い",
      "北へ行くほど店が減り、南の周船寺か東の学園通りへ出る必要あり",
      "周船寺経由または学園通り経由の九大線で、比較的便利"
     ]
    ]
   },
   "d28f07": {
    "text": "市をまたぐ点に注意：高田は糸島市なので、手続きは筑前前原駅近くの糸島市役所へ。福岡市西区に住む場合は九大学研都市駅近くの福岡市役所西部出張所です。ゴミ袋も両市で共通ではないので、買う前にどちらに属するか確認してください。"
   },
   "3dede6": {
    "text": "SETTLE International：ほかの宿舎とは別物"
   },
   "6eed67": {
    "text": "SETTLE は実際には一般向けに営業している商業マンションで、入居者の約半分は日本人学生です。そのため価格は最も高く、条件も最も良いです。運営の仕組みが違うので、ほかの宿舎や協奏館の経験はたいてい当てはまりません。また糸島市にあるため、各種の手続きも福岡市西区に住む人とは異なります。"
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
      "月合計",
      "約 50,320 円 + 電気ガス実費（ネット無料、ルーターは自分で用意）"
     ],
     [
      "入居時一時金",
      "132,100 円（敷金 30,000 + カードキー 16,500 + 清掃 58,300 + 諸経費 27,300）"
     ]
    ]
   },
   "482c1e": {
    "text": "**価格体系が 2 つあります。見間違えないように。** 上の表は九大の申込ルートで入居する場合の価格です。運営会社から直接借りる場合は別の体系になります（家賃が別建て、礼金と 1 年契約があり、食費は月ごとに別途）。どちらも公式に併存しているので、申込前に自分がどちらのルートなのか確認してください。"
   },
   "ee03f5": {
    "text": "公式情報の補足：部屋タイプは 1R 約 18.48～21.69 ㎡（2 種類あり指定不可）、食堂あり（食費は別途）、6 階に学習室（10:00–20:00）。入居期間はほかの宿舎より半年ほど長めです。価格と設備は公式の最新案内が優先します。"
   },
   "adf452": {
    "items": [
     {
      "text": "立地：キャンパス南西、南門の外側。農学部と工学部に近く高台にあり、南門から大学へは長い坂を上ります"
     },
     {
      "text": "向き：北向きの部屋は駐車場と県道に面し、採光が悪く道路の騒音が目立ちます。南向きは人工池に面し、夏は日差しが強く虫も多いです"
     },
     {
      "text": "設備：建物は新しく、最上階に自習室と乾燥機、1 階に食堂があります"
     },
     {
      "text": "周辺：交差点のコンビニ以外にスーパーはありません。交差点から北に入浴施設（ジム併設）が 1 軒、ほかに数軒の飲食店があります"
     }
    ]
   },
   "8d272b": {
    "text": "経験参考：食堂付きは日本の学生マンションではよくある形式で、九大のようなアクセスの不便な立地では確かに価値があります。ただし住んだ人の話では、味も価格も特筆するほどではないとのこと。宿舎として入居する場合は商業マンションの高額な初期費用がかからないので、低コストで試してみる機会と考えることもできます。"
   },
   "9c8146": {
    "text": "本数が少なく、徒歩圏に生活施設がほとんどないため、いつでも出かけたいなら自分の移動手段が要ります。SETTLE から大学まではずっと坂です（南へ国道沿いに出るぶんには平坦）。普通の自転車ではかなりきつく、電動アシストは高いうえに坂が特別楽になるわけでもありません。坂を自転車で上る自信がなければ、原付を検討することをおすすめします —— 参照【交通·原付 / 免許】。"
   },
   "63c7c3": {
    "text": "不動産会社の選び方"
   },
   "be819d": {
    "text": "ネットで気に入った物件を見つけても、実際の物件はたいていどこかの不動産会社が握っています。写真だけで判断するのは危ういので、できるだけ現地を見てください。迷う物件はグループで聞いてみると、今住んでいる人や住んだことのある人に当たる確率が高いです。"
   },
   "89ee7b": {
    "headers": [
     "不動産会社",
     "特徴"
    ],
    "rows": [
     [
      "九大生協",
      "公式に聞こえますが大学の機関ではありません。自社管理の一部物件は仲介手数料なし"
     ],
     [
      "エイブル",
      "全国チェーン。仲介手数料は家賃の半月分"
     ],
     [
      "三好不動産",
      "福岡の地元で実力のある会社"
     ],
     [
      "アパマンショップ",
      "イオンの下にあり、スーパーのついでに寄れます"
     ],
     [
      "九大前不動産",
      "SETTLE International を管理"
     ],
     [
      "日本ハウス",
      "自社管理の一部物件は仲介手数料なし"
     ],
     [
      "ホームメイト",
      "大学近くの物件は多いものの、実店舗は姪浜"
     ]
    ]
   },
   "4e0936": {
    "text": "経験参考：以上は住んだ人の印象です。各社の方針は変わるので、契約前は実際の見積もりを確認してください。生協が出している九大の住まい探し情報誌は一度目を通しておくと、価格とエリアの相場観がつかめます。"
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME’S（地図モードでの物件探しが便利）",
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
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "161806": {
    "items": [
     {
      "text": "Kyushu University designated dormitories: the university contracts with private apartment buildings, so you can move in without a guarantor. Ask the International Student Affairs Division"
     },
     {
      "text": "Public housing (city/prefectural): rent is lower but application periods are limited. The desk is at the ward office in Saitopia, and moving in requires joining the Kyushu University housing guarantee scheme"
     },
     {
      "text": "Apartments managed by the Kyudai co-op: check the co-op shop (Ito Kokosha) or their website"
     },
     {
      "text": "Fukuoka International House: multilingual, aimed at foreign residents"
     },
     {
      "text": "Share houses / guest houses: the Itoshima area has old-house share houses (Itoyui, Kotonoha, and others)"
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "Apply online through the Pre-Arrival System",
      "desc": "International students use this route and must complete it before coming to Japan. You can apply to several dormitories at once and rank your preferences."
     },
     {
      "title": "Submit before the deadline",
      "desc": "For the October 2026 term, the deadline was 31 July of that year at 17:00 Japan time."
     },
     {
      "title": "Wait for the result",
      "desc": "For the October term, notification goes by email to you and your supervisor around the end of August."
     },
     {
      "title": "Register your flight early",
      "desc": "Enter your flight details in the system at least 7 business days before your move-in date, or you will not be able to move in on schedule."
     }
    ]
   },
   "910043": {
    "text": "Transport: every Itoshima-system Kyudai line passes here, and one route in the Kyudai-line system, 2A, does too. Three stops are usable: Kokusaimura-mae, Ito-no-Yudokoro-iriguchi, and Tomari-Kitaguchi. Kokusaimura-mae is the closest and all 2A services stop there, but only some Itoshima-system routes pass it. Itoshima lines that skip Kokusaimura-mae all stop at Ito-no-Yudokoro-iriguchi, which is closer for the university direction and saves crossing the road. Tomari-Kitaguchi is served by all of the above."
   },
   "59e679": {
    "text": "Start with Campus Dorms: choosing among four"
   },
   "ec0d25": {
    "text": "Most international students spend their first year in a campus dormitory and only look for their own apartment once they have settled in. Four are open to applications at Ito Campus: Dormitory 1/2/3 (D1/D2/D3) and Ito Kyousoukan, all of which mix international and Japanese students. There is also SETTLE International, a private apartment building that Kyushu University has designated as international student housing and which uses the same application route — see its own section further down."
   },
   "bdce7d": {
    "headers": [
     "Dorm",
     "Room type",
     "Monthly",
     "To classrooms"
    ],
    "rows": [
     [
      "D1",
      "Single 13 ㎡ (254 rooms)",
      "¥23,000 + utilities",
      "About 5 min on foot"
     ],
     [
      "D2",
      "Single 17 ㎡ (242 rooms) / couple 43 ㎡ (20 rooms)",
      "Single ¥30,000 + utilities",
      "About 5 min on foot"
     ],
     [
      "D3",
      "4-person shared unit (private 7 ㎡ + shared 28 ㎡)",
      "¥23,500 all-inclusive",
      "About 5 min on foot"
     ],
     [
      "Ito Kyousoukan",
      "Single 17 ㎡ (549 rooms) / couple 43 ㎡ (15 rooms)",
      "Single ¥21,000 + utilities",
      "About 15 min on foot"
     ]
    ]
   },
   "612bb9": {
    "text": "Monthly = boarding fee + ¥4,500 common service charge. D3’s ¥23,500 already includes electricity, gas, water, and internet — the only all-inclusive option of the four. At the other three, utilities are metered and you also have to sign up for internet yourself with the designated provider (roughly ¥2,000–3,500/month). All four take a ¥30,000 deposit, refundable when you move out."
   },
   "a35e71": {
    "text": "**You cannot simply stay indefinitely.** Dormitories are allocated each term, roughly half a year at a time (for example, the October 2026 term runs from the move-in date to 15 March 2027). There are two rounds a year, April and October; when your term ends you must reapply under the rules or move out. Factor this in when making long-term plans."
   },
   "e96b54": {
    "items": [
     {
      "text": "None of the four has a canteen — the university states plainly that “none of the dormitories has a dining hall”. You will cook for yourself or eat at a campus canteen"
     },
     {
      "text": "International students must rent bedding: ¥7,480 for half a year, or ¥14,960 for a year"
     },
     {
      "text": "Couple rooms are only open to international students, and only exist at D2 and Ito Kyousoukan"
     },
     {
      "text": "D3 is a shared four-person unit, fixed at 2 international and 2 Japanese students per unit; the application asks you to write about your motivation for international exchange"
     }
    ]
   },
   "0785ee": {
    "text": "How to Apply"
   },
   "f917d8": {
    "text": "D3 can only be listed as your first choice, and cannot be combined with an application to Ijiri dormitory. Once a room is assigned it cannot, in principle, be changed."
   },
   "f7acdc": {
    "text": "⬜ Unverified: **whether research students (研究生 / research students) and exchange students are eligible.** The route for Japanese students explicitly excludes research students, auditing students, and others not enrolled in a degree program. The international-student guidelines only say “international students newly coming to the university and to Japan”, with no separate statement about these two statuses. If in doubt, ask directly: International Student Affairs Division, Admission Support Section — imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "Kyushu University · student dormitories",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "Kyushu University · dormitory information site",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC · international student housing details",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "Pre-Arrival System (application portal)",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "Choosing Among Three Fukuoka Areas"
   },
   "c9a766": {
    "text": "Gakken (around Kyudai-gakkentoshi Station)"
   },
   "60cdc9": {
    "text": "The largest of the three areas and the origin point for the buses, so every route is available and the commute is the easiest. In exchange, rent for a comparable place runs roughly 1.1–1.2 times that of Susenji."
   },
   "095a6e": {
    "text": "Susenji"
   },
   "fe6c53": {
    "text": "A balance of distance, rent, and everyday convenience. Some of the buildings are older, and wooden ones do not insulate sound well. For transport you mainly rely on the Susenji line; there are fewer bus routes than at Gakken."
   },
   "298caa": {
    "text": "Right next to campus"
   },
   "374ae9": {
    "text": "Buildings tend to be newer and mostly non-wooden, and some come with basic appliances. The drawback is how few shops there are: day-to-day shopping falls back on convenience stores, so everyday convenience is on the low side."
   },
   "02657e": {
    "text": "From experience: one student who has lived in Gakken since 2022 was initially asked for nearly double the rent, but after negotiating it stayed at ¥53,000/month. There is room to negotiate rent — it is worth raising at renewal."
   },
   "1bb6a1": {
    "text": "Move-in Costs"
   },
   "fa402b": {
    "text": "Initial costs when renting generally come to 4–5 months’ rent, covering cleaning, lock replacement, management fees and so on (an experience-based range; your contract governs). Screening takes about a month, so if you are aiming to move in in July, start looking in May."
   },
   "c505d6": {
    "text": "Utilities"
   },
   "495d0f": {
    "text": "With the air conditioning running in summer, electricity, gas, and water together come to about ¥20,000 a month (an experience-based figure that varies with how you use them)."
   },
   "cb74b3": {
    "text": "Mail Forwarding"
   },
   "994e7b": {
    "text": "For how to arrange forwarding at the post office after moving, See【Residence Procedures·Mail forwarding】. It is not repeated here."
   },
   "c541f6": {
    "text": "Useful Local Links"
   },
   "11a7ad": {
    "items": [
     {
      "text": "Rent levels (HOME’S)",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO student edition (around Kyudai Ito Campus)",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "url": "https://www.kyudaimae.co.jp/",
      "text": "Kyudai-mae Real Estate"
     },
     {
      "text": "Susenji · cardboard drop-off point",
      "url": "https://maps.app.goo.gl/WMofqf67itQLxT1B9"
     },
     {
      "text": "Susenji · post box",
      "url": "https://maps.app.goo.gl/v1yiCxUtXgySeABSA?g_st=ic"
     },
     {
      "text": "Cardboard collection (Fukuoka City)",
      "url": "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/kaishujoho.html#web"
     },
     {
      "text": "Campus Health Center · consultations",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "Other Ways to Find a Place"
   },
   "4919b5": {
    "text": "Rental stock around Ito Campus is limited, so it is worth pursuing several routes in parallel:"
   },
   "83dd45": {
    "text": "Note: students in non-degree statuses such as special auditing students or research students may face restrictions when renting; consult the Support Center in advance."
   },
   "69b4a1": {
    "text": "Two Areas Further Out: Takata, and Fujimi / Izumi"
   },
   "a7c359": {
    "headers": [
     "Area",
     "Location",
     "Rent",
     "Daily life",
     "Commute"
    ],
    "rows": [
     [
      "Takata",
      "Between Susenji and Hatae Station, in Itoshima City",
      "Cheaper than Nishi Ward, Fukuoka City",
      "Shopping and eating are fine",
      "The Itoshima–Kyudai line via Takata; slightly fewer services. With a moped or car, the farm lanes make it quick"
     ],
     [
      "Fujimi / Izumi",
      "Between Susenji and the university, a quiet residential area",
      "Slightly cheaper than central Susenji",
      "Fewer shops the further north you go; you need to head south to Susenji or east to Gakuen-dori",
      "The Kyudai line via Susenji or via Gakuen-dori; fairly convenient"
     ]
    ]
   },
   "d28f07": {
    "text": "Mind the city boundary: Takata is in Itoshima City, so official business goes to Itoshima City Hall near Chikuzen-Maebaru Station. If you live in Nishi Ward, Fukuoka City, you go to the Fukuoka City Hall western branch near Kyudai-gakkentoshi Station. The two cities’ designated rubbish bags are not interchangeable either, so check which side you are on before buying."
   },
   "3dede6": {
    "text": "SETTLE International: not the same kind of thing"
   },
   "6eed67": {
    "text": "SETTLE is in fact a commercial apartment building open to the general public, and about half its residents are Japanese students — which is why it is the most expensive and also the best appointed. Because it operates differently, experience from the other dormitories and Kyousoukan usually does not transfer. And because it sits in Itoshima City, various administrative procedures differ from those for people living in Nishi Ward, Fukuoka City."
   },
   "55a19c": {
    "headers": [
     "Item",
     "Amount (via the university application route)"
    ],
    "rows": [
     [
      "Boarding fee",
      "¥41,000 / month"
     ],
     [
      "Management fee",
      "¥5,000 / month"
     ],
     [
      "24-hour support / fire insurance / direct debit",
      "¥2,120 / month in total"
     ],
     [
      "Flat-rate water",
      "¥2,200 / month"
     ],
     [
      "Monthly total",
      "About ¥50,320 + metered electricity and gas (internet free; bring your own router)"
     ],
     [
      "One-off on move-in",
      "¥132,100 (deposit 30,000 + card key 16,500 + cleaning 58,300 + sundries 27,300)"
     ]
    ]
   },
   "482c1e": {
    "text": "**There are two price structures — do not mix them up.** The table above is the price if you move in through the university’s application route. Renting directly from the operator follows a different structure (rent billed separately, plus key money and a one-year contract, with meals charged monthly). Both exist officially, so confirm which route you are on before applying."
   },
   "ee03f5": {
    "text": "Additional official information: rooms are 1R of about 18.48–21.69 ㎡ (two layouts, not selectable); there is a dining room (meals charged separately) and a study room on the 6th floor (10:00–20:00). The occupancy period is about half a year longer than at the other dormitories. Prices and facilities follow the latest official guidance."
   },
   "adf452": {
    "items": [
     {
      "text": "Location: south-west of campus, outside the south gate, close to the Agriculture and Engineering faculties and up on high ground; from the south gate to the university you climb a long slope"
     },
     {
      "text": "Aspect: north-facing rooms look onto the car park and the prefectural road, with poor light and noticeable traffic noise; south-facing rooms look onto the artificial lake, which is sunny in summer and attracts insects"
     },
     {
      "text": "Facilities: the building is new, with a study room and dryers on the top floor and a dining room on the ground floor"
     },
     {
      "text": "Surroundings: apart from the convenience store at the junction there is no supermarket; north of the crossroads there is a bathhouse (with a gym attached) and a few restaurants"
     }
    ]
   },
   "8d272b": {
    "text": "From experience: an attached dining room is a common feature of Japanese student apartments and genuinely useful somewhere as out-of-the-way as Kyudai — though residents report that neither the food nor the price is remarkable. Moving in as a dormitory resident avoids the steep move-in costs of a commercial apartment, so you can treat it as a low-cost way to try it."
   },
   "9c8146": {
    "text": "Services are sparse and there is almost nothing within walking distance, so going out whenever you like needs your own transport. And the whole way from SETTLE to the university is uphill (heading south to the national road is flat, though). An ordinary bicycle is hard work, and an electric-assist one is expensive without making the climb much easier. If you are not confident about cycling up hills, consider a moped instead — See【Transport·Mopeds / licences】."
   },
   "63c7c3": {
    "text": "Choosing an Agency"
   },
   "be819d": {
    "text": "Even when you find a place you like online, the actual listing is usually held by one particular agency. Judging from photos alone is unreliable, so view places in person where you can. For a place you are unsure about, ask in a group chat — chances are good you will reach someone living there now or who has."
   },
   "89ee7b": {
    "headers": [
     "Agency",
     "Notes"
    ],
    "rows": [
     [
      "Kyudai Co-op",
      "Sounds official, but it is not a university body. Some properties it manages itself carry no agency fee"
     ],
     [
      "Able",
      "A nationwide chain; the agency fee is half a month’s rent"
     ],
     [
      "Miyoshi Real Estate",
      "A strong local Fukuoka firm"
     ],
     [
      "Apaman Shop",
      "Right below Aeon, so you can drop in while shopping"
     ],
     [
      "Kyudai-mae Real Estate",
      "Manages SETTLE International"
     ],
     [
      "Nihon House",
      "Some self-managed properties carry no agency fee"
     ],
     [
      "Homemate",
      "Plenty of listings near the university, but the physical office is in Meinohama"
     ]
    ]
   },
   "4e0936": {
    "text": "From experience: the above are impressions from people who have rented. Policies change, so go by the actual quote before signing. The co-op’s Kyudai housing magazine is worth reading first — it gives you a rough sense of prices and areas."
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME’S (the map view makes searching easy)",
      "url": "https://www.homes.co.jp/chintai/"
     },
     {
      "text": "SUUMO Kyushu",
      "url": "https://suumo.jp/kyushu/"
     },
     {
      "text": "Kyudai Co-op · finding a home",
      "url": "https://coop.kyushu-u.ac.jp/wp/"
     }
    ]
   },
   "3218b7": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
   }
  },
  "ko": {
   "161806": {
    "items": [
     {
      "text": "규슈대학 지정 기숙사: 학교가 민간 맨션과 계약해 보증인 없이 입주할 수 있습니다. 자세한 사항은 유학과에 문의하세요"
     },
     {
      "text": "공영주택(시영/현영): 월세가 저렴하지만 모집 기간이 한정적입니다. 신청 창구는 사이토피아의 구청이며, 입주하려면 규슈대학 주택보증제도에 가입해야 합니다"
     },
     {
      "text": "규슈대 생협 관리 아파트: 생협 매장(이토 고코샤)이나 공식 사이트에서 확인할 수 있습니다"
     },
     {
      "text": "후쿠오카 국제교류회관: 다국어 대응이며 외국인을 대상으로 합니다"
     },
     {
      "text": "셰어하우스/게스트하우스: 이토시마 지역에 고민가 셰어하우스(이토유이, 고토노하 등)가 있습니다"
     }
    ]
   },
   "807523": {
    "items": [
     {
      "title": "「입국지원시스템」에서 온라인 신청",
      "desc": "유학생은 이 경로를 이용하며 입국 전에 마쳐야 합니다. 여러 곳을 동시에 신청하고 지망 순위를 적을 수 있습니다."
     },
     {
      "title": "마감 전에 제출",
      "desc": "2026년 10월기의 경우 마감은 그해 7월 31일 17:00(일본 시간)이었습니다."
     },
     {
      "title": "결과 통지 기다리기",
      "desc": "10월기는 8월 말경 본인과 지도교원에게 메일로 통지됩니다."
     },
     {
      "title": "항공편 미리 등록",
      "desc": "입주일 최소 7영업일 전까지 시스템에 항공편 정보를 입력하지 않으면 예정대로 입주할 수 없습니다."
     }
    ]
   },
   "910043": {
    "text": "교통: 이토시마 계통의 규슈대선은 전부 경유하고, 규슈대선 계통에도 2A선이 한 노선 지나갑니다. 이용할 수 있는 정류장은 고쿠사이무라마에, 이토노유도코로 입구, 도마리키타구치 세 곳입니다. 고쿠사이무라마에가 가장 가깝고 2A선은 모두 정차하지만 이토시마 계통은 일부 노선만 경유합니다. 고쿠사이무라마에를 지나지 않는 이토시마선은 모두 이토노유도코로 입구에 정차하며, 학교 방향으로는 여기서 내리는 편이 가깝고 길을 건너지 않아도 됩니다. 도마리키타구치는 위 노선이 모두 정차합니다."
   },
   "59e679": {
    "text": "먼저 교내 기숙사: 네 곳 중 고르기"
   },
   "ec0d25": {
    "text": "대부분의 유학생은 첫해를 교내 기숙사에서 보내고, 생활이 안정된 뒤에 직접 방을 구합니다. 이토 캠퍼스에서 신청할 수 있는 곳은 네 곳으로, 도미토리 1/2/3(D1/D2/D3)과 이토 교소칸이며 모두 유학생과 일본인 학생이 함께 지냅니다. 이 밖에 SETTLE International이라는 민간 맨션이 있는데, 규슈대학이 유학생 기숙사로 지정해 신청 경로가 같습니다. 자세한 내용은 뒤의 별도 절을 보세요."
   },
   "bdce7d": {
    "headers": [
     "기숙사",
     "방 유형",
     "월 비용",
     "강의동까지"
    ],
    "rows": [
     [
      "D1",
      "1인실 13㎡(254실)",
      "23,000엔 + 공과금",
      "도보 약 5분"
     ],
     [
      "D2",
      "1인실 17㎡(242실) / 부부실 43㎡(20실)",
      "1인실 30,000엔 + 공과금",
      "도보 약 5분"
     ],
     [
      "D3",
      "4인 유닛 공유(개인실 7㎡ + 공용 28㎡)",
      "23,500엔 전부 포함",
      "도보 약 5분"
     ],
     [
      "이토 교소칸",
      "1인실 17㎡(549실) / 부부실 43㎡(15실)",
      "1인실 21,000엔 + 공과금",
      "도보 약 15분"
     ]
    ]
   },
   "612bb9": {
    "text": "월 비용 = 기숙사료 + 공익비 4,500엔. D3의 23,500엔에는 광열수도비와 인터넷 요금이 포함되어 있어 네 곳 중 유일한 「전부 포함」입니다. 나머지 세 곳은 수도·전기·가스를 사용량대로 별도 계산하고, 인터넷도 지정 사업자와 직접 계약해야 합니다(월 2,000~3,500엔 정도). 네 곳 모두 보증금 30,000엔이 별도이며 퇴거 시 반환됩니다."
   },
   "a35e71": {
    "text": "**계속 살 수 있는 것은 아닙니다.** 기숙사는 학기마다 모집하며 한 번에 약 반년입니다(예: 2026년 10월기는 입주일부터 2027년 3월 15일까지). 매년 4월기와 10월기 두 차례가 있고, 기한이 되면 규정에 따라 재신청하거나 퇴거해야 합니다. 장기 계획을 세울 때 이 점을 감안하세요."
   },
   "e96b54": {
    "items": [
     {
      "text": "네 곳 모두 식당이 없습니다 —— 대학도 「어느 기숙사에도 식당은 없습니다」라고 명시합니다. 식사는 직접 해 먹거나 교내 식당을 이용해야 합니다"
     },
     {
      "text": "유학생은 침구 대여가 필수: 반년 7,480엔 또는 1년 14,960엔"
     },
     {
      "text": "부부실은 유학생만 신청할 수 있고 D2와 이토 교소칸에만 있습니다"
     },
     {
      "text": "D3는 4인 1유닛 공유형으로 유닛당 유학생 2명 + 일본인 학생 2명으로 정해져 있으며, 신청 시 국제교류 동기를 적어야 합니다"
     }
    ]
   },
   "0785ee": {
    "text": "기숙사 신청 방법"
   },
   "f917d8": {
    "text": "D3는 1지망으로만 낼 수 있고 이지리 기숙사와 복수 지원도 불가능합니다. 방이 배정된 뒤에는 원칙적으로 변경할 수 없습니다."
   },
   "f7acdc": {
    "text": "⬜ 확인 필요: **연구생(리서치 스튜던트)과 교환학생의 입주 가능 여부.** 일본인 대상 경로에서는 연구생·청강생 등 정규 과정이 아닌 신분을 명확히 제외합니다. 유학생 경로의 모집 요강에는 「새로 본교·일본에 올 예정인 유학생」이라고만 되어 있어 이 두 신분에 대한 별도 설명이 없습니다. 판단이 서지 않으면 직접 문의하세요: 국제부 유학과 수용지원계 imm.s@jimu.kyushu-u.ac.jp"
   },
   "7ffe11": {
    "items": [
     {
      "text": "규슈대학 · 학생 기숙사",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/dormitory/"
     },
     {
      "text": "규슈대학 · 기숙사 정보 사이트",
      "url": "https://dormitory.student.kyushu-u.ac.jp/"
     },
     {
      "text": "ISC · 유학생 기숙사 상세",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory"
     },
     {
      "text": "입국지원시스템(신청 창구)",
      "url": "https://supportcenter.jimu.kyushu-u.ac.jp/student/"
     }
    ]
   },
   "ce90ee": {
    "text": "후쿠오카 3개 지역 고르기"
   },
   "c9a766": {
    "text": "학연(규슈대 학연도시역 주변)"
   },
   "60cdc9": {
    "text": "세 지역 중 범위가 가장 넓고 버스 시발지라 모든 노선을 탈 수 있어 통학이 가장 편합니다. 그만큼 같은 조건의 월세는 스센지의 약 1.1~1.2배입니다."
   },
   "095a6e": {
    "text": "스센지(周船寺)"
   },
   "fe6c53": {
    "text": "거리, 월세, 생활 편의성의 균형이 잡혀 있습니다. 일부 건물은 오래되었고 목조는 방음이 그저 그렇습니다. 교통은 주로 스센지선에 의존하게 되며 버스 노선이 학연만큼 많지 않습니다."
   },
   "298caa": {
    "text": "캠퍼스 바로 옆"
   },
   "374ae9": {
    "text": "건물이 비교적 새것이고 비목조가 많으며 기본 가전이 딸린 곳도 있습니다. 단점은 주변에 상점이 적다는 점으로, 일상적인 장보기는 편의점에 의존하게 되어 생활 편의성이 낮은 편입니다."
   },
   "02657e": {
    "text": "경험 참고: 2022년부터 학연에 사는 학생의 사례에서, 집주인이 처음에 약 2배 인상을 제시했지만 협상 끝에 월 53,000엔으로 동결되었습니다. 월세에는 협상의 여지가 있으니 재계약 때 이야기해 볼 만합니다."
   },
   "1bb6a1": {
    "text": "초기 비용"
   },
   "fa402b": {
    "text": "임대 초기 비용은 보통 월세의 4~5개월분이며 청소비, 열쇠 교체비, 관리비 등을 포함합니다(경험에 따른 범위이며 실제로는 계약에 따릅니다). 심사에 한 달쯤 걸리므로 7월 입주를 생각한다면 5월부터 방을 알아보기 시작하세요."
   },
   "c505d6": {
    "text": "수도·광열비"
   },
   "495d0f": {
    "text": "여름에 에어컨을 켜면 전기·가스·수도를 합쳐 월 20,000엔 정도가 됩니다(사용 습관에 따라 달라지는 경험값입니다)."
   },
   "cb74b3": {
    "text": "우편물 전송"
   },
   "994e7b": {
    "text": "이사 후 우체국 전송 신청 방법은 참조【체류 수속·우편물 전송】. 여기서는 반복하지 않습니다."
   },
   "c541f6": {
    "text": "주변 실용 링크"
   },
   "11a7ad": {
    "items": [
     {
      "text": "월세 시세(HOME’S)",
      "url": "https://www.homes.co.jp/"
     },
     {
      "text": "SUUMO 학생판(규슈대 이토 캠퍼스 주변)",
      "url": "https://gakusei.suumo.jp/gakko/kyushu/10015000_004/"
     },
     {
      "url": "https://www.kyudaimae.co.jp/",
      "text": "규다이마에 부동산"
     },
     {
      "text": "스센지 · 골판지 배출 장소",
      "url": "https://maps.app.goo.gl/WMofqf67itQLxT1B9"
     },
     {
      "text": "스센지 · 우체통",
      "url": "https://maps.app.goo.gl/v1yiCxUtXgySeABSA?g_st=ic"
     },
     {
      "text": "골판지 회수(후쿠오카시)",
      "url": "https://www.city.fukuoka.lg.jp/kankyo/jigyokeigomi/kaishujoho.html#web"
     },
     {
      "text": "학교 보건센터 · 상담",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "2e80af": {
    "text": "그 밖의 방 구하기 경로"
   },
   "4919b5": {
    "text": "이토 캠퍼스 주변의 임대 매물은 한정적이므로 여러 경로를 병행하기를 권합니다:"
   },
   "83dd45": {
    "text": "주의: 특별청강학생, 연구생 등 정규 과정이 아닌 신분은 임대에 제한이 있을 수 있으니 미리 서포트센터에 상담하세요."
   },
   "69b4a1": {
    "text": "조금 더 바깥의 두 지역: 다카타, 후지미·이즈미"
   },
   "a7c359": {
    "headers": [
     "지역",
     "위치",
     "월세",
     "생활",
     "통학"
    ],
    "rows": [
     [
      "다카타(高田)",
      "스센지와 하타에역 사이, 이토시마시",
      "후쿠오카시 니시구보다 저렴",
      "장보기와 식사는 문제없음",
      "다카타 경유 이토시마-규슈대선. 편수가 다소 적음. 원동기나 차가 있으면 농로로 금방"
     ],
     [
      "후지미·이즈미",
      "스센지와 학교 중간의 조용한 주택가",
      "스센지 중심보다 조금 저렴",
      "북쪽으로 갈수록 상점이 줄어 남쪽 스센지나 동쪽 가쿠엔도리로 나가야 함",
      "스센지 경유 또는 가쿠엔도리 경유 규슈대선으로 비교적 편리"
     ]
    ]
   },
   "d28f07": {
    "text": "시 경계에 주의: 다카타는 이토시마시라서 행정 업무는 지쿠젠마에바루역 근처의 이토시마 시청으로 갑니다. 후쿠오카시 니시구에 산다면 규슈대 학연도시역 근처의 후쿠오카 시청 서부출장소입니다. 두 시의 지정 쓰레기봉투도 서로 통용되지 않으니 사기 전에 자신이 어느 쪽인지 확인하세요."
   },
   "3dede6": {
    "text": "SETTLE International: 다른 기숙사와는 다른 것"
   },
   "6eed67": {
    "text": "SETTLE은 실제로는 일반에 영업하는 상업용 맨션이며 입주자의 약 절반이 일본인 학생입니다. 그래서 가격이 가장 높고 조건도 가장 좋습니다. 운영 방식이 다르기 때문에 다른 기숙사나 교소칸의 경험은 대개 적용되지 않습니다. 또 이토시마시에 있어 각종 행정 절차도 후쿠오카시 니시구에 사는 사람과는 다릅니다."
   },
   "55a19c": {
    "headers": [
     "항목",
     "금액(규슈대 신청 경로)"
    ],
    "rows": [
     [
      "기숙사료",
      "41,000엔 / 월"
     ],
     [
      "관리비",
      "5,000엔 / 월"
     ],
     [
      "24시간 지원 / 화재보험 / 자동이체",
      "합계 2,120엔 / 월"
     ],
     [
      "정액 수도",
      "2,200엔 / 월"
     ],
     [
      "월 합계",
      "약 50,320엔 + 전기·가스 실비(인터넷 무료, 공유기는 직접 준비)"
     ],
     [
      "입주 시 일시금",
      "132,100엔(보증금 30,000 + 카드키 16,500 + 청소 58,300 + 제경비 27,300)"
     ]
    ]
   },
   "482c1e": {
    "text": "**가격 체계가 두 가지입니다. 잘못 보지 마세요.** 위 표는 규슈대 신청 경로로 입주하는 경우의 가격입니다. 운영사에서 직접 임차하면 다른 체계입니다(월세 별도, 사례금과 1년 계약이 있고 식비는 월별로 별도). 둘 다 공식적으로 병존하므로 신청 전에 자신이 어느 경로인지 확인하세요."
   },
   "ee03f5": {
    "text": "공식 정보 보충: 방 유형은 1R 약 18.48~21.69㎡(두 가지이며 지정 불가), 식당 있음(식비 별도), 6층에 학습실(10:00–20:00). 입주 기간은 다른 기숙사보다 반년 정도 깁니다. 가격과 시설은 공식 최신 안내가 우선합니다."
   },
   "adf452": {
    "items": [
     {
      "text": "위치: 캠퍼스 남서쪽, 남문 바깥. 농학부와 공학부에 가깝고 고지대에 있어 남문에서 학교로 가려면 긴 언덕을 올라야 합니다"
     },
     {
      "text": "방향: 북향 방은 주차장과 현도에 면해 채광이 나쁘고 도로 소음이 뚜렷합니다. 남향은 인공 호수에 면해 여름에 볕이 강하고 벌레도 많습니다"
     },
     {
      "text": "시설: 건물이 새것이고 최상층에 자습실과 건조기, 1층에 식당이 있습니다"
     },
     {
      "text": "주변: 교차로의 편의점 외에 슈퍼가 없습니다. 교차로에서 북쪽으로 목욕시설(헬스장 병설)이 한 곳 있고, 그 밖에 음식점 몇 곳이 있습니다"
     }
    ]
   },
   "8d272b": {
    "text": "경험 참고: 식당 병설은 일본 학생 맨션에서 흔한 구성이고, 규슈대처럼 외진 위치에서는 분명 가치가 있습니다. 다만 살아 본 사람들의 이야기로는 맛도 가격도 특별하지는 않다고 합니다. 기숙사로 입주하면 상업용 맨션의 높은 초기 비용이 들지 않으니 저비용으로 경험해 보는 기회로 볼 수도 있습니다."
   },
   "9c8146": {
    "text": "편수가 드물고 도보권에 생활 시설이 거의 없어, 언제든 나가고 싶다면 자기 이동수단이 필요합니다. 그리고 SETTLE에서 학교까지는 전부 오르막입니다(남쪽 국도변으로 나가는 길은 평지). 일반 자전거로는 상당히 힘들고, 전기자전거는 비싼 데다 언덕이 특별히 수월해지지도 않습니다. 자전거로 언덕을 오를 자신이 없다면 원동기를 고려하기를 권합니다 —— 참조【교통·원동기 / 면허】."
   },
   "63c7c3": {
    "text": "중개업체 고르기"
   },
   "be819d": {
    "text": "인터넷에서 마음에 드는 집을 찾아도 실제 매물은 대개 특정 중개업체가 쥐고 있습니다. 사진만 보고 판단하는 것은 위험하니 되도록 직접 보러 가세요. 확신이 안 서는 집은 단체 채팅방에 물어보면 지금 살고 있거나 살았던 사람을 만날 확률이 높습니다."
   },
   "89ee7b": {
    "headers": [
     "중개업체",
     "특징"
    ],
    "rows": [
     [
      "규슈대 생협",
      "공식처럼 들리지만 학교 기관은 아닙니다. 직접 관리하는 일부 매물은 중개수수료가 없습니다"
     ],
     [
      "에이블(エイブル)",
      "전국 체인. 중개수수료는 월세의 반 달분"
     ],
     [
      "미요시 부동산",
      "후쿠오카 지역에서 실력 있는 회사"
     ],
     [
      "아파만숍",
      "이온 아래층에 있어 장보는 김에 들를 수 있습니다"
     ],
     [
      "규다이마에 부동산",
      "SETTLE International을 관리"
     ],
     [
      "니혼하우스",
      "자체 관리 일부 매물은 중개수수료가 없습니다"
     ],
     [
      "홈메이트",
      "학교 근처 매물이 많지만 오프라인 매장은 메이노하마에 있습니다"
     ]
    ]
   },
   "4e0936": {
    "text": "경험 참고: 위는 살아 본 사람들의 인상입니다. 각 업체의 정책은 바뀌므로 계약 전에 실제 견적을 확인하세요. 생협에서 내는 규슈대 방 구하기 정보지는 한 번 훑어보면 가격과 지역의 감을 잡는 데 도움이 됩니다."
   },
   "81a0f5": {
    "items": [
     {
      "text": "LIFULL HOME’S(지도 모드로 찾기 편리)",
      "url": "https://www.homes.co.jp/chintai/"
     },
     {
      "text": "SUUMO 규슈",
      "url": "https://suumo.jp/kyushu/"
     },
     {
      "text": "규슈대 생협 · 방 구하기",
      "url": "https://coop.kyushu-u.ac.jp/wp/"
     }
    ]
   },
   "3218b7": {
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   }
  }
 },
 "guide-life": {
  "ja": {
   "222467": {
    "text": "生協：学内での支払い方"
   },
   "509375": {
    "text": "粗大ゴミ（家具、家電など）は電話での収集予約が必要で、有料です。"
   },
   "c6f3dd": {
    "text": "福岡の天気"
   },
   "564f6c": {
    "text": "福岡の夏は暑く、熱中症に注意が必要です。外出時は水を持ち、エアコンと扇風機をうまく使ってください。夏から秋は台風の季節なので、大学と気象機関の警報に注意しましょう。"
   },
   "81acda": {
    "text": "ゴミの分別"
   },
   "aeecc8": {
    "text": "福岡市の家庭ゴミは 3 種類に分けて定期収集されます：燃えるゴミ、燃えないゴミ、空きびん・ペットボトル（このほか粗大ゴミは別途予約が必要）。"
   },
   "0efd50": {
    "text": "指定袋を使う必要があります（コンビニやスーパーで購入でき、種類ごとに分かれていて袋の印字が違います）。燃えるゴミは週 2 回、そのほかは月 1 回の収集。福岡市は夜間収集が中心で、通常は収集日の前日の日没後から 24 時までの間に出します。"
   },
   "48309f": {
    "text": "福岡市の公式サイトには品目名で分別を調べられる検索システムがあります："
   },
   "caad01": {
    "items": [
     {
      "text": "福岡市 ゴミの分別検索",
      "url": "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/items"
     }
    ]
   },
   "52ee2d": {
    "text": "福岡市の LINE 公式アカウント"
   },
   "3f8bd7": {
    "text": "福岡市の公式 LINE（@fukuokacity）では、防災、ゴミの収集日、子育て、防犯、イベントなどの情報が届きます。LINE からワクチンの予約やゴミの分別検索もできます。友だち追加して、必要な分類を設定しておくとよいでしょう。"
   },
   "2defd6": {
    "text": "サークル・部活動"
   },
   "958a05": {
    "text": "サークルに入るのは、日本人の学生と知り合い、キャンパスに馴染む方法のひとつです。九大のサークルは体育系・文化系など幅広くあります。"
   },
   "aff452": {
    "text": "・（日本語）"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "九州大学 課外活動（サークル一覧）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/extracurricular/"
     }
    ]
   },
   "a71552": {
    "text": "・留学生は KUFSA（九州大学留学生会）と KUIFA（九州大学国際親善会）もチェックしてみてください。どちらもさまざまなイベントを開いています"
   },
   "a7df77": {
    "text": "マルチリンガル交流スペース（EZぷらっと）"
   },
   "cadf66": {
    "text": "イースト1号館 2 階に多言語学習スペース「EZ ぷらっと」があります。全学生に無料で開放され、語学学習の支援（書籍、DVD、オンライン教材）が受けられるほか、留学相談やイベントへの参加もできます。"
   },
   "123b43": {
    "text": "寮の修繕依頼（水漏れ・カビ）"
   },
   "d7dc2a": {
    "text": "流れ：写真を撮る → 寮の管理人に連絡 → 部屋番号を伝える。先輩に取り次いでもらうこともでき、その後管理人から連絡が来ます。福岡は湿気が多くカビはよく出るので、応急処置としてテープで覆っておくのも手です。"
   },
   "b46d7c": {
    "text": "Coffee Hour"
   },
   "4f9189": {
    "text": "Coffee Hour は各寮で毎週定期的に開かれる集まりです。参加者はさまざまな国や文化から来ており、新しい友人と知り合う機会になります。"
   },
   "3b5a1b": {
    "text": "キャンパスライフ：食堂・図書館・イベント"
   },
   "7a6ada": {
    "text": "食堂のメニューは日替わりです。営業時間と日曜に開いているかは生協のサイトで確認できます。図書館の開館情報は公式サイトにあり、試験期間は延長されることがあります。"
   },
   "dca705": {
    "items": [
     {
      "url": "https://www.lib.kyushu-u.ac.jp/ja",
      "text": "図書館の開館情報"
     },
     {
      "text": "生協食堂（営業・日曜）",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     },
     {
      "text": "生協食堂の月間メニュー",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html"
     }
    ]
   },
   "2b45db": {
    "text": "キャンパス・市内のイベント"
   },
   "ba080f": {
    "items": [
     {
      "text": "九大祭（キャンパスイベント一覧）",
      "url": "https://kyudaisai.jp/"
     },
     {
      "text": "博多どんたく（福岡市の大型祭り）",
      "url": "https://www.dontaku.fukunet.or.jp/"
     }
    ]
   },
   "0120b0": {
    "text": "九州大学生活協同組合（生協）は学内の食堂と売店の大半を運営し、住まいの仲介や保険なども扱っています。大学の公式機関ではなく独立した協同組合なので、サービスを使うにはまず加入が必要です。"
   },
   "a22a49": {
    "text": "加入手続きはやや煩雑なので、生協の実店舗で直接手続きすることをおすすめします。加入後は生協アプリで支払いができ、方法は 2 つあります。"
   },
   "a728d5": {
    "headers": [
     "方式",
     "使い方",
     "還元",
     "買えるもの"
    ],
    "rows": [
     [
      "生協電子マネー",
      "必要なときにチャージ",
      "1% ポイント",
      "すべての商品"
     ],
     [
      "ミールプリペ",
      "まとまった額を一度にチャージ",
      "約 2%～5%、金額帯で上がる",
      "食堂と売店の食品のみ"
     ]
    ]
   },
   "faabed": {
    "text": "ミールプリペの還元率の区分は 2026 年に改定され、低い金額帯の比率が明確に下がりました —— 少額のチャージはかえって割に合いません。チャージ前に公式の最新の区分表を見てから金額を決めてください。古い攻略の数字で計算しないように。⬜要確認：現行の各区分のチャージ額と還元額 @ https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "食堂：どこにあり、何で払えるか"
   },
   "b871d7": {
    "items": [
     {
      "text": "生協食堂：営業時間、日替わりと月間メニューはすべて生協のサイトにあり、学内の主力です"
     },
     {
      "text": "ビッグリーフの GARDEN KITCHEN（W1 理学部の入口）：生協の運営ではなく、IC カードのほか Alipay と WeChat Pay が使えます。日替わりメニューは SNS でのみ告知されます"
     },
     {
      "text": "QASIS と ビッグどら の食堂にはそれぞれインド料理の窓口があり、QASIS のほうは WeChat Pay に対応しています"
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
    "text": "どちらの市に住んでいるか：手続きが 2 通りある"
   },
   "42f05c": {
    "text": "糸島半島は福岡市西区と糸島市に二分されています。大学そのものは福岡市西区にあり、SETTLE International を除く寮もすべて西区です。しかし周辺の住宅地は 2 つの市にまたがっており、これがどこへ手続きに行くかを直接決めます。"
   },
   "39e635": {
    "headers": [
     "住んでいる場所",
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
      "糸島市（高田や SETTLE の一帯など）",
      "糸島市役所",
      "JR 筑前前原駅"
     ]
    ]
   },
   "26be59": {
    "text": "**2 つの市のゴミ袋は共通ではありません。** 買う前に自分がどちら側なのか確認してください。間違えると出せません。"
   },
   "5ce69e": {
    "text": "天気：風が強く、冬はそれほど寒くない"
   },
   "445f0d": {
    "text": "福岡は日本海側と太平洋側の両方の気候の特徴を併せ持ちます。冬は北西からの寒気を正面から受けるため風は強いものの、気温はおおむね 0 度以上で降水は少なめです —— 福岡と朝鮮半島の間の海面が狭く、水蒸気が十分に溜まらないためで、北陸のような大雪はまれです。その代わり強風が多く、最も強いときは瞬間風速が風力 8 に達することもあります。"
   },
   "cc62d7": {
    "text": "6～7 月は梅雨。その後は太平洋高気圧に覆われ、蒸し暑く晴れて雨は少なくなりますが、溜まったエネルギーが強い対流を引き起こしやすくなります。秋にも秋雨の時期がありますが、梅雨ほど典型的ではありません。春と秋は比較的過ごしやすく、秋はたいてい一年で最も良い季節です。"
   },
   "0aeb5b": {
    "items": [
     {
      "text": "予報・風・レーダーを見る：windy（スマホアプリあり）"
     },
     {
      "text": "実況と長期予報：気象庁"
     },
     {
      "text": "リアルタイムのデータ：tenki.jp"
     },
     {
      "text": "台風シーズンの進路予報：Tropical Tidbits（ただし台風が福岡を直撃することはまれです）"
     }
    ]
   },
   "48c15c": {
    "text": "この一帯は雨雲の動きが速いので、出かける前にレーダーを一目見るほうが、時間ごとの予報より当たります。"
   },
   "20bca1": {
    "text": "ポストはどこにあるか"
   },
   "9add58": {
    "items": [
     {
      "text": "日本のポスト地図（postmap）",
      "url": "https://www.postmap.org/map"
     }
    ]
   },
   "df5369": {
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "222467": {
    "text": "The Co-op: how to pay on campus"
   },
   "509375": {
    "text": "Bulky waste (furniture, appliances) must be booked for collection by phone, for a fee."
   },
   "c6f3dd": {
    "text": "Fukuoka Weather"
   },
   "564f6c": {
    "text": "Summers in Fukuoka are hot, so guard against heatstroke: carry water when you go out and make good use of air conditioning and fans. Summer into autumn is typhoon season — watch for warnings from the university and the meteorological agency."
   },
   "81acda": {
    "text": "Rubbish Sorting"
   },
   "aeecc8": {
    "text": "Fukuoka City collects household waste in three regular streams: burnable, non-burnable, and glass bottles / PET bottles (bulky waste requires a separate booking)."
   },
   "0efd50": {
    "text": "You must use designated bags, sold at convenience stores and supermarkets, separated by type with different printing on each. Burnable waste is collected twice a week, the others once a month. Fukuoka City mostly collects at night, so you usually put waste out between sunset the day before collection and midnight."
   },
   "48309f": {
    "text": "The city website has a search system where you enter an item name to find its category:"
   },
   "caad01": {
    "items": [
     {
      "text": "Fukuoka City rubbish sorting search (English)",
      "url": "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/en/items"
     }
    ]
   },
   "52ee2d": {
    "text": "Fukuoka City’s Official LINE Account"
   },
   "3f8bd7": {
    "text": "Fukuoka City’s official LINE account (@fukuokacity) pushes information on disaster prevention, collection days, childcare, crime prevention, and events. You can also book vaccinations and search rubbish categories through LINE. Add it and set the categories you want."
   },
   "2defd6": {
    "text": "Clubs and Circles"
   },
   "958a05": {
    "text": "Joining a circle (サークル) is one way to meet Japanese students and settle into campus life. Kyudai’s circles span sports, culture, and much else."
   },
   "aff452": {
    "text": "· (in Japanese)"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "Kyushu University extracurricular activities (list of circles)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/extracurricular/"
     }
    ]
   },
   "a71552": {
    "text": "· International students may also want to follow KUFSA (Kyushu University Foreign Students Association) and KUIFA (Kyushu University International Friendship Association); both run events regularly"
   },
   "a7df77": {
    "text": "Multilingual Exchange Space (EZ Platto)"
   },
   "cadf66": {
    "text": "On the 2nd floor of East Zone Building 1 there is a multilingual learning space, EZ ぷらっと (EZ Platto), open free to all students. It offers language-learning support (books, DVDs, online materials), and you can also get study-abroad advice and join related events there."
   },
   "123b43": {
    "text": "Dorm Repairs (leaks / mould)"
   },
   "d7dc2a": {
    "text": "The process: take photos → tell the dorm supervisor → give your room number. A senior student can pass it on for you, and the supervisor will then contact you. Fukuoka is humid and mould is common; as a stopgap you can seal the area with tape."
   },
   "b46d7c": {
    "text": "Coffee Hour"
   },
   "4f9189": {
    "text": "Coffee Hour is a gathering held regularly each week at the dormitories. Those who come are from many countries and backgrounds, so it is a good chance to meet new people."
   },
   "3b5a1b": {
    "text": "Campus Life: canteens, libraries, events"
   },
   "7a6ada": {
    "text": "Canteen menus change daily; opening hours and whether they open on Sundays are on the co-op website. Library opening information is on the official site, and hours may be extended during exam periods."
   },
   "dca705": {
    "items": [
     {
      "url": "https://www.lib.kyushu-u.ac.jp/ja",
      "text": "Library opening information"
     },
     {
      "text": "Co-op canteens (hours / Sundays)",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     },
     {
      "text": "Co-op canteen monthly menu",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudou/month_menu.html"
     }
    ]
   },
   "2b45db": {
    "text": "Campus and city events"
   },
   "ba080f": {
    "items": [
     {
      "text": "Kyudaisai (campus events)",
      "url": "https://kyudaisai.jp/"
     },
     {
      "text": "Hakata Dontaku (Fukuoka’s big festival)",
      "url": "https://www.dontaku.fukunet.or.jp/"
     }
    ]
   },
   "0120b0": {
    "text": "The Kyushu University Co-op runs most of the canteens and shops on campus, and also handles housing brokerage and insurance. It is not an official university body but an independent cooperative — so to use its services you have to join first."
   },
   "a22a49": {
    "text": "The joining process is somewhat involved, so it is easiest to do it in person at a co-op shop. Once you are a member you can pay with the co-op app, in one of two ways."
   },
   "a728d5": {
    "headers": [
     "Method",
     "How it works",
     "Rebate",
     "What you can buy"
    ],
    "rows": [
     [
      "Co-op e-money",
      "Top up as you go",
      "1% in points",
      "Anything"
     ],
     [
      "Meal Prepaid (ミールプリペ)",
      "One large top-up",
      "About 2%–5%, rising with the tier",
      "Food at canteens and shops only"
     ]
    ]
   },
   "faabed": {
    "text": "The Meal Prepaid rebate tiers were revised in 2026 and the rate on the lower tiers fell noticeably — topping up a small amount is now poor value. Check the official current tier table before deciding how much to load, rather than working from figures in an old guide. ⬜ Unverified: the current top-up amounts and rebates per tier @ https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "Canteens: which ones, and what they take"
   },
   "b871d7": {
    "items": [
     {
      "text": "Co-op canteens: opening hours, daily specials, and the monthly menu are all on the co-op website. These are the mainstay on campus"
     },
     {
      "text": "GARDEN KITCHEN at Big Leaf (by the W1 Science building entrance): not run by the co-op; it takes IC cards as well as Alipay and WeChat Pay. Its daily menu is only posted on social media"
     },
     {
      "text": "The QASIS and Big Dora canteens each have an Indian food counter; the one at QASIS accepts WeChat Pay"
     }
    ]
   },
   "f308d3": {
    "items": [
     {
      "text": "Kyudai Co-op · canteen division",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     }
    ]
   },
   "281f66": {
    "text": "Which City You Live In: two sets of procedures"
   },
   "42f05c": {
    "text": "The Itoshima peninsula is split between Nishi Ward of Fukuoka City and Itoshima City. The university itself is in Nishi Ward, as are all the dormitories except SETTLE International. But the surrounding residential areas straddle the two cities, and that directly determines where you go for official business."
   },
   "39e635": {
    "headers": [
     "Where you live",
     "Which office",
     "Nearest station"
    ],
    "rows": [
     [
      "Nishi Ward, Fukuoka City",
      "Fukuoka City Hall western branch",
      "Kyudai-gakkentoshi Station"
     ],
     [
      "Itoshima City (e.g. Takata, the SETTLE area)",
      "Itoshima City Hall",
      "JR Chikuzen-Maebaru Station"
     ]
    ]
   },
   "26be59": {
    "text": "**The two cities’ rubbish bags are not interchangeable.** Check which side you are on before buying — the wrong ones cannot be put out."
   },
   "5ce69e": {
    "text": "Weather: windy, and winter is not that cold"
   },
   "445f0d": {
    "text": "Fukuoka has features of both the Sea of Japan and Pacific climates. In winter it faces cold air straight from the north-west, so it is windy, but temperatures stay mostly above zero and there is relatively little precipitation — the stretch of sea between Fukuoka and the Korean peninsula is too narrow to build up much moisture, so heavy snow of the kind seen in Hokuriku is rare. Strong winds, however, are common, gusting to force 8 at their strongest."
   },
   "cc62d7": {
    "text": "June and July are the rainy season; after that the subtropical high takes over, bringing muggy, sunny weather with little rain — though the accumulated energy readily triggers strong convection. Autumn has its own rainy spell, less pronounced than the summer one. Spring and autumn are comparatively comfortable, and autumn is usually the best season of the year."
   },
   "0aeb5b": {
    "items": [
     {
      "text": "For forecasts, wind, and radar: Windy (there is a phone app)"
     },
     {
      "text": "For current conditions and long-range forecasts: the Japan Meteorological Agency"
     },
     {
      "text": "For real-time data: tenki.jp"
     },
     {
      "text": "For typhoon tracks in season: Tropical Tidbits (though typhoons rarely pass directly over Fukuoka)"
     }
    ]
   },
   "48c15c": {
    "text": "Rain clouds move fast around here, so a glance at the radar before you leave is more reliable than the hourly forecast."
   },
   "20bca1": {
    "text": "Where to Find a Post Box"
   },
   "9add58": {
    "items": [
     {
      "text": "Japan post box map (postmap)",
      "url": "https://www.postmap.org/map"
     }
    ]
   },
   "df5369": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
   }
  },
  "ko": {
   "222467": {
    "text": "생협: 교내에서 결제하는 법"
   },
   "509375": {
    "text": "대형 쓰레기(가구, 가전 등)는 전화로 수거를 예약해야 하며 유료입니다."
   },
   "c6f3dd": {
    "text": "후쿠오카 날씨"
   },
   "564f6c": {
    "text": "후쿠오카의 여름은 덥기 때문에 온열질환에 주의해야 합니다. 외출할 때는 물을 챙기고 에어컨과 선풍기를 잘 활용하세요. 여름부터 가을은 태풍 철이니 학교와 기상 기관의 경보에 유의하세요."
   },
   "81acda": {
    "text": "쓰레기 분리배출"
   },
   "aeecc8": {
    "text": "후쿠오카시의 가정 쓰레기는 세 가지로 나눠 정기 수거합니다: 타는 쓰레기, 타지 않는 쓰레기, 빈 병·페트병(이 밖에 대형 쓰레기는 별도 예약이 필요합니다)."
   },
   "0efd50": {
    "text": "지정 봉투를 사용해야 합니다(편의점과 슈퍼에서 판매하며 종류별로 구분되어 봉투의 인쇄가 다릅니다). 타는 쓰레기는 주 2회, 나머지는 월 1회 수거합니다. 후쿠오카시는 야간 수거가 중심이라, 보통 수거일 전날 해가 진 뒤부터 24시 사이에 내놓습니다."
   },
   "48309f": {
    "text": "후쿠오카시 공식 사이트에는 품목명을 입력해 분류를 찾는 검색 시스템이 있습니다:"
   },
   "caad01": {
    "items": [
     {
      "text": "후쿠오카시 쓰레기 분리 검색(영어 페이지, 한국어판 없음)",
      "url": "https://kateigomi-bunbetsu.city.fukuoka.lg.jp/en/items"
     }
    ]
   },
   "52ee2d": {
    "text": "후쿠오카시 LINE 공식 계정"
   },
   "3f8bd7": {
    "text": "후쿠오카시 공식 LINE(@fukuokacity)에서는 방재, 쓰레기 수거일, 육아, 방범, 행사 등의 정보를 받아볼 수 있습니다. LINE으로 백신 예약이나 쓰레기 분류 검색도 가능합니다. 추가해 두고 필요한 분류를 설정하세요."
   },
   "2defd6": {
    "text": "동아리·부활동"
   },
   "958a05": {
    "text": "동아리(サークル)에 들어가는 것은 일본인 학생과 알고 지내며 캠퍼스에 적응하는 방법 중 하나입니다. 규슈대의 동아리는 체육계·문화계 등 다양합니다."
   },
   "aff452": {
    "text": "· (일본어)"
   },
   "0bb9f5": {
    "items": [
     {
      "text": "규슈대학 과외활동(동아리 일람)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/extracurricular/"
     }
    ]
   },
   "a71552": {
    "text": "· 유학생은 KUFSA(규슈대학 유학생회)와 KUIFA(규슈대학 국제친선회)도 눈여겨보세요. 두 곳 모두 다양한 행사를 엽니다"
   },
   "a7df77": {
    "text": "다국어 교류 공간(EZ 뿌랏토)"
   },
   "cadf66": {
    "text": "이스트 1호관 2층에 다국어 학습 공간 「EZ ぷらっと」가 있습니다. 모든 학생에게 무료로 개방되며 어학 학습 지원(도서, DVD, 온라인 교재)을 제공하고, 유학 상담이나 관련 행사 참여도 가능합니다."
   },
   "123b43": {
    "text": "기숙사 수리 요청(누수·곰팡이)"
   },
   "d7dc2a": {
    "text": "절차: 사진 촬영 → 기숙사 관리인에게 연락 → 방 번호 전달. 선배가 대신 전해줄 수도 있고, 이후 관리인이 연락해 옵니다. 후쿠오카는 습해서 곰팡이가 흔하니, 응급으로는 테이프로 막아 두는 것도 방법입니다."
   },
   "b46d7c": {
    "text": "Coffee Hour"
   },
   "4f9189": {
    "text": "Coffee Hour는 각 기숙사에서 매주 정기적으로 열리는 모임입니다. 참가자들이 여러 나라와 문화권에서 오기 때문에 새로운 친구를 사귈 기회가 됩니다."
   },
   "3b5a1b": {
    "text": "캠퍼스 생활: 식당·도서관·행사"
   },
   "7a6ada": {
    "text": "식당 메뉴는 매일 바뀝니다. 영업시간과 일요일 운영 여부는 생협 사이트에서 확인할 수 있습니다. 도서관 개관 정보는 공식 사이트에 있으며 시험 기간에는 연장되기도 합니다."
   },
   "dca705": {
    "items": [
     {
      "url": "https://www.lib.kyushu-u.ac.jp/ja",
      "text": "도서관 개관 정보"
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
    "text": "캠퍼스·도시 행사"
   },
   "ba080f": {
    "items": [
     {
      "text": "규다이사이(캠퍼스 행사 일람)",
      "url": "https://kyudaisai.jp/"
     },
     {
      "text": "하카타 돈타쿠(후쿠오카시 대형 축제)",
      "url": "https://www.dontaku.fukunet.or.jp/"
     }
    ]
   },
   "0120b0": {
    "text": "규슈대학 생활협동조합(생협)은 교내 대부분의 식당과 매점을 운영하며 부동산 중개, 보험 등의 업무도 합니다. 학교의 공식 기관이 아니라 독립된 협동조합이라서, 서비스를 이용하려면 먼저 가입해야 합니다."
   },
   "a22a49": {
    "text": "가입 절차가 다소 번거로우니 생협 오프라인 매장에서 직접 처리하기를 권합니다. 가입 후에는 생협 앱으로 결제할 수 있으며 방식은 두 가지입니다."
   },
   "a728d5": {
    "headers": [
     "방식",
     "사용법",
     "적립",
     "구매 가능 품목"
    ],
    "rows": [
     [
      "생협 전자화폐",
      "필요할 때마다 충전",
      "1% 포인트",
      "모든 상품"
     ],
     [
      "미루프리페(ミールプリペ)",
      "한 번에 큰 금액 충전",
      "약 2%~5%, 구간에 따라 상승",
      "식당과 매점의 식품만"
     ]
    ]
   },
   "faabed": {
    "text": "미루프리페의 적립 구간은 2026년에 조정되어 낮은 구간의 비율이 뚜렷하게 내려갔습니다 —— 적게 충전하면 오히려 손해입니다. 충전 전에 공식 최신 구간표를 보고 금액을 정하세요. 오래된 공략의 숫자로 계산하지 마세요. ⬜ 확인 필요: 현행 구간별 충전액과 적립액 @ https://www.coop.kyushu-u.ac.jp/e-money/index.html"
   },
   "216ba0": {
    "text": "식당: 어디에 있고 무엇으로 결제할 수 있나"
   },
   "b871d7": {
    "items": [
     {
      "text": "생협 식당: 영업시간, 일일 메뉴와 월간 메뉴가 모두 생협 사이트에 있으며 교내의 주력입니다"
     },
     {
      "text": "빅리프의 GARDEN KITCHEN(W1 이학부 입구): 생협 운영이 아니며 IC 카드 외에 알리페이와 위챗페이를 쓸 수 있습니다. 일일 메뉴는 SNS 계정에만 올라옵니다"
     },
     {
      "text": "QASIS와 빅도라 식당에는 각각 인도 요리 코너가 있으며, QASIS 쪽은 위챗페이를 지원합니다"
     }
    ]
   },
   "f308d3": {
    "items": [
     {
      "text": "규슈대 생협 · 식당부 안내",
      "url": "https://www.coop.kyushu-u.ac.jp/shokudoubu.html"
     }
    ]
   },
   "281f66": {
    "text": "어느 시에 사는가: 행정 절차가 두 갈래"
   },
   "42f05c": {
    "text": "이토시마반도는 후쿠오카시 니시구와 이토시마시로 나뉩니다. 학교 자체는 후쿠오카시 니시구에 있고 SETTLE International을 제외한 기숙사도 모두 니시구에 있습니다. 하지만 주변 주택가는 두 시에 걸쳐 있고, 이것이 어디로 행정 업무를 보러 갈지를 곧바로 결정합니다."
   },
   "39e635": {
    "headers": [
     "거주지",
     "가는 관공서",
     "가까운 역"
    ],
    "rows": [
     [
      "후쿠오카시 니시구",
      "후쿠오카 시청 서부출장소",
      "규슈대 학연도시역"
     ],
     [
      "이토시마시(다카타, SETTLE 일대 등)",
      "이토시마 시청",
      "JR 지쿠젠마에바루역"
     ]
    ]
   },
   "26be59": {
    "text": "**두 시의 쓰레기봉투는 통용되지 않습니다.** 사기 전에 자신이 어느 쪽인지 확인하세요. 잘못 사면 배출할 수 없습니다."
   },
   "5ce69e": {
    "text": "날씨: 바람이 세고 겨울은 그리 춥지 않음"
   },
   "445f0d": {
    "text": "후쿠오카는 동해(일본해) 쪽과 태평양 쪽 기후의 특징을 함께 지닙니다. 겨울에는 북서쪽에서 오는 찬 공기를 정면으로 받아 바람이 세지만 기온은 대체로 0도 이상이고 강수는 적은 편입니다 —— 후쿠오카와 한반도 사이의 해면이 좁아 수증기가 충분히 모이지 않기 때문으로, 호쿠리쿠 같은 폭설은 드뭅니다. 대신 강풍이 잦아 가장 셀 때는 순간풍속이 풍력 8에 이르기도 합니다."
   },
   "cc62d7": {
    "text": "6~7월은 장마철이고, 그 후에는 아열대 고기압의 영향으로 무덥고 맑으며 비가 적지만, 축적된 에너지가 강한 대류를 일으키기 쉽습니다. 가을에도 가을비 시기가 있으나 장마만큼 뚜렷하지는 않습니다. 봄과 가을은 비교적 쾌적하고, 가을은 대개 일 년 중 가장 좋은 계절입니다."
   },
   "0aeb5b": {
    "items": [
     {
      "text": "예보와 바람, 레이더 보기: windy(모바일 앱 있음)"
     },
     {
      "text": "실황과 장기 예보: 일본 기상청"
     },
     {
      "text": "실시간 데이터: tenki.jp"
     },
     {
      "text": "태풍철 경로 예보: Tropical Tidbits(다만 태풍이 후쿠오카를 정면으로 지나는 일은 드뭅니다)"
     }
    ]
   },
   "48c15c": {
    "text": "이 일대는 비구름의 이동이 빨라서, 나가기 전에 레이더를 한 번 보는 편이 시간별 예보보다 정확합니다."
   },
   "20bca1": {
    "text": "우체통은 어디에 있나"
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
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   }
  }
 },
 "guide-medical": {
  "ja": {
   "543059": {
    "text": "キャンパス健康センター"
   },
   "a955e0": {
    "text": "国民健康保険"
   },
   "6d0c07": {
    "text": "来日後はできるだけ早く国民健康保険に加入してください（手続きの順序は 参照【入国準備·到着後の手続き順序】）。加入後は医療費の自己負担が 30% になります。"
   },
   "40a340": {
    "text": "学研災 / 学研賠（原則として全員加入）"
   },
   "1de97f": {
    "text": "学研災（学生教育研究災害傷害保険）は、九州大学が原則として全学生に加入を求めている傷害保険で、保険料は在学年数分を一括で納めます。国民健康保険との分担は明確で、国保は診療の医療費、学研災は「ケガをしたこと」そのものを対象とします。"
   },
   "dd53eb": {
    "headers": [
     "対象",
     "1 年分の保険料"
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
      "450 ～ 1,000 円（課程により異なる）"
     ],
     [
      "学研賠 A コース（一般）",
      "340 円"
     ],
     [
      "学研賠 C コース（医療系）",
      "500 円"
     ],
     [
      "学研賠 L コース（法科）",
      "1,640 円"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "対象範囲：正課、大学が認めた課外活動、学校行事、学内にいる間、および通学途中"
     },
     {
      "text": "給付例：入院 4,000 円／日（最長 180 日）、治療 3,000 ～ 30,000 円"
     },
     {
      "text": "学研賠（付帯賠償責任保険）の賠償限度額は 1 事故 1 億円"
     }
    ]
   },
   "c636c2": {
    "text": "学研災は【疾病を対象としません】—— 病気で受診する場合は国民健康保険を使います。この保険をあてにしないでください。また学研賠は学研災に加入していないと申し込めず、単独では契約できません。"
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
    "text": "ESP（Emergency Secure Plan）は九州大学の留学生が加入する緊急支援サービス（保険ではありません）で、主に次を提供します："
   },
   "ebdd5e": {
    "items": [
     {
      "text": "受診時の三者間電話通訳（日・英・中など）"
     },
     {
      "text": "適切な医療機関の紹介"
     },
     {
      "text": "緊急時に母国の家族へ連絡"
     }
    ]
   },
   "77eb90": {
    "text": "年会費は約 1,650 円（通学傷害保険特約を含む。金額は当年度の案内が優先）。オンライン登録後にクレジットカードまたはコンビニで支払います。申込手続きは Coop / ISC からのメール案内に従ってください。"
   },
   "f5cfed": {
    "items": [
     {
      "text": "ESP・学研災などの保険案内（九州大学）",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance/"
     },
     {
      "text": "Global Gateway・留学生情報",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "4a1f02": {
    "text": "多言語の医療相談ホットライン"
   },
   "2880fb": {
    "text": "福岡県の「ふくおか国際医療サポートセンター」（旧・福岡アジア医療サポートセンター）は多言語の電話通訳を 24 時間 365 日提供しており、通訳料は無料です："
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595（約 19 言語：英・中・韓・タイ・ベトナム・インドネシアなど）"
     },
     {
      "text": "「ふくおか医療情報ネット」から言語で医療機関を検索することもできます"
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
      "text": "健康センターの相談",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "1c9357": {
    "text": "福岡市の外国人医療・生活支援"
   },
   "eea36a": {
    "text": "福岡市には外国人総合相談窓口があり、受診時に言葉の壁があるときはまず電話で相談できます："
   },
   "bbd53a": {
    "text": "・福岡市外国人総合相談支援センター：0120-66-1799（無料）/ 092-262-1799、受付 平日 8:45~18:00、多言語対応"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "福岡市公式サイト",
      "url": "https://www.city.fukuoka.lg.jp/"
     }
    ]
   }
  },
  "en": {
   "543059": {
    "text": "Campus Health Center"
   },
   "a955e0": {
    "text": "National Health Insurance"
   },
   "6d0c07": {
    "text": "Enrol in National Health Insurance as soon as possible after arriving (for the order of procedures, See【Arrival & Entry·Post-arrival order】). Once enrolled, you pay 30% of medical costs yourself."
   },
   "40a340": {
    "text": "Gakkensai / Gakkenbai (all students, in principle)"
   },
   "1de97f": {
    "text": "Gakkensai (Personal Accident Insurance for Students Pursuing Education and Research) is an accident insurance that Kyushu University requires all students to join in principle; the premium is paid in a lump sum covering your years of enrolment. Its division of labour with National Health Insurance is clear: NHI covers the cost of medical treatment, while Gakkensai covers the injury itself."
   },
   "dd53eb": {
    "headers": [
     "Category",
     "Premium per year"
    ],
    "rows": [
     [
      "Undergraduate (general)",
      "¥1,000"
     ],
     [
      "Medicine / Dentistry / Pharmacy",
      "¥1,020"
     ],
     [
      "Graduate programs",
      "¥450 – ¥1,000 (varies by program)"
     ],
     [
      "Gakkenbai course A (general)",
      "¥340"
     ],
     [
      "Gakkenbai course C (medical)",
      "¥500"
     ],
     [
      "Gakkenbai course L (law school)",
      "¥1,640"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "Coverage: regular classes, university-approved extracurricular activities, school events, time spent on campus, and the commute"
     },
     {
      "text": "Example benefits: hospitalisation ¥4,000/day (up to 180 days), treatment ¥3,000 – ¥30,000"
     },
     {
      "text": "Gakkenbai (attached liability insurance) has a limit of ¥100 million per incident"
     }
    ]
   },
   "c636c2": {
    "text": "Gakkensai **does not cover illness** — if you see a doctor because you are ill, National Health Insurance is what applies. Do not rely on this policy for that. Also, you cannot buy Gakkenbai without joining Gakkensai first; they are not sold separately."
   },
   "07daed": {
    "items": [
     {
      "text": "Kyushu University · student insurance (Gakkensai / Gakkenbai)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance"
     }
    ]
   },
   "ec29c8": {
    "text": "ESP (Emergency Support for International Students)"
   },
   "c05384": {
    "text": "ESP (Emergency Secure Plan) is an emergency support service — not an insurance policy — that international students at Kyushu University join. It mainly provides:"
   },
   "ebdd5e": {
    "items": [
     {
      "text": "Three-way telephone interpretation during medical visits (Japanese, English, Chinese, etc.)"
     },
     {
      "text": "Referral to a suitable medical institution"
     },
     {
      "text": "Contacting your family back home in an emergency"
     }
    ]
   },
   "77eb90": {
    "text": "The annual fee is about ¥1,650 (including the commuting accident rider; the figure in that year’s guidance takes precedence). You register online and pay by credit card or at a convenience store; follow the application instructions in the Coop / ISC emails."
   },
   "f5cfed": {
    "items": [
     {
      "text": "ESP and Gakkensai insurance guidance (Kyushu University)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance/"
     },
     {
      "text": "Global Gateway · information for international students",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "4a1f02": {
    "text": "Multilingual Medical Hotline"
   },
   "2880fb": {
    "text": "Fukuoka Prefecture’s “Fukuoka International Medical Support Center” (formerly the Fukuoka Asian Medical Support Center) offers multilingual telephone interpretation 24 hours a day, 365 days a year, free of charge:"
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595 (about 19 languages: English, Chinese, Korean, Thai, Vietnamese, Indonesian, etc.)"
     },
     {
      "text": "You can also search for medical institutions by language through the “Fukuoka Medical Information Net”"
     }
    ]
   },
   "a14f90": {
    "items": [
     {
      "text": "Fukuoka Asian Medical Support Center",
      "url": "https://asian-msc.jp/"
     }
    ]
   },
   "bb0130": {
    "items": [
     {
      "text": "Health Center consultations",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "1c9357": {
    "text": "Fukuoka City Medical & Living Support for Foreign Residents"
   },
   "eea36a": {
    "text": "Fukuoka City runs a general consultation desk for foreign residents; if you hit a language barrier when seeking medical care, you can call them first:"
   },
   "bbd53a": {
    "text": "· Fukuoka City International Support Center: 0120-66-1799 (toll-free) / 092-262-1799, open weekdays 8:45–18:00, multilingual support"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "Fukuoka City official site (English)",
      "url": "https://www.city.fukuoka.lg.jp/english/"
     }
    ]
   }
  },
  "ko": {
   "543059": {
    "text": "학교 보건센터"
   },
   "a955e0": {
    "text": "국민건강보험"
   },
   "6d0c07": {
    "text": "입국 후 되도록 빨리 국민건강보험에 가입하세요(절차 순서는 참조【입국 준비·도착 후 절차 순서】). 가입 후에는 진료비 본인 부담이 30%가 됩니다."
   },
   "40a340": {
    "text": "각켄사이 / 각켄바이(원칙적으로 전원 가입)"
   },
   "1de97f": {
    "text": "각켄사이(学研災, 학생교육연구재해상해보험)는 규슈대학이 원칙적으로 전 학생에게 가입을 요구하는 상해보험으로, 보험료는 재학 연수분을 일괄 납부합니다. 국민건강보험과의 역할 분담은 명확합니다. 국민건강보험은 진료비를, 각켄사이는 「다쳤다는 사실」 자체를 보장합니다."
   },
   "dd53eb": {
    "headers": [
     "대상",
     "1년 보험료"
    ],
    "rows": [
     [
      "학부생(일반)",
      "1,000엔"
     ],
     [
      "의·치·약학부",
      "1,020엔"
     ],
     [
      "대학원 각 과정",
      "450 ~ 1,000엔(과정에 따라 다름)"
     ],
     [
      "각켄바이 A 코스(일반)",
      "340엔"
     ],
     [
      "각켄바이 C 코스(의료계)",
      "500엔"
     ],
     [
      "각켄바이 L 코스(법학전문)",
      "1,640엔"
     ]
    ]
   },
   "5c9577": {
    "items": [
     {
      "text": "보장 범위: 정규 수업, 학교가 인정한 과외 활동, 학교 행사, 교내 체류 중, 그리고 통학 중"
     },
     {
      "text": "급여 예: 입원 4,000엔/일(최장 180일), 치료 3,000 ~ 30,000엔"
     },
     {
      "text": "각켄바이(부대 배상책임보험)의 배상 한도는 1사고당 1억엔"
     }
    ]
   },
   "c636c2": {
    "text": "각켄사이는 **질병을 보장하지 않습니다** —— 아파서 진료를 받는 경우에는 국민건강보험이 적용됩니다. 이 보험에 기대지 마세요. 또한 각켄바이는 각켄사이에 가입해야만 신청할 수 있으며 단독 가입은 불가능합니다."
   },
   "07daed": {
    "items": [
     {
      "text": "규슈대학 · 학생 보험(각켄사이 / 각켄바이)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance"
     }
    ]
   },
   "ec29c8": {
    "text": "ESP(유학생 긴급지원 서비스)"
   },
   "c05384": {
    "text": "ESP(Emergency Secure Plan)는 규슈대학 유학생이 가입하는 긴급지원 서비스(보험이 아님)로, 주로 다음을 제공합니다:"
   },
   "ebdd5e": {
    "items": [
     {
      "text": "진료 시 3자 전화 통역(일본어·영어·중국어 등)"
     },
     {
      "text": "적절한 의료기관 소개"
     },
     {
      "text": "긴급 시 본국 가족에게 연락"
     }
    ]
   },
   "77eb90": {
    "text": "연회비는 약 1,650엔(통학상해보험 특약 포함, 금액은 해당 연도 안내가 우선). 온라인 등록 후 신용카드 또는 편의점에서 결제하며, 신청 절차는 Coop / ISC 메일 안내를 따르세요."
   },
   "f5cfed": {
    "items": [
     {
      "text": "ESP·각켄사이 등 보험 안내(규슈대학)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/insurance/"
     },
     {
      "text": "Global Gateway · 유학생 정보",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "4a1f02": {
    "text": "다국어 의료 상담 핫라인"
   },
   "2880fb": {
    "text": "후쿠오카현의 「후쿠오카 국제의료 서포트센터」(구 후쿠오카 아시아 의료 서포트센터)는 다국어 전화 통역을 24시간 365일 무료로 제공합니다:"
   },
   "e120a6": {
    "items": [
     {
      "text": "092-286-9595(약 19개 언어: 영어·중국어·한국어·태국어·베트남어·인도네시아어 등)"
     },
     {
      "text": "「후쿠오카 의료정보넷」에서 언어별로 의료기관을 검색할 수도 있습니다"
     }
    ]
   },
   "a14f90": {
    "items": [
     {
      "text": "후쿠오카 아시아 의료 서포트센터",
      "url": "https://asian-msc.jp/"
     }
    ]
   },
   "bb0130": {
    "items": [
     {
      "text": "보건센터 상담",
      "url": "https://consult.kyushu-u.ac.jp/project/"
     }
    ]
   },
   "1c9357": {
    "text": "후쿠오카시 외국인 의료·생활 지원"
   },
   "eea36a": {
    "text": "후쿠오카시에는 외국인 종합상담 창구가 있어, 진료 시 언어 장벽이 있을 때 먼저 전화로 도움을 받을 수 있습니다:"
   },
   "bbd53a": {
    "text": "· 후쿠오카시 외국인 종합상담지원센터: 0120-66-1799(무료) / 092-262-1799, 접수 평일 8:45~18:00, 다국어 대응"
   },
   "6fa2b0": {
    "items": [
     {
      "text": "후쿠오카시 공식 사이트(한국어)",
      "url": "https://www.city.fukuoka.lg.jp/korean/"
     }
    ]
   }
  }
 },
 "guide-parttime": {
  "ja": {
   "5e12c4": {
    "text": "資格外活動許可と労働時間の上限"
   },
   "f0b619": {
    "text": "留学ビザで日本でアルバイトをするには、まず「資格外活動許可」を取得しなければなりません。この許可は入国時に空港で申請することも、後から地方出入国在留管理局で手続きすることもできます。許可を得ずに働くのは違法で、ビザに影響する可能性があります。"
   },
   "9071cc": {
    "text": "学期中は週 28 時間まで。長期休暇中（春休み・夏休み・冬休み）は 1 日 8 時間、週 40 時間までです。超過が違法と認定されると在留期間の更新に影響しますので、厳守してください。"
   },
   "105e04": {
    "text": "時給の相場と仕事の探し方"
   },
   "77b055": {
    "text": "福岡県の最低賃金は 1,057 円/時（2025 年 11 月 16 日発効）です。留学生の時給はおおむね 1,057~1,200 円。コンビニや飲食は低め、家庭教師や翻訳は高めですが、条件は雇用主によります。"
   },
   "493aef": {
    "text": "主な経路：大学生協や国際部の掲示板、タウンワーク、バイトルなどの求人サイト、先輩や研究室からの紹介。来日前に急いで探す必要はありません。在留カードと銀行口座を整えてからで十分間に合います。"
   },
   "1ae89a": {
    "text": "注意点と公式窓口"
   },
   "b2625a": {
    "items": [
     {
      "text": "先に資格外活動許可を取得してから働き始めること。"
     },
     {
      "text": "週 28 時間の上限を厳守し、シフトを自分で記録して超過を防ぐこと。"
     },
     {
      "text": "アルバイト収入は規定どおり申告し、奨学金の申請や税務と矛盾しないようにすること。"
     },
     {
      "text": "保証金を要求したり証明書類を預かろうとする仲介業者には注意。異常なサインです。"
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
   "5e12c4": {
    "text": "Work Permission and the Hours Cap"
   },
   "f0b619": {
    "text": "To work part-time in Japan on a student visa you must first obtain “Permission to Engage in Activity Other Than That Permitted” (資格外活動許可). You can apply for it at the airport on arrival, or later at a regional immigration bureau. Working without it is illegal and can affect your visa."
   },
   "9071cc": {
    "text": "During term: up to 28 hours per week. During long vacations (spring, summer, winter): up to 8 hours per day and 40 hours per week. If overwork is judged illegal it will affect your visa renewal, so keep strictly within the limits."
   },
   "105e04": {
    "text": "Typical Pay and Where to Look"
   },
   "77b055": {
    "text": "The minimum wage in Fukuoka Prefecture is 1,057 yen/hour (effective 16 November 2025). International students are usually paid between 1,057 and 1,200 yen; convenience stores and restaurants pay at the lower end, tutoring and translation at the higher end — actual terms depend on the employer."
   },
   "493aef": {
    "text": "Main channels: the university co-op or International Student Affairs noticeboards, job sites such as Townwork and Baitoru, and referrals from senior students or your lab. There is no need to rush before you arrive — looking after you have your residence card and bank account is soon enough."
   },
   "1ae89a": {
    "text": "Cautions and Official Links"
   },
   "b2625a": {
    "items": [
     {
      "text": "Obtain the work permission first, then start working."
     },
     {
      "text": "Keep strictly to the 28 h/week cap; log your own shifts so you do not go over."
     },
     {
      "text": "Declare part-time income as required, so it does not conflict with scholarship applications or tax matters."
     },
     {
      "text": "Be wary of agencies that demand a deposit or hold on to your documents — that is a red flag."
     }
    ]
   },
   "c5ccc9": {
    "items": [
     {
      "text": "Immigration Services Agency · work permission",
      "url": "https://www.isa.go.jp/"
     },
     {
      "text": "Townwork",
      "url": "https://townwork.net/"
     },
     {
      "text": "Baitoru",
      "url": "https://baitoru.com/"
     }
    ]
   }
  },
  "ko": {
   "5e12c4": {
    "text": "자격외활동허가와 근로시간 상한"
   },
   "f0b619": {
    "text": "유학 비자로 일본에서 아르바이트를 하려면 먼저 「자격외활동허가」를 받아야 합니다. 이 허가는 입국 시 공항에서 신청할 수도 있고, 이후 지방 출입국재류관리국에서 처리할 수도 있습니다. 허가 없이 일하는 것은 불법이며 비자에 영향을 줄 수 있습니다."
   },
   "9071cc": {
    "text": "학기 중에는 주 28시간까지, 장기 방학(봄·여름·겨울) 중에는 1일 8시간, 주 40시간까지입니다. 초과 근무가 불법으로 인정되면 비자 갱신에 영향을 주므로 반드시 지키세요."
   },
   "105e04": {
    "text": "시급 시세와 구직 경로"
   },
   "77b055": {
    "text": "후쿠오카현 최저시급은 1,057엔/시간(2025년 11월 16일 시행)입니다. 유학생 시급은 대체로 1,057~1,200엔이며, 편의점·요식업은 낮은 편, 과외·번역은 높은 편이지만 구체적인 조건은 고용주에 따릅니다."
   },
   "493aef": {
    "text": "주요 경로: 학교 생협이나 국제부 게시판, 타운워크(Townwork)·바이토루(Baitoru) 등 구인 사이트, 선배나 연구실 소개. 입국 전에 서둘러 찾을 필요는 없으며, 재류카드와 은행 계좌를 마련한 뒤에 찾아도 충분합니다."
   },
   "1ae89a": {
    "text": "주의사항과 공식 창구"
   },
   "b2625a": {
    "items": [
     {
      "text": "먼저 자격외활동허가를 받은 뒤 일을 시작하세요."
     },
     {
      "text": "주 28시간 상한을 엄격히 지키고, 근무표를 직접 기록해 초과를 방지하세요."
     },
     {
      "text": "아르바이트 수입은 규정대로 신고해 장학금 신청이나 세무와 충돌하지 않게 하세요."
     },
     {
      "text": "보증금을 요구하거나 서류를 맡아두려는 중개업체는 경계하세요. 이상 신호입니다."
     }
    ]
   },
   "c5ccc9": {
    "items": [
     {
      "text": "출입국재류관리청 · 자격외활동허가",
      "url": "https://www.isa.go.jp/"
     },
     {
      "text": "타운워크(Townwork)",
      "url": "https://townwork.net/"
     },
     {
      "text": "바이토루(Baitoru)",
      "url": "https://baitoru.com/"
     }
    ]
   }
  }
 },
 "guide-phone": {
  "ja": {
   "939835": {
    "text": "契約前：欠かせない 2 つの前提"
   },
   "72f94d": {
    "text": "来日前：一時的なデータ SIM（おすすめ）"
   },
   "69d3e3": {
    "text": "来日前に、短期間使えるデータ通信カードを 1 枚用意しておくことをおすすめします（1 週間程度で十分ですが、念のため長めの有効期限にしても構いません）。到着後のナビ、連絡、各種手続きに使え、移行がぐっと楽になります。"
   },
   "58e988": {
    "text": "China Mobile の CMlink か、EC サイトで旅行用のデータ SIM（トラベル SIM）を買えば十分です。手続きは簡単で、買ってすぐ使えます。"
   },
   "17c7e7": {
    "text": "一時的な SIM はあくまで到着直後のつなぎです。長く日本で暮らすなら、できるだけ早く日本の格安 SIM を契約してください（下の「SIM の選び方」参照）。"
   },
   "57ee3f": {
    "text": "SIM の選び方"
   },
   "a65f78": {
    "text": "日本の大手三社（docomo / au / SoftBank）の本体ブランドは月額が高めです。学生には大手のサブブランドがおすすめで、SoftBank 系の Y!mobile、au 系の UQ mobile は料金が安く回線も比較的安定しています。また楽天モバイルは料金が安く、留学生の利用者も多いです。"
   },
   "930aa8": {
    "text": "月々のデータ量で選ぶなら、povo や ahamo などの格安 SIM がコスパに優れます。povo は必要なときにデータを買い足す方式、ahamo はデータ量が多く 5G に対応。これまでの経験では、伊都周辺では povo と ahamo の体感が良く、楽天モバイルと SoftBank は伊都キャンパス周辺の電波がいまひとつです。"
   },
   "95aeea": {
    "text": "留学生向けの GTN や Sakura などの SIM は、これまでの経験では価格が高めで電波の評判も良くありません。契約前に比較することをおすすめします。ほかに Jio、Mobal なども調べてみるとよいでしょう。"
   },
   "b88191": {
    "text": "オンライン申込と多言語サポート"
   },
   "1238cc": {
    "text": "クレジットカード不要でオンライン申込に対応した格安 SIM（IIJmio、LINEMO など）を優先しましょう。多くはウェブ上で申込から開通まで完結します。"
   },
   "bb18de": {
    "text": "補足：旧「LINE MOBILE」は 2021 年に新規受付を終了し、2023 年にサービスも終了しました。後継は SoftBank 系の LINEMO です。現在は LINEMO をお選びください。"
   },
   "a79fe6": {
    "text": "電話で相談したい場合、以下の大手キャリアが多言語対応の窓口を設けています："
   },
   "7cc68f": {
    "items": [
     {
      "text": "docomo：0120-005-250（英・中・ポルトガル・スペイン語）、受付時間 平日 9:00~20:00"
     },
     {
      "text": "au：0120-959-472（英・韓・中・ポルトガル語）"
     },
     {
      "text": "SoftBank：0800-919-0157、つながったら 8→9→9 で英語に転送。英語受付は 10:00~19:00"
     }
    ]
   },
   "3fc4be": {
    "text": "eSIM"
   },
   "d3cc3b": {
    "text": "eSIM は機種によっては非対応で使えないことがあります。初めての契約では物理 SIM を優先するか、念のため物理 SIM を別に用意しておくと安心です。"
   },
   "a747f8": {
    "text": "キャンパスのネットワーク"
   },
   "7bdf67": {
    "text": "大学のアカウントを取得すれば学内 WiFi に接続できます。eduroam は大学間で使える WiFi サービスで、別途登録が必要です。"
   },
   "72a8d0": {
    "text": "学内 WiFi のログイン ID は本人の SSOKID@Kitnet、パスワードは SSOKID を有効化したときに設定したもの（Campusmate と同じ）です。"
   },
   "0fb853": {
    "items": [
     {
      "text": "九州大学キャンパスネットワーク（KiteNet）接続マニュアル",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam の登録",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "解約 / 乗り換え"
   },
   "5b8387": {
    "items": [
     {
      "text": "povo で LINE の年齢認証ができない場合の対処",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "url": "https://www.softbank.jp/support/faq/view/10062",
      "text": "SoftBank の番号解約の手順"
     },
     {
      "text": "au から povo への手続き",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "住所登録が済んでいること —— 在留カードの裏面に住所が記載されていること"
     },
     {
      "text": "引き落としに使えるクレジットカード、または開設済みの日本の銀行口座があること"
     }
    ]
   },
   "7e41fb": {
    "text": "この 2 つがある以上、SIM の契約は到着初日にできることではありません。よくある順序は、住所登録 → SIM 契約 / 口座開設 → その他の手続き、です。ただし口座開設には電話番号が必要なので、堂々巡りになったときは Supporter やサポートセンターの番号で先に口座を開き、自分の番号を取得してから変更するという方法があります。"
   }
  },
  "en": {
   "939835": {
    "text": "Before You Apply: two prerequisites, both essential"
   },
   "72f94d": {
    "text": "Before You Arrive: a temporary data SIM (recommended)"
   },
   "69d3e3": {
    "text": "Get a short-term data SIM before you come to Japan — about a week is enough, though a longer validity does no harm. You will use it for navigation, for contacting people, and for paperwork right after landing, which makes the transition far less stressful."
   },
   "58e988": {
    "text": "China Mobile’s CMlink, or any travel data SIM bought from an online store, will do. They are simple to set up and work as soon as you buy them."
   },
   "17c7e7": {
    "text": "A temporary SIM is only a bridge for your first days. If you are staying in Japan long term, get a Japanese budget SIM (格安 SIM) as soon as you can — see “Choosing a SIM” below."
   },
   "57ee3f": {
    "text": "Choosing a SIM"
   },
   "a65f78": {
    "text": "The three big Japanese carriers (docomo / au / SoftBank) charge relatively high monthly fees on their flagship brands. Students are better off with the carriers’ sub-brands: Y!mobile (SoftBank) and UQ mobile (au) are cheaper with comparatively stable coverage. Rakuten Mobile is also widely used among international students because it is inexpensive."
   },
   "930aa8": {
    "text": "If you choose by monthly data allowance, budget SIMs such as povo and ahamo offer good value — povo lets you top up data as needed, while ahamo gives a larger allowance and supports 5G. In past experience povo and ahamo perform well around Ito, whereas Rakuten Mobile and SoftBank coverage near Ito Campus is mediocre."
   },
   "95aeea": {
    "text": "SIMs marketed to international students such as GTN and Sakura have, in past experience, been on the expensive side with poorly rated coverage; compare before signing up. Jio and Mobal are also worth looking into."
   },
   "b88191": {
    "text": "Online Application and Multilingual Support"
   },
   "1238cc": {
    "text": "Prefer budget SIMs that accept online applications without a credit card (IIJmio, LINEMO, and the like); with most of them you can complete application and activation entirely on the web."
   },
   "bb18de": {
    "text": "Note: the former “LINE MOBILE” stopped accepting new customers in 2021 and shut down in 2023. Its successor is LINEMO, part of the SoftBank group — look for LINEMO now."
   },
   "a79fe6": {
    "text": "If you would rather ask by phone, the following major carriers run multilingual desks:"
   },
   "7cc68f": {
    "items": [
     {
      "text": "docomo: 0120-005-250 (English, Chinese, Portuguese, Spanish), weekdays 9:00–20:00"
     },
     {
      "text": "au: 0120-959-472 (English, Korean, Chinese, Portuguese)"
     },
     {
      "text": "SoftBank: 0800-919-0157 — once connected, press 8→9→9 for English; English service 10:00–19:00"
     }
    ]
   },
   "3fc4be": {
    "text": "eSIM"
   },
   "d3cc3b": {
    "text": "An eSIM may not work if your handset is not compatible. For a first contract, prefer a physical SIM, or keep a spare physical SIM just in case."
   },
   "a747f8": {
    "text": "Campus Network"
   },
   "7bdf67": {
    "text": "Once you have your university account you can connect to the campus WiFi. eduroam is a cross-university WiFi service and needs separate registration."
   },
   "72a8d0": {
    "text": "Your campus WiFi login is your own SSOKID@Kitnet, and the password is the one you set when activating your SSOKID (the same as for Campusmate)."
   },
   "0fb853": {
    "items": [
     {
      "text": "Kyushu University campus network (KiteNet) connection manual",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam registration",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "Cancelling / Switching"
   },
   "5b8387": {
    "items": [
     {
      "text": "What to do when LINE age verification fails on povo",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "url": "https://www.softbank.jp/support/faq/view/10062",
      "text": "How to cancel a SoftBank number"
     },
     {
      "text": "Switching from au to povo",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "Your address registration is complete — the back of your residence card shows your address"
     },
     {
      "text": "You have a credit card that can be charged, or a Japanese bank account already open"
     }
    ]
   },
   "7e41fb": {
    "text": "Because of these two, getting a SIM is never a day-one task. The usual order is: address registration → SIM / bank account → everything else. But opening an account itself requires a phone number, so if you get stuck in that loop, you can open the account using a Supporter’s or the support center’s number and change it once you have your own."
   }
  },
  "ko": {
   "939835": {
    "text": "가입 전: 반드시 필요한 두 가지 전제"
   },
   "72f94d": {
    "text": "입국 전: 임시 데이터 SIM(권장)"
   },
   "69d3e3": {
    "text": "일본에 오기 전에 단기간 쓸 데이터 유심을 한 장 준비하기를 권합니다(1주일 정도면 충분하지만, 만약을 위해 유효기간을 길게 잡아도 좋습니다). 도착 후 길찾기, 연락, 각종 수속에 쓸 수 있어 훨씬 여유롭습니다."
   },
   "58e988": {
    "text": "차이나모바일의 CMlink나, 온라인 쇼핑몰에서 파는 여행용 데이터 유심(트래블 SIM)이면 충분합니다. 절차가 간단하고 구입 즉시 사용할 수 있습니다."
   },
   "17c7e7": {
    "text": "임시 유심은 어디까지나 도착 직후의 임시방편입니다. 일본에서 오래 생활한다면 되도록 빨리 일본 현지의 저가 SIM(格安 SIM)을 계약하세요 —— 아래 「SIM 선택」 참조."
   },
   "57ee3f": {
    "text": "SIM 선택"
   },
   "a65f78": {
    "text": "일본 3대 통신사(docomo / au / SoftBank)의 본 브랜드는 월 요금이 비싼 편입니다. 학생에게는 대형 통신사의 서브 브랜드가 더 적합해서, SoftBank 계열의 Y!mobile과 au 계열의 UQ mobile은 요금이 저렴하고 회선도 비교적 안정적입니다. 또한 라쿠텐 모바일은 요금이 싸서 유학생 이용자가 많습니다."
   },
   "930aa8": {
    "text": "월 데이터량으로 고른다면 povo, ahamo 같은 저가 SIM이 가성비가 좋습니다. povo는 필요할 때 데이터를 충전하는 방식이고, ahamo는 데이터량이 많고 5G를 지원합니다. 기존 경험상 이토 주변에서는 povo와 ahamo의 체감이 좋고, 라쿠텐 모바일과 SoftBank는 이토 캠퍼스 주변 신호가 그저 그렇습니다."
   },
   "95aeea": {
    "text": "유학생 대상의 GTN, Sakura 등의 SIM은 기존 경험상 가격이 비싼 편이고 신호 평가도 좋지 않습니다. 계약 전에 비교해 보세요. 그 밖에 Jio, Mobal 등도 알아볼 만합니다."
   },
   "b88191": {
    "text": "온라인 신청과 다국어 고객센터"
   },
   "1238cc": {
    "text": "신용카드 없이 온라인 신청이 가능한 저가 SIM(IIJmio, LINEMO 등)을 우선 고려하세요. 대부분 웹에서 신청부터 개통까지 끝낼 수 있습니다."
   },
   "bb18de": {
    "text": "참고: 옛 「LINE MOBILE」은 2021년에 신규 가입을 중단하고 2023년에 서비스도 종료했습니다. 후속은 SoftBank 계열의 LINEMO이니, 지금은 LINEMO를 확인하세요."
   },
   "a79fe6": {
    "text": "전화로 문의하고 싶다면 아래 주요 통신사가 다국어 창구를 운영합니다："
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
      "text": "SoftBank: 0800-919-0157, 연결 후 8→9→9 를 누르면 영어로 전환. 영어 접수 10:00~19:00"
     }
    ]
   },
   "3fc4be": {
    "text": "eSIM"
   },
   "d3cc3b": {
    "text": "eSIM은 기종이 호환되지 않아 사용할 수 없는 경우가 있습니다. 처음 계약할 때는 실물 SIM을 우선하거나, 만약을 위해 실물 SIM을 따로 준비해 두세요."
   },
   "a747f8": {
    "text": "캠퍼스 네트워크"
   },
   "7bdf67": {
    "text": "학교 계정을 받으면 교내 WiFi에 접속할 수 있습니다. eduroam은 대학 간 공용 WiFi 서비스로 별도 등록이 필요합니다."
   },
   "72a8d0": {
    "text": "교내 WiFi 로그인 계정은 본인의 SSOKID@Kitnet이고, 비밀번호는 SSOKID를 활성화할 때 설정한 것(Campusmate와 동일)입니다."
   },
   "0fb853": {
    "items": [
     {
      "text": "규슈대학 캠퍼스 네트워크(KiteNet) 접속 매뉴얼",
      "url": "https://www.nc.kyushu-u.ac.jp/en/kitenet-en/#manual"
     },
     {
      "text": "eduroam 등록",
      "url": "https://www.nc.kyushu-u.ac.jp/net/eduroam/"
     }
    ]
   },
   "93c21c": {
    "text": "해지 / 번호이동"
   },
   "5b8387": {
    "items": [
     {
      "text": "povo에서 LINE 연령 인증이 안 될 때의 대처",
      "url": "https://archive.iii.kyushu-u.ac.jp/public/chZBQvKJXFG-062U_y4xquQ7cH_2rixMydT2JqEsYaBK"
     },
     {
      "url": "https://www.softbank.jp/support/faq/view/10062",
      "text": "SoftBank 번호 해지 절차"
     },
     {
      "text": "au에서 povo로 전환",
      "url": "https://povo.jp/procedure/au/"
     }
    ]
   },
   "3604eb": {
    "items": [
     {
      "text": "주소 등록이 완료되어 있을 것 —— 재류카드 뒷면에 주소가 기재되어 있어야 합니다"
     },
     {
      "text": "결제에 쓸 수 있는 신용카드, 또는 이미 개설한 일본 은행 계좌가 있을 것"
     }
    ]
   },
   "7e41fb": {
    "text": "이 두 가지 때문에 유심 개통은 도착 첫날에 할 수 있는 일이 아닙니다. 일반적인 순서는 주소 등록 → 유심 개통 / 계좌 개설 → 나머지 수속입니다. 다만 계좌 개설 자체에 전화번호가 필요하므로, 서로 막히는 상황이라면 Supporter나 서포트센터 번호로 먼저 계좌를 열고, 자기 번호를 받은 뒤 변경하는 방법이 있습니다."
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
      "1 年以内",
      "特に申請は不要。「みなし再入国許可」で足ります"
     ],
     [
      "1 年超",
      "事前に出入国在留管理局で「再入国許可」を申請する必要があります"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "学生証を受け取る前に住民登録を済ませておくこと。"
     },
     {
      "text": "学生証の作成にかかる時間は学部によって異なり、当日には受け取れません。"
     },
     {
      "text": "学生証を受け取ったら、必ずもう一度区役所へ行って切り替えること。"
     }
    ]
   },
   "569204": {
    "text": "帰国前に必要な手続き"
   },
   "745564": {
    "text": "区役所・市役所（地方行政）：日常生活の手続き。住民登録、国民健康保険、国民年金、マイナンバー"
   },
   "824008": {
    "text": "在留に関する手続きの多くは窓口かオンラインでできますが、期限と順序があります。まず 2 つの機関を区別してください："
   },
   "cc395e": {
    "text": "まず区別：区役所と入管局"
   },
   "37a783": {
    "text": "区役所 と 入管局"
   },
   "a14519": {
    "text": "出入国在留管理庁（入管局）（国の行政）：ビザ・在留資格。在留カードの更新・変更、再入国許可、資格外活動許可"
   },
   "5f159d": {
    "text": "覚え方：区役所は生活、入管局はビザ。"
   },
   "1b1c2c": {
    "text": "在留カードへの住居地登録"
   },
   "da7df6": {
    "text": "住所登録は到着後まっさきに行う、そして最も重要な手続きです —— 銀行、携帯、保険など、ほとんどすべての後続手続きは住所登録が済んで初めて進められます。方法は 2 つあります："
   },
   "72da73": {
    "text": "自分で行う場合 九大学研都市駅のとなりの さいとぴあ（西部出張所）へ（JR「九大学研都市」駅から徒歩約 1 分。受付時間は平日 8:45~17:15、土日祝は休み）。"
   },
   "b9e577": {
    "text": "窓口には市民係と保険年金係があり、通常 1~1.5 時間で住民登録、年金、健康保険をまとめて済ませられます。職員は慣れており、英語でも対応してもらえます。"
   },
   "e1582c": {
    "text": "大学に代行してもらう場合 大学が在留カードを 3 営業日ほど預かり、住民登録のみを代行します。年金と健康保険は別途自分で手続きが必要です。自分で出向かなくてよいのが利点です。"
   },
   "e5831f": {
    "text": "どちらを選んでも構いません。大学の代行を選んだ場合でも、残りの手続きを後から自分で区役所で行って問題ありません。登録が済んだら、在留カードを各学務課へ提出してもう一度登録します。"
   },
   "fff1b2": {
    "text": "引っ越し後の住所変更"
   },
   "3eed49": {
    "text": "引っ越し後（同じ市区町村内の引っ越しを含む）は、14 日以内 に新住所の区役所で転入の届出を行い、在留カードの裏面の住所を更新する必要があります。持ち物：在留カード、パスポート、引っ越し前の住民票（あれば）。市区をまたぐ引っ越しの場合は、まず元の住所の区役所で転出届を出し、それから新住所で転入届を出します。"
   },
   "ec20eb": {
    "text": "郵便物の転送"
   },
   "258c3a": {
    "text": "引っ越し後はオンラインで郵便物の転送を申し込めます。有効期間は約 3 か月。A から B、さらに C へ引っ越す場合は、A→B を申し込んだうえで B→C を申し込めば、その間に A 宛に届いた郵便も自動的に C まで転送されます。"
   },
   "ac86c0": {
    "text": "在留カードの更新"
   },
   "29561b": {
    "text": "在留期間の満了の 3 か月前 から更新を申請できます。場所は福岡出入国在留管理局（地下鉄赤坂駅の近く）。必要書類は一般に、在留カード、パスポート、在学証明書、申請書（公式サイトからダウンロード）、収入証明などです。"
   },
   "f9cb98": {
    "text": "期限を過ぎて更新しないと「不法残留」となり、結果は重く、段階があります： 刑事上は 3 年以下の懲役または 300 万円以下の罰金。あわせて上陸拒否（再入国の禁止）となり、自ら出頭して出国した場合は 1 年、強制送還された場合は 5 年、再犯は 10 年です。必ず満了前に手続きしてください。"
   },
   "0086fd": {
    "items": [
     {
      "text": "出入国在留管理庁",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "特定在留カード（2026 年の新制度）"
   },
   "702ad6": {
    "text": "2026 年 6 月 14 日 から、在留カードとマイナンバーカードの一体化が始まり、両方の機能を持つ特定在留カードが発行されます。現在の在留カードは有効期間内はそのまま使え、切り替えは任意です。期限が来て更新する際に、必要であれば新しいカードを一緒に申請できます。"
   },
   "092dbb": {
    "text": "campus のログイン申請（campusweb）"
   },
   "8977fb": {
    "items": [
     {
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do",
      "text": "九大 campusweb"
     }
    ]
   },
   "1dda60": {
    "text": "農学部などの授業料免除の申請も、一般に campusweb から行います（受付中かどうか分からないときは、上のページを開いてみてください）。"
   },
   "9c6062": {
    "text": "SSO-KID のログインと有効化"
   },
   "d66ea0": {
    "text": "大学の統一アカウント（SSO-KID）にどうしてもログインできない場合は、以下の入口を参照してください。注意：SSO-KID の有効化には大学のメールアドレス以外は使えません。"
   },
   "7d1d01": {
    "items": [
     {
      "text": "SSO-KID 学生向けログイン",
      "url": "https://web.sso.kyushu-u.ac.jp/ssokid/students.html"
     },
     {
      "text": "SSO パスワードの有効化",
      "url": "https://web.sso.kyushu-u.ac.jp/idpw/activation.html"
     }
    ]
   },
   "67b663": {
    "text": "マイナンバー（個人番号）"
   },
   "e63790": {
    "text": "住民登録をすると、個人番号の通知が簡易書留で住所に届きます。できるだけ早く区役所でマイナンバーカード（写真付きのプラスチックカード）を申請することをおすすめします。銀行口座の開設、海外送金、保険の手続きなどで使います。海外から送金を受け取る際、銀行はマイナンバーの提示を求めますが、マイナンバーが記載された住民票でも代用できます。"
   },
   "0b4d10": {
    "text": "国民健康保険（医療保険）"
   },
   "8f34d4": {
    "text": "国民健康保険は医療保険で、加入すると診療の自己負担は 30% になります。留学生は加入が必要です。住民登録の手続きと一緒に申請できます。"
   },
   "ca823a": {
    "text": "国民年金"
   },
   "cf19f3": {
    "text": "年金は老後のための保険で、日本に住む 20 歳以上の人には加入義務があります。令和 7 年度（2025）の保険料は月額 17,510 円です。留学生は実際に納付する必要は基本的になく、2 つの方法で免除を受けられます："
   },
   "637f64": {
    "text": "① 所得が基準以下の免除 来日直後で収入がないときに申請できる、区役所が初回の手続きで案内してくれる暫定的な方法です。"
   },
   "ca081f": {
    "text": "② 学生納付特例 留学生に最も適した長期的な方法です。在学中は保険料の納付が猶予され、卒業して収入を得てから納めます。申請には学生証が必要で、前年の所得が規定の基準以下（およそ 128 万円に扶養控除を加えた額。公式の基準が優先）である必要があります。"
   },
   "c8342b": {
    "text": "流れの要点（つまずきやすい）"
   },
   "4f17e5": {
    "text": "住民登録 → 区役所で初回の「所得が基準以下の免除」→ 学務課で学生証を受け取る → もう一度区役所へ行き、① から ② 学生納付特例 に切り替える"
   },
   "90bede": {
    "text": "毎年、この切り替えを忘れて後から年金の請求が届く学生がいます。注意点："
   },
   "e7cf1e": {
    "text": "申請場所：住民登録をした区役所の年金窓口、または西福岡年金事務所。"
   },
   "8a0854": {
    "items": [
     {
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
      "text": "日本年金機構・学生納付特例"
     }
    ]
   },
   "5960c7": {
    "text": "日本を離れる前に片付けておくこと："
   },
   "067610": {
    "items": [
     {
      "text": "住所を抜く —— 区役所で転出届"
     },
     {
      "text": "国民健康保険 —— 保険証を返却し、保険料を清算。6 か月以上納めていれば脱退一時金を申請できます（出国後 2 年以内に提出）"
     },
     {
      "text": "国民年金 —— 特例を申請していた場合は、その後の扱いを確認"
     },
     {
      "text": "税金 —— 住民税と所得税の清算を確認。出国後に追加納付の通知が届くことがあり、日本にいる友人に代納を頼む必要が生じます"
     },
     {
      "text": "銀行口座 —— 解約するかどうかを決める"
     },
     {
      "text": "携帯 —— 解約または MNP で乗り換え"
     },
     {
      "text": "寮・アパート —— 契約に従って退去手続き"
     },
     {
      "text": "大学の手続き —— 成績・卒業証明書、図書館の返却、生協の脱退など"
     }
    ]
   },
   "23d79c": {
    "text": "未清算の費用は個人の信用に影響することがあり、保証人や指導教員にまで及ぶこともあります。"
   },
   "497bc4": {
    "text": "国際観光旅客税（出国税）"
   },
   "a61a13": {
    "text": "日本から飛行機や船で出国する際には国際観光旅客税、いわゆる「出国税」が課されます。通常は航空券の価格に含まれています。税額は 2026-07-01 以降の出国から、1 回 1,000 円が 3,000 円に引き上げられます。"
   },
   "f0dbae": {
    "text": "覚えておく価値のある経過措置があります：2026-06-30 までに締結された運送契約（つまり発券済みの航空券）は、実際の出国日が 7 月 1 日以降でも、引き上げ前の 1,000 円で計算されます。夏に帰国する予定なら、早めに発券するだけで差額がそのまま浮きます。"
   },
   "6432da": {
    "text": "確認方法：航空券の価格明細や領収書に「国際観光旅客税」の項目があるか、税の欄に JPY 3,000 の表記があるかを見てください。日本に入国する便には課されないため、この税は「出る」方向にしか現れません。"
   },
   "f21cc4": {
    "text": "一時的に日本を離れる（帰省・学会など）"
   },
   "b36386": {
    "text": "完全な帰国とは違い、一時的な出国には独自の流れがあります。原則としてまず指導教員の内諾を得て（まだ配属されていない場合は学生委員長に申し出て）、それから大学に海外渡航届を提出します。学部・学府によって様式が異なることがあるので、内諾を得るときに一緒に確認しておきましょう。"
   },
   "e00cbb": {
    "items": [
     {
      "title": "出国時に出入国記録カードを受け取る",
      "desc": "日本の出国手続きの際に受け取って記入します。"
     },
     {
      "title": "正しい欄にチェックする",
      "desc": "出国予定期間は「1 年以内」に、その下は「一時的に出国し、再入国を予定」にチェックします。"
     },
     {
      "title": "押印を確認する",
      "desc": "税関がカードをパスポートにホチキス留めし、裏面に「みなし再入国許可」の印を押します。"
     }
    ]
   },
   "ba4f4e": {
    "text": "**在留カードが 1 年たたずに期限を迎える場合は、在留カードの期限が基準になります** —— 「1 年」ではありません。ここを計算し違えると、戻るときに入国できないことがあります。"
   },
   "f188b5": {
    "text": "交通の注意：地下鉄の福岡空港駅が直接つながっているのは**国内線**ターミナルです。帰国や他国へ飛ぶには**国際線**ターミナルへ、無料の連絡バスに乗り換える必要があります。"
   },
   "5a78fd": {
    "text": "香港を経由する場合：証件と税の還付"
   },
   "6e4653": {
    "text": "※ この節は中国本土のパスポートで香港を経由する場合の話です。香港と福岡の間には複数の航空会社の直行便があり、うち 2 社は LCC のため、華南から来る学生には香港乗り継ぎを選ぶ人が少なくありません。ただしどの証件で通過するかのルールは思ったより複雑で、誤ると記録が残ります。"
   },
   "d598ce": {
    "headers": [
     "状況",
     "中国本土のパスポートで可能か",
     "要点"
    ],
    "rows": [
     [
      "空港の制限区域内での乗り継ぎのみ",
      "出入境に当たらない",
      "以下の要件は関係ありません"
     ],
     [
      "A 地 ⇄ 香港（7 日以内）⇄ B 地",
      "可能",
      "A と B が同じ地域であってはいけません。継続便の航空券などの証明が必要"
     ],
     [
      "日本 → 香港 → そのまま日本へ戻る",
      "不可",
      "事前に「香港進入許可」が必要"
     ],
     [
      "香港での滞在が 7 日を超える",
      "不可",
      "同上。事前の取得が必要"
     ],
     [
      "単に本土と香港を往復するだけ",
      "不可",
      "港澳通行証を使う必要があります"
     ]
    ]
   },
   "49f1ab": {
    "text": "誤った証件で本土から香港に入ると、税関がパスポートに DT（Delete Travel）の記録を残します。その後の香港入境や他国のビザ申請に影響しますので、ここで運任せにしないでください。"
   },
   "51009c": {
    "text": "「香港進入許可」は在日中国大使館・領事館で取得でき、1 回の滞在は最長 14 日。3 か月 1 次、3 か月 2 次、1 年数次、2 年数次の種類があります。福岡の領事館は地下鉄唐人町駅の近くです。"
   },
   "b3abdf": {
    "text": "税の還付：香港発の便には一般に香港が課す航空旅客出発税が含まれています。条件を満たせば還付を申請でき、期限は出発後 28 日以内です。条件と手順は本記事の「国際観光旅客税（出国税）」の節の下の説明を参照するか、香港公式の還付案内を直接確認してください。"
   },
   "2cbead": {
    "items": [
     {
      "text": "香港 飛行機旅客出発税の還付（公式）",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "中国大使館（在日）・海外から香港へ行く際の案内",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "123756": {
    "headers": [
     "Length of absence",
     "What you need"
    ],
    "rows": [
     [
      "Within 1 year",
      "No special application; “special re-entry permission” is enough"
     ],
     [
      "Over 1 year",
      "You must apply in advance for “re-entry permission” at the immigration bureau"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "Resident registration must be complete before you can collect your student ID."
     },
     {
      "text": "How long the student ID takes to produce varies by faculty; it is not same-day."
     },
     {
      "text": "Once you have the student ID, be sure to return to the ward office to make the switch."
     }
    ]
   },
   "569204": {
    "text": "Before You Leave Japan for Good"
   },
   "745564": {
    "text": "Ward / city office (local government): everyday procedures — resident registration, National Health Insurance, National Pension, My Number"
   },
   "824008": {
    "text": "Most residence-related procedures can be done at a counter or online, but they have deadlines and an order. Start by distinguishing the two bodies:"
   },
   "cc395e": {
    "text": "First, Tell Them Apart: ward office vs immigration bureau"
   },
   "37a783": {
    "text": "Ward office vs Immigration Bureau"
   },
   "a14519": {
    "text": "Immigration Services Agency (national government): visas and residence status — renewing or changing your residence card, re-entry permission, permission to work"
   },
   "5f159d": {
    "text": "The short version: the ward office handles daily life, immigration handles your visa."
   },
   "1b1c2c": {
    "text": "Registering Your Address on the Residence Card"
   },
   "da7df6": {
    "text": "Address registration is the first thing to do after arriving and the most important — banking, a phone, insurance, and almost everything else can only proceed once it is done. There are two ways:"
   },
   "72da73": {
    "text": "Doing it yourself Go to さいとぴあ (the western branch office) next to Kyudai-gakkentoshi Station (about 1 minute on foot from the JR station; open weekdays 8:45–17:15, closed weekends and public holidays)."
   },
   "b9e577": {
    "text": "The office has both a citizens’ section and an insurance-and-pension section, so you can usually complete resident registration, pension, and health insurance together in 1 to 1.5 hours. The staff are experienced and can handle English."
   },
   "e1582c": {
    "text": "Having the university do it The university holds your residence card for about three business days and handles resident registration only; pension and health insurance you still arrange yourself. The advantage is not having to go in person."
   },
   "e5831f": {
    "text": "Either route is fine, and even if you choose the university option you can go to the ward office yourself afterwards for the rest. Once registration is done, submit the residence card to your faculty’s academic affairs office to be registered once more."
   },
   "fff1b2": {
    "text": "Changing Your Address After Moving"
   },
   "3eed49": {
    "text": "After moving (including within the same municipality) you must file a move-in notification at the ward office for your new address within 14 days, and update the address on the back of your residence card. Bring: residence card, passport, and your previous residence certificate if you have one. If you move between municipalities, first file a move-out notification at your old ward office, then a move-in notification at the new one."
   },
   "ec20eb": {
    "text": "Mail forwarding"
   },
   "258c3a": {
    "text": "After moving you can arrange mail forwarding online; it lasts about three months. If you move from A to B and then to C, file A→B first and then B→C — mail sent to A in the meantime will be forwarded onward to C automatically."
   },
   "ac86c0": {
    "text": "Renewing Your Residence Card"
   },
   "29561b": {
    "text": "You can apply to renew from three months before your period of stay expires. Where: the Fukuoka Regional Immigration Services Bureau (near Akasaka subway station). Documents generally include your residence card, passport, certificate of enrolment, the application form (downloadable from the official site), and proof of income."
   },
   "f9cb98": {
    "text": "Failing to renew before the deadline makes you an “illegal overstayer”, with serious and graded consequences: criminally, up to 3 years’ imprisonment or a fine of up to 3,000,000 yen; plus a ban on re-entry — one year if you turn yourself in and depart voluntarily, five years if deported, ten years for a repeat offence. Always renew before expiry."
   },
   "0086fd": {
    "items": [
     {
      "text": "Immigration Services Agency of Japan",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "The Special Residence Card (new from 2026)"
   },
   "702ad6": {
    "text": "From 14 June 2026 the residence card and the My Number card begin to be integrated, issued as a special residence card combining both functions. Existing residence cards remain valid for their full term and switching is voluntary; you can apply for the new card together with your renewal when the time comes, if you want it."
   },
   "092dbb": {
    "text": "campusweb Login Application"
   },
   "8977fb": {
    "items": [
     {
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do",
      "text": "Kyudai campusweb"
     }
    ]
   },
   "1dda60": {
    "text": "Tuition waiver applications, for the Agriculture faculty among others, also generally go through campusweb (if you are unsure whether applications are open, try opening the page above)."
   },
   "9c6062": {
    "text": "SSO-KID Login and Activation"
   },
   "d66ea0": {
    "text": "If you cannot log into the university’s unified account (SSO-KID), the links below are the entry points. Note: activating your SSO-KID requires a university email address; no other address will work."
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
    "text": "My Number"
   },
   "e63790": {
    "text": "After resident registration, your My Number notification arrives at your address by registered post. Apply for the My Number card (the plastic card with your photo) at the ward office as soon as you can — you will need it for opening a bank account, overseas remittances, insurance, and more. When receiving money from abroad the bank will ask for your My Number; a residence certificate showing the number can be used instead."
   },
   "0b4d10": {
    "text": "National Health Insurance"
   },
   "8f34d4": {
    "text": "National Health Insurance is medical insurance; once enrolled you pay only 30% of treatment costs yourself, and international students are required to join. You can apply for it at the same time as your resident registration."
   },
   "ca823a": {
    "text": "National Pension"
   },
   "cf19f3": {
    "text": "The pension is retirement insurance, and everyone aged 20 or over living in Japan is obliged to join. For the 2025 fiscal year the contribution is 17,510 yen a month. International students generally do not need to pay in practice, and can be relieved of it in one of two ways:"
   },
   "637f64": {
    "text": "① Low-income exemption Available when you have just arrived with no income; this is the interim option the ward office offers at your first visit."
   },
   "ca081f": {
    "text": "② Student payment special exception The long-term option that suits international students best: contributions are deferred while you are enrolled and paid later once you are earning. Applying requires your student ID, and your previous year’s income must be below the set threshold (around 1.28 million yen plus dependant deductions; the official figure governs)."
   },
   "c8342b": {
    "text": "The sequence (easy to trip over)"
   },
   "4f17e5": {
    "text": "Resident registration → apply for the low-income exemption at the ward office → collect your student ID from the academic affairs office → go back to the ward office and switch from ① to ② the student payment special exception"
   },
   "90bede": {
    "text": "Every year some students forget to make the switch and are later billed for the pension. Points to note:"
   },
   "e7cf1e": {
    "text": "Where to apply: the pension counter at the ward office where you registered, or the Nishi-Fukuoka Pension Office."
   },
   "8a0854": {
    "items": [
     {
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
      "text": "Japan Pension Service · student payment special exception"
     }
    ]
   },
   "5960c7": {
    "text": "Things to settle before departing:"
   },
   "067610": {
    "items": [
     {
      "text": "Deregister your address — file a move-out notification at the ward office"
     },
     {
      "text": "National Health Insurance — return your card and settle outstanding premiums; if you paid for six months or more you may claim a lump-sum withdrawal payment (submitted within two years of leaving)"
     },
     {
      "text": "National Pension — if you applied for an exception, confirm how it will be handled"
     },
     {
      "text": "Taxes — confirm resident tax and income tax are settled; a bill may arrive after you leave, requiring a friend in Japan to pay on your behalf"
     },
     {
      "text": "Bank account — decide whether to close it"
     },
     {
      "text": "Phone — cancel or port out"
     },
     {
      "text": "Dorm or apartment — complete the move-out under your contract"
     },
     {
      "text": "University matters — transcripts and graduation certificates, library returns, leaving the co-op, and so on"
     }
    ]
   },
   "23d79c": {
    "text": "Unsettled charges can affect your credit standing, and may fall on your guarantor or supervisor."
   },
   "497bc4": {
    "text": "International Tourist Tax (departure tax)"
   },
   "a61a13": {
    "text": "Leaving Japan by air or sea incurs the International Tourist Tax, commonly called the departure tax, normally already included in the ticket price. From departures on or after 1 July 2026, it rises from 1,000 yen to 3,000 yen per departure."
   },
   "f0dbae": {
    "text": "One transitional rule is worth remembering: transport contracts concluded on or before 30 June 2026 — that is, tickets already issued — are charged at the old 1,000 yen even if the actual departure falls after 1 July. If you plan to fly home in the summer, ticketing early is a real saving."
   },
   "6432da": {
    "text": "How to check: look for an “International Tourist Tax” line in your fare breakdown or receipt, or a JPY 3,000 entry among the taxes. It is not charged on flights into Japan, so it only appears on the outbound direction."
   },
   "f21cc4": {
    "text": "Leaving Japan Temporarily (home visits, conferences)"
   },
   "b36386": {
    "text": "Unlike leaving for good, temporary departure has its own procedure. As a rule, first obtain your supervisor’s consent (if you have not yet been assigned one, apply to the chair of the student committee), then submit an overseas travel notification to the university. Forms differ between faculties and graduate schools, so ask about it when you get consent."
   },
   "e00cbb": {
    "items": [
     {
      "title": "Collect the embarkation card when departing",
      "desc": "Ask for it and fill it in during Japanese departure formalities."
     },
     {
      "title": "Tick the right boxes",
      "desc": "For the intended period abroad tick “within 1 year”, and below it tick that you are departing temporarily and intend to re-enter."
     },
     {
      "title": "Check for the stamp",
      "desc": "Customs staples the card into your passport and stamps “special re-entry permission” on the back."
     }
    ]
   },
   "ba4f4e": {
    "text": "**If your residence card expires in less than a year, its expiry date is what counts** — not the “1 year”. Getting this wrong can mean being refused entry on your way back."
   },
   "f188b5": {
    "text": "A transport note: the Fukuoka Airport subway station connects directly to the **domestic** terminal. To fly home or to another country you need the **international** terminal, reached by a free shuttle bus."
   },
   "5a78fd": {
    "text": "Transiting via Hong Kong: documents and tax refunds"
   },
   "6e4653": {
    "text": "※ This section concerns transiting via Hong Kong on a mainland Chinese passport. Several airlines fly direct between Hong Kong and Fukuoka, two of them low-cost, so many students from southern China route through Hong Kong. But the rules on which document to travel on are more complex than they look, and getting it wrong leaves a record."
   },
   "d598ce": {
    "headers": [
     "Situation",
     "Mainland Chinese passport?",
     "Key point"
    ],
    "rows": [
     [
      "Transit only within the airport’s restricted area",
      "Not an immigration crossing",
      "The requirements below do not apply"
     ],
     [
      "Place A ⇄ Hong Kong (within 7 days) ⇄ Place B",
      "Yes",
      "A and B must not be the same territory; you need proof such as an onward ticket"
     ],
     [
      "Japan → Hong Kong → straight back to Japan",
      "No",
      "A Hong Kong entry permit must be obtained beforehand"
     ],
     [
      "Staying in Hong Kong more than 7 days",
      "No",
      "As above — obtain it in advance"
     ],
     [
      "Simply travelling between the mainland and Hong Kong",
      "No",
      "You must use a Mainland Travel Permit"
     ]
    ]
   },
   "49f1ab": {
    "text": "Entering Hong Kong from the mainland on the wrong document leaves a DT (Delete Travel) record in your passport, which affects later entry to Hong Kong and visa applications for other countries. Do not chance this one."
   },
   "51009c": {
    "text": "The Hong Kong entry permit can be obtained at a Chinese embassy or consulate in Japan, allowing stays of up to 14 days at a time, in three-month single-entry, three-month double-entry, one-year multiple-entry, and two-year multiple-entry varieties. The Fukuoka consulate is near Tojinmachi subway station."
   },
   "b3abdf": {
    "text": "Refunds: flights departing Hong Kong generally include the Air Passenger Departure Tax levied there. If you qualify you can claim it back, within 28 days of departure. For conditions and steps, see the note below the “International Tourist Tax” section of this guide, or consult Hong Kong’s official refund guidance directly."
   },
   "2cbead": {
    "items": [
     {
      "text": "Hong Kong Air Passenger Departure Tax refund (official)",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "Chinese Embassy in Japan · guidance on travelling to Hong Kong from abroad",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
   }
  },
  "ko": {
   "123756": {
    "headers": [
     "떠나는 기간",
     "필요한 절차"
    ],
    "rows": [
     [
      "1년 이내",
      "따로 신청할 필요 없이 「간주 재입국허가」로 충분합니다"
     ],
     [
      "1년 초과",
      "사전에 출입국재류관리국에서 「재입국허가」를 신청해야 합니다"
     ]
    ]
   },
   "333844": {
    "items": [
     {
      "text": "학생증을 받기 전에 주민등록을 마쳐야 합니다."
     },
     {
      "text": "학생증 제작 기간은 학부마다 달라 당일 수령은 되지 않습니다."
     },
     {
      "text": "학생증을 받으면 반드시 다시 구청에 가서 전환하세요."
     }
    ]
   },
   "569204": {
    "text": "귀국 전 처리할 수속"
   },
   "745564": {
    "text": "구청·시청(지방 행정): 일상생활 수속. 주민등록, 국민건강보험, 국민연금, 마이넘버"
   },
   "824008": {
    "text": "체류 관련 수속은 대부분 창구나 온라인으로 할 수 있지만 기한과 순서가 있습니다. 먼저 두 기관을 구분하세요:"
   },
   "cc395e": {
    "text": "먼저 구분: 구청과 출입국관리국"
   },
   "37a783": {
    "text": "구청 vs 출입국관리국"
   },
   "a14519": {
    "text": "출입국재류관리청(입관국)(국가 행정): 비자·체류자격. 재류카드 갱신·변경, 재입국허가, 자격외활동허가"
   },
   "5f159d": {
    "text": "외우는 법: 구청은 생활, 입관국은 비자."
   },
   "1b1c2c": {
    "text": "재류카드 주소 등록"
   },
   "da7df6": {
    "text": "주소 등록은 입국 후 가장 먼저 해야 하고 가장 중요한 절차입니다 —— 은행, 휴대폰, 보험 등 거의 모든 후속 수속이 주소 등록을 마쳐야 진행됩니다. 두 가지 방법이 있습니다:"
   },
   "72da73": {
    "text": "직접 하는 경우 규슈대 학연도시역 옆의 사이토피아(서부출장소)로 가세요(JR 「규슈대 학연도시」역에서 도보 약 1분. 접수 시간은 평일 8:45~17:15, 주말·공휴일 휴무)."
   },
   "b9e577": {
    "text": "창구에 시민계와 보험연금계가 있어 보통 1~1.5시간이면 주민등록, 연금, 건강보험을 한꺼번에 마칠 수 있습니다. 직원들이 익숙해서 영어로도 대응해 줍니다."
   },
   "e1582c": {
    "text": "학교가 대행하는 경우 학교가 재류카드를 3영업일 정도 보관하며 주민등록만 대행합니다. 연금과 건강보험은 따로 직접 해야 합니다. 직접 가지 않아도 된다는 것이 장점입니다."
   },
   "e5831f": {
    "text": "어느 쪽을 택해도 괜찮습니다. 학교 대행을 선택했더라도 나머지 수속은 나중에 직접 구청에서 해도 문제없습니다. 등록이 끝나면 재류카드를 각 학무과에 제출해 한 번 더 등록합니다."
   },
   "fff1b2": {
    "text": "이사 후 주소 변경"
   },
   "3eed49": {
    "text": "이사 후(같은 시구정촌 내 이사 포함)에는 14일 이내 에 새 주소의 구청에서 전입 신고를 하고 재류카드 뒷면의 주소를 갱신해야 합니다. 준비물: 재류카드, 여권, 이사 전 주민표(있는 경우). 시구를 넘어 이사하는 경우에는 먼저 기존 주소의 구청에서 전출신고를 하고, 그다음 새 주소에서 전입신고를 합니다."
   },
   "ec20eb": {
    "text": "우편물 전송"
   },
   "258c3a": {
    "text": "이사 후에는 온라인으로 우편물 전송을 신청할 수 있으며 유효 기간은 약 3개월입니다. A에서 B로, 다시 C로 이사한다면 A→B를 신청한 뒤 B→C를 신청하면, 그사이 A로 온 우편물도 자동으로 C까지 이어서 전송됩니다."
   },
   "ac86c0": {
    "text": "재류카드 갱신"
   },
   "29561b": {
    "text": "체류 기간 만료 3개월 전 부터 갱신을 신청할 수 있습니다. 장소는 후쿠오카 출입국재류관리국(지하철 아카사카역 근처). 필요 서류는 일반적으로 재류카드, 여권, 재학증명서, 신청서(공식 사이트에서 다운로드), 수입 증명 등입니다."
   },
   "f9cb98": {
    "text": "기한이 지나도록 갱신하지 않으면 「불법 잔류」가 되며 결과가 무겁고 단계가 있습니다: 형사상 3년 이하의 징역 또는 300만엔 이하의 벌금. 아울러 상륙 거부(재입국 금지)가 따르며, 자진 출두해 출국한 경우 1년, 강제 송환된 경우 5년, 재범은 10년입니다. 반드시 만료 전에 처리하세요."
   },
   "0086fd": {
    "items": [
     {
      "text": "출입국재류관리청",
      "url": "http://www.moj.go.jp/isa/index.html"
     }
    ]
   },
   "9dec43": {
    "text": "특정 재류카드(2026년 새 제도)"
   },
   "702ad6": {
    "text": "2026년 6월 14일 부터 재류카드와 마이넘버카드의 일체화가 시작되어, 두 기능을 겸하는 특정 재류카드가 발행됩니다. 기존 재류카드는 유효 기간 내에는 그대로 쓸 수 있고 전환은 자율입니다. 만료되어 갱신할 때 필요하면 새 카드를 함께 신청할 수 있습니다."
   },
   "092dbb": {
    "text": "campus 로그인 신청(campusweb)"
   },
   "8977fb": {
    "items": [
     {
      "url": "https://ku-portal.kyushu-u.ac.jp/campusweb/top.do",
      "text": "규슈대 campusweb"
     }
    ]
   },
   "1dda60": {
    "text": "농학부 등의 수업료 감면 신청도 일반적으로 campusweb으로 진행합니다(접수 중인지 확실하지 않다면 위 페이지를 열어 보세요)."
   },
   "9c6062": {
    "text": "SSO-KID 로그인과 활성화"
   },
   "d66ea0": {
    "text": "학교 통합 계정(SSO-KID)에 계속 로그인되지 않는다면 아래 입구를 참고하세요. 주의: SSO-KID 활성화에는 학교 메일 주소 외에는 사용할 수 없습니다."
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
    "text": "마이넘버(개인번호)"
   },
   "e63790": {
    "text": "주민등록을 하면 개인번호 통지가 등기우편으로 주소지에 옵니다. 되도록 빨리 구청에서 마이넘버카드(사진이 있는 플라스틱 카드)를 신청하기를 권합니다. 은행 계좌 개설, 해외 송금, 보험 처리 등에 쓰입니다. 해외에서 송금을 받을 때 은행이 마이넘버 제시를 요구하는데, 마이넘버가 기재된 주민표로 대신할 수 있습니다."
   },
   "0b4d10": {
    "text": "국민건강보험(의료보험)"
   },
   "8f34d4": {
    "text": "국민건강보험은 의료보험으로, 가입하면 진료비 본인 부담이 30%가 되며 유학생은 가입해야 합니다. 주민등록을 할 때 함께 신청할 수 있습니다."
   },
   "ca823a": {
    "text": "국민연금"
   },
   "cf19f3": {
    "text": "연금은 노후 보험으로, 일본에 사는 20세 이상은 가입 의무가 있습니다. 레이와 7년도(2025) 보험료는 월 17,510엔입니다. 유학생은 대개 실제로 납부할 필요가 없으며 두 가지 방법으로 면제받을 수 있습니다:"
   },
   "637f64": {
    "text": "① 소득 기준 이하 면제 갓 입국해 소득이 없을 때 신청할 수 있으며, 구청이 첫 방문 시 안내해 주는 잠정적인 방법입니다."
   },
   "ca081f": {
    "text": "② 학생납부특례 유학생에게 가장 적합한 장기적 방법으로, 재학 중에는 보험료 납부가 유예되고 졸업해 소득이 생긴 뒤에 냅니다. 신청에는 학생증이 필요하고, 전년도 소득이 규정 기준 이하(약 128만엔에 부양공제를 더한 금액. 공식 기준이 우선)여야 합니다."
   },
   "c8342b": {
    "text": "핵심 절차(놓치기 쉬움)"
   },
   "4f17e5": {
    "text": "주민등록 → 구청에서 첫 「소득 기준 이하 면제」 → 학무과에서 학생증 수령 → 다시 구청에 가서 ①에서 ② 학생납부특례로 전환"
   },
   "90bede": {
    "text": "매년 이 전환을 잊어 나중에 연금 고지서를 받는 학생이 있습니다. 유의할 점:"
   },
   "e7cf1e": {
    "text": "신청 장소: 주민등록을 한 구청의 연금 창구 또는 니시후쿠오카 연금사무소."
   },
   "8a0854": {
    "items": [
     {
      "url": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
      "text": "일본연금기구 · 학생납부특례"
     }
    ]
   },
   "5960c7": {
    "text": "일본을 떠나기 전에 정리할 것:"
   },
   "067610": {
    "items": [
     {
      "text": "주소 말소 —— 구청에서 전출신고"
     },
     {
      "text": "국민건강보험 —— 보험증 반납, 보험료 정산. 6개월 이상 납부했다면 탈퇴일시금을 신청할 수 있습니다(출국 후 2년 이내 제출)"
     },
     {
      "text": "국민연금 —— 특례를 신청했다면 이후 처리를 확인"
     },
     {
      "text": "세금 —— 주민세, 소득세 정산 확인. 출국 후 추가 납부 통지가 올 수 있어 일본에 있는 친구에게 대납을 부탁해야 할 수도 있습니다"
     },
     {
      "text": "은행 계좌 —— 해지 여부 결정"
     },
     {
      "text": "휴대폰 —— 해지 또는 MNP 전환"
     },
     {
      "text": "기숙사/아파트 —— 계약에 따라 퇴거 처리"
     },
     {
      "text": "대학 수속 —— 성적/졸업 증명, 도서관 반납, 생협 탈퇴 등"
     }
    ]
   },
   "23d79c": {
    "text": "정산하지 않은 비용은 개인 신용에 영향을 줄 수 있고 보증인이나 지도교수에게까지 미칠 수 있습니다."
   },
   "497bc4": {
    "text": "국제관광여객세(출국세)"
   },
   "a61a13": {
    "text": "일본에서 비행기나 배로 출국할 때는 국제관광여객세, 이른바 「출국세」가 부과되며 보통 항공권 가격에 포함되어 있습니다. 세액은 2026-07-01 이후 출국부터 1회 1,000엔에서 3,000엔으로 인상됩니다."
   },
   "f0dbae": {
    "text": "기억해 둘 만한 경과 조치가 있습니다: 2026-06-30 이전에 체결된 운송 계약(즉 이미 발권한 항공권)은 실제 출국일이 7월 1일 이후여도 인상 전인 1,000엔으로 계산됩니다. 여름에 귀국할 계획이라면 일찍 발권하는 것만으로 그대로 차액이 절약됩니다."
   },
   "6432da": {
    "text": "확인 방법: 항공권 가격 내역이나 영수증에 「国際観光旅客税」 항목이 있는지, 세금란에 JPY 3,000 표기가 있는지 보세요. 일본으로 입국하는 항공편에는 부과되지 않으므로 이 세금은 「나가는」 방향에만 나타납니다."
   },
   "f21cc4": {
    "text": "일시적으로 일본을 떠날 때(귀국·학회 등)"
   },
   "b36386": {
    "text": "완전한 귀국과 달리 일시 출국에는 별도의 절차가 있습니다. 원칙적으로 먼저 지도교수의 내락을 받고(아직 배속되지 않았다면 학생위원장에게 신청), 그다음 학교에 해외도항신고를 제출합니다. 학부·대학원마다 양식이 다를 수 있으니 내락을 받을 때 함께 확인해 두세요."
   },
   "e00cbb": {
    "items": [
     {
      "title": "출국 시 출입국 기록 카드 받기",
      "desc": "일본 출국 수속을 할 때 받아서 기입합니다."
     },
     {
      "title": "올바른 항목에 체크",
      "desc": "출국 예정 기간은 「1년 이내」에, 그 아래는 「일시 출국, 재입국 예정」에 체크합니다."
     },
     {
      "title": "날인 확인",
      "desc": "세관이 카드를 여권에 스테이플러로 고정하고 뒷면에 「간주 재입국허가」 도장을 찍습니다."
     }
    ]
   },
   "ba4f4e": {
    "text": "**재류카드가 1년이 되기 전에 만료된다면 재류카드의 기한이 기준입니다** —— 「1년」이 아닙니다. 이것을 잘못 계산하면 돌아올 때 입국하지 못할 수 있습니다."
   },
   "f188b5": {
    "text": "교통 주의: 지하철 후쿠오카 공항역이 바로 연결되는 곳은 **국내선** 터미널입니다. 귀국하거나 다른 나라로 가려면 **국제선** 터미널로 무료 셔틀버스를 갈아타야 합니다."
   },
   "5a78fd": {
    "text": "홍콩 경유 시: 여행 증명서와 세금 환급"
   },
   "6e4653": {
    "text": "※ 이 절은 중국 본토 여권으로 홍콩을 경유하는 경우에 대한 내용입니다. 홍콩과 후쿠오카 사이에는 여러 항공사의 직항편이 있고 그중 둘은 저가항공이라, 화남 지역에서 오는 학생 중에는 홍콩 경유를 택하는 사람이 적지 않습니다. 다만 어떤 증명서로 통과하느냐의 규칙은 생각보다 복잡하고, 잘못하면 기록이 남습니다."
   },
   "d598ce": {
    "headers": [
     "상황",
     "중국 본토 여권 사용 가능 여부",
     "요점"
    ],
    "rows": [
     [
      "공항 제한구역 내 환승만 하는 경우",
      "출입국에 해당하지 않음",
      "아래 요건은 해당 없음"
     ],
     [
      "A지 ⇄ 홍콩(7일 이내) ⇄ B지",
      "가능",
      "A와 B가 같은 지역이면 안 되며, 연결편 항공권 등 증빙이 필요"
     ],
     [
      "일본 → 홍콩 → 곧바로 일본으로 복귀",
      "불가",
      "사전에 「홍콩 진입 허가」가 필요"
     ],
     [
      "홍콩 체류가 7일을 넘는 경우",
      "불가",
      "위와 동일. 사전 취득 필요"
     ],
     [
      "단순히 본토와 홍콩을 오가는 경우",
      "불가",
      "강오통행증(港澳通行證)을 사용해야 함"
     ]
    ]
   },
   "49f1ab": {
    "text": "잘못된 증명서로 본토에서 홍콩에 들어가면 세관이 여권에 DT(Delete Travel) 기록을 남깁니다. 이후 홍콩 입경과 다른 나라 비자 신청에 영향을 주니 요행을 바라지 마세요."
   },
   "51009c": {
    "text": "「홍콩 진입 허가」는 주일 중국 대사관·영사관에서 받을 수 있고 1회 최대 14일 체류가 가능하며, 3개월 1회, 3개월 2회, 1년 수차, 2년 수차 등의 종류가 있습니다. 후쿠오카의 영사관은 지하철 도진마치역 근처입니다."
   },
   "b3abdf": {
    "text": "환급: 홍콩에서 출발하는 항공편에는 일반적으로 홍콩이 부과하는 항공여객 출발세가 포함되어 있습니다. 조건을 충족하면 환급을 신청할 수 있으며 기한은 출발 후 28일 이내입니다. 조건과 절차는 본문의 「국제관광여객세(출국세)」 절 아래 설명을 참고하거나 홍콩 공식 환급 안내를 직접 확인하세요."
   },
   "2cbead": {
    "items": [
     {
      "text": "홍콩 항공여객 출발세 환급(공식)",
      "url": "https://www.apdtrefund.hk/tc/"
     },
     {
      "text": "주일 중국대사관 · 해외에서 홍콩으로 가는 안내",
      "url": "https://jp.china-embassy.gov.cn/lsfw_0/zjfw_138408/zhjfw28/LSZJZGGA/202405/t20240507_11300545.htm"
     }
    ]
   },
   "526eaa": {
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   }
  }
 },
 "guide-shopping": {
  "ja": {
   "3082ec": {
    "text": "全体像：商圏の分布と回り方"
   },
   "8e23fa": {
    "text": "伊都キャンパスは福岡市西区元岡にあり、周囲はキャンパスと住宅地が中心です。最寄りの商圏は九大学研都市駅の一帯。西へ行けば糸島市（筑前前原）、東へ行けば姪浜・室見の一帯で、おおむねキャンパスから半径 7 km ほどの範囲に収まります。日々の買い物は駅周辺のスーパーとドラッグストアが中心、まとめ買いはディスカウント店と総合スーパーへ。"
   },
   "d5299c": {
    "text": "日用品は学研の一帯でだいたい揃います。家具と生活必需品はニトリへ —— ただし最寄りは福岡西店（地下鉄橋本駅の近く）で、伊都キャンパスからは遠く徒歩圏ではないため、乗り物が必要です。"
   },
   "3dc2d0": {
    "text": "以下は「距離／種類」で整理しています。各店舗の住所、営業時間、7 km 圏内かどうかは、地図で実際に検索して確認してください。店舗は変わることがあります。"
   },
   "aacc3a": {
    "text": "スーパー：マックスバリュ・西鉄ストア"
   },
   "edac1a": {
    "items": [
     {
      "text": "マックスバリュ（MaxValu）：AEON 系のスーパー。最寄りは周船寺西店（24 時間営業）で、生鮮、惣菜、米・麺、日用品が揃います"
     },
     {
      "text": "にしてつストア（西鉄ストア 周船寺店）：西鉄系のスーパー。生鮮、惣菜、福岡の特産品"
     }
    ]
   },
   "18b42b": {
    "text": "ドラッグストア：薬・トイレタリー"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "ドラッグイレブン：九州地元のドラッグストアチェーン。薬、化粧品、日用品、お菓子"
     },
     {
      "text": "サンドラッグ / ダイレックス（伊都店ほか）：ドラッグストア兼ディスカウント店。日用品、トイレタリー、お菓子が比較的安いです"
     }
    ]
   },
   "c24ac4": {
    "text": "ディスカウント：トライアル・業務スーパー"
   },
   "d29eba": {
    "items": [
     {
      "text": "トライアル：ディスカウントスーパー。食品と日用品が安く、一部店舗は 24 時間営業"
     },
     {
      "text": "業務スーパー（伊都店）：冷凍食品と業務用のまとめ買いが中心。ストックを作るのに向きます"
     }
    ]
   },
   "84d22e": {
    "text": "大型総合：イオン・サニー"
   },
   "92e039": {
    "items": [
     {
      "text": "イオン（福岡伊都店）：総合スーパー。衣料、家庭用品、生鮮、惣菜が揃います"
     },
     {
      "text": "サニー / マルキョウ（今宿店ほか）：福岡の地元スーパー。生鮮が比較的安く、特売も多いです"
     }
    ]
   },
   "6e9f25": {
    "text": "コンビニと少し離れた商圏"
   },
   "a76085": {
    "text": "ローソン / セブンイレブン / ファミリーマート：駅とキャンパスの近くにあり、飲み物、軽食、日用品、ATM、コピーなど急場に便利ですが、価格は高めです。"
   },
   "40861e": {
    "text": "姪浜・室見の一帯（東側）にはスーパー、ドラッグストア、商業施設がさらに多く、地下鉄やバスで行けます。糸島市の筑前前原（西側）には地元のスーパーと商店街があり、ついでに歩いてみるのもよいでしょう。"
   },
   "9da2b2": {
    "text": "中古・節約のコツ・リンク"
   },
   "30eccf": {
    "items": [
     {
      "text": "信頼できる中古自転車店",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic",
      "text": "西区の 24 時間段ボール回収場所"
     },
     {
      "text": "九大生協（語学試験など学内申込の案内）",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "ちょっとしたコツ"
   },
   "1ff8de": {
    "items": [
     {
      "text": "コピー用紙などはナフコ、ドン・キホーテ、ダイレックスで買うと安いです"
     },
     {
      "text": "協奏館に住んでいる人は、移動販売車「いと丸くん」で生鮮を買えます"
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "九州大学・生活ガイド／パンフレット（リビングガイド含む）",
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
    "text": "日用品、家具、家電、自転車まで一か所で揃い、食品も一部あります。百円ショップほど安くはありませんが、品揃えの広さが強みです。多くのホームセンターはオンラインショップと在庫確認が充実しているので、出かける前に価格と在庫を確認しておくと一往復ぶん節約できます。"
   },
   "3496a2": {
    "headers": [
     "店名",
     "キャンパスから",
     "備考"
    ],
    "rows": [
     [
      "ホームプラザナフコ 元岡店",
      "最寄り",
      "オンラインショップあり"
     ],
     [
      "ホームセンターグッデイ 伊都店",
      "近い",
      "比較的新しい"
     ],
     [
      "ミスターマックス 糸島店",
      "中距離",
      "日用品と家具が安め、オンライン在庫確認が便利。自転車コーナーも悪くない"
     ],
     [
      "スーパービバホーム 志摩店",
      "遠い",
      "とても広い。SETTLE に住むなら比較的近い"
     ],
     [
      "コメリパワー 周船寺店",
      "遠い",
      "とても広く品揃えが豊富"
     ]
    ]
   },
   "adfb20": {
    "text": "百円ショップ：在庫を調べてから"
   },
   "28bbb8": {
    "text": "ホームセンターで千円するものが、ここでは百円で済むことがあります。そのぶん品質は落ちます。来日直後に細かい物を揃えるときが最もコスパの良い場面です。セリアは純粋な百円ショップで全品 100 円。ダイソーには 200～1,000 円の商品もあり、高いものは品質が少し良くなります。"
   },
   "dc40bc": {
    "text": "店舗ごとに仕入れる品目がよく異なり、欠品もしばしばあります。ダイソーの公式アプリで店舗ごとの在庫を調べられるので、行く前に確認したほうが無駄足になりません。"
   },
   "69029b": {
    "text": "リサイクルショップ：本、家具、家電、衣類"
   },
   "8db039": {
    "text": "特別に安いというほどではありませんが、基本的な清掃がされ一定の保証もあるので、短期滞在で新品を買いたくない場合に向きます。"
   },
   "af7aff": {
    "items": [
     {
      "text": "BOOKOFF PLUS 福岡糸島店：本とアニメ・ゲーム関連が中心"
     },
     {
      "text": "セカンドストリート 糸島店：比較的新しく品数も多いが、価格はやや高め"
     },
     {
      "text": "リサイクルマート 糸島店：素朴な雰囲気で、品物は比較的安い"
     },
     {
      "text": "トレジャーファクトリー ハローパーク周船寺店：セカンドストリートに近い品揃えで、数はやや少なめ"
     }
    ]
   },
   "52dfde": {
    "text": "自転車：伊都では必需品"
   },
   "adb267": {
    "text": "伊都で乗り物がないのは確かにつらく、日本の自転車も安くはありません。大学は高台にあり坂は避けられないので、少なくとも変速付きを選び、予算が許すなら電動アシストも検討してください。何軒か見てから決めることをおすすめします。"
   },
   "97941b": {
    "headers": [
     "店名",
     "キャンパスから",
     "経験参考"
    ],
    "rows": [
     [
      "ルミエール 今宿店",
      "中距離（K 線で行ける）",
      "変速付きママチャリが 2 万円以内で、コスパ良好。電動アシストはなし"
     ],
     [
      "Cycle Shop Palette 九大前店",
      "最寄り",
      "比較的安い自転車があり、Alipay が使えます"
     ],
     [
      "サイクルベースあさひ 伊都店 / 糸島店",
      "中距離",
      "大手チェーンできちんとしており台数も多いが、価格はやや高め"
     ],
     [
      "イオンバイク 福岡伊都店",
      "近い",
      "イオン内で便利。価格はやや高め"
     ],
     [
      "ミスターマックス 糸島店",
      "中距離",
      "自転車コーナーが意外と良く、安い電動アシストもあります"
     ]
    ]
   },
   "b5f388": {
    "text": "経験参考：以上は実際に見て回った人の評価です。価格と在庫は変わるので、店頭での実際を優先してください。中古車は卒業する学生の譲渡もグループで見かけます —— 店より安いことが多いですが、防犯登録の名義変更を忘れずに。"
   },
   "a2836a": {
    "text": "イオンの学内受取ロッカー：寮住まいなら最も楽"
   },
   "3dfc41": {
    "text": "2025 年 10 月から、学内の中央食堂の入口にイオンネットスーパーの受取ロッカーが設置されました。このロッカーへの受取なら配送料が無料で、商品は学研のイオンの取扱いをほぼ網羅しています —— 実際、発送もその店舗からです。学内に住んでいるなら、これがいちばん手間のかからない買い方でしょう。"
   },
   "ac5dc4": {
    "items": [
     {
      "title": "アカウントを登録",
      "desc": "すでに iAEON アカウントがあればそのまま使えます。"
     },
     {
      "title": "店舗を選んで注文",
      "desc": "イオン福岡伊都店を選びます。最低注文金額があります。"
     },
     {
      "title": "カートで受取方法を選ぶ",
      "desc": "「受取り時間」のところで「店舗などでお受取」を選び、選べる時間帯に注意してください。"
     },
     {
      "title": "受取ロッカーを指定",
      "desc": "次のステップで「受取場所」から学内のロッカーを選びます。受取可能な時間に注意してください。"
     }
    ]
   },
   "3238c2": {
    "text": "経験参考：ネットスーパーの価格は実店舗とほぼ同じです（もともと安いわけではありませんが）。生鮮と惣菜の品目はやや少なめ、野菜と果物は比較的揃っており、日用品はイオン 2 階の商品まで含みます。自宅配送を選ぶと配送料が別途かかり、配送可否は郵便番号を入力して確認してください。"
   },
   "4fc028": {
    "items": [
     {
      "text": "イオン九州 ネットスーパー",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "本記事の一部は《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）より、著者の許諾を得て収録しています。文中の価格、運行本数、手続きの流れは時間とともに変わります。重要な事項は各公式サイトでご確認ください。"
   }
  },
  "en": {
   "3082ec": {
    "text": "Overview: where the shops are and how to work through them"
   },
   "8e23fa": {
    "text": "Ito Campus sits in Motooka, Nishi Ward, Fukuoka City, surrounded mainly by the campus and residential streets. The nearest shopping area is around Kyudai-gakkentoshi Station; to the west lies Itoshima City (Chikuzen-Maebaru) and to the east the Meinohama and Murosaki area — broadly within about 7 km of campus. Day-to-day shopping centres on the supermarkets and drugstores near the station; for bulk buying, head to the discount and general stores."
   },
   "d5299c": {
    "text": "You can find nearly all daily necessities around Gakken. For furniture and household basics there is Nitori — but note the nearest branch is Fukuoka Nishi (near Hashimoto subway station), well beyond walking distance from Ito Campus, so you will need transport."
   },
   "3dc2d0": {
    "text": "The list below is organised by distance and type. For each branch’s address, opening hours, and whether it falls inside the 7 km range, search on a map — branches do change."
   },
   "aacc3a": {
    "text": "Supermarkets: MaxValu and Nishitetsu Store"
   },
   "edac1a": {
    "items": [
     {
      "text": "マックスバリュ (MaxValu): an AEON-group supermarket. The nearest is the Susenji-nishi branch (open 24 hours), stocking fresh food, prepared dishes, rice and noodles, and daily goods"
     },
     {
      "text": "にしてつストア (Nishitetsu Store, Susenji branch): a Nishitetsu-group supermarket with fresh food, prepared dishes, and Fukuoka specialities"
     }
    ]
   },
   "18b42b": {
    "text": "Drugstores: medicine and toiletries"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "ドラッグイレブン (Drug Eleven): a Kyushu-based drugstore chain — medicines, cosmetics, daily goods, snacks"
     },
     {
      "text": "サンドラッグ / ダイレックス (Dirax, Ito branch and others): drugstore-cum-discount stores, with cheaper daily goods, toiletries, and snacks"
     }
    ]
   },
   "c24ac4": {
    "text": "Discount stores: Trial and Gyomu Super"
   },
   "d29eba": {
    "items": [
     {
      "text": "トライアル (Trial): a discount supermarket with low prices on food and daily goods; some branches open 24 hours"
     },
     {
      "text": "業務スーパー (Gyomu Super, Ito branch): mainly frozen food and wholesale sizes — good for stocking up"
     }
    ]
   },
   "84d22e": {
    "text": "Large general stores: AEON and Sunny"
   },
   "92e039": {
    "items": [
     {
      "text": "イオン (AEON, Fukuoka Ito branch): a general store with clothing, household goods, fresh food, and prepared dishes"
     },
     {
      "text": "サニー (Sunny) / マルキョウ (Marukyo, Imajuku branch and others): local Fukuoka supermarkets with cheaper fresh food and frequent special offers"
     }
    ]
   },
   "6e9f25": {
    "text": "Convenience stores and the wider area"
   },
   "a76085": {
    "text": "Lawson / 7-Eleven / FamilyMart: found near the station and the campus, handy in a pinch for drinks, light meals, daily goods, ATMs, and photocopying — but on the expensive side."
   },
   "40861e": {
    "text": "The Meinohama and Murosaki area to the east has more supermarkets, drugstores, and shopping facilities, reachable by subway or bus. Chikuzen-Maebaru in Itoshima City to the west has local supermarkets and a shopping street worth a wander."
   },
   "9da2b2": {
    "text": "Second-hand, saving tips, and links"
   },
   "30eccf": {
    "items": [
     {
      "text": "A reliable second-hand bicycle shop",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic",
      "text": "24-hour cardboard drop-off in Nishi Ward"
     },
     {
      "text": "Kyudai Co-op (on-campus sign-up for language tests, etc.)",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "Small tips"
   },
   "1ff8de": {
    "items": [
     {
      "text": "Copy paper and the like is cheaper at ナフコ (Nafco), ドン・キホーテ (Don Quijote), and ダイレックス"
     },
     {
      "text": "If you live at Kyousoukan, the mobile shop van “Itomaru-kun” sells fresh food"
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "Kyushu University · student life guides / pamphlets (incl. the Living Guide)",
      "url": "https://www.kyushu-u.ac.jp/ja/education/life/pamphlet/"
     },
     {
      "text": "Global Gateway (residence, housing, daily life)",
      "url": "https://www.isc.kyushu-u.ac.jp/intlweb/student"
     }
    ]
   },
   "8328f6": {
    "text": "Furniture and Appliances: home centres"
   },
   "666b25": {
    "text": "Daily goods, furniture, appliances, and bicycles all in one place, plus some food. Not as cheap as the hundred-yen shops, but the range is the point. Most home centres have a decent online shop with stock checking, so confirming price and availability before you set out can save you a trip."
   },
   "3496a2": {
    "headers": [
     "Store",
     "From campus",
     "Notes"
    ],
    "rows": [
     [
      "ホームプラザナフコ Motooka branch",
      "Nearest",
      "Has an online shop"
     ],
     [
      "ホームセンターグッデイ Ito branch",
      "Close",
      "Relatively new"
     ],
     [
      "ミスターマックス Itoshima branch",
      "Medium",
      "Cheaper daily goods and furniture, convenient online stock check; the bicycle section is decent too"
     ],
     [
      "スーパービバホーム Shima branch",
      "Far",
      "Very large; relatively close if you live at SETTLE"
     ],
     [
      "コメリパワー Susenji branch",
      "Far",
      "Very large with a wide range"
     ]
    ]
   },
   "adfb20": {
    "text": "Hundred-Yen Shops: check stock first"
   },
   "28bbb8": {
    "text": "Something that costs a thousand yen at a home centre may be solved for a hundred here, with quality to match. This is where the value is highest when you are kitting out a room just after arriving. Seria is a pure hundred-yen shop — everything is 100 yen; Daiso also carries items from 200 to 1,000 yen, and the dearer ones are somewhat better made."
   },
   "dc40bc": {
    "text": "What each branch stocks varies a lot, and items are often out of stock. Daiso’s official app lets you check stock at a specific branch — checking before you go beats a wasted trip."
   },
   "69029b": {
    "text": "Second-Hand Shops: books, furniture, appliances, clothes"
   },
   "8db039": {
    "text": "Not especially cheap, but items are basically cleaned up and come with some assurance — good if you are here short-term and would rather not buy new."
   },
   "af7aff": {
    "items": [
     {
      "text": "BOOKOFF PLUS Fukuoka Itoshima: mainly books and anime/game merchandise"
     },
     {
      "text": "セカンドストリート Itoshima: relatively new with a wide range, prices slightly higher"
     },
     {
      "text": "リサイクルマート Itoshima: plainer, with comparatively cheap goods"
     },
     {
      "text": "トレジャーファクトリー Hello Park Susenji: a range close to Second Street, in smaller quantity"
     }
    ]
   },
   "52dfde": {
    "text": "Bicycles: essential in Ito"
   },
   "adb267": {
    "text": "Having no wheels in Ito really is hard going, and bicycles in Japan are not cheap. The university is built on high ground and the climb is unavoidable, so choose at least a geared model, and consider electric assist if your budget allows. It is worth visiting several shops before deciding."
   },
   "97941b": {
    "headers": [
     "Store",
     "From campus",
     "From experience"
    ],
    "rows": [
     [
      "ルミエール Imajuku branch",
      "Medium (reachable on the K line)",
      "A geared mamachari for under ¥20,000; good value. No electric-assist models"
     ],
     [
      "Cycle Shop Palette Kyudai-mae",
      "Nearest",
      "Has cheaper bikes and accepts Alipay"
     ],
     [
      "サイクルベースあさひ Ito / Itoshima",
      "Medium",
      "A big chain — well run with plenty of stock, prices slightly higher"
     ],
     [
      "イオンバイク Fukuoka Ito",
      "Close",
      "Convenient inside AEON, prices slightly higher"
     ],
     [
      "ミスターマックス Itoshima",
      "Medium",
      "The bicycle section is unexpectedly good, with cheap electric-assist models"
     ]
    ]
   },
   "b5f388": {
    "text": "From experience: the above are assessments from people who actually shopped around. Prices and stock change, so go by what you find in store. Watch group chats for second-hand bikes from graduating students too — usually cheaper than a shop, but remember to transfer the anti-theft registration."
   },
   "a2836a": {
    "text": "AEON Campus Pickup Locker: easiest if you live on campus"
   },
   "3dfc41": {
    "text": "Since October 2025 there has been an AEON Net Supermarket pickup locker at the entrance of the Central Canteen on campus. Delivery to this locker is free, and the range covers essentially everything the Gakken AEON carries — the orders are in fact dispatched from that store. If you live on campus this is probably the least effortful way to shop."
   },
   "ac5dc4": {
    "items": [
     {
      "title": "Register an account",
      "desc": "If you already have an iAEON account, it works here."
     },
     {
      "title": "Choose the store and order",
      "desc": "Select AEON Fukuoka Ito. There is a minimum order value."
     },
     {
      "title": "Choose pickup in the cart",
      "desc": "Under “受取り時間” select “店舗などでお受取”, and note which time slots are available."
     },
     {
      "title": "Specify the locker",
      "desc": "On the next step, choose the on-campus locker under “受取場所”, and mind the collection times."
     }
    ]
   },
   "3238c2": {
    "text": "From experience: online prices are essentially the same as in store (not that they are low to begin with). The fresh and prepared-food ranges are on the thin side, vegetables and fruit are reasonably complete, and daily goods extend to the items on AEON’s second floor. Home delivery costs extra, and whether they deliver to you is confirmed by entering your postcode."
   },
   "4fc028": {
    "items": [
     {
      "text": "AEON Kyushu Net Supermarket",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "Parts of this guide are adapted from “New Ito Chronicle” (by Hato_Tsubame and CantonSimon) and included with the authors’ permission. Prices, service frequencies, and procedures change over time; for anything important, please check the relevant official website."
   }
  },
  "ko": {
   "3082ec": {
    "text": "전체 그림: 상권 분포와 도는 법"
   },
   "8e23fa": {
    "text": "이토 캠퍼스는 후쿠오카시 니시구 모토오카에 있고 주변은 캠퍼스와 주택가가 중심입니다. 가장 가까운 상권은 규슈대 학연도시역 일대이며, 서쪽으로는 이토시마시(지쿠젠마에바루), 동쪽으로는 메이노하마·무로미 일대까지 대체로 캠퍼스 반경 7km 안에 들어옵니다. 일상적인 장보기는 역 주변 슈퍼와 드러그스토어가 중심이고, 대량 구매는 할인점과 종합 슈퍼로 갑니다."
   },
   "d5299c": {
    "text": "생필품은 학연 일대에서 거의 다 구할 수 있습니다. 가구와 생활필수품은 니토리(ニトリ)로 —— 다만 가장 가까운 매장이 후쿠오카 니시점(지하철 하시모토역 근처)이라 이토 캠퍼스에서 멀고 도보권이 아니어서 교통편이 필요합니다."
   },
   "3dc2d0": {
    "text": "아래는 「거리/종류」로 정리했습니다. 각 매장의 주소, 영업시간, 7km 이내 여부는 지도에서 직접 검색해 확인하세요. 매장은 바뀔 수 있습니다."
   },
   "aacc3a": {
    "text": "슈퍼: 맥스밸류·니시테츠 스토어"
   },
   "edac1a": {
    "items": [
     {
      "text": "マックスバリュ(MaxValu): AEON 계열 슈퍼. 가장 가까운 곳은 스센지니시점(24시간 영업)으로 신선식품, 반찬, 쌀·면, 생필품이 갖춰져 있습니다"
     },
     {
      "text": "にしてつストア(니시테츠 스토어 스센지점): 니시테츠 계열 슈퍼. 신선식품, 반찬, 후쿠오카 특산품"
     }
    ]
   },
   "18b42b": {
    "text": "드러그스토어: 약·세면용품"
   },
   "b4d3ba": {
    "items": [
     {
      "text": "ドラッグイレブン(Drug Eleven): 규슈 지역 드러그스토어 체인. 약, 화장품, 생필품, 과자"
     },
     {
      "text": "サンドラッグ / ダイレックス(다이렉스, 이토점 등): 드러그스토어 겸 할인점. 생필품, 세면용품, 과자가 비교적 저렴합니다"
     }
    ]
   },
   "c24ac4": {
    "text": "할인점: 트라이얼·업무 슈퍼"
   },
   "d29eba": {
    "items": [
     {
      "text": "トライアル(Trial): 할인 슈퍼. 식품과 생필품이 저렴하고 일부 매장은 24시간 영업"
     },
     {
      "text": "業務スーパー(교무 슈퍼, 이토점): 냉동식품과 대용량 위주로 쟁여두기에 적합합니다"
     }
    ]
   },
   "84d22e": {
    "text": "대형 종합: 이온·서니"
   },
   "92e039": {
    "items": [
     {
      "text": "イオン(AEON, 후쿠오카 이토점): 종합 슈퍼. 의류, 생활용품, 신선식품, 반찬이 갖춰져 있습니다"
     },
     {
      "text": "サニー(Sunny) / マルキョウ(마루쿄, 이마주쿠점 등): 후쿠오카 지역 슈퍼. 신선식품이 비교적 싸고 특가도 자주 있습니다"
     }
    ]
   },
   "6e9f25": {
    "text": "편의점과 확장 상권"
   },
   "a76085": {
    "text": "로손 / 세븐일레븐 / 패밀리마트: 역과 캠퍼스 근처에 있어 음료, 간단한 먹을거리, 생필품, ATM, 복사 등 급할 때 편리하지만 가격은 비싼 편입니다."
   },
   "40861e": {
    "text": "동쪽의 메이노하마·무로미 일대에는 슈퍼, 드러그스토어, 상업시설이 더 많고 지하철이나 버스로 갈 수 있습니다. 서쪽 이토시마시의 지쿠젠마에바루에는 지역 슈퍼와 상점가가 있어 겸사겸사 둘러볼 만합니다."
   },
   "9da2b2": {
    "text": "중고·절약 팁·링크"
   },
   "30eccf": {
    "items": [
     {
      "text": "믿을 만한 중고 자전거 가게",
      "url": "https://maps.app.goo.gl/PqRLz6KtPdcAPvnW7"
     },
     {
      "url": "https://maps.app.goo.gl/KKvgjEHL8grTamZk8?g_st=ic",
      "text": "니시구 24시간 골판지 수거 장소"
     },
     {
      "text": "규슈대 생협(어학시험 등 교내 신청 안내)",
      "url": "https://www.coop.kyushu-u.ac.jp/"
     }
    ]
   },
   "962a01": {
    "text": "소소한 팁"
   },
   "1ff8de": {
    "items": [
     {
      "text": "복사용지 등은 ナフコ(나프코), ドン・キホーテ(돈키호테), ダイレックス에서 사면 저렴합니다"
     },
     {
      "text": "교소칸에 사는 사람은 이동판매차 「이토마루쿤」에서 신선식품을 살 수 있습니다"
     }
    ]
   },
   "1420ca": {
    "items": [
     {
      "text": "규슈대학 · 생활 가이드/팸플릿(리빙 가이드 포함)",
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
    "text": "생필품, 가구, 가전, 자전거까지 한 곳에서 살 수 있고 식품도 일부 있습니다. 100엔숍만큼 싸지는 않지만 품목이 넓다는 것이 강점입니다. 대부분의 홈센터가 온라인몰과 재고 조회를 잘 갖추고 있으니, 나가기 전에 가격과 재고를 확인하면 헛걸음을 줄일 수 있습니다."
   },
   "3496a2": {
    "headers": [
     "매장",
     "캠퍼스에서",
     "비고"
    ],
    "rows": [
     [
      "ホームプラザナフコ 모토오카점",
      "가장 가까움",
      "온라인몰 이용 가능"
     ],
     [
      "ホームセンターグッデイ 이토점",
      "가까움",
      "비교적 새것"
     ],
     [
      "ミスターマックス 이토시마점",
      "중간",
      "생필품과 가구가 저렴하고 온라인 재고 조회가 편리. 자전거 코너도 괜찮음"
     ],
     [
      "スーパービバホーム 시마점",
      "멂",
      "매우 큼. SETTLE에 살면 상대적으로 가까움"
     ],
     [
      "コメリパワー 스센지점",
      "멂",
      "매우 크고 품목이 다양"
     ]
    ]
   },
   "adfb20": {
    "text": "100엔숍: 재고 확인 후 가기"
   },
   "28bbb8": {
    "text": "홈센터에서 1,000엔 하는 물건이 여기서는 100엔으로 해결되기도 합니다. 그만큼 품질은 떨어집니다. 갓 입국해 잡화를 갖출 때 가성비가 가장 좋습니다. 세리아는 순수 100엔숍으로 전 품목이 100엔이고, 다이소에는 200~1,000엔짜리 상품도 있어 비싼 쪽은 품질이 조금 낫습니다."
   },
   "dc40bc": {
    "text": "매장마다 들여오는 품목이 자주 다르고 품절도 잦습니다. 다이소 공식 앱에서 특정 매장의 재고를 조회할 수 있으니, 가기 전에 확인하는 편이 헛걸음보다 낫습니다."
   },
   "69029b": {
    "text": "중고 가게: 책, 가구, 가전, 옷"
   },
   "8db039": {
    "text": "특별히 싸다고 할 정도는 아니지만 기본적인 세척을 거쳤고 어느 정도 보증도 있어, 단기 체류라 새것을 사고 싶지 않을 때 적합합니다."
   },
   "af7aff": {
    "items": [
     {
      "text": "BOOKOFF PLUS 후쿠오카 이토시마점: 책과 애니·게임 관련 상품 위주"
     },
     {
      "text": "セカンドストリート 이토시마점: 비교적 새것이고 종류가 많지만 가격은 조금 높음"
     },
     {
      "text": "リサイクルマート 이토시마점: 소박한 편이고 물건이 상대적으로 저렴"
     },
     {
      "text": "トレジャーファクトリー 헬로파크 스센지점: 세컨드스트리트와 비슷한 구성이나 수량은 다소 적음"
     }
    ]
   },
   "52dfde": {
    "text": "자전거: 이토에서는 필수"
   },
   "adb267": {
    "text": "이토에서 탈것이 없으면 정말 불편하고, 일본의 자전거도 싸지 않습니다. 학교가 고지대에 있어 오르막을 피할 수 없으니 최소한 변속기가 있는 모델을 고르고, 예산이 된다면 전기자전거도 고려하세요. 몇 군데 둘러보고 정하기를 권합니다."
   },
   "97941b": {
    "headers": [
     "매장",
     "캠퍼스에서",
     "경험 참고"
    ],
    "rows": [
     [
      "ルミエール 이마주쿠점",
      "중간(K선으로 갈 수 있음)",
      "변속 마마차리가 2만엔 이내로 가성비 좋음. 전기자전거는 없음"
     ],
     [
      "Cycle Shop Palette 규다이마에점",
      "가장 가까움",
      "비교적 저렴한 자전거가 있고 알리페이 사용 가능"
     ],
     [
      "サイクルベースあさひ 이토점 / 이토시마점",
      "중간",
      "대형 체인으로 잘 갖춰져 있고 물량도 많지만 가격은 조금 높음"
     ],
     [
      "イオンバイク 후쿠오카 이토점",
      "가까움",
      "이온 안에 있어 편리, 가격은 조금 높음"
     ],
     [
      "ミスターマックス 이토시마점",
      "중간",
      "자전거 코너가 의외로 괜찮고 저렴한 전기자전거도 있음"
     ]
    ]
   },
   "b5f388": {
    "text": "경험 참고: 위는 실제로 둘러본 사람들의 평가입니다. 가격과 재고는 바뀌니 매장에서 확인한 것을 우선하세요. 중고 자전거는 졸업하는 학생의 양도도 단체방에 종종 올라옵니다 —— 보통 가게보다 싸지만 방범등록 명의 변경을 잊지 마세요."
   },
   "a2836a": {
    "text": "이온 교내 수령 락커: 기숙사 거주라면 가장 편함"
   },
   "3dfc41": {
    "text": "2025년 10월부터 교내 중앙식당 입구에 이온 넷슈퍼 수령 락커가 설치되었습니다. 이 락커로 받으면 배송료가 무료이고, 상품은 학연 이온 매장의 취급 품목을 거의 아우릅니다 —— 실제 발송도 그 매장에서 합니다. 교내에 산다면 이것이 가장 손이 덜 가는 구매 방법일 것입니다."
   },
   "ac5dc4": {
    "items": [
     {
      "title": "계정 등록",
      "desc": "이미 iAEON 계정이 있다면 그대로 쓸 수 있습니다."
     },
     {
      "title": "매장 선택 후 주문",
      "desc": "이온 후쿠오카 이토점을 선택합니다. 최소 주문 금액이 있습니다."
     },
     {
      "title": "장바구니에서 수령 방법 선택",
      "desc": "「受取り時間」에서 「店舗などでお受取」를 선택하고 가능한 시간대를 확인하세요."
     },
     {
      "title": "수령 락커 지정",
      "desc": "다음 단계에서 「受取場所」에 교내 락커를 선택합니다. 수령 가능 시간에 유의하세요."
     }
    ]
   },
   "3238c2": {
    "text": "경험 참고: 넷슈퍼 가격은 실제 매장과 거의 같습니다(원래 싼 편은 아니지만). 신선식품과 반찬 품목은 다소 적고 채소와 과일은 비교적 갖춰져 있으며, 생필품은 이온 2층 상품까지 포함합니다. 집으로 배송을 선택하면 배송료가 별도이며, 배송 가능 여부는 우편번호를 입력해 확인하세요."
   },
   "4fc028": {
    "items": [
     {
      "text": "이온 규슈 넷슈퍼",
      "url": "https://kyushu.netsuper.aeon.com/0000018990"
     }
    ]
   },
   "a847a0": {
    "text": "이 글의 일부는 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)에서 저자의 허락을 받아 수록했습니다. 본문의 가격, 운행 편수, 절차는 시간이 지나면 바뀝니다. 중요한 사항은 각 공식 사이트를 확인하세요."
   }
  }
 },
 "guide-transport": {
  "ja": {
   "397485": {
    "text": "自転車：買う・乗る・処分する"
   },
   "402355": {
    "text": "状況に応じて 2 つの案があります：① 天神／博多だけに行く → 案 1（回数券、往復 994 円）。② 市内の 2 か所以上を回る＋時間に余裕がある → 案 2（姪浜乗り換え＋地下鉄 1 日券）。"
   },
   "565847": {
    "text": "使い方：アプリの案内に従ってチケットを有効化し、降りる前に運転手に画面を見せればそのまま降りられます。"
   },
   "1b9a7f": {
    "text": "伊都キャンパスでは自転車が日常の足です。学研の JR 駅から大学までは徒歩で約 45~50 分、自転車で約 20~30 分、バイクや車なら約 10~15 分。バスもありますが（約 15~20 分）、本数は多くありません。"
   },
   "29a476": {
    "text": "自転車を買う"
   },
   "fc7dbb": {
    "text": "新車は一般に 17,000 円以上、福岡の中古相場は 11,000 円ほどです（経験値）。中古はメルカリのほか、学生間の譲渡情報にも注意しておきましょう。購入時には防犯登録（600 円）が必要で、防犯登録カードは大切に保管してください（抹消のときに使います）。"
   },
   "255bf5": {
    "text": "自転車の処分・譲渡"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "不要になった自転車はリサイクルショップで売るか、友人に譲れます"
     },
     {
      "text": "防犯登録の抹消手続きが必要です：購入時の「防犯登録カード（お客様控）」と身分証明書を持って警察署へ"
     },
     {
      "text": "リサイクルマート糸島は英語対応可"
     }
    ]
   },
   "ccfc54": {
    "text": "シェアサイクル / レンタル"
   },
   "08e40e": {
    "text": "キャンパス内にはシェアサイクルと電動シェアモビリティのポートがあります。場所と利用可能な車両はキャンパスマップや専用アプリで確認できます。大学もレンタサイクルを用意しているので、生協に問い合わせてみてください。"
   },
   "9ce8b1": {
    "text": "バスの乗り方：乗降と市内運賃"
   },
   "96d0f3": {
    "text": "日本のバスは多くの場合、後ろ（車体中央）の扉から乗り、前（運転手の横）の扉から降ります。"
   },
   "c35290": {
    "text": "乗降時は基本的に IC カードをタッチします（均一運賃の路線を除く）。現金の場合は、乗るときに扉付近の発券機で「整理券」を取ります —— どの停留所から乗ったかを示す控えです。降りるときに整理券と運賃を一緒に運賃箱へ入れます。"
   },
   "aed18c": {
    "text": "車内に両替機はありますが、1000 円札と 500 円硬貨しか両替できません。小銭を用意しておくことをおすすめします。"
   },
   "5d3027": {
    "text": "福岡市内の一般バス"
   },
   "f264f5": {
    "text": "西鉄バスの都心部区間（博多駅・天神・薬院駅前など）は均一 150 円、一般の区間は初乗り 210 円です（2024 年 1 月の運賃改定後）。福岡のバスと地下鉄はどちらも IC カード（SUGOCA、nimoca、はやかけん など）に対応しています。"
   },
   "60da92": {
    "text": "大学へ行く：路線・my route・通学定期"
   },
   "de2248": {
    "text": "九大伊都キャンパスへは主に次の 3 つのバス路線があります："
   },
   "54f112": {
    "headers": [
     "路線",
     "運行会社",
     "主な区間",
     "片道運賃"
    ],
    "rows": [
     [
      "九州大学線（本線）",
      "昭和バス",
      "九大学研都市駅 ↔ 伊都キャンパス各停留所",
      "330 円"
     ],
     [
      "九州大学線（糸島）",
      "昭和バス",
      "前原駅北口・周船寺小学校前 ↔ 伊都キャンパス",
      "200 円"
     ],
     [
      "急行・直行便",
      "西鉄バス",
      "博多駅前・天神 ↔ 伊都キャンパス",
      "670 円～"
     ]
    ]
   },
   "3f31f6": {
    "text": "九大学研都市駅からキャンパス内の各所（イーストゾーン、ビッグオレンジ、工学部、農学部など）までは、どの停留所でも一律 330 円。キャンパス内の均一区間は 160 円です。学研都市駅→伊都営業所は 390 円、泊北口・国際村前方面は 410 円。"
   },
   "9a0cda": {
    "text": "Google で aimo の QR コードを読み取ってうまくいかない場合は、aimo の日本語ページを使ってください：https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "おすすめの乗り方：my route アプリ"
   },
   "790a29": {
    "text": "my route アプリをダウンロードできます（iOS は海外ストアに切り替える必要があります）。アプリ内で昭和バスの九州大学線（糸島市の路線を除く）が見つかり、550 円 / 18 時間の乗り放題チケットが買えます。支払いはクレジットカードか PayPay。日々の通学にはおすすめの方法のひとつです。"
   },
   "96fc42": {
    "text": "通学定期"
   },
   "f61466": {
    "headers": [
     "路線",
     "区間",
     "1 か月",
     "3 か月",
     "備考"
    ],
    "rows": [
     [
      "昭和バス 九州大学線",
      "学研都市駅 ↔ 伊都キャンパス",
      "10,000 円",
      "28,000 円",
      "モバイル定期券、九大生専用"
     ],
     [
      "昭和バス 九州大学線（糸島）",
      "前原・周船寺 ↔ 伊都キャンパス",
      "7,200 円",
      "20,520 円",
      "紙・モバイルどちらも可"
     ],
     [
      "JR 筑肥線＋地下鉄",
      "学研都市 → 天神",
      "約 11,680 円",
      "—",
      "NAVITIME で確認"
     ],
     [
      "西鉄バス",
      "区間による",
      "—",
      "—",
      "西鉄公式サイトを参照"
     ]
    ]
   },
   "967aaa": {
    "text": "学内にはもうひとつ、予約制の無料シャトル aimo があります。学内 37 か所の停留所をカバーし、スマホで予約して指定の停留所から乗ります。呼べば来るオンデマンド便のほか、定時定路線で同じく予約が必要な循環便もあり、学期中の平日 08:00–22:00 に運行しています。"
   },
   "6ca9ff": {
    "text": "aimo は手を挙げれば止まるシャトルではなく、予約制です。利用が多い時間帯は十数分、ときにはそれ以上待つこともあるので、急ぐ授業には当てにしないでください。"
   },
   "8b1e39": {
    "text": "糸島線と九大線は別の系統で、運賃の計算方法が異なり、割引券も共通ではありません。⬜要確認：糸島線が今も均一運賃かどうか、また九大線の 18 時間パスが糸島線でも使えるかどうか @ https://www.showa-bus.jp/category/pass/"
   },
   "060e79": {
    "text": "割引きっぷ一覧"
   },
   "459d9a": {
    "text": "以下は公式の最新情報が優先します："
   },
   "76448a": {
    "items": [
     {
      "text": "地下鉄 1 日乗車券：640 円。当日、地下鉄全線（空港線・箱崎線・七隈線）が乗り放題"
     },
     {
      "text": "クレジットカードのタッチ決済：きっぷを買わなくても 1 日の上限があります。地下鉄 3 線 36 駅でタッチ決済対応のクレジットカードを直接使え、1 日の合計が 640 円に達するとその日はそれ以上引き落とされません（障がい者割引と小児は 320 円）。2024-04-01 から実施。"
     }
    ]
   },
   "84fe39": {
    "text": "タッチ決済の 1 日上限は「同じカード番号 かつ 同じ媒体」のときだけ合算されます。朝は実体カード、午後はスマホのウォレットで同じカードを使うと、それぞれ別に数えられ上限は効きません —— 上限を活かすなら 1 日を通して同じ使い方に統一してください。また地下鉄の区間は姪浜までで、九大から出る前半は JR 筑肥線なので、その分はこの上限に入りません。"
   },
   "28e638": {
    "items": [
     {
      "text": "伊都キャンパス回数券：6,730 円（10 枚綴り、3 か月有効）。地下鉄各駅 ↔ JR 九大学研都市駅 ↔ 昭和バスの九大キャンパス内で使えます。1 枚あたり 673 円。九大生協で購入できます"
     },
     {
      "text": "エコルカード / ワイドエコルカード：西鉄バスの定期券。範囲と価格は区域によって異なるので、西鉄の公式サイトを参照してください"
     },
     {
      "text": "通学定期券：JR・西鉄・地下鉄それぞれに学生割引の定期券があります。学生証を受け取ってから申し込めます"
     }
    ]
   },
   "50ea66": {
    "text": "注意：特別聴講学生や研究生など正課生でない身分では、エコルカードと通学定期券を購入できません。"
   },
   "56c5db": {
    "items": [
     {
      "text": "地下鉄 1 日乗車券",
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
    "text": "・連絡ミニ回数券：6 枚綴りで、乗車駅によって 2,610 / 2,820 / 2,980 / 3,360 円。JR 九州の各駅で発売しています。伊都キャンパス回数券とはカバーする区間が違うので、買う前に自分がよく使う区間が範囲に入っているか確認してください。"
   },
   "9acd34": {
    "text": "・西鉄バス 6 時間 / 24 時間フリーパス：有効時間内はフリーエリア内の西鉄バスが乗り放題で、my route アプリで購入します。九大から K 線で天神まで片道約 710 円かかるので、その日に市内で何度も乗るなら通常はお得です。"
   },
   "a010db": {
    "text": "⬜要確認：西鉄フリーパスの正確な価格とフリーエリアの範囲。公式は価格を画像に入れており、検索で出てくるデジタル券の価格と、別のところで流通している紙券の価格の基準が一致しません。「紙券とデジタル券で 2 種類ある」可能性をまだ排除できていません。購入前に my route アプリ内で確認してください。フリーエリアが九大までのこの区間をカバーするかどうかは、価格より重要です。"
   },
   "c1a2f8": {
    "text": "天神・博多へ：節約の 2 案"
   },
   "70e66b": {
    "text": "福岡市内で最も賑やかなのは天神—博多ですが、大学から直接乗ると片道 570 円もします。九大学研都市と周船寺の一帯は JR 筑肥線に属し、そのまま福岡市地下鉄と接続しているため、乗車すると JR と福岡市地下鉄の両方に運賃を払うことになるからです。"
   },
   "842f3d": {
    "text": "案 2 の姪浜は福岡市地下鉄 箱崎線・空港線の始発駅で本数が多く、乗り換えでもそれほど時間を取られません。"
   },
   "675d9f": {
    "title": "案 1：オトクチケット 回数券 · 天神/博多のみ（往復 994 円）"
   },
   "13e40f": {
    "text": "向いている場面：その日は 天神／博多 の一帯だけで動く場合。行きと帰りに 1 枚ずつ（計 2 枚）で、現在 994 円（1 枚あたり約 497 円）。そのまま乗るより 1 枚 73 円安くなります。6 枚単位での販売で、1 か月間有効・期限切れは無効なので、予定に合わせて買ってください。"
   },
   "4e6275": {
    "items": [
     {
      "num": "1",
      "text": "駅に入ったら「みどりの窓口」の横の自動券売機のエリアを探します"
     },
     {
      "num": "2",
      "text": "タッチパネルで「オトクチケット」のボタンを押します"
     },
     {
      "num": "3",
      "text": "出発駅（周船寺 または 九大学研都市）と枚数を選びます（1 回 6 枚購入、今回は 2 枚使用）"
     },
     {
      "num": "4",
      "text": "現金または IC カードで支払い、きっぷを受け取ります"
     },
     {
      "num": "5",
      "text": "きっぷで自動改札を通って乗車。天神／博多に着いたらきっぷを改札に入れて出ます"
     }
    ]
   },
   "fb7753": {
    "title": "案 2：姪浜乗り換え＋地下鉄 1 日券 · 複数箇所 / 時間に余裕（合計 1,180 円）"
   },
   "092ecf": {
    "text": "向いている場面：その日に市内 2 か所以上を回り、時間に余裕がある場合。要点は JR で姪浜（福岡市地下鉄の始発駅）まで乗って降り、地下鉄 1 日券に乗り換えて 1 日回ることです。姪浜は箱崎線・空港線の始発駅で、九大学研都市駅よりずっと本数が多いため、乗り換えで余分にかかる時間はわずかです。"
   },
   "2c1ea4": {
    "text": "合計：270×2 + 640 = 1,180 円。1 か所だけなら割に合いません（直通 570×2 = 1,140 円のほうが安い）。"
   },
   "3f3ee3": {
    "items": [
     {
      "num": "1",
      "text": "周船寺 または 九大学研都市 駅で姪浜までのきっぷを買います（片道 270 円）"
     },
     {
      "num": "2",
      "text": "姪浜駅で降りて改札を出て、姪浜の駅舎に入ります"
     },
     {
      "num": "3",
      "text": "姪浜駅の券売機で福岡市地下鉄の 1 日券（640 円）を買います"
     },
     {
      "num": "4",
      "text": "1 日券で福岡市地下鉄の全線に自由に乗れます。その日のうちなら出場・入場を繰り返せます"
     },
     {
      "num": "5",
      "text": "帰りは九大学研都市まで戻り、改札の手前で 1 日券を精算機に入れて、姪浜→九大学研都市の差額（約 300 円）を追加で払い、1 日券と精算券を受け取って改札を出ます"
     },
     {
      "num": "6",
      "text": "※ 1 日券は出場後もその日は有効なので、また福岡市内に出るときのために取っておけます"
     }
    ]
   },
   "032240": {
    "headers": [
     "方法",
     "往復の費用"
    ],
    "rows": [
     [
      "博多まで直接乗って往復",
      "570×2 = 1,140 円"
     ],
     [
      "姪浜まで往復＋地下鉄 1 日券",
      "270×2 + 640 = 1,180 円"
     ]
    ]
   },
   "2a2b4d": {
    "text": "結論：1 か所だけなら普通にきっぷを買うほうが安く（1,140 円）、1 日に 2 か所以上回るなら「姪浜乗り換え＋地下鉄 1 日券」のほうがお得です。"
   },
   "1fac9d": {
    "text": "ヒント：券売機や改札の精算の操作が分からないときは、地下鉄や JR の駅員（制服を着て名札を付けています）に声をかけて、購入や精算、出場を手伝ってもらえます。"
   },
   "ec7b4d": {
    "text": "原付 / 免許"
   },
   "50dcb4": {
    "text": "免許の切り替えや原付免許の取得は、以下の入口を参考にしてください。原付は必ずしも教習所に通う必要はなく、予約すれば直接受験できます。詳細は福岡県警の案内が優先します。"
   },
   "b31729": {
    "items": [
     {
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html",
      "text": "福岡県警・原付免許"
     },
     {
      "text": "練習場所（周船寺付近）",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "電動キックボードの安全",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "免許切り替えの相乗り経験：まず博多へ行き、博多駅から JR 福北ゆたか線で飯塚へ、そこから徒歩で向かうという行き方があります。"
   },
   "6135a0": {
    "text": "2025 年に何が変わったか：新基準原付"
   },
   "187f72": {
    "text": "排出ガス規制の強化により、50cc 以下の原付一種は 2025-10-31 に生産終了となり、代わって「新基準原付」が登場しました：排気量は 125cc 以下まで広がりましたが、最高出力は 4.0 kW 以下に制限されます。制度は 2025-04-01 施行、新しい排出ガス規制は 2025-11-01 から適用です。"
   },
   "55a01a": {
    "text": "排気量は大きくなりましたが、**法律上の扱いは何ひとつ変わっていません**。引き続き原付一種として扱われます：法定最高速度 30 km/h、3 車線以上の道路の交差点では二段階右折、二人乗り禁止。「125cc になったから 60 km/h で走れる、二人乗りできる」という話はすべて誤りです。"
   },
   "2553ff": {
    "text": "受験：学科のみ、ただし講習が前提"
   },
   "22a10d": {
    "text": "原付免許に実技試験はなく、30 分の学科試験だけです。問題は日本語、英語、中国語、ベトナム語の 4 言語で用意されています。実際に引っかかるのは試験ではなく、先に「原付講習」を受け終えていなければならない点です —— 受けていないと、筆記に合格してもその日に免許は交付されません。"
   },
   "de3307": {
    "headers": [
     "項目",
     "金額"
    ],
    "rows": [
     [
      "試験手数料",
      "1,600 円"
     ],
     [
      "免許交付料",
      "2,350 円（マイナンバーカードのみを使う場合は 1,550 円）"
     ],
     [
      "合計（最低）",
      "3,950 円"
     ]
    ]
   },
   "f264aa": {
    "text": "受付は平日の朝 08:30–09:00 の 30 分間だけです（休日と 12/29–01/03 を除く）。福岡県内に試験場は 4 か所。逃すと日を改めることになるので、伊都から向かうなら移動時間をよく計算してください。"
   },
   "e03f4f": {
    "items": [
     {
      "text": "購入後はナンバー登録が必要：原付のナンバープレートは居住地の市役所・区役所が交付します。陸運局ではありません。福岡市西区に住む人と糸島市に住む人では、行く窓口が違います"
     },
     {
      "text": "自賠責保険（強制保険）への加入が必須です。無保険での走行は違法です"
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
      "text": "日本自動車工業会・原付一種の新区分",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "タクシー：運賃と呼び方"
   },
   "4dff94": {
    "text": "夜に終電を逃したときや、大きな荷物を運ぶときに使います。福岡地区の現行運賃は 2026-07-01 から適用されています。"
   },
   "adf1b4": {
    "headers": [
     "車種",
     "初乗り（1.1 km まで）",
     "以降 100 円ごと"
    ],
    "rows": [
     [
      "普通車",
      "600 円",
      "287 m"
     ],
     [
      "大型車",
      "720 円",
      "176 m"
     ],
     [
      "特大型車",
      "780 円",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "深夜割増：22:00 から翌 05:00 まで、運賃が 2 割増しになります"
     },
     {
      "text": "迎車料金（呼んで来てもらう場合）は各社が独自に設定しており、金額は一律ではありません"
     },
     {
      "text": "JR の各駅の出口には通常タクシーが待機しています。人通りの少ない場所では電話かアプリで呼ぶ必要があります"
     }
    ]
   },
   "f7c689": {
    "text": "ネットで見かける「初乗り 1,064 m 670 円、以降 268 m ごと 80 円」は前の版の運賃で、2026-07-01 に廃止されています。この数字が載っている記事は、ほかの内容もそれ以前に書かれたものである可能性が高いので、あわせて注意してください。"
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
    "text": "本記事のいくつかのテーマの選定にあたっては《新伊都国風土記》（著者 Hato_Tsubame、CantonSimon）の整理を参考にしました。文中の数字と手続きはすべて各公式サイトから取り直して再確認しています。同書との間に食い違いがある場合は公式を優先してください。"
   }
  },
  "en": {
   "397485": {
    "text": "Bicycles: buying, riding, disposing"
   },
   "402355": {
    "text": "Two situations, two answers: ① going only to Tenjin/Hakata → option 1 (coupon tickets, 994 yen return); ② visiting two or more places in the city with time to spare → option 2 (change at Meinohama plus a subway one-day pass)."
   },
   "565847": {
    "text": "How to use it: activate the ticket as the app instructs, then show it to the driver before getting off and you can alight directly."
   },
   "1b9a7f": {
    "text": "At Ito Campus a bicycle is the everyday way to get around. From the Gakken JR station to the university takes about 45–50 minutes on foot, 20–30 minutes by bicycle, and 10–15 minutes by motorbike or car. There is a bus too (about 15–20 minutes), but services are infrequent."
   },
   "29a476": {
    "text": "Buying a bicycle"
   },
   "fc7dbb": {
    "text": "A new bike generally costs 17,000 yen or more; the second-hand market in Fukuoka runs around 11,000 yen (an experience-based figure). For second-hand, try Mercari or watch for bikes being passed on between students. When you buy, anti-theft registration (600 yen) is required — keep the registration card safe, as you will need it to deregister."
   },
   "255bf5": {
    "text": "Disposing of or passing on a bicycle"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "A bike you no longer need can be sold to a second-hand shop or passed to a friend"
     },
     {
      "text": "You must cancel the anti-theft registration: take the customer’s copy of the registration card from when you bought it, plus ID, to a police station"
     },
     {
      "text": "Recycle Mart Itoshima can handle English"
     }
    ]
   },
   "ccfc54": {
    "text": "Bike share and rental"
   },
   "08e40e": {
    "text": "There are shared-bicycle and shared electric-mobility ports on campus; locations and available vehicles can be checked on the campus map or the relevant app. The university also offers rental bicycles — ask at the co-op."
   },
   "9ce8b1": {
    "text": "How to Ride the Bus: boarding and city fares"
   },
   "96d0f3": {
    "text": "Japanese buses are usually boarded through the rear (mid-body) door and exited through the front door, next to the driver."
   },
   "c35290": {
    "text": "You normally touch an IC card on boarding and alighting (except on flat-fare routes). If paying cash, take a numbered ticket (整理券) from the dispenser by the door as you board — it records which stop you got on at. When you get off, put the ticket in the fare box together with your fare."
   },
   "aed18c": {
    "text": "There is a change machine on board, but it only changes 1,000 yen notes and 500 yen coins, so it is worth carrying small change."
   },
   "5d3027": {
    "text": "Ordinary buses within Fukuoka City"
   },
   "f264f5": {
    "text": "Nishitetsu buses charge a flat 150 yen in the city-centre zone (Hakata Station, Tenjin, Yakuin Station, and so on), with a 210 yen base fare on ordinary sections (following the January 2024 fare revision). Fukuoka’s buses and subway both accept IC cards (SUGOCA, nimoca, Hayakaken, etc.)."
   },
   "60da92": {
    "text": "Getting to Campus: routes, my route, commuter passes"
   },
   "de2248": {
    "text": "There are three main bus routes to Kyudai Ito Campus:"
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
      "Kyushu University line (main)",
      "Showa Bus",
      "Kyudai-gakkentoshi Stn ↔ stops across Ito Campus",
      "¥330"
     ],
     [
      "Kyushu University line (Itoshima)",
      "Showa Bus",
      "Maebaru Stn north exit / Susenji Elementary ↔ Ito Campus",
      "¥200"
     ],
     [
      "Express / direct services",
      "Nishitetsu Bus",
      "Hakata Stn / Tenjin ↔ Ito Campus",
      "From ¥670"
     ]
    ]
   },
   "3f31f6": {
    "text": "From Kyudai-gakkentoshi Station to anywhere on campus (East Zone, Big Orange, Engineering, Agriculture, and so on) the fare is a flat 330 yen at every stop. Within campus the flat section is 160 yen. Gakkentoshi Station to the Ito depot is 390 yen, and towards Tomari-Kitaguchi / Kokusaimura-mae 410 yen."
   },
   "9a0cda": {
    "text": "If scanning the aimo QR code with Google gives you trouble, use the aimo Japanese page instead: https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "The recommended way: the my route app"
   },
   "790a29": {
    "text": "You can download the my route app (on iOS you may need to switch to an overseas store). In the app you will find Showa Bus’s Kyushu University line (excluding the Itoshima City routes) and can buy an unlimited-ride ticket at 550 yen for 18 hours, paying by credit card or PayPay. It is one of the better options for daily commuting."
   },
   "96fc42": {
    "text": "Commuter passes"
   },
   "f61466": {
    "headers": [
     "Route",
     "Section",
     "1 month",
     "3 months",
     "Notes"
    ],
    "rows": [
     [
      "Showa Bus Kyushu University line",
      "Gakkentoshi Stn ↔ Ito Campus",
      "¥10,000",
      "¥28,000",
      "Mobile pass, Kyudai students only"
     ],
     [
      "Showa Bus Kyushu University line (Itoshima)",
      "Maebaru / Susenji ↔ Ito Campus",
      "¥7,200",
      "¥20,520",
      "Paper or mobile"
     ],
     [
      "JR Chikuhi line + subway",
      "Gakkentoshi → Tenjin",
      "About ¥11,680",
      "—",
      "Check on NAVITIME"
     ],
     [
      "Nishitetsu Bus",
      "Varies by section",
      "—",
      "—",
      "See the Nishitetsu website"
     ]
    ]
   },
   "967aaa": {
    "text": "There is also aimo, a free booking-based shuttle on campus covering 37 stops: you book on your phone and board at the stop you specify. Besides the on-demand service there are fixed-route circular services, which also require booking, running weekdays 08:00–22:00 during term."
   },
   "6ca9ff": {
    "text": "aimo is not a hail-and-ride shuttle; it runs on bookings. At busy times the wait can be ten minutes or more, so do not count on it for a class you cannot be late for."
   },
   "8b1e39": {
    "text": "The Itoshima line and the Kyudai line are separate systems with different fare calculations, and their discount tickets are not interchangeable. ⬜ Unverified: whether the Itoshima line is still flat-fare, and whether the Kyudai line’s 18-hour pass works on the Itoshima line @ https://www.showa-bus.jp/category/pass/"
   },
   "060e79": {
    "text": "Discount Tickets"
   },
   "459d9a": {
    "text": "The official current information governs:"
   },
   "76448a": {
    "items": [
     {
      "text": "Subway one-day pass: 640 yen, unlimited travel that day on all subway lines (Kuko, Hakozaki, Nanakuma)"
     },
     {
      "text": "Contactless credit card payment: there is a daily cap even without buying a ticket. You can tap a contactless credit card directly at 36 stations across all three subway lines, and once your daily total reaches 640 yen nothing further is charged that day (320 yen for disability discounts and children). In effect since 1 April 2024."
     }
    ]
   },
   "84fe39": {
    "text": "The daily cap on contactless payment only combines when it is the same card number **and** the same medium. Tap a physical card in the morning and the same card via a phone wallet in the afternoon, and the two are counted separately with no cap applied — to benefit, stick to one method all day. Also, the subway section runs only as far as Meinohama; the first leg from Kyudai is on the JR Chikuhi line and does not count towards this cap."
   },
   "28e638": {
    "items": [
     {
      "text": "Ito Campus coupon tickets: 6,730 yen for a book of 10, valid three months. Usable between any subway station ↔ JR Kyudai-gakkentoshi ↔ Showa Bus within the Kyudai campus. That is 673 yen each. Available at the Kyudai co-op"
     },
     {
      "text": "Ecole Card / Wide Ecole Card: Nishitetsu bus passes. Coverage and price vary by zone — see the Nishitetsu website"
     },
     {
      "text": "Student commuter passes: JR, Nishitetsu, and the subway each offer discounted student passes, which you can apply for once you have your student ID"
     }
    ]
   },
   "50ea66": {
    "text": "Note: students in non-degree statuses such as special auditing students and research students cannot buy the Ecole Card or a student commuter pass."
   },
   "56c5db": {
    "items": [
     {
      "text": "Subway one-day pass",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/oneday.php"
     },
     {
      "text": "Ito Campus coupon tickets (Showa Bus)",
      "url": "https://showa-bus.jp/tickets/pass_itocampus/"
     },
     {
      "text": "Ito Campus coupon tickets (subway)",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/itocampus.php"
     },
     {
      "text": "Ecole Card (Nishitetsu)",
      "url": "https://www.nishitetsu.jp/bus/ecole/"
     }
    ]
   },
   "5824ef": {
    "text": "· Renraku Mini coupon tickets: books of 6, priced at 2,610 / 2,820 / 2,980 / 3,360 yen depending on your boarding station, sold at JR Kyushu stations. They cover a different section from the Ito Campus coupons, so check that the stretch you actually travel is included before buying."
   },
   "9acd34": {
    "text": "· Nishitetsu Bus 6-hour / 24-hour free pass: unlimited travel on Nishitetsu buses within the free zone during the valid period, bought in the my route app. A single trip from Kyudai to Tenjin on the K line costs about 710 yen, so it usually pays off on a day with several city journeys."
   },
   "a010db": {
    "text": "⬜ Unverified: the exact price of the Nishitetsu free pass and the extent of the free zone. The official site prints prices inside images, and the digital-ticket price found by search does not line up with a paper-ticket price circulating elsewhere; a “paper vs digital” two-tier structure has not been ruled out. Confirm inside the my route app before buying. Whether the free zone covers the stretch out to Kyudai matters more than the price."
   },
   "c1a2f8": {
    "text": "To Tenjin and Hakata: two ways to save"
   },
   "70e66b": {
    "text": "The liveliest part of Fukuoka is the Tenjin–Hakata area, but riding there directly from the university costs 570 yen each way. The reason is that Kyudai-gakkentoshi and Susenji sit on the JR Chikuhi line, which connects straight through to the Fukuoka City Subway, so a journey pays fares to both JR and the city subway."
   },
   "842f3d": {
    "text": "Meinohama in option 2 is the terminus of the subway’s Hakozaki and Kuko lines, with frequent services, so changing there costs little time."
   },
   "675d9f": {
    "title": "Option 1: Otoku Ticket coupons · Tenjin/Hakata only (994 yen return)"
   },
   "13e40f": {
    "text": "Suits: a day spent only around Tenjin/Hakata. One ticket each way (two in total), currently 994 yen — about 497 yen each, which is 73 yen per ticket cheaper than riding normally. Sold in books of six, valid for one month and void thereafter, so buy according to your plans."
   },
   "4e6275": {
    "items": [
     {
      "num": "1",
      "text": "Once inside the station, find the ticket machine area beside the “Midori no Madoguchi” office"
     },
     {
      "num": "2",
      "text": "Press the “オトクチケット” (Otoku Ticket) button on the touchscreen"
     },
     {
      "num": "3",
      "text": "Choose your departure station (Susenji or Kyudai-gakkentoshi) and the number of tickets (six per purchase; you will use two this time)"
     },
     {
      "num": "4",
      "text": "Pay by cash or IC card and collect the tickets"
     },
     {
      "num": "5",
      "text": "Use a ticket through the automatic gate to board; at Tenjin/Hakata insert it into the gate to exit"
     }
    ]
   },
   "fb7753": {
    "title": "Option 2: change at Meinohama + subway one-day pass · several places / time to spare (1,180 yen total)"
   },
   "092ecf": {
    "text": "Suits: visiting two or more places in the city on a day when you are not rushed. The idea is to take JR only as far as Meinohama (the subway terminus), get off, and switch to a subway one-day pass for the rest of the day. Meinohama is the terminus of the Hakozaki and Kuko lines and far busier than Kyudai-gakkentoshi, so changing there adds little time."
   },
   "2c1ea4": {
    "text": "Total: 270×2 + 640 = 1,180 yen. Not worth it for a single destination (riding straight through at 570×2 = 1,140 yen is cheaper)."
   },
   "3f3ee3": {
    "items": [
     {
      "num": "1",
      "text": "At Susenji or Kyudai-gakkentoshi, buy a ticket to Meinohama (270 yen one way)"
     },
     {
      "num": "2",
      "text": "Get off at Meinohama, exit the gates, and enter the Meinohama station concourse"
     },
     {
      "num": "3",
      "text": "Buy a Fukuoka City Subway one-day pass (640 yen) from the machines at Meinohama"
     },
     {
      "num": "4",
      "text": "Ride anywhere on the subway network with the one-day pass; you can exit and re-enter as often as you like that day"
     },
     {
      "num": "5",
      "text": "On the way back to Kyudai-gakkentoshi, put the one-day pass into the fare adjustment machine before the gates, pay the difference for Meinohama → Kyudai-gakkentoshi (about 300 yen), and take back the pass plus the adjustment ticket to exit"
     },
     {
      "num": "6",
      "text": "* The one-day pass is still valid that day after you exit, so you can keep it for your next trip into the city"
     }
    ]
   },
   "032240": {
    "headers": [
     "Method",
     "Return cost"
    ],
    "rows": [
     [
      "Riding straight through to Hakata and back",
      "570×2 = ¥1,140"
     ],
     [
      "Return to Meinohama + subway one-day pass",
      "270×2 + 640 = ¥1,180"
     ]
    ]
   },
   "2a2b4d": {
    "text": "In short: for a single destination, buying tickets normally is cheaper (1,140 yen); for two or more places in a day, “change at Meinohama plus a subway one-day pass” works out better."
   },
   "1fac9d": {
    "text": "Tip: if you are unsure how to use the ticket machines or the fare adjustment at the gates, just ask subway or JR station staff (in uniform, wearing name badges) — they will help you buy, adjust, and get through the gates."
   },
   "ec7b4d": {
    "text": "Mopeds and Licences"
   },
   "50dcb4": {
    "text": "For converting a licence or taking the moped test, the links below are the entry points. You do not necessarily have to attend a driving school for a moped — with a booking you can sit the test directly. The Fukuoka Prefectural Police guidance governs the details."
   },
   "b31729": {
    "items": [
     {
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html",
      "text": "Fukuoka Prefectural Police · moped licence"
     },
     {
      "text": "A place to practise (near Susenji)",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "Electric kickboard safety",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "On sharing a ride to convert a licence: one route is to go to Hakata first, take the JR Fukuhoku Yutaka line from Hakata Station to Iizuka, then walk from there."
   },
   "6135a0": {
    "text": "What changed in 2025: the new-standard moped"
   },
   "187f72": {
    "text": "With emissions rules tightening, class-1 mopeds of 50cc and under went out of production on 31 October 2025, replaced by the “new-standard moped”: displacement is allowed up to 125cc, but maximum output is capped at 4.0 kW. The system took effect on 1 April 2025 and the new emissions rules apply from 1 November 2025."
   },
   "55a01a": {
    "text": "The displacement went up, but **the legal treatment has not changed at all** — it is still treated as a class-1 moped: a 30 km/h legal limit, the two-stage right turn at junctions on roads of three lanes or more, and no passengers. Any claim that “it is 125cc now, so it can do 60 and carry a passenger” is simply wrong."
   },
   "2553ff": {
    "text": "The test: written only, but the course comes first"
   },
   "22a10d": {
    "text": "There is no practical test for a moped licence, only a 30-minute written exam, with papers available in Japanese, English, Chinese, and Vietnamese. What actually trips people up is not the exam but the requirement to complete the “moped course” (原付講習) first — without it, you will not receive your licence that day even if you pass the written test."
   },
   "de3307": {
    "headers": [
     "Item",
     "Amount"
    ],
    "rows": [
     [
      "Examination fee",
      "¥1,600"
     ],
     [
      "Licence issuance fee",
      "¥2,350 (¥1,550 if using only a My Number Card)"
     ],
     [
      "Total (minimum)",
      "¥3,950"
     ]
    ]
   },
   "f264aa": {
    "text": "Registration is only accepted for the half hour between 08:30 and 09:00 on weekdays (excluding holidays and 29 Dec–3 Jan), at four test centres in Fukuoka Prefecture. Miss it and you come back another day, so work out your travel time carefully if you are setting off from Ito."
   },
   "e03f4f": {
    "items": [
     {
      "text": "After buying, you must register the plate: moped number plates are issued by the city or ward office where you live, not by a transport bureau. Residents of Nishi Ward, Fukuoka City and of Itoshima City go to different counters"
     },
     {
      "text": "Compulsory insurance (自賠責保険) is mandatory; riding uninsured is illegal"
     }
    ]
   },
   "3ef442": {
    "items": [
     {
      "text": "Fukuoka Prefectural Police · moped licence",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/026_2.html"
     },
     {
      "text": "Fukuoka Prefectural Police · moped course",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "JAMA · the new class-1 moped category",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "Taxis: fares and hailing"
   },
   "4dff94": {
    "text": "Useful when you miss the last train at night, or are hauling large luggage. The current Fukuoka-area fares apply from 1 July 2026."
   },
   "adf1b4": {
    "headers": [
     "Vehicle",
     "Base (up to 1.1 km)",
     "Then ¥100 per"
    ],
    "rows": [
     [
      "Standard",
      "¥600",
      "287 m"
     ],
     [
      "Large",
      "¥720",
      "176 m"
     ],
     [
      "Extra large",
      "¥780",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "Late-night surcharge: fares rise by 20% between 22:00 and 05:00"
     },
     {
      "text": "The pickup fee for calling a taxi to you is set by each company and is not uniform"
     },
     {
      "text": "Taxis usually wait at the exits of JR stations; in out-of-the-way places you will need to call or use an app"
     }
    ]
   },
   "f7c689": {
    "text": "The “670 yen for the first 1,064 m, then 80 yen per 268 m” figures circulating online are the previous fare schedule, void since 1 July 2026. An article quoting them was most likely written before that date, so treat the rest of its content with the same caution."
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
    "text": "The choice of some topics in this guide draws on “New Ito Chronicle” (by Hato_Tsubame and CantonSimon). All figures and procedures here have been taken afresh from the relevant official websites and re-verified; where they differ from that work, the official source governs."
   }
  },
  "ko": {
   "397485": {
    "text": "자전거: 사기·타기·처분하기"
   },
   "402355": {
    "text": "상황에 따라 두 가지 방법이 있습니다: ① 텐진/하카타만 갈 때 → 방법 1(회수권, 왕복 994엔). ② 시내 두 곳 이상을 돌고 시간 여유가 있을 때 → 방법 2(메이노하마 환승＋지하철 1일권)."
   },
   "565847": {
    "text": "사용법: 앱 안내에 따라 승차권을 활성화한 뒤, 내리기 전에 기사에게 화면을 보여주면 그대로 내릴 수 있습니다."
   },
   "1b9a7f": {
    "text": "이토 캠퍼스에서 자전거는 일상적인 교통수단입니다. 학연 JR역에서 학교까지 걸어서 약 45~50분, 자전거로 약 20~30분, 오토바이나 차로는 약 10~15분입니다. 버스도 있지만(약 15~20분) 편수가 많지 않습니다."
   },
   "29a476": {
    "text": "자전거 구입"
   },
   "fc7dbb": {
    "text": "새 자전거는 보통 17,000엔 이상이고, 후쿠오카의 중고 시세는 11,000엔 정도입니다(경험값). 중고는 메루카리를 이용하거나 학생들 사이의 양도 정보를 눈여겨보세요. 구입할 때는 방범등록(600엔)을 해야 하며, 방범등록 카드는 잘 보관하세요(말소할 때 필요합니다)."
   },
   "255bf5": {
    "text": "자전거 처분·양도"
   },
   "1dfdbd": {
    "items": [
     {
      "text": "필요 없어진 자전거는 중고 가게에 팔거나 친구에게 양도할 수 있습니다"
     },
     {
      "text": "방범등록 말소 절차가 필요합니다: 구입 시 받은 「방범등록 카드 고객용」과 신분증을 들고 경찰서로 가세요"
     },
     {
      "text": "리사이클마트 이토시마는 영어 대응이 가능합니다"
     }
    ]
   },
   "ccfc54": {
    "text": "공유자전거 / 렌털"
   },
   "08e40e": {
    "text": "캠퍼스 안에는 공유자전거와 공유 전동 모빌리티 거치대가 있습니다. 위치와 이용 가능한 차량은 캠퍼스 지도나 전용 앱에서 확인할 수 있습니다. 학교에서도 대여 자전거를 제공하니 생협에 문의해 보세요."
   },
   "9ce8b1": {
    "text": "버스 타는 법: 승하차와 시내 요금"
   },
   "96d0f3": {
    "text": "일본의 버스는 대개 뒷문(차체 중앙)으로 타고 앞문(운전기사 옆)으로 내립니다."
   },
   "c35290": {
    "text": "승하차 시에는 기본적으로 IC 카드를 태그합니다(균일 요금 노선 제외). 현금으로 낼 때는 탈 때 문 근처의 발권기에서 「정리권(整理券)」을 뽑습니다 —— 어느 정류장에서 탔는지를 증명하는 표입니다. 내릴 때 정리권과 요금을 함께 요금함에 넣습니다."
   },
   "aed18c": {
    "text": "차내에 환전기가 있지만 1000엔 지폐와 500엔 동전만 바꿀 수 있으니 잔돈을 미리 준비해 두는 것이 좋습니다."
   },
   "5d3027": {
    "text": "후쿠오카 시내 일반 버스"
   },
   "f264f5": {
    "text": "니시테츠 버스는 도심 구간(하카타역·텐진·야쿠인역 앞 등)이 균일 150엔이고, 일반 구간은 기본요금 210엔입니다(2024년 1월 요금 개정 후). 후쿠오카의 버스와 지하철은 모두 IC 카드(SUGOCA, nimoca, 하야카켄 등)를 지원합니다."
   },
   "60da92": {
    "text": "학교 가기: 노선·my route·통학정기"
   },
   "de2248": {
    "text": "규슈대 이토 캠퍼스로 가는 주요 버스 노선은 다음 세 가지입니다:"
   },
   "54f112": {
    "headers": [
     "노선",
     "운영사",
     "주요 구간",
     "편도 요금"
    ],
    "rows": [
     [
      "규슈대학선(본선)",
      "쇼와 버스",
      "규슈대 학연도시역 ↔ 이토 캠퍼스 각 정류장",
      "330엔"
     ],
     [
      "규슈대학선(이토시마)",
      "쇼와 버스",
      "마에바루역 북쪽 출구·스센지 초등학교 앞 ↔ 이토 캠퍼스",
      "200엔"
     ],
     [
      "급행·직행편",
      "니시테츠 버스",
      "하카타역 앞·텐진 ↔ 이토 캠퍼스",
      "670엔~"
     ]
    ]
   },
   "3f31f6": {
    "text": "규슈대 학연도시역에서 캠퍼스 내 어디로 가든(이스트존, 빅오렌지, 공학부, 농학부 등) 모든 정류장이 일률 330엔입니다. 캠퍼스 내 균일 구간은 160엔. 학연도시역→이토 영업소는 390엔, 도마리키타구치·고쿠사이무라마에 방면은 410엔입니다."
   },
   "9a0cda": {
    "text": "구글로 aimo QR 코드를 읽는 데 문제가 있으면 aimo 일본어 페이지를 이용하세요: https://aimo-kyushu-u.zendesk.com/hc/ja"
   },
   "d0f4c1": {
    "text": "추천하는 방법: my route 앱"
   },
   "790a29": {
    "text": "my route 앱을 내려받을 수 있습니다(iOS는 해외 스토어로 전환해야 할 수 있습니다). 앱에서 쇼와 버스의 규슈대학선(이토시마시 노선 제외)을 찾을 수 있고, 550엔 / 18시간 무제한 승차권을 판매합니다. 결제는 신용카드나 PayPay로 가능하며, 일상 통학에 추천할 만한 방법 중 하나입니다."
   },
   "96fc42": {
    "text": "통학정기"
   },
   "f61466": {
    "headers": [
     "노선",
     "구간",
     "1개월",
     "3개월",
     "비고"
    ],
    "rows": [
     [
      "쇼와 버스 규슈대학선",
      "학연도시역 ↔ 이토 캠퍼스",
      "10,000엔",
      "28,000엔",
      "모바일 정기권, 규슈대생 전용"
     ],
     [
      "쇼와 버스 규슈대학선(이토시마)",
      "마에바루·스센지 ↔ 이토 캠퍼스",
      "7,200엔",
      "20,520엔",
      "종이·모바일 모두 가능"
     ],
     [
      "JR 지쿠히선＋지하철",
      "학연도시 → 텐진",
      "약 11,680엔",
      "—",
      "NAVITIME에서 확인"
     ],
     [
      "니시테츠 버스",
      "구간에 따라 다름",
      "—",
      "—",
      "니시테츠 공식 사이트 참조"
     ]
    ]
   },
   "967aaa": {
    "text": "교내에는 예약제 무료 셔틀 aimo도 있습니다. 교내 37개 정류장을 커버하며 휴대폰으로 예약한 뒤 지정 정류장에서 탑니다. 부르면 오는 온디맨드 편 외에, 정해진 시간·노선으로 운행하되 마찬가지로 예약이 필요한 순환편도 있고, 학기 중 평일 08:00–22:00에 운행합니다."
   },
   "6ca9ff": {
    "text": "aimo는 손을 들면 서는 셔틀이 아니라 예약제입니다. 이용이 몰릴 때는 10분 이상, 때로는 더 기다릴 수 있으니 늦으면 안 되는 수업에는 기대지 마세요."
   },
   "8b1e39": {
    "text": "이토시마선과 규슈대선은 별개의 계통으로 요금 계산 방식이 다르고 할인권도 통용되지 않습니다. ⬜ 확인 필요: 이토시마선이 지금도 균일 요금인지, 그리고 규슈대선의 18시간 패스를 이토시마선에서 쓸 수 있는지 @ https://www.showa-bus.jp/category/pass/"
   },
   "060e79": {
    "text": "할인 승차권 정리"
   },
   "459d9a": {
    "text": "아래는 공식 최신 정보가 우선합니다:"
   },
   "76448a": {
    "items": [
     {
      "text": "지하철 1일 승차권: 640엔. 당일 지하철 전 노선(구코선·하코자키선·나나쿠마선) 무제한 승차"
     },
     {
      "text": "신용카드 터치 결제: 표를 사지 않아도 하루 상한이 있습니다. 지하철 3개 노선 36개 역에서 비접촉 기능이 있는 신용카드를 바로 태그할 수 있고, 하루 누계가 640엔에 도달하면 그날은 더 이상 청구되지 않습니다(장애인 할인과 어린이는 320엔). 2024-04-01부터 시행."
     }
    ]
   },
   "84fe39": {
    "text": "터치 결제의 하루 상한은 「같은 카드번호 이면서 같은 매체」일 때만 합산됩니다. 아침에는 실물 카드, 오후에는 휴대폰 지갑으로 같은 카드를 쓰면 각각 따로 계산되어 상한이 적용되지 않습니다 —— 상한을 누리려면 하루 종일 한 가지 방식으로 통일하세요. 또 지하철 구간은 메이노하마까지이고, 규슈대에서 출발하는 앞 구간은 JR 지쿠히선이라 그만큼은 이 상한에 포함되지 않습니다."
   },
   "28e638": {
    "items": [
     {
      "text": "이토 캠퍼스 회수권: 6,730엔(10매, 3개월 유효). 지하철 각 역 ↔ JR 규슈대 학연도시역 ↔ 쇼와 버스 규슈대 캠퍼스 내에서 사용할 수 있습니다. 1매당 673엔. 규슈대 생협에서 구입 가능"
     },
     {
      "text": "에코루 카드 / 와이드 에코루 카드: 니시테츠 버스 정기권. 범위와 가격이 구역에 따라 다르니 니시테츠 공식 사이트를 참조하세요"
     },
     {
      "text": "통학 정기권: JR·니시테츠·지하철에 각각 학생 할인 정기권이 있으며, 학생증을 받은 뒤 신청할 수 있습니다"
     }
    ]
   },
   "50ea66": {
    "text": "주의: 특별청강학생, 연구생 등 정규 과정이 아닌 신분은 에코루 카드와 통학 정기권을 구입할 수 없습니다."
   },
   "56c5db": {
    "items": [
     {
      "text": "지하철 1일 승차권",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/oneday.php"
     },
     {
      "text": "이토 캠퍼스 회수권(쇼와 버스)",
      "url": "https://showa-bus.jp/tickets/pass_itocampus/"
     },
     {
      "text": "이토 캠퍼스 회수권(지하철)",
      "url": "https://subway.city.fukuoka.lg.jp/fare/card/itocampus.php"
     },
     {
      "text": "에코루 카드(니시테츠)",
      "url": "https://www.nishitetsu.jp/bus/ecole/"
     }
    ]
   },
   "5824ef": {
    "text": "· 렌라쿠 미니 회수권: 6매 한 묶음이며 승차역에 따라 2,610 / 2,820 / 2,980 / 3,360엔. JR 규슈 각 역에서 판매합니다. 이토 캠퍼스 회수권과는 커버하는 구간이 다르니, 사기 전에 자신이 자주 다니는 구간이 범위에 들어가는지 확인하세요."
   },
   "9acd34": {
    "text": "· 니시테츠 버스 6시간 / 24시간 프리패스: 유효 시간 내에 프리 구역 안의 니시테츠 버스를 무제한 탈 수 있으며 my route 앱에서 구입합니다. 규슈대에서 K선으로 텐진까지 편도만 약 710엔이므로, 그날 시내에서 여러 번 탈 예정이라면 보통 이득입니다."
   },
   "a010db": {
    "text": "⬜ 확인 필요: 니시테츠 프리패스의 정확한 가격과 프리 구역의 범위. 공식은 가격을 이미지 안에 넣어 두었고, 검색으로 나오는 디지털권 가격과 다른 곳에 도는 종이권 가격의 기준이 일치하지 않습니다. 「종이권과 디지털권 두 가지」일 가능성을 아직 배제하지 못했습니다. 구입 전에 my route 앱에서 확인하세요. 프리 구역이 규슈대까지의 이 구간을 포함하는지가 가격보다 중요합니다."
   },
   "c1a2f8": {
    "text": "텐진·하카타 가기: 절약하는 두 가지 방법"
   },
   "70e66b": {
    "text": "후쿠오카 시내에서 가장 번화한 곳은 텐진—하카타이지만, 학교에서 바로 타고 가면 편도 570엔이나 합니다. 규슈대 학연도시와 스센지 일대가 JR 지쿠히선에 속하고 그대로 후쿠오카 시 지하철과 이어져 있어, 타면 JR과 후쿠오카시 지하철 양쪽에 요금을 내게 되기 때문입니다."
   },
   "842f3d": {
    "text": "방법 2의 메이노하마는 후쿠오카시 지하철 하코자키선·구코선의 시발역이라 편수가 많아 환승에 시간이 그리 들지 않습니다."
   },
   "675d9f": {
    "title": "방법 1: 오토쿠 티켓 회수권 · 텐진/하카타만(왕복 994엔)"
   },
   "13e40f": {
    "text": "적합한 경우: 그날 텐진/하카타 일대에서만 움직일 때. 갈 때와 올 때 1매씩(총 2매)이며 현재 994엔(1매당 약 497엔)으로, 그냥 타는 것보다 1매당 73엔 저렴합니다. 6매 단위로 판매하고 1개월간 유효하며 기한이 지나면 무효이니 일정에 맞춰 구입하세요."
   },
   "4e6275": {
    "items": [
     {
      "num": "1",
      "text": "역에 들어가면 「미도리노마도구치」 옆의 자동 발매기 구역을 찾습니다"
     },
     {
      "num": "2",
      "text": "터치스크린에서 「オトクチケット」 버튼을 누릅니다"
     },
     {
      "num": "3",
      "text": "출발역(스센지 또는 규슈대 학연도시)과 매수를 고릅니다(1회 6매 구입, 이번에는 2매 사용)"
     },
     {
      "num": "4",
      "text": "현금이나 IC 카드로 결제하고 표를 받습니다"
     },
     {
      "num": "5",
      "text": "표로 자동 개찰구를 통과해 승차하고, 텐진/하카타에 도착하면 표를 개찰구에 넣어 나갑니다"
     }
    ]
   },
   "fb7753": {
    "title": "방법 2: 메이노하마 환승＋지하철 1일권 · 여러 곳 / 시간 여유(총 1,180엔)"
   },
   "092ecf": {
    "text": "적합한 경우: 그날 시내 두 곳 이상을 돌고 시간이 촉박하지 않을 때. 핵심은 JR로 메이노하마(후쿠오카시 지하철 시발역)까지만 타고 내려서 지하철 1일권으로 갈아타 하루를 도는 것입니다. 메이노하마는 하코자키선·구코선의 시발역으로 규슈대 학연도시역보다 편수가 훨씬 많아 환승에 시간이 별로 들지 않습니다."
   },
   "2c1ea4": {
    "text": "총비용: 270×2 + 640 = 1,180엔. 한 곳만 간다면 이득이 아닙니다(직접 타면 570×2 = 1,140엔으로 더 저렴)."
   },
   "3f3ee3": {
    "items": [
     {
      "num": "1",
      "text": "스센지 또는 규슈대 학연도시역에서 메이노하마까지 표를 삽니다(편도 270엔)"
     },
     {
      "num": "2",
      "text": "메이노하마역에서 내려 개찰구를 나와 메이노하마 역사로 들어갑니다"
     },
     {
      "num": "3",
      "text": "메이노하마역 발매기에서 후쿠오카시 지하철 1일권(640엔)을 삽니다"
     },
     {
      "num": "4",
      "text": "1일권으로 후쿠오카시 지하철 전 노선을 자유롭게 탑니다. 그날 안에는 나갔다 다시 들어오기를 반복할 수 있습니다"
     },
     {
      "num": "5",
      "text": "돌아올 때는 규슈대 학연도시까지 타고 와서, 개찰구 앞에서 1일권을 정산기에 넣어 메이노하마→규슈대 학연도시 차액(약 300엔)을 더 내고, 1일권과 정산권을 받아 개찰구를 나옵니다"
     },
     {
      "num": "6",
      "text": "※ 1일권은 나온 뒤에도 그날은 유효하므로, 다음에 시내로 나갈 때를 위해 남겨 둘 수 있습니다"
     }
    ]
   },
   "032240": {
    "headers": [
     "방법",
     "왕복 비용"
    ],
    "rows": [
     [
      "하카타까지 직접 타고 왕복",
      "570×2 = 1,140엔"
     ],
     [
      "메이노하마 왕복＋지하철 1일권",
      "270×2 + 640 = 1,180엔"
     ]
    ]
   },
   "2a2b4d": {
    "text": "결론: 한 곳만 간다면 그냥 표를 사는 편이 저렴하고(1,140엔), 하루에 두 곳 이상을 돈다면 「메이노하마 환승＋지하철 1일권」이 더 이득입니다."
   },
   "1fac9d": {
    "text": "팁: 발매기나 개찰구 정산 조작이 익숙하지 않다면 지하철·JR 역무원(제복을 입고 명찰을 단 사람)에게 말을 걸어 구입과 정산, 개찰 통과를 도와달라고 하면 됩니다."
   },
   "ec7b4d": {
    "text": "원동기 / 면허"
   },
   "50dcb4": {
    "text": "면허 전환이나 원동기 면허 취득은 아래 입구를 참고하세요. 원동기는 반드시 운전학원에 다녀야 하는 것은 아니고, 예약하면 바로 시험을 볼 수 있습니다. 자세한 사항은 후쿠오카현 경찰의 안내가 우선합니다."
   },
   "b31729": {
    "items": [
     {
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html",
      "text": "후쿠오카현 경찰 · 원동기 면허"
     },
     {
      "text": "연습 장소(스센지 부근)",
      "url": "https://maps.app.goo.gl/mR8r3vYoqpNxiBVM6?g_st=ic"
     },
     {
      "text": "전동 킥보드 안전",
      "url": "https://www.keishicho.metro.tokyo.lg.jp/kotsu/jikoboshi/electric_mobility/electric_kickboard.html"
     }
    ]
   },
   "1f9df3": {
    "text": "면허 전환 카풀 경험: 먼저 하카타로 간 뒤 하카타역에서 JR 후쿠호쿠유타카선으로 이즈카까지 가고, 거기서 걸어가는 방법이 있습니다."
   },
   "6135a0": {
    "text": "2025년에 바뀐 것: 신기준 원동기"
   },
   "187f72": {
    "text": "배출가스 규제가 강화되면서 50cc 이하의 원동기 1종은 2025-10-31에 생산이 중단되고, 대신 「신기준 원동기」가 등장했습니다: 배기량은 125cc 이하까지 넓어졌지만 최고 출력은 4.0 kW 이하로 제한됩니다. 제도는 2025-04-01부터 시행되고, 새 배출가스 규제는 2025-11-01부터 적용됩니다."
   },
   "55a01a": {
    "text": "배기량은 커졌지만 **법적 취급은 전혀 달라지지 않았습니다**. 여전히 원동기 1종으로 취급됩니다: 법정 최고속도 30 km/h, 3차로 이상 도로의 교차로에서는 이단계 우회전, 동승 금지. 「125cc가 되었으니 60으로 달릴 수 있고 사람을 태울 수 있다」는 말은 모두 틀립니다."
   },
   "2553ff": {
    "text": "시험: 필기만, 다만 강습이 전제"
   },
   "22a10d": {
    "text": "원동기 면허에는 실기 시험이 없고 30분짜리 학과 시험만 있으며, 문제는 일본어·영어·중국어·베트남어 네 가지로 제공됩니다. 실제로 발목을 잡는 것은 시험이 아니라 먼저 「원동기 강습」을 이수해야 한다는 점입니다 —— 이수하지 않으면 필기에 합격해도 그날 면허를 받을 수 없습니다."
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
      "면허 교부료",
      "2,350엔(마이넘버카드만 사용할 경우 1,550엔)"
     ],
     [
      "합계(최소)",
      "3,950엔"
     ]
    ]
   },
   "f264aa": {
    "text": "접수는 평일 아침 08:30–09:00의 30분뿐입니다(휴일과 12/29–01/03 제외). 후쿠오카현 내 시험장은 4곳입니다. 놓치면 날을 다시 잡아야 하니, 이토에서 출발한다면 이동 시간을 잘 계산하세요."
   },
   "e03f4f": {
    "items": [
     {
      "text": "구입 후에는 번호판 등록이 필요합니다: 원동기 번호판은 거주지의 시청·구청에서 교부하며 육운국이 아닙니다. 후쿠오카시 니시구에 사는 사람과 이토시마시에 사는 사람은 가는 창구가 다릅니다"
     },
     {
      "text": "자배책보험(강제보험) 가입이 필수이며, 무보험 주행은 위법입니다"
     }
    ]
   },
   "3ef442": {
    "items": [
     {
      "text": "후쿠오카현 경찰 · 원동기 면허",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/026_2.html"
     },
     {
      "text": "후쿠오카현 경찰 · 원동기 강습",
      "url": "https://www.police.pref.fukuoka.jp/kotsu/unshi/gentukihenkou_2.html"
     },
     {
      "text": "일본자동차공업회 · 원동기 1종 새 구분",
      "url": "https://www.jama.or.jp/operation/motorcycle/cat1_scooter/"
     }
    ]
   },
   "9e60e9": {
    "text": "택시: 요금과 부르는 법"
   },
   "4dff94": {
    "text": "밤에 막차를 놓쳤거나 큰 짐을 옮길 때 쓰게 됩니다. 후쿠오카 지역의 현행 요금은 2026-07-01부터 적용됩니다."
   },
   "adf1b4": {
    "headers": [
     "차종",
     "기본(1.1 km까지)",
     "이후 100엔당"
    ],
    "rows": [
     [
      "보통차",
      "600엔",
      "287 m"
     ],
     [
      "대형차",
      "720엔",
      "176 m"
     ],
     [
      "특대형차",
      "780엔",
      "148 m"
     ]
    ]
   },
   "094238": {
    "items": [
     {
      "text": "심야 할증: 22:00부터 다음 날 05:00까지 요금이 20% 올라갑니다"
     },
     {
      "text": "배차 요금(불러서 오게 하는 경우)은 회사마다 따로 정해 금액이 일정하지 않습니다"
     },
     {
      "text": "JR 각 역 출구에는 보통 택시가 대기하고 있고, 외진 곳에서는 전화나 앱으로 불러야 합니다"
     }
    ]
   },
   "f7c689": {
    "text": "인터넷에 도는 「기본 1,064 m 670엔, 이후 268 m당 80엔」은 이전 버전 요금으로 2026-07-01에 폐지되었습니다. 이 숫자가 실린 글은 나머지 내용도 그 이전에 쓰였을 가능성이 높으니 함께 유의하세요."
   },
   "9b2747": {
    "items": [
     {
      "text": "후쿠오카시 택시협회 · 요금표",
      "url": "https://www.taxi-fukcty.or.jp/charge/"
     }
    ]
   },
   "e612d1": {
    "text": "이 글의 일부 주제 선정은 《신 이토 풍토기》(저자 Hato_Tsubame, CantonSimon)의 정리를 참고했습니다. 본문의 모든 수치와 절차는 각 공식 사이트에서 다시 확인한 것으로, 해당 글과 차이가 있을 경우 공식을 우선하세요."
   }
  }
 }
};
})();
