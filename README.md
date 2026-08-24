# Kyudaimap — 九州大学伊都キャンパス交互式地图

> 一个**可离线分发的多语言校园地图**，也是一套**可迁移到任何有官方地图 PDF 的园区**的开源管线。
> 面向九大留学生/新生：搜教室、找办公室、查巴士、走路线——不装 App、断网也能用。

**在线**：`h5-mvp/app.html`　·　**离线单文件**（双击即用、可微信/LINE 直接发）：[`dist/kyudaimap-offline.html`](dist/kyudaimap-offline.html)（2.7 MB，零网络请求）

---

## 两个身份

1. **一个成品** —— 九大伊都校区的地图，现在就能用。
2. **一套方法** —— 把「官方地图 PDF + 公开数据」变成「可离线的交互校园地图」的完整管线。
   换掉数据源和配准点，代码几乎不动就能做成**你自己学校的地图**（见 [迁移指南](#迁移到你的学校)）。

## 功能

- **搜索**（统一搜索框，模糊兜底不空白）
  - 建筑 84 栋（官方编号 + 三语标注）· 教室 136 间（`2304` / `A-101` / `工学部第5講義室`）
  - **办公室/事务室 21 处**（部门 → 建筑 → 楼层 → 房号，如「国際部 留学課 · センター4号館 4F 401」）
  - 校外学部 11 个（不在伊都的搜到只提示校区，不导航——免得白跑）
  - 设施 233 点：食堂/商店/ATM/厕所/**AED/停车场/校门/出入口**
- **意图查询**：输入「食堂在哪里 / ATMはどこ / where is toilet」→ 按距离列出并铺点（7 语言，含无重音容错）
- **🚌 昭和巴士**：3 条线路的地图动画（按时刻表推算车辆位置、お盆/跨午夜判定）+ 点站看今日时刻表与下一班倒计时
- **步行导航**：任意两点 A* 路线（OSM 路网 4,411 节点，台阶加权），首次弹「仅供参考」声明
- **多语言**：中/日/英/韩/印地/西/法 **7 种**即时切换，偏好本地保存
- **定位**：📍 GPS 点自动作为导航起点（离线版下受浏览器限制降级提示）

## 快速开始

```bash
# 任意静态服务器指向项目根即可
npx http-server -p 8123 .
# 打开 http://localhost:8123/h5-mvp/app.html
```

**部署到 GitHub Pages**：仓库根即可托管，访问 `https://<用户名>.github.io/Kyudaimap/h5-mvp/app.html`。
离线单文件 `dist/kyudaimap-offline.html` 可直接下载分发，无需任何服务器。

---

## 可迁移的三项核心技术

这个项目值得看的不是「这张九大地图」，而是下面三条别处也用得上的做法：

### ① 官方矢量 PDF → 经纬度（局部配准）
官方校园图常是 PDF，坐标是插画坐标不是地理坐标。做法：提取 PDF 里的建筑编号符号 →
用一批「编号↔已知经纬度」控制点做 **MLS（移动最小二乘）局部仿射插值** → 任意 PDF 点得经纬度。
留一残差**中位 2.8 m**（建筑级可靠）。同法还提取了 AED/停车/校门等文本符号。
→ `tools/extract_markers.py` · `georef_assign.py` · `extract_facility_icons.py`

### ② 公开时刻表 → 结构化数据 → 纯前端示意动画
从 NaviTime 承载的官方昭和バス时刻表抓 3 线路 226 班（Jina Reader 取页 + 正则，靠链接里的
`day=` 参数判平日/土/日祝），配上内阁府法定祝日表。前端**纯按时刻表 + 东京时区推算**车辆位置，
零实时请求、离线可动，并处理了 **お盆临时ダイヤ**和**跨午夜末班**两个坑。
→ `tools/build_bus_schedule.py` · `build_bus_routes.py` · `build_jp_holidays.py`

### ③ 离线单文件构建
把 Leaflet + 矢量底图 + 全部数据内嵌进一个 HTML，`loadData()` 双模（内嵌优先、否则 fetch）。
每步替换带断言，模板变了就明爆而非静默产坏文件。产物 2.7 MB，双击即用。
→ `tools/build_offline.py`

**贯穿始终的一条原则**：数据宁缺毋滥。能确定性推导的才补（教室楼层从编号推），
无可靠来源的一律留空、绝不编坐标（AED 有 8 处农场/无名建筑没配、17 个官方编号缺口没硬猜）。

---

## 数据管线（`tools/`，官方图或 OSM 更新后可重跑）

| 脚本 | 产出 | 说明 |
|------|------|------|
| `extract_markers.py` / `georef_assign.py` | markers / assignments.json | PDF 编号提取 + MLS 配准（①的基础）|
| `rebuild_geojson.py` + `merge_relations.py` | osm-buildings.geojson | OSM 建筑轮廓（**way + relation 双抓**，连体楼是 relation）|
| `build_annotations.py` | annotations-claude.json | 三语建筑标注 + POI |
| `build_classrooms.py` | classrooms.json | 教室库（官方講義室页 + 工学部/IMI PDF）|
| `extract_facility_icons.py` + `merge_official_extras.py` | facilities.json | 设施点（ATM/売店/WC/AED/停车/校门；AED 按建筑名匹配质心）|
| `build_offices.js` + `offices-src/*.draft.json` | offices.json | 办公室（草案 → 折叠学府别名，`node` 可独立重跑）|
| `build_bus_schedule.py` / `build_bus_routes.py` / `build_jp_holidays.py` | bus-*.json / jp-holidays.json | 巴士时刻表 / 路径 / 祝日（②）|
| `build_graph.py` | route-graph.json | OSM 步行路网 → A* 图 |
| `build_categories.py` / `build_boundary.py` / `build_basemap.py` | （分色 / 校地边界 / 离线底图）| UI 数据层 |
| `build_offline.py` | dist/kyudaimap-offline.html | 离线单文件（③）|

标注工具：`h5-mvp/osm-clean.html`（点建筑 → 录三语名 → 导出 JSON）。

## 数据来源与许可

| 数据 | 来源 | 许可 / 说明 |
|------|------|------|
| 建筑轮廓 / 路网 / 设施 | OpenStreetMap | ODbL，需署名「© OpenStreetMap contributors」|
| 建筑编号 / 图标配准源 | 九大官方地图 PDF | 版权归九州大学，仅作配准参考，未再分发原图 |
| 巴士时刻表 | 昭和バス（NaviTime） | 事实性信息，注明来源与抓取日；改点以官网为准 |
| 法定祝日 | 内阁府「国民の祝日」CSV | 公开数据 |
| 办公室信息 | 九大各官网人工整理 | 每条带 source/confidence（见草案）|

> ⚠️ **官方 PDF/地图图片不在本仓库**（版权归九州大学，未再分发）。管线依赖的
> `ITO_1_Eng.pdf`、`kyudai_map_Ito_E_2026.pdf` 等需从九大官网自备后放入项目根——见下方「数据源自备」。
> `LICENSE` 请按各源许可分别选择（代码可宽松许可，OSM 数据受 ODbL 硬约束）。

### 数据源自备

以下文件因版权不随仓库分发，从九州大学官网下载后放入项目根即可重跑管线（文件名保持一致）：

| 文件 | 用途 | 获取 |
|------|------|------|
| `ITO_1_Eng.pdf` | 建筑编号/图标配准源（①的核心）| 九大官网 伊都キャンパスマップ（英文版）|
| `kyudai_map_Ito_E_2026.pdf` | 交通/周边图 | 同上 |
| `mech-lecture.pdf` / `west1-layout.pdf` 等 | 工学部教室配置 | 各学部官网 |

> 仅使用**在线版 / 离线单文件**（`h5-mvp/app.html`、`dist/`）无需这些 PDF——数据已提取入 `h5-mvp/data/`。
> 只有重跑 `tools/` 里的提取/配准脚本才需要。

## 迁移到你的学校

1. 换 `ITO_1_Eng.pdf` 为你学校的官方地图 PDF，重建 `markers` + `assignments` 配准点（①）。
2. 用 `rebuild_geojson.py` 抓你校区 bbox 的 OSM 建筑；`build_annotations` 录名。
3. 教室/办公室/巴士按 `*.draft.json` + 各 `build_*` 脚本填数据源。
4. `build_offline.py` 出离线单文件。
   —— 前端 `app.html` 基本不用改；改的是 `data/` 和几个配准点。

## 局限（诚实说）

- **会随时间失真**：时刻表改点、建筑变动。数据均带 `fetched` 日期、脚本可再生——请定期重跑，勿当死数据。
- 巴士仅**去程**（駅→九大）；回程待补（`build_bus_schedule.py` 加 `updown=1`）。
- 单文件 HTML 适合分发、不适合多人协作贡献；定位更接近「方法范例 + 可 fork 模板」。
