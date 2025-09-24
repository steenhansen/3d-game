
function objectMomentum(the_enemy) {
  m_x_dir = the_enemy.m_x_dir;
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

function huntPhase(the_enemy) {
  let { m_x, m_y, m_moves, s_moves_x, s_moves_y } = the_enemy;
  if (m_moves < s_moves_x.length) {
    m_moves++;
  } else {
    m_moves = 0; // reset to start
  }
  x_dir = s_moves_x[m_moves];
  y_dir = s_moves_y[m_moves];

  if (x_dir < 0) {
    steps_left = x_dir * -1 * 3;
    the_enemy.m_x = leftOnBoard(m_x, steps_left);    //3);
  } else if (x_dir > 0) {
    steps_right = x_dir * 3;
    the_enemy = rightOnBoard(the_enemy, steps_right);    //3);
  }

  if (y_dir < 0) {
    the_enemy.m_y = backwardOnBoard(m_y, y_dir * -1);
  } else if (y_dir > 0) {
    the_enemy.m_y = forwardOnBoard(m_y, y_dir * 1);
  }
  the_enemy.m_moves = m_moves;
  return the_enemy;
}
function enemySet(real_id, the_enemy, g_player) {
  if (!the_missile_1.m_expired) {
    collision_e1 = hasCollided(the_missile_1, the_enemy, COLLISION_SIZES);
    if (collision_e1) {
      the_enemy = killEnemy(the_enemy);
    }
  }

  //  spriteDraw(real_id, the_enemy, g_player);
  enemyDraw(real_id, the_enemy, g_player);

  return the_enemy;
}


let enemy_1 = {
  s_isa: "is-enemy", s_id: "enemy-1",
  m_x: ENEMY_BIRTH_X, m_y: ENEMY_BIRTH_Y,
  // m_x: 4344, m_y: 111,
  m_begins: 0,
  s_begin_x: [LEFT_100].flat(),
  s_begin_y: [ZERO_100].flat(),

  m_moves: 0,
  // s_moves_x: [LEFT_100, RGHT_100, RGHT_100, LEFT_100].flat(),
  // s_moves_y: [AWAY_100, AWAY_100, NEAR_100, NEAR_100].flat(),
  s_moves_x: [ZERO_10].flat(),
  s_moves_y: [ZERO_10].flat(),
  //s_moves_x: [ZERO_10].flat(),
  m_hover_up: 0,
  //s_moves_y: [ZERO_10].flat(),
  m_dead: false,
  m_colors: SUN_SYSTEM_COLS[5],
};

let enemy_2 = {
  s_isa: "is-enemy", s_id: "enemy-2",
  m_x: 10, m_y: 10,

  m_begins: 0,
  s_begin_x: [RGHT_100].flat(),
  s_begin_y: [ZERO_100].flat(),

  m_moves: 0,
  s_moves_x: [RGHT_100, RGHT_100, RGHT_100, RGHT_100].flat(),
  s_moves_y: [AWAY_100, AWAY_100, AWAY_100, AWAY_100].flat(),

  m_hover_up: 0,
  m_dead: false,
  m_colors: SUN_SYSTEM_COLS[10],

};



html_enemy1 = makeEnemy(enemy_1, false);
//html_enemy2 = makeEnemy(enemy_2, false);


document.getElementById('enemy-area').innerHTML = `
<div id="enemy-1-container" >${html_enemy1}</div>

`;
