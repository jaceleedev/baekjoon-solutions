// 합 (8393)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

console.log((n * (n + 1)) / 2);
