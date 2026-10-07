// 九州大学公开服务信息的五语独立片段；由主项目按目标文章融合，本文件本身不执行线上写入。
const CHECKED_AT = '2026-10-07';

const corrections = {
  activation: {
    zh: '激活 SSO-KID 时需登记一个可及时收信的密码重设邮箱；九大全学基本邮箱（@m.kyushu-u.ac.jp、@s.kyushu-u.ac.jp）不能登记，短信也不可用。',
    ja: 'SSO-KIDのアクティベーション時には、パスワード再設定用としてすぐ受信できるメールアドレスを登録します。九大の全学基本メールアドレス（@m.kyushu-u.ac.jp、@s.kyushu-u.ac.jp）は登録できず、SMSも利用できません。',
    en: "When activating your SSO-KID, register an email address you can access promptly for password recovery. Kyushu University's primary email addresses (@m.kyushu-u.ac.jp and @s.kyushu-u.ac.jp) and SMS cannot be used.",
    ko: 'SSO-KID를 활성화할 때 비밀번호 재설정용으로 바로 확인할 수 있는 이메일 주소를 등록해야 합니다. 규슈대학교의 기본 이메일 주소(@m.kyushu-u.ac.jp, @s.kyushu-u.ac.jp)는 등록할 수 없으며 SMS도 사용할 수 없습니다.',
    es: 'Al activar el SSO-KID, registre una dirección de correo a la que pueda acceder de inmediato para recuperar la contraseña. No se admiten las direcciones institucionales de Kyushu University (@m.kyushu-u.ac.jp y @s.kyushu-u.ac.jp) ni los SMS.'
  },
  wifi: {
    zh: '校内无线网有 kitenet 和 edunet：kitenet 登录 ID 为 SSO-KID@kitenet，edunet 为 SSO-KID@edunet；两者均使用 SSO-KID 密码。正课生（学部生、大学院生）的 SSO-KID 是学生证背面的10位数字；非正课生（如研究生）请向所属学务窗口确认。',
    ja: '学内無線LANには kitenet と edunet があります。kitenet のログインIDは SSO-KID@kitenet、edunet は SSO-KID@edunet で、どちらも SSO-KID のパスワードを使います。正課生（学部生・大学院生）のSSO-KIDは学生証裏面に記載された10桁です。非正課生（研究生等）は所属の学務担当窓口に確認してください。',
    en: "Kyushu University has two campus Wi-Fi services: kitenet and edunet. Use SSO-KID@kitenet for kitenet and SSO-KID@edunet for edunet; both use your SSO-KID password. For regular students (undergraduate and graduate students), the 10-digit SSO-KID is printed on the back of the student card. Non-regular students, such as research students, should obtain their SSO-KID from their department's academic affairs office.",
    ko: '규슈대학교 교내 무선망에는 kitenet과 edunet이 있습니다. kitenet에는 SSO-KID@kitenet, edunet에는 SSO-KID@edunet을 사용하며, 두 서비스 모두 SSO-KID 비밀번호를 입력합니다. 정규 과정 학생(학부생·대학원생)의 10자리 SSO-KID는 학생증 뒷면에 표시되어 있습니다. 비정규 과정 학생(연구생 등)은 소속 학무 담당 창구에서 SSO-KID를 확인하세요.',
    es: 'La red Wi-Fi del campus incluye kitenet y edunet. Para kitenet use SSO-KID@kitenet y para edunet, SSO-KID@edunet; ambas requieren la contraseña del SSO-KID. En estudiantes de programas regulares (grado y posgrado), el SSO-KID de 10 dígitos figura en el reverso de la tarjeta de estudiante. Los estudiantes de programas no regulares, como los de investigación, deben solicitarlo a la oficina académica de su departamento.'
  },
  wifiOverview: {
    zh: '九大校内无线网有面向学生、教职员的 kitenet，以及主要用于学生自带电脑和讲义室教学的 edunet。无法连接时，先检查账号输入，再按 KITE 官方设置说明排查。eduroam 是独立的漫游服务，需另行申请 NII 提供的账号；校内仅在官方地点列表标明处可用。',
    ja: '九州大学の学内無線LANには、学生・教職員向けの kitenet と、学生のPC持参・講義室での利用を想定した edunet があります。接続できない場合は、まずIDの入力を確認し、KITEの設定案内をご覧ください。eduroamは別のローミングサービスで、NIIが発行するアカウントが必要です。学内では公式の設置場所一覧に掲載された場所で利用できます。',
    en: "Kyushu University offers kitenet for students and faculty/staff, and edunet for student-owned PCs, especially in classrooms. If you cannot connect, first check that you entered your ID correctly, then follow KITE's setup instructions. eduroam is a separate roaming service requiring an account issued by NII; on campus it is available only at locations on the university's official list.",
    ko: '규슈대학교의 교내 무선망에는 학생·교직원용 kitenet과 학생 개인 PC 및 강의실 이용을 위한 edunet이 있습니다. 연결되지 않으면 먼저 ID를 정확히 입력했는지 확인한 뒤 KITE 설정 안내를 확인하세요. eduroam은 NII가 발급하는 계정이 필요한 별도의 로밍 서비스이며, 교내에서는 공식 설치 장소 목록에 나온 곳에서만 사용할 수 있습니다.',
    es: 'Kyushu University ofrece kitenet para estudiantes y personal, y edunet para los ordenadores personales del alumnado, especialmente en las aulas. Si no logra conectarse, compruebe primero que el ID esté bien escrito y consulte las instrucciones de configuración de KITE. eduroam es un servicio de itinerancia independiente que requiere una cuenta emitida por NII; en el campus solo está disponible en las ubicaciones de la lista oficial.'
  }
};

