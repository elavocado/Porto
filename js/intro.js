

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const bootLinesContainer = document.querySelector('.boot-lines');
    const roleText = document.querySelector('.intro-role-text');
    const progressFill = document.querySelector('.progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    const customCursor = document.getElementById('intro-cursor');
    const introName = document.querySelector('.intro-name');


    function checkIntroState() {
        if (sessionStorage.getItem('introPlayed')) {
            if (overlay) overlay.style.display = 'none';
            if (customCursor) customCursor.style.display = 'none';
            document.body.classList.remove('intro-active');
            document.body.classList.add('content-fade-in');
            return true;
        }
        return false;
    }


    if (checkIntroState()) return;


    window.addEventListener('pageshow', (event) => {
        if (event.persisted || sessionStorage.getItem('introPlayed')) {
            checkIntroState();
        }
    });


    const lines = [
        { text: "Starte Portfolio-System v2.0.26...", status: "ok" },
        { text: "Lade C# .NET Blazor — Blazor.Hybrid.Runtime", status: "ok" },
        { text: "Mounting: /projects /skills /contact", status: "ok" },
        { text: "MVVM-Pattern geladen — DI Container bereit", status: "ok" },
        { text: "Git-Branch: main — letzter Commit: heute", status: "info" },
        { text: "TonnenWecker.Limeshain → APK bereit", status: "ok" },
        { text: "Alle Systeme betriebsbereit. Willkommen.", status: "ok" }
    ];

    lines.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = 'boot-line';
        div.dataset.status = line.status;
        div.innerHTML = `<span>[ ${line.status === 'ok' ? ' OK ' : 'INFO'} ]</span> ${line.text}`;
        bootLinesContainer.appendChild(div);

        setTimeout(() => {
            div.classList.add('visible');
        }, 300 + (index * 300));
    });


    setInterval(() => {
        introName.classList.add('glitching');
        setTimeout(() => introName.classList.remove('glitching'), 500);
    }, 6000);

    setTimeout(() => {
        introName.classList.add('glitching');
        setTimeout(() => introName.classList.remove('glitching'), 500);
    }, 3500);


    const roles = [
        "Blazor Developer",
        "MAUI Hybrid Entwickler",
        "C# Enthusiast",
        "Fachinformatiker AE"
    ];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeRole() {
        const currentRole = roles[currentRoleIndex];

        if (isDeleting) {
            roleText.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typeSpeed = 50;
        } else {
            roleText.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && currentCharIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeRole, typeSpeed);
    }


    setTimeout(typeRole, 3800);


    let progress = 0;
    const progressDuration = 1600; // 1.6s from 4s start
    const startTime = 4000;

    function updateProgress() {
        if (progress < 100) {
            progress += Math.random() * 5;
            if (progress > 100) progress = 100;

            progressFill.style.width = `${progress}%`;
            progressPercent.textContent = `${Math.floor(progress) === 100 ? 100 : Math.floor(progress)}%`;

            if (progress >= 100) {
                const enterBtn = document.querySelector('.enter-btn');
                if (enterBtn) enterBtn.classList.add('visible');
                return;
            }


            const nextInterval = Math.random() * 60 + 20;
            setTimeout(updateProgress, nextInterval);
        }
    }

    setTimeout(updateProgress, startTime);


    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    document.addEventListener('mousemove', (e) => {

        if (customCursor) {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        }


        targetX = (e.clientX / window.innerWidth) - 0.5;
        targetY = (e.clientY / window.innerHeight) - 0.5;
    });

    let parallaxActive = true;
    function applyParallax() {
        if (!parallaxActive) return;

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        const matrixCanvas = document.getElementById('matrix-canvas');
        const introGrid = document.querySelector('.intro-grid');

        if (matrixCanvas) {

            const moveX = mouseX * 60;
            const moveY = mouseY * 60;
            matrixCanvas.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        if (introGrid) {
            const moveX = mouseX * -30;
            const moveY = mouseY * -30;
            introGrid.style.setProperty('--parallax-x', `${moveX}px`);
            introGrid.style.setProperty('--parallax-y', `${moveY}px`);
        }

        requestAnimationFrame(applyParallax);
    }
    applyParallax();


    window.enterSite = function () {
        sessionStorage.setItem('introPlayed', 'true');
        overlay.classList.add('hidden');
        document.body.classList.remove('intro-active');
        document.body.classList.add('content-fade-in');

        // Stop animations
        parallaxActive = false;
        if (window.introMatrix) window.introMatrix.stop();

        // Hide custom cursor
        customCursor.style.opacity = '0';

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);
    };


    let clickShortcutEnabled = false;
    setTimeout(() => {
        clickShortcutEnabled = true;


        overlay.style.cursor = 'pointer';

        const skipHint = document.createElement('div');
        skipHint.className = 'skip-hint';
        skipHint.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); font-size:10px; color:var(--text-muted); opacity:0; transition:opacity 0.5s; letter-spacing:0.2em; text-transform:uppercase; z-index:100; pointer-events:none;';
        skipHint.textContent = '[ Click anywhere to enter ]';
        overlay.appendChild(skipHint);
        setTimeout(() => skipHint.style.opacity = '1', 100);
    }, 800);

    overlay.addEventListener('click', (e) => {
        if (!clickShortcutEnabled) return;
        enterSite();
    });


    class MatrixRain {
        constructor() {
            this.canvas = document.getElementById('matrix-canvas');
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]";
            this.fontSize = 14;
            this.columns = 0;
            this.drops = [];
            this.animationId = null;
            this.mousePos = { x: 0, y: 0 };

            this.init();
            window.addEventListener('resize', () => this.init());


            document.addEventListener('mousemove', (e) => {
                const rect = this.canvas.getBoundingClientRect();
                this.mousePos.x = e.clientX - rect.left;
                this.mousePos.y = e.clientY - rect.top;
            });
        }

        init() {

            this.canvas.width = window.innerWidth * 1.1;
            this.canvas.height = window.innerHeight * 1.1;
            this.columns = Math.floor(this.canvas.width / this.fontSize);
            this.drops = [];
            for (let i = 0; i < this.columns; i++) {
                this.drops[i] = Math.random() * -100;
            }
        }

        draw() {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';

            this.ctx.fillStyle = isLight ? "rgba(245, 243, 255, 0.15)" : "rgba(13, 17, 40, 0.15)";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.font = `${this.fontSize}px 'Share Tech Mono'`;

            for (let i = 0; i < this.drops.length; i++) {
                const char = this.characters[Math.floor(Math.random() * this.characters.length)];

                const x = i * this.fontSize;
                const y = this.drops[i] * this.fontSize;


                const dx = x - this.mousePos.x;
                const dy = y - this.mousePos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const isNearMouse = dist < 120;

                if (isNearMouse) {
                    this.ctx.fillStyle = isLight ? "#0891b2" : "#ffffff";
                    this.ctx.shadowBlur = 8;
                    this.ctx.shadowColor = isLight ? "rgba(8, 145, 178, 0.5)" : "#ffffff";
                } else if (Math.random() > 0.98) {
                    this.ctx.fillStyle = isLight ? "#0891b2" : "#22d3ee";
                    this.ctx.shadowBlur = 0;
                } else {
                    this.ctx.fillStyle = isLight ? "rgba(8, 145, 178, 0.35)" : "#00FF41";
                    this.ctx.shadowBlur = 0;
                }

                this.ctx.fillText(char, x, y);

                if (y > this.canvas.height && Math.random() > 0.975) {
                    this.drops[i] = 0;
                }

                this.drops[i]++;
            }
            this.animationId = requestAnimationFrame(() => this.draw());
        }

        stop() {
            if (this.animationId) cancelAnimationFrame(this.animationId);
        }
    }

    const matrix = new MatrixRain();
    if (matrix.canvas) matrix.draw();


    window.introMatrix = matrix;
});
