/* =======================================
   ORIGIN AEON — Minimal Interaction Engine
   v1.4 — Φ-Standard Edition
======================================= */

/* --------------------------
   Soft Reveal on Scroll
--------------------------- */
const revealElements = document.querySelectorAll('.section, .feature-card, .roadmap-item');

const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.88;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;

        if (rect < trigger) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* --------------------------
   Breathing Title Glow
--------------------------- */
const title = document.querySelector('.title');
let glowT = 0;

const animateGlow = () => {
    glowT += 0.015;

    const glow = Math.sin(glowT) * 6 + 12;  // breathing amplitude

    title.style.textShadow = `
        0 0 ${glow}px rgba(150,150,255,0.55),
        0 0 ${glow * 0.6}px rgba(150,150,255,0.35)
    `;

    requestAnimationFrame(animateGlow);
};

animateGlow();


/* --------------------------
   Micro Hover Glow Enhancer
--------------------------- */
document.querySelectorAll('.cta-button, .feature-card, .roadmap-item').forEach(el => {
    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
    });
});


/* --------------------------
   Subtle Parallax Background
--------------------------- */
let px = 0, py = 0;

document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    px = (e.clientX - cx) * 0.002;
    py = (e.clientY - cy) * 0.002;

    document.body.style.transform = `translate(${px}px, ${py}px)`;
});
