//bahut sare .then se bachna ho to async await ka use kare 



//without async await
function abcd() {
          fetch(`https://api.api-ninjas.com/v1/randomuser`)
                    .then(function (raw) {
                        return raw.json()
                    }).then(function (res) {
                    console.log(ans)
          })
}

//with async await-get rid from various then or promise chaining
async function API() {
          let raw = await fetch(`https://api.api-ninjas.com/v1/randomuser`);
          let ans = await raw.json()
          console.log(ans)
}
API()


//theory points for interview explanation
//async await is a JavaScript feature that allows you to write asynchronous code in a more linear and readable way.
//In the example below, the function `API` is an async function that uses the `await` keyword to wait for the `fetch` and `json` operations to complete before continuing execution.
//Async functions return a promise that resolves to the value of the last expression.
//In the example below, the function `API` returns a promise that resolves to the value of `ans`.
//Async functions are a more modern and readable way to handle asynchronous code.


//example of async await
async function fetchData() {
          try {
                    let raw = await fetch(`https://api.api-ninjas.com/v1/randomuser`);
                    let ans = await raw.json()
                    console.log(ans)
          } catch (error) {
                    console.log(error)
          }
}
fetchData()


