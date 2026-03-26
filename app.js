/* ============================================
   كيمستوري - منطق التحكم (نسخة المعسكر)
   History API | LocalStorage | Dynamic Progress
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. بيانات المنهج الأساسية =====
    const chapterData = {
        ch1: { title: "الباب الأول: العناصر الانتقالية", color: "#009ce4", lessons: [ { title: "المحاضرة الأولى | العناصر الانتقالية واستخداماتها", link: "https://youtu.be/hmhxP0MX2ww", type: "video" }, { title: "المحاضرة الثانية | التوزيع الإلكتروني وحالات التأكسد", link: "https://youtu.be/OQShraGjnds", type: "video" }, { title: "المحاضرة الثالثة | الخواص العامة لعناصر السلسلة الانتقالية الأولى", link: "https://youtu.be/pkvvUuGPhao", type: "video" }, { title: "ورشة حل على أول 3 دروس", link: "https://youtu.be/AMapAcB8bpc", type: "workshop" }, { title: "المحاضرة الرابعة | الحديد", link: "https://youtu.be/IESH5EzYfwE", type: "video" }, { title: "المحاضرة الخامسة | السبائك وجهد التأين والنشاط الحفزي", link: "https://youtu.be/4uvWidz1F-Q", type: "video" }, { title: "المحاضرة السادسة | خواص الحديد وأكاسيد الحديد", link: "https://youtu.be/w4sWzYNAzTY", type: "video" }, { title: "ورشة حل على الحديد وأكاسيده", link: "https://youtu.be/qStTS5SMXT8", type: "workshop" } ] },
        ch2: { title: "الباب الثاني: الكيمياء التحليلية", color: "#7c3aed", lessons: [ { title: "المحاضرة الأولى | مقدمة التحليل الكيميائي ومجموعة HCl", link: "https://youtu.be/gItri-ydEUc", type: "video" }, { title: "المحاضرة الثانية | مجموعة حمض الكبريتيك والكاتيونات", link: "https://youtu.be/kXqJ3FHoyAE", type: "video" }, { title: "المحاضرة الثالثة | المعايرة وأسس الكيمياء الكمية", link: "https://youtu.be/kVJPCCSnNWI", type: "video" }, { title: "المحاضرة الرابعة | التحليل الكمي الكتلي بطريقة التطاير", link: "https://youtu.be/M8-ChLDpG-Q", type: "video" }, { title: "المحاضرة الخامسة | التحليل الكمي الكتلي بطريقة الترسيب", link: "https://youtu.be/VYa6dmKNOok", type: "video" } ] },
        ch3: { title: "الباب الثالث: الاتزان الكيميائي", color: "#059669", lessons: [ { title: "المحاضرة الأولى | مقدمة الاتزان الكيميائي", link: "https://youtu.be/28Yh6r8upLM", type: "video" }, { title: "المحاضرة الثانية | العوامل المؤثرة على سرعة التفاعل وأثر التركيز", link: "https://youtu.be/7GigQ8sxA90", type: "video" }, { title: "المحاضرة الثالثة | أثر الضغط والحرارة على الاتزان", link: "https://youtu.be/bLBJpvy_k2s", type: "video" }, { title: "المحاضرة الرابعة | المحاليل الإلكتروليتية وثابت اتزان الأحماض", link: "https://youtu.be/CcrBdlnfBjA", type: "video" }, { title: "المحاضرة الخامسة | تأين الماء", link: "https://youtu.be/QjJxp86Wq4Y", type: "video" }, { title: "المحاضرة السادسة | تأين الأملاح", link: "https://youtu.be/Q17EqyT8Mj4", type: "video" } ] },
        ch4: { title: "الباب الرابع: الكيمياء الكهربية", color: "#dc2626", lessons: [ { title: "المحاضرة الأولى | الكيمياء الكهربية و خلية دانيال", link: "https://youtu.be/yiPd0yA6wfo", type: "video" }, { title: "المحاضرة الثانية | قطب الهيدروجين القياسي والمتسلسلة الجهود", link: "https://youtu.be/2K3R4C77LGo", type: "video" }, { title: "المحاضرة الثالثة | الخلايا الجلفانية", link: "https://youtu.be/KyBwpP9Yxhw", type: "video" }, { title: "الفصل الثاني | الخلايا التحليلية (PDF)", link: "https://drive.google.com/file/d/1yCWfEOIdkVVxJkezZunVScAb-yKajNHT/view?usp=drivesdk", type: "pdf" } ] }
    };

    // ===== 2. بيانات جدول معسكر الإنقاذ (28 مارس - 20 مايو) =====
    const backlogSchedule = [
        { id: "d1", dateAr: "٢٨ / ٣", dayAr: "السبت", chapterName: "الباب الأول", lecture: chapterData.ch1.lessons[0] },
        { id: "d2", dateAr: "٣٠ / ٣", dayAr: "الإثنين", chapterName: "الباب الأول", lecture: chapterData.ch1.lessons[1] },
        { id: "d3", dateAr: "١ / ٤", dayAr: "الأربعاء", chapterName: "الباب الأول", lecture: chapterData.ch1.lessons[2] },
        { id: "d4", dateAr: "٤ / ٤", dayAr: "السبت", chapterName: "مراجعة 1", lecture: chapterData.ch1.lessons[3] },
        { id: "d5", dateAr: "٦ / ٤", dayAr: "الإثنين", chapterName: "الباب الأول", lecture: chapterData.ch1.lessons[4] },
        { id: "d6", dateAr: "٨ / ٤", dayAr: "الأربعاء", chapterName: "الباب الأول", lecture: chapterData.ch1.lessons[5] },
        { id: "d7", dateAr: "١١ / ٤", dayAr: "السبت", chapterName: "الباب الأول", lecture: chapterData.ch1.lessons[6] },
        { id: "d8", dateAr: "١٣ / ٤", dayAr: "الإثنين", chapterName: "مراجعة 2", lecture: chapterData.ch1.lessons[7] },
        { id: "d9", dateAr: "١٥ / ٤", dayAr: "الأربعاء", chapterName: "الباب الثاني", lecture: chapterData.ch2.lessons[0] },
        { id: "d10", dateAr: "١٨ / ٤", dayAr: "السبت", chapterName: "الباب الثاني", lecture: chapterData.ch2.lessons[1] },
        { id: "d11", dateAr: "٢٠ / ٤", dayAr: "الإثنين", chapterName: "الباب الثاني", lecture: chapterData.ch2.lessons[2] },
        { id: "d12", dateAr: "٢٢ / ٤", dayAr: "الأربعاء", chapterName: "الباب الثاني", lecture: chapterData.ch2.lessons[3] },
        { id: "d13", dateAr: "٢٥ / ٤", dayAr: "السبت", chapterName: "الباب الثاني", lecture: chapterData.ch2.lessons[4] },
        { id: "d14", dateAr: "٢٧ / ٤", dayAr: "الإثنين", chapterName: "الباب الثالث", lecture: chapterData.ch3.lessons[0] },
        { id: "d15", dateAr: "٢٩ / ٤", dayAr: "الأربعاء", chapterName: "الباب الثالث", lecture: chapterData.ch3.lessons[1] },
        { id: "d16", dateAr: "٢ / ٥", dayAr: "السبت", chapterName: "الباب الثالث", lecture: chapterData.ch3.lessons[2] },
        { id: "d17", dateAr: "٤ / ٥", dayAr: "الإثنين", chapterName: "الباب الثالث", lecture: chapterData.ch3.lessons[3] },
        { id: "d18", dateAr: "٦ / ٥", dayAr: "الأربعاء", chapterName: "الباب الثالث", lecture: chapterData.ch3.lessons[4] },
        { id: "d19", dateAr: "٩ / ٥", dayAr: "السبت", chapterName: "الباب الثالث", lecture: chapterData.ch3.lessons[5] },
        { id: "d20", dateAr: "١١ / ٥", dayAr: "الإثنين", chapterName: "الباب الرابع", lecture: chapterData.ch4.lessons[0] },
        { id: "d21", dateAr: "١٣ / ٥", dayAr: "الأربعاء", chapterName: "الباب الرابع", lecture: chapterData.ch4.lessons[1] },
        { id: "d22", dateAr: "١٦ / ٥", dayAr: "السبت", chapterName: "الباب الرابع", lecture: chapterData.ch4.lessons[2] },
        { id: "d23", dateAr: "٢٠ / ٥", dayAr: "الأربعاء", chapterName: "النهاية 🏆", lecture: chapterData.ch4.lessons[3] }
    ];

    // ===== 3. جلب العناصر من الصفحة =====
    const mainChapterGrid = document.getElementById('main-chapter-grid');
    const lessonsPanel = document.getElementById('lessons-panel');
    const lessonItemGrid = document.getElementById('lesson-item-grid');
    const currentChapterTitle = document.getElementById('current-chapter-title');
    const backBtn = document.getElementById('back-to-chapters');
    const dailyQuoteEl = document.getElementById('daily-quote');
    const backlogTableBody = document.getElementById('backlog-table-body');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressPercentText = document.getElementById('progress-percent');
    const statusMessageEl = document.getElementById('status-message');

    // ===== 4. إدارة حالة تقدم الطالب (LocalStorage) =====
    const STORAGE_KEY = 'kimstory_hero_progress';

    // تحميل التقدم الحالي
    function loadHeroProgress() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    }

    // حفظ التقدم
    function saveHeroProgress(progressMap) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progressMap));
    }

    const currentProgress = loadHeroProgress();

    // ===== 5. بناء جدول معسكر الإنقاذ تفاعلياً =====
    function renderBacklogTable() {
        if (!backlogTableBody) return;
        backlogTableBody.innerHTML = '';

        backlogSchedule.forEach((item, index) => {
            const isDone = currentProgress[item.id] || false;

            const row = document.createElement('div');
            row.className = `day-row ${isDone ? 'completed' : ''}`;
            row.style.animationDelay = `${index * 0.05}s`; // تأثير ظهور متدرج

            row.innerHTML = `
                <div class="date-column">
                    <span class="day-name">${item.dayAr}</span>
                    <span class="day-date">${item.dateAr}</span>
                </div>
                <div class="content-column">
                    <span class="chapter-tag">${item.chapterName}</span>
                    <p class="lesson-title-backlog">${item.lecture.title}</p>
                </div>
                <div class="action-column">
                    <button class="play-lesson-btn" title="تشغيل" ${isDone ? 'disabled' : ''}>
                        <i class="fas fa-play"></i>
                    </button>
                    <input type="checkbox" class="complete-checkbox" ${isDone ? 'checked' : ''} title="تم الإنجاز">
                </div>
            `;

            // إضافة الأحداث
            const checkbox = row.querySelector('.complete-checkbox');
            checkbox.addEventListener('change', () => toggleDayCompletion(item.id, row));

            const playBtn = row.querySelector('.play-lesson-btn');
            playBtn.addEventListener('click', () => {
                if (!checkbox.checked) {
                    window.open(item.lecture.link, '_blank');
                }
            });

            backlogTableBody.appendChild(row);
        });

        updateProgressVisuals();
    }

    // تبديل حالة الإنجاز لليوم
    function toggleDayCompletion(itemId, rowElement) {
        currentProgress[itemId] = !currentProgress[itemId];
        saveHeroProgress(currentProgress);

        if (currentProgress[itemId]) {
            rowElement.classList.add('completed');
            rowElement.querySelector('.play-lesson-btn').disabled = true;
        } else {
            rowElement.classList.remove('completed');
            rowElement.querySelector('.play-lesson-btn').disabled = false;
        }

        updateProgressVisuals();
    }

    // تحديث شريط التقدم والرسائل
    function updateProgressVisuals() {
        const totalItems = backlogSchedule.length;
        if (totalItems === 0) return;

        const completedItems = Object.values(currentProgress).filter(Boolean).length;
        const percentage = Math.round((completedItems / totalItems) * 100);

        progressBarFill.style.width = `${percentage}%`;
        progressPercentText.innerText = `${percentage}%`;

        // رسائل تحفيزية بناءً على النسبة
        let msg = "بداية موفقة يا بطل.. الحلم بيتحقق خطوة خطوة! 💪";
        statusMessageEl.classList.remove('great');

        if (percentage >= 20) msg = "عاش كمل! إنت كسرت حاجز الـ ٢٠٪.. 💪";
        if (percentage >= 50) msg = "نص المشوار خلص! أنت قدها، هانت يا دكتور 🔥";
        if (percentage >= 80) msg = "قربت جداً.. فاضل تكة ع القمة! 🌟";
        if (percentage === 100) {
            msg = "الف مبروك يا بطل! كملت المعسكر.. إنت فعلاً فخر لينا! 🏆💯";
            statusMessageEl.classList.add('great');
        }

        statusMessageEl.innerText = msg;
    }

    // ===== 6. منطق التنقل والصفحات الأساسي =====

    // عرض دروس الباب
    function showLessons(chapterKey, pushToHistory = true) {
        const data = chapterData[chapterKey];
        if (!data) return;

        currentChapterTitle.innerText = data.title;
        currentChapterTitle.style.setProperty('--chapter-color', data.color);
        lessonItemGrid.innerHTML = '';

        data.lessons.forEach((lesson, index) => {
            let iconClass, typeClass, typeLabel;
            if (lesson.type === "workshop") {
                iconClass = "fas fa-tasks"; typeClass = "workshop"; typeLabel = "ورشة";
            } else if (lesson.type === "pdf") {
                iconClass = "fas fa-file-pdf"; typeClass = "pdf"; typeLabel = "PDF";
            } else {
                iconClass = "fas fa-play-circle"; typeClass = "video"; typeLabel = "فيديو";
            }

            const card = document.createElement('a');
            card.href = lesson.link;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = `lesson-card lesson-card--${typeClass}`;
            card.style.animationDelay = `${index * 0.06}s`;
            card.innerHTML = `
                <div class="lesson-icon-wrap-l">
                    <i class="${iconClass}"></i>
                </div>
                <div class="lesson-content">
                    <p class="lesson-card-title">${lesson.title}</p>
                    <span class="lesson-type-badge lesson-type-badge--${typeClass}">${typeLabel}</span>
                </div>
            `;
            lessonItemGrid.appendChild(card);
        });

        // إخفاء الأبواب وإظهار الدروس
        mainChapterGrid.classList.add('hidden-grid');
        lessonsPanel.classList.add('visible');
        
        // التمرير لأعلى بسلاسة
        window.scrollTo({ top: lessonsPanel.offsetTop - 30, behavior: 'smooth' });

        // التعديل الجديد لحل مشكلة زر الرجوع: إضافة حالة لتاريخ المتصفح
        if (pushToHistory) {
            history.pushState({ view: 'lessons', chapter: chapterKey }, "");
        }
    }

    // العودة لقائمة الأبواب
    function hideLessons(shouldPopHistory = false) {
        lessonsPanel.classList.remove('visible');
        mainChapterGrid.classList.remove('hidden-grid');
        
        // التمرير لقائمة الأبواب
        window.scrollTo({ top: mainChapterGrid.offsetTop - 50, behavior: 'smooth' });

        // إذا تم استدعاء الدالة من زر العودة الخاص بنا، نقوم بمسح الحالة من تاريخ المتصفح
        if (shouldPopHistory && history.state && history.state.view === 'lessons') {
            history.back();
        }
    }

    // ===== الأحداث واستماع المتصفح =====

    // استماع لزر الرجوع الخاص بالموبايل (History API)
    window.addEventListener('popstate', (event) => {
        // إذا رجعنا للحالة الأصلية (null)، نقوم بإخفاء المحاضرات
        if (event.state === null) {
            hideLessons(false); 
        } else if (event.state && event.state.view === 'lessons') {
            // إذا كنا راجعين لحالة محاضرة تانية (نادرة لكن للاحتياط)
            showLessons(event.state.chapter, false);
        }
    });

    // الضغط على كارت الباب
    mainChapterGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.chapter-card');
        if (card) {
            showLessons(card.dataset.chapter);
        }
    });

    // زر العودة الموجود في الصفحة
    backBtn.addEventListener('click', () => hideLessons(true));

    // ===== 7. الجمل التحفيزية واختيار جملة اليوم =====
    const quotes = [
        "عافر.. حلمك يستاهل التعب وربنا مش هيضيع مجهودك! 💪",
        "وما توفيقي إلا بالله.. استمر في السعي ولا تيأس 🤲",
        "الكيمياء ممتعة، محتاجة بس تركيز وفهم وهتقفلها إن شاء الله ⚗️",
        "كل مجهود بتبذله النهاردة، هتحصد نتيجته نجاح بكرة 🌟",
        "لا تتوقف حتى تفخر بنفسك، أنت بطل حكايتك 🏆",
        "النجاح هو مجموع مجهودات صغيرة تتكرر يومياً 🔥",
        "أنت أقوى مما تتخيل، هانت يا بطل! 💎"
    ];
    if (dailyQuoteEl) {
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        dailyQuoteEl.innerText = quotes[dayOfYear % quotes.length];
    }

    // ===== 8. التشغيل المبدئي وبدء الصفحة =====
    
    // إخفاء شريط التحميل بعد الانتهاء
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('fade-out');
                setTimeout(() => loader.remove(), 600);
            }
        }, 600);
    });

    // بدء بناء جدول المعسكر
    renderBacklogTable();
});
