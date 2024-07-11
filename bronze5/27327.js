// 時間 (Hour) (27327)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = Number(input[0]);

console.log(x * 24);
