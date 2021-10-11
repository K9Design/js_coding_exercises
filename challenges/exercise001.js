function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.replace(/^\w/, (c) => c.toUpperCase());
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase();
}

function roundNumberWithDecimals(num, scale) {
  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    const arr = ("" + num).split("e");
    let sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return roundNumberWithDecimals(originalPrice + (originalPrice / 100) * vatRate, 2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return roundNumberWithDecimals(originalPrice - (originalPrice / 100) * reduction, 2);
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let midNum = str.length / 2;
  const midNumFloored = Math.floor(midNum);
  return (midNum =
    str.length / 2 == Math.floor(midNum)
      ? str.substring(midNum - 1, midNum + 1)
      : str.substring(midNumFloored, midNumFloored + 1));
}

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return reverseString(word);
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  return words.map((word) => reverseString(word));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  return users.filter((user) => user.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  const total = scores.reduce((prevScore, score) => prevScore + score);
  return roundNumberWithDecimals(total / scores.length, 2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz";
  if (n % 3 == 0) return "fizz";
  if (n % 5 == 0) return "buzz";
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
