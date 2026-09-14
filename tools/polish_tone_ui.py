#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""语气专项 · 第一批：UI 文案与新生专区（四语）

问题：反问句（「刚到日本？按这个顺序做」「不知道点哪里，就直接搜」）
      口语动词（「点一条」「挑着看」「看过的」）
      自贬式表达（「花 30 秒看一下怎么用」）
改成陈述、正式的说明体。四语同步。

顺带修内容错误：引导页写「12 个场景分类」，实际宫格已扩到 15 个。
"""
import io, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(ROOT, "guide", "js", "i18n.js")
s = io.open(P, encoding="utf-8", newline="").read()

REP = [
 # ── 新生专区顶部（用户指出的主症）──
 ("nzTitle:'刚到日本？按这个顺序做', nzSub:'三个月内会用到的手续，按时间排好了 —— 点一条直接跳到那一节'",
  "nzTitle:'落地后手续办理顺序', nzSub:'三个月内需办理的手续按时间排列，可直接跳转至对应小节'"),
 ("nzTitle:'来日したばかりの方は、この順番で', nzSub:'3 か月以内に必要な手続きを時系列に並べました —— タップで該当節へ'",
  "nzTitle:'来日後の手続き順序', nzSub:'3 か月以内に必要な手続きを時系列に整理しています。タップで該当節へ移動します'"),
 ("nzTitle:'Just arrived? Do it in this order', nzSub:'Procedures you need within three months, in time order - tap to jump to that section'",
  "nzTitle:'Order of procedures after arrival', nzSub:'Procedures needed within three months, arranged chronologically; tap to jump to the relevant section'"),
 ("nzTitle:'일본에 막 도착했다면 이 순서로', nzSub:'3개월 안에 필요한 수속을 시간순으로 정리했습니다 - 누르면 해당 절로 이동'",
  "nzTitle:'입국 후 수속 순서', nzSub:'3개월 이내에 필요한 수속을 시간순으로 정리했습니다. 탭하면 해당 절로 이동합니다'"),
 # ── 其它 UI ──
 ("guideSub:'选一个场景直接查看指南'", "guideSub:'选择分类查看指南'"),
 ("searchHint:'换个更短的关键词试试，比如：'", "searchHint:'请尝试更简短的关键词，例如：'"),
 ("noHistory:'还没有浏览记录', noHistorySub:'打开一篇指南后会在这里显示'",
  "noHistory:'暂无浏览记录', noHistorySub:'打开指南后将在此显示'"),
 ("noneOnDay:'没有日程'", "noneOnDay:'无日程'"),
 ("tapDetail:'点一条看详情'", "tapDetail:'点击查看详情'"),
 ("tapDetail:'タップで詳細'", "tapDetail:'タップで詳細を表示'"),
 # ── 新手引导 ──
 ("welcome:{t:'欢迎使用九大伊都留学指南', d:'新生落地要办的十几件事、伊都校区的地图和校历，都在这里。花 30 秒看一下怎么用。'}",
  "welcome:{t:'九大伊都留学生指南', d:'新生落地后需要办理的十余项手续、伊都校区地图与校历均汇集于此。约需 30 秒了解使用方法。'}"),
 ("search:{t:'不知道点哪里，就直接搜', d:'标题和正文一起搜。试试「在留卡」「垃圾」「巴士」「奖学金」。'}",
  "search:{t:'不确定位置时可搜索', d:'标题与正文一并检索。可试搜「在留卡」「垃圾」「巴士」「奖学金」。'}"),
 ("pinned:{t:'先看这两篇', d:'《落地后 30 天》把所有手续按时间线排好，哪件挡着哪件一目了然；《反诈必读》是刚落地那几个月最要紧的。'}",
  "pinned:{t:'建议优先阅读', d:'《落地后 30 天》将全部手续按时间线排列，依赖关系清晰；《反诈必读》针对落地初期的风险。'}"),
 ("cats:{t:'12 个场景分类', d:'按你当下要办的那件事进去：入境、在留、租房、银行、手机、打工、医疗、交通……'}",
  "cats:{t:'15 个场景分类', d:'按当前需要办理的事项进入：入境、在留、租房、银行、手机、打工、医疗、交通……'}"),
 ("tabs:{t:'底部五个板块', d:'地图能搜教室、找巴士和校内接驳；村历是校历与活动；官网直达各学部；历史是你看过的。'}",
  "tabs:{t:'底部五个板块', d:'地图可检索教室、巴士与校内接驳；村历为校历与活动；官网直达各学部；历史为浏览记录。'}"),
 ("lang:{t:'四种语言 · 断网也能看', d:'中日英韩随时切换。加到主屏幕后离线可读 —— 区役所排队、地下室没信号时照样打得开。'}",
  "lang:{t:'四种语言 · 支持离线', d:'中日英韩随时切换。添加至主屏幕后可离线阅读 —— 区役所排队、地下室无信号时同样可用。'}"),
 ("welcome:{t:'九大伊都・留学生ガイドへようこそ', d:'着いてから必要な十数件の手続き、伊都キャンパスの地図と学年暦がここにまとまっています。30 秒だけ使い方を見ていってください。'}",
  "welcome:{t:'九大伊都・留学生ガイド', d:'来日後に必要な十数件の手続き、伊都キャンパスの地図と学年暦をまとめています。使い方は約 30 秒で確認できます。'}"),
 ("search:{t:'迷ったらまず検索', d:'タイトルと本文をまとめて検索します。「在留カード」「ゴミ」「バス」「奨学金」などで試してみてください。'}",
  "search:{t:'場所が分からないときは検索', d:'タイトルと本文をまとめて検索します。「在留カード」「ゴミ」「バス」「奨学金」などでお試しください。'}"),
 ("pinned:{t:'まずはこの 2 本', d:'『着いてからの 30 日』は手続きを時系列に並べ、何が何を止めるかが一目でわかります。『詐欺防止ガイド』は着いて数か月がいちばん狙われやすい時期の話です。'}",
  "pinned:{t:'はじめに読む 2 本', d:'『着いてからの 30 日』は手続きを時系列に並べ、依存関係が一目で分かります。『詐欺防止ガイド』は来日初期に狙われやすい手口を扱っています。'}"),
 ("cats:{t:'12 のカテゴリ', d:'いま必要な用事から入ってください：入国、在留、住まい、銀行、携帯、アルバイト、医療、交通……'}",
  "cats:{t:'15 のカテゴリ', d:'現在必要な用事から入ってください：入国、在留、住まい、銀行、携帯、アルバイト、医療、交通……'}"),
 ("tabs:{t:'下の 5 つのタブ', d:'地図では教室・バス・学内シャトルを探せます。村暦は学年暦とイベント、公式サイトは各学部へ直接、履歴は読んだ記事です。'}",
  "tabs:{t:'下の 5 つのタブ', d:'地図では教室・バス・学内シャトルを検索できます。村暦は学年暦とイベント、公式サイトは各学部へ、履歴は閲覧した記事です。'}"),
 ("lang:{t:'4 言語 · オフラインでも読めます', d:'日本語・中国語・英語・韓国語をいつでも切り替え。ホーム画面に追加すればオフラインでも開けます —— 区役所の待ち時間や地下でも大丈夫。'}",
  "lang:{t:'4 言語 · オフライン対応', d:'日本語・中国語・英語・韓国語をいつでも切り替え。ホーム画面に追加するとオフラインでも開けます —— 区役所の待ち時間や地下でも利用できます。'}"),
 ("welcome:{t:'Welcome to the Kyudai Ito student guide', d:'The dozen-odd procedures you face after landing, plus the Ito campus map and academic calendar, all in one place. Take 30 seconds to see how it works.'}",
  "welcome:{t:'Kyushu University Ito International Student Guide', d:'The procedures you face after arrival, the Ito campus map and the academic calendar, in one place. About 30 seconds to see how it works.'}"),
 ("search:{t:'Not sure where to look? Just search', d:'Titles and body text are searched together. Try “residence card”, “garbage”, “bus” or “scholarship”.'}",
  "search:{t:'Search when unsure where to look', d:'Titles and body text are searched together. Try “residence card”, “garbage”, “bus” or “scholarship”.'}"),
 ("pinned:{t:'Start with these two', d:'“Your First 30 Days” puts every procedure on one timeline and shows what blocks what. The anti-fraud guide covers the months right after arrival, when people are most often targeted.'}",
  "pinned:{t:'Recommended first reads', d:'“Your First 30 Days” places every procedure on one timeline so dependencies are clear. The anti-fraud guide covers the risks of the first months after arrival.'}"),
 ("cats:{t:'Twelve situations', d:'Go in by whatever you need to do right now: arrival, residence, housing, banking, mobile, part-time work, medical, transport…'}",
  "cats:{t:'Fifteen situations', d:'Go in by what you need to do now: arrival, residence, housing, banking, mobile, part-time work, medical, transport…'}"),
 ("tabs:{t:'Five tabs at the bottom', d:'The map finds classrooms, buses and the campus shuttle. Cunli is the academic calendar and events. Official links you straight to each school. History is what you have read.'}",
  "tabs:{t:'Five tabs at the bottom', d:'The map finds classrooms, buses and the campus shuttle. Cunli holds the academic calendar and events. Official links straight to each school. History shows what you have read.'}"),
 ("lang:{t:'Four languages · works offline', d:'Switch between Chinese, Japanese, English and Korean anytime. Add it to your home screen and it opens without a connection — handy while queuing at the ward office or in a basement with no signal.'}",
  "lang:{t:'Four languages · works offline', d:'Switch between Chinese, Japanese, English and Korean at any time. Add it to your home screen for offline reading — useful while queuing at the ward office or in a basement with no signal.'}"),
 ("welcome:{t:'규슈대 이토 유학생 가이드입니다', d:'도착 후 처리해야 할 십수 가지 수속, 이토 캠퍼스 지도와 학사 일정이 모두 여기 있습니다. 30초만 사용법을 보고 가세요.'}",
  "welcome:{t:'규슈대 이토 유학생 가이드', d:'도착 후 처리할 십수 가지 수속과 이토 캠퍼스 지도, 학사 일정을 한곳에 정리했습니다. 사용법은 약 30초면 확인할 수 있습니다.'}"),
 ("search:{t:'어디를 눌러야 할지 모르겠으면 검색', d:'제목과 본문을 함께 검색합니다. 「재류카드」「쓰레기」「버스」「장학금」으로 시도해 보세요.'}",
  "search:{t:'위치를 모를 때는 검색', d:'제목과 본문을 함께 검색합니다. 「재류카드」「쓰레기」「버스」「장학금」등으로 시도해 보세요.'}"),
 ("pinned:{t:'먼저 이 두 편', d:'『도착 후 30일』은 모든 수속을 시간순으로 늘어놓아 무엇이 무엇을 막는지 한눈에 보입니다. 『사기 방지 가이드』는 갓 도착한 몇 달이 가장 표적이 되기 쉬운 시기라는 이야기입니다.'}",
  "pinned:{t:'먼저 읽을 2편', d:'『도착 후 30일』은 모든 수속을 시간순으로 정리해 의존 관계를 한눈에 볼 수 있습니다. 『사기 방지 가이드』는 입국 초기에 표적이 되기 쉬운 수법을 다룹니다.'}"),
 ("cats:{t:'12개 상황별 분류', d:'지금 해야 하는 일부터 들어가세요: 입국, 체류, 주거, 은행, 휴대폰, 아르바이트, 의료, 교통……'}",
  "cats:{t:'15개 상황별 분류', d:'지금 해야 하는 일부터 들어가세요: 입국, 체류, 주거, 은행, 휴대폰, 아르바이트, 의료, 교통……'}"),
 ("tabs:{t:'아래 다섯 개 탭', d:'지도에서는 강의실·버스·교내 셔틀을 찾을 수 있습니다. 촌력은 학사 일정과 행사, 공식 사이트는 각 학부로 바로, 이력은 읽은 글입니다.'}",
  "tabs:{t:'아래 다섯 개 탭', d:'지도에서는 강의실·버스·교내 셔틀을 검색할 수 있습니다. 촌력은 학사 일정과 행사, 공식 사이트는 각 학부로, 기록은 읽은 글입니다.'}"),
 ("lang:{t:'4개 언어 · 오프라인에서도', d:'중국어·일본어·영어·한국어를 언제든 전환. 홈 화면에 추가하면 오프라인에서도 열립니다 —— 구청 대기 중이나 신호 없는 지하에서도 괜찮습니다.'}",
  "lang:{t:'4개 언어 · 오프라인 지원', d:'중국어·일본어·영어·한국어를 언제든 전환. 홈 화면에 추가하면 오프라인에서도 열립니다 —— 구청 대기 중이나 신호 없는 지하에서도 사용할 수 있습니다.'}"),
]
miss = [a[:48] for a, _ in REP if a not in s]
assert not miss, "未匹配 %d 处：%s" % (len(miss), miss[:3])
for a, b in REP: s = s.replace(a, b, 1)
io.open(P, "w", encoding="utf-8", newline="").write(s)
print("i18n.js：%d 处文案改写（四语）" % len(REP))

# index.html 里写死的回退文本
H = os.path.join(ROOT, "guide", "index.html")
h = io.open(H, encoding="utf-8", newline="").read()
h = h.replace('id="nzTitle">刚到日本？按这个顺序做<', 'id="nzTitle">落地后手续办理顺序<')
h = h.replace('id="monthTap">点一条看详情<', 'id="monthTap">点击查看详情<')
io.open(H, "w", encoding="utf-8", newline="").write(h)
print("index.html 回退文本已同步")
