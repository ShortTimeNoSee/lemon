const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 200,
    y = 200,
    dx = 0,
    dy = 0;

function drawLemon() {
    // Define lemon shape
    let centerX = x;
    let centerY = y;
    let radiusX = 25;
    let radiusY = 15;
    
    // Draw lemon
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Add shading and highlights
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(centerX - 10, centerY - 10, 5, centerX, centerY, radiusX);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = gradient;
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw stem
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(centerX - 10, centerY - 10, 10, 0, Math.PI * 2);
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