const SOURCES = {
  'student-id': [
    {text:'九州大学 ICカード故障・紛失案内',url:'https://web.card.kyushu-u.ac.jp/trouble/index.html'},
    {text:'九州大学 学生証再発行案内',url:'https://web.card.kyushu-u.ac.jp/students/trouble.html'},
    {text:'九州大学 ICカード保証・有償条件',url:'https://web.card.kyushu-u.ac.jp/warranty/index.html'},
    {text:'2026年度学生ハンドブック（簡易版）',url:'https://www.kyushu-u.ac.jp/f/64451/R8_guidebook_half.pdf'},
    {text:'農学部・生物資源環境科学府の紛失手続案内',url:'https://www.agr.kyushu-u.ac.jp/gakusei/helpie_faq/q%EF%BC%9A%E5%AD%A6%E7%94%9F%E8%A8%BC%E3%82%92%E7%B4%9B%E5%A4%B1%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%81%A9%E3%81%86%E3%81%99%E3%82%8C%E3%81%B0%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B'}
  ],
  'account-help': [
    {text:'九州大学 SSO-KID アクティベーション案内',url:'https://web.sso.kyushu-u.ac.jp/idpw/activation.html'},
    {text:'九州大学 SSO-KID パスワードを忘れた場合',url:'https://web.sso.kyushu-u.ac.jp/idpw/lost.html'},
    {text:'九州大学 SSO-KID・登録コード再発行案内',url:'https://web.sso.kyushu-u.ac.jp/idpw/reissue.html'},
    {text:'学生の SSO-KID 取得方法・学籍区分',url:'https://web.sso.kyushu-u.ac.jp/ssokid/students.html'},
    {text:'九州大学 情報相談室の学内ICT案内',url:'https://www.artsci.kyushu-u.ac.jp/~csr/services.html'},
    {text:'九州大学 SSO 公開 FAQ（Wi-Fi接続）',url:'https://web.sso.kyushu-u.ac.jp/contactus/faq.html'},
    {text:'九州大学 KITE campus Wi-Fi 案内・問い合わせ先',url:'https://www.nc.kyushu-u.ac.jp/campus-wifi/'},
    {text:'九州大学 eduroam 案内',url:'https://www.nc.kyushu-u.ac.jp/net/eduroam/'}
  ],
  software: [
    {text:'九州大学 Microsoft 365 サービス案内',url:'https://ci.iii.kyushu-u.ac.jp/365/'},
    {text:'九州大学 Microsoft 365 Apps 利用案内',url:'https://ci.iii.kyushu-u.ac.jp/howto/office_apps/'},
    {text:'九州大学 Microsoft 365 初期設定案内',url:'https://ci.iii.kyushu-u.ac.jp/1st/index_new/'},
    {text:'九州大学 OneDrive 案内',url:'https://ci.iii.kyushu-u.ac.jp/365/onedrive/'},
    {text:'九州大学 Microsoft 365 FAQ',url:'https://ci.iii.kyushu-u.ac.jp/365/q_a/'},
    {text:'九州大学 SSO-KID サービス一覧（利用終了時の扱い）',url:'https://web.sso.kyushu-u.ac.jp/ssokid/services.html'},
    {text:'九州大学 Microsoft 365 利用上の注意（2025-11-12）',url:'https://ci.iii.kyushu-u.ac.jp/365/pdf/essential.pdf'},
    {text:'学生 SSO-KID と内部進学時の取扱い',url:'https://web.sso.kyushu-u.ac.jp/ssokid/students.html'}
  ]
};

const SOURCE_LABELS = {
  zh: {
    'student-id':['IC卡遗失与停用指引','学生证再发行手续','IC卡收费条件','2026学生手册','农业部局专用遗失手续'],
    'account-help':['SSO-KID激活指南','忘记SSO密码时','SSO-KID与注册代码再发行','学生SSO-KID与学籍区分','信息咨询室ICT说明','Wi-Fi连接故障FAQ','校园Wi-Fi总览与支持联系方式','eduroam官方说明'],
    software:['Microsoft 365服务说明','Office应用安装说明','Microsoft 365初始设置','OneDrive使用说明','Microsoft 365常见问题','SSO服务目录与资格终止后的处理','Microsoft 365使用规则','学生SSO-KID与内部升学']
  },
  ja: {
    'student-id':['ICカードの紛失・利用停止案内','学生証の再発行手続','ICカードの有償条件','2026年度学生ハンドブック','農学部局の紛失手続案内'],
    'account-help':['SSO-KIDアクティベーション案内','SSOパスワードを忘れた場合','SSO-KID・登録コード再発行','学生のSSO-KIDと学籍区分','情報相談室のICT案内','Wi-Fi接続の公開FAQ','学内Wi-Fiと問い合わせ先','eduroam公式案内'],
    software:['Microsoft 365サービス案内','Officeアプリのインストール案内','Microsoft 365初期設定','OneDrive利用案内','Microsoft 365 FAQ','SSOサービス一覧と資格終了後の扱い','Microsoft 365利用上の注意','学生SSO-KIDと内部進学']
  },
  en: {
    'student-id':['IC card loss and suspension guidance','Student card reissue procedure','IC card warranty and fee conditions','2026 Student Handbook','Agriculture-specific loss procedure'],
    'account-help':['SSO-KID activation guide','Forgotten SSO password','SSO-KID and registration-code reissue','Student SSO-KID and status categories','Information Consultation Room ICT guide','Public Wi-Fi troubleshooting FAQ','Campus Wi-Fi overview and support contacts','Official eduroam information'],
    software:['Microsoft 365 service overview','Office apps installation guide','Microsoft 365 first-time setup','OneDrive guide','Microsoft 365 FAQ','SSO services after eligibility ends','Microsoft 365 terms of use','Student SSO-KID and internal progression']
  },
  ko: {
    'student-id':['IC 카드 분실·이용 정지 안내','학생증 재발급 절차','IC 카드 유상 조건','2026 학생 핸드북','농학부 소속 분실 절차'],
    'account-help':['SSO-KID 활성화 안내','SSO 비밀번호 분실 시','SSO-KID·등록 코드 재발급','학생 SSO-KID와 학적 구분','정보상담실 ICT 안내','Wi-Fi 연결 공개 FAQ','교내 Wi-Fi 및 문의처','eduroam 공식 안내'],
    software:['Microsoft 365 서비스 안내','Office 앱 설치 안내','Microsoft 365 초기 설정','OneDrive 안내','Microsoft 365 FAQ','SSO 서비스와 자격 종료 후 처리','Microsoft 365 이용 규칙','학생 SSO-KID와 내부 진학']
  },
  es: {
    'student-id':['Pérdida y suspensión de la tarjeta IC','Procedimiento de reemisión','Condiciones de cobro y garantía','Manual del estudiante 2026','Procedimiento específico de Agricultura'],
    'account-help':['Activación de SSO-KID','Olvido de contraseña SSO','Reemisión de SSO-KID y código','SSO-KID según situación académica','Guía TIC de la sala de consulta','FAQ público de conexión Wi-Fi','Wi-Fi del campus y contactos','Información oficial de eduroam'],
    software:['Servicio Microsoft 365','Instalación de aplicaciones Office','Configuración inicial de Microsoft 365','Guía de OneDrive','FAQ de Microsoft 365','Servicios SSO al terminar la elegibilidad','Reglas de uso de Microsoft 365','SSO-KID del alumnado y progresión interna']
  }
};

