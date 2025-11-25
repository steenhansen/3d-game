


// pylonCollide()
function plainPylon(the_player, a_pylon) {
  a_pylon.m_pylon_hit_flash = PYLON_HIT_FLASH_COUNT;
  console.log("plainPylon()", THE_PLANET);
  if (THE_PLANET != 4) {
    the_player.m_recoil_count = RECOIL_COUNTDOWN;

    new_direction = objectBounced(g_planet.m_move_direction);
    g_planet.m_move_direction = new_direction;
  }
  the_player.m_screen_askew = 10;
  return [the_player, a_pylon];
}
