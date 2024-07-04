// CAPS (15000)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const str = input[0];

console.log(str.toUpperCase());
