let num;

while (num !== 5) {
  num = Math.floor(Math.random() * 10);
  if (num !== 5) {
    console.log("not 5");
    continue;
  } else if (num === 5) {
    break;
  }

  num++;
}
