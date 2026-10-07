'use strict';

// 供内容审阅/融合使用的五语候选片段；不直接改写共享正文或译文包。
// 每种语言按同一组区块 ID 与类型输出，官方来源链接由 SOURCES 统一维护。
const CHECKED_AT = '2026-10-07';
const LANGUAGES = ['zh', 'ja', 'en', 'ko', 'es'];

const SOURCES = {
  dorm: [
    { text: '九州大学伊都学生寄宿舎利用规约（钥匙、管理人）', url: 'https://dormitory.student.kyushu-u.ac.jp/_userdata/kokoroe_J.pdf' },
    { text: '九州大学国际学生宿舍信息（宿舍管理人室电话）', url: 'https://www.isc.kyushu-u.ac.jp/intlweb/student/housing/dormitory' },
    { text: '九州大学国际学生生活资料（宿舍联系与时间信息）', url: 'https://www.isc.kyushu-u.ac.jp/intlweb/web/wp-content/uploads/2025/04/JP_USEFUL-INFORMATION-1.pdf' },
    { text: '九州大学校园生活与健康支援中心：紧急联络先', url: 'https://chc.kyushu-u.ac.jp/emergency/' }
  ],
  sports: [
    { text: '九州大学体育设施（伊都地区窗口与当月泳池安排）', url: 'https://www.kyushu-u.ac.jp/ja/education/life/institution/gym1/' },
    { text: '九州大学总合体育馆室内泳池使用说明', url: 'https://www.kyushu-u.ac.jp/f/48426/20220616_%E3%83%97%E3%83%BC%E3%83%AB%E3%81%AE%E5%88%A9%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.pdf' }
  ],
  moving: [
    { text: '九州大学国际学生支援：搬家后必要手续', url: 'https://isc.kyushu-u.ac.jp/invitation/support/accommodation.php' },
    { text: '九州大学各学部/学府学生担当窗口', url: 'https://www.kyushu-u.ac.jp/ja/contact/student_section/' }
  ]
};

const SOURCE_LABELS = {
  dorm: {
    zh: ['学生寄宿舎利用规约', '宿舍信息与管理人室电话', '国际学生宿舍联系资料', '校园紧急联络先'],
    ja: ['学生寄宿舎利用心得', '宿舎情報・管理人室の電話番号', '留学生向け宿舎連絡資料', '学内の緊急連絡先'],
    en: ['Student dormitory rules', 'Dormitory information and manager contacts', 'International student housing contacts', 'Campus emergency contacts'],
    ko: ['학생 기숙사 이용 규정', '기숙사 정보 및 관리실 전화번호', '유학생 기숙사 연락 안내', '교내 긴급 연락처'],
    es: ['Normas de las residencias estudiantiles', 'Residencias y teléfonos de administración', 'Contactos de alojamiento para estudiantes internacionales', 'Contactos de emergencia del campus']
  },
  sports: {
    zh: ['体育设施与当月开放安排', '室内泳池使用规则'],
    ja: ['体育施設・当月の開放予定', '屋内プール利用規則'],
    en: ['Sports facilities and current monthly schedule', 'Indoor pool usage rules'],
    ko: ['체육 시설 및 월간 개방 일정', '실내 수영장 이용 규정'],
    es: ['Instalaciones deportivas y horario mensual vigente', 'Normas de uso de la piscina cubierta']
  },
  moving: {
    zh: ['搬家后必要手续', '各学部/学府学生担当窗口'],
    ja: ['引越し後に必要な手続き', '各学部・学府の学生担当窓口'],
    en: ['Procedures required after moving', 'Student affairs contacts by department'],
    ko: ['이사 후 필요한 절차', '학부·대학원별 학생 담당 창구'],
    es: ['Trámites necesarios después de mudarse', 'Contactos de asuntos estudiantiles por departamento']
  }
};

/**
 * 将来源元数据与对应语言的链接标题组合，确保五语链接 URL 一致。
 * @param {'dorm'|'sports'|'moving'} sectionKey 来源组。
 * @param {'zh'|'ja'|'en'|'ko'|'es'} language 区块语言。
 * @returns {{text:string,url:string}[]} 可直接交给 links 区块的条目。
 */
function sourceLinks(sectionKey, language) {
  if (!LANGUAGES.includes(language)) throw new Error(`Unknown language: ${language}`);
  return SOURCES[sectionKey].map((source, index) => ({
    text: SOURCE_LABELS[sectionKey][language][index],
    url: source.url
  }));
}

