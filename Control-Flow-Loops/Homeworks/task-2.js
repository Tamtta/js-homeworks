const n = 1000;
let num = 0;
let remainder = n;

while (remainder / 2 > 50) {
  remainder /= 2;
  num++;
}

console.log(num);
