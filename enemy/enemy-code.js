
const ENEMY_HIDDEN = 512;
function enemyMove(the_enemy) {
  let { m_x, m_y, m_move_count, s_moves_x, s_moves_y, m_bounced_x_dir } = the_enemy;
  if (m_move_count < s_moves_x.length - 1 && m_move_count < s_moves_y.length - 1) {
    m_move_count++;
  } else {
    m_move_count = 0; // reset to start
  }
  x_dir = s_moves_x[m_move_count];

  // not bounced
  //   x_adjusted_dir = -1(left)  x 1(not inverted)    -1
  //                     0        x 1(not inverted)     0
  //                    +1(right) x 1(not inverted)     1 

  // inverted bounced
  //   x_adjusted_dir = -1(left)  x -1(inverted)        1
  //                     0        x -1(inverted)        0
  //                    +1(right) x -1(inverted)        -1
  x_adjusted_dir = x_dir * m_bounced_x_dir;

  y_dir = s_moves_y[m_move_count];

  if (x_adjusted_dir < 0) {
    //  steps_left = TRAVEL_SPEED * 3;   // matches the player
    the_enemy.m_x = leftOnBoard(m_x, 11);   //   12);  steps_left);
  } else if (x_adjusted_dir > 0) {
    // steps_right = TRAVEL_SPEED * 3;
    the_enemy.m_x = rightOnBoard(m_x, 11);   //   12);  steps_left);
  }

  if (y_dir < 0) {
    the_enemy.m_y = backwardOnBoard(m_y, 1);
  } else if (y_dir > 0) {
    the_enemy.m_y = forwardOnBoard(m_y, 1);
  }
  the_enemy.m_move_count = m_move_count;
  return the_enemy;
}



function drawEnemies(the_enemies, g_player) {
  changed_enemies = [];
  number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    //    console.log("dddlakjsdfdsf", enemy_index);
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
    //console.log("en  ENEMY_0_FLOATING");
    enemyPlace(real_id, the_enemy, g_player);
    the_enemy = enemyMove(the_enemy);
  } else if (enemy_state == ENEMY_1_BOUNCE) {
    // console.log("en  ENEMY_1_BOUNCE");
    setCssEnemyEdge(the_enemy.s_enemy_number, '48px');   //'#ff0000');
    the_enemy = enemyMove(the_enemy);
    enemyPlace(real_id, the_enemy, g_player);
    the_enemy.t_enemy_hit_flash--;
    if (the_enemy.t_enemy_hit_flash == 0) {
      delete the_enemy.t_enemy_hit_flash;
      setCssEnemyEdge(the_enemy.s_enemy_number, '0px');
      //   console.log("en  ENEMY_0_FLOATING -------------------------");
      //setCssEnemyColor(the_enemy.s_enemy_number, '0px'); //, '#ffff00');
      the_enemy.m_state = ENEMY_0_FLOATING;
    }
  } else if (enemy_state == ENEMY_1_HIT) {
    setCssEnemyOpacity(the_enemy.s_enemy_number, 0.3333);
    enemyPlace(real_id, the_enemy, g_player);
    the_enemy.t_enemy_hit_flash--;
    if (the_enemy.t_enemy_hit_flash == 0) {
      delete the_enemy.t_enemy_hit_flash;
      the_enemy.t_hover_up = 0;
      the_enemy.m_state = ENEMY_2_LIFTING;
    }
  } else if (enemy_state == ENEMY_2_LIFTING) {
    // setCssEnemyColor(the_enemy.s_enemy_number, '#aaaa00');
    enemyPlace(real_id, the_enemy, g_player);
    // the_enemy.m_state = ENEMY_2_LIFTING;
    the_enemy.t_hover_up = the_enemy.t_hover_up + TRAVEL_SPEED;
    if (the_enemy.t_hover_up > ENEMY_HIDDEN) {
      delete the_enemy.t_hover_up;
      the_enemy.m_state = ENEMY_3_DEAD;
    }
    enemyPlace(real_id, the_enemy, g_player);
  } else if (enemy_state == ENEMY_3_DEAD) {
    enemyPlace(real_id, the_enemy, g_player);  // hide it completely
    the_enemy.m_state = ENEMY_4_HIDDEN;         // do nothing
  } else {
    //  ENEMY_4_HIDDEN  do nothing as enemy is hidden comletely
    //  console.log("dead enemy", the_enemy);
    // enemyPlace(real_id, the_enemy, g_player);
    //the_enemy.m_dead = true;
  }
  return the_enemy;
}


function objectMomentum(the_enemy) {
  m_x_dir = the_enemy.m_x_dir;
  if (m_x_dir < 0) {
    the_enemy.m_x = leftOnBoard(the_enemy.m_x, 4 * 3);
  } else if (m_x_dir > 0) {
    the_enemy.m_x = rightOnBoard(the_enemy.m_x, 4 * 3);
  }

  m_y_dir = the_enemy.m_y_dir;
  if (m_y_dir < 0) {
    the_enemy.m_y = backwardOnBoard(the_enemy.m_y, -4);       // why neg?
  } else if (m_y_dir > 0) {
    the_enemy.m_y = forwardOnBoard(the_enemy.m_y, 4);
  }
}




function enemyPosition(real_id, z_index, the_stats, hover_up) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;
  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);
  //  if enemy then - ENEMY_TO_HORIZON_LIFT


  enemy_lifting_y = center_y - ENEMY_TO_HORIZON_LIFT - hover_up;
  missile_x_y.setAttribute("y", enemy_lifting_y);



  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;



}


function enemyPlace(real_id, the_enemy, g_player) {
  enemy_player_ys = [the_enemy.m_y, g_player.m_y];
  real_id = the_enemy.s_id;
  [the_z_index, difference_y, enemy_relative, x_center_offset, head_on_view] = objectPlacement(the_enemy, g_player);
  if (enemy_relative == LEFT_OF_PLAYER) {
    left_mid_right_vlines = objectLeftSide(x_center_offset, enemy_player_ys, ENEMY_PIXEL_DEPTH);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, enemy_player_ys, ENEMY_PIXEL_DEPTH);
  }
  gradient_front = 'clear-grad';
  the_stats = spriteFront(left_mid_right_vlines);
  //console.log("enemy THE_STATS", real_id, the_stats);
  if (the_enemy.m_state == ENEMY_3_DEAD) {
    hover_up = ENEMY_HIDDEN;
  } else if ("t_hover_up" in the_enemy) {
    hover_up = the_enemy.t_hover_up;
  } else {
    hover_up = 0;
  }

  enemyPosition(real_id, the_z_index, the_stats, hover_up);
}




function killEnemy(the_enemy) {
  // console.log("kiillenemy");
  // let { s_isa, s_id,
  //   m_x, m_y,
  //   m_move_count,
  //   s_moves_x, s_moves_y,
  //   m_dead, s_colors
  // } = the_enemy;

  let { s_id, m_x, m_y, s_colors } = the_enemy;

  let killed_enemy = {
    s_isa: "is-enemy",
    m_state: ENEMY_2_LIFTING,
    s_id: s_id,
    m_x: m_x, m_y: m_y,
    m_move_count: -1,
    s_moves_x: [], s_moves_y: [],
    m_dead: true,
    s_colors: s_colors,
    // s_colors: ['green', 'red', 'blue', 'orange'],
  };
  html_killed = makeEnemy(killed_enemy);

  container_id = s_id + "-container";

  document.getElementById(container_id).innerHTML = `
      ${html_killed}
`;
  return killed_enemy;
}