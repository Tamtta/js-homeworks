let num;

// for (let i = 0; i < 50; i++) {
//   num = Math.floor(Math.random() * 10);
//   if (num !== 5) {
//     console.log("not 5");
//     continue;
//   } else {
//     console.log("yayy, 5");
//     break;
//   }
// }

while (num !== 5) {
  num = Math.floor(Math.random() * 10);
  console.log("not 5");

  num++;
}
