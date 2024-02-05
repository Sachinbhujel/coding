document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (fullname && email && password) {
    var userData = {
      fullname: fullname,
      email: email,
      password: password
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    
    alert("Thank you for registering, " + fullname + "! Your data has been saved.");
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
