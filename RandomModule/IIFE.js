//if you working with iife then remember semicolon

(function () {
          let a = 10
          console.log(a)
})();
          // console.log(a)  -error 


          (() => {
                    let b = 20
                    console.log(b)
          })();



          (function () {
            console.log("IIFE executed!");
          })();
                
          