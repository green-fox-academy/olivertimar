const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xPurple: number = 100;
let yPurple: number = 0;

let xEnd: number = 600;

ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(xPurple, yPurple);
ctx.lineTo(xEnd, yPurple + 5);
ctx.stroke();

for (let i: number = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(xPurple = xPurple + 5, 0);
  ctx.lineTo(xEnd, yPurple = yPurple + 5);
  ctx.stroke();
}

let xGreen: number = 0;
let yGreen: number = 100;

let yEnd: number = 600;

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(xGreen, yGreen);
ctx.lineTo(xGreen + 5, yEnd );
ctx.stroke();

for (let i: number = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(0, yGreen = yGreen + 5);
  ctx.lineTo(xGreen = xGreen + 5, yEnd);
  ctx.stroke();
}

/*ctx.beginPath();
ctx.arc(250, 110, 25, 0, Math.PI);

//sunny

//beach
ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(125, 600);
ctx.lineTo(0, 600);
ctx.lineTo(0, 0);
ctx.lineTo(100, 0);
ctx.stroke();
ctx.fillStyle = '#eace6a';
ctx.fill();

//shippy
let xPurple = 100;
let yPurple = 10;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + 50, y + 15);

function drawShip (x,y) {
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + 50, y + 15);
ctx.lineTo(x + 100, y);
ctx.lineTo(x + 75, y + 25);
ctx.lineTo(x + 25, y + 25);
ctx.lineTo(x, y);
ctx.stroke();
ctx.moveTo(x + 25, y + 9);
ctx.lineTo(x + 50, y - 15);
ctx.lineTo(x + 75, y + 9);
ctx.lineTo(x + 50, y + 15);
ctx.lineTo(x + 25, y + 9);
ctx.stroke();
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();
}

for (let i = 0; i < 8; i++) {
  x = Math.floor(Math.random() * 800) + 100;
  y = Math.floor(Math.random() * 600) + 125;
  drawShip(x,y);
}

console.log(drawShip); */