const COPY = {
  zh: {
    'student-id': {
      title:'学生证遗失、损坏与再发行',
      intro:'适用范围：九州大学学生。遗失后应尽快停用；再发行向所属学务窗口办理。受理窗口和具体流程可能因学部、学府而异。',
      steps:[
        {title:'遗失后先停用',desc:'从学校官方IC卡故障页提交停用申请；这是停卡手续，不是再发行申请。若在再发行前找回，另交恢复申请，窗口处理后下一个工作日恢复使用。'},
        {title:'按学籍类别申请再发行',desc:'确认无法找回或卡片损坏时，向所属学务窗口申请。正课生使用学生证再发行申请；非正课生（如研究生）使用个人卡借用申请并选择再发行，附本人正面照片。'},
        {title:'按当前指引缴费并本人领取',desc:'按IC卡团队及所属学务窗口的当前指引缴费并提交所需收据。申请书送达IC卡业务室后约1周；不是从用户交表日计算或保证一周。卡片由本人领取，并按窗口要求办理受领确认/盖章。'}
      ],
      feeHeaders:['项目','官方说明'],
      feeRows:[
        ['再发行费','现行学生证再发行页面列明2,000日元。遗失及使用者责任造成的明显破损等属于收费例。'],
        ['可能免费情形','非使用者责任造成的故障等可能免费；是否适用由IC卡团队/所属窗口按具体原因确认。'],
        ['处理时间与领取','申请书送达IC卡业务室后约1周；本人领取并按窗口要求办理受领确认/盖章。不是从用户交表日起保证一周。']
      ],
      note:'农业部局另公布自2025-12起的在线遗失/恢复申请流程，仅适用于该部局；其他学生按所属窗口当前指引办理。'
    },
    'account-help': {
      title:'SSO账号与校园Wi-Fi',
      intro:'适用范围：九州大学学生；SSO-KID的领取方式依正课生/非正课生学籍而不同。校园Wi-Fi覆盖和设备设置以官方服务页面为准，不代表每个校区或室内位置均有信号。',
      ssoTitle:'SSO-KID激活与密码恢复',
      ssoSteps:[
        {title:'激活时准备信息并登记恢复邮箱',desc:'按官方页面输入SSO-KID、注册代码、出生日期及验证码，并登记可及时收信的密码恢复邮箱。@m.kyushu-u.ac.jp 与 @s.kyushu-u.ac.jp 全学基本邮箱不能登记；短信不可用于恢复。'},
        {title:'有注册代码时自行重设密码',desc:'使用官方忘记密码入口并通过已登记邮箱收取验证信息；链接/代码须在15分钟内使用。若缺少注册代码，按官方再发行流程办理。'},
        {title:'确认学籍与线下办理条件',desc:'正课生（学部、大学院）通常可从学生证取得SSO-KID和注册代码；非正课生（如研究生）向所属学务窗口取得。若无法在线重设，学生须携学生证或其他身份证明到信息统括本部认证基础事业室或所属学务窗口；学生密码不能通过电话或邮件初始化。认证基础事业室公布的受理时间为工作日8:30–12:00、13:00–17:00；所属学务窗口按各自公告办理。'}
      ],
      wifiTitle:'校园Wi-Fi与故障排查',
      wifiBody:'kitenet登录ID为SSO-KID@kitenet，edunet为SSO-KID@edunet；两者均使用SSO-KID密码。正课生的10位SSO-KID列在学生证背面；非正课生应向所属学务窗口确认。连接失败时，先核对ID输入，再按KITE官方设置说明排查。',
      wifiItems:[
        'kitenet面向学生、教职员；edunet主要用于学生自带电脑及讲义室教学。官方说明称kitenet覆盖“几乎全校”，但没有逐校区的覆盖保证。',
        'eduroam是独立漫游服务，需要另行申请国立信息学研究所（NII）发放的账号；校内仅在官方地点列表标示处可用。',
        '仍无法连接时，可联系九大网络服务窗口：092-802-2687、092-802-2688、092-802-2686；n-room@iii.kyushu-u.ac.jp。'
      ]
    },
    software: {
      title:'Office软件与离校前备份',
      intro:'适用范围：符合九州大学Microsoft 365服务资格且持有效SSO-KID的成员；具体服务随账号类型/学籍而异。首次使用需完成多重身份验证（MFA）。',
      useTitle:'Office与Microsoft 365',
      useSteps:[
        {title:'先核对账号资格并完成MFA',desc:'登录学校Microsoft 365入口前，确认SSO-KID已启用并按官方流程配置MFA。官方页面提示，SSO-KID以a开头的账号通常不能使用Microsoft 365 Apps，但页面列有例外；按本人账号资格确认，不作全体成员承诺。'},
        {title:'按设备类型确认Office许可',desc:'符合资格的学生/教职员可按学校说明在个人电脑使用Microsoft 365 Apps。学校设备与个人电脑的许可方式不同；请按设备管理方和官方说明确认，不要仅凭“学校配发”推定许可类型。'}
      ],
      statusBody:'九大内部升学时，官方说明SSO-KID和密码可延续；实际Microsoft 365服务资格仍依账号与学籍状态判断。毕业、退职等只有在本人资格实际终止时才适用账号/服务停止规则。',
      backupTitle:'毕业、离职或离校前备份',
      backupItems:[
        '离校前提前备份需要保留的个人文件。',
        '资格实际终止后，官方列出的Office/Teams删除宽限期为即日，SharePoint/OneDrive为100天；100天是数据删除期限，不是可登录或取回文件的期限。'
      ]
    }
  },
  ja: {
    'student-id': {
      title:'学生証の紛失・破損・再発行',
      intro:'対象：九州大学の学生。紛失したら早めに利用停止し、再発行は所属の学務担当窓口で申請します。受付窓口や手順は学部・学府により異なる場合があります。',
      steps:[
        {title:'紛失後、まず利用停止',desc:'大学公式ICカード故障案内から利用停止を申請します。これはカード停止の手続で、再発行申請とは別です。再発行前に見つかった場合は別途利用再開を届け出ます。窓口処理後、翌営業日に利用再開となります。'},
        {title:'学籍区分に応じて再発行申請',desc:'見つからない場合やカードが破損した場合は、所属の学務担当窓口に申請します。正課生は学生証再発行願、非正課生（研究生等）はパーソナルカード貸与願で再発行を選び、本人の正面写真を添付します。'},
        {title:'現在の案内に従って納付し、本人が受領',desc:'ICカードチームおよび所属の学務担当窓口の最新案内に従って納付し、必要な領収書を提出します。申請書が当事業室に到着後、1週間前後です。利用者が窓口に提出した日から1週間とするものではありません。カードは本人が受領し、窓口の指示に従って受領確認・押印等を行います。'}
      ],
      feeHeaders:['項目','公式案内'],
      feeRows:[
        ['再発行手数料','現行の学生証再発行案内は2,000円としています。紛失や本人責任による目立つ破損等は有償例です。'],
        ['無償となる場合','本人責任でない故障等は無償となる場合があります。該当するかは具体的な事情に基づきICカードチームまたは所属窓口に確認してください。'],
        ['所要期間・受領','申請書が認証基盤事業室に到着後、1週間前後です。本人が受領し、窓口の指示に従って受領確認・押印等を行います。申請書の提出日からの一律1週間ではありません。']
      ],
      note:'農学部局は2025-12からオンラインの紛失・再開手続を別途案内していますが、同部局に限る案内です。他の学生は所属窓口の現在の案内に従ってください。'
    },
    'account-help': {
      title:'SSOアカウントと学内Wi-Fi',
      intro:'対象：九州大学の学生。SSO-KIDの取得方法は正課生・非正課生で異なります。学内Wi-Fiの範囲や端末設定は公式案内に従い、全校区・全室内で接続できることを保証するものではありません。',
      ssoTitle:'SSO-KIDの有効化とパスワード再設定',
      ssoSteps:[
        {title:'有効化情報を用意し、連絡用メールを登録',desc:'公式ページでSSO-KID、登録コード、生年月日、画像認証を入力し、すぐ受信できるパスワード再設定用メールアドレスを登録します。@m.kyushu-u.ac.jp と @s.kyushu-u.ac.jp の全学基本メールアドレスは登録できず、SMSも利用できません。'},
        {title:'登録コードがあればオンラインで再設定',desc:'公式のパスワード忘失ページを使い、登録済みメールで認証情報を受け取ります。リンク/コードは15分以内に使用してください。登録コードがない場合は公式の再発行手続を確認します。'},
        {title:'学籍区分と窓口手続を確認',desc:'正課生（学部・大学院）は通常、学生証でSSO-KIDと登録コードを確認できます。非正課生（研究生等）は所属の学務担当窓口に確認してください。オンラインで再設定できない学生は学生証または他の本人確認書類を持参し、情報統括本部認証基盤事業室または所属の学務窓口へ。学生のパスワード初期化は電話・メールでは受け付けません。認証基盤事業室が案内する受付時間は平日8:30–12:00、13:00–17:00です。所属学務窓口の時間は各窓口の案内を確認してください。'}
      ],
      wifiTitle:'学内Wi-Fiと接続トラブル',
      wifiBody:'kitenetのログインIDはSSO-KID@kitenet、edunetはSSO-KID@edunetで、どちらもSSO-KIDのパスワードを使います。正課生の10桁のSSO-KIDは学生証裏面に記載されています。非正課生は所属の学務担当窓口に確認してください。接続できない場合は、まずID入力を確認し、KITE公式の設定案内に沿って切り分けます。',
      wifiItems:[
        'kitenetは学生・教職員向け、edunetは主に学生のPC持参や講義室での利用を想定しています。公式案内はkitenetを「ほぼ全学内」としていますが、校区ごとの接続保証はありません。',
        'eduroamは別のローミングサービスです。国立情報学研究所（NII）が発行するアカウントを別途取得し、学内では公式設置場所一覧に掲載された場所で利用します。',
        '解決しない場合の九大ネットワーク窓口：092-802-2687、092-802-2688、092-802-2686；n-room@iii.kyushu-u.ac.jp。'
      ]
    },
    software: {
      title:'Officeソフトと離籍前のバックアップ',
      intro:'対象：九州大学Microsoft 365の利用資格があり、有効なSSO-KIDを持つ構成員です。利用できるサービスはアカウント・学籍区分により異なります。初回利用時は多要素認証（MFA）の設定が必要です。',
      useTitle:'OfficeとMicrosoft 365',
      useSteps:[
        {title:'利用資格とMFAを確認',desc:'大学のMicrosoft 365入口を使う前にSSO-KIDが有効であることを確認し、公式手順でMFAを設定します。公式案内では、SSO-KIDがaで始まるアカウントは通常Microsoft 365 Appsを利用できませんが、例外も記載されています。本人のアカウント資格を確認し、全員利用可能とは案内しないでください。'},
        {title:'端末ごとにOfficeライセンスを確認',desc:'資格のある学生・教職員は、大学の案内に従って個人PCでMicrosoft 365 Appsを利用できます。大学設備と個人PCではライセンス方式が異なります。「大学貸与」というだけで方式を推定せず、機器管理者と公式案内で確認してください。'}
      ],
      statusBody:'九大内の内部進学では、公式案内上SSO-KIDとパスワードは引き継がれます。Microsoft 365の利用資格はアカウントと学籍状況によります。卒業・退職等による停止ルールは、本人の利用資格が実際に終了した場合に適用されます。',
      backupTitle:'卒業・退職・離籍前のバックアップ',
      backupItems:[
        '離籍前に、残しておきたい個人ファイルを事前にバックアップしてください。',
        '利用資格が実際に終了した後、公式一覧の削除猶予期間はOffice/Teamsが即日、SharePoint/OneDriveが100日です。100日はデータ削除までの期間であり、ログインやファイル取得ができる期間ではありません。'
      ]
    }
  },
  en: {
    'student-id': {
      title:'Lost, damaged, or reissued student cards',
      intro:'Scope: Kyushu University students. If your card is lost, request suspension promptly; apply for a replacement through your affiliated academic affairs office. Intake counters and procedures may vary by faculty or graduate school.',
      steps:[
        {title:'Suspend a lost card first',desc:'Submit the suspension request through the university’s official IC-card trouble page. This disables the card and is separate from a reissue application. If you find it before reissue, submit a separate reactivation notice; use resumes on the next business day after the office processes it.'},
        {title:'Apply according to student status',desc:'If the card is not found or is damaged, apply through your affiliated academic affairs office. Regular-course students use the Student Card Reissue Application. Non-regular students, such as research students, use the Personal Card Loan Application, select reissue, and attach a front-facing photo.'},
        {title:'Pay under current instructions and collect in person',desc:'Pay and submit any required receipt according to current instructions from the IC Card Team and your academic affairs office. Processing takes about one week after the application reaches the IC Card Office; this is not counted or guaranteed from the day you submit it. The cardholder must collect the card and complete any receipt acknowledgment/stamping required by the office.'}
      ],
      feeHeaders:['Item','Official information'],
      feeRows:[
        ['Reissue fee','The current student-card reissue page lists ¥2,000. Loss and visible damage caused by the cardholder are examples of chargeable cases.'],
        ['Possible no-fee cases','Malfunctions not caused by the cardholder may be free. Ask the IC Card Team or your affiliated office to assess the specific cause.'],
        ['Timing and collection','About one week after the application reaches the IC Card Office. The cardholder must collect it and complete any receipt acknowledgment/stamping required by the office; the period is not counted from the user’s submission date.']
      ],
      note:'The Faculty of Agriculture has a separate online loss/reactivation procedure from 2025-12; it applies only to that faculty. Other students should follow the current instructions from their affiliated office.'
    },
    'account-help': {
      title:'SSO account and campus Wi-Fi',
      intro:'Scope: Kyushu University students. How you obtain an SSO-KID depends on whether you are a regular-course or non-regular student. Follow official pages for Wi-Fi coverage and setup; they do not guarantee a signal in every campus or indoor location.',
      ssoTitle:'Activate SSO-KID and recover your password',
      ssoSteps:[
        {title:'Prepare activation details and register a recovery email',desc:'On the official page, enter your SSO-KID, registration code, date of birth, and CAPTCHA, then register an email address you can access promptly for password recovery. The primary addresses @m.kyushu-u.ac.jp and @s.kyushu-u.ac.jp cannot be registered, and SMS is not supported.'},
        {title:'Reset online if you have the registration code',desc:'Use the official forgotten-password page and receive verification information at your registered email. Use the link/code within 15 minutes. If you do not have the registration code, follow the official reissue procedure.'},
        {title:'Check your status and in-person options',desc:'Regular students (undergraduate and graduate) can usually find their SSO-KID and registration code on the student card. Non-regular students, such as research students, should ask their affiliated academic affairs office. If online reset fails, students must go in person with a student card or other identity document to the Information Infrastructure Initiative Authentication Infrastructure Office or their affiliated academic affairs office. Student password initialization is not handled by phone or email. The Authentication Infrastructure Office lists its hours as weekdays 8:30–12:00 and 13:00–17:00; check the posted hours of your own academic affairs office.'}
      ],
      wifiTitle:'Campus Wi-Fi and troubleshooting',
      wifiBody:'Use SSO-KID@kitenet for kitenet and SSO-KID@edunet for edunet; both use your SSO-KID password. For regular students, the 10-digit SSO-KID is printed on the back of the student card. Non-regular students should ask their academic affairs office. If connection fails, first check the ID you entered, then follow KITE’s official setup instructions.',
      wifiItems:[
        'kitenet is for students and faculty/staff; edunet is mainly for student-owned computers and classroom learning. The official page describes kitenet as available on “almost all” of campus, but does not guarantee coverage campus by campus.',
        'eduroam is a separate roaming service. Obtain an account issued by the National Institute of Informatics (NII); on campus it is available only at locations on the official list.',
        'If the issue remains, contact Kyushu University network support: 092-802-2687, 092-802-2688, 092-802-2686; n-room@iii.kyushu-u.ac.jp.'
      ]
    },
    software: {
      title:'Office software and backing up files before leaving',
      intro:'Scope: Kyushu University members who are eligible for Microsoft 365 and have an active SSO-KID. Available services vary by account and student status. Multi-factor authentication (MFA) is required for initial use.',
      useTitle:'Office and Microsoft 365',
      useSteps:[
        {title:'Check eligibility and configure MFA',desc:'Before signing in to the university Microsoft 365 portal, confirm that your SSO-KID is active and configure MFA using the official instructions. The university says accounts whose SSO-KID starts with “a” generally cannot use Microsoft 365 Apps, but lists exceptions. Check your own account eligibility; do not promise access to every member.'},
        {title:'Check the Office license for your device',desc:'Eligible students and faculty/staff may use Microsoft 365 Apps on personal computers under university guidance. Licenses differ between personal and university devices; confirm with the device manager and official instructions instead of inferring the license only from “university-provided.”'}
      ],
      statusBody:'For internal progression within Kyushu University, the official page says the SSO-KID and password are carried over. Microsoft 365 eligibility still depends on the account and student status. Account/service termination rules apply only when the person’s eligibility actually ends, such as after leaving enrollment or employment.',
      backupTitle:'Back up before graduation, retirement, or leaving',
      backupItems:[
        'Before leaving, back up personal files you need to keep.',
        'When eligibility actually ends, the official deletion grace period is immediate for Office/Teams and 100 days for SharePoint/OneDrive. The 100 days is a data-deletion period, not a login or retrieval period.'
      ]
    }
  },
  ko: {
    'student-id': {
      title:'학생증 분실·파손·재발급',
      intro:'적용 대상: 규슈대학교 학생. 분실하면 신속히 이용 정지를 신청하고, 재발급은 소속 학무 담당 창구에서 신청하세요. 접수 창구와 절차는 학부·대학원별로 다를 수 있습니다.',
      steps:[
        {title:'분실 시 먼저 이용 정지',desc:'대학 공식 IC 카드 문제 안내에서 이용 정지를 신청하세요. 이는 카드 정지 절차이며 재발급 신청과는 별개입니다. 재발급 전에 찾으면 별도의 이용 재개 신청을 하며, 창구 처리 후 다음 영업일부터 다시 사용할 수 있습니다.'},
        {title:'학적 구분에 따라 재발급 신청',desc:'찾지 못했거나 카드가 파손되면 소속 학무 담당 창구에서 신청하세요. 정규 과정 학생은 학생증 재발급 신청서를 사용합니다. 연구생 등 비정규 과정 학생은 개인 카드 대여 신청서에서 재발급을 선택하고 정면 사진을 첨부합니다.'},
        {title:'현재 안내에 따라 납부하고 본인 수령',desc:'IC 카드팀 및 소속 학무 담당 창구의 현재 안내에 따라 납부하고 필요한 영수증을 제출하세요. 신청서가 IC 카드 업무실에 도착한 뒤 약 1주일입니다. 사용자가 신청서를 제출한 날부터 계산하거나 1주일 내 완료를 보장하는 뜻은 아닙니다. 본인이 카드를 수령하고 창구 안내에 따라 수령 확인/날인을 하세요.'}
      ],
      feeHeaders:['항목','공식 안내'],
      feeRows:[
        ['재발급 수수료','현행 학생증 재발급 안내에는 2,000엔으로 기재되어 있습니다. 분실 및 사용자 책임으로 발생한 눈에 띄는 파손 등이 유상 사례입니다.'],
        ['무료일 수 있는 경우','사용자 책임이 아닌 고장 등은 무료일 수 있습니다. 구체적인 원인에 따른 적용 여부는 IC 카드팀 또는 소속 창구에 확인하세요.'],
        ['처리 기간·수령','신청서가 IC 카드 업무실에 도착한 뒤 약 1주일입니다. 본인이 수령하고 창구 안내에 따라 수령 확인/날인을 하세요. 신청서 제출일부터 일률적으로 계산하는 기간은 아닙니다.']
      ],
      note:'농학부 소속은 2025-12부터 별도의 온라인 분실·재개 절차를 안내하지만 해당 부서에 한정됩니다. 그 외 학생은 소속 창구의 현재 안내를 따르세요.'
    },
    'account-help': {
      title:'SSO 계정과 교내 Wi-Fi',
      intro:'적용 대상: 규슈대학교 학생. SSO-KID 발급 방법은 정규 과정과 비정규 과정 학생에 따라 다릅니다. Wi-Fi 범위와 기기 설정은 공식 안내를 확인하세요. 모든 캠퍼스와 실내에서 연결된다는 보장은 없습니다.',
      ssoTitle:'SSO-KID 활성화 및 비밀번호 복구',
      ssoSteps:[
        {title:'활성화 정보 준비 및 복구 이메일 등록',desc:'공식 페이지에 SSO-KID, 등록 코드, 생년월일, CAPTCHA를 입력하고 바로 확인할 수 있는 비밀번호 복구용 이메일을 등록합니다. @m.kyushu-u.ac.jp 및 @s.kyushu-u.ac.jp 기본 이메일은 등록할 수 없고 SMS도 지원하지 않습니다.'},
        {title:'등록 코드가 있으면 온라인 재설정',desc:'공식 비밀번호 분실 페이지를 이용해 등록 이메일로 인증 정보를 받으세요. 링크/코드는 15분 이내에 사용해야 합니다. 등록 코드가 없으면 공식 재발급 절차를 확인하세요.'},
        {title:'학적과 대면 창구 절차 확인',desc:'정규 과정 학생(학부·대학원)은 보통 학생증에서 SSO-KID와 등록 코드를 확인할 수 있습니다. 연구생 등 비정규 과정 학생은 소속 학무 담당 창구에 문의하세요. 온라인 재설정이 안 되는 학생은 학생증 또는 다른 신분증을 지참해 정보통괄본부 인증기반사업실 또는 소속 학무 창구를 방문해야 합니다. 학생 비밀번호 초기화는 전화나 이메일로 처리하지 않습니다. 인증기반사업실이 안내하는 접수 시간은 평일 8:30–12:00, 13:00–17:00입니다. 소속 학무 창구 시간은 해당 창구 공지를 확인하세요.'}
      ],
      wifiTitle:'교내 Wi-Fi 및 연결 문제',
      wifiBody:'kitenet 로그인 ID는 SSO-KID@kitenet, edunet은 SSO-KID@edunet이며 두 서비스 모두 SSO-KID 비밀번호를 사용합니다. 정규 과정 학생의 10자리 SSO-KID는 학생증 뒷면에 표시됩니다. 비정규 과정 학생은 소속 학무 창구에 확인하세요. 연결되지 않으면 먼저 입력한 ID를 확인한 뒤 KITE 공식 설정 안내를 확인하세요.',
      wifiItems:[
        'kitenet은 학생·교직원용이며 edunet은 주로 학생 개인 PC와 강의실 학습을 위한 서비스입니다. 공식 페이지는 kitenet을 “거의 전 캠퍼스”에서 이용할 수 있다고 설명하지만 캠퍼스별 연결을 보장하지 않습니다.',
        'eduroam은 별도의 로밍 서비스입니다. 국립정보학연구소(NII)가 발급하는 계정을 따로 신청해야 하며, 교내에서는 공식 장소 목록에 표시된 곳에서만 사용할 수 있습니다.',
        '문제가 계속되면 규슈대학교 네트워크 지원에 문의하세요: 092-802-2687, 092-802-2688, 092-802-2686; n-room@iii.kyushu-u.ac.jp.'
      ]
    },
    software: {
      title:'Office 소프트웨어와 떠나기 전 백업',
      intro:'적용 대상: 규슈대학교 Microsoft 365 이용 자격이 있고 유효한 SSO-KID를 가진 구성원입니다. 이용 가능한 서비스는 계정 및 학적에 따라 다릅니다. 처음 이용할 때 다중 인증(MFA) 설정이 필요합니다.',
      useTitle:'Office 및 Microsoft 365',
      useSteps:[
        {title:'이용 자격과 MFA 확인',desc:'대학 Microsoft 365 포털에 로그인하기 전에 SSO-KID가 활성화되어 있는지 확인하고 공식 안내에 따라 MFA를 설정하세요. 대학 안내에 따르면 SSO-KID가 “a”로 시작하는 계정은 일반적으로 Microsoft 365 Apps를 사용할 수 없지만 예외도 기재되어 있습니다. 계정별 자격을 확인하고 모든 구성원이 이용 가능하다고 단정하지 마세요.'},
        {title:'기기별 Office 라이선스 확인',desc:'자격이 있는 학생·교직원은 대학 안내에 따라 개인 컴퓨터에서 Microsoft 365 Apps를 이용할 수 있습니다. 대학 기기와 개인 컴퓨터의 라이선스 방식은 다릅니다. “대학에서 제공한 기기”라는 이유만으로 라이선스를 추정하지 말고 기기 관리자와 공식 안내를 확인하세요.'}
      ],
      statusBody:'규슈대학교 내부 진학 시 공식 안내에 따르면 SSO-KID와 비밀번호는 이어서 사용합니다. Microsoft 365 이용 자격은 계정과 학적 상태에 따라 달라집니다. 졸업·퇴직 등에 따른 중지 규칙은 본인의 이용 자격이 실제로 종료된 경우에 적용됩니다.',
      backupTitle:'졸업·퇴직·학적 종료 전 백업',
      backupItems:[
        '학교를 떠나기 전에 보관할 개인 파일을 미리 백업하세요.',
        '이용 자격이 실제로 종료된 뒤 공식 삭제 유예 기간은 Office/Teams 즉시, SharePoint/OneDrive 100일입니다. 100일은 데이터 삭제 기간이며 로그인이나 파일을 되찾을 수 있는 기간이 아닙니다.'
      ]
    }
  },
  es: {
    'student-id': {
      title:'Pérdida, daño y reemisión de la tarjeta de estudiante',
      intro:'Ámbito: estudiantes de Kyushu University. Si pierde la tarjeta, solicite su suspensión cuanto antes; la reemisión se tramita en la oficina académica de su departamento. La oficina y el procedimiento pueden variar según la facultad o posgrado.',
      steps:[
        {title:'Suspenda primero una tarjeta perdida',desc:'Presente la solicitud de suspensión desde la página oficial de problemas con tarjetas IC de la universidad. Es un trámite para desactivar la tarjeta, distinto de la reemisión. Si la encuentra antes de la reemisión, presente por separado el aviso de reactivación; el uso se reanuda el siguiente día laborable después de que la oficina lo tramite.'},
        {title:'Solicite según su situación académica',desc:'Si no la encuentra o está dañada, solicite la reemisión en su oficina académica. El alumnado de programas regulares usa la solicitud de reemisión de tarjeta. El alumnado no regular, como investigación, usa la solicitud de préstamo de tarjeta personal, elige reemisión y adjunta una foto frontal.'},
        {title:'Pague según las instrucciones vigentes y recoja en persona',desc:'Pague y presente los recibos necesarios según las instrucciones vigentes del equipo IC y de su oficina académica. El plazo es de aproximadamente 1 semana desde que la solicitud llega a la oficina de tarjetas IC; no se cuenta ni se garantiza desde el día en que el estudiante la entrega. El titular debe recoger la tarjeta y completar la confirmación de recepción/sello que indique la oficina.'}
      ],
      feeHeaders:['Concepto','Información oficial'],
      feeRows:[
        ['Tasa de reemisión','La página vigente de reemisión indica 2,000 yenes. La pérdida y los daños visibles causados por el titular son ejemplos de casos de pago.'],
        ['Posibles casos gratuitos','Las averías no causadas por el titular pueden ser gratuitas. Consulte al equipo IC o a su oficina académica según la causa concreta.'],
        ['Plazo y recogida','Aproximadamente 1 semana desde que la solicitud llega a la oficina de tarjetas IC. El titular debe recogerla y completar la confirmación/sello que indique la oficina; no es un plazo general desde la fecha en que se entrega la solicitud.']
      ],
      note:'La Facultad de Agricultura publica un procedimiento en línea separado para pérdida/reactivación desde 2025-12; solo se aplica a esa facultad. Los demás estudiantes deben seguir las instrucciones vigentes de su oficina académica.'
    },
    'account-help': {
      title:'Cuenta SSO y Wi-Fi del campus',
      intro:'Ámbito: estudiantes de Kyushu University. La forma de obtener el SSO-KID depende de si el programa es regular o no regular. Consulte las páginas oficiales para cobertura y configuración Wi-Fi; no garantizan señal en todos los campus ni interiores.',
      ssoTitle:'Activación del SSO-KID y recuperación de contraseña',
      ssoSteps:[
        {title:'Prepare los datos de activación y registre un correo de recuperación',desc:'En la página oficial introduzca el SSO-KID, el código de registro, la fecha de nacimiento y el CAPTCHA; después registre un correo al que pueda acceder de inmediato para recuperar la contraseña. No se admiten las direcciones institucionales @m.kyushu-u.ac.jp ni @s.kyushu-u.ac.jp, y los SMS no están disponibles.'},
        {title:'Restablezca en línea si tiene el código de registro',desc:'Use la página oficial de contraseña olvidada y reciba la verificación en el correo registrado. Use el enlace/código en un plazo de 15 minutos. Si no tiene el código de registro, siga el procedimiento oficial de reemisión.'},
        {title:'Confirme su situación y la atención presencial',desc:'El alumnado regular (grado y posgrado) normalmente puede consultar el SSO-KID y el código de registro en la tarjeta. El alumnado no regular, como investigación, debe preguntar a su oficina académica. Si no puede restablecerlo en línea, el estudiante debe acudir con la tarjeta u otro documento de identidad a la Oficina de Infraestructura de Información, Authentication Infrastructure Office, o a su oficina académica. No se inicializan contraseñas de estudiantes por teléfono ni correo. La Authentication Infrastructure Office publica horario de atención de laborables 8:30–12:00 y 13:00–17:00; consulte el horario publicado por su propia oficina académica.'}
      ],
      wifiTitle:'Wi-Fi del campus y solución de problemas',
      wifiBody:'Use SSO-KID@kitenet para kitenet y SSO-KID@edunet para edunet; ambas usan la contraseña del SSO-KID. En estudiantes regulares, el SSO-KID de 10 dígitos figura en el reverso de la tarjeta. El alumnado no regular debe consultarlo en su oficina académica. Si no conecta, compruebe primero el ID introducido y siga las instrucciones oficiales de configuración de KITE.',
      wifiItems:[
        'kitenet es para estudiantes y personal; edunet se orienta sobre todo a ordenadores personales del alumnado y aulas. La página oficial describe kitenet como disponible en “casi todo” el campus, pero no garantiza cobertura por campus.',
        'eduroam es un servicio de itinerancia separado. Requiere una cuenta emitida por el Instituto Nacional de Informática (NII); en el campus solo funciona en las ubicaciones de la lista oficial.',
        'Si el problema continúa, contacte con soporte de red de Kyushu University: 092-802-2687, 092-802-2688, 092-802-2686; n-room@iii.kyushu-u.ac.jp.'
      ]
    },
    software: {
      title:'Office y copias de seguridad antes de salir',
      intro:'Ámbito: miembros de Kyushu University con derecho a Microsoft 365 y un SSO-KID activo. Los servicios disponibles varían según la cuenta y la situación académica. El primer uso requiere configurar la autenticación multifactor (MFA).',
      useTitle:'Office y Microsoft 365',
      useSteps:[
        {title:'Compruebe el derecho de uso y configure MFA',desc:'Antes de entrar en el portal universitario de Microsoft 365, confirme que el SSO-KID esté activo y configure MFA siguiendo las instrucciones oficiales. La universidad indica que las cuentas cuyo SSO-KID empieza por “a” normalmente no pueden usar Microsoft 365 Apps, aunque la página contempla excepciones. Compruebe el derecho de su cuenta; no lo prometa a todos.'},
        {title:'Confirme la licencia de Office para cada dispositivo',desc:'Los estudiantes y el personal elegibles pueden usar Microsoft 365 Apps en un ordenador personal según la guía universitaria. Las licencias difieren entre dispositivos personales y universitarios; confirme con el responsable del dispositivo y las instrucciones oficiales, sin deducir el tipo de licencia solo porque el equipo sea “proporcionado por la universidad”.'}
      ],
      statusBody:'En una progresión interna dentro de Kyushu University, la página oficial indica que se conserva el SSO-KID y la contraseña. El derecho a Microsoft 365 sigue dependiendo de la cuenta y la situación académica. Las reglas de fin de cuenta/servicio solo se aplican cuando termina realmente la elegibilidad de la persona.',
      backupTitle:'Copias antes de graduarse, jubilarse o dejar la universidad',
      backupItems:[
        'Antes de dejar la universidad, haga una copia de seguridad de los archivos personales que quiera conservar.',
        'Cuando termina realmente la elegibilidad, el plazo oficial de eliminación es inmediato para Office/Teams y de 100 días para SharePoint/OneDrive. Los 100 días son un plazo de eliminación de datos, no un periodo garantizado para iniciar sesión o recuperarlos.'
      ]
    }
  }
};

