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

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter((n) => n < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter((w) => w.substr(0, char.length) == char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return words.filter((w) => w.substr(0, 3) == "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter((n) => n / Math.round(n) == 1);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  return users.map((u) => u.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map((n) => roundNumberWithDecimals(Math.sqrt(n), 2));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  return sentences.filter((w) => w.toLowerCase().indexOf(str.toLowerCase()) > -1);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  return triangles.map((triangleArray) => triangleArray.reduce((prev, cur) => (cur > prev ? cur : prev), 0));
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
