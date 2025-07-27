function missileLR(a_missile, the_player) {
  if (a_missile.x < the_player.x) {
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
  the_player.x = rightOnBoard(the_player.x, travel_speed * 3);
}





function leftOnBoard(x_pos, left_steps) {
  x_pos -= left_steps;
  if (x_pos < SCENE_X_MIN) {
    x_pos += SCENE_X_MAX;
  }
  return x_pos;
}

function playerLeft(travel_speed) {
  the_player.x = leftOnBoard(the_player.x, travel_speed * 3);
}




function playerForward(travel_speed) {
  the_player.y = forwardOnBoard(the_player.y, travel_speed);
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
  the_player.y = backwardOnBoard(the_player.y, travel_speed);
}



function thingRelationToPlayer(extended_x, the_player, things_position) {
  player_x = the_player.x;
  if (things_position == LEFT_OF_PLAYER) {
    difference_x = player_x - extended_x;
    x_center_offset = HALF_VIEW_WIDTH - difference_x;
  } else if (things_position == RIGHT_OF_PLAYER) {
    difference_x = extended_x - player_x;
    x_center_offset = HALF_VIEW_WIDTH + difference_x;
  } else {
    difference_x = player_x - extended_x;
    x_center_offset = HALF_VIEW_WIDTH - difference_x;
  }
  return [difference_x, x_center_offset];
}


function relativeToPlayer(a_thing, the_player) {
  player_start_left = the_player.x - HALF_COLUMN_WIDTH;
  player_start_right = the_player.x + HALF_COLUMN_WIDTH;
  if (a_thing.x < player_start_left) {
    return LEFT_OF_PLAYER;
  } else if (a_thing.x > player_start_right) {
    return RIGHT_OF_PLAYER;
  } else {
    return MIDDLE_OF_PLAYER;
  }
}