const gameBackdrop = document.querySelector("#gameBackdrop");
const ctx = gameBackdrop.getContext("2d");
const gameBackdropWidth = gameBackdrop.width; // this is what we assigned in the
const gameBackdropHeight = gameBackdrop.height; // html file for our canvas
const gameBackdropColor = "black";

const cubeColor = "yellow";
const cubeBorder = "white";
const cubeSize = 40;

let running = false;
let xVelocity = cubeSize; // how fast we move (40px) to the right on a tick
let yVelocity = cubeSize;
let cubeX;
let cubeY;

let score = 0;

// an array of object, each object is a cube of a piece
// each has their own x and y coordinates
let cube = [
    {x: cubeSize * 4, y: 0},
    {x: cubeSize * 3, y: 0},
    {x: cubeSize * 2, y: 0},
    {x: cubeSize, y: 0},
    {x: 0, y: 0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
createCube();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createCube(){
    function randomCube(min, max){
        const randomNum = Math.round((Math.random() * (max - min) + min) / cubeSize) * cubeSize;
        return randomNum;
    }

    cubeX = randomCube(0, gameBackdropWidth - cubeSize);
    console.log(cubeX);
};
function drawCube(){};
function moveCube(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};