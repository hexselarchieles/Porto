// SCROLL + ACTIVE NAV SCRIPT
// Reveal Animation (tetap dipertahankan)
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('active');
    });
});

// Active Navbar Links (Logika yang diperbaiki)
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section, footer'); // Ambil semua bagian utama (section + footer)

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 150;
    let currentSectionId = '';

    // 1. Tentukan ID section yang sedang aktif
    sections.forEach(section => {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            currentSectionId = section.id;
        }
    });

    // PERBAIKAN: Jika sudah di paling bawah, paksa ID ke 'contact'
    // Menggunakan buffer 5px
    const isAtBottom = (window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - 5);

    if (isAtBottom) {
        currentSectionId = 'contact';
    }


    // 2. Terapkan kelas 'active' hanya pada link yang sesuai dengan ID
    navLinks.forEach(link => {
        // Hapus semua kelas penanda aktif dari semua link
        link.classList.remove("active"); 

        // Terapkan kelas 'active' pada link yang cocok dengan ID saat ini
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

const roleItems = document.querySelectorAll('#role-carousel .carousel-item');
  let currentRole = 0;

  document.getElementById('next-role').addEventListener('click', () => {
    roleItems[currentRole].classList.add('hidden');
    currentRole = (currentRole + 1) % roleItems.length;
    roleItems[currentRole].classList.remove('hidden');
  });

  document.getElementById('prev-role').addEventListener('click', () => {
    roleItems[currentRole].classList.add('hidden');
    currentRole = (currentRole - 1 + roleItems.length) % roleItems.length;
    roleItems[currentRole].classList.remove('hidden');
  });