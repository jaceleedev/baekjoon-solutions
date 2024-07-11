// 2 桁の整数 (Two-digit Integer) (27331)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = input[0];
const b = input[1];

console.log(a + b);
