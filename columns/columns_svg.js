


//   https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/  

// qbert arrow below
/*
<g id="the-arrow">
      <path     d="M 24,10 12,0 0,10 z M 6,12 v 16 h 12 v -16 z"


 />
    </g>

*/

document.getElementById('column-svg').innerHTML = `
<svg>
  <defs>

    

    <linearGradient id="red-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(255,0,0)" />
      <stop offset="1" stop-color="rgb(64,0,0)" stop-opacity="0.993" />
    </linearGradient>

    <linearGradient id="green-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0" stop-color="rgb(0,255,0)" />
      <stop offset="1" stop-color="rgb(0,64,0)" stop-opacity="0.99993" />
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



  </defs>
</svg>




`;
