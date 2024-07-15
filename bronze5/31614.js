// 分 (Minutes) (31614)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const h = Number(input[0]);
const m = Number(input[1]);

console.log(h * 60 + m);
