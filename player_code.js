


function columnLMRH2Player(a_column, the_player) {
  // let is_visible = (the_player.y >= a_column.y);
  // if (!is_visible) {
  //   return COLUMN_HIDDEN;            nothing is ever hidden anymore! all visible
  // }
  player_start_left = the_player.x - HALF_COLUMN_WIDTH;
  player_start_right = the_player.x + HALF_COLUMN_WIDTH;
  if (a_column.x < player_start_left) {
    return COLUMN_TO_LEFT;
  } else if (a_column.x > player_start_right) {
    return COLUMN_TO_RIGHT;
  } else {
    return COLUMN_IN_MIDDLE;
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



function columnRelationToPlayer(extended_x, the_player, column_relative) {
  player_x = the_player.x;
  if (column_relative == COLUMN_TO_LEFT) {
    difference_x = player_x - extended_x;
    x_center_offset = HALF_VIEW_WIDTH - difference_x;
  } else if (column_relative == COLUMN_TO_RIGHT) {
    difference_x = extended_x - player_x;
    x_center_offset = HALF_VIEW_WIDTH + difference_x;
  } else {
    difference_x = player_x - extended_x;
    x_center_offset = HALF_VIEW_WIDTH - difference_x;
  }
  return [difference_x, x_center_offset];
}
