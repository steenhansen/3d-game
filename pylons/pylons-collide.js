

function possibleExit(pylon_sign) {
  if ('o_url_hit' in pylon_sign) {
    if (dbg_is_debugging) {
      next_params = '?debug-env=true';
    } else {
      next_params = '';
    }
    next_page = pylon_sign.o_url_hit + next_params;
    console.log("possibleExit", next_page);
    window.location.href = next_page;
  }
}

function plainPylon(the_player, a_pylon) {
  a_pylon.t_pylon_hit_flash = PYLON_HIT_FLASH_COUNT;
  the_player.t_recoil_count = RECOIL_COUNTDOWN;
  // if ('p_bare_frnt_col' in a_pylon) {
  //   temp_front = a_pylon.p_bare_frnt_col;
  //   a_pylon.p_bare_frnt_col = a_pylon.p_bare_left_col;
  //   a_pylon.p_bare_left_col = a_pylon.p_bare_rght_col;
  //   a_pylon.p_bare_rght_col = temp_front;
  // } else {
  //   temp_front_from = a_pylon.p_grad_frnt_from;
  //   temp_front_to = a_pylon.p_grad_frnt_to;
  //   a_pylon.p_grad_frnt_from = a_pylon.p_grad_left_from;
  //   a_pylon.p_grad_frnt_to = a_pylon.p_grad_left_to;
  //   a_pylon.p_grad_left_from = a_pylon.p_grad_rght_from;
  //   a_pylon.p_grad_left_to = a_pylon.p_grad_rght_to;
  //   a_pylon.p_grad_rght_from = temp_front_from;
  //   a_pylon.p_grad_rght_to = temp_front_to;
  // }
  new_direction = objectBounced(g_planet.t_move_direction);
  g_planet.t_move_direction = new_direction;
  the_player.t_screen_askew = 10;

  return [the_player, a_pylon];
}
