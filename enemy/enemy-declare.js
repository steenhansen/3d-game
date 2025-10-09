const HIT_FLASH_ENEMY = 20;



// s_moves_x: [LEFT_100, RGHT_100, RGHT_100, LEFT_100].flat(),
// s_moves_y: [AWAY_100, AWAY_100, NEAR_100, NEAR_100].flat(),

//  m_state: ENEMY_0_FLOATING, ENEMY_1_BOUNCE, ENEMY_1_HIT, ENEMY_2_LIFTING, ENEMY_3_DEAD

let enemy_1 = {
  s_number: 1,
  s_isa: "is-enemy",
  s_id: "enemy-1",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 2000, m_y: 316,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#ffff00', '#000000'],
};

let enemy_2 = {
  s_number: 2,
  s_isa: "is-enemy",
  s_id: "enemy-2",
  s_moves_x: [ZERO_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 6500, m_y: 96,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#FFbb22', '#ffffff'],
};

html_enemy1 = makeEnemy(enemy_1);
html_enemy2 = makeEnemy(enemy_2);


document.getElementById('enemy-area').innerHTML = `
<div id="enemy-1-container" >${html_enemy1}</div>
<div id="enemy-2-container" >${html_enemy2}</div>
`;
