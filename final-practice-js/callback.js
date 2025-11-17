function add(a, b, callback) {
  if (typeof a !== "number" || typeof b !== "number") {
    callback(new Error("give is not a number"),null);
  } else {
    setTimeout(() => {
      let result = a + b;
      callback(null,result);
    }, 1000);
  }
}

add(5, 5, (err, result1) => {
  if (err) {
    return console.log(err.message);
  } else {
    console.log(result1);
  }

  add(result1, 5, (err, result2) => {
    if (err) {
      return console.log(err.message);
    } else {
      console.log(result2);
    }
  });
});
