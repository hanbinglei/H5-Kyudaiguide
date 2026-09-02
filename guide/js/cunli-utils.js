// cunli-utils.js — 浏览器兼容版
// 源: miniprogram/utils/cunli.js
// 纯函数，无 wx.* 调用

// utils/cunli.js —— 「村历」的纯计算部分

//

// 这里一行都不碰 wx.*，也不碰 setData。理由：整个村历模块唯一有算法难度的地方

// 就在下面的 monthSegments()（按周切段 + 泳道排重叠），而这种东西在真机上点是

// 点不出来的 —— 少画一条、错位一格、跨月那条左端没切平，肉眼都很难发现。

// 抽成纯函数就能在 node 里跑断言：scripts/test_cunli.js。

//

// 日期一律用 'YYYY-MM-DD' 字符串在模块边界传递，内部换算走 Date.UTC。

// 不用本地时区的 new Date(y,m,d)：用户手机可能在 JST，云函数在 UTC+8，

// 而「今天是几号」这件事一旦差一个时区就会整体错一天。字符串没有这个问题。



const REST_RUN_MIN = 3;   // 连休至少 3 天才值得提；两天就是普通周末

/* 每周最多画几条。两条不够 —— 4 月第一周同时有五条

   （前期開始 / 春季休業 / 健康诊断 / 新入生オリエン / 入学式），

   两条会一下子藏掉三条，而那正是新生最需要看清楚的一周。

   高度按 (maxLane+1) 算，所以只有忙月才付这个代价，清闲月份不受影响。 */

const MAX_LANES = 3;

/* 条带上写字时，「够宽」的界线。

   一格在 375px 的机器上约 46px：2 格以上字能舒服地放进条里；

   只有 1 格时页面会改用另外两种排法（见 monthSegments 返回的 freeRight）。 */

const LABEL_MIN_SPAN = 2;



const TYPE_LABEL = {

  admin: '行政',

  term: '学期',

  break: '假期',

  holiday: '假日',

  event: '活动',

  exam: '招生',      // 大学入学共通考试 / 一般选拔。校内会限行，所以要在校历上

  user: '投稿'

};



/* ── 日期基础 ───────────────────────────────────────────── */



function parse(s) {

  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ''));

  if (!m) return NaN;

  return Date.UTC(+m[1], +m[2] - 1, +m[3]);

}



function fmt(ms) {

  const d = new Date(ms);

  return d.getUTCFullYear() + '-' +

    String(d.getUTCMonth() + 1).padStart(2, '0') + '-' +

    String(d.getUTCDate()).padStart(2, '0');

}



const DAY = 86400000;



function addDays(s, n) { return fmt(parse(s) + n * DAY); }



/** a 到 b 相差几天（b - a）。同一天为 0。 */

function diffDays(a, b) { return Math.round((parse(b) - parse(a)) / DAY); }



/** 0=周日 … 6=周六，和月历表头对齐 */

function dow(s) { return new Date(parse(s)).getUTCDay(); }



function daysInMonth(y, m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); }



/** 条目的结束日；没有 end 就是当天 */

function endOf(it) { return (it && it.end) ? it.end : (it ? it.date : ''); }



/* ── 月历网格 ───────────────────────────────────────────── */



/**

 * 生成月历网格。周日起头，行数按需要（4~6 行），不硬凑 6 行 ——

 * 硬凑会让 2 月这种月份底下多出一整行空格子，白占半屏。

 * @returns {{year,month,from,to,weeks:Array<Array<{date,d,out,dow}>>}}

 */

function monthGrid(year, month) {

  const first = `${year}-${String(month).padStart(2, '0')}-01`;

  const lead = dow(first);                       // 1 号前面要补几个上月的格子

  const total = lead + daysInMonth(year, month);

  const rows = Math.ceil(total / 7);

  const from = addDays(first, -lead);

  const weeks = [];

  for (let w = 0; w < rows; w++) {

    const row = [];

    for (let c = 0; c < 7; c++) {

      const date = addDays(from, w * 7 + c);

      row.push({

        date,

        d: +date.slice(8),

        out: date.slice(0, 7) !== first.slice(0, 7),

        dow: c

      });

    }

    weeks.push(row);

  }

  return { year, month, from, to: addDays(from, rows * 7 - 1), weeks };

}



