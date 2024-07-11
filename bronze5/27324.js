// ゾロ目 (Same Numbers) (27324)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = input[0];

const tens = n[0];
const ones = n[1];

console.log(Number(tens === ones));
