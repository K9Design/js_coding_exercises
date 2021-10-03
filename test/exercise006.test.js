const {
  sumMultiples,
  areWeCovered,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix
} = require("../challenges/exercise006");


describe("createMatrix - This function should receive a number and return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays.", () => {

  test("check for parameter throw", () => {
    expect(() => createMatrix({}, "fail") ).toThrow("argument as a number is required");
    expect(() => createMatrix([], "fail") ).toThrow("argument as a number is required");
    expect(() => createMatrix(null, "fail") ).toThrow("argument as a number is required");

    expect(() => createMatrix(7, 7) ).toThrow("second argument as a string is required");
    expect(() => createMatrix(7, {}) ).toThrow("second argument as a string is required");
    expect(() => createMatrix(7, []) ).toThrow("second argument as a string is required");
    expect(() => createMatrix(7, null) ).toThrow("second argument as a string is required");
  });

  test("matrix of 1-3 'o' ", () => {
    expect(createMatrix(1,"o")).toEqual([["o"]]);
    expect(createMatrix(2,"o")).toEqual([["o","o"],["o","o"]]);
    expect(createMatrix(3,"o")).toEqual([["o","o","o"],["o","o","o"],["o","o","o"]]);
  });

});



describe("isItPrime - This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {

  test("check for parameter throw", () => {
    expect(() => isItPrime("fail") ).toThrow("argument as a number is required");
    expect(() => isItPrime({}) ).toThrow("argument as a number is required");
    expect(() => isItPrime([]) ).toThrow("argument as a number is required");
    expect(() => isItPrime(null) ).toThrow("argument as a number is required");
  });

  test("all true", () => {
    expect(isItPrime(101)).toBe(true);
    expect(isItPrime(23)).toBe(true);
    expect(isItPrime(102233)).toBe(true);
  });

  test("all false", () => {
    expect(isItPrime(22)).toBe(false);
    expect(isItPrime(100)).toBe(false);
    expect(isItPrime(54)).toBe(false);
  });

});



describe("getComplementaryDNA - return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of ACTG would have a complementary DNA string of TGAC", () => {
  test("check for parameter throw", () => {
    expect(() => getComplementaryDNA() ).toThrow("argument as a string is required");
    expect(() => getComplementaryDNA(1) ).toThrow("argument as a string is required");
    expect(() => getComplementaryDNA({}) ).toThrow("argument as a string is required");
    expect(() => getComplementaryDNA([]) ).toThrow("argument as a string is required");
    expect(() => getComplementaryDNA(null) ).toThrow("argument as a string is required");
    
    expect(() => getComplementaryDNA("GTAFFFEEERRR") ).toThrow("string contains non DNA characters");
    expect(() => getComplementaryDNA("ctgerefew") ).toThrow("string contains non DNA characters");
    
  });

  test("all correct", () => {
    expect(getComplementaryDNA("GTCA")).toBe("CAGT");
    expect(getComplementaryDNA("AAGGT")).toBe("TTCCA");
    expect(getComplementaryDNA("GTCC")).toBe("CAGG");
  });
  test("all correct - lowercase", () => {
    expect(getComplementaryDNA("gtca")).toBe("CAGT");
    expect(getComplementaryDNA("aaggt")).toBe("TTCCA");
    expect(getComplementaryDNA("gtcc")).toBe("CAGG");
  });

});


describe("isValidDNA - receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
  test("check for parameter throw", () => {
    expect(() => isValidDNA() ).toThrow("argument as a string is required");
    expect(() => isValidDNA(1) ).toThrow("argument as a string is required");
    expect(() => isValidDNA({}) ).toThrow("argument as a string is required");
    expect(() => isValidDNA([]) ).toThrow("argument as a string is required");
    expect(() => isValidDNA(null) ).toThrow("argument as a string is required");
  });

  test("empty", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("all correct", () => {
    expect(isValidDNA("GTCA")).toBe(true);
    expect(isValidDNA("AAGGT")).toBe(true);
    expect(isValidDNA("GTCC")).toBe(true);
  });

  test("some correct", () => {
    expect(isValidDNA("GTCBBG")).toBe(false);
    expect(isValidDNA("NMOPT")).toBe(false);
    expect(isValidDNA("WGTAO")).toBe(false);
  });

  test("none correct", () => {
    expect(isValidDNA("YUIO")).toBe(false);
    expect(isValidDNA("HJKL")).toBe(false);
    expect(isValidDNA("POIU")).toBe(false);
  });

});


describe("sumMultiples - return the sum of any numbers which are a multiple of 3 or 5", () => {
  test("check for parameter throw", () => {
    expect(() => sumMultiples() ).toThrow("arr is required");
    expect(() => sumMultiples("test") ).toThrow("argument as array is required");
    expect(() => sumMultiples(1) ).toThrow("argument as array is required");
    expect(() => sumMultiples({}) ).toThrow("argument as array is required");
  });

  test("a mix of integers", () => {
    expect(sumMultiples([5, 3])).toBe(8);
    expect(sumMultiples([5, 3, 5, 3, 2])).toBe(16);
    expect(sumMultiples([6, 6, 10, 10, 2])).toBe(32);
    expect(sumMultiples([1, 2, 4, 7, 11])).toBe(0);
  });

  test("where multible of both", () => {
    expect(sumMultiples([5, 15])).toBe(20);
    expect(sumMultiples([5, 3, 30, 15, 2])).toBe(53);
  });

  test("decimals", () => {
    expect(sumMultiples([5.55, 3.99])).toBe(0);
    expect(sumMultiples([5, 3, 5.1, 3.2, 2])).toBe(8);
  });

  test("empty or 0", () => {
    expect(sumMultiples([])).toBe(0);
    expect(sumMultiples([0, 0])).toBe(0);
    expect(sumMultiples([0, 2, 4])).toBe(0);
  });

});

describe("areWeCovered - 3 or more staff is in rota on specific day", () => {
  test("check for parameter throw", () => {
    expect(() => areWeCovered([],undefined) ).toThrow("day is required");
    expect(() => areWeCovered(undefined,"Wednesday") ).toThrow("staff is required");
  });

  test("each day false - no staff", () => {
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
    expect(areWeCovered([], "Sunday")).toBe(false);
  });

  test("each day false - staff with no days", () => {
    const staff = [
      {name: "Ivan", rota: []},
      {name: "Anja", rota: []},
      {name: "Kakekek", rota: []},
      {name: "Kim", rota: []},
    ]
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
  });

  test("each day true", () => {
    const staff = [
      {name: "Ivan", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
      {name: "Anja", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
      {name: "Kakekek", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
    ]

    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(true);
    expect(areWeCovered(staff, "Friday")).toBe(true);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
    expect(areWeCovered(staff, "Sunday")).toBe(true);
  });

  test("a mix of days, from 0 -> 5", () => {
    const staff = [
      {name: "Ivan", rota:    ["Monday"]},
      {name: "Anja", rota:    ["Monday", "Tuesday"]},
      {name: "Kakekek", rota: ["Monday", "Tuesday", "Wednesday"]},
      {name: "Bob", rota:     ["Monday", "Tuesday", "Wednesday", "Thursday"]},
      {name: "Yenna", rota:   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
    ]

    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(false);
  });


  
});





// isValidDNA,
// getComplementaryDNA,
// isItPrime,
// createMatrix,
// areWeCovered