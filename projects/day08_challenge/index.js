function show(e){
  let invisible_content = e.parentElement.children[3];
  invisible_content.style.display = "block";
  let divHide = e.parentElement.children[2];
  divHide.style.display = "none";
  let hideBtn = e;
  hideBtn.style.display = "none";
  let showBtn = e.parentElement.children[5];
  showBtn.style.display = "block";
}

function closeBtn(e){
  let invisible_content = e.parentElement.children[3];
  invisible_content.style.display = "none";
  let divHide = e.parentElement.children[2];
  divHide.style.display = "block";
  let hideBtn = e;
  hideBtn.style.display = "none";
  let shownBtn = e.parentElement.children[4];
  shownBtn.style.display = "block";
}
