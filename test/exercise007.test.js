const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB
} = require("../challenges/exercise007");


describe("hexToRGB - TThis function should transform the hex code into an RGB code in the format rgb(255,17,51)", () => {
  test("check for parameter throw", () => {
    expect(() => hexToRGB(1)).toThrow("hexStr is required");
    expect(() => hexToRGB({})).toThrow("hexStr is required");
    expect(() => hexToRGB([])).toThrow("hexStr is required");
    expect(() => hexToRGB(null)).toThrow("hexStr is required");
    expect(() => hexToRGB()).toThrow("hexStr is required");
  });

  test("converted", () => {
    expect(hexToRGB("000000")).toBe("rgb(0,0,0)");
    expect(hexToRGB("FFFFFF")).toBe("rgb(255,255,255)");
    expect(hexToRGB("9955cc")).toBe("rgb(153,85,204)");
  });

  test("converted shorthand", () => {
    expect(hexToRGB("000")).toBe("rgb(0,0,0)");
    expect(hexToRGB("FFF")).toBe("rgb(255,255,255)");
    expect(hexToRGB("95c")).toBe("rgb(153,85,204)");
  });
});




describe("getScreentimeAlertList - takes an array of user objects and their usage in minutes of various applications. The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 }, // y
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 }, //y
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-05-04",
          usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];

  test("check for parameter throw", () => {
    // YYYY-MM-DD
    expect(() => getScreentimeAlertList(undefined, "2019-06-13")).toThrow(
      "users is required"
    );
    expect(() => getScreentimeAlertList(users, undefined)).toThrow(
      "date is required"
    );
  });

  test("returns 1 or more users", () => {
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["Beth Smith"]);
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["Beth Smith", "Sam Jones"]);
  });

  test("returns empty - dates exist", () => {
    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
    expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([]);
  });

  test("returns empty - dates dont exist", () => {
    expect(getScreentimeAlertList(users, "2029-06-14")).toEqual([]);
    expect(getScreentimeAlertList(users, "2029-06-13")).toEqual([]);
  });
});



describe("sumDigits - This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range.", () => {
  test("check for parameter throw", () => {
    expect(() => sumDigits("fail")).toThrow("argument as a number is required");
    expect(() => sumDigits({})).toThrow("argument as a number is required");
    expect(() => sumDigits([])).toThrow("argument as a number is required");
    expect(() => sumDigits(null)).toThrow("argument as a number is required");
  });

  test("all true", () => {
    expect(sumDigits(101)).toBe(2);
    expect(sumDigits(23)).toBe(5);
    expect(sumDigits(102233)).toBe(11);
  });

  test("all true, decimal", () => {
    expect(sumDigits(22.5)).toBe(9);
    expect(sumDigits(100.1)).toBe(2);
    expect(sumDigits(54.01)).toBe(10);
  });
});

describe("createRange - This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.", () => {
  test("check for parameter throw", () => {
    expect(() => createRange("fail", null)).toThrow(
      "arguments as numbers is required"
    );
    expect(() => createRange(undefined, 1, 1)).toThrow("start is required");
    expect(() => createRange(1, undefined, 1)).toThrow("end is required");
  });

  test("all true", () => {
    expect(createRange(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(createRange(2, 12, 2)).toEqual([2, 4, 6, 8, 10, 12]);
  });

  test("all true, decimal", () => {
    expect(createRange(1, 9, 1.5)).toEqual([1, 2.5, 4, 5.5, 7, 8.5]);
    expect(createRange(2.5, 8.5, 2)).toEqual([2.5, 4.5, 6.5, 8.5]);
  });

  test("all true, nostep", () => {
    expect(createRange(1, 4)).toEqual([1, 2, 3, 4]);
  });
});
