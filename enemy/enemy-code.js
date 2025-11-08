

function enemyMove(the_enemy) {
  let { m_x, m_y, m_move_count, s_moves_x, s_moves_y, m_bounced_x_dir, m_bounced_y_dir, s_speed } = the_enemy;
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


  showCorrectRotation(the_enemy.s_enemy_number, x_adjusted_dir);
  y_dir = s_moves_y[m_move_count];
  y_adjusted_dir = y_dir * m_bounced_y_dir;
  if (x_adjusted_dir < 0) {
    the_enemy.m_x = leftOnBoard(m_x, 11 * s_speed);
  } else if (x_adjusted_dir > 0) {
    the_enemy.m_x = rightOnBoard(m_x, 11 * s_speed);
  } else {
  }
  if (y_adjusted_dir < 0) {
    the_enemy.m_y = backwardOnBoard(m_y, 1);
  } else if (y_adjusted_dir > 0) {
    the_enemy.m_y = forwardOnBoard(m_y, 1);
  }
  the_enemy.m_move_count = m_move_count;
  return the_enemy;
}


// let base_enemy = {
//   s_enemy_number: 0,
//   s_moves_x: [ZERO_10].flat(),
//   s_moves_y: [ZERO_10].flat(),
//   s_colors: ['#ee2288', '#004488'],    // enemies never change colors
//   t_units: [3, 2],
//   m_x: -1,
//   m_y: -1,
// };



function makeEnemies(the_enemies) {
  declared_enemies = [];
  num_enemies = the_enemies.length;
  for (let e_index = 0; e_index < num_enemies; e_index++) {
    an_enemy = the_enemies[e_index];

    enemy_xy_squares = an_enemy.start_pos;
    colors_of_enemy = an_enemy.the_colors;
    moves_x = an_enemy.x_moves.flat();
    moves_y = an_enemy.y_moves.flat();
    the_speed = an_enemy.the_speed;
    const enemy_id = e_index.toString().padStart(2, '0');
    err_mess = `makeEnemies(${enemy_id})`;
    xy_pixels = originOffset2(enemy_xy_squares, err_mess);
    new_enemy = initEnemyData(e_index, enemy_id, xy_pixels, colors_of_enemy, moves_x, moves_y, the_speed);
    declared_enemies.push(new_enemy);
  }
  return declared_enemies;
}


function showCorrectRotation(enemy_number, x_adjusted_dir) {
  spin_fixed = "star-spin-fixed-" + enemy_number;
  spin_clockwise = "star-spin-clockwise-" + enemy_number;
  spin_counter = "star-spin-counter-" + enemy_number;
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
  changed_enemies = [];
  number_enemies = the_enemies.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = the_enemies[enemy_index];
    enemy_name = an_enemy.s_id;
    changed_enemy = enemyDraw(enemy_name, an_enemy, the_player);
    changed_enemies[enemy_index] = changed_enemy;
  }
  return changed_enemies;
}



function enemyDraw(real_id, the_enemy, the_player) {
  enemy_state = the_enemy.m_enemy_state;
  if (enemy_state == ENEMY_0_FLOATING) {
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy = enemyMove(the_enemy);
  } else if (enemy_state == ENEMY_1_BOUNCE) {
    setCssEnemyEdge(the_enemy.s_enemy_number, '48px');
    the_enemy = enemyMove(the_enemy);
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy.t_enemy_hit_flash--;
    if (the_enemy.t_enemy_hit_flash == 0) {
      delete the_enemy.t_enemy_hit_flash;
      setCssEnemyEdge(the_enemy.s_enemy_number, '0px');
      the_enemy.m_enemy_state = ENEMY_0_FLOATING;
    }
  } else if (enemy_state == ENEMY_1_HIT) {
    setCssEnemyOpacity(the_enemy.s_enemy_number, 0.3333);
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy.t_enemy_hit_flash--;
    if (the_enemy.t_enemy_hit_flash == 0) {
      delete the_enemy.t_enemy_hit_flash;
      the_enemy.t_hover_up = 0;
      the_enemy.m_enemy_state = ENEMY_2_LIFTING;
    }
  } else if (enemy_state == ENEMY_2_LIFTING) {
    enemyPlace(real_id, the_enemy, the_player);
    the_enemy.t_hover_up = the_enemy.t_hover_up + TRAVEL_SPEED;

    if (the_enemy.t_hover_up > ENEMY_HIDDEN) {
      delete the_enemy.t_hover_up;
      the_enemy.m_enemy_state = ENEMY_3_ZOMBIE;
    }
  } else if (enemy_state == ENEMY_3_ZOMBIE) {

  } else {
  }
  return the_enemy;
}


function enemyPosition(real_id, z_index, the_stats, hover_up) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;
  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);
  enemy_lifting_y = center_y - ENEMY_TO_HORIZON_LIFT - hover_up;
  missile_x_y.setAttribute("y", enemy_lifting_y);
  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;
}


function enemyPlace(real_id, the_enemy, the_player) {
  enemy_player_ys = [the_enemy.m_y, the_player.m_y];
  real_id = the_enemy.s_id;
  [the_z_index, difference_y, enemy_relative, x_center_offset, head_on_view] = objectPlacement(the_enemy, the_player);
  if (enemy_relative == LEFT_OF_PLAYER) {
    left_mid_right_vlines = objectLeftSide(x_center_offset, enemy_player_ys, ENEMY_PIXEL_DEPTH);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, enemy_player_ys, ENEMY_PIXEL_DEPTH);
  }
  gradient_front = 'clear-grad';
  the_stats = spriteFront(left_mid_right_vlines);
  if (the_enemy.m_enemy_state == ENEMY_3_ZOMBIE) {
    hover_up = ENEMY_HIDDEN;
  } else if ("t_hover_up" in the_enemy) {
    hover_up = the_enemy.t_hover_up;
  } else {
    hover_up = 0;
  }

  enemyPosition(real_id, the_z_index, the_stats, hover_up);
}




function killEnemy(the_enemy) {
  the_enemy.m_enemy_state = ENEMY_2_LIFTING;
  return the_enemy;
}





function initEnemyData(enemy_number, enemy_id, xy_pixels, colors_of_enemy, moves_x, moves_y, the_speed) {
  the_id = `enemy-${enemy_id}`;
  enemy_obj = {
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
    m_enemy_state: ENEMY_0_FLOATING,
    s_speed: the_speed,
  };
  html_enemy = createEnemyHtml(enemy_obj);
  enemy_container_id = `enemy-${enemy_number}-container`;
  document.getElementById('enemy-area').innerHTML += `
       <div id="${enemy_container_id}" >${html_enemy}</div>
   `;
  return enemy_obj;
}






function enemiesAllZombies(enemy_list) {
  number_enemies = enemy_list.length;
  for (let enemy_index = 0; enemy_index < number_enemies; enemy_index++) {
    an_enemy = enemy_list[enemy_index];
    if (an_enemy.m_enemy_state != ENEMY_3_ZOMBIE) {
      return false;
    }
  }
  return true;
}