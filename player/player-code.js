function playerRight(the_player, travel_speed, diagonal_weight) {
  const right_x = rightOnBoard(the_player.m_x, travel_speed * diagonal_weight);
  return right_x;
}

function rightOnBoard(x_pos, right_steps) {
  const checkerboard_width = g_planet.s_checkerboard_width;
  x_pos += right_steps;
  if (x_pos > checkerboard_width) {
    x_pos -= checkerboard_width;
  }
  return x_pos;
}

function playerLeft(the_player, travel_speed, diagonal_weight) {
  const left_x = leftOnBoard(the_player.m_x, travel_speed * diagonal_weight);
  return left_x;
}

function leftOnBoard(x_pos, left_steps) {
  const checkerboard_width = g_planet.s_checkerboard_width;
  x_pos -= left_steps;
  if (x_pos < SCENE_X_MIN) {
    x_pos += checkerboard_width;
  }
  return x_pos;
}

function playerForward(the_player, travel_speed) {
  const forward_y = forwardOnBoard(the_player.m_y, travel_speed);
  return forward_y;
}

function playerBackward(the_player, travel_speed) {
  const backward_y = backwardOnBoard(the_player.m_y, travel_speed);
  return backward_y;
}

function backwardOnBoard(y_pos, backward_steps) {
  const checkerboard_depth = g_planet.s_checkerboard_depth;
  y_pos -= backward_steps;
  if (y_pos < SCENE_Y_MIN) {
    y_pos += checkerboard_depth;
  }
  return y_pos;
}

function forwardOnBoard(y_pos, forward_steps) {
  const checkerboard_depth = g_planet.s_checkerboard_depth;
  y_pos += forward_steps;
  if (y_pos > checkerboard_depth) {
    y_pos -= checkerboard_depth;
  }
  return y_pos;
}

function missileLR(a_missile, the_player) {
  if (a_missile.m_x < the_player.m_x) {
    return MISSILE_TO_LEFT;
  } else {
    return MISSILE_TO_RIGHT;
  }
}

function thingRelationToPlayer(adjusted_x, the_player, things_position) {
  let x_center_offset;
  if (things_position == LEFT_OF_PLAYER) {
    x_center_offset = HALF_VIEW_WIDTH - adjusted_x;
  } else {
    x_center_offset = HALF_VIEW_WIDTH + adjusted_x;
  }
  return x_center_offset;
}

function objectBounced(move_direction) {
  let new_direction;
  if (move_direction == MOVINGx_NW) {
    new_direction = MOVINGx_SE;
  } else if (move_direction == MOVINGx_N) {
    new_direction = MOVINGx_S;
  } else if (move_direction == MOVINGx_NE) {
    new_direction = MOVINGx_SW;
  } else if (move_direction == MOVINGx_E) {
    new_direction = MOVINGx_W;
  } else if (move_direction == MOVINGx_SE) {
    new_direction = MOVINGx_NW;
  } else if (move_direction == MOVINGx_S) {
    new_direction = MOVINGx_N;
  } else if (move_direction == MOVINGx_SW) {
    new_direction = MOVINGx_NE;
  } else if (move_direction == MOVINGx_W) {
    new_direction = MOVINGx_E;
  } else {
    new_direction = move_direction;
  }
  return new_direction;
}
