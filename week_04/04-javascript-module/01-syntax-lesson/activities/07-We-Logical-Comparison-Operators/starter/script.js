var a = "50";
var b = 50;
var c = 100;
var d = c % b;2
var e = c / 2;0

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a === b);
//false
console.log(b !== e);
//false
console.log(c < b);
//false
console.log(d > 0);
//false

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
//false this will only evaluate to true if both expressions are true, otherwise it will be false.
console.log(!expression1 || expression2);
//false 

var myExp = 50 > 100 && 30 < 40;
