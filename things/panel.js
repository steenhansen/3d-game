

function panelFront(column_vlines, gradient_front, front_panel_id) {
  let [left_vline, middle_vline, _right_vline] = column_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;

  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_column = panelPolygon(left_right_tops_bots, gradient_front, front_panel_id);
  return front_column;
}

function panelDiffY(a_thing, the_player) {
  let player_y = the_player.y;
  let thing_y = a_thing.y;

  if (player_y > thing_y) {
    difference_y = player_y - thing_y;
  } else {
    dist_column_to_zero = 778 - thing_y;
    difference_y = player_y + dist_column_to_zero;
  }
  return difference_y;
}

function panelPlaceX(a_thing, the_player) {
  let thing_relative, adjusted_x;
  let { x: player_x, y: player_y } = the_player;
  let { x: thing_x, y: thing_y } = a_thing;
  thing_relative = relativeToPlayer(a_thing, the_player);
  if (player_y > thing_y) {
    difference_y = player_y - thing_y;
  } else {
    dist_column_to_zero = 778 - thing_y;
    difference_y = player_y + dist_column_to_zero;
  }
  let column_underflow = (player_x <= ONE_QUARTER && THREE_QUARTER <= thing_x);
  let column_overflow = (thing_x <= ONE_QUARTER && TWO_QUARTER <= player_x);
  if (column_underflow) {
    adjusted_x = a_thing.x - 51000;
    thing_relative = LEFT_OF_PLAYER;
  } else if (column_overflow) {
    adjusted_x = a_thing.x + 51000;
    thing_relative = RIGHT_OF_PLAYER;
  } else {
    adjusted_x = thing_x;
  }
  return [adjusted_x, thing_relative];
}

function panelPolygon(a_polygon, the_gradient, front_panel_id) {
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  let svg_polygon = `<polygon fill="url(#${the_gradient})"  id="${front_panel_id}"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_polygon;
}

function panelDepth(difference_x) {
  if (difference_x > 8000) shrink_depth = 98;
  else if (difference_x > 6000) shrink_depth = 97;
  else if (difference_x > 5000) shrink_depth = 96;
  else if (difference_x > 4000) shrink_depth = 95;
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

function panels3BackLeft(x_center_offset, difference_x, difference_y) {
  let shrink_depth = panelDepth(difference_x);
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  shrink_perc = shrink_depth / 100;
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
  let shrink_depth = panelDepth(difference_x);
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_y);
  shrink_perc = shrink_depth / 100;
  back_right_bot = distancedBackColumnPoint(shrink_perc, right_front_bot);
  left_bottom_3 = [left_front_bot, right_front_bot, back_right_bot];
  return left_bottom_3;
}






function panelBotLeftRight(x_offset, difference_y) {
  right_front_bot_vanish_point = [x_offset + HALF_COLUMN_WIDTH, BOTTOM_FIELD];
  right_front_bot = distancedPoint(difference_y, right_front_bot_vanish_point);

  left_front_bot_vanish_point = [x_offset - HALF_COLUMN_WIDTH, BOTTOM_FIELD];
  left_front_bot = distancedPoint(difference_y, left_front_bot_vanish_point);
  return [left_front_bot, right_front_bot];
}
