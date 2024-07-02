// 꼬마 정민 (11382)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sum = input[0]
  .split(' ')
  .map(BigInt)
  .reduce((acc, curr) => acc + curr)
  .toString();

console.log(sum);
