function openE() {
  let openE = document.getElementById("openE");

  let closeE = document.getElementById("closeE");

  password.type = "text";

  openE.style.display = "none";

  closeE.style.display = "block";
}

function closeE() {
  let openE = document.getElementById("openE");

  let closeE = document.getElementById("closeE");

  password.type = "password";

  closeE.style.display = "none";

  openE.style.display = "block";
}

function submitForm() {
  let fullName = document.getElementById("fullName");

  let userName = document.getElementById("userName");

  let emailId = document.getElementById("emailId");

  let phoneNum = document.getElementById("phoneNum");

  let password = document.getElementById("password");

  let confirmPass = document.getElementById("confirmPass");

  if (
    fullName.value == "" ||
    userName.value == "" ||
    emailId.value == "" ||
    phoneNum.value == "" ||
    password.value == ""
  ) {
    alert("Enter your details!");
  } else {
    let form = document.getElementById("form");
    form.reset();
    document.getElementById("container").style.display = "none";

    document.getElementById("thank-you-container").style.display = "block";
  }
}

/*function submitForm(){
   document.getElementById("container").style.display = "none";

    document.getElementById("thank-you-container").style.display = "block"; 
}*/

function goBack() {
  let fullName = document.getElementById("fullName");

  let userName = document.getElementById("userName");

  let emailId = document.getElementById("emailId");

  let phoneNum = document.getElementById("phoneNum");

  let password = document.getElementById("password");

  document.getElementById("container").style.display = "block";

  document.getElementById("thank-you-container").style.display = "none";

  fullName.value == " ";
  userName.value == " ";
  emailId.value == " ";
  phoneNum.value == "";
  password.value == "";
}
