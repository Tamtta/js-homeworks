const arr = [];

for (let i = 2; i <= 10; i++) {
  if (i === 2) {
    arr.push(i);
    continue;
  } else if (i === 3) {
    arr.push(i);
    continue;
  } else if (i % 2 !== 0 && i % 3 !== 0) {
    arr.push(i);
    continue;
  }
}

console.log(arr);
