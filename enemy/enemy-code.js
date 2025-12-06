
function plainEnemy(x_y_pos, two_colors, moves_x, moves_y, a_speed, ball_seconds) {
  if (!ball_seconds) {
    ball_seconds = '0s';
  }
  const an_enemy = {
    start_pos: x_y_pos,
    the_colors: two_colors,
    x_moves: moves_x,
    y_moves: moves_y,
    the_speed: a_speed,
    ball_start: ball_seconds
  };
  return an_enemy;
}


function makeEnemies(the_enemies) {
  let declared_enemies = [];
  const num_enemies = the_enemies.length;
  for (let e_index = 0; e_index < num_enemies; e_index++) {
    let an_enemy = the_enemies[e_index];
    const enemy_xy_squares = an_enemy.start_pos;
    const colors_of_enemy = an_enemy.the_colors;
    const moves_x = an_enemy.x_moves.flat();
    const moves_y = an_enemy.y_moves.flat();
    const the_speed = an_enemy.the_speed;
    const ball_start = an_enemy.ball_start;
    const enemy_id = e_index.toString().padStart(2, '0');
    // err_mess = `makeEnemies(${enemy_id})`;
    const xy_pixels = originOffset(enemy_xy_squares, IGNORE_BOUNDS);
    const new_enemy = initEnemyData(e_index, enemy_id, xy_pixels, colors_of_enemy, moves_x, moves_y, the_speed, ball_start);
    declared_enemies.push(new_enemy);
  }
  return declared_enemies;
}



function initEnemyData(enemy_number, enemy_id, xy_pixels, colors_of_enemy, moves_x, moves_y, the_speed, ball_start) {
  const the_id = `enemy-${enemy_id}`;
  const enemy_obj = {
    s_enemy_number: enemy_number,
    s_isa: "is-enemy",
    s_id: the_id,
    m_x: xy_pixels[0],
    m_y: xy_pixels[1],
    s_moves_x: moves_x,
    s_moves_y: moves_y,
    s_colors: colors_of_enemy,
    m_move_count: 0,
    m_bounced_x_dir: 1,
    m_bounced_y_dir: 1,
    m_enemy_state: ENEMY_0_HUNTING,
    s_speed: the_speed,
    s_ball_start: ball_start
  };
  const html_enemy = createEnemyHtml(enemy_obj);
  const enemy_container_id = `enemy-${enemy_number}-container`;
  const contained_enemy = `<div id="${enemy_container_id}" >${html_enemy}</div>`;
  document.getElementById('enemy-area').innerHTML += contained_enemy;
  return enemy_obj;
}





function enemyMove(the_enemy) {
  let { m_x, m_y, m_move_count, s_moves_x, s_moves_y, m_bounced_x_dir, m_bounced_y_dir, s_speed } = the_enemy;
  if (m_move_count < s_moves_x.length - 1 && m_move_count < s_moves_y.length - 1) {
    m_move_count++;
  } else {
    m_move_count = 0; // reset to start
  }
  const x_dir = s_moves_x[m_move_count];

  // not bounced
  //   x_adjusted_dir = -1(left)  x 1(not inverted)    -1
  //                     0        x 1(not inverted)     0
  //                    +1(right) x 1(not inverted)     1 

  // inverted bounced
  //   x_adjusted_dir = -1(left)  x -1(inverted)        1
  //                     0        x -1(inverted)        0
  //                    +1(right) x -1(inverted)        -1
  const x_adjusted_dir = x_dir * m_bounced_x_dir;

  if (g_p_graphics_style != P_SIMPLE) {
    showCorrectRotation(the_enemy.s_enemy_number, x_adjusted_dir);
  }
  const y_dir = s_moves_y[m_move_count];
  const y_adjusted_dir = y_dir * m_bounced_y_dir;
  if (x_adjusted_dir < 0) {
    the_enemy.m_x = leftOnBoard(m_x, 11 * s_speed);
  } else if (x_adjusted_dir > 0) {
    the_enemy.m_x = rightOnBoard(m_x, 11 * s_speed);
  } else {
    //
  }
  if (y_adjusted_dir < 0) {
    //    the_enemy.m_y = backwardOnBoard(m_y, 1);
    the_enemy.m_y = backwardOnBoard(m_y, 1 * s_speed);
  } else if (y_adjusted_dir > 0) {
    //    the_enemy.m_y = forwardOnBoard(m_y, 1);
    the_enemy.m_y = forwardOnBoard(m_y, 1 * s_speed);
  }
  the_enemy.m_move_count = m_move_count;
  return the_enemy;
}