const LANGS = ['zh','ja','en','ko','es'];
const SECTION_CONFIG = [
  {key:'student-id',category:'6',headingId:'m7card0',scope:'university',notes:[
    '现行再发行页面和2026学生手册支持2,000日元；2009年旧行政通知写3,000日元，属于过时冲突。',
    '正式停卡入口在九大IC卡服务页；指南仅指向官方表单，不收集或转交学生证等个人证件。',
    '农业部局线上手续是部局特例；各所属学务窗口不统一。'
  ]},
  {key:'account-help',category:'5',headingId:'m7acct0',scope:'university',notes:[
    '旧正文academic/3b7366、residence/d66ea0、firstmonth/36cd13把恢复邮箱规则写反；newcomer只排除@s邮箱，遗漏@m邮箱。',
    '旧academic把passchg/SSO密码恢复链接指向ci.iii.kyushu-u.ac.jp/m/，该地址是全学基本邮件入口，不是SSO密码恢复页。',
    '正课生通常从学生证取得SSO-KID/注册代码；研究生等非正课生向所属学务窗口取得。认证基础事业室的受理时间不代表所属学务窗口的统一时间。没有确认当前Wi-Fi故障或逐校区覆盖。'
  ]},
  {key:'software',category:'6',headingId:'m7soft0',scope:'university',notes:[
    'Microsoft 365资格随账号/学籍而异；a开头SSO-KID的Apps限制有官方列明的例外，须按本人账号确认。',
    '内部升学时SSO-KID和密码可延续；只有本人服务资格实际终止时才适用停止/删除规则。100天是SharePoint/OneDrive数据删除期限，不是可访问承诺。',
    '离校前备份所需文件是实用建议；公开资料未确认统一的备份截止日或离校后访问期。'
  ]}
];

