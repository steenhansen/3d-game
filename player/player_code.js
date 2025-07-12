


function missileLR(a_missile, the_player) {
  if (a_missile.x < the_player.x) {
    return MISSILE_TO_LEFT;
  } else {
    return MISSILE_TO_RIGHT;
  }
}




function playerRight(travel_speed) {
  the_player.x += 3 * travel_speed;
  if (the_player.x > SCENE_X_MAX) {
    the_player.x = SCENE_X_MIN;
  }
}

function playerLeft(travel_speed) {
  the_player.x -= 3 * travel_speed;
  if (the_player.x < SCENE_X_MIN) {
    the_player.x = SCENE_X_MAX;
  }
}

// 784

// 49* 16 = 784



function playerForward(travel_speed) {
  the_player.y += 1 * travel_speed;
  if (the_player.y > 778) {
    the_player.y = 0;
  }
}

function playerBackward(travel_speed) {
  the_player.y -= 1 * travel_speed;
  if (the_player.y < 0) {
    the_player.y = 778;
  }
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