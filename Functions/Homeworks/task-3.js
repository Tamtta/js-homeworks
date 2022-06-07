function genericFunction(func) {
  try {
    func();
  } catch (err) {
    console.log(err.message);
  }
}

function addOne() {
  const a = 2;
  a++;
  console.log(a);
}

function sayHello() {
  console.log("Hello");
}

function sum(a, b) {
  return a + b;
}

// genericFunction(addOne);
// genericFunction(sayHello);
// genericFunction("hi");
// console.log(genericFunction(sum(2, 3)));
genericFunction(5);
