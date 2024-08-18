// 선린인터넷고등학교 교가 (21964)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const s = input[1];

console.log(s.slice(n - 5));
