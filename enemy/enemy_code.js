

function enemyMove(the_enemy) {
  let { m_x, m_y, m_moves, s_moves_x, s_moves_y, m_bounced_x_dir } = the_enemy;


  //console.log("enemyMove", m_moves, s_moves_x.length);
  if (m_moves < s_moves_x.length - 1) {
    m_moves++;
  } else {
    m_moves = 0; // reset to start
  }
  //x console.log("enemyMove22222", m_moves, s_moves_x[m_moves]);
  // bounce off of pylons only changes
  x_dir = s_moves_x[m_moves];

  // not bounced
  //   x_adjusted_dir = -1(left)  x 1(not inverted)    -1
  //                     0        x 1(not inverted)     0
  //                    +1(right) x 1(not inverted)     1 

  // inverted bounced
  //   x_adjusted_dir = -1(left)  x -1(inverted)        1
  //                     0        x -1(inverted)        0
  //                    +1(right) x -1(inverted)        -1
  x_adjusted_dir = x_dir * m_bounced_x_dir;


  //console.log("x_adjusted_dir", x_adjusted_dir, x_dir, m_bounced_x_dir);

  y_dir = s_moves_y[m_moves];

  if (x_adjusted_dir < 0) {
    //    steps_left = x_adjusted_dir * -1 * TRAVEL_SPEED * 3;   // matches the player
    steps_left = TRAVEL_SPEED * 3;   // matches the player
    //steps_left = x_adjusted_dir * -1 * TRAVEL_SPEED * 6;   // twice matches the player
    the_enemy.m_x = leftOnBoard(m_x, steps_left);    //3);
    // qbert 49 - these two handle stuff differently, return x  OR return changed object

  } else if (x_adjusted_dir > 0) {
    //    steps_right = x_adjusted_dir * TRAVEL_SPEED * 3;
    steps_right = TRAVEL_SPEED * 3;
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



function drawEnemies(the_enemies, g_player) {
  changed_enemies = [];
  number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    enemy_name = an_enemy.s_id;
    changed_enemy = enemyDraw(enemy_name, an_enemy, g_player);
    changed_enemies[enemy_index] = changed_enemy;
  }
  return changed_enemies;
}



function enemyDraw(real_id, the_enemy, g_player) {
  enemy_state = the_enemy.m_state;
  if (enemy_state == ENEMY_0_FLOATING) {
    enemyPlace(real_id, the_enemy, g_player);
    the_enemy = enemyMove(the_enemy);
  } else if (enemy_state == ENEMY_1_BOUNCE) {
    setCssEnemyColor(the_enemy.s_number, '#ff0000');
    the_enemy = enemyMove(the_enemy);
    // the_enemy = enemyMove(the_enemy);
    // the_enemy = enemyMove(the_enemy);
    // the_enemy = enemyMove(the_enemy);

    enemyPlace(real_id, the_enemy, g_player);
    the_enemy.m_hit_flash--;
    if (the_enemy.m_hit_flash == 0) {
      setCssEnemyColor(the_enemy.s_number, '#ffff00');
      the_enemy.m_state = ENEMY_0_FLOATING;
    }



  } else if (enemy_state == ENEMY_1_HIT) {
    setCssEnemyColor(the_enemy.s_number, '#ff0000');
    enemyPlace(real_id, the_enemy, g_player);
    the_enemy.m_hit_flash--;
    if (the_enemy.m_hit_flash == 0) {
      the_enemy.m_state = ENEMY_2_LIFTING;
    }
  } else if (enemy_state == ENEMY_2_LIFTING) {
    setCssEnemyColor(the_enemy.s_number, '#aaaa00');
    enemyPlace(real_id, the_enemy, g_player);
    the_enemy.m_state = ENEMY_2_LIFTING;
    //setCssEnemyColor(the_enemy.s_number, 'cyan');
    the_enemy.m_hover_up = the_enemy.m_hover_up + TRAVEL_SPEED;
    if (the_enemy.m_hover_up > 512) {
      the_enemy.m_state = ENEMY_3_DEAD;
    }
    enemyPlace(real_id, the_enemy, g_player);
  } else { // ENEMY_3_DEAD
    // console.log("ENEMY_3_DEAD", the_enemy);
    the_enemy.m_dead = true;
  }
  //console.log("hov", the_enemy.m_hover_up);
  return the_enemy;
}


function objectMomentum(the_enemy) {
  m_x_dir = the_enemy.m_x_dir;
  if (m_x_dir < 0) {
    the_enemy.m_x = leftOnBoard(the_enemy.m_x, m_x_dir * -4 * 3);
  } else if (m_x_dir > 0) {
    // qbert 49 - these two handle stuff differently, return x  OR return changed object

    the_enemy.m_x = rightOnBoard(the_enemy.m_x, m_x_dir * -4 * 3);
  }

  m_y_dir = the_enemy.m_y_dir;
  if (m_y_dir < 0) {
    the_enemy.m_y = backwardOnBoard(the_enemy.m_y, m_y_dir * -4);
  } else if (m_y_dir > 0) {
    the_enemy.m_y = forwardOnBoard(the_enemy.m_y, m_y_dir * 4);
  }
}



let enemy_1 = {
  s_isa: "is-enemy", s_id: "enemy-1",
  s_number: 1, m_hit_flash: 0,
  m_bounced_x_dir: 1,
  m_state: ENEMY_0_FLOATING,
  m_x: ENEMY_BIRTH_X, m_y: ENEMY_BIRTH_Y,
  // m_x: 4344, m_y: 111,
  m_begins: 0,


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


function enemyPosition(real_id, z_index, the_stats, m_hover_up, m_state) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;
  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);
  //  if enemy then - ENEMY_TO_HORIZON_LIFT


  enemy_lifting_y = center_y - ENEMY_TO_HORIZON_LIFT - m_hover_up;
  missile_x_y.setAttribute("y", enemy_lifting_y);



  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;

  if (m_state == ENEMY_1_HIT) {

  }


}


