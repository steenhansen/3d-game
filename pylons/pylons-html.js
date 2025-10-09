


document.getElementById('pylon-html').innerHTML = `
<div id="pylon-A-0"></div>
<div id="pylon-A-1"></div>
<div id="pylon-A-2"></div>
<div id="pylon-A-3"></div>
<div id="pylon-A-4"></div>
<div id="pylon-A-5"></div>
<div id="pylon-A-6"></div>
<div id="pylon-A-7"></div>
<div id="pylon-A-8"></div>
<div id="pylon-A-9"></div>
<div id="pylon-A-10"></div>
<div id="pylon-A-11"></div>
<div id="pylon-A-12"></div>
<div id="pylon-A-13"></div>
<div id="pylon-A-14"></div>
<div id="pylon-A-15"></div>

<div id="pylon-B-0"></div>
<div id="pylon-B-1"></div>
<div id="pylon-B-2"></div>
<div id="pylon-B-3"></div>
<div id="pylon-B-4"></div>
<div id="pylon-B-5"></div>
<div id="pylon-B-6"></div>
<div id="pylon-B-7"></div>
<div id="pylon-B-8"></div>
<div id="pylon-B-9"></div>
<div id="pylon-B-10"></div>
<div id="pylon-B-11"></div>
<div id="pylon-B-12"></div>
<div id="pylon-B-13"></div>
<div id="pylon-B-14"></div>
<div id="pylon-B-15"></div>

<div id="pylon-C-0"></div>
<div id="pylon-C-1"></div>
<div id="pylon-C-2"></div>
<div id="pylon-C-3"></div>
<div id="pylon-C-4"></div>
<div id="pylon-C-5"></div>
<div id="pylon-C-6"></div>
<div id="pylon-C-7"></div>
<div id="pylon-C-8"></div>
<div id="pylon-C-9"></div>
<div id="pylon-C-10"></div>
<div id="pylon-C-11"></div>
<div id="pylon-C-12"></div>
<div id="pylon-C-13"></div>
<div id="pylon-C-14"></div>
<div id="pylon-C-15"></div>



<div id="pylon-D-0"></div>
<div id="pylon-D-1"></div>
<div id="pylon-D-2"></div>
<div id="pylon-D-3"></div>
<div id="pylon-D-4"></div>
<div id="pylon-D-5"></div>
<div id="pylon-D-6"></div>
<div id="pylon-D-7"></div>
<div id="pylon-D-8"></div>
<div id="pylon-D-9"></div>
<div id="pylon-D-10"></div>
<div id="pylon-D-11"></div>
<div id="pylon-D-12"></div>
<div id="pylon-D-13"></div>
<div id="pylon-D-14"></div>
<div id="pylon-D-15"></div>


<div id="pylon-E-0"></div>
<div id="pylon-E-1"></div>
<div id="pylon-E-2"></div>
<div id="pylon-E-3"></div>
<div id="pylon-E-4"></div>
<div id="pylon-E-5"></div>
<div id="pylon-E-6"></div>
<div id="pylon-E-7"></div>
<div id="pylon-E-8"></div>
<div id="pylon-E-9"></div>
<div id="pylon-E-10"></div>
<div id="pylon-E-11"></div>
<div id="pylon-E-12"></div>
<div id="pylon-E-13"></div>
<div id="pylon-E-14"></div>
<div id="pylon-E-15"></div>



<div id="pylon-F-0"></div>
<div id="pylon-F-1"></div>
<div id="pylon-F-2"></div>
<div id="pylon-F-3"></div>
<div id="pylon-F-4"></div>
<div id="pylon-F-5"></div>
<div id="pylon-F-6"></div>
<div id="pylon-F-7"></div>
<div id="pylon-F-8"></div>
<div id="pylon-F-9"></div>
<div id="pylon-F-10"></div>
<div id="pylon-F-11"></div>
<div id="pylon-F-12"></div>
<div id="pylon-F-13"></div>
<div id="pylon-F-14"></div>
<div id="pylon-F-15"></div>



 `;



// document.getElementById('pylon-html').innerHTML = `
// <div id="pylon-3a"></div>
// <div id="pylon-3b"></div>
// <div id="pylon-3c"></div>
// <div id="pylon-2a"></div>
// <div id="pylon-2b"></div>
// <div id="pylon-1a"></div>


// <div id="pylon-4-1"></div>
// <div id="pylon-4-2"></div>
// <div id="pylon-4-3"></div>
// <div id="pylon-4-4"></div>
// <div id="pylon-4-5"></div>
// <div id="pylon-4-6"></div>
// <div id="pylon-4-7"></div>
// <div id="pylon-4-8"></div>
// <div id="pylon-4-9"></div>

// `;



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


function pylonFront(pylon_vlines, gradient_front, front_panel_id, do_outlines, front_color, do_flash, do_twirl, difference_yy) {
  let [left_vline, middle_vline, _right_vline] = pylon_vlines;
  let [left_front_top, left_front_bot] = left_vline;
  let [right_front_top, right_front_bot] = middle_vline;
  left_right_tops_bots = [left_front_top, right_front_top, left_front_bot, right_front_bot];
  // qbert 1
  let front_pylon = pylonPolygon(left_right_tops_bots, gradient_front, front_panel_id, do_outlines, front_color, do_flash, do_twirl, difference_yy);
  return front_pylon;
}



function pylonPolygon(a_polygon, twirl_gradient, panel_id, do_outlines, solid_color, do_flash, do_twirl, difference_yy) {
  // console.log("pylonPolygon difference_yy", difference_yy);
  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;
  let [top_left_x, top_left_y] = left_front_top;
  let [top_right_x, top_right_y] = right_front_top;
  let [bot_left_x, bot_left_y] = left_front_bot;
  let [bot_right_x, bot_right_y] = right_front_bot;
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
      //    stroke-width="10px" opacity="0.5"       stroke-opactiy="1"
      svg_polygon += `<polygon fill="red"  id="${panel_id}" stroke="white"
     opacity="0.4"    stroke-width="15px" 
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;

    } else if (do_outlines) {         // outline_color should always be black??? white??

      outline_width = outlineWidth(difference_yy);
      // if (difference_yy < 8) {
      //   outline_width = 6;
      // } else if (difference_yy < 16) {
      //   outline_width = 5.5;
      // } else if (difference_yy < 24) {
      //   outline_width = 5;
      // } else if (difference_yy < 32) {
      //   outline_width = 4.5;
      // } else if (difference_yy < 40) {
      //   outline_width = 4;
      // } else if (difference_yy < 100) {
      //   outline_width = 3.5;
      // } else if (difference_yy < 200) {
      //   outline_width = 3;
      // } else if (difference_yy < 300) {
      //   outline_width = 2.5;
      // } else if (difference_yy < 400) {
      //   outline_width = 2;
      // } else if (difference_yy < 500) {
      //   outline_width = 1.5;
      // } else if (difference_yy < 600) {
      //   outline_width = 1;
      // } else if (difference_yy < 700) {
      //   outline_width = 0.5;
      // } else {
      //   outline_width = 0;
      // }
      svg_polygon += `<polygon fill="none"  id="${panel_id}" stroke="black"
      stroke-width="${outline_width}px"
                      points="${top_left_x},${top_left_y}
                              ${top_right_x},${top_right_y}
                              ${bot_right_x},${bot_right_y}
                              ${bot_left_x},${bot_left_y}      " />`;

    }


  }




  // console.log(svg_polygon);

  return svg_polygon;
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
  return outline_width;
}