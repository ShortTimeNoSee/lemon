const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 200,
    y = 200,
    dx = 0,
    dy = 0;

const lemonImg = new Image();
lemonImg.src = 'path/to/lemon.png';

function drawLemon() {
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x-20, y-20, 40, 40);
    }
    img.src = 'a lemon.png';
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
