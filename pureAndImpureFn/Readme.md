✅ Pure Functions
🔹 Definition:
A pure function is a function that:

Always returns the same output for the same input.

Has no side effects (doesn’t modify global variables, DOM, or external state).

🔸 Characteristics of Pure Functions:
Deterministic: Same input → Same output.

No reliance on external state.

Does not modify any arguments or global variables.

✅ Example:

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
✅ add is pure because:

It returns a value based only on its parameters.

It doesn’t change any state or variable outside its scope.

❌ Impure Functions
🔹 Definition:
An impure function is a function that:

Produces side effects (e.g., modifying external variables, writing to console, API calls).

Or returns different outputs for the same input.

🔸 Common Side Effects:
Logging to console

Changing DOM elements

Modifying global or external variables

Writing to files or databases

❌ Example:

let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(5));  // Output: 5
console.log(addToTotal(5));  // Output: 10 (different output for same input)
❌ addToTotal is impure because:

It modifies the external variable total.

It returns different outputs for the same input.

🧠 Why Prefer Pure Functions?
Advantage	Explanation
Predictable	Easier to test and debug
No Side Effects	Doesn’t mess with outside world
Reusable & Composable	Can be used in other functions easily
Easier to Cache	Memoization is possible since output is predictable
Safe for Concurrency	No shared state = fewer bugs in async/multi-threaded env

🎯 Summary Table
Aspect	Pure Function	Impure Function
Deterministic	Yes	No
Side Effects	No	Yes
External State Used	No	Often yes
Output Consistency	Same input = same output	Same input = different output

