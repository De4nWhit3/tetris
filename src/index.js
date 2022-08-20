const gameBackdrop = document.querySelector("#gameBackdrop");
const ctx = gameBackdrop.getContext("2d");
const gameBackdropWidth = gameBackdrop.width; // this is what we assigned in the
const gameBackdropHeight = gameBackdrop.height; // html file for our canvas
const scoreText = document.querySelector("#scoreDiv");

const cubeSize = 40;
const greyDark = "#0d0d0d";
const blueLight = "#00e6e6";
const blueDark = "#003366";
const yellowLight = "#ffff00";
const yellowDark = "#b38f00";
const greenLight = "#66ff33";
const greenDark = "#226600";
const pinkLight = "#ff99ff";
const pinkDark = "#b30059";
const orangeLight = "#ff751a";
const orangeDark = "#993d00";
const redLight = "#ff0000";
const redDark = "#660000";
const purpleLight = "#ac00e6";
const purpleDark = "#39004d";

let running = false;
let xVelocity = cubeSize; // how fast we move (40px) to the right on a tick
let yVelocity = cubeSize;
let cubeX;
let cubeY;

let score = 0;

// an array of objects, each object is a cube of a piece
// each has their own x and y coordinates
let i_piece = [
    {x: 0, y: cubeSize * 3},
    {x: 0, y: cubeSize * 2},
    {x: 0, y: cubeSize},
    {x: 0, y: 0}
];

let j_piece = [
    {x: cubeSize * 2, y: cubeSize * 2},
    {x: cubeSize * 3, y: cubeSize * 2},
    {x: cubeSize * 3, y: cubeSize},
    {x: cubeSize * 3, y: 0}
];

let l_piece = [
    {x: cubeSize * 6, y: cubeSize * 2},
    {x: cubeSize * 5, y: cubeSize * 2},
    {x: cubeSize * 5, y: cubeSize},
    {x: cubeSize * 5, y: 0}
];

let o_piece = [
  {x: cubeSize * 8, y: cubeSize},
  {x: cubeSize * 8, y: 0},
  {x: cubeSize * 9, y: cubeSize},
  {x: cubeSize * 9, y: 0}
];

let s_piece = [
    {x: cubeSize * 2, y: cubeSize * 5},
    {x: cubeSize, y: cubeSize * 5},
    {x: cubeSize, y: cubeSize * 6},
    {x: 0, y: cubeSize * 6}
];

let t_piece = [
    {x: cubeSize * 6, y: cubeSize * 4},
    {x: cubeSize * 5, y: cubeSize * 4},
    {x: cubeSize * 4, y: cubeSize * 4},
    {x: cubeSize * 5, y: cubeSize * 5}
];

let z_piece = [
    {x: cubeSize * 5, y: cubeSize * 8},
    {x: cubeSize * 4, y: cubeSize * 8},
    {x: cubeSize * 4, y: cubeSize * 7},
    {x: cubeSize * 3, y: cubeSize * 7}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
//createCube();
//drawCube();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createCube();
    drawCube();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawCube();
            moveTetrisPiece();
            drawTetrisPiece(i_piece, blueDark, blueLight);
            drawTetrisPiece(j_piece, yellowDark, yellowLight);
            drawTetrisPiece(l_piece, greenDark, greenLight);
            drawTetrisPiece(o_piece, pinkDark, pinkLight);
            drawTetrisPiece(s_piece, orangeDark, orangeLight);
            drawTetrisPiece(t_piece, redDark, redLight);
            drawTetrisPiece(z_piece, purpleDark, purpleLight);
            checkGameOver();
            nextTick();
        }, 75);
    }
    else {
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = greyDark;
    ctx.fillRect(0, 0, gameBackdropWidth, gameBackdropHeight);
};
function createCube(){
    function randomCube(min, max){
        const randomNum = Math.round((Math.random() * (max - min) + min) / cubeSize) * cubeSize;
        return randomNum;
    }

    cubeX = randomCube(0, gameBackdropWidth - cubeSize);
    cubeY = randomCube(0, gameBackdropHeight - cubeSize);
};
function drawCube(){
    ctx.fillStyle = blueDark;

    ctx.fillRect(cubeX, cubeY, cubeSize, cubeSize);
};
function moveCube(){};
function moveTetrisPiece(){};
function drawTetrisPiece(piece, darkColor, lightColor){
    ctx.fillStyle = darkColor;
    ctx.strokeStyle = lightColor; // for border
    // our tetris piece is an array of objects
    piece.forEach((tetrisPieceCube)=>{
        ctx.fillRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
        ctx.strokeRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
    })
};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};