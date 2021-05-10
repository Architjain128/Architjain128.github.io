var flash = document.getElementById("flash1");

function animate() {
  flash.style.opacity = Math.random();

  window.requestAnimationFrame(animate);
}

animate();