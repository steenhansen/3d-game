



//let do_console = 8 * 3;

// function cc(title, mess) {
//   do_console--;
//   if (the_key != MOVING_NOT) {
//     //  if (do_console >= 0) {
//     console.log(title, mess);
//   }
// }
const MOVING_NOT = 0;

const MOVING_BACKWARDS = 1;
const MOVING_RIGHT = 2;
const MOVING_FORWARD = 3;
const MOVING_LEFT = 4;


let sprite_half_x = 128;
const area_width_half = 16 * 1048;               //16768
let player_x = area_width_half;
let player_y = 512 + 512;           // 512+512=1048
var the_key = 0;

const numDrawings = 90;


const area_width = 2 * area_width_half;          // 33536
const viewport_middle_x = area_width_half - 512; // 16256

const area_height_half = 512;
const area_height = 1024;
const viewport_middle_y = 512;





// let overflow_accums = [];     // overflow_accums.fill(0)
// let x_shift_list = [];// overflow_accums.fill(0)





//////////////////////
let number_lines = start_stop_flip.length;
let closest_width_index = number_lines - 1;
function initLeftRight() {
  let [index, i_start, i_stop, _flip] = start_stop_flip[closest_width_index];
  right_stop = i_stop + 1;
  left_stop = i_start;
  initCounters();
  moveForward();
  moveForward();
  moveForward();
  moveForward();
  for (let left_line = 0; left_line < 128; left_line++) {
    moveLeft();
  }
  requestAnimationFrame(doLeftRight);
}

function initCounters() {
  resetLeft();
  for (let left_line = 0; left_line < 256; left_line++) {
    moveLeft();
  }
}


//function leftRightStart(number_lines) {
let right_stop;
let left_stop;
let overflow_accums = [];
let x_shift_list = [];

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


//initLeftRight();



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

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 38) {
    the_key = MOVING_BACKWARDS;
  }
  else if (event.keyCode == 39) {
    the_key = MOVING_RIGHT;
  }
  else if (event.keyCode == 40) {
    the_key = MOVING_FORWARD;
  }
  else if (event.keyCode == 37) {
    the_key = MOVING_LEFT;
  } else {
    the_key = MOVING_NOT;
  }
});

function doLeftRight(timestamp) {

  //   moveLeft();
  //moveLeft();


  //console.log("mmm");
  //   move_pylon1();
  // pylonHtml();

  //  the_pylon = pylonHtml(830, 329, 1);

  // console.log(the_pylon);
  // targetDiv = document.getElementById('the_pylons');
  // targetDiv.innerHTML = a_pylon;
  // // moveLeft();


  // console.log("doLeftRight", player_x, player_y);
  if (the_key == MOVING_FORWARD) { /// MOVING_BACKWARDS) {
    player_point.y += 2;
    cube_x.y -= 2;
    //player_y++;
    moveBack();
    moveBack();
    //    moveBack();
    //  sprite_5.y--;
  }
  else if (the_key == MOVING_RIGHT) {
    player_point.x += 6;

    //cube_x.x -= 9; no move
    cube_x.x -= 18;

    moveRight();
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    //   sprite_5.x--;
  }
  else if (the_key == MOVING_BACKWARDS) { ///MOVING_FORWARD) {
    //player_y--;
    player_point.y -= 2;
    cube_x.y += 2;
    moveForward();
    moveForward();
    //moveForward();
    // sprite_5.y++;
  }
  else if (the_key == MOVING_LEFT) {
    player_point.x -= 6;

    //cube_x.x += 9;  // no move
    cube_x.x += 18;

    //player_x--;
    moveLeft();
    moveLeft();
    moveLeft();
    moveLeft();
    moveLeft();
    moveLeft();
    //     sprite_5.x++;
  }

  setPolygon(pylon_point_1, 'the_pylons_1');



  spriteSvg(cube_x, { x: player_x, y: player_y });





  if (keep_running) {
    //    (sprite_right, player_x, player_y);
    //   moveObject(cube_1, player_x, player_y);
    //moveObject(sprite_back, player_x, player_y);
    affixLeftRight();
    requestAnimationFrame(doLeftRight);
  } else {
  }
}




