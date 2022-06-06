const arr = [];

function getDivisors(num) {
  if (typeof num === "number" && num > 0) {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  } else if (num === 0) {
    throw new Error("Parameter can't be a 0");
  } else if (num < 0) {
    throw new Error("parameter can't be less than 0");
  } else if (typeof num !== "number") {
    throw new Error("Parameter type is not a Number");
  }
}

try {
  console.log(getDivisors(36));
  console.log(getDivisors(-6));
  console.log(getDivisors("Content"));
  console.log(getDivisors(0));
} catch (err) {
  console.log(err.message);
}
