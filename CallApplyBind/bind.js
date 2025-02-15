//in bind - we make copy of function and invoked later ,

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