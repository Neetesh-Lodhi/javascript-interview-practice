- **Definition**: Function hoisting is a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compile phase.

- **Implication**: Function hoisting allows you to call a function before it is declared in the code. However, this only applies to function declarations, not to function expressions or arrow functions.

- **Examples**:

1. **Function Declaration Hoisting**  
          You can call a function before its declaration because the function is hoisted to the top of its scope.

          ```javascript
          greet(); // Output: "Hello, world!"

          function greet() {
                     console.log("Hello, world!");
          }
          ```

2. **Variable Hoisting with `var`**  
          Variables declared with `var` are hoisted, but their initialization is not.

          ```javascript
          console.log(x); // Output: undefined
          var x = 10;
          ```

3. **Variable Hoisting with `let` and `const`**  
          Variables declared with `let` and `const` are hoisted but remain in a "temporal dead zone" until their initialization.

          ```javascript
          console.log(y); // ReferenceError: Cannot access 'y' before initialization
          let y = 20;

          console.log(z); // ReferenceError: Cannot access 'z' before initialization
          const z = 30;
          ```

4. **Function Expression Hoisting**  
          Function expressions are not hoisted in the same way as function declarations.

          ```javascript
          sayGoodbye(); // TypeError: sayGoodbye is not a function

          var sayGoodbye = function () {
                     console.log("Goodbye!");
          };
          ```

 var Hoisting:

Variables declared with var are hoisted to the top of their function or global scope.
They are initialized with undefined until the code execution reaches their assignment.
let and const Hoisting:

Variables declared with let and const are also hoisted, but they are placed in a "temporal dead zone" from the start of the block until their declaration is encountered.
Accessing them before their declaration results in a ReferenceError.