

function loopStart() {
  divVisHidden('desktop-dir');
}

function loopDesktopStart() {
  g_loop_state = LOOP_1_BEGIN;
}

function loopMobileStart() {
  // hideDiv('click-to-begin');
  unHideDiv('start-mobile');
  fixMobile();
}

function runGame(land_fly_speeds, the_pylons, the_enemies, the_holes) {





  initGame();
  [land_speed, elevator_speed, fly_speed] = land_fly_speeds;
  g_enemy_list = the_enemies;
  g_pylon_list = the_pylons;
  g_hole_list = the_holes;
  gameLoop();

  function gameLoop() {
    debugFrameTime();
    if (g_loop_state == LOOP_0_START) {
      loopStart();
    } else if (g_loop_state == LOOP_0_DESKTOP_START) {
      loopDesktopStart();
    } else if (g_loop_state == LOOP_0_MOBILE_START) {
      loopMobileStart();
    } else if (g_loop_state == LOOP_1_BEGIN) {
      loopBegin();
    } else if (g_loop_state == LOOP_2_AFTER_BEGIN) {
      loopAfterBegin();
    } else if (g_loop_state == LOOP_3_LANDING) {
      loopLanding(land_speed);
    } else if (g_loop_state == LOOP_4_AFTER_LANDING) {
      loopAfterLanding();
    } else if (g_loop_state == LOOP_5_ELEVATOR) {
      loopElevator(elevator_speed);
    } else if (g_loop_state == LOOP_6_AFTER_ELEVATOR) {
      loopAfterElevator();
    } else if (g_loop_state == LOOP_7_PLAY_NORMAL) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlay(g_player, g_enemy_list, g_pylon_list);


    } else if (g_loop_state == LOOP_7_PLAY_HOLE_A_HIT) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlayHoleHit(g_player, g_enemy_list, g_pylon_list);
    } else if (g_loop_state == LOOP_7_PLAY_HOLE_B_INSIDE) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlayHoleInside(g_player, g_enemy_list, g_pylon_list);
    } else if (g_loop_state == LOOP_7_PLAY_HOLE_C_LEAVE) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlayHoleLeave(g_player, g_enemy_list, g_pylon_list);


    } else if (g_loop_state == LOOP_7_PLAY_A_JUMP_START) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlayJumpStart(g_player, g_enemy_list, g_pylon_list);



    } else if (g_loop_state == LOOP_7_PLAY_B_JUMP_UP) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlayJumpUp(g_player, g_enemy_list, g_pylon_list);
    } else if (g_loop_state == LOOP_7_PLAY_C_JUMP_DOWN) {
      [g_player, g_enemy_list, g_pylon_list] = loopPlayJumpDown(g_player, g_enemy_list, g_pylon_list);




    } else if (g_loop_state == LOOP_8_AFTER_PLAY) {
      loopAfterPlay();
    } else if (g_loop_state == LOOP_9_FLY) {
      [g_player, g_enemy_list, g_pylon_list] = loopFly(g_player, fly_speed, g_enemy_list, g_pylon_list);
      console.log("LOOP_9_FLY");
    } else if (g_loop_state == LOOP_10_DONE) {
      dbg_report = false;
      loopDone();
    } else {
      console.log("error ani", g_loop_state);
    }
    requestAnimationFrame(gameLoop);
    debugAnimation();
  }
}


function loopFly(g_player, fly_speed, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);
  [g_player, new_state] = animateFly(fly_speed, g_player);
  g_loop_state = new_state;
  return [g_player, enemy_list, pylon_list];
}




function loopBegin() {
  g_loop_state = LOOP_2_AFTER_BEGIN;
  animateStart();
  g_taking_off = false;

  initDebugVars();
  debugClear();
  dbg_report = true;
  setCssVar("--cracked-glass-display", "none");
  g_player = resetPlayer();

}

function loopAfterBegin() {
  fixDevice();
  hideDiv('playing-game');
  initLanding();
  g_loop_state = LOOP_3_LANDING;
}

function loopLanding(land_speed) {
  g_loop_state = animateLanding(land_speed);
}

function loopAfterLanding() {
  initElevator();
  g_loop_state = LOOP_5_ELEVATOR;
}

function loopElevator(elevator_speed) {
  g_loop_state = animateElevator(elevator_speed);
}

function loopAfterElevator() {
  initPlay();
  // g_drift_direction = MOVINGx_N;
  readyInputArrows();
  if (isDebugging()) {
    g_is_drifting = false;
  } else {
    g_is_drifting = true;
  }
  // hide landing from really tall phones    iPhone SE 375 x 667
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `display:none`;
  g_loop_state = LOOP_7_PLAY_NORMAL;
}

function loopPlay(g_player, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);
  if (g_hit_hole_last_move) {
    g_loop_state = LOOP_7_PLAY_HOLE_A_HIT;
  } else if (g_taking_off) {
    g_loop_state = LOOP_8_AFTER_PLAY;
  } else {
    g_loop_state = LOOP_7_PLAY_NORMAL;
  }
  collisionShake(g_player);
  return [g_player, enemy_list, pylon_list];
}




function loopPlayHoleHit(g_player, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);

  g_player = animateHoleHit(g_player);
  g_loop_state = LOOP_7_PLAY_HOLE_B_INSIDE;

  collisionShake(g_player);
  return [g_player, enemy_list, pylon_list];
}

// what if stop inside hole?
function loopPlayHoleInside(g_player, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);

  g_player = animateHoleInside(g_player);
  if (g_hit_hole_last_move) {
    g_loop_state = LOOP_7_PLAY_HOLE_B_INSIDE;
  } else {
    g_loop_state = LOOP_7_PLAY_HOLE_C_LEAVE;
  }
  return [g_player, enemy_list, pylon_list];
}


function loopPlayHoleLeave(g_player, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);

  g_player = animateHoleLeave(g_player);
  g_loop_state = LOOP_7_PLAY_NORMAL;

  return [g_player, enemy_list, pylon_list];
}


function loopPlayJumpStart(g_player, enemy_list, g_pylon_list) {
  g_player.t_jump_amount = 0;
  g_loop_state = LOOP_7_PLAY_B_JUMP_UP;
  return loopPlayJumpUp(g_player, enemy_list, g_pylon_list);
}



function loopPlayJumpUp(g_player, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);
  [g_player, new_state] = animateJumpUp(g_player);
  g_loop_state = new_state;
  collisionShake(g_player);
  return [g_player, enemy_list, pylon_list];
}



function loopPlayJumpDown(g_player, enemy_list, g_pylon_list) {
  [enemy_list, pylon_list] = animateScene(enemy_list, g_pylon_list, g_hole_list);
  [g_player, new_state] = animateJumpDown(g_player);
  g_loop_state = new_state;
  collisionShake(g_player);
  return [g_player, enemy_list, pylon_list];
}












function loopAfterPlay() {
  g_move_direction = MOVINGx_N;
  g_loop_state = LOOP_9_FLY;
  g_player.t_fly_amount = 0;
}
function loopDone() {
  g_number_lands++;
  resetSections();
  g_loop_state = LOOP_0_START;
  console.log("loopDone");
  sceneInit();
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }
  window.location.href = 'index.html';   // make a file for all these jumps  jump-table.js
}

function initGame() {

  gameInit();
  sceneInit();
  debugInit();
}





