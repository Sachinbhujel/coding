function allImg(){
  for(i=0;i<document.getElementsByClassName("all").length;i++) {
   document.getElementsByClassName("all")[i].style.display = "block";
 }
}


function logoImg(){
  for(i=0;i<document.getElementsByClassName("all").length;i++) {
   document.getElementsByClassName("all")[i].style.display = "none";
 }
  
  for(i=0;i<document.getElementsByClassName("logo").length;i++) {
   document.getElementsByClassName("logo")[i].style.display = "block";
 }
}


function mobileImg(){
  for(i=0;i<document.getElementsByClassName("all").length;i++) {
   document.getElementsByClassName("all")[i].style.display = "none";
 }
  
  for(i=0;i<document.getElementsByClassName("mobile").length;i++) {
   document.getElementsByClassName("mobile")[i].style.display = "block";
 }
}


function webImg(){
  for(i=0;i<document.getElementsByClassName("all").length;i++) {
   document.getElementsByClassName("all")[i].style.display = "none";
 }
  
  for(i=0;i<document.getElementsByClassName("web").length;i++) {
   document.getElementsByClassName("web")[i].style.display = "block";
 }
}
