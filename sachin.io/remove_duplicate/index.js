/*let a = ["sa", "sb", "sc", "sa",];
let b = ["sb", "sc", "sa"];

let both = [...new Set([...a, ...b])];
console.log(both);*/

function start(){
  let main = document.getElementById("main");
  main.style.display = "none";
  document.getElementById("input").style.display = "flex";  
}

let a = [];
function done(){
  let input = document.getElementById("take");
  let answer = document.getElementById("answer");
  a.push(take.value);
  let match = [... new Set(a)];
  answer.innerHTML = match;
}

/*let num = [11, 2, 23];
num.push(6);
console.log(num);*/ 
function del(){
  document.getElementById("take").value = " ";
  //answer.innerHTML = " ";  
}
