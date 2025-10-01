

// should be in player
function collisionShake(g_player) {
  if (g_player.m_shaking) {
    g_player.m_screen_askew--;
    if (g_player.m_screen_askew == 0) {
      g_player.m_shaking = false;
    }
    askew_int = parseInt(g_player.m_screen_askew);
    askew_deg2 = `${askew_int}deg`;
    setCssVar("--collide-shake-angle", askew_deg2);
  }

}



function doBounce(g_player) {
  if (g_player.m_recoiling) {
    g_player.m_recoil_count--;
    if (g_player.m_recoil_count == 0) {
      g_player.m_recoiling = false;
      g_move_direction = MOVINGx_NOT;
    }
  }
  return g_player;
  // if (g_move_continue > 1) {
  //   g_move_continue--;
  // } else if (g_move_continue == 1) {
  //   g_move_continue--;
  //   g_move_direction = MOVINGx_NOT;
  // } else {
  // }
}

