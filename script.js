// PARALLAX GRID
document.addEventListener("mousemove", (e) => {
    const grid = document.querySelector(".bg-grid");
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    grid.style.transform = `translate(${x}px, ${y}px)`;
});

// SECTION REVEAL
const reveals = document.querySelectorAll(".reveal");
function reveal() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();
