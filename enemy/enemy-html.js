

const DYING_STAR_COLOR = "black";
const DYING_BALL_COLOR = 'grey';


function makeBall(front_or_all, ball_color, enemy_number, ani_start) {



  ani_duration = "2s";

  alive_dead_color = '--enemy-ball-color-' + enemy_number;


  if (front_or_all === 'front') {
    ball_id = "ellipse-w-e-bottom--ball";
    ball_points = "m 941.29771,511.00632 c -0.4174,65.1159 -192.8997,119.13442 -429.9211,120.65392 -113.8217,0.7296 -222.902,-10.9924 -303.2444,-32.5875 -80.3423,-21.59492 -125.3656,-56.79672 -125.1651,-88.06642 m 1985.62999,-1.6843 c -0.4174,65.1158 -199.1141,113.63182 -436.1355,115.15132 -113.8218,0.7296 -222.902,-10.9924 -303.2444,-32.5874 -80.3423,-21.59512 -125.3656,-51.29422 -125.1652,-82.56392";
  } else {
    ball_id = "ellipse-w-e-top--ball";
    ball_points = "m 1210.2657,511.00632 c 0.4174,-65.1159 192.8997,-119.13441 429.9211,-120.65391 113.8217,-0.7296 222.902,10.9924 303.2444,32.58749 80.3423,21.59492 125.3656,56.79672 125.1651,88.06642 m -1985.629895,1.6843 c 0.4173,-65.1158 199.113995,-113.63181 436.135395,-115.15131 113.8218,-0.7296 222.902,10.9924 303.2444,32.58739 80.3423,21.59512 119.15191,49.60992 118.95151,80.87962";
  }
  //  begin="${enemy_number / -7}s"  begin="${ani_start}"
  make_ball = `
  
          <path id="${ball_id}" d="${ball_points} " stroke="${ball_color}" stroke-width="0" fill-opacity="0" />
          <circle id="bob" cx=0 cy = 0 r = "50"
                    fill-opacity="1"
            stroke-width="0" stroke="#000"
          fill = "var(${alive_dead_color})" >
              <animateMotion repeatCount="indefinite" dur="${ani_duration}" 
              
                begin="${ani_start}"
             
              
              >
                  <mpath href="#${ball_id}" />
              </animateMotion>
          </circle >
`;
  return make_ball;
}


function rotatingStar(star_color, enemy_number, r1) {
  ani_duration = r1 + "s"; //r + "s";   // 4s
  rotate_from = 0;
  rotate_to = 359;
  hit_opacity = '--enemy-star-opacity-' + enemy_number;
  hit_edge_prop = '--enemy-star-edge-width-' + enemy_number;
  alive_dead_color = '--enemy-star-color-' + enemy_number;

  //     begin="${enemy_number / 7}s"      begin="0.1s"
  function aRotatingStar(type_id, from_rotate, to_rotate) {
    star_to_from = `
    <circle cx="512" cy="512" id="sun:circle" r="256" stroke="${star_color}" stroke-width="0" fill-opacity="0" />
    <g id="${type_id}">
      <animateTransform 
        attributeName="transform" 
        attributeType="XML"
         type="rotate"
           from="${from_rotate}"
          to="${to_rotate}" 
          dur="${ani_duration}"
   begin="0.1s"
          repeatCount="indefinite" />
      <path fill="var(${alive_dead_color})" fill-opacity="var(${hit_opacity})" 
      stroke="white" stroke-width="var(${hit_edge_prop})"  stroke-opacity="0.4" 
        d="m 508.91671,254.44059 59.41448,170.89707 180.81736,3.64637 L 605.00944,538.26808 657.39929,711.41732 508.91671,608.08545 360.43414,711.41732 412.82398,538.26808 268.68487,428.98403 449.50223,425.33766 Z" />
    </g>
    <circle cx="128" cy="128" id="sun:circle" r="2" stroke="${star_color}" stroke-width="0.0" fill-opacity="0" />
`;
    return star_to_from;
  }

  star_fixed = aRotatingStar(`star-spin-fixed-${enemy_number}`, "0 512 512", "0 512 512");
  star_clockwise = aRotatingStar(`star-spin-clockwise-${enemy_number}`, "0 512 512", "360 512 512");
  star_counter = aRotatingStar(`star-spin-counter-${enemy_number}`, "360 512 512", "0 512 512");
  rotating_star = star_fixed + star_clockwise + star_counter;
  return rotating_star;
}











function createEnemyHtml(the_enemy) {
  let enemy_number = the_enemy.s_enemy_number;
  let ball_start = the_enemy.s_ball_start;


  enemy_id = the_enemy.s_id;
  star_color = the_enemy.s_colors[0];
  ball_color = the_enemy.s_colors[1];

  setCssEnemyStarFill(the_enemy.s_enemy_number, star_color);
  setCssEnemyBallFill(the_enemy.s_enemy_number, ball_color);


  let r1, r2;
  // -1  -.1  -.5
  if (enemy_number == 0) {
    r1 = "2";       // 1 ok 1.5 ok   2 ok  // 4 too slow
  } else if (enemy_number == 1) {
    r1 = "2";
  } else {
    r1 = "3";
  }

  rotating_star = rotatingStar(star_color, enemy_number, r1);


  // let r = Math.floor(Math.random() * 13);   // 2s for the ball 
  // if (enemy_number == 0) {
  //   r = "-2s";
  // } else if (enemy_number == 1) {
  //   r = "-1.75s";
  // } else if (enemy_number == 2) {
  //   r = "-1.5s";
  // } else if (enemy_number == 3) {
  //   r = "-1.25s";
  // } else if (enemy_number == 4) {
  //   r = "-1s";
  // } else if (enemy_number == 5) {
  //   r = "-0.75s";
  // } else if (enemy_number == 6) {
  //   r = "-0.5s";
  // } else if (enemy_number == 7) {
  //   r = "-0.25s";
  // } else {
  //   r = "0s";
  // }


  ball_all = makeBall('all', ball_color, enemy_number, ball_start);
  ball_front = makeBall('front', ball_color, enemy_number, ball_start);


  sprite_background = '';  //` <rect width="1024" height="1024" fill-opacity="0.33" fill="black" /> `;
  the_y = 28;
  let an_enemy = `
    <div class="show-pylon" id="${enemy_id}-div"  style="overflow:clip">
        <svg viewBox="0 0 1023 1023" >
            <svg id="${enemy_id}-x-y" x="0" y="0" width="1024" height="1024" class="svg-box">
                <svg id="${enemy_id}-scaled" style="transform: scale(0.5); transform-origin: center;">
                      ${sprite_background}
                    ${ball_all}
                        ${rotating_star}
                    ${ball_front}
                </svg>
            </svg>
        </svg>
    </div>
    `;

  return an_enemy;
}


