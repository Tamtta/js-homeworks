function genericFunction(func) {
  if (typeof func === "function") {
    func();
  } else {
    throw new Error("parameter type is not a function");
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

try {
  // genericFunction(addOne);
  // genericFunction(sayHello);
  // genericFunction("hi");
  console.log(genericFunction(sum(2, 3)));
} catch (err) {
  console.log(err.message);
}
