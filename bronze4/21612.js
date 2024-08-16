// Boiling Water (21612)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const b = Number(input[0]);
const p = 5 * b - 400;

console.log(p);
console.log(p < 100 ? 1 : p > 100 ? -1 : 0);
