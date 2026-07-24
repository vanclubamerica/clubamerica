/* ==========================================================================
   Club America — Van High School Chapter
   Site JavaScript (vanilla, no build step / no dependencies)

   Sections:
   1. Mobile navigation toggle
   2. Sticky header shadow on scroll
   3. Scroll-reveal animation for elements with class "reveal"
   4. Footer current year
   5. Contact / Join form submit feedback (FormBold posts normally;
      this just gives a small "Sending..." state for UX)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* 1. Mobile navigation toggle ------------------------------------------ */
  var toggle = document.querySelector('.nav__toggle');
  var panel = document.querySelector('.nav__mobile-panel');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var isOpen = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a link is tapped
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* 2. Sticky header shadow on scroll ------------------------------------ */
  var header = document.querySelector('.site-header');
  if (header) {
    var applyScrollState = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 4px 16px rgba(28,43,56,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    };
    applyScrollState();
    window.addEventListener('scroll', applyScrollState, { passive: true });
  }

  /* 3. Scroll-reveal animation -------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el, index) {
      // stagger the reveal slightly for a smoother group animation
      el.style.transitionDelay = Math.min(index * 60, 240) + 'ms';
      observer.observe(el);
    });
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 4. Footer current year ------------------------------------------------ */
  var yearEls = document.querySelectorAll('[data-current-year]');
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* 5. Form submit feedback (Contact + Join pages use FormBold) ----------- */
  var forms = document.querySelectorAll('form[data-formbold]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.dataset.originalText = btn.textContent;
        btn.textContent = 'Sending...';
      }
      // Form submits normally to FormBold — no preventDefault().
    });
  });

});