/* ── 按周切段 + 泳道 ────────────────────────────────────── */



/**

 * 把跨天条目切成「每周一段」，并在每一行里排好泳道（互不重叠）。

 *

 * 三条规则，都是被界面逼出来的：

 *   ① 名字只写一次，且落在【起始那一段】上 —— 就是包含条目开始日的那一段。

 *

 *      这条改过两次，两次都是被截图打回来的，记下来免得第三次：

 *        · 最早：名字给"第一段"，而 1 格宽的段一律不写字 → 8 月的夏季休業

 *          从 8/8（周六）起、头一段只占 1 格，于是整条长假一个字都没有。

 *        · 上一轮：改成"第一段放得下的" → 字是出来了，但落在了 8/9 那一行，

 *          看着像暑假是 9 号才开始的。**位置本身就是信息，不能为了好看挪走。**

 *        · 现在：名字永远落在起始段，写不下由页面换排法解决 ——

 *          右边有空位就把字写到条外面（同色文字），一点空位都没有就缩字号。

 *

 *      为此每段都带一个 freeRight：本段右边到下一段（或本周末尾）之间空着几格。

 *      这个数只有排完泳道才知道，所以在最后统一算。

 *   ② 端头切平（openL / openR）表示「接上周 / 接下周」，而不是这周才开始。

 *   ③ 每周最多 MAX_LANES 条，多的进 more —— 不限高的话四月能把月历顶成两屏。

 *

 * 泳道优先级：① 从上周接过来的（openL）先排 —— 同一条长假在相邻几周

 * 里要停在同一条泳道上，不然它会逐周上下跳；② 然后按起点升序；③ 同起点时长的在上。

 *

 * 一度改成过「一律长的先占」，结果 4 月第一周把【前期開始】【春季入学式】

 * 这两条单日行政排到了最后、直接被挤进 +N —— 而那正是新生那一周最该看到的两条。

 * 长度不等于重要程度，按时间先后排才不会系统性地牺牲短条目。

 *

 * @param {Array} items 数据条目（无 date 的会被跳过）

 * @param {number} year

 * @param {number} month 1~12

 * @returns {{grid, weeks: Array<{segs:Array, more:number}>}}

 */

