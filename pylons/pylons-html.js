document.getElementById("pylons-area").innerHTML = `
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

  <div id="pylon-20"></div>
  <div id="pylon-21"></div>
  <div id="pylon-22"></div>
  <div id="pylon-23"></div>
  <div id="pylon-24"></div>
  <div id="pylon-25"></div>
  <div id="pylon-26"></div>
  <div id="pylon-27"></div>
  <div id="pylon-28"></div>
  <div id="pylon-29"></div>

  <div id="pylon-30"></div>
  <div id="pylon-31"></div>
  <div id="pylon-32"></div>
  <div id="pylon-33"></div>
  <div id="pylon-34"></div>
  <div id="pylon-35"></div>
  <div id="pylon-36"></div>
  <div id="pylon-37"></div>
  <div id="pylon-38"></div>
  <div id="pylon-39"></div>

  <div id="pylon-40"></div>
  <div id="pylon-41"></div>
  <div id="pylon-42"></div>
  <div id="pylon-43"></div>
  <div id="pylon-44"></div>
  <div id="pylon-45"></div>
  <div id="pylon-46"></div>
  <div id="pylon-47"></div>
  <div id="pylon-48"></div>
  <div id="pylon-49"></div>

  <div id="pylon-50"></div>
  <div id="pylon-51"></div>
  <div id="pylon-52"></div>
  <div id="pylon-53"></div>
  <div id="pylon-54"></div>
  <div id="pylon-55"></div>
  <div id="pylon-56"></div>
  <div id="pylon-57"></div>
  <div id="pylon-58"></div>
  <div id="pylon-59"></div>

  <div id="pylon-60"></div>
  <div id="pylon-61"></div>
  <div id="pylon-62"></div>
  <div id="pylon-63"></div>
  <div id="pylon-64"></div>
  <div id="pylon-65"></div>
  <div id="pylon-66"></div>
  <div id="pylon-67"></div>
  <div id="pylon-68"></div>
  <div id="pylon-69"></div>

  <div id="pylon-70"></div>
  <div id="pylon-71"></div>
  <div id="pylon-72"></div>
  <div id="pylon-73"></div>
  <div id="pylon-74"></div>
  <div id="pylon-75"></div>
  <div id="pylon-76"></div>
  <div id="pylon-77"></div>
  <div id="pylon-78"></div>
  <div id="pylon-79"></div>

  <div id="pylon-80"></div>
  <div id="pylon-81"></div>
  <div id="pylon-82"></div>
  <div id="pylon-83"></div>
  <div id="pylon-84"></div>
  <div id="pylon-85"></div>
  <div id="pylon-86"></div>
  <div id="pylon-87"></div>
  <div id="pylon-88"></div>
  <div id="pylon-89"></div>

  <div id="pylon-90"></div>
  <div id="pylon-91"></div>
  <div id="pylon-92"></div>
  <div id="pylon-93"></div>
  <div id="pylon-94"></div>
  <div id="pylon-95"></div>
  <div id="pylon-96"></div>
  <div id="pylon-97"></div>
  <div id="pylon-98"></div>
  <div id="pylon-99"></div>


 `;

function unHidePylons(the_pylons) {
  let changed_pylons = [];
  const number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    let a_pylon = the_pylons[pylon_index];
    a_pylon.m_hidden = false;
    changed_pylons[pylon_index] = a_pylon;
  }
  return changed_pylons;
}

function drawPylons(the_player, the_pylons) {
  let changed_pylons = [];
  const number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    let a_pylon = the_pylons[pylon_index];
    pylonSet(the_player, a_pylon);
    if (a_pylon.m_pylon_hit_flash > 0) {
      a_pylon.m_pylon_hit_flash--;
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return changed_pylons;
}

function pylonFront(
  pylon_vlines,
  front_panel_id,
  do_flash,
  dist_abs_y,
  poly_fill,
  pylon_alive,
) {
  const [left_vline, middle_vline, _right_vline] = pylon_vlines;
  const [left_front_top, left_front_bot] = left_vline;
  const [right_front_top, right_front_bot] = middle_vline;
  const left_right_tops_bots = [
    left_front_top,
    right_front_top,
    left_front_bot,
    right_front_bot,
  ];
  let front_pylon = pylonPolygon(
    left_right_tops_bots,
    front_panel_id,
    do_flash,
    dist_abs_y,
    poly_fill,
    pylon_alive,
  );
  return front_pylon;
}

function pylonPolygon(
  a_polygon,
  panel_id,
  do_flash,
  dist_abs_y,
  poly_fill,
  pylon_alive,
) {
  let fill_color;
  if (pylon_alive) {
    fill_color = poly_fill;
  } else {
    fill_color = "black";
  }
  const svg_panel = pylonSide(a_polygon, fill_color, panel_id, pylon_alive);
  let svg_outlines;
  if (do_flash && g_p_graphics_style !== P_SIMPLE) {
    svg_outlines = outlineFlash(a_polygon, panel_id, dist_abs_y);
  } else {
    svg_outlines = "";
  }
  const svg_polygon = svg_outlines + svg_panel;
  return svg_polygon;
}

function outlineFlash(a_polygon, panel_id, dist_abs_y) {
  const outline_width = outlineWidth(dist_abs_y) - 4;
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] =
    a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  const svg_outlines = `<polygon   id="${panel_id}" stroke="white" fill="none"
         stroke-width="${outline_width}px" 
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_outlines;
}

function pylonSide(a_polygon, poly_fill, panel_id, pylon_alive) {
  let fill_color;
  if (pylon_alive) {
    fill_color = poly_fill;
  } else {
    fill_color = "black";
  }
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] =
    a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  const svg_panel = `<polygon fill="${fill_color}" id="${panel_id}"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  return svg_panel;
}

function outlineWidth(dist_abs_y) {
  let outline_width;
  if (dist_abs_y < 8) {
    outline_width = 6;
  } else if (dist_abs_y < 16) {
    outline_width = 5.5;
  } else if (dist_abs_y < 24) {
    outline_width = 5;
  } else if (dist_abs_y < 32) {
    outline_width = 4.5;
  } else if (dist_abs_y < 40) {
    outline_width = 4;
  } else if (dist_abs_y < 100) {
    outline_width = 3.5;
  } else if (dist_abs_y < 200) {
    outline_width = 3;
  } else if (dist_abs_y < 300) {
    outline_width = 2.5;
  } else if (dist_abs_y < 400) {
    outline_width = 2;
  } else if (dist_abs_y < 500) {
    outline_width = 1.5;
  } else if (dist_abs_y < 600) {
    outline_width = 1;
  } else if (dist_abs_y < 700) {
    outline_width = 0.5;
  } else {
    outline_width = 0;
  }
  const outline_adjusted = outline_width * PYLON_OUTLINE_ADJUST;
  return outline_adjusted;
}
