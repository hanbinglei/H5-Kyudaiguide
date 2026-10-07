'use strict';
// 官方证据核对到2026-10-07。五语共用区块结构/URL/机器位置，不替用户登录或申请。
const CHECKED_AT = '2026-10-07';
const SOURCES = [
  'https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/',
  'https://www.kyushu-u.ac.jp/en/education/procedure/certificate/',
  'https://ku-cert.kyushu-u.ac.jp/cert/z/z_login.html',
  'https://www.kyushu-u.ac.jp/f/65764/2026%20Student%20Handbook_en.pdf',
  'https://chc.kyushu-u.ac.jp/chcwpsite/wp-content/uploads/2026/04/syoumeisyo_r804.pdf',
  'https://www.eng.kyushu-u.ac.jp/en/student-supports/certificate/'
];
const COPY = {
  zh: {
    title:'证明书：谁能开、怎么申请与打印', intro:'核对日期：2026-10-07。先确认本人学籍、证明书名称和提交要求，再选择领取方式。证明书发行不是把普通 PDF 放进打印机复印；小程序和本站不能代办。',
    who:'先看身份：哪些方式可用', whoHeaders:['身份','领取方式与限制'], whoRows:[
      ['正规学部生、硕士、博士','当前课程的证明，按系统显示的种类和资格申请；可选校内发券机、便利店或窗口/邮寄。'],
      ['非正课生：研究生、交换生等','不能用便利店或校内发券机。通过窗口/邮寄办理；具体可开的证明名称向所属学生係确认。'],
      ['毕业、退学、除籍者','走离籍生入口，首次需注册审核。不能用校内发券机；便利店资格取决于原课程/入学年份等。海外居民只可邮寄。'],
      ['现在在读，但要前一课程的证明','例如硕士生要九大本科成绩/毕业证明：通常按离籍生处理，不因现有学生身份自动免费。']
    ],
    kinds:'常见证明：不要混用名称', documents:[
      '在学証明書：证明当前在学，用于签证、奖学金等。非正课生先问所属窗口适用的在籍/在学证明。',
      '成績証明書：证明已登记成绩；学生门户里刚出现的成绩不一定马上反映。研究生/交换生不能照搬正规课程的成绩证明条件。',
      '卒業・修了見込証明書：满足所属课程的预计毕业/修了条件后才能申请，不是所有新生都能开。卒業・修了証明書用于已经完成的课程。',
      'JR 学割証：仅校内发券机发行，便利店不提供。它与购买通学定期券所需的通学证明不是一回事；定期券材料按交通公司要求另核对。',
      '健康診断証明書：需要完成学校当期定期体检，见下方例外。官方便利店清单仅列日文；需要英文或指定体检项目，先问健康支援中心。',
      '博士学位授与証明書：提交方要求学位记编号时，不能只用修了证明代替。国费/其他奖学金证明、推荐信、特殊在籍证明等不在通用打印清单中时，先找对应学生係或留学课。'
    ],
    apply:'办理顺序：先申请，再领取', steps:[
      ['核对提交要求','确认日文/英文、份数、所属课程、截止日，以及是否要厳封或指定格式。先问接收方接受什么，不要先付费猜测。'],
      ['从大学官网进入申请','在籍生用在籍生入口；离籍生用离籍生入口。按官方登录说明操作，首次登记邮箱后完成验证。非正课生有大学账号也不代表可用发券机。'],
      ['选证明和领取方式','校内打印选学内发券机/学内印刷，申请后凭系统给出的确认号码去机器操作。便利店选支持的日本国内多功能复印机门店，并按申请画面的编号、付款和期限操作。'],
      ['窗口、邮寄或特殊格式','窗口领取选「郵送・窓口」后选「大学窓口での受取り」。邮寄按学生係指引寄贴足邮资的回邮信封；菜单没有所需证明时，先询问能否发行，再按指引填「その他の証明書」与备注。']
    ],
    fees:'费用与期限', feeHeaders:['情况','费用/注意'], feeRows:[
      ['在籍生：校内发券机/窗口','发行费免费；非正课生不适用发券机。'],
      ['在籍生：便利店','400円/通，另加60円/页打印费。仅限符合资格、系统可选的证明。'],
      ['在籍生：邮寄','发行费免费；准备贴足邮资的回邮信封。'],
      ['离籍生','通常800円/通，另加打印费或邮资；服务方式受资格限制。']
    ], feeNote:'便利店打印期限为申请后7天（至第8天0点），以系统显示为准。已付发行费/邮资不退。当前在籍生为求职到窗口申请并领取本人以前课程的毕业/修了/成绩证明，可有免发行费例外，先向窗口确认；付费后再说明用途不能退费。窗口/邮寄发行一般日文约3天、英文约1周，邮寄运输另计，不保证当天出件。',
    health:'健康证明：受过体检，也可能要走窗口', healthItems:[
      '必须完成当期体检及 Web 问诊等全部要求；未体检或有未完成项目，不能发行。',
      '2026年度通知明确：需胸部 X 线复查者、マス・フォア・イノベーション連係学府学生、非正课生，不能在发券机/便利店发行，须尽早联系就近健康支援中心健康相談室。',
      '2026年度健康诊断证明可发行至2027-03-31；这是本年度发行窗口，不代表所有接收方都接受同一有效期。对照本人检查日期及系统可发行状态，不把往年结果当本期结果。'
    ],
    machines:'校内发券机：按校区找', machineHeaders:['校区','位置/开放时间'], campusNames:['伊都','病院','大桥','筑紫'],
    machineLocations:['センター1号館 2F 学务部大厅','イースト1号館C棟 1F 人社系学务窗口前','ウエスト1号館A棟 3F 理学部教务办公室内','ウエスト4号館 2F 工学部教务区域学生大厅','ウエスト5号館东栋 3F 农学部学生係办公室内','基礎研究A棟 1F','芸術工学部管理棟 1F 学务区域','管理棟 1F'],
    machineNote:'位置与时间依据2026学生手册第8页：土日祝不开放，临时停机以现场为准。大桥手册另注2026年5月前后有Co-Lab临时位置搬迁，请出发前确认现场通知；筑紫采用本版的管理棟1F，不沿用旧资料中的Vista Hall位置。',
    exceptions:'格式、菜单缺项或故障怎么办', exceptionsItems:[
      '证明上有防伪处理，不要用复印件或普通打印件替代正式原件。日本外务省不受理本服务的便利店证明；需要提交外务省时，改选校内机/邮寄/窗口。',
      '需要厳封：原则不默认密封。收到校内机或便利店原件后，可向所属学生係提出密封需求。需要指定表格/资格考试证明，申请前先确认，申请备注说明并把模板发给窗口。',
      '登录、邮件、支付等系统问题：服务电话06-6809-4327（24小时）。证明内容、作成、发送、初次注册审核：找所属学生係，官方总表列出各学部/学府联系方式；学务咨询092-802-5939（平日8:30–17:15）。不要把证件、账号密码提交给本指南。'
    ],
    sourceLabels:['九大证明书官方总表与学生係','九大证明书官方说明（英文）','在籍生官方申请入口','2026学生手册：发券机位置（第8页）','2026年度健康诊断证明发行说明','工学部：非正课生与交换生成绩说明'],
    accountSuffix:'各类证明统一从大学官网证明书入口选择本人学籍与领取方式，不是只有大学院生才使用ku-cert。详细条件见本篇「证明书」小节。',
    accountLink:'在籍生证明申请（ku-cert）', healthSummary:'健康证明不是学籍证明。需要完成当期体检；非正课生、需复查者及部分学府不能自动发行。资格与当前年度窗口见本篇「证明书」小节。'
  },
  ja: {
    title:'証明書：対象者・申請・印刷', intro:'確認日：2026-10-07。学籍、必要な証明書と提出条件を確認してから受取方法を選びます。一般のPDF印刷やコピーとは異なります。このガイドでは代理申請できません。',
    who:'最初に学籍と利用できる方法を確認',whoHeaders:['学籍','受取方法と制限'],whoRows:[
      ['正規の学部・修士・博士学生','現課程の証明書はシステムの種類・発行条件に従って申請。学内発行機、コンビニ、窓口・郵送を選択。'],
      ['非正課生：研究生・交換留学生等','コンビニ・学内発行機は不可。窓口・郵送を利用。発行できる在籍・在学等の証明書名は所属学生係へ確認。'],
      ['卒業・退学・除籍した方','離籍生入口で初回登録・承認が必要。学内発行機は不可。コンビニは課程・入学年度等で対象が限定。海外居住者は郵送のみ。'],
      ['在籍中だが過去の課程の証明書が必要な方','修士学生が九大の学部の成績・卒業証明を申請する例では原則離籍生扱い。現在の学生証だけで無料にはなりません。']
    ],kinds:'証明書の名前を区別する',documents:[
      '在学証明書：現在の在学を示し、在留・奨学金等に使用。非正課生は所属窓口で適切な在籍・在学証明を確認します。',
      '成績証明書：登録済み成績を示します。ポータルに表示された直後に反映されるとは限りません。研究生・交換生に正規課程と同じ条件を当てはめないでください。',
      '卒業・修了見込証明書：所属課程の見込条件を満たしてから発行。新入生全員が取得できるものではありません。卒業・修了証明書は修了した課程用です。',
      'JR学割証：学内発行機のみで発行し、コンビニは不可。通学定期券用の通学証明とは別です。定期券の必要書類は交通機関の案内を確認してください。',
      '健康診断証明書：当期の大学定期健診を完了する必要があります。例外は下記。コンビニの公式一覧は和文のみ。英文や指定検査項目は健セに相談してください。',
      '博士学位授与証明書：学位記番号が必要なら修了証明書だけで代用しません。国費等の奨学金証明、推薦状、特殊な在籍証明など一覧にないものは担当学生係・留学課に確認します。'
    ],apply:'オンライン申請から受取りまで',steps:[
      ['提出条件を確認','和文・英文、部数、課程、締切、厳封・指定様式を確認。支払い前に提出先へ確認します。'],
      ['大学公式ページから申請','在籍生・離籍生の適切な入口を選び、公式ログイン説明に従います。初回メール登録後は認証を完了。大学アカウントがあっても非正課生は発行機を使えません。'],
      ['証明書と受取方法を選択','学内発行機・学内印刷を選び、オンライン申請時の確認番号で発行機を操作。コンビニは国内対応店舗のマルチコピー機で、画面の番号・支払い・期限に従います。'],
      ['窓口・郵送・特殊様式','窓口は「郵送・窓口」から「大学窓口での受取り」。郵送は切手付き返信用封筒を担当係へ。必要書類がメニューにない場合、発行可否を確認してから「その他の証明書」と備考欄を使います。']
    ],fees:'費用と期限',feeHeaders:['方法・学籍','料金・注意'],feeRows:[
      ['在籍生：学内発行機・窓口','発行料無料。非正課生は発行機を利用できません。'],['在籍生：コンビニ','400円/通＋印刷代60円/枚。対象者・発行可能な種類のみ。'],['在籍生：郵送','発行料無料。切手付き返信用封筒が必要。'],['離籍生','原則800円/通＋印刷代・郵送料。利用方法には条件あり。']
    ],feeNote:'コンビニ印刷期限は申請後7日間（8日目0時まで）。画面で確認してください。支払済み発行料・郵送料は返金されません。在籍生が就職活動用に過去課程の卒業・修了・成績証明を窓口申請・交付で受ける場合は免除例外があるため先に確認。支払い後の申出では返金不可。窓口・郵送は和文約3日、英文約1週間が目安で、郵送日数は別です。即日を保証しません。',
    health:'健康証明：健診済みでも窓口が必要な場合',healthItems:[
      '当期健診とWeb問診等の全項目の完了が必要。未受診・未完了項目がある場合は発行できません。',
      '2026年度は胸部X線再検査が必要な学生、マス・フォア・イノベーション連係学府学生、非正課生は発行機・コンビニ不可。最寄りの健セ健康相談室へ早めに相談してください。',
      '2026年度分の発行は2027-03-31まで。これは発行期間であり、提出先の有効期限を保証しません。受診日と発行可能状態を確認し、過年度結果を当期結果として使わないでください。'
    ],machines:'学内発行機の場所',machineHeaders:['キャンパス','場所・利用時間'],campusNames:['伊都','病院','大橋','筑紫'],
    machineLocations:['センター1号館2F 学務部ロビー','イースト1号館C棟1F 人社系学務窓口前','ウエスト1号館A棟3F 理学部教務事務室内','ウエスト4号館2F 工学部教務区域の学生ホール','ウエスト5号館東棟3F 農学部学生係事務室内','基礎研究A棟1F','芸術工学部管理棟1F 学務区域','管理棟1F'],
    machineNote:'2026学生ハンドブック8ページの所在地・時間です。土日祝は利用不可、臨時停止は現地案内優先。大橋は2026年5月頃までCo-Labの仮設場所との注記があるため移転状況を確認。筑紫は本版の管理棟1Fを採用し、旧Vista Hall表記は使用しません。',
    exceptions:'様式・メニュー不足・不具合の相談',exceptionsItems:[
      '偽造防止処理があり、コピーや一般印刷を正式原本の代わりにしません。外務省提出用はコンビニ発行不可。学内発行機・郵送・窓口を選びます。',
      '厳封は原則しません。必要な場合、発行機・コンビニ原本を所属学生係で厳封してもらえます。指定様式・資格試験証明は申請前に相談し、備考と様式送付で対応。',
      'ログイン・メール・支払い等は06-6809-4327（24時間）。内容・作成・発送・初回登録承認は所属学生係へ。公式一覧の学部・学府窓口、学務相談092-802-5939（平日8:30–17:15）を利用。本ガイドへ身分証やパスワードを送らないでください。'
    ],sourceLabels:['九大証明書総合案内・学生係','証明書公式案内（英語）','在籍生公式申請入口','2026学生ハンドブック：発行機（8ページ）','2026年度健康診断証明書の案内','工学部：非正課生・交換生成績の案内'],
    accountSuffix:'学籍と受取方法は大学公式の証明書入口から選びます。ku-certは大学院生だけのサービスではありません。本記事の証明書の節をご確認ください。',accountLink:'在籍生の証明書申請（ku-cert）',healthSummary:'健康証明は学籍証明とは別です。当期健診の完了が必要で、非正課生・再検査対象者・一部学府は自動発行不可。証明書の節で対象者と当年度の期間を確認してください。'
  },
  en: {
    title:'Certificates: eligibility, application and printing',intro:'Checked: 2026-10-07. Confirm your student status, certificate name and recipient requirements before choosing collection. Official issuance is not ordinary PDF printing or photocopying. This guide cannot apply on your behalf.',
    who:'Start with your status',whoHeaders:['Status','Collection and restrictions'],whoRows:[
      ['Degree students: undergraduate, master’s, doctoral','For the current programme, apply for the certificate types you are eligible for in the system. Choose a campus machine, convenience store, office or post.'],
      ['Non-degree students: research, exchange, etc.','No campus machines or convenience-store issuance. Use the office/post; ask your student affairs section which enrolment or attendance documents can be issued.'],
      ['Graduated, withdrawn or removed from the register','Use the former-student portal; first registration requires approval. No campus machines. Convenience-store eligibility depends on programme/intake etc. Overseas residents: post only.'],
      ['Current student requesting a previous programme’s records','A master’s student requesting Kyushu undergraduate transcripts/graduation records is normally treated as a former student for those records; a current student card does not make them free.']
    ],kinds:'Choose the correct document',documents:[
      'Certificate of Enrolment (在学証明書): current student status, often used for visas or scholarships. Non-degree students should ask which enrolment/attendance certificate applies.',
      'Academic Transcript (成績証明書): recorded grades. Newly visible portal grades may not appear immediately. Do not assume the same transcript rules for research or exchange students.',
      'Expected Graduation/Completion: only after meeting your programme’s eligibility conditions; not available to every new student. Graduation/Completion certificates concern completed programmes.',
      'JR student discount certificate (学割証): campus machines only, not convenience stores. It is different from documents for a commuting season ticket; check the transport operator’s requirements separately.',
      'Medical examination certificate: requires completion of the current university checkup; see exceptions below. The official convenience-store list specifies Japanese only. Ask CHC about English or specified examination items.',
      'Doctoral Degree Conferral certificate: if a degree certificate number is required, do not substitute a completion certificate alone. Ask the relevant student affairs section/ISED about scholarship confirmation, references or special attendance documents absent from the standard list.'
    ],apply:'Apply first, then collect',steps:[
      ['Check recipient requirements','Confirm Japanese/English, copies, programme, deadline, sealing and any required template. Ask before paying for the wrong format.'],
      ['Enter through the university website','Choose the current- or former-student portal and follow its login instructions. Complete email verification at first registration. Having a university account does not give non-degree students access to issuing machines.'],
      ['Select document and collection','For campus printing select the campus-machine option and enter the confirmation number from your online application. At supported multi-copy machines in Japan, follow the application screen’s codes, payment and deadline instructions.'],
      ['Office, post or special forms','For office pickup choose 郵送・窓口 then 大学窓口での受取り. For post, send the stamped return envelope as instructed. If a document is not listed, ask whether it can be issued before selecting その他の証明書 and explaining in remarks.']
    ],fees:'Fees and deadlines',feeHeaders:['Route/status','Cost/conditions'],feeRows:[
      ['Current: campus machine/office','No issuance fee. Non-degree students cannot use campus machines.'],['Current: convenience store','400 yen/certificate plus 60 yen/page printing. Only eligible users and available documents.'],['Current: post','No issuance fee; provide a stamped return envelope.'],['Former students','Normally 800 yen/certificate plus printing or postage, subject to eligibility.']
    ],feeNote:'Convenience-store printing expires 7 days after application, at 0:00 on day 8; check the screen. Paid fees/postage are not refunded. Current students requesting previous-programme graduation/completion/transcripts for job hunting may qualify for a fee exception when applying and collecting at the office; confirm before paying. A later explanation does not secure a refund. Office/post issuance is roughly 3 days for Japanese or 1 week for English, plus delivery time—not guaranteed same-day service.',
    health:'Medical certificates: when an office is needed',healthItems:[
      'Complete the current checkup and all required items, including web screening. No certificate without the checkup or with incomplete items.',
      'For 2026, students needing a repeat chest X-ray, students in the Joint Graduate School of Mathematics for Innovation (マス・フォア・イノベーション連係学府), and non-degree students cannot use machines/stores for this certificate. Contact the nearest CHC health consultation room early.',
      '2026 checkup certificates can be issued until 2027-03-31. This is the issuance window, not a guarantee of the recipient’s validity period. Check your examination date and system availability; do not treat previous-year results as current.'
    ],machines:'Where campus issuing machines are',machineHeaders:['Campus','Location/hours'],campusNames:['Ito','Hospital','Ohashi','Chikushi'],
    machineLocations:['Center Zone 1, 2F, Student Affairs lobby','East Zone 1-C, 1F, outside humanities/social sciences student affairs','West Zone 1-A, 3F, Science academic affairs office','West Zone 4, 2F, Engineering academic affairs student hall','West Zone 5 East, 3F, Agriculture student affairs office','Basic Research Building A, 1F','School of Design Administration Building, 1F, student affairs','Administration Building, 1F'],
    machineNote:'Locations/hours: 2026 Student Handbook, page 8. Closed weekends/public holidays; local notices take priority for outages. Ohashi also notes temporary Co-Lab placement until around May 2026: check relocation notices before visiting. For Chikushi use this edition’s Administration Building 1F, not the older Vista Hall listing.',
    exceptions:'Special formats, missing options and help',exceptionsItems:[
      'Certificates have anti-forgery protection; photocopies or ordinary printouts do not replace issued originals. Japan’s Ministry of Foreign Affairs does not accept this convenience-store service’s certificates: choose campus machine, post or office.',
      'Sealing is not automatic. Your student affairs section can seal an original issued at a campus machine or convenience store when required. For specified templates/qualification exams, ask first, explain in remarks and send the template.',
      'Login, email and payment problems: 06-6809-4327 (24 hours). Content, preparation, dispatch and first-registration approval: your student affairs section listed on the official page. General academic affairs: 092-802-5939 (weekdays 8:30–17:15). Do not send identity documents or passwords to this guide.'
    ],sourceLabels:['Official certificate guide and student affairs contacts','Official certificate guide in English','Current-student application portal','2026 Student Handbook: machines on page 8','2026 medical certificate issuance notice','Engineering: non-degree and exchange transcript guidance'],
    accountSuffix:'Choose your status and collection through the university’s official certificate page. ku-cert is not only for graduate students. See the Certificates section of this article for eligibility.',accountLink:'Current-student certificates (ku-cert)',healthSummary:'A medical certificate is different from a student-status certificate. Complete the current checkup; non-degree students, repeat-examination cases and some programmes cannot use automatic issuance. See the Certificates section for this year’s rules.'
  },
  ko: {
    title:'증명서: 신청 자격·발급·출력',intro:'확인일: 2026-10-07. 학적, 필요한 증명서명과 제출 조건을 확인한 뒤 수령 방법을 선택하세요. 공식 증명서 발급은 일반 PDF 출력이나 복사와 다릅니다. 이 가이드는 대리 신청을 하지 않습니다.',
    who:'먼저 학적과 이용 가능한 방법 확인',whoHeaders:['학적','수령 방법·제한'],whoRows:[
      ['정규 학부·석사·박사 학생','현재 과정의 증명서는 시스템의 종류·발급 자격에 따라 신청. 교내 기기, 편의점, 창구·우편 중 선택합니다.'],['비정규 과정: 연구생·교환학생 등','교내 기기·편의점 발급 불가. 창구·우편을 이용하고, 발급 가능한 재학·재적 증명서명은 소속 학생 담당 창구에 확인합니다.'],['졸업·퇴학·제적자','이적생(離籍生) 포털의 최초 등록·승인 필요. 교내 기기 불가. 편의점은 과정·입학 연도 등에 따라 제한. 해외 거주자는 우편만 가능합니다.'],['재학 중 이전 과정의 증명서가 필요한 경우','석사생이 규슈대 학부 성적·졸업 증명서를 신청하면 보통 이전 학적 기준으로 처리. 현재 학생증이 있어도 자동으로 무료가 되지 않습니다.']
    ],kinds:'증명서 이름을 구분하세요',documents:[
      '재학증명서(在学証明書): 현재 재학 상태를 증명하며 비자·장학금 등에 사용. 비정규생은 적합한 재학·재적 증명서를 소속 창구에 확인하세요.',
      '성적증명서(成績証明書): 등록된 성적을 증명. 포털에 막 표시된 성적이 즉시 반영되지는 않습니다. 연구생·교환학생에게 정규 과정의 조건을 그대로 적용하지 마세요.',
      '졸업·수료예정증명서: 소속 과정의 예정 자격을 충족한 뒤 발급. 모든 신입생에게 발급되는 것은 아닙니다. 졸업·수료증명서는 이미 마친 과정에 사용합니다.',
      'JR 학생할인증(学割証): 교내 기기에서만 발급, 편의점 불가. 통학 정기권에 필요한 통학 증명과 다르므로 교통회사의 서류 조건을 따로 확인하세요.',
      '건강진단증명서: 해당 대학 정기검진을 완료해야 합니다. 아래 예외를 확인하세요. 공식 편의점 목록은 일본어만 명시하므로 영문·지정 검사항목은 건강지원센터에 문의하세요.',
      '박사학위수여증명서: 학위기 번호가 필요하면 수료증명서만으로 대체하지 마세요. 국비 등 장학금 증명, 추천서, 특수 재적 증명이 일반 목록에 없으면 해당 학생 창구·유학과에 확인하세요.'
    ],apply:'먼저 신청하고 수령하세요',steps:[
      ['제출 조건 확인','일본어·영어, 부수, 과정, 기한, 밀봉·지정 양식을 확인. 잘못 선택해 결제하기 전에 제출처에 문의하세요.'],['대학 공식 페이지에서 신청','현재 재학생 또는 이적생(離籍生) 포털을 선택하고 공식 로그인 안내를 따릅니다. 최초 이메일 등록 뒤 인증을 완료하세요. 대학 계정이 있어도 비정규생은 발급기를 이용할 수 없습니다.'],['증명서·수령 방법 선택','교내 발급기·교내 출력 항목을 선택하고 온라인 신청의 확인 번호로 기기를 조작. 일본 국내 지원 편의점의 복합기에서 신청 화면의 번호·결제·기한을 따릅니다.'],['창구·우편·특수 양식','창구 수령은「郵送・窓口」에서「大学窓口での受取り」선택. 우편은 담당 창구 안내에 따라 우표를 붙인 회신 봉투 발송. 목록에 없는 증명은 발급 가능 여부를 먼저 문의한 뒤「その他の証明書」와 비고란을 이용하세요.']
    ],fees:'비용·기한',feeHeaders:['방법·학적','비용·주의'],feeRows:[['재학생: 교내 기기·창구','발급 수수료 무료. 비정규생은 교내 기기 이용 불가.'],['재학생: 편의점','400円/통＋출력비60円/페이지. 자격 있는 이용자·발급 가능한 증명서만 해당.'],['재학생: 우편','발급 수수료 무료. 우표를 붙인 회신 봉투 필요.'],['이적생(離籍生)','보통800円/통＋출력비·우편료. 이용 방식에 자격 제한이 있습니다.']],
    feeNote:'편의점 출력 기한은 신청 후7일(8일째0시까지), 실제 화면에서 확인하세요. 결제한 수수료·우편료는 환불되지 않습니다. 재학생이 구직용 이전 과정 졸업·수료·성적 증명을 창구에서 신청·수령하면 면제 예외가 있을 수 있으니 결제 전 확인. 나중에 구직용이라고 설명해도 환불 불가. 창구·우편 발급은 일본어 약3일, 영어 약1주가 기준이며 배송 시간은 별도, 당일 발급을 보장하지 않습니다.',
    health:'건강 증명: 검진 후에도 창구가 필요한 경우',healthItems:['해당 검진과 Web 문진 등 모든 필수 항목을 완료해야 합니다. 미검진·미완료 항목이 있으면 발급되지 않습니다.','2026년도는 흉부X선 재검사 대상, マス・フォア・イノベーション連係学府 학생, 비정규생은 기기·편의점 발급 불가. 가까운 건강지원센터 건강상담실에 일찍 문의하세요.','2026년도 건강증명 발급은2027-03-31까지. 이는 발급 기간이며 제출처의 인정 유효기간을 보장하지 않습니다. 검진일·발급 가능 상태를 확인하고 지난 연도 결과를 현재 결과로 사용하지 마세요.'],
    machines:'교내 발급기 위치',machineHeaders:['캠퍼스','위치·이용 시간'],campusNames:['이토','병원','오하시','치쿠시'],machineLocations:['센터1호관2F 학생업무 로비','이스트1호관C동1F 인문사회 학생 창구 앞','웨스트1호관A동3F 이학부 교무 사무실','웨스트4호관2F 공학부 교무 학생홀','웨스트5호관 동관3F 농학부 학생 창구 사무실','기초연구A동1F','예술공학부 관리동1F 학생업무 구역','관리동1F'],
    machineNote:'2026학생 핸드북8페이지의 위치·시간입니다. 토·일·공휴일은 닫으며 임시 중단은 현장 안내 우선. 오하시는2026년5월경까지Co-Lab 임시 위치라는 주석이 있으므로 이전 공지를 확인하세요. 치쿠시는 본판의 관리동1F를 사용하고 옛Vista Hall 표기를 따르지 않습니다.',
    exceptions:'양식·누락 메뉴·장애 문의',exceptionsItems:['위조 방지 처리가 있으므로 복사본·일반 출력물을 정식 원본 대신 쓰지 마세요. 일본 외무성은 이 편의점 서비스 증명을 받지 않습니다. 외무성 제출용은 교내 기기·우편·창구를 선택하세요.','기본적으로 밀봉하지 않습니다. 필요하면 기기·편의점 원본을 소속 학생 창구에서 밀봉 처리합니다. 지정 양식·자격시험 증명은 신청 전 문의하고 비고와 양식 발송으로 처리하세요.','로그인·이메일·결제:06-6809-4327(24시간). 내용·작성·발송·최초 등록 승인: 소속 학생 창구. 공식 학부·학부 대학원 창구표 또는 학무 문의092-802-5939(평일8:30–17:15)를 이용하세요. 이 가이드에 신분증·비밀번호를 보내지 마세요.'],
    sourceLabels:['규슈대 증명서 공식 안내·학생 창구','영문 증명서 공식 안내','재학생 공식 신청 포털','2026학생 핸드북: 발급기8페이지','2026건강증명 발급 안내','공학부 비정규·교환학생 성적 안내'],accountSuffix:'증명서는 대학 공식 페이지에서 학적·수령 방법을 선택합니다. ku-cert는 대학원생 전용이 아닙니다. 이 글의 증명서 항목에서 조건을 확인하세요.',accountLink:'재학생 증명서 신청(ku-cert)',healthSummary:'건강 증명은 재학 증명과 다릅니다. 당기 검진 완료가 필요하며 비정규생·재검사 대상·일부 과정은 자동 발급 불가. 증명서 항목에서 대상과 해당 연도 기간을 확인하세요.'
  },
  es: {
    title:'Certificados: quién puede obtenerlos y cómo imprimirlos',intro:'Verificado: 2026-10-07. Confirma tu situación académica, el certificado y los requisitos del destinatario antes de elegir la entrega. La emisión oficial no es imprimir un PDF cualquiera ni hacer una fotocopia. Esta guía no tramita solicitudes por ti.',
    who:'Primero, confirma tu situación',whoHeaders:['Situación','Entrega y restricciones'],whoRows:[['Grado, máster y doctorado regulares','Solicita los documentos del programa actual según los tipos y condiciones disponibles en el sistema. Elige máquina del campus, tienda, ventanilla o correo.'],['Estudiantes sin titulación: investigación, intercambio, etc.','No pueden usar máquinas del campus ni tiendas. Utiliza ventanilla/correo y confirma con tu sección de estudiantes qué documento de matrícula o estancia se puede emitir.'],['Graduados, bajas o excluidos del registro','Portal de antiguos estudiantes; el registro inicial requiere aprobación. No pueden usar máquinas del campus. La elegibilidad en tiendas depende del programa/año de ingreso, etc. Residentes fuera de Japón: solo correo.'],['Estudiante actual que necesita documentos de un programa anterior','Un estudiante de máster que pide notas o graduación del grado de Kyushu se trata normalmente como antiguo estudiante para esos documentos; su carné actual no los hace gratuitos.']],
    kinds:'Elige el documento correcto',documents:['Certificado de matrícula(在学証明書): acredita la situación actual, para visados o becas. Los estudiantes sin titulación deben confirmar qué certificado de matrícula/estancia corresponde.','Expediente académico(成績証明書): recoge notas registradas. Una nota recién visible en el portal puede tardar en aparecer. Investigación e intercambio no tienen necesariamente las mismas condiciones que un programa regular.','Graduación/finalización prevista: solo si se cumplen las condiciones del programa; no está disponible para todos los nuevos estudiantes. Los certificados de graduación/finalización corresponden a programas ya terminados.','Descuento estudiantil JR(学割証): solo en máquinas del campus, no en tiendas. Es diferente del documento para abonos de desplazamiento al campus; comprueba aparte los requisitos del operador.','Certificado médico: exige completar el reconocimiento periódico actual de la universidad; consulta las excepciones. La lista oficial de tiendas solo indica japonés. Para inglés o pruebas específicas, consulta CHC.','Certificado de concesión del doctorado: si se requiere el número del título, no lo sustituyas únicamente por el certificado de finalización. Para acreditar becas, recomendaciones o una estancia especial no incluida en la lista, consulta la sección correspondiente o ISED.'],
    apply:'Primero solicita; después recoge',steps:[['Confirma los requisitos','Japonés/inglés, copias, programa, plazo, sobre sellado y formato obligatorio. Pregunta al destinatario antes de pagar.'],['Accede desde la web oficial','Elige el portal de estudiantes actuales o antiguos y sigue las instrucciones de acceso. Verifica el correo en el primer registro. Tener cuenta universitaria no permite a estudiantes sin titulación usar las máquinas.'],['Elige certificado y entrega','Para el campus, selecciona la máquina/impresión del campus y utiliza el número de confirmación de la solicitud. En tiendas admitidas de Japón, sigue los códigos, pago y plazo indicados en pantalla para su máquina multicopia.'],['Ventanilla, correo o formatos especiales','Para ventanilla:「郵送・窓口」y「大学窓口での受取り」. Por correo, envía el sobre de devolución con sellos indicado. Si falta el documento, confirma primero que puede emitirse y utiliza「その他の証明書」y observaciones.']],
    fees:'Costes y plazos',feeHeaders:['Situación/método','Coste/condiciones'],feeRows:[['Actual: máquina del campus/ventanilla','Emisión gratuita. Sin titulación: no puede usar la máquina.'],['Actual: tienda','400 yenes/certificado＋60 yenes/página. Solo usuarios elegibles y documentos disponibles.'],['Actual: correo','Emisión gratuita; prepara el sobre de devolución con sellos.'],['Antiguos estudiantes','Normalmente800 yenes/certificado＋impresión o franqueo, según elegibilidad.']],
    feeNote:'La impresión en tiendas vence7 días después de solicitar, a las0:00 del día8; comprueba la pantalla. Las tasas y el franqueo pagados no se reembolsan. Un estudiante actual puede tener una excepción para graduación/finalización/notas de un programa anterior con fines de empleo si solicita y recoge en ventanilla: confirma antes de pagar. Explicarlo después no permite recuperar el pago. Ventanilla/correo: aproximadamente3 días en japonés o1 semana en inglés, más el envío; no se garantiza el mismo día.',
    health:'Certificados médicos: cuándo acudir a la oficina',healthItems:['Completa el reconocimiento actual y todos los elementos, incluido el cuestionario web. Sin examen o con elementos pendientes, no se emite.','En2026, quienes necesitan repetir la radiografía de tórax, estudiantes de マス・フォア・イノベーション連係学府 y estudiantes sin titulación no pueden usar máquinas/tiendas. Consulta pronto la sala de salud CHC más cercana.','Los certificados del reconocimiento2026 se emiten hasta2027-03-31. Es el plazo de emisión, no una garantía de validez para el destinatario. Confirma fecha y disponibilidad; no uses resultados anteriores como actuales.'],
    machines:'Dónde están las máquinas del campus',machineHeaders:['Campus','Lugar/horario'],campusNames:['Ito','Hospital','Ohashi','Chikushi'],machineLocations:['Center1,2F, vestíbulo de asuntos estudiantiles','East1-C,1F, frente a asuntos estudiantiles de humanidades/ciencias sociales','West1-A,3F, oficina académica de Ciencias','West4,2F, vestíbulo estudiantil de asuntos académicos de Ingeniería','West5 Este,3F, oficina de estudiantes de Agricultura','Investigación Básica A,1F','Administración de Diseño,1F, asuntos estudiantiles','Administración,1F'],
    machineNote:'Ubicación y horario: Manual del estudiante2026,página8. Cerradas fines de semana/festivos; los avisos locales tienen prioridad. Ohashi también indica ubicación provisional enCo-Lab hasta alrededor de mayo2026: confirma el traslado. Para Chikushi se usa Administración1F de esta edición, no la referencia antigua aVista Hall.',
    exceptions:'Formatos especiales, menús y ayuda',exceptionsItems:['Los certificados tienen protección contra falsificaciones; una fotocopia o impresión corriente no sustituye al original emitido. Exteriores de Japón no acepta certificados de este servicio de tiendas: elige máquina del campus, correo o ventanilla.','No se sellan automáticamente. Si es necesario, la sección de estudiantes puede sellar un original emitido en máquina o tienda. Para formatos obligatorios/exámenes profesionales, consulta antes, explica en observaciones y envía la plantilla.','Problemas de acceso, correo o pago:06-6809-4327(24 horas). Contenido, preparación, envío y aprobación inicial: tu sección de estudiantes en la lista oficial. Consulta académica general:092-802-5939(laborables8:30–17:15). No envíes documentos de identidad ni contraseñas a esta guía.'],
    sourceLabels:['Guía oficial de certificados y contactos','Guía oficial de certificados en inglés','Portal oficial para estudiantes actuales','Manual2026: máquinas,página8','Aviso de certificados médicos2026','Ingeniería: investigación e intercambio'],accountSuffix:'Elige situación y entrega desde la página oficial de certificados. ku-cert no es solo para posgrado. Consulta la sección de certificados de este artículo.',accountLink:'Certificados de estudiantes actuales(ku-cert)',healthSummary:'El certificado médico es distinto del académico. Completa el examen actual; estudiantes sin titulación, casos de reexamen y algunos programas no pueden emitirlo automáticamente. Consulta condiciones y plazo anual en la sección de certificados.'
  }
};

