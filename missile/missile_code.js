function missileSet(the_sprite, html_id) {
  missile_box = missileDraw(the_sprite, the_player);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = missile_box;

  let [x_px, y_px, w_px, h_px] = svgIntoRect(the_sprite, html_id, 'da_missile');

  document.documentElement.style.setProperty("--my-missile-x", x_px);
  document.documentElement.style.setProperty("--my-missile-y", y_px);
  document.documentElement.style.setProperty("--my-missile-width", w_px);
  document.documentElement.style.setProperty("--my-missile-height", h_px);

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
  id: "missle-planets", spin: 31,
  //  x: area_width_half + 260, y: 854,
  x: 49000, y: 333,
  //  x_move: +1, y_move: -1,
  x_move: 0, y_move: 0,
  x_steps: 6, y_steps: 2,
  column_colors: COL_EMENY
};

