
const DEAD_LOOP = "16s";
const LIVE_LOOP = "2s";

ball_start = "-2s";   //"-2s";
triangle_start = "-1s";
square_start = "-6s";

function makeBall(front_or_all, ball_color, is_dead) {

  ani_duration = aniDuration(is_dead);
  if (front_or_all === 'front') {
    ball_id = "ellipse-w-e-bottom--ball";
    ball_points = "m 941.29771,511.00632 c -0.4174,65.1159 -192.8997,119.13442 -429.9211,120.65392 -113.8217,0.7296 -222.902,-10.9924 -303.2444,-32.5875 -80.3423,-21.59492 -125.3656,-56.79672 -125.1651,-88.06642 m 1985.62999,-1.6843 c -0.4174,65.1158 -199.1141,113.63182 -436.1355,115.15132 -113.8218,0.7296 -222.902,-10.9924 -303.2444,-32.5874 -80.3423,-21.59512 -125.3656,-51.29422 -125.1652,-82.56392";
  } else {
    ball_id = "ellipse-w-e-top--ball";
    ball_points = "m 1210.2657,511.00632 c 0.4174,-65.1159 192.8997,-119.13441 429.9211,-120.65391 113.8217,-0.7296 222.902,10.9924 303.2444,32.58749 80.3423,21.59492 125.3656,56.79672 125.1651,88.06642 m -1985.629895,1.6843 c 0.4173,-65.1158 199.113995,-113.63181 436.135395,-115.15131 113.8218,-0.7296 222.902,10.9924 303.2444,32.58739 80.3423,21.59512 119.15191,49.60992 118.95151,80.87962";
  }
  if (is_dead) {
    fill_opacity = "0.4";
  } else {
    fill_opacity = "1";
  }
  ball_color = 'cyan';
  make_ball = `
  
          <path id="${ball_id}" d="${ball_points} " stroke="${ball_color}" stroke-width="1.0" fill-opacity="0" />
          <circle id="bob" cx=0 cy = 0 r = "50"
                    fill-opacity="${fill_opacity}"
            stroke-width="0" stroke="#000"
          fill = "${ball_color}" >
              <animateMotion repeatCount="indefinite" dur="${ani_duration}" begin="${ball_start}">
                  <mpath href="#${ball_id}" />
              </animateMotion>
          </circle >
`;

  return make_ball;
}


function makeSquare(front_or_all, square_color, is_dead) {
  ani_duration = aniDuration(is_dead);
  if (front_or_all === 'front') {
    square_id = "ellipse-nw-se-bottom--square";
    square_points = `m 894.08344,907.19733 c -46.34415,45.60609 -254.644,-86.4142 -465.2509,-294.87531 -101.1369,-100.1067 -189.29082,-204.8132 -245.06864,-291.0855 -55.77788,-86.2721 -70.72554,-150.9283 -48.47026,-172.829 M 1891.8389,1902.5742 c -46.344,45.6062 -256.2527,-95.7929 -466.8593,-304.2539 -101.1371,-100.1068 -189.291,-204.8132 -245.0689,-291.0854 -55.7778,-86.2723 -70.3068,-140.361 -48.0515,-162.2619`;
    //    square_color = "blue";

    square_start_x = "-6s";
  } else {
    square_id = "ellipse-nw-se-top--square";
    square_points = "m 135.29364,148.40752 c 46.3441,-45.6061 254.644,86.4141 465.2509,294.8754 101.1369,100.1067 189.2908,204.8132 245.0686,291.0855 55.7779,86.2721 70.7256,150.9283 48.4704,172.829 M -862.46172,-846.96945 c 46.344,-45.6061 256.25259,95.7929 466.85929,304.2541 101.1371,100.1067 189.29091,204.8132 245.0688,291.0854 55.7777,86.27219 70.30671,140.36089 48.05161,162.2618";
    //  square_color = "blue";
    square_start_x = "-0s";
  }
  if (is_dead) {
    fill_opacity = "0.4";
  } else {
    fill_opacity = "1";
  }
  square_color = "none";
  make_square = `
          <path id="${square_id}" d="${square_points} " stroke="${square_color}" stroke-width="1.0" fill-opacity="0" />
         <rect width="80" height="80" 
          fill-opacity="${fill_opacity}"
         stroke-width="0" stroke="#000"
         fill="${square_color}" >
              <animateMotion repeatCount="indefinite" dur="${ani_duration}" begin="${square_start_x}">
                  <mpath href="#${square_id}" />
              </animateMotion>
          </rect >
`;

  return make_square;
}

