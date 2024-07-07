// Multiply (22193)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = BigInt(input[1]);
const b = BigInt(input[2]);

console.log((a * b).toString());
