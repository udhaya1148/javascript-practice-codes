try {
  let num = 10;
  console.log(num.toUpperCase()); // ❌ Error: toUpperCase not valid for number
} catch (error) {
  console.log("Something went wrong!");
  console.log(error.message); // shows what went wrong
}

console.log("Program continues...");
