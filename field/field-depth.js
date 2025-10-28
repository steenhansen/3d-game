

function fieldBackwards(travel_speed) {
  for (i = 0; i < travel_speed; i++) {
    // incrementForward();
    incrementForward();
  }
  //incrementForward();
  //incrementForward();
}

function fieldForwards(travel_speed) {
  for (i = 0; i < travel_speed; i++) {
    //  incrementBack();
    incrementBack();
  }


  //incrementBack();
  //incrementBack();
}


function incrementBack() {
  y_flip_count += 1;
  if (y_flip_count > CLOSEST_DEPTH_INDEX) {
    y_flip_count = 0;
  }
}

function incrementForward() {
  if (y_flip_count == 0) {
    y_flip_count = CLOSEST_DEPTH_INDEX;
  } else {
    y_flip_count -= 1;
  }
}







