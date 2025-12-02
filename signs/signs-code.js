function drawSigns(the_signs, the_player) {
  const number_signs = the_signs.length;
  for (let sign_index = 0; sign_index < number_signs; sign_index++) {
    const a_sign = the_signs[sign_index];
    signSet(a_sign, the_player);
  }
}

function signSet(a_sign, the_player) {
  sign_id = a_sign.s_sign_name;
  targetDiv = document.getElementById(sign_id);
  sign_player_ys = [a_sign.m_y, the_player.m_y];
  dist_abs_y = distanceAbsY(sign_player_ys);
  if (dist_abs_y > FARTHEST_VISIBLE_SIGN) {
    targetDiv.innerHTML = '';
  } else {
    svg_sign = signDraw(a_sign, the_player);
    if (svg_sign == null) {
      sign_error = `bad::sign is null ${sign_id}`;
      throw new Error(sign_error);
    }
    targetDiv.innerHTML = svg_sign;
  }
}

function initSign(sign_id, sign_in_squares, vert_word, text_color) {
  xy_pixels = originOffset(sign_in_squares, "ignore_bounds");
  the_sign = {
    s_isa: "is-sign",
    s_sign_name: sign_id,
    s_vert_word: vert_word,
    m_alive: true,
    m_x: xy_pixels[0],
    m_y: xy_pixels[1],
    m_sign_text_col: text_color,
  };
  return the_sign;
}





function signDraw(a_sign, the_player) {
  [the_z_index, sign_relative, x_center_offset, head_on_view] = objectPlacement(a_sign, the_player);

  sign_player_ys = [a_sign.m_y, the_player.m_y];
  if (sign_relative == LEFT_OF_PLAYER) {
    left_mid_right_vlines = signOnLeft(x_center_offset, sign_player_ys, head_on_view);
  } else {
    left_mid_right_vlines = signOnRight(x_center_offset, sign_player_ys, head_on_view);
  }
  debugSign(a_sign, left_mid_right_vlines);
  text_color = a_sign.m_sign_text_col;
  vert_text = a_sign.s_vert_word;
  word_svg = signFront(left_mid_right_vlines, text_color, vert_text);
  sign_svg = createSignHtml(the_z_index, word_svg);
  return sign_svg;
}

function signFront(sign_vlines, text_color, vert_text) {
  let [left_vline, middle_vline, _right_vline] = sign_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  let front_sign = signPolygon(left_right_tops_bots, vert_text, text_color);
  return front_sign;
}

function signPolygon(a_polygon, vertical_text, text_color) {
  let [left_front_top, right_front_top, left_front_bot, _right_front_bot] = a_polygon;
  [top_left_x, top_left_y] = left_front_top;
  [top_right_x, _] = right_front_top;
  [_, bot_left_y] = left_front_bot;
  [_, _bot_right_y] = _right_front_bot;
  vert_word = vertical_text;
  len_vert_word = vert_word.length;
  panel_height = bot_left_y - top_left_y;
  letter_height = panel_height / len_vert_word;
  outline_width = letter_height / SIGN_TEXT_FIGURE;
  x_pos = (top_left_x + top_right_x) / 2;
  y_pos = (top_left_y + bot_left_y) / 2;
  svg_sign = `<text stroke="none"  stroke-width="${outline_width}px"    
    textLength="${panel_height}"
   style="font-size:${letter_height}px;
          font-family:Arial;
          fill: ${text_color};
          fill-opacity:1;
          font-weight:900;
          text-anchor:middle;
          writing-mode:tb-rl;
          text-orientation:upright;  ";
   x="${x_pos}"
   y="${y_pos}">${vert_word}</text>`;
  return svg_sign;
}

function createSignHtml(z_index, word_svg) {
  let the_sign = `<div class="show-sign" style="z-index:${z_index}; ">
                     <svg viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                          ${word_svg}
                     </svg>
                   </div>`;
  return the_sign;
}

function signOnLeft(x_center_offset, sign_player_ys, head_on_view) {
  dist_abs_y = distanceAbsY(sign_player_ys);
  if (head_on_view) {
    left_mid_right_vlines = objectFrontRegion(x_center_offset, dist_abs_y);
  } else {
    left_mid_right_vlines = objectLeftSide(x_center_offset, sign_player_ys, PYLON_PIXEL_DEPTH);
  }
  return left_mid_right_vlines;
}

function signOnRight(x_center_offset, sign_player_ys, head_on_view) {
  dist_abs_y = distanceAbsY(sign_player_ys);
  if (head_on_view) {
    left_mid_right_vlines = objectFrontRegion(x_center_offset, dist_abs_y);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, sign_player_ys, PYLON_PIXEL_DEPTH);
  }
  return left_mid_right_vlines;
}




