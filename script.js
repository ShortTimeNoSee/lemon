const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 200,
    y = 200,
    dx = 0,
    dy = 0;

function drawLemon() {
    // Yellow circle
    const yellowGradient = ctx.createRadialGradient(x, y, 10, x, y, 20);
    yellowGradient.addColorStop(0, '#fff');
    yellowGradient.addColorStop(1, '#ffcc00');
    ctx.fillStyle = yellowGradient;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Green stem
    ctx.fillStyle = '#22aa22';
    ctx.beginPath();
    ctx.arc(x - 10, y - 10, 10, 0, Math.PI * 2);
    ctx.fill();

    // Texture lines
    ctx.strokeStyle = '#cc9900';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - 15, y);
    ctx.lineTo(x - 5, y);
    ctx.moveTo(x + 5, y);
    ctx.lineTo(x + 15, y);
    ctx.moveTo(x, y - 15);
    ctx.lineTo(x, y - 5);
    ctx.moveTo(x, y + 5);
    ctx.lineTo(x, y + 15);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
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
