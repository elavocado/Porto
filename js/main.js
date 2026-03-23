

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

    const toggleMenu = (open) => {
        const isOpen = open !== undefined ? open : !document.body.classList.contains('menu-open');
        document.body.classList.toggle('menu-open', isOpen);
        
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', isOpen);
        }
    };

    const nav = document.querySelector('nav'); // Define nav for scroll effect

    document.addEventListener('click', e => {
        const menuBtn = e.target.closest('#mobile-menu-btn');
        const backdrop = e.target.closest('#menu-backdrop');
        const navLink = e.target.closest('#mobile-menu a');
        const themeBtn = e.target.closest('#theme-toggle');

        if (menuBtn) {
            e.stopPropagation();
            toggleMenu();
        } else if (backdrop || navLink) {
            toggleMenu(false);
        } else if (themeBtn) {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            if (isLight) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
            toggleMenu(false);
        }
    });

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

    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Navbar scroll effect
    const navScroll = document.getElementById('main-nav');
    if (navScroll) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navScroll.classList.add('bg-navy-bg/90', 'py-2');
                navScroll.classList.remove('h-20');
            } else {
                navScroll.classList.remove('bg-navy-bg/90', 'py-2');
                navScroll.classList.add('h-20');
            }
        });
    }
});
