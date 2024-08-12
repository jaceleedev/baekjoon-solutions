// Atrium (20353)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);

console.log(Math.sqrt(a) * 4);
