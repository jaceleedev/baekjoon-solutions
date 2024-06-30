// ??! (10926)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const id = input[0];

console.log(id + '??!');
