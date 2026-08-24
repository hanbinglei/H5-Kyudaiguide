# 数据许可说明

本仓库的**代码**按 [MIT](LICENSE) 许可。仓库内的**数据**各依其来源许可，另行约束——
fork 或再分发时请分别遵守下列条款。

| 数据 | 来源 | 许可 / 条件 |
|------|------|------|
| 建筑轮廓 / 步行路网 / 设施点 | OpenStreetMap | **ODbL 1.0**：使用须署名「© OpenStreetMap contributors」，对衍生数据库同等开放 |
| `h5-mvp/data/*`（osm-buildings / route-graph / facilities / basemap 等）| 基于 OSM 的衍生 | 含 OSM 衍生数据，**受 ODbL 约束** |
| 巴士时刻表 `bus-*.json` | 昭和バス（NaviTime 承载） | 事实性信息；须注明来源与抓取日（`fetched`），改点以官网为准 |
| 法定祝日 `jp-holidays.json` | 内阁府「国民の祝日」 | 公开数据 |
| 办公室 `offices.json` + 草案 | 九大各官网人工整理 | 事实性信息，每条带出处 / 置信度 |
| 建筑三语标注 `annotations-claude.json` / 教室 `classrooms.json` | 官方講義室页 + 人工标注 | 名称为事实信息；专有名词未机器翻译 |
| **官方地图 PDF / 图片** | 九州大学 | **版权归九大，不含在本仓库**，请自备（见 [README](README.md#数据源自备）) |

## 要点

- **代码 MIT，数据 ODbL（OSM 部分）** —— 两者许可不同，再分发时都要满足。
- 官方地图 PDF/图片是配准的输入源，**从未随仓库分发**；仓库里的 `h5-mvp/data/` 是从中
  提取的地理数据（点位/编号），已脱离原图版式。
- 时刻表等第三方事实数据会随时间失真，脚本可再生（带 `fetched` 日期）——请勿当权威源，
  以各官网为准。
