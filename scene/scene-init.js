
function sceneInit() {
  y_flip_count = INIT_Y_FLIP_COUNT;
  //console.log("sceneInit", y_flip_count);

  g_missile_states = makeList();
  g_missile_iteration = 0;

  initIncrementers();
  //console.log("y_flip_count", y_flip_count);
  initLeftRight();
  affixLeftRight();
}

function screenSizeIntoCss(event) {
  screen_width = window.screen.width;
  screen_height = window.screen.height;
  screen_width_px = screen_width + "px";
  screen_height_px = screen_height + "px";
  // document_style.setProperty("--scene-width", screen_width_px);
  // document_style.setProperty("--scene-height", screen_height_px);

  console.log("start rejigger");
  setCssVar("--scene-width", screen_width_px);
  setCssVar("--scene-height", screen_height_px);

  if (screen_width < 1024) {
    setCssVar("--mobile-screen", "is-mobile");
    mobile_margin = (1024 - screen_width) / 2;
    mobile_margin_px = `-${mobile_margin}px`;
    setCssVar("--margin-left_px", mobile_margin_px);
    setCssVar("--scene-margin", "0 0 0 ${mobile_margin_px}");  // top/right/bottom=0 left=213px
    console.log("screenSizeIntoCss    mobile");
  } else {
    setCssVar("--mobile-screen", "is-desktop");
    setCssVar("--margin-left_px", "0px");

    setCssVar("--scene-margin", "0 auto");  // top/bottom =0      left/right= auto
    setCssVar("--scene-width", "1024px");
    setCssVar("--scene-height", "512px");
    console.log("screenSizeIntoCss    DESKTOP");
  }
}



function gameInit() {
  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

  window.addEventListener("orientationchange", screenSizeIntoCss, true);

  window.addEventListener("resize", screenSizeIntoCss, true);
}