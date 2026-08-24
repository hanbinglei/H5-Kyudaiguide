// i18n.js — h5 多语言（外壳 UI + 品类名，与地图共用 kyudai-lang）
(function(){
// ── 品类名 ──
const CAT_I18N = {
  zh:{ '1':'入境准备','2':'在留手续','3':'租房','4':'银行·汇款','5':'手机·网络','6':'学业·奖学金','7':'打工','8':'医疗·保险','9':'交通','10':'生活贴士','11':'购物','12':'应急联系' },
  ja:{ '1':'入国準備','2':'在留手続き','3':'住まい探し','4':'銀行・送金','5':'携帯・ネット','6':'学業・奨学金','7':'アルバイト','8':'医療・保険','9':'交通','10':'生活のコツ','11':'買い物','12':'緊急連絡先' },
  en:{ '1':'Arrival','2':'Residence','3':'Housing','4':'Banking','5':'Mobile & Net','6':'Study & Grants','7':'Part-time','8':'Medical','9':'Transport','10':'Life Tips','11':'Shopping','12':'Emergency' },
  ko:{ '1':'입국 준비','2':'체류 수속','3':'주거','4':'은행·송금','5':'휴대폰·인터넷','6':'학업·장학금','7':'아르바이트','8':'의료·보험','9':'교통','10':'생활 팁','11':'쇼핑','12':'긴급 연락' },
};
// ── UI 文案 ──
const UI = {
  zh:{
    self:'中文', brandSub:'九大伊都 · 留学指南 H5', searchPh:'搜索标题 / 标签',
    tabs:{map:'地图',guide:'指南',cunli:'村历',faculty:'官网',history:'历史'},
    guideHead:'指南 · 12 场景', guideSub:'选一个场景直接查看指南',
    emptyCat:'该分类内容整理中，敬请期待', backGrid:'‹ 全部品类',
    historyTitle:'最近看过', clear:'清空', noHistory:'还没有浏览记录', noHistorySub:'打开一篇指南后会在这里显示',
    upcoming:'接下来', recent3:'最近 3 条',
    mapTip:'地图由 Kyudaimap 提供 · 支持搜索与定位', dataSrc:'数据来源：内阁府祝日 + 九州大学学年历（离线种子）',
    updated:'最后更新', byAdmin:'管理员编写维护',全文完:'— 全文完 —', related:'相关指南',
    facHead:'院系官网', facSub:'跳转各学部 / 大学院学府官方网站', facUg:'学部（本科）', facGrad:'大学院 学府', facSrc:'数据来源：九州大学官网 学部・大学院一览（2026-08-24 抓取）',
  },
  ja:{
    self:'日本語', brandSub:'九大伊都・留学生ガイド H5', searchPh:'タイトル / タグで検索',
    tabs:{map:'地図',guide:'ガイド',cunli:'村暦',faculty:'公式',history:'履歴'},
    guideHead:'ガイド · 12 カテゴリ', guideSub:'カテゴリを選んでガイドを開く',
    emptyCat:'このカテゴリは準備中です', backGrid:'‹ 全カテゴリ',
    historyTitle:'閲覧履歴', clear:'クリア', noHistory:'履歴なし', noHistorySub:'ガイドを開くとここに表示されます',
    upcoming:'この先', recent3:'直近 3 件',
    mapTip:'地図は Kyudaimap 提供', dataSrc:'出典：内閣府 祝日 + 九州大学 学年暦（オフライン）',
    updated:'最終更新', byAdmin:'管理者が作成・管理',全文完:'— 全文終了 —', related:'関連ガイド',
    facHead:'学部・学府 公式サイト', facSub:'各学部・大学院学府の公式サイトへ', facUg:'学部', facGrad:'大学院 学府', facSrc:'出典：九州大学 学部・大学院一覧（2026-08-24 取得）',
  },
  en:{
    self:'English', brandSub:'Kyushu U Ito — Guide H5', searchPh:'Search titles / tags',
    tabs:{map:'Map',guide:'Guide',cunli:'Calendar',faculty:'Sites',history:'History'},
    guideHead:'Guide · 12 Categories', guideSub:'Pick a category to read',
    emptyCat:'Content coming soon', backGrid:'‹ All Categories',
    historyTitle:'Recent', clear:'Clear', noHistory:'No history yet', noHistorySub:'Open a guide and it will appear here',
    upcoming:'Upcoming', recent3:'Next 3',
    mapTip:'Map by Kyudaimap', dataSrc:'Sources: Cabinet Office holidays + Kyushu U calendar (offline)',
    updated:'Last updated', byAdmin:'Maintained by admin',全文完:'— End —', related:'Related Guides',
    facHead:'Faculty Websites', facSub:'Official sites of each school & graduate school', facUg:'Undergraduate', facGrad:'Graduate Schools', facSrc:'Source: Kyushu University faculty index (fetched 2026-08-24)',
  },
  ko:{
    self:'한국어', brandSub:'큐슈대 이토 · 가이드 H5', searchPh:'제목 / 태그 검색',
    tabs:{map:'지도',guide:'가이드',cunli:'마을달력',faculty:'사이트',history:'기록'},
    guideHead:'가이드 · 12 카테고리', guideSub:'카테고리를 눌러 가이드 열기',
    emptyCat:'해당 카테고리 준비 중', backGrid:'‹ 전체 카테고리',
    historyTitle:'최근 본 글', clear:'지우기', noHistory:'기록 없음', noHistorySub:'가이드를 열면 여기에 표시됩니다',
    upcoming:'다가오는 일정', recent3:'최근 3건',
    mapTip:'지도는 Kyudaimap 제공', dataSrc:'출처: 내각부 공휴일 + 규슈대 학사일정(오프라인)',
    updated:'최종 업데이트', byAdmin:'관리자가 작성',全文完:'— 끝 —', related:'관련 가이드',
    facHead:'학부·대학원 공식 사이트', facSub:'각 학부·대학원 공식 사이트로 이동', facUg:'학부', facGrad:'대학원', facSrc:'출처: 규슈대 학부·대학원 목록 (2026-08-24 수집)',
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
  // 同步地图 iframe 语言：地图读 localStorage('kyudai-lang')，重载即可
  try{ const f=document.getElementById('mapFrame'); if(f){ const src=f.src; f.src=src; } }catch(e){}
}
function t(key){
  const cur=UI[lang]||UI.zh;
  if(key.includes('.')){ const[a,b]=key.split('.'); if(cur[a]&&cur[a][b]!==undefined) return cur[a][b]; if(UI.zh[a]&&UI.zh[a][b]!==undefined) return UI.zh[a][b]; return key; }
  if(cur[key]!==undefined) return cur[key];
  if(UI.zh[key]!==undefined) return UI.zh[key];
  return key;
}
function catName(id){ const m=CAT_I18N[lang]||CAT_I18N.ja; return m[String(id)]||(CAT_I18N.ja[String(id)]||String(id)); }
function articleField(art, field){
  if(!art || !art._id) return '';
  const i18n=window.ARTICLES_I18N&&window.ARTICLES_I18N[art._id];
  if(i18n && i18n[field] && i18n[field][lang]) return i18n[field][lang];
  return art[field]||'';
}
function sectionHeadings(art){
  if(!art||!art._id) return [];
  const base=(art.blocks||[]).filter(b=>b.type==='heading').map(b=>b.text);
  if(lang==='zh') return base;
  const i18n=window.ARTICLES_I18N&&window.ARTICLES_I18N[art._id];
  if(!i18n||!i18n.sections||!i18n.sections[lang]) return base;
  const tr=i18n.sections[lang];
  return base.map((h,i)=>(tr[i]||h));
}
window.GuideI18N={ LANGS, UI, CAT_I18N, getLang:()=>lang, setLang, t, catName, articleField, sectionHeadings, _s(v){lang=v;} };
})();