function monthSegments(items, year, month, maxLanesOverride) {

  const grid = monthGrid(year, month);

  const gFrom = grid.from, gTo = grid.to;

  const rows = grid.weeks.length;



  // 落在本网格里的条目 → 网格坐标

  const spans = [];

  (items || []).forEach(it => {

    if (!it || !it.date) return;

    const s = it.date, e = endOf(it);

    if (e < gFrom || s > gTo) return;

    /* rawSi/rawEi 是未裁剪的真实位置。openL/openR 必须拿它们来判断 ——

       用裁剪后的下标判断的话，8/8 开始、被裁到网格首格的夏季休業会被当成

       「本周才开始」，左端不切平，看着就像这条假期是 8/30 才起的。 */

    const rawSi = diffDays(gFrom, s);

    const rawEi = diffDays(gFrom, e);

    if (rawEi < rawSi) return;

    const si = Math.max(0, rawSi);

    const ei = Math.min(rows * 7 - 1, rawEi);

    if (ei < si) return;

    spans.push({ it, si, ei, rawSi, rawEi });

  });



  const weeks = [];



  for (let w = 0; w < rows; w++) {

    const lo = w * 7, hi = lo + 6;

    const here = spans

      .filter(sp => sp.si <= hi && sp.ei >= lo)

      .map(sp => {

        const a = Math.max(sp.si, lo), b = Math.min(sp.ei, hi);

        return {

          id: sp.it.id,

          title: sp.it.title,

          type: sp.it.type,

          col: a - lo,

          span: b - a + 1,

          openL: sp.rawSi < a,       // 真实起点在本段左边 → 端头切平

          openR: sp.rawEi > b,

          _it: sp.it

        };

      })

      .sort((x, y) =>

        ((x.openL ? 0 : 1) - (y.openL ? 0 : 1)) ||

        (x.col - y.col) ||

        (y.span - x.span) ||

        (x.id < y.id ? -1 : 1));



    const lanes = [];  // lanes[l] = 该泳道已占到的列（含）

    const segs = [];

    let more = 0;

        // 展开模式（maxLanesOverride=0）不限行：全部渲染。否则用 MAX_LANES。
            // ⚠️ 不能用 `maxLanesOverride ? … : …`——0 是 falsy，会把展开模式退化成 3 行。
            //    也不能直接拿 0 进 for 循环——`l < 0` 一次都不执行，所有条带全会掉进 more。
            //    0 在这里显式翻译成「无限」。
            const laneLimit = maxLanesOverride === 0 ? Infinity : (maxLanesOverride || MAX_LANES);

        here.forEach(sg => {

          let lane = -1;

          for (let l = 0; l < laneLimit; l++) {

            if (lanes[l] === undefined || lanes[l] < sg.col) { lane = l; break; }

          }

          if (lane < 0) { more++; return; }

      lanes[lane] = sg.col + sg.span - 1;

      sg.lane = lane;

      sg.showName = false;   // 先全部置 false，等所有周排完再统一决定落在哪一段

      delete sg._it;

      segs.push(sg);

    });



    weeks.push({ segs, more });

  }



  /* 名字落在**起始那一段**（= 实际画出来的段里最靠前的那个）。

     不挑"放得下的那一段" —— 位置本身就是信息，把「暑假」挪到第二周去写，

     看着就像暑假是第二周才开始的。写不写得下由页面换排法解决。



     仍然要等排完再挑：被 +N 挤掉的段根本不渲染，定给它等于不出字。 */

  const first = {};

  weeks.forEach(w => w.segs.forEach(sg => {

    if (!first[sg.id]) first[sg.id] = sg;

  }));

  Object.keys(first).forEach(id => { first[id].showName = true; });



  /* freeRight：本段右边、同一条泳道上、到下一段（或本周末尾）之间空着几格。

     页面拿它决定窄条的名字往哪写 —— 右边空着就把字写到条外面去，

     那是唯一能让 1 格宽的条目也读得出名字的办法。 */

  weeks.forEach(w => {

    const byLane = {};

    w.segs.forEach(sg => { (byLane[sg.lane] = byLane[sg.lane] || []).push(sg); });

    Object.keys(byLane).forEach(l => {

      const arr = byLane[l].sort((a, b) => a.col - b.col);

      arr.forEach((sg, i) => {

        const endCol = sg.col + sg.span;           // 本段之后的第一格

        const nextCol = i + 1 < arr.length ? arr[i + 1].col : 7;

        sg.freeRight = Math.max(0, nextCol - endCol);

      });

    });

  });



  return { grid, weeks };

}



/* ── 连休 ───────────────────────────────────────────────── */



/**

 * 找「连休」：周末和祝日连成一片、且不少于 REST_RUN_MIN 天的时段。

 *

 * 只算周末 + 祝日，**不算休業期間** —— 把 54 天的夏季休業算成「54 连休」

 * 是废话，那条本来就以长条的形式画在月历上了。这里要抓的是

 * 「9/19–9/23 五连休」这种日本人靠常识、留学生完全看不出来的东西。

 * 查过 Yahoo!カレンダー / ジョルテ / TimeTree，它们都只把祝日标红，没人算这个。

 *

 * @param {Array} items

 * @param {string} from 'YYYY-MM-DD'

 * @param {string} to

 * @returns {Array<{start,end,len}>} 与 [from,to] 有交集的连休段（完整段，不裁剪）

 */

