//// TODO: When checking matches, if 1 cube is false, 'continue', no need to check the other cubes of that row

//// game board dimensions, arrow key codes, and individual cube size
//const game_backdrop = document.querySelector("#gameBackdrop");
//const ctx = gameBackdrop.getContext("2d");
//const game_width = gameBackdrop.width; // this is what we assigned in the
//const game_height = gameBackdrop.height; // html file for our canvas
////const scoreText = document.querySelector("#scoreDiv");
//const cube_size = game_height /  game_width * 20;
//const LEFT = 37;
//const UP = 38;
//const RIGHT = 39;
//const DOWN = 40;
//
//const game_board_columns = game_width / cube_size;
//const game_board_rows = game_height / cube_size;
//let cube_number = 1;
//// set all active and color properties to defaults for a fresh game
//
//let game_board_array = [...Array(game_board_rows)].map(e => {
//    let arr = [];
//    for(let i = 0; i < 10; i++){
//        arr.push({active: false, x: 0, y: 0, index: cube_number++, fill_color: color_black,outline_color: color_light_gray });
//    }
//    return arr;
//});
//
//let x_offset = 0;
//let y_offset = 0;
//
//game_board_array.forEach(cube_array => {
//    cube_array.forEach(cube => {
//        cube.x = x_offset * cube_size;
//        cube.y = y_offset * cube_size;
//        x_offset++;
//    });
//    y_offset++;
//    x_offset = 0;
//});
//
//let running = false;
//let game_speed = 400;
////let score = 0;
//
//const i_piece = {
//    cubes: [
//        {x: cube_size * 4, y: 0},
//        {x: cube_size * 4, y: cube_size},
//        {x: cube_size * 4, y: cube_size * 2},
//        {x: cube_size * 4, y: cube_size * 3}
//    ],
//    fill_color: color_dark_blue,
//    outline_color: color_light_blue
//};
//
//const j_piece = {
//    cubes: [
//        {x: cube_size * 5, y: 0},
//        {x: cube_size * 5, y: cube_size},
//        {x: cube_size * 5, y: cube_size * 2},
//        {x: cube_size * 4, y: cube_size * 2}
//    ],
//    fill_color: color_dark_yellow,
//    outline_color: color_light_yellow
//};
//
//const l_piece = {
//    cubes: [
//        {x: cube_size * 5, y: 0},
//        {x: cube_size * 5, y: cube_size},
//        {x: cube_size * 5, y: cube_size * 2},
//        {x: cube_size * 6, y: cube_size * 2}
//    ],
//    fill_color: color_dark_green,
//    outline_color: color_light_green
//};
//
//const o_piece = {
//    cubes: [
//        {x: cube_size * 4, y: 0},
//        {x: cube_size * 4, y: cube_size},
//        {x: cube_size * 5, y: 0},
//        {x: cube_size * 5, y: cube_size}
//    ],
//    fill_color: color_dark_pink,
//    outline_color: color_light_pink
//};
//
//const s_piece = {
//    cubes: [
//        {x: cube_size * 5, y: 0},
//        {x: cube_size * 4, y: cube_size},
//        {x: cube_size * 6, y: 0},
//        {x: cube_size * 5, y: cube_size}
//    ],
//    fill_color: color_dark_orange,
//    outline_color: color_light_orange
//};
//
//const z_piece = {
//    cubes: [
//        {x: cube_size * 4, y: 0},
//        {x: cube_size * 5, y: cube_size},
//        {x: cube_size * 5, y: 0},
//        {x: cube_size * 6, y: cube_size}
//    ],
//    fill_color: color_dark_red,
//    outline_color: color_light_red
//};
//
//const t_piece = {
//    cubes: [
//        {x: cube_size * 4, y: 0},
//        {x: cube_size * 5, y: 0},
//        {x: cube_size * 6, y: 0},
//        {x: cube_size * 5, y: cube_size}
//    ],
//    fill_color: color_dark_purple,
//    outline_color: color_light_purple
//};
//
//let tetris_piece; // used to hold the current piece
//let tetris_pieces = [i_piece, j_piece, l_piece, o_piece, s_piece, z_piece, t_piece];
//
//window.addEventListener("keydown", change_direction);
////resetBtn.addEventListener("click", resetGame);
//
//gameStart();
//
//function gameStart(){
//    running = true;
//    tetris_piece = getRandomTetrisPiece(tetris_pieces);
////    scoreText.textContent = score;
//    nextTick();
//};
//
//function getRandomTetrisPiece(pieces) {
//    let random_index = Math.floor(Math.random() * 7);
//    const new_piece = JSON.parse(JSON.stringify(pieces[random_index]));
//    return new_piece;
//}
//
//function nextTick(){
//    if(running){
//        setTimeout(()=>{
//            draw_current_board(game_board_array);
//            draw_tetris_piece(tetris_piece);
//            move_tetris_piece_down(tetris_piece);
//            check_matches(game_board_array);
////            checkGameOver();
//            nextTick();
//        }, game_speed);
//    }
//    else {
//        displayGameOver();
//    }
//};
//function draw_current_board(game_board_array){
//    game_board_array.forEach(row => {
//        row.forEach(cube => {
//            ctx.fillStyle = cube.fill_color;
//            ctx.strokeStyle = cube.outline_color;
//            ctx.fillRect(cube.x, cube.y, cube_size, cube_size);
//            ctx.strokeRect(cube.x, cube.y, cube_size, cube_size);
//        });
//    });
//};
//function draw_tetris_piece(piece){
//    draw_current_board(game_board_array);
//    ctx.fillStyle = piece.fill_color;
//    ctx.strokeStyle = piece.outline_color;
//    for(let i = 0; i < piece.cubes.length; i++){
//        ctx.fillRect(piece.cubes[i].x, piece.cubes[i].y, cube_size, cube_size);
//        ctx.strokeRect(piece.cubes[i].x, piece.cubes[i].y, cube_size, cube_size);
//    }
//};
//function stick_tetris_piece(piece){
//    game_board_array.forEach(row => {
//        row.forEach(cube => {
//            for(let i = 0; i < piece.cubes.length; i++){
//                if(cube.x == piece.cubes[i].x && cube.y == piece.cubes[i].y){
//                    cube.active = true;
//                    cube.fill_color = piece.fill_color;
//                    cube.outline_color = piece.outline_color;
//                }
//            }
//        });
//    });
//};
//function move_tetris_piece_down(piece){
//    for(let i = 0; i < piece.cubes.length; i++){
//        if(piece.cubes[i].y >= game_height - cube_size){
//            tetris_piece = getRandomTetrisPiece(tetris_pieces);
//            stick_tetris_piece(piece);
//            return;
//        }
//////        game_board_array.forEach(row=>{
//////            row.forEach(cube=>{
//////                if(cube.active){
//////                    if(cube.y == piece.cubes[i].y && cube.x == piece.cubes[i].x){
//////                        tetris_piece = getRandomTetrisPiece(tetris_pieces);
//////                        stick_tetris_piece(piece);
//////                        return;
//////                    }
//////                }
//////            });
//////        });
////    }
//
//
//    for(let i = 0; i < piece.cubes.length; i++){
//        piece.cubes[i].y += cube_size;
//    }
//};
//function change_direction(event){
//    const keyPressed = event.keyCode;
//
//    setTimeout(()=>{
////        clear board where current piece is, and redraw it on a new place
//        switch(true){
//            // TODO: if both keys are pressed move left + down
//            case(keyPressed == LEFT):
//                // TODO: collision detection, cannot move left through active cubes
//                collisionDetection(tetris_piece.cubes, "left");
//                move_left(tetris_piece.cubes);
//                draw_tetris_piece(tetris_piece);
//                break;
//            case(keyPressed == RIGHT):
//                // TODO: collision detection, cannot move right through active cubes
//                collisionDetection(tetris_piece.cubes, "right")
//                move_right(tetris_piece.cubes);
//                draw_tetris_piece(tetris_piece);
//                break;
//            case(keyPressed == DOWN):
//                collisionDetection(tetris_piece.cubes, "down")
//                move_tetris_piece_down(tetris_piece);
//                draw_tetris_piece(tetris_piece);
//                break;
//        }
//    }, 100);
//
//};
//// TODO: matches should only be checked, when the tetris piece is no longer moving, so that random rows dont get zapped while the player is still playing
//function check_matches(game_board_array){
//    let rows_to_delete = [];
//    for(let i = 0; i < game_board_array.length; i++){
//        let all_cubes_active = false;
//        for(let j = 0; j < game_board_array[i].length; j++){
//            // looking at each cube, in a specific row
//            if(game_board_array[i][j].active){
//                all_cubes_active = true;
//            }
//            else{
//                all_cubes_active = false;
//                break;
//            }
//        }
//        //save index if true
//        if(all_cubes_active){
//            rows_to_delete.push(i);
//        }
//    }
//
//    for(let i = 0; i < rows_to_delete.length; i++){
//        game_board_array.splice(rows_to_delete[rows_to_delete.length - i - 1], 1);
//    }
//
//    for(let i = 0; i < rows_to_delete.length; i++){
//        let arr = [];
//
//        for(let i = 0; i < 10; i++){
//            arr.push({active: false, x: 0, y: 0, index: cube_number++, fill_color: color_black,outline_color: color_light_gray });
//        }
//
//        game_board_array.unshift(arr);
//    }
//
//    if(rows_to_delete){
//        let x_offset = 0;
//        let y_offset = 0;
//
//        game_board_array.forEach(cube_array => {
//            cube_array.forEach(cube => {
//                cube.x = x_offset * cube_size;
//                cube.y = y_offset * cube_size;
//                x_offset++;
//            });
//            y_offset++;
//            x_offset = 0;
//        });
//    }
//};
//////function checkGameOver(){};
//////function displayGameOver(){};
//////function resetGame(){};
//////
//function move_left(piece){
//    for (let cube of piece) {
//        if(cube.x == 0) return;
//    }
//
//    for (let cube of piece) {
//        cube.x -= cube_size;
//    }
//};
//function move_right(piece){
//    for (let cube of piece) {
//        if(cube.x == game_width - cube_size) return;
//    }
//
//    for (let cube of piece) {
//        cube.x += cube_size;
//    }
//};
//function collisionDetection(piece, direction){
//    switch(direction){
//        // TODO: check collision for moving left
//        case "left":
//            console.log("left");
////             TO THE LEFT OF THE CURRENT CUBE, IS THE CUBE ACTIVE?
////            for(let i = 0; i < piece.cubes.length; i++){
////                if(piece.cubes[i].y >= game_height - cube_size){
////                    tetris_piece = getRandomTetrisPiece(tetris_pieces);
////                    stick_tetris_piece(piece);
////                    return;
////                }
////            }
////
////             IF IT IS ACTIVE, DON'T GO LEFT, AND BREAK
//
////             IF IT IS NOT ACTIVE, YOU CAN GO RIGHT
//
//            break;
//        // TODO: check collision for moving right
//        case "right":
//            console.log("right");
//            break;
//        // TODO: check collision for moving down
//        case "down":
//            console.log("down");
//            break;
//    }
//};