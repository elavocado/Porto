/**
 * js/components.js
 * Centralized UI components for menadawod.de
 */

class UIComponents {
    static init() {
        this.renderNav();
        this.renderMobileMenu();
    }

    static renderNav() {
        const navPlaceholder = document.getElementById('main-nav-placeholder');
        if (!navPlaceholder) return;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        const navHTML = `
            <div class="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
                <a href="index.html" class="font-sora font-bold text-2xl text-primary tracking-tighter">MD</a>
                <div class="hidden md:flex items-center gap-8 font-medium">
                    <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'nav-link-active' : 'text-text-muted'} transition-colors hover:text-primary" data-i18n="nav.home">Home</a>
                    <a href="projects.html" class="nav-link ${currentPage === 'projects.html' ? 'nav-link-active' : 'text-text-muted'} transition-colors hover:text-primary" data-i18n="nav.projects">Projekte</a>
                    <a href="ai.html" class="nav-link ${currentPage === 'ai.html' ? 'nav-link-active' : 'text-text-muted'} transition-colors hover:text-primary" data-i18n="nav.ai">AI</a>
                    <a href="certificates.html" class="nav-link ${currentPage === 'certificates.html' ? 'nav-link-active' : 'text-text-muted'} transition-colors hover:text-primary" data-i18n="nav.certificates">Zertifikate</a>
                    <a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'nav-link-active' : 'text-text-muted'} transition-colors hover:text-primary" data-i18n="nav.about">Über Mich</a>
                    <a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'nav-link-active' : 'text-text-muted'} transition-colors hover:text-primary" data-i18n="nav.contact">Kontakt</a>
                </div>

                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2 bg-navy-surface/50 border border-navy-border rounded-lg p-1">
                        <button class="lang-switch px-2 py-1 text-xs font-bold rounded transition-all hover:text-primary" data-lang="en">EN</button>
                        <div class="w-px h-3 bg-navy-border"></div>
                        <button class="lang-switch px-2 py-1 text-xs font-bold rounded transition-all hover:text-primary" data-lang="de">DE</button>
                    </div>

                    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle light/dark mode" title="Toggle theme">
                        <span class="theme-toggle__track">
                            <span class="theme-toggle__thumb">
                                <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                                <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            </span>
                        </span>
                    </button>
                </div>

                <button id="mobile-menu-btn" class="md:hidden text-text-DEFAULT hover:text-primary transition-colors">
                    <span class="hamburger-box"><span class="hamburger-inner"></span></span>
                </button>
            </div>
        `;
        navPlaceholder.innerHTML = navHTML;
    }

    static renderMobileMenu() {
        const menuPlaceholder = document.getElementById('mobile-menu-placeholder');
        if (!menuPlaceholder) return;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        const menuHTML = `
            <div id="mobile-menu" class="md:hidden">
                <div class="flex items-center justify-between mb-10">
                    <span class="font-sora font-bold text-2xl text-primary tracking-tighter">MD</span>
                </div>
                <div class="flex flex-col gap-6 font-medium">
                    <a href="index.html" class="flex items-center gap-3 text-lg transition-colors ${currentPage === 'index.html' ? 'nav-link-active' : 'text-text-muted hover:text-primary'}" data-i18n="nav.home">
                        <i data-lucide="home" class="w-5 h-5"></i> Home
                    </a>
                    <a href="projects.html" class="flex items-center gap-3 text-lg transition-colors ${currentPage === 'projects.html' ? 'nav-link-active' : 'text-text-muted hover:text-primary'}" data-i18n="nav.projects">
                        <i data-lucide="code-2" class="w-5 h-5"></i> Projekte
                    </a>
                    <a href="ai.html" class="flex items-center gap-3 text-lg transition-colors ${currentPage === 'ai.html' ? 'nav-link-active' : 'text-text-muted hover:text-primary'}" data-i18n="nav.ai">
                        <i data-lucide="bot" class="w-5 h-5"></i> AI
                    </a>
                    <a href="certificates.html" class="flex items-center gap-3 text-lg transition-colors ${currentPage === 'certificates.html' ? 'nav-link-active' : 'text-text-muted hover:text-primary'}" data-i18n="nav.certificates">
                        <i data-lucide="award" class="w-5 h-5"></i> Zertifikate
                    </a>
                    <a href="about.html" class="flex items-center gap-3 text-lg transition-colors ${currentPage === 'about.html' ? 'nav-link-active' : 'text-text-muted hover:text-primary'}" data-i18n="nav.about">
                        <i data-lucide="user" class="w-5 h-5"></i> Über Mich
                    </a>
                    <a href="contact.html" class="flex items-center gap-3 text-lg transition-colors ${currentPage === 'contact.html' ? 'nav-link-active' : 'text-text-muted hover:text-primary'}" data-i18n="nav.contact">
                        <i data-lucide="mail" class="w-5 h-5"></i> Kontakt
                    </a>
                </div>
                <div class="mt-auto pt-10 border-t border-navy-border flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <a href="https://github.com/elavocado" target="_blank" class="text-text-muted hover:text-primary transition-colors">
                            <i data-lucide="github" class="w-6 h-6"></i>
                        </a>
                        <a href="https://linkedin.com/in/menadawod/" target="_blank" class="text-text-muted hover:text-primary transition-colors">
                            <i data-lucide="linkedin" class="w-6 h-6"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div id="menu-backdrop" class="md:hidden"></div>
        `;
        menuPlaceholder.innerHTML = menuHTML;
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    UIComponents.init();
    
    // Small delay to ensure DOM is ready for other scripts
    setTimeout(() => {
        if (window.i18n) window.i18n.init();
        if (window.lucide) window.lucide.createIcons();
    }, 50);
});
