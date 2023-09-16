export const divideFunction = (base: number, valuesToSum: number[]) => {
  return valuesToSum.reduce((pre, curr) => pre / curr, base);
};
