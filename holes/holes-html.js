
document.getElementById('hole-html').innerHTML = `
  <div id="hole-1"></div>
  <div id="hole-2"></div>
  <div id="hole-3"></div>
  <div id="hole-4"></div>
  <div id="hole-5"></div>
  <div id="hole-6"></div>
`;

function drawHoles(the_holes) {
  number_pylons = the_holes.length;
  for (let hole_index = 0; hole_index < number_pylons; hole_index++) {
    a_hole = the_holes[hole_index];
    holeSet(a_hole);
  }
  return the_holes;
}


