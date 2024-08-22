// 計算 (Calculation) (24075)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

console.log(Math.max(a + b, a - b));
console.log(Math.min(a + b, a - b));
