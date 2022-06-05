const value = 101;
const nearLimit = 90;
const limit = 100;

try {
  if (value > nearLimit) {
    throw new Error("Warning, value is greater than nearLimit!");
  }
} catch (err) {
  if (value > nearLimit && value < limit) {
    console.log(err.message);
  } else if (value > limit) {
    console.log("Value is greater than limit! ❌");
    throw err;
  }
}
