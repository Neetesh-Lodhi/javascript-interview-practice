// function add(a, b, c) {
//           return a+b+c
// }

// let res = add(1,2,3)
// console.log(res)

//currying-Breaking a function into multiple smaller functions, each taking one argument.

function add(a) {
          return function (b) {
                    return function (c) {
                              return a+b+c
                    }
          }
}

// let res = add(1)
// let data = res(2)
//  let data2 = data(3)
// console.log(data2)

let res = add(1)(2)(3)
console.log(res)
