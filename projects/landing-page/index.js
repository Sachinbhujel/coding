function openSideNav(){
  let sidenavBar = document.getElementById("sidenavBar");
  let container = document.getElementById("container");
  container.style.display = "none";
  document.getElementById("sidenavBar").style.display = "flex";
  //document.getElementById("sidenavBar").style.width = "100%";
  document.getElementById("open").style.display = "none";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  /*if(sidenavBar.style.display == "none"){
    sidenavBar.style.display = "flex";
    document.getElementById("open").style.display = "none";
  } else{
    sidenavBar.style.display = "none";
  }*/
}

function closeSideNav(){
  let container = document.getElementById("container");
  container.style.display = "block";
  document.getElementById("sidenavBar").style.display = "none";
  document.getElementById("open").style.display = "flex";
  document.body.style.backgroundColor = "white";
}
