function hideSideBar(){
    let middleleft = document.getElementById("middle-left");
    if(middleleft.style.display == "block"){
        middleleft.style.display = "none";
    } else{
        middleleft.style.display = "block";
    }
}

function changeImg(link){
    let imgChange = document.getElementById("imgChange");
    imgChange.src = link;
}
