

let sky_x = 0;
let sky_y = 0;


function moveSky(travel_speed, sky_direction) {
  const elem = document.getElementById("the-sky");
  if (sky_direction == 'right') {
    sky_x -= travel_speed / 2;
    if (sky_x <= 0) sky_x = 256;
  } else if (sky_direction == 'left') {
    sky_x += travel_speed / 2;
    if (sky_x >= 256) sky_x = 0;
  } else if (sky_direction == 'forward') {
    sky_y += travel_speed / 2;
    if (sky_y >= 256) sky_y = 0;
  } else if (sky_direction == 'backward') {
    sky_y -= travel_speed / 2;
    if (sky_y <= 0) sky_y = 256;
  } else {
  }
  elem.style.transform = `perspective(1536px) rotateX(-85deg) translateX(${sky_x}px) translateY(${sky_y}px) `;
}
