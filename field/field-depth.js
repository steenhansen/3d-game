

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
  if (y_flip_count > closest_depth_index) {
    y_flip_count = 0;
  }
}

function incrementForward() {
  if (y_flip_count == 0) {
    y_flip_count = closest_depth_index;
  } else {
    y_flip_count -= 1;
  }
}







