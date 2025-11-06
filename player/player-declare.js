
// const RECOIL_COUNTDOWN = 5;   // was 30
const MAX_CRACKS = 3;

let a_player = {
  s_isa: "is-player",
  //t_is_dying: false,          

  // t_recoil_count: 0,

  //  the_player.m_hit_hole_last_move
  m_hit_hole_last_move: false,

  m_x: PLAYER_START_X,
  m_y: PLAYER_START_Y,
  //x: 49500, m_y: 400 // 778
  //x: 49000, m_y: 400 // 778

  // t_screen_askew: 0,  

  //t_fly_amount: 0,  
  // t_jump_amount: 23;

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




function initPlayer(player_in_squares, start_move_dir, start_drift_dir) {
  err_mess = "initPlayer()";
  xy_pixels = originOffset2(player_in_squares, err_mess);
  player_init_x = xy_pixels[0];
  player_init_y = xy_pixels[1];
  g_planet.t_move_direction = start_move_dir;
  g_planet.t_drift_direction = start_drift_dir;
  the_player = resetPlayer();
  return the_player;
}




