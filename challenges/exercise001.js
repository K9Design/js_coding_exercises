function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  //// regex version
  return word.replace(/^\w/, (c) => c.toUpperCase());

  //// tutorial version
  //return word.substring(0, 1).toUpperCase()+word.substring(1, word.length);

  // which one is most readable?
  
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase()
}

// fairly accurate rounding algorithm
function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return roundNumber( originalPrice + ((originalPrice/100)*vatRate) , 2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return roundNumber( originalPrice - ((originalPrice/100)*reduction) , 2);
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  const midNum = str.length/2;
  const midNumFloored = Math.floor(midNum);
  if(midNum == midNumFloored) { // even
    return str.substring(midNum-1, midNum+1);
  }else{ // odd
    return str.substring(midNumFloored, midNumFloored+1);
  }
}

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return reverseString(word);
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  var reversedWords = [];
  words.forEach(word => reversedWords.push(reverseString(word)));
  return reversedWords
}

function filterByType(item) {
  if (item.type == "Linux") {
    return true
  }
  return false;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  return (users.filter(filterByType)).length
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total = 0;
  scores.forEach(score => total += score);
  return roundNumber(total/scores.length, 2)
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if(n%3 == 0 && n%5 == 0) return "fizzbuzz"
  if(n%3 == 0) return "fizz"
  if(n%5 == 0) return "buzz"
  return n
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
  simpleFizzBuzz
};
