function showButtonInfo(){
  document.getElementById("buttonInfo").style.display = "flex";
  //document.getElementById("buttonInfo").style.width = "45%";
  document.getElementById("okInfo").style.display = "none";
 
}

function hide(){
  document.getElementById("buttonInfo").style.display = "none";
}

function continueWeb(){
  document.getElementById("okInfo").style.display = "flex";
  document.getElementById("buttonInfo").style.display = "none";
  //document.getElementById("okInfo").style.width = "50%";
  //document.getElementById("okInfo").style.justify-content = "80%"; 
}

function hides(){
  document.getElementById("okInfo").style.display = "none";
  answer.innerHTML = "";
}

function mainWebsite(){
  document.getElementById("mainSite").style.display = "block";
  document.getElementById("okInfo").style.display = "none";
}



let answer = document.getElementById("answer");

function buttonClick(){
  answer.HTML = "";
  let question = prompt("Ask me anything?")
  if(question == "Hi" || question == "hi" || question == "Hello" || question == "hello" || question == "Hola" || question == "hii" || question == "Hii"){
    answer.innerHTML = "Hello, How are you?";
  } else if(question == "All good" || question == "all good" || question == "Fine" || question == "I am good" || question == "i am fine" || question == "I am fine" || question == "fine" || question == "i am good" || question == "I am always good" || question == "Always good" || question == "good" || question == "Good"){
    answer.innerHTML = "Oh that's great! How can i assist you today?";
  } else if(question == "Who is my brother?" || question == "Who is my brother" || question == "What's my brother name?" || question == "what's my brother name?" || question == "who is my brother" || question == "who is my brother?"){
    answer.innerHTML = "Your brother name is Saajan Bhujel!";
  } else if(question == "Your favourite color?" || question == "Your favourite color" || question == "your favourite color?" || question == "your favourite color" || question == "What is your favourite color?" || question == "what is your favourite color?" || question == "what is your favourite color" || question == "What is your favourite color"){
    answer.innerHTML = "Well, Mine is blue! And yours?";
  } else if(question == "What is your name?" || question == "What is your name" || question == "what is your name?" || question == "what is your name" || question == "Your name?" || question == "Your name" || question == "your name" || question == "your name?"){
    answer.innerHTML = "My name is Chiki!";
  }
  
  else{
    answer.innerHTML = "Sorry, I am in beta version?";
  }
}


function checkWindowWidth() {
      // Get the current window width
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // Check if the window width is less than 400 pixels
      if (windowWidth < 400) {
        document.getElementById("mainSite").style.display = "none";
        document.getElementById("pixels").style.display = "flex";
      } else {
        document.getElementById("mainSite").style.display = "block";
        document.getElementById("pixels").style.display = "none";
      }
    }

    // Attach the function to the window resize event
    window.addEventListener('resize', checkWindowWidth);

    // Check the window width initially
    checkWindowWidth();

