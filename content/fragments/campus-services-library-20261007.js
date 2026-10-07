'use strict';

// 五语共用同一套区块编排；内容只记录官方公开页面可支持的规则与待核事项。
const CHECKED_AT = '2026-10-07';
const LOCALES = ['zh', 'ja', 'en', 'ko', 'es'];

const SOURCES = {
  library: [
    { text: '学生・教職員の利用手続（2026-08-07更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/procedures' },
    { text: 'Student and Faculty Procedures (updated 2026-08-07)', url: 'https://www.lib.kyushu-u.ac.jp/en/services/members/procedures' },
    { text: '資料の貸出・返却・延長・予約（2026-08-07更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
    { text: '中央図書館・学内利用案内（2024-02-13更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/central/guides_members' },
    { text: '理系図書館・学内利用案内（2026-06-29更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/scitech/guides_members' },
    { text: '医学図書館・学内利用案内（2026-08-08更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/medical/guides_members' },
    { text: '芸術工学図書館・学内利用案内（2025-05-12更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/design/guides_members-0' },
    { text: '筑紫図書館・学内利用案内（2026-06-09更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/chikushi/guides_members' },
    { text: '各図書館・開館カレンダー・連絡先', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries' },
    { text: '図書館の使い方（2026-04-16更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/learning/facilities_services' }
  ],
  printing: [
    { text: '印刷はできますか？（2026-08-24更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/faq/900' },
    { text: 'Can I print from PC? (updated 2026-08-24)', url: 'https://www.lib.kyushu-u.ac.jp/en/faq/900' },
    { text: '館内資料を複写する（2026-08-07更新）', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
    { text: '九州大学の証明書発行案内', url: 'https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/' },
    { text: '各図書館・開館カレンダー・連絡先', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries' }
  ]
};

const COPY = {
  zh: {
    library: {
      title: '图书馆首次使用：入馆、借还与学习空间',
      intro: '核对日：2026-10-07。以下适用于中央、理系、医学、艺术工学、筑紫五馆；各馆的使用条件和服务不同。图书馆利用证可在九大图书馆使用，但不代表每馆规则相同。实际还书到期日以 My Page／借阅记录为准。',
      first: '首次入馆与借书',
      steps: [
        { title: '带好学生证', desc: '九大学生的学生证可作图书馆利用证。非正课生若学生证不是 IC 卡，请向所属学生係申请 IC 个人卡。' },
        { title: '通过入口闸机', desc: '设有闸机的馆，将学生证或图书馆利用证贴近读卡处。忘带时向柜台人员求助；柜台较远可按对讲机。' },
        { title: '办理借阅并先看本馆日历', desc: '借书时把资料和图书馆利用证带到柜台。开放时间按目标馆的当前日历确认。' }
      ],
      loan: '一般借阅量与期限（各馆另有特殊借阅条件）',
      loanHeaders: ['图书馆／身份', '借阅量', '期限'],
      loanRows: [
        ['中央／理系／医学', '图书与期刊合计10册', '图书2周；期刊1周'],
        ['艺术工学：本科生', '图书10册；期刊5册', '图书15日；期刊8日'],
        ['艺术工学：大学院生（硕士/博士）', '图书20册；期刊10册', '图书30天；期刊8日'],
        ['筑紫', '图书10册；期刊5册', '图书2周；期刊2天']
      ],
      circulation: '续借、归还与预约',
      circulationItems: [
        '在到期日前通过 My Page 或柜台续借。一般只能续借1次；有他人预约或资料为期刊时不能续借。筑紫馆的图书最多可续借2次；新期限从办理日开始计算。',
        '在柜台归还；闭馆时可用还书箱。九大馆藏可在办理借出的图书馆以外的九大图书馆归还。只要有资料逾期，就不能新借或续借；逾期几天，停借相同天数。',
        '他人已借走的图书，可从九大馆藏目录的“预约·取寄”按钮申请，或向柜台咨询。部分资料不接受预约，送达也可能需要时间。',
      ],
      rooms: '学习室与特别开放',
      roomItems: [
        '学习室是否可预约、预约方式与使用条件请按目标馆的当前页面确认，必要时咨询该馆。',
        '医学图书馆的24小时无人开放仅限病院地区学生、教职员及医疗从业人员，且须事先申请；不等于所有医学相关学生都可使用。'
      ],
      links: [
        { text: '学生／教职员图书馆使用手续', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/procedures' },
        { text: '借阅、续借、归还与预约规则', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: '九大图书馆目录（查询馆藏与预约选项）', url: 'https://catalog.lib.kyushu-u.ac.jp/ja' },
        { text: '五馆列表、当前开馆日历与联系入口', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries' },
        { text: '中央图书馆借阅说明（含馆别特殊借阅）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/central/guides_members' },
        { text: '理系图书馆借阅说明（含馆别特殊借阅）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/scitech/guides_members' },
        { text: '医学图书馆借阅说明（含馆别特殊借阅）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/medical/guides_members' },
        { text: '艺术工学图书馆借阅说明（含馆别特殊借阅）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/design/guides_members-0' },
        { text: '筑紫图书馆借阅说明（含馆别特殊借阅）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/chikushi/guides_members' }
      ]
    },
    printing: {
      title: '图书馆普通文件打印与馆藏资料复印',
      intro: '核对日：2026-10-07。这里说的是个人普通文件打印和图书馆馆藏资料复印，不是大学正式证明书发行。各馆机器、操作方式和费用不同。',
      options: '普通 PDF 文件打印',
      optionItems: [
        'Cloud On-Demand Print：中央、理系、医学、艺术工学馆支持。须先在网上登记文件，再到馆内多功能复合机打印；该服务标注为学内限定。',
        'USB 打印：理系、医学、艺术工学、筑紫馆支持。可从 USB 直接打印 PDF；Word、Excel 等文件需预先转成 PDF。',
        '各馆机器的黑白／彩色支持与打印价格请看现场机器或向该馆确认；不要按其他校区的价格推定。'
      ],
      copy: '复印图书馆馆藏资料',
      copyItems: [
        '馆藏资料的复印限非营利目的、每人一份、作品的一部分；和打印个人 PDF 是不同服务。和装本、贵重资料等可能限制复印。',
        '各馆设有复印机；投币式与公费用卡式的办理方式、卡片购买窗口依馆而异。投币机不收大额纸币，图书馆不提供兑换。'
      ],
      confirm: '正式证明书与其他需求',
      confirmItems: [
        '需要正式在学、成绩等证明书时，走九州大学正式证明书发行流程；普通打印不是证明书发行。若需扫描，先咨询目标馆，不预设复合机支持。'
      ],
      links: [
        { text: '图书馆普通文件打印：方式与支持馆', url: 'https://www.lib.kyushu-u.ac.jp/ja/faq/900' },
        { text: '馆藏资料复印与借阅规则', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: '九州大学正式证明书发行说明', url: 'https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/' },
        { text: '各馆当前日历与联系入口', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries' }
      ]
    }
  },
  ja: {
    library: {
      title: '図書館を初めて使う：入館・貸出／返却・学習室',
      intro: '確認日：2026-10-07。中央・理系・医学・芸術工学・筑紫の5館が対象です。利用条件やサービスは館ごとに異なります。図書館利用者票は九大の図書館で使えますが、各館の規則は同一ではありません。実際の返却期限はMy Page／貸出記録で確認してください。',
      first: '初めての入館と貸出',
      steps: [
        { title: '学生証を持参', desc: '九大学生は学生証を図書館利用者票として使えます。非正課生で学生証がICカードでない場合は、所属の学生係にICパーソナルカードの交付を申請してください。' },
        { title: '入館ゲートを通る', desc: 'ゲートのある館では、学生証または図書館利用者票を読み取り部にかざします。忘れた場合はカウンターへ。カウンターが遠いときはインターフォンで係員を呼んでください。' },
        { title: '貸出手続きをし、開館カレンダーを確認', desc: '借りる資料と図書館利用者票をカウンターへお持ちください。開館時間は利用する館の最新カレンダーで確認してください。' }
      ],
      loan: '一般貸出冊数・期間（館別の特別貸出あり）',
      loanHeaders: ['図書館／区分', '貸出冊数', '貸出期間'],
      loanRows: [
        ['中央／理系／医学', '図書・雑誌 合計10冊', '図書2週間、雑誌1週間'],
        ['芸術工学：学部生', '図書10冊、雑誌5冊', '図書15日、雑誌8日'],
        ['芸術工学：大学院生', '図書20冊、雑誌10冊', '図書30日、雑誌8日'],
        ['筑紫', '図書10冊、雑誌5冊', '図書2週間、雑誌2日間']
      ],
      circulation: '延長・返却・予約',
      circulationItems: [
        '返却期限内にMy Pageまたはカウンターで延長します。通常は1回まで。他の利用者の予約がある場合と雑誌は延長できません。筑紫図書館は図書を2回まで延長できます。延長後の期間は手続日から数えます。',
        'カウンターへ返却し、閉館時は返却ポストを利用できます。九大所蔵資料は借りた館以外の九大図書館にも返却できます。1点でも延滞中は新たな貸出・延長ができず、延滞日数分の貸出停止になります。',
        '他の利用者が借りている図書は、九大コレクションの「予約・取寄」ボタンまたはカウンターで申し込めます。予約対象外の資料や、利用可能になるまで時間がかかる資料もあります。',
      ],
      rooms: '学習室と特別開館',
      roomItems: [
        '学習室の予約可否・方法・利用条件は、利用する館の最新案内を確認し、必要に応じて館へお問い合わせください。',
        '医学図書館の24時間無人開館は病院地区の学生・教員・医療従事者に限られ、事前申請が必要です。医学系の学生全員が使える制度ではありません。'
      ],
      links: [
        { text: '学生・教職員の利用手続', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/procedures' },
        { text: '貸出・延長・返却・予約', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: '九大コレクション（所蔵・予約状況）', url: 'https://catalog.lib.kyushu-u.ac.jp/ja' },
        { text: '5館一覧・最新カレンダー・連絡先', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries' },
        { text: '中央図書館：貸出案内（特別貸出等）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/central/guides_members' },
        { text: '理系図書館：貸出案内（特別貸出等）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/scitech/guides_members' },
        { text: '医学図書館：貸出案内（特別貸出等）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/medical/guides_members' },
        { text: '芸術工学図書館：貸出案内（特別貸出等）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/design/guides_members-0' },
        { text: '筑紫図書館：貸出案内（特別貸出等）', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries/chikushi/guides_members' }
      ]
    },
    printing: {
      title: '図書館での一般ファイル印刷・所蔵資料の複写',
      intro: '確認日：2026-10-07。ここでは個人の一般ファイル印刷と図書館所蔵資料の複写を扱います。大学の正式な証明書発行とは別です。機器・方法・料金は館ごとに異なります。',
      options: '一般PDFファイルの印刷',
      optionItems: [
        'Cloud On-Demand Print：中央・理系・医学・芸術工学図書館で利用できます。事前にインターネット上でファイルを登録し、館内の複合機で印刷します。学内限定です。',
        'USBプリント：理系・医学・芸術工学・筑紫図書館で利用できます。USBメモリからPDFを直接印刷できます。Word・Excel等は事前にPDFへ変換してください。',
        '白黒／カラー対応と印刷料金は各館の機器で確認するか、館へお問い合わせください。他キャンパスの料金を当てはめないでください。'
      ],
      copy: '図書館所蔵資料の複写',
      copyItems: [
        '所蔵資料の複写は、営利目的でなく、著作物の一部分を1人につき1部に限ります。個人PDFの印刷とは別のサービスです。和装本・貴重資料などは複写が制限される場合があります。',
        '各館に複写機があります。コイン式と公費払い用カード式があり、カードの取扱窓口は館ごとに異なります。コイン式は高額紙幣を使えず、図書館で両替はできません。'
      ],
      confirm: '正式な証明書などの手続き',
      confirmItems: [
        '在学・成績等の正式な証明書は九州大学の発行手続きを利用してください。一般ファイル印刷は証明書の発行ではありません。スキャンが必要な場合は利用館へ相談し、複合機が対応すると決めつけないでください。'
      ],
      links: [
        { text: '図書館で印刷する方法・対応館', url: 'https://www.lib.kyushu-u.ac.jp/ja/faq/900' },
        { text: '所蔵資料の複写と貸出案内', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: '九州大学の正式な証明書発行案内', url: 'https://www.kyushu-u.ac.jp/ja/education/procedure/certificate/' },
        { text: '各館の最新カレンダー・連絡先', url: 'https://www.lib.kyushu-u.ac.jp/ja/libraries' }
      ]
    }
  },
  en: {
    library: {
      title: 'First Use of the Library: Entry, Borrowing and Study Spaces',
      intro: 'Checked on 2026-10-07. This guide covers the Central, Science and Technology, Medical, Design and Chikushi Libraries. Eligibility and services vary by library. A Kyushu University library card works across the university libraries, but local rules are not identical. Check My Page/your loan record for the actual due date.',
      first: 'First entry and borrowing',
      steps: [
        { title: 'Bring your student ID', desc: 'For Kyushu University students, the student ID serves as the library card. Non-degree students whose student ID is not an IC card should ask their student affairs office about an IC personal card.' },
        { title: 'Use the entrance gate', desc: 'At a library with a gate, tap your student or library card on the reader. If you forgot it, ask the circulation desk; use the intercom if the desk is not nearby.' },
        { title: 'Check out items and the current calendar', desc: 'Take the items and your library card to the circulation desk. Check the current calendar for the library you plan to visit.' }
      ],
      loan: 'Standard loan limits and periods (special loans vary by library)',
      loanHeaders: ['Library / status', 'Loan limit', 'Loan period'],
      loanRows: [
        ['Central / SciTech / Medical', '10 books and journals combined', 'Books: 2 weeks; journals: 1 week'],
        ['Design: undergraduate', '10 books; 5 journals', 'Books: 15 days; journals: 8 days'],
        ['Design: graduate', '20 books; 10 journals', 'Books: 30 days; journals: 8 days'],
        ['Chikushi', '10 books; 5 journals', 'Books: 2 weeks; journals: 2 days']
      ],
      circulation: 'Renewals, returns and reservations',
      circulationItems: [
        'Renew before the due date through My Page or at the desk. Normally, renewal is allowed once; items cannot be renewed if reserved by another user or if they are journals. Chikushi allows up to two renewals for books. The renewed period starts on the processing date.',
        'Return items at the desk or use the book drop when the library is closed. Kyushu University holdings may be returned to a different Kyushu University library. If any item is overdue, you cannot borrow or renew; borrowing is suspended for the same number of days as the overdue period.',
        'If a book is checked out, use the “Reserve / Request” button in the Kyushu University catalog or ask at the desk. Some items cannot be reserved, and availability may take time.',
      ],
      rooms: 'Study rooms and special access',
      roomItems: [
        'Check the current information from the library you plan to use for study-room reservation availability, method and conditions; contact that library if needed.',
        'The Medical Library’s 24-hour unstaffed access is limited to students, faculty and healthcare professionals at the Hospital Campus and requires prior application. It is not available automatically to every medical student.'
      ],
      links: [
        { text: 'Procedures for students and faculty', url: 'https://www.lib.kyushu-u.ac.jp/en/services/members/procedures' },
        { text: 'Borrowing, renewing, returning and reserving items', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: 'Kyushu University Library Catalog', url: 'https://catalog.lib.kyushu-u.ac.jp/opac_search/?lang=1' },
        { text: 'Library directory, current calendars and contacts', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries' },
        { text: 'Central Library: borrowing guide and special-loan details', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/central/guides_members' },
        { text: 'Science and Technology Library: borrowing guide and special-loan details', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/scitech/guides_members' },
        { text: 'Medical Library: borrowing guide and special-loan details', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/medical/guides_members' },
        { text: 'Design Library: borrowing guide and special-loan details', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/design/guides_members-0' },
        { text: 'Chikushi Library: borrowing guide and special-loan details', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/chikushi/guides_members' }
      ]
    },
    printing: {
      title: 'Library Printing of Personal Files and Copying Collections',
      intro: 'Checked on 2026-10-07. This covers printing personal files and copying library collection materials, not formal university certificate issuance. Machines, methods and fees vary by library.',
      options: 'Printing ordinary PDF files',
      optionItems: [
        'Cloud On-Demand Print is available at the Central, SciTech, Medical and Design Libraries. Register the file online in advance and print it on a library multifunction printer. This is an internal university service.',
        'USB printing is available at the SciTech, Medical, Design and Chikushi Libraries. PDF files can be printed directly from a USB drive; convert Word, Excel and other formats to PDF first.',
        'Check each library’s machine or ask the library about black-and-white/color support and prices. Do not assume another campus’s prices apply.'
      ],
      copy: 'Copying library collection materials',
      copyItems: [
        'Copying library materials is limited to non-commercial purposes, one copy per person, and only part of a work. This is separate from printing a personal PDF. Japanese-bound and rare materials may have additional restrictions.',
        'Each library has copy machines. Coin payment and cards for public-expense billing are available; card sales differ by library. Coin machines do not accept high-value bills, and the library does not make change.'
      ],
      confirm: 'Formal certificates and other requests',
      confirmItems: [
        'Use Kyushu University’s official process for formal enrollment or transcript certificates; general file printing does not issue certificates. If you need scanning, ask the library first rather than assuming its multifunction printer supports it.'
      ],
      links: [
        { text: 'Library printing methods and supported libraries', url: 'https://www.lib.kyushu-u.ac.jp/en/faq/900' },
        { text: 'Copying collection materials and borrowing guide', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: 'Official Kyushu University certificate guidance', url: 'https://www.kyushu-u.ac.jp/en/education/procedure/certificate/' },
        { text: 'Current library calendars and contacts', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries' }
      ]
    }
  },
  ko: {
    library: {
      title: '도서관 첫 이용: 입관·대출/반납·학습실',
      intro: '확인일: 2026-10-07. 중앙·이공·의학·예술공학·치쿠시 도서관 5곳을 대상으로 합니다. 이용 자격과 서비스는 도서관마다 다릅니다. 규슈대 도서관 이용증은 각 도서관에서 사용할 수 있지만, 세부 규칙은 동일하지 않습니다. 실제 반납기한은 My Page／대출 기록에서 확인하세요.',
      first: '첫 입관과 대출',
      steps: [
        { title: '학생증 지참', desc: '규슈대 학생은 학생증을 도서관 이용증으로 사용할 수 있습니다. 비정규 학생 중 학생증이 IC 카드가 아닌 경우 소속 학생 담당 부서에 IC 개인카드 발급을 문의하세요.' },
        { title: '입구 게이트 통과', desc: '게이트가 있는 도서관에서는 학생증 또는 도서관 이용증을 판독기에 대세요. 잊고 왔다면 대출대에 문의하고, 대출대가 멀면 인터폰으로 직원을 부르세요.' },
        { title: '대출 처리와 당일 일정 확인', desc: '자료와 도서관 이용증을 대출대에 가져가세요. 방문할 도서관의 최신 개관 일정을 확인하세요.' }
      ],
      loan: '일반 대출 권수와 기간(도서관별 특별 대출은 별도)',
      loanHeaders: ['도서관／구분', '대출 한도', '대출 기간'],
      loanRows: [
        ['중앙／이공／의학', '도서·잡지 합계 10권', '도서 2주, 잡지 1주'],
        ['예술공학: 학부생', '도서 10권, 잡지 5권', '도서 15일, 잡지 8일'],
        ['예술공학: 대학원생', '도서 20권, 잡지 10권', '도서 30일, 잡지 8일'],
        ['치쿠시', '도서 10권, 잡지 5권', '도서 2주, 잡지 2일']
      ],
      circulation: '연장·반납·예약',
      circulationItems: [
        '반납기한 전에 My Page 또는 대출대에서 연장하세요. 일반적으로 1회만 가능하며 다른 이용자의 예약이 있거나 잡지인 경우 연장할 수 없습니다. 치쿠시 도서관은 도서를 최대 2회 연장할 수 있습니다. 연장 기간은 처리일부터 계산합니다.',
        '대출대에 반납하고, 폐관 중에는 반납함을 이용하세요. 규슈대 소장 자료는 대출한 곳이 아닌 다른 규슈대 도서관에도 반납할 수 있습니다. 연체 자료가 하나라도 있으면 새 대출과 연장이 불가하며 연체 일수만큼 대출이 정지됩니다.',
        '다른 이용자가 대출한 도서는 규슈대 컬렉션의 “예약·신청” 버튼이나 대출대에서 신청할 수 있습니다. 예약 대상이 아닌 자료가 있고 이용 가능해질 때까지 시간이 걸릴 수 있습니다.',
      ],
      rooms: '학습실과 특별 이용',
      roomItems: [
        '학습실 예약 가능 여부, 방법과 이용 조건은 이용하려는 도서관의 최신 안내를 확인하고, 필요하면 해당 도서관에 문의하세요.',
        '의학도서관의 24시간 무인 개관은 병원 캠퍼스의 학생·교직원·의료 종사자만 이용할 수 있고 사전 신청이 필요합니다. 의학 관련 학생 모두에게 자동으로 적용되는 제도가 아닙니다.'
      ],
      links: [
        { text: '학생·교직원 이용 절차', url: 'https://www.lib.kyushu-u.ac.jp/en/services/members/procedures' },
        { text: '대출·연장·반납·예약 규칙', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: '규슈대 도서관 검색', url: 'https://catalog.lib.kyushu-u.ac.jp/opac_search/?lang=1' },
        { text: '도서관 목록·최신 일정·연락처', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries' },
        { text: '중앙도서관: 대출 및 특별 대출 안내', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/central/guides_members' },
        { text: '이공도서관: 대출 및 특별 대출 안내', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/scitech/guides_members' },
        { text: '의학도서관: 대출 및 특별 대출 안내', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/medical/guides_members' },
        { text: '예술공학도서관: 대출 및 특별 대출 안내', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/design/guides_members-0' },
        { text: '치쿠시도서관: 대출 및 특별 대출 안내', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/chikushi/guides_members' }
      ]
    },
    printing: {
      title: '도서관 일반 파일 인쇄·소장 자료 복사',
      intro: '확인일: 2026-10-07. 개인 파일 인쇄와 도서관 소장 자료 복사를 다룹니다. 대학의 공식 증명서 발급과는 별개입니다. 기기·방법·요금은 도서관별로 다릅니다.',
      options: '일반 PDF 파일 인쇄',
      optionItems: [
        'Cloud On-Demand Print: 중앙·이공·의학·예술공학 도서관에서 지원합니다. 파일을 미리 인터넷에 등록한 뒤 도서관 복합기에서 출력합니다. 학내 전용 서비스입니다.',
        'USB 인쇄: 이공·의학·예술공학·치쿠시 도서관에서 지원합니다. USB에서 PDF를 바로 출력할 수 있습니다. Word·Excel 등은 미리 PDF로 변환하세요.',
        '흑백/컬러 지원과 인쇄 요금은 각 도서관 기기에서 확인하거나 해당 도서관에 문의하세요. 다른 캠퍼스의 요금을 적용하지 마세요.'
      ],
      copy: '도서관 소장 자료 복사',
      copyItems: [
        '소장 자료 복사는 비영리 목적에 한해 저작물 일부를 1인당 1부만 허용합니다. 개인 PDF 인쇄와는 다른 서비스입니다. 일본식 제본 자료와 귀중 자료 등은 복사가 제한될 수 있습니다.',
        '각 도서관에 복사기가 있습니다. 동전식과 공비 결제용 카드식이 있으며 카드 판매 창구는 도서관마다 다릅니다. 동전식은 고액권을 사용할 수 없고 도서관에서 환전할 수 없습니다.'
      ],
      confirm: '공식 증명서와 그 밖의 요청',
      confirmItems: [
        '재학·성적 등 공식 증명서는 규슈대의 정식 발급 절차를 이용하세요. 일반 파일 인쇄는 증명서 발급이 아닙니다. 스캔이 필요하면 도서관에 먼저 문의하고 복합기 지원을 가정하지 마세요.'
      ],
      links: [
        { text: '도서관 인쇄 방법·지원 도서관', url: 'https://www.lib.kyushu-u.ac.jp/en/faq/900' },
        { text: '소장 자료 복사와 대출 안내', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: '규슈대 공식 증명서 안내', url: 'https://www.kyushu-u.ac.jp/en/education/procedure/certificate/' },
        { text: '도서관 최신 일정·연락처', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries' }
      ]
    }
  },
  es: {
    library: {
      title: 'Primera visita a la biblioteca: acceso, préstamo y espacios de estudio',
      intro: 'Verificado el 2026-10-07. Esta guía cubre las bibliotecas Central, de Ciencia y Tecnología, Médica, de Diseño y Chikushi. Los requisitos y servicios varían según la biblioteca. La tarjeta bibliotecaria de Kyushu University se puede usar en sus bibliotecas, pero las reglas locales no son idénticas. Consulta My Page/el registro de préstamo para ver la fecha de devolución efectiva.',
      first: 'Primera entrada y préstamo',
      steps: [
        { title: 'Lleva tu tarjeta de estudiante', desc: 'Para estudiantes de Kyushu University, la tarjeta de estudiante sirve como tarjeta bibliotecaria. Si eres estudiante no regular y tu tarjeta no es IC, consulta con la oficina estudiantil de tu facultad sobre la tarjeta personal IC.' },
        { title: 'Pasa por el control de entrada', desc: 'En las bibliotecas con puerta de acceso, acerca tu tarjeta de estudiante o bibliotecaria al lector. Si la olvidaste, pregunta en el mostrador; usa el interfono si está lejos.' },
        { title: 'Tramita el préstamo y consulta el calendario actual', desc: 'Lleva los materiales y tu tarjeta bibliotecaria al mostrador. Consulta el calendario vigente de la biblioteca que visitarás.' }
      ],
      loan: 'Límites y plazos generales (cada biblioteca puede ofrecer préstamos especiales)',
      loanHeaders: ['Biblioteca / condición', 'Límite', 'Plazo'],
      loanRows: [
        ['Central / Ciencia y Tecnología / Médica', '10 libros y revistas en total', 'Libros: 2 semanas; revistas: 1 semana'],
        ['Diseño: grado', '10 libros; 5 revistas', 'Libros: 15 días; revistas: 8 días'],
        ['Diseño: posgrado', '20 libros; 10 revistas', 'Libros: 30 días; revistas: 8 días'],
        ['Chikushi', '10 libros; 5 revistas', 'Libros: 2 semanas; revistas: 2 días']
      ],
      circulation: 'Renovaciones, devoluciones y reservas',
      circulationItems: [
        'Renueva antes del vencimiento en My Page o en el mostrador. Normalmente se permite una renovación; no se puede renovar si otra persona reservó el material o si es una revista. Chikushi permite hasta dos renovaciones de libros. El nuevo plazo cuenta desde el día de la gestión.',
        'Devuelve en el mostrador o usa el buzón cuando la biblioteca esté cerrada. Los materiales de Kyushu University se pueden devolver en otra biblioteca de la universidad. Si tienes algún material vencido, no puedes pedir ni renovar préstamos; la suspensión dura tantos días como el retraso.',
        'Si otra persona tiene prestado un libro, usa el botón «Reservar / Solicitar» del catálogo de Kyushu University o pregunta en el mostrador. Algunos materiales no se pueden reservar y la disponibilidad puede tardar.',
      ],
      rooms: 'Salas de estudio y acceso especial',
      roomItems: [
        'Consulta la información vigente de la biblioteca que quieres utilizar para conocer si se pueden reservar salas de estudio y cuáles son las condiciones; pregunta a esa biblioteca si hace falta.',
        'El acceso sin personal las 24 horas de la Biblioteca Médica se limita a estudiantes, docentes y profesionales sanitarios del Campus Hospitalario, y requiere solicitud previa. No se aplica automáticamente a todo estudiante de medicina.'
      ],
      links: [
        { text: 'Procedimientos para estudiantes y personal', url: 'https://www.lib.kyushu-u.ac.jp/en/services/members/procedures' },
        { text: 'Préstamo, renovación, devolución y reservas', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: 'Catálogo de bibliotecas de Kyushu University', url: 'https://catalog.lib.kyushu-u.ac.jp/opac_search/?lang=1' },
        { text: 'Bibliotecas, calendarios y contactos actuales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries' },
        { text: 'Biblioteca Central: préstamos y préstamos especiales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/central/guides_members' },
        { text: 'Biblioteca de Ciencia y Tecnología: préstamos y especiales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/scitech/guides_members' },
        { text: 'Biblioteca Médica: préstamos y préstamos especiales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/medical/guides_members' },
        { text: 'Biblioteca de Diseño: préstamos y préstamos especiales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/design/guides_members-0' },
        { text: 'Biblioteca Chikushi: préstamos y préstamos especiales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries/chikushi/guides_members' }
      ]
    },
    printing: {
      title: 'Impresión de archivos personales y copias de materiales de la colección',
      intro: 'Verificado el 2026-10-07. Esta sección trata la impresión de archivos personales y las copias de materiales de la colección, no la expedición oficial de certificados universitarios. Los equipos, métodos y precios varían por biblioteca.',
      options: 'Imprimir archivos PDF ordinarios',
      optionItems: [
        'Cloud On-Demand Print está disponible en las bibliotecas Central, de Ciencia y Tecnología, Médica y de Diseño. Registra el archivo en Internet con antelación e imprímelo en una multifunción de la biblioteca. Es un servicio limitado al ámbito universitario.',
        'La impresión desde USB está disponible en las bibliotecas de Ciencia y Tecnología, Médica, Diseño y Chikushi. Se pueden imprimir archivos PDF directamente desde una memoria USB; convierte antes Word, Excel y otros formatos a PDF.',
        'Consulta en cada máquina o biblioteca si admite blanco y negro/color y cuáles son los precios. No des por hecho que se aplican los precios de otro campus.'
      ],
      copy: 'Copiar materiales de la colección',
      copyItems: [
        'Las copias de materiales de la colección se limitan a fines no comerciales, una copia por persona y solo una parte de la obra. Es un servicio distinto de imprimir un PDF personal. Puede haber restricciones adicionales para libros encuadernados al estilo japonés y materiales raros.',
        'Cada biblioteca dispone de fotocopiadoras. Hay pago con monedas y tarjetas para gastos públicos; los puntos de venta de tarjetas varían. Las máquinas de monedas no aceptan billetes de alta denominación y la biblioteca no cambia dinero.'
      ],
      confirm: 'Certificados oficiales y otras consultas',
      confirmItems: [
        'Solicita los certificados oficiales de matrícula o calificaciones mediante el procedimiento de Kyushu University; la impresión general no los expide. Si necesitas escanear, consulta primero a la biblioteca y no presupongas que la multifunción lo permite.'
      ],
      links: [
        { text: 'Métodos de impresión y bibliotecas compatibles', url: 'https://www.lib.kyushu-u.ac.jp/en/faq/900' },
        { text: 'Copias de materiales de colección y préstamos', url: 'https://www.lib.kyushu-u.ac.jp/ja/services/members/borrow' },
        { text: 'Información oficial sobre certificados', url: 'https://www.kyushu-u.ac.jp/en/education/procedure/certificate/' },
        { text: 'Calendarios y contactos actuales', url: 'https://www.lib.kyushu-u.ac.jp/en/libraries' }
      ]
    }
  }
};

/**
 * 按统一且固定的 ID/type 顺序，把单一语种内容组装为 H5 可消费的区块。
 * @param {'library'|'printing'} kind 片段主题。
 * @param {object} copy 当前语种的字段与逐条正文。
 * @returns {Array<object>} 区块结构；列表、步骤、表格和链接沿用现有正文格式。
 */
function buildBlocks(kind, copy) {
  if (kind === 'library') {
    return [
      { id: 'm7lib0', type: 'heading', text: copy.title },
      { id: 'm7lib1', type: 'paragraph', text: copy.intro },
      { id: 'm7lib2', type: 'subheading', text: copy.first },
      { id: 'm7lib3', type: 'steps', items: copy.steps },
      { id: 'm7lib4', type: 'subheading', text: copy.loan },
      { id: 'm7lib5', type: 'fee_table', headers: copy.loanHeaders, rows: copy.loanRows },
      { id: 'm7lib6', type: 'subheading', text: copy.circulation },
      { id: 'm7lib7', type: 'list', items: copy.circulationItems.map((text) => ({ text })) },
      { id: 'm7lib8', type: 'subheading', text: copy.rooms },
      { id: 'm7lib9', type: 'list', items: copy.roomItems.map((text) => ({ text })) },
      { id: 'm7lib10', type: 'links', items: copy.links }
    ];
  }

  return [
    { id: 'm7print0', type: 'heading', text: copy.title },
    { id: 'm7print1', type: 'paragraph', text: copy.intro },
    { id: 'm7print2', type: 'subheading', text: copy.options },
    { id: 'm7print3', type: 'list', items: copy.optionItems.map((text) => ({ text })) },
    { id: 'm7print4', type: 'subheading', text: copy.copy },
    { id: 'm7print5', type: 'list', items: copy.copyItems.map((text) => ({ text })) },
    { id: 'm7print6', type: 'subheading', text: copy.confirm },
    { id: 'm7print7', type: 'list', items: copy.confirmItems.map((text) => ({ text })) },
    { id: 'm7print8', type: 'links', items: copy.links }
  ];
}

/**
 * 生成两个仅含公开事实、来源和明确未知项的静态片段；不访问账户或服务端。
 * @returns {Array<object>} 按 H5 约定排列的图书馆与打印 sections。
 */
function buildSections() {
  return [
    {
      key: 'library', category: '6', headingId: 'm7lib0', scope: 'university',
      blocks: Object.fromEntries(LOCALES.map((locale) => [locale, buildBlocks('library', COPY[locale].library)])),
      sources: SOURCES.library,
      notes: [
        '适用范围：中央、理系、医学、艺术工学、筑紫五馆；不把记录资料馆或其他单位纳入通用规则。借阅量、期限依据当前使用指南（2026-08-07更新）。',
        '一般借阅表不替代馆别特别貸出条件；五馆的学内借阅说明已分别链接，特殊借阅数字不并入通用表。'
      ]
    },
    {
      key: 'printing', category: '10', headingId: 'm7print0', scope: 'university',
      blocks: Object.fromEntries(LOCALES.map((locale) => [locale, buildBlocks('printing', COPY[locale].printing)])),
      sources: SOURCES.printing,
      notes: [
        '普通文件打印：Cloud On-Demand Print 支持中央、理系、医学、艺术工学；USB PDF 打印支持理系、医学、艺术工学、筑紫。两种方式合计覆盖五馆，但并非每馆两种方式都有。',
        '馆藏资料复印和普通文件打印分开说明；正式证明书发行另走学校流程。机器具体位置、每馆彩色能力及价格由各馆机器或当前馆方说明确认。'
      ]
    }
  ];
}

const sections = buildSections();
module.exports = { CHECKED_AT, sections };
