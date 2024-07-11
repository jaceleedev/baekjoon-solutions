// 三方比較 (Three-Way Comparison) (27328)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a < b ? -1 : a > b ? 1 : 0);
