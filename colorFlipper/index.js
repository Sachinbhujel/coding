var color = ["red", "blue", "green", "coral", "pink", "purple"]
var btn = document.getElementById("btn");
var colors = document.getElementsByClassName("colors");


function changeColor(){
    var randomNumber = randomColor();console.log(randomNumber);
    document.body.style.background = color[randomNumber];
    colors.innerHTML = color[number];
}

function randomColor(){
    return Math.floor(Math.random() * color.length);
}