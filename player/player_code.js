function missileLR(a_missile, g_player) {
  if (a_missile.m_x < g_player.m_x) {
    return MISSILE_TO_LEFT;
  } else {
    return MISSILE_TO_RIGHT;
  }
}













function rightOnBoard(x_pos, right_steps) {
  x_pos += right_steps;
  if (x_pos > SCENE_X_MAX) {
    x_pos -= SCENE_X_MAX;
  }
  return x_pos;
}

function playerRight(travel_speed) {
  g_player.m_x = rightOnBoard(g_player.m_x, travel_speed * 3);
}





function leftOnBoard(x_pos, left_steps) {
  x_pos -= left_steps;
  if (x_pos < SCENE_X_MIN) {
    x_pos += SCENE_X_MAX;
  }
  return x_pos;
}

function playerLeft(travel_speed) {
  g_player.m_x = leftOnBoard(g_player.m_x, travel_speed * 3);
}




function playerForward(travel_speed) {
  g_player.m_y = forwardOnBoard(g_player.m_y, travel_speed);
}
function forwardOnBoard(y_pos, backward_steps) {
  y_pos += backward_steps;
  if (y_pos > SCENE_Y_MAX) {
    y_pos -= SCENE_Y_MAX;
  }
  return y_pos;
}




function backwardOnBoard(y_pos, forward_steps) {
  y_pos -= forward_steps;
  if (y_pos < SCENE_Y_MIN) {
    y_pos += SCENE_Y_MAX;
  }
  return y_pos;
}


function playerBackward(travel_speed) {
  g_player.m_y = backwardOnBoard(g_player.m_y, travel_speed);
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


// function relativeToPlayer(thing_x, player_x) {
//   player_start_left = player_x - HALF_TILE_WIDTH;
//   player_start_right = player_x + HALF_TILE_WIDTH;
//   if (thing_x < player_start_left) {
//     return LEFT_OF_PLAYER;
//   } else if (thing_x > player_start_right) {
//     return RIGHT_OF_PLAYER;
//   } else {
//     return MIDDLE_OF_PLAYER;
//   }
// }


// function hitPlayer(a_thing, the_player) {
//   let { thing_x, thing_y } = a_thing;
//   let { m_x: player_x, player_y } = the_player;

//   // if column is at 0,0 then 

// }


function objectBounced(move_direction) {
  if (move_direction == MOVINGx_NW) {
    new_direction = MOVINGx_SE;
  } else if (move_direction == MOVINGx_N) {
    new_direction = MOVINGx_S;
    //console.log(move_direction, new_direction);
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
