function submitBtn(){
  let nameInput = document.getElementById("nameInput");
  let sendBox = document.getElementById("sendBox");
  if (nameInput.value == ""){
    alert("You can't submit empty!")
  } else{
    sendBox.innerHTML += `<div class='lower' id="lower"><div class='box'><div class='box_top'><div></div><h4>HELLO</h4><span class='material-symbols-outlined' onclick="closeTag(this)">close</span></div><!--<div class='box_middle'><p>from sachin</p></div>--><div class='box_lower'><strong id='answer'><i>${nameInput.value}</i></strong></div></div></div>`;
    nameInput.value = "";
  }
}

function closeTag(e){
  //let hide = document.getElementById("lower");
  e.parentElement.parentElement.parentElement.remove();
}
