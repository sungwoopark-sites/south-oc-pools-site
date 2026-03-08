// South OC Pools - Main JavaScript

// ======== Hamburger Menu ========
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      // Close
      mobileNav.classList.remove('open');
      mobileNav.style.display = 'none';
      mobileNav.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      // Remove tabindex from links
      mobileNav.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
    } else {
      // Open
      mobileNav.classList.add('open');
      mobileNav.style.display = 'block';
      mobileNav.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      // Allow tabbing to links
      mobileNav.querySelectorAll('a').forEach(a => a.removeAttribute('tabindex'));
    }
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileNav.style.display = 'none';
      mobileNav.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
    });
  });
}

// ======== Scroll Reveal ========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ======== Areas Section Observer ========
const areasObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      areasObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const areasSection = document.querySelector('.areas-section');
if (areasSection) areasObserver.observe(areasSection);

// ======== Header Scroll Effect ========
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ======== Smooth Scroll ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
