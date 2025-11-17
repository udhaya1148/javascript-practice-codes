function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("give is not a number"));
    } else {
      setTimeout(() => {
        resolve(a + b);
      });
    }
  });
}

add(5,5)
.then((result1)=>{
    console.log(result1);
    return add(result1,"5");
})
.then((result2)=>{
    console.log(result2);
})
.catch((err)=> console.log(err.message))