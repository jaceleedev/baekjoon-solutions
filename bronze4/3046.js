// R2 (3046)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [r1, s] = input[0].split(' ').map(Number);

console.log(s * 2 - r1);
