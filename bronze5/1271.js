// 엄청난 부자2 (1271)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, n] = input[0].split(' ').map(BigInt);

console.log((m / n).toString());
console.log((m % n).toString());
