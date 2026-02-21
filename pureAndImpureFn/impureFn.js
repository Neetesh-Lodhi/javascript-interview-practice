let count = 0;
function sum(val) {
  count = count + val;
  return count;
}
console.log(sum(5));
console.log(sum(5));
console.log(sum(5));


//theory points for interview explanation
//Impure function is a function that has side effects, such as modifying external state or performing I/O operations.
//In the example below, the `sum` function is an impure function because it modifies the external state by updating the `count` variable.
//Impure functions are a common source of bugs and are generally avoided in functional programming.


//Pure functions are functions that do not have side effects and always return the same result for the same input.
//Pure functions are a key concept in functional programming and are generally preferred over impure functions.



// let count = 0;
// function sum(val) {
//   count = count + val;
//   return count;
// }
// console.log(sum(5));
// console.log(sum(5));
// console.log(sum(5));


//theory points for interview explanation
//Impure function is a function that has side effects, such as modifying external state or performing I/O operations.
//In the example below, the `sum` function is an impure function because it modifies the external state by updating the `count` variable.
//Impure functions are a common source of bugs and are generally avoided in functional programming.


//Pure functions are functions that do not have side effects and always return the same result for the same input.
//Pure functions are a key concept in functional programming and are generally preferred over impure functions.