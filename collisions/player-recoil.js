

// should be in player
function collisionShake(the_player) {
  if (the_player.m_screen_askew > 0) {
    the_player.m_screen_askew--;
    askew_int = parseInt(the_player.m_screen_askew);
    askew_deg2 = `${askew_int}deg`;
    setCssVar("--collide-shake-angle", askew_deg2);


  }
  return the_player;

}



function doRecoil(the_player) {
  if (the_player.m_recoil_count > 0) {
    the_player.m_recoil_count--;
    if (the_player.m_recoil_count == 0) {
      g_planet.m_move_direction = MOVINGx_NOT;
    }
  }
  return the_player;
}

