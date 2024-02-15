function generateBtn(){
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");
  let quotes = [
   '"Happiness is holding someone in your arms and knowing you hold the whole world."',
    '"The problem with people is they forget that most of the time its the small things that count."',
    '"Being happy is not having everything in your life be perfect."',
    '"Nothing is impossible, the word itself says I am possible."',
    '"Friends are the family we choose."',
    '"Try to be a rainbow in someone else’s cloud."',
    '"Kindness is one thing you can’t give away. It always comes back."',
    '"Sometimes, when things are falling apart, they may actually be falling into place."',
    '"Happiness is not by chance but by choice."',
    '"Positive anything is better than negative nothing."',
    '"Each day comes bearing its gifts. Untie the ribbon.” — Ann Ruth Schabacker"',
    '"Happiness is not something ready-made. It comes from your own actions."',
    '"Some cause happiness wherever they go; others whenever they go."'
  ]
  let authorName = [
    '"Michael Rana"','"Stefen Robot"','"Misty Vaulei"','"James Bond"', '"Daniel Entin"', '"Pankit Uslei"', '"Lucille Ball"', '"Mary Stuart"', '"Franklin D. Roosevelt"','"L.M. Montgomery"'
  ]
  
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[randomIndex];
  let nameIndex = Math.floor(Math.random() * authorName.length);
  author.innerHTML = authorName[nameIndex];
}
