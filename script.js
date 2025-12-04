// Soft parallax grid (v1.3.1)
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;

    document.body.style.backgroundPosition = `${x}px ${y}px`;
});
