

let base_enemy_0 = {
  s_enemy_number: 0,
  s_moves_x: [ZERO_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  s_colors: ['#ee2288', '#004488'],
  m_x: 900, m_y: 316,
};

let base_enemy_1 = {
  s_enemy_number: 1,
  s_moves_x: [ZERO_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  s_colors: ['#FFbb22', '#ffffff'],
  m_x: 1500, m_y: 96,
};


function makeEnemiesJump(playground_box) {
  declared_enemies = [];
  enemy_data_0 = initEnemyData(playground_box, base_enemy_0, 0);
  html_enemy0 = createEnemyHtml(enemy_data_0);
  declared_enemies.push(enemy_data_0);

  enemy_data_1 = initEnemyData(playground_box, base_enemy_1, 1);
  html_enemy1 = createEnemyHtml(enemy_data_1);
  declared_enemies.push(enemy_data_1);

  document.getElementById('enemy-area').innerHTML = `
<div id="enemy-0-container" >${html_enemy0}</div>
<div id="enemy-1-container" >${html_enemy1}</div>
`;

  return declared_enemies;
}