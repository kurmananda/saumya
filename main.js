// Mobile nav toggle
const toggle = document.getElementById('navtoggle');
const links = document.getElementById('navlinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Scroll reveal (respects reduced motion) — with a safety net so content
// can never stay hidden even if the observer misfires.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll('.reveal');
const showAll = () => items.forEach(el => el.classList.add('in'));

if (reduce || !('IntersectionObserver' in window)) {
  showAll();
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -6% 0px' });
  items.forEach(el => io.observe(el));
  // guarantee: anything not revealed within 4s becomes visible regardless
  setTimeout(showAll, 4000);
}
