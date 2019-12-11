export default function round(number: number, precision: number): number {
  return Math.round(+`${number}e${precision}`) / 10 ** precision;
}
