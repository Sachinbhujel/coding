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
