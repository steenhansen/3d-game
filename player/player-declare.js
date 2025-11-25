const MAX_CRACKS = 3;

let a_player = {
  s_isa: "is-player",
  m_is_dying: false,
  m_recoil_count: 0,
  m_hit_hole_last_move: false,
  m_x: PLAYER_START_X,
  m_y: PLAYER_START_Y,
  m_screen_askew: 0,
  m_fly_amount: 0,
  m_jump_amount: 0,
  m_sky_restart: 0,
  m_num_cracks: 0,
};




var player_init_x = 0;
var player_init_y = 0;


function resetPlayer() {
  the_player = a_player;
  the_player.m_x = player_init_x;
  the_player.m_y = player_init_y;
  the_player.m_num_cracks = 0;
  return the_player;
}

function initPlayer(player_in_squares) {
  err_mess = "initPlayer()";
  xy_pixels = originOffset2(player_in_squares, err_mess);
  player_init_x = xy_pixels[0];
  player_init_y = xy_pixels[1];
  the_player = resetPlayer();
  return the_player;
}






