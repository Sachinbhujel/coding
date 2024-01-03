var colors = ["red", "purple", "coral", "lightgreen", "#606C38", "#FEFAE0", "#DDA15E", "#CDB4DB", "#FFAFCC", "#A2D2FF", "#023047", "#FFB703", "#EDEDE9", "#E3D5CA", "#023E8A", "#48CAE4", "#EDF2F4", "#3A0CA3", "#8C8071", "cyan", "brown", "#6D597A", "#89FC00", "#008BF8", "#3DCCC7", "#F59CA9", "#A03E99", "#02C39A", "#2E0219", "#97EFE9", "#EDF2F4", "#FF499E", "#372B2B"]
var btn = document.getElementById('btn');
var color = document.querySelector(".color");

btn.addEventListener("click", function(){
  var randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber]; 
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
