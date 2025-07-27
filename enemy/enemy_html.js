
solar_time = "4s";

cyan_start = "-2s";
green_start = "-1s";
blue_start = "-6s";

enemy_planets = `

<svg id="planets" width="256" height="256" viewBox="0 0 256 256" class="svg-box" style="background-Color:Xpink; position:absolute">


  <path id="blue-all-path" d="M30 30 A 25 91 315 0 1 226 226
                    M226 226 A 25 91 315 0 1 30 30  " stroke="blue" stroke-width="0.0" fill-opacity="0" />
 <rect width="30" height="30" x=-15 y=-15  fill="blue" >

 <animateMotion repeatCount="indefinite" dur="${solar_time}" begin="${blue_start}">
      <mpath href="#blue-all-path" />
    </animateMotion>

         
  </rect>












  <path id="green-all-path" d="M30 226 A 25 91 45 0 1 226 30
                    M226 30 A 25 91 45 0 1 30 226  " stroke="green" stroke-width="0.0" fill-opacity="0" />
    <polygon transform="translate( -25 -30) scale( 0.45 )"    points="0,100         100,100            50,13.397 " fill="green">
    <animateMotion repeatCount="indefinite" dur="${solar_time}" begin="${green_start}">
      <mpath href="#green-all-path" />
    </animateMotion>
</polygon>
  











  <path id="cyan-all-path" d="M20 128 A 25 91 270 0 0 236 128
                    M236 128 A 25 91 270 0 0 20 128  " stroke="cyan" stroke-width="0.0" fill-opacity="0" />
<circle cx=0 cy=0 r="20" fill="cyan">
  
    <animateMotion repeatCount="indefinite" dur="${solar_time}" begin="${cyan_start}">
      <mpath href="#cyan-all-path" />
    </animateMotion>
  </circle>

 
  <circle cx="128" cy="128" id="sun:circle" r="80" stroke="yellow" stroke-width="0.0"  fill-opacity="0" />


  


<g id="star-spin"  >

<path fill="yellow" stroke="#000" stroke-width="0"

transform="translate( 24 24) scale( 0.2 )" 

d="M512 85.9l110.8 318.7 337.2 6.8-268.8 203.8 97.7 322.9L512 745.4 235.1 938.1l97.7-322.9L64 411.4l337.2-6.8z"/>
  

</g>


  <path id="cyan-front-path" d="M20 128 A 25 91 270 0 0 236 128
   M-236 -128 A 25 91 270 0 0 -20 -128  " stroke="cyan" stroke-width="0.0" fill-opacity="0" />

   <circle cx=0 cy=0 r="20" fill="cyan">



    <animateMotion repeatCount="indefinite" dur="${solar_time}" begin="${cyan_start}">
      <mpath href="#cyan-front-path" />
    </animateMotion>
  </circle>









  <path id="green-front-path" d="M30 226 A 25 91 45 0 1 226 30
    M-226 -30 A 25 91 45 0 1 -30 -226  " stroke="green" stroke-width="0.0" fill-opacity="0" />
    <polygon transform="translate( -25 -30) scale( 0.45 )"    points="0,100         100,100            50,13.397 " fill="green">
    <animateMotion repeatCount="indefinite" dur="${solar_time}" begin="${green_start}">
      <mpath href="#green-front-path" />
    </animateMotion>
  </polygon>

  <path id="blue-front-path" d="M30 30 A 25 91 315 0 1 226 226
                    M-226 -226 A 25 91 315 0 1 -30 -30  " stroke="blue" stroke-width="0.0" fill-opacity="0" />
 <rect width="30" height="30" x=-15 y=-15  fill="blue" >
    <animateMotion repeatCount="indefinite" dur="${solar_time}" begin="${blue_start}">
      <mpath href="#blue-front-path" />
    </animateMotion>



</rect>



</svg>



 `;


document.getElementById('enemy-planets').innerHTML = enemy_planets;
