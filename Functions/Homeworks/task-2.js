function f(arguments) {
  if (
    Array.isArray(arguments) === true &&
    arguments.length !== 0 &&
    !arguments.some(isNaN)
  ) {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  } else if (Array.isArray(arguments) === false) {
    throw new Error("parameter type should be an array");
  } else if (arguments.length === 0) {
    throw new Error("parameter can't be an empty");
  } else if (arguments.some(isNaN)) {
    throw new Error("parameter type should be array of numbers");
  }
}

try {
  f([1, 2, 3]);
  // 1
  // 2
  // 3
  // f(1, 2, 3); // Error: parameter type should be an array
  // f("Content"); // Error: parameter type should be an array
  // f([]); // Error: parameter can't be an empty
  f(["🧛🏼", "👨🏽‍🔧", 5, "dogs"]); // Error: parameter type should be array of numbers
} catch (err) {
  console.log(err.message);
}
