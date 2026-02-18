


console.log(1 + "1");
console.log(true + 1);
console.log("1" + "1");


console.log(1 + true + "1");
console.log(true + 1 + "1");
console.log("1" + "1" + 22) ;



//this is called function hoisting
// function hoisting is a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can call a function before it is declared in the code.
// In the example below, the function `sum` is called before it is declared, but it still works because of hoisting.
// However, this only works with function declarations, not with function expressions or arrow functions.

//hoisting
sum(2, 5);
function sum(a,b){
         add = a+b;
         console.log(add);
}

//actually behind the scene this function looks
//function sum(a,b){
//          add = a+b;
//          console.log(add);
//}
//sum(2, 5);


//function expression
// console.log(mul(3, 4));not work with fn expression
var mul = function (a, b) {
          mul = a * b;
          return mul;
}
console.log(mul(3, 4)); //this is a simple fn calling work
 
//arrow function

let subs = (a,b) => {
          minus = a - b;
          console.log(minus);
}
subs(5, 2); //this is a simple fn calling work


//we try to hoisting with arrow function give not found
addition(5, 2);
let additition = (a, b) => {
  minus = a - b;
  console.log(minus);
};