
function sceneInit() {
  y_flip_count = INIT_Y_FLIP_COUNT;
  g_missile_states = makeList();
  initIncrementers();
  initLeftRight();
  affixLeftRight();
  //hitCracks(0);
}

function screenSizeIntoCss(event) {
  initDebugVars();
  screen_width = window.screen.width;
  screen_height = window.screen.height;
  screen_width_px = screen_width + "px";
  screen_height_px = screen_height + "px";
  setCssVar("--scene-width", screen_width_px);
  setCssVar("--scene-height", screen_height_px);

  if (screen_width < 1024) {
    setCssVar("--device-screen", "is-mobile");
    mobile_margin = (1024 - screen_width) / 2;
    mobile_margin_px = `-${mobile_margin}px`;
    setCssVar("--margin-left_px", mobile_margin_px);
    setCssVar("--scene-margin", "0 0 0 ${mobile_margin_px}");  // top/right/bottom=0 left=213px

  } else {
    setCssVar("--device-screen", "is-desktop");
    setCssVar("--margin-left_px", "0px");

    setCssVar("--scene-margin", "0 auto");  // top/bottom =0      left/right= auto
    setCssVar("--scene-width", "1024px");
    setCssVar("--scene-height", "512px");
  }
}



function gameInit() {
  if (isDebugging()) {
    setInterval(debugReportFrameTime, 500);
  }
}


function resizeOrientEvents() {
  window.addEventListener("orientationchange", screenSizeIntoCss, true);
  window.addEventListener("resize", screenSizeIntoCss, true);
}


function startItUp(chosen_segway, the_pylons, the_enemies, the_holes, the_player, the_planet) {
  land_fly_speeds = chosen_segway;
  addDesktopEvents();
  addMobileEvents();
  turnOnKeys();
  resizeOrientEvents();
  runGame(land_fly_speeds, the_pylons, the_enemies, the_holes, the_player, the_planet);
}
