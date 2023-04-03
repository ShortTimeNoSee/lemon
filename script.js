const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 200,
    y = 200,
    dx = 0,
    dy = 0;

const lemonImg = new Image();
lemonImg.src = 'a lemon.png';

const tomatoImg = new Image();
tomatoImg.src = 'a tomato.png';

let clickCount = 0;

function drawLemon() {
  const img = (clickCount === 7) ? tomatoImg : lemonImg;
  ctx.drawImage(img, x-20, y-20, 40, 40);
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

canvas.addEventListener('click', () => {
  clickCount++;
  drawLemon();
});

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        dx = -4;
        event.preventDefault(); // prevent scrolling left
    } else if (event.keyCode === 38) {
        dy = -4;
        event.preventDefault(); // prevent scrolling up
    } else if (event.keyCode === 39) {
        dx = 4;
        event.preventDefault(); // prevent scrolling right
    } else if (event.keyCode === 40) {
        dy = 4;
        event.preventDefault(); // prevent scrolling down
    }
});

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 37 || event.keyCode === 39) {
        dx = 0;
    } else if (event.keyCode === 38 || event.keyCode === 40) {
        dy = 0;
    }
});

// Touch controls
let isTouching = false;

canvas.addEventListener('touchstart', (event) => {
  isTouching = true;
  const touch = event.touches[0];
  x = touch.clientX;
  y = touch.clientY;
});

canvas.addEventListener('touchmove', (event) => {
  event.preventDefault(); // prevent scrolling
  if (isTouching) {
    const touch = event.touches[0];
    const deltaX = touch.clientX - x;
    const deltaY = touch.clientY - y;
    x = touch.clientX;
    y = touch.clientY;
    dx = deltaX / 10;
    dy = deltaY / 10;
  }
});

canvas.addEventListener('touchend', () => {
  isTouching = false;
  dx = 0;
  dy = 0;
});
