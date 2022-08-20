const gameBackdrop = document.querySelector("#gameBackdrop");
const ctx = gameBackdrop.getContext("2d");
const gameBackdropWidth = gameBackdrop.width; // this is what we assigned in the
const gameBackdropHeight = gameBackdrop.height; // html file for our canvas
const scoreText = document.querySelector("#scoreDiv");
const cubeSize = 40;
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

let running = false;
let xVelocity = 0; // how fast we move (40px) to the right on a tick
let yVelocity = cubeSize;
let cubeX;
let cubeY;
let gameSpeed = 500;
let score = 0;
let currentPiece;

// an array of objects, each object is a cube of a piece, each has their own x and y coordinates
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

const greyDark = "#0d0d0d";

let tetrisPieces = [
    {cubes: i_piece, fillColor: "#003366", lineColor: "#00e6e6"},
    {cubes: j_piece, fillColor: "#b38f00", lineColor: "#ffff00"},
    {cubes: l_piece, fillColor: "#226600", lineColor: "#66ff33"},
    {cubes: o_piece, fillColor: "#b30059", lineColor: "#ff99ff"},
    {cubes: s_piece, fillColor: "#993d00", lineColor: "#ff751a"},
    {cubes: t_piece, fillColor: "#660000", lineColor: "#ff0000"},
    {cubes: z_piece, fillColor: "#39004d", lineColor: "#ac00e6"}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    currentPiece = getRandomTetrisPiece(tetrisPieces);
    console.log(currentPiece);
    // generate a random tetris piece to place
//    createCube();
//    drawCube();
    nextTick();
};

function getRandomTetrisPiece(pieces) {
    let randomIndex = Math.floor(Math.random() * 7);
    return pieces[randomIndex];
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();

            drawTetrisPiece(currentPiece.cubes, currentPiece.fillColor, currentPiece.lineColor);
            moveTetrisPiece(currentPiece.cubes);

            checkGameOver();
            nextTick();
        }, gameSpeed);
    }
    else {
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = greyDark;
    ctx.fillRect(0, 0, gameBackdropWidth, gameBackdropHeight);
};

function moveTetrisPiece(piece){
    for(let cube of piece){
        cube.y = cube.y + yVelocity;
    }
};
function drawTetrisPiece(piece, darkColor, lightColor){
    ctx.fillStyle = darkColor;
    ctx.strokeStyle = lightColor; // for border our tetris piece is an array of objects
    piece.forEach((tetrisPieceCube)=>{
        ctx.fillRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
        ctx.strokeRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;

    switch(true){
        case(keyPressed == LEFT):
            moveLeft(currentPiece.cubes);
            break;
        case(keyPressed == RIGHT):
            moveRight(currentPiece.cubes);
            break;
    }
};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};

function moveLeft(piece){
    for (let cube of piece) {
        if(cube.x == 0) return;
    }

    for (let cube of piece) {
        cube.x -= cubeSize;
    }
}

function moveRight(piece){
    for (let cube of piece) {
        if(cube.x == gameBackdropWidth - cubeSize) return;
    }

    for (let cube of piece) {
        cube.x += cubeSize;
    }
}