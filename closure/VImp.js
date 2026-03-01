for (var i = 0; i < 3; i++) {
  //var has function- scoped ,global scoped ,i has been shared
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //output-333

for (let i = 0; i < 3; i++) {
  //let has block-scoped , i has been not shared
  setTimeout(() => {
    console.log(i);
  }, 2000);
} //output - 012



for (var i = 0; i < 3; i++) {
  //var has function- scoped ,global scoped ,i has been shared
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //output-333

for (let i = 0; i < 3; i++) {
  //let has block-scoped , i has been not shared
  setTimeout(() => {
    console.log(i);
  }, 2000);
} //output - 012


for (var i = 0; i < 3; i++) {
  //var has function- scoped ,global scoped ,i has been shared
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //output-333

for (let i = 0; i < 3; i++) {
  //let has block-scoped , i has been not shared
  setTimeout(() => {
    console.log(i);
  }, 2000);
} //output - 012



for (var i = 0; i < 3; i++) {
  //var has function- scoped ,global scoped ,i has been shared
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //output-333

for (let i = 0; i < 3; i++) {
  //let has block-scoped , i has been not shared
  setTimeout(() => {
    console.log(i);
  }, 2000);
} //output - 012
