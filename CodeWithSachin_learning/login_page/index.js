document.getElementById('loginForm').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value.toUpperCase();  event.preventDefault();
  var password = document.getElementById('password').value;
  
  if (username && password) {

    document.getElementById("loginForm").style.display = "none";
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('confirmation').innerHTML += "<p id='pass'><b>Email:</b> " + username + "</p><p id='pass'><b>Password:</b> " + password + "</p>" + "<button id=" + "backBtn" + ">Back" + "</button>";
  } else {
    alert("Please enter both username and password.");
  }
});
