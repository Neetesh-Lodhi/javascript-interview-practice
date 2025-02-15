const userDetails = {
          name: "Neetesh",
          age: 20,
          Role: "Backend",
          
          printDetails: function () {
                    console.log(this)
          }
}

// userDetails.printDetails()


const userDetails2 = {
          name: "Pradeep",
          age: 22,
          Role: "Doctor",
          
}
// userDetails.printDetails.call(userDetails2)



const userDetails3 = {
  name: "Neetesh",
  age: 20,
  Role: "Backend",

 
  }

let printDetails =  function (state,country) {
          console.log(this.name +" "+ state + " " + country); 
}

//function borrowing
printDetails.call(userDetails3,"Bhopal","India"); //we pass argument as a single element in call
printDetails.call(userDetails2,"Mumbai","India") //in apply this value can pass as a array this is the main difference between call and apply


