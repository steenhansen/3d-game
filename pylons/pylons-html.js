


// document.getElementById('pylon-html').innerHTML = `
// <div id="pylon-A-0"></div>
// <div id="pylon-A-1"></div>
// <div id="pylon-A-2"></div>
// <div id="pylon-A-3"></div>
// <div id="pylon-A-4"></div>
// <div id="pylon-A-5"></div>
// <div id="pylon-A-6"></div>
// <div id="pylon-A-7"></div>
// <div id="pylon-A-8"></div>
// <div id="pylon-A-9"></div>

// <div id="pylon-A-10"></div>
// <div id="pylon-A-11"></div>
// <div id="pylon-A-12"></div>
// <div id="pylon-A-13"></div>
// <div id="pylon-A-14"></div>
// <div id="pylon-A-15"></div>
// <div id="pylon-A-16"></div>



// `;



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
  changed_pylons = [];
  number_pylons = the_pylons.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_pylons[pylon_index];
    pylonSet(a_pylon);
    if (a_pylon.m_hit_flash > 0) {
      a_pylon.m_hit_flash--;
      a_pylon.do_flash = true;
    } else {
      a_pylon.do_flash = false;
    }
    changed_pylons[pylon_index] = a_pylon;

  }
  return changed_pylons;
}


function pylonFront(pylon_vlines, gradient_front, front_panel_id, do_outlines, front_color, do_flash, do_twirl) {
  let [left_vline, middle_vline, _right_vline] = pylon_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];

  let front_pylon = pylonPolygon(left_right_tops_bots, gradient_front, front_panel_id, do_outlines, front_color, do_flash, do_twirl);
  return front_pylon;
}



function pylonPolygon(a_polygon, twirl_gradient, panel_id, do_outlines, solid_color, do_flash, do_twirl) {
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
  //dconsole.log("pylonPolygon", solid_color, twirl_gradient);
  if (isMobile() || !do_twirl) {
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

