// Colors saved in variables for easy manipulation
const color_light_gray = "#1a1a1a";
const color_dark_gray = "#0d0d0d";
const color_black = "#000000";
const color_dark_blue = "#003366";
const color_light_blue = "#00e6e6";
const color_dark_yellow = "#b38f00";
const color_light_yellow = "#ffff00";
const color_dark_green = "#226600";
const color_light_green = "#66ff33";
const color_dark_pink = "#b30059";
const color_light_pink = "#ff99ff";
const color_dark_orange = "#993d00";
const color_light_orange = "#ff751a";
const color_dark_red = "#660000";
const color_light_red = "#ff0000";
const color_dark_purple = "#39004d";
const color_light_purple = "#ac00e6";

// game board dimensions, arrow key codes, and individual cube size
const game_backdrop = document.querySelector("#gameBackdrop");
const ctx = gameBackdrop.getContext("2d");
const game_width = gameBackdrop.width; // this is what we assigned in the
const game_height = gameBackdrop.height; // html file for our canvas
//const scoreText = document.querySelector("#scoreDiv");
const cube_size = game_height /  game_width * 20;
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const game_board_columns = game_width / cube_size;
const game_board_rows = game_height / cube_size;
let cube_number = 1;
// set all active and color properties to defaults for a fresh game

game_board_array = [...Array(game_board_rows)].map(e => {
    let arr = [];
    for(let i = 0; i < 10; i++){
        arr.push({active: false, x: 0, y: 0, index: cube_number++, fill_color: color_black,outline_color: color_light_gray });
    }
    return arr;
});

let x_offset = 0;
let y_offset = 0;

game_board_array.forEach(cube_array => {
    cube_array.forEach(cube => {
        cube.x = x_offset * cube_size;
        console.log();
        cube.y = y_offset * cube_size;
        x_offset++;
    });
    y_offset++;
    x_offset = 0;
});

//
let running = false;
//let xVelocity = 0; // how fast we move (40px) to the right on a tick
let y_velocity = cube_size;
//let cubeX;
//let cubeY;
let game_speed = 1000;
//let score = 0;
//let currentPiece;
//
//// an array of objects, each object is a cube of a piece, each has their own x and y coordinates
////  TODO: j and s freakout
const i_piece = {
    cubes: [
        {x: cube_size * 4, y: 0},
        {x: cube_size * 4, y: cube_size},
        {x: cube_size * 4, y: cube_size * 2},
        {x: cube_size * 4, y: cube_size * 3}
    ],
    fill_color: color_dark_blue,
    outline_color: color_light_blue
};
let tetris_piece = i_piece;
//const i_piece = [
//    {x: cubeSize * 4, y: cubeSize * 3},
//    {x: cubeSize * 4, y: cubeSize * 2},
//    {x: cubeSize * 4, y: cubeSize},
//    {x: cubeSize * 4, y: 0}
//];
//const j_piece = [
//    {x: cubeSize * 4, y: cubeSize * 2},
//    {x: cubeSize * 5, y: cubeSize * 2},
//    {x: cubeSize * 5, y: cubeSize},
//    {x: cubeSize * 5, y: 0}
//];
//const l_piece = [
//    {x: cubeSize * 4, y: 0},
//    {x: cubeSize * 4, y: cubeSize},
//    {x: cubeSize * 4, y: cubeSize * 2},
//    {x: cubeSize * 5, y: cubeSize * 2}
//];
//const o_piece = [
//  {x: cubeSize * 5, y: cubeSize},
//  {x: cubeSize * 5, y: 0},
//  {x: cubeSize * 4, y: cubeSize},
//  {x: cubeSize * 4, y: 0}
//];
//const s_piece = [
//    {x: cubeSize * 5, y: 0},
//    {x: cubeSize * 4, y: 0},
//    {x: cubeSize * 4, y: cubeSize},
//    {x: cubeSize * 3, y: cubeSize}
//];
//const z_piece = [
//    {x: cubeSize * 5, y: cubeSize},
//    {x: cubeSize * 4, y: cubeSize},
//    {x: cubeSize * 4, y: 0},
//    {x: cubeSize * 3, y: 0}
//];
//const t_piece = [
//    {x: cubeSize * 5, y: 0},
//    {x: cubeSize * 4, y: 0},
//    {x: cubeSize * 3, y: 0},
//    {x: cubeSize * 4, y: cubeSize}
//];
//


