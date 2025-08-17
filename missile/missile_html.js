



function the_lines(show_lines) {
  if (show_lines) {
    stroke_width = 2;
    all_lines = `
  <line x1="0" y1="0" x2="256" y2="255" stroke="green" stroke-width="${stroke_width}" />
  <line x1="0" y1="256" x2="256" y2="0" stroke="green" stroke-width="${stroke_width}" />
  <line x1="128" y1="0" x2="128" y2="256" stroke="green" stroke-width="${stroke_width}" />
  <line x1="0" y1="128" x2="256" y2="128" stroke="green" stroke-width="${stroke_width}" />

  <line x1="0" y1="76" x2="256" y2="180" stroke="black" stroke-width="${stroke_width}" />
  <line x1="0" y1="180" x2="256" y2="76" stroke="black" stroke-width="${stroke_width}" />
  <line x1="76" y1="0" x2="180" y2="256" stroke="black" stroke-width="${stroke_width}" />
  <line x1="180" y1="0" x2="76" y2="256" stroke="black" stroke-width="${stroke_width}" />

  <line x1="44" y1="0" x2="212" y2="256" stroke="red" stroke-width="${stroke_width}" />
  <line x1="212" y1="0" x2="44" y2="256" stroke="red" stroke-width="${stroke_width}" />
  <line x1="103" y1="0" x2="153" y2="256" stroke="red" stroke-width="${stroke_width}" />
  <line x1="153" y1="0" x2="103" y2="256" stroke="red" stroke-width="${stroke_width}" />

  <line x1="0" y1="44" x2="256" y2="212" stroke="blue" stroke-width="${stroke_width}" />
  <line x1="0" y1="212" x2="256" y2="44" stroke="blue" stroke-width="${stroke_width}" />
  <line x1="0" y1="153" x2="256" y2="103" stroke="blue" stroke-width="${stroke_width}" />
  <line x1="0" y1="103" x2="256" y2="153" stroke="blue" stroke-width="${stroke_width}" />
`;
  } else {
    all_lines = '';
  }

  return all_lines;
}

function the_rings(show_rings) {
  if (show_rings) {
    stroke_width = 2;
    all_rings = `
  <circle cx=128 cy=128 r="108" stroke="white" fill-opacity="0" stroke-width="${stroke_width}" />
  <circle cx=128 cy=128 r="88" stroke="white" fill-opacity="0" stroke-width="${stroke_width}" />
  <circle cx=128 cy=128 r="68" stroke="white" fill-opacity="0" stroke-width="${stroke_width}" />
  <circle cx=128 cy=128 r="48" stroke="white" fill-opacity="0" stroke-width="${stroke_width}" />
  <circle cx=128 cy=128 r="28" stroke="white" fill-opacity="0" stroke-width="${stroke_width}" />
  <circle cx=128 cy=128 r="08" stroke="white" fill-opacity="0" stroke-width="${stroke_width}" />
`;
  } else {
    all_rings = '';
  }
  return all_rings;
}


function centers_inside(show_center) {
  if (show_center) {
    all_centers = `
  <text x=100 y=128 text-anchor="middle" dy=".3em">+</text>
  <text x=108 y=108 text-anchor="middle" dy=".3em">+</text>
  <text x=128 y=101 text-anchor="middle" dy=".3em">+</text>
  <text x=148 y=108 text-anchor="middle" dy=".3em">+</text>
  <text x=156 y=128 text-anchor="middle" dy=".3em">+</text>
  <text x=148 y=148 text-anchor="middle" dy=".3em">+</text>
  <text x=128 y=155 text-anchor="middle" dy=".3em">+</text>
  <text x=108 y=148 text-anchor="middle" dy=".3em">+</text>
`;
  } else {
    all_centers = '';
  }
  return all_centers;
}


function centers_middle(show_center) {
  if (show_center) {
    all_centers = `
  <text x=60 y=128 text-anchor="middle" dy=".3em">+</text>
  <text x=65 y=104 text-anchor="middle" dy=".3em">+</text>
  <text x=80 y=80 text-anchor="middle" dy=".3em">+</text>
  <text x=102 y=66 text-anchor="middle" dy=".3em">+</text>
  <text x=128 y=60 text-anchor="middle" dy=".3em">+</text>
  <text x=154 y=66 text-anchor="middle" dy=".3em">+</text>
  <text x=176 y=80 text-anchor="middle" dy=".3em">+</text>
  <text x=192 y=104 text-anchor="middle" dy=".3em">+</text>
  <text x=197 y=128 text-anchor="middle" dy=".3em">+</text>
  <text x=192 y=154 text-anchor="middle" dy=".3em">+</text>
  <text x=176 y=176 text-anchor="middle" dy=".3em">+</text>
  <text x=154 y=192 text-anchor="middle" dy=".3em">+</text>
  <text x=128 y=196 text-anchor="middle" dy=".3em">+</text>
  <text x=102 y=192 text-anchor="middle" dy=".3em">+</text>
  <text x=80 y=176 text-anchor="middle" dy=".3em">+</text>
  <text x=65 y=154 text-anchor="middle" dy=".3em">+</text>
`;
  } else {
    all_centers = '';
  }
  return all_centers;
}


