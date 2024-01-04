const isTest = '__TEST__' in window;

export const mySlowFunction = (baseNumber: number = isTest ? 1 : 8): number => {
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  return result;
}