//
//let tetrisPieces = [
//    {cubes: i_piece, fillColor: "#003366", lineColor: "#00e6e6"},
//    {cubes: j_piece, fillColor: "#b38f00", lineColor: "#ffff00"},
//    {cubes: l_piece, fillColor: "#226600", lineColor: "#66ff33"},
//    {cubes: o_piece, fillColor: "#b30059", lineColor: "#ff99ff"},
//    {cubes: s_piece, fillColor: "#993d00", lineColor: "#ff751a"},
//    {cubes: t_piece, fillColor: "#660000", lineColor: "#ff0000"},
//    {cubes: z_piece, fillColor: "#39004d", lineColor: "#ac00e6"}
//];
//
window.addEventListener("keydown", change_direction);
//resetBtn.addEventListener("click", resetGame);
//
gameStart();
//
function gameStart(){
    running = true;
//    scoreText.textContent = score;
//    currentPiece = getRandomTetrisPiece(tetrisPieces);
    nextTick();
};
////
////function getRandomTetrisPiece(pieces) {
////    let randomIndex = Math.floor(Math.random() * 7);
//////    TODO: make a copy of and make sure not to manipulate const cubes, the x and y should not change
////    var newPiece = pieces[randomIndex];
////    return newPiece;
////}
////
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard(game_board_array);
//            clear_tetris_piece(tetris_piece);
            draw_tetris_piece(tetris_piece);
            move_tetris_piece_down(tetris_piece);
//            TODO: add functionality taht moves piece down y axis
//            drawTetrisPiece(currentPiece.cubes, currentPiece.fillColor, currentPiece.lineColor);
//            moveTetrisPiece(currentPiece.cubes);
//            if(collisionDetection(currentPiece.cubes)){
//                currentPiece = getRandomTetrisPiece(tetrisPieces);
//            }
//            checkGameOver();
            nextTick();
        }, game_speed);
    }
    else {
        displayGameOver();
    }
};

//
function clearBoard(game_board_array){
    game_board_array.forEach(row => {
        row.forEach(cube => {
            ctx.fillStyle = cube.fill_color;
            ctx.fillRect(cube.x, cube.y, cube_size, cube_size);
            ctx.strokeStyle = cube.outline_color;
            ctx.strokeRect(cube.x, cube.y, cube_size, cube_size);
        });
    });
};
function draw_tetris_piece(piece){
//    clear_tetris_piece(piece);
    clearBoard(game_board_array);
    ctx.fillStyle = piece.fill_color;
    ctx.strokeStyle = piece.outline_color;
    for(let i = 0; i < piece.cubes.length; i++){
        ctx.fillRect(piece.cubes[i].x, piece.cubes[i].y, cube_size, cube_size);
        ctx.strokeRect(piece.cubes[i].x, piece.cubes[i].y, cube_size, cube_size);
    }
};

function move_tetris_piece_down(piece){
    for(let i = 0; i < piece.cubes.length; i++){
        piece.cubes[i].y += cube_size;
    }
};

////
////function moveTetrisPiece(piece){
////    for(let cube of piece){
////        cube.y = cube.y + yVelocity;
////    }
////};
////function drawTetrisPiece(piece, darkColor, lightColor){
////    ctx.fillStyle = darkColor;
////    ctx.strokeStyle = lightColor; // for border our tetris piece is an array of objects
////    piece.forEach((tetrisPieceCube)=>{
////        ctx.fillRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
////        ctx.strokeRect(tetrisPieceCube.x, tetrisPieceCube.y, cubeSize, cubeSize);
////    })
////};
function change_direction(event){
    const keyPressed = event.keyCode;

    setTimeout(()=>{
//        clear board where current piece is, and redraw it on a new place
        switch(true){

            case(keyPressed == LEFT):
                move_left(tetris_piece.cubes);
                draw_tetris_piece(tetris_piece);
                break;
            case(keyPressed == RIGHT):
                move_right(tetris_piece.cubes);
                draw_tetris_piece(tetris_piece);
                break;
        }
    }, 100);

};
////function checkGameOver(){};
////function displayGameOver(){};
////function resetGame(){};
////
function move_left(piece){
    for (let cube of piece) {
        if(cube.x == 0) return;
    }

    for (let cube of piece) {
        cube.x -= cube_size;
    }
}

function move_right(piece){
    for (let cube of piece) {
        if(cube.x == game_width - cube_size) return;
    }

    for (let cube of piece) {
        cube.x += cube_size;
    }
}

////function collisionDetection(piece){
////    for (let cube of piece){
////        if(cube.y >= gameBackdropHeight){
////            //TODO: reset the currentPiece
////            return true;
////        }
////    }
////    return false;
////}