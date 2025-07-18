function startLand(num_lines, land_speed) {
  let first_time;

  requestAnimationFrame(firstLand);

  function firstLand(timestamp) {
    first_time = timestamp;
    restLand(timestamp);
  }

  function restLand(timestamp) {
    const frame_count = (timestamp - first_time) / land_speed; // duration 10 fast, 100 slow
    let the_count = Math.floor(frame_count);

    let normal_line = `background-position: -${the_count + 2}px -${the_count}px`;
    let flip_line = `background-position: 0px                 -${the_count}px`;

    let flip_count = 0;
    let is_flip = false;


    for (let cur_line = 0; cur_line < num_lines; cur_line++) {
      const reverse_vertical = num_lines - cur_line - 1;
      const ne_element = document.getElementById(`ne${reverse_vertical}`);
      const se_element = document.getElementById(`se${cur_line}`);
      const sw_element = document.getElementById(`sw${cur_line}`);
      const nw_element = document.getElementById(`nw${reverse_vertical}`);



      if (is_flip) {
        ne_element.style = flip_line;
        se_element.style = normal_line;
        sw_element.style = flip_line;
        nw_element.style = normal_line;
      } else {
        ne_element.style = normal_line;
        se_element.style = flip_line;
        sw_element.style = normal_line;
        nw_element.style = flip_line;
      }
      flip_count++;
      if (flip_count == the_count) {
        flip_count = 0;
        is_flip = !is_flip;
      }

    }

    if (frame_count < num_lines) {
      requestAnimationFrame(restLand);
    }
  }
}

startLand(255, 25);

