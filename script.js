// --- EFEK ANIMASI SCROLL-REVEAL ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// --- FUNGSI NAVBAR ---
const navLinks = document.querySelectorAll("nav ul li a");
// Pastikan ID section Anda (about, projects, contact) ada di tag ini:
const sections = document.querySelectorAll("header, main, footer"); 

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    // --- PERBAIKAN: Cek jika sudah di paling bawah halaman ---
    // (window.scrollY + window.innerHeight) = Posisi paling bawah layar Anda
    // (document.documentElement.scrollHeight) = Total tinggi seluruh halaman
    const atBottom = (window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 5; // buffer 5px

    if (atBottom) {
        current = "contact"; // Paksa aktifkan 'contact' (ID footer Anda)
    }
    // --- AKHIR PERBAIKAN ---

    navLinks.forEach((link) => {
        // Hapus kelas 'active' dan 'underline' dari semua link
        link.classList.remove("active", "underline", "underline-offset-8"); 
        
        // Tambahkan kelas ke link yang cocok
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active", "underline", "underline-offset-8");
        }
    });
});

// Smooth scrolling (dari kode Anda)
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // Link untuk kembali ke atas
        if (link.getAttribute("href") === "#") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// --- LOGIKA TAB PROYEK ---
document.addEventListener('DOMContentLoaded', () => {
    const uiUxTab = document.getElementById('ui-ux-tab');
    const webTab = document.getElementById('web-tab');
    const uiUxContent = document.getElementById('ui-ux-content');
    const webContent = document.getElementById('web-content');

    if (uiUxTab) {
        uiUxTab.addEventListener('click', () => {
            // Tampilkan konten UI/UX
            uiUxContent.classList.remove('hidden');
            webContent.classList.add('hidden');

            // Atur tombol aktif
            uiUxTab.classList.add('active');
            webTab.classList.remove('active');
        });
    }

    if (webTab) {
        webTab.addEventListener('click', () => {
            // Tampilkan konten Web
            webContent.classList.remove('hidden');
            uiUxContent.classList.add('hidden');

            // Atur tombol aktif
            webTab.classList.add('active');
            uiUxTab.classList.remove('active');
        });
    }
});