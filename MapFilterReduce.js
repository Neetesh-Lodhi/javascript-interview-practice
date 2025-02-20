//map - 1. map() → Transforms Each Element of the Array

//Creates a new array by applying a function to each element.
//Does not modify the original array.
// let numbers = [2,3,4,5]
// const squared = numbers.map(num => num * num)
// console.log(numbers)
// console.log(squared)


//filter - 2. filter() → Filters Elements Based on a Condition

//Creates a new array with only elements that satisfy a condition.
//Removes elements that don’t pass the test.

// const numbers1 = [2,3,4,5,6]
// const evenNum = numbers1.filter(num1 => num1 % 2 === 0)
// console.log(numbers1)
// console.log(evenNum)


//reduce-reduce() → Reduces the Array to a Single Value

//Reduces an array to a single value (sum, product, object, etc.).
//Requires a callback function with an accumulator.

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((acc, num) => acc+num,0)

console.log(numbers2)
console.log(sum)

const numbers = [10, 5, 20, 8];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max); // 20
