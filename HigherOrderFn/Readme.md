✅ Callback Functions in JavaScript
🔹 What is a Callback?
A callback is a function passed as an argument to another function, to be called later.

✅ Example:

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);  // Output: Hello Alice, Goodbye!
🔹 Key Point:
Useful for asynchronous operations (like APIs, file reading).

Helps handle sequence of operations.

✅ Higher-Order Functions (HOF)
🔹 Definition:
A Higher-Order Function is a function that:

Takes another function as an argument, or

Returns a function.

✅ Common Examples:

// 1. Takes a function as an argument
[1, 2, 3].forEach(function(item) {
  console.log(item);
});

// 2. Returns a function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
🔹 Built-in HOFs in JS:
map()

filter()

reduce()

forEach()

sort()

🔄 Callback vs Higher-Order Function
Concept	Description	Example
Callback	A function passed as an argument	setTimeout(() => {}, 1000)
Higher-Order Fn	Accepts or returns a function	arr.map(callback) or multiplier()

🧠 Interview Tip:
Explain that callbacks are used inside higher-order functions. For example:


arr.map((item) => item * 2);
Here, map is a higher-order function, and (item) => item * 2 is the callback.

