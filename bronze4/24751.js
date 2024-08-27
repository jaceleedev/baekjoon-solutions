// Betting (24751)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);

console.log(100 / a);
console.log(100 / (100 - a));
