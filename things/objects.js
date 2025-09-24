// sprites are missile and enemy

function enemyPosition(real_id, z_index, the_stats) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;



  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x);

  //  if enemy then - ENEMY_TO_HORIZON_LIFT
  missile_x_y.setAttribute("y", center_y - ENEMY_TO_HORIZON_LIFT);





  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;
}




function enemyDraw(real_id, the_sprite, g_player) {

  pylon_player_ys = [the_sprite.m_y, g_player.m_y];

  real_id = the_sprite.s_id;
  [the_z_index, difference_y, missile_relative, x_center_offset, head_on_view] = objectPlacement(the_sprite, g_player);
  if (missile_relative == LEFT_OF_PLAYER) {



    left_mid_right_vlines = objectLeftSide(the_sprite, x_center_offset, pylon_player_ys);
  } else {
    left_mid_right_vlines = objectRightSide(the_sprite, x_center_offset, pylon_player_ys);
  }
  gradient_front = 'clear-grad';
  the_stats = spriteFront(left_mid_right_vlines);
  enemyPosition(real_id, the_z_index, the_stats);
}



////////////////////////////////////////////////

function spritePosition(real_id, z_index, the_stats) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;



  missile_x_y = document.getElementById(real_id + '-x-y');
  missile_x_y.setAttribute("x", center_x + 256);

  //  if enemy then - ENEMY_TO_HORIZON_LIFT
  //  missile_x_y.setAttribute("y", center_y - ENEMY_TO_HORIZON_LIFT);
  missile_x_y.setAttribute("y", center_y + 256 + 64);




  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;
}




function spriteDraw(real_id, the_sprite, g_player) {

  pylon_player_ys = [the_sprite.m_y, g_player.m_y];

  real_id = the_sprite.s_id;
  [the_z_index, difference_y, missile_relative, x_center_offset, head_on_view] = objectPlacement(the_sprite, g_player);
  if (missile_relative == LEFT_OF_PLAYER) {



    left_mid_right_vlines = objectLeftSide(the_sprite, x_center_offset, pylon_player_ys);
  } else {
    left_mid_right_vlines = objectRightSide(the_sprite, x_center_offset, pylon_player_ys);
  }
  gradient_front = 'clear-grad';
  the_stats = spriteFront(left_mid_right_vlines);
  spritePosition(real_id, the_z_index, the_stats);
}











////////////////////////////////////////////////////////////////////
// objects are sprites and pylons




function killEnemy(the_enemy) {
  // let { s_isa, s_id,
  //   m_x, m_y,
  //   m_moves,
  //   s_moves_x, s_moves_y,
  //   m_dead, m_colors
  // } = the_enemy;

  let { s_id, m_x, m_y, m_colors } = the_enemy;

  let killed_enemy = {
    s_isa: "is-enemy",
    s_id: s_id,
    m_x: m_x, m_y: m_y,
    m_moves: -1,
    s_moves_x: [], s_moves_y: [],
    m_dead: true,
    m_colors: m_colors,
    // m_colors: ['green', 'red', 'blue', 'orange'],
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
  ////////////////
  // if (the_enemy.m_begins >= 0) {
  //   the_enemy = birthPhase(the_enemy);
  // } else {
  huntPhase(the_enemy);
  //////////////////
  // if (the_enemy.m_moves < the_enemy.s_moves_x.length) {
  //   the_enemy.m_moves++;
  // } else {
  //   the_enemy.m_moves = 0; // reset to start
  // }
  // x_dir = the_enemy.s_moves_x[the_enemy.m_moves];
  // y_dir = the_enemy.s_moves_y[the_enemy.m_moves];

  // if (x_dir < 0) {
  //   the_enemy.m_x = leftOnBoard(the_enemy.m_x, x_dir * -1 * 3);
  // } else if (x_dir > 0) {
  //   the_enemy = rightOnBoard(the_enemy, x_dir * 1 * 3);
  // }

  // if (y_dir < 0) {
  //   the_enemy.m_y = backwardOnBoard(the_enemy.m_y, y_dir * -1);
  // } else if (y_dir > 0) {
  //   the_enemy.m_y = forwardOnBoard(the_enemy.m_y, y_dir * 1);
  // }
  // }
  return the_enemy;
}




function objectPlacement(an_object, g_player) {

  difference_y = panelDiffY(an_object, g_player);
  let [difference_x, relative_to_player, head_on_view] = panelPlaceX(an_object, g_player);
  x_center_offset = thingRelationToPlayer(difference_x, g_player, relative_to_player);

  let the_z_index = deriveIndexZ(difference_x, difference_y);
  if (an_object.s_isa !== 'is-missile') {
    //
  }
  return [the_z_index, difference_y, relative_to_player, x_center_offset, head_on_view];
}

function objectLeftSide(a_pylon, x_center_offset, pylon_player_ys) {

  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight(x_center_offset, pylon_player_ys);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);
  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];

  if (a_pylon.pylon_colors) {
    gradient_left = a_pylon.pylon_colors.pylon_left;
    gradient_front = a_pylon.pylon_colors.pylon_front;
  } else {
    gradient_left = "clear-grad";
    gradient_front = "clear-grad";
  }

  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}







// qubert-X
function objectRightSide(a_pylon, x_center_offset, pylon_player_ys) {
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackLeft(x_center_offset, pylon_player_ys);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);
  let middle_vline = [left_front_top, left_front_bot];
  let left_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];

  if (a_pylon.pylon_colors) {
    gradient_right = a_pylon.pylon_colors.pylon_right;
    gradient_front = a_pylon.pylon_colors.pylon_front;
  } else {
    gradient_right = "clear-grad";
    gradient_front = "clear-grad";
  }

  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}

function objectMiddleRegion(a_pylon, x_center_offset, difference_yy) {
  let [left_front_bot, right_front_bot, back_right_bot] = panels3BackRight22(x_center_offset, difference_yy);
  let [left_front_top, right_front_top, back_right_top] = panelsTops(left_front_bot, right_front_bot, back_right_bot);

  let left_vline = [left_front_top, left_front_bot];
  let middle_vline = [right_front_top, right_front_bot];
  let right_vline = [back_right_top, back_right_bot];

  if (a_pylon.pylon_colors) {
    gradient_right = a_pylon.pylon_colors.pylon_right;
    gradient_front = a_pylon.pylon_colors.pylon_front;
  } else {
    gradient_right = "clear-grad";
    gradient_front = "clear-grad";
  }
  left_mid_right_vlines = [left_vline, middle_vline, right_vline];
  return left_mid_right_vlines;
}


function panels3BackRight22(x_center_offset, difference_yy) {
  let [left_front_bot, right_front_bot] = panelBotLeftRight(x_center_offset, difference_yy);
  left_bottom_3 = [left_front_bot, right_front_bot, 17];
  return left_bottom_3;
}
