function roundNumberWithDecimals(num, scale) {
  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(
      Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) +
      "e-" +
      scale
    );
  }
}

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNumsArray = [];
  nums.forEach((n) => {
    if (n < 1) smallNumsArray.push(n);
  });
  return smallNumsArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesResults = [];
  names.forEach((w) => {
    if (w.substr(0, char.length) == char) namesResults.push(w);
  });
  return namesResults;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let wordsResults = [];
  words.forEach((w) => {
    if (w.substr(0, 3) == "to ") wordsResults.push(w);
  });
  return wordsResults;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numResults = [];
  nums.forEach((n) => {
    if (n / Math.round(n) == 1) numResults.push(n);
  });
  return numResults;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cityResults = [];
  users.forEach((u) => {
    cityResults.push(u.data.city.displayName);
  });
  return cityResults;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numResults = [];
  nums.forEach((n) => {
    numResults.push( roundNumberWithDecimals( Math.sqrt(n) ,2) );
  });
  return numResults;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let wordsResults = [];
  sentences.forEach((w) => {
    if (w.toLowerCase().indexOf(str.toLowerCase()) > -1) wordsResults.push(w);
  });
  return wordsResults;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let numResults = [];
  triangles.forEach((arr) => {
    let highestNumber = 0;
    arr.forEach((n2) => {
      if (n2 > highestNumber) highestNumber = n2;
    });
    numResults.push(highestNumber);
  });
  return numResults;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
