// data-faculties.js — 九州大学 学部 / 大学院学府 官网快速链接
// 数据来源（官方权威索引，2026-08-24 抓取）：
//   https://www.kyushu-u.ac.jp/ja/faculty/undergraduate/   （学部 → 各学部官网）
//   https://www.kyushu-u.ac.jp/ja/faculty/                 （大学院 → 各学府官网）
// URL 均为官方索引页所链接的各单位官方站点；名称以官方日文为准，zh/en 为对照译名。
// campus: ito=伊都 / hosp=病院(馬出) / ohashi=大橋 / chikushi=筑紫
(function(){
const FACULTIES = {
  // ── 学部（本科）12 ──
  undergraduate: [
    { ja:'共創学部',   zh:'共创学部',   en:'School of Interdisciplinary Science and Innovation', url:'https://kyoso.kyushu-u.ac.jp/',        campus:'ito' },
    { ja:'文学部',     zh:'文学部',     en:'School of Letters',              url:'https://www2.lit.kyushu-u.ac.jp/',      campus:'ito' },
    { ja:'教育学部',   zh:'教育学部',   en:'School of Education',            url:'https://www.education.kyushu-u.ac.jp/', campus:'ito' },
    { ja:'法学部',     zh:'法学部',     en:'School of Law',                  url:'https://www.law.kyushu-u.ac.jp/',       campus:'ito' },
    { ja:'経済学部',   zh:'经济学部',   en:'School of Economics',            url:'https://www.econ.kyushu-u.ac.jp/',      campus:'ito' },
    { ja:'理学部',     zh:'理学部',     en:'School of Science',              url:'https://www.sci.kyushu-u.ac.jp/',       campus:'ito' },
    { ja:'医学部',     zh:'医学部',     en:'School of Medicine',             url:'https://www.med.kyushu-u.ac.jp/medicine/', campus:'hosp' },
    { ja:'歯学部',     zh:'齿学部',     en:'School of Dentistry',            url:'https://www.dent.kyushu-u.ac.jp/',      campus:'hosp' },
    { ja:'薬学部',     zh:'药学部',     en:'School of Pharmaceutical Sciences', url:'https://www.phar.kyushu-u.ac.jp/',   campus:'hosp' },
    { ja:'工学部',     zh:'工学部',     en:'School of Engineering',          url:'https://eng.kyushu-u.ac.jp/',           campus:'ito' },
    { ja:'芸術工学部', zh:'艺术工学部', en:'School of Design',               url:'https://www.design.kyushu-u.ac.jp/',    campus:'ohashi' },
    { ja:'農学部',     zh:'农学部',     en:'School of Agriculture',          url:'https://ag.kyushu-u.ac.jp/',            campus:'ito' },
  ],
  // ── 大学院 学府 ──
  graduate: [
    { ja:'人文科学府',           zh:'人文科学府',       en:'Graduate School of Humanities',                 url:'https://www2.lit.kyushu-u.ac.jp/',        campus:'ito' },
    { ja:'地球社会統合科学府',   zh:'地球社会统合科学府', en:'Graduate School of Integrated Sciences for Global Society', url:'https://isgs.kyushu-u.ac.jp/', campus:'ito' },
    { ja:'人間環境学府',         zh:'人类环境学府',     en:'Graduate School of Human-Environment Studies',  url:'https://www.hues.kyushu-u.ac.jp/',        campus:'ito' },
    { ja:'法学府',               zh:'法学府',           en:'Graduate School of Law',                        url:'https://www.law.kyushu-u.ac.jp/',         campus:'ito' },
    { ja:'法務学府（法科大学院）', zh:'法务学府（法科大学院）', en:'Law School',                             url:'https://www.law.kyushu-u.ac.jp/lawschool/', campus:'ito' },
    { ja:'経済学府',             zh:'经济学府',         en:'Graduate School of Economics',                  url:'https://www.econ.kyushu-u.ac.jp/',        campus:'ito' },
    { ja:'ビジネス・スクール（QBS）', zh:'商学院（QBS）', en:'Business School (QBS)',                       url:'https://qbs.kyushu-u.ac.jp/',             campus:'ito' },
    { ja:'理学府',               zh:'理学府',           en:'Graduate School of Science',                    url:'https://www.sci.kyushu-u.ac.jp/',         campus:'ito' },
    { ja:'数理学府',             zh:'数理学府',         en:'Graduate School of Mathematics',                url:'https://www.math.kyushu-u.ac.jp/index',   campus:'ito' },
    { ja:'システム生命科学府',   zh:'系统生命科学府',   en:'Graduate School of Systems Life Sciences',      url:'https://www.sls.kyushu-u.ac.jp/',         campus:'ito' },
    { ja:'医学系学府',           zh:'医学系学府',       en:'Graduate School of Medical Sciences',           url:'https://www.med.kyushu-u.ac.jp/',         campus:'hosp' },
    { ja:'歯学府',               zh:'齿学府',           en:'Graduate School of Dental Science',             url:'https://www.dent.kyushu-u.ac.jp/',        campus:'hosp' },
    { ja:'薬学府',               zh:'药学府',           en:'Graduate School of Pharmaceutical Sciences',    url:'https://www.phar.kyushu-u.ac.jp/',        campus:'hosp' },
    { ja:'工学府',               zh:'工学府',           en:'Graduate School of Engineering',                url:'https://eng.kyushu-u.ac.jp/',             campus:'ito' },
    { ja:'芸術工学府',           zh:'艺术工学府',       en:'Graduate School of Design',                     url:'https://www.design.kyushu-u.ac.jp/',      campus:'ohashi' },
    { ja:'システム情報科学府',   zh:'系统信息科学府',   en:'Graduate School of Information Science and Electrical Engineering', url:'https://portal.isee.kyushu-u.ac.jp/', campus:'ito' },
    { ja:'総合理工学府',         zh:'综合理工学府',     en:'Interdisciplinary Graduate School of Engineering Sciences', url:'https://www.tj.kyushu-u.ac.jp/', campus:'chikushi' },
    { ja:'生物資源環境科学府',   zh:'生物资源环境科学府', en:'Graduate School of Bioresource and Bioenvironmental Sciences', url:'https://ag.kyushu-u.ac.jp/', campus:'ito' },
    { ja:'統合新領域学府',       zh:'统合新领域学府',   en:'Graduate School of Integrated Frontier Sciences', url:'https://www.ifs.kyushu-u.ac.jp/',       campus:'ito' },
    { ja:'マス・フォア・イノベーション連係学府', zh:'数学创新联系学府', en:'Graduate School of Mathematics for Innovation', url:'https://www.gpmi.kyushu-u.ac.jp/', campus:'ito' },
    { ja:'人文情報連係学府',     zh:'人文信息联系学府', en:'Graduate School of Digital Humanities',         url:'https://dh.kyushu-u.ac.jp/',              campus:'ito' },
  ],
  _source: 'https://www.kyushu-u.ac.jp/ja/faculty/',
  _fetched: '2026-08-24',
};
if(typeof window!=='undefined') window.FACULTIES=FACULTIES;
})();
