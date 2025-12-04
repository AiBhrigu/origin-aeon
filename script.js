// Parallax background
document.addEventListener("mousemove", (e) => {
    const grid = document.querySelector(".bg-grid");
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    grid.style.transform = `translate(${x}px, ${y}px)`;
});

// Stagger reveal
const blocks = document.querySelectorAll(".block");
let delay = 0;
blocks.forEach(b => {
    b.style.animationDelay = delay + "s";
    delay += 0.15; // φ-like stepping
});

