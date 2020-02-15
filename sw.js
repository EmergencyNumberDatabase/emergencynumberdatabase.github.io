const version = "1.0.1";
const cacheName = `emndb`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/index.html`,
        `/script.js`,
        `/style.css`,
        `/script.js`,
        `/lib/jquery-3.4.1.js`,
        `/README.md`,
        `/site.webmanifest`,
        `/favicon.ico`,
        `/html_code.html`,
        `/src/animation/loading.svg`,
        `/termsandconditions.md`,
        `/src/icon/logo/1500x1500.png`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});