const CACHE_NAME = 'exam-quiz-cache-v5';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/logo.png',
  '/src/quizLogic.js',
  '/src/baccQuestions.js',
  '/src/biologieQuestions.js',
  '/src/geologieQuestions.js',
  '/src/chimieQuestions.js',
  '/src/anglaisQuestions.js',
  '/src/mathematiquesQuestions.js'
];


/* =========================
   INSTALLATION
========================= */

self.addEventListener('install', event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(FILES_TO_CACHE);

      })

  );

  /*
    Active immédiatement le nouveau
    service worker.
  */

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
      .then(() => {

        /*
          Prend immédiatement le contrôle
          des pages ouvertes.
        */

        return self.clients.claim();

      })

  );

});


/* =========================
   FICHIERS QUI DOIVENT
   TOUJOURS ÊTRE ACTUALISÉS
========================= */

const UPDATE_FILES = [

  '/index.html',

  '/src/quizLogic.js',

  '/src/baccQuestions.js',

  '/src/biologieQuestions.js',

  '/src/geologieQuestions.js',

  '/src/chimieQuestions.js',

  '/src/anglaisQuestions.js',

  '/src/mathematiquesQuestions.js'

];


/* =========================
   REQUÊTES
========================= */

self.addEventListener('fetch', event => {

  const request = event.request;

  const url = new URL(request.url);


  /*
    On ne traite que les requêtes HTTP/HTTPS.
  */

  if(
    request.method !== 'GET' ||
    (url.protocol !== 'http:' &&
     url.protocol !== 'https:')
  ){

    return;

  }


  /* =========================
     FICHIERS IMPORTANTS
     NETWORK FIRST
  ========================= */

  if(
    UPDATE_FILES.includes(url.pathname)
  ){

    event.respondWith(

      fetch(request, {
        cache: 'no-cache'
      })

        .then(response => {

          /*
            Si le serveur répond correctement,
            on sauvegarde la nouvelle version.
          */

          if(response && response.ok){

            const responseClone =
              response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(
                  request,
                  responseClone
                );

              });

          }

          return response;

        })

        .catch(() => {

          /*
            Pas d'Internet :
            utiliser la dernière version
            enregistrée dans le cache.
          */

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

      fetch(request, {
        cache: 'no-cache'
      })

        .then(response => {

          if(response && response.ok){

            const responseClone =
              response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(
                  request,
                  responseClone
                );

              });

          }

          return response;

        })

        .catch(() => {

          return caches.match(
            request
          ).then(cachedPage => {

            if(cachedPage){

              return cachedPage;

            }

            return caches.match(
              '/index.html'
            );

          });

        })

    );

    return;

  }


  /* =========================
     AUTRES FICHIERS
     CACHE FIRST
  ========================= */

  event.respondWith(

    caches.match(request)

      .then(cachedResponse => {

        if(cachedResponse){

          return cachedResponse;

        }

        return fetch(request)

          .then(response => {

            if(
              response &&
              response.ok
            ){

              const responseClone =
                response.clone();

              caches.open(CACHE_NAME)
                .then(cache => {

                  cache.put(
                    request,
                    responseClone
                  );

                });

            }

            return response;

          });

      })

  );

});
