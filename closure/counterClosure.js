function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // Output: 1
counter1(); // Output: 2


//The count variable is private and maintained between function calls.