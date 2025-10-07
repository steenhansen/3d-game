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
  m_x: 7000, m_y: 375,
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
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 6500, m_y: 325,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#ffffff', '#ff0000'],
};

let enemy_3 = {
  s_number: 3,
  s_isa: "is-enemy",
  s_id: "enemy-3",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 6000, m_y: 275,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#000000', '#0000ff'],
};

let enemy_4 = {
  s_number: 4,
  s_isa: "is-enemy",
  s_id: "enemy-4",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 5500, m_y: 225,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#FF000088', '#00FF0044'],
};


let enemy_5 = {
  s_number: 5,
  s_isa: "is-enemy",
  s_id: "enemy-5",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 5000, m_y: 175,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#aaaaaa', '#cccccc'],
};

let enemy_6 = {
  s_number: 6,
  s_isa: "is-enemy",
  s_id: "enemy-6",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 4500, m_y: 125,
  m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_hover_up: 0,
  m_colors: ['#123456', '#7890ab'],
};


html_enemy1 = makeEnemy(enemy_1);
html_enemy2 = makeEnemy(enemy_2);
html_enemy3 = makeEnemy(enemy_3);
html_enemy4 = makeEnemy(enemy_4);
html_enemy5 = makeEnemy(enemy_5);
html_enemy6 = makeEnemy(enemy_6);


document.getElementById('enemy-area').innerHTML = `
<div id="enemy-1-container" >${html_enemy1}</div>
<div id="enemy-2-container" >${html_enemy2}</div>
<div id="enemy-3-container" >${html_enemy3}</div>
<div id="enemy-4-container" >${html_enemy4}</div>
<div id="enemy-5-container" >${html_enemy5}</div>
<div id="enemy-6-container" >${html_enemy6}</div>
`;


///<div id="enemy-3-container" >${html_enemy3}</div>

