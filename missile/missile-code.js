
// const MISSILE_LIFETIME = 25;
// const MISSILE_GO_LEFT = -1;
// const MISSILE_GO_RIGHT = 1;

function missileAdvance(the_missile, the_player) {
  if (the_missile.m_phase == MISSILE_2_HITTING_PYLON) {
    hit_pylon = the_missile.m_hit_pylon;
    the_missile.m_lifetime = 25;           //  MISSILE_LIFETIME
    if (hit_pylon.m_x > the_missile.m_x) {
      the_missile.m_x_dir = -1;
      the_missile.m_y_dir = 0;
    } else {
      the_missile.m_x_dir = 1;
      the_missile.m_y_dir = 0;
    }
  } else if (the_missile.m_phase == MISSILE_4_SECOND_PYLON_HIT) {
    the_missile.m_lifetime = 0;
    the_missile.m_phase = 0;
  }
  the_missile.m_random++;
  if (the_missile.m_random == 360) {
    the_missile.m_random = 0;
  }
  missileSet(the_missile, the_player);
  if (typeof DBG_MISSILE_ADVANCE == 'string') {
    return the_missile;
  }
  const missile_flying = g_missile.m_lifetime > 0;
  if (!missile_flying) {
    return the_missile;
  } else {
    the_missile.m_lifetime--;
  }
  let { m_x_dir, m_y_dir } = the_missile;
  if (m_x_dir < 0) {
    the_missile.m_x = leftOnBoard(the_missile.m_x, 12 * 4);
  } else if (m_x_dir > 0) {
    the_missile.m_x = rightOnBoard(the_missile.m_x, 12 * 4);
  } else {
    the_missile.m_y = backwardOnBoard(the_missile.m_y, 8 * 2);   //PLAYER_TRAVEL_SPEED * 2);
  }
  return the_missile;
}



function initMissileData(the_missile, the_player) {
  the_missile.m_phase = MISSILE_1_SHOT_FORWARD;
  let { m_x, m_y } = the_player;
  the_missile.m_x = m_x;
  the_missile.m_y = m_y;
  the_missile.m_x_dir = 0;
  the_missile.m_y_dir = -1;
  the_missile.m_lifetime = MISSILE_LIFETIME;
  getRandoms(the_missile);
  return the_missile;
}







function missileSet(the_missile, the_player) {

  const missile_flying = g_missile.m_lifetime > 0;
  if (missile_flying) {
    if (g_p_graphics_style != P_SIMPLE) {
      getRandoms(the_missile);
    }
    missileDraw(the_missile, the_player);
  } else {
    the_missile.m_x_dir = 0;
    the_missile.m_y_dir = -1;
    setFillNone();
  }


}






function getRandoms(the_missile) {
  missile_area = document.querySelector('.missile-vars');
  let this_tick = CACHED_MISSILE_SHAPES[the_missile.m_random];

  number_replaced = this_tick.length;
  for (let j = 0; j < number_replaced; j++) {
    let [the_id, the_size, the_color, x_adjust, y_adjust] = this_tick[j];
    if (the_size !== '') {
      let missile_size = "--missile-size-" + the_id;
      missile_area.style.setProperty(missile_size, the_size);

      let missile_offset_x = "--missile-offset-x-" + the_id;
      missile_area.style.setProperty(missile_offset_x, x_adjust);


      let missile_offset_y = "--missile-offset-y-" + the_id;
      missile_area.style.setProperty(missile_offset_y, y_adjust);

    }
    if (the_color !== '') {
      let missile_fill = "--missile-fill-" + the_id;
      missile_area.style.setProperty(missile_fill, the_color);
    }
  }


}



















const OUTSIDE_ID_START = 100;
const MIDDLE_ID_START = 200;
const CENTER_ID_START = 300;

const NUM_OUTSIDE_BALLS = 32;
const NUM_MIDDLE_BALLS = 16;
const NUM_CENTER_BALLS = 8;

const NUM_TOTAL_BALLS = NUM_OUTSIDE_BALLS + NUM_MIDDLE_BALLS + NUM_CENTER_BALLS;  // 56



function randomMissileSize(start_size, max_rand) {
  let gg = Math.floor(Math.random() * 7);
  let circle_size = '';
  if (gg == 0) {
    let r = Math.floor(Math.random() * max_rand) + start_size;
    //   circle_size = `${r}px`;
    circle_size = r;
  }
  return circle_size;
}


