const a = {};
export function round(number, precision) {
  return Math.round(+`${number}e${precision}`) / 10 ** precision;
}
export { a };
