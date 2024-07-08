// РАВЕНСТВО (24309)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = BigInt(input[0]);
const b = BigInt(input[1]);
const c = BigInt(input[2]);

console.log(((b - c) / a).toString());
