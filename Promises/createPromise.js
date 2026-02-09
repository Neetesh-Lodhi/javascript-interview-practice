const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
                    let success = true

                    if (success) {
                              resolve("Operation successful")
                    } else {
                              reject("operation failed")
                    }
          },2000)
})

//consuming promise
myPromise.then(result => console.log(result))
          .catch(error => console.log(error)); //output:Operation successful



//theory points for interview explanation
//Promise
//Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//In the example below, the `myPromise` is a Promise that represents the eventual completion of an asynchronous operation.
//Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//In the example below, the `myPromise` is a Promise that represents the eventual completion of an asynchronous operation.

//properties of promise
//Promise has three states: pending, fulfilled, and rejected.
//Pending: The initial state of a Promise, before it is fulfilled or rejected.
//Fulfilled: The state of a Promise when it is successfully completed.
//Rejected: The state of a Promise when it is not successfully completed.
//In the example below, the `myPromise` is a Promise that represents the eventual completion of an asynchronous operation.








