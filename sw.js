// ============================================
// كيمستوري - Service Worker (sw.js) V3
// Fast Load & Offline Support (الدور الثاني)
// ============================================

const CACHE_NAME = 'chemstory-v3-round2'; // تم تغيير اسم الكاش لإجبار الأجهزة على التحديث
const STATIC_ASSETS = [
    './',
    './index.html',
    './camp.html',
    './style.css',
    './app.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    // الخطوط الجديدة المستخدمة في التصميم الحديث
    'https://fonts.googleapis.com/css2?family=Alexandria:wght@400;600;700;900&family=Cairo:wght@400;600;700;800&display=swap'
];

// ===== التثبيت: كاش الأصول الأساسية =====
self.addEventListener('install', (evt) => {
    self.skipWaiting(); // تفعيل السيرفيس وركر الجديد فوراً بدون انتظار عشان التحديث يظهر للطلاب علطول
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching static assets v3...');
            return Promise.allSettled(
                STATIC_ASSETS.map(url => cache.add(url).catch(e => console.warn('[SW] Failed to cache:', url, e)))
            );
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
                        return caches.delete(key); // مسح ملفات الموقع القديمة
                    })
            );
        }).then(() => {
            console.log('[SW] Activate complete ✓');
            return self.clients.claim(); // السيطرة على كل الصفحات المفتوحة لتطبيق التحديث
        })
    );
});

// ===== الجلب: Stale-While-Revalidate (تحميل أسرع) =====
self.addEventListener('fetch', (evt) => {
    if (evt.request.method !== 'GET') return;

    const url = new URL(evt.request.url);
    const isExternal = !url.origin.includes(self.location.origin) &&
                       !url.hostname.includes('fonts.googleapis.com') &&
                       !url.hostname.includes('fonts.gstatic.com') &&
                       !url.hostname.includes('cdnjs.cloudflare.com');

    if (isExternal) {
        return; 
    }

    evt.respondWith(
        caches.match(evt.request).then((cachedRes) => {
            // الاستراتيجية: اعرض الموجود في الكاش فوراً (لسرعة التحميل)، وفي الخلفية هات الجديد من النت
            const fetchPromise = fetch(evt.request).then(networkRes => {
                if (networkRes && networkRes.status === 200) {
                    const cloned = networkRes.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(evt.request, cloned));
                }
                return networkRes;
            }).catch(() => null);

            // لو الملف موجود في الكاش رجعه، لو مش موجود استنى الـ fetchPromise
            return cachedRes || fetchPromise.then(res => {
                // لو مفيش نت خالص والملف مش في الكاش (زي لو طالب فتح صفحة غلط)، رجعه للصفحة الرئيسية
                if (!res && evt.request.headers.get('accept')?.includes('text/html')) {
                    return caches.match('./index.html');
                }
                return res;
            });
        })
    );
});
