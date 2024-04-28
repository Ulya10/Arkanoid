let canvas = document.getElementById("canvas"),
ctx = canvas.getContext('2d');

let width = 500;
let height = 500;
canvas.width=width; 
canvas.height=height;

let padWidth = 100;
let padHeight = 10;

let brickWidth = 50;
let brickHeight = 20;

const repeats = Math.ceil(width/brickWidth);
const repeatsVert = 5;
let amountTotal = repeats*repeatsVert;

let amountDel = 10;

let brickArr = [];
let a = 0;
let b = 0;

for (let i=0; i<amountTotal; i++){
    brickArr[i] = [];
    brickArr[i][0] = [b*brickWidth];
    brickArr[i][1] = [a*brickHeight];
    b++;
    if(b*brickWidth >= width){
        b = 0;
        a++;
    }
}

console.log(brickArr);

for (let k=0; k<amountDel; k++){
        let delElem = Math.floor(Math.random()*amountTotal);
        amountTotal--;
        console.log(delElem);
        brickArr.splice(delElem, 1);
    }

console.log(brickArr);

for (let i=0; i<brickArr.length; i++){
    //ctx.fillStyle = 'black';
    ctx.fillStyle = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
    ctx.fillRect(brickArr[i][0][0], brickArr[i][1][0], brickWidth, brickHeight);
    ctx.strokeRect(brickArr[i][0][0], brickArr[i][1][0], brickWidth, brickHeight);
    //console.log(brickArr[i][0][0], brickArr[i][1][0], brickWidth, brickHeight);
}

// for (let i=0; i<repeatsVert; i++){
//     brickArr[i] = [];
//     for (let j=0; j<repeats; j++){
//         brickArr[i][j] = [];
//         brickArr[i][j][0] = [j*padWidth];
//         brickArr[i][j][1] = [i*padHeight];
//     }
// }
// console.log(brickArr);
// for (let k=0; k<amountDel; k++){
//     let delElem = Math.floor(Math.random()*amountTotal);
//     console.log(delElem);
//     let i = Math.floor(delElem / repeats);
//     let j = Math.floor(delElem % repeats);
//     brickArr[i].splice(j, 1);
// }
// console.log(brickArr);


let padX = width/2-padWidth/2;
let padY = height-padHeight;

ctx.fillStyle = "orange";
ctx.lineWidth = 1;

ctx.fillRect(padX, padY, padWidth, padHeight);

let ballWidth = 10;
let ballX = width/2-ballWidth/2;
let ballY = padY-ballWidth;

function strokeBall (x, y) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, ballWidth, ballWidth);
}

// function clearBall (){
//     ctx.clearRect(0, 0, width, height);
// }

strokeBall(ballX, ballY);

//clearBall (ballX, ballY);

strokeBall(ballX, ballY);

ctx.fillStyle = "orange";
ctx.fillRect(padX, padY, padWidth, padHeight);




