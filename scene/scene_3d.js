function match_landing_to_checkerboard() {
  travel_speed = TRAVEL_SPEED;
  for (i = 0; i < 15; i++) {
    //fieldRight(travel_speed);
  }
}

const MOVING_NOT = 0;

const MOVING_BACKWARDS = 1;
const MOVING_RIGHT = 2;
const MOVING_FORWARD = 3;
const MOVING_LEFT = 4;
const MOVING_STOP = 5;


let sprite_half_x = 128;
const area_width_half = 16 * 1048;               //16768

let player_x = area_width_half;

//let player_x = area_width_half - 256;






let player_y = 512; //+ 512;           // 512+512=1048
var the_key = MOVING_NOT;

const numDrawings = 90;


const area_width = 2 * area_width_half;          // 33536
const viewport_middle_x = area_width_half - 512; // 16256

const area_height_half = 512;
const area_height = 1024;
const viewport_middle_y = 512;


//let x_shift_list = new Float32Array(256);  // slower
let x_shift_list = Array(256).fill(0);


//let overflow_accums = new Float32Array(256);  // slower
let overflow_accums = [];


//////////////////////
let number_lines = start_stop_flip.length;
let closest_width_index = number_lines - 1;





let right_stop;
let left_stop;



let keep_running = true;
let num_lines = number_lines;
let y_flip_count = 4;
let dist_count = 0;
let spin_count = 0;
let slow_count = 0;

let closest_depth_index = y_invert_lines.length - 1;
let LAST_SPIN_INDEX = 255;





let wait_sprite = 0;
let sprite_offset = 0;
let sprite_width = 256;

let sprite_parallaxed_x;
let viewport_x;






// +510 is on centerline
// +404 is in square DOES NOT WORK

// disappears
// at y=1048, left    
//      -243px       area_width_half - 694
//      +1011px      area_width_half + 692

// at y=512 
//    -144px     area_width_half - 4108
//    +912px     area_width_half + 4090;


disappear_left = area_width_half - 4108;  // so 256px wide leaves visual at -243px

turnOnKeys();











function sceneRight(travel_speed) {
  playerRight(travel_speed);
  fieldRight(travel_speed);
  moveSky(travel_speed, 'right');
}

function sceneLeft(travel_speed) {
  playerLeft(travel_speed);
  fieldLeft(travel_speed);
  moveSky(travel_speed, 'left');
}

function sceneForward(travel_speed) {
  playerForward(travel_speed);
  fieldForwards(travel_speed);
  moveSky(travel_speed, 'forward');
}

function sceneBackward(travel_speed) {
  playerBackward(travel_speed);
  fieldBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
}

function sceneStop() {
  moveSky('stop');
}

function sceneMove() {
  travel_speed = TRAVEL_SPEED;
  if (g_move_direction == MOVINGx_NW) {
    sceneLeft(travel_speed);
    sceneBackward(travel_speed);
  } else if (g_move_direction == MOVINGx_N) {
    sceneBackward(travel_speed);
  } else if (g_move_direction == MOVINGx_NE) {
    sceneRight(travel_speed);
    sceneBackward(travel_speed);
  } else if (g_move_direction == MOVINGx_E) {
    sceneRight(travel_speed);
  } else if (g_move_direction == MOVINGx_SE) {
    sceneRight(travel_speed);
    sceneForward(travel_speed);
  } else if (g_move_direction == MOVINGx_S) {
    sceneForward(travel_speed);
  } else if (g_move_direction == MOVINGx_SW) {
    sceneForward(travel_speed);
    sceneLeft(travel_speed);
  } else if (g_move_direction == MOVINGx_W) {
    sceneLeft(travel_speed);
  } else {
    // console.log("no input is go right");
  }
}

function setColumns() {
  //  if (g_move_direction != MOVING_NOT || DRAW_AT_LEAST_ONCE) {
  columnSet(column_point_0, 'the_columns_0');
  columnSet(column_point_1, 'the_columns_1');
  //  DRAW_AT_LEAST_ONCE = false;
  //}
}

function checkCollisions() {
  collision_2 = hasCollided(column_point_0, g_player, COLLISION_SIZES);
  if (collision_2 && g_move_continue == 0) {
    g_move_continue = 24;
    new_direction = objectBounced(g_move_direction);
    g_move_direction = new_direction;
  }
}

function doBounce() {
  if (g_move_continue > 1) {
    g_move_continue--;
  } else if (g_move_continue == 1) {
    g_move_continue--;
    g_move_direction = MOVINGx_NOT;
  } else {
  }
}

