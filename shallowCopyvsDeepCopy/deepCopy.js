//that problem solve by JSON.parse(JSON.StringiFy(object name))
//in deep copy changes not reflect all objects reflect only those object where modification done
let firstPerson = {
          name: "Neetesh",
          age: 20,
          address: {
                    city: "Bhopal",
                    state:"MP"
          }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))

secondPerson.address.city = "Indore"
console.log(firstPerson)
console.log(secondPerson)