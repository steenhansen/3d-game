
function enemyMove(the_enemy) {
  x_move = the_enemy.x_move;
  if (x_move < 0) {
    the_enemy.x = leftOnBoard(the_enemy.x, x_move * -4 * 3);
  } else if (x_move > 0) {
    the_enemy.x = rightOnBoard(the_enemy.x, x_move * 4 * 3);

  }

  y_move = the_enemy.y_move;
  if (y_move < 0) {
    the_enemy.y = backwardOnBoard(the_enemy.y, y_move * -4);
  } else if (y_move > 0) {
    the_enemy.y = forwardOnBoard(the_enemy.y, y_move * 4);

  }
  console.log(the_enemy.x, the_enemy.y);

}

function enemySet(the_sprite, html_id) {
  enemy_box = enemyDraw(the_sprite, the_player);
  targetDiv = document.getElementById(html_id);
  targetDiv.innerHTML = enemy_box;



  let [x_px, y_px, w_px, h_px] = svgIntoRect(the_sprite, html_id, 'da_enemy');

  document.documentElement.style.setProperty("--my-enemy-x", x_px);
  document.documentElement.style.setProperty("--my-enemy-y", y_px);
  document.documentElement.style.setProperty("--my-enemy-width", w_px);
  document.documentElement.style.setProperty("--my-enemy-height", h_px);

  //x_move: +1, y_move: -1,


}

function enemyDraw(an_enemy, the_player) {
  [the_z_index, difference_y, enemy_relative, x_offsets] = objectPlacement(an_enemy, the_player);
  document.documentElement.style.setProperty("--my-enemy-z", the_z_index);
  if (enemy_relative == LEFT_OF_PLAYER) {
    the_data = objectLeftSide(an_enemy, x_offsets, difference_y);
  } else if (enemy_relative == RIGHT_OF_PLAYER) {
    the_data = objectRightSide(an_enemy, x_offsets, difference_y);
  } else {
    the_data = objectMiddleRegion(an_enemy, x_offsets, difference_y);
  }
  let [left_mid_right_vlines, _gradient_right, gradient_front] = the_data;
  afront_column = panelFront(left_mid_right_vlines, gradient_front, 'da_enemy');
  thing_svg = enemyArea(the_z_index, afront_column);
  return thing_svg;
}

function enemyArea(z_index, front_column) {
  let the_column = `<div class="show-column" style="z-index:${z_index}; ">
                     <svg 
                          viewBox="0 0 1023 511" 
                          preserveAspectRatio="xMinYMin slice">
                              ${front_column}
                     </svg>
                   </div>`;
  return the_column;
}

document.getElementById('enemy-area').innerHTML = `<div id="enemy-id" ></div>`;

let the_enemy = {
  id: "enemy-planets", spin: 31,
  //  x: area_width_half + 260, y: 854,
  x: 50000, y: 313,
  x_move: 0, y_move: -1,
  column_colors: COL_EMENY
};

