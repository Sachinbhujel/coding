function submitBtn() {
  let name = document.getElementById("name");

  if (name.value == "") {
    alert("Type something!!");
  } else {
    function generate(digits) {
      let answer = document.getElementById("answer");
      let otp = "";
      for (let i = 0; i <= digits; i++) {
        otp += Math.floor(Math.random() * 10);
        document.querySelector(".firstAns").style.display = "none";
      }
      //console.log(otp);
      //answer.innerHTML += name.value.toUpperCase() + "#" + otp;
      document.getElementById(
        "sendHere"
      ).innerHTML += `<div class="lower"><h3 id="answer">${name.value.toUpperCase()}#${otp}</h3><span class="material-symbols-outlined closeBtn" onclick="closed(this)">close</span></div>`;
    }
    generate(4);
    name.value = "";
  }
}

function closed(e) {
  e.parentElement.remove();
}
