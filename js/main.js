/*
  main.js
  Core site interactions — smooth scroll, mobile menu, scroll animations,
  marquee, active nav highlighting.
*/

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const menuBtn    = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop   = document.getElementById('menu-backdrop');

    if (menuBtn && mobileMenu) {
        const toggleMenu = open => {
            const isOpen = open !== undefined ? open : !document.body.classList.contains('menu-open');
            document.body.classList.toggle('menu-open', isOpen);
        };

        menuBtn.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
        backdrop?.addEventListener('click', () => toggleMenu(false));
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && document.body.classList.contains('menu-open')) toggleMenu(false);
        });
    }

    const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));

    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        const original = marqueeContent.innerHTML;
        marqueeContent.innerHTML = original + original + original;
    }

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
        const href = link.getAttribute('href') || '';
        const isHome = (currentFile === 'index.html' || currentFile === '') &&
                       (href === './' || href === '/' || href === 'index.html');
        const isMatch = href === currentFile || isHome;

        link.classList.toggle('nav-link-active', isMatch);
        if (isMatch) link.classList.remove('text-text-muted');
    });
});
