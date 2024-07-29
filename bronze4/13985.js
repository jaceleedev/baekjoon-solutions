// Equality (13985)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const array = input[0].split(' ');
const a = Number(array[0]);
const b = Number(array[2]);
const c = Number(array[4]);

console.log(a + b === c ? 'YES' : 'NO');
