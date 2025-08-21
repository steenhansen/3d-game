
function isMobile() {

  //  console.log("111111111111", 'ontouchstart' in window || navigator.maxTouchPoints > 0);
  // console.log("222222222", !window.matchMedia('(hover: hover)').matches);
  // console.log("333333333", window.matchMedia("(pointer:coarse)").matches);

  // const on_touch = ('ontouchstart' in document.documentElement);

  const is_mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  //  console.log("is_mobile", is_mobile);
  if (!is_mobile) {
    //  console.log("is_mobile FFF");
    return false;
  }
  //console.log("is_mobile TTT");
  return true;
}

// window.addEventListener("load", function () {
//   // https://davidwalsh.name/hide-address-bar
//   setTimeout(function () {
//     // Hide the address bar!   
//     window.scrollTo(0, 1);
//   }, 0);
// });

//var touchDevice = ('ontouchstart' in document.documentElement);
//if (!touchDevice) {
const is_touch = isMobile();
//console.log("on_touch22", on_touch);
if (!is_touch) {
  var d1 = document.getElementById('desktop-dir');
  d1.innerHTML = `
 
        
  <div style="width:1024px">
        <div class="box" style="margin: 0 auto;">
            <div>&#x2196; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q or 7</div>
            <div style="text-align:center">&#x2191; <br> W or 8</div>
            <div style="text-align:right">&#x2197; <br> E or 9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

              <div style="line-height: 40px;">&#x2190;&nbsp;&nbsp;A or 4</div>
            <div style="text-align:center;">S or 5 <br>to Stop </div>
            <div style="text-align:right; line-height: 40px;">D or 6&nbsp;&nbsp;&#x2192;</div>


          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Z or 1<br>&#x2199; </div>
            <div style="text-align:center">X or 2<br>&#x2193; </div>
            <div style="text-align:right">C or 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br> &#x2198; </div>


               <div style="border-left: none; border-bottom: none; padding-right:1px;">&nbsp;</div>
            <div style=" text-align:center;">Space Bar is for Shoot</div>
            <div style="border-right: none; border-bottom: none"></div>
       </div>
</div>
        
        `;


}