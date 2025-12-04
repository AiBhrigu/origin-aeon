/* === Helion Parallax (Soft) === */
document.addEventListener("scroll", () => {
    const sc = window.scrollY;
    const nebula = document.getElementById("nebula");
    nebula.style.transform = `translateY(${sc * 0.03}px)`;
});

/* === Card Micro-Tilt === */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const tiltX = (y - r.height / 2) / 30;
        const tiltY = (x - r.width / 2) / -30;

        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
