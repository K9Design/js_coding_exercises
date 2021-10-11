function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map((num) => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    )
    .join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  return people.map((person) => person.subjects.length).reduce((prevCount, count) => prevCount + count);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  return menu.some((dish) => dish.ingredients.indexOf(ingredient) > -1);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  return [...new Set(arr1.filter((n) => arr2.some((n2) => n === n2)).sort())];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
