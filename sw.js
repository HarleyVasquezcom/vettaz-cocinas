const CACHE_NAME = 'vettaz-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/productos.html',
  '/servicios.html',
  '/galeria.html',
  '/nosotros.html',
  '/contacto.html',
  '/assets/css/main.css',
  '/assets/css/components.css',
  '/assets/css/responsive.css',
  '/assets/js/main.js',
  '/site.webmanifest',
  '/favicon.ico',
  '/icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