//function randomMissileColor([32, 0, 0], [244, 0, 0]) {
function randomMissileColor(rgb_ranges, rgb_bases) {
  let [red_range, green_range, blue_range] = rgb_ranges;
  let [red_base, green_base, blue_base] = rgb_bases;
  let non_zero_change = Math.floor(Math.random() * 8);
  if (non_zero_change == 0) {
    return '';
  } else {
    let none_zero_hide = Math.floor(Math.random() * 3);
    if (none_zero_hide == 0) {
      return `rgb(1,2,3,0)`;
    }
    r = Math.floor(Math.random() * red_range) + red_base;

    g = Math.floor(Math.random() * green_range) + green_base;
    b = Math.floor(Math.random() * blue_range) + blue_base;
    rgba = `rgb(${r}, ${g}, ${b}, 1)`;
    return rgba;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeDiamondsBalls() {
  let out_arr = [];
  for (let i = 0; i < 360; i++) {   // 6 sec == 60fps * 6  
    let in_arr = [];


    for (let j = 0; j < NUM_OUTSIDE_BALLS; j++) {
      outside_missile_id = OUTSIDE_ID_START + j;
      m_size = randomMissileSize(10, 15);
      if (m_size != '') {
        m_size += 'px';
      }
      //      m_color = randomMissileColor([32, 0, 0], [223, 0, 0]);
      m_color = randomMissileColor([128, 0, 0], [255 - 128, 0, 0]);
      if (m_size !== '' || m_color !== '') {

        t_arr = [outside_missile_id, m_size, m_color];
        in_arr.push(t_arr);
      }
    }




    // these are diamonds, !!!
    for (let j = 0; j < NUM_MIDDLE_BALLS; j++) {
      outside_missile_id = MIDDLE_ID_START + j;
      m_size = randomMissileSize(11, 33);
      m_size2 = "";
      if (m_size != '') {
        m_size2 = Math.floor(m_size / 2);
        m_size += 'px';
      }
      m_color = randomMissileColor([32, 32, 32], [100, 223, 100]);
      if (m_size !== '' || m_color !== '') {
        a_diamond = the_diamonds[j];

        x_adjust = (a_diamond[0] - m_size2) + "px";
        y_adjust = (a_diamond[1] - m_size2) + "px";
        t_arr = [outside_missile_id, m_size, m_color, x_adjust, y_adjust];
        in_arr.push(t_arr);
      }
    }


    for (let j = 0; j < NUM_CENTER_BALLS; j++) {
      outside_missile_id = CENTER_ID_START + j;
      m_size = randomMissileSize(15, 15);
      if (m_size != '') {
        m_size += 'px';
      }
      m_color = randomMissileColor([128, 128, 0], [255 - 128, 255 - 128, 0]);
      if (m_size !== '' || m_color !== '') {
        t_arr = [outside_missile_id, m_size, m_color];
        in_arr.push(t_arr);
      }
    }



    in_arr = shuffleArray(in_arr);

    out_arr.push(in_arr);
  }
  return out_arr;
}










// stupid way to do this!!!!!!!
function hideMissileBalls(missile_id) {
  let missile_fill = "--missile-fill-" + missile_id;
  rgba = `rgb(1,2,3,0)`;
  missile_area = document.querySelector('.missile-vars');
  missile_area.style.setProperty(missile_fill, rgba);
}

function setFillNone() {
  for (let i = 100; i < 132; i++) {
    hideMissileBalls(i);
  }
  for (let i = 200; i < 216; i++) {
    hideMissileBalls(i);
  }
  for (let i = 300; i < 308; i++) {
    hideMissileBalls(i);
  }
}



// 56 [ color, size, display] ==56*3=168 for each instance


// 60 frames a seconds  60*168=10080 numbers a second



function carom() {
}



/////////////



function missilePosition(real_id, z_index, the_stats) {
  let [center_x, center_y, the_scale] = the_stats;
  missile_div = document.getElementById(real_id + '-div');
  missile_div.style.zIndex = z_index;
  missile_x_y = document.getElementById(real_id + '-x-y');

  missile_x_y.setAttribute("x", center_x + 256 + 128);           // get shot centered horizontally
  missile_x_y.setAttribute("y", center_y + 256 + 64);
  missile_scaled = document.getElementById(real_id + '-scaled');
  missile_scaled.style.transform = `scale(${the_scale})`;
}







////////////////////////////////////////////////


function missileDraw(the_sprite, the_player) {

  pylon_player_ys = [the_sprite.m_y, the_player.m_y];

  real_id = the_sprite.s_id;
  [the_z_index, missile_relative, x_center_offset, head_on_view] = objectPlacement(the_sprite, the_player);
  if (missile_relative == LEFT_OF_PLAYER) {



    left_mid_right_vlines = objectLeftSide(x_center_offset, pylon_player_ys, MISSILE_PIXEL_DEPTH);
  } else {
    left_mid_right_vlines = objectRightSide(x_center_offset, pylon_player_ys, MISSILE_PIXEL_DEPTH);
  }
  gradient_front = 'clear-grad';
  the_stats = spriteFront(left_mid_right_vlines);


  missilePosition(real_id, the_z_index, the_stats);
}



