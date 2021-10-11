function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return people === 0 ? 0 : Math.ceil(people / 40);
}

function filterBySheep(item) {
  return item.toLowerCase() === "sheep";
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  return arr.filter(filterBySheep).length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return person.address.postCode.charAt(0) === "M" && !isNaN(person.address.postCode.charAt(1));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
