/*
  i18n.js
  Internationalization controller — EN/DE language switching
  with FOUT prevention and event broadcasting.
*/

class I18n {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'de';
        this.translations = window.translations;
        this._init();
    }

    _init() {
        document.documentElement.setAttribute('lang', this.lang);
        this._updatePage();
        this._setupSwitches();
    }

    setLanguage(lang) {
        if (this.lang === lang || !this.translations[lang]) return;
        this.lang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        this._updatePage();
        this._updateSwitches();
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    _updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = this.getTranslation(key);
            if (value === null) return;

            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else if (el.hasAttribute('data-i18n-attr')) {
                el.setAttribute(el.getAttribute('data-i18n-attr'), value);
            } else {
                el.innerHTML = value;
            }
        });

        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const t = this.getTranslation(titleEl.getAttribute('data-i18n'));
            if (t) document.title = t;
        }

        document.body.classList.add('i18n-ready');
    }

    getTranslation(key) {
        return key.split('.').reduce((obj, segment) => {
            return obj != null && typeof obj === 'object' ? obj[segment] ?? null : null;
        }, this.translations[this.lang]);
    }

    _setupSwitches() {
        this._updateSwitches();
        document.addEventListener('click', e => {
            const btn = e.target.closest('.lang-switch');
            if (btn) this.setLanguage(btn.getAttribute('data-lang'));
        });
    }

    _updateSwitches() {
        document.querySelectorAll('.lang-switch').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === this.lang;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
