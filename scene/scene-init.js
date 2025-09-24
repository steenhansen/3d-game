
function sceneInit() {
  y_flip_count = INIT_Y_FLIP_COUNT;


  g_missile_states = makeList();
  g_missile_iteration = 0;

  initIncrementers();
  initLeftRight();
  affixLeftRight();


}

function screenSizeIntoCss(event) {

  initDebugVars();


  screen_width = window.screen.width;
  screen_height = window.screen.height;
  screen_width_px = screen_width + "px";
  screen_height_px = screen_height + "px";
  // document_style.setProperty("--scene-width", screen_width_px);
  // document_style.setProperty("--scene-height", screen_height_px);


  setCssVar("--scene-width", screen_width_px);
  setCssVar("--scene-height", screen_height_px);

  if (screen_width < 1024) {
    setCssVar("--mobile-screen", "is-mobile");
    mobile_margin = (1024 - screen_width) / 2;
    mobile_margin_px = `-${mobile_margin}px`;
    setCssVar("--margin-left_px", mobile_margin_px);
    setCssVar("--scene-margin", "0 0 0 ${mobile_margin_px}");  // top/right/bottom=0 left=213px

  } else {
    setCssVar("--mobile-screen", "is-desktop");
    setCssVar("--margin-left_px", "0px");

    setCssVar("--scene-margin", "0 auto");  // top/bottom =0      left/right= auto
    setCssVar("--scene-width", "1024px");
    setCssVar("--scene-height", "512px");
  }
}



function gameInit() {
  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

  window.addEventListener("orientationchange", screenSizeIntoCss, true);

  window.addEventListener("resize", screenSizeIntoCss, true);




  if (isDebugging()) {
    setInterval(debugReportFrameTime, 500);
  }


}


function beginDesktop() {
  g_loop_state = LOOP_1_AFTER_BEGIN;

}

function beginMobile() {
  g_loop_state = LOOP_1_AFTER_BEGIN;
  g_touch_id_start = 'begin-button 0987324';
}

function beginButtonInit() {
  begin_desktop = document.getElementById('begin-desktop');
  begin_desktop.addEventListener("click", beginDesktop);
  begin_mobile = document.getElementById('begin-mobile');
  begin_mobile.addEventListener("click", beginMobile);
}