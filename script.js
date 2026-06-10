document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll effect ──────────────────────────
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(11, 12, 16, 0.85)';
      navbar.style.backdropFilter = 'blur(16px)';
      navbar.style.borderBottom = '1px solid rgba(139, 92, 246, 0.15)';
      navbar.style.padding = '0.65rem 0';
    } else {
      navbar.style.background = 'rgba(139, 92, 246, 0.03)';
      navbar.style.backdropFilter = 'blur(12px)';
      navbar.style.borderBottom = '1px solid transparent';
      navbar.style.padding = '1rem 0';
    }
  });

  // ─── Mobile menu toggle ────────────────────────────
  const toggle = document.getElementById('navbar-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // ─── Smooth scrolling ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── Blob mouse parallax ──────────────────────────
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelectorAll('.blob').forEach((blob, i) => {
      const speed = (i + 1) * 18;
      blob.style.transform = `translate(${(x - 0.5) * speed}px, ${(y - 0.5) * speed}px)`;
    });
  });

  // ─── Scroll reveal ────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ─── Scroll to top ────────────────────────────────
  const scrollBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
