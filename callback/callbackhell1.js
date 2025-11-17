// Sequential addition
// Using callbacks, perform:

// add(5, 5) → add(result, 10) → add(result, 20)

// Each should happen after 1 second, and finally print "Final result: 40".

function add(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

add(5, 5, (result1) => {
  console.log("First sum is", result1);

  add(result1, 4, (result2) => {
    console.log("Second Sum is", result2);

    add(result1, result2, (result3) => {
      console.log("total sum is ", result3);
    });
  });
});
