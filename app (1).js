// ============================================
// كيمستوري - app.js
// Service Worker + PWA Install Prompt
// ============================================

// ===== تسجيل الـ Service Worker =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => {
                console.log('[Chemstory] Service Worker registered ✓', reg.scope);
            })
            .catch(err => {
                console.warn('[Chemstory] Service Worker failed:', err);
            });
    });
}

// ===== منطق بانر التثبيت =====
let deferredPrompt = null;
const installBanner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');
const dismissBtn = document.getElementById('install-dismiss');

// استقبال الحدث قبل التثبيت
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // أظهر البانر بعد ثانيتين
    setTimeout(() => {
        if (installBanner) {
            installBanner.classList.remove('hidden');
        }
    }, 2000);
});

// زر التثبيت
if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;

        installBanner.classList.add('hidden');
        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;
        console.log('[Chemstory] Install outcome:', outcome);
        deferredPrompt = null;
    });
}

// زر الإلغاء
if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
        installBanner.classList.add('hidden');
        // لا نعرضه تاني في نفس الجلسة
        deferredPrompt = null;
    });
}

// لو التطبيق تم تثبيته بالفعل
window.addEventListener('appinstalled', () => {
    console.log('[Chemstory] App installed successfully ✓');
    if (installBanner) installBanner.classList.add('hidden');
    deferredPrompt = null;
});
