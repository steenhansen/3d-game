
const RECOIL_COUNTDOWN = 30;

// 784 cannot see first RED

// 778 can just see first red
let g_player = {
  s_isa: "is-player",
  m_enemy_collision: false,

  m_recoiling: false,
  m_recoil_count: 0,

  m_x: PLAYER_START_X,
  m_y: PLAYER_START_Y,
  m_taking_off: false,   //g_taking_off = true;
  //x: 49500, m_y: 400 // 778
  //x: 49000, m_y: 400 // 778
};


let LEFT_OF_PLAYER = 'LEFT_OF_PLAYER';
let RIGHT_OF_PLAYER = 'RIGHT_OF_PLAYER';
let MIDDLE_OF_PLAYER = 'MIDDLE_OF_PLAYER';
//let pylon_HIDDEN = 'pylon_HIDDEN';