//before moving to closure first understand lexical scoping

function test(){
          let name = "Neetesh"
          
          function test1() {
                    console.log("name is : " + name)
          }
          return test1;
}

let fun = test();
// console.log(fun) //return the inner function that is test1
fun() //now we call it