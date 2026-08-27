function toggleMenu() {
    const menu = document.getElementById("nav-menu");

    menu.classList.toggle("active");
}


const today = new Date().getDay();

const days = {
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat"
};

const piketCards = document.querySelectorAll(".piket-card");

piketCards.forEach(card => {

    const dayName = card.querySelector("h3").textContent.trim();

    if (days[today] === dayName) {

        card.classList.add("today");

        const badge = document.createElement("span");

        badge.textContent = "TODAY";

        badge.classList.add("today-badge");

        card.querySelector("h3").appendChild(badge);
    }

});

function openGallery(element) {
    const image = element.querySelector("img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!image || !lightbox || !lightboxImg) {
        return;
    }

    lightboxImg.src = image.getAttribute("src");
    lightbox.classList.add("active");
}

function closeGallery() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.classList.remove("active");
    lightboxImg.src = "";
}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    "section, .member-card, .piket-card, .gallery-item, .kontak-card"
);

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

function updateClock() {

    const now = new Date();

    const days = [
        "MINGGU",
        "SENIN",
        "SELASA",
        "RABU",
        "KAMIS",
        "JUMAT",
        "SABTU"
    ];

    const months = [
        "JANUARI",
        "FEBRUARI",
        "MARET",
        "APRIL",
        "MEI",
        "JUNI",
        "JULI",
        "AGUSTUS",
        "SEPTEMBER",
        "OKTOBER",
        "NOVEMBER",
        "DESEMBER"
    ];

    const day = days[now.getDay()];

    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("current-day").textContent = day;

    document.getElementById("current-date").textContent =
        `${date} ${month} ${year}`;

    document.getElementById("current-time").textContent =
        `${hours}:${minutes}:${seconds} WIB`;
}

updateClock();

setInterval(updateClock, 1000);
