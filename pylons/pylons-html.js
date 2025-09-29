

document.getElementById('pylon-html').innerHTML = `
<div id="pylon-3a"></div>
<div id="pylon-3b"></div>
<div id="pylon-3c"></div>
<div id="pylon-2a"></div>
<div id="pylon-2b"></div>
<div id="pylon-1a"></div>


<div id="pylon-4-1"></div>
<div id="pylon-4-2"></div>
<div id="pylon-4-3"></div>
<div id="pylon-4-4"></div>
<div id="pylon-4-5"></div>
<div id="pylon-4-6"></div>
<div id="pylon-4-7"></div>
<div id="pylon-4-8"></div>
<div id="pylon-4-9"></div>

`;



function drawPylons(the_pylons) {
  //console.log("gplk 2", the_pylons);
  // if (typeof TEST_NAME == "string" && TEST_NAME == "test_enemy") {
  //   return;
  // }
  // // pylonSet(pylon_3a, 'pylon-3a');
  // // pylonSet(pylon_3b, 'pylon-3b');
  // // pylonSet(pylon_3c, 'pylon-3c');

  // pylonSet(pylon_2a);
  // pylonSet(pylon_2b);

  // pylonSet(pylon_1a);

  // pylonSet(pylon_4_1, 'pylon-4-1');
  // pylonSet(pylon_4_2, 'pylon-4-2');
  // pylonSet(pylon_4_3, 'pylon-4-3');
  // pylonSet(pylon_4_4, 'pylon-4-4');
  // pylonSet(pylon_4_5, 'pylon-4-5');
  // pylonSet(pylon_4_6, 'pylon-4-6');
  // pylonSet(pylon_4_7, 'pylon-4-7');
  // pylonSet(pylon_4_8, 'pylon-4-8');
  // pylonSet(pylon_4_9, 'pylon-4-9');
  /////////////////////////////////////////
  //  return;

  //changed_pylons = [];

  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    pylonSet(a_pylon);
    // changed_pylons[pylon_index] = changed_pylon;
  }
  // return changed_pylons;
}


function pylonFront(pylon_vlines, gradient_front, front_panel_id, do_outlines, front_color, do_flash) {
  let [left_vline, middle_vline, _right_vline] = pylon_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];

  let front_pylon = pylonPolygon(left_right_tops_bots, gradient_front, front_panel_id, do_outlines, front_color, do_flash);
  return front_pylon;
}



function pylonPolygon(a_polygon, twirl_gradient, panel_id, do_outlines, solid_color, do_flash) {
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  if (isMobile()) {
    svg_polygon = `<polygon fill="${solid_color}"  id="${panel_id}"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;
  } else {
    svg_polygon = `<polygon fill="url(#${twirl_gradient})"  id="${panel_id}"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;

    if (do_flash) {
      svg_polygon += `<polygon fill="none"  id="${panel_id}" stroke="red"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;

    } else if (do_outlines) {         // outline_color should always be black??? white??
      // console.log("do out", do_outlines);
      svg_polygon += `<polygon fill="none"  id="${panel_id}" stroke="black"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;

    }


  }




  // console.log(svg_polygon);

  return svg_polygon;
}

