/**
* STATIC VARIABLES - Don't change
*/
// Create some variables to store base game values/data
var choices = ['r', 'p', 's'];
var winConditions = ['rs', 'sp', 'pr']; // user choice first and comp choice last
var wins = 0, losses = 0, ties = 0;


while (true) {
  var userInput = prompt('Enter "r", "p", or "s"');
  var compChoice = choices[Math.floor(Math.random() * choices.length)];
  var result = userInput + compChoice; // 'rs', 'ps'

  alert(`The computer chose ${compChoice}`);

  if (userInput === compChoice) {
    alert('You tied.');
    ties++;
  } else if (winConditions.includes(result)) {
    alert('You win!');
    wins++;
  } else {
    alert('You lost...');
    losses++;
  }

  // alert('Wins: ', wins, 'Losses: ', losses, 'Ties: ', ties);
  alert(`Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);

  var continuePlaying = confirm('Would you like to play again?');

  if (continuePlaying === false) {
    document.body.innerText = 'Thanks for playing!';
    break;
  }
}