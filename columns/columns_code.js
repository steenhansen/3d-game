
function columnSidePanel(column_vlines, gradient_side, head_on_view) {
  let [_left_vline, middle_vline, right_vline] = column_vlines;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];
  let side_column = panelPolygon(right_top_bot, gradient_side, 'column_side');
  return side_column;
}



function columnOnLeft(a_column, x_center_offset, difference_x, difference_yy, head_on_view) {
  if (head_on_view) {
    return columnOnMiddle(a_column, x_center_offset, difference_x, difference_yy);
  } else {
    //  console.log("a_", a_column);
    the_data = objectLeftSide(a_column, x_center_offset, difference_x, difference_yy);
    let [left_mid_right_vlines, gradient_left, _gradient_front] = the_data;
    // left_side_name = "left-side-" + a_column.column_name;
    side_column = columnSidePanel(left_mid_right_vlines, gradient_left, head_on_view);
    return [the_data, side_column];
  }
}

function columnOnRight(a_column, x_center_offset, difference_x, difference_yy, head_on_view) {
  if (head_on_view) {
    return columnOnMiddle(a_column, x_center_offset, difference_x, difference_yy);
  } else {
    the_data = objectRightSide(a_column, x_center_offset, difference_x, difference_yy);
    let [left_mid_right_vlines, gradient_right, _gradient_front] = the_data;
    // right_side_name = "right-side-" + a_column.column_name;
    side_column = columnSidePanel(left_mid_right_vlines, gradient_right, head_on_view);
    return [the_data, side_column];
  }
}

function columnOnMiddle(a_column, x_center_offset, difference_x, difference_yy) {
  the_data = objectMiddleRegion(a_column, x_center_offset, difference_x, difference_yy);
  side_column = '';
  return [the_data, side_column];
}

function columnSet(a_column, html_id) {
  svg_column = columnDraw(a_column, g_player);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = svg_column;
}

function columnDraw(a_column, g_player) {
  [the_z_index, difference_y, column_relative, x_center_offset, difference_x, head_on_view] = objectPlacement(a_column, g_player);
  if (column_relative == LEFT_OF_PLAYER) {
    [corner_points, side_column] = columnOnLeft(a_column, x_center_offset, difference_x, difference_y, head_on_view);

    //console.log("corner_points", corner_points[0][1][0][0], corner_points[0][1][1][0]);
    corner_points[0][1][0][0] += 1;    // for some reason
    corner_points[0][1][1][0] += 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
    //console.log("corner_points", corner_points);
    // console.log("++++++++++++++++++++++++++");

  } else {
    [corner_points, side_column] = columnOnRight(a_column, x_center_offset, difference_x, difference_y, head_on_view);
    corner_points[0][1][0][0] -= 1;    // for some reason
    corner_points[0][1][1][0] -= 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  }
  [left_mid_right_vlines, _gradient_left_or_right, gradient_front] = corner_points;
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


