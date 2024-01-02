function checkName() {
  let bill = document.getElementById("bill").value;
  let perc = document.getElementById("percentage").value;
  let tipPercent = (bill * perc) / 100;
  document.getElementById("personName").innerHTML =
    "Your tip amount is " + "₹" + tipPercent;
  bill = " ";

  document.getElementById("container").style.display = "none";
  document.getElementById("notMain").style.display = "block";
}

function back() {
  let bill = document.getElementById("bill");
  let perc = document.getElementById("percentage");
  document.getElementById("container").style.display = "flex";
  document.getElementById("notMain").style.display = "none";
  bill.value = " ";
  perc.value = " ";
}
