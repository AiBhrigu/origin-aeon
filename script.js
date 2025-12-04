// PARALLAX
document.addEventListener("mousemove", (e) => {
    const grid = document.querySelector(".bg-grid");
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    grid.style.transform = `translate(${x}px, ${y}px)`;
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

function reveal() {
    for (let r of reveals) {
        const rect = r.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            r.classList.add("show");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();
