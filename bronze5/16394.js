// 홍익대학교 (16394)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const year = Number(input[0]);

console.log(year - 1946);
