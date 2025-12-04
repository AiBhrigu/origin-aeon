/* === Quantum Section Reveal === */
const qSections = document.querySelectorAll(".quantum-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
});
qSections.forEach(sec => observer.observe(sec));

/* === Tech Grid Canvas Renderer === */
const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(130,110,255,0.25)"; /* фиолетово-синий лёгкий неон */
    ctx.lineWidth = 1;

    const step = 60;
    for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}
setInterval(drawGrid, 70);

/* === Game Tilt 3.0 === */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        const tiltX = (y - r.height / 2) / 20;
        const tiltY = (x - r.width / 2) / -20;

        card.style.transform =
            `translateY(-8px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
