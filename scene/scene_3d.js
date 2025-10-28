function sceneRight(the_player, travel_speed, diagonal_weight) {
  new_right_x = playerRight(the_player, travel_speed, diagonal_weight);
  is_allowed = xAllowed(new_right_x);
  if (!is_allowed) {
    //   console.log("no a");
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
    // console.log("no b");
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
    console.log("no c");

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
    console.log("no d");

    return the_player;
  }
  the_player.m_y = new_backward_y;

  fieldBackwards(travel_speed);
  moveSky(travel_speed, 'backward');
  return the_player;
}



const DIAGONAL_NOT = 3;     // NB cannot do square root of 2 for diagonal damping movement because all integers
const DIAGONAL_DAMPER = 2;

function sceneMove(the_player) {
  travel_speed = TRAVEL_SPEED;  //4
  if ('t_drift_direction' in g_planet) {
    travel_speed = 1;
    move_dir = g_planet.t_drift_direction;
  } else {
    move_dir = g_planet.t_move_direction;
  }
  if (move_dir == MOVINGx_NW) {
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_N) {
    the_player = sceneBackward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_NE) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneBackward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_E) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_NOT);
  } else if (move_dir == MOVINGx_SE) {
    the_player = sceneRight(the_player, travel_speed, DIAGONAL_DAMPER);
    the_player = sceneForward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_S) {
    the_player = sceneForward(the_player, travel_speed);
  } else if (move_dir == MOVINGx_SW) {
    the_player = sceneForward(the_player, travel_speed);
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_DAMPER);
  } else if (move_dir == MOVINGx_W) {
    the_player = sceneLeft(the_player, travel_speed, DIAGONAL_NOT);
  } else {
    startDrift();

  }
  return the_player;
}


function startDrift() {
  if (isDebugging()) {
    return;
  }
  if ('t_drift_direction' in g_planet) {
    let rand_dir = Math.floor(Math.random() * NEW_DIRECTION_CHANCE_WHEN_DRIFTING);
    if (rand_dir == 1) {
      rand_drift_direction = randomDirection();
      g_planet.t_drift_direction = rand_drift_direction;
    }
  } else {
    if (!('t_drift_countdown' in g_planet)) {
      g_planet.t_drift_countdown = DRIFT_START_CHANCE_WHEN_STOPPED;
    }
    g_planet.t_drift_countdown--;
    if (g_planet.t_drift_countdown < 0) {
      delete g_planet.t_move_direction;
      g_planet.t_drift_direction = randomDirection();
      g_planet.t_drift_countdown = DRIFT_START_CHANCE_WHEN_STOPPED;       //177;
    }
  }
}















let waiting_for_start = false;

function rightClick(the_event) {
  the_event.preventDefault();
  return false;
}


function wheelScroll(the_event) {
  the_event.preventDefault();
  g_planet.t_move_direction = MOVINGx_NOT;
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




function animateScene(the_player, enemy_list, pylon_list, hole_list) {
  timeFrames();
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return LOOP_7_PLAY_NORMAL;
  }
  hitCracks(the_player);
  the_player = doRecoil(the_player);
  the_player = sceneMove(the_player);
  plyon_list = drawPylons(the_player, pylon_list);
  g_missile = missileAdvance(g_missile, the_player);
  if (typeof DBG_FREEZE_MISSILE == 'string') {
    return LOOP_7_PLAY_NORMAL;
  }
  enemy_list = drawEnemies(enemy_list, the_player);
  hole_list = drawHoles(hole_list, the_player);

  /////
  if (the_fps < 50) {   // want 60
    draw_speed = 'every-second-frame';
  }
  if (the_fps > 59) {   // want 60
    draw_speed = 'every-frame';
  }
  //console.log('the_fps', the_fps);
  if (draw_speed == 'every-second-frame') {
    if (draw_time) {
      affixLeftRight();
      draw_time = false;
    } else {
      draw_time = true;
    }
  } else {
    affixLeftRight();
  }

  //////


  enemy_list = missileHitEnemies(g_missile, enemy_list);
  [the_player, pylon_list] = playerHitPylons(the_player, pylon_list);
  [g_missile, pylon_list] = missileHitPylons(g_missile, pylon_list);
  [enemy_list, pylon_list] = enemiesHitPylons(enemy_list, pylon_list);
  the_player = playerHitEnemies(the_player, enemy_list);
  the_player = playerHitHoles(the_player, hole_list);
  enemy_list = enemyHitHoles(enemy_list, hole_list);

  return [the_player, enemy_list, pylon_list];
}





function handleStartMobile(evt) {
  setTimeout(() => {
    g_planet.m_planet_state = LOOP_1_BEGIN;

    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";
    waiting_for_start = false;
    fixMobile2();
  }, "1000");


  //unHideDiv('the-scene');
  the_scene = document.getElementById('the-scene');
  try {
    //  hideDiv('start-mobile');
    the_scene.requestFullscreen();


  } catch {
    //
  }
}



//  MAX_CRACKS
function hitCracks(the_player) {
  number_cracks = the_player.m_num_cracks;
  if (number_cracks == 0 || 't_is_dying' in the_player) {
    setCssVar("--cracked-glass-display", "none");
  } else {
    if (number_cracks > MAX_CRACKS) {
      number_cracks = MAX_CRACKS;
    }
    glass_opacity = number_cracks / 6;
    cracked_image = `url('../images/cracks-${number_cracks}.png`;
    setCssVar("--cracked-glass-display", "block");
    setCssVar("--cracked-glass-opacity", glass_opacity);
    setCssVar("--cracked-glass-image", cracked_image);

  }
}




function match_landing_to_checkerboard() {
  travel_speed = TRAVEL_SPEED;
  for (i = 0; i < 15; i++) {
    //fieldRight(travel_speed);
  }
}