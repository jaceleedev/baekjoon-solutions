// 아스키 코드 (11654)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const ch = input[0];

console.log(ch.charCodeAt(0));
