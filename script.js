// Subtle parallax effect on scroll for section blocks
document.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelectorAll(".card, .roadmap-item").forEach((el, i) => {
    el.style.transform = `translateY(${Math.sin(scrolled * 0.002 + i) * 3}px)`;
  });
});

// Micro-noise flicker
setInterval(() => {
  const grid = document.getElementById("bg-grid");
  const v = 0.3 + Math.random() * 0.02;
  grid.style.opacity = v;
}, 300);
