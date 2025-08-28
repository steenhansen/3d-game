

// <div id="the-input" class="input-box"></div>
document.getElementById('touch-boxes').innerHTML = `
  <div id="input-nw" class="input-box"></div>
    <div id="input-n" class="input-box"></div>
    <div id="input-ne" class="input-box"></div>

    <div id="input-w" class="input-box"></div>
   <div id="the-input" class="input-box"></div>
    <div id="input-e" class="input-box"></div>

    <div id="input-sw" class="input-box"></div>
    <div id="input-s" class="input-box"></div>
    <div id="input-se" class="input-box"></div>
`;

document.getElementById('touch-arrows').innerHTML = `
 <svg id="arrow-nw" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="arrow-n" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="arrow-ne" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="arrow-w" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="blank-middle-arrow">

    </svg>
    <svg id="arrow-e" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="arrow-sw" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="arrow-s" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
    <svg id="arrow-se" class="an-arrow">
      <use href="#the-arrow" />
    </svg>
`;
