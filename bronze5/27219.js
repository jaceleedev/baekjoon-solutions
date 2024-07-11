// Робинзон Крузо (27219)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const v = Math.floor(n / 5);
const i = n % 5;

console.log('V'.repeat(v) + 'I'.repeat(i));
