

let guesses= [];


 let randomNumber=getRandomNumber();
 


window.onload = function() {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  
}


function playGame(){
  let guessNumber=document.getElementById("number-guess").value;


 displayResult(guessNumber);
 saveGuessHistory(guessNumber);
 displayHistory();
};


function displayResult(guessNumber){
  if(guessNumber>randomNumber){
    showNumberAbove();
  }else if(randomNumber>guessNumber){
    showNumberBelow();
  }else{
    showYouWon();
  }
};




function initGame(){

guessNumber="";
randomNumber=getRandomNumber();
document.getElementById("result").innerHTML = "";
guesses= [];
displayHistory();
}

/**
* Reset the HTML content for guess history
*/
function resetResultContent(){
document.getElementById("result").innerHTML = "";
}



function getRandomNumber(){

let randomNumber=Math.floor(Math.random()*100)+1;
return randomNumber;
}





function saveGuessHistory(guess) {

guesses.push(guess);
console.log(guesses);
}

/**
* Display guess history to user
*/
function displayHistory() {
  
let list = "<ul class='list-group'>";
// *CODE GOES BELOW HERE *
for (let index=guesses.length-1; index >=0; index--) {
  
  list+= (`<li class='list-group-item'>You guessed ${guesses[index]} </li>`);
}

/*
while (index>=0){
  list+= (`<li class='list-group-item'>You guessed ${guesses[index]} </li>`);
  index--;
}
*/
list += '</ul>'
document.getElementById("history").innerHTML = list;
}



/**
* Retrieve the dialog based on if the guess is wrong or correct 
*/
function getDialog(dialogType, text){
let dialog;
switch(dialogType){
  case "warning":
    dialog = "<div class='alert alert-warning' role='alert'>"
    break;
  case "won":
    dialog = "<div class='alert alert-success' role='alert'>"
    break;
}
dialog += text;
dialog += "</div>"
return dialog;
}

function showYouWon(){
const text = "Awesome job, you got it!"
/**
 * Retrieve the dialog using the getDialog() function
 * and save it to variable called dialog
*/
let dialog=getDialog("won",text);

document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
const text = "Your guess is too high!"
/**
 * Retrieve the dialog using the getDialog() function
 * and save it to variable called dialog

 */

let dialog=getDialog("warning",text);

document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
const text = "Your guess is too low!"
/**
 * Retrieve the dialog using the getDialog() function
 * and save it to variable called dialog
 
 */

let dialog=getDialog("warning",text);

document.getElementById("result").innerHTML = dialog;
}
