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

let running = false;
let game_speed = 1000;
//let score = 0;

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

const j_piece = {
    cubes: [
        {x: cube_size * 5, y: 0},
        {x: cube_size * 5, y: cube_size},
        {x: cube_size * 5, y: cube_size * 2},
        {x: cube_size * 4, y: cube_size * 2}
    ],
    fill_color: color_dark_yellow,
    outline_color: color_light_yellow
};

const l_piece = {
    cubes: [
        {x: cube_size * 5, y: 0},
        {x: cube_size * 5, y: cube_size},
        {x: cube_size * 5, y: cube_size * 2},
        {x: cube_size * 6, y: cube_size * 2}
    ],
    fill_color: color_dark_green,
    outline_color: color_light_green
};

const o_piece = {
    cubes: [
        {x: cube_size * 4, y: 0},
        {x: cube_size * 4, y: cube_size},
        {x: cube_size * 5, y: 0},
        {x: cube_size * 5, y: cube_size}
    ],
    fill_color: color_dark_pink,
    outline_color: color_light_pink
};

const s_piece = {
    cubes: [
        {x: cube_size * 5, y: 0},
        {x: cube_size * 4, y: cube_size},
        {x: cube_size * 6, y: 0},
        {x: cube_size * 5, y: cube_size}
    ],
    fill_color: color_dark_orange,
    outline_color: color_light_orange
};

const z_piece = {
    cubes: [
        {x: cube_size * 4, y: 0},
        {x: cube_size * 5, y: cube_size},
        {x: cube_size * 5, y: 0},
        {x: cube_size * 6, y: cube_size}
    ],
    fill_color: color_dark_red,
    outline_color: color_light_red
};

const t_piece = {
    cubes: [
        {x: cube_size * 4, y: 0},
        {x: cube_size * 5, y: 0},
        {x: cube_size * 6, y: 0},
        {x: cube_size * 5, y: cube_size}
    ],
    fill_color: color_dark_purple,
    outline_color: color_light_purple
};

let tetris_piece; // used to hold the current piece
let tetris_pieces = [i_piece, j_piece, l_piece, o_piece, s_piece, z_piece, t_piece];

window.addEventListener("keydown", change_direction);
//resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running = true;
    tetris_piece = getRandomTetrisPiece(tetris_pieces);
//    scoreText.textContent = score;
    nextTick();
};

function getRandomTetrisPiece(pieces) {
    let random_index = Math.floor(Math.random() * 7);
    const new_piece = JSON.parse(JSON.stringify(pieces[random_index]));
    return new_piece;
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard(game_board_array);
            draw_tetris_piece(tetris_piece);

            move_tetris_piece_down(tetris_piece);
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
//    TODO: only move down if we are not at the bottom of the board
    for(let i = 0; i < piece.cubes.length; i++){
        if(piece.cubes[i].y >= game_height - cube_size){
        tetris_piece = getRandomTetrisPiece(tetris_pieces);
            return;
        }
    }

    for(let i = 0; i < piece.cubes.length; i++){
        piece.cubes[i].y += cube_size;
    }
};

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