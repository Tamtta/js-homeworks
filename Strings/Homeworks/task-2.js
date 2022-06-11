function reverseCase(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("Parameter is not a string");
  }

  let newStr = "";
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);

    if (character === character.toUpperCase()) {
      newStr += character.toLowerCase();
    } else if (character === character.toLowerCase()) {
      newStr += character.toUpperCase();
    }
  }
  return newStr;
}

console.log(reverseCase("Hello theRe"));
console.log(reverseCase("BIG LETTERS"));
