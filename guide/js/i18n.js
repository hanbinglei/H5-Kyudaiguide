// i18n.js — h5 多语言（唯一 UI 词典，与地图共用 localStorage 'kyudai-lang'）
// 架构约定：
//   · 所有界面文案只能来自本词典；app.js/render.js 不得再写死任何语言的字符串。
//   · 回退链固定为「当前语言 → zh」——zh 是内容源语言，绝不回退到第三种语言。
//   · 文章正文见 articles-body-i18n.js（13 篇 ja/en/ko 已全译）。bodyNotice 保留为兜底：
//     日后新增文章尚无译本时，该篇会回退中文原文并在顶部显示这条提示。
(function(){
// ── 品类名（12 宫格与文章分类标签共用） ──
const CAT_I18N = {
  zh:{ '1':'入境准备','2':'在留手续','3':'租房','4':'银行·汇款','5':'手机·网络','6':'学业·奖学金','7':'打工','8':'医疗·保险','9':'交通','10':'生活贴士','11':'购物','12':'应急联系','13':'反诈安全' },
  ja:{ '1':'入国準備','2':'在留手続き','3':'住まい探し','4':'銀行・送金','5':'携帯・ネット','6':'学業・奨学金','7':'アルバイト','8':'医療・保険','9':'交通','10':'生活のコツ','11':'買い物','12':'緊急連絡先','13':'詐欺防止' },
  en:{ '1':'Arrival','2':'Residence','3':'Housing','4':'Banking','5':'Mobile & Net','6':'Study & Grants','7':'Part-time','8':'Medical','9':'Transport','10':'Life Tips','11':'Shopping','12':'Emergency','13':'Anti-Fraud' },
  ko:{ '1':'입국 준비','2':'체류 수속','3':'주거','4':'은행·송금','5':'휴대폰·인터넷','6':'학업·장학금','7':'아르바이트','8':'의료·보험','9':'교통','10':'생활 팁','11':'쇼핑','12':'긴급 연락','13':'사기 방지' },
};
// ── UI 词典 ──
const UI = {
  zh:{
    self:'中文', brandSub:'九大伊都 · 留学指南 H5', searchPh:'搜索标题 / 正文',
    tabs:{map:'地图',guide:'指南',cunli:'村历',faculty:'官网',history:'历史'},
    guideHead:'指南 · 12 场景', guideSub:'选一个场景直接查看指南',
    emptyCat:'该分类内容整理中，敬请期待', backGrid:'‹ 全部品类',
    searchLabel:'搜索', noResults:'没有匹配结果',
    pinnedTag:'置顶 · 必读',
    historyTitle:'最近看过', clear:'清空', noHistory:'还没有浏览记录', noHistorySub:'打开一篇指南后会在这里显示',
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
    monthTitle:(y,m)=>`${y} 年 ${m} 月`, dayTitle:(m,d,wd)=>`${m} 月 ${d} 日 · ${wd}`,
    ongoing:'进行中', pending:'待核对', pendingBox:'⬜ 待核对',
    nItems:n=>`${n} 条`, noneOnDay:'没有日程', monthN:n=>`本月 ${n} 条`, tapDetail:'点一条看详情',
    noUpcoming:'近期没有已收录的日程', renkyu:n=>`${n} 连休`,
    place:'地点', source:'来源', locale:'zh-CN',
    // 官网
    facHead:'院系官网', facSub:'跳转各学部 / 大学院学府官方网站', facUg:'学部（本科）', facGrad:'大学院 学府',
    facSrc:'数据来源：九州大学官网 学部・大学院一览（2026-08-24 抓取）',
  },
  ja:{
    self:'日本語', brandSub:'九大伊都・留学生ガイド H5', searchPh:'タイトル / 本文で検索',
    tabs:{map:'地図',guide:'ガイド',cunli:'村暦',faculty:'公式',history:'履歴'},
    guideHead:'ガイド · 12 カテゴリ', guideSub:'カテゴリを選んでガイドを開く',
    emptyCat:'このカテゴリは準備中です', backGrid:'‹ 全カテゴリ',
    searchLabel:'検索', noResults:'該当する結果がありません',
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
    monthTitle:(y,m)=>`${y}年${m}月`, dayTitle:(m,d,wd)=>`${m}月${d}日 · ${wd}`,
    ongoing:'期間中', pending:'確認待ち', pendingBox:'⬜ 確認待ち',
    nItems:n=>`${n} 件`, noneOnDay:'予定なし', monthN:n=>`今月 ${n} 件`, tapDetail:'タップで詳細',
    noUpcoming:'直近の収録予定はありません', renkyu:n=>`${n}連休`,
    place:'場所', source:'出典', locale:'ja-JP',
    facHead:'学部・学府 公式サイト', facSub:'各学部・大学院学府の公式サイトへ', facUg:'学部', facGrad:'大学院 学府',
    facSrc:'出典：九州大学 学部・大学院一覧（2026-08-24 取得）',
  },
  en:{
    self:'English', brandSub:'Kyushu U Ito — Guide H5', searchPh:'Search titles / text',
    tabs:{map:'Map',guide:'Guide',cunli:'Calendar',faculty:'Sites',history:'History'},
    guideHead:'Guide · 12 Categories', guideSub:'Pick a category to read',
    emptyCat:'Content coming soon', backGrid:'‹ All Categories',
    searchLabel:'Search', noResults:'No results found',
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
    monthTitle:(y,m)=>['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]+' '+y,
    dayTitle:(m,d,wd)=>`${wd}, ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]} ${d}`,
    ongoing:'Ongoing', pending:'Unverified', pendingBox:'⬜ Unverified',
    nItems:n=>`${n} item${n>1?'s':''}`, noneOnDay:'No events', monthN:n=>`${n} this month`, tapDetail:'Tap for details',
    noUpcoming:'No recorded events coming up', renkyu:n=>`${n}-day break`,
    place:'Place', source:'Source', locale:'en-US',
    facHead:'Faculty Websites', facSub:'Official sites of each school & graduate school', facUg:'Undergraduate', facGrad:'Graduate Schools',
    facSrc:'Source: Kyushu University faculty index (fetched 2026-08-24)',
  },
  ko:{
    self:'한국어', brandSub:'큐슈대 이토 · 가이드 H5', searchPh:'제목 / 본문 검색',
    tabs:{map:'지도',guide:'가이드',cunli:'마을달력',faculty:'사이트',history:'기록'},
    guideHead:'가이드 · 12 카테고리', guideSub:'카테고리를 눌러 가이드 열기',
    emptyCat:'해당 카테고리 준비 중', backGrid:'‹ 전체 카테고리',
    searchLabel:'검색', noResults:'검색 결과가 없습니다',
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
    monthTitle:(y,m)=>`${y}년 ${m}월`, dayTitle:(m,d,wd)=>`${m}월 ${d}일 · ${wd}`,
    ongoing:'진행 중', pending:'확인 대기', pendingBox:'⬜ 확인 대기',
    nItems:n=>`${n}건`, noneOnDay:'일정 없음', monthN:n=>`이달 ${n}건`, tapDetail:'눌러서 상세 보기',
    noUpcoming:'가까운 시일의 수록 일정이 없습니다', renkyu:n=>`${n}일 연휴`,
    place:'장소', source:'출처', locale:'ko-KR',
    facHead:'학부·대학원 공식 사이트', facSub:'각 학부·대학원 공식 사이트로 이동', facUg:'학부', facGrad:'대학원',
    facSrc:'출처: 규슈대 학부·대학원 목록 (2026-08-24 수집)',
  },
};
const LANGS = ['zh','ja','en','ko'];
function getLang(){
  try{ const v=localStorage.getItem('kyudai-lang'); if(v && UI[v]) return v; }catch(e){}
  try{ const b=(navigator.language||'').toLowerCase(); if(b.startsWith('ja')) return 'ja'; if(b.startsWith('ko')) return 'ko'; if(b.startsWith('en')) return 'en'; }catch(e){}
  return 'zh';
}
let lang = getLang();
function setLang(v){ if(!UI[v]) v='zh'; lang=v; try{ localStorage.setItem('kyudai-lang',v); }catch(e){}
  // 地图 iframe 同读 localStorage('kyudai-lang')，重载即同步
  try{ const f=document.getElementById('mapFrame'); if(f){ const src=f.src; f.src=src; } }catch(e){}
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
window.GuideI18N={ LANGS, UI, CAT_I18N, getLang:()=>lang, setLang, t, catName, articleField, _s(v){lang=v;} };
})();
