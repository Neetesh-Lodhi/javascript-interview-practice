let myPromise = new Promise(function (resolve, reject) {
          let a = 3;
          let b = 9;

          setTimeout(() => {
                    if (a === b) {
                              resolve("Both are equals")
                    } else {
                              reject("Both are not equals")
                    }
          },2000)
})

//pending state
// console.log(myPromise);

//capture the result of promise
// myPromise.then((result) => {
//           console.log(result)
// })

myPromise
  .then(function (result) {
    //fulfilled State

    console.log(result);
  })
  .catch(function (failedResult) {
    console.log(failedResult);
  }) ///reject state
  .finally(() => console.log("Always runs"));



  //theory points for interview explanation
 

