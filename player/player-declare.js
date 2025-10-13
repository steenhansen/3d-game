
const RECOIL_COUNTDOWN = 30;
const MAX_CRACKS = 3;
// 784 cannot see first RED

// 778 can just see first red
let a_player = {


  // t_recoil_count: 0, 

  m_x: PLAYER_START_X,
  m_y: PLAYER_START_Y,

  //x: 49500, m_y: 400 // 778
  //x: 49000, m_y: 400 // 778

  // t_screen_askew: 0,  

  //t_fly_amount: 0,  
  // t_jump_amount: 23;

  m_num_cracks: 0
};


let LEFT_OF_PLAYER = 'LEFT_OF_PLAYER';
let RIGHT_OF_PLAYER = 'RIGHT_OF_PLAYER';
let MIDDLE_OF_PLAYER = 'MIDDLE_OF_PLAYER';


var player_init_x = 0;
var player_init_y = 0;

function initPlayer(x, y, start_move_dir, start_drift_dir) {
  if (x < 0 || x > g_checkerboard_width) {
    console.log("initPlayer X out of range " + x);
  }
  if (y < 0 || y > g_checkerboard_depth) {
    console.log("initPlayer Y out of range " + y);
  }
  player_init_x = x;
  player_init_y = y;
  g_move_direction = start_move_dir;
  g_drift_direction = start_drift_dir;
  g_player = resetPlayer();
  return g_player;
}

function resetPlayer() {
  the_player = a_player;
  the_player.m_x = player_init_x;
  the_player.m_y = player_init_y;
  the_player.m_num_cracks = 0;
  return the_player;
}