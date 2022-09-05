import {ROWS, COLS, CUBE_SIZE, GAME_BACKGROUND, CONTEXT, GAME_WIDTH, GAME_HEIGHT, SCORE_TEXT} from './constants.js';
import {UP, DOWN, LEFT, RIGHT, SPACE_BAR} from './controls.js';
import {COLORS} from "./colors.js";
import {TetrisPiece} from './tetris_piece.js'; // I J L O S Z T

let running = false;
let game_speed = 1000;
let score = 0;
let tetris_piece; // used to hold the current piece

let game_board = [...Array(ROWS)].map(e => {
    let arr = [];
    let index = 0;
    for(let i = 0; i < COLS; i++){
        arr.push({
            index: index++,
            occupied: false,
            fill_color: COLORS.black,
            outline_color: COLORS.gray_light
        });
    }
    return arr;
});

//gameStart();

function gameStart(){
    running = true;
    tetris_piece = new TetrisPiece('I');
    console.log(tetris_piece);
    nextTick();
};

function nextTick(){
    if(running){
        setTimeout(()=>{
            draw_current_board(game_board);
//            draw_current_board(game_board_array);
//            draw_tetris_piece(tetris_piece);
//            move_tetris_piece_down(tetris_piece);
//            check_matches(game_board_array);
            nextTick();
        }, game_speed);
    }
//    else {
//        displayGameOver();
//    }
};

function draw_current_board(game_board){
    console.log(game_board);
//    game_board_array.forEach(row => {
//        row.forEach(cube => {
//            ctx.fillStyle = cube.fill_color;
//            ctx.strokeStyle = cube.outline_color;
//            ctx.fillRect(cube.x, cube.y, cube_size, cube_size);
//            ctx.strokeRect(cube.x, cube.y, cube_size, cube_size);
//        });
//    });
};

//function tetris(){
//    let piece_I = new TetrisPiece('I');
//    let piece_J = new TetrisPiece('J');
//    let piece_L = new TetrisPiece('L');
//    let piece_O = new TetrisPiece('O');
//    let piece_S = new TetrisPiece('S');
//    let piece_Z = new TetrisPiece('Z');
//    let piece_T = new TetrisPiece('T');
//}