const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 200,
    y = 200,
    dx = 0,
    dy = 0;

function drawLemon() {
  // Define colors for the lemon
  const yellow = '#FCD440';
  const green = '#7EBF80';
  const darkGreen = '#508F60';
  const white = '#FFFFFF';
  
  // Fill the background with white to ensure contrast
  ctx.fillStyle = white;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the lemon body
  const lemonGradient = ctx.createRadialGradient(x, y, 10, x, y, 20);
  lemonGradient.addColorStop(0, yellow);
  lemonGradient.addColorStop(1, darkGreen);
  ctx.fillStyle = lemonGradient;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();

  // Draw the lemon stem
  const stemGradient = ctx.createLinearGradient(x - 10, y - 15, x - 10, y - 5);
  stemGradient.addColorStop(0, green);
  stemGradient.addColorStop(1, darkGreen);
  ctx.fillStyle = stemGradient;
  ctx.beginPath();
  ctx.arc(x - 10, y - 10, 5, 0, Math.PI * 2);
  ctx.fill();
  
  // Add some highlights to the lemon
  const highlightGradient = ctx.createRadialGradient(x - 5, y - 5, 0, x - 5, y - 5, 10);
  highlightGradient.addColorStop(0, white);
  highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = highlightGradient;
  ctx.beginPath();
  ctx.arc(x - 5, y - 5, 10, 0, Math.PI * 2);
  ctx.fill();
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    clearCanvas();
    drawLemon();
    x += dx;
    y += dy;
}

setInterval(update, 10);

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        dx = -4;
    } else if (event.keyCode === 38) {
        dy = -4;
    } else if (event.keyCode === 39) {
        dx = 4;
    } else if (event.keyCode === 40) {
        dy = 4;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 37 || event.keyCode === 39) {
        dx = 0;
    } else if (event.keyCode === 38 || event.keyCode === 40) {
        dy = 0;
    }
});
