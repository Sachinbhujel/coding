function next(){
    document.getElementById("next").style.display = "none"
    document.getElementById("back").style.display = "block"
}

function back(){
    document.getElementById("next").style.display = "block"
    document.getElementById("back").style.display = "none";
}

function log_off(){
    alert("Are you sure you want to exit from this account?");
}
