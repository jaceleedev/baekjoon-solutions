// 스위트콘 가격 구하기 (30030)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const b = Number(input[0]);

console.log((b / 110) * 100);
