const {
  sum,
  isNull,
  checkValue,
  createUser,
  fetchUser,
} = require("../functions");
describe("Sum Function", () => {
  it("should add 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("should add 2 + 2 != 5", () => {
    expect(sum(2, 2)).not.toBe(5);
  });
});

// Check if the value is null
describe("Null Function", () => {
  it("should be null", () => {
    expect(isNull()).toBeNull();
  });
});

// Check if the value is false
describe("Check value function", () => {
  it("should be falsy", () => {
    expect(checkValue(0)).toBeFalsy();
  });
});

describe("createUser Function", () => {
  it("should be a user with the name Abraham Ugbeshe and age 19 (object)", () => {
    expect(createUser()).toEqual({ name: "Abraham Ugbeshe", age: 19 });
  });

  it("should contain dips in usernames", () => {
    const usernames = ["klefcodes", "sope", "dips", "reti"];
    expect(usernames).toContain("dips");
  });
});

// Working with async data
describe("fetchUser Function", () => {
  // Promis
  it("should fetch a user and the name should be Abraham Ugbeshe", () => {
    expect.assertions(1);
    return fetchUser().then((data) => {
      expect(data.name).toEqual("Abraham Ugbeshe");
    });
  });

  //   Async Await
  it("should fetch a user and the name should be Abraham Ugbeshe", async () => {
    expect.assertions(1);
    const data = await fetchUser();

    expect(data.name).toEqual("Abraham Ugbeshe");
  });
});
