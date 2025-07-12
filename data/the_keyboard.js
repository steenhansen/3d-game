
function turnOnKeys() {
  document.addEventListener('keydown', function (event) {
    if (event.key == "ArrowUp") {
      the_key = MOVING_BACKWARDS;
    }
    else if (event.key == "ArrowRight") {
      the_key = MOVING_RIGHT;
    }
    else if (event.key == "ArrowDown") {
      the_key = MOVING_FORWARD;
    }
    else if (event.key == "ArrowLeft") {
      the_key = MOVING_LEFT;
    } else {
      the_key = MOVING_NOT;
    }
  });
  /////////////////////////


  // window.addEventListener(
  //   "keydown",
  //   (event) => {
  //     if (event.defaultPrevented) {
  //       return; // Do nothing if the event was already processed
  //     }

  //     switch (event.key) {
  //       case "ArrowDown":
  //         // Do something for "down arrow" key press.
  //         break;
  //       case "ArrowUp":
  //         // Do something for "up arrow" key press.
  //         break;
  //       case "ArrowLeft":
  //         // Do something for "left arrow" key press.
  //         break;
  //       case "ArrowRight":
  //         // Do something for "right arrow" key press.
  //         break;
  //       case "Enter":
  //         // Do something for "enter" or "return" key press.
  //         break;
  //       case " ":
  //         // Do something for "space" key press.
  //         break;
  //       case "Escape":
  //         // Do something for "esc" key press.
  //         break;
  //       default:
  //         return; // Quit when this doesn't handle the key event.
  //     }

  //     // Cancel the default action to avoid it being handled twice
  //     event.preventDefault();
  //   },
  //   true,
  // );

}