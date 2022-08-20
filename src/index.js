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

// an array of object, each object is a cube of a piece
// each has their own x and y coordinates
let tetrisPiece = [
    {x: cubeSize * 4, y: 0},
    {x: cubeSize * 3, y: 0},
    {x: cubeSize * 2, y: 0},
    {x: cubeSize, y: 0},
    {x: 0, y: 0}
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
            drawTetrisPiece();
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
function drawTetrisPiece(){
    ctx.fillStyle = blueDark;
    ctx.strokeStyle = blueLight; // for border
    // our tetris piece is an array of objects
    tetrisPiece.forEach((tetrisPieceCube)=>{
        ctx.fillRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
        ctx.strokeRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
    })
};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};