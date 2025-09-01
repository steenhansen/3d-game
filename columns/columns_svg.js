


///////////////////////////////////////

// 0-399 

function twirledGradient(gradient_index, column_colors) {
  let [first_color, second_color] = column_colors;
  the_gradient = "column-gradient" + first_color + second_color + Math.floor(gradient_index);
  return the_gradient;
}



// 0-100       
function wDownWest2bUpEast(gradient_index, west_y, east_y, first_color, second_color) {
  gradient_id = twirledGradient(gradient_index, [first_color, second_color]);

  the_bw = `
      <linearGradient id="${gradient_id}" x1="0%" y1="${west_y}%" x2="100%" y2="${east_y}%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
  return the_bw;
}

// 100 - 200
function wRightSouth2bLeftNorth(gradient_index, south_x, north_x, first_color, second_color) {
  gradient_id = twirledGradient(gradient_index, [first_color, second_color]);
  the_bw = `
      <linearGradient id="${gradient_id}" x1="${south_x}%" y1="100%" x2="${north_x}%" y2="0%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
  return the_bw;
}

// 200-300
function wUpEast2bDownWest(gradient_index, east_y, west_y, first_color, second_color) {
  gradient_id = twirledGradient(gradient_index, [first_color, second_color]);
  the_bw = `
      <linearGradient id="${gradient_id}" x1="100%" y1="${east_y}%" x2="0%" y2="${west_y}%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
  return the_bw;
}


// 300 - 400
function wLeftNorth2bRightSouth(gradient_index, north_x, south_x, first_color, second_color) {
  gradient_id = twirledGradient(gradient_index, [first_color, second_color]);
  the_bw = `
      <linearGradient id="${gradient_id}" x1="${north_x}%" y1="0%" x2="${south_x}%" y2="100%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
  return the_bw;
}


function makeGradients(column_colors) {
  let [first_color, second_color] = column_colors;
  the_res = '';
  west_y = 0;
  for (let gradient_index = 0; gradient_index < 100; gradient_index++) {
    west_y++;
    east_y = 100 - west_y;
    west_2_east_gradient = wDownWest2bUpEast(gradient_index, west_y, east_y, first_color, second_color);
    the_res += west_2_east_gradient;
  }

  south_x = 0;
  for (let gradient_index = 100; gradient_index < 200; gradient_index++) {
    south_x++;
    north_x = 100 - south_x;
    south_2_north_gradient = wRightSouth2bLeftNorth(gradient_index, south_x, north_x, first_color, second_color);
    the_res += south_2_north_gradient;
  }
  east_y = 100;
  for (let gradient_index = 200; gradient_index < 300; gradient_index++) {
    east_y--;
    west_y = 100 - east_y;
    east_2_west_gradient = wUpEast2bDownWest(gradient_index, east_y, west_y, first_color, second_color);
    the_res += east_2_west_gradient;
  }

  north_x = 100;
  for (let gradient_index = 300; gradient_index < 400; gradient_index++) {
    north_x--;
    south_x = 100 - north_x;
    north_2_south_gradient = wLeftNorth2bRightSouth(gradient_index, north_x, south_x, first_color, second_color);
    the_res += north_2_south_gradient;
  }

  return the_res;

}



white_black_gradients = makeGradients(WHITE_BLACK_GRADIENT);

lime_fuchsia_gradients = makeGradients(LIME_FUCHSIA_GRADIENT);


document.getElementById('column-svg').innerHTML = `
<svg>
  <defs>

    ${white_black_gradients}
    ${lime_fuchsia_gradients}
 


    <linearGradient id="red-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,0,0)" />
      <stop offset="1" stop-color="rgb(64,0,0)" stop-opacity="0.993" />
    </linearGradient>

    <linearGradient id="green-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,255,0)" />
      <stop offset="1" stop-color="rgb(0,32,0)" stop-opacity="0.99993" />
    </linearGradient>

    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,0,255)" />
      <stop offset="1" stop-color="rgb(0,0,64)" stop-opacity="0.9993" />
    </linearGradient>




    <linearGradient id="orange-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,95,0)" />
      <stop offset="1" stop-color="rgb(139,64,0)" stop-opacity="0.99993" />
    </linearGradient>



    <linearGradient id="yellow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,255,0)" />
      <stop offset="1" stop-color="rgb(218,165,32)" stop-opacity="0.99993" />
    </linearGradient>


    <linearGradient id="purple-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,0,255)" />
      <stop offset="1" stop-color="rgb(96,0,96)" stop-opacity="0.99993" />
    </linearGradient>

    <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,255,255)" />
      <stop offset="1" stop-color="rgb(0,96,96)" stop-opacity="0.99993" />
    </linearGradient>






        <linearGradient id="silver-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(160,160,160)" />
      <stop offset="1" stop-color="rgb(64,64,64)" stop-opacity="0.9993" />
    </linearGradient>



        <linearGradient id="clear-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(160,160,160,0.9)" />
      <stop offset="1" stop-color="rgb(64,64,64,0.5)" stop-opacity="0.9993" />
    </linearGradient>


        <linearGradient id="test-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,0,255,0.3)" />
      <stop offset="1" stop-color="rgb(125,0,125,0.1)" stop-opacity="0.9993" />
    </linearGradient>



    <linearGradient id="none-grad" x1="0%" y1="0%" x2="0%" y2="0%">
  </linearGradient>






        <linearGradient id="grey-orange" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255, 165, 0)" />
      <stop offset="1" stop-color="rgb(160,160,160)" stop-opacity="1" />
    </linearGradient>

        <linearGradient id="grey-purple" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(165, 0,255)" />
      <stop offset="1" stop-color="rgb(160,160,160)" stop-opacity="1" />
    </linearGradient>


      <linearGradient id="grey-up2-silver" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(160,160,160)" />
      <stop offset="1" stop-color="rgb(64,64,64)" stop-opacity="1" />
    </linearGradient>


     <linearGradient id="silver-up2-grey" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(64,64,64)" />
      <stop offset="1" stop-color="rgb(160,160,160)" stop-opacity="1" />
    </linearGradient>

         <linearGradient id="white-up2-black" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,0,0)" />
      <stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1" />
    </linearGradient>


         <linearGradient id="black-up2-white" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
















         <linearGradient id="bw0" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>


         <linearGradient id="bw1" x1="0%" y1="0%" x2="1%" y2="99%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>

         <linearGradient id="bw2" x1="0%" y1="0%" x2="2%" y2="98%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw3" x1="0%" y1="0%" x2="3%" y2="97%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw4" x1="0%" y1="0%" x2="4%" y2="96%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw5" x1="0%" y1="0%" x2="5%" y2="95%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw6" x1="0%" y1="0%" x2="6%" y2="94%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw7" x1="0%" y1="0%" x2="7%" y2="93%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw8" x1="0%" y1="0%" x2="8%" y2="92%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>
         <linearGradient id="bw9" x1="0%" y1="0%" x2="9%" y2="91%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>

        <linearGradient id="bw10" x1="0%" y1="0%" x2="10%" y2="90%">
      <stop offset="0" stop-color="rgb(255,255,255)" />
      <stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1" />
    </linearGradient>

  </defs>
</svg>




`;
