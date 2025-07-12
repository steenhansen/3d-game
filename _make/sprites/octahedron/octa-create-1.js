
// cd \Users\16043\Documents\GitHub\squares\make\sprites\octahedron 
// node octa-12-create.js


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  canvas = document.getElementById('can');
//  global_ctx = canvas.getContext("2d");
//  filledTriangle([[355, 393], [439, 485], [387, 515]], `rgb(0,0,255,0.5)`);

var global_ctx;

sprite_name = 'octa.png';

function filledTriangle(three_points, the_color, id_number) {

  outline_triangle = true;
  black_color = `rgb(0,0,0)`;
  //   canvas = document.getElementById('can');
  // global_ctx = canvas.getContext("2d");

  function drawLine(from_to, the_color) {
    let [[a_x, a_y], [b_x, b_y]] = from_to;
    global_ctx.beginPath();
    global_ctx.moveTo(a_x, a_y);
    global_ctx.lineTo(b_x, b_y);
    global_ctx.strokeStyle = the_color;
    global_ctx.lineWidth = 2;
    global_ctx.stroke();
    global_ctx.closePath();
  }

  function sortVerticesAscendingByY(three_points) {
    let [[x_a, y_a], [x_b, y_b], [x_c, y_c]] = three_points;
    if (y_a < y_b && y_a < y_c) {
      if (y_b < y_c) {
        return [[x_a, y_a], [x_b, y_b], [x_c, y_c]];
      } else {
        return [[x_a, y_a], [x_c, y_c], [x_b, y_b]];
      }
    } else if (y_b < y_c) {
      if (y_a < y_c) {
        return [[x_b, y_b], [x_a, y_a], [x_c, y_c]];
      } else {
        return [[x_b, y_b], [x_c, y_c], [x_a, y_a]];
      }
    } else {
      if (y_a < y_b) {
        return [[x_c, y_c], [x_a, y_a], [x_b, y_b]];
      } else {
        return [[x_c, y_c], [x_b, y_b], [x_a, y_a]];
      }
    }
    console.log("ERROR sortVerticesAscendingByY ");
  }

  function drawTriangle(three_points) {
    let [[a_x, a_y], [b_x, b_y], [c_x, c_y]] = three_points;

    global_ctx.beginPath();
    global_ctx.moveTo(a_x, a_y);
    global_ctx.lineTo(b_x, b_y);
    global_ctx.strokeStyle = black_color;
    global_ctx.lineWidth = 1;
    global_ctx.stroke();
    global_ctx.closePath();

    global_ctx.beginPath();
    global_ctx.moveTo(b_x, b_y);
    global_ctx.lineTo(c_x, c_y);
    global_ctx.strokeStyle = black_color;
    global_ctx.lineWidth = 1;
    global_ctx.stroke();
    global_ctx.closePath();

    global_ctx.beginPath();
    global_ctx.moveTo(c_x, c_y);
    global_ctx.lineTo(a_x, a_y);
    global_ctx.strokeStyle = black_color;
    global_ctx.lineWidth = 1;
    global_ctx.stroke();
    global_ctx.closePath();
  }

  function fillBottomFlatTriangle(three_points, the_color) {
    let [[x_a, y_a], [x_b, y_b], [x_c, y_c]] = three_points;
    invslope1 = (x_b - x_a) / (y_b - y_a);
    invslope2 = (x_c - x_a) / (y_c - y_a);

    curx1 = x_a;
    curx2 = x_a;
    // console.log("y_a, y_b", y_a, y_b);
    for (scanlineY = y_a; scanlineY <= y_b; scanlineY++) {

      drawLine([[curx1, scanlineY], [curx2, scanlineY]], the_color, 1);
      curx1 += invslope1;
      curx2 += invslope2;
    }
  }

  function fillTopFlatTriangle(three_points, the_color) {
    let [[x_a, y_a], [x_b, y_b], [x_c, y_c]] = three_points;
    invslope1 = (x_c - x_a) / (y_c - y_a);
    invslope2 = (x_c - x_b) / (y_c - y_b);

    curx1 = x_c;
    curx2 = x_c;

    for (scanlineY = y_c; scanlineY > y_a; scanlineY--) {

      drawLine([[curx1, scanlineY], [curx2, scanlineY]], the_color, 1);
      //  drawLine([[curx1, scanlineY], [curx2, scanlineY]], `rgb( 64,64,255)`, 1);
      curx1 -= invslope1;
      curx2 -= invslope2;
    }
  }

  ver_sort_points = sortVerticesAscendingByY(three_points);
  //   console.log("three_points", three_points);
  //  console.log("ver_sort_points", ver_sort_points);
  let [[x_a, y_a], [x_b, y_b], [x_c, y_c]] = ver_sort_points;
  if (y_b == y_c) {
    fillBottomFlatTriangle(ver_sort_points, the_color);
  } else if (y_a == y_b) {
    fillTopFlatTriangle(ver_sort_points, the_color);
  } else {
    //  console.log("DFDSF");
    split_vertically = [x_a + (y_b - y_a) / (y_c - y_a) * (x_c - x_a), y_b];
    fillBottomFlatTriangle([[x_a, y_a], [x_b, y_b], split_vertically], the_color);
    fillTopFlatTriangle([[x_b, y_b], split_vertically, [x_c, y_c]], the_color);
  }

  if (outline_triangle) {
    drawTriangle(three_points);
  }

}  // end filledTriangle()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

object_width = 256;
object_height = 256;
numDrawings = 90;


SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = true;

function drawBorder(degree_90) {
  if (SHOW_FRAME) {
    global_ctx.strokeStyle = `rgb(0,255,165)`;
    global_ctx.lineWidth = 1;
    global_ctx.beginPath();
    global_ctx.moveTo(degree_90 * 256, 0);
    global_ctx.lineTo(degree_90 * 256 + 255, 0);
    global_ctx.lineTo(degree_90 * 256 + 255, 255);
    global_ctx.lineTo(degree_90 * 256, 255);
    global_ctx.lineTo(degree_90 * 256, 0, 0);
    global_ctx.stroke();
    global_ctx.closePath();
  }
}

function drawSlidNum(degree_90) {
  if (SHOW_SLIDE_NUMBER) {
    global_ctx.font = "48px serif";
    global_ctx.strokeStyle = black_color;
    global_ctx.strokeText(degree_90, degree_90 * 256 + 2, 28);
  }
}

var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numDrawings, object_height);
global_ctx = canvas.getContext('2d');





function drawLine2(global_ctx, from_to, the_color, line_width) {
  [[a_x, a_y], [b_x, b_y]] = from_to;
  global_ctx.beginPath();
  global_ctx.moveTo(a_x, a_y);
  global_ctx.lineTo(b_x, b_y);
  global_ctx.strokeStyle = the_color;
  global_ctx.lineWidth = line_width;
  global_ctx.stroke();
  global_ctx.closePath();
}



////////////////////////////////////////////////////////



orange_color = `rgb(255,165,0)`;
purple_color = `rgb(157,0,255)`;
green_color = `rgb(0,255,0)`;
red_color = `rgb(255,0,0)`;

black_color = `rgb(0,0,0)`;
blue_color = `rgb(0,0,255)`;

function getTetrahedron(degrees_0_90) {
  radius = 64;
  center_x = 100;
  top_center_y = 100;
  height_diff = 100;

  flatten = 1 / 4;

  degree_360 = degrees_0_90 * 4;
  a_deg = degree_360;
  b_deg = degree_360 + 90;
  c_deg = degree_360 + 180;
  d_deg = degree_360 + 270;

  center_x = center_x + object_width * degrees_0_90;
  bot_center_y = top_center_y + height_diff;

  top_x_1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * a_deg / 360));
  top_y_1 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * a_deg / 360) * flatten);

  top_x_2 = Math.round(center_x + radius * Math.cos(2 * Math.PI * c_deg / 360));
  top_y_2 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * c_deg / 360) * flatten);

  bot_x_1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * b_deg / 360));
  bot_y_1 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * b_deg / 360) * flatten);

  bot_x_2 = Math.round(center_x + radius * Math.cos(2 * Math.PI * d_deg / 360));
  bot_y_2 = Math.round(top_center_y + radius * Math.sin(2 * Math.PI * d_deg / 360) * flatten);

  roof_a = [top_x_1, top_y_1];
  roof_b = [top_x_2, top_y_2];

  floor_a = [bot_x_1, bot_y_1 + height_diff];
  floor_b = [bot_x_2, bot_y_2 + height_diff];


  // drawLine2(global_ctx, [roof_a, roof_b], black_color, 1);  //black_color
  // drawLine2(global_ctx, [roof_b, floor_b], black_color, 1);  //orange_color
  // drawLine2(global_ctx, [roof_a, floor_b], black_color, 1);    //red_color
  if (degrees_0_90 > 25 || degrees_0_90 < 65) {
    filledTriangle([roof_a, roof_b, floor_b], `rgb(0, 255,0, 1)`, "");        //  TOP goood
  }

  // drawLine2(global_ctx, [roof_a, roof_b], black_color, 1);
  // drawLine2(global_ctx, [roof_b, floor_a], black_color, 1);       //purple_color
  // drawLine2(global_ctx, [roof_a, floor_a], black_color, 1);          //blue_color
  if (degrees_0_90 > 25 && degrees_0_90 < 69) {
    filledTriangle([roof_a, roof_b, floor_a], `rgb( 255,0,0)`, "");  // TOP A   BAADDDDDDDDDD
  }

  // drawLine2(global_ctx, [floor_b, floor_a], red_color, 1);
  // drawLine2(global_ctx, [roof_a, floor_b], purple_color, 3);
  // drawLine2(global_ctx, [roof_a, floor_a], green_color, 1);
  if (degrees_0_90 > 43 || degrees_0_90 < 2) {
    filledTriangle([floor_a, floor_b, roof_a], `rgb( 0,0,255)`, "");  // bottom b gooog
  }


  // drawLine2(global_ctx, [floor_a, floor_b], black_color, 1);
  // drawLine2(global_ctx, [floor_b, roof_b], purple_color, 2);
  // drawLine2(global_ctx, [floor_a, roof_b], green_color, 3);
  //  if (degrees_0_90 > -1 && degrees_0_90 < 47) {
  if (degrees_0_90 > -1 && degrees_0_90 < 47 || degrees_0_90 > 87) {
    filledTriangle([floor_a, floor_b, roof_b], `rgb( 128,128,128)`, "");  // BOTTOM A ggod
  }


}


///////////////////////////////

for (var the_degrees = 0; the_degrees < numDrawings; the_degrees++) {
  getTetrahedron(the_degrees);
  drawBorder(the_degrees);
  drawSlidNum(the_degrees);
}

const out = fs.createWriteStream(sprite_name);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(sprite_name, 'was created.'));




