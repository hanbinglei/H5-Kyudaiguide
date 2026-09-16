# H5-Kyudaiguide — Kyushu University Ito Campus guide & interactive map

**English** · [日本語](README.ja.md) · [简体中文](README.zh.md)

> A multilingual, offline-capable **campus guide + interactive map** for Kyushu University's Ito Campus —
> and an open **pipeline** you can port to any campus that publishes an official map PDF.
> For international students and freshmen: find classrooms, offices and facilities, check buses,
> get walking routes, read living guides — no app, works offline.

**Live** (once GitHub Pages is enabled):
- 🗺️ Map — `https://hanbinglei.github.io/H5-Kyudaiguide/h5-mvp/app.html`
- 📖 Guide — `https://hanbinglei.github.io/H5-Kyudaiguide/guide/`
- 📦 Offline single file (double-click to run, shareable over WeChat/LINE) — [`dist/kyudaimap-offline.html`](dist/kyudaimap-offline.html) (2.7 MB, zero network requests)

---

## Two identities

1. **A finished product** — a working map and guide for KU Ito Campus, usable right now.
2. **A method** — a full pipeline that turns "official map PDF + open data" into an offline interactive
   campus map. Swap the data source and control points and the code barely changes — you get
   **a map for your own school** (see [Porting to your school](#porting-to-your-school)).

## Features

### 📖 Guide (`guide/`, static H5)

A read-only H5 build of the campus guide — four content tabs plus faculty links. No account, no server:

- **Guide** — **17 in-depth articles** across 12 categories (arrival, residence, housing, banking, SIM,
  scholarships, part-time work, medical, transport, life tips, shopping, emergency), rendered from local
  content blocks. Includes a **newcomer timeline** that strings the scattered procedures into the order
  you actually have to do them.
- **Calendar (村暦)** — academic-year & holiday calendar (Cabinet Office public holidays + KU academic calendar).
- **Map** — embeds the interactive map below.
- **History** — recently viewed guides (localStorage).
- **Faculty sites (官网)** — one-tap links to all **12 undergraduate schools + 21 graduate schools**,
  each with a campus tag, sourced from KU's official faculty index.
- **Status bar** — today's visitor count · days until the next campus event · Fukuoka weather · your own
  reading progress. **Every item degrades silently**: if a source is unavailable that item alone is hidden,
  never an error and never a blank.
- **Sources section** — every article ends with the original links it cites, grouped into official/public
  bodies vs. other, collapsed by default. All external links are collected from the rendered DOM, so they
  are localised along with the article.
- **Feedback & correction** — a form at the end of each article plus a floating button while reading.
  Submissions go to a Google Apps Script endpoint (writes a Sheet + sends notification mail); the entry
  point is recorded so the maintainer can see which button was used.
- **Installable & fully offline** — Service Worker precaches everything; add to home screen and it still
  works with no network.
- 4 UI languages (zh / ja / en / ko) — and not just UI strings: **all 1447 content units are translated**
  (unit-level completeness, enforced by a checker).

**Search** is four layers — literal → alias → fuzzy → **CJK bigram fallback** — with an IDF-weighted
coverage score deciding what even counts as a result. Real-phrasing queries (「怎么开银行账户」,
「風邪をひいたら」) are part of the regression suite, not just keyword lookups.

### 🗺️ Map (`h5-mvp/`)

- **Search** (single box, fuzzy fallback so it never goes blank)
  - 84 buildings (official numbers + trilingual labels) · 136 classrooms (`2304` / `A-101` / `工学部第5講義室`)
  - **21 offices** (dept → building → floor → room, e.g. "International Student Section · Center Zone Bldg 4, 4F, Rm 401")
  - 11 off-campus schools (found, but only their campus is shown — not routed, so you don't travel for nothing)
  - 233 facilities: canteens / shops / ATM / toilets / **AED / parking / gates / entrances**
- **Intent queries**: type "where is the canteen / 食堂はどこ / where is toilet" → listed by distance and
  pinned on the map (7 languages, accent-insensitive)
- **🚌 Showa Bus**: map animation of 3 lines (vehicle positions estimated from the timetable, with Obon and
  past-midnight handling) + tap a stop for today's timetable and next-departure countdown
- **Walking navigation**: A* route between any two points (OSM network, 4,411 nodes, step-weighted),
  with a "for reference only" disclaimer on first use
- **7 languages**: zh / ja / en / ko / hi / es / fr, instant switch, preference saved locally
- **Location**: 📍 GPS point auto-used as route start (graceful prompt where the browser restricts it)

## Quick start

```bash
# any static server pointed at the repo root
npx http-server -p 8123 .
# open http://localhost:8123/guide/   (or /h5-mvp/app.html)
```

**GitHub Pages**: host from the repo root and access `https://<username>.github.io/H5-Kyudaiguide/guide/`.
The offline single file `dist/kyudaimap-offline.html` can also be downloaded and shared with no server at all.

---

## Quality gates (`tools/`)

Nothing here is eyeballed, and the checkers themselves are versioned. Every change runs through:

| Checker | What it guards |
|---------|----------------|
| `check_dom_ids.js` | every DOM id referenced from JS actually exists |
| `check_body_i18n.js` | zh/ja/en/ko article bodies have identical structure (block ids, counts, URLs, phone numbers) |
| `check_nav_i18n.js` · `check_cunli_i18n.js` · `verify_cunli_nameof.js` | nav & calendar translations complete in all languages |
| `check_newcomer_zone.js` | every deep link in the newcomer timeline resolves to a real section |
| `check_claims.js` | every claim in the ledger is still referenced |
| `check_readability.py` | readability budget (bold runs per paragraph, list-item length, table size, elements per heading) |
| `audit_i18n_full.py` | text that bypasses `t()` — hardcoded CJK, `aria-label`/`title` attributes, dict drift |
| `audit_subjective.js` | sentences asserting something without a source |
| `bench_search.js` · `probe_real_queries.js` | search regression: ranking, plus recall/precision on real phrasings in 4 languages |
| `test_pulse.js` · `test_sources.js` · `test_feedback.js` | module behaviour (79 assertions in the feedback module alone) |

**Build reproducibility**: `guide/js/data-articles.js` is generated from `content/*.json`. CI re-runs the
build and requires an empty diff — so 「edited content but forgot to rebuild」 fails loudly instead of
shipping stale content.

**Content discipline**: every figure carries its source; anything that cannot be sourced is left out
rather than invented. The pipeline that enforces this is described under Limitations.

---

## Three portable core techniques

What's worth studying here isn't "this KU map" but three approaches that are reusable elsewhere:

### ① Official vector PDF → latitude/longitude (local georeferencing)

Official campus maps are often PDFs whose coordinates are illustration coordinates, not geographic ones.
Approach: extract the building-number symbols from the PDF → use a set of "number ↔ known lat/lng" control
points to run **MLS (Moving Least Squares) local affine interpolation** → any PDF point yields a lat/lng.
Residual **median 2.8 m** (building-level reliable). The same method also extracts AED / parking / gate symbols.
→ `tools/extract_markers.py` · `georef_assign.py` · `extract_facility_icons.py`

### ② Public timetable → structured data → pure-frontend animation

Scraped 3 lines / 226 runs of the official Showa Bus timetable hosted on NaviTime (Jina Reader to fetch pages
+ regex, using the `day=` link parameter to tell weekday / Sat / Sun-holiday apart), paired with the Cabinet
Office public-holiday table. The frontend estimates vehicle positions **purely from the timetable + Tokyo
time** — zero live requests, works offline — and handles the two traps of **Obon special timetables** and
**past-midnight last runs**.
→ `tools/build_bus_schedule.py` · `build_bus_routes.py` · `build_jp_holidays.py`

### ③ Offline single-file build

Inlines Leaflet + the vector basemap + all data into one HTML; `loadData()` is dual-mode (inline first,
else fetch). Every substitution is guarded by an assertion, so a changed template fails loudly instead of
silently producing a broken file. Output is 2.7 MB, double-click to run.
→ `tools/build_offline.py`

**A principle throughout**: prefer missing over made-up. Only fill what can be derived deterministically
(classroom floor inferred from its number); anything without a reliable source is left blank, never
invented (8 AEDs on farms / unnamed buildings were left unplaced, 17 official-number gaps were not guessed).

---

## Data pipeline (`tools/`, re-runnable after an official map or OSM update)

| Script | Output | Notes |
|--------|--------|-------|
| `extract_markers.py` / `georef_assign.py` | markers / assignments.json | PDF number extraction + MLS georeferencing (basis of ①) |
| `rebuild_geojson.py` + `merge_relations.py` | osm-buildings.geojson | OSM building outlines (**way + relation**, joined buildings are relations) |
| `build_annotations.py` | annotations-claude.json | Trilingual building labels + POIs |
| `build_classrooms.py` | classrooms.json | Classroom library (official lecture-room pages + Eng./IMI PDFs) |
| `extract_facility_icons.py` + `merge_official_extras.py` | facilities.json | Facility points (ATM / shop / WC / AED / parking / gate; AED matched to building centroids) |
| `build_offices.js` + `offices-src/*.draft.json` | offices.json | Offices (drafts → folded faculty aliases; re-runnable with `node`) |
| `build_bus_schedule.py` / `build_bus_routes.py` / `build_jp_holidays.py` | bus-*.json / jp-holidays.json | Bus timetable / route / holidays (②) |
| `build_graph.py` | route-graph.json | OSM walking network → A* graph |
| `build_categories.py` / `build_boundary.py` / `build_basemap.py` | (coloring / campus boundary / offline basemap) | UI data layer |
| `build_offline.py` | dist/kyudaimap-offline.html | Offline single file (③) |

Annotation tool: `h5-mvp/osm-clean.html` (click a building → enter trilingual names → export JSON).

## Data sources & licensing

| Data | Source | License / note |
|------|--------|----------------|
| Building outlines / network / facilities | OpenStreetMap | ODbL, attribution "© OpenStreetMap contributors" required |
| Building numbers / icon georef source | KU official map PDF | Copyright Kyushu University; used only as a georef reference, original not redistributed |
| Bus timetable | Showa Bus (NaviTime) | Factual info; note source and fetch date; official site is authoritative on changes |
| Public holidays | Cabinet Office "national holidays" CSV | Public data |
| Office info | Compiled from KU official sites | Each entry carries source/confidence (see drafts) |
| Faculty site links | KU official faculty index | Fetched 2026-08-24; each links to the unit's own official site |

> ⚠️ **Official PDFs / map images are NOT in this repo** (copyright Kyushu University, not redistributed).
> The pipeline's `ITO_1_Eng.pdf`, `kyudai_map_Ito_E_2026.pdf`, etc. must be obtained from KU's official
> site and placed in the repo root — see "Bring your own data sources" below.
> Code is MIT; data follows each source's license (OSM-derived parts are bound by ODbL — see
> [DATA-LICENSE.md](DATA-LICENSE.md)).

### Bring your own data sources

These files are not shipped with the repo for copyright reasons; download them from KU's official site and
place them in the repo root (keep the filenames) to re-run the pipeline:

| File | Purpose | Where |
|------|---------|-------|
| `ITO_1_Eng.pdf` | Building-number / icon georef source (core of ①) | KU official Ito Campus map (English) |
| `kyudai_map_Ito_E_2026.pdf` | Transport / surroundings map | Same |
| `mech-lecture.pdf` / `west1-layout.pdf`, etc. | Eng. faculty classroom layouts | Faculty sites |

> The **online / offline single-file** builds (`h5-mvp/app.html`, `dist/`) need none of these PDFs — the
> data is already extracted into `h5-mvp/data/`. Only re-running the `tools/` extraction/georef scripts needs them.

## Porting to your school

1. Replace `ITO_1_Eng.pdf` with your school's official map PDF, and rebuild the `markers` + `assignments`
   control points (①).
2. Use `rebuild_geojson.py` to fetch OSM buildings for your campus bbox; record names with `build_annotations`.
3. Fill classroom / office / bus data via `*.draft.json` + the `build_*` scripts.
4. Run `build_offline.py` for the offline single file.
   — The frontend `app.html` barely changes; what changes is `data/` and a few control points.

## Limitations (honestly)

- **Search precision is uneven across languages.** Recall on real-phrasing queries improved from 54% to 92%
  after adding query-side stopword filtering, partial-match coverage and CJK bigram fallback. But Japanese
  phrasings can still return 9–16 of 17 articles — the next step is per-language scoring, not another
  threshold.
- **English vocabulary gaps**: a query saying "sick" will not find a section that says "unwell".
  A synonym layer is still to come.
- **Verified in Chrome only** (desktop plus emulated mobile widths). iOS Safari is untested — and that is
  the browser most readers here actually use.
- **No real users yet** besides the author. Everything above is self-testing; the failure modes that only
  show up with real readers (wording that confuses, sections nobody finishes) are structurally invisible
  to these checkers.
- **Drifts over time**: timetables change, buildings change. Data carries a `fetched` date and scripts are
  re-runnable — re-run periodically, don't treat it as static truth.
- Buses are **outbound only** (station → KU); return trips pending (`build_bus_schedule.py` with `updown=1`).
- The single-file HTML suits distribution, not multi-person contribution; it's closer to a "method sample +
  forkable template."
