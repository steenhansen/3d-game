
function columnSidePanel(column_vlines, gradient_side) {
  let [_left_vline, middle_vline, right_vline] = column_vlines;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];
  let side_column = panelPolygon(right_top_bot, gradient_side);
  return side_column;
}

function columnSet(a_column, html_id) {
  svg_column = columnDraw(a_column, the_player);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = svg_column;
}

function columnOnLeft(a_column, x_offsets, difference_yy) {
  the_data = objectLeftSide(a_column, x_offsets, difference_yy);
  let [left_mid_right_vlines, gradient_left, _gradient_front] = the_data;
  side_column = columnSidePanel(left_mid_right_vlines, gradient_left);
  return [the_data, side_column];
}

function columnOnRight(a_column, x_offsets, difference_yy) {
  the_data = objectRightSide(a_column, x_offsets, difference_yy);
  let [left_mid_right_vlines, gradient_left, _gradient_front] = the_data;
  side_column = columnSidePanel(left_mid_right_vlines, gradient_left);
  return [the_data, side_column];
}

function columnOnMiddle(a_column, x_offsets, difference_yy) {
  the_data = objectMiddleRegion(a_column, x_offsets, difference_yy);
  side_column = '';
  return [the_data, side_column];
}

function columnDraw(a_column, the_player) {
  //let front_column, side_column;
  [the_z_index, difference_y, column_relative, x_offsets] = objectPlacement(a_column, the_player);
  if (column_relative == LEFT_OF_PLAYER) {
    [the_data, side_column] = columnOnLeft(a_column, x_offsets, difference_y);
  } else if (column_relative == RIGHT_OF_PLAYER) {
    [the_data, side_column] = columnOnRight(a_column, x_offsets, difference_y);
  } else {
    [the_data, side_column] = columnOnMiddle(a_column, x_offsets, difference_y);
  }
  [left_mid_right_vlines, _gradient_left_or_right, gradient_front] = the_data;
  //console.log("coul", a_column);
  column_id = "panel-front-column-" + a_column.column_name;
  front_column = panelFront(left_mid_right_vlines, gradient_front, column_id);
  column_svg = columnToSvg(the_z_index, front_column, side_column);
  return column_svg;
}

function columnToSvg(z_index, front_column, side_column) {
  let the_column = `<div class="show-column" 
                        style="z-index:${z_index}; ">
                     <svg 
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                       ${front_column}
                       ${side_column}
                     </svg>
                   </div>`;
  return the_column;
}


