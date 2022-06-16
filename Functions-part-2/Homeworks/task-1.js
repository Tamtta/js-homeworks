const mix = (...callbacks) => {
  // const result = callbacks.reduce((res, callback) => callback(res), undefined);
  // // TypeError: callback is not a function
  // return result;

  let passParam;
  for (let i = 0; i < callbacks.length; i++) {
    if (typeof callbacks[i] !== "function") {
      throw new TypeError("Given parameter is not a function");
    }
    passParam = callbacks[i](passParam);
    // console.log(typeof callbacks[i]);
  }

  return passParam;
};

const result = mix(
  () => 0,
  (prev) => prev + 1,
  (prev) => prev * 2
);

console.log(result);
