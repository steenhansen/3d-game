// cd documents/GitHub/squares/make/sprites/bollard/

// node bollard_2.js

file_name = 'bollard.png';

DO_DEBUG = false;
SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = false;

radius = 120;
center_x = 128;

var y_centers = new Array(45);
var y_flattens = new Array(45);
var up_downs = new Array(45);

var bot_curve_ys = new Array(45);

for (var i = 0; i < bot_curve_ys.length; i++) {
  bot_curve_ys[i] = new Array();
}

match_swirl_at_90 = 14.3;
object_width = 256;
object_height = 256;
numDrawings = 90;
swirl_width = 16;

white_color = `rgb(255,255,255,255)`;
black_color = `rgb(0,0,0,255)`;
grey_color = `rgb(127,127,127,255)`;
red_color = `rgb(255,0,0,255)`;
green_color = `rgb(0,255,0,255)`;

amber_color = `rgb(255, 191, 0,255)`;


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numDrawings, object_height);
const ctx = canvas.getContext('2d');

function randBlackGrey() {
  let rand = Math.floor(Math.random() * 2);
  if (rand == 0) {
    the_color = black_color;
  } else {
    the_color = grey_color;
  }
  return the_color;
}

function randDrawDir() {
  let rand2 = Math.floor(Math.random() * 2);
  if (rand2 == 0) {
    the_offset = -1;
  } else if (rand2 == 1) {
    the_offset = 1;
  }
  return the_offset;
}




function drawBullet_left(degree_90) {
  flatten = degree_90 / 100;
  up_down = 0 - 10 + degree_90 * 1.45;
  ctx.lineWidth = 1;
  center_y = (degree_90 + 10) * 3.15 - 20;
  y_centers[degree_90] = center_y;
  y_flattens[degree_90] = flatten;
  up_downs[degree_90] = up_down;
  for (i = 0; i < 180; i = i + 0.2) {
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    bot_half = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);
    diff = bot_half - center_y;
    top_half = center_y - diff;
    top_y = top_half + up_down;
    bot_y = bot_half + up_down;


    bot_curve_ys[degree_90][Math.round(i * 5)] = bot_y;
    ctx.strokeStyle = black_color;
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, top_y);
    ctx.stroke();
    ctx.closePath();

    bottom_center_y = 200;
    flatten_2 = 45 / 100;
    base_y = Math.round(bottom_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten_2);

    if (degree_90 == 44) {
      ctx.strokeStyle = red_color;
    } else {
      ctx.strokeStyle = grey_color;
    }
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, base_y);
    ctx.stroke();
    ctx.closePath();

    // ctx.strokeStyle = amber_color;
    // ctx.beginPath();
    // ctx.moveTo(x1, base_y - 150);
    // ctx.lineTo(x1, base_y - 50);
    // ctx.stroke();
    // ctx.closePath();


  }



  drawBorder(degree_90);
  drawSlidNum(degree_90);

}


/*
252 h at 0

0 h at 44

*/
vh = 252;
/*
first         15,29    86a 83b 83c   86top + 83middle = 169 top two
fourteenth    27,42    76a 88b 8c    76top + 88middle = 164 top two


twenty        34,44    81
twenty-one    35,44    81
twenty-two    36,44    81
twenty-three  37,44    81
twenty-four   38,44    81
twenty-five   39,43    81 
twenty-six    40,44    80a, 23b
twenty-seven  41,42    81a, 17b
twenty-eight  42,44    80a 11b
twenty-ninth  43,43    81a 2b  0c     81top            = 81 top one  LAST ONE!
*/
band_tops = [
  15, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 27, 0, 0, 0, 0, 0,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43
];
band_bottoms = [
  29, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 42, 0, 0, 0, 0, 0,
  44, 44, 44, 44, 44, 44, 44, 44, 44, 43
];

