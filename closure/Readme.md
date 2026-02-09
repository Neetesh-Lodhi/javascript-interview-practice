🔹 What is a Closure?
A closure is a function that remembers and has access to variables from its lexical scope, even when that function is executed outside of that scope.

✅ In simple words:
Inner function remembers variables of its outer function even after the outer function has returned.

🔹 Basic Example

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
🧠 Explanation:

inner() is returned and used outside.

But it still remembers the count variable from outer() – this is closure.

🔹 Why Closures Are Important in Interviews?
Closures are the base of:

✅ Data privacy / encapsulation

✅ Currying

✅ Memoization

✅ Function factories

✅ setTimeout inside loops

✅ Event handlers

✅ Interview questions

🔹 Real-life Analogy (Interview-Friendly)
Think of a backpack 🎒 (closure) you carry:

You go outside (function returned).

But you still carry what's in the backpack (outer variables).

This is closure — the inner function remembers its environment.

🔹 Interview-Level Use Case: Data Privacy
function secretHolder() {
  let secret = "JavaScript";
  return {
    getSecret: () => secret,
    setSecret: (val) => secret = val
  };
}

const x = secretHolder();
console.log(x.getSecret()); // "JavaScript"
x.setSecret("Closures");
console.log(x.getSecret()); // "Closures"
🧠 Why this matters: secret is private — it’s not directly accessible outside.

🔹 Common Interview Coding Question: setTimeout + Closure

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3 ❌
✅ Fix using closure:

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Output: 0 1 2 ✅
🔹 Closures in Functional Programming
Currying Example:


function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
🔹 Key Interview Questions
Question	Answer Summary
What is a closure?	Function with access to outer scope even after outer has returned.
Why are closures useful?	For data privacy, callbacks, factories, async handling.
How does closure differ from scope?	Scope is about variable access; closure retains scope after outer execution.
Memory leak with closures?	Yes, if closure variables are unintentionally retained.
How to implement private variables?	Using closures in function factories.

🔹 Quick Summary (Sticky Notes 🗒️ Style)
✅ Closure = Function + its Lexical Environment

✅ Helps create private state

✅ Avoids global variables

✅ Used in async code, currying, event handlers

✅ Be careful: may cause memory leaks