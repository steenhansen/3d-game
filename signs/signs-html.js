document.getElementById("signs-area").innerHTML = `
<div id="sign-exit"></div>


<div id="sign-00"></div>
<div id="sign-01"></div>
<div id="sign-02"></div>
<div id="sign-03"></div>
<div id="sign-04"></div>
<div id="sign-05"></div>
<div id="sign-06"></div>
<div id="sign-07"></div>
<div id="sign-08"></div>
<div id="sign-09"></div>


  
 `;

function deleteStartLetters(g_signs, milli_wait) {
  function hideStartLetters() {
    const number_signs = g_signs.length;
    for (let sign_index = 0; sign_index < number_signs; sign_index++) {
      let a_sign = g_signs[sign_index];
      if (a_sign.s_sign_name !== "sign-exit") {
        a_sign.m_sign_text_col = "none";
      }
    }
  }

  setTimeout(hideStartLetters, milli_wait);
}
