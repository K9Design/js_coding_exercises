const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let position = nums.indexOf(n);
  if(position === -1 || position === nums.length-1) return null; // number doesnt exist
  return nums[position+1];
};


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let object = {'0':0, '1':0};
  str.split("").forEach(s => object[s]++ )
  return object

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let reverse = "";
  String(n).split("").forEach(c => reverse = c + reverse)
  return Number(reverse)
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let sum = 0;
  arrs.forEach(a => a.forEach( n => sum += n));
  return sum
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if(arr.length < 2) return arr
  let ar = arr.slice(-1).concat(arr.slice(1, -1) , arr.slice(0,1));
  console.log(ar);
  return ar
  
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
