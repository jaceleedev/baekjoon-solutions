// 큰 수 (BIG) (14928)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = BigInt(input[0]);

console.log((n % BigInt(20000303)).toString());
