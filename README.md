 1. Closures in JavaScript
Definition:

A closure is a function that retains access to its lexical scope (the variables from its parent function) even after the parent function has finished execution.

Why Are Closures Needed?

Data Encapsulation – Hide implementation details.
Maintaining State – Store data across function calls.

Callback Functions – Used in event listeners, timeouts, and intervals.

How Closures Work?

Closures work because JavaScript follows lexical scoping, meaning inner functions can access variables of their parent functions.



2. Promises in JavaScript

Definition:

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Promise States:

Pending – Initial state, operation not completed.

Fulfilled – Operation completed successfully.

Rejected – Operation failed




Closures:

	Functions that retain access to their parent's scope even after execution. Used for private variables and state management.

Promises:

	Handle asynchronous operations with .then() and .catch(). Supports chaining and parallel execution.

Call:

Invokes a function with a specific this value and individual arguments.

Apply:

Similar to call(), but takes arguments as an array.

Bind:

Returns a new function with a bound   this  value and arguments.


Currying in JavaScript

What is Currying?

Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

Breaking a function into multiple smaller functions, each taking one argument.


Why Use Currying?

Code Reusability – Create specialized functions from a general function.

Avoid Repetition – Helps when we need to partially apply functions.

Improved Readability – Enhances clarity in function calls.


setTimeout:

1. setTimeout(callback, delay)

Purpose: Executes the callback function once after the specified delay (in milliseconds).

How It Works:
It schedules the function execution after the given delay.

The actual execution might be delayed due to the event loop and other queued tasks.

Key Points:
✔ Runs only once after delay.

✔ Minimum delay is not guaranteed due to event loop behavior.


setInterval:

setInterval(callback, delay)

Purpose: Executes the callback function repeatedly at fixed time intervals.

How It Works:

It repeatedly executes the callback every delay milliseconds.

It keeps running until manually stopped using clearInterval(intervalID).

Key Points:
✔ Runs repeatedly after delay until clearInterval() is called.

✔ Execution time may vary depending on other tasks in the event loop.

setImmediate:
3. setImmediate(callback) (Only in Node.js)

Purpose: Executes the callback as soon as the current event loop iteration completes.

How It Works:

It schedules the callback after I/O operations but before setTimeout(0).

It is executed in the check phase of the event loop.

Key Points:
✔ Executes before setTimeout(0), after I/O tasks.

✔ Useful for deferring execution without waiting for a timeout.

When to Use What?
✅ Use setTimeout() when you want to delay execution once.
✅ Use setInterval() when you need repetitive execution.
✅ Use setImmediate() when you need to execute after I/O but before timers.



Differences Between map(), filter(), and reduce() in JavaScript

These three array methods are higher-order functions used for transforming, filtering, and aggregating data. Let's break them down with the best points and interview-friendly examples.


map:

1. map() → Transforms Each Element of the Array

📌 Purpose:

Creates a new array by applying a function to each element.

Does not modify the original array.

Best Points for Interviews:
✔ Returns a new array (doesn’t modify the original).

✔ Used for transformation (e.g., modify values, extract properties from objects).

✔ Always returns an array of the same length as the original.

When to Use?

✅ When you need to transform each item in an array.


filter-

2. filter() → Filters Elements Based on a Condition
📌 Purpose:

Creates a new array with only elements that satisfy a condition.
Removes elements that don’t pass the test.


Best Points for Interviews:
✔ Returns a new array (doesn’t modify the original).

✔ Used for filtering data based on conditions.

✔ The returned array may be smaller than the original.

When to Use?
✅ When you need to select specific elements from an array.


reduce - 

3. reduce() → Reduces the Array to a Single Value
📌 Purpose:

Reduces an array to a single value (sum, product, object, etc.).

Requires a callback function with an accumulator.


Best Points for Interviews:
✔ Returns a single value (number, string, object, etc.).
✔ Used for aggregation (sum, max, min, grouping, etc.).
✔ Requires an initial value for the accumulator.

When to Use?
✅ When you need to aggregate array data into a single value.


Final Summary
map() → Modify each element.
filter() → Remove unwanted elements.
reduce() → Combine elements into a single value.