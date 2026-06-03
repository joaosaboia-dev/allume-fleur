'use strict';

/* Sombra na navbar após 60px de scroll */
(function () {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() { navbar.classList.toggle('scrolled', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* Menu hambúrguer (mobile) */
(function () {
  var toggle  = document.getElementById('nav-toggle');
  var navList = document.getElementById('nav-links');
  var overlay = document.getElementById('nav-overlay');
  if (!toggle || !navList || !overlay) return;

  function openMenu() {
    navList.classList.add('is-open');
    overlay.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navList.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    navList.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navList.classList.contains('is-open')) closeMenu();
  });
  navList.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (navList.classList.contains('is-open')) closeMenu();
    });
  });
})();


/* Scroll reveal — respeita prefers-reduced-motion */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  /* Atraso escalonado por coluna (reinicia a cada 3 cards) */
  document.querySelectorAll('.collections-grid .reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 80 + 'ms';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); /* anima apenas uma vez */
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();
