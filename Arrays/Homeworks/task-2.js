function reverse(arr) {
  if (Array.isArray(arr) === true && arr.length > 0) {
    let reversedArr = arr.reduce((accumulator, value) => {
      return [value, ...accumulator];
    }, []);

    return reversedArr;
  } else if (Array.isArray(arr) === false) {
    throw new Error("Parameter should be an Array!");
  } else if (arr.length === 0) {
    throw new Error("Array should not be empty!");
  }
}

const arr = [3, 2, 1];
console.log(reverse(arr));
