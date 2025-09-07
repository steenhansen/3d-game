
function orientPhone() {
  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

  window.addEventListener(orientationEvent, function () {
    fixDevice();
  }, false);

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

function fixDesktop() {
  ////  console.log("fixDesktop 1111111111111111111111111111");
  document_style = document.documentElement.style;


  document_style.setProperty("--scene-width", "1024px");
  document_style.setProperty("--scene-height", "512px");
  document_style.setProperty("--playing-margin-left", "0px");
  document_style.setProperty("--playing-margin-top", "0px");

  addClickEvent("touch-boxes", touchBoxes);

  // console.log("before");
  // touch_boxes = document.getElementById('touch-boxes');
  // touch_boxes.addEventListener("touchmove", touchMoveHandler, { passive: false });
  // console.log("after");

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

function touchMove(the_event) {

}


function fixDevice() {
  if (waiting_for_start) {
    return;
  }

  if (isMobile()) {


    if (g_device_type != DEVICE_MOBILE) {
      //   console.log("AAAAAAAAAAAAAAA");
      fixMobile();
      g_device_type = DEVICE_MOBILE;
    }
  } else {
    if (g_device_type != DEVICE_DESKTOP) {
      // console.log("bbbbbbbbbbbbbbbbb");
      fixDesktop();
      g_device_type = DEVICE_DESKTOP;
    }
  }
}






function fixMobile() {
  console.log("fixMobile 11111111111");
  document_style = document.documentElement.style;
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
  console.log("fixMobile 222222222222222222222");
  document_style = document.documentElement.style;

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
    //  console.log("touchSTAERT", evt.changedTouches[0]);
  }

  function touchEnd(evt) {
    touch_id_end = evt.target.id;

    if (g_touch_id_start == "" || touch_id_end == "") {

      touch_x_end = evt.changedTouches[0].clientX;
      touch_y_end = evt.changedTouches[0].clientY;

      //   console.log("touchEND", evt.target.id);
      dif_x = Math.abs(g_touch_x_start - touch_x_end);
      dif_y = Math.abs(g_touch_y_start - touch_y_end);

      if (dif_x < 10 && dif_y < 10) {
        console.log("NO too 2 small asdf345347234", dif_x, dif_y);
      } else {

        if (dif_x > dif_y) {
          console.log("left right");

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

  //console.log("before");
  // touch_boxes = document.getElementById('touch-boxes');
  // touch_boxes.addEventListener("touchmove", touchMoveHandler, { passive: false });
  // //console.log("after");


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