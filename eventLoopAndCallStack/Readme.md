# Call Stack and Event Loop

## Call Stack

The **Call Stack** is a data structure used by JavaScript to keep track of function calls. It operates on the **LIFO (Last In, First Out)** principle, meaning the last function added to the stack is the first one to be executed.

### How the Call Stack Works:
1. When a function is invoked, it is added to the top of the stack.
2. The function executes, and if it calls another function, that function is added to the stack.
3. Once a function completes execution, it is removed (popped) from the stack.
4. The process continues until the stack is empty.

### Example:
```javascript
function first() {
          console.log("First function");
          second();
}

function second() {
          console.log("Second function");
          third();
}

function third() {
          console.log("Third function");
}

first();
```

**Call Stack Execution:**
1. `first()` is added to the stack.
2. Inside `first()`, `second()` is called and added to the stack.
3. Inside `second()`, `third()` is called and added to the stack.
4. `third()` completes and is removed from the stack.
5. `second()` completes and is removed.
6. `first()` completes and is removed.

---

## Event Loop

The **Event Loop** is a mechanism in JavaScript that ensures non-blocking, asynchronous operations are executed after the current stack is cleared. It continuously checks the **Call Stack** and the **Callback Queue**.

### Key Components:
1. **Call Stack**: Executes synchronous code.
2. **Callback Queue**: Holds asynchronous callbacks (e.g., `setTimeout`, `fetch`).
3. **Event Loop**: Moves tasks from the Callback Queue to the Call Stack when the stack is empty.

### How the Event Loop Works:
1. Executes all synchronous code in the Call Stack.
2. Checks the Callback Queue for pending tasks.
3. Moves the first task from the Callback Queue to the Call Stack (if the stack is empty).
4. Repeats the process.

---

### Example with `setTimeout`:
```javascript
console.log("Start");

setTimeout(() => {
          console.log("Timeout callback");
}, 1000);

console.log("End");
```

**Execution Flow:**
1. `console.log("Start")` is executed and removed from the stack.
2. `setTimeout` is called, and its callback is added to the Callback Queue after 1 second.
3. `console.log("End")` is executed and removed from the stack.
4. After 1 second, the Event Loop moves the callback to the Call Stack (if empty).
5. The callback executes, printing "Timeout callback".

---

### Important Points:
- JavaScript is **single-threaded** but uses the Event Loop for asynchronous operations.
- The **Microtask Queue** (e.g., `Promise.then`) has higher priority than the Callback Queue.
- Blocking the Call Stack (e.g., infinite loops) prevents the Event Loop from processing tasks.

---

### Example with Promises:
```javascript
console.log("Start");

setTimeout(() => {
          console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
          console.log("Promise callback");
});

console.log("End");
```

**Execution Flow:**
1. `console.log("Start")` is executed.
2. `setTimeout` schedules its callback in the Callback Queue.
3. `Promise.resolve().then` schedules its callback in the Microtask Queue.
4. `console.log("End")` is executed.
5. The Event Loop processes the Microtask Queue first, executing the Promise callback.
6. Finally, the Event Loop processes the Callback Queue, executing the `setTimeout` callback.

**Output:**
```
Start
End
Promise callback
Timeout callback
```

---

### Summary:
- The Call Stack handles synchronous code.
- The Event Loop coordinates asynchronous tasks.
- Microtasks (Promises) have higher priority than macrotasks (setTimeout, setInterval).
- Avoid blocking the Call Stack to maintain responsiveness.
- JavaScript's concurrency model is based on the Event Loop.
