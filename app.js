/* ============================================
   كيمستوري - العقل المدبر V3 (نسخة الدور الثاني)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. المنهج الكامل (إضافة العضوية) =====
    const chapterData = {
        ch1: { title: "الباب الأول: العناصر الانتقالية", color: "#00e1ff", lessons: [ { title: "المحاضرة الأولى | العناصر الانتقالية واستخداماتها", link: "https://youtu.be/hmhxP0MX2ww", type: "video" }, { title: "المحاضرة الثانية | التوزيع الإلكتروني وحالات التأكسد", link: "https://youtu.be/OQShraGjnds", type: "video" }, { title: "المحاضرة الثالثة | الخواص العامة لعناصر السلسلة الانتقالية الأولى", link: "https://youtu.be/pkvvUuGPhao", type: "video" }, { title: "ورشة حل على أول 3 دروس", link: "https://youtu.be/AMapAcB8bpc", type: "workshop" }, { title: "المحاضرة الرابعة | الحديد", link: "https://youtu.be/IESH5EzYfwE", type: "video" }, { title: "المحاضرة الخامسة | السبائك وجهد التأين والنشاط الحفزي", link: "https://youtu.be/4uvWidz1F-Q", type: "video" }, { title: "المحاضرة السادسة | خواص الحديد وأكاسيد الحديد", link: "https://youtu.be/w4sWzYNAzTY", type: "video" }, { title: "ورشة حل على الحديد وأكاسيده", link: "https://youtu.be/qStTS5SMXT8", type: "workshop" } ] },
        ch2: { title: "الباب الثاني: الكيمياء التحليلية", color: "#8b5cf6", lessons: [ { title: "المحاضرة الأولى | مقدمة التحليل الكيميائي ومجموعة HCl", link: "https://youtu.be/gItri-ydEUc", type: "video" }, { title: "المحاضرة الثانية | مجموعة حمض الكبريتيك والكاتيونات", link: "https://youtu.be/kXqJ3FHoyAE", type: "video" }, { title: "المحاضرة الثالثة | المعايرة وأسس الكيمياء الكمية", link: "https://youtu.be/kVJPCCSnNWI", type: "video" }, { title: "المحاضرة الرابعة | التحليل الكمي الكتلي بطريقة التطاير", link: "https://youtu.be/M8-ChLDpG-Q", type: "video" }, { title: "المحاضرة الخامسة | التحليل الكمي الكتلي بطريقة الترسيب", link: "https://youtu.be/VYa6dmKNOok", type: "video" } ] },
        ch3: { title: "الباب الثالث: الاتزان الكيميائي", color: "#2ecc71", lessons: [ { title: "المحاضرة الأولى | مقدمة الاتزان الكيميائي", link: "https://youtu.be/28Yh6r8upLM", type: "video" }, { title: "المحاضرة الثانية | العوامل المؤثرة على سرعة التفاعل وأثر التركيز", link: "https://youtu.be/7GigQ8sxA90", type: "video" }, { title: "المحاضرة الثالثة | أثر الضغط والحرارة على الاتزان", link: "https://youtu.be/bLBJpvy_k2s", type: "video" }, { title: "المحاضرة الرابعة | المحاليل الإلكتروليتية وثابت اتزان الأحماض", link: "https://youtu.be/CcrBdlnfBjA", type: "video" }, { title: "المحاضرة الخامسة | تأين الماء", link: "https://youtu.be/QjJxp86Wq4Y", type: "video" }, { title: "المحاضرة السادسة | تأين الأملاح", link: "https://youtu.be/Q17EqyT8Mj4", type: "video" } ] },
        ch4: { title: "الباب الرابع: الكيمياء الكهربية", color: "#ff2e7e", lessons: [ { title: "المحاضرة الأولى | الكيمياء الكهربية و خلية دانيال", link: "https://youtu.be/yiPd0yA6wfo", type: "video" }, { title: "المحاضرة الثانية | قطب الهيدروجين القياسي والمتسلسلة الجهود", link: "https://youtu.be/2K3R4C77LGo", type: "video" }, { title: "المحاضرة الثالثة | الخلايا الجلفانية", link: "https://youtu.be/KyBwpP9Yxhw", type: "video" }, { title: "الفصل الثاني | الخلايا التحليلية (PDF)", link: "https://drive.google.com/file/d/1yCWfEOIdkVVxJkezZunVScAb-yKajNHT/view?usp=drivesdk", type: "pdf" } ] },
        ch5: { title: "الباب الخامس: الكيمياء العضوية", color: "#f1c40f", lessons: [ { title: "المحاضرة الأولى | مقدمة الكيمياء العضوية", link: "https://youtu.be/8_34uOB3KzQ", type: "video" }, { title: "المحاضرة الثانية | مقدمة الهيدروكربونات والأيزوميرزم", link: "https://youtu.be/0EZJqsFmpys", type: "video" }, { title: "المحاضرة الثالثة | الألكانات", link: "https://youtu.be/VB-5Z1EnF4U", type: "video" }, { title: "المحاضرة الرابعة | الميثان", link: "https://youtu.be/kkmOlL2pb5c", type: "video" }, { title: "المحاضرة الخامسة | الألكينات", link: "https://youtu.be/Cn4eEo2GJyA", type: "video" }, { title: "المحاضرة السادسة | الألكاينات", link: "https://youtu.be/L5IvPETiih0", type: "video" }, { title: "المحاضرة السابعة | الألكانات الحلقية", link: "https://youtu.be/-lswo3-K-lo", type: "video" }, { title: "المحاضرة الثامنة | البنزين", link: "https://youtu.be/Uyx-Rkc-8-g", type: "video" }, { title: "المحاضرة التاسعة | مشتقات الهيدروكربونات", link: "https://youtu.be/2eiXSvOf_-k", type: "video" }, { title: "المحاضرة العاشرة | الكحولات", link: "https://youtu.be/7xhhWSds0cE", type: "video" }, { title: "المحاضرة الحادية عشر | الفينولات ومقدمة الأحماض", link: "https://youtu.be/F82Z3XYWVwo", type: "video" }, { title: "المحاضرة الثانية عشر | الأحماض", link: "https://youtu.be/o9mIbc2K77M", type: "video" }, { title: "المحاضرة الثالثة عشر | الاسترات", link: "https://youtu.be/mgstXL7wA-w", type: "video" } ] },
        rev: { title: "المراجعات النهائية وحل الاسترشادي", color: "#ff4757", lessons: [ { title: "مراجعة العناصر الانتقالية", link: "https://youtu.be/_T0ItOsmQc8", type: "workshop" }, { title: "مراجعة الكيمياء التحليلية", link: "https://youtu.be/VrtMbOphGwE", type: "workshop" }, { title: "مراجعة الباب الثالث (الاتزان)", link: "https://youtu.be/3lSCUyFsx7A", type: "workshop" }, { title: "مراجعة باقي الاتزان والكهربية", link: "https://youtu.be/HDDwP4Jfst0", type: "workshop" }, { title: "مراجعة الهيدروكربونات", link: "https://youtu.be/YXKTmbtUQxU", type: "workshop" }, { title: "مراجعة المشتقات", link: "https://youtu.be/CHneJto5OeM", type: "workshop" } ] }
    };

    // ===== 2. خطة 25 يوم لمعسكر الدور الثاني (2 إلى 27 أغسطس) =====
    const backlogSchedule = [
        { id: "d1", dateAr: "٢ / ٨", dayAr: "الأحد", chapterName: "الباب الأول", lectures: [chapterData.ch1.lessons[0], chapterData.ch1.lessons[1]] },
        { id: "d2", dateAr: "٣ / ٨", dayAr: "الإثنين", chapterName: "الباب الأول", lectures: [chapterData.ch1.lessons[2], chapterData.ch1.lessons[3]] },
        { id: "d3", dateAr: "٤ / ٨", dayAr: "الثلاثاء", chapterName: "الباب الأول", lectures: [chapterData.ch1.lessons[4], chapterData.ch1.lessons[5]] },
        { id: "d4", dateAr: "٥ / ٨", dayAr: "الأربعاء", chapterName: "الباب الأول", lectures: [chapterData.ch1.lessons[6], chapterData.ch1.lessons[7]] },
        { id: "d5", dateAr: "٦ / ٨", dayAr: "الخميس", chapterName: "الباب الثاني", lectures: [chapterData.ch2.lessons[0], chapterData.ch2.lessons[1]] },
        { id: "d6", dateAr: "٧ / ٨", dayAr: "الجمعة", chapterName: "الباب الثاني", lectures: [chapterData.ch2.lessons[2], chapterData.ch2.lessons[3]] },
        { id: "d7", dateAr: "٨ / ٨", dayAr: "السبت", chapterName: "الباب الثاني", lectures: [chapterData.ch2.lessons[4]] },
        { id: "d8", dateAr: "٩ / ٨", dayAr: "الأحد", chapterName: "الباب الثالث", lectures: [chapterData.ch3.lessons[0], chapterData.ch3.lessons[1]] },
        { id: "d9", dateAr: "١٠ / ٨", dayAr: "الإثنين", chapterName: "الباب الثالث", lectures: [chapterData.ch3.lessons[2], chapterData.ch3.lessons[3]] },
        { id: "d10", dateAr: "١١ / ٨", dayAr: "الثلاثاء", chapterName: "الباب الثالث", lectures: [chapterData.ch3.lessons[4], chapterData.ch3.lessons[5]] },
        { id: "d11", dateAr: "١٢ / ٨", dayAr: "الأربعاء", chapterName: "الباب الرابع", lectures: [chapterData.ch4.lessons[0], chapterData.ch4.lessons[1]] },
        { id: "d12", dateAr: "١٣ / ٨", dayAr: "الخميس", chapterName: "الباب الرابع", lectures: [chapterData.ch4.lessons[2], chapterData.ch4.lessons[3]] },
        { id: "d13", dateAr: "١٤ / ٨", dayAr: "الجمعة", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[0], chapterData.ch5.lessons[1]] },
        { id: "d14", dateAr: "١٥ / ٨", dayAr: "السبت", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[2], chapterData.ch5.lessons[3]] },
        { id: "d15", dateAr: "١٦ / ٨", dayAr: "الأحد", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[4], chapterData.ch5.lessons[5]] },
        { id: "d16", dateAr: "١٧ / ٨", dayAr: "الإثنين", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[6], chapterData.ch5.lessons[7]] },
        { id: "d17", dateAr: "١٨ / ٨", dayAr: "الثلاثاء", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[8], chapterData.ch5.lessons[9]] },
        { id: "d18", dateAr: "١٩ / ٨", dayAr: "الأربعاء", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[10], chapterData.ch5.lessons[11]] },
        { id: "d19", dateAr: "٢٠ / ٨", dayAr: "الخميس", chapterName: "العضوية", lectures: [chapterData.ch5.lessons[12]] },
        { id: "d20", dateAr: "٢١ / ٨", dayAr: "الجمعة", chapterName: "مراجعة", lectures: [chapterData.rev.lessons[0]] },
        { id: "d21", dateAr: "٢٢ / ٨", dayAr: "السبت", chapterName: "مراجعة", lectures: [chapterData.rev.lessons[1]] },
        { id: "d22", dateAr: "٢٣ / ٨", dayAr: "الأحد", chapterName: "مراجعة", lectures: [chapterData.rev.lessons[2]] },
        { id: "d23", dateAr: "٢٤ / ٨", dayAr: "الإثنين", chapterName: "مراجعة", lectures: [chapterData.rev.lessons[3]] },
        { id: "d24", dateAr: "٢٥ / ٨", dayAr: "الثلاثاء", chapterName: "مراجعة", lectures: [chapterData.rev.lessons[4]] },
        { id: "d25", dateAr: "٢٧ / ٨", dayAr: "الخميس", chapterName: "النهاية 🏆", lectures: [chapterData.rev.lessons[5]] }
    ];

    // ===== 3. مكتبة العبارات التحفيزية الخاصة بالدور الثاني =====
    const quotes = [
        "البداية الجديدة ممكن تغير مستقبلك كله.",
        "الدور الثاني مش نهاية... ده فرصة أخيرة تثبت فيها نفسك.",
        "كل فيديو بتخلصه بيقربك خطوة من حلمك.",
        "متحسبهاش بعدد المحاضرات... احسبها بعدد اللي باقي.",
        "يمكن ربنا مأجلك النجاح للوقت المناسب.",
        "مستر فارس معاك لحد آخر فيديو، كمل وماتيأسش.",
        "اللي بيقع ويقف تاني أقوى من اللي موقعش خالص.",
        "اعتبرها معركة أخيرة ولازم تكسبها.",
        "الكيمياء مادة تقفيل، بس محتاجة تركيز في الوقت الضايع.",
        "نظم وقتك، امسك ورقة وقلم، والنتيجة هتفرحك."
        // يمكنك إضافة باقي الـ 80 رسالة هنا بنفس التنسيق
    ];
    const dailyQuoteEl = document.getElementById('daily-quote');
    if (dailyQuoteEl) { dailyQuoteEl.innerText = quotes[Math.floor(Math.random() * quotes.length)]; }

    // ===== 4. العداد التنازلي لامتحان الدور الثاني (28 أغسطس 2026 مثلا) =====
    const examDate = new Date("Aug 28, 2026 09:00:00").getTime();
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = examDate - now;
        
        if (distance < 0) {
            clearInterval(timerInterval);
            if(document.getElementById("days")) document.getElementById("days").innerText = "00";
            return;
        }
        
        if(document.getElementById("days")) {
            document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            document.getElementById("mins").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        }
    }, 1000);

    // ===== 5. منطق الصفحة الرئيسية (التنقل وفتح الأبواب) =====
    const mainChapterGrid = document.getElementById('main-chapter-grid');
    if (mainChapterGrid) {
        const lessonsPanel = document.getElementById('lessons-panel');
        const lessonItemGrid = document.getElementById('lesson-item-grid');
        const currentChapterTitle = document.getElementById('current-chapter-title');
        
        mainChapterGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.chapter-card'); 
            if (card && card.dataset.chapter) {
                const data = chapterData[card.dataset.chapter];
                currentChapterTitle.innerText = data.title;
                lessonItemGrid.innerHTML = '';
                
                data.lessons.forEach((lesson) => {
                    let iconClass = lesson.type === "workshop" ? "fas fa-tasks" : lesson.type === "pdf" ? "fas fa-file-pdf" : "fas fa-play-circle";
                    const a = document.createElement('a');
                    a.href = lesson.link; a.target = "_blank"; a.className = "lesson-card glass-panel";
                    a.innerHTML = `<div class="lesson-icon-wrap-l"><i class="${iconClass}"></i></div>
                                   <div class="lesson-content"><p class="lesson-card-title" style="margin:0; color:#fff">${lesson.title}</p></div>`;
                    lessonItemGrid.appendChild(a);
                });
                mainChapterGrid.style.display = 'none';
                lessonsPanel.style.display = 'block';
            }
        });

        document.getElementById('back-to-chapters')?.addEventListener('click', () => {
            lessonsPanel.style.display = 'none';
            mainChapterGrid.style.display = 'grid';
        });
    }

    // ===== 6. منطق معسكر الدور الثاني (حفظ التقدم) =====
    const backlogTableBody = document.getElementById('backlog-table-body');
    if (backlogTableBody) {
        const STORAGE_KEY = 'kimstory_round2_progress';
        let currentProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

        function updateProgress() {
            const total = backlogSchedule.length;
            const done = Object.values(currentProgress).filter(Boolean).length;
            const percent = Math.round((done / total) * 100);
            document.getElementById('progress-bar-fill').style.width = `${percent}%`;
            document.getElementById('progress-percent').innerText = `${percent}%`;
            document.getElementById('status-message').innerText = percent === 100 ? "بطل كيمستوري! أنت جاهز للامتحان 🏆" : `أنجزت ${done} من ${total} أيام.. كمل يا بطل!`;
        }

        backlogSchedule.forEach((item) => {
            const isDone = currentProgress[item.id] || false;
            const row = document.createElement('div');
            row.className = `day-row ${isDone ? 'completed' : ''}`;
            
            // دمج المحاضرات في نصوص وأزرار
            let titlesHtml = item.lectures.map(l => `<p class="lesson-title-backlog" style="margin:0; color:#fff; font-size:0.9em">${l.title}</p>`).join('');
            let btnsHtml = item.lectures.map(l => `<button class="play-lesson-btn" onclick="window.open('${l.link}', '_blank')"><i class="fas fa-play"></i></button>`).join('');

            row.innerHTML = `
                <div class="date-column"><div>${item.dayAr}</div><div style="font-weight:bold">${item.dateAr}</div></div>
                <div style="flex:1"><span class="rank-badge" style="padding:2px 8px; font-size:0.7em; margin-bottom:5px; display:inline-block">${item.chapterName}</span>${titlesHtml}</div>
                <div style="display:flex; gap:10px; align-items:center;">
                    ${btnsHtml}
                    <input type="checkbox" style="width:25px; height:25px; cursor:pointer;" class="complete-checkbox" ${isDone ? 'checked' : ''}>
                </div>
            `;

            row.querySelector('.complete-checkbox').addEventListener('change', function() {
                currentProgress[item.id] = this.checked;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProgress));
                row.classList.toggle('completed', this.checked);
                updateProgress();
            });

            backlogTableBody.appendChild(row);
        });
        updateProgress();
    }
});
// كود إخفاء شاشة التحميل 
setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 800);
    }
}, 1200);

