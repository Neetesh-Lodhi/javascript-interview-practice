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

myPromise.then(result => console.log(result))
          .catch(error => console.log(error)); //output:Operation successful
