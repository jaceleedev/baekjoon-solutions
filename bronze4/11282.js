// 한글 (11282)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const base = '가'.charCodeAt(0);
const unicodeValue = base + n - 1;

console.log(String.fromCharCode(unicodeValue));
