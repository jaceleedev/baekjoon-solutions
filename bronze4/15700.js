// 타일 채우기 4 (15700)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(BigInt);

console.log(((n * m) / 2n).toString());
