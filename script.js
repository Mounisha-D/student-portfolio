/* script.js - small interactive helpers */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (!nav) return;
      if (nav.style.display === 'flex') {
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '8px';
        nav.style.background = 'white';
        nav.style.padding = '12px';
        nav.style.borderRadius = '8px';
      }
    });
  }

  // simple form validation for contact forms that exist on contact page
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();
      const note = contactForm.querySelector('.form-note');

      if (!name || !email || !message) {
        note.textContent = 'Please complete all fields before sending.';
        note.style.color = 'crimson';
        return;
      }

      // Demo success (replace with real endpoint)
      note.textContent = 'Thanks — your message was sent (demo).';
      note.style.color = 'green';
      contactForm.reset();
    });
  }
});
