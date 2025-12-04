// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});


// === Helion Lite: Parallax Gravity ===
const parallaxStrength = 0.035;

window.addEventListener("scroll", () => {
    const sc = window.scrollY;
    document.body.style.backgroundPositionY = `-${sc * parallaxStrength}px`;
});


// === Helion Lite: Ambient Drift (micro motion) ===
let drift = 0;
function animateDrift() {
    drift += 0.00045;

    document.body.style.backgroundPositionX =
        `${Math.sin(drift) * 18}px`;

    requestAnimationFrame(animateDrift);
}
animateDrift();
