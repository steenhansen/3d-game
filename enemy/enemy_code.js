
function objectMomentum(the_enemy) {
  m_x_dir = the_enemy.m_m_x_dir;
  if (m_x_dir < 0) {
    the_enemy.m_x = leftOnBoard(the_enemy.m_x, m_x_dir * -4 * 3);
  } else if (m_x_dir > 0) {
    the_enemy.m_x = rightOnBoard(the_enemy.m_x, m_x_dir * 4 * 3);
  }

  m_y_dir = the_enemy.m_y_dir;
  if (m_y_dir < 0) {
    the_enemy.m_y = backwardOnBoard(the_enemy.m_y, m_y_dir * -4);
  } else if (m_y_dir > 0) {
    the_enemy.m_y = forwardOnBoard(the_enemy.m_y, m_y_dir * 4);
  }
}

function enemySet(real_id, the_sprite, g_player) {
  spriteDraw(real_id, the_sprite, g_player);
}

// console.log(`
// <div id="the-enemy-1" >${html_enemy_1}</div>
// <div id="the-enemy-2" >${html_enemy_2}</div>
// `);

let the_enemy_1 = {
  s_isa: "is-enemy",
  s_id: "enemy-1",
  // m_x: 333, m_y: 333,
  m_x: 1555, m_y: 555,
  m_index: 0,
  s_moves_x: [], //LEFT_100, ZERO_100, RGHT_100, ZERO_100].flat(),
  s_moves_y: [], //ZERO_100, AWAY_100, ZERO_100, NEAR_100].flat(),
  m_dead: false,
  m_colors: ['yellow', 'black', 'black', 'black'],
};

let the_enemy_2 = {
  s_isa: "is-enemy",
  s_id: "enemy-2",
  m_x: 1855, m_y: 555,


  m_index: 0,

  s_moves_x: [RGHT_100, ZERO_100, LEFT_100, ZERO_100].flat(),
  s_moves_y: [ZERO_100, NEAR_100, ZERO_100, AWAY_100].flat(),
  // s_moves_x: [ZERO_100, ZERO_100, ZERO_100, ZERO_100].flat(),
  // s_moves_y: [ZERO_100, NEAR_100, ZERO_100, AWAY_100].flat(),
  m_dead: false,
  m_colors: ['goldenrod', 'black', 'white', 'grey'],

};



html_enemy_1 = makeEnemy(the_enemy_1, true);
html_enemy_2 = makeEnemy(the_enemy_2, false);

document.getElementById('enemy-area').innerHTML = `
<div id="enemy-1-container" >${html_enemy_1}</div>
<div id="enemy-2-container" >${html_enemy_2}</div>
`;

// document.getElementById('enemy-area').innerHTML = `
// ${html_enemy_1}
// ${html_enemy_2}
// `;