function centersOutside(show_center) {
  if (show_center) {
    all_centers = `
  <text x=20 y=128 text-anchor="middle" dy=".3em">+</text>
  <text x=22 y=108 text-anchor="middle" dy=".3em">+</text>
  <text x=28 y=88 text-anchor="middle" dy=".3em">+</text>
  <text x=38 y=69 text-anchor="middle" dy=".3em">+</text>
  <text x=52 y=52 text-anchor="middle" dy=".3em">+</text>
  <text x=69 y=38 text-anchor="middle" dy=".3em">+</text>
  <text x=87 y=28 text-anchor="middle" dy=".3em">+</text>
  <text x=107 y=22 text-anchor="middle" dy=".3em">+</text>
  <text x=128 y=20 text-anchor="middle" dy=".3em">+</text>
  <text x=149 y=22 text-anchor="middle" dy=".3em">+</text>
  <text x=169 y=28 text-anchor="middle" dy=".3em">+</text>
  <text x=186 y=38 text-anchor="middle" dy=".3em">+</text>
  <text x=204 y=52 text-anchor="middle" dy=".3em">+</text>
  <text x=218 y=69 text-anchor="middle" dy=".3em">+</text>
  <text x=228 y=88 text-anchor="middle" dy=".3em">+</text>
  <text x=234 y=108 text-anchor="middle" dy=".3em">+</text>
  <text x=236 y=128 text-anchor="middle" dy=".3em">+</text>
  <text x=234 y=150 text-anchor="middle" dy=".3em">+</text>
  <text x=228 y=170 text-anchor="middle" dy=".3em">+</text>
  <text x=218 y=188 text-anchor="middle" dy=".3em">+</text>
  <text x=204 y=205 text-anchor="middle" dy=".3em">+</text>
  <text x=187 y=220 text-anchor="middle" dy=".3em">+</text>
  <text x=169 y=228 text-anchor="middle" dy=".3em">+</text>
  <text x=149 y=235 text-anchor="middle" dy=".3em">+</text>
  <text x=128 y=236 text-anchor="middle" dy=".3em">+</text>
  <text x=107 y=235 text-anchor="middle" dy=".3em">+</text>
  <text x=87 y=228 text-anchor="middle" dy=".3em">+</text>
  <text x=69 y=220 text-anchor="middle" dy=".3em">+</text>
  <text x=52 y=205 text-anchor="middle" dy=".3em">+</text>
  <text x=38 y=188 text-anchor="middle" dy=".3em">+</text>
  <text x=28 y=170 text-anchor="middle" dy=".3em">+</text>
  <text x=22 y=150 text-anchor="middle" dy=".3em">+</text>
`;
  } else {
    all_centers = '';
  }
  return all_centers;
}









