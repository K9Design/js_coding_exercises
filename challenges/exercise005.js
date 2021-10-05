const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let position = nums.indexOf(n);
  if (position === -1 || position === nums.length - 1) return null; // number doesnt exist
  return nums[position + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let object = { 0: 0, 1: 0 };
  str.split("").forEach((id) => object[id]++);
  return object;
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(
    String(n)
      .split("")
      .reduce((prev, char) => char + prev)
  );
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  return arrs
    .reduce((prev, arr) => prev.concat(arr))
    .reduce((prev, num) => prev + num);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.length < 2
    ? arr
    : arr.slice(-1).concat(arr.slice(1, -1), arr.slice(0, 1));
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  return Object.entries(haystack).some(
    (arr) => String(arr[1]).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let listObject = {};
  str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ")
    .forEach((s) => {
      if (listObject[s] === undefined) listObject[s] = 0;
      listObject[s]++;
    });
  return listObject;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
