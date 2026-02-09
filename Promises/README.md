🔹 What is a Promise?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

🔹 States of a Promise
State Description
pending Initial state, neither fulfilled nor rejected
fulfilled Operation completed successfully
rejected Operation failed

🔹 Syntax

const promise = new Promise((resolve, reject) => {
// async task
if (success) {
resolve("Data");
} else {
reject("Error");
}
});

🔹 Consuming a Promise

promise
.then((data) => console.log("Resolved:", data)) // success
.catch((error) => console.log("Rejected:", error)) // error
.finally(() => console.log("Always runs")); // optional
🔹 Real-Life Example (Interview Favorite)

function fetchData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
const data = "User data";
resolve(data);
}, 1000);
});
}

fetchData().then(data => console.log(data)); // prints after 1s
🔹 Promise Chaining

fetchData()
.then(data => {
console.log(data);
return "Processed Data";
})
.then(newData => console.log(newData));

🔹 Promise Static Methods
Method Description
Promise.resolve() Returns a resolved promise
Promise.reject() Returns a rejected promise
Promise.all() Waits for all promises to resolve
Promise.race() Resolves/rejects as soon as one settles
Promise.allSettled() Waits for all to settle (success or fail)
Promise.any() Resolves when any one resolves

Example of Promise.all:

Promise.all([p1, p2, p3])
.then(values => console.log(values))
.catch(error => console.log(error));
🔹 Common Interview Questions
✅ What is a Promise and its states?

✅ How does .then(), .catch(), .finally() work?

✅ Difference between Promise.all vs Promise.race?

✅ Can you create a custom promise?

✅ What is Promise chaining?

✅ Difference between callback and promise?

🔹 Bonus: Callback vs Promise
Feature Callback Promise
Syntax Nested (callback hell) Chained with .then()
Error Handling Harder Easier with .catch()
Scalability Poor Better

# Summary Points for Interview Promise.all vs Promise.race

Promise.all() waits for everything ✅❌

Promise.race() waits for the first response ⏱️

Promise.all() is all-or-nothing

Promise.race() is who finishes first
