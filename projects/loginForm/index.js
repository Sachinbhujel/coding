function show() {
  let password = document.getElementById("password");
  //let data = password.value;
  password.type = "text";
  document.getElementById("show").style.display = "none";
  document.getElementById("hide").style.display = "block";
  //password.value = data;
}

function hide() {
  let hidden = document.getElementById("hide");
  password.type = "password";
  document.getElementById("show").style.display = "block";
  document.getElementById("hide").style.display = "none";
}

function logIn() {
  let email = document.getElementById("email");
  if (email.value == "" || password.value == "") {
    document.getElementById("warning").innerHTML = "Fill out this field";
  } else{
    alert("Your password is saved in our server!");
  }
}
