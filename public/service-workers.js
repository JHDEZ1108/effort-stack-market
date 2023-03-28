/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const doCache = false;
const CACHE_NAME = 'pwa-cache';

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log(`Deleting cache: ${key}`)
            return caches.delete(key);
          }
        }))
      )
  );
});

self.addEventListener('install', (event) => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          fetch("manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = [
                "/",
                assets["bundle.js"]
              ]
              const options = {
                cacheName: CACHE_NAME,
                ignoreVary: true,
                ignoreSearch: true,
                maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 // Aquí se define el límite a 10MB
              };
              cache.addAll(urlsToCache, options)
              console.log('cached');
            })
        })
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then((response) => response || fetch(event.request))
    );
  }
});
