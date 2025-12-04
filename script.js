/* =======================================
   ORIGIN AEON — GAME MODE v1.5
   Depth Engine + Glow Motion
======================================= */

/* ---------- SCROLL REVEAL ENGINE 2.0 ---------- */
const revealEls = document.querySelectorAll('.section, .feature-card, .roadmap-item, .loop');

const reveal = () => {
    const h = window.innerHeight * 0.85;

    revealEls.forEach(el => {
        if (el.getBoundingClientRect().top < h) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);


/* ---------- FLOATING TITLE MOTION ---------- */
const title = document.querySelector('.title');
let t = 0;

const float = () => {
    t += 0.015;

    const y = Math.sin(t) * 6;
    const glow = Math.sin(t) * 10 + 18;

    title.style.transform = `translateY(${y}px)`;
    title.style.textShadow = `
        0 0 ${glow}px rgba(150,150,255,0.5),
        0 0 ${glow * 0.5}px rgba(150,150,255,0.35)
    `;

    requestAnimationFrame(float);
};

float();


/* ---------- 3D PARALLAX DEPTH FIELD ---------- */
document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    document.querySelector('#bg-layer-1').style.transform =
        `translate(${x * 8}px, ${y * 8}px)`;

    document.querySelector('#bg-layer-2').style.transform =
        `translate(${x * 16}px, ${y * 16}px)`;

    document.querySelector('#bg-layer-3').style.transform =
        `translate(${x * 24}px, ${y * 24}px)`;
});


/* ---------- MICRO-GLOW INTERACTION ---------- */
document.querySelectorAll('.feature-card, .roadmap-item, .cta-button').forEach(el => {
    el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
    });
});
