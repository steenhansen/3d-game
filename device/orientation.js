function fixMobileTouch() {
  if (document.fullscreenElement == null) {
    start_mobile = document.getElementById('start-mobile');
    g_waiting_for_start = true;
    start_mobile_display = document.getElementById('start-mobile').style.display;
    start_mobile.addEventListener("touchend", handleStartMobile, { passive: false });
    unHideDiv('mobile-list');
    return;
  }
}



function handleStartMobile(evt) {
  hideDiv('mobile-list');
  unHideDiv('mobile-wait');
  setTimeout(() => {
    g_planet.m_game_state = GAME_0_INIT;     //L_OOP_1_BEGIN;
    let start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "none";
    g_waiting_for_start = false;
    screenFixMobile();
  }, "1000");
  let the_scene = document.getElementById('the-scene');
  try {
    the_scene.requestFullscreen();
  } catch {
    //
  }
}


function screenFixMobile() {
  let start_mobile = document.getElementById('start-mobile');
  start_mobile.style.display = "none";
  let screen_width = window.screen.width;
  let screen_height = window.screen.height;
  let screen_width_px = screen_width + "px";
  let screen_height_px = screen_height + "px";
  setCssVar("--scene-width", screen_width_px);
  setCssVar("--scene-height", screen_height_px);
}

function isMobile() {
  const mobile_screen = getCssVar("--device-screen");
  if (mobile_screen == "is-mobile") {
    return true;
  }
  return false;
}

function isFullScreenMobile() {
  if (document.fullscreenElement) {
    return true;
  }
  return false;
}

function addDesktopEvents() {
  addClickEvent("touch-boxes", touchBoxes);

  addClickEvent("nw-1", handleNw);
  addClickEvent("nw-2", handleNw);
  addClickEvent("nw-3", handleNw);
  addClickEvent("nw-4", handleNw);

  addClickEvent("n-1", handleN);
  addClickEvent("n-2", handleN);
  addClickEvent("n-3", handleN);
  addClickEvent("n-4", handleN);

  addClickEvent("ne-1", handleNe);
  addClickEvent("ne-2", handleNe);
  addClickEvent("ne-3", handleNe);
  addClickEvent("ne-4", handleNe);

  addClickEvent("w-1", handleW);
  addClickEvent("w-2", handleW);
  addClickEvent("w-3", handleW);
  addClickEvent("w-4", handleW);

  const the_scene = document.getElementById("the-scene");
  the_scene.addEventListener('contextmenu', rightClick, false);
  document.addEventListener('wheel', wheelScroll, { passive: false });

  addClickEvent("e-1", handleE);
  addClickEvent("e-2", handleE);
  addClickEvent("e-3", handleE);
  addClickEvent("e-4", handleE);

  addClickEvent("sw-1", handleSw);
  addClickEvent("sw-2", handleSw);
  addClickEvent("sw-3", handleSw);
  addClickEvent("sw-4", handleSw);

  addClickEvent("s-1", handleS);
  addClickEvent("s-2", handleS);
  addClickEvent("s-3", handleS);
  addClickEvent("s-4", handleS);

  addClickEvent("se-1", handleSe);
  addClickEvent("se-2", handleSe);
  addClickEvent("se-3", handleSe);
  addClickEvent("se-4", handleSe);
}

function fixDesktop() {
  let start_mobile = document.getElementById('start-mobile');
  start_mobile.style.display = "none";
  setCssVar("--scene-width", "1024px");
  setCssVar("--scene-height", "512px");
  // if (document.fullscreenElement != null) {
  //   //  document.exitFullscreen();
  // }
}




// function fullMobile() {
//   if (isMobile()) {
//     if (!document.fullscreenElement) {
//       the_scene = document.getElementById('the-scene');
//     }
//   }
// }



// function touchMoveHandler(the_event) {
//   //
// }


// function touchMove(the_event) {

// }


function fixDevice() {

  if (isMobile()) {
    fixMobileTouch();
  } else {
    fixDesktop();
  }



}






function addMobileEvents() {

  addTouchEvent("nw-1", touchNw);
  addTouchEvent("nw-2", touchNw);
  addTouchEvent("nw-3", touchNw);
  addTouchEvent("nw-4", touchNw);

  addTouchEvent("n-1", touchN);
  addTouchEvent("n-2", touchN);
  addTouchEvent("n-3", touchN);
  addTouchEvent("n-4", touchN);

  addTouchEvent("ne-1", touchNe);
  addTouchEvent("ne-2", touchNe);
  addTouchEvent("ne-3", touchNe);
  addTouchEvent("ne-4", touchNe);

  addTouchEvent("w-1", touchW);
  addTouchEvent("w-2", touchW);
  addTouchEvent("w-3", touchW);
  addTouchEvent("w-4", touchW);




  const touch_boxes = document.getElementById("touch-boxes");
  //  removeEventListener 
  touch_boxes.addEventListener('touchstart', touchStart, { passive: false });
  touch_boxes.addEventListener('touchend', touchEnd, { passive: false });

  addTouchEvent("e-1", touchE);
  addTouchEvent("e-2", touchE);
  addTouchEvent("e-3", touchE);
  addTouchEvent("e-4", touchE);

  addTouchEvent("sw-1", touchSw);
  addTouchEvent("sw-2", touchSw);
  addTouchEvent("sw-3", touchSw);
  addTouchEvent("sw-4", touchSw);

  addTouchEvent("s-1", touchS);
  addTouchEvent("s-2", touchS);
  addTouchEvent("s-3", touchS);
  addTouchEvent("s-4", touchS);

  addTouchEvent("se-1", touchSe);
  addTouchEvent("se-2", touchSe);
  addTouchEvent("se-3", touchSe);
  addTouchEvent("se-4", touchSe);

}

