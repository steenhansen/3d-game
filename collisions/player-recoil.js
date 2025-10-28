

// should be in player
function collisionShake(the_player) {
  if ('t_screen_askew' in the_player) {
    the_player.t_screen_askew--;
    if (the_player.t_screen_askew == 0) {
      delete the_player.t_screen_askew;
    }
    askew_int = parseInt(the_player.t_screen_askew);
    askew_deg2 = `${askew_int}deg`;
    setCssVar("--collide-shake-angle", askew_deg2);
  }

}



function doRecoil(the_player) {
  if ('t_recoil_count' in the_player) {
    the_player.t_recoil_count--;
    if (the_player.t_recoil_count == 0) {
      delete the_player.t_recoil_count;
      g_planet.t_move_direction = MOVINGx_NOT;
    }
  }
  return the_player;
}

