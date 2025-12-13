function distancedPoint(distance_in_256, field_front_point) {
    let shrink_size;
    if (distance_in_256 < START_DEPTH_ADJUSTING) {
        shrink_size = SPRITE_SIZES_1024[distance_in_256];
    } else {
        shrink_size = 0;
    }

    const [x_1, y_1] = BACK_VANISH_POINT;
    const [x_2, y_2] = field_front_point;
    const x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
    const y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;
    const x_4 = Math.floor(x_3);
    const y_4 = Math.floor(y_3);
    const front_distanced_point = [x_4, y_4];
    return front_distanced_point;
}

function deriveIndexZ(difference_x, difference_y) {
    const y_index = Z_INDEX_DERIVE_START - difference_y;
    const x_index = Z_INDEX_DERIVE_START - difference_x;
    const z_index = y_index * Z_INDEX_DERIVE_START + x_index; // so that stuff same y distance favors middle stuff
    return z_index;
}
