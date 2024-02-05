function btnClick() {
  let email_div = document.getElementById("email_div");
  if (email_div.value == "") {
    alert("Please enter Your Email Id!!");
  } else {
    document.getElementById("requestForm").style.display = "flex";
    document.getElementById("btn_click").style.display = "none";
    document.getElementById("btn_2_click").style.display = "block";
  }
}

function btn_2_Click() {
  document.getElementById("request_para").style.display = "none";
  document.getElementById("request_title").style.display = "none";
  document.getElementById("input_div").style.display = "none";
  document.getElementById("requestForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "flex";
}
