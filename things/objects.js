// sprites are missile and enemy

// objects are sprites and columns



function missileAdvance(the_missile) {
  if (the_missile.m_expired) {
    return the_missile;
  }


  if (the_missile.m_lifetime > 0) {
    the_missile.m_lifetime--;
  } else {
    the_missile.m_expired = true;

  }

  let { m_x_dir, m_y_dir } = the_missile;
  if (m_x_dir < 0) {
    the_missile.m_x = leftOnBoard(the_missile.m_x, m_x_dir * -1 * 3 * 2);
  } else if (m_x_dir > 0) {
    the_missile.m_x = rightOnBoard(the_missile.m_x, m_x_dir * 1 * 3 * 2);
  }

  if (m_y_dir < 0) {
    the_missile.m_y = backwardOnBoard(the_missile.m_y, m_y_dir * -1 * 2);
  } else if (m_y_dir > 0) {
    the_missile.m_y = forwardOnBoard(the_missile.m_y, m_y_dir * 1 * 2);
  }
  return the_missile;
}




function killEnemy(the_enemy) {
  // let { s_isa, s_id,
  //   m_x, m_y,
  //   m_index,
  //   s_moves_x, s_moves_y,
  //   m_dead, m_colors
  // } = the_enemy;

  let { s_id, m_x, m_y } = the_enemy;

  let killed_enemy = {
    s_isa: "is-enemy",
    s_id: s_id,
    m_x: m_x, m_y: m_y,
    m_index: -1,
    s_moves_x: [], s_moves_y: [],
    m_dead: true,
    m_colors: ['black', 'black', 'black', 'black'],
  };
  html_killed = makeEnemy(killed_enemy, true);

  container_id = s_id + "-container";

  document.getElementById(container_id).innerHTML = `
      ${html_killed}
`;
  return killed_enemy;
}


function enemyStep(the_enemy) {
  if (the_enemy.m_dead) {
    return the_enemy;
  }
  if (the_enemy.m_index < the_enemy.s_moves_x.length) {
    the_enemy.m_index++;
  } else {
    the_enemy.m_index = 0; // reset to start
  }
  x_dir = the_enemy.s_moves_x[the_enemy.m_index];
  y_dir = the_enemy.s_moves_y[the_enemy.m_index];

  if (x_dir < 0) {
    the_enemy.m_x = leftOnBoard(the_enemy.m_x, x_dir * -1 * 3);
  } else if (x_dir > 0) {
    the_enemy.m_x = rightOnBoard(the_enemy.m_x, x_dir * 1 * 3);
  }

  if (y_dir < 0) {
    the_enemy.m_y = backwardOnBoard(the_enemy.m_y, y_dir * -1);
  } else if (y_dir > 0) {
    the_enemy.m_y = forwardOnBoard(the_enemy.m_y, y_dir * 1);
  }
  return the_enemy;
}

function spriteDraw(real_id, the_sprite, g_player) {

  real_id = the_sprite.s_id;
  [the_z_index, difference_y, missile_relative, x_center_offset, difference_x, head_on_view] = objectPlacement(the_sprite, g_player);
  if (missile_relative == LEFT_OF_PLAYER) {
    left_mid_right_vlines = objectLeftSide(the_sprite, x_center_offset, difference_x, difference_y);
  } else {
    left_mid_right_vlines = objectRightSide(the_sprite, x_center_offset, difference_x, difference_y);
  }
  gradient_front = 'clear-grad';
  the_stats = panelFront2(left_mid_right_vlines);
  spritePosition(real_id, the_z_index, the_stats);
}


function spritePosition(real_id, z_index, the_stats) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;

  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);
  missile_x_y.setAttribute("y", center_y);

  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;
}

function objectPlacement(an_object, g_player) {
  difference_y = panelDiffY(an_object, g_player);
  let [difference_x, relative_to_player, head_on_view] = panelPlaceX(an_object, g_player);
  x_center_offset = thingRelationToPlayer(difference_x, g_player, relative_to_player);

  let the_z_index = zIndex(difference_x, difference_y);
  return [the_z_index, difference_y, relative_to_player, x_center_offset, difference_x, head_on_view];
}

function objectLeftSide(a_column, x_center_offset, difference_x, difference_y) {

  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];

  if (a_column.column_colors) {
    gradient_left = a_column.column_colors.column_left;
    gradient_front = a_column.column_colors.column_front;
  } else {
    gradient_left = "clear-grad";
    gradient_front = "clear-grad";
  }

  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}



function objectRightSide(a_column, x_center_offset, difference_x, difference_y) {
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackLeft(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);
  let middle_vline = [left_front_top, left_front_bot];
  let left_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];

  if (a_column.column_colors) {
    gradient_right = a_column.column_colors.column_right;
    gradient_front = a_column.column_colors.column_front;
  } else {
    gradient_right = "clear-grad";
    gradient_front = "clear-grad";
  }

  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}

function objectMiddleRegion(a_column, x_center_offset, difference_x, difference_y) {
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight(x_center_offset, difference_x, difference_y);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);

  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];

  if (a_column.column_colors) {
    gradient_right = a_column.column_colors.column_right;
    gradient_front = a_column.column_colors.column_front;
  } else {
    gradient_right = "clear-grad";
    gradient_front = "clear-grad";
  }
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}
