import { minusFunction } from "../utils/minus";

const POSITIVE_NUMBERS = [10, 20, 30, 40];

const NEGATIVE_NUMBERS = [-10, -20, -30, -40];

const BASE = 10;

describe("Minus function", () => {
  it("subtract positive numbers", () => {
    const result = minusFunction(BASE, POSITIVE_NUMBERS);
    expect(result).toEqual(-90);
  });

  it("subtract negative numbers", () => {
    const result = minusFunction(BASE, NEGATIVE_NUMBERS);
    expect(result).toEqual(110);
  });

  it("subtract mixed numbers", () => {
    const result = minusFunction(BASE, [
      ...POSITIVE_NUMBERS,
      ...NEGATIVE_NUMBERS,
    ]);
    expect(result).toEqual(10);
  });
});
