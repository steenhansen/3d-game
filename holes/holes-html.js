
document.getElementById('hole-html').innerHTML = `
  <div id="hole-1"></div>
  <div id="hole-2"></div>
  <div id="hole-3"></div>
  <div id="hole-4"></div>
  <div id="hole-5"></div>
  <div id="hole-6"></div>
`;

function drawHoles(the_holes) {
  changed_pylons = [];
  number_pylons = the_holes.length;
  for (let pylon_index = 0; pylon_index < number_pylons; pylon_index++) {
    a_pylon = the_holes[pylon_index];
    holeSet(a_pylon);
    if (a_pylon.m_hit_flash > 0) {
      a_pylon.m_hit_flash--;
      a_pylon.do_flash = true;
    } else {
      a_pylon.do_flash = false;
    }
    changed_pylons[pylon_index] = a_pylon;
  }
  return changed_pylons;
}


