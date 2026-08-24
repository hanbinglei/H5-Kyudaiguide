// cunli.js — 浏览器兼容版
// 源: miniprogram/data/cunli.js

// miniprogram/data/cunli.js —— 【自动生成，请勿手改】
//
// 生成器：scripts/gen_cunli_data.js（改数据请改那里，再重新生成）
// 生成于：2026-08-19
//
// 来源：
//   祝日   内閣府 https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv
//   学年暦 九州大学 https://www.kyushu-u.ac.jp/ja/faculty/schedule/（誊写日 2026-08-19）
//
// 打包进主包做离线兜底：云端挂了这个 tab 也不会空。
// 体积约 10.3 KB —— 主包 2 MB 的预算里可以忽略。

const CUNLI_DATA = {
  version: "2026-08-19",
  range: { from: "2026-01-01", to: "2027-12-31" },
  sources: {
    cao: { name: '内閣府', url: "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv" },
    kyudai: { name: '九州大学 学年暦', url: "https://www.kyushu-u.ac.jp/ja/faculty/schedule/" }
  },
  // 场所出处：九大官网「大学施設の利用 → 椎木講堂」
  venueSource: "https://www.kyushu-u.ac.jp/ja/university/facility/shiiki/",
  // ※ 官网原注，界面上带 star 的条目要显示这句
  /* 界面上显示的是中文这句。小程序主要语言是中文，一段日文原文摆在黄色提示条里，
     多数用户读不下去，等于没写。日文原文保留在 starNoteJa 里备查（对官网时用得上）。 */
  starNote: '带 ※ 的是全学标准日程，各学府 / 学部可能不同 —— 以你所属学府的通知为准。',
  starNoteJa: '※印の学事日程は、標準日(期間)を示したもので、学府・学部等で異なることがある。',
  items: [
    {"id":"c27","title":"元日","zh":"元旦","date":"2026-01-01","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c28","title":"成人の日","zh":"成人节","date":"2026-01-12","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c29","title":"建国記念の日","zh":"建国纪念日","date":"2026-02-11","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c30","title":"天皇誕生日","zh":"天皇诞生日","date":"2026-02-23","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c31","title":"春分の日","zh":"春分日","date":"2026-03-20","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c1","title":"前期開始","zh":"前期开始","date":"2026-04-01","end":"","type":"admin","star":false,"src":"kyudai"},
    {"id":"c2","title":"春季休業","zh":"春假","date":"2026-04-01","end":"2026-04-07","type":"break","star":true,"src":"kyudai"},
    {"id":"c3","title":"学生定期健康診断","zh":"学生定期体检","date":"2026-04-02","end":"2026-04-24","type":"event","star":false,"src":"kyudai"},
    {"id":"c4","title":"新入生オリエンテーション","zh":"新生入学指导","date":"2026-04-02","end":"2026-04-07","type":"event","star":false,"src":"kyudai"},
    {"id":"c5","title":"春季入学式","zh":"春季入学典礼","date":"2026-04-03","end":"","type":"admin","star":false,"src":"kyudai","place":{"id":"617112195","ja":"椎木講堂","zh":"椎木讲堂（大学本部）"}},
    {"id":"c6","title":"春学期開始","zh":"春学期开始","date":"2026-04-08","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c32","title":"昭和の日","zh":"昭和日","date":"2026-04-29","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c33","title":"憲法記念日","zh":"宪法纪念日","date":"2026-05-03","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c34","title":"みどりの日","zh":"绿之日","date":"2026-05-04","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c35","title":"こどもの日","zh":"儿童节","date":"2026-05-05","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c36","title":"振替休日","zh":"补休","date":"2026-05-06","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c7","title":"本学記念日","zh":"校庆日","date":"2026-05-11","end":"","type":"admin","star":false,"src":"kyudai"},
    {"id":"c8","title":"春学期終了","zh":"春学期结束","date":"2026-06-09","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c9","title":"夏学期開始","zh":"夏学期开始","date":"2026-06-10","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c37","title":"海の日","zh":"海之日","date":"2026-07-20","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c10","title":"夏学期終了","zh":"夏学期结束","date":"2026-08-07","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c11","title":"夏季休業","zh":"暑假","date":"2026-08-08","end":"2026-09-30","type":"break","star":true,"src":"kyudai"},
    {"id":"c38","title":"山の日","zh":"山之日","date":"2026-08-11","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c39","title":"敬老の日","zh":"敬老日","date":"2026-09-21","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c40","title":"国民の休日","zh":"国民假日","date":"2026-09-22","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c41","title":"秋分の日","zh":"秋分日","date":"2026-09-23","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c12","title":"秋季学位記授与式","zh":"秋季学位授予式","date":"2026-09-25","end":"","type":"admin","star":false,"src":"kyudai","place":{"id":"617112195","ja":"椎木講堂","zh":"椎木讲堂（大学本部）"}},
    {"id":"c13","title":"前期終了","zh":"前期结束","date":"2026-09-30","end":"","type":"admin","star":false,"src":"kyudai"},
    {"id":"c14","title":"後期開始","zh":"后期开始","date":"2026-10-01","end":"","type":"admin","star":false,"src":"kyudai"},
    {"id":"c15","title":"秋学期開始","zh":"秋学期开始","date":"2026-10-01","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c16","title":"秋季入学式","zh":"秋季入学典礼","date":"2026-10-02","end":"","type":"admin","star":false,"src":"kyudai","place":{"id":"617112195","ja":"椎木講堂","zh":"椎木讲堂（大学本部）"}},
    {"id":"c42","title":"スポーツの日","zh":"体育节","date":"2026-10-12","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c17","title":"九大祭・芸工際","zh":"九大祭 · 芸工祭（校园祭）","date":"2026-10-30","end":"2026-11-02","type":"event","star":false,"src":"kyudai"},
    {"id":"c43","title":"文化の日","zh":"文化日","date":"2026-11-03","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c44","title":"勤労感謝の日","zh":"勤劳感谢日","date":"2026-11-23","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c18","title":"秋学期終了","zh":"秋学期结束","date":"2026-12-06","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c19","title":"冬学期開始","zh":"冬学期开始","date":"2026-12-07","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c20","title":"冬季休業","zh":"寒假","date":"2026-12-26","end":"2027-01-04","type":"break","star":true,"src":"kyudai"},
    {"id":"c45","title":"元日","zh":"元旦","date":"2027-01-01","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c46","title":"成人の日","zh":"成人节","date":"2027-01-11","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c21","title":"大学入学共通テスト","zh":"大学入学共通考试","date":"2027-01-16","end":"2027-01-17","type":"exam","star":false,"src":"kyudai"},
    {"id":"c47","title":"建国記念の日","zh":"建国纪念日","date":"2027-02-11","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c22","title":"冬学期終了","zh":"冬学期结束","date":"2027-02-15","end":"","type":"term","star":false,"src":"kyudai"},
    {"id":"c48","title":"天皇誕生日","zh":"天皇诞生日","date":"2027-02-23","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c23","title":"一般選抜（前期日程）","zh":"一般选拔（前期日程）","date":"2027-02-25","end":"2027-02-26","type":"exam","star":false,"src":"kyudai"},
    {"id":"c24","title":"一般選抜（後期日程）","zh":"一般选拔（后期日程）","date":"2027-03-12","end":"","type":"exam","star":false,"src":"kyudai"},
    {"id":"c49","title":"春分の日","zh":"春分日","date":"2027-03-21","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c50","title":"振替休日","zh":"补休","date":"2027-03-22","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c25","title":"春季学位記授与式","zh":"春季学位授予式","date":"2027-03-25","end":"","type":"admin","star":false,"src":"kyudai","place":{"id":"617112195","ja":"椎木講堂","zh":"椎木讲堂（大学本部）"}},
    {"id":"c26","title":"後期終了","zh":"后期结束","date":"2027-03-31","end":"","type":"admin","star":false,"src":"kyudai"},
    {"id":"c51","title":"昭和の日","zh":"昭和日","date":"2027-04-29","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c52","title":"憲法記念日","zh":"宪法纪念日","date":"2027-05-03","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c53","title":"みどりの日","zh":"绿之日","date":"2027-05-04","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c54","title":"こどもの日","zh":"儿童节","date":"2027-05-05","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c55","title":"海の日","zh":"海之日","date":"2027-07-19","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c56","title":"山の日","zh":"山之日","date":"2027-08-11","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c57","title":"敬老の日","zh":"敬老日","date":"2027-09-20","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c58","title":"秋分の日","zh":"秋分日","date":"2027-09-23","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c59","title":"スポーツの日","zh":"体育节","date":"2027-10-11","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c60","title":"文化の日","zh":"文化日","date":"2027-11-03","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c61","title":"勤労感謝の日","zh":"勤劳感谢日","date":"2027-11-23","end":"","type":"holiday","star":false,"src":"cao"},
    {"id":"c62","title":"履修登録期間（後期）","zh":"选课登记期（后期）","date":"","end":"","type":"admin","star":false,"src":"pending","note":"九大官网学年暦未公示，需查学務システム / 各学府通知"}
  ]
};
if(typeof window!=='undefined') window.CUNLI_DATA=CUNLI_DATA;
