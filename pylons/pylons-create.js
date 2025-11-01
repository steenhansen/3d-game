PYLON_A = {
  s_isa: "is-pylon",
  //  o_outline_color: '#aaaaaa',  // 0.3333 grey
  m_alive: true,
  p_bare_frnt_col: 'pink',
  p_bare_left_col: 'white',
  p_bare_rght_col: '#555555',   // 0.66666 grey
};




function initPylonData(playground_box, pylon_num, x, y, o_color) {
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
  return merged_pylon;
}




function initSign(pylon_id, sign_in_squares, vert_word, text_color) {
  xy_pixels = originOffset2(sign_in_squares, "ignore_bounds");

  sign_pylon = {
    s_isa: "is-pylon-sign",
    s_pylon_name: pylon_id,
    s_vert_word: vert_word,
    //o_url_hit: '', 
    o_outline_color: 'none',
    m_alive: true,
    m_x: xy_pixels[0],
    m_y: xy_pixels[1],
    p_sign_text_col: text_color,
  };
  return sign_pylon;
}

function initSignLink(pylon_id, sign_in_squares, vert_word, text_color, url_link) {
  xy_pixels = originOffset2(sign_in_squares, "ignore_bounds");
  sign_pylon = initSign(pylon_id, sign_in_squares, vert_word, text_color);
  sign_pylon.o_url_hit = url_link;
  return sign_pylon;
}





function initPylonData22(pylon_id, xy_pixels, pylon_color) {

  pylon_name = `pylon-${pylon_id}`;

  a_pylon = {
    s_isa: "is-pylon",
    s_pylon_name: pylon_name,
    //o_url_hit: '', 
    p_bare_frnt_col: pylon_color,
    p_bare_left_col: pylon_color,
    p_bare_rght_col: pylon_color,
    m_alive: true,
    m_x: xy_pixels[0],
    m_y: xy_pixels[1],

  };


  return a_pylon;
}



function makePylons22(pylons_list, pylon_colors) {
  declared_pylons = [];
  num_pylons = pylons_list.length;
  for (let p_index = 0; p_index < num_pylons; p_index++) {
    pylon_xy_squares = pylons_list[p_index];
    color_of_pylon = pylon_colors[p_index];
    const pylon_id = p_index.toString().padStart(2, '0');
    xy_pixels = originOffset2(pylon_xy_squares, "ignore_bounds");
    new_hole = initPylonData22(pylon_id, xy_pixels, color_of_pylon);
    declared_pylons.push(new_hole);
  }
  return declared_pylons;

}
