let curriedSum1 = function (a, b) {
          console.log(a+b)
}

curriedSum1(2, 3)


//curriedFunction

//curried function uses the property of closure to access elements

let curriedSum = function (a) {
          return function (b) {
                   console.log(a+b)
                 
       }
}

let sumTwoNum = curriedSum(2)
//  console.log(sumTwoNum()) //return  anonymous function
sumTwoNum(3)


//curried function uses the property of closure to access elements
//curried function is a function that takes a single argument and returns a function that takes the next argument and so on.
//In this example, curriedSum is a curried function.
//curried function is a function that takes a single argument and returns a function that takes the next argument and so on.



//curried function uses the property of closure to access elements
//curried function is a function that takes a single argument and returns a function that takes the next argument and so on.
//In this example, curriedSum is a curried function.
//curried function is a function that takes a single argument and returns a function that takes the next argument and so on.

//example of curried function
let curriedSumThreeNum = function (a) {
          return function (b) {
                    return function (c) {
                              console.log(a+b+c)
                    }
          }
}

let sumThreeNum = curriedSumThreeNum(2)
let sumThreeNum1 = sumThreeNum(3)
sumThreeNum1(4)
