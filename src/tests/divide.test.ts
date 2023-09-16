import { divideFunction } from "../utils/divide";

const POSITIVE_NUMBERS = [1, 4, 5];

const NEGATIVE_NUMBERS = [-1, -4, -5];

const BASE = 100;

describe("Divide function", () => {
  it("divide positive numbers", () => {
    const result = divideFunction(BASE, POSITIVE_NUMBERS);
    expect(result).toEqual(5);
  });

  it("divide negative numbers", () => {
    const result = divideFunction(BASE, NEGATIVE_NUMBERS);
    expect(result).toEqual(-5);
  });
});
