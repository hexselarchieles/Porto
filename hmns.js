// Reveal sections on scroll
const reveals = document.querySelectorAll('.reveal');
function handleReveal() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

// Active navbar link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');

function updateActiveNav() {
  let fromTop = window.scrollY + 150;
  let currentId = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
      currentId = sec.id;
    }
  });
  // if at bottom -> contact (none here), keep logic simple
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
