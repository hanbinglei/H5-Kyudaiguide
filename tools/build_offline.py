"""
build_offline.py — 产出 dist/kyudaimap-offline.html
读取 app.html → 注入 Leaflet/数据/底图 → 离线单文件
每个 replace 操作带断言，app.html 改动时静默失败改为明爆。
"""
import os, json, re, urllib.request

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "..", "h5-mvp")
DIST = os.path.join(BASE, "..", "dist")
APP = os.path.join(SRC, "app.html")
DATA = os.path.join(SRC, "data")

os.makedirs(DIST, exist_ok=True)

def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def assert_replace(html, old, new, label):
    """替换前断言 old 存在于 html，替换后断言 old 不存在"""
    assert old in html, f"ASSERT FAIL [{label}]: old string not found in template"
    html = html.replace(old, new)
    assert old not in html, f"ASSERT FAIL [{label}]: old string still present after replace"
    return html

def escape_json(s):
    return s.replace("</", "<\\/")

# ====== 1. Download Leaflet ======
print("Downloading Leaflet...")
L_JS = urllib.request.urlopen("https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js", timeout=30).read().decode()
L_CSS = urllib.request.urlopen("https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css", timeout=30).read().decode()
assert len(L_JS) > 50000, "Leaflet JS too small"
print(f"  JS: {len(L_JS):,}B  CSS: {len(L_CSS):,}B")

# ====== 2. Read template ======
html = read(APP)

# ====== 3. Inline Leaflet CSS ======
html = assert_replace(html,
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css" />',
    f"<style>\n{L_CSS}\n</style>",
    "Leaflet CSS inline")

# ====== 4. Inline Leaflet JS ======
html = assert_replace(html,
    '<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js"></script>',
    f"<script>\n{L_JS}\n</script>",
    "Leaflet JS inline")

# ====== 5. Replace tileLayer with vector basemap ======
TILE_LAYER = ("L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',\n"
              "  { maxZoom: 19, bounds: CAMPUS_BOUNDS }).addTo(map);")
BASEMAP_CODE = """// 离线底图：矢量道路/水体/绿地（在线版 tileLayer 已被本块替换）
// 用 DOMContentLoaded 延迟到数据块解析完成后再渲染
function renderBasemap() {
  const el = document.getElementById('data-basemap');
  if (!el) return;
  const data = JSON.parse(el.textContent);
  const styles = {
    water:  { color: '#aac4d1', weight: 0, fillColor: '#bfd2dc', fillOpacity: 0.7 },
    greens: { color: '#b5c9a4', weight: 0, fillColor: '#d9e8d0', fillOpacity: 0.55 },
    roads: function(f) {
      var hw = f.properties.highway || '';
      var major = /motorway|trunk|primary|secondary|tertiary/.test(hw);
      var path = /footway|path|steps|cycleway|pedestrian/.test(hw);
      return path
        ? { color: '#c8c0b8', weight: 1.5, dashArray: '4 5', fill: false }
        : major
          ? { color: '#b0a89f', weight: 4.5, fill: false }
          : { color: '#bcb4ab', weight: 2.5, fill: false };
    }
  };
  ['water', 'greens', 'roads'].forEach(function(layer) {
    var feats = data.features.filter(function(f) { return f.properties._layer === layer; });
    if (!feats.length) return;
    L.geoJSON({ type: 'FeatureCollection', features: feats }, {
      style: typeof styles[layer] === 'function' ? styles[layer] : function() { return styles[layer]; },
      interactive: false
    }).addTo(map);
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderBasemap);
} else {
  renderBasemap();  // 脚本在 DCL 之后执行（罕见但补上）
}"""
html = assert_replace(html, TILE_LAYER, BASEMAP_CODE, "CartoDB → vector basemap")

# ====== 6. Replace file:// geolocation ======
GEO_OLD = "  map.locate({ setView: false, maxZoom: 18, enableHighAccuracy: true });\n});"
GEO_NEW = "  if (window.location.protocol === 'file:') {\n    alert('离线版不支持 GPS 定位（浏览器限制：file:// 下禁用地理定位）');\n  } else {\n    map.locate({ setView: false, maxZoom: 18, enableHighAccuracy: true });\n  }\n});"
html = assert_replace(html, GEO_OLD, GEO_NEW, "Geolocation degrade")

# ====== 7. Replace marker icons with emoji divIcon ======
MARKER_OLD = ("L.marker([routeFrom[1], routeFrom[0]]).addTo(map),\n"
              "    L.marker([routeTo[1], routeTo[0]]).addTo(map),")
MARKER_NEW = """L.marker([routeFrom[1], routeFrom[0]], {
    icon: L.divIcon({ className: '', html: '<div style="font-size:24px">📍</div>', iconSize: [24,24], iconAnchor: [12,24] })
  }).addTo(map),
    L.marker([routeTo[1], routeTo[0]], {
    icon: L.divIcon({ className: '', html: '<div style="font-size:24px">🏁</div>', iconSize: [24,24], iconAnchor: [12,24] })
  }).addTo(map),"""
html = assert_replace(html, MARKER_OLD, MARKER_NEW, "emoji markers")

# ====== 8. Update attribution ======
ATTRIB_OLD = "'© OpenStreetMap contributors © CARTO'"
ATTRIB_NEW = "'© OpenStreetMap contributors'"
html = assert_replace(html, ATTRIB_OLD, ATTRIB_NEW, "attribution")

# ====== 9. Inject data blocks BEFORE main script (not after!) ======
# Find the closing </script> tag right before </body> to inject before
# Data blocks go AFTER the closing </script> of main script, BEFORE </body>
data_files = {
    "osm-buildings": "osm-buildings.geojson",
    "annotations-claude": "annotations-claude.json",
    "poi-points": "poi-points.json",
    "route-graph": "route-graph.json",
    "classrooms": "classrooms.json",
    "facilities": "facilities.json",
    "basemap": "basemap.json",
    "campus-boundary": "campus-boundary.json",
    "offices": "offices.json",
    "bus-schedule": "bus-schedule.json",
    "bus-routes": "bus-routes.json",
    "jp-holidays": "jp-holidays.json",
}

data_blocks = ""
for name, fname in data_files.items():
    path = os.path.join(DATA, fname)
    if os.path.exists(path):
        text = read(path)
        text = escape_json(text)
        data_blocks += f'<script type="application/json" id="data-{name}">\n{text}\n</script>\n'
        size_kb = os.path.getsize(path) / 1024
        print(f"  Inlined: {fname} ({size_kb:.0f} KB)")
    else:
        print(f"  SKIP: {fname}")

# Inject data blocks before </body>
assert '</body>' in html, "No </body> tag found"
html = html.replace('</body>', data_blocks + '\n</body>')

# ====== 10. Write output ======
out_path = os.path.join(DIST, "kyudaimap-offline.html")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(html)

size_kb = os.path.getsize(out_path) / 1024
size_mb = size_kb / 1024
print(f"\n✅ Built: {out_path}")
print(f"   Size: {size_kb:.0f} KB ({size_mb:.1f} MB)")

# ====== 11. Final assertions ======
assert 'cdn.jsdelivr.net' not in html, "CDN reference leaked"
assert 'basemaps.cartocdn.com' not in html, "CartoDB leaked"
assert 'id="data-osm-buildings"' in html, "osm-buildings data missing"
assert 'id="data-basemap"' in html, "basemap data missing"
assert 'loadData(' in html, "loadData missing"
print("✅ All post-build assertions passed")