function makeTriangle(front_or_all, triangle_color, is_dead) {
  ani_duration = aniDuration(is_dead);
  if (front_or_all === 'front') {
    triangle_id = "ellipse-sw-ne-bottom--triangle";
    triangle_points = "m 1139.3495,-101.94918 c -45.6061,-46.34415 86.4142,-254.644 294.8753,-465.2509 100.1067,-101.1369 204.8132,-189.29082 291.0855,-245.06864 86.2721,-55.77788 150.9283,-70.72554 172.829,-48.47026 M 143.97261,895.80631 c -45.606236,-46.344 95.79289,-256.2527 304.25396,-466.8593 100.10671,-101.1371 204.8132,-189.291 291.08537,-245.0689 86.27227,-55.7778 140.36098,-70.3068 162.26185,-48.0515";
  } else {
    triangle_id = "ellipse-sw-ne-top--triangle";
    triangle_points = "m 901.57379,135.82661 c 45.60618,46.34413 -86.4141,254.64402 -294.87531,465.25085 -100.1067,101.13693 -204.8132,189.2908 -291.0855,245.0686 -86.2721,55.7779 -150.9283,70.7256 -172.829,48.4704 M 1896.9508,-861.92876 c 45.6061,46.344 -95.7929,256.25259 -304.2541,466.85929 -100.1067,101.1371 -204.8132,189.29091 -291.0854,245.0688 -86.2722,55.777705 -140.3609,70.306715 -162.2618,48.05161";
  }
  if (is_dead) {
    fill_opacity = "0.4";
  } else {
    fill_opacity = "1";
  }

  //         <polygon  points="-30,70         70,70            20,-17 "
  //   <polygon  points="-30,0         70,0            20,-87 "
  //           <polygon  points="0,0         100,0            50,-87 "
  //     <polygon  points="0,30         100,30            50,-57 "
  triangle_color = "none";
  make_triangle = `
          <path id="${triangle_id}" d="${triangle_points} " stroke="${triangle_color}" stroke-width="1.0" fill-opacity="0" />



           <polygon  points="0,30         100,30            50,-57 "
          
          
          
          fill-opacity="${fill_opacity}"
          stroke-width="0" stroke="#000"
          fill="${triangle_color}">
              <animateMotion repeatCount="indefinite" dur="${ani_duration}" begin="${triangle_start}">
                  <mpath href="#${triangle_id}" />
              </animateMotion>
          </polygon >
`;

  return make_triangle;
}


function rotatingStar(star_color, is_dead, s_number) {
  ani_duration = aniDuration(is_dead);
  // if (is_dead) {
  // fill_opacity = "0.4";
  rotate_from = 0;
  rotate_to = 359;
  //} else {
  fill_opacity = "1";
  //rotate_from = 360;
  // rotate_to = 0;
  //}
  ani_duration = "4s";

  css_var_name = '--enemy-star-color-' + s_number;


  //  <path fill="${star_color}" 
  star_color = '#aaaa00';
  rotating_star = `
            <circle cx="512" cy="512" id="sun:circle" r="256" stroke="${star_color}" stroke-width="1.0"  fill-opacity="0" />


          <g id="star-spin"  >

          
  <animateTransform attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 512 512"
                      to="360 512 512"
                      dur="1s"
                      repeatCount="indefinite"/>

      
              <path fill="var(${css_var_name})" 
              fill-opacity="${fill_opacity}"
              stroke="#000" stroke-width="0"
         
                  d="m 508.91671,254.44059 59.41448,170.89707 180.81736,3.64637 L 605.00944,538.26808 657.39929,711.41732 508.91671,608.08545 360.43414,711.41732 412.82398,538.26808 268.68487,428.98403 449.50223,425.33766 Z"/>






          </g>

             <circle cx="128" cy="128" id="sun:circle" r="2" stroke="${star_color}" stroke-width="0.0"  fill-opacity="0" />
`;
  // console.log("RS", rotating_star);
  return rotating_star;
}

function aniDuration(is_dead) {
  if (is_dead) {
    ani_duration = DEAD_LOOP;
  } else {
    ani_duration = LIVE_LOOP;
  }
  return ani_duration;
}

function makeEnemy(the_enemy) {
  is_dead = the_enemy.m_dead;
  enemy_id = the_enemy.s_id;
  star_color = the_enemy.m_colors[0];
  ball_color = the_enemy.m_colors[1];
  square_color = the_enemy.m_colors[2];
  triangle_color = the_enemy.m_colors[3];

  rotating_star = rotatingStar(star_color, is_dead, the_enemy.s_number);
  ball_all = makeBall('all', ball_color, is_dead);
  ball_front = makeBall('front', ball_color, is_dead);

  // square_all = makeSquare('all', square_color, is_dead);
  // square_front = makeSquare('front', square_color, is_dead);

  // triangle_all = makeTriangle('all', triangle_color, is_dead);
  // triangle_front = makeTriangle('front', triangle_color, is_dead);

  the_y = 128 - the_enemy.m_hover_up; // always overwritten

  //console.log("the_en", the_enemy);
  sprite_background = '';  //` <rect width="1024" height="1024" fill-opacity="0.33" fill="black" /> `;
  the_y = 28;
  let an_enemy = `
    <div class="show-pylon" id="${enemy_id}-div"  style="overflow:clip">
        <svg viewBox="0 0 1023 1023" >
            <svg id="${enemy_id}-x-y" x="0" y="${the_y}" width="1024" height="1024" class="svg-box">
                <svg id="${enemy_id}-scaled" style="transform: scale(0.5);">
                      ${sprite_background}
                    ${ball_all}
                        ${rotating_star}
                    ${ball_front}
                </svg>
            </svg>
        </svg>
    </div>
    `;


  // let an_enemy = `
  //   <div class="show-pylon" id="${enemy_id}-div"  >
  //       <svg viewBox="0 0 1023 1023" >

  //                       ${rotating_star}
  //       </svg>
  //   </div>
  //   `;


  return an_enemy;
}


