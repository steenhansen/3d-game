

function fieldLeft(travel_speed, diagonal_weight) {
  for (i = 0; i < travel_speed; i++) {
    for (j = 0; j < diagonal_weight; j++) {
      incrementLeft();
    }
  }
}








function fieldRight(travel_speed, diagonal_weight) {
  for (i = 0; i < travel_speed; i++) {
    for (j = 0; j < diagonal_weight; j++) {
      incrementRight();
    }
  }
}



function initIncrementers() {
  g_field_xs_accums = Array(256).fill(0);
  g_field_xs_shift = Array(256).fill(0);
  if (INIT_RIGHT) {
    resetRight();
  } else {
    resetLeft();
  }
}


function initLeftRight() {
  initIncrementers();


  incrementForward();  //???
  incrementForward();
  incrementForward();
  incrementForward();
}


function affixLeftRight(is_dying) {
  const y_counter = Math.floor(y_flip_count);
  const invert_lines = Y_INVERT_LILNES[y_counter];
  if (is_dying) {
    for (let affix_line = 0; affix_line < NUMBER_LINES; affix_line++) {
      const inverted_x = invert_lines[affix_line];
      let affix_shift = g_field_xs_shift[affix_line];
      affix_jagged = affix_shift + g_field_xs_death[affix_line];
      if (inverted_x == 0) {
        let [_index, _start, _stop, invert_flip] = START_STOP_FLIP[affix_line];
        affix_jagged -= invert_flip;
      }
      const line_element = document.getElementById(`line${affix_line}`);
      line_element.style = `background-position-x: ${affix_jagged}px `;
    }
  } else {
    for (let affix_line = 0; affix_line < NUMBER_LINES; affix_line++) {
      const inverted_x = invert_lines[affix_line];
      let affix_shift = g_field_xs_shift[affix_line];
      // affix_shift -= g_field_xs_death[affix_line];
      if (inverted_x == 0) {
        let [_index, _start, _stop, invert_flip] = START_STOP_FLIP[affix_line];
        affix_shift -= invert_flip;
      }
      const line_element = document.getElementById(`line${affix_line}`);
      line_element.style = `background-position-x: ${affix_shift}px `;
    }
  }
}

function xyNotInField(out_x, out_y, err_mess) {

  x_min = g_planet.s_playground_x_min;
  x_max = g_planet.s_playground_x_max;

  x_original = out_x - x_min;
  max_x_original = x_max - x_min;
  if (out_x < x_min || out_x > x_max) {
    x_err = `${err_mess}, X:${x_original} is not in range of 0 < X < ${max_x_original}`;
    throw new Error(x_err);
  }

  y_min = g_planet.s_playground_y_min;
  y_max = g_planet.s_playground_y_max;

  y_original = out_y - y_min;
  max_y_original = y_max - y_min;
  if (out_y < y_min || out_y > y_max) {
    y_err = `${err_mess}, Y:${y_original} is not in range of 0 < Y < ${max_y_original}`;

    throw new Error(y_err);
  }
}






// inside  XY_X_RANGE 
function xAllowed(player_x) {
  if (player_x < g_planet.s_playground_x_min || player_x > g_planet.s_playground_x_max) {
    return false;
  }
  return true;
}

// inside  XY_X_RANGE 
function yAllowed22(player_y) {
  if (player_y < g_planet.s_playground_y_min || player_y > g_planet.s_playground_y_max) {

    mess = ` `;
    return false;
  }
  return true;
}


function yAllowed(player_y) {
  if (player_y < g_planet.s_playground_y_min) {
    dbg_y_too_small = `${player_y}<${g_planet.s_playground_y_min}`;
    return false;
  } else if (player_y > g_planet.s_playground_y_max) {
    dbg_y_too_large = `${player_y}>${g_planet.s_playground_y_max}`;
    return false;
  }
  return true;
}