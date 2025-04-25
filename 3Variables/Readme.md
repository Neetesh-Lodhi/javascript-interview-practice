/**
 * Quick Revision Points: `var` vs `let` vs `const`
 *
 * 1. **Scope**:
 *    - `var`: Function-scoped. Accessible outside block scope if declared within a block.
 *    - `let`: Block-scoped. Accessible only within the block it is declared.
 *    - `const`: Block-scoped. Same as `let`, but the value cannot be reassigned.
 *
 * 2. **Hoisting**:
 *    - `var`: Hoisted to the top of its scope and initialized as `undefined`.
 *    - `let` and `const`: Hoisted but not initialized. Accessing before declaration results in a `ReferenceError`.
 *
 * 3. **Reassignment**:
 *    - `var`: Can be reassigned and redeclared within the same scope.
 *    - `let`: Can be reassigned but cannot be redeclared in the same scope.
 *    - `const`: Cannot be reassigned or redeclared. The value is immutable, but for objects and arrays, the contents can be modified.
 *
 * 4. **Global Object Property**:
 *    - `var`: Declares a property on the global object (e.g., `window` in browsers).
 *    - `let` and `const`: Do not create properties on the global object.
 *
 * 5. **Use Cases**:
 *    - `var`: Avoid using in modern JavaScript due to potential scoping issues.
 *    - `let`: Use for variables that need to be reassigned.
 *    - `const`: Use for variables that should not be reassigned (preferred for most cases).
 */