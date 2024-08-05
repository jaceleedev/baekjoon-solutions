// 운동장 한 바퀴 (16486)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const d1 = Number(input[0]);
const d2 = Number(input[1]);

console.log(d1 * 2 + d2 * Math.PI * 2);
