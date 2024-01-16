let img_show_div = document.getElementById("img_show_div");
let img = document.getElementById("img");

function imgs(link){
  img_show_div.style.display = "flex";
  img.src = link;
  document.body.style.background = "grey";
}

function close_img(){
  let img_show_div = document.getElementById("img_show_div");
    img_show_div.style.display = "none";
    document.body.style.background = "#E7ECEF";
}
