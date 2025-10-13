

// should be in player
function collisionShake(g_player) {
  if ('t_screen_askew' in g_player) {
    g_player.t_screen_askew--;
    if (g_player.t_screen_askew == 0) {
      delete g_player.t_screen_askew;
    }
    askew_int = parseInt(g_player.t_screen_askew);
    askew_deg2 = `${askew_int}deg`;
    setCssVar("--collide-shake-angle", askew_deg2);
  }

}



function doRecoil(g_player) {
  if ('t_recoil_count' in g_player) {
    g_player.t_recoil_count--;
    if (g_player.t_recoil_count == 0) {
      delete g_player.t_recoil_count;
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

