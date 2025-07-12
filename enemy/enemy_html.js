

//  http://xahlee.info/js/svg_path_ellipse_arc.html

document.getElementById('enemy-planets').innerHTML = `

<svg id="planets" width="256" height="256" viewBox="0 0 256 256" class="svg-box" style="background-Color:pink; position:absolute">

  <path id="blue-all-path" d="M76 128 A 25 91 315 0 1 180 128
                    M180 128 A 25 91 315 0 1 76 128  " stroke="blue" stroke-width="0.1" fill-opacity="0" />
  <circle cx=0 cy=0 r="20" fill="blue">
    <animateMotion repeatCount="indefinite" dur="3s" begin="-0.5s">
      <mpath href="#blue-all-path" />
    </animateMotion>
  </circle>

  <path id="green-all-path" d="M76 128 A 25 91 45 0 1 180 128
                    M180 128 A 25 91 45 0 1 76 128  " stroke="green" stroke-width="4.1" fill-opacity="0" />
  <circle cx=0 cy=0 r="20" fill="green">
    <animateMotion repeatCount="indefinite" dur="3s" begin="-1s">
      <mpath href="#green-all-path" />
    </animateMotion>
  </circle>

  <path id="red-all-path" d="M20 128 A 25 91 270 0 0 236 128
                    M236 128 A 25 91 270 0 0 20 128  " stroke="red" stroke-width="0.1" fill-opacity="0" />
  <circle cx=0 cy=0 r="20" fill="red">
    <animateMotion repeatCount="indefinite" dur="3s" begin="-1s">
      <mpath href="#red-all-path" />
    </animateMotion>
  </circle>


  <circle cx="128" cy="128" id="sun:circle" r="35" style="fill:yellow; opacity: 1" />

  <path id="red-front-path" d="M20 128 A 25 91 270 0 0 236 128
   M-236 -128 A 25 91 270 0 0 -20 -128  " stroke="red" stroke-width="0.1" fill-opacity="0" />
  <circle cx=0 cy=0 r="20" fill="red">
    <animateMotion repeatCount="indefinite" dur="3s" begin="-1s">
      <mpath href="#red-front-path" />
    </animateMotion>
  </circle>


  <path id="green-front-path" d="M-76 -128 A 25 91 45 0 1 -180 -128
    M180 128 A 25 91 45 0 1 76 128  " stroke="pink" stroke-width="4.1" fill-opacity="0" />
  <circle cx=0 cy=0 r="20" fill="green">
    <animateMotion repeatCount="indefinite" dur="3s" begin="-1s">
      <mpath href="#green-front-path" />
    </animateMotion>
  </circle>

  <path id="blue-front-path" d="M-76 -128 A 25 91 315 0 1 -180 -128
                      M180 128 A 25 91 315 0 1 76 128  " stroke="blue" stroke-width="0.1" fill-opacity="0" />
  <circle cx=0 cy=0 r="20" fill="blue">
    <animateMotion repeatCount="indefinite" dur="3s" begin="-0.5s">
      <mpath href="#blue-front-path" />
    </animateMotion>
  </circle>



</svg>



 `;
