let copyText = document.getElementById("copyText");
let pasteText = document.getElementById("pasteText");
let btn = document.getElementById("btn");
let copied = document.querySelector(".copied");
btn.addEventListener('click', function(){
  copyText.select();

  if(document.execCommand("copy")){
    pasteText.focus();
    copied.classList.add("show");
    setTimeout(function(){
      copied.classList.remove("show");
    }, 600);
  }else{
    alert("Type something!!");
  }
});
