



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






function initPylonData(pylon_id, xy_pixels, gradient_of_pylon, pylon_hidden) {
  let [x_pixels, y_pixels] = xy_pixels;
  pylon_name = `pylon-${pylon_id}`;
  if (x_pixels < 0 && y_pixels < 0) {
    x_pixels = Math.abs(x_pixels);
    y_pixels = Math.abs(y_pixels);
  }
  a_pylon = {
    s_isa: "is-pylon",
    s_pylon_name: pylon_name,
    s_gradient: gradient_of_pylon,
    m_grad_frnt_twirl: 0,
    m_grad_side_twirl: 200,              // 00top, 100 left, 200 bottom 300 right        overflow is 400xa 
    m_alive: true,
    m_x: x_pixels,
    m_y: y_pixels,
    m_hidden: pylon_hidden
  };


  return a_pylon;
}


function makePylons(pylons_list, pylon_gradients) {
  declared_pylons = [];
  num_pylons = pylons_list.length;
  for (let p_index = 0; p_index < num_pylons; p_index++) {


    let [x_square, y_square] = pylons_list[p_index];
    if (x_square < 0 && y_square < 0) {
      pylon_hidden = true;
    } else {
      pylon_hidden = false;
    }
    x_square = Math.abs(x_square);
    y_square = Math.abs(y_square);
    pylon_xy_squares = [x_square, y_square];



    gradient_of_pylon = pylon_gradients[p_index];
    const pylon_id = p_index.toString().padStart(2, '0');
    xy_pixels = originOffset2(pylon_xy_squares, "ignore_bounds");

    new_pylon = initPylonData(pylon_id, xy_pixels, gradient_of_pylon, pylon_hidden);
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
