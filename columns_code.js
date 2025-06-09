/*    256 is the width of the square, and column
COLUMN_WIDTH = 256
HALF_COLUMN_WIDTH=COLUMN_WIDTH/2
    128 == PX_FROM_CENTER
*/
function columnSvg(a_column, the_player) {
  let column_svg;
  player_x = the_player.x;
  player_y = the_player.y;
  column_x = a_column.x;
  column_y = a_column.y;
  column_relative = columnLMRH2Player(a_column, the_player);
  difference_y = player_y - column_y;
  if (player_y > column_y) {
    difference_y = player_y - column_y;
  } else {
    dist_column_to_zero = 778 - column_y;
    difference_y = player_y + dist_column_to_zero;
  }
  player_side = objectSide(the_player);
  column_side = objectSide(a_column);
  let column_underflow = (player_x <= ONE_QUARTER && THREE_QUARTER <= column_x);
  let column_overflow = (column_x <= ONE_QUARTER && TWO_QUARTER <= player_x);
  let adjusted_x;
  if (column_underflow) {
    adjusted_x = a_column.x - 51000;
    column_relative = COLUMN_TO_LEFT;
  } else if (column_overflow) {
    adjusted_x = a_column.x + 51000;
    column_relative = COLUMN_TO_RIGHT;
  } else {
    adjusted_x = a_column.x;
  }
  x_offsets = columnRelationToPlayer(adjusted_x, the_player, column_relative);
  if (column_relative == COLUMN_TO_LEFT) {
    column_svg = columnLeft2(a_column, x_offsets, difference_y);
  } else if (column_relative == COLUMN_TO_RIGHT) {
    column_svg = columnRight2(a_column, x_offsets, difference_y);
  } else {
    column_svg = columnMiddle2(a_column, x_offsets, difference_y);
  }
  return column_svg;
}

function setPolygon(a_column, html_id) {
  svg_column = columnSvg(a_column, the_player);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = svg_column;
}

function columnBottom3Left(x_center_offset, difference_x, difference_y) {
  let shrink_depth = columnAdjustment(difference_x);
  let [left_front_bot, right_front_bot] = frontColumn(x_center_offset, difference_y);
  shrink_perc = shrink_depth / 100;
  back_right_bot = distancedBackColumnPoint(shrink_perc, right_front_bot);
  left_bottom_3 = [left_front_bot, right_front_bot, back_right_bot];
  return left_bottom_3;
}

function frontColumn(x_offset, difference_y) {
  front_right_bot_vanish_point_YYYY = [x_offset + HALF_COLUMN_WIDTH, BOTTOM_FIELD];
  right_front_bot = distancedPoint(difference_y, front_right_bot_vanish_point_YYYY);
  front_left_bot_vanish_point_XXXX = [x_offset - HALF_COLUMN_WIDTH, BOTTOM_FIELD];
  left_front_bot = distancedPoint(difference_y, front_left_bot_vanish_point_XXXX);
  return [left_front_bot, right_front_bot];
}

function columnAdjustment(difference_x) {

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

function columnBottom3Right(x_center_offset, difference_x, difference_y) {
  let shrink_depth = columnAdjustment(difference_x);
  let [left_front_bot, right_front_bot] = frontColumn(x_center_offset, difference_y);

  shrink_perc = shrink_depth / 100;
  back_left_bot = distancedBackColumnPoint(shrink_perc, left_front_bot);
  right_bottom_3 = [left_front_bot, right_front_bot, back_left_bot];
  return right_bottom_3;
}


function columnGetTop(left_front_bot, right_front_bot, back_right_bot) {
  left_front_top_y = HALF_VIEW_WIDTH - left_front_bot[1];
  right_front_top_y = HALF_VIEW_WIDTH - right_front_bot[1];
  back_right_top_y = HALF_VIEW_WIDTH - back_right_bot[1];
  left_front_top = [left_front_bot[0], left_front_top_y];
  right_front_top = [right_front_bot[0], right_front_top_y];
  back_right_top = [back_right_bot[0], back_right_top_y];
  column_tops = [left_front_top, right_front_top, back_right_top];
  return column_tops;
}

function columnLeft2(a_column, x_offsets, difference_y) {
  let [difference_x, x_center_offset] = x_offsets;
  let [left_front_bot, right_front_bot, back_right_bot] = columnBottom3Left(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = columnGetTop(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  gradient_left = a_column.column_colors.column_left;
  gradient_front = a_column.column_colors.column_front;
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  x_y_differences = [difference_x, difference_y];
  let the_column = columnInFront(left_mid_right_vlines, gradient_left, gradient_front, x_y_differences);
  return the_column;
}

function columnMiddle2(a_column, x_offsets, difference_y) {
  let [difference_x, x_center_offset] = x_offsets;
  let [left_front_bot, right_front_bot, back_right_bot] = columnBottom3Left(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, _back_right_top] = columnGetTop(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  gradient_front = a_column.column_colors.column_front;
  let the_column = columnFrontOnly(left_vline, middle_vline, gradient_front, difference_x, difference_y);
  return the_column;
}

function columnRight2(a_column, x_offsets, difference_y) {
  let [difference_x, x_center_offset] = x_offsets;
  let [left_front_bot, right_front_bot, back_right_bot] = columnBottom3Right(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = columnGetTop(left_front_bot, right_front_bot, back_right_bot);
  let middle_vline = [left_front_top, left_front_bot];
  let left_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];
  gradient_right = a_column.column_colors.column_right;
  gradient_front = a_column.column_colors.column_front;
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  x_y_differences = [difference_x, difference_y];
  let the_column = columnInFront(left_mid_right_vlines, gradient_right, gradient_front, x_y_differences);
  return the_column;
}

function columnFrontOnly(left_vline, middle_vline, column_front, difference_x, difference_y) {
  let the_z_index = zIndex(difference_x, difference_y);
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;

  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_column = svgPolygon(left_right_tops_bots, column_front);
  let the_column = svgIntoDiv(the_z_index, front_column, '');
  return the_column;
}

function columnInFront(column_vlines, gradient_side, gradient_front, the_x_y_diffs) {
  let [left_vline, middle_vline, right_vline] = column_vlines;
  let [difference_x, difference_y] = the_x_y_diffs;
  let the_z_index = zIndex(difference_x, difference_y);
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_column = svgPolygon(left_right_tops_bots, gradient_front);

  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];

  let side_column = svgPolygon(right_top_bot, gradient_side);
  let the_column = svgIntoDiv(the_z_index, front_column, side_column);
  return the_column;
}

function svgPolygon(a_polygon, the_gradient) {
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;

  let svg_polygon = `<polygon fill="url(#${the_gradient})" 
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_polygon;
}

function svgIntoDiv(z_index, front_column, side_column) {
  let the_column = `<div class="show-column" 
                        style="z-index:${z_index}; ">
                     <svg id="svg-right-508"
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                       ${front_column}
                       ${side_column}
                     </svg>
                   </div>`;
  return the_column;
}


