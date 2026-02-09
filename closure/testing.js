function person() {
          let name = "Lodhi"

          function showName() {
                    console.log(name)
                    let age = 20

                    function showAge() {
                              console.log(age)
                              console.log(name)
                    }
                    return showAge;
          }
          return showName;
}

let fun = person()
// console.log(fun)
let fun2 = fun()
console.log(fun2) //that return the showAge
fun2()
