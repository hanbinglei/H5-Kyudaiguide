"""
build_basemap.py — OSM 矢量底图数据抓取
抓取伊都校区道路/水体/绿地 → h5-mvp/data/basemap.json
"""
import urllib.request, json, time, os

BBOX = "33.582,130.192,33.618,130.242"
OVERSSL = "https://overpass-api.de/api/interpreter"
OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "h5-mvp", "data")
OUT_PATH = os.path.join(OUT_DIR, "basemap.json")
os.makedirs(OUT_DIR, exist_ok=True)

def truncate_coords(geom, precision=5):
    if isinstance(geom, list):
        if len(geom) > 0 and isinstance(geom[0], (int, float)):
            return [round(c, precision) for c in geom]
        return [truncate_coords(g, precision) for g in geom]
    elif isinstance(geom, dict):
        return {k: truncate_coords(v, precision) for k, v in geom.items()}
    return geom

def overpass_query(query, timeout=180):
    req = urllib.request.Request(OVERSSL, data=query.encode(),
        headers={"User-Agent": "KyudaiMap/1.0", "Content-Type": "text/plain"})
    for attempt in range(3):
        try:
            resp = urllib.request.urlopen(req, timeout=timeout)
            return json.loads(resp.read())
        except Exception as e:
            print(f"  Attempt {attempt+1}: {e}")
            if attempt < 2:
                wait = 10 * (attempt + 1)
                print(f"  Waiting {wait}s...")
                time.sleep(wait)
    return None

features = {"roads": [], "water": [], "greens": []}

# 1. Water
print("Fetching water...")
data = overpass_query(f"""
[out:json][timeout:120];
(nwr[natural=water]({BBOX}); way[waterway]({BBOX}););
out geom;
""")
if data:
    for e in data.get("elements", []):
        if e.get("geometry"):
            e["tags"] = e.get("tags", {})
            e["tags"]["_layer"] = "water"
            e["geometry"] = truncate_coords(e["geometry"])
            features["water"].append(e)
    print(f"  water: {len(features['water'])} features")
time.sleep(3)

# 2. Greens
print("Fetching greens...")
data = overpass_query(f"""
[out:json][timeout:120];
(nwr[leisure~"park|pitch|garden|playground"]({BBOX});
 nwr[landuse~"grass|forest|meadow|farmland|orchard"]({BBOX});
 nwr[natural~"wood|scrub|heath|grassland"]({BBOX}););
out geom;
""")
if data:
    for e in data.get("elements", []):
        if e.get("geometry"):
            e["tags"] = e.get("tags", {})
            e["tags"]["_layer"] = "greens"
            e["geometry"] = truncate_coords(e["geometry"])
            features["greens"].append(e)
    print(f"  greens: {len(features['greens'])} features")
time.sleep(3)

# 3. Roads (split into two queries)
print("Fetching major roads...")
data = overpass_query(f"""
[out:json][timeout:120];
way[highway~"motorway|trunk|primary|secondary|tertiary"]({BBOX});
out geom;
""")
if data:
    for e in data.get("elements", []):
        if e.get("geometry"):
            e["tags"] = e.get("tags", {})
            e["tags"]["_layer"] = "roads"
            e["geometry"] = truncate_coords(e["geometry"])
            features["roads"].append(e)
    print(f"  major roads: {len(data.get('elements',[]))} features")
time.sleep(3)

print("Fetching minor roads...")
data = overpass_query(f"""
[out:json][timeout:120];
way[highway~"residential|unclassified|service|footway|path|cycleway|pedestrian|steps|track"]({BBOX});
out geom;
""")
if data:
    for e in data.get("elements", []):
        if e.get("geometry"):
            e["tags"] = e.get("tags", {})
            e["tags"]["_layer"] = "roads"
            e["geometry"] = truncate_coords(e["geometry"])
            features["roads"].append(e)
    print(f"  minor roads: {len(data.get('elements',[]))} features")

# Merge all
all_features = []
for layer in ["water", "greens", "roads"]:
    for e in features[layer]:
        tags = e.get("tags", {})
        all_features.append({
            "type": "Feature",
            "geometry": e["geometry"],
            "properties": {
                "_layer": tags.pop("_layer", layer),
                "highway": tags.get("highway", ""),
                "natural": tags.get("natural", ""),
                "waterway": tags.get("waterway", ""),
                "leisure": tags.get("leisure", ""),
                "landuse": tags.get("landuse", ""),
                "name": tags.get("name", ""),
            }
        })

output = {"type": "FeatureCollection", "features": all_features}
with open(OUT_PATH, "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False)

size = os.path.getsize(OUT_PATH)
print(f"\n✅ Saved: {OUT_PATH}")
print(f"   Size: {size:,} bytes")
print(f"   Water: {len(features['water'])}, Greens: {len(features['greens'])}, Roads: {len(features['roads'])}")
print(f"   Total: {len(all_features)} features")
