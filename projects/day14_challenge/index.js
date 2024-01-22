var next = 1;
showSlide(next);

function backOrNext(n) {
  showSlide(next += n); // next = next + n
}

function showSlide(n) {
  var box = document.getElementsByClassName("box");

  if (n > box.length) {
    next = 1;
  }
  if (n < 1) {
    next = box.length;
  }

  for (let i = 0; i < box.length; i++) {
    box[i].style.display = "none";
  }
  box[next - 1].style.display = "block";
}

/*function surprise() {
  let box = document.getElementsByClassName("box");
  //let box1 = document.getElementById("box1");
  //let box2 = document.getElementById("box2");
  //let box3 = document.getElementById("box3");
  for (let i = 0; i < box.length; i++) {
    box[i].style.display = "none";
  }
}
*/
