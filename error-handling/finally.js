let timer = setInterval(() => {
  console.log("Timer running...");
}, 1000);

try {
  console.log("Starting risky operation...");
  // Simulate an error
  let result = 10 / 0; // This won’t throw an error in JS, let's throw manually
  if (!isFinite(result)) { // check for Infinity or NaN
  throw new Error("Something went wrong!");
}
} catch (error) {
  console.log("Error caught:", error.message);
} 
finally {
  clearInterval(timer);  // ✅ Cleanup: stop the timer
  console.log("Timer stopped in finally block");
}
