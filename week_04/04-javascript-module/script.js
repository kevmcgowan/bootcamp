
// alert('Hey, this is not cool')

// var response = confirm ('is this hard?');
// prompt('Please Enter Your Name.');
// var response = prompt('Please Enter Your Name.');
// var color = prompt('Give me your favourite colour')
// define a random number between 1 & 5

for (; true;) {
    // Define a random number between 1 and 5
    var num = Math.floor(Math.random() * 5) + 1;
  
    // Prompt the user to enter a number between 1 and 5
    var userNumber = prompt('Enter a number between 1 and 5'); // string
  
    // Check if the random number matches the user's number
    if (userNumber == num) {
      // If they guess it right alert "Well done!" and change the background color to tomato
      alert('Well done!');
    } else {
      // If they don't guess it correctly, alert "try again" and print a big "L"
      alert('Try again....');
    }
  
    var keepPlaying = confirm('Would you like to play again?');
  
    if (!keepPlaying) {
      document.body.innerText = 'Thanks for playing!';
      break;
    }
  }

   



// console.log(response);