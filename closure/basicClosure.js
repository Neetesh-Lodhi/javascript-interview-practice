function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureFunc = outerFunction("Hello");
closureFunc("World"); // Output: Outer: Hello, Inner: World

//Here, innerFunction still has access to outerVariable even after outerFunction has finished execution.
//Closures are functions that have access to the outer scope in which they were defined.
//In this example, innerFunction is a closure that has access to outerVariable.

// Closure is a function that has access to the variables in its lexical scope, even after the outer function has finished execution.
//In this example, innerFunction is a closure that has access to outerVariable.
//Lexical scope is the scope in which a variable is declared.
//In this example, outerVariable is declared in the lexical scope of innerFunction.
//Lexical scope is also known as static scope.
//Lexical scope is different from dynamic scope, where the scope of a variable is determined at runtime.
//In this example, outerVariable is determined at runtime.

//Dynamic scope is also known as dynamic scope.
//Dynamic scope is different from lexical scope, where the scope of a variable is determined at compile time.
//In this example, outerVariable is determined at compile time.









 






