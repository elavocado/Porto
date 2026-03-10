class I18n {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'de';
        this.translations = window.translations;
        this.init();
    }

    init() {
        document.documentElement.setAttribute('lang', this.lang);
        this.updatePage();
        this.setupSwitches();
    }

    setLanguage(lang) {
        if (this.lang === lang) return;
        this.lang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        this.updatePage();
        this.updateSwitches();

        // Custom event for other scripts (like intro.js)
        const event = new CustomEvent('languageChanged', { detail: { lang: lang } });
        document.dispatchEvent(event);
    }

    updatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else if (el.hasAttribute('data-i18n-attr')) {
                    const attr = el.getAttribute('data-i18n-attr');
                    el.setAttribute(attr, translation);
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Update titles and meta descriptions if they have data-i18n
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const titleTranslation = this.getTranslation(titleEl.getAttribute('data-i18n'));
            if (titleTranslation) document.title = titleTranslation;
        }

        // Mark body as ready to prevent FOUT
        document.body.classList.add('i18n-ready');
    }

    getTranslation(key) {
        return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), this.translations[this.lang]);
    }

    setupSwitches() {
        this.updateSwitches();
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-switch');
            if (btn) {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            }
        });
    }

    updateSwitches() {
        const switches = document.querySelectorAll('.lang-switch');
        switches.forEach(btn => {
            if (btn.getAttribute('data-lang') === this.lang) {
                btn.classList.add('is-active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('is-active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });
    }
}

// Initialize when ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
