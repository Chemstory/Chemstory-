// ============================================
// كيمستوري - Service Worker (sw.js) V4
// Fast Load & Offline Support (دفعة 2027)
// ============================================

const CACHE_NAME = 'chemstory-v4-2027'; 
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Alexandria:wght@400;600;700;900&family=Cairo:wght@400;600;700;800&display=swap'
];

self.addEventListener('install', (evt) => {
    self.skipWaiting(); 
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching static assets v4...');
            return Promise.allSettled(
                STATIC_ASSETS.map(url => cache.add(url).catch(e => console.warn('[SW] Failed to cache:', url, e)))
            );
        })
    );
});

self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (evt) => {
    if (evt.request.method !== 'GET') return;
    const url = new URL(evt.request.url);
    const isExternal = !url.origin.includes(self.location.origin) &&
                       !url.hostname.includes('fonts.googleapis.com') &&
                       !url.hostname.includes('fonts.gstatic.com') &&
                       !url.hostname.includes('cdnjs.cloudflare.com');
    if (isExternal) return; 

    evt.respondWith(
        caches.match(evt.request).then((cachedRes) => {
            const fetchPromise = fetch(evt.request).then(networkRes => {
                if (networkRes && networkRes.status === 200) {
                    const cloned = networkRes.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(evt.request, cloned));
                }
                return networkRes;
            }).catch(() => null);

            return cachedRes || fetchPromise.then(res => {
                if (!res && evt.request.headers.get('accept')?.includes('text/html')) {
                    return caches.match('./index.html');
                }
                return res;
            });
        })
    );
});
