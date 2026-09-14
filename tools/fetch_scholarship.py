# -*- coding: utf-8 -*-
"""Parse GG 奨学金一覧 (list.php) -> structured JSON for H5-Kyudaiguide.

结构（实测 2026-09-14）：
  主行 = 12 格：掲載日(或「終了」/「募集中」) / No / 奨学金名 / 応募方法 / 支給額 /
                対象学生 / 日本語能力 / 過去の採用数 / 応募締切 / 学内選考書類 / 財団提出書類 / 備考
  副行 =  4 格：支給期間 / 対象地域 / 採用数(数値) / 決定時期
  ※ 页面是 EUC-JP；按 UTF-8 读会乱码
"""
import subprocess, re, json, os
from bs4 import BeautifulSoup

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36"
OUT = r"D:\Hermes\output\supporter_handbook_2026f\scholarship"
os.makedirs(OUT, exist_ok=True)

def fetch(u):
    b = subprocess.run(["curl", "-sL", "--max-time", "45", "-A", UA, u], capture_output=True).stdout
    for enc in ("utf-8", "euc_jp", "cp932"):
        try:
            t = b.decode(enc)
            if t.count("\ufffd") < 5:
                return t, enc
        except Exception:
            pass
    return b.decode("euc_jp", "replace"), "euc_jp?"

def cells_of(tr):
    return [re.sub(r"\s+", " ", c.get_text(" ", strip=True)).strip() for c in tr.select("th,td")]

def parse(u, lang):
    t, enc = fetch(u)
    soup = BeautifulSoup(t, "lxml")
    trs = soup.select("table tr")
    recs, cur = [], None
    for tr in trs:
        c = cells_of(tr)
        if not c or c[0] in ("掲載日", "Publication Date") or c[0] == "No":
            continue
        if len(c) >= 12:                       # 主行
            cur = {
                "status_raw": c[0],
                "no": c[1], "name": c[2], "apply_method": c[3], "stipend": c[4],
                "eligibility": c[5], "japanese": c[6], "past_adopted": c[7],
                "deadline": c[8],
                "docs_campus": c[9] if len(c) > 9 else "",
                "docs_foundation": c[10] if len(c) > 10 else "",
                "note": c[11] if len(c) > 11 else "",
                "period": "", "area": "", "adopted_num": "", "decision": "",
            }
            # 判断募集中/終了
            if re.match(r"^\d{4}年", c[0]) or re.match(r"^[A-Z][a-z]{2}\s", c[0]):
                cur["status"] = "open"
                cur["published"] = c[0]
            elif c[0] == "終了":
                cur["status"] = "closed"; cur["published"] = ""
            else:
                cur["status"] = "other"; cur["published"] = c[0]
            recs.append(cur)
        elif len(c) == 4 and cur is not None:   # 副行
            cur["period"], cur["area"], cur["adopted_num"], cur["decision"] = c
    return {"url": u, "lang": lang, "encoding": enc, "count": len(recs), "records": recs}

summary = {}
for nendo in ("2027", "2026"):
    for lang in ("", "en"):
        u = f"https://www.isc.kyushu-u.ac.jp/intlweb/scholarship/view/list.php?nendo={nendo}&lang={lang}"
        r = parse(u, lang or "ja")
        key = f"{nendo}_{lang or 'ja'}"
        summary[key] = r
        json.dump(r, open(os.path.join(OUT, f"scholarship_{key}.json"), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        open_c = sum(1 for x in r["records"] if x["status"] == "open")
        print(f"{key:10s} enc={r['encoding']:6s} total={r['count']:3d}  募集中={open_c:3d}  終了={r['count']-open_c:3d}")

json.dump(summary, open(os.path.join(OUT, "scholarship_all.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

print("\n=== 2027 年度（募集中优先）===")
for x in sorted(summary["2027_ja"]["records"], key=lambda y: (y["status"] != "open", y["no"])):
    print(f"  [{x['status']:6s}] No.{x['no']:>3s} {x['name'][:38]:38s} | {x['stipend'][:24]:24s} | 締切 {x['deadline'][:26]}")
print(f"\n=== 2026 年度 件数 {summary['2026_ja']['count']}（前 8 条示例）===")
for x in summary["2026_ja"]["records"][:8]:
    print(f"  [{x['status']:6s}] No.{x['no']:>3s} {x['name'][:36]:36s} | {x['stipend'][:22]:22s} | 締切 {x['deadline'][:22]}")
