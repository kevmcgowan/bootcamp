// Write Your Code Below

// //parameters are the refernces to the args you make
// function beCool (str, num) {
//     console.log(str);
// }
// //you pass args to a function
// beCool('hey, this is cool!');
//declaration


//expression
var subtract = function(x, y){
    var diff = x - y;
    console.log(diff);
}
subtract(15, 10);

function subtract(num1, num2) {
    console.log(num1 - num2);
}
subtract(20,10);

var num1 = 15;
function square() {
    console.log(num1 * num1);
}
square();

//Method
var mathTools = {
    subtract: function (x, y) {
        var diff = x - y;
        console.log(diff);
    },
    add: function add(x, y) {
        var sum = x + y;
        console.log(sum);
    }
}

mathTools.subtract(15, 10);
mathTools.add (1,2);