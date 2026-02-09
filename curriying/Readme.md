🔹 What is Currying?
Currying is a technique of converting a function that takes multiple arguments into a series of functions that take one argument at a time.

🔹 Simple Definition
Currying transforms:

f(a, b, c) → f(a)(b)(c)
🔹 Why Currying?
✅ Reusability
✅ Function composition
✅ Code readability
✅ Useful in functional programming

🔹 Example: Without Currying
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
🔹 Example: With Currying

function add(a) {
  return function(b) {
    return a + b;
  };
}

add(2)(3); // 5