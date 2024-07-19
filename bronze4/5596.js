// 시험 점수 (5596)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const s = input[0].split(' ').reduce((acc, curr) => acc + Number(curr), 0);
const t = input[1].split(' ').reduce((acc, curr) => acc + Number(curr), 0);

console.log(s >= t ? s : t);
