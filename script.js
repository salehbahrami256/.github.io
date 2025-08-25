// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close nav on mobile after click
      navList?.classList.remove('open');
    }
  });
});
