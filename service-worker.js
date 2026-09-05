const CACHE_NAME = 'exam-quiz-cache-v4';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/src/quizLogic.js',
  '/src/baccQuestions.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {

  const url = new URL(event.request.url);

  /*
   * BANQUE DE QUESTIONS
   * Toujours essayer de récupérer
   * la dernière version depuis le réseau.
   */
  if (
    url.pathname.endsWith('/src/baccQuestions.js')
  ) {

    event.respondWith(

      fetch(event.request)
        .then((response) => {

          const responseClone =
            response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {

              cache.put(
                event.request,
                responseClone
              );

            });

          return response;

        })
        .catch(() => {

          return caches.match(
            event.request
          );

        })

    );

    return;
  }

  /*
   * HTML
   * Toujours récupérer la dernière
   * version du site depuis le réseau.
   */
  if (
    event.request.mode === 'navigate'
  ) {

    event.respondWith(

      fetch(event.request)
        .then((response) => {

          const responseClone =
            response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {

              cache.put(
                '/index.html',
                responseClone
              );

            });

          return response;

        })
        .catch(() => {

          return caches.match(
            '/index.html'
          );

        })

    );

    return;
  }

  /*
   * AUTRES FICHIERS
   * Cache en priorité.
   */
  event.respondWith(

    caches.match(event.request)
      .then((cachedResponse) => {

        return (
          cachedResponse ||
          fetch(event.request)
        );

      })

  );

});