function showCorrectRotation(enemy_number, x_adjusted_dir) {
  const spin_fixed = "star-spin-fixed-" + enemy_number;
  const spin_clockwise = "star-spin-clockwise-" + enemy_number;
  const spin_counter = "star-spin-counter-" + enemy_number;
  const star_fixed = document.getElementById(spin_fixed);
  const star_clockwise = document.getElementById(spin_clockwise);
  const star_counter = document.getElementById(spin_counter);
  if (x_adjusted_dir < 0) {
    star_fixed.style.display = 'none';
    star_clockwise.style.display = 'none';
    star_counter.style.display = 'block';
  } else if (x_adjusted_dir > 0) {
    star_fixed.style.display = 'none';
    star_clockwise.style.display = 'block';
    star_counter.style.display = 'none';
  } else {
    star_fixed.style.display = 'block';
    star_clockwise.style.display = 'none';
    star_counter.style.display = 'none';
  }
}



function drawEnemies(the_enemies, the_player) {
  let changed_enemies = [];
  const number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    const an_enemy = the_enemies[enemy_index];
    const enemy_name = an_enemy.s_id;
    const changed_enemy = enemyDraw(enemy_name, an_enemy, the_player);
    changed_enemies[enemy_index] = changed_enemy;
  }
  return changed_enemies;
}



function enemyDraw(real_id, the_enemy, the_player) {
  const enemy_state = the_enemy.m_enemy_state;
  if (enemy_state == ENEMY_0_HUNTING) {
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy = enemyMove(the_enemy);
  } else if (enemy_state == ENEMY_1_BOUNCE) {
    setCssEnemyEdge(the_enemy.s_enemy_number, '48px');
    the_enemy = enemyMove(the_enemy);
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy.m_enemy_hit_flash--;
    if (the_enemy.m_enemy_hit_flash == 0) {
      setCssEnemyEdge(the_enemy.s_enemy_number, '0px');
      the_enemy.m_enemy_state = ENEMY_0_HUNTING;
    }
  } else if (enemy_state == ENEMY_2_HIT) {
    setCssEnemyOpacity(the_enemy.s_enemy_number, 0.3333);
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy.m_enemy_hit_flash--;
    if (the_enemy.m_enemy_hit_flash == 0) {
      the_enemy.m_hover_up = 0;
      the_enemy.m_enemy_state = ENEMY_3_LIFTING;
    }
  } else if (enemy_state == ENEMY_3_LIFTING) {
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy.m_hover_up = the_enemy.m_hover_up + PLAYER_TRAVEL_SPEED;

    if (the_enemy.m_hover_up > ENEMY_HIDDEN) {
      the_enemy.m_hover_up = 0;
      the_enemy.m_enemy_state = ENEMY_4_ZOMBIE;
    }
  } else if (enemy_state == ENEMY_4_ZOMBIE) {
    //
  }
  return the_enemy;
}


function enemyPosition(real_id, z_index, the_stats, hover_up) {
  let [center_x, center_y, the_scale] = the_stats;
  let missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;
  let missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);
  const enemy_lifting_y = center_y - ENEMY_TO_HORIZON_LIFT - hover_up;
  missile_x_y.setAttribute("y", enemy_lifting_y);
  let missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;
}

function enemyTooFarAway(real_id) {
  let missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", HIDE_ENEMY_X);
}


function enemyPlace(real_id, the_enemy, the_player) {
  const enemy_player_ys = [the_enemy.m_y, the_player.m_y];
  real_id = the_enemy.s_id;
  const dist_abs_y = distanceAbsY(enemy_player_ys);
  if (dist_abs_y > FARTHEST_VISIBLE_PYLON_Y) {
    enemyTooFarAway(real_id);
    return;
  }

  let [the_z_index, enemy_relative, x_center_offset, _head_on_view] = objectPlacement(the_enemy, the_player);
  let left_mid_right_vlines;
  if (enemy_relative == LEFT_OF_PLAYER) {
    left_mid_right_vlines = objectLeftSide(x_center_offset, enemy_player_ys, ENEMY_PIXEL_DEPTH);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, enemy_player_ys, ENEMY_PIXEL_DEPTH);
  }

  debugSign(the_enemy, left_mid_right_vlines);
  //  const gradient_front = 'clear-grad';                            // delete this
  const the_stats = spriteFront(left_mid_right_vlines);
  let hover_up;
  if (the_enemy.m_enemy_state == ENEMY_4_ZOMBIE) {
    hover_up = ENEMY_HIDDEN;
  } else if (the_enemy.m_hover_up > 0) {
    hover_up = the_enemy.m_hover_up;
  } else {
    hover_up = 0;
  }
  enemyPosition(real_id, the_z_index, the_stats, hover_up);
}




function killEnemy(the_enemy) {
  the_enemy.m_enemy_state = ENEMY_3_LIFTING;
  return the_enemy;
}

function enemiesAllZombies(enemy_list) {
  const number_enemies = enemy_list.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    const an_enemy = enemy_list[enemy_index];
    if (an_enemy.m_enemy_state != ENEMY_4_ZOMBIE) {
      return false;
    }
  }
  return true;
}

function enemiesAlive(enemy_list) {
  let number_alive = 0;
  const number_enemies = enemy_list.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    const an_enemy = enemy_list[enemy_index];
    if (an_enemy.m_enemy_state != ENEMY_4_ZOMBIE) {
      number_alive++;
    }
  }
  return number_alive;
}