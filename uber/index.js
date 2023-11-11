function ride(){
    document.getElementById("filter1").style.display = "block";
    document.getElementById("filter2").style.display = "none";
    document.getElementById("filter3").style.display = "none";
}

function drive(){
    document.getElementById("filter2").style.display = "block";
    document.getElementById("filter1").style.display = "none";
    document.getElementById("filter3").style.display = "none";
}

function carKey(){
    document.getElementById("filter3").style.display = "block";
    document.getElementById("filter2").style.display = "none";
    document.getElementById("filter1").style.display = "none";
}