

function collisionShake() {
  askew_deg = getCssVar("--collide-shake-angle");
  askew_int = parseInt(askew_deg);
  if (askew_int != 0) {
    askew_int = askew_int - 5;
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

