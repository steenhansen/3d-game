

function isMobile() {
  const mobile_screen = getCssVar("--mobile-screen");
  if (mobile_screen == "is-mobile") {
    //  console.log("MOBILE ", mobile_screen);
    return true;
  }
  //  console.log(" seems this is amiss Deisktop ", mobile_screen);
  return false;
}



// window.addEventListener("orientationchange", function (event) {
//   console.log("New orientation: " + event);
// });



// now at screenSizeIntoCss();
// function orientPhone() {
//   var supportsOrientationChange = "onorientationchange" in window,
//     orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

//   window.addEventListener(orientationEvent, function () {
//     console.log("oreintPhone");
//     fixDevice();

//     screen_width = window.screen.width;
//     screen_height = window.screen.height;
//     screen_width_px = screen_width + "px";
//     screen_height_px = screen_height + "px";
//     // document_style.setProperty("--scene-width", screen_width_px);
//     // document_style.setProperty("--scene-height", screen_height_px);

//     console.log("start rejigger");
//     setCssVar("--scene-width", screen_width_px);
//     setCssVar("--scene-height", screen_height_px);
//     qq = (1024 - screen_width) / 2;
//     marL = `-${qq}px`;
//     setCssVar("--margin-left_px", marL);

//   }, false);

// }










function fixDesktop() {
  start_mobile = document.getElementById('start-mobile');
  start_mobile.style.display = "none";



  setCssVar("--scene-width", "1024px");
  setCssVar("--scene-height", "512px");

  // document_style = document.documentElement.style;
  // document_style.setProperty("--scene-width", "1024px");
  // document_style.setProperty("--scene-height", "512px");



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

  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }

}




function fullMobile() {
  console.log("fullMobile ");
  if (isMobile()) {
    if (!document.fullscreenElement) {
      the_scene = document.getElementById('the-scene');
      console.log("fullMobile  requestFullscreen");
      //the_scene.requestFullscreen();
    }
  }
}

function touchBoxes(the_event) {
  if (the_event.target.id == "") {
    the_event.preventDefault();
    fullMobile();
    console.log("boxes !", the_event.target.id);
    g_is_drifting = false;
    the_missile_1 = launchMissile(the_missile_1);
  }
}

function touchMoveHandler(the_event) {
  console.log("in touchMoveHandler");
}


function touchMove(the_event) {

}


function fixDevice() {
  // if (waiting_for_start) {
  //   console.log("wating");
  //   return;
  // }

  // console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
  //  console.log("aaaaaaaaaaaaa", isMobile());
  //const is_touch = isMobile();
  console.log("fixDevice ");
  if (isMobile()) {
    // if (g_device_type != DEVICE_MOBILE) {
    //    console.log("bbbbbbbbbb MOBILE", isMobile(), is_touch);
    fixMobile();
    g_device_type = DEVICE_MOBILE;
    //}
  } else {
    // if (g_device_type != DEVICE_DESKTOP) {
    //  console.log("ccccccccccccccc DESKTOP", isMobile(), is_touch);
    fixDesktop();
    g_device_type = DEVICE_DESKTOP;
    //}
  }



}






function fixMobile() {
  //  console.log("fixMobile 11111111111");
  //document_style = document.documentElement.style;
  if (!document.fullscreenElement) {
    start_mobile = document.getElementById('start-mobile');
    start_mobile.style.display = "block";
    start_mobile.style.zIndex = "1234568";
    waiting_for_start = true;
    start_mobile.addEventListener("touchend", handleStartMobile, { passive: false });
    return;
  }
}



function fixMobile2() {
  //console.log("fixMobile 222222222222222222222");
  //  document_style = document.documentElement.style;

  console.log('witch');
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



  function touchStart(evt) {
    g_touch_id_start = evt.target.id;
    g_touch_x_start = evt.changedTouches[0].clientX;
    g_touch_y_start = evt.changedTouches[0].clientY;
    //    console.log("touchSTAERT", evt.target.id);
    console.log("touchSTAERT", evt.changedTouches[0]);
  }

  function touchEnd(evt) {
    touch_id_end = evt.target.id;
    console.log("touchEnd", touch_id_end,);

    if (g_touch_id_start == "" || touch_id_end == "") {
      console.log("touchEnd OK");
      touch_x_end = evt.changedTouches[0].clientX;
      touch_y_end = evt.changedTouches[0].clientY;
      dif_x = Math.abs(g_touch_x_start - touch_x_end);
      dif_y = Math.abs(g_touch_y_start - touch_y_end);
      if (dif_x < 10 && dif_y < 10) {                           // constants
        console.log("NO too 2 small asdf345347234", dif_x, dif_y);
        the_missile_1 = launchMissile(the_missile_1);
      } else {
        if (dif_x > dif_y) {
          //console.log("left right");
          // if (g_touch_x_start > touch_x_end) {
          //   g_taking_off = true;
          // } else {
          //   console.log("down");
          //   g_is_drifting = false;
          //   stopMoving();
          // }
        } else {
          if (g_touch_y_start > touch_y_end) {
            g_taking_off = true;
          } else {
            console.log("down");
            g_is_drifting = false;
            stopMoving();
          }
        }
      }
    } else {
      console.log("NO neither blanks 3290487234", g_touch_id_start, touch_id_end);
    }
  }

  const the_scene = document.getElementById("touch-boxes");
  the_scene.addEventListener('touchstart', touchStart, { passive: false });
  document.addEventListener('touchend', touchEnd, { passive: false });

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



  start_mobile = document.getElementById('start-mobile');
  start_mobile.style.display = "none";

  screen_width = window.screen.width;
  screen_height = window.screen.height;
  screen_width_px = screen_width + "px";
  screen_height_px = screen_height + "px";
  // document_style.setProperty("--scene-width", screen_width_px);
  // document_style.setProperty("--scene-height", screen_height_px);


  setCssVar("--scene-width", screen_width_px);
  setCssVar("--scene-height", screen_height_px);

}