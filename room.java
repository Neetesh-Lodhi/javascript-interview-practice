//Shallow copy - one level changes or immutibility solved by spread operator(...spread)
//changes reflect in each other

// let firstPerson = {
//           name: "Neetesh",
//           age:25
// }

// let secondPerson = { ...firstPerson }

// secondPerson.name = "Krishiv"

// console.log(firstPerson)

// console.log(secondPerson)



//2-nested object reflection cannot managed by shallow copy or rest operator

let firstPerson2 = {
  name: "Neetesh",
          age: 25,
          address: {
                    city: "Bhopal",
                    state:"MP"
  }
};

let secondPerson2 = { ...firstPerson2 }
firstPerson2.address.city = "Indore" //so changes reflect in both objects - not handled nested objects by {...spread} operator
console.log(firstPerson2) //so we go to deep copy 
console.log(secondPerson2)


//theory points for interview explanation
//Shallow copy is a process of creating a new object and copying all the properties of the original object into the new object.


