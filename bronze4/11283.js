// 한글 2 (11283)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const char = input[0];
const baseValue = '가'.charCodeAt(0);
const unicodeValue = char.charCodeAt(0);

const answer = unicodeValue - baseValue + 1;

console.log(answer);
