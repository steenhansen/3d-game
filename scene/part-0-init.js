function initPart0(game_state, part_state, g_planet, g_player) {
  if (part_state == PART_INIT_00_DESKTOP) {
    g_planet = desktopInit(g_planet);
    part_state = PART_INIT_02_AFTER_BEGIN;
    g_waiting_for_start = false;
  } else if (part_state == PART_INIT_01_MOBILE) {
    g_planet = mobileInit(g_planet);
    if (!g_waiting_for_start) {
      part_state = PART_INIT_02_AFTER_BEGIN;
    }
  } else if (part_state == PART_INIT_02_AFTER_BEGIN) {
    [g_planet, g_player] = afterInit(g_planet, g_player);
    game_state = GAME_1_INTRO;
    part_state = PART_INTRO_10_LANDING;
  } else {
    dbg_print("initPart0() unknown part_state", part_state);
  }
  return [game_state, part_state, g_planet, g_player];
}

function desktopInit(the_planet) {
  return the_planet;
}

function mobileInit(the_planet) {
  unHideDiv("start-mobile");
  fixMobileTouch();
  return the_planet;
}

function afterInit(the_planet, the_player) {
  animateStart();
  initDebugVars();
  dbg_report = true;
  setCssVar("--cracked-glass-display", "none");
  the_player = resetPlayer();
  fixDevice();
  initLanding();
  return [the_planet, the_player];
}
