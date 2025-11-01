



function makeEnemy789(playground_box, enemy_base, enemy_number) {
  enemy_data2 = initEnemyData(playground_box, enemy_base, enemy_number);
  html_enemy = createEnemyHtml(enemy_data2);

  document.getElementById('enemy-area').innerHTML += `
<div id="enemy-${enemy_number}-container" >${html_enemy}</div>

`;

  return enemy_data2;
}
///////////////////
function makeEnemies789(playground_box) {
  declared_enemies = [];
  for (let r = 0; r < 10; r++) {
    base_enemy.s_enemy_number = r;
    base_enemy.m_x = r * 60 + 1300;
    an_enemy = makeEnemy789(playground_box, base_enemy, r);
    declared_enemies.push(an_enemy);
  }
  return declared_enemies;
}


let base_enemy = {
  s_enemy_number: -17,
  s_moves_x: [LEFT_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  s_colors: ['#ee2288', '#004488'],    // enemies never change colors
  m_x: -13,
  m_y: 1,
};



// let base_enemy = {
//   s_enemy_number: 0,
//   s_isa: "is-enemy",
//   s_id: "enemy-0",
//   s_moves_x: [LEFT_10].flat(),
//   s_moves_y: [ZERO_10].flat(),
//   s_colors: ['#ee2288', '#004488'],    // enemies never change colors
//   m_move_count: 0,
//   m_x: 2000, m_y: 1,
//   m_bounced_x_dir: 1,
//   m_state: ENEMY_0_FLOATING,
// };
