/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

const CACHE_NAME = 'pwa-cache';

// Eliminar cachés antiguos
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

// Estrategia CacheFirst para archivos .png
workbox.routing.registerRoute(
  ({url}) => url.pathname.endsWith('.png'),
  new workbox.strategies.CacheFirst({
    cacheName: CACHE_NAME,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200], // Agregar respuestas con códigos 0 y 200 al caché
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20, // Máximo número de entradas en el caché
        maxAgeSeconds: 30 * 24 * 60 * 60, // Máxima duración en segundos que se puede almacenar una respuesta en el caché (30 días)
      }),
    ],
  })
);

// Estrategia para que google analytics funcione offline
workbox.googleAnalytics.initialize()

// Estrategia StaleWhileRevalidate para archivos .js y .css (solo para solicitudes GET)
workbox.routing.registerRoute(
  ({url, request}) => request.method === 'GET' && (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE_NAME,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200], // Agregar respuestas con códigos 0 y 200 al caché
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20, // Máximo número de entradas en el caché
        maxAgeSeconds: 30 * 24 * 60 * 60, // Máxima duración en segundos que se puede almacenar una respuesta en el caché (30 días)
      }),
    ],
  })
);

// Precargar los archivos esenciales de la aplicación
workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },  // Incluir la revisión adecuada
  { url: '/manifest.json', revision: '1' },
  { url: '/assets/Logo_Final.ico', revision: '1' },
  { url: '/assets/Logo_Final_144.png', revision: '1' },
  { url: '/assets/Logo_Final_192.png', revision: '1' },
  { url: '/assets/Logo_Final_512.png', revision: '1' },
  { url: '/assets/maskable_icon.png', revision: '1' },
  { url: '/checkout', revision: '1' },
  { url: '/checkout/information', revision: '1' },
  { url: '/checkout/success', revision: '1' },
  // Añadir más archivos para pre-cargar aquí
]);

// Por defecto va al final de todo 
workbox.routing.setDefaultHandler(new workbox.strategies.CacheFirst());

// workbox.setConfig({ debug: false });