function overflowLeft(cur_line, new_sum) {
  if (new_sum < 0) {
    new_sum += num_lines;
    x_shift_list[cur_line]++;
    let [index, overflow_l_start, overflow_l_stop, _flip] = start_stop_flip[cur_line];
    if (x_shift_list[cur_line] == overflow_l_start) {
      x_shift_list[cur_line] = overflow_l_stop;
    }
  }
  return new_sum;
}
function resetLeft() {
  //      for (let cur_line = 14; cur_line < num_lines; cur_line++) {
  for (let cur_line = 0; cur_line < num_lines; cur_line++) {
    let [index, _start, reset_left, _flip] = start_stop_flip[cur_line];
    x_shift_list[cur_line] = reset_left;
    overflow_accums[cur_line] = num_lines - 1;
  }
}

function moveLeft() {
  let left_bot_count = x_shift_list[num_lines - 1];
  if (left_bot_count == -1) {
    resetLeft();
  } else {
    //        for (let left_line = 14; left_line < num_lines; left_line++) {
    for (let left_line = 0; left_line < num_lines; left_line++) {
      let old_left = overflow_accums[left_line];
      let left_sum = old_left - left_line - 1;
      let adjust_left = overflowLeft(left_line, left_sum);
      overflow_accums[left_line] = adjust_left;
    }
  }
}
//////////////////
function resetRight() {
  //      for (let cur_line = 14; cur_line < num_lines; cur_line++) {
  for (let cur_line = 0; cur_line < num_lines; cur_line++) {
    let [index, reset_right, _stop, _flip] = start_stop_flip[cur_line];
    x_shift_list[cur_line] = reset_right;
    overflow_accums[cur_line] = 0;
  }
}

function moveRight() {
  let right_bot_count = x_shift_list[closest_width_index];
  let [_index, _start, end_offset, _flip_offset] = start_stop_flip[closest_width_index];
  if (right_bot_count == end_offset + 1) {
    resetRight();
  } else {
    //        for (let right_line = 14; right_line < num_lines; right_line++) {
    for (let right_line = 0; right_line < num_lines; right_line++) {
      let old_right = overflow_accums[right_line];
      let right_sum = old_right + right_line + 1;
      let adjust_right = overflowRight(right_line, right_sum);
      overflow_accums[right_line] = adjust_right;
    }
  }
}

function overflowRight(cur_line, new_sum) {
  if (new_sum > num_lines) {
    new_sum -= num_lines;
    x_shift_list[cur_line]--;
    let [index, overflow_r_start, overflow_r_stop, _flip] = start_stop_flip[cur_line];
    if (x_shift_list[cur_line] == overflow_r_stop) {
      x_shift_list[cur_line] = overflow_r_start;
    }
  }
  return new_sum;
}

function moveBack() {
  y_flip_count += 1;
  if (y_flip_count > closest_depth_index) {
    y_flip_count = 0;
  }
}

function moveForward() {
  if (y_flip_count == 0) {
    y_flip_count = closest_depth_index;
  } else {
    y_flip_count -= 1;
  }
}



function affixLeftRight() {
  const y_counter = Math.floor(y_flip_count);
  const invert_lines = y_invert_lines[y_counter];
  //      for (let affix_line = 14; affix_line < num_lines; affix_line++) {
  for (let affix_line = 0; affix_line < num_lines; affix_line++) {
    const inverted_x = invert_lines[affix_line];
    let affix_shift = x_shift_list[affix_line];
    if (inverted_x == 0) {
      let [_index, _start, _stop, invert_flip] = start_stop_flip[affix_line];
      affix_shift -= invert_flip;
    }
    const line_element = document.getElementById(`line${affix_line}`);
    line_element.style = `background-position-x: ${affix_shift}px `;
  }
}





