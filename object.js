/* global $ global colors */

$(document).ready(function() {
  
  var randomNum, randomQuo, randomAuth;
  getQuote(); 
  
  function getQuote(){
  
    var quotes = [
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live", 
      "First, solve the problem. Then, write the code.",
      "Java is to JavaScript what Car is to Carpet.",
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "Never trust a computer you can’t throw out a window.",
      "One man’s constant is another man’s variable.",
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
      "Programming languages, like pizzas, come in only two sizes: too big and too small.",
      "The best way to get a project done faster is to start sooner.",
      "A person who never made a mistake never tried anything new.",
      "Talk is cheap, show me the code!",
      "The Internet? Is that thing still around?",
      "You are what you share.",
      "Focus on WHY instead of WHAT in your code will make you a better developer.",
      "Code is like humor. When you have to explain it, its bad.",
      "Code never lies, comments sometimes do."
      ]; 
    
    var author = [
      "- Martin Golding", 
      "- John Johnson",
      "- Chris Heilmann",
      "- Bill Gates", 
      "- Steve Wozniak",
      "- Alan J. Perlis",
      "- Dan Salomon", 
      "- Richard Pattis",
      "- Jim Highsmith",
      "- Albert Einstein", 
      "- Linus Torvalds",
      "- Homer Simpson",
      "- Charles Leadbeater",
      "- Jordi Boggiano",
      "- Cory House",
      "- Ron Jeffries"
      ];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuo = quotes[randomNum];
    randomAuth = author[randomNum];
    
    $("#quote").text(randomQuo);
    $("#author").text(randomAuth);
  }
 
  $("#newQuote").on("click", function(event){
    getQuote();
    let randomColor = Math.floor(Math.random() * colors.length);
    $('body').css("background", colors[randomColor].base);
  });
  

const colors = [
  {base:'#f71902'}, 
  {base:'#f78c01'}, 
  {base:"#f7f701"}, 
  {base:"#94f701"}, 
  {base:"#01f7b5"},  
  {base:"#01eaf7"}, 
  {base:"#0136f7"}, 
  {base:"#8401f7"},
  {base:"#f201f7"},
  {base:"#f70101"},
  {base:"#b22727"},
  {base:"#27b271"},
  {base:"#276ab2"},
  {base:"#5e27b2"},
  {base:"#b22793"},
  {base:"#a32d2d"}
  
];

  $('.share-quote').on("click", function(event){    
    window.open("https://twitter.com/intent/tweet?text="+randomQuo + " " + randomAuth); 
  });
});