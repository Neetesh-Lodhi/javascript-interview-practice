function secretKeyGenerator(secret) {
  return {
    getSecret: function () {
      return secret;
    },
  };
}

const mySecret = secretKeyGenerator("MyPassword123");
console.log(mySecret.getSecret()); // Output: MyPassword123


//Here, secret is private and cannot be accessed directly.

function secretKeyGenerator(secret) {
  return {
    getSecret: function () {
      return secret;
    },
  };
}

// const mySecret = secretKeyGenerator("MyPassword123");
// console.log(mySecret.getSecret()); // Output: MyPassword123


// //Here, secret is private and cannot be accessed directly.

// function secretKeyGenerator(secret) {
//   return {
//     getSecret: function () {
//       return secret;
//     },
//   };
// }

// const mySecret = secretKeyGenerator("MyPassword123");
// console.log(mySecret.getSecret()); // Output: MyPassword123


// //Here, secret is private and cannot be accessed directly.