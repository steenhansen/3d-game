// cd documents/GitHub/squares/make/sprites/bollard/

// node bollard_2.js

file_name = 'bollard.png';

DO_DEBUG = false;
SHOW_SLIDE_NUMBER = true;
SHOW_FRAME = false;

radius = 120;
center_x = 128;
//center_y = 128;

match_swirl_at_90 = 14.3;
object_width = 256;
object_height = 256;
numDrawings = 90;
swirl_width = 16;

white_color = `rgb(255,255,255,255)`;
black_color = `rgb(0,0,0,255)`;
grey_color = `rgb(127,127,127,255)`;
red_color = `rgb(255,0,0,255)`;

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

let y_centers = Array(90);
//   0.1[0]       0.4[45]         0.1[90]


function drawBullet_left(degree_90) { // 0..90     1/0 ,, 4/10
  //  flatten = degree_90 / 10;     // 0.1 ->  0.4
  // console.log("asdf", degree_90, flatten);
  // lat = degree_90+1/10 .   
  if (degree_90 < 45) {
    flatten = degree_90 / 100;
  } else {
    flatten = (90 - degree_90) / 100;
  }
  // 
  up_down = 0 - 10 + degree_90 * 1.45;

  ctx.lineWidth = 1;

  center_y = (degree_90 + 10) * 3.1 - 22; // does circles from 0- 44 perfectly
  console.log(degree_90, center_y);
  for (i = 0; i < 180; i = i + 0.2) {
    y_centers[i] = center_y;
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    bot_half = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);
    diff = bot_half - center_y;
    top_half = center_y - diff;
    top_y = top_half + up_down;
    bot_y = bot_half + up_down;

    ctx.strokeStyle = black_color;
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, top_y);
    //console.log(bot_y, top_y);
    ctx.stroke();
    ctx.closePath();

    // bottom_center_y = 200;
    // flatten_2 = 45 / 100;
    // base_y = Math.round(bottom_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten_2);

    // if (degree_90 == 43 || degree_90 == 44 || degree_90 == 45 || degree_90 == 46) {
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


  }

  drawBorder(degree_90);
  drawSlidNum(degree_90);
  //drawSwirl(degree_90);
}





function drawBullet_right(degree_90) { // 0..90     1/0 ,, 4/10
  //  flatten = degree_90 / 10;     // 0.1 ->  0.4
  // console.log("asdf", degree_90, flatten);
  // lat = degree_90+1/10 .   
  if (degree_90 < 45) {
    flatten = degree_90 / 100;
  } else {
    flatten = (90 - degree_90) / 100;
  }
  // 
  up_down = 0 - 10 + degree_90 * 1.45;

  ctx.lineWidth = 1;

  center_y = (degree_90 + 10) * 3.1 - 22; // does circles from 0- 44 perfectly
  console.log(degree_90, center_y);
  for (i = 0; i < 180; i = i + 0.2) {
    y_centers[i] = center_y;
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    bot_half = Math.round(center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten);
    diff = bot_half - center_y;
    top_half = center_y - diff;
    top_y = top_half + up_down;
    bot_y = bot_half + up_down;

    ctx.strokeStyle = black_color;
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, top_y);
    //console.log(bot_y, top_y);
    ctx.stroke();
    ctx.closePath();

    // bottom_center_y = 200;
    // flatten_2 = 45 / 100;
    // base_y = Math.round(bottom_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten_2);

    // if (degree_90 == 43 || degree_90 == 44 || degree_90 == 45 || degree_90 == 46) {
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


  }

  y_backwards = 44;
  for (i = 45; i < 90; i = i + 0.2) {
    center_second_half = y_centers[y_backwards--];
    x1 = Math.round(center_x + radius * Math.cos(2 * Math.PI * i / 360)) + degree_90 * 256;
    bot_half = Math.round(center_second_half + radius * Math.sin(2 * Math.PI * i / 360) * flatten);
    diff = bot_half - center_second_half;
    top_half = center_second_half - diff;
    top_y = top_half + up_down;
    bot_y = bot_half + up_down;

    ctx.strokeStyle = red_color;
    ctx.beginPath();
    ctx.moveTo(x1, bot_y);
    ctx.lineTo(x1, top_y);
    //console.log(bot_y, top_y);
    ctx.stroke();
    ctx.closePath();

    // bottom_center_y = 200;
    // flatten_2 = 45 / 100;
    // base_y = Math.round(bottom_center_y + radius * Math.sin(2 * Math.PI * i / 360) * flatten_2);

    // if (degree_90 == 43 || degree_90 == 44 || degree_90 == 45 || degree_90 == 46) {
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


  }

  drawBorder(degree_90);
  drawSlidNum(degree_90);
  //drawSwirl(degree_90);
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

// function drawSwirl(degree_90) {
//   ctx.beginPath();
//   ctx.strokeStyle = white_color;
//   ctx.lineWidth = swirl_width;
//   ctx.moveTo(center_x, center_y);
//   ctx.moveTo(center_x + degree_90 * 256, center_y);
//   let spin = degree_90 / match_swirl_at_90;
//   for (i = 0; i < 90; i++) {
//     angle = 0.1 * i;
//     x = center_x + (1 + 11 * angle) * Math.cos(angle + spin) + degree_90 * 256;
//     y = center_y + (1 + 11 * angle) * Math.sin(angle + spin);
//     ctx.lineTo(x, y);
//     ctx.stroke();
//   }
//   ctx.closePath();
// }

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
    for (var the_degrees = 45; the_degrees < numDrawings; the_degrees = the_degrees + 1) {
      //drawBullet_right(the_degrees);
      //  console.log(the_degrees);
    }
  }
}


makeBullets();
const out = fs.createWriteStream(file_name);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log(`${file_name} created.`));
