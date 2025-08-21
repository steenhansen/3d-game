

function doLanding(show_intro) {
  if (show_intro) {
    startLand(255, 25);
  } else {
    skipLand();
  }
}



function skipLand() {
  setLandingScroll(0);
  readyInputArrows();
}

function setLandingScroll(the_pixels) {
  //  const playing_game = document.getElementById(`playing-game`);
  //playing_game.style = `margin-top:${the_pixels}px`;
}

function startLand(num_lines, land_speed) {
  let first_time;

  requestAnimationFrame(startLanding);

  function startLanding(timestamp) {
    first_time = timestamp;
    continueLanding(timestamp);
  }

  function continueLanding(timestamp) {
    const frame_count = (timestamp - first_time) / land_speed; // duration 10 fast, 100 slow
    let the_count = Math.floor(frame_count);


    let normal_line = `background-position: -${the_count + 1}px -${the_count}px`;
    let flip_line = `background-position: 0px                 -${the_count}px`;

    let flip_count = 0;
    let is_flip = false;


    for (let cur_line = 0; cur_line < num_lines; cur_line++) {
      const reverse_vertical = num_lines - cur_line - 1;
      const ne_element = document.getElementById(`ne${reverse_vertical}`);
      const se_element = document.getElementById(`se${cur_line}`);
      const sw_element = document.getElementById(`sw${cur_line}`);
      const nw_element = document.getElementById(`nw${reverse_vertical}`);



      if (is_flip) {
        ne_element.style = flip_line;
        se_element.style = normal_line;
        sw_element.style = flip_line;
        nw_element.style = normal_line;
      } else {
        ne_element.style = normal_line;
        se_element.style = flip_line;
        sw_element.style = normal_line;
        nw_element.style = flip_line;
      }
      flip_count++;
      if (flip_count == the_count) {
        flip_count = 0;
        is_flip = !is_flip;
      }

    }
    if (frame_count < num_lines) {
      requestAnimationFrame(continueLanding);
    } else {
      requestAnimationFrame(scrollLandUp);
    }

  }

  m_top_playing_game = -512;
  m_top_the_land = 0;


  function scrollLandUp(timestamp) {
    m_top_playing_game += 2;;
    m_top_the_land += 2;
    setLandingScroll(m_top_playing_game);


    flashScrollingArrow('arrow-nw');
    flashScrollingArrow('arrow-n');
    flashScrollingArrow('arrow-ne');
    flashScrollingArrow('arrow-e');
    flashScrollingArrow('arrow-se');
    flashScrollingArrow('arrow-s');
    flashScrollingArrow('arrow-sw');
    flashScrollingArrow('arrow-w');

    if (m_top_playing_game < 0) {
      requestAnimationFrame(scrollLandUp);
    } else {
      readyInputArrows();
    }
  }
}

function flashScrollingArrow(arrow_id) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  const an_arrow = document.getElementById(arrow_id);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  let flash_grey = `fill: ${rgb}; opacity:100%`;
  an_arrow.style = flash_grey;
}



function readyInputArrows() {


  stopFlashArrow('arrow-nw');
  stopFlashArrow('arrow-n');
  stopFlashArrow('arrow-ne');
  stopFlashArrow('arrow-e');
  stopFlashArrow('arrow-se');
  stopFlashArrow('arrow-s');
  stopFlashArrow('arrow-sw');
  stopFlashArrow('arrow-w');
}

function stopFlashArrow(arrow_id) {
  // const stop_arrow = document.getElementById(arrow_id);
  // let flash_none = `fill: rgb(0 ,0 , 0)`;
  // stop_arrow.style = flash_none;
}