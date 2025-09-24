diamond_width = 20;
half_diamond = diamond_width / 2;


d_0_xy = [90, 118];
d_0_off = [d_0_xy[0] + half_diamond, d_0_xy[1] + half_diamond];

inside_circlesX = `  
    <rect class="a-diamond" id="diamond-300"  x="${d_0_xy[0]}" y="${d_0_xy[1]}" 
       style="transform-origin:${d_0_off[0]}px   ${d_0_off[1]}px;      " />
  <circle id="missile-301" cx=108 cy=108 r=10 fill-opacity="1.0" />
   `;


diamond_width = 20;
half_diamond = diamond_width / 2;

function diamondSvg(x_y) {
  let [d_x, d_y] = x_y;
  off_x = d_x + half_diamond;
  off_y = d_y + half_diamond;
  inside_circlesX = `  
    <rect class="a-diamond" id="diamond-300"  x="${d_x}" y="${d_y}" 
       style="transform-origin:${off_x}px   ${off_y}px;      " />
   `;
}

an_svg = diamondSvg([90, 118]);