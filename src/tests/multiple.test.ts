import { multipleFunction } from "../utils/multiple";

const POSITIVE_NUMBERS = [1, 2, 3, 4];

const NEGATIVE_NUMBERS = [-1, -2, -3, -4];

const BASE = 10;

describe("Multiple function", () => {
  it("multiple positive numbers", () => {
    const result = multipleFunction(BASE, POSITIVE_NUMBERS);
    expect(result).toEqual(240);
  });

  it("multiple negative numbers", () => {
    const result = multipleFunction(BASE, NEGATIVE_NUMBERS);
    expect(result).toEqual(240);
  });
});
