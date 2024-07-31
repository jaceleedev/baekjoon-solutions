// 베라의 패션 (15439)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

console.log(n ** 2 - n);
