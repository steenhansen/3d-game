// PYLON_A = {
//   s_isa: "is-pylon",
//   //  o_outline_color: '#aaaaaa',  // 0.3333 grey
//   m_alive: true,
//   p_bare_frnt_col: 'pink',
//   p_bare_left_col: 'white',
//   p_bare_rght_col: '#555555',   // 0.66666 grey
// };






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

// PYLON_colored = {
//   s_isa: "is-pylon",
// };
// function makePylonColored(pylon_char, pylon_num, x, y, color_front, color_sides) {
//   checkerboard_width = g_planet.s_checkerboard_width;
//   checkerboard_depth = g_planet.s_checkerboard_depth;
//   if (x < 0 || x > checkerboard_width) {
//     throw new Error("Part-1, x is out of range", x, checkerboard_width);
//   }
//   if (y < 0 || y > checkerboard_depth) {
//     throw new Error("Part-1, y is out of range " + y + checkerboard_depth);
//   }
//   pylon_name = `pylon-${pylon_char}-${pylon_num}`;
//   different_obj = {
//     s_pylon_name: pylon_name, m_x: x, m_y: y,
//     m_alive: true,
//     p_bare_frnt_col: color_front,
//     p_bare_left_col: color_sides,
//     p_bare_rght_col: color_sides,
//   };
//   merged_pylon = Object.assign({}, PYLON_colored, different_obj);
//   return merged_pylon;
// }






function initPylonData(pylon_id, xy_pixels, gradient_of_pylon) {
  pylon_name = `pylon-${pylon_id}`;
  a_pylon = {
    s_isa: "is-pylon",
    s_pylon_name: pylon_name,
    //o_url_hit: '', 
    s_gradient: gradient_of_pylon,
    p_grad_frnt_twirl: 0,
    p_grad_side_twirl: 200,              // 00top, 100 left, 200 bottom 300 right        overflow is 400xa 
    // p_bare_frnt_col: pylon_color,
    // p_bare_left_col: pylon_color,
    // p_bare_rght_col: pylon_color,
    // p_grad_frnt_from: GRAD_LIME_FUCHSIA[1],
    // p_grad_frnt_to: GRAD_LIME_FUCHSIA[0],
    // p_grad_left_from: GRAD_WHITE_BLACK[0],
    // p_grad_left_to: GRAD_WHITE_BLACK[1],
    // p_grad_rght_from: GRAD_RED_YELLOW[0],
    // p_grad_rght_to: GRAD_RED_YELLOW[1],
    // p_grad_side_twirl: 150,
    // p_grad_frnt_twirl: 350,
    m_alive: true,
    m_x: xy_pixels[0],
    m_y: xy_pixels[1],
  };


  return a_pylon;
}


function makePylons(pylons_list, pylon_gradients) {
  declared_pylons = [];
  num_pylons = pylons_list.length;
  for (let p_index = 0; p_index < num_pylons; p_index++) {
    pylon_xy_squares = pylons_list[p_index];
    gradient_of_pylon = pylon_gradients[p_index];
    const pylon_id = p_index.toString().padStart(2, '0');
    xy_pixels = originOffset2(pylon_xy_squares, "ignore_bounds");

    new_pylon = initPylonData(pylon_id, xy_pixels, gradient_of_pylon);
    declared_pylons.push(new_pylon);
  }

  return declared_pylons;
}

