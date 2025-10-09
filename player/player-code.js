function playerRight(travel_speed, diagonal_weight) {
  g_player.m_x = rightOnBoard(g_player.m_x, travel_speed * diagonal_weight);
}

function playerLeft(travel_speed, diagonal_weight) {
  g_player.m_x = leftOnBoard(g_player.m_x, travel_speed * diagonal_weight);
}

function playerForward(travel_speed) {
  g_player.m_y = forwardOnBoard(g_player.m_y, travel_speed);
}

function playerBackward(travel_speed) {
  g_player.m_y = backwardOnBoard(g_player.m_y, travel_speed);
}











function backwardOnBoard(y_pos, backward_steps) {
  y_pos -= backward_steps;
  if (y_pos < SCENE_Y_MIN) {
    y_pos += SCENE_Y_MAX;
  }
  return y_pos;
}

function forwardOnBoard(y_pos, forward_steps) {
  y_pos += forward_steps;
  if (y_pos > SCENE_Y_MAX) {
    y_pos -= SCENE_Y_MAX;
  }
  return y_pos;
}








function leftOnBoard(x_pos, left_steps) {
  x_pos -= left_steps;
  if (x_pos < SCENE_X_MIN) {
    x_pos += SCENE_X_MAX;
  }
  return x_pos;
}

function rightOnBoard(x_pos, right_steps) {
  x_pos += right_steps;
  if (x_pos > SCENE_X_MAX) {
    x_pos -= SCENE_X_MAX;
  }
  return x_pos;
}





function missileLR(a_missile, g_player) {
  if (a_missile.m_x < g_player.m_x) {
    return MISSILE_TO_LEFT;
  } else {
    return MISSILE_TO_RIGHT;
  }
}









function thingRelationToPlayer(adjusted_x, g_player, things_position) {
  player_x = g_player.m_x;
  if (things_position == LEFT_OF_PLAYER) {
    x_center_offset = HALF_VIEW_WIDTH - adjusted_x;
  } else {
    x_center_offset = HALF_VIEW_WIDTH + adjusted_x;
  }
  return x_center_offset;
}


function objectBounced(move_direction) {
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