function enemyPlace(real_id, the_enemy, g_player) {

  enemy_player_ys = [the_enemy.m_y, g_player.m_y];

  real_id = the_enemy.s_id;
  [the_z_index, difference_y, enemy_relative, x_center_offset, head_on_view] = objectPlacement(the_enemy, g_player);
  if (enemy_relative == LEFT_OF_PLAYER) {



    left_mid_right_vlines = objectLeftSide(x_center_offset, enemy_player_ys);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, enemy_player_ys);
  }
  gradient_front = 'clear-grad';
  the_stats = spriteFront(left_mid_right_vlines);
  //console.log("enemy THE_STATS", real_id, the_stats);
  enemyPosition(real_id, the_z_index, the_stats, the_enemy.m_hover_up, the_enemy.m_state);
}




function killEnemy(the_enemy) {
  console.log("kiillenemy");
  // let { s_isa, s_id,
  //   m_x, m_y,
  //   m_moves,
  //   s_moves_x, s_moves_y,
  //   m_dead, m_colors
  // } = the_enemy;

  let { s_id, m_x, m_y, m_colors } = the_enemy;

  let killed_enemy = {
    s_isa: "is-enemy",
    m_state: ENEMY_2_LIFTING,
    s_id: s_id,
    m_x: m_x, m_y: m_y,
    m_moves: -1,
    s_moves_x: [], s_moves_y: [],
    m_dead: false,
    m_hover_up: 0,
    m_colors: m_colors,
    // m_colors: ['green', 'red', 'blue', 'orange'],
  };
  html_killed = makeEnemy(killed_enemy);

  container_id = s_id + "-container";

  document.getElementById(container_id).innerHTML = `
      ${html_killed}
`;
  return killed_enemy;
}