## 1. Scope
```function test() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ?
//  console.log(y); // ?
//  console.log(z); // ?
}
test();
```
## Predict the output and explain why.

# Ans:
```                      
   x=10
   y and z are undefined
```
# Reason: 
##   console,log y and z are not defined because let y and const z are blocked scope and it can access only in blocked scope, here variables are declared in blocked scope but console.log is in outside block scope, so y and z are undefined variable for console.log. But x is declared as var, var is a function scope it can access anywhere with in the scope so console.log(x) print x =10

## Redeclaration
var a = 5;
var a = 10;   // Allowed

let b = 20;
let b = 30;   // Not Allowed

const c = 40;
const c = 50; // Not Allowed