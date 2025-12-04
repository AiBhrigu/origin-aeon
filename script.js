// Pulse flicker variation
setInterval(() => {
  const grid = document.getElementById("quantum-grid");
  grid.style.opacity = 0.55 + Math.random() * 0.15;
}, 3500);

// Gateway popup (placeholder)
function openGateway() {
  alert("Early Access Gateway Coming Soon");
}
