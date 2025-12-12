let local_sky_x = 0;
let local_sky_y = 0;

function moveSky(travel_speed, sky_direction) {
  const elem = document.getElementById("the-sky");
  if (sky_direction === "right") {
    local_sky_x -= travel_speed / 2;
    if (local_sky_x <= 0) {
      local_sky_x = 256;
    }
  } else if (sky_direction === "left") {
    local_sky_x += travel_speed / 2;
    if (local_sky_x >= 256) {
      local_sky_x = 0;
    }
  } else if (sky_direction === "forward") {
    local_sky_y += travel_speed / 2;
    if (local_sky_y >= 256) {
      local_sky_y = 0;
    }
  } else if (sky_direction === "backward") {
    local_sky_y -= travel_speed / 2;
    if (local_sky_y <= 0) {
      local_sky_y = 256;
    }
  }
  elem.style.transform = `perspective(1536px) rotateX(-85deg) translateX(${local_sky_x}px) translateY(${local_sky_y}px) `;
}
