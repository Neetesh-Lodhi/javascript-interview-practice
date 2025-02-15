function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureFunc = outerFunction("Hello");
closureFunc("World"); // Output: Outer: Hello, Inner: World

//Here, innerFunction still has access to outerVariable even after outerFunction has finished execution.

