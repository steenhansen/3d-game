



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






function initPylonData(pylon_id, xy_pixels, gradient_of_pylon) {
  pylon_name = `pylon-${pylon_id}`;
  a_pylon = {
    s_isa: "is-pylon",
    s_pylon_name: pylon_name,
    s_gradient: gradient_of_pylon,
    p_grad_frnt_twirl: 0,
    p_grad_side_twirl: 200,              // 00top, 100 left, 200 bottom 300 right        overflow is 400xa 
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


function makePylonsSame(pylons_list, pylon_gradient) {
  declared_pylons = [];
  num_pylons = pylons_list.length;
  for (let p_index = 0; p_index < num_pylons; p_index++) {
    pylon_xy_squares = pylons_list[p_index];
    const pylon_id = p_index.toString().padStart(2, '0');
    xy_pixels = originOffset2(pylon_xy_squares, "ignore_bounds");

    new_pylon = initPylonData(pylon_id, xy_pixels, pylon_gradient);
    declared_pylons.push(new_pylon);
  }

  return declared_pylons;
}