function drawBand_left(degree_90) {
  // console.log("degree_90", degree_90);
  ctx.lineWidth = 1;
  for (i = 0; i < 180; i = i + 0.2) {
    curve_i_index = Math.round(i * 5);
    //  console.log("curve_i_index", curve_i_index);
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    top_curve = band_tops[degree_90];
    //   console.log("top_curve", top_curve);
    //   console.log("bot_curve_ys", bot_curve_ys);
    band_top_y = bot_curve_ys[top_curve][curve_i_index];

    bot_curve = band_bottoms[degree_90];
    band_bot_y = bot_curve_ys[bot_curve][curve_i_index];


    ctx.strokeStyle = amber_color;
    ctx.beginPath();
    ctx.moveTo(x1, band_top_y);
    ctx.lineTo(x1, band_bot_y + 1);
    ctx.stroke();
    ctx.closePath();
  }
}








function drawBullet_right(degree_90) {
  ctx.lineWidth = 1;
  center_y = y_centers[89 - degree_90];
  flatten = y_flattens[89 - degree_90];
  up_down = up_downs[89 - degree_90];
  for (i = 0; i < 180; i = i + 0.2) {
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    bot_half = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);
    diff = bot_half - center_y;
    top_half = center_y - diff;
    top_y = top_half + up_down;
    bot_y = bot_half + up_down;

    ctx.strokeStyle = green_color;
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, top_y);
    ctx.stroke();
    ctx.closePath();

    bottom_center_y = 200;
    flatten_2 = 45 / 100;
    base_y = Math.round(bottom_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten_2);

    if (degree_90 == 45) {
      ctx.strokeStyle = red_color;
    } else {
      ctx.strokeStyle = grey_color;
    }
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, base_y);
    //console.log(bot_y, base_y);
    ctx.stroke();
    ctx.closePath();




  }



  drawBorder(degree_90);
  drawSlidNum(degree_90);

}











function drawBorder(degree_90) {
  if (SHOW_FRAME) {
    ctx.strokeStyle = `rgb(0,255,165)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(degree_90 * 256, 0);
    ctx.lineTo(degree_90 * 256 + 255, 0);
    ctx.lineTo(degree_90 * 256 + 255, 255);
    ctx.lineTo(degree_90 * 256, 255);
    ctx.lineTo(degree_90 * 256, 0, 0);
    ctx.stroke();
    ctx.closePath();
  }
}

function drawSlidNum(degree_90) {
  if (SHOW_SLIDE_NUMBER) {
    ctx.font = "48px serif";
    ctx.strokeStyle = black_color;
    ctx.strokeText(degree_90, degree_90 * 256 + 2, 28);
  }
}

function makeBullets() {
  if (DO_DEBUG) {
    drawBullet(0);
    drawBullet(1);
    drawBullet(2);
    drawBullet(3);

    drawBullet(43);
    drawBullet(44);
    drawBullet(45);
    drawBullet(46);
    drawBullet(47);

    drawBullet(86);
    drawBullet(87);
    drawBullet(88);
    drawBullet(89);

    // for (var the_degrees = 9; the_degrees < numDrawings; the_degrees = the_degrees + 10) {
    //   drawBullet(the_degrees);
    // }
  } else {
    for (var the_degrees = 0; the_degrees < 45; the_degrees = the_degrees + 1) {
      drawBullet_left(the_degrees);
      //  console.log(the_degrees);
    }
    //console.log("y_centers", y_centers);

    drawBand_left(0);
    drawBand_left(14);

    drawBand_left(20);
    drawBand_left(21);
    drawBand_left(22);
    drawBand_left(23);
    drawBand_left(24);
    drawBand_left(25);
    drawBand_left(26);
    drawBand_left(27);
    drawBand_left(28);
    drawBand_left(29);
    // for (var the_degrees = 0; the_degrees < 1; the_degrees = the_degrees + 1) {
    //   drawBand_left(the_degrees);
    //   //  console.log(the_degrees);
    // }

    for (var the_degrees = 45; the_degrees < numDrawings; the_degrees = the_degrees + 1) {
      drawBullet_right(the_degrees);
      //  console.log(the_degrees);
    }
  }
  //  console.log(bot_curve_ys);

}


makeBullets();
const out = fs.createWriteStream(file_name);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(`${file_name} created.`));
