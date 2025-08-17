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

    missile_area = document.getElementById('missile-area');
    missile_area.style.setProperty(missile_fill, circle_size);

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

    missile_area = document.getElementById('missile-area');
    missile_area.style.setProperty(missile_fill, rgb);
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


    missile_area = document.getElementById('missile-area');
    missile_area.style.setProperty(missile_fill, rgb);

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
    missile_area = document.getElementById('missile-area');
    missile_area.style.setProperty(missile_fill, rgb);
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
  missile_area = document.getElementById('missile-area');
  missile_area.style.setProperty(missile_display, display_none_block);

}

function getRandoms() {
  for (let i = 100; i < 132; i++) {
    getRandomColorDark(i);
    getRandomSize2(i, 15, 10);
    getRandomFill(i);
  }
  for (let i = 200; i < 216; i++) {
    getRandomColorMedium(i);
    getRandomSize2(i, 20, 10);
    getRandomFill(i);
  }
  for (let i = 300; i < 308; i++) {
    getRandomColorBright(i);
    getRandomSize2(i, 20, 10);
    getRandomFill(i);
  }
}

// copy

function missileSet(real_id, the_sprite, the_type, da_name) {
  //  enemyMissileDraw('missile-1', the_sprite, g_player, 'missile', 'da_missile');
  enemyMissileDraw(real_id, the_sprite, g_player, the_type, da_name);
  getRandoms();
}


html_missile_1 = makeMissile('missile-1');
html_missile_2 = makeMissile('missile-2');
document.getElementById('missile-area').innerHTML = `
<div id="the-missile-1" >${html_missile_1}</div>
<div id="the-missile-2" >${html_missile_2}</div>`;

let the_missile_1 = {
  is_a: "is-missile",
  id: "missile-flames", spin: 31,
  //  x: area_width_half + 260, y: 854,
  //  x: 49000, y: 333,
  x: 400, y: 310,

  x_move: 0, y_move: 0,    // always away
  column_colors: COL_EMENY
};


let the_missile_2 = {
  is_a: "is-missile",
  id: "missile-flames", spin: 31,
  //  x: area_width_half + 260, y: 854,
  //  x: 49000, y: 333,
  x: 100, y: 210,

  x_move: 0, y_move: 0,    // always away
  column_colors: COL_EMENY
};
