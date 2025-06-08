


//let the_player = { x: 16384, y: 1024 };
function columnLMRH2Player(a_column, the_player) {
  // console.log("columnLMRH2Player", the_player.x, a_column.x);
  let is_visible = (the_player.y >= a_column.y);
  if (!is_visible) {
    return COLUMN_HIDDEN;
  }
  player_start_left = the_player.x - HALF_COLUMN_WIDTH;
  // console.log("player_start_left", the_player.x, HALF_COLUMN_WIDTH);
  player_start_right = the_player.x + HALF_COLUMN_WIDTH;
  if (a_column.x < player_start_left) {
    //// console.log("XXX columnLMRH2Player", a_column.x, player_start_left);
    //   console.log("columnLMRH2Player in COLUMN_TO_LEFT");
    return COLUMN_TO_LEFT;
  } else if (a_column.x > player_start_right) {
    //  console.log("columnLMRH2Player in COLUMN_TO_RIGHT");
    return COLUMN_TO_RIGHT;
  } else {
    // console.log("columnLMRH2Player in COLUMN_IN_MIDDLE");
    return COLUMN_IN_MIDDLE;
  }
}


function playerRight(travel_speed) {
  the_player.x += 3 * travel_speed;
  // if (the_player.x > 32768) {
  //   the_player.x -= 32768;
  // }
  if (the_player.x > SCENE_X_MAX) {
    // console.log("RRR", SCENE_X_MIN);
    the_player.x = SCENE_X_MIN;
  }
}
// let the_player = { x: 16384, y: 1024 };
function playerLeft(travel_speed) {
  the_player.x -= 3 * travel_speed;
  // if (the_player.x < 0) {
  //   the_player.x += 32768;
  // }
  if (the_player.x < SCENE_X_MIN) {
    //console.log("LLLL", SCENE_X_MAX);
    the_player.x = SCENE_X_MAX;
  }
}

function playerForward(travel_speed) {
  the_player.y += 1 * travel_speed;
}

function playerBackward(travel_speed) {
  the_player.y -= 1 * travel_speed;
}


const HALF_SCENE_WIDTH = 16384;

//  HALF_VIEW_WIDTH         HALF_SCENE_WIDTH
function columnRelationToPlayer(extended_x, the_player, column_relative) {
  player_x = the_player.x;
  //column_x = a_column.x;
  // console.log(">>>>>", player_x, column_x);
  if (column_relative == COLUMN_TO_LEFT) {
    //console.log("LE");
    difference_x = player_x - extended_x;
    x_center_offset = HALF_VIEW_WIDTH - difference_x;
  } else if (column_relative == COLUMN_TO_RIGHT) {

    difference_x = extended_x - player_x;
    x_center_offset = HALF_VIEW_WIDTH + difference_x;
    //    console.log("ri");
  } else {
    difference_x = player_x - extended_x;
    x_center_offset = HALF_VIEW_WIDTH - difference_x;
  }
  return [difference_x, x_center_offset];
}
