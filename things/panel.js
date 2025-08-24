
function panelFront2(column_vlines) {
  let [left_vline, middle_vline, _right_vline] = column_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;

  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_column = panelPolygon2(left_right_tops_bots);
  return front_column;
}


function panelPolygon2(a_polygon) {
  let [left_front_top, right_front_top, _left_front_bot, _right_front_bot] = a_polygon;
  let [top_left_x, _top_left_y] = left_front_top;
  let [top_right_x, _top_right_y] = right_front_top;
  let float_center_x = (top_left_x + top_right_x) / 2 - 128;
  let center_x = Math.round(float_center_x);
  let center_y = 128;
  let the_width = Math.abs(top_left_x - top_right_x);
  let the_scale = the_width / 256;
  return [center_x, center_y, the_scale];
}



function panelFront(column_vlines, gradient_front, front_panel_id) {
  let [left_vline, middle_vline, _right_vline] = column_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_column = panelPolygon(left_right_tops_bots, gradient_front, front_panel_id);
  return front_column;
}



function panelPolygon(a_polygon, twirl_gradient, front_panel_id) {
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  let svg_polygon = `<polygon fill="url(#${twirl_gradient})"  id="${front_panel_id}"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_polygon;
}




function panelDiffY(a_thing, g_player) {
  let player_y = g_player.m_y;
  let thing_y = a_thing.m_y;

  if (player_y > thing_y) {
    difference_y = player_y - thing_y;
  } else {
    dist_column_to_zero = SCENE_Y_MAX - thing_y;
    difference_y = player_y + dist_column_to_zero;
  }
  return difference_y;
}

///////////////   thing_relative  relative_to_player 
function panelPlaceX(a_thing, g_player) {
  let { m_x: player_x } = g_player;
  let { m_x: thing_x } = a_thing;
  if (player_x > thing_x) {
    left_x_dist = player_x - thing_x;
    right_x_dist = SCENE_WIDTH - player_x + thing_x;
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
    right_x_dist = SCENE_WIDTH - thing_x + player_x;
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



function addSidewaysDepth(difference_x) {
  if (difference_x > 4000) shrink_depth = 95;
  else if (difference_x > 3500) shrink_depth = 94;
  else if (difference_x > 3000) shrink_depth = 93;
  else if (difference_x > 2666) shrink_depth = 92;
  else if (difference_x > 2333) shrink_depth = 91;
  else if (difference_x > 2000) shrink_depth = 90;
  else if (difference_x > 1666) shrink_depth = 89;
  else if (difference_x > 1333) shrink_depth = 88;
  else if (difference_x > 1200) shrink_depth = 87;
  else if (difference_x > 1100) shrink_depth = 86;
  else if (difference_x > 1000) shrink_depth = 85;
  else shrink_depth = Math.floor(0.007 * difference_x + 77);
  return shrink_depth;
}

function farAdjustment(difference_y, sideways_depth_add) {
  if (difference_y < 256) {
    shrink_perc = 0.75;
  } else {
    shrink_perc = sideways_depth_add / 100;
  }
  return shrink_perc;
}

function panels3BackLeft(x_center_offset, difference_x, difference_y) {
  let sideways_depth_add = addSidewaysDepth(difference_x);
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  shrink_perc = farAdjustment(difference_y, sideways_depth_add);
  back_left_bot = distancedBackColumnPoint(shrink_perc, left_front_bot);
  right_bottom_3 = [left_front_bot, right_front_bot, back_left_bot];
  return right_bottom_3;
}

function panelsTops(left_front_bot, right_front_bot, left_or_right_back_bot) {
  left_front_top_y = HALF_VIEW_WIDTH - left_front_bot[1];
  right_front_top_y = HALF_VIEW_WIDTH - right_front_bot[1];
  left_or_right_top_y = HALF_VIEW_WIDTH - left_or_right_back_bot[1];
  left_front_top = [left_front_bot[0], left_front_top_y];
  right_front_top = [right_front_bot[0], right_front_top_y];
  right_or_left_top = [left_or_right_back_bot[0], left_or_right_top_y];
  column_tops = [left_front_top, right_front_top, right_or_left_top];
  return column_tops;
}

function panels3BackRight(x_center_offset, difference_x, difference_y) {
  let sideways_depth_add = addSidewaysDepth(difference_x);
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  shrink_perc = farAdjustment(difference_y, sideways_depth_add);
  back_right_bot = distancedBackColumnPoint(shrink_perc, right_front_bot);
  left_bottom_3 = [left_front_bot, right_front_bot, back_right_bot];
  return left_bottom_3;
}






function panelBotLeftRight(x_offset, difference_y) {
  right_front_bot_vanish_point = [x_offset + HALF_TILE_WIDTH, BOTTOM_FIELD];
  right_front_bot = distancedPoint(difference_y, right_front_bot_vanish_point);
  left_front_bot_vanish_point = [x_offset - HALF_TILE_WIDTH, BOTTOM_FIELD];
  left_front_bot = distancedPoint(difference_y, left_front_bot_vanish_point);
  return [left_front_bot, right_front_bot];
}
