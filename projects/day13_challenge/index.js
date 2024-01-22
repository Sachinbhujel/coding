function showShoes(){
  document.getElementById("img2").style.display = "flex";
  document.getElementById("img1").style.display = "none";
}

function hideShoes(){
  document.getElementById("img1").style.display = "flex";
  document.getElementById("img2").style.display = "none";
}

function showCart(){
  let mainDiv = document.getElementById("mainDiv");
  let showCart_div = document.getElementById("showCart_div");
 showCart_div.style.display = "block";
 mainDiv.style.display = "none";
}

function exitBtn(){
  let mainDiv = document.getElementById("mainDiv");
  let showCart_div = document.getElementById("showCart_div");
 showCart_div.style.display = "none";
 mainDiv.style.display = "block";
}

window.addEventListener("orientationchange", function() {
  let mainDiv = document.getElementById("mainDiv");
  mainDiv.style.display = "none";
});
