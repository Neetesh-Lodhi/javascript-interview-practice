const userDetails1 = {
  name: "Neetesh",
  age: 20,
  Role: "Backend",
};

let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

const userDetails2 = {
  name: "Pradeep",
  age: 22,
  Role: "Doctor",
};

//function borrowing
printDetails.call(userDetails1,"Bhopal" ,"India"); //call - //we pass argument as a single element in call
printDetails.apply(userDetails2,[ "Sidney", "Australia"]); //apply - //in apply this value can pass as a array this is the main difference between call and apply
