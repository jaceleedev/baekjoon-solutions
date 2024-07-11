// 문자와 문자열 (27866)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const s = input[0];
const i = Number(input[1]);

console.log(s[i - 1]);
