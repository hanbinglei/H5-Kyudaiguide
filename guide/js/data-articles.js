// articles.js - browser build

// Source: miniprogram/data/articles.js

// Data is verbatim Kyudaiguide seed data, unmodified



// 种子数据（MVP 本地版）

// 内容整理自既有资料（feishu-export/ito-guide.md，2026-07-09），由管理员编写维护

// 经结构化处理：正文拆为 blocks，外部链接抽为 links 数组，供自定义渲染器

// （components/article-render）渲染为可点卡片。

// 后续接入云开发后，由 article_getList / article_getDetail 等云函数从数据库读取替换本文件。



// 12 分类：单源维护于 data/categories.json，经 scripts/gen_categories.js 生成 ./categories.js，



const ARTICLES = [

  {

    _id: 'ito-guide',

    title: '新伊都国風土記',

    category: '10', // 生活贴士

    // 曾经这里挂着 externalUrl 指向飞书 wiki，详情页会无条件跳外链阅读器。

    // 但 ① 飞书 wiki 是需要登录的客户端渲染页，云函数抓到的只有空壳，读者看到的是空白或登录页；

    //    ② 本条目自己已有下方 24 个结构化 blocks（含目录、费用表、可点电话），排版远好过任何抓取结果。

    // 故移除外链，回归站内渲染。（转型时「清除飞书残留」的收尾，见 docs/CHANGELOG.md）

    summary: '九州大学伊都校区及周边生活指南：地理、天气、行政区划、丝岛考据。基于个人经验，仅供参考。',

    source: 'hato_original',

    // ⚠️ 必须保持 false。首页 featured 取的是「第一篇 isPinned」，而置顶位是留给

    // guide-antifraud（留学反诈安全必读）的 —— 这是 531210e 明确把本条从 true 改成 false 的原因。

    // 本条排在数组第 0 位，一旦置 true 就会把反诈必读从首页顶掉。

    // （seedData.js 里本条仍是 true，但那份种子只有 4 篇、生成于 guide-antifraud 之前，已过期，

    //   不能拿它当基准反过来改这里 —— 我之前正是这么错过一次。）

    isPinned: false,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['生活贴士', '伊都校区', '福冈'],

    updatedAt: '2026-07-09',

    blocks: [

      {

        type: 'quote',

        text: '东南陆行五百里，至伊都国。官曰尔支，副曰泄谟觚、柄渠觚。有千余户，世有王，皆统属女王国。郡使往来常所驻。——《魏志倭人传》'

      },

      {

        type: 'paragraph',

        text: '关于九州大学伊都校区以及其周边情况的介绍，以及在此处的生活指南，内容基于个人经验，只做了一点微小的工作，仅供参考。'

      },

      {

        type: 'notice',

        text: '写了很久，但还完全没有完成（悲）。如有疑问或补充，请通过页面底部「内容纠错与补充」告诉我们。'

      },

      { type: 'heading', level: 2, text: '基本信息' },

      {

        type: 'paragraph',

        text: '九州大学伊都校区坐落于环境优美(?)的丝岛半岛，位于福冈市区的西侧，整个九州岛的北部，北面与韩国隔海相望。伊都校区的名字来自于这一地区的古代国家伊都国。丝岛半岛的北部有起伏的山地，居住区和商业区集中在较为平坦的南部，主要沿筑肥线和国道202线分布，西九州道再往南则是近一千米高的脊振山脉，其余的由河流冲积出的平坦地区是大量的农田和农场。'

      },

      { type: 'heading', level: 2, text: '天气' },

      {

        type: 'paragraph',

        text: '福冈的气候同时具有日本海型和太平洋侧气候区的特点，冬天直面西北方向刮来的强劲冷空气，多风但没有特别寒冷，温度基本在0度以上，降水量偏少，每到六七月份进入梅雨季节，进入夏天后被副热带高压控制，会变得比较闷热，并且总是晴朗少雨，但积攒的能量又容易引发高强度的对流天气，和梅雨类似秋天也有会秋雨时期，但不像梅雨那样典型。春秋季节相对舒适，特别是秋天，基本是一年中最舒服的季节，但全年总的来说多风并且偶尔有很强的阵风。（然而2025年因为副高北抬太快，导致梅雨季比往年短了二十多天，早早进入了晴朗高温的天气，并且整个夏天一直在持续，其中偶尔穿插强对流和暴雨）'

      },

      {

        type: 'paragraph',

        text: '因为海洋性气候，福冈最冷月和最暖月都会较中国稍迟，且由于面朝北部临近海洋，没有什么遮挡，比较容易受寒潮影响，但福冈和韩国间的海面又太短，不足以积攒足够的水汽，这就造成了福冈冬季经常有强风但是却不会像北陆地区那样大量降雪的特点，最强时风力甚至能达到阵风八级。'

      },

      { type: 'subheading', text: '推荐工具：' },

      {

        type: 'links',

        items: [

          { text: '气候概况：zh.weatherspark.com', url: 'https://zh.weatherspark.com/y/142927/%E6%97%A5%E6%9C%AC%E3%80%81%E7%A6%8F%E5%B2%A1%E5%B8%82%E7%9A%84%E5%85%A8%E5%B9%B4%E5%B9%B3%E5%9D%87%E6%B0%94' },

          { text: '预报/风力/雷达图：Windy', url: 'https://www.windy.com/33.532/130.179?33.496,130.191,11,p:temp' },

          { text: '气象台实况/长期预报：气象厅', url: 'https://www.jma.go.jp/bosai/#area_type=class20s&area_code=4023000&pattern=forecast' },

          { text: '台风预报：Tropical Tidbits', url: 'https://www.tropicaltidbits.com/storminfo/' },

          { text: '实时数据：tenki.jp', url: 'https://tenki.jp' },

          { text: '福冈天气特点：jma-net.go.jp', url: 'https://www.jma-net.go.jp/fukuoka/kaiyo/tenkou_main.html' }

        ]

      },

      {

        type: 'paragraph',

        text: '伴随大风和对流，雨云经常快速移动，查看雷达图有助于把握下雨的准确情况。到了台风季节，可以使用台风预报网站查看（但台风很少经过福冈）。'

      },

      { type: 'heading', level: 2, text: '行政区划' },

      {

        type: 'paragraph',

        text: '丝岛半岛被福冈市西区和丝岛市一分为二，学校的地址在福冈市西区，除了Settle International以外的宿舍也都属于西区。行政区划的不同体现在办事需要去各自的役所：'

      },

      {

        type: 'fee_table',

        headers: ['你的住址', '对应役所', '位置'],

        rows: [

          ['丝岛市', '糸島市役所', '筑前前原站附近'],

          ['福冈市西区', '福岡市役所西部出張所', '九大学研都市站附近']

        ]

      },

      {

        type: 'links',

        items: [

          { text: '糸島市役所（地图）', url: 'https://maps.app.goo.gl/akJpsgKyWmBFR2at8' },

          { text: '福岡市役所西部出張所（地图）', url: 'https://maps.app.goo.gl/BX3CT1XuXVjwzcAm9' }

        ]

      },

      {

        type: 'paragraph',

        text: '两地所使用的垃圾袋也不一样，在购买时需要注意。'

      },

      { type: 'subheading', text: '官方网页：' },

      {

        type: 'links',

        items: [

          { text: '福冈市西区政府', url: 'https://www.city.fukuoka.lg.jp/nishi/index.html' },

          { text: '丝岛市政府', url: 'https://www.city.itoshima.lg.jp/' }

        ]

      },

      { type: 'heading', level: 2, text: '丝岛还是系岛' },

      {

        type: 'paragraph',

        text: '虽然「糸島」的「糸」字形看起来很像「系」，但是日文的「糸」来自于「絲」，因此对应的中文应该是丝而非系。'

      },

      { type: 'subheading', text: '糸島的含义' },

      {

        type: 'paragraph',

        text: '糸島市的名称来自于以前的糸島郡，糸島郡则是由以前的怡土（いと）郡与志摩（しま）郡合并而成，将名字也合起来变为糸島（いとしま）。而怡土据称来自于古代伊都国的读音，志摩则来自于「島」这个字的读音。'

      },

      {

        type: 'paragraph',

        text: '不过2010年丝岛市成立时，是由前原市、志摩町、二丈町合并而来，并没有怡土（x）'

      },

      {

        type: 'links',

        items: [

          { text: '参考：Wikipedia - 糸島市', url: 'https://ja.wikipedia.org/wiki/%E7%B3%B8%E5%B3%B6%E5%B8%82#%E6%AD%B4%E5%8F%B2' }

        ]

      }

    ]

  },

  {

    _id: 'guide-2',

    title: '在留手续（住址登记·再入国·役所）',

    category: '2', // 在留手续

    summary: '落地后优先办理的在留卡住址登记（自己办 / 学校代办）、临时离开日本的再入国许可，以及常用的出入国在留管理局与各役所信息。',

    source: 'community',

    isPinned: false,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['在留手续', '在留卡', '住址登记', '再入国'],

    updatedAt: '2026-07-14',

    blocks: [

      { type: 'notice', text: '在留卡住址登记（住所登记）务必在落地后前几日优先办好——几乎所有后续手续（电话卡、银行口座、保险等）都建立在登记完成之后才能进行。' },

      { type: 'heading', level: 2, text: '落地后办理顺序' },

      {

        type: 'steps',

        items: [

          { title: '在留卡住址登记（住民登记）', desc: '自己办或学校代办，二选一（见下方说明）' },

          { title: '年金 · 健康保险', desc: '自己办理时可在役所与住民登记同场一并办完' },

          { title: '在留卡交学务处再登记一次', desc: '住址登记完成后进行' },

          { title: '后续手续（电话卡 / 银行口座等）', desc: '以上完成后才能办理' }

        ]

      },

      { type: 'heading', level: 2, text: '住址登记的两种方式' },

      { type: 'subheading', text: '方式一：自己办理' },

      { type: 'paragraph', text: '前往九大学研都市 さいとぴあ区役所（受付時間 8:45–17:15，土・日・祝日・年末年始除外）。一般 1–1.5 小时左右即可办完住民登记、年金、健康保险的全部手续；区役所员工很有经验，也可用英语应对。' },

      { type: 'subheading', text: '方式二：学校代办' },

      { type: 'paragraph', text: '学校会暂时保管在留卡约 3 个工作日，仅代办住民登记；年金和健康保险仍需自己另行办理。优点是不用自己跑。' },

      { type: 'paragraph', text: '两种方式自行判断即可。若选择自己办理，即便已登记学校代办也可不去。' },

      { type: 'heading', level: 2, text: '临时离开日本（回国 / 学会等）' },

      {

        type: 'steps',

        items: [

          { title: '取得指导老师 / 教授的内诺', desc: '' },

          { title: '向学校提出海外渡航届', desc: '' },

          { title: '按离开时长确认再入国方式', desc: '离开 1 年以上需申请再入国许可；1 年以内走「みなし再入国許可」' }

        ]

      },

      { type: 'heading', level: 2, text: '常用政府部门' },

      { type: 'links', items: [

        { text: '福岡出入国在留管理局（近：地下铁赤坂站）', url: 'https://www.moj.go.jp/isa/' },

        { text: '福岡市西区役所（近：姪浜站）', url: 'https://www.city.fukuoka.lg.jp/nishi/index.html' },

        { text: '福岡市役所西部出張所（近：九大学研都市）', url: 'https://maps.app.goo.gl/BX3CT1XuXVjwzcAm9' },

        { text: '糸島市役所（近：JR 筑前前原站）', url: 'https://maps.app.goo.gl/akJpsgKyWmBFR2at8' },

        { text: '中华人民共和国驻福冈总领事馆', url: 'http://www.fukuoka.china-consulate.gov.cn/' }

      ] }

    ]

  },

  {

    _id: 'guide-6',

    title: '私费留学生奖学金',

    category: '6', // 学业·奖学金

    summary: '九州大学私费留学生（自费留学生）可申请的奖学金信息，以国际留学生中心（ISC）公示板为准。',

    source: 'community',

    isPinned: false,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['学业', '奖学金', '私费留学生'],

    updatedAt: '2026-07-10',

    blocks: [

      {

        type: 'paragraph',

        text: '九州大学私费留学生（自费留学生）可申请的奖学金信息，以国际留学生中心（ISC）的「私费留学生奖学金公示板」为准。该公示板会持续更新当前正在募集的奖学金，请定期查看，并按页面说明确认申请条件与截止日期。'

      },

      {

        type: 'notice',

        text: '奖学金募集期通常较短，公示板更新后请尽快确认是否具备申请资格，避免错过截止日期。'

      },

      {

        type: 'steps',

        items: [

          { title: '定期查看 ISC 公示板', desc: '公示板持续更新当前正在募集的奖学金' },

          { title: '确认申请条件与截止日期', desc: '按公示页面说明逐项核对自己是否符合' },

          { title: '按募集说明准备并提交材料', desc: '以各奖学金页面要求为准' }

        ]

      },

      { type: 'subheading', text: '官方公示板：' },

      {

        type: 'links',

        items: [

          { text: '九大 ISC 私费留学生奖学金公示板（2025年度）', url: 'https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo=2025&lang=jp' }

        ]

      }

    ]

  },

  {

    _id: 'guide-11',

    title: '购物指南（伊都校区周边）',

    category: '11', // 购物

    summary: '以九州大学伊都校区为中心，约7公里辐射范围内可购物、采购生活用品与食材的地方，附主要超市能买什么。',

    source: 'community',

    isPinned: false,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['购物', '伊都校区', '超市'],

    updatedAt: '2026-07-10',

    blocks: [

      {

        type: 'paragraph',

        text: '伊都校区位于福冈市西区元冈，周边以校区和住宅区为主。最近的商圈在九大学研都市站周边；往西到糸岛市（筑前前原），往东到姪浜・室见一带，基本都在以校区为中心约7公里的辐射范围内。日常采购以车站周边的超市和药妆店为主，大宗或囤货可去折扣店与综合超市。'

      },

      {

        type: 'notice',

        text: '以下按「距离由近及远 / 类型」整理。具体分店地址、营业时间、是否在7公里内，请以地图（Google Maps / Yahoo! 地图）实际搜索为准，分店可能变动。'

      },

      { type: 'heading', level: 2, text: '速查表' },

      {

        type: 'fee_table',

        headers: ['店铺', '类型', '适合买什么'],

        rows: [

          ['マックスバリュ（MaxValu）', '综合超市', '生鲜 · 熟食 · 日用品，日常首选'],

          ['にしてつストア', '超市', '买菜 · 便当 · 本地特产'],

          ['ドラッグイレブン', '药妆店', '药品 · 化妆品 · 日用品'],

          ['サンドラッグ / ダイレックス', '药妆 · 折扣', '洗护 · 零食，价格便宜'],

          ['トライアル（Trial）', '折扣超市', '大采购，部分门店 24 小时'],

          ['業務スーパー', '冷冻 · 批发', '囤货：肉类 · 海鲜 · 调料'],

          ['イオン（AEON）', '综合超市', '一次买齐：衣料 · 家居 · 生鲜'],

          ['サニー / マルキョウ', '本地超市', '生鲜便宜，常有特价'],

          ['便利店（各系）', '便利店', '应急：轻食 · ATM · 复印']

        ]

      },

      { type: 'heading', level: 2, text: '最近：九大学研都市站周边' },

      { type: 'subheading', text: '生鲜食材 · 日用品' },

      {

        type: 'paragraph',

        text: 'マックスバリュ（MaxValu，九大学研都市站店）：AEON 系超市，生鲜食品、熟食、米面、日用品齐全，价格适中，是校区周边最方便的日常采购点。'

      },

      {

        type: 'paragraph',

        text: 'にしてつストア（Nishitetsu Store，九大学研都市站周边）：西铁系超市，生鲜、熟食、九州/福冈特产，适合买菜和便当。'

      },

      { type: 'subheading', text: '药品 · 化妆品 · 日用品' },

      {

        type: 'paragraph',

        text: 'ドラッグイレブン（Drug Eleven）：九州本地药妆店，药品、化妆品、日用品、零食、部分食品饮料，急用很方便。'

      },

      {

        type: 'paragraph',

        text: 'サンドラッグ（Sundrug）/ ダイレックス（Dairex）：药妆店与折扣店，日用品、洗护、零食价格便宜。'

      },

      { type: 'heading', level: 2, text: '折扣 · 批发（囤货性价比高）' },

      {

        type: 'paragraph',

        text: 'トライアル（Trial）：折扣超市，食品、日用品价格很低，部分门店 24 小时营业，适合大采购。'

      },

      {

        type: 'paragraph',

        text: '業務スーパー（Gyomu Super）：以冷冻食品和批发为主，肉类、海鲜、蔬菜、调料可大量购买，适合囤货。'

      },

      { type: 'heading', level: 2, text: '综合超市 · 更大选择' },

      {

        type: 'paragraph',

        text: 'イオン（AEON）：综合超市，衣料、家居、生鲜、熟食一应俱全，适合一次性买齐。'

      },

      {

        type: 'paragraph',

        text: 'サニー（Sunny）：福冈本地超市，生鲜便宜新鲜，常有特价。'

      },

      {

        type: 'paragraph',

        text: 'マルキョウ（Marukyo）：福冈本地超市，生鲜与日配齐全。'

      },

      { type: 'heading', level: 2, text: '便利店' },

      {

        type: 'paragraph',

        text: 'ローソン / セブンイレブン / ファミリーマート：车站周边与校区附近有分布，饮料、轻食、日用品、ATM、复印等应急很方便，价格偏高。'

      },

      { type: 'heading', level: 2, text: '延伸商圈（7 公里内可覆盖）' },

      {

        type: 'paragraph',

        text: '姪浜・室见一带（往东）：有更多超市、药妆店与商业设施，可乘地铁/巴士到达。'

      },

      {

        type: 'paragraph',

        text: '糸岛市 筑前前原（往西）：周末可去，有本地超市与商店街，顺路还能逛糸岛市役所周边。'

      },

      { type: 'subheading', text: '查找附近分店：' },

      {

        type: 'links',

        items: [

          { text: 'Google Maps：九大学研都市 スーパー', url: 'https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E5%A4%A7%E5%AD%A6%E7%A0%94%E9%83%BD%E5%B8%82%20%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC' }

        ]

      }

    ]

  },

  {

    _id: 'guide-antifraud',

    title: '留学反诈安全必读（新手优先掌握）',

    category: '13', // 新手必读/热题：反诈安全（非 1-12 网格分类，仅作置顶与热题展示）

    summary: '针对留学生的常见诈骗类型（冒充使领馆/换汇/虚拟绑架等）、防骗核心原则、日常防范速查，以及被骗后的应急处理与求助渠道。留学新手务必先掌握，守住钱袋与人身安全。',

    source: 'community',

    isPinned: true,

    isHot: true,

    collecting: true,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['反诈', '诈骗', '安全', '使领馆', '换汇', '应急', '新手必读'],

    updatedAt: '2026-07-21',

    blocks: [

      { type: 'notice', text: '⚠️ 留学新手请务必先读完本篇：诈骗团伙套路精密，高学历人群也可能中招。牢记“遇事不慌、坚决不信、要钱不给”，可避开绝大多数骗局。' },

      { type: 'heading', level: 2, text: '一、常见诈骗类型' },

      { type: 'subheading', text: '1. 冒充使领馆/公检法（最高发）' },

      { type: 'paragraph', text: '套路：来电自称“中国大使馆/领事馆”称有重要文件未取、护照异常、涉案调查；转接“国内公安局/检察院”称你涉嫌洗钱；要求下载 Signal/Webex/Skype 等加密软件“远程视频审讯”；展示伪造警官证、公文；要求缴纳“保释金”“取保候审保证金”，威胁“不配合就遣返/引渡”。' },

      { type: 'notice', text: '识别要点：①中国驻外使领馆不会电话通知你涉案；②国内公检法不会通过电话/微信/QQ 跨国办案；③绝不要求转账汇款或下载通讯软件；④来电号码可用改号器伪装，显示“公安局”也不可信。' },

      { type: 'subheading', text: '2. 换汇诈骗（留学生高发）' },

      { type: 'paragraph', text: '套路：微信群发布“低价换汇”“急需日元”；伪造转账截图要求你先转钱；“ABC骗局”——骗子A扮出人民币、B扮出日元，诱你同时向双方转账后消失；用“中间人”身份两头骗。' },

      { type: 'notice', text: '识别要点：换汇仅通过银行正规渠道；微信群内陌生人的换汇信息一律视为可疑；绝不先转钱再收钱；“汇率特别好”的换汇基本都是骗局。' },

      { type: 'subheading', text: '3. 冒充学校/教授' },

      { type: 'paragraph', text: '套路：冒充学校发邮件要求缴“学杂费/注册费”；冒充教授要求代买礼品卡/代转账；利用漏洞仿冒教授邮箱。' },

      { type: 'notice', text: '识别要点：学校绝不会邮件/电话索要银行密码或立即转账；教授突然让你代买→当面或电话向教授本人确认；核对发件人邮箱是否真为学校域名。' },

      { type: 'subheading', text: '4. 短信/链接钓鱼' },

      { type: 'paragraph', text: '套路：“租房保证金”“ETC过期”“包裹滞留”等短信附链接让交钱；冒充快递/邮局/电力公司发链接。' },

      { type: 'notice', text: '识别要点：发链接付款的都是诈骗；日本正规支付为便利店支付、银行转账（振込）、口座自动扣款；不确定先打官方电话，不要点链接。' },

      { type: 'subheading', text: '5. 虚拟绑架' },

      { type: 'paragraph', text: '套路：骗子先控制留学生与外界隔离，再联系国内家属称被绑架要赎金，利用信息差勒索。' },

      { type: 'notice', text: '识别要点：接到“孩子被绑架”→立即联系驻外使领馆核实；任何要求你“不得联系家人”的都是诈骗。' },

      { type: 'subheading', text: '6. 刷单/兼职诈骗' },

      { type: 'paragraph', text: '套路：WhatsApp/微信拉入“兼职群”称高薪简单；要求先垫付货款或购商品；初期小额返利→大额卷款跑路。' },

      { type: 'notice', text: '识别要点：先让你掏钱的兼职都是骗局；在留卡标注资格外活动许可范围，超高薪“兼职”本就不合法；陌生 WhatsApp 群直接退出并举报。' },

      { type: 'subheading', text: '7. 便利店礼品卡诈骗' },

      { type: 'paragraph', text: '套路：冒充警方/使馆/技术人员，以“验证账户”“解除冻结”为由要求去便利店购买大额礼品卡（Vプリカ/Apple Gift Card 等）并告知卡号密码。' },

      { type: 'notice', text: '识别要点：任何正规机构不会要求购买礼品卡来验证或付款；便利店店员有时会提醒，但不每次都能拦住。' },

      { type: 'subheading', text: '8. 上门推销/换电力公司' },

      { type: 'paragraph', text: '套路：自称电力/网络公司人员上门称“换公司更便宜”，骗个人资料或签约高额套餐。' },

      { type: 'notice', text: '识别要点：上门推销本质可能不划算；不要当场签约，说“我不需要”后关门；真正的公司不会不清自来。' },

      { type: 'heading', level: 2, text: '二、防骗核心原则' },

      { type: 'steps', items: [

        { title: '遇事不慌，坚决不信，要钱不给', desc: '' },

        { title: '任何自称公检法/使馆的来电要求转钱 → 直接挂断', desc: '' },

        { title: '任何要求你“保密”“不得告诉家人/朋友”的 → 必定是诈骗', desc: '' },

        { title: '不确定就打电话核实：打使馆官网公开的领保电话，不要打对方给的号码', desc: '' }

      ] },

      { type: 'notice', text: '日常防范：陌生来电不主动应答、录音立即挂断；对方自称使馆/公安→挂断后自行搜官网电话回拨；微信群内换汇信息不回复不私聊；带链接短信不点击；有人让你买礼品卡→100%诈骗，立即结束对话；学校/教授邮件要求转账→当面或电话确认；上门推销不开门或说“不需要”后关门。' },

      { type: 'heading', level: 2, text: '三、日常防范速查' },

      { type: 'fee_table', headers: ['场景', '怎么做'], rows: [

        ['接到陌生来电', '不主动应答，录音立即挂断'],

        ['对方自称使馆/公安', '挂断后自行搜索官网电话回拨确认'],

        ['陌生人加微信/WhatsApp', '拒绝，或先确认身份'],

        ['微信群内换汇信息', '不回复、不私聊、直接无视'],

        ['收到带链接短信', '不点击！先核实发件方'],

        ['有人让你买礼品卡', '100%诈骗，立即结束对话'],

        ['学校/教授邮件要求转账', '当面或电话确认'],

        ['上门推销', '不开门或说“我不需要”后关门']

      ] },

      { type: 'heading', level: 2, text: '四、被骗后应急处理（按优先级）' },

      { type: 'steps', items: [

        { title: '立即联系银行', desc: '联系汇款账户开户行，要求止付、冻结账户——资金转出后几分钟可能就被提走，越快越好' },

        { title: '向当地警方报案', desc: '日本拨打 110，保留聊天记录、转账记录、对方信息作证据' },

        { title: '联系国内亲属报案', desc: '让亲属拨打国内 110 转接反电信网络诈骗中心，或直接拨户籍地公安机关' },

        { title: '联系中国驻外使领馆', desc: '通过官网查询领保电话；外交部全球领事保护与服务应急热线（24 小时）见“应急联系”板块' },

        { title: '发布提醒', desc: '在微信群分享经历，防止更多人被骗' }

      ] },

      { type: 'notice', text: '💡 被骗不是你的错——诈骗团伙经过专业训练，受害者包括高学历人群。钱追回希望较小但报案仍有价值（可串并案件、追踪团伙）；不要因羞耻沉默，你的经历可能帮别人避坑。' },

      { type: 'heading', level: 2, text: '五、识破骗子的小技巧' },

      { type: 'paragraph', text: '来自真实案例与群聊经验：直接测试口音（明显某地区口音多为诈骗）；用当地方言/日语回应对方往往直接挂电话；问他哪个警局、自己上网找公开电话打过去；骗子容易急，你质疑两句他就恼羞成怒；最重要的是保护好银行信息——“没钱才是最好的防诈骗手段”（严肃说：保管好卡号与密码）。' },

      { type: 'links', items: [ { text: '中国驻福冈总领事馆', url: 'https://fukuoka.china-consulate.gov.cn/' } ] }

    ]

  },

  {

    _id: 'hot-med-otc',

    title: '想准备点常备药带到日本，问问大家可否有推荐',

    category: '8',

    summary: '整理来日行李时，常备药怎么带？大家常带清单：布洛芬（退烧止痛）、健胃消食片（助消化）、甲硝唑（抗生素类，属处方/限售药，携带须注意日本入境药品申报与数量限制）、蒲地蓝（清热消炎中成药）、各类维生素（复合维生素/维C）等。欢迎补充你的常备清单与携带经验。',

    source: 'topic',

    isHot: true,

    collecting: true,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['医疗', '保险', '常备药', '行李'],

    updatedAt: '2026-07-26',

    blocks: [

      { type: 'notice', text: '本主题正在征集：你行李里常备了哪些药？带药入境有哪些注意事项（处方药的申报/数量限制）？欢迎补充经验，经核实后整理进指南。' },

      { type: 'heading', level: 2, text: '大家常带的常备药（征集稿）' },

      { type: 'paragraph', text: '布洛芬：退烧、止痛（痛经/头痛/牙痛通用），非处方，日常最常用。' },

      { type: 'paragraph', text: '健胃消食片：助消化，吃多了或换口味肠胃不适时常用。' },

      { type: 'paragraph', text: '甲硝唑（灭滴灵）：牙疼、肠胃消炎常用，但属抗生素类（处方/限售药），携带需注意日本入境对处方药的申报要求与合理数量限制，不建议大量带。' },

      { type: 'paragraph', text: '蒲地蓝：清热消炎类中成药，嗓子不适等可备用。' },

      { type: 'paragraph', text: '各类维生素：复合维生素、维C 等日常补充。' },

      { type: 'notice', text: '提醒：日本对入境药品有规定，含麻黄碱、可待因等成分的药，以及处方/抗生素类药物，数量与申报要求较严；不确定时提前查厚生劳动省「医薬品の個人輸入」或向海关确认。' }

    ]

  },

  {

    _id: 'hot-sim',

    title: '推荐什么SIM卡？',

    // 分类订正：原为 '3'。'3' 在单源 data/categories.json 里是「租房」，

    // 与本条（手机卡）无关。这三条热题（hot-sim / hot-rent3 / hot-residence）

    // 当初是照那份写错的分类表（误作 2=租房 / 3=手机·网络 / 5=在留手续）标的，

    // 正确表为 2=在留手续 / 3=租房 / 5=手机·网络。

    category: '5', // 手机·网络

    summary: '来日手机卡怎么选？社群共识：povo 是较好选择，ahamo 也不错；尽量避开 GTN、Sakura；也可了解 Jio、Mobal。乐天/SoftBank 信号相对差。',

    source: 'topic',

    isHot: true,

    collecting: true,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['手机', '网络', 'SIM卡'],

    updatedAt: '2026-07-26',

    blocks: [

      { type: 'notice', text: '本主题正在征集：你用的哪家 SIM/运营商？信号、资费、eSIM 体验如何？欢迎补充，经核实后整理进指南。' },

      { type: 'heading', level: 2, text: '大家的经验（征集稿）' },

      { type: 'paragraph', text: 'povo 是较多人的选择；ahamo 也常被推荐。尽量避开 GTN 与 Sakura。' },

      { type: 'paragraph', text: '也可了解 Jio、Mobal 等。乐天、SoftBank 在部分区域信号较差，选前可参考校区实测。' }

    ]

  },

  {

    _id: 'hot-firststeps',

    title: '落地后优先办什么？',

    category: '1',

    summary: '来日后优先办：① SIM卡 → ② 银行账户 → ③ 国民健康保险 → ④ 自行车及必需品 → ⑤ 校园游。顺序上先提交在留卡、次日取回，再办 SIM 和银行；别忘了 orientation。',

    source: 'topic',

    isHot: true,

    collecting: true,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['入境', '准备', '在留卡'],

    updatedAt: '2026-07-26',

    blocks: [

      { type: 'notice', text: '本主题正在征集：你落地后第一周是怎么安排的？有哪些「早办少吃亏」的事项？欢迎补充。' },

      { type: 'steps', items: [

        { title: 'SIM卡', desc: '先解决通讯与收验证码' },

        { title: '银行账户', desc: '办卡常需先用在留卡登记住居地' },

        { title: '国民健康保险', desc: '落地后尽快加入' },

        { title: '自行车及必需品', desc: '伊都校区通勤常用' },

        { title: '校园游', desc: '熟悉校区与办事窗口' }

      ] },

      { type: 'paragraph', text: '顺序上：先提交在留卡、次日取回，再办 SIM 和银行。别忘了 orientation（导师/学长会提醒）。' }

    ]

  },

  {

    _id: 'hot-rent3',

    title: '福冈租房三区怎么选？',

    category: '3', // 租房（原误标 '2'=在留手续，见 hot-sim 处说明）

    summary: '学研（Kyudaigakkentoshi）：区域最大、巴士始发站所有路线都能坐，但比周船寺同款房贵约 1.1~1.2 倍；周船寺（Susenji）：距离/房租/成本最平衡，但部分老木造隔音差、只能坐周船寺线；校区正旁边：楼新非木造带基础家电，但附近无商店、最不推荐。',

    source: 'topic',

    isHot: true,

    collecting: true,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['租房', '福冈', '学研', '周船寺'],

    updatedAt: '2026-07-26',

    blocks: [

      { type: 'notice', text: '本主题正在征集：你住哪个区？房租、通勤、生活便利度如何？欢迎补充真实体验。' },

      { type: 'fee_table', headers: ['区域', '优点', '缺点'], rows: [

        ['学研（Kyudaigakkentoshi）', '区域最大；巴士始发站，所有路线都能坐', '比周船寺同款房贵约 1.1~1.2 倍'],

        ['周船寺（Susenji）', '距离/房租/成本最平衡', '部分楼老旧木造、隔音差；只能坐周船寺线'],

        ['校区正旁边', '楼新非木造、带基础家电', '附近无商店，只能靠便利店；最不推荐']

      ] },

      { type: 'paragraph', text: '有学长 2022 年起住学研，房东本想涨近 2 倍，谈下来维持 53,000 日元/月。' }

    ]

  },

  {

    _id: 'hot-residence',

    title: '在留卡怎么登记住居地？',

    category: '2', // 在留手续（原误标 '5'=手机·网络，见 hot-sim 处说明）

    summary: '在留卡住居地登记是落地后的关键一步：学校的银行卡开设会需要这个信息——需先完成在留卡住址登记，才能办银行卡。',

    source: 'topic',

    isHot: true,

    collecting: true,

    coverImage: '',

    coverBy: '',

    author: '管理员',

    tags: ['在留', '手续', '住址登记'],

    updatedAt: '2026-07-26',

    blocks: [

      { type: 'notice', text: '本主题正在征集：你是怎么办住址登记的？市区町村役场还是学校代办？有什么坑？欢迎补充。' },

      { type: 'paragraph', text: '学校的银行卡开设会上需要这个信息——需要先在留卡完成住址登记，才能办银行卡。建议落地后尽早办理。' }

    ]

  }

];
if(typeof window!=='undefined') window.ARTICLES=ARTICLES;
