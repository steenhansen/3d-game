function signPylon(a_polygon, vertical_text, text_color) {
  let [left_front_top, right_front_top, left_front_bot, _right_front_bot] = a_polygon;
  [top_left_x, top_left_y] = left_front_top;
  [top_right_x, _] = right_front_top;
  [_, bot_left_y] = left_front_bot;
  [_, _bot_right_y] = _right_front_bot;
  vert_word = vertical_text;  //"SHOOT";
  len_vert_word = vert_word.length;
  panel_height = bot_left_y - top_left_y;
  letter_height = panel_height / len_vert_word;
  outline_width = letter_height / PYLON_TEXT_FIGURE;

  x_pos = (top_left_x + top_right_x) / 2;
  y_pos = (top_left_y + bot_left_y) / 2;

  svg_polygon = `<text   stroke="none"  stroke-width="${outline_width}px"    
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
  return svg_polygon;
}

function possibleExit(pylon_sign) {
  if ('o_url_hit' in pylon_sign) {
    if (g_is_debugging) {
      next_params = '?debug-env=true';
    } else {
      next_params = '';
    }
    next_page = pylon_sign.o_url_hit + next_params;
    window.location.href = next_page;
  }
}

function plainPylon(the_player, a_pylon) {
  a_pylon.t_pylon_hit_flash = PYLON_HIT_FLASH_COUNT;
  the_player.t_recoil_count = RECOIL_COUNTDOWN;
  if ('p_bare_frnt_col' in a_pylon) {
    temp_front = a_pylon.p_bare_frnt_col;
    a_pylon.p_bare_frnt_col = a_pylon.p_bare_left_col;
    a_pylon.p_bare_left_col = a_pylon.p_bare_rght_col;
    a_pylon.p_bare_rght_col = temp_front;
  } else {
    temp_front_from = a_pylon.p_grad_frnt_from;
    temp_front_to = a_pylon.p_grad_frnt_to;
    a_pylon.p_grad_frnt_from = a_pylon.p_grad_left_from;
    a_pylon.p_grad_frnt_to = a_pylon.p_grad_left_to;
    a_pylon.p_grad_left_from = a_pylon.p_grad_rght_from;
    a_pylon.p_grad_left_to = a_pylon.p_grad_rght_to;
    a_pylon.p_grad_rght_from = temp_front_from;
    a_pylon.p_grad_rght_to = temp_front_to;
  }
  new_direction = objectBounced(g_planet.m_move_direction);
  g_planet.m_move_direction = new_direction;
  the_player.t_screen_askew = 10;

  return [the_player, a_pylon];
}
