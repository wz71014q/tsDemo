export function round(number: number, precision: number): number {
  return Math.round(+`${number}e${precision}`) / Math.pow(10, precision);
}