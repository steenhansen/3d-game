
const HIT_FLASH_PYLON = 23;
// red-grad        Red rgb(255,0,0)           22222222
// green-grad    Green rgb(0,255,0)ddddd
// blue-grad      Blue rgb(0,0,255)
// orange-grad  Orange rgb(255, 95, 31)
// yellow-grad  Yellow rgb(255, 255, 0) 
// purple-grad  Purple rgb(255, 0, 255) dddd
// cyan-grad      Cyan rgb(0, 255, 255)         22222222
// silver-grad  Silver rgb(160,160,160)


function rowPylons(y_coord, row_name) {
  pylon_row = [];
  column_count = 0;
  // row_name = "A";
  last_one = SCENE_WIDTH - 500;
  for (let x = 0; x < last_one; x += 500) {
    if (x == 0) {
      the_colors = ["red", "cyan"];
    } else {
      the_colors = WHITE_BLACK_GRADIENT;
    }
    let a_pylon = {
      s_isa: "is-pylon",
      s_pylon_name: `pylon-${row_name}-${column_count}`,
      m_x: x, m_y: y_coord,
      s_pylon_colors: the_colors,
      m_side_twirl: 0,
      m_front_twirl: 200,
      s_outline: false,
      m_hit_flash: 0,
      do_flash: false
    };
    column_count++;
    pylon_row.push(a_pylon);
  }
  return pylon_row;
}

function phalanxPylons() {
  row_0 = rowPylons(0, "A");
  row_100 = rowPylons(100, "B");
  row_200 = rowPylons(200, "C");
  row_300 = rowPylons(300, "D");
  row_400 = rowPylons(400, "E");
  row_500 = rowPylons(500, "F");
  pylon_phalanx = [row_0, row_100, row_200, row_300, row_400, row_500].flat();
  //s_moves_x: [ZERO_10].flat(),
  return pylon_phalanx;
}

pylon_phalanx = phalanxPylons();
console.log("pylon_phalanx", pylon_phalanx);


pylon_1a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-1a",
  //  m_x: pylon_1A_START_X, m_y: pylon_1A_START_Y,
  m_x: 100, m_y: 28,

  s_pylon_colors: WHITE_BLACK_GRADIENT,
  m_twirl_on: false,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true,
  m_hit_flash: 0,
  do_flash: false
};

pylon_1b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-2a",
  m_x: 612, m_y: 28,
  s_pylon_colors: WHITE_BLACK_GRADIENT,
  m_twirl_on: true,
  m_side_twirl: 150,
  m_front_twirl: 350,
  s_outline: true,
  m_hit_flash: 0,
  do_flash: false
};




pylon_2a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-2b",
  m_x: 870, m_y: 124,
  s_pylon_colors: RED_YELLOW_GRADIENT,
  m_twirl_on: false,
  m_side_twirl: 50,
  m_front_twirl: 250,
  s_outline: true,
  m_hit_flash: 0,
  do_flash: false
};


let pylon_2b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-3a",
  m_x: 1386, m_y: 124,
  s_pylon_colors: RED_YELLOW_GRADIENT,
  m_twirl_on: true,
  m_side_twirl: 0,
  m_front_twirl: 200,
  s_outline: true,
  m_hit_flash: 0,
  do_flash: false
};



pylon_3a = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-3b",
  m_x: 1386, m_y: 316,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_twirl_on: false,
  m_side_twirl: 100,
  m_front_twirl: 300,
  s_outline: true,
  m_hit_flash: 0,
  do_flash: false
};



pylon_3b = {
  s_isa: "is-pylon",
  s_pylon_name: "pylon-3c",
  m_x: 2700, m_y: 316,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_twirl_on: true,
  m_side_twirl: 188,
  m_front_twirl: 388,
  s_outline: true,
  m_hit_flash: 0,
  do_flash: false
};













function randomPylon() {

}




/*
  for no twirlling , below looks good
  m_side_twirl: 1,aww
  m_front_twirl: 201,
*/

pylon_4_1 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 100, m_y: 100,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_2 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 200, m_y: 200,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_3 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 300, m_y: 300,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_4 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 400, m_y: 400,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_5 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 500, m_y: 500,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_6 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 600, m_y: 600,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_7 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 700, m_y: 700,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};

pylon_4_8 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 800, m_y: 600,
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};


/*


let SCENE_Y_MAX = 768;
let SCENE_WIDTH = 8192;

*/
pylon_4_9 = {
  s_isa: "is-pylon",
  s_pylon_name: "a1-pylon",
  m_x: 900, m_y: 600,                          /// must be within 8192 and 768
  s_pylon_colors: LIME_FUCHSIA_GRADIENT,
  m_side_twirl: 1,
  m_front_twirl: 201,
  s_outline: true
};
