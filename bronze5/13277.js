// 큰 수 곱셈 (13277)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sum = input[0]
  .split(' ')
  .map(BigInt)
  .reduce((acc, curr) => acc * curr)
  .toString();

console.log(sum);
