//in bind - we make copy of function and invoked later ,
//“Unlike call and apply, which invoke the function immediately, 
// bind returns a new function that can be called later with the bound context.”
//“bind() is a method in JavaScript that creates a new function with a specific this context and optional pre-set arguments.
// Unlike call or apply, it does not execute immediately.”
//It does not call the function immediately.
//Returns a new function.

const userDetails1 = {
  name: "Neetesh",
  age: 20,
  Role: "Backend",
};

let printDetails = function (state, country) { //we can write this function inside into object
  console.log(this.name + " " + state + " " + country);
};


//function borrowing
let newFun = printDetails.bind(userDetails1, "Bhopal", "India"); //first we make copy
newFun();  //after making copy - invoked later