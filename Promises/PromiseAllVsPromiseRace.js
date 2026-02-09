
//Promise.all - waits for everything

let p5 = Promise.resolve(1)
let p6 = Promise.resolve(2)

Promise.all([p5, p6]).then(data => console.log(data))  //[1,2]


let p7 = Promise.resolve(1);
let p8 = Promise.reject("fail");

Promise.all([p7,p8]).then(res => console.log(res)).catch(err => console.log(err)) //fail


/*
const p1 = new Promise((resolve, reject) => {
          setTimeout(() => {
                    resolve("success")
          })
}, 5000)

const p2 = new Promise((resolve, reject) => {
          setTimeout(() => {
                    reject("fails")
          },3000)
})

Promise.all([p1, p2]) 
  .then(data => console.log(data))  
  .catch(err=> console.log(err))        
*/


//theory points for interview explanation
//Promise.all is a method that takes an array of promises and returns a new promise that resolves when all of the promises in the array have resolved.
//In the example below, the `p5` and `p6` are promises that resolve to the values `1` and `2`, respectively.
//Promise.all([p5, p6]) returns a new promise that resolves to the array `[1, 2]` when all of the promises in the array have resolved.
//Promise.all([p7,p8]) returns a new promise that resolves to the array `[1, "fail"]` when all of the promises in the array have resolved.