const sections = [
  {
    key: 'dorm-help',
    category: '3',
    headingId: 'm7dorm0',
    scope: 'ito',
    blocks: {
      zh: [
        { id: 'm7dorm0', type: 'heading', text: '宿舍钥匙与报修：按住所处理' },
        { id: 'm7dormIntro', type: 'paragraph', text: '本节仅覆盖伊都校区 D1、D2、D3 与伊都協奏館；SETTLE 和其他校区住宿的管理、夜间规则不同，请按各自入住资料联系。' },
        { id: 'm7dorm1', type: 'subheading', text: '钥匙遗失或反锁' },
        { id: 'm7dorm2', type: 'list', items: [
          { text: '遗失钥匙或门卡：九大学生寄宿舎公开规约要求立即向本栋管理人报告；补发手续及是否收费按本人住所的当前入住说明确认。' },
          { text: '反锁或夜间求助：先联系本住所管理人室。公开资料未给出适用于所有宿舍的开锁步骤或统一夜间电话；请按本人入住材料核实当期联系人，不套用其他宿舍的规则。' }
        ] },
        { id: 'm7dorm3', type: 'subheading', text: '日常报修与校区安全急事' },
        { id: 'm7dorm4', type: 'list', items: [
          { text: '漏水、设备损坏等日常故障：联系所属宿舍管理人室确认报修方式，并说明房间与故障情况。' },
          { text: '伊都校区发生火灾、急救或犯罪等人身安全紧急情况：先确保安全，拨 119（消防/急救）或 110（警察），再联系伊都校区警务员室 092-802-2305。该电话用于校区紧急事件，不是日常宿舍维修热线。' }
        ] },
        { id: 'm7dorm5', type: 'fee_table', headers: ['伊都学生寄宿舎', '管理人室电话'], rows: [
          ['D1', '092-807-7188'],
          ['D2', '092-806-6841'],
          ['D3', '092-807-7072'],
          ['伊都協奏館', '092-806-5779']
        ] },
        { id: 'm7dormLinks', type: 'links', items: sourceLinks('dorm', 'zh') }
      ],
      ja: [
        { id: 'm7dorm0', type: 'heading', text: '寮の鍵・修理：住居ごとに連絡' },
        { id: 'm7dormIntro', type: 'paragraph', text: 'この案内は伊都キャンパスの学生寄宿舎 D1、D2、D3、伊都協奏館のみを対象とします。SETTLE と他地区の宿舎は管理・夜間対応が異なるため、各自の入居資料に記載された連絡先を確認してください。' },
        { id: 'm7dorm1', type: 'subheading', text: '鍵の紛失・締め出し' },
        { id: 'm7dorm2', type: 'list', items: [
          { text: '鍵またはカードを紛失した場合：九州大学の公開規則では、直ちに当該棟の管理人へ届け出るよう案内されています。再発行の手続きや費用は、本人の住居の最新入居資料で確認してください。' },
          { text: '締め出し・夜間の相談：まず自分の住居の管理人室へ連絡してください。全宿舎共通の解錠手順や夜間電話は公開資料にないため、本人の入居資料で現在の連絡先を確認してください。他の宿舎の手順を流用しないでください。' }
        ] },
        { id: 'm7dorm3', type: 'subheading', text: '日常の修理とキャンパスの緊急事態' },
        { id: 'm7dorm4', type: 'list', items: [
          { text: '漏水や設備の故障など日常の不具合：住んでいる棟の管理人室に連絡し、部屋番号と状況を伝えて修理方法を確認してください。' },
          { text: '伊都キャンパスで火災、救急、犯罪など人の安全に関わる緊急事態が起きた場合：まず安全を確保し、119（消防・救急）または110（警察）へ通報してから、伊都キャンパス警務員室 092-802-2305 に連絡してください。この電話はキャンパスの緊急事態用で、日常の寮修理窓口ではありません。' }
        ] },
        { id: 'm7dorm5', type: 'fee_table', headers: ['伊都学生寄宿舎', '管理人室電話'], rows: [
          ['D1', '092-807-7188'],
          ['D2', '092-806-6841'],
          ['D3', '092-807-7072'],
          ['伊都協奏館', '092-806-5779']
        ] },
        { id: 'm7dormLinks', type: 'links', items: sourceLinks('dorm', 'ja') }
      ],
      en: [
        { id: 'm7dorm0', type: 'heading', text: 'Dorm keys and repairs: contact your residence' },
        { id: 'm7dormIntro', type: 'paragraph', text: 'This section covers only Ito Campus student residences D1, D2, D3, and Ito Kyosokan. SETTLE and residences on other campuses have separate management and after-hours arrangements; use the contact details in your own move-in materials.' },
        { id: 'm7dorm1', type: 'subheading', text: 'Lost keys or being locked out' },
        { id: 'm7dorm2', type: 'list', items: [
          { text: 'Lost key or access card: Kyushu University’s published dormitory rules say to report the loss to your building manager immediately. Confirm any replacement steps or charges in the current move-in information for your residence.' },
          { text: 'Locked out or need help at night: contact the manager’s office for your residence first. Public materials do not give one unlocking procedure or after-hours phone number for every residence, so check the current contact details in your own move-in materials. Do not assume another residence follows the same procedure.' }
        ] },
        { id: 'm7dorm3', type: 'subheading', text: 'Routine repairs and campus safety emergencies' },
        { id: 'm7dorm4', type: 'list', items: [
          { text: 'For routine problems such as leaks or damaged equipment, contact your residence manager’s office to confirm how to request a repair, and describe your room and the problem.' },
          { text: 'For a fire, medical emergency, crime, or other immediate safety incident on Ito Campus, get to safety, call 119 (fire/ambulance) or 110 (police), then contact the Ito Campus security office at 092-802-2305. This number is for campus emergencies, not routine dorm repairs.' }
        ] },
        { id: 'm7dorm5', type: 'fee_table', headers: ['Ito student residence', 'Manager’s office'], rows: [
          ['D1', '092-807-7188'],
          ['D2', '092-806-6841'],
          ['D3', '092-807-7072'],
          ['Ito Kyosokan', '092-806-5779']
        ] },
        { id: 'm7dormLinks', type: 'links', items: sourceLinks('dorm', 'en') }
      ],
      ko: [
        { id: 'm7dorm0', type: 'heading', text: '기숙사 열쇠·수리: 거주지별 연락' },
        { id: 'm7dormIntro', type: 'paragraph', text: '이 안내는 이토 캠퍼스 학생 기숙사 D1, D2, D3, 이토 교소칸에만 적용됩니다. SETTLE 및 다른 캠퍼스 기숙사는 관리와 야간 대응이 다르므로 본인의 입주 안내에 있는 연락처를 확인하세요.' },
        { id: 'm7dorm1', type: 'subheading', text: '열쇠 분실 또는 문이 잠긴 경우' },
        { id: 'm7dorm2', type: 'list', items: [
          { text: '열쇠나 출입 카드를 분실한 경우: 규슈대학의 공개 기숙사 규정은 즉시 해당 건물 관리인에게 알리도록 안내합니다. 재발급 절차와 비용은 본인 기숙사의 최신 입주 안내에서 확인하세요.' },
          { text: '문이 잠겨 들어갈 수 없거나 야간에 도움이 필요한 경우: 먼저 본인 기숙사의 관리실에 연락하세요. 공개 자료에는 모든 기숙사에 공통으로 적용되는 문 열기 절차나 야간 전화번호가 없습니다. 본인의 최신 입주 안내에서 연락처를 확인하고 다른 기숙사의 절차를 적용하지 마세요.' }
        ] },
        { id: 'm7dorm3', type: 'subheading', text: '일상 수리와 캠퍼스 안전 긴급상황' },
        { id: 'm7dorm4', type: 'list', items: [
          { text: '누수나 설비 고장 등 일상적인 문제는 해당 기숙사 관리실에 연락해 수리 신청 방법을 확인하고 방 번호와 상황을 설명하세요.' },
          { text: '이토 캠퍼스에서 화재, 응급환자, 범죄 등 즉각적인 안전 문제가 발생하면 먼저 안전을 확보하고 119(소방·구급) 또는 110(경찰)에 신고한 뒤 이토 캠퍼스 경무원실 092-802-2305에 연락하세요. 이 번호는 캠퍼스 긴급상황용이며 일상적인 기숙사 수리 창구가 아닙니다.' }
        ] },
        { id: 'm7dorm5', type: 'fee_table', headers: ['이토 학생 기숙사', '관리실 전화'], rows: [
          ['D1', '092-807-7188'],
          ['D2', '092-806-6841'],
          ['D3', '092-807-7072'],
          ['이토 교소칸', '092-806-5779']
        ] },
        { id: 'm7dormLinks', type: 'links', items: sourceLinks('dorm', 'ko') }
      ],
      es: [
        { id: 'm7dorm0', type: 'heading', text: 'Llaves y reparaciones: contacta con tu residencia' },
        { id: 'm7dormIntro', type: 'paragraph', text: 'Esta sección cubre solo las residencias estudiantiles D1, D2, D3 e Ito Kyosokan del campus de Ito. SETTLE y las residencias de otros campus tienen una gestión y atención nocturna distintas; usa los contactos de tus documentos de entrada.' },
        { id: 'm7dorm1', type: 'subheading', text: 'Pérdida de llaves o bloqueo' },
        { id: 'm7dorm2', type: 'list', items: [
          { text: 'Si pierdes la llave o la tarjeta de acceso: las normas públicas de las residencias de Kyushu University indican que debes avisar inmediatamente al administrador del edificio. Confirma el procedimiento de reposición y cualquier coste en la información de entrada vigente de tu residencia.' },
          { text: 'Si te quedas fuera o necesitas ayuda de noche: contacta primero con la oficina de administración de tu residencia. La información pública no establece un procedimiento de apertura ni un teléfono nocturno común a todas las residencias; consulta los datos vigentes en tus documentos de entrada y no apliques el procedimiento de otra residencia.' }
        ] },
        { id: 'm7dorm3', type: 'subheading', text: 'Reparaciones habituales y emergencias de seguridad' },
        { id: 'm7dorm4', type: 'list', items: [
          { text: 'Para problemas habituales, como fugas o equipos averiados, contacta con la oficina de administración de tu residencia para confirmar cómo solicitar la reparación e indica la habitación y el problema.' },
          { text: 'Ante un incendio, una urgencia médica, un delito u otro peligro inmediato en el campus de Ito, ponte a salvo, llama al 119 (bomberos/ambulancia) o al 110 (policía) y después contacta con la oficina de seguridad del campus de Ito: 092-802-2305. Este teléfono es para emergencias del campus, no para reparaciones habituales de la residencia.' }
        ] },
        { id: 'm7dorm5', type: 'fee_table', headers: ['Residencia estudiantil de Ito', 'Oficina de administración'], rows: [
          ['D1', '092-807-7188'],
          ['D2', '092-806-6841'],
          ['D3', '092-807-7072'],
          ['Ito Kyosokan', '092-806-5779']
        ] },
        { id: 'm7dormLinks', type: 'links', items: sourceLinks('dorm', 'es') }
      ]
    },
    sources: SOURCES.dorm,
    notes: [
      '融合点：guide-life.json 已有“宿舍报修（漏水/发霉）”段落，本片段只把现有事项压成钥匙、日常报修和安全急事短点，不复述设备或营业时间。',
      '管理时间存在官方公开材料差异：2022 年《伊都キャンパス学生寄宿舎利用心得》写 D1/D2/伊都協奏館管理人 24 小时常驻、D3 为 8:30–19:30 且夜间紧急联络 D2；2025 年留学生生活资料写 9:00–18:00、时间外由警备员应对。片段不写任一时段或夜间转接电话，需管理方确认。',
      '公开规约要求遗失钥匙立即报告；规约提到再发行费用，但未找到可确认的当前金额/收费口径，因此用户正文不写费用结论。未找到各住所的反锁开门步骤。SETTLE 页面虽列为独立住所并有 24h 支援费用，但未找到公开的钥匙遗失/夜间故障联络流程；其他校区宿舍同样不纳入伊都规约。',
      '官方紧急联络页给出伊都校区 110/119 后的警务员室联系方式；校区普通设施维修未发现统一学生入口，因此正文不把警务员室作为一般报修渠道。'
    ]
  },
  {
    key: 'sports-use',
    category: '10',
    headingId: 'm7sport0',
    scope: 'ito',
    blocks: {
      zh: [
        { id: 'm7sport0', type: 'heading', text: '伊都体育设施首次使用：先核对资格' },
        { id: 'm7sportIntro', type: 'paragraph', text: '本节仅说明伊都校区。体育馆、训练室与泳池的使用要求不同，不把某一设施规则套到其他校区或所有训练室。' },
        { id: 'm7sport1', type: 'subheading', text: '体育馆与健身/训练室' },
        { id: 'm7sport2', type: 'list', items: [
          { text: '九大学生使用伊都地区体育设施：学校说明一般学生可在体育课和公认学生团体活动未占用的时段使用；开放时间见地图设施卡片及官方当月安排，具体场地条件先向窗口确认。' },
          { text: '健身房/训练室：公开资料没有说明各训练室统一的首次讲习、登记或预约规则；先联系设施窗口确认资格与流程，不要默认可直接入场。' }
        ] },
        { id: 'm7sport3', type: 'subheading', text: '总合体育馆室内泳池：首次到场' },
        { id: 'm7sport4', type: 'steps', items: [
          { title: '确认资格并登记', desc: '公开泳池规则将九州大学学生列为利用资格者；到场后在总合体育馆事务室出示学生证，并填写利用者名簿。' },
          { title: '遵守入水要求', desc: '按公开规则，入水前淋浴并佩戴泳帽；同时遵守监视员指示，确认本人健康状况适合游泳。' },
          { title: '出发前查当月安排', desc: '泳池一般开放予定按月发布，并可能受课程或活动影响。每次前往前打开官方体育设施页核对当月安排；公开资料未列学生首次讲习或预约步骤，疑问可先问总合体育馆事务室 092-802-5994。' }
        ] },
        { id: 'm7sport5', type: 'fee_table', headers: ['伊都地区公开咨询窗口', '电话'], rows: [
          ['伊都地区总合体育馆事务室', '092-802-5994'],
          ['伊都地区课外活动设施Ⅱ管理人室', '092-802-2420']
        ] },
        { id: 'm7sportLinks', type: 'links', items: sourceLinks('sports', 'zh') }
      ],
      ja: [
        { id: 'm7sport0', type: 'heading', text: '伊都の体育施設を初めて使う前に資格を確認' },
        { id: 'm7sportIntro', type: 'paragraph', text: 'この案内は伊都キャンパスのみを対象とします。体育館、トレーニング室、プールで利用条件が異なるため、ある施設の規則を他地区や全てのトレーニング室に当てはめないでください。' },
        { id: 'm7sport1', type: 'subheading', text: '体育館・トレーニング室' },
        { id: 'm7sport2', type: 'list', items: [
          { text: '九州大学の学生が伊都地区の体育施設を利用する場合：大学は一般学生も授業や公認学生団体の活動がない時間に利用可能と案内しています。開放時間は地図の施設カードと大学の当月予定で確認し、施設ごとの条件は窓口に問い合わせてください。' },
          { text: 'ジム・トレーニング室：施設ごとに共通する初回講習、登録、予約の手順は公開資料で確認できません。利用資格と手順を施設窓口に確認してから利用してください。' }
        ] },
        { id: 'm7sport3', type: 'subheading', text: '総合体育館屋内プール：初回利用' },
        { id: 'm7sport4', type: 'steps', items: [
          { title: '資格を確認して受付', desc: '公開されているプール規則では九州大学の学生は利用資格者です。到着後、総合体育館事務室で学生証を提示し、利用者名簿に記入してください。' },
          { title: '入水ルールを守る', desc: '公開規則に従い、入水前にシャワーを浴び、スイミングキャップを着用してください。監視員の指示に従い、健康状態を確認して利用してください。' },
          { title: '当月の開放予定を確認', desc: '一般開放予定は月ごとに公開され、授業や行事で変更されることがあります。利用前に大学の体育施設ページで当月の予定を確認してください。学生向けの初回講習や予約手順は公開資料に記載がないため、不明点は総合体育館事務室 092-802-5994 へ確認してください。' }
        ] },
        { id: 'm7sport5', type: 'fee_table', headers: ['伊都地区の公開窓口', '電話'], rows: [
          ['伊都地区総合体育館事務室', '092-802-5994'],
          ['伊都地区課外活動施設Ⅱ管理人室', '092-802-2420']
        ] },
        { id: 'm7sportLinks', type: 'links', items: sourceLinks('sports', 'ja') }
      ],
      en: [
        { id: 'm7sport0', type: 'heading', text: 'Before your first visit to Ito sports facilities, check eligibility' },
        { id: 'm7sportIntro', type: 'paragraph', text: 'This section covers Ito Campus only. Gyms, training rooms, and the pool may have different conditions; do not apply one facility’s rules to other campuses or every training room.' },
        { id: 'm7sport1', type: 'subheading', text: 'Gymnasium and fitness/training rooms' },
        { id: 'm7sport2', type: 'list', items: [
          { text: 'For Kyushu University students using Ito sports facilities: the university says general students may use them when there are no classes or activities by officially recognized student groups. Check opening times in the map facility card and the current university schedule, and confirm room-specific conditions with the facility office.' },
          { text: 'Fitness and training rooms: public information does not give a single first-use course, registration, or reservation procedure for every room. Confirm eligibility and the process with the facility office before going; do not assume walk-in access.' }
        ] },
        { id: 'm7sport3', type: 'subheading', text: 'Indoor pool at the General Gymnasium: first visit' },
        { id: 'm7sport4', type: 'steps', items: [
          { title: 'Check eligibility and register', desc: 'The published pool rules list Kyushu University students as eligible. On arrival, show your student ID at the General Gymnasium office and enter your name in the user register.' },
          { title: 'Follow entry requirements', desc: 'The published rules require a shower before swimming and a swim cap. Follow the lifeguard’s instructions and use the pool only when your health permits.' },
          { title: 'Check the current monthly schedule', desc: 'The public-use schedule is posted by month and may change for classes or events. Check the university sports facilities page before each visit. Public information does not list a first-use course or student reservation procedure; ask the General Gymnasium office at 092-802-5994 if unsure.' }
        ] },
        { id: 'm7sport5', type: 'fee_table', headers: ['Published Ito contact offices', 'Phone'], rows: [
          ['Ito General Gymnasium office', '092-802-5994'],
          ['Ito Extracurricular Activities Facility II manager’s office', '092-802-2420']
        ] },
        { id: 'm7sportLinks', type: 'links', items: sourceLinks('sports', 'en') }
      ],
      ko: [
        { id: 'm7sport0', type: 'heading', text: '이토 체육시설 첫 이용 전 자격 확인' },
        { id: 'm7sportIntro', type: 'paragraph', text: '이 안내는 이토 캠퍼스에만 적용됩니다. 체육관, 트레이닝실, 수영장의 이용 조건은 다를 수 있으므로 한 시설의 규정을 다른 캠퍼스나 모든 트레이닝실에 적용하지 마세요.' },
        { id: 'm7sport1', type: 'subheading', text: '체육관·헬스/트레이닝실' },
        { id: 'm7sport2', type: 'list', items: [
          { text: '규슈대학 학생의 이토 체육시설 이용: 대학 안내에 따르면 일반 학생은 체육 수업이나 공인 학생단체 활동이 없는 시간에 이용할 수 있습니다. 개방 시간은 지도 시설 카드와 대학의 당월 일정에서 확인하고, 시설별 조건은 창구에 문의하세요.' },
          { text: '헬스장·트레이닝실: 공개 자료에는 모든 시설에 공통되는 첫 이용 강습, 등록 또는 예약 절차가 안내되어 있지 않습니다. 바로 입장할 수 있다고 가정하지 말고 이용 자격과 절차를 시설 창구에 확인하세요.' }
        ] },
        { id: 'm7sport3', type: 'subheading', text: '종합체육관 실내 수영장: 첫 이용' },
        { id: 'm7sport4', type: 'steps', items: [
          { title: '자격 확인 및 등록', desc: '공개 수영장 규정은 규슈대학 학생을 이용 자격자로 안내합니다. 도착 후 종합체육관 사무실에서 학생증을 제시하고 이용자 명부에 이름을 적으세요.' },
          { title: '입수 규칙 준수', desc: '공개 규정에 따라 입수 전에 샤워하고 수영모를 착용하세요. 감시원의 안내를 따르고 건강 상태가 수영에 적합한지 확인하세요.' },
          { title: '당월 개방 일정 확인', desc: '일반 개방 일정은 매월 게시되며 수업이나 행사에 따라 달라질 수 있습니다. 방문할 때마다 대학 체육시설 페이지에서 당월 일정을 확인하세요. 학생 대상 첫 이용 강습이나 예약 절차는 공개 자료에 없으므로 문의는 종합체육관 사무실 092-802-5994로 하세요.' }
        ] },
        { id: 'm7sport5', type: 'fee_table', headers: ['이토 지역 공개 문의 창구', '전화'], rows: [
          ['이토 종합체육관 사무실', '092-802-5994'],
          ['이토 과외활동시설 II 관리실', '092-802-2420']
        ] },
        { id: 'm7sportLinks', type: 'links', items: sourceLinks('sports', 'ko') }
      ],
      es: [
        { id: 'm7sport0', type: 'heading', text: 'Antes de tu primera visita a las instalaciones deportivas de Ito, confirma el acceso' },
        { id: 'm7sportIntro', type: 'paragraph', text: 'Esta sección cubre solo el campus de Ito. El gimnasio, las salas de entrenamiento y la piscina pueden tener condiciones distintas; no apliques las reglas de una instalación a otros campus ni a todas las salas.' },
        { id: 'm7sport1', type: 'subheading', text: 'Gimnasio y salas de fitness/entrenamiento' },
        { id: 'm7sport2', type: 'list', items: [
          { text: 'Para estudiantes de Kyushu University que usan instalaciones deportivas de Ito: la universidad indica que pueden utilizarlas cuando no haya clases ni actividades de grupos estudiantiles reconocidos. Consulta los horarios en la tarjeta de la instalación del mapa y en el calendario mensual vigente, y confirma las condiciones de cada sala con la oficina.' },
          { text: 'Salas de fitness y entrenamiento: la información pública no establece un curso inicial, registro o sistema de reservas común para todas las salas. Confirma los requisitos y el procedimiento con la oficina antes de ir; no des por hecho que se permite entrar sin aviso.' }
        ] },
        { id: 'm7sport3', type: 'subheading', text: 'Piscina cubierta del Gimnasio General: primera visita' },
        { id: 'm7sport4', type: 'steps', items: [
          { title: 'Confirma el acceso y regístrate', desc: 'Las normas públicas de la piscina incluyen a los estudiantes de Kyushu University entre las personas autorizadas. Al llegar, muestra tu tarjeta de estudiante en la oficina del Gimnasio General y escribe tu nombre en el registro de usuarios.' },
          { title: 'Cumple las reglas de entrada', desc: 'Las normas publicadas requieren ducharse antes de nadar y llevar gorro de natación. Sigue las instrucciones del personal de vigilancia y utiliza la piscina solo si tu salud lo permite.' },
          { title: 'Consulta el calendario mensual vigente', desc: 'El calendario de apertura general se publica cada mes y puede cambiar por clases o eventos. Antes de cada visita, consulta el calendario del mes en la página oficial de instalaciones deportivas. La información pública no indica un curso inicial ni un procedimiento de reserva para estudiantes; pregunta en la oficina del Gimnasio General: 092-802-5994.' }
        ] },
        { id: 'm7sport5', type: 'fee_table', headers: ['Oficinas publicadas de Ito', 'Teléfono'], rows: [
          ['Oficina del Gimnasio General de Ito', '092-802-5994'],
          ['Oficina de administración de la Instalación II de actividades extracurriculares de Ito', '092-802-2420']
        ] },
        { id: 'm7sportLinks', type: 'links', items: sourceLinks('sports', 'es') }
      ]
    },
    sources: SOURCES.sports,
    notes: [
      '融合点：h5-mvp/data/buildings.json 的 B006 将体育馆描述为体育课、社团活动；indoor-facilities.json 已标出总合体育馆训练室、室内泳池与松濤錬成場训练室，但设施标签不等于使用资格或首次讲习规则。',
      '伊都体育设施页面公开一般学生使用条件及两个咨询窗口；泳池规则 PDF 仍由学校当前体育设施页链接，写有学生资格、现场出示学生证和登记名簿。体育开放时间不在片段重复，沿用现有地图设施卡片与大学当月安排。',
      '公开资料未确认健身/训练室统一的首次登记、讲习或预约；泳池也未列学生首次讲习/预约步骤。仅泳池流程达到可短写程度，其余必须向对应窗口确认。',
      '体育设施页链接按月更新的泳池开放安排。本片段不写任何固定泳池开放时段、历史月份安排或旧预约时间。'
    ]
  },
  {
    key: 'moving-campus',
    category: '2',
    headingId: 'm7move0',
    scope: 'university',
    blocks: {
      zh: [
        { id: 'm7move0', type: 'heading', text: '搬家后同步更新校内地址资料' },
        { id: 'm7moveIntro', type: 'paragraph', text: '本节确认适用于九州大学国际学生及研究人员：除区役所办理地址与在留卡手续外，还要另行通知大学所属部门。向市区町村申报不代表校内资料已更新；其他身份请向所属窗口确认。' },
        { id: 'm7move1', type: 'steps', items: [
          { title: '在读学生联系学生担当', desc: '向所属学部或学府的学生担当窗口报告地址变更。' },
          { title: '研究者联系部门窗口', desc: '向所属部门负责窗口报告地址变更。公开指引没有说明使用哪个线上表单/系统，也未确认各校内记录会自动联动；请向窗口确认办理方法及需要更新的项目。' }
        ] },
        { id: 'm7moveLinks', type: 'links', items: sourceLinks('moving', 'zh') }
      ],
      ja: [
        { id: 'm7move0', type: 'heading', text: '引越し後に学内の住所情報も更新' },
        { id: 'm7moveIntro', type: 'paragraph', text: 'この案内で確認できた対象は九州大学の留学生・研究者です。区役所での住所・在留カードの手続きとは別に、大学の所属部局にも住所変更を届け出てください。自治体への届出だけで学内情報も更新されたとは限りません。他の身分の方は所属窓口に確認してください。' },
        { id: 'm7move1', type: 'steps', items: [
          { title: '在学生は学生担当窓口へ', desc: '所属する学部・学府の学生担当窓口に住所変更を届け出てください。' },
          { title: '研究者は部局の担当窓口へ', desc: '所属部局の担当窓口に住所変更を届け出てください。公開案内ではオンライン申請フォームやシステム名、学内情報の自動連携は確認できません。窓口に手続方法と更新対象を確認してください。' }
        ] },
        { id: 'm7moveLinks', type: 'links', items: sourceLinks('moving', 'ja') }
      ],
      en: [
        { id: 'm7move0', type: 'heading', text: 'Update your university address details after moving' },
        { id: 'm7moveIntro', type: 'paragraph', text: 'This guidance is confirmed for Kyushu University international students and researchers: in addition to address and residence-card procedures at the local ward office, notify your university department. A local address registration does not by itself confirm that university records have been updated. If you have another status, check with your department.' },
        { id: 'm7move1', type: 'steps', items: [
          { title: 'Students: contact student affairs', desc: 'Report your new address to the student affairs section of your faculty or graduate school.' },
          { title: 'Researchers: contact your department', desc: 'Report your new address to the section in charge of your department. The public guidance does not name an online form or system, or confirm that university records update automatically; ask the section how to submit the change and which records need updating.' }
        ] },
        { id: 'm7moveLinks', type: 'links', items: sourceLinks('moving', 'en') }
      ],
      ko: [
        { id: 'm7move0', type: 'heading', text: '이사 후 교내 주소 정보도 업데이트' },
        { id: 'm7moveIntro', type: 'paragraph', text: '이 안내에서 확인된 대상은 규슈대학교 유학생과 연구자입니다. 구청의 주소·재류카드 절차와 별도로 대학 소속 부서에도 주소 변경을 알려야 합니다. 구청에 신고했다고 교내 정보까지 갱신된 것은 아닙니다. 다른 신분은 소속 창구에 확인하세요.' },
        { id: 'm7move1', type: 'steps', items: [
          { title: '재학생은 학생 담당 창구에 연락', desc: '소속 학부 또는 대학원의 학생 담당 창구에 새 주소를 신고하세요.' },
          { title: '연구자는 소속 부서 창구에 연락', desc: '소속 부서의 담당 창구에 새 주소를 신고하세요. 공개 안내에는 온라인 양식이나 시스템 이름, 교내 정보의 자동 연동 여부가 나와 있지 않습니다. 제출 방법과 갱신해야 할 정보를 창구에 확인하세요.' }
        ] },
        { id: 'm7moveLinks', type: 'links', items: sourceLinks('moving', 'ko') }
      ],
      es: [
        { id: 'm7move0', type: 'heading', text: 'Actualiza tus datos universitarios después de mudarte' },
        { id: 'm7moveIntro', type: 'paragraph', text: 'Esta guía está confirmada para estudiantes internacionales e investigadores de la Universidad de Kyushu: además de los trámites de domicilio y tarjeta de residencia en la oficina municipal, debes avisar al departamento de la universidad. El registro municipal no confirma por sí solo que los datos universitarios estén actualizados. Si tienes otra condición, consulta con tu departamento.' },
        { id: 'm7move1', type: 'steps', items: [
          { title: 'Estudiantes: contacta con asuntos estudiantiles', desc: 'Comunica tu nueva dirección a la sección de asuntos estudiantiles de tu facultad o escuela de posgrado.' },
          { title: 'Investigadores: contacta con tu departamento', desc: 'Comunica tu nueva dirección a la sección responsable de tu departamento. La información pública no indica un formulario o sistema en línea ni confirma que los registros universitarios se actualicen automáticamente; pregunta cómo presentar el cambio y qué datos hay que actualizar.' }
        ] },
        { id: 'm7moveLinks', type: 'links', items: sourceLinks('moving', 'es') }
      ]
    },
    sources: SOURCES.moving,
    notes: [
      '融合点：guide-residence.json 已涵盖迁入/在留卡地址变更和邮局转送；本片段只补充大学内部通知，不复述市役所手续。',
      '适用对象限定为官方页面明确覆盖的九州大学国际学生及研究人员：搬家后学生联系学部/学府学生担当，研究者联系部门负责窗口；不据此宣称所有身份均有相同义务。',
      '公开资料没有指出 Campusmate、SSO 或其他具体地址更新系统，也未说明校内各资料自动同步；不替用户登录或尝试提交。'
    ]
  }
];

// 导出审阅片段，不调用内容生成器，也不写入共享正文、译文包或构建产物。
module.exports = { CHECKED_AT, sections };