function makeBlocks(lang, key, headingId) {
  // 以同一模板生成五语块，保证各语言块ID、类型、数量和表格形状一致。
  const c = COPY[lang][key];
  const p = key.replace(/-/g,'');
  const linkItems = SOURCES[key].map((source, index) => ({
    text: SOURCE_LABELS[lang][key][index],
    url: source.url
  }));
  const blocks = [{id:headingId,type:'heading',text:c.title}];

  if (key === 'student-id') {
    blocks.push(
      {id:p+'1',type:'paragraph',text:c.intro},
      {id:p+'2',type:'steps',items:c.steps},
      {id:p+'3',type:'fee_table',headers:c.feeHeaders,rows:c.feeRows},
      {id:p+'4',type:'paragraph',text:c.note},
      {id:p+'5',type:'links',items:linkItems}
    );
  } else if (key === 'account-help') {
    blocks.push(
      {id:p+'1',type:'paragraph',text:c.intro},
      {id:p+'2',type:'subheading',text:c.ssoTitle},
      {id:p+'3',type:'steps',items:c.ssoSteps},
      {id:p+'4',type:'subheading',text:c.wifiTitle},
      {id:p+'5',type:'paragraph',text:c.wifiBody},
      {id:p+'6',type:'list',items:c.wifiItems.map(text=>({text}))},
      {id:p+'7',type:'links',items:linkItems}
    );
  } else {
    blocks.push(
      {id:p+'1',type:'paragraph',text:c.intro},
      {id:p+'2',type:'subheading',text:c.useTitle},
      {id:p+'3',type:'steps',items:c.useSteps},
      {id:p+'4',type:'paragraph',text:c.statusBody},
      {id:p+'5',type:'subheading',text:c.backupTitle},
      {id:p+'6',type:'list',items:c.backupItems.map(text=>({text}))},
      {id:p+'7',type:'links',items:linkItems}
    );
  }
  return blocks;
}

const sections = SECTION_CONFIG.map(config => ({
  ...config,
  blocks: Object.fromEntries(LANGS.map(lang => [
    lang,
    makeBlocks(lang,config.key,config.headingId)
  ])),
  sources: SOURCES[config.key]
}));

module.exports = {CHECKED_AT,corrections,sections};
