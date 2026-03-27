/* ============================================
   كيمستوري - منطق التحكم الشامل للمنصة
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. بيانات المنهج الأساسية =====
    const chapterData = {
        ch1: { title: "الباب الأول: العناصر الانتقالية", color: "#009ce4", lessons: [ { title: "المحاضرة الأولى | العناصر الانتقالية واستخداماتها", link: "https://youtu.be/hmhxP0MX2ww", type: "video" }, { title: "المحاضرة الثانية | التوزيع الإلكتروني وحالات التأكسد", link: "https://youtu.be/OQShraGjnds", type: "video" }, { title: "المحاضرة الثالثة | الخواص العامة لعناصر السلسلة الانتقالية الأولى", link: "https://youtu.be/pkvvUuGPhao", type: "video" }, { title: "ورشة حل على أول 3 دروس", link: "https://youtu.be/AMapAcB8bpc", type: "workshop" }, { title: "المحاضرة الرابعة | الحديد", link: "https://youtu.be/IESH5EzYfwE", type: "video" }, { title: "المحاضرة الخامسة | السبائك وجهد التأين والنشاط الحفزي", link: "https://youtu.be/4uvWidz1F-Q", type: "video" }, { title: "المحاضرة السادسة | خواص الحديد وأكاسيد الحديد", link: "https://youtu.be/w4sWzYNAzTY", type: "video" }, { title: "ورشة حل على الحديد وأكاسيده", link: "https://youtu.be/qStTS5SMXT8", type: "workshop" } ] },
        ch2: { title: "الباب الثاني: الكيمياء التحليلية", color: "#7c3aed", lessons: [ { title: "المحاضرة الأولى | مقدمة التحليل الكيميائي ومجموعة HCl", link: "https://youtu.be/gItri-ydEUc", type: "video" }, { title: "المحاضرة الثانية | مجموعة حمض الكبريتيك والكاتيونات", link: "https://youtu.be/kXqJ3FHoyAE", type: "video" }, { title: "المحاضرة الثالثة | المعايرة وأسس الكيمياء الكمية", link: "https://youtu.be/kVJPCCSnNWI", type: "video" }, { title: "المحاضرة الرابعة | التحليل الكمي الكتلي بطريقة التطاير", link: "https://youtu.be/M8-ChLDpG-Q", type: "video" }, { title: "المحاضرة الخامسة | التحليل الكمي الكتلي بطريقة الترسيب", link: "https://youtu.be/VYa6dmKNOok", type: "video" } ] },
        ch3: { title: "الباب الثالث: الاتزان الكيميائي", color: "#059669", lessons: [ { title: "المحاضرة الأولى | مقدمة الاتزان الكيميائي", link: "https://youtu.be/28Yh6r8upLM", type: "video" }, { title: "المحاضرة الثانية | العوامل المؤثرة على سرعة التفاعل وأثر التركيز", link: "https://youtu.be/7GigQ8sxA90", type: "video" }, { title: "المحاضرة الثالثة | أثر الضغط والحرارة على الاتزان", link: "https://youtu.be/bLBJpvy_k2s", type: "video" }, { title: "المحاضرة الرابعة | المحاليل الإلكتروليتية وثابت اتزان الأحماض", link: "https://youtu.be/CcrBdlnfBjA", type: "video" }, { title: "المحاضرة الخامسة | تأين الماء", link: "https://youtu.be/QjJxp86Wq4Y", type: "video" }, { title: "المحاضرة السادسة | تأين الأملاح", link: "https://youtu.be/Q17EqyT8Mj4", type: "video" } ] },
        ch4: { title: "الباب الرابع: الكيمياء الكهربية", color: "#dc2626", lessons: [ { title: "المحاضرة الأولى | الكيمياء الكهربية و خلية دانيال", link: "https://youtu.be/yiPd0yA6wfo", type: "video" }, { title: "المحاضرة الثانية | قطب الهيدروجين القياسي والمتسلسلة الجهود", link: "https://youtu.be/2K3R4C77LGo", type: "video" }, { title: "المحاضرة الثالثة | الخلايا الجلفانية", link: "https://youtu.be/KyBwpP9Yxhw", type: "video" }, { title: "الفصل الثاني | الخلايا التحليلية (PDF)", link: "https://drive.google.com/file/d/1yCWfEOIdkVVxJkezZunVScAb-yKajNHT/view?usp=drivesdk", type: "pdf" } ] }
    };

    // ===== 2. بيانات المعسكر كاملة (تُعرض في صفحة camp.html فقط) =====
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

    // ===== الجمل التحفيزية =====
    const quotes = ["عافر.. حلمك يستاهل التعب! 💪", "وما توفيقي إلا بالله 🤲", "الكيمياء ممتعة، ركز وهتقفلها ⚗️", "كل مجهود بتبذله هتلاقي نتيجته 🌟"];
    const dailyQuoteEl = document.getElementById('daily-quote');
    if (dailyQuoteEl) { dailyQuoteEl.innerText = quotes[new Date().getDay() % quotes.length]; }

    // إخفاء اللودر
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            if (loader) { loader.classList.add('fade-out'); setTimeout(() => loader.remove(), 600); }
        }, 500);
    });

    // ==========================================
    // منطق الصفحة الرئيسية (index.html)
    // ==========================================
    const mainChapterGrid = document.getElementById('main-chapter-grid');
    if (mainChapterGrid) {
        const lessonsPanel = document.getElementById('lessons-panel');
        const lessonItemGrid = document.getElementById('lesson-item-grid');
        const currentChapterTitle = document.getElementById('current-chapter-title');
        const backBtn = document.getElementById('back-to-chapters');

        function showLessons(chapterKey, pushToHistory = true) {
            const data = chapterData[chapterKey];
            if (!data) return;
            currentChapterTitle.innerText = data.title;
            currentChapterTitle.style.setProperty('--chapter-color', data.color);
            lessonItemGrid.innerHTML = '';

            data.lessons.forEach((lesson, index) => {
                let iconClass = lesson.type === "workshop" ? "fas fa-tasks" : lesson.type === "pdf" ? "fas fa-file-pdf" : "fas fa-play-circle";
                let typeLabel = lesson.type === "workshop" ? "ورشة" : lesson.type === "pdf" ? "PDF" : "فيديو";
                
                const card = document.createElement('a');
                card.href = lesson.link; card.target = "_blank";
                card.className = `lesson-card lesson-card--${lesson.type}`;
                card.innerHTML = `<div class="lesson-icon-wrap-l"><i class="${iconClass}"></i></div><div class="lesson-content"><p class="lesson-card-title">${lesson.title}</p><span class="lesson-type-badge lesson-type-badge--${lesson.type}">${typeLabel}</span></div>`;
                lessonItemGrid.appendChild(card);
            });

            mainChapterGrid.classList.add('hidden-grid');
            lessonsPanel.classList.add('visible');
            window.scrollTo({ top: lessonsPanel.offsetTop - 30, behavior: 'smooth' });
            if (pushToHistory) history.pushState({ view: 'lessons', chapter: chapterKey }, "");
        }

        function hideLessons(shouldPopHistory = false) {
            lessonsPanel.classList.remove('visible');
            mainChapterGrid.classList.remove('hidden-grid');
            window.scrollTo({ top: mainChapterGrid.offsetTop - 50, behavior: 'smooth' });
            if (shouldPopHistory && history.state && history.state.view === 'lessons') history.back();
        }

        window.addEventListener('popstate', (event) => {
            if (event.state === null) hideLessons(false);
            else if (event.state && event.state.view === 'lessons') showLessons(event.state.chapter, false);
        });

        mainChapterGrid.addEventListener('click', (e) => {
            const card = e.target.closest('button.chapter-card'); 
            if (card) showLessons(card.dataset.chapter);
        });

        backBtn.addEventListener('click', () => hideLessons(true));
    }

    // ==========================================
    // منطق صفحة المعسكر (camp.html)
    // ==========================================
    const backlogTableBody = document.getElementById('backlog-table-body');
    if (backlogTableBody) {
        const progressBarFill = document.getElementById('progress-bar-fill');
        const progressPercentText = document.getElementById('progress-percent');
        const statusMessageEl = document.getElementById('status-message');
        const STORAGE_KEY = 'kimstory_hero_progress';

        let currentProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        function updateProgressVisuals() {
            const totalItems = backlogSchedule.length;
            const completedItems = Object.values(currentProgress).filter(Boolean).length;
            const percentage = Math.round((completedItems / totalItems) * 100);

            progressBarFill.style.width = `${percentage}%`;
            progressPercentText.innerText = `${percentage}%`;

            let msg = "بداية موفقة يا بطل.. الحلم بيتحقق خطوة خطوة! 💪";
            statusMessageEl.classList.remove('great');
            if (percentage >= 20) msg = "عاش كمل! إنت كسرت حاجز الـ ٢٠٪.. 💪";
            if (percentage >= 50) msg = "نص المشوار خلص! أنت قدها 🔥";
            if (percentage >= 80) msg = "قربت جداً.. فاضل تكة ع القمة! 🌟";
            if (percentage === 100) { msg = "الف مبروك يا بطل! كملت المعسكر 🏆💯"; statusMessageEl.classList.add('great'); }
            statusMessageEl.innerText = msg;
        }

        backlogSchedule.forEach((item) => {
            const isDone = currentProgress[item.id] || false;
            const row = document.createElement('div');
            row.className = `day-row ${isDone ? 'completed' : ''}`;
            row.innerHTML = `
                <div class="date-column"><span class="day-name">${item.dayAr}</span><span class="day-date">${item.dateAr}</span></div>
                <div class="content-column"><span class="chapter-tag">${item.chapterName}</span><p class="lesson-title-backlog">${item.lecture.title}</p></div>
                <div class="action-column">
                    <button class="play-lesson-btn" title="تشغيل" ${isDone ? 'disabled' : ''}><i class="fas fa-play"></i></button>
                    <input type="checkbox" class="complete-checkbox" ${isDone ? 'checked' : ''}>
                </div>
            `;

            const checkbox = row.querySelector('.complete-checkbox');
            checkbox.addEventListener('change', () => {
                currentProgress[item.id] = checkbox.checked;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProgress));
                row.classList.toggle('completed', checkbox.checked);
                row.querySelector('.play-lesson-btn').disabled = checkbox.checked;
                updateProgressVisuals();
            });

            row.querySelector('.play-lesson-btn').addEventListener('click', () => {
                if (!checkbox.checked) window.open(item.lecture.link, '_blank');
            });

            backlogTableBody.appendChild(row);
        });

        updateProgressVisuals();
    }
});
