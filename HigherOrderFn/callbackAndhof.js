

function sum(a, b,cb) {
          const res = a + b;
          cb(res)

          return ()=>console.log(res)
}

// sum(3,4, (val) => console.log(val))

function showResult(res) {
          console.log(res)
}

sum(6, 7, showResult)
  
// const res = sum(3, 6, function (res) {
//           console.log(res)
// })




//hof - 1) takes function as argument 2) return a function

//1.)
const num = [1, 2, 3];
num.forEach(function (item) {
          console.log(item)
})

//2.)
function multiplier(factor) {
          return function (num) {
                    return num * factor
          }
}

const double = multiplier(2)
 console.log(double(5))


//hof
 
setInterval(function () {
  console.log("This is a higher order function");
}, 1000);

// Output: "This is a higher order function" after every 1000ms / 1 second

// hof

setTimeout(function () {
  console.log("This is a higher order function");
}, 1000);

// Output: "This is a higher order function" after every 1000ms / 1 second











/**
 

function sum(a, b,cb) {
          const res = a + b;
          cb(res)

          return ()=>console.log(res)
}

// sum(3,4, (val) => console.log(val))

function showResult(res) {
          console.log(res)
}

sum(6, 7, showResult)
  
// const res = sum(3, 6, function (res) {
//           console.log(res)
// })




//hof - 1) takes function as argument 2) return a function

//1.)
const num = [1, 2, 3];
num.forEach(function (item) {
          console.log(item)
})

//2.)
function multiplier(factor) {
          return function (num) {
                    return num * factor
          }
}

const double = multiplier(2)
 console.log(double(5))


//hof
 
setInterval(function () {
  console.log("This is a higher order function");
}, 1000);

// Output: "This is a higher order function" after every 1000ms / 1 second

// hof

setTimeout(function () {
  console.log("This is a higher order function");
}, 1000);

// Output: "This is a higher order function" after every 1000ms / 1 second
 */