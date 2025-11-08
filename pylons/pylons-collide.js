


// pylonCollide()
function plainPylon(the_player, a_pylon) {
  a_pylon.t_pylon_hit_flash = PYLON_HIT_FLASH_COUNT;
  the_player.t_recoil_count = RECOIL_COUNTDOWN;
  new_direction = objectBounced(g_planet.t_move_direction);
  g_planet.t_move_direction = new_direction;
  the_player.t_screen_askew = 10;
  return [the_player, a_pylon];
}