function animateScene(timestamp) {





  /////////////

  // let playing_game = document.getElementById('playing-game');

  // let a_var = getComputedStyle(playing_game).getPropertyValue("--a-var");
  // console.log("before_ 34089 aver", a_var);


  // document_style.setProperty("--a-var", "kap");

  //////////////////////

  doBounce();
  sceneMove();
  setColumns();
  checkCollisions();

  //if (!the_missile_1.m_expired) {
  missileSet('missile-1', the_missile_1, g_player);
  missileSet('missile-2', the_missile_2, g_player);
  the_missile_1 = missileAdvance(the_missile_1);
  the_missile_2 = missileAdvance(the_missile_2);
  //}




  enemySet('enemy-1', the_enemy_1, g_player);
  the_enemy_1 = enemyStep(the_enemy_1);
  enemySet('enemy-2', the_enemy_2, g_player);
  the_enemy_2 = enemyStep(the_enemy_2);


  //objectMomentum(the_enemy);
  if (!the_enemy_1.m_dead) {


    the_enemy_1 = killEnemy(the_enemy_1);
  }

  //console.log("ee", the_enemy.m_x, the_enemy.m_y);

  if (keep_running) {
    affixLeftRight();
    requestAnimationFrame(animateScene);
  }

  fixMobile();

}

var supportsOrientationChange = "onorientationchange" in window,
  orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function () {
  //alert('HOLY ROTATING SCREENS BATMAN:' + screen.width);


  // console.log("  document.exitFullscreen() ----");
  fixMobile();
}, false);


//       document.documentElement.style.setProperty(missile_fill, rgb);


function handleStartMobile(evt) {
  setTimeout(() => {
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";
    waiting_for_start = false;
    console.log("Delayed for 1 second.");
  }, "1000");

  //   evt.preventDefault();
  the_scene = document.getElementById('the-scene');
  try {
    the_scene.requestFullscreen();
  } catch {
    console.log("FILA");
  }
}

let waiting_for_start = false;


function fixMobile() {
  if (waiting_for_start) {
    return;
  }
  document_style = document.documentElement.style;
  if (!isMobile()) {
    document_style.setProperty("--scene-width", "1024px");
    document_style.setProperty("--scene-height", "512px");
    document_style.setProperty("--playing-margin-left", "0px");
    document_style.setProperty("--playing-margin-top", "0px");
    if (document.fullscreenElement != null) {
      document.exitFullscreen();
    }
  } else {
    if (!document.fullscreenElement) {
      start_mobile = document.getElementById('start-mobile');
      start_mobile.style.display = "block";
      waiting_for_start = true;
      //start_mobile.addEventListener("touchstart", handleStartMobile, { passive: false });
      start_mobile.addEventListener("touchend", handleStartMobile, { passive: false });
      //start_mobile.addEventListener("touchcancel", handleStartMobile, { passive: false });
      //start_mobile.addEventListener("touchmove", handleStartMobile, { passive: false });
      return;
    }
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";

    screen_width = window.screen.width;
    screen_height = window.screen.height;
    screen_width_px = screen_width + "px";
    screen_height_px = screen_height + "px";
    document_style.setProperty("--scene-width", screen_width_px);
    document_style.setProperty("--scene-height", screen_height_px);



    margin_top = 512 - screen_height;
    margin_top_px = "-" + margin_top + "px";
    document_style.setProperty("--playing-margin-top", margin_top_px);

    arrow_margin_vert = margin_top + "px";
    document_style.setProperty("--arrow-margin-vert", arrow_margin_vert);





    margin_left = (1024 - screen_width) / 2;
    margin_left_px = "-" + margin_left + "px";
    document_style.setProperty("--playing-margin-left", margin_left_px);

    arrow_margin_hor = margin_left + "px";
    document_style.setProperty("--arrow-margin-hor", arrow_margin_hor);

    input_margin_hor = 2 * margin_left + "px";
    document_style.setProperty("--input-padding-hor", input_margin_hor);



    input_margin_ver = 2 * margin_top + "px";
    document_style.setProperty("--input-padding-ver", input_margin_ver);

    // const nw_arrow = document.getElementById("input-nw");
    // nw_arrow_style = nw_arrow.style;
    // const nw_width = window.getComputedStyle(nw_arrow).getPropertyValue("width");
    // console.log("1111111", nw_width);
    // var currentValue = parseInt(nw_width);
    // console.log("22222", currentValue);
    // nw_arrow_style.width = currentValue + arrow_margin_hor + "px";



    // var left_on_mobile = (1024 - window.screen.width) / 2;
    // var left_mobile_px = (left_on_mobile + 1) + "px";
    // document_style.setProperty("--input-nw-left", left_mobile_px);


    // var top_mobile = 512 - window.screen.height;
    // var top_mobile_px = (top_mobile + 1) + "px";
    // document_style.setProperty("--input-nw-top", top_mobile_px);






    //
    // playing_game.marginTop=-136px
    // playing_game.marginRight = -178px


    /*
      var left_on_mobile = (512 - window.screen.width) / 2;
      var left_mobile_px = left_on_mobile + "px";
    
  
    
      var input_nw_left = left_on_mobile * -1 + "px";
      document_style.setProperty("--input-nw-left", input_nw_left);
    
      var actual_width = window.screen.width + left_on_mobile;
    
      var input_nw_width = actual_width / 4 + "px";
      document_style.setProperty("--input-nw-width", input_nw_width);
    
      var input_n_width = actual_width / 2 + "px";
      document_style.setProperty("--input-n-width", input_n_width);
    
      var input_n_left = left_on_mobile + actual_width / 4 + "px";
      document_style.setProperty("--input-n-left", input_n_left);
    
    */
  }
}

