

function checkersBackwards(travel_speed) {
  for (i = 0; i < travel_speed; i++) {
    // moveForward();
    moveForward();
  }
  //moveForward();
  //moveForward();
}

function checkersForwards(travel_speed) {
  for (i = 0; i < travel_speed; i++) {
    //  moveBack();
    moveBack();
  }


  //moveBack();
  //moveBack();
}

function checkersRight(travel_speed) {
  for (i = 0; i < travel_speed; i++) {
    moveRight();
    moveRight();
    moveRight();
    // moveRight();
    // moveRight();
    // moveRight();
  }


  // moveRight();
  // moveRight();
  // moveRight();
  // moveRight();
  // moveRight();
  // moveRight();

}

function checkersLeft(travel_speed) {
  for (i = 0; i < travel_speed; i++) {
    moveLeft();
    moveLeft();
    moveLeft();
    // moveLeft();
    // moveLeft();
    // moveLeft();
  }


  // moveLeft();
  // moveLeft();
  // moveLeft();
  // moveLeft();
  // moveLeft();
  // moveLeft();
}


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
  requestAnimationFrame(animateScene);
}

function initCounters() {
  resetLeft();
  for (let left_line = 0; left_line < 256; left_line++) {
    moveLeft();
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
  for (let cur_line = 0; cur_line < num_lines; cur_line++) {
    let [index, _start, reset_left, _flip] = start_stop_flip[cur_line];
    x_shift_list[cur_line] = reset_left;
    overflow_accums[cur_line] = num_lines - 1;
  }
}

function moveLeft() {
  let left_bot_count = x_shift_list[num_lines - 1];
  //  if (left_bot_count == -1) {
  //  if (left_bot_count == -1 || left_bot_count == 0) {
  if (left_bot_count == 0) {                      /// qbert this looks good
    resetLeft();
  }
  else {
    // console.log("moveLeft");
    for (let left_line = 0; left_line < num_lines; left_line++) {
      let old_left = overflow_accums[left_line];
      let left_sum = old_left - left_line - 1;
      if (left_line == 255) {
        //   console.log("moveLeft", old_left, left_line, left_sum);
      }
      let adjust_left = overflowLeft(left_line, left_sum);
      overflow_accums[left_line] = adjust_left;
    }
  }
  //console.log("moveLeft 255", x_shift_list[255]);
}
//////////////////
function resetRight() {
  for (let cur_line = 0; cur_line < num_lines; cur_line++) {
    let [index, reset_right, _stop, _flip] = start_stop_flip[cur_line];
    x_shift_list[cur_line] = reset_right;
    overflow_accums[cur_line] = 0;
  }
  //console.log("resetRight 255", x_shift_list[255]);
}

function moveRight() {
  let right_bot_count = x_shift_list[closest_width_index];
  let [_index, _start, end_offset, _flip_offset] = start_stop_flip[closest_width_index];
  if (right_bot_count == end_offset + 1) {
    // console.log("right_bot_count", right_bot_count);
    resetRight();
  } else {
    //console.log("moveRight");
    for (let right_line = 0; right_line < num_lines; right_line++) {
      let old_right = overflow_accums[right_line];
      let right_sum = old_right + right_line + 1;
      let adjust_right = overflowRight(right_line, right_sum);
      overflow_accums[right_line] = adjust_right;
      if (right_line == 255) {
        //      console.log("moveRight", adjust_right);
      }
    }
  }
}

function overflowRight(cur_line, new_sum) {
  if (new_sum > num_lines) {
    new_sum -= num_lines;
    x_shift_list[cur_line]--;
    // if (x_shift_list[cur_line] > -1 && x_shift_list[cur_line] < 50) console.log("333333333333", x_shift_list[cur_line]);
    let [index, overflow_r_start, overflow_r_stop, _flip] = start_stop_flip[cur_line];
    if (x_shift_list[cur_line] == overflow_r_stop) {
      x_shift_list[cur_line] = overflow_r_start;
      // if (x_shift_list[cur_line] > -1 && x_shift_list[cur_line] < 50) console.log("4444444444444444", x_shift_list[cur_line]);
    }
  }
  if (cur_line == 255) {
    //   console.log("overflowRight", new_sum);
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
    // if (affix_shift > -1 && affix_shift < 50) console.log("11111111111", affix_shift);
    if (inverted_x == 0) {
      let [_index, _start, _stop, invert_flip] = start_stop_flip[affix_line];
      affix_shift -= invert_flip;
      //   if (affix_shift > -1 && affix_shift < 50) console.log("222222222222", affix_shift);
    }
    const line_element = document.getElementById(`line${affix_line}`);
    line_element.style = `background-position-x: ${affix_shift}px `;
  }
}





