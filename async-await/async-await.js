function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Given value is not a number");
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
}

async function performAddition() {
  try {
    const result1 = await add(5, 5);

    console.log("first", result1);

    const result2 = await add(result1, 10);

    console.log("second", result2);

    const result3 = await add(result2, 20);

    console.log("final", result3);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("completed");
  }
}

performAddition();