function restRuns(items, from, to) {

  const hol = {};

  (items || []).forEach(it => {

    if (it && it.type === 'holiday' && it.date) hol[it.date] = true;

  });

  const isRest = d => hol[d] || dow(d) === 0 || dow(d) === 6;



  // 往外各扫一周，免得跨月的连休被切断后长度算短

  const scanFrom = addDays(from, -8), scanTo = addDays(to, 8);

  const runs = [];

  let cur = null;

  for (let d = scanFrom; d <= scanTo; d = addDays(d, 1)) {

    if (isRest(d)) {

      if (!cur) cur = { start: d, end: d, len: 1 };

      else { cur.end = d; cur.len++; }

    } else if (cur) {

      runs.push(cur); cur = null;

    }

  }

  if (cur) runs.push(cur);



  return runs.filter(r => r.len >= REST_RUN_MIN && r.end >= from && r.start <= to);

}



/* ── 接下来 / 当天 ──────────────────────────────────────── */



/**

 * 首屏的「接下来」。进行中的排最前，然后按剩余天数升序。

 * 已经结束的一律不出现 —— 过期的校历比没有校历更糟。

 *

 * @param {Array} items

 * @param {string} today

 * @param {{within?:number, max?:number}} opt within=只看多少天内，默认 60

 */

function upcoming(items, today, opt) {

  const within = (opt && opt.within) || 60;

  const max = (opt && opt.max) || 8;

  const out = [];

  (items || []).forEach(it => {

    if (!it || !it.date) return;

    const e = endOf(it);

    if (e < today) return;                       // 已结束

    const days = diffDays(today, it.date);

    const ongoing = it.date <= today && today <= e;

    if (!ongoing && days > within) return;

    out.push({ item: it, days: ongoing ? 0 : days, ongoing });

  });

  out.sort((a, b) => {

    if (a.ongoing !== b.ongoing) return a.ongoing ? -1 : 1;

    if (a.days !== b.days) return a.days - b.days;

    return a.item.title < b.item.title ? -1 : 1;

  });

  return out.slice(0, max);

}



/** 某一天有哪些条目（区间条目也算） */

function dayItems(items, date) {

  return (items || []).filter(it => it && it.date && it.date <= date && date <= endOf(it));

}



/** 某个月里有哪些条目，按起点排；跨月的也算（它在这个月里露过面） */

function monthItems(items, year, month) {

  const g = monthGrid(year, month);

  const first = `${year}-${String(month).padStart(2, '0')}-01`;

  const last = `${year}-${String(month).padStart(2, '0')}-${String(daysInMonth(year, month)).padStart(2, '0')}`;

  void g;

  return (items || [])

    .filter(it => it && it.date && endOf(it) >= first && it.date <= last)

    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : (a.title < b.title ? -1 : 1)));

}



/** 没有确切日期的条目（⬜待核对）。它们进不了格子，只能活在列表里。 */

function pendingItems(items) {

  return (items || []).filter(it => it && !it.date);

}



/* ── 显示 ───────────────────────────────────────────────── */



function typeLabel(t) { return TYPE_LABEL[t] || '其他'; }



/** '9/25' / '8/8 – 9/30'；跨年时补上年份 */

function fmtRange(it) {

  if (!it || !it.date) return '';

  const md = s => `${+s.slice(5, 7)}/${+s.slice(8, 10)}`;

  const e = endOf(it);

  if (e === it.date) return md(it.date);

  if (e.slice(0, 4) !== it.date.slice(0, 4)) return `${md(it.date)} – ${e.slice(0, 4)}/${md(e)}`;

  return `${md(it.date)} – ${md(e)}`;

}



var CunliUtils = window.CunliUtils = {

  // 日期

  parse, fmt, addDays, diffDays, dow, daysInMonth, endOf,

  // 网格与条带

  monthGrid, monthSegments,

  // 语义

  restRuns, upcoming, dayItems, monthItems, pendingItems,

  // 显示

  typeLabel, fmtRange,

  // 常量（测试与页面共用）

  MAX_LANES, LABEL_MIN_SPAN, REST_RUN_MIN, TYPE_LABEL

};