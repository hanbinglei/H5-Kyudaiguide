// i18n.js — h5 多语言（唯一 UI 词典，与地图共用 localStorage 'kyudai-lang'）
// 架构约定：
//   · 所有界面文案只能来自本词典；app.js/render.js 不得再写死任何语言的字符串。
//   · 回退链固定为「当前语言 → zh」——zh 是内容源语言，绝不回退到第三种语言。
//   · 文章正文见 articles-body-i18n.js（13 篇 ja/en/ko 已全译）。bodyNotice 保留为兜底：
//     日后新增文章尚无译本时，该篇会回退中文原文并在顶部显示这条提示。
(function(){
// ── 品类名（12 宫格与文章分类标签共用） ──
const CAT_I18N = {
  zh:{ '1':'入境准备','2':'在留手续','3':'租房','4':'银行·汇款','5':'手机·网络','6':'学业·奖学金','7':'打工','8':'医疗·保险','9':'交通','10':'生活贴士','11':'购物','12':'应急联系','13':'反诈安全','14':'新生特辑','15':'奖学金','16':'就职·实习' },
  ja:{ '1':'入国準備','2':'在留手続き','3':'住まい探し','4':'銀行・送金','5':'携帯・ネット','6':'学業・奨学金','7':'アルバイト','8':'医療・保険','9':'交通','10':'生活のコツ','11':'買い物','12':'緊急連絡先','13':'詐欺防止','14':'新入生特集','15':'奨学金','16':'就職・インターン' },
  en:{ '1':'Arrival','2':'Residence','3':'Housing','4':'Banking','5':'Mobile & Net','6':'Study & Grants','7':'Part-time','8':'Medical','9':'Transport','10':'Life Tips','11':'Shopping','12':'Emergency','13':'Anti-Fraud','14':'Newcomer','15':'Scholarships','16':'Career & Internships' },
  ko:{ '1':'입국 준비','2':'체류 수속','3':'주거','4':'은행·송금','5':'휴대폰·인터넷','6':'학업·장학금','7':'아르바이트','8':'의료·보험','9':'교통','10':'생활 팁','11':'쇼핑','12':'긴급 연락','13':'사기 방지','14':'신입생 특집','15':'장학금','16':'취업·인턴십' },
};
// ── UI 词典 ──
const UI = {
  zh:{
    self:'中文', brandSub:'九大伊都 · 留学指南 H5', searchPh:'搜索标题 / 正文',
    tabs:{map:'地图',guide:'指南',cunli:'村历',faculty:'官网',history:'历史'},
    guideHead:'指南 · %n% 个场景', guideSub:'选择分类查看指南',
    nzTitle:'落地后手续办理顺序', nzSub:'三个月内需办理的手续按时间排列，可直接跳转至对应小节',
    emptyCat:'该分类内容整理中，敬请期待', backGrid:'‹ 全部品类',
    searchLabel:'搜索', noResults:'没有匹配结果',
    prevArticle:'上一篇', nextArticle:'下一篇',
    installTitle:'添加到主屏幕', installDesc:'装到桌面后离线也能看，打开更快', installGo:'添加', installNo:'以后再说',
    searchHist:'最近搜索', searchHistClear:'清除记录', toTop:'回到顶部',
    pulseVisitors:'今日 {today} 人来过 · 累计 {total} 人', pulseEvent:'距离 {name} 还有 {n} 天', pulseEventToday:'今天就是 {name}', pulseWx:'福冈 {temp}℃ · {wx}', pulseWxRain:'福冈 {temp}℃ · 降雨 {p}%', pulseRead:'已看过 {n}/{total} 篇', wxClear:'晴', wxMainly:'大致晴', wxPartly:'多云', wxOvercast:'阴', wxFog:'雾', wxDrizzle:'小雨', wxRain:'雨', wxSnow:'雪', wxShowers:'阵雨', wxThunder:'雷雨',
    sourcesTitle:'参考链接与出处', sourcesLead:'本文正文提到的原始链接汇总如下，可直接点开核对原文。', sourcesOfficial:'官方·公共机构', sourcesOther:'其他链接',
    fbTitleArticle:'报告问题', fbTitleGeneral:'意见与建议', fbLead:'欢迎指出错误或提出建议。内容会直接发给维护者，不会公开。', fbTypeLb:'类型', fbMsgLb:'具体说明', fbEmailLb:'联系方式（可选，便于回复）', fbNote:'提交后会跳转到确认页，随后返回本站。', fbSend:'发送', fbCancel:'取消', fbTypeWrong:'内容有误', fbTypeLink:'链接失效', fbTypeStale:'信息已过期', fbTypeAdd:'希望补充', fbTypeOther:'其他', fbKindArticle:'纠错', fbKindGeneral:'意见', fbEntryArticle:'发现错误？点这里报告', fbEntryGeneral:'意见与建议', fbOpen:'反馈',
    searchFuzzy:'没有完全匹配，以下为相近写法的结果（已自动容错）',
    searchAlias:'未找到该词，以下为相关说法（同义 / 关联词）的结果',
    searchCount:'找到 %n% 篇 · 按相关度排序', searchHint:'请尝试更简短的关键词，例如：',
    pinnedTag:'置顶 · 必读',
    historyTitle:'最近看过', clear:'清空', noHistory:'暂无浏览记录', noHistorySub:'打开指南后将在此显示',
    mapTip:'地图由 Kyudaimap 提供 · 支持搜索与定位',
    updated:'最后更新', byAdmin:'管理员编写维护', endMark:'— 全文完 —',
    bodyNotice:'', // zh 是正文语言，无需提示
    openLink:'打开 ›', seeRef:'见', copied:'已复制：', cleared:'已清空',
    // 村历
    upcoming:'接下来', recent3:'最近 3 条',
    dataSrc:'数据来源：内阁府祝日 + 九州大学学年历（离线种子）',
    wd:['日','一','二','三','四','五','六'], wdFull:['周日','周一','周二','周三','周四','周五','周六'],
    legend:{rest:'假期/假日',admin:'行政',term:'学期',misc:'活动'},
    typeLabels:{admin:'行政',term:'学期',break:'假期',holiday:'假日',event:'活动',exam:'招生',user:'投稿'},
    today:'今天', expand:'展开 ⌄', collapse:'收起 ⌃',
        exportIcs:'导出日历', exportIcsTitle:'导出 .ics 校历（可用于手机日历）', exported:'已生成 .ics 文件',
        monthTitle:(y,m)=>`${y} 年 ${m} 月`, dayTitle:(m,d,wd)=>`${m} 月 ${d} 日 · ${wd}`,
    ongoing:'进行中', pending:'待核对', pendingBox:'⬜ 待核对',
    nItems:n=>`${n} 条`, noneOnDay:'无日程', monthN:n=>`本月 ${n} 条`, tapDetail:'点击查看详情',
    noUpcoming:'近期没有已收录的日程', renkyu:n=>`${n} 连休`,
    place:'地点', source:'来源', locale:'zh-CN',
    // 官网
    facHead:'院系官网', facSub:'跳转各学部 / 大学院学府官方网站', facUg:'学部（本科）', facGrad:'大学院 学府',
    facSrc:'数据来源：九州大学官网 学部・大学院一览（2026-08-24 抓取）',
        // 生活支援巴士（bus_live）
        busStop:'站点', busDirToStation:'往车站', busDirFromStation:'往宿舍',
        busRunning:'今日运行中', busNotRunning:'今日不运行', busRunDays:'运行日',
        busLastBusGone:'今日末班已过', busNoData:'无数据',
        busNote:'每 30 秒自动更新 · 时刻以官方海报 PDF 为准',
        bus_stop_kyousoukan:'伊都协奏馆', bus_stop_dorm:'ドミトリー 1-3', bus_stop_settle:'セトルインターナショナル', bus_stop_gakkentoshi:'九大学研都市站',
        // 新手引导
    tour:{ open:'新手引导', skip:'跳过', prev:'上一步', next:'下一步', done:'开始使用',
      steps:{
        welcome:{t:'九大伊都留学生指南', d:'新生落地后需要办理的十余项手续、伊都校区地图与校历均汇集于此。约需 30 秒了解使用方法。'},
        search:{t:'不确定位置时可搜索', d:'标题与正文一并检索。可试搜「在留卡」「垃圾」「巴士」「奖学金」。'},
        pinned:{t:'建议优先阅读', d:'《落地后 30 天》将全部手续按时间线排列，依赖关系清晰；《反诈必读》针对落地初期的风险。'},
        cats:{t:'15 个场景分类', d:'按当前需要办理的事项进入：入境、在留、租房、银行、手机、打工、医疗、交通……'},
        tabs:{t:'底部五个板块', d:'地图可检索教室、巴士与校内接驳；村历为校历与活动；官网直达各学部；历史为浏览记录。'},
        lang:{t:'四种语言 · 支持离线', d:'中日英韩随时切换。添加至主屏幕后可离线阅读 —— 区役所排队、地下室无信号时同样可用。'}
      } },
  },
  ja:{
    self:'日本語', brandSub:'九大伊都・留学生ガイド H5', searchPh:'タイトル / 本文で検索',
    tabs:{map:'地図',guide:'ガイド',cunli:'村暦',faculty:'公式',history:'履歴'},
    guideHead:'ガイド · %n% カテゴリ', guideSub:'カテゴリを選んでガイドを開く',
    nzTitle:'来日後の手続き順序', nzSub:'3 か月以内に必要な手続きを時系列に整理しています。タップで該当節へ移動します',
    emptyCat:'このカテゴリは準備中です', backGrid:'‹ 全カテゴリ',
    searchLabel:'検索', noResults:'該当する結果がありません',
    prevArticle:'前の記事', nextArticle:'次の記事',
    installTitle:'ホーム画面に追加', installDesc:'オフラインでも見られ、起動も速くなります', installGo:'追加', installNo:'あとで',
    searchHist:'最近の検索', searchHistClear:'履歴を消去', toTop:'トップへ戻る',
    pulseVisitors:'本日 {today} 人・累計 {total} 人', pulseEvent:'{name}まであと {n} 日', pulseEventToday:'今日は {name}', pulseWx:'福岡 {temp}℃ · {wx}', pulseWxRain:'福岡 {temp}℃ · 降水 {p}%', pulseRead:'{n}/{total} 記事を閲覧', wxClear:'晴れ', wxMainly:'おおむね晴れ', wxPartly:'晴れ時々くもり', wxOvercast:'くもり', wxFog:'霧', wxDrizzle:'小雨', wxRain:'雨', wxSnow:'雪', wxShowers:'にわか雨', wxThunder:'雷雨',
    sourcesTitle:'参考リンク・出典', sourcesLead:'本文で参照したリンクの一覧です。タップして原文を確認できます。', sourcesOfficial:'公式・公共機関', sourcesOther:'その他のリンク',
    fbTitleArticle:'問題を報告', fbTitleGeneral:'ご意見・ご要望', fbLead:'誤りのご指摘やご提案を歓迎します。内容は管理者に直接送信され、公開されません。', fbTypeLb:'種類', fbMsgLb:'具体的な内容', fbEmailLb:'連絡先（任意・返信用）', fbNote:'送信後は確認ページに移動し、その後このサイトに戻ります。', fbSend:'送信', fbCancel:'キャンセル', fbTypeWrong:'内容の誤り', fbTypeLink:'リンク切れ', fbTypeStale:'情報が古い', fbTypeAdd:'追加してほしい', fbTypeOther:'その他', fbKindArticle:'誤り', fbKindGeneral:'意見', fbEntryArticle:'誤りを見つけたら報告する', fbEntryGeneral:'ご意見・ご要望', fbOpen:'フィードバック',
    searchFuzzy:'完全一致はありません。近い表記の結果を表示しています（誤字補正）',
    searchAlias:'この語は見つからないため、関連する語の結果を表示しています',
    searchCount:'%n% 件（関連度順）', searchHint:'もっと短いキーワードでお試しください。例：',
    pinnedTag:'ピン留め・必読',
    historyTitle:'閲覧履歴', clear:'クリア', noHistory:'履歴なし', noHistorySub:'ガイドを開くとここに表示されます',
    mapTip:'地図は Kyudaimap 提供',
    updated:'最終更新', byAdmin:'管理者が作成・管理', endMark:'— 全文終了 —',
    bodyNotice:'本文は中国語です。言語切替はナビゲーションと要約に適用されます。',
    openLink:'開く ›', seeRef:'参照', copied:'コピーしました：', cleared:'クリアしました',
    upcoming:'この先', recent3:'直近 3 件',
    dataSrc:'出典：内閣府 祝日 + 九州大学 学年暦（オフライン）',
    wd:['日','月','火','水','木','金','土'], wdFull:['日曜','月曜','火曜','水曜','木曜','金曜','土曜'],
    legend:{rest:'休暇/祝日',admin:'行政',term:'学期',misc:'イベント'},
    typeLabels:{admin:'行政',term:'学期',break:'休業',holiday:'祝日',event:'イベント',exam:'入試',user:'投稿'},
    today:'今日', expand:'展開 ⌄', collapse:'折りたたむ ⌃',
        exportIcs:'カレンダー出力', exportIcsTitle:'.ics 書き出し（スマホカレンダー対応）', exported:'.ics ファイルを生成しました',
        monthTitle:(y,m)=>`${y}年${m}月`, dayTitle:(m,d,wd)=>`${m}月${d}日 · ${wd}`,
    ongoing:'期間中', pending:'確認待ち', pendingBox:'⬜ 確認待ち',
    nItems:n=>`${n} 件`, noneOnDay:'予定なし', monthN:n=>`今月 ${n} 件`, tapDetail:'タップで詳細を表示',
    noUpcoming:'直近の収録予定はありません', renkyu:n=>`${n}連休`,
    place:'場所', source:'出典', locale:'ja-JP',
    facHead:'学部・学府 公式サイト', facSub:'各学部・大学院学府の公式サイトへ', facUg:'学部', facGrad:'大学院 学府',
    facSrc:'出典：九州大学 学部・大学院一覧（2026-08-24 取得）',
        // 生活支援バス（bus_live）
        busStop:'停留所', busDirToStation:'駅方面', busDirFromStation:'寮方面',
        busRunning:'本日運行中', busNotRunning:'本日運行なし', busRunDays:'運行日',
        busLastBusGone:'本日の最終便は出発済み', busNoData:'データなし',
        busNote:'30 秒ごとに自動更新 · 時刻は公式ポスター PDF に基づく',
        bus_stop_kyousoukan:'伊都協奏館', bus_stop_dorm:'ドミトリー 1-3', bus_stop_settle:'セトルインターナショナル', bus_stop_gakkentoshi:'九大学研都市駅',
        // チュートリアル
    tour:{ open:'使い方ガイド', skip:'スキップ', prev:'戻る', next:'次へ', done:'使ってみる',
      steps:{
        welcome:{t:'九大伊都・留学生ガイド', d:'来日後に必要な十数件の手続き、伊都キャンパスの地図と学年暦をまとめています。使い方は約 30 秒で確認できます。'},
        search:{t:'場所が分からないときは検索', d:'タイトルと本文をまとめて検索します。「在留カード」「ゴミ」「バス」「奨学金」などでお試しください。'},
        pinned:{t:'はじめに読む 2 本', d:'『着いてからの 30 日』は手続きを時系列に並べ、依存関係が一目で分かります。『詐欺防止ガイド』は来日初期に狙われやすい手口を扱っています。'},
        cats:{t:'15 のカテゴリ', d:'現在必要な用事から入ってください：入国、在留、住まい、銀行、携帯、アルバイト、医療、交通……'},
        tabs:{t:'下の 5 つのタブ', d:'地図では教室・バス・学内シャトルを検索できます。村暦は学年暦とイベント、公式サイトは各学部へ、履歴は閲覧した記事です。'},
        lang:{t:'4 言語 · オフライン対応', d:'日本語・中国語・英語・韓国語をいつでも切り替え。ホーム画面に追加するとオフラインでも開けます —— 区役所の待ち時間や地下でも利用できます。'}
      } },
  },
  en:{
    self:'English', brandSub:'Kyushu U Ito — Guide H5', searchPh:'Search titles / text',
    tabs:{map:'Map',guide:'Guide',cunli:'Calendar',faculty:'Sites',history:'History'},
    guideHead:'Guide · %n% categories', guideSub:'Pick a category to read',
    nzTitle:'Order of procedures after arrival', nzSub:'Procedures needed within three months, arranged chronologically; tap to jump to the relevant section',
    emptyCat:'Content coming soon', backGrid:'‹ All Categories',
    searchLabel:'Search', noResults:'No results found',
    prevArticle:'Previous', nextArticle:'Next',
    installTitle:'Add to home screen', installDesc:'Works offline and opens faster', installGo:'Add', installNo:'Later',
    searchHist:'Recent searches', searchHistClear:'Clear', toTop:'Back to top',
    pulseVisitors:'{today} today · {total} total', pulseEvent:'{name} in {n} days', pulseEventToday:'Today: {name}', pulseWx:'Fukuoka {temp}°C · {wx}', pulseWxRain:'Fukuoka {temp}°C · rain {p}%', pulseRead:'{n}/{total} read', wxClear:'Clear', wxMainly:'Mostly clear', wxPartly:'Partly cloudy', wxOvercast:'Overcast', wxFog:'Fog', wxDrizzle:'Drizzle', wxRain:'Rain', wxSnow:'Snow', wxShowers:'Showers', wxThunder:'Thunderstorm',
    sourcesTitle:'Sources & links', sourcesLead:'All original links referenced in this article, for checking the source directly.', sourcesOfficial:'Official / public bodies', sourcesOther:'Other links',
    fbTitleArticle:'Report a problem', fbTitleGeneral:'Feedback & suggestions', fbLead:'Corrections and suggestions are welcome. Your message goes straight to the maintainer and is not published.', fbTypeLb:'Type', fbMsgLb:'Details', fbEmailLb:'Contact (optional, for a reply)', fbNote:'After submitting you will see a confirmation page, then return here.', fbSend:'Send', fbCancel:'Cancel', fbTypeWrong:'Incorrect content', fbTypeLink:'Broken link', fbTypeStale:'Outdated information', fbTypeAdd:'Missing content', fbTypeOther:'Other', fbKindArticle:'Correction', fbKindGeneral:'Feedback', fbEntryArticle:'Found an error? Report it', fbEntryGeneral:'Feedback & suggestions', fbOpen:'Feedback',
    searchFuzzy:'No exact match — showing results with similar spelling (typo tolerance)',
    searchAlias:'That term was not found — showing results for related terms',
    searchCount:'%n% article(s), by relevance', searchHint:'Try a shorter keyword, for example:',
    pinnedTag:'Pinned · Must-read',
    historyTitle:'Recent', clear:'Clear', noHistory:'No history yet', noHistorySub:'Open a guide and it will appear here',
    mapTip:'Map by Kyudaimap',
    updated:'Updated', byAdmin:'Maintained by admin', endMark:'— End —',
    bodyNotice:'The article body is in Chinese. Language switching applies to navigation and summaries.',
    openLink:'Open ›', seeRef:'See', copied:'Copied: ', cleared:'Cleared',
    upcoming:'Upcoming', recent3:'Next 3',
    dataSrc:'Sources: Cabinet Office holidays + Kyushu U academic calendar (offline)',
    wd:['S','M','T','W','T','F','S'], wdFull:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    legend:{rest:'Break/Holiday',admin:'Admin',term:'Term',misc:'Event'},
    typeLabels:{admin:'Admin',term:'Term',break:'Break',holiday:'Holiday',event:'Event',exam:'Exam',user:'Post'},
    today:'Today', expand:'Expand ⌄', collapse:'Collapse ⌃',
        exportIcs:'Export calendar', exportIcsTitle:'Export .ics (works with mobile calendars)', exported:'.ics file generated',
        monthTitle:(y,m)=>['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]+' '+y,
        dayTitle:(m,d,wd)=>`${wd}, ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]} ${d}`,
    ongoing:'Ongoing', pending:'Unverified', pendingBox:'⬜ Unverified',
    nItems:n=>`${n} item${n>1?'s':''}`, noneOnDay:'No events', monthN:n=>`${n} this month`, tapDetail:'Tap for details',
    noUpcoming:'No recorded events coming up', renkyu:n=>`${n}-day break`,
    place:'Place', source:'Source', locale:'en-US',
    facHead:'Faculty Websites', facSub:'Official sites of each school & graduate school', facUg:'Undergraduate', facGrad:'Graduate Schools',
    facSrc:'Source: Kyushu University faculty index (fetched 2026-08-24)',
        // Shopping shuttle (bus_live)
        busStop:'Stop', busDirToStation:'To Station', busDirFromStation:'To Dorms',
        busRunning:'Running today', busNotRunning:'Not running today', busRunDays:'Operating days',
        busLastBusGone:'Last bus has left', busNoData:'No data',
        busNote:'Auto-updates every 30s · Times from official poster PDF',
        bus_stop_kyousoukan:'Ito Harmony House', bus_stop_dorm:'Dormitory 1-3', bus_stop_settle:'SETTLE International', bus_stop_gakkentoshi:'Kyudai Gakkentoshi Stn.',
        // Onboarding
    tour:{ open:'How to use', skip:'Skip', prev:'Back', next:'Next', done:'Get started',
      steps:{
        welcome:{t:'Kyushu University Ito International Student Guide', d:'The procedures you face after arrival, the Ito campus map and the academic calendar, in one place. About 30 seconds to see how it works.'},
        search:{t:'Search when unsure where to look', d:'Titles and body text are searched together. Try “residence card”, “garbage”, “bus” or “scholarship”.'},
        pinned:{t:'Recommended first reads', d:'“Your First 30 Days” places every procedure on one timeline so dependencies are clear. The anti-fraud guide covers the risks of the first months after arrival.'},
        cats:{t:'Fifteen situations', d:'Go in by what you need to do now: arrival, residence, housing, banking, mobile, part-time work, medical, transport…'},
        tabs:{t:'Five tabs at the bottom', d:'The map finds classrooms, buses and the campus shuttle. Cunli holds the academic calendar and events. Official links straight to each school. History shows what you have read.'},
        lang:{t:'Four languages · works offline', d:'Switch between Chinese, Japanese, English and Korean at any time. Add it to your home screen for offline reading — useful while queuing at the ward office or in a basement with no signal.'}
      } },
  },
  ko:{
    self:'한국어', brandSub:'큐슈대 이토 · 가이드 H5', searchPh:'제목 / 본문 검색',
    tabs:{map:'지도',guide:'가이드',cunli:'마을달력',faculty:'사이트',history:'기록'},
    guideHead:'가이드 · %n% 카테고리', guideSub:'카테고리를 눌러 가이드 열기',
    nzTitle:'입국 후 수속 순서', nzSub:'3개월 이내에 필요한 수속을 시간순으로 정리했습니다. 탭하면 해당 절로 이동합니다',
    emptyCat:'해당 카테고리 준비 중', backGrid:'‹ 전체 카테고리',
    searchLabel:'검색', noResults:'검색 결과가 없습니다',
    prevArticle:'이전 글', nextArticle:'다음 글',
    installTitle:'홈 화면에 추가', installDesc:'오프라인에서도 볼 수 있고 실행이 빨라집니다', installGo:'추가', installNo:'나중에',
    searchHist:'최근 검색', searchHistClear:'기록 삭제', toTop:'맨 위로',
    pulseVisitors:'오늘 {today}명 · 누적 {total}명', pulseEvent:'{name}까지 {n}일', pulseEventToday:'오늘은 {name}', pulseWx:'후쿠오카 {temp}℃ · {wx}', pulseWxRain:'후쿠오카 {temp}℃ · 강수 {p}%', pulseRead:'{n}/{total}편 열람', wxClear:'맑음', wxMainly:'대체로 맑음', wxPartly:'구름 조금', wxOvercast:'흐림', wxFog:'안개', wxDrizzle:'이슬비', wxRain:'비', wxSnow:'눈', wxShowers:'소나기', wxThunder:'뇌우',
    sourcesTitle:'출처 및 링크', sourcesLead:'본문에서 참조한 원문 링크 목록입니다. 눌러서 원문을 확인할 수 있습니다.', sourcesOfficial:'공식·공공기관', sourcesOther:'기타 링크',
    fbTitleArticle:'문제 신고', fbTitleGeneral:'의견 및 제안', fbLead:'오류 지적과 제안을 환영합니다. 내용은 관리자에게만 전달되며 공개되지 않습니다.', fbTypeLb:'유형', fbMsgLb:'구체적인 내용', fbEmailLb:'연락처(선택, 회신용)', fbNote:'제출 후 확인 페이지로 이동했다가 이 사이트로 돌아옵니다.', fbSend:'보내기', fbCancel:'취소', fbTypeWrong:'내용 오류', fbTypeLink:'링크 오류', fbTypeStale:'정보가 오래됨', fbTypeAdd:'보충 희망', fbTypeOther:'기타', fbKindArticle:'오류 신고', fbKindGeneral:'의견', fbEntryArticle:'오류를 발견하셨나요? 신고하기', fbEntryGeneral:'의견 및 제안', fbOpen:'피드백',
    searchFuzzy:'정확히 일치하는 항목이 없어 비슷한 표기의 결과를 표시합니다(오타 허용)',
    searchAlias:'해당 단어를 찾을 수 없어 관련 용어의 결과를 표시합니다',
    searchCount:'%n%건 (관련도순)', searchHint:'더 짧은 키워드로 시도해 보세요. 예:',
    pinnedTag:'고정 · 필독',
    historyTitle:'최근 본 글', clear:'지우기', noHistory:'기록 없음', noHistorySub:'가이드를 열면 여기에 표시됩니다',
    mapTip:'지도는 Kyudaimap 제공',
    updated:'최종 업데이트', byAdmin:'관리자가 작성', endMark:'— 끝 —',
    bodyNotice:'본문은 중국어입니다. 언어 전환은 내비게이션과 요약에 적용됩니다.',
    openLink:'열기 ›', seeRef:'참조', copied:'복사됨: ', cleared:'삭제했습니다',
    upcoming:'다가오는 일정', recent3:'최근 3건',
    dataSrc:'출처: 내각부 공휴일 + 규슈대 학사일정(오프라인)',
    wd:['일','월','화','수','목','금','토'], wdFull:['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    legend:{rest:'방학/휴일',admin:'행정',term:'학기',misc:'행사'},
    typeLabels:{admin:'행정',term:'학기',break:'방학',holiday:'휴일',event:'행사',exam:'입시',user:'투고'},
    today:'오늘', expand:'펼치기 ⌄', collapse:'접기 ⌃',
        exportIcs:'캘린더 내보내기', exportIcsTitle:'.ics 내보내기 (휴대폰 캘린더 지원)', exported:'.ics 파일 생성됨',
        monthTitle:(y,m)=>`${y}년 ${m}월`, dayTitle:(m,d,wd)=>`${m}월 ${d}일 · ${wd}`,
    ongoing:'진행 중', pending:'확인 대기', pendingBox:'⬜ 확인 대기',
    nItems:n=>`${n}건`, noneOnDay:'일정 없음', monthN:n=>`이달 ${n}건`, tapDetail:'눌러서 상세 보기',
    noUpcoming:'가까운 시일의 수록 일정이 없습니다', renkyu:n=>`${n}일 연휴`,
    place:'장소', source:'출처', locale:'ko-KR',
    facHead:'학부·대학원 공식 사이트', facSub:'각 학부·대학원 공식 사이트로 이동', facUg:'학부', facGrad:'대학원',
    facSrc:'출처: 규슈대 학부·대학원 목록 (2026-08-24 수집)',
        // 생활지원버스 (bus_live)
        busStop:'정류장', busDirToStation:'역 방면', busDirFromStation:'기숙사 방면',
        busRunning:'오늘 운행 중', busNotRunning:'오늘 운행 없음', busRunDays:'운행일',
        busLastBusGone:'오늘 막차 출발함', busNoData:'데이터 없음',
        busNote:'30초마다 자동 갱신 · 시각은 공식 포스터 PDF 기준',
        bus_stop_kyousoukan:'이토 협주관', bus_stop_dorm:'도미토리 1-3', bus_stop_settle:'세틀 인터내셔널', bus_stop_gakkentoshi:'큐다이 가켄토시역',
        // 사용 안내
    tour:{ open:'사용법 안내', skip:'건너뛰기', prev:'이전', next:'다음', done:'시작하기',
      steps:{
        welcome:{t:'규슈대 이토 유학생 가이드', d:'도착 후 처리할 십수 가지 수속과 이토 캠퍼스 지도, 학사 일정을 한곳에 정리했습니다. 사용법은 약 30초면 확인할 수 있습니다.'},
        search:{t:'위치를 모를 때는 검색', d:'제목과 본문을 함께 검색합니다. 「재류카드」「쓰레기」「버스」「장학금」등으로 시도해 보세요.'},
        pinned:{t:'먼저 읽을 2편', d:'『도착 후 30일』은 모든 수속을 시간순으로 정리해 의존 관계를 한눈에 볼 수 있습니다. 『사기 방지 가이드』는 입국 초기에 표적이 되기 쉬운 수법을 다룹니다.'},
        cats:{t:'15개 상황별 분류', d:'지금 해야 하는 일부터 들어가세요: 입국, 체류, 주거, 은행, 휴대폰, 아르바이트, 의료, 교통……'},
        tabs:{t:'아래 다섯 개 탭', d:'지도에서는 강의실·버스·교내 셔틀을 검색할 수 있습니다. 촌력은 학사 일정과 행사, 공식 사이트는 각 학부로, 기록은 읽은 글입니다.'},
        lang:{t:'4개 언어 · 오프라인 지원', d:'중국어·일본어·영어·한국어를 언제든 전환. 홈 화면에 추가하면 오프라인에서도 열립니다 —— 구청 대기 중이나 신호 없는 지하에서도 사용할 수 있습니다.'}
      } },
  },
};
const LANGS = ['zh','ja','en','ko'];
/** 把一个 BCP 47 语言标签映射到本站支持的 4 语之一，映射不上返回 null。
    只看主语言子标签：zh-CN / zh-TW / zh-Hant 都算中文，en-GB / en-SG 都算英文。
    简繁不分是有意的 —— 正文是简体，但繁体读者读简体远好过被丢去英文。 */
function matchLang(tag){
  const b=String(tag||'').toLowerCase();
  if(b.startsWith('zh')) return 'zh';
  if(b.startsWith('ja')) return 'ja';
  if(b.startsWith('ko')) return 'ko';
  if(b.startsWith('en')) return 'en';
  return null;
}

/** 决定初始语言。优先级：
      ① 用户自己选过的（localStorage，跨指南与地图共用）
      ② 浏览器/系统的语言偏好列表，按用户设定的顺序取第一个能对上的
      ③ 都对不上 → 英文
    ③ 用英文而不是中文，是因为面向的是全校各国新生：正文虽以中文写成，
    但一个越南语或印尼语系统的学生，看英文远比看中文有用。
    地图支持 7 语（含 hi/es/fr），若用户在地图选过那些，这里也会走到 ③。

    注意：检测结果不写回 localStorage —— 只有用户亲自在下拉里选过才算偏好。
    这样系统语言变了，站点会跟着变；而一旦手动选过，就永远尊重手动选择。 */
function getLang(){
  let stored=null;
  try{ stored=localStorage.getItem('kyudai-lang'); }catch(e){}
  if(stored && UI[stored]) return stored;
  try{
    const prefs=(navigator.languages&&navigator.languages.length)
      ? navigator.languages : [navigator.language];
    for(const tag of prefs){ const m=matchLang(tag); if(m) return m; }
  }catch(e){}
  return 'en';
}
let lang = getLang();
function setLang(v){ if(!UI[v]) v='zh'; lang=v; try{ localStorage.setItem('kyudai-lang',v); }catch(e){}
  applyDocLang();
  // 地图 iframe 同读 localStorage('kyudai-lang')，重载即同步。
  // 未挂载（还没点过地图 tab）时 src 为空，此时重设会把 iframe 指向当前页 —— 必须跳过。
  try{ const f=document.getElementById('mapFrame'); if(f&&f.src){ f.src=f.src; } }catch(e){}
}
/* ── 村历条目名的 en / ko ──────────────────────────────────────
   data-cunli.js 是从生成器产出的移植件，只带 ja（title）与 zh，没有 en/ko。
   不补的话，英文和韩文界面下整张校历显示的是日文名 + 中文副名 ——
   对读英文或韩文的人来说，屏幕上两种文字他都不认得。
   放在这里而不是塞回 data-cunli.js：那份是生成物的忠实移植，
   往里加生成器不产出的字段会造成两边漂移。按【日文原名】索引。
   祝日的英文名用内閣府的官方译法。 */
const CUNLI_NAMES = {
  '元日':{en:"New Year's Day",ko:'신정'},
  '成人の日':{en:'Coming of Age Day',ko:'성인의 날'},
  '建国記念の日':{en:'National Foundation Day',ko:'건국기념일'},
  '天皇誕生日':{en:"The Emperor's Birthday",ko:'천황 탄생일'},
  '春分の日':{en:'Vernal Equinox Day',ko:'춘분의 날'},
  '昭和の日':{en:'Showa Day',ko:'쇼와의 날'},
  '憲法記念日':{en:'Constitution Memorial Day',ko:'헌법기념일'},
  'みどりの日':{en:'Greenery Day',ko:'녹색의 날'},
  'こどもの日':{en:"Children's Day",ko:'어린이날'},
  '振替休日':{en:'Substitute Holiday',ko:'대체 공휴일'},
  '海の日':{en:'Marine Day',ko:'바다의 날'},
  '山の日':{en:'Mountain Day',ko:'산의 날'},
  '敬老の日':{en:'Respect for the Aged Day',ko:'경로의 날'},
  '国民の休日':{en:"Citizens' Holiday",ko:'국민의 휴일'},
  '秋分の日':{en:'Autumnal Equinox Day',ko:'추분의 날'},
  'スポーツの日':{en:'Sports Day',ko:'스포츠의 날'},
  '文化の日':{en:'Culture Day',ko:'문화의 날'},
  '勤労感謝の日':{en:'Labor Thanksgiving Day',ko:'근로감사의 날'},
  '前期開始':{en:'First semester begins',ko:'1학기 시작'},
  '前期終了':{en:'First semester ends',ko:'1학기 종료'},
  '後期開始':{en:'Second semester begins',ko:'2학기 시작'},
  '後期終了':{en:'Second semester ends',ko:'2학기 종료'},
  '春学期開始':{en:'Spring quarter begins',ko:'봄학기 시작'},
  '春学期終了':{en:'Spring quarter ends',ko:'봄학기 종료'},
  '夏学期開始':{en:'Summer quarter begins',ko:'여름학기 시작'},
  '夏学期終了':{en:'Summer quarter ends',ko:'여름학기 종료'},
  '秋学期開始':{en:'Autumn quarter begins',ko:'가을학기 시작'},
  '秋学期終了':{en:'Autumn quarter ends',ko:'가을학기 종료'},
  '冬学期開始':{en:'Winter quarter begins',ko:'겨울학기 시작'},
  '冬学期終了':{en:'Winter quarter ends',ko:'겨울학기 종료'},
  '春季休業':{en:'Spring break',ko:'봄방학'},
  '夏季休業':{en:'Summer break',ko:'여름방학'},
  '冬季休業':{en:'Winter break',ko:'겨울방학'},
  '春季入学式':{en:'Spring entrance ceremony',ko:'봄 입학식'},
  '秋季入学式':{en:'Autumn entrance ceremony',ko:'가을 입학식'},
  '春季学位記授与式':{en:'Spring degree conferment ceremony',ko:'봄 학위수여식'},
  '秋季学位記授与式':{en:'Autumn degree conferment ceremony',ko:'가을 학위수여식'},
  '本学記念日':{en:'University Foundation Day',ko:'개교기념일'},
  '学生定期健康診断':{en:'Annual student health check',ko:'학생 정기 건강검진'},
  '新入生オリエンテーション':{en:'New student orientation',ko:'신입생 오리엔테이션'},
  '九大祭・芸工際':{en:'Kyudai Festival / Geiko Festival',ko:'규슈대 축제·게이코 축제'},
  '大学入学共通テスト':{en:'Common Test for University Admissions',ko:'대학입학 공통테스트'},
  '一般選抜（前期日程）':{en:'General entrance exam (first round)',ko:'일반선발(전기 일정)'},
  '一般選抜（後期日程）':{en:'General entrance exam (second round)',ko:'일반선발(후기 일정)'},
  '履修登録期間（後期）':{en:'Course registration (second semester)',ko:'수강신청 기간(2학기)'},

  /* 2026-09-15 补：留学課（c63–c69）这批新入生支援活动只有 title+zh，
     en/ko 译名漏了 —— 切到英文/韩文时日历条仍显示日文。
     数据加了名字表没加，查表失败就回落日文（nameOf 的 fallback）。
     防止再次发生：tools/check_cunli_i18n.js 会卡住缺译名的新条目。 */
  '新入留学生サポート（空港シャトルバス）':{en:"Newcomer Support: Airport Shuttle Bus",ko:"신입 유학생 지원: 공항 셔틀버스"},
  '新入留学生サポート（生活支援バス）':{en:"Newcomer Support: Daily-life Shuttle Bus",ko:"신입 유학생 지원: 생활 지원 버스"},
  '行政手続き・銀行ガイダンス':{en:"Administrative Procedures & Bank Guidance",ko:"행정 수속 · 은행 가이던스"},
  '新入留学生オリエンテーション':{en:"New International Student Orientation",ko:"신입 유학생 오리엔테이션"},
  '新入留学生キャンパスツアー':{en:"Newcomer Campus Tour",ko:"신입 유학생 캠퍼스 투어"},
  '福岡銀行口座開設会':{en:"Fukuoka Bank Account Opening Session",ko:"후쿠오카 은행 계좌 개설회"},
  'ESP 加入期限':{en:"ESP Enrollment Deadline",ko:"ESP 가입 마감"},
};
/** 村历条目名：按日文原名查当前语言的译名，查不到返回空串（调用方自己决定退回什么）。 */
function cunliName(jaTitle, lang){
  const e = CUNLI_NAMES[String(jaTitle||'')];
  return (e && e[lang || getLangNow()]) || '';
}

/** 同步 <html lang>。不同步的话浏览器始终认为整站是中文：Chrome 会对着英文正文
    弹「翻译此页」，CJK 字体按中文规则回退，读屏软件也用错语言朗读。 */
function applyDocLang(){
  try{ document.documentElement.setAttribute('lang', lang==='zh'?'zh-Hans':lang); }catch(e){}
}
/** t('key') / t('tabs.map')。回退链：当前语言 → zh。函数值原样返回（调用方自带参数）。 */
function t(key){
  const cur=UI[lang]||UI.zh;
  if(key.includes('.')){ const[a,b]=key.split('.');
    if(cur[a]&&cur[a][b]!==undefined) return cur[a][b];
    if(UI.zh[a]&&UI.zh[a][b]!==undefined) return UI.zh[a][b];
    return key; }
  if(cur[key]!==undefined) return cur[key];
  if(UI.zh[key]!==undefined) return UI.zh[key];
  return key;
}
function catName(id){ const m=CAT_I18N[lang]||CAT_I18N.zh; return m[String(id)]||CAT_I18N.zh[String(id)]||String(id); }
function articleField(art, field){
  if(!art || !art._id) return '';
  if(lang!=='zh'){
    const i18n=window.ARTICLES_I18N&&window.ARTICLES_I18N[art._id];
    if(i18n && i18n[field] && i18n[field][lang]) return i18n[field][lang];
  }
  return art[field]||'';
}
applyDocLang();
function getLangNow(){return lang}

/* 村历详情的**说明文字**与**地点**译名。
   为什么也要翻译：nameOf() 只管活动名，详情面板里 note / place 原来是直接
   输出中文字段（it.note / it.place.zh），于是切到英文/韩文，点开一条
   留学課活动，标题是英文、说明还是中文 —— 与「活动名不跟着切」是同一个病。
   note 按 **条目 id** 索引（每条说明都是独立文案，不像活动名会重复）；
   place 按**日文原名**索引，与 CUNLI_NAMES 一致（同一地点会被多条复用）。 */
const CUNLI_NOTES = {
  c62:{en:'Not yet published on the Kyushu U academic calendar — check the student affairs system (Gakumu) or your faculty notice.',
       ko:'규슈대 학사력에 아직 미공개 — 학무시스템 또는 소속 학부 공지를 확인하세요.'},
  c63:{en:'International Student Office: Fukuoka Airport to Kyudai Gakken Toshi Stn / dorms. First come, first served, no booking needed. See the Newcomer guide.',
       ko:'유학과: 후쿠오카 공항 → 규다이 가켄토시역/각 기숙사. 선착순, 예약 불필요. 「신입생 특집」 참조.'},
  c64:{en:'International Student Office: runs 9/24-25, 9/29-30 and 10/1. Dorms to Kyudai Gakken Toshi Stn. See the Newcomer guide for live times.',
       ko:'유학과: 운행일 9/24-25・29-30・10/1. 기숙사 ⇄ 규다이 가켄토시역. 실시간 운행은 「신입생 특집」 참조.'},
  c65:{en:'International Student Office: for dorm residents. Attendance at both Session 1 and 2 is required; advance registration needed. See the Newcomer guide.',
       ko:'유학과: 기숙사 입주자 대상. 1회차와 2회차 모두 참석 필수, 사전 신청 필요. 「신입생 특집」 참조.'},
  c66:{en:'12:50-15:10, attendance required. On the same day: SIM sales, library tour, immigration consultation and a welcome party. See the Newcomer guide.',
       ko:'12:50-15:10 참석 필수. 같은 날 SIM 판매회・도서관 투어・출입국 상담회・웰컴 파티. 「신입생 특집」 참조.'},
  c67:{en:'International Student Office / Q-Mate: 10:30-12:00 and 15:00-16:30 each day, two sessions (east / west). Registration required. See the Newcomer guide.',
       ko:'유학과/Q-Mate: 매일 10:30-12:00・15:00-16:30 동/서 두 차례, 신청 필요. 「신입생 특집」 참조.'},
  c68:{en:'International Student Office: for new students who have already registered their address. Advance registration required; the card is issued on the spot. See the Newcomer guide.',
       ko:'유학과: 주소 등록을 마친 신입생 대상. 사전 신청 필요, 현장에서 카드 발급. 「신입생 특집」 참조.'},
  c69:{en:'All international students must enrol. Apply through the OSSMA app after arriving in Japan. See the Newcomer guide.',
       ko:'유학생 전원 가입 필수. OSSMA 앱으로 신청하며 일본 도착 후 처리합니다. 「신입생 특집」 참조.'},
};
const CUNLI_PLACES = {
  '椎木講堂':{en:'Shiiki Hall (University HQ)',ko:'시이키 강당 (대학 본부)'},
};
/** 详情面板的说明文字：en/ko 有译文用译文，否则回中文（中文是本站编写语言） */
function cunliNote(it, lang){
  const e = it && CUNLI_NOTES[it.id];
  if(e && e[lang]) return e[lang];
  return (it && it.note) || '';
}
/** 详情面板的地点：en/ko 有译名用译名，否则「中文（日文原名）」 */
function cunliPlace(it, lang){
  const pz = it && it.place; if(!pz) return '';
  const e = CUNLI_PLACES[pz.ja];
  if(e && e[lang]) return e[lang] + '（' + pz.ja + '）';
  if(lang === 'ja') return pz.ja;
  if(lang === 'zh') return pz.zh + '（' + pz.ja + '）';
  return pz.zh + '（' + pz.ja + '）';
}

window.GuideI18N={ LANGS, UI, CAT_I18N, CUNLI_NAMES, cunliName, CUNLI_NOTES, CUNLI_PLACES, cunliNote, cunliPlace, getLang:()=>lang, setLang, t, catName, articleField, applyDocLang, _s(v){lang=v;applyDocLang();} };
})();
