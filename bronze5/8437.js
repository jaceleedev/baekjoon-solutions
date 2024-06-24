// Julka (8437)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const apples = BigInt(input[0]);
const diff = BigInt(input[1]);

const natalia = (apples - diff) / 2n;
const klaudia = natalia + diff;

console.log(klaudia.toString());
console.log(natalia.toString());
