
//             cd \Users\16043\Documents\GitHub\3d-game-new\make\right-side\
//             node right-create.js

const fs = require("fs");


/*
<div id="svg-1" class="a-column" style=" left:384px;  transform: scale(1) ;">
  <svg viewBox="0 0 255 511" style=" left:384px;  transform: scale(1) ;">
    <polygon points="85,0 170,0 170,511 85,511 	" fill="url(#red-grad)" />
    <polygon style="fill:rgba(210, 210, 0, 0.5);" points="85,0   85,511    	          85,480    85,24" />
  </svg>
</div>
---- 512 diff in x , and a 55 pixel corner change
---- 55/512 = 0.107421875
<div id="svg-2" class="a-column" style=" left:896px;  transform: scale(1) ;">
  <svg viewBox="0 0 255 511">
    <polygon fill="url(#red-grad)" points="85,0 170,0 170,511 85,511 	" />
    <polygon fill="url(#blue-grad)" points="85,0   85,511                            30,480   30,24 	" />
  </svg>
</div>
*/
function rightSvg(right_index) {
  corner_diff_float = 0.107421875 * right_index;
  corner_int = Math.round(corner_diff_float);
  left_corner_x = 85 - corner_int;
  right_corner_x = 170 - corner_int - 5;
  the_svg = `<svg id="svg-right-${right_index}" viewBox="0 0 255 511">
       <polygon fill="url(#green-grad)"
      points="170,0   170,511                            ${right_corner_x},487   ${right_corner_x},24 	" />
    <polygon fill="url(#red-grad)" points="85,0 170,0 170,511 85,511 	" />
    <polygon fill="url(#blue-grad)"
      points="85,0   85,511                            ${left_corner_x},487   ${left_corner_x},24 	" />
  </svg>`;
  return the_svg;
}

the_svgs = "";
for (var right_index = 0; right_index < 512; right_index++) {
  an_svg = rightSvg(right_index);
  the_svgs += "\n" + an_svg;

}


fs.writeFile("svgs-right.txt", the_svgs, err => {
  if (err) throw err;
  console.log('File successfully written to disk');
});





