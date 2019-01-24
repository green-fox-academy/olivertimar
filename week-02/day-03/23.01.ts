'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(250, 110, 25, 0, Math.PI);

//sunny
ctx.beginPath();
ctx.arc(675, 100, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = '#FAFD0F';
ctx.fill();

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
let x = 350;
let y = 400;

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

console.log(drawShip);