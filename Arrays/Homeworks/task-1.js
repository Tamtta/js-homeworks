function f(arr) {
  let sum = 0;
  if (Array.isArray(arr) === true) {
    arr.forEach(function (inArr) {
      if (Array.isArray(inArr) === true) {
        sum += f(inArr);
      } else if (typeof inArr === "number") {
        sum += inArr;
      } else {
        throw new Error("Inner dimensions have to be array or number!");
      }
    });
    return sum;
  } else {
    throw new Error("Parameter has to be only array!");
  }
}

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];
console.log(f(arr)); // 12

const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // 3

const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // 6

const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0

const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // 3

const arr6 = "dhjf";
// console.log(f(arr6)); // err;

const arr7 = [[[[[1, 2]]], 2], "123"];
console.log(f(arr7));
