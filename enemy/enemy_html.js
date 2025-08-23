
const DEAD_LOOP = "16s";
const LIVE_LOOP = "4s";

ball_start = "-2s";
triangle_start = "-1s";
square_start = "-6s";


function aniDuration(is_dead) {
  if (is_dead) {
    ani_duration = DEAD_LOOP;
  } else {
    ani_duration = LIVE_LOOP;
  }
  return ani_duration;
}

function makeBall(front_or_all, ball_color, is_dead) {
  ani_duration = aniDuration(is_dead);
  if (front_or_all === 'front') {
    ball_id = "cyan-front-path";
    ball_points = "M20 128 A 25 91 270 0 0 236 128 M-236 -128 A 25 91 270 0 0 -20 -128";
  } else {
    ball_id = "cyan-all-path";
    ball_points = "M20 128 A 25 91 270 0 0 236 128 M236 128 A 25 91 270 0 0 20 128";
  }
  make_ball = `
          <path id="${ball_id}" d="${ball_points} " stroke="${ball_color}" stroke-width="0.0" fill-opacity="0" />
          <circle cx=0 cy = 0 r = "20" fill = "${ball_color}" >
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
    square_id = "blue-front-path";
    square_points = "M30 30 A 25 91 315 0 1 226 226 M-226 -226 A 25 91 315 0 1 -30 -30 ";
  } else {
    square_id = "blue-all-path";
    square_points = "M30 30 A 25 91 315 0 1 226 226 M226 226 A 25 91 315 0 1 30 30 ";
  }
  make_square = `
          <path id="${square_id}" d="${square_points} " stroke="${square_color}" stroke-width="0.0" fill-opacity="0" />
         <rect width="30" height="30" x=-15 y=-15  fill="${square_color}" >
              <animateMotion repeatCount="indefinite" dur="${ani_duration}" begin="${square_start}">
                  <mpath href="#${square_id}" />
              </animateMotion>
          </rect >
`;

  return make_square;
}

function makeTriangle(front_or_all, triangle_color, is_dead) {
  ani_duration = aniDuration(is_dead);
  if (front_or_all === 'front') {
    triangle_id = "green-front-path";
    triangle_points = "M30 226 A 25 91 45 0 1 226 30 M-226 -30 A 25 91 45 0 1 -30 -226 ";
  } else {
    triangle_id = "green-all-path";
    triangle_points = "M30 226 A 25 91 45 0 1 226 30 M226 30 A 25 91 45 0 1 30 226 ";
  }

  make_triangle = `
          <path id="${triangle_id}" d="${triangle_points} " stroke="${triangle_color}" stroke-width="0.0" fill-opacity="0" />
          <polygon transform="translate( -25 -30) scale( 0.45 )"    points="0,100         100,100            50,13.397 " fill="${triangle_color}">
              <animateMotion repeatCount="indefinite" dur="${ani_duration}" begin="${triangle_start}">
                  <mpath href="#${triangle_id}" />
              </animateMotion>
          </polygon >
`;

  return make_triangle;
}


function rotatingStar(star_color, is_dead) {
  ani_duration = aniDuration(is_dead);
  if (is_dead) {
    rotate_from = 0;
    rotate_to = 360;
  } else {
    rotate_from = 360;
    rotate_to = 0;
  }
  rotating_star = `
            <circle cx="128" cy="128" id="sun:circle" r="80" stroke="${star_color}" stroke-width="0.0"  fill-opacity="0" />


          <g id="star-spin"  >

          
          <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
   from="${rotate_from} 128 128"
    to="${rotate_to} 128 128" 
   additive="sum"
      dur="${ani_duration}"
      repeatCount="indefinite" />

      
              <path fill="${star_color}" stroke="#000" stroke-width="0" transform="translate( 24 24) scale( 0.2 )"
                  d="M512 85.9l110.8 318.7 337.2 6.8-268.8 203.8 97.7 322.9L512 745.4 235.1 938.1l97.7-322.9L64 411.4l337.2-6.8z"/>
          </g>

             <circle cx="128" cy="128" id="sun:circle" r="2" stroke="${star_color}" stroke-width="0.0"  fill-opacity="0" />
`;
  return rotating_star;
}



function makeEnemy(the_enemy, is_dead) {
  the_enemy.m_dead = is_dead;

  enemy_id = the_enemy.s_id;
  if (is_dead) {
    star_color = "black";
    ball_color = "#505050";
    square_color = "#505050";
    triangle_color = "#505050";
  } else {
    star_color = the_enemy.m_colors[0];
    ball_color = the_enemy.m_colors[1];
    square_color = the_enemy.m_colors[2];
    triangle_color = the_enemy.m_colors[3];
  }

  rotating_star = rotatingStar(star_color, is_dead);
  ball_all = makeBall('all', ball_color, is_dead);
  ball_front = makeBall('front', ball_color, is_dead);

  square_all = makeSquare('all', square_color, is_dead);
  square_front = makeSquare('front', square_color, is_dead);

  triangle_all = makeTriangle('all', triangle_color, is_dead);
  triangle_front = makeTriangle('front', triangle_color, is_dead);
  let a_missile = `
    <div class="show-column" style="z-index:933601" id="${enemy_id}-div">
        <svg viewBox="0 0 1023 511" preserveAspectRatio="xMinYMin slice">
            <svg id="${enemy_id}-x-y" x="333" y="128" width="256" height="256" class="svg-box" style="background-Color:Xpink;">
                <svg id="${enemy_id}-scaled" style="transform: scale(0.73)">
                    ${triangle_all}
                    ${square_all}
                    ${ball_all}
                        ${rotating_star}
                    ${ball_front}
                    ${square_front}
                    ${triangle_front}
                </svg>
            </svg>
        </svg>
    </div>`;
  return a_missile;
}