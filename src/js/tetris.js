// todo: refactor with camelCase
import {ROWS, COLS, CUBE_SIZE, GAME_BACKGROUND, CONTEXT, GAME_WIDTH, GAME_HEIGHT, SCORE_TEXT} from './constants.js';
import {UP, DOWN, LEFT, RIGHT, SPACE_BAR} from './controls.js';
import {COLORS} from "./colors.js";
import {TetrisPiece} from './tetris_piece.js'; // I J L O S Z T

let running = false;
let game_speed = 1000;
let score = 0;
let tetrisPiece; // used to hold the current piece
let orientation;
let index = 0;

let game_board = [...Array(ROWS)].map(e => {
    let arr = [];
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

window.addEventListener("keydown", processKeyPress);
gameStart();

//function tetris(){
//    let piece_I = new TetrisPiece('I');
//    let piece_J = new TetrisPiece('J');
//    let piece_L = new TetrisPiece('L');
//    let piece_O = new TetrisPiece('O');
//    let piece_S = new TetrisPiece('S');
//    let piece_Z = new TetrisPiece('Z');
//    let piece_T = new TetrisPiece('T');
//}

function gameStart(){
    running = true;
    tetrisPiece = new TetrisPiece('J');
    orientation = 'original';
    next_tick();
};

function next_tick(){
    if(running){
        setTimeout(()=>{
            draw_current_board(game_board);
//            draw_current_board(game_board_array);
            draw_tetris_piece(tetrisPiece, orientation);
//            move_tetris_piece_down(tetris_piece);
//            check_matches(game_board_array);
            next_tick();
        }, game_speed);
    }
//    else {
//        displayGameOver();
//    }
};

function draw_tetris_piece(tetrisPiece, orientation){
    let piece =  tetrisPiece.orientation[orientation];
    CONTEXT.fillStyle = tetrisPiece.fill_color;
    CONTEXT.strokeStyle = tetrisPiece.outline_color;

    piece.forEach(cube => {
        let x = (cube % 10) * CUBE_SIZE;
        let y = (Math.floor(cube/10)) * CUBE_SIZE;

        game_board.forEach(row => {
            row.forEach(column => {
                if (cube == column.index) {
                    CONTEXT.fillRect(x, y, CUBE_SIZE, CUBE_SIZE);
                    CONTEXT.strokeRect(x, y, CUBE_SIZE, CUBE_SIZE);
                }
            });
        });
    });
}

function draw_current_board(game_board){
    let x = 0;
    let y = 0;
    game_board.forEach(row => {
        row.forEach(column => {
            CONTEXT.fillStyle = column.fill_color;
            CONTEXT.strokeStyle = column.outline_color;
            CONTEXT.fillRect(x, y, CUBE_SIZE, CUBE_SIZE);
            CONTEXT.strokeRect(x, y, CUBE_SIZE, CUBE_SIZE);
            x+=CUBE_SIZE;
        });
        y+=CUBE_SIZE;
        x=0;
    });
};
function rotatePiece(){
    switch(orientation){
        case "original":
            orientation = "right";
            break;
        case "right":
            orientation = "inverse";
            break;
        case "inverse":
            orientation = "left";
            break;
        default:
            orientation = "original";
    }
};
function movePieceRight(tetrisPiece){
    // get the orientation
    console.log(tetrisPiece);
};
function processKeyPress(event){
    const keyPressed = event.keyCode;

    setTimeout(()=>{
//        clear board where current piece is, and redraw it on a new place
        switch(true){
            // TODO: if both keys are pressed move left + down
            case(keyPressed == UP):
                rotatePiece();
                draw_current_board(game_board);
                draw_tetris_piece(tetrisPiece, orientation);
                break;
            case(keyPressed == RIGHT):
                console.log("RIGHT was pressed");
                movePieceRight(tetrisPiece);
//                // TODO: collision detection, cannot move right through active cubes
//                collisionDetection(tetris_piece.cubes, "right")
//                move_right(tetris_piece.cubes);
//                draw_tetris_piece(tetris_piece);
                break;
            case(keyPressed == DOWN):
                console.log("DOWN was pressed");
//                collisionDetection(tetris_piece.cubes, "down")
//                move_tetris_piece_down(tetris_piece);
//                draw_tetris_piece(tetris_piece);
                break;
            case(keyPressed == LEFT):
                console.log("LEFT was pressed");
            //                collisionDetection(tetris_piece.cubes, "down")
            //                move_tetris_piece_down(tetris_piece);
            //                draw_tetris_piece(tetris_piece);
                break;
            case(keyPressed == SPACE_BAR):
                console.log("SPACE was pressed");
            //                collisionDetection(tetris_piece.cubes, "down")
            //                move_tetris_piece_down(tetris_piece);
            //                draw_tetris_piece(tetris_piece);
                break;
        }
    }, 100);

};