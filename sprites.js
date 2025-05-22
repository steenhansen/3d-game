

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
  // console.log("ccccccc", cheat_sprite_y);
  z_index = zIndex(difference_x, cheat_sprite_y);



  sprite_element.style.marginLeft = `${x}px`;
  sprite_element.style.marginTop = `${y}px`;
  sprite_element.style.zIndex = z_index;
}




function spinObject(the_sprite) {
  // console.log("sdfasdf", the_sprite.id);
  const sprite_element = document.getElementById(the_sprite.id);
  // console.log("sprite_element", sprite_element);
  let the_spin = the_sprite.spin;
  the_spin = the_spin + 1;
  if (the_spin > numDrawings) {
    the_spin = 0;
  }
  the_sprite.spin = the_spin;
  let int_spin = Math.floor(the_spin);
  //console.log('sprite_element.style', sprite_element.style.backgroundPositionX);
  sprite_element.style.backgroundPositionX = int_spin * 256 + "px";
}






