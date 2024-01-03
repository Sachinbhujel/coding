
document.getElementById("speak").addEventListener("click", () => {
  let textSpeech = document.getElementById("textarea").value;
  let voice = new SpeechSynthesisUtterance(textSpeech);
  window.speechSynthesis.speak(voice);
  if (window.speechSynthesis.paused === true) {
    window.speechSynthesis.resume();
  }
});

document.getElementById("pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});

