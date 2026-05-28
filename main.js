(function () {
  'use strict';

  var nav       = document.getElementById('nav');
  var hamburger = document.querySelector('.nav__hamburger');
  var navMobile = document.getElementById('navMobile');

  // ── Scroll: apply .scrolled on nav ──
  function handleScroll() {
    if (window.scrollY > 16) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load

  // ── Hamburger toggle ──
  hamburger.addEventListener('click', function () {
    var isOpen = navMobile.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    navMobile.setAttribute('aria-hidden', String(!isOpen));
  });

  // ── Close mobile nav on any link click ──
  navMobile.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMobile.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navMobile.setAttribute('aria-hidden', 'true');
    });
  });

  // ── Close mobile nav on resize past breakpoint ──
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navMobile.classList.contains('open')) {
      navMobile.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navMobile.setAttribute('aria-hidden', 'true');
    }
  }, { passive: true });

}());
