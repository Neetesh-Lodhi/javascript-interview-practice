//This is called Promise chaining

let ans = new Promise(function (resolve, reject) {
  return resolve("phone uthao");
});

let p1 = ans.then(function (data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    return resolve("then number dial kholo");
  });
});

let p2 = p1.then(function (data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    return resolve("then number search karo");
  });
});

let p3 = p2.then(function (data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    return resolve("then number par click karo");
  });
});

p3.then(function (data) {
          console.log(data)
})


//Promise Chaining with arrow function 
/*
let ans = new Promise((resolve, reject) => {
    resolve("Open Phone");
  });


let ans1 = ans.then((data) => {
  console.log(data)
  return new Promise((resolve,reject) => {
    resolve("Go PhoneBook")
  })
})

let ans2 = ans1.then((data) => {
  console.log(data)
  return new Promise((resolve, reject) => {
    resolve("Find Number")
  })
})

ans2.then((data) => {
  console.log(data)
})

*/


//theory points for interview explanation
//Promise Chaining is a technique in JavaScript where you can chain multiple promises together to handle a sequence of asynchronous operations.
//In the example below, the `ans` is a Promise that represents the eventual completion of an asynchronous operation.







