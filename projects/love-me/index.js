//let buttonHeight = 50;
//let buttonWeight = 150;
 
const b = document.querySelector("button.button--no")
b.addEventListener("mouseover", hoverMouse)

function hoverMouse(){
  const w = Math.floor(Math.random() * 46) + 1;
  const h = Math.floor(Math.random() * 80) + 1;
  console.log(w);
  console.log(h);
  
  b.style.left = w+"%";
  b.style.top = h+"vh";
}

function yes(){
  let answer = document.getElementById("answer");
  answer.innerHTML = "I LOVE YOU TOO!!"
}

function no(){
  let answer = document.getElementById("answer");
  answer.innerHTML = "BUT, I STILL LOVE YOU!!"
}
