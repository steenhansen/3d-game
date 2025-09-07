
function isMobile() {
  const is_mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (is_mobile) {
    return true;
  }
  return false;
}

const is_touch = isMobile();

if (!is_touch) {
  var d1 = document.getElementById('desktop-dir');
  d1.innerHTML = `
 
        
  <div>
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