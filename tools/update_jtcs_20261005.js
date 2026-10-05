#!/usr/bin/env node
'use strict';
/** 2026 后期 JTCs 已核对字面内容的机械同步器；默认预览，--apply 才写本地文件。
 * 只替换既有 JTCs 区块与其译文，保留其他指南、校历、作者及用户已有修改。
 * 来源：2026 后期海报、ISC 当期 6 页指南；不操作报名系统或线上数据库。 */
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const root = path.resolve(__dirname, '..');
const pdf = 'https://isc.kyushu-u.ac.jp/center/kanri/wp-content/uploads/2026/10/04_JTCs%E3%82%AC%E3%82%A4%E3%83%89_2026%E5%BE%8C%E6%9C%9F.pdf';
const overview = 'https://isc.kyushu-u.ac.jp/center/jtcs/';
const registration = 'https://jlc.kyushu-u.ac.jp/JTCsi/page/placement/ButtonPlacement.aspx';
const mail = 'japanesecourses@jimu.kyushu-u.ac.jp';
const copy = {
  zh: {
    heading: '⑨ JTCs 日语课：2026 后期报名',
    intro: '想补强日语，可以关注 **JTCs（非学分课程）**。2026 后期面向九大在籍留学生，包括交换留学生、研究生、硕士、博士及学部生；修读 JTCs **不能取得九大学分**。JACs 是另一类学分课程，资格与手续请另查其官方页面，不要混用 JTCs 的日期。',
    timeline: '2026 后期｜以下均为日本时间（JST）。\n新规登记＋在线分班测试：**10/16（金）12:00—10/21（水）23:59**。两项均须在期限内完成，仅登记不等于完成申请。\n测试结果：**10/23（金）下午**邮件通知；未公布具体时刻。\n选班登记（class select）：**10/26（一）12:30—10/27（二）23:59**，先到先得，满员即关闭。\n课程期：**2026/11/9—2027/2/8**。这不是每天上课；本人首次课、上课日及休课安排按所选班级课表确认。',
    list: [
      '课程安排：每节 90 分钟、每周 2 次、共 10 周；Japanese 1—7 共 7 级。登记需要学生番号；零基础者在系统中选择从 Japanese 1 开始的选项。',
      '校区与形式：本期指南涵盖伊都与病院校区。伊都线下课程通常在 Center Zone 5；病院校区学生请选择 Zoom 或混合班。教室号或 Zoom ID 由教师在开课前通知。',
      '选班前核对：确认与本人课程不冲突，选定后可能不能更改；不能同时修读 JACs、JLCC、JTAS、筑紫或大桥校区的日语补讲课程。',
      '教材与证明：官方要求第一次课前不要先买教材，之后按教师指定版本准备。课程不认定九大学分；需要受讲证明书者请在离开九大前申请。交换生的原校学分认定请咨询原校。'
    ],
    contact: '咨询：JTCs office ' + mail + '（注明姓名、校区、学生番号）。系统或资格有疑问时先咨询；不要自行假定能逾期报名。',
    linkLabels: ['九大日语课程总览（按身份与校区选择）','JTCs 官方课程说明（非学分）','JACs 官方课程说明（学分课程）','JTCs 在线登记与分班测试入口','2026 后期 JTCs 指南（报名、课表与授课日历）'],
    names: ['JTCs 新规登记与在线分班测试','JTCs 分班测试结果通知','JTCs 选班登记','JTCs 后期课程期开始','JTCs 后期课程期结束'],
    notes: ['10/16 12:00—10/21 23:59（JST）。期间内完成新规登记与在线分班测试；这不是选班阶段。','10/23 下午（JST）邮件通知结果；官方未给具体时刻，请查看登记邮箱。','10/26 12:30—10/27 23:59（JST）。按测试结果选班；先到先得，满员关闭。','2026/11/9—2027/2/8 为课程期，并非每天授课或所有人的首次课都是 11/9。各班课表及休课日见官方指南。','2027/2/8 为官方课程期结束；本人最后一节课按所选班级课表确认。'],
    resourceTitle: 'JTCs 日语课｜2026 后期报名', resourceDesc: '10/16—10/21 登记与分班测试；10/26—10/27 另行选班。非学分，查看精确时刻与课程安排。'
  },
  ja: {
    heading: '⑨ JTCs 日本語補講：2026 年度後期の申込',
    intro: '日本語を学びたい方は **JTCs（単位不認定）**をご確認ください。2026 年度後期は九州大学に在籍する留学生（交換留学生、研究生、修士・博士課程学生、学部生を含む）が対象です。JTCs を受講しても **九州大学の単位は取得できません**。JACs は別の単位認定コースです。対象・手続きは JACs の公式ページで確認し、JTCs の日程を流用しないでください。',
    timeline: '2026 年度後期｜時刻はすべて日本時間（JST）です。\n新規登録＋オンラインプレースメントテスト：**10/16（金）12:00—10/21（水）23:59**。期間内に両方を完了してください。登録だけでは申込完了になりません。\n結果通知：**10/23（金）午後**にメールで届きます。具体的な時刻は公表されていません。\nクラス登録（class select）：**10/26（月）12:30—10/27（火）23:59**。先着順で、定員に達すると締め切られます。\n開講期間：**2026/11/9—2027/2/8**。毎日授業があるわけではありません。初回授業、授業日、休講日は選択したクラスの時間割で確認してください。',
    list: [
      '授業：1 回 90 分、週 2 回、10 週間。Japanese 1—7 の 7 レベルです。登録には学生番号が必要です。ゼロから学ぶ方はシステムで Japanese 1 から学ぶ選択肢を選んでください。',
      'キャンパスと形式：今期のガイドは伊都・病院キャンパスが対象です。伊都の対面授業は通常センター 5 号館で行われます。病院キャンパスの方は Zoom またはハイブリッドのクラスを選んでください。教室番号・Zoom ID は開講前に担当教員から通知されます。',
      '登録前の確認：他の授業と重ならない時間割を選んでください。登録後は変更できない場合があります。JACs、JLCC、JTAS、筑紫・大橋キャンパスの日本語補講との同時受講はできません。',
      '教科書と証明書：初回授業の前に教科書を購入しないでください。その後、教員が指定する版を用意します。九大の単位は取得できません。受講証明書が必要な方は九大を離れる前に申請してください。交換留学生の出身校での単位認定は出身校に相談してください。'
    ],
    contact: '問い合わせ：JTCs office ' + mail + '（氏名、キャンパス、学生番号を記載）。システムや対象資格に疑問がある場合は事前に相談し、期限後に申込できると自己判断しないでください。',
    linkLabels: ['九大日本語コース一覧（身分・キャンパス別）','JTCs 公式案内（単位不認定）','JACs 公式案内（単位認定）','JTCs 新規登録・テスト入口','2026 年度後期 JTCs ガイド（登録・時間割・授業カレンダー）'],
    names: ['JTCs 新規登録・オンラインプレースメントテスト','JTCs プレースメントテスト結果通知','JTCs クラス登録','JTCs 後期開講期間の開始','JTCs 後期開講期間の終了'],
    notes: ['10/16 12:00—10/21 23:59（JST）。新規登録とオンラインテストを両方完了してください。クラス選択とは別の期間です。','10/23 午後（JST）に結果をメールで通知。具体的な時刻は未公表です。登録したメールを確認してください。','10/26 12:30—10/27 23:59（JST）。結果に応じてクラスを登録します。先着順で、満員になり次第締切です。','開講期間は 2026/11/9—2027/2/8 です。毎日授業があるわけではなく、全員の初回が 11/9 とは限りません。クラスごとの時間割・休講日は公式ガイドで確認してください。','公式の開講期間は 2027/2/8 に終了します。本人の最終授業日は選んだクラスの時間割で確認してください。'],
    resourceTitle: 'JTCs 日本語補講｜2026 年度後期', resourceDesc: '10/16—10/21 は新規登録・テスト、10/26—10/27 はクラス登録。単位不認定。時刻と授業日程を確認。'
  },
  en: {
    heading: '⑨ JTCs Japanese courses: fall 2026 registration',
    intro: 'To improve your Japanese, consider **JTCs (non-credit)**. The fall 2026 courses are for international students enrolled at Kyushu University, including exchange, research, master’s, doctoral and undergraduate students. JTCs **does not award Kyushu University credits**. JACs is a separate credit-bearing course: check its own eligibility and procedures rather than using the JTCs dates.',
    timeline: 'Fall 2026 | All times are Japan Standard Time (JST).\nNew registration + online placement test: **10/16 (Fri) 12:00—10/21 (Wed) 23:59**. Complete both within this period; registration alone does not complete the application.\nResults: emailed **10/23 (Fri) in the afternoon**; no exact time is published.\nClass selection (class select): **10/26 (Mon) 12:30—10/27 (Tue) 23:59**. First come, first served; registration closes when full.\nCourse period: **2026/11/9—2027/2/8**. Classes do not meet every day. Check your selected class timetable for your first lesson, teaching days and days off.',
    list: [
      'Classes: 90 minutes per lesson, twice a week for 10 weeks; seven levels, Japanese 1—7. A student ID number is required for registration. Complete beginners should select the option to learn from scratch through Japanese 1 in the system.',
      'Campuses and format: this term’s guide covers Ito and Hospital campuses. Face-to-face classes at Ito are normally at Center Zone 5. Hospital-campus students should choose a Zoom or hybrid class. The instructor will provide the classroom number or Zoom ID before the course starts.',
      'Before selecting a class: check for timetable conflicts; changes may not be possible later. You cannot take JTCs simultaneously with JACs, JLCC, JTAS or supplementary Japanese courses at Chikushi or Ohashi campus.',
      'Textbooks and certificates: do not buy textbooks before the first class; afterwards obtain the edition specified by your instructor. JTCs gives no Kyushu University credits. Request any completion certificate before leaving Kyushu U; exchange students should ask their home university about credit recognition.'
    ],
    contact: 'Contact: JTCs office ' + mail + ' (include your name, campus and student ID). Ask first if you have system or eligibility questions; do not assume late registration is available.',
    linkLabels: ['Kyushu U Japanese course overview (by status and campus)','JTCs official course information (non-credit)','JACs official course information (credit-bearing)','JTCs new registration and placement test','Fall 2026 JTCs guide (registration, timetable and teaching calendar)'],
    names: ['JTCs new registration and online placement test','JTCs placement test results','JTCs class selection','JTCs fall course period begins','JTCs fall course period ends'],
    notes: ['10/16 12:00—10/21 23:59 (JST). Complete both new registration and the online placement test. This is not the class-selection period.','Results are emailed on 10/23 in the afternoon (JST); no exact time is published. Check your registered email address.','10/26 12:30—10/27 23:59 (JST). Select classes based on your result. First come, first served; closes when full.','The course period is 2026/11/9—2027/2/8. Classes are not daily, and not everyone’s first lesson is on 11/9. See the official guide for your class timetable and days off.','The official course period ends on 2027/2/8. Check your selected class timetable for your own final lesson.'],
    resourceTitle: 'JTCs Japanese courses | Fall 2026', resourceDesc: 'Registration and placement test: 10/16—10/21. Separate class selection: 10/26—10/27. Non-credit; check exact times and the course schedule.'
  },
  ko: {
    heading: '⑨ JTCs 일본어 수업: 2026년 후기 신청',
    intro: '일본어 실력을 높이고 싶다면 **JTCs(학점 미인정)**를 확인하세요. 2026년 후기에는 규슈대에 재학 중인 유학생(교환학생, 연구생, 석사·박사과정 및 학부생 포함)이 대상입니다. JTCs를 수강해도 **규슈대 학점을 취득할 수 없습니다**. JACs는 별도의 학점 인정 과정이므로 자격과 절차는 해당 공식 페이지를 확인하고 JTCs 일정을 적용하지 마세요.',
    timeline: '2026년 후기｜모든 시각은 일본 표준시(JST)입니다.\n신규 등록＋온라인 분반 테스트: **10/16(금) 12:00—10/21(수) 23:59**. 기간 내 두 가지를 모두 완료해야 하며 등록만으로 신청이 완료되지 않습니다.\n결과: **10/23(금) 오후** 이메일로 통지됩니다. 정확한 시각은 공지되지 않았습니다.\n반 선택 등록(class select): **10/26(월) 12:30—10/27(화) 23:59**. 선착순이며 정원이 차면 마감됩니다.\n수업 기간: **2026/11/9—2027/2/8**. 매일 수업하는 것이 아닙니다. 첫 수업, 수업일 및 휴강일은 선택한 반 시간표로 확인하세요.',
    list: [
      '수업: 회당 90분, 주 2회, 총 10주이며 Japanese 1—7의 7개 레벨입니다. 등록에는 학번이 필요합니다. 완전 초보자는 시스템에서 Japanese 1부터 시작하는 항목을 선택하세요.',
      '캠퍼스와 방식: 이번 안내는 이토·병원 캠퍼스 대상입니다. 이토 대면 수업은 보통 센터 5호관에서 진행됩니다. 병원 캠퍼스 학생은 Zoom 또는 혼합 수업을 선택하세요. 강의실 번호나 Zoom ID는 개강 전에 담당 교원이 안내합니다.',
      '반 선택 전 확인: 본인 수업과 겹치지 않는지 확인하세요. 등록 후 변경하지 못할 수 있습니다. JACs, JLCC, JTAS 또는 지쿠시·오하시 캠퍼스의 일본어 보충 수업과 동시에 수강할 수 없습니다.',
      '교재와 증명서: 첫 수업 전에 교재를 사지 말고 이후 교원이 지정한 판을 준비하세요. 규슈대 학점은 인정되지 않습니다. 수강 증명서가 필요하면 규슈대를 떠나기 전에 신청하세요. 교환학생의 원소속 대학 학점 인정은 해당 대학에 문의하세요.'
    ],
    contact: '문의: JTCs office ' + mail + '(이름, 캠퍼스, 학번 기재). 시스템이나 자격에 의문이 있으면 먼저 문의하고 기한 후 등록이 가능하다고 임의로 판단하지 마세요.',
    linkLabels: ['규슈대 일본어 과정 안내(신분·캠퍼스별)','JTCs 공식 안내(학점 미인정)','JACs 공식 안내(학점 인정)','JTCs 신규 등록·분반 테스트','2026년 후기 JTCs 안내(등록·시간표·수업 달력)'],
    names: ['JTCs 신규 등록·온라인 분반 테스트','JTCs 분반 테스트 결과 통지','JTCs 반 선택 등록','JTCs 후기 수업 기간 시작','JTCs 후기 수업 기간 종료'],
    notes: ['10/16 12:00—10/21 23:59(JST). 신규 등록과 온라인 분반 테스트를 모두 완료하세요. 반 선택 기간과는 다릅니다.','10/23 오후(JST)에 결과가 이메일로 통지됩니다. 정확한 시각은 미공개입니다. 등록한 이메일을 확인하세요.','10/26 12:30—10/27 23:59(JST). 테스트 결과에 따라 반을 선택하세요. 선착순이며 정원이 차면 마감됩니다.','수업 기간은 2026/11/9—2027/2/8입니다. 매일 수업하지 않으며 모두의 첫 수업이 11/9인 것은 아닙니다. 반별 시간표와 휴강일은 공식 안내를 확인하세요.','공식 수업 기간은 2027/2/8에 끝납니다. 본인의 마지막 수업은 선택한 반 시간표로 확인하세요.'],
    resourceTitle: 'JTCs 일본어 수업｜2026년 후기', resourceDesc: '10/16—10/21 등록·분반 테스트, 10/26—10/27 별도 반 선택. 학점 미인정. 정확한 시각과 수업 일정을 확인하세요.'
  },
  es: {
    heading: '⑨ Cursos de japonés JTCs: inscripción de otoño de 2026',
    intro: 'Para mejorar tu japonés, consulta **JTCs (sin créditos)**. En otoño de 2026 pueden participar estudiantes internacionales matriculados en Kyushu University, incluidos estudiantes de intercambio, de investigación, máster, doctorado y grado. JTCs **no otorga créditos de Kyushu University**. JACs es un curso distinto con créditos: consulta sus propios requisitos y trámites, sin aplicar las fechas de JTCs.',
    timeline: 'Otoño de 2026 | Todas las horas son de Japón (JST).\nNuevo registro + prueba de nivel en línea: **10/16 (vie.) 12:00—10/21 (mié.) 23:59**. Completa ambos dentro del plazo; registrarse no basta para finalizar la solicitud.\nResultados: por correo **10/23 (vie.) por la tarde**; no se ha publicado una hora exacta.\nSelección de clase (class select): **10/26 (lun.) 12:30—10/27 (mar.) 23:59**. Por orden de inscripción, hasta completar el aforo.\nPeriodo del curso: **2026/11/9—2027/2/8**. No hay clase todos los días. Comprueba tu horario para conocer la primera sesión, los días lectivos y las suspensiones.',
    list: [
      'Clases: 90 minutos por sesión, dos veces por semana durante 10 semanas; siete niveles, Japanese 1—7. Necesitas tu número de estudiante para registrarte. Si empiezas desde cero, selecciona en el sistema la opción para aprender desde Japanese 1.',
      'Campus y modalidad: la guía de este semestre cubre Ito y Hospital. Las clases presenciales de Ito suelen impartirse en Center Zone 5. Los estudiantes del campus Hospital deben elegir una clase por Zoom o híbrida. El docente comunicará el aula o el ID de Zoom antes del inicio.',
      'Antes de elegir: comprueba que no haya conflictos de horario; puede que luego no puedas cambiar de clase. No puedes cursar JTCs a la vez que JACs, JLCC, JTAS o los cursos complementarios de japonés de Chikushi u Ohashi.',
      'Libros y certificados: no compres libros antes de la primera clase; después consigue la edición indicada por el docente. JTCs no otorga créditos de Kyushu University. Solicita el certificado antes de dejar Kyushu U. Para reconocer créditos de intercambio, consulta a tu universidad de origen.'
    ],
    contact: 'Consulta: JTCs office ' + mail + ' (incluye nombre, campus y número de estudiante). Pregunta primero si tienes dudas sobre el sistema o los requisitos; no presupongas que se permite inscribirse fuera de plazo.',
    linkLabels: ['Cursos de japonés de Kyushu U (por condición y campus)','Información oficial de JTCs (sin créditos)','Información oficial de JACs (con créditos)','Nuevo registro y prueba de nivel JTCs','Guía JTCs de otoño de 2026 (registro, horario y calendario lectivo)'],
    names: ['JTCs: nuevo registro y prueba de nivel en línea','JTCs: resultados de la prueba de nivel','JTCs: selección de clase','JTCs: comienza el periodo del curso de otoño','JTCs: termina el periodo del curso de otoño'],
    notes: ['10/16 12:00—10/21 23:59 (JST). Completa el nuevo registro y la prueba de nivel en línea. Este no es el periodo para elegir clase.','Resultados por correo el 10/23 por la tarde (JST); no se ha publicado una hora exacta. Revisa el correo registrado.','10/26 12:30—10/27 23:59 (JST). Elige clase según tu resultado. Por orden de inscripción, hasta completar el aforo.','El periodo del curso es 2026/11/9—2027/2/8. No hay clase a diario y la primera sesión no es el 11/9 para todos. Consulta el horario y los días sin clase en la guía oficial.','El periodo oficial termina el 2027/2/8. Consulta el horario de tu clase para saber cuándo es tu última sesión.'],
    resourceTitle: 'JTCs japonés | Otoño de 2026', resourceDesc: 'Registro y prueba de nivel: 10/16—10/21. Selección de clase aparte: 10/26—10/27. Sin créditos; consulta las horas exactas y el calendario.'
  }
};
const dates = [['2026-10-16','2026-10-21'],['2026-10-23',''],['2026-10-26','2026-10-27'],['2026-11-09',''],['2027-02-08','']];
// JACs 不在此次日期更新范围内；保留原比较条目，不将 JTCs 时间套到另一课程。
const legacyJacs = {
  zh:'JACs（伊都・単位認定）：每周 2 次 × 15 周，8 个级别，对象为学部正规留学生等',
  ja:'JACs（伊都・単位認定）：週 2 回 × 15 週間、8 レベル。対象は学部の正規留学生など',
  en:'JACs (Ito campus, credit): twice a week for 15 weeks, 8 levels, for regular undergraduate international students and others',
  ko:'JACs(이토 캠퍼스, 학점 인정): 주 2회 × 15주, 8단계. 학부 정규 유학생 등이 대상',
  es:'JACs (campus Ito, con créditos): dos veces por semana durante 15 semanas, 8 niveles, para estudiantes internacionales regulares de grado, entre otros'
};
const times = ['10/16 12:00—10/21 23:59（日本时间 JST）','下午（日本时间 JST；未公布具体时刻）','10/26 12:30—10/27 23:59（日本时间 JST）','',''];
const urls = ['https://isc.kyushu-u.ac.jp/center/international/japaneselang/',overview,'https://isc.kyushu-u.ac.jp/center/jacs',registration,pdf];
const apply = process.argv.includes('--apply');
const miniIndex = process.argv.indexOf('--mini');
const mini = miniIndex < 0 ? null : path.resolve(process.argv[miniIndex + 1]);
// 单次导入：已落地时只提示运行验收，避免后续重跑覆盖人工修订。
if (fs.readFileSync(path.join(root,'guide/js/data-cunli.js'),'utf8').includes('nc2026-jtcs-')) {
  console.log('JTCs 2026 后期已导入；请运行 test_jtcs_2026f.js 验证，未写入任何文件。');
  process.exit(0);
}
const writes = new Map();
/** 保留每个原文件的换行方式；这里只序列化数据，不生成行文。 */
function queue(file, text) { writes.set(file, text); }
/** 对 JSON 指定区块做有界替换，避免重排同文件里不相关的表格。 */
function replaceBlock(source, id, block) {
  const at = source.indexOf('"id": "'+id+'"'); assert(at >= 0, id);
  const start = source.lastIndexOf('{',at);
  let depth = 0, quoted = false, escaped = false, end = -1;
  for (let i=start;i<source.length;i++) {
    const ch = source[i];
    if (quoted) { if (escaped) escaped=false; else if(ch==='\\') escaped=true; else if(ch==='"') quoted=false; }
    else if(ch==='"') quoted=true;
    else if(ch==='{') depth++;
    else if(ch==='}' && --depth===0) {end=i+1;break;}
  }
  assert(end>start,id);
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const literal = JSON.stringify(block,null,2).replace(/\n/g,newline+'    ');
  return source.slice(0,start)+literal+source.slice(end);
}
function json(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function browserData(file, key) {
  const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx);
  return ctx.window[key];
}
/** 文本替换后重新计算 UTF-16 重点下标，绝不复用旧问卷文字的下标。 */
function focus(text) {
  const ranges = []; let m;
  const re = /\*\*([^*]+)\*\*/g;
  while ((m = re.exec(text))) ranges.push({start:m.index+2,end:m.index+2+m[1].length,style:'bold',quote:m[1]});
  return { text: ranges };
}
const bodyFile = path.join(root, 'guide/js/articles-body-i18n.js');
const body = browserData(bodyFile, 'ARTICLES_BODY_I18N');
for (const article of ['guide-newcomer','guide-academic']) {
  const file = path.join(root, 'content', article + '.json');
  const doc = json(file);
  for (const [lang,c] of Object.entries(copy)) {
    const target = lang === 'zh' ? Object.fromEntries(doc.blocks.map(b => [b.id,b])) : body[article][lang];
    const newcomer = article === 'guide-newcomer';
    const ids = newcomer ? ['jca101','jca102','jca103','jca104','jca105'] : [null,'7fbb45','77aa1c','66a59f','32f280'];
    if (ids[0]) { target[ids[0]].text = c.heading; delete target[ids[0]].emphasis; }
    for (const [id,text] of [[ids[1],c.intro],[ids[2],c.timeline]]) {
      assert(target[id], article + '/' + lang + '/' + id);
      target[id].text = text; target[id].emphasis = focus(text);
    }
    target[ids[3]].items = (newcomer ? c.list : c.list.concat(c.contact)).concat(legacyJacs[lang]).map(text => ({text}));
    delete target[ids[3]].emphasis;
    const indexes = newcomer ? [0,1,2,3,4] : [1,2,3,4];
    target[ids[4]].items = indexes.map(i => ({text:c.linkLabels[i],url:urls[i]}));
    delete target[ids[4]].emphasis;
    if (newcomer) {
      // 咨询窗口作为常驻正文，不与选班截止提示混在一起。
      const id = 'jca106';
      if (lang === 'zh') {
        let block = doc.blocks.find(b => b.id === id);
        if (!block) { block = {id,type:'paragraph'}; doc.blocks.splice(doc.blocks.findIndex(b => b.id === 'jca105'),0,block); }
        block.text = c.contact;
      } else target[id] = {text:c.contact};
    }
  }
  let source = fs.readFileSync(file,'utf8');
  const changed = article==='guide-newcomer' ? ['jca101','jca102','jca103','jca104','jca105'] : ['7fbb45','66a59f','77aa1c','32f280'];
  for (const id of changed) source = replaceBlock(source,id,doc.blocks.find(b=>b.id===id));
  if (article==='guide-newcomer') {
    const block = doc.blocks.find(b=>b.id==='jca106');
    if(source.includes('"id": "jca106"')) source=replaceBlock(source,'jca106',block);
    else {
      const marker = source.lastIndexOf('    {',source.indexOf('"id": "jca105"'));
      const newline = source.includes('\r\n')?'\r\n':'\n';
      source=source.slice(0,marker)+'    '+JSON.stringify(block,null,2).replace(/\n/g,newline+'    ')+','+newline+source.slice(marker);
    }
  }
  queue(file,source);
}
const bodySource = fs.readFileSync(bodyFile,'utf8');
const at = bodySource.indexOf('window.ARTICLES_BODY_I18N = '); assert(at >= 0);
queue(bodyFile, bodySource.slice(0,at)+'window.ARTICLES_BODY_I18N = '+JSON.stringify(body,null,1)+';\n})();\n');
const claimFile = path.join(root,'content/claims.json'), claims = json(claimFile);
for (const claim of claims.claims.filter(x => x.id.startsWith('jtcs-registration-2026f'))) Object.assign(claim,{
  claim:'2026 后期 JTCs：10/16 12:00—10/21 23:59 新规登记与在线分班测试；10/23 下午结果邮件；10/26 12:30—10/27 23:59 选班；课程期 2026/11/9—2027/2/8。均为 JST，非学分。',
  sourceName:'九州大学 ISC · 2026 后期 JTCs 正式课程指南（伊都・病院）',source:pdf,verified:'2026-10-05',
  note:'当期海报和所属学务课邮件交叉核对。新规登记与选班是两个阶段；本期指南未列出 9/25 问卷作为此次登记的额外前置条件，不再沿用旧限制。不得自动套用到下一期；2027/2/8 后作为历史资料。'
});
queue(claimFile,JSON.stringify(claims,null,2)+'\n');
const zoneFile = path.join(root,'guide/js/data-newcomer-zone.js');
const resource = {ref:'guide-newcomer',sec:'jca101',title:{},desc:{}};
for (const [lang,c] of Object.entries(copy)) { resource.title[lang]=c.resourceTitle;resource.desc[lang]=c.resourceDesc; }
let zoneSource = fs.readFileSync(zoneFile,'utf8');
const zone = browserData(zoneFile,'NEWCOMER_ZONE');
zone.resources = [resource].concat(zone.resources.filter(x => x.sec !== 'jca101'));
assert(!browserData(zoneFile,'NEWCOMER_ZONE').resources.some(x=>x.sec==='jca101'), '已存在 JTCs 入口，禁止重复追加');
queue(zoneFile,zoneSource.replace('"resources": [','"resources": [\n    '+JSON.stringify(resource)+','));
const calFile = path.join(root,'guide/js/data-cunli.js');
let calSource = fs.readFileSync(calFile,'utf8');
// 新校历条目只追加到现有手工增量区，保留旧生成物与全部其他节点。
assert(!calSource.includes('nc2026-jtcs-'), '已存在 JTCs 节点，请审阅后再决定是否更新，禁止重复追加');
const nodes = dates.map(([date,end],i) => ({id:'nc2026-jtcs-'+i,title:copy.ja.names[i],zh:copy.zh.names[i],date,end,type:'event',star:false,src:'jtcs2026f',note:copy.zh.notes[i],link:pdf}));
calSource = calSource.replace('sources: {','sources: {\n      jtcs2026f: '+JSON.stringify({name:'ISC · JTCs 2026 Second Semester',url:pdf})+',');
calSource = calSource.replace(/(\{[^\n]*"id":"c78"[^\n]*\})(\r?\n\s*\])/,'$1,\n'+nodes.map(n=>'        '+JSON.stringify(n)).join(',\n')+'$2');
assert(calSource.includes('nc2026-jtcs-4'));
calSource = calSource.replace('version: "2026-09-30"','version: "2026-10-05"');
queue(calFile,calSource);
const i18nFile = path.join(root,'guide/js/i18n.js');
let i18nSource = fs.readFileSync(i18nFile,'utf8');
const names = {}, notes = {};
dates.forEach((_,i) => {
  names[copy.ja.names[i]] = Object.fromEntries(['en','ko','es'].map(l => [l,copy[l].names[i]]));
  notes['nc2026-jtcs-'+i] = Object.fromEntries(['ja','en','ko','es'].map(l => [l,copy[l].notes[i]]));
});
i18nSource = i18nSource.replace('const CUNLI_NAMES = {','const CUNLI_NAMES = {\n'+Object.entries(names).map(([k,v])=>'  '+JSON.stringify(k)+':'+JSON.stringify(v)+',').join('\n'));
i18nSource = i18nSource.replace('const CUNLI_NOTES = {','const CUNLI_NOTES = {\n'+Object.entries(notes).map(([k,v])=>'  '+JSON.stringify(k)+':'+JSON.stringify(v)+',').join('\n'));
queue(i18nFile,i18nSource);
if (mini) {
  const file = path.join(mini,'miniprogram/data/newcomer.js');
  const source = fs.readFileSync(file,'utf8');
  const start = source.indexOf('    {\r\n      "id": "jtcs"');
  const fallbackStart = source.indexOf('    {\n      "id": "jtcs"');
  const begin = start >= 0 ? start : fallbackStart;
  const end = source.indexOf('      "id": "bank"',begin);
  const next = source.lastIndexOf('    {',end); assert(begin>=0 && next>begin);
  const item = {
    id:'jtcs',title:'日语课程报名（JTCs）',checkedAt:'2026-10-05',validUntil:'2027-02-08',
    audience:'九大在籍留学生：交换留学生、研究生、硕士、博士及学部生；非教职员课程',
    place:'伊都校区 Center Zone 5；病院校区学生选 Zoom 或混合班，教室/Zoom ID 由教师通知',
    when:'2026 后期：10/16 12:00—10/21 23:59 登记＋分班测试；10/23 下午结果；10/26 12:30—10/27 23:59 选班（均为 JST）；课程期 2026/11/9—2027/2/8',
    action:'先在期限内完成新规登记＋在线测试，收到结果后再选班。**非学分课程**；选班先到先得，满员关闭。',category:'6',
    dates:dates.map(([start,end],i)=>({start,...(end?{end}:{}),title:copy.zh.names[i],time:times[i],note:copy.zh.notes[i]})),
    sourceUrl:pdf,
    blocks:[{id:'jtcs-overview',type:'paragraph',text:copy.zh.intro},{id:'jtcs-dates',type:'notice',text:copy.zh.timeline},
      {id:'jtcs-course',type:'list',items:copy.zh.list.map(text=>({text}))},
      {id:'jtcs-register',type:'steps',items:[
        {title:'10/16 12:00—10/21 23:59：登记并完成在线测试',desc:'准备学生番号，进入 Registration 先新规登记，再做语法、阅读、听力测试。零基础者选择从 Japanese 1 开始的选项。期间内未完成这两项，不能参加本期 JTCs。'},
        {title:'10/23 下午：查看测试结果邮件',desc:'检查登记邮箱。官方仅说明下午发出，未给具体时刻；不是报名系统即时确认的保证。'},
        {title:'10/26 12:30—10/27 23:59：选择班级',desc:'按结果与本人时间表选班，先到先得、满员关闭。登记与分班测试不等于已经完成选班。'},
        {title:'开课前：确认本人课表与授课形式',desc:'课程期为 2026/11/9—2027/2/8，不代表每天授课；病院学生选 Zoom 或混合班。首次课前不要提前买教材。'}]},
      {type:'warning',text:copy.zh.contact}],
    links:[{text:'2026 后期 JTCs 官方指南（含课表与授课日历）',url:pdf},{text:'JTCs 官方 Registration',url:registration},{text:'JTCs 官方课程说明',url:overview},{text:'九大日语课程总览（按身份与校区选择）',url:urls[0]},{text:'JACs 官方说明（另外核对资格与日程）',url:urls[2]}]
  };
  const replacement=JSON.stringify(item,null,2).split('\n').map(s=>'    '+s).join('\n')+',\n';
  queue(file,source.slice(0,begin)+replacement+source.slice(next));
}
console.log((apply?'APPLY':'PREVIEW')+' '+writes.size+' local files; 5 calendar milestones; 5 languages');
if (apply) for (const [file,text] of writes) { fs.writeFileSync(file,text,'utf8'); console.log(path.relative(root,file)); }
