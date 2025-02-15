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
