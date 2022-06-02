const arr = [12, 11, -13, -5, 6, -7, 5, -3, -6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}

console.log("The sum of positive numbers:", sum);
