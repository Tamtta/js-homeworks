function searchWord(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    throw new Error("Parameters are not strings.");
  }

  return `${word} was found ${sentence.split(word).length - 1} time(s)`;
}

console.log(searchWord("The quick brown fox", "fox"));
console.log(searchWord("aa, bb, cc, dd, aa", "aa"));
console.log(searchWord("sunshine", "sun"));
