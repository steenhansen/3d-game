const L_FARTHEST_VISIBLE_HOLE = 728;

function holeSet(a_hole, the_player) {
  const hole_id = a_hole.s_hole_name;
  let target_div = document.getElementById(hole_id);
  const hole_player_ys = [a_hole.m_y, the_player.m_y];
  const dist_abs_y = distanceAbsY(hole_player_ys);
  if (a_hole.m_hidden || dist_abs_y > L_FARTHEST_VISIBLE_HOLE) {
    target_div.innerHTML = '';
  } else {
    const svg_hole = createHoleHtml(a_hole, the_player);
    if (svg_hole == null) {
      const hole_error_set = `bad::holeSet ${hole_id}`;
      throw new Error(hole_error_set);
    }
    target_div.innerHTML = svg_hole;
  }
}

function holeOnMiddle(x_center_offset, hole_player_ys) {
  const dist_abs_y = distanceAbsY(hole_player_ys);
  let [left_front_bot, right_front_bot, _back_right_bot, back_left_bot] = panels3Middle(x_center_offset, dist_abs_y, HOLE_PIXEL_DEPTH);
  return [left_front_bot, right_front_bot, _back_right_bot, back_left_bot];
}

function createHoleHtml(a_hole, the_player) {
  let [the_z_index, hole_relative, x_center_offset, head_on_view] = objectPlacement(a_hole, the_player);
  const hole_player_ys = [a_hole.m_y, the_player.m_y];
  let left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot;
  if (head_on_view) {
    [left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot] = holeOnMiddle(x_center_offset, hole_player_ys);
  } else if (hole_relative == LEFT_OF_PLAYER) {
    [left_front_bot, right_front_bot, back_RIGHT_bot, back__LEFT__bot] = panels3BackRight(x_center_offset, hole_player_ys, HOLE_PIXEL_DEPTH);
  } else {
    [left_front_bot, right_front_bot, back__LEFT__bot, back_RIGHT_bot] = panels3BackLeft(x_center_offset, hole_player_ys, HOLE_PIXEL_DEPTH);
  }
  const hole_id = "front-hole-" + a_hole.s_hole_name;
  const [front_left_x, front_left_y] = left_front_bot;
  const [front_right_x, front_right_y] = right_front_bot;
  const [back_right_x, back_right_y] = back_RIGHT_bot;
  const [back_left_x, back_left_y] = back__LEFT__bot;

  if (isNaN(front_left_x)) {
    const hole_error = `bad::hole ${hole_id} ${front_left_x}`;
    throw new Error(hole_error);
  }
  const hole_color = a_hole.s_hole_color;
  const vertical_color = a_hole.c_vert_color;
  let front_hole = `<polygon fill="${hole_color}"  id="a-hole-id"
                      points="${front_left_x},${front_left_y}
                              ${front_right_x},${front_right_y}
                              ${back_right_x},${back_right_y}
                              ${back_left_x},${back_left_y}      " />`;

  if (head_on_view || hole_relative == RIGHT_OF_PLAYER) {
    front_hole += `<line stroke="${vertical_color}"  
                      x1=${back_right_x} y1=${back_right_y}
                      x2=${back_right_x} y2=${front_right_y}      " />`;
  }
  if (head_on_view || hole_relative == LEFT_OF_PLAYER) {
    front_hole += `<line stroke="${vertical_color}"  
                      x1=${back_left_x} y1=${back_right_y}
                      x2=${back_left_x} y2=${front_right_y}      " />`;
  }
  const hole_svg = holeToSvg(the_z_index, front_hole);
  return hole_svg;
}

function holeToSvg(z_index, front_hole) {
  let the_hole = `
      <div class="show-hole" style="z-index:${z_index}">
          <svg viewBox="0 0 1023 511" preserveAspectRatio="xMinYMin slice">
              ${front_hole}
          </svg>
      </div>`;
  return the_hole;
}

