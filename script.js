document.documentElement.classList.add('js-ready');

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLabel = menuToggle?.querySelector('.sr-only');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  if (menuLabel) menuLabel.textContent = isOpen ? 'Open menu' : 'Close menu';
  mobileMenu.hidden = isOpen;
  document.body.classList.toggle('menu-open', !isOpen);
  if (!isOpen) mobileMenu.querySelector('a')?.focus();
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    if (menuLabel) menuLabel.textContent = 'Open menu';
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
    menuToggle.focus();
  });
});

const reveals = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  reveals.forEach((element) => observer.observe(element));
}

const form = document.querySelector('#enquiry-form');
const status = document.querySelector('.form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const topic = String(data.get('topic') || '').trim();
  const note = String(data.get('note') || '').trim();
  if (!name || !topic || !note) return;
  const subject = encodeURIComponent(`${topic} enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nTopic: ${topic}\n\n${note}`);
  status.replaceChildren(
    document.createTextNode(`Thank you, ${name.split(' ')[0]}. `),
    Object.assign(document.createElement('a'), { href: `mailto:hello@manishadhar.in?subject=${subject}&body=${body}`, textContent: 'Open a ready-to-send email ↗' })
  );
});

document.querySelector('#year').textContent = new Date().getFullYear();
