/* sw.js — 让指南离线可读。
 *
 * 为什么值得做：这份指南自己就在教「机场先换零钱」「落地先办 SIM 卡」——
 * 也就是说，最需要翻开它的时刻，恰恰是学生还没有日本网络的时候。
 * 首屏 224KB 全部预缓存，装一次之后断网、飞行模式、机场无 wifi 都能读。
 *
 * 作用域说明：本 SW 注册在 /guide/ 下，作用域也就止于 /guide/。
 * 地图在 ../h5-mvp/（约 500KB 数据）不在作用域内，不会被它缓存 —— 这是有意的：
 * 指南是随身要看的，地图是到了校园才用的，没必要为后者占掉学生的存储和流量。
 */
const VERSION = 'kg-20260826';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './js/data-categories.js',
  './js/data-faculties.js',
  './js/data-articles.js',
  './js/articles-i18n.js',
  './js/articles-body-i18n.js',
  './js/data-cunli.js',
  './js/cunli-utils.js',
  './js/i18n.js',
  './js/render.js',
  './js/app.js',
  './icons/favicon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    // 逐个 add：任何一条挂掉都不该让整个安装失败（少一张图标不影响能不能读）
    await Promise.all(CORE.map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;          // 外链（官网、地图瓦片）不碰
  if (!url.pathname.startsWith(new URL('./', self.location).pathname)) return; // 作用域外不碰

  // 导航请求：网络优先，拿不到再回缓存 —— 保证内容更新能及时生效，断网时仍打得开
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const net = await fetch(req);
        const c = await caches.open(VERSION);
        c.put('./index.html', net.clone());
        return net;
      } catch (_) {
        return (await caches.match('./index.html', { ignoreSearch: true }))
            || (await caches.match('./', { ignoreSearch: true }))
            || Response.error();
      }
    })());
    return;
  }

  // 静态资源：缓存优先。ignoreSearch 让 ?v=xxxx 变化也能命中，
  // 真正的版本更新靠上面 VERSION 换名 + activate 清旧缓存来完成。
  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const net = await fetch(req);
      if (net && net.ok && net.type === 'basic') {
        const c = await caches.open(VERSION);
        c.put(req, net.clone());
      }
      return net;
    } catch (_) {
      return Response.error();
    }
  })());
});
