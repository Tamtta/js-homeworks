Object.prototype.mergeDeepRight = function (inputObj) {
  function deepMerge(base, inputObj) {
    const result = {};

    for (let key in inputObj) {
      if (base[key] === undefined || typeof base[key] !== "object") {
        result[key] = inputObj[key];
      }

      if (typeof base[key] === "object" && typeof inputObj[key] !== "object") {
        result[key] = inputObj[key];
      }

      if (typeof base[key] == "object" && typeof inputObj[key] === "object") {
        result[key] = deepMerge(base[key], inputObj[key]);
      }

      if (Array.isArray(base[key]) && Array.isArray(inputObj[key])) {
        result[key] = [...base[key], ...inputObj[key]];
      }
    }

    for (let key in base) {
      if (inputObj[key] === undefined) {
        result[key] = base[key];
      }
    }

    return result;
  }

  return deepMerge(this, inputObj);
};

const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

const result = data.mergeDeepRight({
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
});

console.log(result);
