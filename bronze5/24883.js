// 자동완성 (24883)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const ch = input[0];

console.log(ch.toLowerCase() === 'n' ? 'Naver D2' : 'Naver Whale');
