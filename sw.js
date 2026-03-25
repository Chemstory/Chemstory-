// ============================================
// كيمستوري - Service Worker (sw.js)
// Cache-First Strategy for offline support
// ============================================

const CACHE_NAME = 'chemstory-v2';
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap'
];

// ===== التثبيت: كاش الأصول الأساسية =====
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching static assets...');
            // نكاش كل ملف على حدة عشان لو واحد فشل ما يوقفش الباقيين
            return Promise.allSettled(
                STATIC_ASSETS.map(url => cache.add(url).catch(e => console.warn('[SW] Failed to cache:', url, e)))
            );
        }).then(() => {
            console.log('[SW] Install complete ✓');
            return self.skipWaiting();
        })
    );
});

// ===== التفعيل: حذف الكاش القديم =====
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] Deleting old cache:', key);
                        return caches.delete(key);
                    })
            );
        }).then(() => {
            console.log('[SW] Activate complete ✓');
            return self.clients.claim();
        })
    );
});

// ===== الجلب: Cache-First مع Network Fallback =====
self.addEventListener('fetch', (evt) => {
    // تجاهل طلبات غير GET
    if (evt.request.method !== 'GET') return;

    // تجاهل روابط يوتيوب وخارجية (لا نكاشها)
    const url = new URL(evt.request.url);
    const isExternal = !url.origin.includes(self.location.origin) &&
                       !url.hostname.includes('fonts.googleapis.com') &&
                       !url.hostname.includes('fonts.gstatic.com') &&
                       !url.hostname.includes('cdnjs.cloudflare.com');

    if (isExternal) {
        return; // اتركه للمتصفح مباشرة
    }

    evt.respondWith(
        caches.match(evt.request).then((cachedRes) => {
            if (cachedRes) {
                // ارجع من الكاش وحدّث في الخلفية (Stale-While-Revalidate)
                const fetchPromise = fetch(evt.request).then(networkRes => {
                    if (networkRes && networkRes.status === 200) {
                        const cloned = networkRes.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(evt.request, cloned));
                    }
                    return networkRes;
                }).catch(() => null);

                return cachedRes;
            }

            // مش موجود في الكاش → جيبه من الشبكة وكاشه
            return fetch(evt.request).then((networkRes) => {
                if (!networkRes || networkRes.status !== 200) return networkRes;

                const cloned = networkRes.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(evt.request, cloned));
                return networkRes;
            }).catch(() => {
                // لو الاتنين فشلوا وكان HTML → ارجع الصفحة الرئيسية
                if (evt.request.headers.get('accept')?.includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
