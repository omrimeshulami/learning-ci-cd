import { plusFunction } from "../utils/plus";

const POSITIVE_NUMBERS = [10, 20, 30, 40];

const NEGATIVE_NUMBERS = [-10, -20, -30, -40];

const BASE = 10;

describe("Plus function", () => {
  it("sum positive numbers", () => {
    const result = plusFunction(BASE, POSITIVE_NUMBERS);
    expect(result).toEqual(110);
  });

  it("sum negative numbers", () => {
    const result = plusFunction(BASE, NEGATIVE_NUMBERS);
    expect(result).toEqual(-90);
  });

  it("sum mixed numbers", () => {
    const result = plusFunction(BASE, [
      ...POSITIVE_NUMBERS,
      ...NEGATIVE_NUMBERS,
    ]);
    expect(result).toEqual(10);
  });
});
