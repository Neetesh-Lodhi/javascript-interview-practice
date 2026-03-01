//Purpose: Executes the callback function once after the specified delay (in milliseconds).

//setTimeout

console.log("start")

setTimeout(()=> {
     console.log("execute after 2 seconds")     
},2000)

console.log("end")

//setInterval-Purpose: Executes the callback function repeatedly at fixed time intervals.

console.log("start")

let count = 0

const intervalId = setInterval(() => {
          count++;
          console.log(`execute ${count} times`)
          if (count == 5) {
                    clearInterval(intervalId) //stop after 5 executions
          }
}, 1000)

console.log("end")


//setImmediate-it does not takes delay  in parameter

console.log("Start");

setImmediate(() => {
  console.log("Executed immediately after I/O");
});

console.log("End");


console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);
setInterval(() => console.log("setInterval"), 1000);
setImmediate(() => console.log("setImmediate"));

console.log("End");














// //Purpose: Executes the callback function once after the specified delay (in milliseconds).

// //setTimeout

// console.log("start")

// setTimeout(()=> {
//      console.log("execute after 2 seconds")     
// },2000)

// console.log("end")

// //setInterval-Purpose: Executes the callback function repeatedly at fixed time intervals.

// console.log("start")

// let count = 0

// const intervalId = setInterval(() => {
//           count++;
//           console.log(`execute ${count} times`)
//           if (count == 5) {
//                     clearInterval(intervalId) //stop after 5 executions
//           }
// }, 1000)

// console.log("end")


// //setImmediate-it does not takes delay  in parameter

// console.log("Start");

// setImmediate(() => {
//   console.log("Executed immediately after I/O");
// });

// console.log("End");


// console.log("Start");

// setTimeout(() => console.log("setTimeout"), 0);
// setInterval(() => console.log("setInterval"), 1000);
// setImmediate(() => console.log("setImmediate"));

// console.log("End");