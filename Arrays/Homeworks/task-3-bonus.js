function rotate(arr, count, direction = "right") {
  if (
    Array.isArray(arr) === true &&
    typeof count === "number" &&
    typeof direction === "string"
  ) {
    let result;
    if (direction === "left") {
      result = arr.slice(count).concat(arr.slice(0, count));
      return result;
    } else {
      let reversed = arr.reduce((accumulator, value) => {
        return [value, ...accumulator];
      }, []);
      result = reversed.slice(count).concat(reversed.slice(0, count));
      return result.reverse();
    }
  } else if (Array.isArray(arr) === false) {
    throw new Error("first parameter has to be only array!");
  } else if (typeof count !== "number") {
    throw new Error("second parameter has to be number!");
  } else if (typeof direction !== "string") {
    throw new Error("third parameter has to be only string!");
  }
}

const arr = [1, 2, 3];
console.log(rotate(arr, 1, "left")); // result: [2,3,1];
// console.log(rotate(arr, 1, 11)); // err;
// console.log(rotate(arr, "try", "left")); // err;
console.log(rotate(arr, 1)); // result: [3,1,2];
console.log(rotate(arr, 2)); // result: [2,3,1];
// console.log(rotate(arr, 1, 444)); // err;
