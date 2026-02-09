let sum = function (a) {
  return function (b, c) {
    return function (d, e, f) {
      console.log(a + b + c + d + e + f);
    };
  };
};

let step1 = sum(2); // a = 2
let step2 = step1(3, 4); // b = 3, c = 4
let step3 = step2(5, 6, 7); // d = 5, e = 6, f = 7

// Output: 2 + 3 + 4 + 5 + 6 + 7 = 27


