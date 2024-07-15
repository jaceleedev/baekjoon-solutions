// 火曜日 (Tuesday) (31611)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = Number(input[0]);

console.log(x % 7 === 2 ? 1 : 0);
