// 큰 수 A+B (10757)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(BigInt);

const sum = a + b;

console.log(sum.toString());
