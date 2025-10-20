
document.getElementById('hole-html').innerHTML = `
  <div id="hole-1"></div>
  <div id="hole-2"></div>
  <div id="hole-3"></div>
  <div id="hole-4"></div>
  <div id="hole-5"></div>
  <div id="hole-6"></div>
  <div id="hole-7"></div>
  <div id="hole-8"></div>
  <div id="hole-9"></div>
  <div id="hole-10"></div>

  <div id="hole-11"></div>
  <div id="hole-12"></div>
  <div id="hole-13"></div>
  <div id="hole-14"></div>
  <div id="hole-15"></div>
  <div id="hole-16"></div>
  <div id="hole-17"></div>
  <div id="hole-18"></div>
  <div id="hole-19"></div>

  `;

function drawHoles(the_holes, the_player) {
  number_pylons = the_holes.length;
  for (let hole_index = 0; hole_index < number_pylons; hole_index++) {
    a_hole = the_holes[hole_index];
    holeSet(a_hole, the_player);
  }
  return the_holes;
}


