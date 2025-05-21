

/*
    256 is the width of the square, and pylon

PYLON_WIDTH = 256
HALF_PYLON_WIDTH=PYLON_WIDTH/2

    128 == PX_FROM_CENTER

*/

function drawLine(point_1, point_2, the_color) {
  // console.log("P1", point_1);
  const canvas = document.getElementById("the-draw");
  const ctx = canvas.getContext("2d");

  let [x1, y1] = point_1;
  let [x2, y2] = point_2;
  if (the_color === undefined) {
    the_color = `rgb(0,0,0)`;
  }
  ctx.strokeStyle = the_color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}



// let HALF_VIEW_WIDTH = 512;
// let BOTTOM_CHECKERBOARD = 512;

// let BACK_VANISH_POINT = [511, 256];
// let player_point = { x: 512, y: 1024 };

// let PYLON_WIDTH = 256;
// let HALF_PYLON_WIDTH = PYLON_WIDTH / 2;      // 128

// let PYLON_DEPTH = 96;
// let HALF_PYLON_DEPTH = PYLON_DEPTH / 2;   //48


// let SQUISH_DEPTH_START = 320;
// let SQUISH_FAR = 0.20;

document.getElementById('the-sprites').innerHTML = `
<div id="square-right">2</div>

<div id="square-front">1</div>
<div id="square-back">2</div>

<div id="bullet-1">1</div>
<div id="ball-1">1</div>

<div id="octa-1">1</div>

<div id="cube-1">1</div>
<div id="cube-2">2</div>
<div id="cube-3">3</div>
<div id="cube-4">4</div>
<div id="cube-5">5</div>
<div id="cube-6">6</div>
<div id="cube-7">7</div>
<div id="cube-8">8</div>
<div id="cube-9">9</div>
<div id="cube-10">10</div>
<div id="cube-11">11</div>
<div id="cube-12">12</div>
<div id="cube-13">13</div>
<div id="cube-14">14</div>
<div id="cube-15">15</div>
<div id="cube-16">16</div>

<div id="cube-y">Y2</div>




`;


let cube_x = { id: "cube-x", spin: 31, x: area_width_half, y: 854 };


function spriteSvg(the_sprite, player_point) {
  let is_visible = (player_point.y >= the_sprite.y);
  if (is_visible) {
    difference_y = player_point.y - the_sprite.y;
    player_start_left = player_point.x - HALF_PYLON_WIDTH;
    player_start_right = player_point.x + HALF_PYLON_WIDTH;


    //console.log("DDDDD", player_point.x, player_start_left);
    if (player_point.x > player_start_left) {
      //console.log("MMMMMMM");
      let middle_pylon = spriteMiddle(the_sprite, player_point, difference_y);
      return middle_pylon;

      //let left_pylon = pylonLeft(the_sprite, player_point, difference_y);
      //return left_pylon;
    } else if (player_x > player_start_right) {
      let right_pylon = pylonRight(the_sprite, player_point, difference_y);
      return right_pylon;
    } else {
      //    console.log("MMMMMMM");
      let middle_pylon = spriteMiddle(the_sprite, player_point, difference_y);
      return middle_pylon;
    }
  }
}

function spriteMiddle(sprite_point, player_point, difference_y) {
  spinObject(sprite_point);
  difference_x = player_point.x - sprite_point.x;

  x_offset = HALF_VIEW_WIDTH - difference_x;

  front_left_bot_vanish_point_XXXX = [x_offset, BOTTOM_CHECKERBOARD];
  left_front_bot = distancedPoint(difference_y, front_left_bot_vanish_point_XXXX);

  let [x, y] = left_front_bot;

  const sprite_element = document.getElementById(sprite_point.id);
  the_scale = sprite_sizes[difference_y];


  x = left_front_bot[0] - HALF_PYLON_WIDTH;
  y = y - HALF_PYLON_WIDTH;

  sprite_element.style.transform = `scale(${the_scale})`;

  /*
       ball at 864 == pylon at 902
       thus 902-864=38
  */
  cheat_sprite_y = difference_y - 49;           // 40 bad              50 good
  console.log("ccccccc", cheat_sprite_y);
  z_index = zIndex(difference_x, cheat_sprite_y);



  sprite_element.style.marginLeft = `${x}px`;
  sprite_element.style.marginTop = `${y}px`;
  sprite_element.style.zIndex = z_index;
}




function distancedPoint(distance_in_256, front_point) {
  shrink_size = sprite_sizes[distance_in_256];
  let [x_1, y_1] = BACK_VANISH_POINT;
  let [x_2, y_2] = front_point;
  x_3 = shrink_size * x_2 + (1 - shrink_size) * x_1;
  y_3 = shrink_size * y_2 + (1 - shrink_size) * y_1;
  return [x_3, y_3];
}

function zIndex(difference_x, difference_y) {
  let y_index = 1000 - difference_y;
  let x_index = 1000 - difference_x;
  let z_index = y_index * 1000 + x_index; // so that stuff same y distance favors middle stuff
  return z_index;
}


