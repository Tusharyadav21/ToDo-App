const CACHE_NAME = "version-1";
const urlsToCache = ['index.html']; // Add other files you want to cache, like CSS, JS, etc.

const self = this;

// Install the service worker and cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch resources from cache or network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if available, otherwise fetch from network
                return cachedResponse || fetch(event.request).catch(() => {
                    // If offline and resource not cached, return a default response
                    return new Response("You're offline and the resource is not cached.");
                });
            })
    );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    );
});
