function showMessage() {
  let name = document.getElementById("name");
  let message = document.getElementById("message");
  let suppName = document.getElementById("suppName");
  let number = document.getElementById("number");
  let suppMessage = document.getElementById("suppMessage");
  let amountSupp = document.getElementById("amountSupp");
  //let supporter_div = document.getElementById("supporter_div");
   if(name.value == "" || message.value == ""){
     document.getElementById("error").innerHTML = "Enter your name and message!";
   } else{
document.getElementById("supporter_div1").innerHTML += "<div class='supporter-div'" + "id='supporter_div'>" + " <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj_L4Np1RaQMWcafhGYjUcH6uH1UtYZpemA&usqp=CAU'" + "width='47px'" + "height='51px'>" + "<p id='suppName'>" + name.value + "</p></div>" + "<h4 id='suppMessage'>" + message.value + "</h4></div>";
     document.getElementById("error").innerHTML = " ";
   }
    
    
    
  //suppName.innerHTML = name.value;
 // suppMessage.innerHTML = message.value;
  if (name.value == " " || message.value == " ") {
    number.textContent--;
  } else {
    number.textContent++;
  }
  name.value = " ";
  message.value = " ";
}

function amount1(){
  let amount = document.getElementById("amount");
  let amoungt1 = document.getElementById("amount1");
  let amountSupp = document.getElementById("amountSupp");
  amountSupp.innerHTML = "₹60" + " " + "Support Us";
}

function amount3(){
  let amount = document.getElementById("amount");
  let amoungt3 = document.getElementById("amount3");
  let amountSupp = document.getElementById("amountSupp");
  amountSupp.innerHTML = "₹180" + " " + "Support Us";
}

function amount5(){
  let amount = document.getElementById("amount");
  let amoungt5 = document.getElementById("amount5");
  let amountSupp = document.getElementById("amountSupp");
  amountSupp.innerHTML = "₹300" + " " + "Support Us";
}

function amount10(){
  let amount = document.getElementById("amount");
  let amoungt10 = document.getElementById("amount10");
  let amountSupp = document.getElementById("amountSupp");
  amountSupp.innerHTML = "₹600" + " " + "Support Us";
}
