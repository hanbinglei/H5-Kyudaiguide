#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
audit_i18n_full.py — 全站多语言查漏补缺

现有校验器（check_body_i18n / check_nav_i18n / check_cunli_i18n / check_i18n_units）
只覆盖「有工具管的部分」。这个脚本专门找**绕过 t() 的硬编码文字**，分四类：

  A. JS 里出现在字符串字面量中的中日韩文字（排除 t() 的参数、i18n 数据文件本身）
  B. index.html 里带文字的静态元素 —— 再判断它是否被 JS 赋值覆盖
     （没有被覆盖的：切语言时永远不变 ← 最隐蔽的一类）
  C. t('key', '兜底') 的兜底值与 i18n 词典里的 zh 是否一致（不一致 = 词典改了、兜底没跟）
  D. t('key') 用到的 key 是否四语齐全（含点号路径）

用法：python tools/audit_i18n_full.py [--json]
"""
import re, os, sys, json, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_DIR = os.path.join(ROOT, 'guide', 'js')
HTML = os.path.join(ROOT, 'guide', 'index.html')

CJK = re.compile(r'[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uff66-\uff9f]')
# 这些文件的全部内容都是译文数据，不参与「硬编码」检查
DATA_FILES = {'i18n.js', 'articles-i18n.js', 'articles-body-i18n.js',
              'data-cunli.js', 'data-newcomer-zone.js', 'data-categories.js',
              'data-articles.js', 'data-faculties.js'}

def strip_comments(src):
    src = re.sub(r'/\*[\s\S]*?\*/', '', src)
    src = re.sub(r'(?m)^\s*//.*$', '', src)
    src = re.sub(r'(?<!:)//[^\n\'"]*$', '', src, flags=re.M)
    return src

def report_a():
    """A. JS 字符串字面量里的中文（排除 t() 参数）"""
    out = []
    for path in sorted(glob.glob(os.path.join(JS_DIR, '*.js'))):
        name = os.path.basename(path)
        if name in DATA_FILES:
            continue
        src = open(path, encoding='utf-8').read()
        src = strip_comments(src)
        # 把 t('...') / t("...") 的第一个参数挖掉 —— 那是正常的词典引用
        src = re.sub(r"\bt\(\s*'[^']*'\s*(?:,\s*'[^']*'\s*)?\)", 't(___KEY___)', src)
        src = re.sub(r"\bt\(\s*\"[^\"]*\"\s*(?:,\s*\"[^\"]*\"\s*)?\)", 't(___)', src)
        for m in re.finditer(r"'([^'\\\n]*)'|\"([^\"\\\n]*)\"|`([^`]*)`", src):
            s = m.group(1) or m.group(2) or m.group(3) or ''
            if not CJK.search(s):
                continue
            line = src[:m.start()].count('\n') + 1
            out.append({'file': name, 'line': line, 'text': s.strip()[:70]})
    return out

def report_b():
    """B. index.html 静态文字，是否被 JS 覆盖"""
    html = open(HTML, encoding='utf-8').read()
    app = open(os.path.join(JS_DIR, 'app.js'), encoding='utf-8').read()
    others = ''.join(open(p, encoding='utf-8').read()
                     for p in glob.glob(os.path.join(JS_DIR, '*.js'))
                     if os.path.basename(p) != 'app.js')
    alljs = app + others
    out = []
    for m in re.finditer(r'<(\w+)([^>]*?)>([^<]+)</\1>', html):
        tag, attrs, text = m.group(1), m.group(2), m.group(3).strip()
        if not CJK.search(text):
            continue
        if tag in ('script', 'style'):
            continue
        idm = re.search(r'id="([^"]+)"', attrs)
        eid = idm.group(1) if idm else None
        # 有没有被 JS 按 id 重写？
        covered = False
        if eid:
            covered = bool(re.search(r"""(\$\(|getElementById\(|querySelector\('#)['"]?%s['"]?\)""" % re.escape(eid), alljs))
        out.append({'tag': tag, 'id': eid, 'text': text[:70], 'covered': covered})
    return out

def report_b2():
    """B2. index.html 里 aria-label / title / placeholder 带中文，且 JS 从不设置它。
    这类最隐蔽：看不见（读屏软件和悬停提示才用到），静态看不出坏，切语言也不报错。"""
    html = open(HTML, encoding='utf-8').read()
    alljs = ''.join(open(p, encoding='utf-8').read()
                    for p in glob.glob(os.path.join(JS_DIR, '*.js')))
    out = []
    for m in re.finditer(r'<(\w+)([^>]*)>', html):
        tag, attrs = m.group(1), m.group(2)
        idm = re.search(r'id="([^"]+)"', attrs)
        eid = idm.group(1) if idm else None
        for a in ('aria-label', 'title', 'placeholder'):
            am = re.search(r'%s="([^"]*)"' % a, attrs)
            if not am or not CJK.search(am.group(1)):
                continue
            covered = False
            if eid and re.search(
                    r'''([$]\('|getElementById\('|querySelector\('#)['"]?%s['"]?\)''' % re.escape(eid), alljs):
                covered = True
            # 也认 class 选择器：.tabbar 这种没有 id 的元素只能这么选
            if not covered:
                for cls in (re.search(r'class="([^"]+)"', attrs).group(1).split()
                            if re.search(r'class="([^"]+)"', attrs) else []):
                    if re.search(r"""querySelector\(["']\.%s""" % re.escape(cls), alljs):
                        covered = True
                        break
            out.append({'tag': tag, 'id': eid, 'attr': a, 'text': am.group(1)[:44], 'covered': covered})
    return out

def load_dict():
    """跑 i18n.js 拿四语词典（用 node）"""
    import subprocess
    # i18n.js 在 IIFE 里跑，需要 localStorage / navigator / location / document 才能加载
    code = r'''
const fs=require('fs'),vm=require('vm');
const c={window:{},
  document:{documentElement:{},querySelector:()=>null,addEventListener(){},
            body:{classList:{add(){},remove(){}}}},
  localStorage:{getItem:()=>null,setItem(){}},
  navigator:{language:'zh'}, location:{hash:''}};
c.window.localStorage=c.localStorage; c.window.location=c.location; c.window.navigator=c.navigator;
vm.createContext(c);
// ⚠️ argv[1] 是脚本自己；第一个参数在 argv[2]。写错会把脚本自身读进沙箱，
// 报的却是「require is not defined」（沙箱里没有模块作用域），完全指错方向。
vm.runInContext(fs.readFileSync(process.argv[2],'utf8'),c);
const I=c.window.GuideI18N;
// ⚠️ 词典里的插值键（monthTitle / monthN / renkyu 等）是**函数**，
// JSON.stringify 会把函数属性整个丢掉 —— 于是它们看起来像「键不存在」。
// 必须显式标成 __FN__，否则审计工具会凭空报一堆假缺失。
const seen=new Set();
const rep=(k,v)=>{ if(typeof v==='function') return '__FN__';
  if(v&&typeof v==='object'){ if(seen.has(v))return '[Circular]'; seen.add(v);} return v; };
function paths(o,pre){ const out={};
  for(const k of Object.keys(o)){ const v=o[k], p2=pre?pre+'.'+k:k;
    // 数组当叶子值：展开成 wd.0 / wd.1 会让「键 wd 存在」被判成不存在
    if(v&&typeof v==='object'&&typeof v!=='function'&&!Array.isArray(v)){ Object.assign(out,paths(v,p2)); }
    else { out[p2]=v; } }
  return out; }
const flat={}; for(const L of I.LANGS) flat[L]=paths(I.UI[L]||{});
console.log(JSON.stringify({langs:I.LANGS, out:flat}, rep));
'''
    p = os.path.join(ROOT, 'tools', '.i18n_dump.js')
    # 必须 with 显式关闭：否则缓冲区没落盘，node 读到的是空文件
    # —— 表现为「文件存在、node 退出码 0、但 stdout 为空」，极难看出
    with open(p, 'w', encoding='utf-8') as f:
        f.write(code)
    try:
        r = subprocess.run(['node', p, os.path.join(JS_DIR, 'i18n.js')],
                           capture_output=True, text=True, encoding='utf-8')
        return json.loads(r.stdout)
    finally:
        os.remove(p)

def report_cd(dump):
    """C. t(key,'兜底') 的兜底 vs 词典；D. key 四语齐全"""
    langs, out = dump['langs'], dump['out']
    zh = out.get('zh', {})
    bad_fallback, missing = [], []
    for path in sorted(glob.glob(os.path.join(JS_DIR, '*.js'))):
        name = os.path.basename(path)
        if name in DATA_FILES:
            continue
        src = open(path, encoding='utf-8').read()
        for m in re.finditer(r"\bt\(\s*'([A-Za-z0-9_.]+)'\s*,\s*'([^']*)'\s*\)", src):
            key, fb = m.group(1), m.group(2)
            real = zh.get(key)
            if real is not None and real != fb:
                bad_fallback.append({'file': name, 'key': key, 'fallback': fb, 'dict_zh': real})
        for m in re.finditer(r"\bt\(\s*'([A-Za-z0-9_.]+)'\s*\)", src):
            key = m.group(1)
            if key not in zh:
                missing.append({'file': name, 'key': key})
            else:
                miss = [L for L in langs if key not in out.get(L, {})]
                if miss:
                    missing.append({'file': name, 'key': key, 'missing_langs': miss})
    return bad_fallback, missing, zh, out, langs

if __name__ == '__main__':
    dump = load_dict()
    a = report_a()
    b = report_b()
    bbad = [x for x in b if not x['covered']]
    b2 = report_b2()
    b2bad = [x for x in b2 if not x['covered']]
    c, d, zh, out, langs = report_cd(dump)

    if '--json' in sys.argv:
        print(json.dumps({'A_hardcoded_js': a, 'B_html_uncovered': bbad,
                          'C_fallback_mismatch': c, 'D_key_missing': d},
                         ensure_ascii=False, indent=1))
        sys.exit(0)

    print('语言: %s   词典顶层键: %s' % ('/'.join(langs), {L: len(out[L]) for L in langs}))
    print('\n=== A. JS 里的硬编码中日韩文字（绕过 t()）%d 处 ===' % len(a))
    from collections import Counter
    for fn, n in Counter(x['file'] for x in a).most_common():
        print('  %-22s %d 处' % (fn, n))
    print('\n=== B. index.html 静态文字且未被 JS 覆盖 %d 处（可疑，需实测确认）===' % len(bbad))
    print('    ⚠️ 本项有已知误报：JS 用「动态拼 id」时（如 $('+"'tab'"+'+k[0].toUpperCase()+k.slice(1))）')
    print('       静态正则看不出覆盖关系。**最终以浏览器四语实测为准。**')
    for x in bbad:
        print('  %-10s id=%-20s 「%s」' % (x['tag'], x['id'] or '—', x['text']))
    print('\n=== B2. HTML 属性(aria-label/title/placeholder)带中文且 JS 从不设置 %d 处 ===' % len(b2bad))
    for x in b2bad:
        print('  <%-6s id=%-18s %-12s 「%s」' % (x['tag'], x['id'] or '—', x['attr'], x['text']))
    print('\n=== C. t(key, 兜底) 与词典 zh 不一致 %d 处 ===' % len(c))
    for x in c[:20]:
        print('  %-16s %-24s 兜底「%s」≠ 词典「%s」' % (x['file'], x['key'], x['fallback'][:22], x['dict_zh'][:22]))
    print('\n=== D. t() 的 key 缺失 %d 处 ===' % len(d))
    seen = set()
    for x in d:
        k = (x['key'], tuple(x.get('missing_langs', ['ALL'])))
        if k in seen:
            continue
        seen.add(k)
        print('  %-16s %-26s %s' % (x['file'], x['key'], '词典无此键' if 'missing_langs' not in x else '缺 ' + ','.join(x['missing_langs'])))
