
ball_start = "-2s";

function makeBall(front_or_all, ball_color, is_dead) {

  ani_duration = aniDuration(is_dead);


  if (is_dead) {
    ani_duration = "1s";
    //   console.log("DDDDDDDD");
  } else {
    ani_duration = "2s";
  }
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
  make_ball = `
  
          <path id="${ball_id}" d="${ball_points} " stroke="${ball_color}" stroke-width="0" fill-opacity="0" />
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





const DEAD_LOOP = "16s";
const LIVE_LOOP = "4s";


function rotatingStar(star_color, is_dead, enemy_number) {
  //  console.log("DDDDDDDD rotatingStar");
  ani_duration = aniDuration(is_dead);
  rotate_from = 0;
  rotate_to = 359;
  hit_opacity = '--enemy-star-opacity-' + enemy_number;
  hit_edge_prop = '--enemy-star-edge-width-' + enemy_number;
  // ani_duration = "4s";
  rotating_star = `
    <circle cx="512" cy="512" id="sun:circle" r="256" stroke="${star_color}" stroke-width="0" fill-opacity="0" />
    <g id="star-spin">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 512 512" to="360 512 512" 
        dur="${ani_duration}" repeatCount="indefinite" />
      <path fill="${star_color}" fill-opacity="var(${hit_opacity})" 
      stroke="white" stroke-width="var(${hit_edge_prop})"  stroke-opacity="0.4" 
        d="m 508.91671,254.44059 59.41448,170.89707 180.81736,3.64637 L 605.00944,538.26808 657.39929,711.41732 508.91671,608.08545 360.43414,711.41732 412.82398,538.26808 268.68487,428.98403 449.50223,425.33766 Z" />
    </g>
    <circle cx="128" cy="128" id="sun:circle" r="2" stroke="${star_color}" stroke-width="0.0" fill-opacity="0" />
`;

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


// createEnemy to install done once
function makeEnemy(the_enemy) {
  // console.log("make DDD enemy", the_enemy);
  let enemy_number = the_enemy.s_enemy_number;
  // this is done once, so m_dead is checked at the start of the game, no use here at init
  is_dead = the_enemy.m_dead;
  enemy_id = the_enemy.s_id;
  star_color = the_enemy.s_colors[0];
  ball_color = the_enemy.s_colors[1];


  rotating_star = rotatingStar(star_color, is_dead, enemy_number);


  ball_all = makeBall('all', ball_color, is_dead);
  ball_front = makeBall('front', ball_color, is_dead);


  the_y = 128 - the_enemy.t_hover_up; // always overwritten

  sprite_background = '';  //` <rect width="1024" height="1024" fill-opacity="0.33" fill="black" /> `;
  the_y = 28;
  let an_enemy = `
    <div class="show-pylon" id="${enemy_id}-div"  style="overflow:clip">
        <svg viewBox="0 0 1023 1023" >
            <svg id="${enemy_id}-x-y" x="0" y="${the_y}" width="1024" height="1024" class="svg-box">
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


