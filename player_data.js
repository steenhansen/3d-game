/*

 16384 left + 16384 right = 32768

      0      512      1024    512     2048                       
      min   hidden    view   hidden    max
*/


//let the_player = { x: 65536 - 100, y: 1024 };   // MsPacman

//let the_player = { x: 12750, y: 1024 };       //  BLUE

//let the_player = { x: 12749, y: 1024 };       // blue fixed



let the_player = { x: 38249, y: 1024 };       // red bug missing
//let the_player = { x: 38250, y: 1024 };       // red bug SHOWS

//let the_player = { x: 12750, y: 1024 };       // BLUE bug missing
//let the_player = { x: 12751, y: 1024 };       // BLUE bug SHOWS


// //let SCENE_MIDDLE_X = 16384;
// let SCENE_MIDDLE_X = 65536;  //32768;
// let SCENE_WIDTH = 32768;  //32768;
// let SCENE_X_MIN = SCENE_MIDDLE_X - SCENE_WIDTH / 2;
// let SCENE_X_MAX = SCENE_MIDDLE_X + SCENE_WIDTH / 2;


let COLUMN_TO_LEFT = 'COLUMN_TO_LEFT';
let COLUMN_TO_RIGHT = 'COLUMN_TO_RIGHT';
let COLUMN_IN_MIDDLE = 'COLUMN_IN_MIDDLE';
let COLUMN_HIDDEN = 'COLUMN_HIDDEN';