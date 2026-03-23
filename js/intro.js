

document.addEventListener('DOMContentLoaded', () => {

    const overlay         = document.getElementById('intro-overlay');
    const bootContainer   = document.querySelector('.boot-lines');
    const roleText        = document.querySelector('.intro-role-text');
    const progressFill    = document.querySelector('.progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    const customCursor    = document.getElementById('intro-cursor');
    const introName       = document.querySelector('.intro-name');


    function skipIntro() {
        if (overlay)      overlay.style.display = 'none';
        if (customCursor) customCursor.style.display = 'none';
        document.body.classList.remove('intro-active');
        document.body.classList.add('content-fade-in');
        parallaxActive = false;
    }

    const introSeen = sessionStorage.getItem('introPlayed');
    if (introSeen) {
        skipIntro(); 
        return;
    }

    window.introSpeedMultiplier = 0.35;

    function wait(ms) {
        return ms * window.introSpeedMultiplier;
    }

    function t(key) {
        return window.i18n ? window.i18n.getTranslation(key) : null;
    }

    function renderBootLines() {
        if (!bootContainer) return;
        const lines = t('intro.boot') || [
            'Initializing portfolio system v2.0.26...',
            'Loading C# .NET Blazor — Blazor.Hybrid.Runtime',
            'Mounting: /projects /skills /contact',
            'MVVM pattern loaded — DI container ready',
            'Git branch: main — last commit: today',
            'TonnenWecker.Limeshain → APK ready',
            'All systems operational. Welcome.'
        ];

        lines.forEach((text, i) => {
            const div = document.createElement('div');
            div.className = 'boot-line';
            div.dataset.status = i === 4 ? 'info' : 'ok';
            div.innerHTML = `<span>[ ${i === 4 ? 'INFO' : ' OK '} ]</span> ${text}`;
            bootContainer.appendChild(div);
            setTimeout(() => div.classList.add('visible'), wait(300 + i * 300));
        });
    }

    if (window.i18n) {
        renderBootLines();
    } else {
        setTimeout(() => {
            if (!bootContainer?.children.length) renderBootLines();
        }, 50);
    }

    function triggerGlitch() {
        if (!introName) return;
        introName.classList.add('glitching');
        setTimeout(() => introName.classList.remove('glitching'), 450);
    }
    setTimeout(triggerGlitch, wait(3500));
    setInterval(triggerGlitch, 6000);

    const roles = t('intro.roles') || [
        'Blazor Developer',
        'MAUI Hybrid Developer',
        'C# Enthusiast',
        'IT Specialist AE'
    ];

    let roleIndex = 0, charIndex = 0, deleting = false, typeSpeed = 100;

    function typeRole() {
        if (!roleText) return;
        const current = roles[roleIndex];
        roleText.textContent = deleting
            ? current.substring(0, --charIndex)
            : current.substring(0, ++charIndex);

        if (!deleting && charIndex === current.length) {
            deleting = true;
            typeSpeed = 2000;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        } else {
            typeSpeed = deleting ? 50 : 100;
        }
        setTimeout(typeRole, typeSpeed);
    }
    setTimeout(typeRole, wait(3800));

    const progressLabel = document.querySelector('.progress-labels span:first-child');
    if (progressLabel) {
        progressLabel.textContent = t('intro.loading') || 'INITIALIZING';
    }

    let progress = 0;
    function updateProgress() {
        progress = Math.min(100, progress + Math.random() * 5);
        if (progressFill)    progressFill.style.width = `${progress}%`;
        if (progressPercent) progressPercent.textContent = `${Math.floor(progress)}%`;

        if (progress >= 100) {
            const enterBtn = document.querySelector('.enter-btn');
            if (enterBtn) {
                enterBtn.textContent = t('intro.enter') || '[ CLICK HERE TO ENTER ]';
                enterBtn.classList.add('visible');
                
                // --- AUTO-ENTER TIMEOUT ---
                setTimeout(() => {
                    const overlay = document.getElementById('intro-overlay');
                    if (overlay && overlay.style.display !== 'none') {
                        enterSite();
                    }
                }, 3000);
            }
            return;
        }
        setTimeout(updateProgress, Math.random() * 60 + 20);
    }
    setTimeout(updateProgress, wait(4000));

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    let parallaxActive = true;

    document.addEventListener('mousemove', e => {
        if (customCursor) {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top  = `${e.clientY}px`;
        }
        targetX = (e.clientX / window.innerWidth)  - 0.5;
        targetY = (e.clientY / window.innerHeight) - 0.5;
    });

    function applyParallax() {
        if (!parallaxActive) return;
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        const canvas = document.getElementById('matrix-canvas');
        const grid   = document.querySelector('.intro-grid');
        if (canvas) canvas.style.transform = `translate(${mouseX * 60}px, ${mouseY * 60}px)`;
        if (grid) {
            grid.style.setProperty('--parallax-x', `${mouseX * -30}px`);
            grid.style.setProperty('--parallax-y', `${mouseY * -30}px`);
        }
        requestAnimationFrame(applyParallax);
    }
    applyParallax();

    window.enterSite = function () {
        if (!parallaxActive) return;
        parallaxActive = false;

        sessionStorage.setItem('introPlayed', 'true');
        overlay.classList.add('hidden');
        document.body.classList.remove('intro-active');
        document.body.classList.add('content-fade-in');
        if (window.introMatrix) window.introMatrix.stop();
        if (customCursor) customCursor.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 900);
    };

    setTimeout(() => {
        overlay.style.cursor = 'pointer';

        const hint = document.createElement('div');
        hint.style.cssText = [
            'position:fixed', 'bottom:24px', 'left:50%',
            'transform:translateX(-50%)', 'font-size:9px',
            'color:var(--text-muted)', 'opacity:0',
            'transition:opacity 0.5s ease', 'letter-spacing:0.25em',
            'text-transform:uppercase', 'z-index:100', 'pointer-events:none',
            'font-family:"Share Tech Mono",monospace'
        ].join(';');
        hint.textContent = t('intro.skip') || '[ click anywhere to enter ]';
        overlay.appendChild(hint);
        setTimeout(() => { hint.style.opacity = '0.6'; }, 100);

        overlay.addEventListener('click', () => window.enterSite());
    }, wait(800));

    class MatrixRain {
        constructor() {
            this.canvas = document.getElementById('matrix-canvas');
            if (!this.canvas) return;
            this.ctx      = this.canvas.getContext('2d');
            this.chars    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]';
            this.fontSize = 14;
            this.drops    = [];
            this.mousePos = { x: 0, y: 0 };
            this.animId   = null;

            this._resize();
            window.addEventListener('resize', () => this._resize());
            document.addEventListener('mousemove', e => {
                const r = this.canvas.getBoundingClientRect();
                this.mousePos = { x: e.clientX - r.left, y: e.clientY - r.top };
            });
        }

        _resize() {
            this.canvas.width  = window.innerWidth  * 1.1;
            this.canvas.height = window.innerHeight * 1.1;
            this.columns = Math.floor(this.canvas.width / this.fontSize);
            this.drops   = Array.from({ length: this.columns }, () => Math.random() * -100);
        }

        draw() {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            this.ctx.fillStyle = isLight ? 'rgba(242,240,253,0.15)' : 'rgba(7,9,26,0.15)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.font = `${this.fontSize}px 'Share Tech Mono'`;

            for (let i = 0; i < this.drops.length; i++) {
                const char = this.chars[Math.floor(Math.random() * this.chars.length)];
                const x = i * this.fontSize;
                const y = this.drops[i] * this.fontSize;
                const dx = x - this.mousePos.x;
                const dy = y - this.mousePos.y;
                const near = Math.sqrt(dx * dx + dy * dy) < 130;

                if (near) {
                    this.ctx.fillStyle   = isLight ? '#0369a1' : '#ffffff';
                    this.ctx.shadowBlur  = 10;
                    this.ctx.shadowColor = isLight ? 'rgba(3,105,161,0.5)' : 'rgba(255,255,255,0.5)';
                } else if (Math.random() > 0.98) {
                    this.ctx.fillStyle   = isLight ? '#0369a1' : '#06d6f0';
                    this.ctx.shadowBlur  = 0;
                } else {
                    this.ctx.fillStyle   = isLight ? 'rgba(3,105,161,0.3)' : '#00c846';
                    this.ctx.shadowBlur  = 0;
                }

                this.ctx.fillText(char, x, y);
                if (y > this.canvas.height && Math.random() > 0.975) this.drops[i] = 0;
                this.drops[i]++;
            }
            this.animId = requestAnimationFrame(() => this.draw());
        }

        stop() {
            if (this.animId) cancelAnimationFrame(this.animId);
        }
    }

    const matrix = new MatrixRain();
    if (matrix.canvas) matrix.draw();
    window.introMatrix = matrix;
});
