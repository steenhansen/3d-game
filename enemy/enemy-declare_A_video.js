// s_moves_x: [LEFT_100, RGHT_100, RGHT_100, LEFT_100].flat(),
// s_moves_y: [AWAY_100, AWAY_100, NEAR_100, NEAR_100].flat(),

//  m_state: ENEMY_0_FLOATING, ENEMY_1_BOUNCE, ENEMY_1_HIT, ENEMY_2_LIFTING, ENEMY_3_ZOMBIE


let enemy_1 = {
  s_enemy_number: 1,
  s_isa: "is-enemy",
  s_id: "enemy-1",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  s_colors: ['#ffff00', '#000000'],
  // m_star_color:     yellow to red?
  // m_planet_color: color to red?

  m_move_count: 0,
  m_x: 7000, m_y: 375,
  m_state: ENEMY_0_FLOATING,

  m_bounced_x_dir: 1,
};

let enemy_2 = {
  s_enemy_number: 2,
  s_isa: "is-enemy",
  s_id: "enemy-2",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 6500, m_y: 325,
  t_enemy_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#ffffff', '#ff0000'],
};

let enemy_3 = {
  s_enemy_number: 3,
  s_isa: "is-enemy",
  s_id: "enemy-3",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 6000, m_y: 275,
  t_enemy_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#000000', '#0000ff'],
};

let enemy_4 = {
  s_enemy_number: 4,
  s_isa: "is-enemy",
  s_id: "enemy-4",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 5500, m_y: 225,
  t_enemy_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#FF000088', '#00FF0044'],
};


let enemy_5 = {
  s_enemy_number: 5,
  s_isa: "is-enemy",
  s_id: "enemy-5",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 5000, m_y: 175,
  t_enemy_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#aaaaaa', '#cccccc'],
};

let enemy_6 = {
  s_enemy_number: 6,
  s_isa: "is-enemy",
  s_id: "enemy-6",
  s_moves_x: [LEFT_100].flat(),
  s_moves_y: [ZERO_10].flat(),
  m_move_count: 0,
  m_x: 4500, m_y: 125,
  t_enemy_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  t_hover_up: 0,
  s_colors: ['#123456', '#7890ab'],
};


html_enemy1 = createEnemyHtml(enemy_1);
html_enemy2 = createEnemyHtml(enemy_2);
html_enemy3 = createEnemyHtml(enemy_3);
html_enemy4 = createEnemyHtml(enemy_4);
html_enemy5 = createEnemyHtml(enemy_5);
html_enemy6 = createEnemyHtml(enemy_6);


document.getElementById('enemy-area').innerHTML = `
<div id="enemy-1-container" >${html_enemy1}</div>
<div id="enemy-2-container" >${html_enemy2}</div>
<div id="enemy-3-container" >${html_enemy3}</div>
<div id="enemy-4-container" >${html_enemy4}</div>
<div id="enemy-5-container" >${html_enemy5}</div>
<div id="enemy-6-container" >${html_enemy6}</div>
`;


///<div id="enemy-3-container" >${html_enemy3}</div>

