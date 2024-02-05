document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("offer-popup").style.display = "block";
  }, 5000);

  document.getElementById("cancel-btn").addEventListener("click", function() {
    document.getElementById("offer-popup").style.display = "none";
  });
});
