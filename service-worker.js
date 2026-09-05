const CACHE_NAME = 'exam-quiz-cache-v4';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/logo.png',
  '/src/quizLogic.js',
  '/src/baccQuestions.js'
];

/* =========================
   INSTALLATION
========================= */

self.addEventListener('install', event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );

  self.skipWaiting();

});


/* =========================
   ACTIVATION
========================= */

self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames
            .filter(cacheName => {
              return cacheName !== CACHE_NAME;
            })
            .map(cacheName => {
              return caches.delete(cacheName);
            })

        );

      })
      .then(() => self.clients.claim())

  );

});


/* =========================
   REQUÊTES
========================= */

self.addEventListener('fetch', event => {

  const request = event.request;
  const url = new URL(request.url);


  /* =========================
     BACC QUESTIONS
  ========================= */

  if(
    url.pathname.endsWith(
      '/src/baccQuestions.js'
    )
  ){

    event.respondWith(

      fetch(request)

        .then(response => {

          const responseClone =
            response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {

              cache.put(
                request,
                responseClone
              );

            });

          return response;

        })

        .catch(() => {

          return caches.match(request);

        })

    );

    return;

  }


  /* =========================
     PAGES HTML
  ========================= */

  if(
    request.mode === 'navigate'
  ){

    event.respondWith(

      fetch(request)

        .then(response => {

          const responseClone =
            response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {

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


  /* =========================
     AUTRES FICHIERS
  ========================= */

  event.respondWith(

    caches.match(request)

      .then(cachedResponse => {

        if(cachedResponse){

          return cachedResponse;

        }

        return fetch(request);

      })

  );

});
