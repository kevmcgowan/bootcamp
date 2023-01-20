// TODO: Import `maths.js`
const math = require('./maths')

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// var arguments = process.argv ;
  
// console.log(arguments) ;


// var arguments = process.argv
  
// function difference(a, b) {
  
//     // To extract number from string
//     return parseInt(a)+parseInt(b) 
// }
  
// var sum = difference(arguments[2], arguments[3])
  
// console.log("Addition of 2, 3 is ", sum)


// var arguments = process.argv
  
// function difference(a, b) {
  
//     // To extract number from string
//     return parseInt(a)-parseInt(b) 
// }
  
// var sum = difference(arguments[2], arguments[3])
  
// console.log("Difference of 3 - 4 is ", sum)

var arguments = process.argv
  
function quotient(a, b) {
  
    // To extract number from string
    return parseInt(a)/parseInt(b) 
}
  
var sum = quotient(arguments[2], arguments[3])
  
console.log("Quotient of 3 / 4 is ", sum)

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
