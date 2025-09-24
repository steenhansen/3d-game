

document.getElementById('pylon-html').innerHTML = `
<div id="pylon-3a"></div>
<div id="pylon-3b"></div>
<div id="pylon-3c"></div>
<div id="pylon-2a"></div>
<div id="pylon-2b"></div>
<div id="pylon-1a"></div>


<div id="pylon-4-1"></div>
<div id="pylon-4-2"></div>
<div id="pylon-4-3"></div>
<div id="pylon-4-4"></div>
<div id="pylon-4-5"></div>
<div id="pylon-4-6"></div>
<div id="pylon-4-7"></div>
<div id="pylon-4-8"></div>
<div id="pylon-4-9"></div>

`;



function setPylons() {
  if (typeof TEST_NAME == "string" && TEST_NAME == "test_enemy") {
    return;
  }
  // pylonSet(pylon_3a, 'pylon-3a');
  // pylonSet(pylon_3b, 'pylon-3b');
  // pylonSet(pylon_3c, 'pylon-3c');

  // pylonSet(pylon_2a, 'pylon-2a');
  // pylonSet(pylon_2b, 'pylon-2b');

  pylonSet(pylon_1a, 'pylon-1a');

  // pylonSet(pylon_4_1, 'pylon-4-1');
  // pylonSet(pylon_4_2, 'pylon-4-2');
  // pylonSet(pylon_4_3, 'pylon-4-3');
  // pylonSet(pylon_4_4, 'pylon-4-4');
  // pylonSet(pylon_4_5, 'pylon-4-5');
  // pylonSet(pylon_4_6, 'pylon-4-6');
  // pylonSet(pylon_4_7, 'pylon-4-7');
  // pylonSet(pylon_4_8, 'pylon-4-8');
  // pylonSet(pylon_4_9, 'pylon-4-9');



}