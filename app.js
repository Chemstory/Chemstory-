/* ============================================
   كيمستوري - العقل المدبر V4 (عام 2026/2027)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. بيانات المنهج الكامل =====
    const chapterData = {
        ch1: { title: "الباب الأول: العناصر الانتقالية", color: "#00e1ff", lessons: [ { title: "المحاضرة الأولى | العناصر الانتقالية واستخداماتها", link: "https://youtu.be/hmhxP0MX2ww", type: "video" }, { title: "المحاضرة الثانية | التوزيع الإلكتروني وحالات التأكسد", link: "https://youtu.be/OQShraGjnds", type: "video" }, { title: "المحاضرة الثالثة | الخواص العامة لعناصر السلسلة الانتقالية الأولى", link: "https://youtu.be/pkvvUuGPhao", type: "video" }, { title: "ورشة حل على أول 3 دروس", link: "https://youtu.be/AMapAcB8bpc", type: "workshop" }, { title: "المحاضرة الرابعة | الحديد", link: "https://youtu.be/IESH5EzYfwE", type: "video" }, { title: "المحاضرة الخامسة | السبائك وجهد التأين والنشاط الحفزي", link: "https://youtu.be/4uvWidz1F-Q", type: "video" }, { title: "المحاضرة السادسة | خواص الحديد وأكاسيد الحديد", link: "https://youtu.be/w4sWzYNAzTY", type: "video" }, { title: "ورشة حل على الحديد وأكاسيده", link: "https://youtu.be/qStTS5SMXT8", type: "workshop" } ] },
        ch2: { title: "الباب الثاني: الكيمياء التحليلية", color: "#8b5cf6", lessons: [ { title: "المحاضرة الأولى | مقدمة التحليل الكيميائي ومجموعة HCl", link: "https://youtu.be/gItri-ydEUc", type: "video" }, { title: "المحاضرة الثانية | مجموعة حمض الكبريتيك والكاتيونات", link: "https://youtu.be/kXqJ3FHoyAE", type: "video" }, { title: "المحاضرة الثالثة | المعايرة وأسس الكيمياء الكمية", link: "https://youtu.be/kVJPCCSnNWI", type: "video" }, { title: "المحاضرة الرابعة | التحليل الكمي الكتلي بطريقة التطاير", link: "https://youtu.be/M8-ChLDpG-Q", type: "video" }, { title: "المحاضرة الخامسة | التحليل الكمي الكتلي بطريقة الترسيب", link: "https://youtu.be/VYa6dmKNOok", type: "video" } ] },
        ch3: { title: "الباب الثالث: الاتزان الكيميائي", color: "#2ecc71", lessons: [ { title: "المحاضرة الأولى | مقدمة الاتزان الكيميائي", link: "https://youtu.be/28Yh6r8upLM", type: "video" }, { title: "المحاضرة الثانية | العوامل المؤثرة على سرعة التفاعل وأثر التركيز", link: "https://youtu.be/7GigQ8sxA90", type: "video" }, { title: "المحاضرة الثالثة | أثر الضغط والحرارة على الاتزان", link: "https://youtu.be/bLBJpvy_k2s", type: "video" }, { title: "المحاضرة الرابعة | المحاليل الإلكتروليتية وثابت اتزان الأحماض", link: "https://youtu.be/CcrBdlnfBjA", type: "video" }, { title: "المحاضرة الخامسة | تأين الماء", link: "https://youtu.be/QjJxp86Wq4Y", type: "video" }, { title: "المحاضرة السادسة | تأين الأملاح", link: "https://youtu.be/Q17EqyT8Mj4", type: "video" } ] },
        ch4: { title: "الباب الرابع: الكيمياء الكهربية", color: "#ff2e7e", lessons: [ { title: "المحاضرة الأولى | الكيمياء الكهربية و خلية دانيال", link: "https://youtu.be/yiPd0yA6wfo", type: "video" }, { title: "المحاضرة الثانية | قطب الهيدروجين القياسي والمتسلسلة الجهود", link: "https://youtu.be/2K3R4C77LGo", type: "video" }, { title: "المحاضرة الثالثة | الخلايا الجلفانية", link: "https://youtu.be/KyBwpP9Yxhw", type: "video" }, { title: "الفصل الثاني | الخلايا التحليلية (PDF)", link: "https://drive.google.com/file/d/1yCWfEOIdkVVxJkezZunVScAb-yKajNHT/view?usp=drivesdk", type: "pdf" } ] },
        ch5: { title: "الباب الخامس: الكيمياء العضوية", color: "#f1c40f", lessons: [ { title: "المحاضرة الأولى | مقدمة الكيمياء العضوية", link: "https://youtu.be/8_34uOB3KzQ", type: "video" }, { title: "المحاضرة الثانية | مقدمة الهيدروكربونات والأيزوميرزم", link: "https://youtu.be/0EZJqsFmpys", type: "video" }, { title: "المحاضرة الثالثة | الألكانات", link: "https://youtu.be/VB-5Z1EnF4U", type: "video" }, { title: "المحاضرة الرابعة | الميثان", link: "https://youtu.be/kkmOlL2pb5c", type: "video" }, { title: "المحاضرة الخامسة | الألكينات", link: "https://youtu.be/Cn4eEo2GJyA", type: "video" }, { title: "المحاضرة السادسة | الألكاينات", link: "https://youtu.be/L5IvPETiih0", type: "video" }, { title: "المحاضرة السابعة | الألكانات الحلقية", link: "https://youtu.be/-lswo3-K-lo", type: "video" }, { title: "المحاضرة الثامنة | البنزين", link: "https://youtu.be/Uyx-Rkc-8-g", type: "video" }, { title: "المحاضرة التاسعة | مشتقات الهيدروكربونات", link: "https://youtu.be/2eiXSvOf_-k", type: "video" }, { title: "المحاضرة العاشرة | الكحولات", link: "https://youtu.be/7xhhWSds0cE", type: "video" }, { title: "المحاضرة الحادية عشر | الفينولات ومقدمة الأحماض", link: "https://youtu.be/F82Z3XYWVwo", type: "video" }, { title: "المحاضرة الثانية عشر | الأحماض", link: "https://youtu.be/o9mIbc2K77M", type: "video" }, { title: "المحاضرة الثالثة عشر | الاسترات", link: "https://youtu.be/mgstXL7wA-w", type: "video" } ] },
        rev: { title: "بنك الأسئلة والمراجعات", color: "#ff4757", lessons: [ { title: "مراجعة العناصر الانتقالية", link: "https://youtu.be/_T0ItOsmQc8", type: "workshop" }, { title: "مراجعة الكيمياء التحليلية", link: "https://youtu.be/VrtMbOphGwE", type: "workshop" }, { title: "مراجعة الباب الثالث (الاتزان)", link: "https://youtu.be/3lSCUyFsx7A", type: "workshop" }, { title: "مراجعة باقي الاتزان والكهربية", link: "https://youtu.be/HDDwP4Jfst0", type: "workshop" }, { title: "مراجعة الهيدروكربونات", link: "https://youtu.be/YXKTmbtUQxU", type: "workshop" }, { title: "مراجعة المشتقات", link: "https://youtu.be/CHneJto5OeM", type: "workshop" } ] }
    };

    // ===== 2. عبارات تحفيزية لدفعة العام الجديد =====
    const quotes = [
        "بداية جديدة لدفعة 2027.. حلمك يستاهل تتعب عشانه من أول يوم.",
        "الكيمياء ممتعة.. افهمها صح تقفلها براحتك.",
        "متراكمش حاجة.. البداية الصح هي اللي بتكمل معاك للآخر.",
        "نظم وقتك، امسك ورقة وقلم، وخليك دايماً سابق بخطوة.",
        "طريق الألف ميل بيبدأ بمحاضرة.. ابدأ دلوقتي.",
        "النجاح مش صدفة، النجاح التزام واستمرارية.",
        "مستر فارس معاك من أول يوم لحد باب اللجنة."
    ];
    const dailyQuoteEl = document.getElementById('daily-quote');
    if (dailyQuoteEl) { dailyQuoteEl.innerText = quotes[Math.floor(Math.random() * quotes.length)]; }

    // ===== 3. منطق الصفحة الرئيسية (الرجوع الذكي + الخلفيات الديناميكية) =====
    const mainChapterGrid = document.getElementById('main-chapter-grid');
    if (mainChapterGrid) {
        const lessonsPanel = document.getElementById('lessons-panel');
        const lessonItemGrid = document.getElementById('lesson-item-grid');
        const currentChapterTitle = document.getElementById('current-chapter-title');
        const dynamicBgContainer = document.getElementById('dynamic-bg');

        const chapterIcons = {
            ch1: ['fa-atom', 'fa-cogs', 'fa-cubes'], 
            ch2: ['fa-flask', 'fa-vial', 'fa-vials'], 
            ch3: ['fa-balance-scale', 'fa-temperature-high'], 
            ch4: ['fa-bolt', 'fa-plug', 'fa-car-battery'], 
            ch5: ['fa-project-diagram', 'fa-hexagon', 'fa-dna'], 
            rev: ['fa-check-double', 'fa-tasks'] 
        };

        function showLessons(chapterKey, pushToHistory = true) {
            const data = chapterData[chapterKey];
            if (!data) return;
            currentChapterTitle.innerText = data.title;
            lessonsPanel.style.setProperty('--chapter-color', data.color);
            lessonItemGrid.innerHTML = '';
            
            if (dynamicBgContainer) {
                dynamicBgContainer.innerHTML = '';
                const icons = chapterIcons[chapterKey] || ['fa-atom'];
                for (let i = 0; i < 12; i++) {
                    const icon = document.createElement('i');
                    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                    icon.className = `fas ${randomIcon} floating-icon`;
                    icon.style.left = `${Math.random() * 100}%`;
                    icon.style.fontSize = `${Math.random() * 3 + 1}em`;
                    icon.style.animationDuration = `${Math.random() * 10 + 10}s`;
                    icon.style.animationDelay = `-${Math.random() * 10}s`;
                    dynamicBgContainer.appendChild(icon);
                }
            }
            
            data.lessons.forEach((lesson) => {
                let iconClass = lesson.type === "workshop" ? "fas fa-tasks" : lesson.type === "pdf" ? "fas fa-file-pdf" : "fas fa-play-circle";
                const a = document.createElement('a');
                a.href = lesson.link; a.target = "_blank"; a.className = "lesson-card glass-panel fade-in-up";
                a.style.animationDuration = "0.4s";
                a.innerHTML = `<div class="lesson-icon-wrap-l"><i class="${iconClass}"></i></div>
                               <div class="lesson-content"><p class="lesson-card-title" style="margin:0; color:#fff">${lesson.title}</p></div>`;
                lessonItemGrid.appendChild(a);
            });

            mainChapterGrid.style.display = 'none';
            lessonsPanel.style.display = 'block';
            window.scrollTo({ top: lessonsPanel.offsetTop - 30, behavior: 'smooth' });

            if (pushToHistory) history.pushState({ view: 'lessons', chapter: chapterKey }, "");
        }

        function hideLessons(shouldPopHistory = false) {
            lessonsPanel.style.display = 'none';
            mainChapterGrid.style.display = 'grid';
            window.scrollTo({ top: mainChapterGrid.offsetTop - 50, behavior: 'smooth' });
            if (shouldPopHistory && history.state && history.state.view === 'lessons') history.back();
        }

        window.addEventListener('popstate', (event) => {
            if (event.state === null) {
                hideLessons(false);
            } else if (event.state && event.state.view === 'lessons') {
                showLessons(event.state.chapter, false);
            }
        });

        mainChapterGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.chapter-card'); 
            if (card && card.dataset.chapter) {
                showLessons(card.dataset.chapter);
            }
        });

        document.getElementById('back-to-chapters')?.addEventListener('click', () => {
            hideLessons(true);
        });
    }

    // إخفاء اللودر عند التحميل
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(() => loader.remove(), 800);
        }
    }, 1200);
});

