

document.addEventListener('DOMContentLoaded', () => {


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });


                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });


    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    const backdrop = document.getElementById('menu-backdrop');

    if (mobileMenuBtn && mobileMenu) {
        const toggleMenu = (show) => {
            const isOpen = show !== undefined ? show : !body.classList.contains('menu-open');
            body.classList.toggle('menu-open', isOpen);
            
            // Re-render lucide icons if needed, or handle icons manually
            // But we are using CSS for the hamburger now
        };

        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        if (backdrop) {
            backdrop.addEventListener('click', () => toggleMenu(false));
        }

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && body.classList.contains('menu-open')) {
                toggleMenu(false);
            }
        });
    }


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => scrollObserver.observe(el));


    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        const clone = marqueeContent.innerHTML;

        marqueeContent.innerHTML += clone + clone;
    }

    // Highlight Active Navigation Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Simple match or index.html match for root paths
        const isMatch = href === currentPath || 
                       (currentPath === 'index.html' && href === './') ||
                       (currentPath === 'index.html' && href === '/');

        if (isMatch) {
            link.classList.add('nav-link-active');
            link.classList.remove('text-text-muted');
        } else {
            link.classList.remove('nav-link-active');
        }
    });
});
