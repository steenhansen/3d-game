// 0-399
function twirledGradient(gradient_index, first_color, second_color) {
    const the_gradient = "pylon-gradient" + first_color + second_color + Math.floor(gradient_index);
    return the_gradient;
}

// 0-100
function wDownWest2bUpEast(gradient_index, west_y, east_y, first_color, second_color) {
    const gradient_id = twirledGradient(gradient_index, first_color, second_color);
    const the_bw = `
      <linearGradient id="${gradient_id}" x1="0%" y1="${west_y}%" x2="100%" y2="${east_y}%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
    return the_bw;
}

// 100 - 200
function wRightSouth2bLeftNorth(gradient_index, south_x, north_x, first_color, second_color) {
    const gradient_id = twirledGradient(gradient_index, first_color, second_color);
    const the_bw = `
      <linearGradient id="${gradient_id}" x1="${south_x}%" y1="100%" x2="${north_x}%" y2="0%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
    return the_bw;
}

// 200-300
function wUpEast2bDownWest(gradient_index, east_y, west_y, first_color, second_color) {
    const gradient_id = twirledGradient(gradient_index, first_color, second_color);
    const the_bw = `
      <linearGradient id="${gradient_id}" x1="100%" y1="${east_y}%" x2="0%" y2="${west_y}%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
    return the_bw;
}

// 300 - 400
function wLeftNorth2bRightSouth(gradient_index, north_x, south_x, first_color, second_color) {
    const gradient_id = twirledGradient(gradient_index, first_color, second_color);
    const the_bw = `
      <linearGradient id="${gradient_id}" x1="${north_x}%" y1="0%" x2="${south_x}%" y2="100%">
          <stop offset="0" stop-color="${first_color}" />
          <stop offset="1" stop-color="${second_color}" stop-opacity="1" />
      </linearGradient> \n`;
    return the_bw;
}

function makeGradients(pylon_colors) {
    let [first_color, second_color] = pylon_colors;
    let the_res = "";
    let west_y, east_y, north_x, south_x;
    west_y = 0;
    for (let gradient_index = 0; gradient_index < 100; gradient_index++) {
        west_y++;
        east_y = 100 - west_y;
        let west_2_east_gradient = wDownWest2bUpEast(gradient_index, west_y, east_y, first_color, second_color);
        the_res += west_2_east_gradient;
        west_2_east_gradient = wDownWest2bUpEast(gradient_index, west_y, east_y, second_color, first_color);
        the_res += west_2_east_gradient;
    }

    south_x = 0;
    for (let gradient_index = 100; gradient_index < 200; gradient_index++) {
        south_x++;
        north_x = 100 - south_x;
        let south_2_north_gradient = wRightSouth2bLeftNorth(gradient_index, south_x, north_x, first_color, second_color);
        the_res += south_2_north_gradient;
        south_2_north_gradient = wRightSouth2bLeftNorth(gradient_index, south_x, north_x, second_color, first_color);
        the_res += south_2_north_gradient;
    }

    east_y = 100;
    for (let gradient_index = 200; gradient_index < 300; gradient_index++) {
        east_y--;
        west_y = 100 - east_y;
        let east_2_west_gradient = wUpEast2bDownWest(gradient_index, east_y, west_y, first_color, second_color);
        the_res += east_2_west_gradient;
        east_2_west_gradient = wUpEast2bDownWest(gradient_index, east_y, west_y, second_color, first_color);
        the_res += east_2_west_gradient;
    }

    north_x = 100;
    for (let gradient_index = 300; gradient_index < 400; gradient_index++) {
        north_x--;
        south_x = 100 - north_x;
        let north_2_south_gradient = wLeftNorth2bRightSouth(gradient_index, north_x, south_x, first_color, second_color);
        the_res += north_2_south_gradient;
        north_2_south_gradient = wLeftNorth2bRightSouth(gradient_index, north_x, south_x, second_color, first_color);
        the_res += north_2_south_gradient;
    }
    return the_res;
}

const orange_grey_gradients = makeGradients(ORANGE_GREY_FOG);
const white_black_gradients = makeGradients(WHITE_BLACK);
const red_yellow_gradients = makeGradients(RED_YELLOW);
const red_cyan_gradients = makeGradients(RED_CYAN);
const lime_fuchsia_gradients = makeGradients(LIME_FUCHSIA);
const blue_yellow_gradients = makeGradients(BLUE_YELLOW);
const purple_green_gradients = makeGradients(PURPLE_GREEN);
const red_blue_gradients = makeGradients(RED_BLUE);
const gradient_definitions = `
  <svg>
    <defs>
        ${orange_grey_gradients}
        ${white_black_gradients}
        ${lime_fuchsia_gradients}
        ${red_yellow_gradients}
        ${red_cyan_gradients}
        ${lime_fuchsia_gradients}
        ${blue_yellow_gradients}
        ${purple_green_gradients}
        ${red_blue_gradients}
    </defs>
  </svg>`;
document.getElementById("pylons-svg").innerHTML = gradient_definitions;
