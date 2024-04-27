const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const result = input[0]
  .split(' ')
  .map(BigInt)
  .reduce((acc, cur) => acc + cur)
  .toString();

console.log(result);
