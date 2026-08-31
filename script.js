/* ==================================================
   TI 1D V2
   MAIN JAVASCRIPT
================================================== */


/* ================= CLOCK ================= */

function updateClock() {

    const now = new Date();

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const day = days[now.getDay()];

    const date =
        `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");


    document.getElementById("currentDay").textContent =
        day;

    document.getElementById("currentDate").textContent =
        date;

    document.getElementById("currentTime").textContent =
        `${hours}:${minutes}:${seconds}`;
}


updateClock();

setInterval(updateClock, 1000);


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* ================= CLOSE MENU ================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================
   NAV ACTIVE
========================= */

const sections = document.querySelectorAll(
    "#home, #tentang, #struktur, #anggota, #piket, #jadwal, #galeri"
);

const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let current = "home";

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        if (scrollPosition >= section.offsetTop) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

/* =========================
   DATA MAHASISWA TI 1D
========================= */

const members = [
    {
        name: "Alfi Syahrin",
        file: "alfi.jpg"
    },
    {
        name: "Aqira Zahra",
        file: "aqira.jpg"
    },
    {
        name: "Cut Fasyana Chayla",
        file: "cut.jpg"
    },
    {
        name: "Diah Azzahra Harahap",
        file: "diah.jpg"
    },
    {
        name: "Fachry Akbar",
        file: "fachry.jpg"
    },
    {
        name: "Faris Adrian Wijaya",
        file: "faris.jpg"
    },
    {
        name: "Fitria Ramawati",
        file: "fitria.jpg"
    },
    {
        name: "Hariz Nazri",
        file: "hariz.jpg"
    },
    {
        name: "Intan Khumaira",
        file: "intan.jpg"
    },
    {
        name: "Jannatul Husna",
        file: "jannatul.jpg"
    },
    {
        name: "Luthfiyah Raihana",
        file: "luthfiyah.jpg"
    },
    {
        name: "M. Daffa Ulhaq Farabi",
        file: "daffa.jpg"
    },
    {
        name: "M. Sulthan Amrozhi",
        file: "sulthan-amrozhi.jpg"
    },
    {
        name: "Muhammad Aqrizal",
        file: "aqrizal.jpg"
    },
    {
        name: "Muhammad Ikhsan",
        file: "ikhsan.jpg"
    },
    {
        name: "Muhammad Sulthan Fardad",
        file: "sulthan-fardad.jpg"
    },
    {
        name: "Muhammad Zaky",
        file: "zaky.jpg"
    },
    {
        name: "Nafis Hazimul Fikri",
        file: "nafis.jpg"
    },
    {
        name: "Natasya Salsabila",
        file: "natasya.jpg"
    },
    {
        name: "Rafif Nushuha",
        file: "rafif.jpg"
    },
    {
        name: "Rifal Aldifa Zalqawi",
        file: "rifal.jpg"
    },
    {
        name: "Saila Rizkia",
        file: "saila.jpg"
    },
    {
        name: "Sayang Nindia Putri",
        file: "sayang.jpg"
    },
    {
        name: "T. Ulfa Khairi",
        file: "ulfa.jpg"
    },
    {
        name: "Tiara Meliana",
        file: "tiara.jpg"
    },
    {
        name: "Yulisma",
        file: "yulisma.jpg"
    }
];

/* =========================
   RENDER MEMBER CARDS
========================= */

const memberGrid = document.getElementById("memberGrid");
const memberSearch = document.getElementById("memberSearch");
const memberEmpty = document.getElementById("memberEmpty");

function createMemberCard(member, index) {

    const card = document.createElement("div");

    card.className = "member-card";

    card.innerHTML = `
        <div class="member-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="member-photo">
            <img
                src="images/anggota/${member.file}"
                alt="${member.name}"
                loading="lazy"
            >
        </div>

        <div class="member-info">
            <h3>${member.name}</h3>
            <p>Mahasiswa TI 1D</p>
        </div>
    `;
    
    const photo = card.querySelector(".member-photo");

photo.addEventListener("click", () => {

    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImage = document.getElementById("galleryLightboxImage");
    const lightboxName = document.getElementById("lightboxName");
    const lightboxRole = document.getElementById("lightboxRole");

    lightboxImage.src = `images/anggota/${member.file}`;
    lightboxImage.alt = member.name;

    lightboxName.textContent = member.name;
    lightboxRole.textContent = "Mahasiswa TI 1D";

    lightbox.classList.add("show");

});

    return card;
}


function renderMembers(list) {

    memberGrid.innerHTML = "";

    list.forEach((member, index) => {

        const card =
            createMemberCard(member, index);

        memberGrid.appendChild(card);

    });

    memberEmpty.classList.toggle(
        "show",
        list.length === 0
    );
}


renderMembers(members);


/* =========================
   SEARCH MEMBER
========================= */

memberSearch.addEventListener("input", function () {

    const keyword =
        this.value.trim().toLowerCase();

    const filteredMembers =
        members.filter(member =>
            member.name
                .toLowerCase()
                .includes(keyword)
        );

    renderMembers(filteredMembers);

});

/* =========================
   JADWAL PIKET TI 1D
========================= */

const dutySchedule = {

    Senin: [
        "Cut Fasyana Chayla",
        "Intan Khumaira",
        "Luthfiyah Raihana",
        "Sayang Nindia Putri",
        "Yulisma"
    ],

    Selasa: [
        "M. Sulthan Amrozhi",
        "M. Daffa Ulhaq Farabi",
        "Fachry Akbar",
        "Saila Rizkia",
        "Rifal Aldifa Zalqawi"
    ],

    Rabu: [
        "Nafis Hazimul Fikri",
        "T. Ulfa Khairi",
        "Rafif Nushuha",
        "Alfi Syahrin",
        "Muhammad Zaky"
    ],

    Kamis: [
        "Aqira Zahra",
        "Diah Azzahra Harahap",
        "Natasya Salsabila",
        "Muhammad Ikhsan",
        "Muhammad Sulthan Fardad"
    ],

    Jumat: [
        "Fitria Ramawati",
        "Tiara Meliana",
        "Hariz Nazri",
        "Jannatul Husna",
        "Muhammad Aqrizal"
    ]

};


const dutyGrid =
    document.getElementById("dutyGrid");


function getMemberData(name) {

    return members.find(member =>
        member.name.toLowerCase() === name.toLowerCase()
    );

}


function renderDuty() {

    dutyGrid.innerHTML = "";

    const dayNames = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const today =
        dayNames[new Date().getDay()];


    Object.entries(dutySchedule).forEach(
        ([day, people]) => {

            const card =
                document.createElement("div");

            card.className = "duty-card";


            if (day === today) {
                card.classList.add("today");
            }


            const header =
                document.createElement("div");

            header.className = "duty-day";


            header.innerHTML = `
                <div>
                    <h3>${day}</h3>
                    <p class="duty-count">
                        ${people.length} orang
                    </p>
                </div>

                ${
                    day === today
                    ? `<span class="today-label">TODAY</span>`
                    : ""
                }
            `;


            card.appendChild(header);


            people.forEach((person, index) => {

                const member =
                    getMemberData(person);

                const dutyMember =
                    document.createElement("div");

                dutyMember.className =
                    "duty-member";


                dutyMember.innerHTML = `

                    <span class="duty-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div class="duty-photo">

                        ${
                            member
                            ? `
                                <img
                                    src="images/anggota/${member.file}"
                                    alt="${member.name}"
                                    loading="lazy"
                                >
                            `
                            : `
                                <span>?</span>
                            `
                        }

                    </div>

                    <span class="duty-name">
                        ${person}
                    </span>

                `;


                card.appendChild(dutyMember);

            });


            dutyGrid.appendChild(card);

        }
    );
}


renderDuty();


/* =========================
   GALLERY V2
========================= */

const galleryPhotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg"
];

const galleryGrid = document.getElementById("galleryGrid");

const galleryLightbox =
    document.getElementById("galleryLightbox");

const galleryLightboxImage =
    document.getElementById("galleryLightboxImage");

const galleryClose =
    document.getElementById("galleryClose");


function renderGallery() {

    galleryGrid.innerHTML = "";

    if (galleryPhotos.length === 0) {

        galleryGrid.innerHTML = `
            <div class="gallery-empty">

                <div>📸</div>

                <h3>Belum Ada Foto</h3>

                <p>
                    Dokumentasi TI 1D akan hadir di sini.
                </p>

            </div>
        `;

        return;
    }

    galleryPhotos.forEach((photo, index) => {

        const item =
            document.createElement("div");

        item.className = "gallery-item";

        item.innerHTML = `
            <img
                src="images/galeri/${photo}"
                alt="Dokumentasi TI 1D ${index + 1}"
                loading="lazy"
            >
        `;

        item.addEventListener("click", () => {

            galleryLightboxImage.src =
                `images/galeri/${photo}`;

            galleryLightbox.classList.add("show");

        });

        galleryGrid.appendChild(item);

    });
}


renderGallery();


galleryClose.addEventListener("click", () => {

    galleryLightbox.classList.remove("show");

    galleryLightboxImage.src = "";

});


galleryLightbox.addEventListener("click", (event) => {

    if (event.target === galleryLightbox) {

        galleryLightbox.classList.remove("show");

        galleryLightboxImage.src = "";

    }

});

/* =========================
   MEMBER LIGHTBOX
========================= */

const memberLightbox =
    document.getElementById("galleryLightbox");

const memberLightboxImage =
    document.getElementById("galleryLightboxImage");

const memberLightboxName =
    document.getElementById("lightboxName");

const memberLightboxRole =
    document.getElementById("lightboxRole");

const memberLightboxClose =
    document.getElementById("galleryClose");


function closeMemberLightbox() {

    memberLightbox.classList.remove("show");

    memberLightboxImage.src = "";

    memberLightboxName.textContent = "";

}


memberLightboxClose.addEventListener(
    "click",
    closeMemberLightbox
);


memberLightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === memberLightbox) {
            closeMemberLightbox();
        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeMemberLightbox();
        }

    }
);

/* =========================
   LIGHTBOX STRUKTUR KELAS
========================= */

document.querySelectorAll(".structure-photo").forEach(photo => {

    photo.addEventListener("click", () => {

        const image = photo.querySelector("img");

        const lightbox =
            document.getElementById("galleryLightbox");

        const lightboxImage =
            document.getElementById("galleryLightboxImage");

        const lightboxName =
            document.getElementById("lightboxName");

        const lightboxRole =
            document.getElementById("lightboxRole");

        if (!image || !lightbox) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightboxName.textContent = image.alt;

        const card =
            photo.closest(".structure-card");

        const role =
            card?.querySelector(".role");

        lightboxRole.textContent =
            role ? role.textContent : "Pengurus TI 1D";

        lightbox.classList.add("show");

    });

});

/* =========================
   HERO COUNT UP
========================= */

const countElements =
    document.querySelectorAll(".count-up");


function animateCount(element) {

    const target =
        Number(element.dataset.target);

    let current = 0;

    const duration = 1200;

    const startTime = performance.now();


    function update(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) / duration,
                1
            );

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        current =
            Math.floor(target * easedProgress);

        element.textContent =
            current;


        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(update);
}


const hero =
    document.querySelector(".hero");


const statsObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    countElements.forEach(
                        animateCount
                    );

                    observer.disconnect();

                }

            });

        },
        {
            threshold: 0.3
        }
    );


if (hero) {
    statsObserver.observe(hero);
}

/* =========================
   SCROLL REVEAL V2
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .structure-card, .member-card, .duty-card, .brb-card, .gallery-item"
);

revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    const delayClass =
        `reveal-delay-${(index % 4) + 1}`;

    element.classList.add(delayClass);

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});

/* =========================
   SCHEDULE TODAY
========================= */

const todayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];

const currentDay =
    todayNames[new Date().getDay()];

document.querySelectorAll(".schedule-day")
    .forEach(day => {

        const title =
            day.querySelector(
                ".schedule-day-header h3"
            );

        const todayLabel =
            day.querySelector(
                ".schedule-today"
            );

        if (
            title &&
            title.textContent.trim() === currentDay
        ) {

            day.classList.add("is-today");

            if (todayLabel) {
                todayLabel.textContent = "TODAY";
            }

        }

    });

    /* =========================
   CURRENT CLASS — NOW
========================= */

function timeToMinutes(time) {

    const [hours, minutes] =
        time.split(":").map(Number);

    return hours * 60 + minutes;
}


function updateCurrentClass() {

    const now = new Date();

    const currentDay =
        todayNames[now.getDay()];

    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();


    document
        .querySelectorAll(".schedule-item")
        .forEach(item => {

            item.classList.remove("is-now");

            const oldBadge =
                item.querySelector(".schedule-now");

            if (oldBadge) {
                oldBadge.remove();
            }


            const day =
                item.dataset.day;

            const start =
                item.dataset.start;

            const end =
                item.dataset.end;


            if (
                !day ||
                !start ||
                !end
            ) {
                return;
            }


            const startMinutes =
                timeToMinutes(start);

            const endMinutes =
                timeToMinutes(end);


            if (
                day === currentDay &&
                currentMinutes >= startMinutes &&
                currentMinutes < endMinutes
            ) {

                item.classList.add("is-now");


                const title =
                    item.querySelector("h4");


                if (title) {

                    const badge =
                        document.createElement("span");

                    badge.className =
                        "schedule-now";

                    badge.textContent =
                        "NOW";

                    title.appendChild(badge);

                }

            }

        });

}


updateCurrentClass();

setInterval(
    updateCurrentClass,
    30000
);