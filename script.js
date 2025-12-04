/* === Nebula Parallax === */
document.addEventListener("scroll", () => {
    const sc = window.scrollY;
    nebula.style.transform = `translateY(${sc * 0.03}px)`;
});

/* === Quantum Section Reveal === */
const sections = document.querySelectorAll(".quantum-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
});
sections.forEach(sec => observer.observe(sec));

/* === Tech Grid Renderer === */
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
    ctx.strokeStyle = "rgba(180,160,255,0.18)";
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
setInterval(drawGrid, 40);

/* === Axis Drift Lightfield === */
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    canvas.style.transform = `translate(${x}px, ${y}px)`;
});
