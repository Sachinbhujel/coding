function submit() {
  let emojis = document.querySelectorAll(".pic img");
  let selectedEmoji = Array.from(emojis).filter(emojid => emojid.classList.contains('selected'));
  //console.log(selectedEmoji);
  if(selectedEmoji.length > 0){
    document.getElementById("para2").style.display = "block";
    document.getElementById("para").style.display = "none";
  } else{
    alert("Please select an emoji before submitting!")
  }
}

function done() {
  alert("Exit from the Website!")
}


function selectEmoji(emoji){
  emoji.classList.toggle('selected');
}

