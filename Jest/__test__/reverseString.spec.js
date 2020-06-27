const reverseString = require("../reverseString");

describe("Reverse String Function", () => {
  it("reverseString function exists", () => {
    expect(reverseString).toBeDefined();
  });

  it("String reverses", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  it("String reverses with uppercase", () => {
    expect(reverseString("Hello")).toEqual("olleh");
  });
});
