
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


function initPlayer(playground_box, xy_player, start_move_dir, start_drift_dir) {
  let [left_x, top_y, _right_x, _bottom_y] = playground_box;
  let [x, y] = xy_player;
  checkerboard_width = g_planet.s_checkerboard_width;
  checkerboard_depth = g_planet.s_checkerboard_depth;






  player_init_x = left_x + x;
  player_init_y = top_y + y;

  xyNotInField(player_init_x, player_init_y, `Offset player coords is out of bounds`);

  g_planet.t_move_direction = start_move_dir;


  g_planet.t_drift_direction = start_drift_dir;
  the_player = resetPlayer();
  // console.log("the_palyer", the_player);
  return the_player;
}
