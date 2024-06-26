// 사칙연산 (10869)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.trunc(a / b));
console.log(a % b);
