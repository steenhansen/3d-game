

// pylons and enemies
function spriteFront(pylon_vlines) {
  let [left_vline, middle_vline, _right_vline] = pylon_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  const left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_pylon = spriteCenterXy(left_right_tops_bots);
  return front_pylon;
}

function spriteCenterXy(a_polygon) {
  let [left_front_top, right_front_top, _left_front_bot, _right_front_bot] = a_polygon;
  let [top_left_x, _top_left_y] = left_front_top;
  let [top_right_x, _top_right_y] = right_front_top;
  let float_center_x = (top_left_x + top_right_x) / 2 - 512;
  let center_x = Math.round(float_center_x);
  let center_y = SPRITE_CENTER_Y;
  let the_width = Math.abs(top_left_x - top_right_x);
  let the_scale = the_width / DEPTH_LINES;
  return [center_x, center_y, the_scale];
}

function distanceAbsY(object_player_ys) {
  let [object_y, player_y] = object_player_ys;
  let dist_abs_y;
  if (player_y > object_y) {
    dist_abs_y = player_y - object_y;
  } else {
    const checkerboard_depth = g_planet.s_checkerboard_depth;
    const dist_pylon_to_zero = checkerboard_depth - object_y;
    dist_abs_y = player_y + dist_pylon_to_zero;
  }
  return dist_abs_y;
}



///////////////   thing_relative  relative_to_player 
function spritePlace(a_thing, the_player) {
  const checkerboard_width = g_planet.s_checkerboard_width;
  let { m_x: player_x } = the_player;
  let { m_x: thing_x } = a_thing;
  let difference_x;
  let relative_to_playerN;
  if (player_x > thing_x) {
    const left_x_dist = player_x - thing_x;
    const right_x_dist = checkerboard_width - player_x + thing_x;
    if (left_x_dist > right_x_dist) {
      /*    |-------------------------|
            t0                    p1023    */
      difference_x = right_x_dist;    // 1
      relative_to_playerN = RIGHT_OF_PLAYER;
    } else {
      /*    |-------------------------|
            t0    p1                       */
      difference_x = left_x_dist;     //1
      relative_to_playerN = LEFT_OF_PLAYER;
    }
  } else {
    const left_x_dist = thing_x - player_x;
    const right_x_dist = checkerboard_width - thing_x + player_x;
    if (left_x_dist > right_x_dist) {
      /*    |-------------------------|
            p0                    t1023    */
      difference_x = right_x_dist;  //1
      relative_to_playerN = LEFT_OF_PLAYER;
    } else {
      /*    |-------------------------|
            p0    t1                       */
      difference_x = left_x_dist;   //1
      relative_to_playerN = RIGHT_OF_PLAYER;
    }
  }
  let head_on_view;
  if (difference_x < HEAD_ON_X_DIFF) {
    head_on_view = true;
  } else {
    head_on_view = false;
  }
  return [difference_x, relative_to_playerN, head_on_view];
}

function spriteTops(left_front_bot, right_front_bot, left_or_right_back_bot) {
  const left_front_top_y = HALF_VIEW_WIDTH - left_front_bot[1];
  const right_front_top_y = HALF_VIEW_WIDTH - right_front_bot[1];
  const left_or_right_top_y = HALF_VIEW_WIDTH - left_or_right_back_bot[1];
  const left_front_top = [left_front_bot[0], left_front_top_y];
  const right_front_top = [right_front_bot[0], right_front_top_y];
  const right_or_left_top = [left_or_right_back_bot[0], left_or_right_top_y];
  const pylon_tops = [left_front_top, right_front_top, right_or_left_top];
  return pylon_tops;
}