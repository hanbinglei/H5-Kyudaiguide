# 怎么改内容

这个目录是**指南内容的唯一真源**。网站上显示的每一句话都来自这里。

不需要装任何开发环境 —— 直接在 GitHub 网页上改就行。

---

## 一、改一句话 / 一个价格 / 一条链接

1. 打开对应文件（下表），点右上角铅笔 ✏️
2. 用浏览器的查找（Ctrl+F / ⌘F）搜到那句话，改掉
3. 页面底部填一句「改了什么」，选 **Create a new branch**，提交
4. 自动检查会跑（约 1 分钟）。**绿勾** = 没问题；**红叉** = 点进去看原因
5. 通知管理员合并

| 文件 | 内容 |
|---|---|
| `guide-entry.json` | 入境准备 |
| `guide-residence.json` | 在留手续 |
| `guide-housing.json` | 租房 |
| `guide-bank.json` | 银行·汇款 |
| `guide-phone.json` | 手机·网络 |
| `guide-academic.json` | 学业·奖学金 |
| `guide-parttime.json` | 打工 |
| `guide-medical.json` | 医疗·保险 |
| `guide-transport.json` | 交通 |
| `guide-life.json` | 生活贴士 |
| `guide-shopping.json` | 购物 |
| `guide-emergency.json` | 应急联系 |
| `guide-antifraud.json` | 反诈必读（首页必读卡）|
| `guide-firstmonth.json` | 落地后 30 天：手续总表（首页必读卡）|

> 最后两篇不占 12 个分类的格子，而是排在首页顶上的**必读卡**。
> 谁在前谁在后由文件里的 `"pinOrder"` 决定（数字小的在前），**不看修改时间** ——
> 按修改时间排的话，去改一个错别字就会把首页第一张卡换掉。

## 二、几条必须守的规矩

**`"id"` 千万不要改。** 它是这段内容的身份证，日文/英文/韩文的译文靠它对上号。
改了 ID，那段的三国语言译文会全部失联。

**不要动 `{ } [ ] , "` 这些符号。** 只改引号**里面**的文字。
少一个逗号、多一个引号，自动检查会报错（不会弄坏网站，但你得回来改）。

**改了价格、日期、电话，请顺手更新 `claims.json`。** 见下面第四节。

**中文改了，译文不会自动跟着改。** 那一段会暂时显示中文，网站不会坏。
译文在 `../guide/js/articles-body-i18n.js`，按 `"id"` 找到对应条目改即可。

## 三、常见的几种内容长什么样

```jsonc
{ "id": "a1b2c3", "type": "paragraph", "text": "普通段落。" }

{ "id": "d4e5f6", "type": "notice",  "text": "📝 黄色提示框" }
{ "id": "g7h8i9", "type": "warning", "text": "⚠️ 红色警告框" }

{ "id": "j1k2l3", "type": "links", "items": [
    { "text": "显示出来的文字", "url": "https://官方页面地址" } ] }

{ "id": "m4n5o6", "type": "fee_table",
  "headers": ["项目", "金额"],
  "rows": [ ["试验手数料", "1,600 円"] ] }        // 每行的格子数必须和 headers 一样多
```

文字里还能用这些写法：

- `**加粗**`
- 电话直接写 `092-802-2228` —— 会自动变成可拨号的按钮
- 网址直接写 `https://...` —— 会自动变成可点的链接
- `见【交通】` —— 跳到另一篇指南（篇名要写对）
- `⬜待核对：……` —— **还没核实的事就这么标出来**，不要填一个猜的数字

> 最后一条尤其重要。宁可让读者看到「这条还没核实」，也不要给一个看起来确定、
> 实际是猜的数字 —— 学生会照着它去办事。

## 四、`claims.json`：记录「谁在什么时候真的核过」

写指南最容易犯的错**不是抄错数字，而是抄了一个曾经正确的数字**。
所以每条会随时间变化的说法（价格、税率、期限）都该在 `claims.json` 里有一条记录：

```jsonc
{
  "id": "taxi-fare-fukuoka",
  "article": "guide-transport", "block": "adf1b4",   // 指向具体哪一段
  "claim": "普通车起步 1.1km/600 円……",
  "sourceName": "福岡市タクシー協会 運賃表",
  "source": "https://www.taxi-fukcty.or.jp/charge/",
  "effective": "2026-07-01",     // 这个数字什么时候开始生效
  "verified": "2026-08-14",      // 谁在这天真的打开官网核对过；没核过就写 null
  "level": "verified",           // verified 已确认 / ambiguous 有歧义 / unverified 未核
  "recheck": "P1Y"               // 多久该复核一次（P1Y=一年，P6M=半年）
}
```

**`verified` 只在你真的打开官网、看到那个数字之后才填。**
把「看起来核过了」和「真的核过了」混在一起，比完全没核更危险 —— 因为没人会再去查一遍。

## 五、机器会自动帮你查的事

| 什么时候 | 查什么 |
|---|---|
| 每次提交 | 格式对不对、ID 有没有重复、表格行列数对不对、译文有没有指向不存在的段落 |
| 每次提交 | 台账里的记录还指不指得到内容、哪些已超复核周期、哪些含金额的段落还没登记 |
| **每周一** | 全部 80 多条外链是否还活着，**发现死链自动开 issue** |

机器查不了的是**数字本身对不对** —— 那只能靠人打开官网核对，然后更新 `claims.json`。

## 六、本地跑（可选，给开发者）

```bash
node tools/build_guide_articles.js   # content/ → 网站数据（改完内容必须跑）
node tools/check_body_i18n.js        # 译文校验
node tools/check_claims.js           # 台账体检
node tools/check_links.js            # 外链核查
```
