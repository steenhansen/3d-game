document.getElementById('pylons-area').innerHTML = `



  <div id="pylon-00"></div>
  <div id="pylon-01"></div>
  <div id="pylon-02"></div>
  <div id="pylon-03"></div>
  <div id="pylon-04"></div>
  <div id="pylon-05"></div>
  <div id="pylon-06"></div>
  <div id="pylon-07"></div>
  <div id="pylon-08"></div>
  <div id="pylon-09"></div>
  <div id="pylon-0A"></div>
  <div id="pylon-0B"></div>
  <div id="pylon-0C"></div>
  <div id="pylon-0D"></div>
  <div id="pylon-0E"></div>
  <div id="pylon-0F"></div>
  <div id="pylon-0G"></div>
  <div id="pylon-0H"></div>
  <div id="pylon-0I"></div>
  <div id="pylon-0J"></div>
  <div id="pylon-0K"></div>
  <div id="pylon-0L"></div>
  <div id="pylon-0M"></div>
  <div id="pylon-0N"></div>
  <div id="pylon-0O"></div>
  <div id="pylon-0P"></div>
  <div id="pylon-0Q"></div>
  <div id="pylon-0R"></div>
  <div id="pylon-0S"></div>
  <div id="pylon-0T"></div>
  <div id="pylon-0U"></div>
  <div id="pylon-0V"></div>
  <div id="pylon-0W"></div>
  <div id="pylon-0X"></div>
  <div id="pylon-0Z"></div>

  <div id="pylon-10"></div>
  <div id="pylon-11"></div>
  <div id="pylon-12"></div>
  <div id="pylon-13"></div>
  <div id="pylon-14"></div>
  <div id="pylon-15"></div>
  <div id="pylon-16"></div>
  <div id="pylon-17"></div>
  <div id="pylon-18"></div>
  <div id="pylon-19"></div>



 `;

function drawPylons(the_player, the_pylons) {
  changed_pylons = [];

  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    pylonSet(the_player, a_pylon);
    if (a_pylon.t_pylon_hit_flash > 0) {
      a_pylon.t_pylon_hit_flash--;
    } else {
      delete a_pylon.t_pylon_hit_flash;
    }
    changed_pylons[pylon_index] = a_pylon;

  }
  return changed_pylons;
}

function pylonFront(pylon_vlines, front_panel_id, outline_color, do_flash, difference_yy, poly_fill, pylon_alive) {
  let [left_vline, middle_vline, _right_vline] = pylon_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  if (isNaN(left_front_top)) {
  }
  let front_pylon = pylonPolygon(left_right_tops_bots, front_panel_id, outline_color, do_flash, difference_yy, poly_fill, pylon_alive);

  return front_pylon;
}

function pylonPolygon(a_polygon, panel_id, outline_color, do_flash, difference_yy, poly_fill, pylon_alive) {
  if (pylon_alive) {
    fill_color = poly_fill;
  } else {
    fill_color = 'black';
  }
  svg_panel = pylonSide(a_polygon, fill_color, panel_id, pylon_alive);
  if (do_flash) {
    svg_outlines = outlineFlash(a_polygon, panel_id, difference_yy);
  } else if (!pylon_alive) {
    svg_outlines = pylonOutline(a_polygon, panel_id, difference_yy, "grey");

  } else if (outline_color) {
    svg_outlines = pylonOutline(a_polygon, panel_id, difference_yy, outline_color);
  }
  svg_polygon = svg_outlines + svg_panel;
  return svg_polygon;
}

function pylonOutline(a_polygon, panel_id, difference_yy, outline_color) {
  outline_width = outlineWidth(difference_yy);



  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  svg_outlines = `<polygon fill="none"  id="${panel_id}" stroke="${outline_color}"
      stroke-width="${outline_width}px"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_outlines;
}

function outlineFlash(a_polygon, panel_id, difference_yy) {
  outline_width = outlineWidth(difference_yy) - 4;

  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  svg_outlines = `<polygon   id="${panel_id}" stroke="white" fill="none"
         stroke-width="${outline_width}px" 
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_outlines;
}

function pylonSide(a_polygon, poly_fill, panel_id, pylon_alive) {
  if (pylon_alive) {
    fill_color = poly_fill;
  } else {
    fill_color = 'black';
  }
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  svg_panel = `<polygon fill="${fill_color}" id="${panel_id}"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_panel;
}

function outlineWidth(difference_yy) {
  if (difference_yy < 8) {
    outline_width = 6;
  } else if (difference_yy < 16) {
    outline_width = 5.5;
  } else if (difference_yy < 24) {
    outline_width = 5;
  } else if (difference_yy < 32) {
    outline_width = 4.5;
  } else if (difference_yy < 40) {
    outline_width = 4;
  } else if (difference_yy < 100) {
    outline_width = 3.5;
  } else if (difference_yy < 200) {
    outline_width = 3;
  } else if (difference_yy < 300) {
    outline_width = 2.5;
  } else if (difference_yy < 400) {
    outline_width = 2;
  } else if (difference_yy < 500) {
    outline_width = 1.5;
  } else if (difference_yy < 600) {
    outline_width = 1;
  } else if (difference_yy < 700) {
    outline_width = 0.5;
  } else {
    outline_width = 0;
  }
  outline_adjusted = outline_width * PYLON_OUTLINE_ADJUST;
  return outline_adjusted;
}