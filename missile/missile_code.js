function getRandomColor(missile_id) {
  //let gg = Math.floor(Math.random() * 6);
  let gg = Math.floor(Math.random() * 16);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 128) + 128;
    let g = 0;  //Math.floor(Math.random() * 256);
    let b = 0;  //Math.floor(Math.random() * 256);
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomSize2(missile_id, start_size15, max_rand10) {
  let gg = Math.floor(Math.random() * 7);
  if (gg == 0) {
    let r = Math.floor(Math.random() * max_rand10) + start_size15;
    let missile_fill = "--missile-size-" + missile_id;
    let circle_size = `${r}px`;
    document.documentElement.style.setProperty(missile_fill, circle_size);
  }

}


function getRandomSize(missile_id) {
  let gg = Math.floor(Math.random() * 7);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 10) + 15;
    let missile_fill = "--missile-size-" + missile_id;
    let circle_size = `${r}px`;
    document.documentElement.style.setProperty(missile_fill, circle_size);
  }
}


function getRandomColorDark(missile_id) {
  let gg = Math.floor(Math.random() * 16);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 32) + 224;
    let g = 0;  //Math.floor(Math.random() * 256);
    let b = 0;  //Math.floor(Math.random() * 256);
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomColorMedium(missile_id) {
  let gg = Math.floor(Math.random() * 16);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 32) + 224;
    let g = Math.floor(Math.random() * 32) + 150;
    let b = 0;  //Math.floor(Math.random() * 256);
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomColorBright(missile_id) {
  let gg = Math.floor(Math.random() * 16);
  if (gg == 0) {
    let r = Math.floor(Math.random() * 32) + 224;
    let g = Math.floor(Math.random() * 32) + 224;
    let b = 0;  //Math.floor(Math.random() * 256);
    let missile_fill = "--missile-fill-" + missile_id;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.documentElement.style.setProperty(missile_fill, rgb);
  }
}

function getRandomFill(missile_id) {
  let missile_display = "--missile-display-" + missile_id;
  let gg = Math.floor(Math.random() * 3);
  if (gg == 0) {
    display_none_block = `none`;
  } else {
    display_none_block = `block`;
  }
  document.documentElement.style.setProperty(missile_display, display_none_block);
}

function getRandoms() {
  for (let i = 100; i < 132; i++) {
    getRandomColorDark(i);
    getRandomSize2(i, 15, 10);
    //getRandomColor(i);
    getRandomFill(i);
  }
  for (let i = 200; i < 216; i++) {
    getRandomColorMedium(i);
    //getRandomColor(i);
    getRandomSize2(i, 20, 10);
    getRandomFill(i);
  }
  for (let i = 300; i < 308; i++) {
    getRandomColorBright(i);
    getRandomSize(i, 20, 10);
    //getRandomColor(i);
    getRandomFill(i);
  }
}


function missileSet(the_sprite, html_id) {
  missile_box = missileDraw(the_sprite, the_player);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = missile_box;

  let [x_px, y_px, w_px, h_px] = svgIntoRect(the_sprite, html_id, 'da_missile');

  document.documentElement.style.setProperty("--my-missile-x", x_px);
  document.documentElement.style.setProperty("--my-missile-y", y_px);
  document.documentElement.style.setProperty("--my-missile-width", w_px);
  document.documentElement.style.setProperty("--my-missile-height", h_px);

  getRandoms();

}

function missileDraw(a_missile, the_player) {
  [the_z_index, difference_y, missile_relative, x_offsets] = objectPlacement(a_missile, the_player);
  document.documentElement.style.setProperty("--my-missile-z", the_z_index);
  if (missile_relative == LEFT_OF_PLAYER) {
    the_data = objectLeftSide(a_missile, x_offsets, difference_y);
  } else if (missile_relative == RIGHT_OF_PLAYER) {
    the_data = objectRightSide(a_missile, x_offsets, difference_y);
  } else {
    the_data = objectMiddleRegion(a_missile, x_offsets, difference_y);
  }
  let [left_mid_right_vlines, _gradient_right, gradient_front] = the_data;
  afront_column = panelFront(left_mid_right_vlines, gradient_front, 'da_missile');
  thing_svg = missileArea(the_z_index, afront_column);
  return thing_svg;
}



function missileArea(z_index, front_column) {
  let the_column = `<div class="show-column" style="z-index:${z_index}; ">
                     <svg 
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                              ${front_column}
                     </svg>
                   </div>`;
  return the_column;
}

document.getElementById('missile-area').innerHTML = `<div id="missile-id" ></div>`;

let the_missile = {
  id: "missile-flames", spin: 31,
  //  x: area_width_half + 260, y: 854,
  x: 49000, y: 333,

  x_move: 0, y_move: -1,    // always away
  column_colors: COL_EMENY
};

