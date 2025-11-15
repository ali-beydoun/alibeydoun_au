/*
 * SERVICE WORKER - Travel-Optimized Offline Support
 *
 * Strategy: NETWORK-FIRST with offline fallback
 * - When online: Always fetch fresh content from server
 * - When offline: Serve from cache for offline access during travel
 *
 * This ensures you always get the latest updates when connected,
 * but can still access the app when traveling without internet.
 */

const CACHE_NAME = 'tokyo-trip-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/ali-najah.jpeg',
    '/manifest.json',
    // Data modules
    '/data/trip-info.js',
    '/data/food-options.js',
    '/data/days/day-1.js',
    '/data/days/day-2.js',
    '/data/days/day-3.js',
    '/data/days/day-4.js',
    '/data/days/day-5.js',
    '/data/days/day-6.js',
    '/data/days/day-7.js',
    '/data/days/day-8.js',
];

// Install event - cache all resources
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                // Force the waiting service worker to become the active service worker
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches and take control immediately
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[ServiceWorker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            // Take control of all pages immediately
            return self.clients.claim();
        })
    );
});

// Fetch event - NETWORK-FIRST strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try network first
        fetch(event.request)
            .then((response) => {
                // If we got a valid response, clone and cache it
                if (response && response.status === 200) {
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                }

                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            console.log('[ServiceWorker] Serving from cache (offline):', event.request.url);
                            return cachedResponse;
                        }

                        // Not in cache either, return a basic offline response
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});
