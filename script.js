let canvas = document.getElementById("canvas"),
ctx = canvas.getContext('2d');

let width = 500;
let height = 500;
canvas.width=width; 
canvas.height=height;

let padWidth = 100;
let padHeight = 10;
let padX = width/2-padWidth/2;
let padY = height-padHeight;

ctx.fillStyle = "orange";
ctx.lineWidth = 1;

ctx.fillRect(padX, padY, padWidth, padHeight);

let ballWidth = 10;
let ballX = width/2-ballWidth/2;
let ballY = padY-ballWidth;

ctx.strokeRect(ballX, ballY, ballWidth, ballWidth);