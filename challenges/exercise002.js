function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return people === 0 ? 0 : Math.ceil(people / 40);
}

function filterBySheep(item) {
  return item.toLowerCase() == "sheep" ? true : false;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  return arr.filter(filterBySheep).length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let postcode = person.address.postCode;
  return postcode.charAt(0) === "M" && !isNaN(postcode.charAt(1));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
