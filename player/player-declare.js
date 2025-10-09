
const RECOIL_COUNTDOWN = 30;
const MAX_CRACKS = 3;
// 784 cannot see first RED

// 778 can just see first red
let a_player = {
  s_isa: "is-player",
  //m_enemy_collision: false,

  m_recoiling: false,
  m_recoil_count: 0,

  m_x: PLAYER_START_X,
  m_y: PLAYER_START_Y,
  m_taking_off: false,   //g_taking_off = true;
  //x: 49500, m_y: 400 // 778
  //x: 49000, m_y: 400 // 778
  m_shaking: false,
  m_screen_askew: 0,

  m_fly_amount: 0,
  m_jump_amount: 0,
  m_in_hole: false,

  m_num_cracks: 0
};


let LEFT_OF_PLAYER = 'LEFT_OF_PLAYER';
let RIGHT_OF_PLAYER = 'RIGHT_OF_PLAYER';
let MIDDLE_OF_PLAYER = 'MIDDLE_OF_PLAYER';


var player_init_x = 0;
var player_init_y = 0;

function initPlayer(x, y, start_drift_dir) {
  player_init_x = x;
  player_init_y = y;
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