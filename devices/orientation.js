
function orientPhone() {
  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

  window.addEventListener(orientationEvent, function () {
    fixDevice();
  }, false);

}

function fixDesktop() {
  document_style = document.documentElement.style;
  document_style.setProperty("--scene-width", "1024px");
  document_style.setProperty("--scene-height", "512px");
  document_style.setProperty("--playing-margin-left", "0px");
  document_style.setProperty("--playing-margin-top", "0px");
  addClickEvent("nw", handleNw);
  addClickEvent("n", handleN);
  addClickEvent("ne", handleNe);
  addClickEvent("w", handleW);

  const the_scene = document.getElementById("the-scene");
  the_scene.addEventListener('contextmenu', rightClick, false);
  document.addEventListener('wheel', wheelScroll, { passive: false });

  addClickEvent("e", handleE);
  addClickEvent("sw", handleSw);
  addClickEvent("s", handleS);
  addClickEvent("se", handleSe);
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }

}

function fixMobile() {
  document_style = document.documentElement.style;
  if (!document.fullscreenElement) {
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "block";
    waiting_for_start = true;
    start_mobile.addEventListener("touchend", handleStartMobile, { passive: false });
    return;
  }



  start_mobile = document.getElementById('start-mobile');
  start_mobile.style.display = "none";

  screen_width = window.screen.width;
  screen_height = window.screen.height;
  screen_width_px = screen_width + "px";
  screen_height_px = screen_height + "px";
  document_style.setProperty("--scene-width", screen_width_px);
  document_style.setProperty("--scene-height", screen_height_px);



  margin_top = 512 - screen_height;
  margin_top_px = "-" + margin_top + "px";
  document_style.setProperty("--playing-margin-top", margin_top_px);

  arrow_margin_vert = margin_top + "px";
  document_style.setProperty("--arrow-margin-vert", arrow_margin_vert);





  margin_left = (1024 - screen_width) / 2;
  margin_left_px = "-" + margin_left + "px";
  document_style.setProperty("--playing-margin-left", margin_left_px);

  arrow_margin_hor = margin_left + "px";
  document_style.setProperty("--arrow-margin-hor", arrow_margin_hor);

  input_margin_hor = 2 * margin_left + "px";
  document_style.setProperty("--input-padding-hor", input_margin_hor);



  input_margin_ver = 2 * margin_top + "px";
  document_style.setProperty("--input-padding-ver", input_margin_ver);

}

function fixDevice() {
  if (waiting_for_start) {
    return;
  }

  if (isMobile()) {
    fixMobile();
  } else {
    fixDesktop();
  }
}



