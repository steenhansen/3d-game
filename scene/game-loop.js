











function loopBegin() {
  divVisHidden('desktop-dir');
  animateStart();
  flyingInit();
  g_taking_off = false;

  initDebugVars();
  debugClear();
  dbg_report = true;
}


function loopAfterBegin() {
  fixDevice();
  hideDiv('playing-game');
  initLanding();
  g_loop_state = LOOP_2_LANDING;
}

function loopLanding() {
  g_loop_state = animateLanding();
}

function loopAfterLanding() {
  initElevator();
  g_loop_state = LOOP_4_ELEVATOR;
}

function loopElevator() {

  // initPlay();
  // g_drift_direction = MOVINGx_N;
  g_loop_state = animateElevator();
}

function loopAfterElevator() {
  initPlay();
  g_drift_direction = MOVINGx_N;
  turnOnKeys();
  readyInputArrows();


  if (isDebugging()) {
    g_is_drifting = false;
  } else {
    g_is_drifting = true;
  }
  // hide landing from really tall phones    iPhone SE 375 x 667
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `display:none`;


  // initPlay();
  g_loop_state = LOOP_6_PLAY;
}

function loopPlay() {
  //initPlay();
  g_loop_state = animateScene();
  collisionShake();
}

function loopAfterPlay() {
  g_move_direction = MOVINGx_N;
  g_loop_state = LOOP_8_FLY;
}

function loopFly() {
  animateScene();
  g_loop_state = animateFly();
}

function loopDone() {
  g_number_lands++;
  resetSections();
  g_loop_state = LOOP_0_BEGIN;
  sceneInit();
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }
}

function initGame() {
  beginButtonInit();
  debugInit();
  gameInit();
  sceneInit();
}

function runGame() {
  initGame();
  gameLoop('start-time_stamp');
}


function gameLoop(_time_stamp) {
  debugFrameTime();
  //  debugInit();


  if (g_loop_state == LOOP_0_BEGIN) {
    loopBegin();
  } else if (g_loop_state == LOOP_1_AFTER_BEGIN) {
    loopAfterBegin();
  } else if (g_loop_state == LOOP_2_LANDING) {
    loopLanding();
  } else if (g_loop_state == LOOP_3_AFTER_LANDING) {
    loopAfterLanding();
  } else if (g_loop_state == LOOP_4_ELEVATOR) {

    loopElevator();
  } else if (g_loop_state == LOOP_5_AFTER_ELEVATOR) {
    // initPlay();
    // g_drift_direction = MOVINGx_N;

    loopAfterElevator();
  } else if (g_loop_state == LOOP_6_PLAY) {
    loopPlay();
  } else if (g_loop_state == LOOP_7_AFTER_PLAY) {
    loopAfterPlay();
  } else if (g_loop_state == LOOP_8_FLY) {

    loopFly();
  } else if (g_loop_state == LOOP_9_DONE) {
    dbg_report = false;
    //  initDebugVars();
    //debugInit();
    loopDone();
  } else {
    console.log("error ani", g_loop_state);
  }
  requestAnimationFrame(gameLoop);


  debugAnimation();
}











function objectSide(the_object) {
  let the_side;
  if (the_object.m_x < SCENE_MIDDLE_X) {
    the_side = LEFT_X_LOW;
  } else {
    the_side = RIGHT_X_HIGH;
  }
  return the_side;
}
