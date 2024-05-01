const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];
const n = Number(input[1]);

console.log(word.charAt(n - 1));
