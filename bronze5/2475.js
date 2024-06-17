// 검증수 (2475)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numbers = input[0].split(' ').map(Number);

const sum = numbers.reduce((acc, curr) => acc + curr ** 2, 0);

console.log(sum % 10);
