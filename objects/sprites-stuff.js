

function spriteDiffY(a_thing, g_player) {
  let player_y = g_player.m_y;
  let thing_y = a_thing.m_y;

  if (player_y > thing_y) {
    difference_y = player_y - thing_y;
  } else {
    dist_pylon_to_zero = g_checkerboard_depth - thing_y;
    difference_y = player_y + dist_pylon_to_zero;
  }
  return difference_y;
}


// pylons and enemies
function spriteFront(pylon_vlines) {
  let [left_vline, middle_vline, _right_vline] = pylon_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];

  let front_pylon = spriteCenterXy(left_right_tops_bots);
  return front_pylon;
}

test_y = 0;
function spriteCenterXy(a_polygon) {
  let [left_front_top, right_front_top, _left_front_bot, _right_front_bot] = a_polygon;
  let [top_left_x, _top_left_y] = left_front_top;
  let [top_right_x, _top_right_y] = right_front_top;
  //  let float_center_x = (top_left_x + top_right_x) / 2 - 128;
  let float_center_x = (top_left_x + top_right_x) / 2 - 512;
  let center_x = Math.round(float_center_x);

  // test_y++;
  // if (test_y == 128) {   // qbert  float up dead enemey
  //   test_y = 0;
  // }

  let center_y = -200 - test_y;                                          /// qbert
  let the_width = Math.abs(top_left_x - top_right_x);
  let the_scale = the_width / 256;
  return [center_x, center_y, the_scale];
}








///////////////   thing_relative  relative_to_player 
function spritePlace(a_thing, g_player) {
  let { m_x: player_x } = g_player;
  let { m_x: thing_x } = a_thing;
  if (player_x > thing_x) {
    left_x_dist = player_x - thing_x;
    right_x_dist = g_checkerboard_width - player_x + thing_x;
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
    left_x_dist = thing_x - player_x;
    right_x_dist = g_checkerboard_width - thing_x + player_x;
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
  if (difference_x < HEAD_ON_X_DIFF) {
    head_on_view = true;
  } else {
    head_on_view = false;
  }
  return [difference_x, relative_to_playerN, head_on_view];
};




function spriteTops(left_front_bot, right_front_bot, left_or_right_back_bot) {
  left_front_top_y = HALF_VIEW_WIDTH - left_front_bot[1];
  right_front_top_y = HALF_VIEW_WIDTH - right_front_bot[1];
  left_or_right_top_y = HALF_VIEW_WIDTH - left_or_right_back_bot[1];
  left_front_top = [left_front_bot[0], left_front_top_y];
  right_front_top = [right_front_bot[0], right_front_top_y];
  right_or_left_top = [left_or_right_back_bot[0], left_or_right_top_y];
  pylon_tops = [left_front_top, right_front_top, right_or_left_top];
  return pylon_tops;
}