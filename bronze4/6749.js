// Next in line (6749)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const youngest = Number(input[0]);
const middle = Number(input[1]);

console.log(middle + middle - youngest);
