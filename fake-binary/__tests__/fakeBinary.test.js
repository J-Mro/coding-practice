const { fakeBin } = require("../fakeBinary.js");
describe("fakeBin", () => {
  test("returns the correct digit when passed a string with a single digit", () => {
    expect(fakeBin("1")).toBe("0");
    expect(fakeBin("6")).toBe("1");
  });
  test("returns the correct digits when passed a string with 2 digits", () => {
    expect(fakeBin("12")).toBe("00");
    expect(fakeBin("67")).toBe("11");
  });
  test("returns correct digigts when passed a string with multiple digits", () => {
    expect(fakeBin("12673")).toBe("00110");
  });
});
