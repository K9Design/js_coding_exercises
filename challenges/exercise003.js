function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squaredNums = [];
  if (nums.length === 0) {
    return [];
  } else {
    nums.forEach((item) => squaredNums.push(item * item));
  }
  return squaredNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  let camelBackWords = "";
  let index = 0;
  words.forEach(function (item) {
    // do what you need to do with item and index
    let word = item.toLowerCase();
    if (index == 0) {
      camelBackWords += word;
    } else {
      camelBackWords += word.replace(/^\w/, (c) => c.toUpperCase());
    }
    index += 1;
  });

  return camelBackWords;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let totalSubjects = 0;
  people.forEach((person) => (totalSubjects += person.subjects.length));

  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  return menu.some((dish) => dish.ingredients.indexOf(ingredient) > -1);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  var duplicateList = [];
  arr1.some((n1) =>
    arr2.some((n2) => {
      if (n1 === n2) {
        if (duplicateList.length == 0 || !duplicateList.some((n) => n === n1) ) {
          duplicateList.push(n1);
        }
      }
    })
  );
  duplicateList.sort();
  return duplicateList;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
