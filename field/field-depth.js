function fieldBackwards (travel_speed) {
  for (let i = 0; i < travel_speed; i++) {
    incrementForward()
  }
}

function fieldForwards (travel_speed) {
  for (let i = 0; i < travel_speed; i++) {
    incrementBack()
  }
}

function incrementBack () {
  g_y_flip_count += 1
  if (g_y_flip_count > CLOSEST_DEPTH_INDEX) {
    g_y_flip_count = 0
  }
}

function incrementForward () {
  if (g_y_flip_count == 0) {
    g_y_flip_count = CLOSEST_DEPTH_INDEX
  } else {
    g_y_flip_count -= 1
  }
}
