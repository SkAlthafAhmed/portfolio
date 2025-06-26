// Canvas Animated Stars ✨
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 0.5,
  dx: (Math.random() - 0.5) * 0.3,
  dy: (Math.random() - 0.5) * 0.3
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fill();
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// AI Quote Rotator
const quotes = [
  \"The future belongs to the creators.\",
  \"Think boldly. Build fearlessly.\",
  \"Innovation begins with imagination.\",
  \"You’re not just coding — you’re designing the future.\",
  \"Althaf doesn’t follow trends. He forges them.\"
];

document.addEventListener(\"DOMContentLoaded\", () => {
  const quote = document.getElementById(\"ai-quote\");
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = `“${random}”`;

  const year = document.getElementById(\"year\");
  if (year) year.textContent = new Date().getFullYear();
});
