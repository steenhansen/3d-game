const MAX_CRACKS = 3;

const INIT_PLAYER = {
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




let f_player_init_x = 0;
let f_player_init_y = 0;


function resetPlayer() {
  the_player = INIT_PLAYER;
  the_player.m_x = f_player_init_x;
  the_player.m_y = f_player_init_y;
  the_player.m_num_cracks = 0;
  the_player.m_is_dying = false;
  return the_player;
}

function initPlayer(player_in_squares) {
  const err_mess = "initPlayer()";
  const xy_pixels = originOffset(player_in_squares, err_mess);
  f_player_init_x = xy_pixels[0];
  f_player_init_y = xy_pixels[1];
  const the_player = resetPlayer();
  return the_player;
}