function makeMissile(missile_id) {
  all_lines = the_lines(false);
  all_rings = the_rings(false);

  inside_centers = centers_inside(false);
  middle_centers = centers_middle(false);
  centers_outside = centersOutside(false);


  outside_circles = `<circle id="missile-100" cx=20 cy=128 r=20 fill-opacity="1.0" />
  <circle id="missile-101" cx=22 cy=108 r=20 fill-opacity="1.0" />
  <circle id="missile-102" cx=28 cy=88 r=20 fill-opacity="1.0" />
  <circle id="missile-103" cx=38 cy=69 r=20 fill-opacity="1.0" />
  <circle id="missile-104" cx=52 cy=52 r=20 fill-opacity="1.0" />
  <circle id="missile-105" cx=69 cy=38 r=20 fill-opacity="1.0" />
  <circle id="missile-106" cx=87 cy=28 r=20 fill-opacity="1.0" />
  <circle id="missile-107" cx=107 cy=22 r=20 fill-opacity="1.0" />
  <circle id="missile-108" cx=128 cy=20 r=20 fill-opacity="1.0" />
  <circle id="missile-109" cx=149 cy=22 r=20 fill-opacity="1.0" />
  <circle id="missile-110" cx=169 cy=28 r=20 fill-opacity="1.0" />
  <circle id="missile-111" cx=186 cy=38 r=20 fill-opacity="1.0" />
  <circle id="missile-112" cx=204 cy=52 r=20 fill-opacity="1.0" />
  <circle id="missile-113" cx=218 cy=69 r=20 fill-opacity="1.0" />
  <circle id="missile-114" cx=228 cy=88 r=20 fill-opacity="1.0" />
  <circle id="missile-115" cx=234 cy=108 r=20 fill-opacity="1.0" />
  <circle id="missile-116" cx=236 cy=128 r=20 fill-opacity="1.0" />
  <circle id="missile-117" cx=234 cy=150 r=20 fill-opacity="1.0" />
  <circle id="missile-118" cx=228 cy=170 r=20 fill-opacity="1.0" />
  <circle id="missile-119" cx=218 cy=188 r=20 fill-opacity="1.0" />
  <circle id="missile-120" cx=204 cy=205 r=20 fill-opacity="1.0" />
  <circle id="missile-121" cx=187 cy=220 r=20 fill-opacity="1.0" />
  <circle id="missile-122" cx=169 cy=228 r=20 fill-opacity="1.0" />
  <circle id="missile-123" cx=149 cy=235 r=20 fill-opacity="1.0" />
  <circle id="missile-124" cx=128 cy=236 r=20 fill-opacity="1.0" />
  <circle id="missile-125" cx=107 cy=235 r=20 fill-opacity="1.0" />
  <circle id="missile-126" cx=87 cy=228 r=20 fill-opacity="1.0" />
  <circle id="missile-127" cx=69 cy=220 r=20 fill-opacity="1.0" />
  <circle id="missile-128" cx=52 cy=205 r=20 fill-opacity="1.0" />
  <circle id="missile-129" cx=38 cy=188 r=20 fill-opacity="1.0" />
  <circle id="missile-130" cx=28 cy=170 r=20 fill-opacity="1.0" />
  <circle id="missile-131" cx=22 cy=150 r=20 fill-opacity="1.0" />`;

  middle_circles = `  <circle id="missile-200" cx=60 cy=128 r=20 fill-opacity="1.0" />
  <circle id="missile-201" cx=65 cy=104 r=20 fill-opacity="1.0" />
  <circle id="missile-202" cx=80 cy=80 r=20 fill-opacity="1.0" />
  <circle id="missile-203" cx=102 cy=66 r=20 fill-opacity="1.0" />
  <circle id="missile-204" cx=128 cy=60 r=20 fill-opacity="1.0" />
  <circle id="missile-205" cx=154 cy=66 r=20 fill-opacity="1.0" />
  <circle id="missile-206" cx=176 cy=80 r=20 fill-opacity="1.0" />
  <circle id="missile-207" cx=192 cy=104 r=20 fill-opacity="1.0" />
  <circle id="missile-208" cx=197 cy=128 r=20 fill-opacity="1.0" />
  <circle id="missile-209" cx=192 cy=154 r=20 fill-opacity="1.0" />
  <circle id="missile-210" cx=176 cy=176 r=20 fill-opacity="1.0" />
  <circle id="missile-211" cx=154 cy=192 r=20 fill-opacity="1.0" />
  <circle id="missile-212" cx=128 cy=196 r=20 fill-opacity="1.0" />
  <circle id="missile-213" cx=102 cy=192 r=20 fill-opacity="1.0" />
  <circle id="missile-214" cx=80 cy=176 r=20 fill-opacity="1.0" />
  <circle id="missile-215" cx=65 cy=154 r=20 fill-opacity="1.0" />`;

  inside_circles = `  <circle id="missile-300" cx=100 cy=128 r=20 fill-opacity="0.0" />
  <circle id="missile-301" cx=108 cy=108 r=20 fill-opacity="1.0" />
  <circle id="missile-302" cx=128 cy=101 r=20 fill-opacity="1.0" />
  <circle id="missile-303" cx=148 cy=108 r=20 fill-opacity="1.0" />
  <circle id="missile-304" cx=156 cy=128 r=20 fill-opacity="1.0" />
  <circle id="missile-305" cx=148 cy=148 r=20 fill-opacity="1.0" />
  <circle id="missile-306" cx=128 cy=155 r=20 fill-opacity="1.0" />
  <circle id="missile-307" cx=108 cy=148 r=20 fill-opacity="1.0" /> `;

  let a_missile = `
  <div class="show-column" style="z-index:933601" id="${missile_id}-div">
      <svg viewBox="0 0 1023 511" preserveAspectRatio="xMinYMin slice">
          <svg id="${missile_id}-x-y" x="333" y="128" width="256" height="256"  class="svg-box">
              <svg id="${missile_id}-scaled" style="transform: scale(0.73)">
                  ${all_lines}
                  ${all_rings}
                      ${outside_circles}
                      ${centers_outside}
                          ${middle_circles}
                          ${middle_centers}
                              ${inside_circles}
                              ${inside_centers}
              </svg>
          </svg>
      </svg>
  </div>`;
  return a_missile;
}

