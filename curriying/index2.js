let sum = function(a){
          return function (b) {
                    return function (c) {
                               console.log(a+b+c)
                     }
           }
}

let threeSum = sum(2)

let threeSum1 = threeSum(3)

let threeSum2 = threeSum1(4)

// threeSum2()

//curried function uses the property of closure to access elements
//curried function is a function that takes a single argument and returns a function that takes the next argument and so on.
