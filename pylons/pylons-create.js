PYLON_A = {
  s_isa: "is-pylon",
  //  o_outline_color: '#aaaaaa',  // 0.3333 grey
  m_alive: true,
  p_bare_frnt_col: 'pink',
  p_bare_left_col: 'white',
  p_bare_rght_col: '#555555',   // 0.66666 grey
};



function makePylon_A(pylon_char, pylon_num, x, y) {
  checkerboard_width = g_planet.s_checkerboard_width;
  checkerboard_depth = g_planet.s_checkerboard_depth;
  if (x < 0 || x > checkerboard_width) {
    err_mess = `Pylon: ${x} x is out of range, max is ${checkerboard_width}`;
    throw new Error(err_mess);
  }
  if (y < 0 || y > checkerboard_depth) {
    throw new Error("Part-1, y is out of range " + y + checkerboard_depth);
  }
  pylon_name = `pylon-${pylon_char}-${pylon_num}`;
  different_obj = { s_pylon_name: pylon_name, m_x: x, m_y: y };
  merged_pylon = Object.assign({}, PYLON_A, different_obj);
  return merged_pylon;
}




function makePylon_new(playground_box, pylon_num, x, y, o_color) {
  //console.log("makePylon_new pylon_num", pylon_num, playground_box);
  let [left_x, top_y, _right_x, _bottom_y] = playground_box;
  offset_x = left_x + x;
  offset_y = top_y + y;
  if (pylon_num.at(0) == '_') {
    return false;
  }

  checkerboard_width = g_planet.s_checkerboard_width;
  checkerboard_depth = g_planet.s_checkerboard_depth;

  pylon_name = `pylon-${pylon_num}`;

  xyNotInField(offset_x, offset_y, `Offset pylon '${pylon_name}' coords are out of bounds`);

  different_obj = { s_pylon_name: pylon_name, m_x: offset_x, m_y: offset_y };
  merged_pylon = Object.assign({}, PYLON_A, different_obj);

  if (o_color != undefined) {
    merged_pylon.p_bare_frnt_col = o_color;
    merged_pylon.p_bare_left_col = o_color;
    merged_pylon.p_bare_rght_col = o_color;
  }
  //console.log("22222222222222", merged_pylon);
  return merged_pylon;
}

function clearEmptyPylons(pylon_list) {
  useful_pylons = [];
  useful_index = 0;
  number_pylons = pylon_list.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = pylon_list[pylon_index];
    if (a_pylon) {
      useful_pylons[useful_index] = a_pylon;
      useful_index++;
    }
  }
  return useful_pylons;
}

PYLON_colored = {
  s_isa: "is-pylon",
};
function makePylonColored(pylon_char, pylon_num, x, y, color_front, color_sides) {
  checkerboard_width = g_planet.s_checkerboard_width;
  checkerboard_depth = g_planet.s_checkerboard_depth;
  if (x < 0 || x > checkerboard_width) {
    throw new Error("Part-1, x is out of range", x, checkerboard_width);
  }
  if (y < 0 || y > checkerboard_depth) {
    throw new Error("Part-1, y is out of range " + y + checkerboard_depth);
  }
  pylon_name = `pylon-${pylon_char}-${pylon_num}`;
  different_obj = {
    s_pylon_name: pylon_name, m_x: x, m_y: y,
    m_alive: true,
    p_bare_frnt_col: color_front,
    p_bare_left_col: color_sides,
    p_bare_rght_col: color_sides,
  };
  merged_pylon = Object.assign({}, PYLON_colored, different_obj);
  // console.log('mer', merged_pylon);
  return merged_pylon;
}


function initSigns(playground_box, xy_enter, xy_exit) {
  let [left_x, top_y, _right_x, _bottom_y] = playground_box;

  let [enter_x, enter_y] = xy_enter;
  let [exit_x, exit_y] = xy_exit;

  exit_pylon.m_x = left_x + exit_x;
  exit_pylon.m_y = top_y + exit_y;
  xyNotInField(exit_pylon.m_x, exit_pylon.m_y, `Offset exit sign coords are out of bounds`);

  enter_pylon.m_x = left_x + enter_x;
  enter_pylon.m_y = top_y + enter_y;
  xyNotInField(enter_pylon.m_x, enter_pylon.m_y, `Offset enter sign coords are out of bounds`);

  return [enter_pylon, exit_pylon];
}


// exit_pylon = {
//   s_isa: "is-pylon-sign",
//   s_pylon_name: "pylon-exit",
//   s_vert_word: "EXIT",
//   o_url_hit: 'planet-1/index.html',
//   o_outline_color: 'none',
//   m_alive: true,
//   m_x: 1000, m_y: 33,
//   p_sign_text_col: 'lime',
// };

// enter_pylon = {
//   s_isa: "is-pylon-sign",
//   s_pylon_name: "pylon-start",
//   s_vert_word: "SHOOT",
//   //o_url_hit: '', 
//   o_outline_color: 'none',
//   m_alive: true,
//   m_x: 1900, m_y: 55,
//   p_sign_text_col: 'white',
// }; 