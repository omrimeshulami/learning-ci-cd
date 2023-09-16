export const plusFunction = (base: number, valuesToSum: number[]) => {
  return valuesToSum.reduce((pre, curr) => pre + curr, base);
};
