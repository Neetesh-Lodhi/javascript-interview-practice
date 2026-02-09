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


//theory points for interview explanation
//Deep copy is a process of creating a new object and copying all the properties of the original object into the new object.
//Deep copy ensures that the new object is independent of the original object and does not reference the same memory location.



//difference between shallow and deep copy

//shallow copy - one level changes or immutability solved by spread operator(...spread)
//changes reflect in each other

let firstPersonShallow = {
          name: "Neetesh",
          age: 25
}

let secondPersonShallow = { ...firstPersonShallow }

secondPersonShallow.name = "Krishiv"

console.log(firstPersonShallow)
console.log(secondPersonShallow)

//2-nested object reflection cannot managed by shallow copy or rest operator

let firstPersonDeep = {
          name: "Neetesh",
          age: 25,
          address: {
                    city: "Bhopal",
                    state:"MP"
          }
}

let secondPersonDeep = JSON.parse(JSON.stringify(firstPersonDeep))

secondPersonDeep.address.city = "Indore"

console.log(firstPersonDeep)
console.log(secondPersonDeep)

