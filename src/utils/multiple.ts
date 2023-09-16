export const multipleFunction = (base: number, valuesToSum: number[]) => {
  return valuesToSum.reduce((pre, curr) => pre * curr, base);
};