/** 复用原证明书标题、位置表和出处ID；新增短小节，不增加新类别或文章。 */
function blocks(lang='zh', campus='all') {
  const c=COPY[lang]; if(!c)throw new Error('未知语言');
  const rowCampuses=['ito','ito','ito','ito','ito','hospital','ohashi','chikushi'];
  const campusIndex={ito:0,hospital:1,ohashi:2,chikushi:3};
  const rows=c.machineLocations.map((loc,i)=>[c.campusNames[campusIndex[rowCampuses[i]]],loc+' · '+(i===5?'9:00–17:15':'8:30–17:15')]).filter((_,i)=>campus==='all'||rowCampuses[i]===campus);
  return [
    {id:'1240ad',type:'heading',text:c.title}, {id:'7d38ec',type:'paragraph',text:c.intro},
    {id:'c7who',type:'subheading',text:c.who}, {id:'c7whoTable',type:'fee_table',headers:c.whoHeaders,rows:c.whoRows},
    {id:'c7kind',type:'subheading',text:c.kinds}, {id:'c7docs',type:'list',items:c.documents.map(text=>({text}))},
    {id:'c7apply',type:'subheading',text:c.apply}, {id:'c7steps',type:'steps',items:c.steps.map(([title,desc])=>({title,desc}))},
    {id:'c7fee',type:'subheading',text:c.fees}, {id:'c7feeTable',type:'fee_table',headers:c.feeHeaders,rows:c.feeRows}, {id:'c7feeNote',type:'notice',text:c.feeNote},
    {id:'c7health',type:'subheading',text:c.health}, {id:'c7healthBody',type:'list',items:c.healthItems.map(text=>({text}))},
    {id:'8d720b',type:'subheading',text:c.machines}, {id:'9dc610',type:'fee_table',headers:c.machineHeaders,rows}, {id:'7ddd0f',type:'paragraph',text:c.machineNote},
    {id:'c7special',type:'subheading',text:c.exceptions}, {id:'c7help',type:'list',items:c.exceptionsItems.map(text=>({text}))},
    {id:'d2ae99',type:'links',items:SOURCES.map((url,i)=>({text:c.sourceLabels[i],url}))}
  ];
}
module.exports={CHECKED_AT,SOURCES,COPY,blocks};
