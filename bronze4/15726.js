// 이칙연산 (15726)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

const value1 = Math.floor((a * b) / c);
const value2 = Math.floor((a / b) * c);

console.log(Math.max(value1, value2));
