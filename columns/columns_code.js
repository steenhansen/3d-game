

function twirlSides(a_column) {
  let { m_side_twirl: side_twirl, m_front_twirl: front_twirl } = a_column;

  side_twirl += 0.25;
  if (side_twirl >= NUMBER_TWIRLS) {
    side_twirl = 0;
  }

  front_twirl += 1;
  if (front_twirl >= NUMBER_TWIRLS) {
    front_twirl = 0;
  }

  a_column.m_side_twirl = side_twirl;
  a_column.m_front_twirl = front_twirl;


  //console.log("ddd", side_twirl, front_twirl);
  return a_column;
}


function columnSidePanel(a_column, column_vlines, gradient_side) {
  //console.log("ddsf", a_column.column_name);
  let [_left_vline, middle_vline, right_vline] = column_vlines;
  let [right_front_top, right_front_bot] = middle_vline;
  let [back_right_top, back_right_bot] = right_vline;
  right_top_bot = [right_front_top, back_right_top, right_front_bot, back_right_bot];
  let side_column_name = 'panel-side-column-' + a_column.column_name;
  let do_outlines = a_column.c_outline;
  let side_column = columnPolygon(right_top_bot, gradient_side, side_column_name, do_outlines);
  return side_column;
}



function columnOnLeft(a_column, x_center_offset, difference_x, difference_yy, head_on_view) {
  if (head_on_view) {
    return columnOnMiddle(a_column, x_center_offset, difference_x, difference_yy);
  } else {
    left_mid_right_vlines = objectLeftSide(a_column, x_center_offset, difference_x, difference_yy);
    gradient_left = twirledGradient(a_column.m_side_twirl, a_column.column_colors);
    side_column = columnSidePanel(a_column, left_mid_right_vlines, gradient_left);
    return [left_mid_right_vlines, side_column];
  }
}

function columnOnRight(a_column, x_center_offset, difference_x, difference_yy, head_on_view) {
  if (head_on_view) {
    return columnOnMiddle(a_column, x_center_offset, difference_x, difference_yy);
  } else {
    left_mid_right_vlines = objectRightSide(a_column, x_center_offset, difference_x, difference_yy);

    gradient_right = twirledGradient(a_column.m_side_twirl, a_column.column_colors);
    side_column = columnSidePanel(a_column, left_mid_right_vlines, gradient_right);
    return [left_mid_right_vlines, side_column];
  }
}

function columnOnMiddle(a_column, x_center_offset, difference_x, difference_yy) {
  left_mid_right_vlines = objectMiddleRegion(a_column, x_center_offset, difference_x, difference_yy);
  side_column = '';
  return [left_mid_right_vlines, side_column];
}

function columnSet(a_column, html_id) {
  //console.log("id", html_id);
  svg_column = columnDraw(a_column, g_player);
  targetDiv = document.getElementById(html_id);
  if (svg_column == null) {
    console.log("crash", html_id);
  }
  targetDiv.innerHTML = svg_column;
}

function columnDraw(a_column, g_player) {
  a_column = twirlSides(a_column);
  [the_z_index, difference_y, column_relative, x_center_offset, difference_x, head_on_view] = objectPlacement(a_column, g_player);
  if (column_relative == LEFT_OF_PLAYER) {
    [left_mid_right_vlines, side_column] = columnOnLeft(a_column, x_center_offset, difference_x, difference_y, head_on_view);
    left_mid_right_vlines[0][1][0][0] += 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] += 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  } else {
    [left_mid_right_vlines, side_column] = columnOnRight(a_column, x_center_offset, difference_x, difference_y, head_on_view);
    left_mid_right_vlines[0][1][0][0] -= 1;    // for some reason
    left_mid_right_vlines[0][1][1][0] -= 1;    // function panelBotLeftRight(x_offset, difference_y) is 1 too small
  }
  column_id = "panel-front-column-" + a_column.column_name;
  gradient_front = twirledGradient(a_column.m_front_twirl, a_column.column_colors);


  let do_outlines = a_column.c_outline;

  front_column = columnFront(left_mid_right_vlines, gradient_front, column_id, do_outlines);
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


