# 九州大学伊都キャンパス 教室编号规则与位置映射

> 数据来源：ITO_1_Eng.pdf（建築コード）+ 伊都キャンパスマップ画像（講義棟番号・施設アイコン）  
> 情報確定度：★★★☆☆（建築一覧は確定、教室コード命名規則は日本大学の慣例に基づく推測）

---

## 1. 講義棟一覧（確定・地図から抽出）

### ウエストゾーン（講義棟：ウエスト1〜10号棟）

| 棟番号 | 正式名称（日） | 英語 | 教室タイプ |
|--------|---------------|------|-----------|
| 1 | ウエスト1号棟 | West Zone 1 | 講義室、大講義室、教室 |
| 2 | ウエスト2号棟 | West Zone 2 | 講義室、演習室 |
| 3 | ウエスト3号棟 | West Zone 3 | 講義室 |
| 4 | ウエスト4号棟 | West Zone 4 | セミナー室、講義室 |
| 5 | ウエスト5号棟 | West Zone 5 | 教室、演習室 |
| 6 | ウエスト6号棟 | West Zone 6 | 講義室 |
| 7 | ウエスト7号棟 | West Zone 7 | セミナー室、演習室 |
| 8 | ウエスト8号棟 | West Zone 8 | 教室、講義室 |
| 9 | ウエスト9号棟 | West Zone 9 | 演習室 |
| 10 | ウエスト10号棟 | West Zone 10 | 教室 |

### イーストゾーン（講義棟：イースト2〜9号棟、※1号棟は事務棟）

| 棟番号 | 正式名称（日） | 英語 | 教室タイプ |
|--------|---------------|------|-----------|
| 2 | イースト2号棟 | East Zone 2 | 講義室 |
| 3 | イースト3号棟 | East Zone 3 | 教室、講義室 |
| 4 | イースト4号棟 | East Zone 4 | セミナー室 |
| 5 | イースト5号棟 | East Zone 5 | 講義室 |
| 6 | イースト6号棟 | East Zone 6 | 教室 |
| 7 | イースト7号棟 | East Zone 7 | 演習室、講義室 |
| 8 | イースト8号棟 | East Zone 8 | セミナー室 |
| 9 | イースト9号棟 | East Zone 9 | 教室、講義室 |

### センターゾーン（講義棟：センター5〜10号棟、※1〜4号棟は事務・学生支援）

| 棟番号 | 正式名称（日） | 英語 | 教室タイプ |
|--------|---------------|------|-----------|
| 5 | センター5号棟 | Center Zone 5 | 教室、講義室 |
| 6 | センター6号棟 | Center Zone 6 | 大講義室、講義室 |
| 7 | センター7号棟 | Center Zone 7 | セミナー室 |
| 8 | センター8号棟 | Center Zone 8 | 講義室 |
| 9 | センター9号棟 | Center Zone 9 | 教室、演習室 |
| 10 | センター10号棟 | Center Zone 10 | 講義室、セミナー室 |

### 特別講義施設

| 名称（日） | 英語 | 特徴 |
|-----------|------|------|
| 椎木講堂 | Shiiki Hall | 大講堂・式典 |
| 鈴与未來ホール I（第1講義室） | Suzuyo Mirai Hall I (Lecture Room I) | |
| 鈴与未來ホール II（第2講義室） | Suzuyo Mirai Hall II (Lecture Room II) | |
| ビッグリーフ（レストラン・売店・講義室） | Big Leaf (Restaurant, Shops and Lecture Rooms) | 複合施設内講義室 |
| Lecture Hall West (工学部) | Lecture Hall West (Faculty of Engineering) | 工学部西講義棟 |

---

## 2. 教室コード命名規則（推測）

日本大学の典型的な教室番号パターンに基づく推測：

| ゾーン | 予想コードパターン | 例 | 備考 |
|--------|------------------|-----|------|
| ウエスト | `W[N]-[F][RR]` | W1-201 = ウエスト1号棟 2階 01号室 | W = West |
| イースト | `E[N]-[F][RR]` | E3-101 = イースト3号棟 1階 01号室 | E = East |
| センター | `C[N]-[F][RR]` | C6-101 = センター6号棟 1階 01号室 | C = Center |
| 工学部西講義棟 | `LW-[F][RR]` または `WL-[F][RR]` | LW-101 | Lecture West |

> ⚠️ **要確認**：実際のシラバスに記載されている教室コードを見て、上記パターンが正しいか検証すること。

## 3. 建築管理コード一覧（ITO_1_Eng.pdf から抽出、確定）

| コード | 正式名称（英） | 用途 |
|--------|---------------|------|
| CE10 | Research Center for Space and Planetary Environmental Science | 研究 |
| CE31 | Central Institute of Radioisotope Science and Safety Management | 研究 |
| CE40 | Center for Research and Education of Environmental Technology | 研究 |
| CE41 | Institute for Materials Chemistry and Engineering | 研究 |
| CE70 | Center for Accelerator and Beam Applied Science | 研究 |
| CF1〜4 | Common Facility 1〜4 | 共通施設 |
| EN40 | Research Center for Steel | 研究（鉄鋼） |
| EN70 | Center for Advanced Aerospace Engineering | 研究（航空宇宙） |
| EN80 | Seakeeping and Manoeuvring Basin / High Speed Circulating Water Channel | 研究（船舶） |
| AG10 | Biotron Application Center | 研究（農学） |
| AG11 | Erosion Control Laboratory | 研究（砂防） |
| AG22 | Laboratory for Silkworm Bioresources | 研究（蚕） |
| AG40 | Agri-Bio Research Laboratory | 研究（農学） |
| HE10 | Structural Building Engineering Laboratory | 研究（建築） |
| HE20 | Architectural Environment Research Building | 研究（建築環境） |
| HE30 | Psychological Experiment Building | 研究（心理） |
| HE40 | Human Development | 研究 |
| HY10,30 | Hydrogen Institute for Sustainability | 研究（水素） |
| HY40 | Hydrogen Station | 施設 |
| IE20 | Satellite Communications Laboratory | 研究 |
| IS10 | Laboratory for Automotive Science | 研究（自動車） |

---

## 4. 教室→ゾーン早見表

教室コードからどのゾーンかを判別するロジック：

```
W で始まる → ウエストゾーン（例：W1-201）
E で始まる → イーストゾーン（例：E3-101）
C で始まる → センターゾーン（例：C6-101）
椎木講堂    → イーストゾーン
鈴与未來    → イーストゾーン
Big Leaf    → センターゾーン
```

---

## 5. 未解決・要確認事項

| # | 項目 | 優先度 |
|---|------|--------|
| 1 | 実際の教室コード例（シラバスから5〜10個） | 高 |
| 2 | 各講義棟の OSM 建築 ID（osm-buildings.geojson と突合） | 中 |
| 3 | 各講義棟の階数 | 低 |
| 4 | 大講義室の収容人数 | 低 |
