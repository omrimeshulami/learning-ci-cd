export const minusFunction = (base: number, valuesToSum: number[]) => {
  return valuesToSum.reduce((pre, curr) => pre - curr, base);
};
