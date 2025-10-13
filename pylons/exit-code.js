

function exitPylon(a_polygon, poly_fill) {

  //  let [left_front_top, right_front_top, left_front_bot, right_front_bot] = a_polygon;

  let [left_front_top, right_front_top, left_front_bot, _right_front_bot] = a_polygon;


  [top_left_x, top_left_y] = left_front_top;
  [top_right_x, _] = right_front_top;
  [_, bot_left_y] = left_front_bot;
  [_, _bot_right_y] = _right_front_bot;


  panel_height = bot_left_y - top_left_y;
  letter_height = panel_height / 4;

  outline_width = letter_height / 16;

  svg_polygon = `<text   stroke="black"  stroke-width="${outline_width}px"    
    textLength="${panel_height}"
   style="font-size:${letter_height}px;
          font-family:Arial;
          fill: ${poly_fill};
          fill-opacity:1;
          font-weight:900;

          text-anchor:middle;
          writing-mode:tb-rl;
          text-orientation:upright;  ";
  
   x="${(top_left_x + top_right_x) / 2}"
   y="${(top_left_y + bot_left_y) / 2}">EXIT</text>`;

  //console.log("svg_polygon", svg_polygon);





  return svg_polygon;
}