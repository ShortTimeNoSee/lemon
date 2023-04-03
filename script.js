const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 200,
    y = 200,
    dx = 0,
    dy = 0;

function drawLemon() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(x - 10, y - 10, 10, 0, Math.PI * 2);
    ctx.fill();
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
        dx = -1;
    } else if (event.keyCode === 38) {
        dy = -1;
    } else if (event.keyCode === 39) {
        dx = 1;
    } else if (event.keyCode === 40) {
        dy = 1;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 37 || event.keyCode === 39) {
        dx = 0;
    } else if (event.keyCode === 38 || event.keyCode === 40) {
        dy = 0;
    }
});