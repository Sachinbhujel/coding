let taskbar = document.getElementsByClassName("taskBar")[0];
let startMenu = document.getElementsByClassName("startmenu")[0];


function allApp(){
  if(startMenu.style.bottom == "60px"){
    startMenu.style.bottom = "-655px"
    startMenu.style.display = "block"
  } else{
    startMenu.style.bottom = "60px"
  }
}
