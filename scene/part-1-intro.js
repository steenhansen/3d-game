function introPart1(game_state, part_state) {
  let [land_speed, elevator_speed] = CURRENT_SEGWAY;
  if (part_state == PART_INTRO_10_LANDING) {
    part_state = landingIntro(land_speed);
  } else if (part_state == PART_INTRO_11_AFTER_LANDING) {
    afterLandingIntro();
    part_state = PART_INTRO_12_ELEVATOR;
  } else if (part_state == PART_INTRO_12_ELEVATOR) {
    part_state = elevatorInto(elevator_speed);
  } else if (part_state == PART_INTRO_13_AFTER_ELEVATOR) {
    afterElevatorIntro();
    game_state = GAME_2_PLAY;
    part_state = PART_PLAY_20_NORMAL;
  } else {
    dbg_print('introPart1() unknown part_state', part_state);
  }
  return [game_state, part_state];
}

function landingIntro(land_speed) {
  part_state = animateLandingNew(land_speed);
  return part_state;
}

function afterLandingIntro() {
  initElevator();
}

function elevatorInto(elevator_speed) {
  part_state = animateElevatorNew(elevator_speed);
  return part_state;
}

function afterElevatorIntro() {
  initPlay();
  // hide landing from really tall phones    iPhone SE 375 x 667
  const playing_game = document.getElementById(`the-landing`);
  playing_game.style = `display:none`;
  tiltingReset();
}