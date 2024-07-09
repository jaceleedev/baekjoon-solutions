// 코딩은 체육과목 입니다 (25314)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const result = 'long '.repeat(n / 4) + 'int';

console.log(result);
