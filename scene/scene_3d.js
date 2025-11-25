var current_move_direction;







function sceneRight(the_player, travel_speed, diagonal_weight) {
  new_right_x = playerRight(the_player, travel_speed, diagonal_weight);
  is_allowed = xAllowed(new_right_x);
  if (!is_allowed) {
    return the_player;
  }
  the_player.m_x = new_right_x;
  fieldRight(travel_speed, diagonal_weight);
  moveSky(travel_speed, 'right');
  return the_player;
}


function sceneLeft(the_player, travel_speed, diagonal_weight) {
  new_left_x = playerLeft(the_player, travel_speed, diagonal_weight);
  is_allowed = xAllowed(new_left_x);
  if (!is_allowed) {
    return the_player;
  }
  the_player.m_x = new_left_x;
  fieldLeft(travel_speed, diagonal_weight);
  moveSky(travel_speed, 'left');
  return the_player;
}

function sceneForward(the_player, travel_speed) {
  new_forward_y = playerForward(the_player, travel_speed);


  is_allowed = yAllowed(new_forward_y);
  if (!is_allowed) {
    return the_player;
  }
  the_player.m_y = new_forward_y;


  fieldForwards(travel_speed);
  moveSky(travel_speed, 'forward');
  return the_player;
}

function sceneBackward(the_player, travel_speed) {
  new_backward_y = playerBackward(the_player, travel_speed);



  is_allowed = yAllowed(new_backward_y);
  if (!is_allowed) {
    return the_player;
  }
  the_player.m_y = new_backward_y;

  fieldBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
  return the_player;
}



const DIAGONAL_NOT = 3;     // NB cannot do square root of 2 for diagonal damping movement because all integers
const DIAGONAL_DAMPER = 2;

function sceneMove(the_player, is_dying) {
  if (is_dying) {
    console.log("sceneMove() is_dying");
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);   // MOVINGx_NW
    return the_player;
  }
  travel_speed = TRAVEL_SPEED;  //4
  if (g_planet.m_drift_direction > 0) {
    travel_speed = 1;
    current_move_direction = g_planet.m_drift_direction;
  } else {
    planet_part = g_planet.m_part_state;
    if (planet_part == PART_PLAY_23_JUMP_UP || planet_part == PART_PLAY_24_JUMP_DOWN) {
      current_move_direction = g_planet.m_last_direction_key;
    } else {
      current_move_direction = g_planet.m_move_direction;
    }
  }

  if (current_move_direction == MOVINGx_NW) {
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);
  } else if (current_move_direction == MOVINGx_N) {
    the_player = sceneBackward(the_player, travel_speed);
  } else if (current_move_direction == MOVINGx_NE) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);
  } else if (current_move_direction == MOVINGx_E) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_NOT);
  } else if (current_move_direction == MOVINGx_SE) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneForward(the_player, travel_speed);
  } else if (current_move_direction == MOVINGx_S) {
    the_player = sceneForward(the_player, travel_speed);
  } else if (current_move_direction == MOVINGx_SW) {
    the_player = sceneForward(the_player, travel_speed);
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
  } else if (current_move_direction == MOVINGx_W) {
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_NOT);
  } else {
    startDrift();

  }
  return the_player;
}


function startDrift() {
  if (environmentTypeParam()) {
    return;
  }
  if (g_planet.m_drift_direction > 0) {
    let rand_dir = Math.floor(Math.random() * NEW_DIRECTION_CHANCE_WHEN_DRIFTING);
    if (rand_dir == 1) {
      rand_drift_direction = randomDirection();
      g_planet.m_drift_direction = rand_drift_direction;
    }
  } else {
    if (g_planet.m_drift_countdown == 0) {
      g_planet.m_drift_countdown = DRIFT_START_CHANCE_WHEN_STOPPED;
    }
    g_planet.m_drift_countdown--;
    if (g_planet.m_drift_countdown < 0) {
      g_planet.m_move_direction = 0;
      g_planet.m_drift_direction = randomDirection();
      g_planet.m_drift_countdown = DRIFT_START_CHANCE_WHEN_STOPPED;       //177;
    }
  }
}















let waiting_for_start = true;

function rightClick(the_event) {
  the_event.preventDefault();
  return false;
}


function wheelScroll(the_event) {
  the_event.preventDefault();
  g_planet.m_move_direction = MOVINGx_NOT;
  return false;
}




function sceneStop() {
  moveSky('stop');
}



function randomDirection() {
  let rand_dir = Math.floor(Math.random() * 4);

  if (rand_dir == 0) {
    rand_direction = MOVINGx_NW;
  } else if (rand_dir == 1) {
    rand_direction = MOVINGx_NE;
  } else if (rand_dir == 2) {
    rand_direction = MOVINGx_SE;
  } else {
    rand_direction = MOVINGx_SW;
  }
  return rand_direction;
}




function animateScene(the_planet, the_player, enemy_list, pylon_list, sign_list, hole_list) {
  timeFrames(the_planet, the_player);
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return PART_PLAY_20_NORMAL;
  }
  hitCracks(the_player);
  the_player = doRecoil(the_player);
  if (the_planet.m_game_state == GAME_3_DEATH) {
    is_dying = true;
  } else {
    is_dying = false;
  }
  the_player = sceneMove(the_player, is_dying);
  drawSigns(sign_list, the_player);
  plyon_list = drawPylons(the_player, pylon_list);
  g_missile = missileAdvance(g_missile, the_player);
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return PART_PLAY_20_NORMAL;
  }
  enemy_list = drawEnemies(enemy_list, the_player);
  hole_list = drawHoles(hole_list, the_player);
  fixFPS2();
  //fixFPS();
  if (!is_dying) {
    enemy_list = missileHitEnemies(g_missile, enemy_list);
    [the_player, pylon_list] = playerHitPylons(the_player, pylon_list);
    [g_missile, pylon_list] = missileHitPylons(g_missile, pylon_list);
    [enemy_list, pylon_list] = enemiesHitPylons(enemy_list, pylon_list);
    the_player = playerHitEnemies(the_player, enemy_list);
    the_player = playerHitHoles(the_player, hole_list);
    //enemy_list = enemyHitHoles(enemy_list, hole_list);
    enemy_list = enemiesHitBounds(enemy_list, the_planet);
  }
  return [the_planet, the_player, enemy_list, pylon_list];
}

let draw_every_2nd_l_r_scroll = 0;
function fixFPS2() {
  if (current_move_direction !== MOVING_NOT) {
    if (g_p_scroll_quality == P_COURSE) {
      draw_sec = draw_every_2nd_l_r_scroll % 2;
      if (draw_sec == 0) {
        current_move_direction = g_planet.m_move_direction;
        affixLeftRight();
      } else {
        // don't move the checkerboard squares
      }
    } else {
      affixLeftRight();
    }
  }
  draw_every_2nd_l_r_scroll++;
}



//  MAX_CRACKS
function hitCracks(the_player) {
  number_cracks = the_player.m_num_cracks;
  if (number_cracks == 0 || the_player.m_is_dying) {
    setCssVar("--cracked-glass-display", "none");
  } else {
    if (number_cracks > MAX_CRACKS) {
      number_cracks = MAX_CRACKS;
    }
    glass_opacity = 0.2;  //number_cracks / 6;
    cracked_image = `url('../images/cracks-${number_cracks}.png`;
    setCssVar("--cracked-glass-display", "block");
    setCssVar("--cracked-glass-opacity", glass_opacity);
    setCssVar("--cracked-glass-image", cracked_image);

  }
}



