function ride(){
    document.getElementById("destiny1").style.display = "block";
    document.getElementById("destiny2").style.display = "none";
    document.getElementById("destiny3").style.display = "none";
}

function driver(){
    document.getElementById("destiny2").style.display = "block";
    document.getElementById("destiny1").style.display = "none";
    document.getElementById("destiny3").style.display = "none";
}

function carkey(){
    document.getElementById("destiny3").style.display = "block";
    document.getElementById("destiny2").style.display = "none";
    document.getElementById("destiny1").style.display = "none";
}