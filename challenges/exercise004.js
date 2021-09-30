
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
  for (let i=0; i < nums.length; i++) {
    if (nums[i] < 1) smallNumsArray.push(nums[i]);
  }
  return smallNumsArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesResults = [];
  for (let i=0; i < names.length; i++) {
    if (names[i].substr(0,char.length) == char) namesResults.push(names[i]);
  }
  return namesResults;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let wordsResults = [];
  for (let i=0; i < words.length; i++) {
    if (words[i].substr(0,3) == "to ") wordsResults.push(words[i]);
  }
  return wordsResults;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numResults = [];
  for (let i=0; i < nums.length; i++) {
    if (nums[i] / Math.round(nums[i]) == 1) numResults.push(nums[i]);
  }
  return numResults;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cityResults = [];
  for (let i=0; i < users.length; i++) {
    cityResults.push(users[i].data.city.displayName);
  }
  return cityResults;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numResults = [];
  for (let i=0; i < nums.length; i++) {
    numResults.push( roundNumberWithDecimals(Math.sqrt(nums[i]),2) );
  }
  return numResults;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let wordsResults = [];
  for (let i=0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().indexOf( str.toLowerCase()) > -1 ) wordsResults.push(sentences[i]);
  }
  return wordsResults;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let numResults = [];
  for (let i=0; i < triangles.length; i++) {
    let highestNumber = 0;
    for (let j=0; j < triangles[i].length; j++) {
      if (triangles[i][j] > highestNumber) highestNumber = triangles[i][j];
    }
    numResults.push(highestNumber);
  }
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
