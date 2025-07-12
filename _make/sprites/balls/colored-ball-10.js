// cd documents/GitHub/squares/make/sprites/balls/

// node colored-ball-10.js

file_name = 'colored-ball.png';

DO_DEBUG = false;
SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = false;

radius = 50;
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

yellow_top = `rgb(255, 255, 0,255)`;
yellow_middle = `rgb(255, 234, 0,255)`;


var fs = require("fs");
const { createCanvas } = require('canvas');
const canvas = createCanvas(object_width * numDrawings, object_height);
const ctx = canvas.getContext('2d');


function drawBullet_left(degree_90) {


  radius = 110;
  inside_radius = 100;
  the_color = 255 - degree_90;
  flatten = 0.5;  //degree_90 / 100;
  ctx.lineWidth = 1;
  center_y = 110;

  start_curv = 45 + degree_90 * 4;
  end_curv = 360 + degree_90 * 4;
  for (i = 0; i < 360; i = i + 0.2) {
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    y1 = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);

    // bot_half = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);

    x2 = Math.round(center_x + inside_radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    y2 = Math.round(center_y + inside_radius * Math.sin(2 * Math.PI * i / 360) * flatten);

    ctx.strokeStyle = `rgb(0,${the_color},0,255)`;;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }
  ////////////////////////


  // radius = 60;
  // inside_radius = 20;
  // // start_curv = 45 + degree_90 * 4 + 180;
  // // end_curv = 360 + degree_90 * 4 + 180;

  // start_curv = 45 + degree_90 * 8;
  // end_curv = 360 + degree_90 * 8;

  // for (i = start_curv; i < end_curv; i = i + 0.2) {
  //   x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
  //   y1 = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360));


  //   x2 = Math.round(center_x + inside_radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
  //   y2 = Math.round(center_y + inside_radius * Math.sin(2 * Math.PI * i / 360));

  //   ctx.strokeStyle = `rgb(0,0,${the_color},255)`;;
  //   ctx.beginPath();
  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);
  //   ctx.stroke();
  //   ctx.closePath();
  // }






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

seven         21,35
eight         22,36
nine          23,37    81,82

ten           24,38    81,81
eleven        25,39    81,83
twelve        26,40    81,81
thirteen      27,41    81,83,

fourteenth    27,42    76a 88b 8c    76top + 88middle = 164 top two
fifteen       29,43    81,82
sixteen       30,44    81,81
seventeen     31,44    81,75
eighteen      32,44    81, 69
nineteen      33,44    81

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
  15, 16, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 27, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43
];
band_bottoms = [
  29, 30, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 44, 44, 44,
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

    bot_half = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);

    //   console.log("top_curve", top_curve);
    //   console.log("bot_curve_ys", bot_curve_ys);
    band_top_y = bot_curve_ys[top_curve][curve_i_index];

    bot_curve = band_bottoms[degree_90];
    band_bot_y = bot_curve_ys[bot_curve][curve_i_index];


    ctx.strokeStyle = yellow_middle;
    ctx.beginPath();
    if (degree_90 == 29) {
      ctx.moveTo(x1, band_top_y + 0);
      ctx.lineTo(x1, band_bot_y + 12);

    } else {
      ctx.moveTo(x1, band_top_y + 0);
      ctx.lineTo(x1, band_bot_y + 7);
    }
    ctx.stroke();
    ctx.closePath();
  }
}

