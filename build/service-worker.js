const m = [
  "/app/immutable/chunks/0-6489c216.js",
  "/app/immutable/chunks/1-40b3c2c5.js",
  "/app/immutable/chunks/2-a24041a6.js",
  "/app/immutable/chunks/_layout-a7d677aa.js",
  "/app/immutable/chunks/index-2f112dc9.js",
  "/app/immutable/chunks/index-9180a6cb.js",
  "/app/immutable/chunks/singletons-35780b33.js",
  "/app/immutable/start-462861ff.js",
  "/app/immutable/components/error.svelte-f44283aa.js",
  "/app/immutable/assets/_layout-e641be9d.css",
  "/app/immutable/components/pages/_layout.svelte-ad0aafd2.js",
  "/app/immutable/modules/pages/_layout.ts-6d76fa26.js",
  "/app/immutable/assets/_page-546933e0.css",
  "/app/immutable/components/pages/_page.svelte-21148933.js"
], h = [
  "/background.js",
  "/favicon.ico",
  "/favicon.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-96x96.png",
  "/logo192.png",
  "/logo512.png",
  "/manifest.json",
  "/maskableicon.png"
], o = "1676183890432", t = self, i = `cache${o}`, p = m.concat(h), u = new Set(p);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((a) => a.addAll(p)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (a) => {
      for (const e of a)
        e !== i && await caches.delete(e);
      t.clients.claim();
    })
  );
});
async function r(s) {
  const a = await caches.open(`offline${o}`);
  try {
    const e = await fetch(s);
    return a.put(s, e.clone()), e;
  } catch (e) {
    const c = await a.match(s);
    if (c)
      return c;
    throw e;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const a = new URL(s.request.url), e = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, n = a.host === self.location.host && u.has(a.pathname), l = s.request.cache === "only-if-cached" && !n;
  e && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
