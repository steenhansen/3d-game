
let enemy_1 = {
  s_isa: "is-enemy", s_id: "enemy-1",
  s_number: 1, m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  // m_x: ENEMY_BIRTH_X, m_y: ENEMY_BIRTH_Y,
  m_x: 2500, m_y: 600,
  m_begins: 0,


  m_moves: 0,
  // s_moves_x: [LEFT_100, RGHT_100, RGHT_100, LEFT_100].flat(),
  // s_moves_y: [AWAY_100, AWAY_100, NEAR_100, NEAR_100].flat(),
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  //s_moves_x: [ZERO_10].flat(),
  m_hover_up: 0,
  //s_moves_y: [ZERO_10].flat(),
  m_dead: false,
  m_colors: SUN_SYSTEM_COLS[5],
};

let enemy_2 = {
  s_isa: "is-enemy", s_id: "enemy-2",
  s_number: 2, m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_x: ENEMY_BIRTH_X + 2, m_y: ENEMY_BIRTH_Y + 222,

  m_begins: 0,

  m_moves: 0,
  s_moves_x: [ZERO_10].flat(),
  s_moves_y: [ZERO_10].flat(),

  m_hover_up: 0,
  m_dead: false,
  m_colors: SUN_SYSTEM_COLS[10],

};



html_enemy1 = makeEnemy(enemy_1);
html_enemy2 = makeEnemy(enemy_2);


document.getElementById('enemy-area').innerHTML = `
<div id="enemy-1-container" >${html_enemy1}</div>
<div id="enemy-2-container" >${html_enemy2}</div>
`;