// 89 ->0      
function drawBand_right(degree_90) {
  var flip_degree = 89 - degree_90;
  console.log("degree_90", degree_90, flip_degree);
  //console.log("1111111 flip_degree", flip_degree);
  // console.log("222222222222 band_tops", band_tops);
  ctx.lineWidth = 1;
  for (i = 0; i < 180; i = i + 0.2) {
    curve_i_index = Math.round(i * 5);
    //  console.log("curve_i_index", curve_i_index);
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    top_curve = band_tops[flip_degree];
    // console.log("3333333333333333 top_curve", top_curve);

    //console.log("top_curve", top_curve);
    //console.log("curve_i_index", curve_i_index);
    //  console.log("bot_curve_ys", bot_curve_ys);
    band_top_y = bot_curve_ys[top_curve][curve_i_index];

    bot_curve = band_bottoms[flip_degree];
    band_bot_y = bot_curve_ys[bot_curve][curve_i_index];


    ctx.strokeStyle = yellow_middle;
    ctx.beginPath();
    if (degree_90 == 60) {
      ctx.moveTo(x1, band_top_y + 0);
      ctx.lineTo(x1, band_bot_y + 12);

    } else {
      ctx.moveTo(x1, band_top_y + 0);
      ctx.lineTo(x1, band_bot_y + 7);
    }
    // ctx.moveTo(x1, band_top_y + 10);
    // ctx.lineTo(x1, band_bot_y + 7);
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

    ctx.strokeStyle = yellow_top;
    ctx.beginPath();

    if (degree_90 == 45) {
      ctx.moveTo(x1, bot_y + 7);
      ctx.lineTo(x1, top_y + 7);
    } else {
      ctx.moveTo(x1, bot_y);
      ctx.lineTo(x1, top_y);
    }
    // ctx.moveTo(x1, bot_y);
    // ctx.lineTo(x1, top_y);
    ctx.stroke();
    ctx.closePath();

    bottom_center_y = 210;  //200;
    flatten_2 = 45 / 100;
    base_y = Math.round(bottom_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten_2);

    // if (degree_90 == 45) {
    //   ctx.strokeStyle = red_color;
    // } else {
    //   ctx.strokeStyle = grey_color;
    // }
    // ctx.beginPath();
    // ctx.moveTo(x1, bot_y);
    // ctx.lineTo(x1, base_y);
    // //console.log(bot_y, base_y);
    // ctx.stroke();
    // ctx.closePath();

    if (degree_90 !== 45) {
      ctx.strokeStyle = grey_color;
      ctx.beginPath();
      ctx.moveTo(x1, bot_y);
      ctx.lineTo(x1, base_y);
      //console.log(bot_y, base_y);
      ctx.stroke();
      ctx.closePath();

    }



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
    drawBullet_left(0);


    // for (var the_degrees = 9; the_degrees < numDrawings; the_degrees = the_degrees + 10) {
    //   drawBullet(the_degrees);
    // }
  } else {
    for (var the_degrees = 0; the_degrees < 90; the_degrees = the_degrees + 1) {
      drawBullet_left(the_degrees);
      //  console.log(the_degrees);
    }
    //console.log("y_centers", y_centers);

    // drawBand_left(0);
    // drawBand_left(1);
    // drawBand_left(2);
    // drawBand_left(3);
    // drawBand_left(4);
    // drawBand_left(5);
    // drawBand_left(6);


    // drawBand_left(7);
    // drawBand_left(8);
    // drawBand_left(9);
    // drawBand_left(10);
    // drawBand_left(11);
    // drawBand_left(12);
    // drawBand_left(13);



    // drawBand_left(14);


    // drawBand_left(15);
    // drawBand_left(16);
    // drawBand_left(17);
    // drawBand_left(18);
    // drawBand_left(19);


    // drawBand_left(20);
    // drawBand_left(21);
    // drawBand_left(22);
    // drawBand_left(23);
    // drawBand_left(24);
    // drawBand_left(25);
    // drawBand_left(26);
    // drawBand_left(27);
    // drawBand_left(28);
    // drawBand_left(29);
    // for (var the_degrees = 0; the_degrees < 90; the_degrees = the_degrees + 1) {
    //   drawBand_left(the_degrees);
    //   //  console.log(the_degrees);
    // }

    // for (var the_degrees = 45; the_degrees < numDrawings; the_degrees = the_degrees + 1) {
    //   drawBullet_right(the_degrees);
    // }

    // for (var the_degrees = 60; the_degrees < numDrawings; the_degrees = the_degrees + 1) {

    //   drawBand_right(the_degrees);
    // }
    // drawBand_right(87);
    // drawBand_right(88);
    // drawBand_right(89);
  }
  //  console.log(bot_curve_ys);

}


makeBullets();
const out = fs.createWriteStream(file_name);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(`${file_name} created.`));
